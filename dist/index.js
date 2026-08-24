// #style-inject:#style-inject
function styleInject(css, { insertAt } = {}) {
  if (!css || typeof document === "undefined") return;
  const head = document.head || document.getElementsByTagName("head")[0];
  const style = document.createElement("style");
  style.type = "text/css";
  if (insertAt === "top") {
    if (head.firstChild) {
      head.insertBefore(style, head.firstChild);
    } else {
      head.appendChild(style);
    }
  } else {
    head.appendChild(style);
  }
  if (style.styleSheet) {
    style.styleSheet.cssText = css;
  } else {
    style.appendChild(document.createTextNode(css));
  }
}

// src/styles.compiled.css
styleInject('/*! tailwindcss v4.3.3 | MIT License | https://tailwindcss.com */\n@layer properties {\n  @supports (((-webkit-hyphens:none)) and (not (margin-trim:inline))) or ((-moz-orient:inline) and (not (color:rgb(from red r g b)))) {\n    *,\n    :before,\n    :after,\n    ::backdrop {\n      --tw-border-style:solid;\n      --tw-font-weight:initial;\n      --tw-outline-style:solid;\n      --tw-shadow:0 0 #0000;\n      --tw-shadow-color:initial;\n      --tw-shadow-alpha:100%;\n      --tw-inset-shadow:0 0 #0000;\n      --tw-inset-shadow-color:initial;\n      --tw-inset-shadow-alpha:100%;\n      --tw-ring-color:initial;\n      --tw-ring-shadow:0 0 #0000;\n      --tw-inset-ring-color:initial;\n      --tw-inset-ring-shadow:0 0 #0000;\n      --tw-ring-inset:initial;\n      --tw-ring-offset-width:0px;\n      --tw-ring-offset-color:#fff;\n      --tw-ring-offset-shadow:0 0 #0000;\n    }\n  }\n}\n@layer theme {\n  :root,\n  :host {\n    --font-sans:-apple-system,\n      BlinkMacSystemFont,\n      "Segoe UI",\n      Roboto,\n      "Helvetica Neue",\n      "Noto Sans",\n      Arial,\n      sans-serif,\n      "Apple Color Emoji",\n      "Segoe UI Emoji",\n      "Segoe UI Symbol",\n      "Noto Color Emoji";\n    --font-mono:ui-monospace,\n      SFMono-Regular,\n      Menlo,\n      Monaco,\n      Consolas,\n      "Liberation Mono",\n      "Courier New",\n      monospace;\n    --color-red-500:oklch(63.7% .237 25.331);\n    --color-red-700:oklch(50.5% .213 27.518);\n    --color-blue-100:oklch(93.2% .032 255.585);\n    --color-blue-500:oklch(62.3% .214 259.815);\n    --color-blue-600:oklch(54.6% .245 262.881);\n    --color-indigo-50:oklch(96.2% .018 272.314);\n    --color-indigo-600:oklch(51.1% .262 276.966);\n    --color-indigo-700:oklch(45.7% .24 277.023);\n    --color-gray-200:oklch(92.8% .006 264.531);\n    --color-gray-300:oklch(87.2% .01 258.338);\n    --color-gray-500:oklch(55.1% .027 264.364);\n    --color-gray-600:oklch(44.6% .03 256.802);\n    --color-gray-900:oklch(21% .034 264.665);\n    --color-white:#fff;\n    --spacing:.25rem;\n    --text-xs:.75rem;\n    --text-xs--line-height:calc(1 / .75);\n    --text-sm:.875rem;\n    --text-sm--line-height:calc(1.25 / .875);\n    --text-base:1rem;\n    --text-base--line-height:calc(1.5 / 1);\n    --font-weight-medium:500;\n    --radius-md:.375rem;\n    --default-transition-duration:.15s;\n    --default-transition-timing-function:cubic-bezier(.4, 0, .2, 1);\n    --default-font-family:var(--font-sans);\n    --default-mono-font-family:var(--font-mono);\n  }\n}\n@layer base {\n  *,\n  :after,\n  :before,\n  ::backdrop {\n    box-sizing: border-box;\n    border: 0 solid;\n    margin: 0;\n    padding: 0;\n  }\n  ::file-selector-button {\n    box-sizing: border-box;\n    border: 0 solid;\n    margin: 0;\n    padding: 0;\n  }\n  html,\n  :host {\n    -webkit-text-size-adjust: 100%;\n    tab-size: 4;\n    line-height: 1.5;\n    font-family: var(--default-font-family,-apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, "Helvetica Neue", "Noto Sans", Arial, sans-serif, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", "Noto Color Emoji");\n    font-feature-settings: var(--default-font-feature-settings,normal);\n    font-variation-settings: var(--default-font-variation-settings,normal);\n    -webkit-tap-highlight-color: transparent;\n  }\n  hr {\n    height: 0;\n    color: inherit;\n    border-top-width: 1px;\n  }\n  abbr:where([title]) {\n    -webkit-text-decoration: underline dotted;\n    text-decoration: underline dotted;\n  }\n  h1,\n  h2,\n  h3,\n  h4,\n  h5,\n  h6 {\n    font-size: inherit;\n    font-weight: inherit;\n  }\n  a {\n    color: inherit;\n    -webkit-text-decoration: inherit;\n    -webkit-text-decoration: inherit;\n    -webkit-text-decoration: inherit;\n    text-decoration: inherit;\n  }\n  b,\n  strong {\n    font-weight: bolder;\n  }\n  code,\n  kbd,\n  samp,\n  pre {\n    font-family: var(--default-mono-font-family,ui-monospace, SFMono-Regular, Menlo, Monaco, Consolas, "Liberation Mono", "Courier New", monospace);\n    font-feature-settings: var(--default-mono-font-feature-settings,normal);\n    font-variation-settings: var(--default-mono-font-variation-settings,normal);\n    font-size: 1em;\n  }\n  small {\n    font-size: 80%;\n  }\n  sub,\n  sup {\n    vertical-align: baseline;\n    font-size: 75%;\n    line-height: 0;\n    position: relative;\n  }\n  sub {\n    bottom: -.25em;\n  }\n  sup {\n    top: -.5em;\n  }\n  table {\n    text-indent: 0;\n    border-color: inherit;\n    border-collapse: collapse;\n  }\n  :-moz-focusring:where(:not(iframe)) {\n    outline: auto;\n  }\n  progress {\n    vertical-align: baseline;\n  }\n  summary {\n    display: list-item;\n  }\n  ol,\n  ul,\n  menu {\n    list-style: none;\n  }\n  img,\n  svg,\n  video,\n  canvas,\n  audio,\n  iframe,\n  embed,\n  object {\n    vertical-align: middle;\n    display: block;\n  }\n  img,\n  video {\n    max-width: 100%;\n    height: auto;\n  }\n  button,\n  input,\n  select,\n  optgroup,\n  textarea {\n    font: inherit;\n    font-feature-settings: inherit;\n    font-variation-settings: inherit;\n    letter-spacing: inherit;\n    color: inherit;\n    opacity: 1;\n    background-color: #0000;\n    border-radius: 0;\n  }\n  ::file-selector-button {\n    font: inherit;\n    font-feature-settings: inherit;\n    font-variation-settings: inherit;\n    letter-spacing: inherit;\n    color: inherit;\n    opacity: 1;\n    background-color: #0000;\n    border-radius: 0;\n  }\n  :where(select:is([multiple], [size])) optgroup {\n    font-weight: bolder;\n  }\n  :where(select:is([multiple], [size])) optgroup option {\n    padding-inline-start: 20px;\n  }\n  ::file-selector-button {\n    margin-inline-end: 4px;\n  }\n  ::placeholder {\n    opacity: 1;\n  }\n  @supports (not ((-webkit-appearance:-apple-pay-button))) or (contain-intrinsic-size:1px) {\n    ::placeholder {\n      color: currentColor;\n    }\n    @supports (color:color-mix(in lab, red, red)) {\n      ::placeholder {\n        color: color-mix(in oklab, currentcolor 50%, transparent);\n      }\n    }\n  }\n  textarea {\n    resize: vertical;\n  }\n  ::-webkit-search-decoration {\n    -webkit-appearance: none;\n  }\n  ::-webkit-date-and-time-value {\n    min-height: 1lh;\n    text-align: inherit;\n  }\n  ::-webkit-datetime-edit {\n    display: inline-flex;\n  }\n  ::-webkit-datetime-edit-fields-wrapper {\n    padding: 0;\n  }\n  ::-webkit-datetime-edit {\n    padding-block: 0;\n  }\n  ::-webkit-datetime-edit-year-field {\n    padding-block: 0;\n  }\n  ::-webkit-datetime-edit-month-field {\n    padding-block: 0;\n  }\n  ::-webkit-datetime-edit-day-field {\n    padding-block: 0;\n  }\n  ::-webkit-datetime-edit-hour-field {\n    padding-block: 0;\n  }\n  ::-webkit-datetime-edit-minute-field {\n    padding-block: 0;\n  }\n  ::-webkit-datetime-edit-second-field {\n    padding-block: 0;\n  }\n  ::-webkit-datetime-edit-millisecond-field {\n    padding-block: 0;\n  }\n  ::-webkit-datetime-edit-meridiem-field {\n    padding-block: 0;\n  }\n  ::-webkit-calendar-picker-indicator {\n    line-height: 1;\n  }\n  :-moz-ui-invalid {\n    box-shadow: none;\n  }\n  button,\n  input:where([type=button], [type=reset], [type=submit]) {\n    appearance: button;\n  }\n  ::file-selector-button {\n    appearance: button;\n  }\n  ::-webkit-inner-spin-button {\n    height: auto;\n  }\n  ::-webkit-outer-spin-button {\n    height: auto;\n  }\n  [hidden]:where(:not([hidden=until-found])) {\n    display: none !important;\n  }\n}\n@layer components;\n@layer utilities {\n  .mt-1 {\n    margin-top: var(--spacing);\n  }\n  .mb-1 {\n    margin-bottom: var(--spacing);\n  }\n  .flex {\n    display: flex;\n  }\n  .inline-flex {\n    display: inline-flex;\n  }\n  .table {\n    display: table;\n  }\n  .border-collapse {\n    border-collapse: collapse;\n  }\n  .resize {\n    resize: both;\n  }\n  .flex-col {\n    flex-direction: column;\n  }\n  .items-center {\n    align-items: center;\n  }\n  .justify-center {\n    justify-content: center;\n  }\n  .rounded-md {\n    border-radius: var(--radius-md);\n  }\n  .border {\n    border-style: var(--tw-border-style);\n    border-width: 1px;\n  }\n  .border-gray-300 {\n    border-color: var(--color-gray-300);\n  }\n  .border-red-500 {\n    border-color: var(--color-red-500);\n  }\n  .bg-blue-500 {\n    background-color: var(--color-blue-500);\n  }\n  .bg-gray-200 {\n    background-color: var(--color-gray-200);\n  }\n  .bg-gray-500 {\n    background-color: var(--color-gray-500);\n  }\n  .bg-indigo-600 {\n    background-color: var(--color-indigo-600);\n  }\n  .bg-red-700 {\n    background-color: var(--color-red-700);\n  }\n  .bg-transparent {\n    background-color: #0000;\n  }\n  .px-2 {\n    padding-inline: calc(var(--spacing) * 2);\n  }\n  .px-4 {\n    padding-inline: calc(var(--spacing) * 4);\n  }\n  .px-6 {\n    padding-inline: calc(var(--spacing) * 6);\n  }\n  .py-1 {\n    padding-block: var(--spacing);\n  }\n  .py-2 {\n    padding-block: calc(var(--spacing) * 2);\n  }\n  .py-3 {\n    padding-block: calc(var(--spacing) * 3);\n  }\n  .text-base {\n    font-size: var(--text-base);\n    line-height: var(--tw-leading,var(--text-base--line-height));\n  }\n  .text-sm {\n    font-size: var(--text-sm);\n    line-height: var(--tw-leading,var(--text-sm--line-height));\n  }\n  .text-xs {\n    font-size: var(--text-xs);\n    line-height: var(--tw-leading,var(--text-xs--line-height));\n  }\n  .font-medium {\n    --tw-font-weight:var(--font-weight-medium);\n    font-weight: var(--font-weight-medium);\n  }\n  .text-blue-500 {\n    color: var(--color-blue-500);\n  }\n  .text-gray-900 {\n    color: var(--color-gray-900);\n  }\n  .text-indigo-600 {\n    color: var(--color-indigo-600);\n  }\n  .text-red-500 {\n    color: var(--color-red-500);\n  }\n  .text-white {\n    color: var(--color-white);\n  }\n  .underline {\n    text-decoration-line: underline;\n  }\n  .outline {\n    outline-style: var(--tw-outline-style);\n    outline-width: 1px;\n  }\n  .transition-colors {\n    transition-property:\n      color,\n      background-color,\n      border-color,\n      outline-color,\n      text-decoration-color,\n      fill,\n      stroke,\n      --tw-gradient-from,\n      --tw-gradient-via,\n      --tw-gradient-to;\n    transition-timing-function: var(--tw-ease,var(--default-transition-timing-function));\n    transition-duration: var(--tw-duration,var(--default-transition-duration));\n  }\n  @media (hover: hover) {\n    .hover\\:bg-blue-100:hover {\n      background-color: var(--color-blue-100);\n    }\n    .hover\\:bg-blue-600:hover {\n      background-color: var(--color-blue-600);\n    }\n    .hover\\:bg-gray-600:hover {\n      background-color: var(--color-gray-600);\n    }\n  }\n  .focus\\:ring-2:focus {\n    --tw-ring-shadow:var(--tw-ring-inset,) 0 0 0 calc(2px + var(--tw-ring-offset-width)) var(--tw-ring-color,currentcolor);\n    box-shadow:\n      var(--tw-inset-shadow),\n      var(--tw-inset-ring-shadow),\n      var(--tw-ring-offset-shadow),\n      var(--tw-ring-shadow),\n      var(--tw-shadow);\n  }\n  .focus\\:ring-blue-500:focus {\n    --tw-ring-color:var(--color-blue-500);\n  }\n  .focus\\:outline-none:focus {\n    --tw-outline-style:none;\n    outline-style: none;\n  }\n}\n@property --tw-border-style { syntax:"*";inherits:false;initial-value:solid }\n@property --tw-font-weight { syntax:"*";inherits:false }\n@property --tw-outline-style { syntax:"*";inherits:false;initial-value:solid }\n@property --tw-shadow { syntax:"*";inherits:false;initial-value:0 0 #0000 }\n@property --tw-shadow-color { syntax:"*";inherits:false }\n@property --tw-shadow-alpha { syntax:"<percentage>";inherits:false;initial-value:100% }\n@property --tw-inset-shadow { syntax:"*";inherits:false;initial-value:0 0 #0000 }\n@property --tw-inset-shadow-color { syntax:"*";inherits:false }\n@property --tw-inset-shadow-alpha { syntax:"<percentage>";inherits:false;initial-value:100% }\n@property --tw-ring-color { syntax:"*";inherits:false }\n@property --tw-ring-shadow { syntax:"*";inherits:false;initial-value:0 0 #0000 }\n@property --tw-inset-ring-color { syntax:"*";inherits:false }\n@property --tw-inset-ring-shadow { syntax:"*";inherits:false;initial-value:0 0 #0000 }\n@property --tw-ring-inset { syntax:"*";inherits:false }\n@property --tw-ring-offset-width { syntax:"<length>";inherits:false;initial-value:0 }\n@property --tw-ring-offset-color { syntax:"*";inherits:false;initial-value:#fff }\n@property --tw-ring-offset-shadow { syntax:"*";inherits:false;initial-value:0 0 #0000 }\n');

// src/components/Button/Button.tsx
import { jsx } from "react/jsx-runtime";
var sizeClasses = {
  sm: "px-2 py-1 text-xs",
  md: "px-4 py-2 text-sm",
  lg: "px-6 py-3 text-base"
};
var themeClasses = {
  primary: "bg-blue-500 text-white hover:bg-blue-600",
  secondary: "bg-gray-500 text-white hover:bg-gray-600",
  tertiary: "bg-transparent text-blue-500 hover:bg-blue-100"
};
var Button = ({
  text,
  theme = "primary",
  size = "md",
  className = "",
  children,
  ...props
}) => {
  return /* @__PURE__ */ jsx(
    "button",
    {
      className: `rounded-md ${sizeClasses[size]} ${themeClasses[theme]} ${className}`,
      ...props,
      children: children ?? text
    }
  );
};

// src/components/Form/Input/Input.tsx
import { jsx as jsx2, jsxs } from "react/jsx-runtime";
var sizeClasses2 = {
  sm: "px-2 py-1 text-xs",
  md: "px-4 py-2 text-sm",
  lg: "px-6 py-3 text-base"
};
var Input = ({
  label,
  error,
  size = "md",
  className = "",
  id,
  ...props
}) => {
  return /* @__PURE__ */ jsxs("div", { className: "flex flex-col", children: [
    label && /* @__PURE__ */ jsx2("label", { htmlFor: id, className: "mb-1 font-medium", children: label }),
    /* @__PURE__ */ jsx2(
      "input",
      {
        id,
        placeholder: `Enter your ${props.placeholder || label}`,
        className: `rounded-md border ${sizeClasses2[size]} ${error ? "border-red-500" : "border-gray-300"} focus:outline-none focus:ring-2 focus:ring-blue-500 ${className}`,
        ...props
      }
    ),
    error && /* @__PURE__ */ jsx2("span", { className: "mt-1 text-sm text-red-500", children: error })
  ] });
};
export {
  Button,
  Input
};
//# sourceMappingURL=index.js.map