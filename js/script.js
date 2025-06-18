const cardGrid = document.querySelectorAll(".card-grid");
let modal = document.querySelector(".modal");
let closeButton = document.querySelector(".close-button");

let cardAlex = document.getElementById("alex");
let cardElliott = document.getElementById("elliott");
let cardHarvey = document.getElementById("harvey");
let cardSam = document.getElementById("sam");
let cardSebastian = document.getElementById("sebastian");
let cardShane = document.getElementById("shane");
let cardAbigail = document.getElementById("abigail");
let cardEmily = document.getElementById("emily");
let cardHaley = document.getElementById("haley");
let cardLeah = document.getElementById("leah");
let cardMaru = document.getElementById("penny");

let eachCard = cardGrid.forEach((card) => {
  card.addEventListener("click", function () {
    modal.classList.toggle("active");
  });
});

closeButton.addEventListener("click", function () {
  modal.classList.remove("active");
});
