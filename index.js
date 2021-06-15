"use strict";
const click = document.getElementById('click');
let time = 0;
let cps = 0;
let clicks = 0;
const content = document.querySelectorAll('.content');
let isStarted = false;
let statusString = "Click here to start testing";
const results = [
    {
        src: "https://media.tenor.com/images/5dd275408bdf64d6ff214ace0ae1ddaa/tenor.gif",
        animal: "Turtle"
    },
    {
        src: "https://media.tenor.com/images/6ad48709427972fd5027749958c9afff/tenor.gif",
        animal: "Rabbit"
    },
    {
        src: "https://media.tenor.com/images/ca2c64574a02483d28da2a3b8168f760/tenor.gif",
        animal: "Horse"
    },
    {
        src: "https://media.tenor.com/images/5dd275408bdf64d6ff214ace0ae1ddaa/tenor.gif",
        animal: "Cheetah"
    }
];
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
let a = document.querySelectorAll('a');
a.forEach(el => {
    el.href = "";
    el.onclick = () => console.log('HI');
});
