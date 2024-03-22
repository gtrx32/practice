export const themeColors = {
  light: {
    "--header-button-border-color": "#bcb8b8",
    "--background-color": "#f3f2f2",
    "--border-color": "#d2d0d0",
    "--header-border-color": "#d2d0d0",
    "--color-gray": "#bcb8b8",
    "--ui-color": "#ebeaea",
    "--blur-color": "rgba(16, 16, 16, 0.15)",
    "--navlink-color": "#2d2b2a",
    "--image-label-color": "#6159FC",
    "--table-text-color": "#3C3A39",
    "--hover-color": "#A6192E",

    "--logo-color": "#a6192e",
    "--navToggle-color": "#353231",
    "--headerButtons-color": "#2d2b2a",
    "--doneIcon-color": "#45965F",
    "--notDoneIcon-color": "#A4504C",
  },
  dark: {
    "--header-button-border-color": "#5e5e5e",
    "--background-color": "#101010",
    "--border-color": "#2b2b2b",
    "--header-border-color": "#5e5e5e",
    "--color-gray": "#5e5e5e",
    "--ui-color": "#191919",
    "--blur-color": "rgba(255, 255, 255, 0.1)",
    "--navlink-color": "#ffffff",
    "--image-label-color": "#6DE8CE",
    "--table-text-color": "#C8C4C0",
    "--hover-color": "#c9c9c9",

    "--logo-color": "#ffffff",
    "--navToggle-color": "#eeedec",
    "--headerButtons-color": "#ffffff",
    "--doneIcon-color": "#A0F8A0",
    "--notDoneIcon-color": "#FB8E8E",
  },
};

export type Theme = keyof typeof themeColors;
