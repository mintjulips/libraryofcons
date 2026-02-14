(function () {
  const select = document.getElementById("typeFilter");
  const list = document.getElementById("scamList");
  if (!select || !list) return;

  const items = Array.from(list.querySelectorAll("li"));

  function apply() {
    const v = select.value;
    items.forEach(li => {
      const t = li.getAttribute("data-type") || "";
      li.style.display = (v === "all" || t === v) ? "" : "none";
    });
  }

  select.addEventListener("change", apply);
  apply();
})();
