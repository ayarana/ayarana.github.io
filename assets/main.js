(function () {
  var root = document.documentElement;
  var btn = document.getElementById("theme-toggle");
  var fav = document.getElementById("favicon");

  function setFav() {
    if (!fav) return;
    var dark = root.getAttribute("data-theme") === "dark";
    fav.setAttribute("href", dark ? "/assets/favicons/favicon-dark.svg" : "/assets/favicons/favicon-light.svg");
  }

  setFav();

  if (!btn) return;

  function icon() {
    btn.textContent = root.getAttribute("data-theme") === "dark" ? "☀" : "☾";
  }

  icon();

  btn.addEventListener("click", function () {
    var next = root.getAttribute("data-theme") === "dark" ? "light" : "dark";
    root.setAttribute("data-theme", next);
    try { localStorage.setItem("theme", next); } catch (e) {}
    icon();
    setFav();
  });
})();
