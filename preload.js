// All of the Node.js APIs are available in the preload process.
const customTitlebar = require("custom-electron-titlebar");
// It has the same sandbox as a Chrome extension.
window.addEventListener("DOMContentLoaded", () => {
  new customTitlebar.Titlebar({
    backgroundColor: customTitlebar.Color.fromHex("#202225"),
    menu: false,
  }); });