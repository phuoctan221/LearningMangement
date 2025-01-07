const users = JSON.parse(localStorage.getItem("users")) || {
  1: {
    name: "Pham Nguyen Dang",
    avatar: "https://via.placeholder.com/40/FF0000/FFFFFF?text=PND",
    messages: [
      { sender: "student", text: "Thầy ơi tài liệu ngày mấy mình thuyết trình ạ?" },
      { sender: "teacher", text: "Ok em" },
    ],
  },
  2: {
    name: "Tan Sang Tuyen Phuong Tam",
    avatar: "https://via.placeholder.com/40/FF0000/FFFFFF?text=NVB",
    messages: [
      { sender: "teacher", text: "Tài liệu nhóm em làm tới đâu rồi?" },
      { sender: "student", text: "Dạ cũng gần xong rồi thầy" },
    ],
  },
};

let activeUserId = null;

function saveToLocalStorage() {
  localStorage.setItem("users", JSON.stringify(users));
}

function loadChat(userId) {
  const chatTitle = document.getElementById("chat-title");
  const chatMessages = document.getElementById("chat-messages");

  chatMessages.innerHTML = "";

  const user = users[userId];
  chatTitle.textContent = user.name;

  user.messages.forEach((msg) => {
    const messageRow = document.createElement("div");
    messageRow.className = `message-row ${msg.sender}`;

    const avatar = document.createElement("img");
    avatar.src = msg.sender === "student" ? users[userId].avatar : "IMG/GV.png";
    avatar.className = "avatar";

    const messageDiv = document.createElement("div");
    messageDiv.className = "message";

    const messageContent = document.createElement("span");
    messageContent.textContent = msg.text;
    messageDiv.appendChild(messageContent);

    if (msg.sender === "teacher") {
      messageRow.appendChild(avatar);
      messageRow.appendChild(messageDiv);
    } else {
      messageRow.appendChild(avatar);
      messageRow.appendChild(messageDiv);
    }

    chatMessages.appendChild(messageRow);
  });

  chatMessages.scrollTop = chatMessages.scrollHeight;

  activeUserId = userId;
}

document.querySelectorAll(".contact").forEach((contact) => {
  contact.addEventListener("click", function () {
    document
      .querySelectorAll(".contact")
      .forEach((c) => c.classList.remove("active"));
    this.classList.add("active");

    const userId = this.getAttribute("data-id");
    loadChat(userId);
  });
});

document.getElementById("send-btn").addEventListener("click", function () {
  const input = document.querySelector(".chat-input input");
  const message = input.value.trim();

  if (!message || !activeUserId) {
    return;
  }

  users[activeUserId].messages.push({ sender: "teacher", text: message });

  saveToLocalStorage();

  loadChat(activeUserId);

  input.value = "";
  input.focus();
});

window.addEventListener("load", function () {
  const firstContact = document.querySelector(".contact");
  if (firstContact) {
    firstContact.click();
  }
});

document
  .querySelector(".chat-input input")
  .addEventListener("keypress", function (e) {
    if (e.key === "Enter") {
      document.getElementById("send-btn").click();
    }
  });
