/* Attractive Staggered Box Animation + Search Function */

document.addEventListener("DOMContentLoaded", function () {
  const books = document.querySelectorAll(".book");
  const searchInput = document.querySelector(".top-bar input");

  /* ---- Stagger Animation ---- */
  books.forEach((book, index) => {
    book.style.opacity = "0";
    book.style.transform = "translateY(40px) scale(0.9)";
    book.style.transition = "all 0.6s ease";

    setTimeout(() => {
      book.style.opacity = "1";
      book.style.transform = "translateY(0) scale(1)";
    }, index * 120);
  });

  /* ---- Search Function + Open Link on Enter ---- */
  if (searchInput) {
    searchInput.addEventListener("keyup", function (event) {
      const searchValue = searchInput.value.toLowerCase();
      let firstMatch = null;

      books.forEach((book) => {
        const text = book.innerText.toLowerCase();

        if (text.includes(searchValue)) {
          book.style.display = "block";

          if (!firstMatch) {
            firstMatch = book.querySelector("a");
          }
        } else {
          book.style.display = "none";
        }
      });

      // If Enter key is pressed, open first matched book link
      if (event.key === "Enter" && firstMatch) {
        window.open(firstMatch.href, "_blank");
      }
    });
  }
});