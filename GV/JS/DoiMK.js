document
  .getElementById("changePasswordForm")
  .addEventListener("submit", function (e) {
    e.preventDefault();

    const username = "nguyentrungthuan"; // Specifically targeting this username
    const oldPassword = document.getElementById("oldPassword").value;
    const newPassword = document.getElementById("newPassword").value;
    const confirmPassword = document.getElementById("confirmPassword").value;
    const message = document.getElementById("message");

    if (newPassword !== confirmPassword) {
      message.textContent = "Mật khẩu mới không khớp!";
      return;
    }

    const request = indexedDB.open("loginDB", 1);

    request.onsuccess = (event) => {
      const db = event.target.result;
      const tx = db.transaction("users", "readwrite");
      const store = tx.objectStore("users");

      const getRequest = store.get(username);

      getRequest.onsuccess = () => {
        const user = getRequest.result;

        if (!user || user.password !== oldPassword) {
          message.textContent = "Mật khẩu cũ không đúng!";
          return;
        }

        user.password = newPassword;
        const updateRequest = store.put(user);

        updateRequest.onsuccess = () => {
          message.textContent = "Đổi mật khẩu thành công!";
        };

        updateRequest.onerror = () => {
          message.textContent = "Có lỗi xảy ra khi cập nhật mật khẩu.";
        };
      };

      getRequest.onerror = () => {
        message.textContent = "Có lỗi xảy ra khi truy xuất người dùng.";
      };
    };

    request.onerror = (event) => {
      console.error("Error opening IndexedDB:", event.target.error);
      message.textContent = "Không thể mở cơ sở dữ liệu.";
    };
  });
