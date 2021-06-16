"use strict";
const click = document.getElementById('click');
let time = 0;
let cps = 0;
let clicks = 0;
const content = document.querySelectorAll('.content');
let isStarted = false;
var statuses;
(function (statuses) {
    statuses["initial"] = "Click here to start playing";
    statuses["game__started"] = "Click!!!";
})(statuses || (statuses = {}));
let statusString = statuses.initial;
const resultsContainer = document.getElementById('results');
const returnMarkDown = (index, cpspp) => {
    return `
    <div class="img__cont">
            <img src=${results[index].src} alt="">
        </div>
        <div class = "score_info">
        <h1>Your rank is <strong>${results[index].animal}</strong></h1>
    <div class="stars">
    ${index === 0 ?
        `
        <i class="fas fa-star gold"></i>
        <i class="fas fa-star gray"></i>
        <i class="fas fa-star gray"></i>
        <i class="fas fa-star gray"></i>
        `
        : index === 1 ?
            ` <i class="fas fa-star gold"></i>
        <i class="fas fa-star gold"></i>
        <i class="fas fa-star gray"></i>
        <i class="fas fa-star gray"></i>`
            : index === 2 ?
                ` <i class="fas fa-star gold"></i>
        <i class="fas fa-star gold"></i>
        <i class="fas fa-star gold"></i>
        <i class="fas fa-star gray"></i>`
                : index === 3 ? `
        <i class="fas fa-star gold"></i>
        <i class="fas fa-star gold"></i>
        <i class="fas fa-star gold"></i>
        <i class="fas fa-star gold"></i>`
                    : ""}
    </div>
    <h2>You clicked with speed of <strong>${cpspp} CPS</strong></h2></div>
`;
};
const setScore = (...args) => {
    document.getElementById('results').style.display = 'flex';
    window.scrollBy({
        top: 900000,
        behavior: "smooth"
    });
    setTimeout(() => click.disabled = false, 300);
    let [AAA, cpsparams, BBB] = args;
    console.log(cpsparams);
    if (cpsparams <= 3) {
        console.log('Turtle');
        let md = returnMarkDown(0, cpsparams);
        document.querySelector('.score__info').innerHTML = md;
    }
    else if (cpsparams > 3 && cpsparams <= 6) {
        let md = returnMarkDown(1, cpsparams);
        console.log('Rabbit');
        document.querySelector('.score__info').innerHTML = md;
    }
    else if (cpsparams >= 6 && cpsparams <= 10) {
        let md = returnMarkDown(2, cpsparams);
        console.log('Horse');
        document.querySelector('.score__info').innerHTML = md;
    }
    else if (cpsparams > 10) {
        let md = returnMarkDown(3, cpsparams);
        console.log('CHeetah');
        document.querySelector('.score__info').innerHTML = md;
    }
};
const results = [
    {
        src: "https://media.tenor.com/images/0c69676da9329a79f75c7d3717395dc0/tenor.gif",
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
        animal: "Cheetah",
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
        statusString = statuses.game__started;
        isStarted = true;
        clicks++;
        setTimeout(() => {
            time += 1;
            let timeSetter = setInterval(() => {
                time++;
                if (time === 5) {
                    clearInterval(timeSetter);
                    click.disabled = true;
                    statusString = statuses.initial;
                    setTimeout(() => {
                        window.scrollBy({
                            top: 900000,
                            behavior: "smooth"
                        });
                    }, 300);
                    setTimeout(() => {
                        setScore(time, cps, clicks);
                        isStarted = false;
                        time = 0;
                        cps = 0;
                        clicks = 0;
                    }, 500);
                }
            }, 1000);
        }, 1000);
    }
    else {
        clicks++;
    }
};
click.addEventListener('click', handleClick);
// setInterval(() => click.click() , 200)
