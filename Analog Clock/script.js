const hour = document.querySelector(".hour");
const minute = document.querySelector(".minute");
const second = document.querySelector(".second");
const date_template = document.querySelectorAll(".date");
const hour_hand = document.querySelector(".hour-hand");
const minute_hand = document.querySelector(".minute-hand");
const second_hand = document.querySelector(".second-hand");
const battery_percentage = document.querySelector(".battery-percentage");


setInterval(() => {
    let days = ["MONDAY", "TUESDAY", "WEDNESDAY", "THURSDAY", "FRIDAY", "SATURDAY"];
    let months = ["JAN", "FEB", "MAR", "APR", "MAY", "JUN", "JUL", "AUG", "SEP", "OCT", "NOV", "DEC"];
    let date = new Date();
    let hours = date.getHours();
    let minutes = date.getMinutes();
    let seconds = date.getSeconds();
    if (hours < 10) {
        hours = '0' + hours;
    }
    if (minutes < 10) {
        minutes = '0' + minutes;
    }
    if (seconds < 10) {
        seconds = '0' + seconds;
    }
    hour.innerText = hours;
    minute.innerText = minutes;
    second.innerText = seconds;
    date_template.forEach(item => {
        item.innerText = days[date.getDay() - 1] + ", " + months[date.getMonth()] + " " + (date.getDate() < 10 ? '0' + date.getDate() : date.getDate()) + " " + date.getFullYear();
    });
    hour_hand.style.transform = "rotate(" + ((date.getHours() * 30) + (date.getMinutes() * (1 / 2))) + "deg)";
    minute_hand.style.transform = "rotate(" + ((date.getMinutes() * 6) + (date.getSeconds() * (1 / 10))) + "deg)";
    second_hand.style.transform = "rotate(" + date.getSeconds() * 6 + "deg)";

}, 1000);