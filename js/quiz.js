let bachelors = {
  alex: {
    counter: 0,
    message: "",
    avatar: "",
  },
  elliott: {
    counter: 0,
    message: "",
    avatar: "",
  },
  harvey: {
    counter: 0,
    message: "",
    avatar: "",
  },
  sam: {
    counter: 0,
    message: "",
    avatar: "",
  },
  sebastian: {
    counter: 0,
    message: "",
    avatar: "",
  },
  shane: {
    counter: 0,
    message: "",
    avatar: "",
  },
  abigail: {
    counter: 0,
    message: "",
    avatar: "",
  },
  haley: {
    counter: 0,
    message: "",
    avatar: "",
  },
  leah: {
    counter: 0,
    message: "",
    avatar: "",
  },
  maru: {
    counter: 0,
    message: "",
    avatar: "",
  },
  penny: {
    counter: 0,
    message: "",
    avatar: "",
  },
  emily: {
    counter: 0,
    message: "",
    avatar: "",
  },
};

let quizContent = {
  question1: {
    question: "1. It’s a totally free Saturday. You’d rather…",
    option1: "Dive into the mines or beat a rogue-like high score.",
    option2: "Hunt the cutest coffee spot for an photo shoot.",
    option3: "Jam with the band and grab a burger on the way home.",
    option4: "Hit the field for a serious workout, then protein shake.",
  },
  question2: {
    question: "2. Rainy-afternoon bliss looks like…",
    option1: "Reading stories to kids in the library corner.",
    option2: "Sculpting or painting while it drizzles outside.",
    option3: "Drafting the next chapter of your novel by the sea.",
    option4: "Sewing a wild outfit and dancing in the living-room.",
  },
  question3: {
    question: "3. A surprise night carnival rolls into town. You…",
    option1: "Retreat to the basement—there’s code to write.",
    option2: "Grab a beer and people-watch from the sidelines.",
    option3: "Shepherd every child to the best rides.",
    option4: "Dash around snapping flawless photos for social media.",
  },
  question4: {
    question: "4. Desk item you cannot live without:",
    option1: "A rainbow crystal that “just feels good.",
    option2: "A micro-soldering kit for side projects.",
    option3: "A model plane you tinker with between tasks.",
    option4: "A custom guitar pick that’s seen 100 gigs.",
  },
  question5: {
    question: "5. Dream weekend trip:",
    option1: "An artist’s cabin deep in the woods.",
    option2: "Neon city nights full of arcades and ramen.",
    option3: "A three-day electronic-music & dance festival.",
    option4: "Behind-the-scenes tour of a major observatory.",
  },
  question6: {
    question: "6. Comfort food after a rough day:",
    option1: "Fried chicken and a cold Joja Cola.",
    option2: "Thick vegetable soup made from scratch.",
    option3: "Garden salad with calming herbal tea.",
    option4: "Goat-cheese salad drizzled with honey.",
  },
  question7: {
    question: "7. Your core motivation:",
    option1: "Finally having stable finances.",
    option2: "Keeping people healthy and safe.",
    option3: "Figuring out how everything works.",
    option4: "Creating beauty—and getting credit for it.",
  },
  question8: {
    question: "8. In a co-op video game you’re usually the…",
    option1: "Hammer-swinging tank who soaks damage.",
    option2: "Speedy DPS who loves rhythm mini-games.",
    option3: "Star striker in every sports title.",
    option4: "Bard/support who writes the lore in real time.",
  },
  question9: {
    question: "9. You unearth a mysterious artifact. First instinct?",
    option1: "Keep it as a lucky charm—might be magic!",
    option2: "Describe it poetically in your journal.",
    option3: "Turn it into a statement accessory.",
    option4: "Sketch it, then carve a wooden replica.",
  },
  question10: {
    question: "10. Favorite season in Pelican Town:",
    option1: "Fall—crunchy leaves and new lessons.",
    option2: "Spring—prime flower-photography season.",
    option3: "Summer—Gridball playoffs and sunny workouts.",
    option4: "Winter—You love having a warm cup of coffee.",
  },
  question11: {
    question: "11. Personal motto:",
    option1: "Let the tide write the story.",
    option2: "Adventure begins outside your comfort zone.",
    option3: "Build, test, repeat!",
    option4: "Quiet minds code deep.",
  },
  question12: {
    question: "12. Friends describe you as…",
    option1: "The walking party playlist.",
    option2: "Loyal but hard to read at first.",
    option3: "Fearless and a little eccentric.",
    option4: "Competitive, upbeat, always in motion.",
  },
};

console.log(quizContent);

let question = document.querySelector(".question");
let optionOne = document.getElementById("option1");
let optionTwo = document.getElementById("option2");
let optionThree = document.getElementById("option3");
let optionFour = document.getElementById("option4");
let options = document.querySelectorAll(".option");

console.log(options);

let questionIndex = [
  quizContent.question1.question,
  quizContent.question2.question,
  quizContent.question3.question,
  quizContent.question4.question,
  quizContent.question5.question,
  quizContent.question6.question,
  quizContent.question7.question,
  quizContent.question8.question,
  quizContent.question9.question,
  quizContent.question10.question,
  quizContent.question11.question,
  quizContent.question12.question,
];

let option1Index = [
  quizContent.question1.option1,
  quizContent.question2.option1,
  quizContent.question3.option1,
  quizContent.question4.option1,
  quizContent.question5.option1,
  quizContent.question6.option1,
  quizContent.question7.option1,
  quizContent.question8.option1,
  quizContent.question9.option1,
  quizContent.question10.option1,
  quizContent.question11.option1,
  quizContent.question12.option1,
];

let option2Index = [
  quizContent.question1.option2,
  quizContent.question2.option2,
  quizContent.question3.option2,
  quizContent.question4.option2,
  quizContent.question5.option2,
  quizContent.question6.option2,
  quizContent.question7.option2,
  quizContent.question8.option2,
  quizContent.question9.option2,
  quizContent.question10.option2,
  quizContent.question11.option2,
  quizContent.question12.option2,
];

let option3Index = [
  quizContent.question1.option3,
  quizContent.question2.option3,
  quizContent.question3.option3,
  quizContent.question4.option3,
  quizContent.question5.option3,
  quizContent.question6.option3,
  quizContent.question7.option3,
  quizContent.question8.option3,
  quizContent.question9.option3,
  quizContent.question10.option3,
  quizContent.question11.option3,
  quizContent.question12.option3,
];

let option4Index = [
  quizContent.question1.option4,
  quizContent.question2.option4,
  quizContent.question3.option4,
  quizContent.question4.option4,
  quizContent.question5.option4,
  quizContent.question6.option4,
  quizContent.question7.option4,
  quizContent.question8.option4,
  quizContent.question9.option4,
  quizContent.question10.option4,
  quizContent.question11.option4,
  quizContent.question12.option4,
];

let indexArray = 1;
let option1Array = 1;
let option2Array = 1;
let option3Array = 1;
let option4Array = 1;

options.forEach((i) => {
  i.addEventListener("click", () => {
    question.innerText = questionIndex[indexArray++];
    optionOne.innerText = option1Index[option1Array++];
    optionTwo.innerText = option2Index[option2Array++];
    optionThree.innerText = option3Index[option3Array++];
    optionFour.innerText = option4Index[option4Array++];
    if (indexArray > questionIndex.length) {
      question.innerText = "Your stardew match is...";
      options.forEach((i) => {
        i.classList.add("display-none");
      });
    }
  });
});

let counters = [
  bachelors.alex.counter,
  bachelors.haley.counter,
  bachelors.abigail.counter,
  bachelors.leah.counter,
  bachelors.maru.counter,
  bachelors.penny.counter,
  bachelors.emily.counter,
  bachelors.harvey.counter,
  bachelors.sebastian.counter,
  bachelors.elliott.counter,
  bachelors.sam.counter,
  bachelors.shane.counter,
];
