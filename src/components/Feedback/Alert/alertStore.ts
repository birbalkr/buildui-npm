import type { AlertProps } from "./Alert";

export type AlertType = NonNullable<AlertProps["type"]>;

export interface AlertItem {
  id: number;
  message: string;
  type: AlertType;
}

let alerts: AlertItem[] = [];
let nextId = 0;

const listeners = new Set<(alerts: AlertItem[]) => void>();

const notify = () => {
  listeners.forEach((listener) => {
    listener([...alerts]);
  });
};

export const alertStore = {
  subscribe(listener: (alerts: AlertItem[]) => void) {
    listeners.add(listener);

    return () => {
      listeners.delete(listener);
    };
  },

  add(message: string, type: AlertType) {
    const item: AlertItem = {
      id: ++nextId,
      message,
      type,
    };

    alerts = [...alerts, item];

    notify();

    setTimeout(() => {
      alertStore.remove(item.id);
    }, 3000);

    return item.id;
  },

  remove(id: number) {
    alerts = alerts.filter((alert) => alert.id !== id);

    notify();
  },

  clear() {
    alerts = [];

    notify();
  },
};

/**
 * Imperative Alert API
 */
export const alert = {
  success(message: string) {
    return alertStore.add(message, "success");
  },

  info(message: string) {
    return alertStore.add(message, "info");
  },

  warning(message: string) {
    return alertStore.add(message, "warning");
  },

  error(message: string) {
    return alertStore.add(message, "error");
  },

  danger(message: string) {
    return alertStore.add(message, "danger");
  },

  neutral(message: string) {
    return alertStore.add(message, "neutral");
  },

  loading(message: string) {
    return alertStore.add(message, "loading");
  },

  announcement(message: string) {
    return alertStore.add(message, "announcement");
  },

  update(message: string) {
    return alertStore.add(message, "update");
  },

  confirmation(message: string) {
    return alertStore.add(message, "confirmation");
  },

  offline(message: string) {
    return alertStore.add(message, "offline");
  },

  security(message: string) {
    return alertStore.add(message, "security");
  },

  maintenance(message: string) {
    return alertStore.add(message, "maintenance");
  },

  dismiss(id: number) {
    alertStore.remove(id);
  },

  clear() {
    alertStore.clear();
  },
};
