document.addEventListener("DOMContentLoaded", function () {
    const filterButtons = document.querySelectorAll(".tag-filter");
    const grid = document.querySelector(".archive");
    const cards = Array.from(grid.querySelectorAll(".archive__item"));
  
    filterButtons.forEach(button => {
      button.addEventListener("click", () => {
        const selected = button.getAttribute("data-filter");
  
        // Mark active button
        filterButtons.forEach(btn => btn.classList.remove("active"));
        button.classList.add("active");
  
        const matched = [];
        const unmatched = [];
  
        cards.forEach(card => {
          const text = card.innerText.toLowerCase();
          const isMatch = selected === "all" || text.includes(selected.toLowerCase());
          card.classList.toggle("highlight", isMatch);
  
          if (isMatch) matched.push(card);
          else unmatched.push(card);
        });
  
        // Reorder cards in the DOM: matched first
        [...matched, ...unmatched].forEach(card => {
          grid.appendChild(card);
        });
      });
    });
  });