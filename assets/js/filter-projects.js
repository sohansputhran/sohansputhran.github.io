document.addEventListener("DOMContentLoaded", function () {
    const filterButtons = document.querySelectorAll(".tag-filter");
    const projectCards = document.querySelectorAll(".archive__item");
  
    filterButtons.forEach(button => {
      button.addEventListener("click", () => {
        const selectedTag = button.getAttribute("data-filter");
  
        // Highlight the active button
        filterButtons.forEach(btn => btn.classList.remove("active"));
        button.classList.add("active");
  
        // Filter and highlight project cards
        projectCards.forEach(card => {
          const tags = card.innerText;
          const isMatch = selectedTag === "all" || tags.includes(selectedTag);
          card.style.display = isMatch ? "block" : "none";
          card.classList.toggle("highlight", isMatch);
        });
  
        // ✅ This is the missing layout fix
        setTimeout(() => {
          window.dispatchEvent(new Event("resize"));
        }, 100);
      });
    });
  });