# BuildUI

A collection of reusable React + TypeScript + Tailwind CSS UI components.

## Installation

```bash
npm install @birbalkr/buildui react react-dom
```

## Usage

```tsx
import { Button, Input, Alert } from "@birbalkr/buildui";

function App() {
  return (
    <div>
      <Button
        text="Click me"
        size="md"
        theme="primary"
        onClick={() => console.log("clicked")}
      />

      <Input
        label="Username"
        placeholder="Enter your username"
        size="md"
      />

      <Alert
        text="Changes saved successfully!"
        type="success"
      />
    </div>
  );
}
```

No separate CSS import is needed — styles are bundled automatically.

## Components

### Button

| Prop       | Type                                     | Default     | Description                              |
| ---------- | ---------------------------------------- | ----------- | ---------------------------------------- |
| `text`     | `string`                                 | —           | Button label                             |
| `size`     | `"sm" \| "md" \| "lg"`                   | `"md"`      | Button size                              |
| `theme`    | `"primary" \| "secondary" \| "tertiary"` | `"primary"` | Color theme                              |
| `children` | `ReactNode`                              | —           | Overrides `text` if provided             |
| `...rest`  | Native `<button>` attributes             | —           | `onClick`, `disabled`, `className`, etc. |

```tsx
<Button text="Small" size="sm" />

<Button theme="secondary">
  Click me
</Button>

<Button
  theme="tertiary"
  size="lg"
  onClick={() => alert("hi")}
>
  Learn More
</Button>
```

### Input

| Prop      | Type                        | Default | Description                                      |
| --------- | --------------------------- | ------- | ------------------------------------------------ |
| `label`   | `string`                    | —       | Input label                                      |
| `size`    | `"sm" \| "md" \| "lg"`      | `"md"`  | Input size                                       |
| `...rest` | Native `<input>` attributes | —       | `type`, `placeholder`, `value`, `onChange`, etc. |

```tsx
<Input
  label="Email"
  type="email"
  placeholder="Enter your email"
/>

<Input
  label="Password"
  type="password"
  size="lg"
/>
```

### Alert

| Prop       | Type                                                                                                                                                                            | Default  | Description                       |
| ---------- | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- | -------- | --------------------------------- |
| `text`     | `string`                                                                                                                                                                        | —        | Alert message                     |
| `size`     | `"sm" \| "md" \| "lg"`                                                                                                                                                          | `"md"`   | Alert size                        |
| `type`     | `"success" \| "info" \| "warning" \| "error" \| "danger" \| "neutral" \| "loading" \| "announcement" \| "update" \| "confirmation" \| "offline" \| "security" \| "maintenance"` | `"info"` | Alert type                        |
| `children` | `ReactNode`                                                                                                                                                                     | —        | Additional JSX content            |
| `...rest`  | Native `<div>` attributes                                                                                                                                                       | —        | `className`, `id`, `aria-*`, etc. |

```tsx
<Alert
  text="Profile updated successfully!"
  type="success"
/>

<Alert
  text="Please check your connection."
  type="warning"
  size="sm"
/>

<Alert type="error">
  Something went wrong.
</Alert>
```

### Alert Notifications

```tsx
import {
  AlertContainer,
  alert,
} from "@birbalkr/buildui";
```

Add the container once:

```tsx
function App() {
  return (
    <>
      <YourApp />
      <AlertContainer />
    </>
  );
}
```

Then trigger notifications:

```tsx
alert.success("Saved successfully!");
alert.info("New update available!");
alert.warning("Please check your details.");
alert.error("Something went wrong.");
```

## 🌐 Live Demo

https://buildui-project.netlify.app/

## License

MIT
