const timeless = document.querySelector(".neutral");
const dayTime = document.querySelector(".on");
const nightTime = document.querySelector(".off");
const background = document.querySelector("body");

function makeDay() {
      background.style.backgroundImage = "url(day.jpg)";
      timeless.style.display = "none";
      nightTime.style.display = "none";
      dayTime.style.display = "block";
}

timeless.addEventListener("click", makeDay)

function makeNight() {
    background.style.backgroundImage = "url(night.jpeg)";
    timeless.style.display = "none";
    dayTime.style.display = "none";
    nightTime.style.display = "block";
}

dayTime.addEventListener("click", makeNight)

nightTime.addEventListener("click", makeDay)

