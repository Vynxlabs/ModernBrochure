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
          "backgroundColor": "#3b3b3d",
          "foregroundColor": "#f9f9fb",
          "interactionColor": "#2566f2"
        },
        "Secondary": {
          "backgroundColor": "#1b1b1d",
          "foregroundColor": "#d9d9dc",
          "interactionColor": "#2566f2"
        },
        "terd": {
          "backgroundColor": "#2f2f43",
          "foregroundColor": "#ffffff",
          "interactionColor": "#1353b4"
        },
        "Testing": {
          "backgroundColor": "#9f4b4b",
          "foregroundColor": "#d22020",
          "interactionColor": "#2543af"
        }
      }
    }
  },
  "plugins": []
};