(function () {
  var root = document.documentElement;
  var btn = document.getElementById("theme-toggle");

  function setFav() {
    var dark = root.getAttribute("data-theme") === "dark";
    var url = dark ? "/assets/favicons/favicon-dark.svg" : "/assets/favicons/favicon-light.svg";
    fetch(url, { cache: "no-store" }).then(function (r) { return r.text(); }).then(function (svg) {
      document.querySelectorAll('link[rel~="icon"]').forEach(function (l) { l.parentNode.removeChild(l); });
      var link = document.createElement("link");
      link.id = "favicon";
      link.rel = "icon";
      link.type = "image/svg+xml";
      link.href = "data:image/svg+xml," + encodeURIComponent(svg);
      document.head.appendChild(link);
    });
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
