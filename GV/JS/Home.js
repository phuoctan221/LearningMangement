const leftButton = document.querySelector(".left");
const rightButton = document.querySelector(".right");
const dateRange = document.querySelector(".ngay");
const datePicker = document.querySelector('.current-date input[type="date"]');

function formatDate(date) {
  const month = (date.getMonth() + 1).toString().padStart(2, "0");
  const day = date.getDate().toString().padStart(2, "0");
  const year = date.getFullYear();
  return `${month}/${day}/${year}`;
}

function getWeekRange(date) {
  const dayOfWeek = date.getDay();
  const startOfWeek = new Date(date);
  const endOfWeek = new Date(date);

  startOfWeek.setDate(date.getDate() - (dayOfWeek === 0 ? 6 : dayOfWeek - 1));

  endOfWeek.setDate(startOfWeek.getDate() + 6);

  return {
    start: startOfWeek,
    end: endOfWeek,
  };
}

function updateWeekFromDate(date) {
  if (isNaN(date)) return;
  const weekRange = getWeekRange(date);
  dateRange.textContent = `${formatDate(weekRange.start)} - ${formatDate(
    weekRange.end
  )}`;
}

function shiftWeek(days) {
  const [startStr] = dateRange.textContent.split(" - ");
  const currentStartDate = new Date(startStr);
  const newDate = new Date(currentStartDate);
  newDate.setDate(currentStartDate.getDate() + days);

  updateWeekFromDate(newDate);
  datePicker.value = newDate.toISOString().split("T")[0];
}

document.addEventListener("DOMContentLoaded", () => {
  const today = new Date(); // Hôm nay
  const weekRange = getWeekRange(today);
  datePicker.value = today.toISOString().split("T")[0];
  updateWeekFromDate(today);
});

leftButton.addEventListener("click", () => shiftWeek(-7));
rightButton.addEventListener("click", () => shiftWeek(7));
datePicker.addEventListener("change", () => {
  const selectedDate = new Date(datePicker.value);
  updateWeekFromDate(selectedDate);
});
