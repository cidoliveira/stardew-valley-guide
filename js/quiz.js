let profileName = document.querySelector(".profile-name");
let profilePicture = document.querySelector(".profile-picture");
let slogan = document.querySelector(".slogan");
let paragraph1 = document.querySelector(".paragraph1");
let paragraph2 = document.querySelector(".paragraph2");

let bachelors = {
  alex: {
    counter: 0,
    slogan: "Confident. Determined. Always on the move.",
    avatar: "./img/Alex.webp",
    paragraph1:
      "You’re someone who thrives on energy and ambition. Just like Alex, you believe in working hard, staying fit, and pushing toward your goals—whether it’s a championship trophy or a better version of yourself.",
    paragraph2:
      "But beyond the tough exterior, there’s a big heart. You value loyalty, you protect your circle, and deep down, you're just searching for connection and purpose. People might not always see it right away, but once they do, they know you're all in.",
    keyTraits: "Competitive • Loyal • Ambitious • Passionate",
  },

  elliott: {
    counter: 0,
    slogan: "Romantic. Artistic. A dreamer at heart.",
    avatar: "./img/Elliott_Blush.png",
    paragraph1:
      "You’re someone who lives with one foot in reality and the other in a world of poetry, beauty, and imagination. Like Elliott, you’re driven by creativity and a deep desire to express yourself—whether through words, art, or meaningful conversations.",
    paragraph2:
      "Beneath your refined and sometimes mysterious surface is a kind soul who longs for connection, inspiration, and a life that feels truly fulfilling. You value depth over surface, passion over routine, and you’re always chasing that next spark of meaning.",
    keyTraits: "Romantic • Creative • Thoughtful • Idealistic",
  },

  harvey: {
    counter: 0,
    slogan: "Reliable. Caring. A gentle soul with a big heart.",
    avatar: "./img/Harvey.png",
    paragraph1:
      "You’re someone who values stability, responsibility, and looking out for the well-being of others. Like Harvey, you have a nurturing spirit and a deep sense of duty. People trust you because you’re dependable and always willing to help, no matter what.",
    paragraph2:
      "Behind your calm and sometimes reserved nature lies someone incredibly warm, thoughtful, and sincere. You cherish meaningful connections, simple joys, and the quiet satisfaction of making a difference in the lives of those around you.",
    keyTraits: "Dependable • Compassionate • Intelligent • Humble",
  },

  sam: {
    counter: 0,
    slogan: "Free-spirited. Upbeat. A heart full of dreams.",
    avatar: "./img/Sam.png",
    paragraph1:
      "You’re someone who lives life with energy, creativity, and a thirst for fun. Like Sam, you have a carefree spirit, always chasing the next adventure—whether it's jamming with friends, skateboarding, or dreaming of something bigger.",
    paragraph2:
      "Beneath your playful and easygoing exterior is someone deeply loyal and caring. You believe in living authentically, following your passions, and supporting those you love, even when life gets unpredictable.",
    keyTraits: "Energetic • Fun-loving • Loyal • Creative",
  },

  sebastian: {
    counter: 0,
    slogan: "Mysterious. Thoughtful. Deeply creative.",
    avatar: "./img/Sebastian.png",
    paragraph1:
      "You value your independence and personal space, much like Sebastian. You’re introspective, analytical, and tend to observe the world from the sidelines. Whether coding late into the night or riding your motorcycle alone, you find peace in solitude and creative outlets.",
    paragraph2:
      "While you might seem distant at first, those who take the time to truly know you discover a loyal, deeply caring soul. You crave meaningful connections—just on your own terms—and value authenticity over surface-level interactions.",
    keyTraits: "Independent • Intelligent • Creative • Loyal",
  },

  shane: {
    counter: 0,
    slogan: "Blunt. Honest. A soft heart under tough layers.",
    avatar: "./img/Shane.png",
    paragraph1:
      "You’re someone who’s been through your share of struggles but keeps pushing forward. Like Shane, you might come off as sarcastic or guarded, but it’s a way of protecting yourself in a world that hasn’t always been kind.",
    paragraph2:
      "Underneath the dry humor and blunt exterior is a fiercely loyal and caring person. You value stability, simple joys like a favorite meal or a good beer, and quietly show love to the people who matter most—even if words don’t come easy.",
    keyTraits: "Loyal • Honest • Witty • Protective",
  },

  abigail: {
    counter: 0,
    slogan: "Curious. Adventurous. Marches to her own beat.",
    avatar: "./img/Abigail.png",
    paragraph1:
      "You’re someone who craves adventure and refuses to fit into anyone’s expectations. Like Abigail, you’re drawn to the unconventional—whether it’s spelunking in mysterious caves or diving headfirst into your latest creative obsession.",
    paragraph2:
      "Beneath your rebellious spirit is someone deeply thoughtful and caring. You value authenticity, meaningful experiences, and connecting with others who embrace life’s mysteries with the same open heart and curious mind.",
    keyTraits: "Adventurous • Independent • Creative • Free-Spirited",
  },

  haley: {
    counter: 0,
    slogan: "Charming. Stylish. More than meets the eye.",
    avatar: "./img/Haley (1).png",
    paragraph1:
      "At first glance, you love the finer things—beauty, aesthetics, and expressing yourself through style. Like Haley, you have an eye for detail, enjoy capturing perfect moments, and care about how the world looks and feels around you.",
    paragraph2:
      "But there’s depth behind the charm. Beneath the surface, you value connection, growth, and stepping outside your comfort zone. When you let people in, they discover someone caring, thoughtful, and surprisingly down-to-earth.",
    keyTraits: "Creative • Bold • Outgoing • Growth-Oriented",
  },

  leah: {
    counter: 0,
    slogan: "Creative. Independent. In harmony with nature.",
    avatar: "./img/Leah.png",
    paragraph1:
      "You’re someone who finds inspiration in quiet moments, creativity, and the beauty of the natural world. Like Leah, you value your independence and are deeply connected to your passions—whether that’s art, nature, or a life built on your own terms.",
    paragraph2:
      "You seek meaningful connections but also cherish your solitude. People admire your authenticity, your grounded spirit, and your courage to follow a less conventional path in pursuit of what truly matters to you.",
    keyTraits: "Artistic • Independent • Grounded • Nature-Loving",
  },

  maru: {
    counter: 0,
    slogan: "Curious. Driven. A mind always building.",
    avatar: "./img/Maru.png",
    paragraph1:
      "You’re someone who thrives on curiosity, problem-solving, and the drive to innovate. Like Maru, you’re constantly learning, tinkering, and dreaming of ways to improve the world—whether it’s through technology, science, or creativity.",
    paragraph2:
      "Beneath your logical mind, there’s a caring heart. You balance intellect with compassion, and people admire how you show up for others while pursuing your own ambitious goals. You're the person who proves that kindness and brilliance can go hand in hand.",
    keyTraits: "Intelligent • Innovative • Ambitious • Compassionate",
  },

  penny: {
    counter: 0,
    slogan: "Kind-hearted. Nurturing. Quietly strong.",
    avatar: "./img/Penny.png",
    paragraph1:
      "You’re a gentle and caring soul who values family and looking out for others. Like Penny, you prefer quiet actions and simple gestures that make a big difference in the lives around you.",
    paragraph2:
      "Behind your reserved nature lies a quiet strength and deep resilience. You truly care about others’ well-being and have a special way of bringing comfort and hope, even in tough times.",
    keyTraits: "Gentle • Caring • Resilient • Compassionate",
  },

  emily: {
    counter: 0,
    slogan: "Vibrant. Free-spirited. A creator of joy.",
    avatar: "./img/Emily.png",
    paragraph1:
      "You radiate creativity, positivity, and a deep appreciation for the beauty in life. Like Emily, you embrace your uniqueness, love expressing yourself through art, fashion, or dance, and bring color to every space you enter.",
    paragraph2:
      "Beneath your playful energy, there’s a deeply empathetic soul. You care about the people around you and the world at large. Your presence inspires others to embrace their authentic selves and to find magic in the ordinary.",
    keyTraits: "Creative • Joyful • Empathetic • Free-spirited",
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
let profileDisplay = document.querySelector(".profile-display");
let optionList = document.querySelector("ul");

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

let counters = [
  bachelors.alex.counter,
  bachelors.elliott.counter,
  bachelors.harvey.counter,
  bachelors.sam.counter,
  bachelors.sebastian.counter,
  bachelors.shane.counter,
  bachelors.abigail.counter,
  bachelors.haley.counter,
  bachelors.leah.counter,
  bachelors.maru.counter,
  bachelors.penny.counter,
  bachelors.emily.counter,
];

let option1QuestionMap = [
  "abigail",
  "penny",
  "sebastian",
  "emily",
  "leah",
  "shane",
  "shane",
  "shane",
  "abigail",
  "penny",
  "elliott",
  "sam",
];

let option2QuestionMap = [
  "haley",
  "leah",
  "shane",
  "maru",
  "sebastian",
  "penny",
  "harvey",
  "sam",
  "elliott",
  "haley",
  "abigail",
  "sebastian",
];

let option3QuestionMap = [
  "sam",
  "elliott",
  "penny",
  "harvey",
  "emily",
  "harvey",
  "maru",
  "alex",
  "emily",
  "harvey",
  "maru",
  "abigail",
];

let option4QuestionMap = [
  "alex",
  "emily",
  "haley",
  "sam",
  "maru",
  "leah",
  "haley",
  "elliott",
  "leah",
  "alex",
  "sebastian",
  "alex",
];

let option1QuestionIndex = 0;
let option1QuestionMapping = 0;
let option2QuestionIndex = 0;
let option2QuestionMapping = 0;
let option3QuestionIndex = 0;
let option3QuestionMapping = 0;
let option4QuestionIndex = 0;
let option4QuestionMapping = 0;

let characterCounter = options.forEach((i) => {
  i.addEventListener("click", (e) => {
    const classes = e.target.classList;

    if (classes.contains("abigail")) {
      bachelors.abigail.counter++;
      console.log(`Abigail: ${bachelors.abigail.counter}`);
    }
    if (classes.contains("alex")) {
      bachelors.alex.counter++;
      console.log(`Alex: ${bachelors.alex.counter}`);
    }
    if (classes.contains("sam")) {
      bachelors.sam.counter++;
      console.log(`Sam: ${bachelors.sam.counter}`);
    }
    if (classes.contains("haley")) {
      bachelors.haley.counter++;
      console.log(`Haley: ${bachelors.haley.counter}`);
    }
    if (classes.contains("elliott")) {
      bachelors.elliott.counter++;
      console.log(`Elliott: ${bachelors.elliott.counter}`);
    }
    if (classes.contains("harvey")) {
      bachelors.harvey.counter++;
      console.log(`Harvey: ${bachelors.harvey.counter}`);
    }
    if (classes.contains("sebastian")) {
      bachelors.sebastian.counter++;
      console.log(`Sebastian: ${bachelors.sebastian.counter}`);
    }
    if (classes.contains("shane")) {
      bachelors.shane.counter++;
      console.log(`Shane: ${bachelors.shane.counter}`);
    }
    if (classes.contains("leah")) {
      bachelors.leah.counter++;
      console.log(`Leah: ${bachelors.leah.counter}`);
    }
    if (classes.contains("maru")) {
      bachelors.maru.counter++;
      console.log(`Maru: ${bachelors.maru.counter}`);
    }
    if (classes.contains("penny")) {
      bachelors.penny.counter++;
      console.log(`Penny: ${bachelors.penny.counter}`);
    }
    if (classes.contains("emily")) {
      bachelors.emily.counter++;
      console.log(`Emily: ${bachelors.emily.counter}`);
    }
  });
});

let textChanger = options.forEach((i) => {
  i.addEventListener("click", () => {
    function replaceClass() {
      optionOne.classList.replace(
        option1QuestionMap[option1QuestionMapping],
        option1QuestionMap[(option1QuestionMapping += 1)]
      );
      optionTwo.classList.replace(
        option2QuestionMap[option2QuestionMapping],
        option2QuestionMap[(option2QuestionMapping += 1)]
      );
      optionThree.classList.replace(
        option3QuestionMap[option3QuestionMapping],
        option3QuestionMap[(option3QuestionMapping += 1)]
      );
      optionFour.classList.replace(
        option4QuestionMap[option4QuestionMapping],
        option4QuestionMap[(option4QuestionMapping += 1)]
      );
    }
    replaceClass();
    question.innerText = questionIndex[indexArray++];
    optionOne.innerText = option1Index[option1Array++];
    optionTwo.innerText = option2Index[option2Array++];
    optionThree.innerText = option3Index[option3Array++];
    optionFour.innerText = option4Index[option4Array++];

    if (indexArray > questionIndex.length) {
      question.innerText = "Your stardew match is...";
      options.forEach((i) => {
        optionList.classList.add("display-none");
        i.classList.add("display-none");
        profileDisplay.classList.add("profile");
        question.classList.add("text-center");
      });
    }
  });
});
