document.addEventListener("DOMContentLoaded", function () {
    const filterButtons = document.querySelectorAll(".tag-filter");
    const grid = document.querySelector(".archive");
  
    if (!grid) return;
  
    const cards = Array.from(grid.querySelectorAll(".archive__item"));
  
    filterButtons.forEach(button => {
      button.addEventListener("click", () => {
        const selected = button.getAttribute("data-filter");
  
        // Active button state
        filterButtons.forEach(btn => btn.classList.remove("active"));
        button.classList.add("active");
  
        // Separate matching and non-matching cards
        const matched = [];
        const unmatched = [];
  
        cards.forEach(card => {
          const text = card.innerText;
          const isMatch = selected === "all" || text.includes(selected);
          card.classList.toggle("highlight", isMatch);
          if (isMatch) {
            matched.push(card);
          } else {
            unmatched.push(card);
          }
        });
  
        // Reorder: matched cards first
        const sorted = [...matched, ...unmatched];
        sorted.forEach(card => grid.appendChild(card));
      });
    });
  });