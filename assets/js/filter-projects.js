document.addEventListener("DOMContentLoaded", function () {
    const filterButtons = document.querySelectorAll(".tag-filter");
    const projectGrid = document.querySelector(".archive");
    const cards = Array.from(document.querySelectorAll(".archive__item"));
  
    filterButtons.forEach(button => {
      button.addEventListener("click", () => {
        const selected = button.getAttribute("data-filter");
  
        // Highlight the active button
        filterButtons.forEach(btn => btn.classList.remove("active"));
        button.classList.add("active");
  
        // Sort cards: matched first
        const sorted = cards.sort((a, b) => {
          const aMatch = a.innerText.includes(selected);
          const bMatch = b.innerText.includes(selected);
          return (bMatch === selected) - (aMatch === selected);
        });
  
        // Clear grid and re-append in sorted order
        projectGrid.innerHTML = "";
        sorted.forEach(card => {
          if (selected === "all" || card.innerText.includes(selected)) {
            card.classList.add("highlight");
          } else {
            card.classList.remove("highlight");
          }
          projectGrid.appendChild(card);
        });
      });
    });
  });