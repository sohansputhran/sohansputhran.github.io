(function () {
  const grid = document.getElementById("projects-grid");
  const tagBar = document.getElementById("tag-bar");
  if (!grid || !tagBar) return;

  const cards = Array.from(grid.querySelectorAll(".project-card"));

  const tagSet = new Set();
  cards.forEach(card => {
    (card.dataset.tags || "")
      .split(",")
      .map(t => t.trim())
      .filter(Boolean)
      .forEach(t => tagSet.add(t));
  });

  const tags = Array.from(tagSet).sort();
  let active = null;

  function apply() {
    cards.forEach(card => {
      const list = (card.dataset.tags || "").split(",");
      card.style.display = (!active || list.includes(active)) ? "" : "none";
    });
  }

  function renderBar() {
    tagBar.innerHTML = "";

    const all = document.createElement("button");
    all.className = "tag";
    all.type = "button";
    all.textContent = "All";
    all.setAttribute("aria-pressed", active === null ? "true" : "false");
    all.onclick = () => { active = null; apply(); renderBar(); syncBtns(); };
    tagBar.appendChild(all);

    tags.forEach(t => {
      const b = document.createElement("button");
      b.className = "tag";
      b.type = "button";
      b.textContent = t;
      b.setAttribute("aria-pressed", active === t ? "true" : "false");
      b.onclick = () => { active = (active === t ? null : t); apply(); renderBar(); syncBtns(); };
      tagBar.appendChild(b);
    });
  }

  function syncBtns() {
    grid.querySelectorAll(".tag-btn").forEach(btn => {
      btn.setAttribute("aria-pressed", active === btn.dataset.tag ? "true" : "false");
    });
  }

  grid.addEventListener("click", (e) => {
    const btn = e.target.closest(".tag-btn");
    if (!btn) return;
    const t = btn.dataset.tag;
    active = (active === t ? null : t);
    apply(); renderBar(); syncBtns();
  });

  renderBar();
  apply();
  syncBtns();
})();
