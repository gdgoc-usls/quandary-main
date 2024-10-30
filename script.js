const days = document.querySelector('.days');
const hours = document.querySelector('.hours');
const mins = document.querySelector('.mins');
const secs = document.querySelector('.secs');

const placeholderDate = new Date('November 18 2024 00:00:00');

const updateTimer = () => {
    const currentTime = new Date();
    const diff = placeholderDate - currentTime;
    const totalSeconds = Math.floor(diff / 1000);

    const day = Math.floor(totalSeconds / (24 * 3600));
    const hour = Math.floor(totalSeconds / 3600) % 24;
    const min = Math.floor(totalSeconds / 60) % 60;
    const sec = Math.floor(totalSeconds) % 60;

    days.innerHTML = day < 10 ? `0${day}` : day;
    hours.innerHTML = hour < 10 ? `0${hour}` : hour;
    mins.innerHTML = min < 10 ? `0${min}` : min;
    secs.innerHTML = sec < 10 ? `0${sec}` : sec;

}

setInterval(updateTimer, 1000);