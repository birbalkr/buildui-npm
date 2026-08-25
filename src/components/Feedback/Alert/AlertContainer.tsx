import React from "react";
import { Alert } from "./Alert";
import { alertStore, type AlertItem } from "./alertStore";

export const AlertContainer = () => {
  const [alerts, setAlerts] = React.useState<AlertItem[]>([]);

  React.useEffect(() => {
    return alertStore.subscribe(setAlerts);
  }, []);

  return (
    <div
      className="
        fixed
        left-4
        top-4
        z-[99999]
        flex
        w-[380px]
        max-w-[calc(100vw-2rem)]
        flex-col
        gap-3
      "
    >
      {alerts.map((item) => (
        <Alert key={item.id} type={item.type}>
          {item.message}
        </Alert>
      ))}
    </div>
  );
};
