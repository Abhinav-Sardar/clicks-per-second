"use strict";
const click = document.getElementById('click');
let time = 0;
let cps = 0;
let clicks = 0;
const content = document.querySelectorAll('.content');
let isStarted = false;
let statusString = "Click here to start testing";
setInterval(() => {
    content.forEach((element, index) => {
        element.innerHTML = String([time, cps, clicks][index]);
    });
    click.innerText = statusString;
    if (time === 0 || clicks === 0) {
        cps = 0;
    }
    else {
        cps = Number((clicks / time).toFixed(2));
    }
});
const handleClick = () => {
    if (isStarted === false) {
        statusString = 'Click!!!';
        isStarted = true;
        clicks++;
        setTimeout(() => {
            time += 1;
            let timeSetter = setInterval(() => {
                time++;
                if (time === 5) {
                    clearInterval(timeSetter);
                    click.disabled = true;
                }
            }, 1000);
        }, 1000);
    }
    else {
        clicks++;
    }
};
click.addEventListener('click', handleClick);
