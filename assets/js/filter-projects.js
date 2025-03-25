document.addEventListener("DOMContentLoaded", function () {
    const buttons = document.querySelectorAll(".tag-filter");
    const cards = document.querySelectorAll(".archive__item");
  
    buttons.forEach(button => {
      button.addEventListener("click", () => {
        const selected = button.getAttribute("data-filter");
  
        // Toggle active button
        buttons.forEach(btn => btn.classList.remove("active"));
        button.classList.add("active");
  
        cards.forEach(card => {
          const text = card.innerText;
          const isMatch = selected === "all" || text.includes(selected);
          card.style.display = isMatch ? "block" : "none";
          card.classList.toggle("highlight", isMatch);
        });
  
        // 🪄 Re-trigger layout recalculation (Masonry/grid fix)
        setTimeout(() => {
          window.dispatchEvent(new Event("resize"));
        }, 100);
      });
    });
  });