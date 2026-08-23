# BuildUI

A collection of reusable React + TypeScript + Tailwind CSS UI components.

## Installation

```bash
npm install @birbalkr/buildui react react-dom
```

## Usage

```tsx
import { Button } from '@birbalkr/buildui';

function App() {
  return (
    <div>
      <Button text="Click me" size="md" theme="primary" onClick={() => console.log("clicked")} />
    </div>
  );
}
```

No separate CSS import is needed — styles are bundled automatically.

## Components

### Button

| Prop     | Type                                   | Default     | Description                          |
|----------|-----------------------------------------|-------------|---------------------------------------|
| `text`   | `string`                                | —           | Button label (ignored if `children` passed) |
| `size`   | `"sm" \| "md" \| "lg"`                  | `"md"`      | Button size                          |
| `theme`  | `"primary" \| "secondary" \| "tertiary"`| `"primary"` | Color theme                          |
| `children` | `ReactNode`                           | —           | Overrides `text` if provided         |
| ...rest  | native `<button>` attributes            | —           | `onClick`, `disabled`, `className`, etc. |

```tsx
<Button text="Small" size="sm" />
<Button theme="secondary">Click me</Button>
<Button theme="tertiary" size="lg" onClick={() => alert("hi")} />
```

## License

MIT
