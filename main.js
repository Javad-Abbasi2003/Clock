import {convertMonth, convertDay} from './func.js';

setTime();
setInterval(setTime, 1000);

function setTime() {
    const date = new Date();
    let H = date.getHours();
    let M = date.getMinutes();
    let S = date.getSeconds();
    const weekDay = convertDay(date.getDay());
    let day = date.getDate();
    const month = convertMonth(date.getMonth());
    let year = date.getFullYear();
    let AM = "AM";

    if (H > 12) {
        H -= 12;
        AM = "PM"
    }
    H = (H < 10) ? `0${H}` : H;
    M = (M < 10) ? `0${M}` : M;
    S = (S < 10) ? `0${S}` : S;
    
    document.querySelector(".clock").innerText = `${H}:${M}:${S} ${AM}`
    document.querySelector(".day").innerText = weekDay;
    document.querySelector(".date").innerText = `${month} ${day} ${year}`;
}