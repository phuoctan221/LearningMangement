document.addEventListener("DOMContentLoaded", function () {
  const itemsContainer = document.getElementById("itemsContainer");

  const initialItems = [
    { text: "Unit 1.1: Introduction to SW", link: "/unit1-1" },
    { text: "Unit 1.2: Travel", link: "/unit1-2" },
  ];

  initialItems.forEach((item) => {
    const newItem = document.createElement("div");
    newItem.classList.add("item");

    const fileInput = document.createElement("input");
    fileInput.type = "file";
    fileInput.classList.add("file-input");
    fileInput.style.display = "none";
    newItem.appendChild(fileInput);

    const checkbox = document.createElement("input");
    checkbox.type = "checkbox";
    checkbox.classList.add("delete-checkbox");
    checkbox.style.display = "none";
    newItem.appendChild(checkbox);

    const link = document.createElement("a");
    link.href = item.link;
    link.textContent = item.text;
    newItem.appendChild(link);

    itemsContainer.appendChild(newItem);
  });
});

document.getElementById("addBtn").addEventListener("click", function () {
  const itemsContainer = document.getElementById("itemsContainer");
  const newItem = document.createElement("div");
  newItem.classList.add("item");

  const fileInput = document.createElement("input");
  fileInput.type = "file";
  fileInput.classList.add("file-input");
  fileInput.style.display = "none";
  newItem.appendChild(fileInput);

  const checkbox = document.createElement("input");
  checkbox.type = "checkbox";
  checkbox.classList.add("delete-checkbox");
  checkbox.style.display = "none";
  newItem.appendChild(checkbox);

  const link = document.createElement("a");
  link.href = "#";
  link.textContent = "New";
  newItem.appendChild(link);

  itemsContainer.appendChild(newItem);
});

document.getElementById("editBtn").addEventListener("click", function () {
  const items = document.querySelectorAll(".item input[type='file']");
  const checkboxes = document.querySelectorAll(".item .delete-checkbox");
  const links = document.querySelectorAll(".item a");
  const saveBtn = document.getElementById("saveBtn");

  saveBtn.style.display = "inline-block";

  checkboxes.forEach((checkbox) => {
    checkbox.style.display = "none";
  });

  items.forEach((fileInput) => {
    fileInput.style.display = "inline-block";
  });

  links.forEach((link) => {
    link.contentEditable = true;
  });
});

document.getElementById("saveBtn").addEventListener("click", function () {
  const links = document.querySelectorAll(".item a");
  const items = document.querySelectorAll(".item input[type='file']");
  const saveBtn = document.getElementById("saveBtn");

  links.forEach((link) => {
    link.contentEditable = false;
  });

  items.forEach((fileInput) => {
    fileInput.style.display = "none";
  });

  saveBtn.style.display = "none";
});

document.getElementById("deleteBtn").addEventListener("click", function () {
  const deleteButton = document.getElementById("deleteBtn");
  const checkboxes = document.querySelectorAll(".item input[type='checkbox']");

  deleteButton.classList.toggle("delete-active");

  checkboxes.forEach((checkbox) => {
    checkbox.style.display =
      checkbox.style.display === "none" ? "inline-block" : "none";
  });
});

document.getElementById("deleteBtn").addEventListener("click", function () {
  const checkboxes = document.querySelectorAll(
    ".item input[type='checkbox']:checked"
  );

  checkboxes.forEach((checkbox) => {
    checkbox.parentElement.remove();
  });
});
