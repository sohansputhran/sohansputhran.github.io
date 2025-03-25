document.addEventListener("DOMContentLoaded", function () {
    const filterButtons = document.querySelectorAll(".tag-filter");
    const grid = document.querySelector(".archive");
  
    if (!grid) return;
  
    const cards = Array.from(grid.querySelectorAll(".archive__item"));
  
    filterButtons.forEach(button => {
      button.addEventListener("click", () => {
        const selected = button.getAttribute("data-filter");
  
        // Active state for buttons
        filterButtons.forEach(btn => btn.classList.remove("active"));
        button.classList.add("active");
  
        // Sort: matching cards first
        const sorted = cards.slice().sort((a, b) => {
          const aMatch = a.innerText.includes(selected);
          const bMatch = b.innerText.includes(selected);
          return (bMatch === selected) - (aMatch === selected);
        });
  
        // Clear grid and re-add cards
        grid.innerHTML = "";
        sorted.forEach(card => {
          // Highlight matched cards
          const isMatch = selected === "all" || card.innerText.includes(selected);
          card.classList.toggle("highlight", isMatch);
          grid.appendChild(card);
        });
      });
    });
  });