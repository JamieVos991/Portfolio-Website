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


