document.addEventListener("DOMContentLoaded", function () {
    const filterButtons = document.querySelectorAll(".tag-filter");
    const cards = document.querySelectorAll(".archive__item");
  
    filterButtons.forEach(button => {
      button.addEventListener("click", () => {
        const selected = button.getAttribute("data-filter");
  
        // Active filter button
        filterButtons.forEach(btn => btn.classList.remove("active"));
        button.classList.add("active");
  
        cards.forEach(card => {
          const text = card.innerText;
          const isMatch = selected === "all" || text.includes(selected);
          card.style.display = isMatch ? "block" : "none";
          card.classList.toggle("highlight", isMatch);
        });
  
        // ✅ The real Masonry fix — re-run layout from Minimal Mistakes JS
        if (window.MMQ && MMQ.layout) {
          MMQ.layout();
        } else {
          window.dispatchEvent(new Event("resize")); // fallback
        }
      });
    });
  });