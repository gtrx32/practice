export const themeColors = {
  light: {
    "--background-color": "#f3f2f2",
    "--border-color": "#d2d0d0",
    "--border-color-header": "#d2d0d0",
    "--color-gray": "#bcb8b8",
    "--title-color": "#353231",
    "--text-color": "#3C3A39",
    "--ui-color": "#ebeaea",
    "--invalid-color": "#fbd6d6",
    "--blur-color": "rgba(16, 16, 16, 0.15)",
    "--hover-color": "#A6192E",

    "--logo-color": "#a6192e",
    "--navToggle-color": "#353231",
    "--headerButtons-color": "#2d2b2a",
    "--navlink-color": "#2d2b2a",
    "--doneIcon-color": "#45965F",
    "--notDoneIcon-color": "#A4504C",
  },
  dark: {
    "--background-color": "#101010",
    "--border-color": "#2b2b2b",
    "--border-color-header": "#5e5e5e",
    "--color-gray": "#5e5e5e",
    "--title-color": "#EEEDEC",
    "--text-color": "#C8C4C0",
    "--ui-color": "#191919",
    "--invalid-color": "#502727",
    "--blur-color": "rgba(255, 255, 255, 0.1)",
    "--hover-color": "#c9c9c9",

    "--logo-color": "#ffffff",
    "--navToggle-color": "#eeedec",
    "--headerButtons-color": "#ffffff",
    "--navlink-color": "#ffffff",
    "--doneIcon-color": "#A0F8A0",
    "--notDoneIcon-color": "#FB8E8E",
  },
};

export type Theme = keyof typeof themeColors;
