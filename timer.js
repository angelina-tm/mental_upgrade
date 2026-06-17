const countdown = document.getElementById("countdown");
const progressBar = document.querySelector(".progress-bar");

const startDate = new Date().getTime();
const targetDate = new Date("2026-07-01T00:00:00").getTime();

function updateTimer() {

    const now = new Date().getTime();
    const distance = targetDate - now;

    if(distance <= 0){
        countdown.textContent = "00:00:00:00";
        progressBar.style.width = "0%";
        return;
    }

    const total = targetDate - startDate;
    const progress = (distance / total) * 100;

    progressBar.style.width = progress + "%";

    const days = Math.floor(distance / (1000 * 60 * 60 * 24));
    const hours = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
    const minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
    const seconds = Math.floor((distance % (1000 * 60)) / 1000);

    countdown.textContent =
        `${String(days).padStart(2,"0")}:` +
        `${String(hours).padStart(2,"0")}:` +
        `${String(minutes).padStart(2,"0")}:` +
        `${String(seconds).padStart(2,"0")}`;
}

updateTimer();
setInterval(updateTimer, 1000);