document.addEventListener("DOMContentLoaded", function () {
    const filterButtons = document.querySelectorAll(".tag-filter");
    const projectCards = document.querySelectorAll(".archive__item");
  
    filterButtons.forEach(button => {
      button.addEventListener("click", () => {
        const selected = button.getAttribute("data-filter");
  
        // Highlight active button
        filterButtons.forEach(btn => btn.classList.remove("active"));
        button.classList.add("active");
  
        projectCards.forEach(card => {
          const text = card.innerText;
  
          // Animate: fade out
          card.style.opacity = "0";
  
          setTimeout(() => {
            const matches = selected === "all" || text.includes(selected);
            card.style.display = matches ? "block" : "none";
  
            // Animate: fade in if matched
            if (matches) {
              setTimeout(() => {
                card.style.opacity = "1";
              }, 10);
            }
          }, 200);
        });
      });
    });
  });