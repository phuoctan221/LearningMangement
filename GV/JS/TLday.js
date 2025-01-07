document
  .querySelector('.seach input[type="search"]')
  .addEventListener("input", function () {
    const query = this.value.toLowerCase();
    const items = document.querySelectorAll(".content .a");

    items.forEach((item) => {
      const text = item.textContent.toLowerCase();
      if (text.includes(query)) {
        item.style.display = "";
      } else {
        item.style.display = "none";
      }
    });
  });
