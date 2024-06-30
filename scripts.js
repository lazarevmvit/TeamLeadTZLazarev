function scrollToOrderForm() {
    document.getElementById('order-form').scrollIntoView({ behavior: 'smooth' });
}

let countdownTimer = document.getElementById('countdown-timer');
let timeLeft = 1800;

function updateTimer() {
    let minutes = Math.floor(timeLeft / 60);
    let seconds = timeLeft % 60;

    countdownTimer.innerHTML = `${minutes < 10 ? '0' : ''}${minutes}:${seconds < 10 ? '0' : ''}${seconds}`;

    if (timeLeft > 0) {
        timeLeft--;
    } else {
        clearInterval(timerInterval);
    }
}

let timerInterval = setInterval(updateTimer, 1000);

document.getElementById('phone').addEventListener('input', function (e) {
    this.value = this.value.replace(/[^0-9]/g, '');
});