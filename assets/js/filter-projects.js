document.addEventListener("DOMContentLoaded", function () {
    const dropdown = document.getElementById("tagDropdown");
    const cards = document.querySelectorAll(".archive__item");
  
    dropdown.addEventListener("change", () => {
      const selected = dropdown.value;
  
      cards.forEach(card => {
        const text = card.innerText;
        const isMatch = selected === "all" || text.includes(selected);
        card.style.display = isMatch ? "block" : "none";
        card.classList.toggle("highlight", isMatch);
      });
  
      // Trigger layout refresh (for Masonry/flex)
      if (window.MMQ && MMQ.layout) {
        MMQ.layout();
      } else {
        window.dispatchEvent(new Event("resize"));
      }
    });
  });