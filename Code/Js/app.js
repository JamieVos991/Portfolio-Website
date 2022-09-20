

// Hamburger Menu 

let overlay = document.querySelector(".menu_overlay");
let open = document.querySelector(".fa-bars");
let close = document.querySelector(".fa-times");

console.log(overlay, open, close);

open.addEventListener("click", () => {
overlay.style.transform = "translateY(0)";
});

close.addEventListener("click", () => {
overlay.style.transform = "translateY(-110%)";
});


// Timer

var countDownDate = new Date("Feb 20, 2023 00:00:00").getTime();
var x = setInterval(function(){
    var now = new Date().getTime();
    var distance = countDownDate - now;

    var days = Math.floor(distance / (1000 * 60 * 60 * 24));
    var hours = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
    var minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
    var seconds = Math.floor((distance % (1000 * 60)) / 1000);

    document.getElementById("days").innerHTML = days;
    document.getElementById("hours").innerHTML = hours;
    document.getElementById("minutes").innerHTML = minutes;
    document.getElementById("seconds").innerHTML = seconds;

    if(distance < 0){
        clearInterval(x);
        document.getElementById("days").innerHTML = 00;
        document.getElementById("hours").innerHTML = 00;
        document.getElementById("minutes").innerHTML = 00;
        document.getElementById("seconds").innerHTML = 00;
    }

}, 1000);


$(document).on("scroll", function() {
    if ($(document).scrollTop() <= 100) {
      $(".gotopbtn").css({"display":"none"});
    } 
    if($(document).scrollTop() >=100) {
      $(".gotopbtn").css({"display":"initial"});
    }
  });



