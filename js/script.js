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
const cardMaru = document.getElementById("maru");
const cardPenny = document.getElementById("penny");

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
    objectPosition: "8px 5px",
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
    objectPosition: "8px 5px",
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
    objectPosition: "5px 10px",
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
    objectPosition: "5px 10px",
  },
  sebastian: {
    profilePicture: profilePictureSebastian.src,
    name: "Sebastian",
    birthday: "Winter 10",
    bio: "Sebastian is a reclusive and introspective programmer who spends much of his time in his basement room. He enjoys video games, motorcycles, and rainy days. Though quiet at first, he opens up to those who take the time to understand him.",
    lovedGifts: [
      "../img/Green_Frog_Egg.png",
      "../img/Frozen_Tear.png",
      "../img/Obsidian.png",
      "../img/Pumpkin_Soup.png",
      "../img/Sashimi.png",
      "../img/Void_Egg.png",
    ],
    lovedGiftsTitle: [
      "Frog Egg",
      "Frozen Tear",
      "Obsidian",
      "Pumpkin Soup",
      "Sashimi",
      "Void Egg",
    ],
    objectPosition: "5px 10px",
  },
  shane: {
    profilePicture: profilePictureShane.src,
    name: "Shane",
    birthday: "Spring 20",
    bio: "Shane is a troubled but complex character who works at JojaMart and struggles with depression and alcoholism. Despite his rough exterior, he has a deep love for animals—especially chickens—and slowly reveals a more caring and vulnerable side as you build a relationship with him.",
    lovedGifts: [
      "../img/Beer.png",
      "../img/Hot_Pepper.png",
      "../img/Pepper_Poppers.png",
      "../img/Pizza.png",
    ],
    lovedGiftsTitle: ["Beer", "Hot Pepper", "Pepper Poppers", "Pizza"],
    objectPosition: "0px 10px",
  },
  abigail: {
    profilePicture: profilePictureAbigail.src,
    name: "Abigail",
    birthday: "Fall 13",
    bio: "Abigail is a spirited and independent young woman with a taste for adventure and the occult. She loves the supernatural, often plays video games, and dreams of exploring caves. Living with her parents at the general store, she often feels out of place in the quiet life of Pelican Town.",
    lovedGifts: [
      "../img/Amethyst.png",
      "../img/Banana_Pudding.png",
      "../img/Blackberry_Cobbler.png",
      "../img/Chocolate_Cake.png",
      "../img/Monster_Compendium.png",
      "../img/Pufferfish.png",
      "../img/Pumpkin.png",
      "../img/Spicy_Eel.png",
    ],
    lovedGiftsTitle: [
      "Amethyst",
      "Banana Pudding",
      "Blackberry Cobbler",
      "Chocolate Cake",
      "Monster Compendium",
      "Pufferfish",
      "Pumpkin",
      "Spicy Eel",
    ],
    objectPosition: "8px 5px",
  },
  emily: {
    profilePicture: profilePictureEmily.src,
    name: "Emily",
    birthday: "Spring 27",
    bio: "Emily is a free-spirited and creative soul who works part-time at the saloon. She’s passionate about sewing, spirituality, and self-expression through fashion. Emily is known for her colorful personality, positive energy, and love for nature and dreams.",
    lovedGifts: [
      "../img/Amethyst.png",
      "../img/Aquamarine.png",
      "../img/Cloth.png",
      "../img/Emerald.png",
      "../img/Jade.png",
      "../img/Parrot_Egg.png",
      "../img/Ruby.png",
      "../img/Survival_Burger.png",
      "../img/Topaz.png",
      "../img/Wool.png",
    ],
    lovedGiftsTitle: [
      "Amethyst",
      "Aquamarine",
      "Cloth",
      "Emerald",
      "Jade",
      "Parrot Egg",
      "Ruby",
      "Survival Burger",
      "Topaz",
      "Wool",
    ],
    objectPosition: "2px 5px",
  },
  haley: {
    profilePicture: profilePictureHaley.src,
    name: "Haley",
    birthday: "Spring 14",
    bio: "Haley is a fashionable and image-conscious young woman who initially comes off as superficial, but reveals a more caring and thoughtful side as you get to know her. She loves photography, the beach, and sunny weather, and lives with her sister Emily in Pelican Town.",
    lovedGifts: [
      "../img/Coconut.png",
      "../img/Fruit_Salad.png",
      "../img/Pink_Cake.png",
      "../img/Sunflower.png",
    ],
    lovedGiftsTitle: ["Coconut", "Fruit Salad", "Pink Cake", "Sunflower"],
    objectPosition: "5px 5px",
  },
  leah: {
    profilePicture: profilePictureLeah.src,
    name: "Leah",
    birthday: "Winter 23",
    bio: "Leah is a talented sculptor and nature lover who lives alone in a cozy cabin in the forest. She’s passionate about art, foraging, and living a simple, peaceful life close to nature. Though a bit shy at first, she opens up through thoughtful conversation and shared creativity.",
    lovedGifts: [
      "../img/Goat_Cheese.png",
      "../img/Poppyseed_Muffin.png",
      "../img/Salad.png",
      "../img/Stir_Fry.png",
      "../img/Truffle.png",
      "../img/Vegetable_Medley.png",
      "../img/Wine.png",
    ],
    lovedGiftsTitle: [
      "Goat Cheese",
      "Poppyseed Muffin",
      "Salad",
      "Stir Fry",
      "Truffle",
      "Vegetable Medley",
      "Wine",
    ],
    objectPosition: "5px 5px",
  },
  maru: {
    profilePicture: profilePictureMaru.src,
    name: "Maru",
    birthday: "Summer 10",
    bio: "Maru is an intelligent and curious inventor who works at the local clinic and spends her free time building gadgets in her workshop. She has a passion for science, astronomy, and robotics, and is always looking for ways to improve the world through innovation.",
    lovedGifts: [
      "../img/Battery_Pack.png",
      "../img/Cauliflower.png",
      "../img/Cheese_Cauliflower.png",
      "../img/Diamond.png",
      "../img/Gold_Bar.png",
      "../img/Iridium_Bar.png",
      "../img/Miner's_Treat.png",
      "../img/Pepper_Poppers.png",
      "../img/Radioactive_Bar.png",
      "../img/Rhubarb_Pie.png",
      "../img/Strawberry.png",
    ],
    lovedGiftsTitle: [
      "Battery Pack",
      "Cauliflower",
      "Cheese Cauliflower",
      "Diamond",
      "Dwarf Gadget",
      "Gold Bar",
      "Iridium Bar",
      "Miner's Treat",
      "Pepper Poppers",
      "Radioactive Bar",
      "Rhubarb Pie",
      "Strawberry",
    ],
    objectPosition: "2px 10px",
  },
  penny: {
    profilePicture: profilePicturePenny.src,
    name: "Penny",
    birthday: "Fall 2",
    bio: "Penny is a gentle and kind-hearted teacher who dedicates her time to educating the local children, Vincent and Jas. She lives in a trailer with her alcoholic mother, Pam, and dreams of a better life. Penny loves reading, quiet moments, and helping others.",
    lovedGifts: [
      "../img/Diamond.png",
      "../img/Emerald.png",
      "../img/Melon.png",
      "../img/Poppy.png",
      "../img/Gold_Bar.png",
      "../img/Poppyseed_Muffin.png",
      "../img/Red_Plate.png",
      "../img/Roots_Platter.png",
      "../img/Sandfish.png",
      "../img/Tom_Kha_Soup.png",
    ],
    lovedGiftsTitle: [
      "Diamond",
      "Emerald",
      "Melon",
      "Poppy",
      "Gold Bar",
      "Poppyseed Muffin",
      "Red Plate",
      "Roots Platter",
      "Sandfish",
      "Tom Kha Soup",
    ],
    objectPosition: "2px 10px",
  },
};

let villagerIDs = [
  "alex",
  "elliott",
  "harvey",
  "sam",
  "sebastian",
  "shane",
  "abigail",
  "emily",
  "haley",
  "leah",
  "maru",
  "penny",
];

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

//changing card informations
villagerIDs.forEach((id) => {
  let card = document.getElementById(id);
  card.addEventListener("click", () => {
    const villager = villagers[id];
    modalVillagerPicture.src = villager.profilePicture;
    modalVillagerName.innerHTML = villager.name;
    modalVillagerBirthday.innerHTML = villager.birthday;
    modalVillagerBio.innerHTML = villager.bio;
    modalVillagerPicture.style.objectPosition = villager.objectPosition;
    addGift(id);
  });
});
