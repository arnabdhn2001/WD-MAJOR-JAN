// Flickity setup

window.addEventListener('load', () => {
    let element = document.querySelector('.main-carousel');
    let flickity = new Flickity( element, {
        // options
        cellAlign: 'left',
        contain: true,
        pageDots: false,
        imagesLoaded: true
    });
})


// Hackathon Timer
const hackathonStartDate = Date.parse('March 15, 2021 12:00:00');

function setTimer() {
    let timeInterval = Math.floor((hackathonStartDate - Date.now()) / 1000);
    let seconds = timeInterval % 60;
    timeInterval = Math.floor(timeInterval / 60);
    let minutes = timeInterval % 60;
    timeInterval = Math.floor(timeInterval / 60);
    let hours = timeInterval % 24;
    timeInterval = Math.floor(timeInterval / 24);
    let days = timeInterval;

    document.getElementById('days').innerText = days < 10 ? `0${days}` : days;
    document.getElementById('hours').innerText = hours < 10 ? `0${hours}` : hours;
    document.getElementById('minutes').innerText = minutes < 10 ? `0${minutes}` : minutes;
    document.getElementById('seconds').innerText = seconds < 10 ? `0${seconds}` : seconds;
}

setTimer();
setInterval(setTimer, 1000)