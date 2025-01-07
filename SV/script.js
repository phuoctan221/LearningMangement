// Kiểm tra và lưu thông tin tài khoản vào IndexedDB
function initDB() {
  const request = indexedDB.open("loginDB", 1);

  request.onupgradeneeded = (event) => {
    const db = event.target.result;
    const store = db.createObjectStore("users", { keyPath: "username" });
    store.createIndex("password", "password", { unique: false });
  };

  request.onsuccess = (event) => {
    const db = event.target.result;

    const tx = db.transaction("users", "readwrite");
    const store = tx.objectStore("users");

    // Kiểm tra xem đã có tài khoản lưu trong DB chưa, nếu chưa thì thêm vào
    const getRequest = store.get("phamnguyendang");

    getRequest.onsuccess = () => {
      if (!getRequest.result) {
        store.put({ username: "phamnguyendang", password: "Dang@12345" });
      }
    };
  };

  request.onerror = (event) => {
    console.error("Lỗi khi mở IndexedDB:", event.target.error);
  };
}

// Kiểm tra đăng nhập
document.getElementById("loginForm").addEventListener("submit", function (e) {
  e.preventDefault();

  const username = document.getElementById("username").value;
  const password = document.getElementById("password").value;

  const request = indexedDB.open("loginDB", 1);

  request.onsuccess = (event) => {
    const db = event.target.result;
    const tx = db.transaction("users", "readonly");
    const store = tx.objectStore("users");

    const getRequest = store.get(username);

    getRequest.onsuccess = () => {
      const user = getRequest.result;
      const message = document.getElementById("message");

      if (user && user.password === password) {
        // Lưu trạng thái đăng nhập vào localStorage
        localStorage.setItem("loggedIn", "true");

        // Chuyển hướng đến trang chủ
        window.location.href = "home.html";
      } else {
        message.textContent = "Tên đăng nhập hoặc mật khẩu sai!";
      }
    };
  };

  request.onerror = (event) => {
    console.error("Lỗi khi mở IndexedDB:", event.target.error);
  };
});

// Khởi tạo IndexedDB
initDB();
