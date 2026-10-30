// The navbar search button shows only the icon; the shortcut-key label (ctrl k / ⌘ k) is hidden on purpose
document.addEventListener("readystatechange", () => {
  if (document.readyState === "interactive") {
    let isMac = navigator.platform.toUpperCase().indexOf("MAC") >= 0;
    let shortcutKeyElement = document.querySelector("#search-toggle .nav-link");
    if (shortcutKeyElement && isMac) {
      shortcutKeyElement.innerHTML = '<i class="fa-solid fa-magnifying-glass"></i>';
    }
  }
});
