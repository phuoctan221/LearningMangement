window.onload = function () {
  const savedPhone = localStorage.getItem("phone");
  const savedEmail = localStorage.getItem("email");
  const savedLocation = localStorage.getItem("location");
  const savedAvatar = localStorage.getItem("avatar");

  if (savedEmail) {
    document.getElementById("email-view").textContent = savedEmail;
  }

  if (savedPhone) {
    document.getElementById("phone-view").textContent = savedPhone;
  }

  if (savedLocation) {
    document.getElementById("location-living-view").textContent = savedLocation;
  }

  if (savedAvatar) {
    document.getElementById("avatar-img").src = savedAvatar;
  }
};
