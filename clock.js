let hrs = document.getElementById("hr");
let min = document.getElementById("min");
let sec = document.getElementById("sec");
let currentTime = new Date();

setInterval(() => {
let currentTime = new Date();
hrs.innerHTML = currentTime.getHours();
min.innerHTML = currentTime.getMinutes();
sec.innerHTML = currentTime.getSeconds();
}, 1000);
