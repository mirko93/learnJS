const d = document.getElementById('days');
const h = document.getElementById('hours');
const m = document.getElementById('min');
const s = document.getElementById('sec');

const newYears = "1 Jan 2021";

function countdown() 
{
    const newYearsDate = new Date(newYears);
    const currentDate = new Date();

    const totalSeconds = (newYearsDate - currentDate) / 1000;

    // days
    const days = Math.floor(totalSeconds / 3600 / 24);

    // hours
    const hours = Math.floor(totalSeconds / 3600) % 24;

    // minutes
    const minutes = Math.floor(totalSeconds / 60) % 60;

    // secounds
    const secounds = Math.floor(totalSeconds) % 60;

    d.innerHTML = days;
    h.innerHTML = formatTime(hours);
    m.innerHTML = formatTime(minutes);
    s.innerHTML = formatTime(secounds);
}

function formatTime(time) 
{
    return time < 10 ? `0${time}` : time;
}

countdown();

setInterval(countdown, 1000);