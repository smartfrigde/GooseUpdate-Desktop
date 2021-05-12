// All of the Node.js APIs are available in the preload process.
const customTitlebar = require("custom-electron-titlebar");
// It has the same sandbox as a Chrome extension.
window.addEventListener("DOMContentLoaded", () => {
  new customTitlebar.Titlebar({
    backgroundColor: customTitlebar.Color.fromHex("#202225"),
    menu: false,
    maximizable: false,
  });
  function addStyle(styleString) {
    const style = document.createElement("style");
    style.textContent = styleString;
    document.head.append(style);
  }

  addStyle(`
@import url("https://kckarnige.github.io/femboi_owo/discord-font.css");
:root {
  --window-buttons: var(--header-secondary);
  --cord-color: var(--header-primary);
  --armcord-color: #7289da;
}
.base-3dtUhz, .sidebar-2K8pFh {
  display: -webkit-box;
  display: -ms-flexbox;
  display: flex;
  -webkit-box-orient: vertical;
  -webkit-box-direction: normal;
  -ms-flex-direction: column;
  overflow: hidden;
  border-top-left-radius: 8px;
}
div.menubar[role="menubar"] {
  width: 0px;
}
.window-title:after {
  content: "Update";
      color: #ffffff;
      font-weight: normal;
      font-family: Discordinated;
      font-size: 14px;
}
.window-title:before {
  content: "GOOSE";
      color: #3edf61;
      font-weight: normal;
      font-family: Helvetica, sans-serif;
      font-size: 14px;
}
.window-title {
  font-size: 0px !important;
  margin-left: initial !important;
  transform: translate(10px, 2px) !important;
}
.titlebar {
  background: var(--background-tertiary) !important;
  font-family: Verdana, Geneva, Tahoma, sans-serif;
}
.titlebar .window-controls-container .window-icon {
  background: var(--window-buttons) !important;
}
`);
});