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
styleInject('/*! tailwindcss v4.3.3 | MIT License | https://tailwindcss.com */\n@layer properties {\n  @supports (((-webkit-hyphens:none)) and (not (margin-trim:inline))) or ((-moz-orient:inline) and (not (color:rgb(from red r g b)))) {\n    *,\n    :before,\n    :after,\n    ::backdrop {\n      --tw-rotate-x:initial;\n      --tw-rotate-y:initial;\n      --tw-rotate-z:initial;\n      --tw-skew-x:initial;\n      --tw-skew-y:initial;\n      --tw-border-style:solid;\n      --tw-font-weight:initial;\n      --tw-outline-style:solid;\n    }\n  }\n}\n@layer theme {\n  :root,\n  :host {\n    --font-sans:-apple-system,\n      BlinkMacSystemFont,\n      "Segoe UI",\n      Roboto,\n      "Helvetica Neue",\n      "Noto Sans",\n      Arial,\n      sans-serif,\n      "Apple Color Emoji",\n      "Segoe UI Emoji",\n      "Segoe UI Symbol",\n      "Noto Color Emoji";\n    --font-mono:ui-monospace,\n      SFMono-Regular,\n      Menlo,\n      Monaco,\n      Consolas,\n      "Liberation Mono",\n      "Courier New",\n      monospace;\n    --color-red-50:oklch(97.1% .013 17.38);\n    --color-red-100:oklch(93.6% .032 17.717);\n    --color-red-200:oklch(88.5% .062 18.334);\n    --color-red-300:oklch(80.8% .114 19.571);\n    --color-red-500:oklch(63.7% .237 25.331);\n    --color-red-600:oklch(57.7% .245 27.325);\n    --color-red-700:oklch(50.5% .213 27.518);\n    --color-red-800:oklch(44.4% .177 26.899);\n    --color-red-900:oklch(39.6% .141 25.723);\n    --color-orange-50:oklch(98% .016 73.684);\n    --color-orange-100:oklch(95.4% .038 75.164);\n    --color-orange-200:oklch(90.1% .076 70.697);\n    --color-orange-500:oklch(70.5% .213 47.604);\n    --color-orange-600:oklch(64.6% .222 41.116);\n    --color-orange-800:oklch(47% .157 37.304);\n    --color-yellow-50:oklch(98.7% .026 102.212);\n    --color-yellow-100:oklch(97.3% .071 103.193);\n    --color-yellow-200:oklch(94.5% .129 101.54);\n    --color-yellow-500:oklch(79.5% .184 86.047);\n    --color-yellow-600:oklch(68.1% .162 75.834);\n    --color-yellow-800:oklch(47.6% .114 61.907);\n    --color-yellow-900:oklch(42.1% .095 57.708);\n    --color-green-50:oklch(98.2% .018 155.826);\n    --color-green-100:oklch(96.2% .044 156.743);\n    --color-green-200:oklch(92.5% .084 155.995);\n    --color-green-500:oklch(72.3% .219 149.579);\n    --color-green-600:oklch(62.7% .194 149.214);\n    --color-green-800:oklch(44.8% .119 151.328);\n    --color-cyan-100:oklch(95.6% .045 203.388);\n    --color-cyan-200:oklch(91.7% .08 205.041);\n    --color-cyan-800:oklch(45% .085 224.283);\n    --color-blue-50:oklch(97% .014 254.604);\n    --color-blue-100:oklch(93.2% .032 255.585);\n    --color-blue-200:oklch(88.2% .059 254.128);\n    --color-blue-500:oklch(62.3% .214 259.815);\n    --color-blue-600:oklch(54.6% .245 262.881);\n    --color-blue-800:oklch(42.4% .199 265.638);\n    --color-indigo-50:oklch(96.2% .018 272.314);\n    --color-indigo-100:oklch(93% .034 272.788);\n    --color-indigo-200:oklch(87% .065 274.039);\n    --color-indigo-500:oklch(58.5% .233 277.117);\n    --color-indigo-600:oklch(51.1% .262 276.966);\n    --color-indigo-800:oklch(39.8% .195 277.366);\n    --color-purple-50:oklch(97.7% .014 308.299);\n    --color-purple-100:oklch(94.6% .033 307.174);\n    --color-purple-200:oklch(90.2% .063 306.703);\n    --color-purple-500:oklch(62.7% .265 303.9);\n    --color-purple-600:oklch(55.8% .288 302.321);\n    --color-purple-800:oklch(43.8% .218 303.724);\n    --color-pink-50:oklch(97.1% .014 343.198);\n    --color-pink-100:oklch(94.8% .028 342.258);\n    --color-pink-200:oklch(89.9% .061 343.231);\n    --color-pink-500:oklch(65.6% .241 354.308);\n    --color-pink-600:oklch(59.2% .249 .584);\n    --color-pink-800:oklch(45.9% .187 3.815);\n    --color-slate-50:oklch(98.4% .003 247.858);\n    --color-slate-100:oklch(96.8% .007 247.896);\n    --color-slate-200:oklch(92.9% .013 255.508);\n    --color-slate-500:oklch(55.4% .046 257.417);\n    --color-slate-600:oklch(44.6% .043 257.281);\n    --color-slate-800:oklch(27.9% .041 260.031);\n    --color-gray-50:oklch(98.5% .002 247.839);\n    --color-gray-100:oklch(96.7% .003 264.542);\n    --color-gray-200:oklch(92.8% .006 264.531);\n    --color-gray-300:oklch(87.2% .01 258.338);\n    --color-gray-400:oklch(70.7% .022 261.325);\n    --color-gray-500:oklch(55.1% .027 264.364);\n    --color-gray-600:oklch(44.6% .03 256.802);\n    --color-gray-700:oklch(37.3% .034 259.733);\n    --color-gray-800:oklch(27.8% .033 256.848);\n    --color-gray-900:oklch(21% .034 264.665);\n    --color-white:#fff;\n    --spacing:.25rem;\n    --text-xs:.75rem;\n    --text-xs--line-height:calc(1 / .75);\n    --text-sm:.875rem;\n    --text-sm--line-height:calc(1.25 / .875);\n    --text-base:1rem;\n    --text-base--line-height:calc(1.5 / 1);\n    --font-weight-medium:500;\n    --font-weight-semibold:600;\n    --font-weight-bold:700;\n    --radius-md:.375rem;\n    --radius-lg:.5rem;\n    --animate-spin:spin 1s linear infinite;\n    --default-transition-duration:.15s;\n    --default-transition-timing-function:cubic-bezier(.4, 0, .2, 1);\n    --default-font-family:var(--font-sans);\n    --default-mono-font-family:var(--font-mono);\n  }\n}\n@layer base {\n  *,\n  :after,\n  :before,\n  ::backdrop {\n    box-sizing: border-box;\n    border: 0 solid;\n    margin: 0;\n    padding: 0;\n  }\n  ::file-selector-button {\n    box-sizing: border-box;\n    border: 0 solid;\n    margin: 0;\n    padding: 0;\n  }\n  html,\n  :host {\n    -webkit-text-size-adjust: 100%;\n    tab-size: 4;\n    line-height: 1.5;\n    font-family: var(--default-font-family,-apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, "Helvetica Neue", "Noto Sans", Arial, sans-serif, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", "Noto Color Emoji");\n    font-feature-settings: var(--default-font-feature-settings,normal);\n    font-variation-settings: var(--default-font-variation-settings,normal);\n    -webkit-tap-highlight-color: transparent;\n  }\n  hr {\n    height: 0;\n    color: inherit;\n    border-top-width: 1px;\n  }\n  abbr:where([title]) {\n    -webkit-text-decoration: underline dotted;\n    text-decoration: underline dotted;\n  }\n  h1,\n  h2,\n  h3,\n  h4,\n  h5,\n  h6 {\n    font-size: inherit;\n    font-weight: inherit;\n  }\n  a {\n    color: inherit;\n    -webkit-text-decoration: inherit;\n    -webkit-text-decoration: inherit;\n    -webkit-text-decoration: inherit;\n    text-decoration: inherit;\n  }\n  b,\n  strong {\n    font-weight: bolder;\n  }\n  code,\n  kbd,\n  samp,\n  pre {\n    font-family: var(--default-mono-font-family,ui-monospace, SFMono-Regular, Menlo, Monaco, Consolas, "Liberation Mono", "Courier New", monospace);\n    font-feature-settings: var(--default-mono-font-feature-settings,normal);\n    font-variation-settings: var(--default-mono-font-variation-settings,normal);\n    font-size: 1em;\n  }\n  small {\n    font-size: 80%;\n  }\n  sub,\n  sup {\n    vertical-align: baseline;\n    font-size: 75%;\n    line-height: 0;\n    position: relative;\n  }\n  sub {\n    bottom: -.25em;\n  }\n  sup {\n    top: -.5em;\n  }\n  table {\n    text-indent: 0;\n    border-color: inherit;\n    border-collapse: collapse;\n  }\n  :-moz-focusring:where(:not(iframe)) {\n    outline: auto;\n  }\n  progress {\n    vertical-align: baseline;\n  }\n  summary {\n    display: list-item;\n  }\n  ol,\n  ul,\n  menu {\n    list-style: none;\n  }\n  img,\n  svg,\n  video,\n  canvas,\n  audio,\n  iframe,\n  embed,\n  object {\n    vertical-align: middle;\n    display: block;\n  }\n  img,\n  video {\n    max-width: 100%;\n    height: auto;\n  }\n  button,\n  input,\n  select,\n  optgroup,\n  textarea {\n    font: inherit;\n    font-feature-settings: inherit;\n    font-variation-settings: inherit;\n    letter-spacing: inherit;\n    color: inherit;\n    opacity: 1;\n    background-color: #0000;\n    border-radius: 0;\n  }\n  ::file-selector-button {\n    font: inherit;\n    font-feature-settings: inherit;\n    font-variation-settings: inherit;\n    letter-spacing: inherit;\n    color: inherit;\n    opacity: 1;\n    background-color: #0000;\n    border-radius: 0;\n  }\n  :where(select:is([multiple], [size])) optgroup {\n    font-weight: bolder;\n  }\n  :where(select:is([multiple], [size])) optgroup option {\n    padding-inline-start: 20px;\n  }\n  ::file-selector-button {\n    margin-inline-end: 4px;\n  }\n  ::placeholder {\n    opacity: 1;\n  }\n  @supports (not ((-webkit-appearance:-apple-pay-button))) or (contain-intrinsic-size:1px) {\n    ::placeholder {\n      color: currentColor;\n    }\n    @supports (color:color-mix(in lab, red, red)) {\n      ::placeholder {\n        color: color-mix(in oklab, currentcolor 50%, transparent);\n      }\n    }\n  }\n  textarea {\n    resize: vertical;\n  }\n  ::-webkit-search-decoration {\n    -webkit-appearance: none;\n  }\n  ::-webkit-date-and-time-value {\n    min-height: 1lh;\n    text-align: inherit;\n  }\n  ::-webkit-datetime-edit {\n    display: inline-flex;\n  }\n  ::-webkit-datetime-edit-fields-wrapper {\n    padding: 0;\n  }\n  ::-webkit-datetime-edit {\n    padding-block: 0;\n  }\n  ::-webkit-datetime-edit-year-field {\n    padding-block: 0;\n  }\n  ::-webkit-datetime-edit-month-field {\n    padding-block: 0;\n  }\n  ::-webkit-datetime-edit-day-field {\n    padding-block: 0;\n  }\n  ::-webkit-datetime-edit-hour-field {\n    padding-block: 0;\n  }\n  ::-webkit-datetime-edit-minute-field {\n    padding-block: 0;\n  }\n  ::-webkit-datetime-edit-second-field {\n    padding-block: 0;\n  }\n  ::-webkit-datetime-edit-millisecond-field {\n    padding-block: 0;\n  }\n  ::-webkit-datetime-edit-meridiem-field {\n    padding-block: 0;\n  }\n  ::-webkit-calendar-picker-indicator {\n    line-height: 1;\n  }\n  :-moz-ui-invalid {\n    box-shadow: none;\n  }\n  button,\n  input:where([type=button], [type=reset], [type=submit]) {\n    appearance: button;\n  }\n  ::file-selector-button {\n    appearance: button;\n  }\n  ::-webkit-inner-spin-button {\n    height: auto;\n  }\n  ::-webkit-outer-spin-button {\n    height: auto;\n  }\n  [hidden]:where(:not([hidden=until-found])) {\n    display: none !important;\n  }\n}\n@layer components;\n@layer utilities {\n  .fixed {\n    position: fixed;\n  }\n  .top-4 {\n    top: calc(var(--spacing) * 4);\n  }\n  .left-4 {\n    left: calc(var(--spacing) * 4);\n  }\n  .z-\\[99999\\] {\n    z-index: 99999;\n  }\n  .mt-1 {\n    margin-top: var(--spacing);\n  }\n  .mb-1 {\n    margin-bottom: var(--spacing);\n  }\n  .flex {\n    display: flex;\n  }\n  .table {\n    display: table;\n  }\n  .w-\\[380px\\] {\n    width: 380px;\n  }\n  .w-full {\n    width: 100%;\n  }\n  .max-w-\\[calc\\(100vw-2rem\\)\\] {\n    max-width: calc(100vw - 2rem);\n  }\n  .flex-1 {\n    flex: 1;\n  }\n  .border-collapse {\n    border-collapse: collapse;\n  }\n  .transform {\n    transform: var(--tw-rotate-x,) var(--tw-rotate-y,) var(--tw-rotate-z,) var(--tw-skew-x,) var(--tw-skew-y,);\n  }\n  .resize {\n    resize: both;\n  }\n  .flex-col {\n    flex-direction: column;\n  }\n  .items-start {\n    align-items: flex-start;\n  }\n  .gap-3 {\n    gap: calc(var(--spacing) * 3);\n  }\n  .rounded-lg {\n    border-radius: var(--radius-lg);\n  }\n  .rounded-md {\n    border-radius: var(--radius-md);\n  }\n  .border {\n    border-style: var(--tw-border-style);\n    border-width: 1px;\n  }\n  .border-blue-500 {\n    border-color: var(--color-blue-500);\n  }\n  .border-gray-400 {\n    border-color: var(--color-gray-400);\n  }\n  .border-gray-500 {\n    border-color: var(--color-gray-500);\n  }\n  .border-green-500 {\n    border-color: var(--color-green-500);\n  }\n  .border-indigo-500 {\n    border-color: var(--color-indigo-500);\n  }\n  .border-orange-500 {\n    border-color: var(--color-orange-500);\n  }\n  .border-pink-500 {\n    border-color: var(--color-pink-500);\n  }\n  .border-purple-500 {\n    border-color: var(--color-purple-500);\n  }\n  .border-red-500 {\n    border-color: var(--color-red-500);\n  }\n  .border-red-700 {\n    border-color: var(--color-red-700);\n  }\n  .border-slate-500 {\n    border-color: var(--color-slate-500);\n  }\n  .border-yellow-500 {\n    border-color: var(--color-yellow-500);\n  }\n  .bg-blue-50 {\n    background-color: var(--color-blue-50);\n  }\n  .bg-blue-500 {\n    background-color: var(--color-blue-500);\n  }\n  .bg-gray-50 {\n    background-color: var(--color-gray-50);\n  }\n  .bg-gray-100 {\n    background-color: var(--color-gray-100);\n  }\n  .bg-gray-500 {\n    background-color: var(--color-gray-500);\n  }\n  .bg-green-50 {\n    background-color: var(--color-green-50);\n  }\n  .bg-indigo-50 {\n    background-color: var(--color-indigo-50);\n  }\n  .bg-orange-50 {\n    background-color: var(--color-orange-50);\n  }\n  .bg-pink-50 {\n    background-color: var(--color-pink-50);\n  }\n  .bg-purple-50 {\n    background-color: var(--color-purple-50);\n  }\n  .bg-red-50 {\n    background-color: var(--color-red-50);\n  }\n  .bg-red-100 {\n    background-color: var(--color-red-100);\n  }\n  .bg-slate-50 {\n    background-color: var(--color-slate-50);\n  }\n  .bg-transparent {\n    background-color: #0000;\n  }\n  .bg-yellow-50 {\n    background-color: var(--color-yellow-50);\n  }\n  .px-2 {\n    padding-inline: calc(var(--spacing) * 2);\n  }\n  .px-4 {\n    padding-inline: calc(var(--spacing) * 4);\n  }\n  .px-6 {\n    padding-inline: calc(var(--spacing) * 6);\n  }\n  .py-1 {\n    padding-block: var(--spacing);\n  }\n  .py-2 {\n    padding-block: calc(var(--spacing) * 2);\n  }\n  .py-3 {\n    padding-block: calc(var(--spacing) * 3);\n  }\n  .pt-10 {\n    padding-top: calc(var(--spacing) * 10);\n  }\n  .text-base {\n    font-size: var(--text-base);\n    line-height: var(--tw-leading,var(--text-base--line-height));\n  }\n  .text-sm {\n    font-size: var(--text-sm);\n    line-height: var(--tw-leading,var(--text-sm--line-height));\n  }\n  .text-xs {\n    font-size: var(--text-xs);\n    line-height: var(--tw-leading,var(--text-xs--line-height));\n  }\n  .font-bold {\n    --tw-font-weight:var(--font-weight-bold);\n    font-weight: var(--font-weight-bold);\n  }\n  .font-semibold {\n    --tw-font-weight:var(--font-weight-semibold);\n    font-weight: var(--font-weight-semibold);\n  }\n  .text-blue-500 {\n    color: var(--color-blue-500);\n  }\n  .text-blue-800 {\n    color: var(--color-blue-800);\n  }\n  .text-gray-700 {\n    color: var(--color-gray-700);\n  }\n  .text-gray-800 {\n    color: var(--color-gray-800);\n  }\n  .text-green-800 {\n    color: var(--color-green-800);\n  }\n  .text-indigo-800 {\n    color: var(--color-indigo-800);\n  }\n  .text-orange-800 {\n    color: var(--color-orange-800);\n  }\n  .text-pink-800 {\n    color: var(--color-pink-800);\n  }\n  .text-purple-800 {\n    color: var(--color-purple-800);\n  }\n  .text-red-800 {\n    color: var(--color-red-800);\n  }\n  .text-red-900 {\n    color: var(--color-red-900);\n  }\n  .text-slate-800 {\n    color: var(--color-slate-800);\n  }\n  .text-white {\n    color: var(--color-white);\n  }\n  .text-yellow-800 {\n    color: var(--color-yellow-800);\n  }\n  .underline {\n    text-decoration-line: underline;\n  }\n  .outline {\n    outline-style: var(--tw-outline-style);\n    outline-width: 1px;\n  }\n  .outline-none {\n    --tw-outline-style:none;\n    outline-style: none;\n  }\n  @media (hover: hover) {\n    .hover\\:bg-blue-100:hover {\n      background-color: var(--color-blue-100);\n    }\n    .hover\\:bg-blue-600:hover {\n      background-color: var(--color-blue-600);\n    }\n    .hover\\:bg-gray-600:hover {\n      background-color: var(--color-gray-600);\n    }\n  }\n}\n@property --tw-rotate-x { syntax:"*";inherits:false }\n@property --tw-rotate-y { syntax:"*";inherits:false }\n@property --tw-rotate-z { syntax:"*";inherits:false }\n@property --tw-skew-x { syntax:"*";inherits:false }\n@property --tw-skew-y { syntax:"*";inherits:false }\n@property --tw-border-style { syntax:"*";inherits:false;initial-value:solid }\n@property --tw-font-weight { syntax:"*";inherits:false }\n@property --tw-outline-style { syntax:"*";inherits:false;initial-value:solid }\n@keyframes spin {\n  to {\n    transform: rotate(360deg);\n  }\n}\n');

// src/components/Feedback/Button/Button.tsx
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
  size = "md",
  className = "",
  id,
  ...props
}) => {
  return /* @__PURE__ */ jsxs("div", { className: "flex flex-col pt-10", children: [
    label && /* @__PURE__ */ jsx2("label", { htmlFor: id, className: "mb-1 text-sm font-bold text-gray-700", children: label.toUpperCase() }),
    /* @__PURE__ */ jsx2(
      "input",
      {
        id,
        placeholder: `Enter your ${props.placeholder || label}`,
        className: `rounded-md border outline-none ${sizeClasses2[size]} ${className}`,
        ...props
      }
    )
  ] });
};

// src/components/Feedback/Alert/Alert.tsx
import { jsx as jsx3, jsxs as jsxs2 } from "react/jsx-runtime";
var sizeClasses3 = {
  sm: "px-2 py-1 text-xs",
  md: "px-4 py-2 text-sm",
  lg: "px-6 py-3 text-base"
};
var typeClasses = {
  success: "border-green-500 bg-green-50 text-green-800",
  info: "border-blue-500 bg-blue-50 text-blue-800",
  warning: "border-yellow-500 bg-yellow-50 text-yellow-800",
  error: "border-red-500 bg-red-50 text-red-800",
  danger: "border-red-700 bg-red-100 text-red-900",
  neutral: "border-gray-400 bg-gray-50 text-gray-800",
  loading: "border-purple-500 bg-purple-50 text-purple-800",
  announcement: "border-indigo-500 bg-indigo-50 text-indigo-800",
  update: "border-pink-500 bg-pink-50 text-pink-800",
  confirmation: "border-orange-500 bg-orange-50 text-orange-800",
  offline: "border-gray-500 bg-gray-100 text-gray-800",
  security: "border-red-500 bg-red-50 text-red-800",
  maintenance: "border-slate-500 bg-slate-50 text-slate-800"
};
var Alert = ({
  text,
  size = "md",
  type = "info",
  className = "",
  children,
  ...props
}) => {
  return /* @__PURE__ */ jsx3(
    "div",
    {
      ...props,
      role: "alert",
      className: [
        "w-full rounded-lg border",
        "flex items-start gap-3",
        sizeClasses3[size],
        typeClasses[type],
        className
      ].join(" "),
      children: /* @__PURE__ */ jsxs2("div", { className: "flex-1", children: [
        text && /* @__PURE__ */ jsx3("div", { className: "font-semibold", children: text }),
        children && /* @__PURE__ */ jsx3("div", { className: text ? "mt-1" : "", children })
      ] })
    }
  );
};

// src/components/Feedback/Alert/AlertContainer.tsx
import React from "react";

// src/components/Feedback/Alert/alertStore.ts
var alerts = [];
var nextId = 0;
var listeners = /* @__PURE__ */ new Set();
var notify = () => {
  listeners.forEach((listener) => {
    listener([...alerts]);
  });
};
var alertStore = {
  subscribe(listener) {
    listeners.add(listener);
    return () => {
      listeners.delete(listener);
    };
  },
  add(message, type) {
    const item = {
      id: ++nextId,
      message,
      type
    };
    alerts = [...alerts, item];
    notify();
    setTimeout(() => {
      alertStore.remove(item.id);
    }, 3e3);
    return item.id;
  },
  remove(id) {
    alerts = alerts.filter((alert2) => alert2.id !== id);
    notify();
  },
  clear() {
    alerts = [];
    notify();
  }
};
var alert = {
  success(message) {
    return alertStore.add(message, "success");
  },
  info(message) {
    return alertStore.add(message, "info");
  },
  warning(message) {
    return alertStore.add(message, "warning");
  },
  error(message) {
    return alertStore.add(message, "error");
  },
  danger(message) {
    return alertStore.add(message, "danger");
  },
  neutral(message) {
    return alertStore.add(message, "neutral");
  },
  loading(message) {
    return alertStore.add(message, "loading");
  },
  announcement(message) {
    return alertStore.add(message, "announcement");
  },
  update(message) {
    return alertStore.add(message, "update");
  },
  confirmation(message) {
    return alertStore.add(message, "confirmation");
  },
  offline(message) {
    return alertStore.add(message, "offline");
  },
  security(message) {
    return alertStore.add(message, "security");
  },
  maintenance(message) {
    return alertStore.add(message, "maintenance");
  },
  dismiss(id) {
    alertStore.remove(id);
  },
  clear() {
    alertStore.clear();
  }
};

// src/components/Feedback/Alert/AlertContainer.tsx
import { jsx as jsx4 } from "react/jsx-runtime";
var AlertContainer = () => {
  const [alerts2, setAlerts] = React.useState([]);
  React.useEffect(() => {
    return alertStore.subscribe(setAlerts);
  }, []);
  return /* @__PURE__ */ jsx4(
    "div",
    {
      className: "\r\n        fixed\r\n        left-4\r\n        top-4\r\n        z-[99999]\r\n        flex\r\n        w-[380px]\r\n        max-w-[calc(100vw-2rem)]\r\n        flex-col\r\n        gap-3\r\n      ",
      children: alerts2.map((item) => /* @__PURE__ */ jsx4(Alert, { type: item.type, children: item.message }, item.id))
    }
  );
};
export {
  Alert,
  AlertContainer,
  Button,
  Input,
  alert
};
//# sourceMappingURL=index.js.map