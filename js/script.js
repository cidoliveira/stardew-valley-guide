//animation
const observer = new IntersectionObserver(
  (entries) => {
    entries.forEach((entry) => {
      if (entry.isIntersecting) {
        entry.target.classList.add("visible");
        observer.unobserve(entry.target);
      }
    });
  },
  {
    threshold: 0.1,
  }
);

document.querySelectorAll(".card").forEach((card) => {
  observer.observe(card);
});

//element selection
const cards = document.querySelectorAll(".card");
const modal = document.querySelector(".modal");
const closeButton = document.querySelector(".close-button");

const cardAlex = document.getElementById("alex");
const cardElliott = document.getElementById("elliott");
const cardHarvey = document.getElementById("harvey");
const cardSam = document.getElementById("sam");
const cardSebastian = document.getElementById("sebastian");
const cardShane = document.getElementById("shane");
const cardAbigail = document.getElementById("abigail");
const cardEmily = document.getElementById("emily");
const cardHaley = document.getElementById("haley");
const cardLeah = document.getElementById("leah");
const cardMaru = document.getElementById("penny");

const profilePictureAlex = document.querySelector(".picture-alex");
const profilePictureElliott = document.querySelector(".picture-elliott");
const profilePictureHarvey = document.querySelector(".picture-harvey");
const profilePictureSam = document.querySelector(".picture-sam");
const profilePictureSebastian = document.querySelector(".picture-sebastian");
const profilePictureShane = document.querySelector(".picture-shane");
const profilePictureAbigail = document.querySelector(".picture-abigail");
const profilePictureEmily = document.querySelector(".picture-emily");
const profilePictureHaley = document.querySelector(".picture-haley");
const profilePictureLeah = document.querySelector(".picture-leah");
const profilePictureMaru = document.querySelector(".picture-maru");
const profilePicturePenny = document.querySelector(".picture-penny");

const villagers = {
  alex: {
    profilePicture: profilePictureAlex.src,
    name: "Alex",
    birthday: "Summer 13",
    bio: "Alex is a confident and athletic young man who dreams of becoming a professional gridball player. He lives with his grandparents, George and Evelyn, and slowly reveals a more sensitive side as you get to know him.",
    lovedGifts: [
      "../img/Complete_Breakfast.png",
      "../img/Jack_Be_Nimble,_Jack_Be_Thick.png",
      "../img/Salmon_Dinner.png",
    ],
  },
  elliott: {
    profilePicture: profilePictureElliott.src,
    name: "Elliott",
    birthday: "Fall 5",
    bio: "Elliott is a poetic and elegant writer who lives in a small cabin by the beach. Passionate about literature and the arts, he dreams of publishing a great novel and often reflects on beauty, nature, and creativity.",
    lovedGifts: [
      "../img/Crab_Cakes.png",
      "../img/Duck_Feather.png",
      "../img/Lobster.png",
      "../img/Pomegranate.png",
      "../img/Squid_Ink.png",
      "../img/Tom_Kha_Soup.png",
    ],
  },
  harvey: {
    profilePicture: profilePictureHarvey.src,
    name: "Harvey",
    birthday: "Winter 14",
    bio: "Harvey is the town doctor in Stardew Valley, known for his kindness, professionalism, and slightly awkward demeanor. He’s passionate about health, aviation, and vintage radios, and deeply cares for the well-being of the community.",
    lovedGifts: [
      "../img/Coffee.png",
      "../img/Pickles.png",
      "../img/Super_Meal.png",
      "../img/Truffle_Oil.png",
      "../img/Wine.png",
    ],
  },
};

//display block modal in case of card clicked
let eachCard = cards.forEach((card) => {
  card.addEventListener("click", function () {
    modal.classList.add("active");
  });
});

//removes display block when clicking close button, making it hidden
closeButton.addEventListener("click", function () {
  modal.classList.remove("active");
});

window.addEventListener("click", (event) => {
  if (event.target === modal) {
    modal.classList.remove("active");
  }
});

//modal items replacing logic
let modalVillagerPicture = document.querySelector(".modal-profile img");
let modalVillagerName = document.querySelector(".modal-villager-name");
let modalVillagerBirthday = document.querySelector(".birthday-date");
let modalVillagerBio = document.querySelector(".modal-villager-bio");
let lovedGift1 = document.querySelector(".loved-gift1");
let lovedGift2 = document.querySelector(".loved-gift2");
let lovedGift3 = document.querySelector(".loved-gift3");
let lovedGift4 = document.querySelector(".loved-gift4");
let lovedGift5 = document.querySelector(".loved-gift5");
let lovedGift6 = document.querySelector(".loved-gift6");
let lovedGift7 = document.querySelector(".loved-gift7");

cardAlex.addEventListener("click", () => {
  modalVillagerPicture.src = villagers.alex.profilePicture;
  modalVillagerName.innerHTML = villagers.alex.name;
  modalVillagerBirthday.innerHTML = villagers.alex.birthday;
  modalVillagerBio.innerHTML = villagers.alex.bio;
  lovedGift1.src = villagers.alex.lovedGifts[0];
  lovedGift2.src = villagers.alex.lovedGifts[1];
  lovedGift3.src = villagers.alex.lovedGifts[2];
  lovedGift4.src = villagers.alex.lovedGifts[3];
  lovedGift5.src = villagers.alex.lovedGifts[4];
  lovedGift6.src = villagers.alex.lovedGifts[5];
});

cardElliott.addEventListener("click", () => {
  modalVillagerPicture.src = villagers.elliott.profilePicture;
  modalVillagerName.innerHTML = villagers.elliott.name;
  modalVillagerBirthday.innerHTML = villagers.elliott.birthday;
  modalVillagerBio.innerHTML = villagers.elliott.bio;
  lovedGift1.src = villagers.elliott.lovedGifts[0];
  lovedGift2.src = villagers.elliott.lovedGifts[1];
  lovedGift3.src = villagers.elliott.lovedGifts[2];
  lovedGift4.src = villagers.elliott.lovedGifts[3];
  lovedGift5.src = villagers.elliott.lovedGifts[4];
  lovedGift6.src = villagers.elliott.lovedGifts[5];
});

cardHarvey.addEventListener("click", () => {
  modalVillagerPicture.src = villagers.harvey.profilePicture;
  modalVillagerName.innerHTML = villagers.harvey.name;
  modalVillagerBirthday.innerHTML = villagers.harvey.birthday;
  modalVillagerBio.innerHTML = villagers.harvey.bio;
  lovedGift1.src = villagers.harvey.lovedGifts[0];
  lovedGift2.src = villagers.harvey.lovedGifts[1];
  lovedGift3.src = villagers.harvey.lovedGifts[2];
  lovedGift4.src = villagers.harvey.lovedGifts[3];
  lovedGift5.src = villagers.harvey.lovedGifts[4];
  lovedGift6.src = villagers.harvey.lovedGifts[5];
});
