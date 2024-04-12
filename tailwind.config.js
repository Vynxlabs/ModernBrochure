module.exports = {
  "content": [
    "./src/**/*.{html,js,md}",
    "./_component-library/**/*.liquid"
  ],
  "theme": {
    "extend": {
      "colors": {
        "Example": {
          "green": "#B4E89B",
          "mutedgreen": "#799C68",
          "darkgreen": "#060D02",
          "creme": "#E4C590",
          "gray": "#242626",
          "light": "#474949"
        },
        "Primary": {
          "background_color": "#3b3b3d",
          "foreground_color": "#f9f9fb",
          "interaction_color": "#2566f2"
        },
        "Secondary": {
          "background_color": "#1b1b1d",
          "foreground_color": "#d9d9dc",
          "interaction_color": "#2566f2"
        },
        "terd": {
          "background_color": "#2f2f43",
          "foreground_color": "#ffffff",
          "interaction_color": "#1353b4"
        }
      }
    }
  },
  "plugins": []
};