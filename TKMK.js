
function initDB() {
  const request = indexedDB.open("loginDB", 1);

  request.onupgradeneeded = (event) => {
    const db = event.target.result;
    const store = db.createObjectStore("users", { keyPath: "username" });
    store.createIndex("password", "password", { unique: false });
    console.log("Database setup complete.");
  };

  request.onsuccess = (event) => {
    const db = event.target.result;

    const tx = db.transaction("users", "readwrite");
    const store = tx.objectStore("users");

    const defaultAccounts = [
      { username: "phamnguyendang", password: "Dang@12345" },
      { username: "nguyentrungthuan", password: "Thuan@12345" },
    ];

    defaultAccounts.forEach((account) => {
      const getRequest = store.get(account.username);

      getRequest.onsuccess = () => {
        if (!getRequest.result) {
          store.put(account);
          console.log(`Account ${account.username} added.`);
        }
      };

      getRequest.onerror = () => {
        console.error(`Failed to check account ${account.username}`);
      };
    });

    console.log("Default accounts added if not already present.");
  };

  request.onerror = (event) => {
    console.error("Error opening IndexedDB:", event.target.error);
  };
}


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
        localStorage.setItem("loggedIn", "true");

        if (username === "phamnguyendang") {
          window.location.href = "SV/home.html";
        } else if (username === "nguyentrungthuan") {
          window.location.href = "GV/Home.html";
        }
      } else {
        message.textContent = "Tên đăng nhập hoặc mật khẩu sai!";
      }
    };

    getRequest.onerror = () => {
      console.error("Error fetching user.");
    };
  };

  request.onerror = (event) => {
    console.error("Error opening IndexedDB:", event.target.error);
  };
});

initDB();
