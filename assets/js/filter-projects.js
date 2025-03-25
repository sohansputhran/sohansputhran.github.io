document.addEventListener("DOMContentLoaded", function () {
    const filterButtons = document.querySelectorAll(".tag-filter");
    const grid = document.querySelector(".archive");
  
    if (!grid) return;
  
    const cards = Array.from(grid.querySelectorAll(".archive__item"));
  
    filterButtons.forEach(button => {
      button.addEventListener("click", () => {
        const selected = button.getAttribute("data-filter");
  
        // Highlight active button
        filterButtons.forEach(btn => btn.classList.remove("active"));
        button.classList.add("active");
  
        // Sort: matched cards first, then unmatched
        const matched = [];
        const unmatched = [];
  
        cards.forEach(card => {
          const isMatch = selected === "all" || card.innerText.includes(selected);
          if (isMatch) {
            card.classList.add("highlight");
            matched.push(card);
          } else {
            card.classList.remove("highlight");
            unmatched.push(card);
          }
        });
  
        // Re-append cards in new order (matched first)
        [...matched, ...unmatched].forEach(card => grid.appendChild(card));
      });
    });
  });