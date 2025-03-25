document.addEventListener("DOMContentLoaded", function () {
    const filterButtons = document.querySelectorAll(".tag-filter");
    const projectCards = document.querySelectorAll(".archive__item");
  
    filterButtons.forEach(button => {
      button.addEventListener("click", () => {
        const selected = button.getAttribute("data-filter");
  
        projectCards.forEach(card => {
          const tags = card.innerText;
  
          if (selected === "all" || tags.includes(selected)) {
            card.style.display = "block";
          } else {
            card.style.display = "none";
          }
        });
      });
    });
  });