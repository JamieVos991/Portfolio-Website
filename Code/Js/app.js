
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


var main_btn = document.querySelector(".main_btn");
var wrapper = document.querySelector(".wrapper");
var close_btns = document.querySelectorAll(".close_btn");

main_btn.addEventListener("click", function () {
  wrapper.classList.add("active");
});

close_btns.forEach(function (btn) {
  btn.addEventListener("click", function () {
    wrapper.classList.remove("active");
  });
});



