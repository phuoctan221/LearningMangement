function loadReports() {
  const reportList = document.getElementById("reportList");
  const reports = JSON.parse(localStorage.getItem("reports")) || [];

  if (reports.length === 0) {
    reportList.innerHTML = "<p>Không có báo cáo nào được lưu.</p>";
    return;
  }

  reportList.innerHTML = "";
  reports.forEach((report, index) => {
    const reportItem = document.createElement("div");
    reportItem.className = "report-item";
    reportItem.innerHTML = `
        <input type="checkbox" class="report-checkbox" data-index="${index}" />
        <span>
          <p><strong>Lớp:</strong> ${report.className}</p>
          <p><strong>Mẫu báo cáo:</strong> ${report.template} (${report.fileType})</p>
          <p><strong>Năm học:</strong> ${report.year}, <strong>Học kỳ:</strong> ${report.semester}</p>
          <p><strong>Nội dung:</strong> ${report.content}</p>
        </span>
      `;
    reportList.appendChild(reportItem);
  });
}

function getSelectedReports() {
  const checkboxes = document.querySelectorAll(".report-checkbox:checked");
  return Array.from(checkboxes).map((checkbox) =>
    parseInt(checkbox.dataset.index)
  );
}

document.getElementById("sendButton").addEventListener("click", () => {
  const reports = JSON.parse(localStorage.getItem("reports")) || [];
  const selectedIndexes = getSelectedReports();

  if (selectedIndexes.length === 0) {
    alert("Vui lòng chọn ít nhất một báo cáo để gửi.");
    return;
  }

  const selectedReports = selectedIndexes.map((index) => reports[index]);
  console.log("Đang gửi các báo cáo:", selectedReports);
  alert("Các báo cáo đã được gửi thành công!");

  const remainingReports = reports.filter(
    (_, index) => !selectedIndexes.includes(index)
  );
  localStorage.setItem("reports", JSON.stringify(remainingReports));
  loadReports();
});

document.querySelector(".delete").addEventListener("click", () => {
  const reports = JSON.parse(localStorage.getItem("reports")) || [];
  const selectedIndexes = getSelectedReports();

  if (selectedIndexes.length === 0) {
    alert("Vui lòng chọn ít nhất một báo cáo để xóa.");
    return;
  }

  const remainingReports = reports.filter(
    (_, index) => !selectedIndexes.includes(index)
  );
  localStorage.setItem("reports", JSON.stringify(remainingReports));
  alert("Các báo cáo đã được xóa thành công!");
  loadReports();
});

document.addEventListener("DOMContentLoaded", loadReports);
