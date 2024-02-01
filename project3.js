let sectionDiv = document.querySelector(".skills");
let spanFirst = document.querySelector(".htmlPERS1");
let spanSecond =document.querySelector(".htmlPERS2");
let spanThered = document.querySelector(".htmlPERS3");
let spanFour = document.querySelector(".htmlPERS4");

window.onscroll = function () {
    if (window.scrollY >= sectionDiv.offsetTop) {
        spanFirst.style.width ="80%"
        spanSecond.style.width ="85%"
        spanThered.style.width ="70%"
        spanFour.style.width ="80%"
    }
}

/***************************count Down Time************************* */

let datecountDown = new Date("Dec 31,2024 23:59:59").getTime();
console.log(datecountDown);

let daterightNow = new Date().getTime();
console.log(daterightNow);

let CountDown = setInterval(() => {
    let daterightNow = new Date().getTime();

    let Deff = datecountDown - daterightNow

    let days = Math.trunc(Deff / (1000 * 60 * 60 * 24));
    document.querySelector(".allDays").textContent = days

    let hours = Math.trunc(Deff % (1000 * 60 * 60 * 24)/ 1000 / 60 / 60);
    document.querySelector(".allHours").textContent = hours

    let munites = Math.trunc(Deff % (1000 * 60 * 60)/ 1000 / 60);
    document.querySelector(".allMinutes").textContent = munites

    let second = Math.trunc(Deff % (1000 * 60)/ 1000 );
    document.querySelector(".allSeconds").textContent = second;

    if (Deff < 0) {
        clearInterval(CountDown)
    }
},1000)