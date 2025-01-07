window.onload = function () {
  const savedPhone = localStorage.getItem("phone");
  const savedEmail = localStorage.getItem("email");
  const savedLocation = localStorage.getItem("location");
  const savedAvatar = localStorage.getItem("avatar");

  if (savedPhone) {
    document.getElementById("phone").value = savedPhone;
  }
  if (savedEmail) {
    document.getElementById("email").value = savedEmail;
  }
  if (savedLocation) {
    document.getElementById("location").value = savedLocation;
  }
  if (savedAvatar) {
    document.getElementById("avatar-img").src = savedAvatar;
  }
};

const avatarImg = document.getElementById("avatar-img");
const avatarInput = document.getElementById("avatar-input");
const changeAvatarBtn = document.getElementById("change-avatar-btn");

changeAvatarBtn.addEventListener("click", function () {
  avatarInput.click();
});

avatarInput.addEventListener("change", function () {
  const file = avatarInput.files[0];
  if (file) {
    const reader = new FileReader();
    reader.onload = function (e) {
      avatarImg.src = e.target.result;
      localStorage.setItem("avatar", e.target.result);
    };
    reader.readAsDataURL(file);
  }
});

document
  .getElementById("edit-form")
  .addEventListener("submit", function (event) {
    event.preventDefault();

    const phone = document.getElementById("phone").value;
    const email = document.getElementById("email").value;
    const location = document.getElementById("location").value;

    localStorage.setItem("phone", phone);
    localStorage.setItem("email", email);
    localStorage.setItem("location", location);

    alert("Thông tin đã được lưu.");
    window.location.href = "ThongTin.html";
  });
