// Countdown Timer
let countDownDate = new Date("Nov 22, 2024 17:00:00").getTime();
let countdownFunction = setInterval(function() {
    let now = new Date().getTime();
    let distance = countDownDate - now;
    
    let days = Math.floor(distance / (1000 * 60 * 60 * 24));
    let hours = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
    let minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
    let seconds = Math.floor((distance % (1000 * 60)) / 1000);

    document.getElementById("countdown").innerHTML = days + "d " + hours + "h "
    + minutes + "m " + seconds + "s ";

    if (distance < 0) {
        clearInterval(countdownFunction);
        document.getElementById("countdown").innerHTML = "EXPIRED";
    }
}, 1000);

// Autoplay Music Button
document.getElementById("play-button").addEventListener("click", function() {
    document.getElementById("background-music").play();
    this.style.display = "none";
});
