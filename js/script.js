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
    lovedGiftsTitle: [
      "Complete Breakfast",
      "Jack Be Nimble, Jack Be Thick",
      "Salmon Dinner",
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
    lovedGiftsTitle: [
      "Crab Cakes",
      "Duck Feather",
      "Lobster",
      "Pomegranate",
      "Squid Ink",
      "Tom Kha Soup",
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
    lovedGiftsTitle: ["Coffee", "Pickles", "Super Meal", "Truffle Oil", "Wine"],
  },
  sam: {
    profilePicture: profilePictureSam.src,
    name: "Sam",
    birthday: "Summer 17",
    bio: "Sam is an energetic and fun-loving teen who dreams of becoming a rock star. He loves skateboarding, playing guitar, and hanging out with his younger brother Vincent. Sam brings a laid-back, cheerful vibe to Pelican Town.",
    lovedGifts: [
      "../img/Cactus_Fruit.png",
      "../img/Maple_Bar.png",
      "../img/Pizza.png",
      "../img/Tigerseye.png",
    ],
    lovedGiftsTitle: ["Cactus Fruit", "Maple Bar", "Pizza", "Tigerseye"],
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
let lovedGiftsList = document.querySelector(".list-loved-gifts");

//function to add loved gifts images when clicking a card
function addGift(villager) {
  lovedGiftsList.innerHTML = "";
  for (let i = 0; i < villagers[villager].lovedGifts.length; i++) {
    let imgGift = document.createElement("img");
    imgGift.src = villagers[villager].lovedGifts[i];
    imgGift.title = villagers[villager].lovedGiftsTitle[i];
    lovedGiftsList.appendChild(imgGift);
  }
}

cardAlex.addEventListener("click", () => {
  modalVillagerPicture.src = villagers.alex.profilePicture;
  modalVillagerName.innerHTML = villagers.alex.name;
  modalVillagerBirthday.innerHTML = villagers.alex.birthday;
  modalVillagerBio.innerHTML = villagers.alex.bio;
  addGift("alex");
});

cardElliott.addEventListener("click", () => {
  modalVillagerPicture.src = villagers.elliott.profilePicture;
  modalVillagerName.innerHTML = villagers.elliott.name;
  modalVillagerBirthday.innerHTML = villagers.elliott.birthday;
  modalVillagerBio.innerHTML = villagers.elliott.bio;
  addGift("elliott");
});

cardHarvey.addEventListener("click", () => {
  modalVillagerPicture.src = villagers.harvey.profilePicture;
  modalVillagerName.innerHTML = villagers.harvey.name;
  modalVillagerBirthday.innerHTML = villagers.harvey.birthday;
  modalVillagerBio.innerHTML = villagers.harvey.bio;
  addGift("harvey");
});

cardSam.addEventListener("click", () => {
  modalVillagerPicture.src = villagers.sam.profilePicture;
  modalVillagerName.innerHTML = villagers.sam.name;
  modalVillagerBirthday.innerHTML = villagers.sam.birthday;
  modalVillagerBio.innerHTML = villagers.sam.bio;
  addGift("sam");
});
