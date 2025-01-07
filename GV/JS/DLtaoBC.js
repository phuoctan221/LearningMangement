document.getElementById("saveButton").addEventListener("click", function () {
  const year = document.getElementById("year").value;
  const semester = document.getElementById("semester").value;
  const className = document.getElementById("class").value;
  const template = document.getElementById("template").value;
  const fileType = document.getElementById("fileType").value;
  const content = document.getElementById("content").value;

  if (!year || !semester || !className || !template || !fileType || !content) {
    alert("Vui lòng nhập đầy đủ thông tin!");
    return;
  }

  const report = {
    id: Date.now(),
    year,
    semester,
    className,
    template,
    fileType,
    content,
  };

  const reports = JSON.parse(localStorage.getItem("reports")) || [];
  reports.push(report);
  localStorage.setItem("reports", JSON.stringify(reports));

  alert("Báo cáo đã được lưu!");

  document.getElementById("content").value = "";
  window.location.href = "GuiBC.html";
});
