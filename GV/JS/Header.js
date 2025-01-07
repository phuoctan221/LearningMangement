const bellIcon = document.getElementById("bell-icon");
const popup = document.getElementById("popup");
const closePopupButton = document.getElementById("close-popup");

bellIcon.addEventListener("click", function () {
  const iconRect = bellIcon.getBoundingClientRect();

  popup.style.left = iconRect.left + "px"; // Align pop-up with the icon horizontally
  popup.style.top = iconRect.bottom + window.scrollY + "px"; // Position it just below the icon

  popup.style.display = popup.style.display === "block" ? "none" : "block";
});

closePopupButton.addEventListener("click", function () {
  popup.style.display = "none";
});

window.addEventListener("click", function (event) {
  if (!popup.contains(event.target) && !bellIcon.contains(event.target)) {
    popup.style.display = "none";
  }
});
