setTime();
setInterval(setTime, 1000);

function setTime() {
    const date = new Date();
    let H = date.getHours();
    let M = date.getMinutes();
    let S = date.getSeconds();
    let AM = "AM";

    if (H > 12) {
        H -= 12;
        AM = "PM"
    }
    H = (H < 10) ? `0${H}` : H;
    M = (M < 10) ? `0${M}` : M;
    S = (S < 10) ? `0${S}` : S;

    document.querySelector(".clock").innerText = `${H}:${M}:${S} ${AM}`
}
const date = new Date();
console.log(date);