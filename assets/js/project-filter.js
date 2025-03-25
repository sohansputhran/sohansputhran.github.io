document.addEventListener("DOMContentLoaded", function () {
    const buttons = document.querySelectorAll(".tag-filter");
    const cards = document.querySelectorAll(".project-card");
  
    buttons.forEach(button => {
      button.addEventListener("click", () => {
        const filter = button.getAttribute("data-filter");
  
        cards.forEach(card => {
          const tags = card.getAttribute("data-tags").split(",");
  
          if (filter === "all" || tags.includes(filter)) {
            card.style.display = "block";
          } else {
            card.style.display = "none";
          }
        });
      });
    });
  });