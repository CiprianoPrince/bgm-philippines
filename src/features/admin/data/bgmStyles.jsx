// --bgm-fs--2: clamp(0.69rem, calc(0.66rem + 0.18vw), 0.80rem);
// --bgm-fs--1: clamp(0.83rem, calc(0.78rem + 0.29vw), 1.00rem);
// --bgm-fs-0: clamp(1.00rem, calc(0.91rem + 0.43vw), 1.25rem);
// --bgm-fs-1: clamp(1.20rem, calc(1.07rem + 0.63vw), 1.56rem);
// --bgm-fs-2: clamp(1.44rem, calc(1.26rem + 0.89vw), 1.95rem);
// --bgm-fs-3: clamp(1.73rem, calc(1.48rem + 1.24vw), 2.44rem);
// --bgm-fs-4: clamp(2.07rem, calc(1.73rem + 1.70vw), 3.05rem);
// --bgm-fs-5: clamp(2.18rem, calc(1.61rem + 2.85vw), 3.82rem);

export const bgmStyles = (theme) => ({
  table: {
    style: {
      color: theme.text.dark,
      backgroundColor: theme.background.default,
    },
  },
  tableWrapper: {
    style: {
      display: "table",
    },
  },
  responsiveWrapper: {
    style: {
      overflow: "auto",
    },
  },
  header: {
    style: {
      fontSize: "clamp(1.44rem, calc(1.26rem + 0.89vw), 1.95rem)",
      fontWeight: 900,
      color: theme.text.dark,
      backgroundColor: theme.background.default,
      minHeight: "56px",
      paddingLeft: "16px",
      paddingRight: "8px",
    },
  },
  subHeader: {
    style: {
      backgroundColor: theme.background.default,
      minHeight: "52px",
    },
  },
  head: {
    style: {
      color: theme.text.dark,
      fontSize: "clamp(1.00rem, calc(0.91rem + 0.43vw), 1.25rem)",
      fontWeight: 600,
    },
  },
  headRow: {
    style: {
      backgroundColor: theme.background.default,
      minHeight: "52px",
      borderBottomWidth: "1px",
      borderBottomColor: theme.divider.default,
      borderBottomStyle: "solid",
    },
    denseStyle: {
      minHeight: "32px",
    },
  },
  headCells: {
    style: {
      paddingLeft: "16px",
      paddingRight: "16px",
    },
    draggingStyle: {
      cursor: "move",
    },
  },
  contextMenu: {
    style: {
      backgroundColor: theme.context.background,
      fontSize: "18px",
      fontWeight: 400,
      color: theme.context.text,
      paddingLeft: "16px",
      paddingRight: "8px",
      transform: "translate3d(0, -100%, 0)",
      transitionDuration: "125ms",
      transitionTimingFunction: "cubic-bezier(0, 0, 0.2, 1)",
      willChange: "transform",
    },
    activeStyle: {
      transform: "translate3d(0, 0, 0)",
    },
  },
  cells: {
    style: {
      paddingLeft: "16px",
      paddingRight: "16px",
      wordBreak: "break-word",
    },
    draggingStyle: {},
  },
  rows: {
    style: {
      fontSize: "clamp(0.83rem, calc(0.78rem + 0.29vw), 1.00rem)",
      fontWeight: 500,
      color: theme.text.dark,
      backgroundColor: theme.background.default,
      minHeight: "48px",
      "&:not(:last-of-type)": {
        borderBottomStyle: "solid",
        borderBottomWidth: "1px",
        borderBottomColor: theme.divider.default,
      },
    },
    denseStyle: {
      minHeight: "32px",
    },
    selectedHighlightStyle: {
      // use nth-of-type(n) to override other nth selectors
      "&:nth-of-type(n)": {
        color: theme.selected.text,
        backgroundColor: theme.selected.default,
        borderBottomColor: theme.background.default,
      },
    },
    highlightOnHoverStyle: {
      color: theme.highlightOnHover.text,
      backgroundColor: theme.highlightOnHover.default,
      transitionDuration: "0.15s",
      transitionProperty: "background-color",
      borderBottomColor: theme.background.default,
      outlineStyle: "solid",
      outlineWidth: "1px",
      outlineColor: theme.background.default,
    },
    stripedStyle: {
      color: theme.striped.text,
      backgroundColor: theme.striped.default,
    },
  },
  expanderRow: {
    style: {
      color: theme.text.dark,
      backgroundColor: theme.background.default,
    },
  },
  expanderCell: {
    style: {
      flex: "0 0 48px",
    },
  },
  expanderButton: {
    style: {
      color: theme.button.default,
      fill: theme.button.default,
      backgroundColor: "transparent",
      borderRadius: "2px",
      transition: "0.25s",
      height: "100%",
      width: "100%",
      "&:hover:enabled": {
        cursor: "pointer",
      },
      "&:disabled": {
        color: theme.button.disabled,
      },
      "&:hover:not(:disabled)": {
        cursor: "pointer",
        backgroundColor: theme.button.hover,
      },
      "&:focus": {
        outline: "none",
        backgroundColor: theme.button.focus,
      },
      svg: {
        margin: "auto",
      },
    },
  },
  pagination: {
    style: {
      color: theme.text.secondary,
      fontSize: "13px",
      minHeight: "56px",
      backgroundColor: theme.background.default,
      borderTopStyle: "solid",
      borderTopWidth: "1px",
      borderTopColor: theme.divider.default,
    },
    pageButtonsStyle: {
      borderRadius: "50%",
      height: "40px",
      width: "40px",
      padding: "8px",
      margin: "px",
      cursor: "pointer",
      transition: "0.4s",
      color: theme.button.default,
      fill: theme.button.default,
      backgroundColor: "transparent",
      "&:disabled": {
        cursor: "unset",
        color: theme.button.disabled,
        fill: theme.button.disabled,
      },
      "&:hover:not(:disabled)": {
        backgroundColor: theme.button.hover,
      },
      "&:focus": {
        outline: "none",
        backgroundColor: theme.button.focus,
      },
    },
  },
  noData: {
    style: {
      display: "flex",
      alignItems: "center",
      justifyContent: "center",
      color: theme.text.primary,
      backgroundColor: theme.background.default,
    },
  },
  progress: {
    style: {
      display: "flex",
      alignItems: "center",
      justifyContent: "center",
      color: theme.text.primary,
      backgroundColor: theme.background.default,
    },
  },
})

export const bgmThemes = {
  default: {
    text: {
      primary: "var(--bs-primary)",
      secondary: "var(--bs-secondary)",
      dark: "var(--bs-dark)",
      light: "var(--bs-light)",
      disabled: "rgba(0, 0, 0, 0.38)",
    },
    background: { default: "var(--bs-light)" },
    context: { background: "#e3f2fd", text: "rgba(0, 0, 0, 0.87)" },
    divider: { default: "rgba(0,0,0,.12)" },
    button: {
      default: "rgba(0,0,0,.54)",
      focus: "rgba(0,0,0,.12)",
      hover: "rgba(0,0,0,.12)",
      disabled: "rgba(0, 0, 0, .18)",
    },
    selected: { default: "#e3f2fd", text: "rgba(0, 0, 0, 0.87)" },
    highlightOnHover: { default: "#EEEEEE", text: "rgba(0, 0, 0, 0.87)" },
    striped: { default: "#FAFAFA", text: "rgba(0, 0, 0, 0.87)" },
  },
  light: {
    text: {
      primary: "rgba(0, 0, 0, 0.87)",
      secondary: "rgba(0, 0, 0, 0.54)",
      disabled: "rgba(0, 0, 0, 0.38)",
    },
    background: { default: "#FFFFFF" },
    context: { background: "#e3f2fd", text: "rgba(0, 0, 0, 0.87)" },
    divider: { default: "rgba(0,0,0,.12)" },
    button: {
      default: "rgba(0,0,0,.54)",
      focus: "rgba(0,0,0,.12)",
      hover: "rgba(0,0,0,.12)",
      disabled: "rgba(0, 0, 0, .18)",
    },
    selected: { default: "#e3f2fd", text: "rgba(0, 0, 0, 0.87)" },
    highlightOnHover: { default: "#EEEEEE", text: "rgba(0, 0, 0, 0.87)" },
    striped: { default: "#FAFAFA", text: "rgba(0, 0, 0, 0.87)" },
  },
  dark: {
    text: {
      primary: "#FFFFFF",
      secondary: "rgba(255, 255, 255, 0.7)",
      disabled: "rgba(0,0,0,.12)",
    },
    background: { default: "#424242" },
    context: { background: "#E91E63", text: "#FFFFFF" },
    divider: { default: "rgba(81, 81, 81, 1)" },
    button: {
      default: "#FFFFFF",
      focus: "rgba(255, 255, 255, .54)",
      hover: "rgba(255, 255, 255, .12)",
      disabled: "rgba(255, 255, 255, .18)",
    },
    selected: { default: "rgba(0, 0, 0, .7)", text: "#FFFFFF" },
    highlightOnHover: { default: "rgba(0, 0, 0, .7)", text: "#FFFFFF" },
    striped: { default: "rgba(0, 0, 0, .87)", text: "#FFFFFF" },
  },
}
