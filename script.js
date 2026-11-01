const today = new Date();
today.setHours(0, 0, 0, 0);

const showDate = new Date(2026, 7, 8);
const millisecondsPerDay = 1000 * 60 * 60 * 24;
const daysUntilShow = Math.ceil((showDate - today) / millisecondsPerDay);
const countdown = document.getElementById('倒數');

if (daysUntilShow > 0) {
  countdown.textContent = `距離首場演出還有 ${daysUntilShow} 天`;
} else if (daysUntilShow === 0) {
  countdown.textContent = '首場演出就在今天！';
} else {
  countdown.textContent = '首場演出已經開始，期待現場相見！';
}
