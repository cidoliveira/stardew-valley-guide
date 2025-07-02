# Stardew Valley Matchmaker

A **12‑question personality quiz** that pairs you with the Stardew Valley bachelor or bachelorette whose vibe most closely matches your own. Built with nothing but **HTML, CSS and vanilla JavaScript**—no frameworks, no build step.

Live demo → <https://stardew-valley-matchmaker.vercel.app>

> **Disclaimer 🪴** This fan‑made project is **not** affiliated with ConcernedApe or Chucklefish. All game art and character names belong to their respective owners.

---

## ✨ Features

| Feature | Description |
| ------- | ----------- |
| **Dynamic scoring** | Each answer adds points to different characters; at the end the highest score wins. The logic is handled in a single JS file and runs entirely in‑browser. |
| **Rich character profiles** | After the quiz you see a custom card with avatar, catch‑phrase, paragraphs of personality text and key traits. |
| **Mobile‑first design** | Flexible layout, big tap targets and readable typography look great on phones and desktops alike. |
| **Instant load, zero dependencies** | Pure front‑end assets—just open `index.html` or host the folder on any static server. |
| **Lightweight bundle** | ~60 % JavaScript, 26 % CSS, 15 % HTML. |

---

## 🛠 Tech Stack

- **HTML5** for structure  
- **CSS3** for styling (custom properties, flexbox)  
- **JavaScript (ES6)** for quiz logic and DOM updates

---

## 🚀 Quick Start

```bash
# 1 – Clone the repo
git clone https://github.com/cidoliveira/stardew-valley-matchmaker.git
cd stardew-valley-matchmaker

# 2 – Open the app
# (no build or install needed)
open index.html   # macOS
# or
start index.html  # Windows

# Want to host locally?
npx serve .       # any static server works
```

---

## 📂 Project Structure

```
├── css/            # Global styles, media queries & utility classes
├── img/            # Character avatars & decorative art
├── js/
│   └── quiz.js     # Question data, scoring & UI updates
├── index.html      # Landing page with quiz link & character gallery
└── quiz.html       # Quiz interface
```

---

## 🔧 Customisation

| Want to… | File & line |
| -------- | ----------- |
| **Change questions / answers** | Edit the `quizContent` object in `js/quiz.js`. |
| **Add or remove characters** | Update the `bachelors` object, the four `optionXQuestionMap` arrays and supply a matching avatar in `img/`. |
| **Tweak colours / fonts** | Modify CSS variables in `css` files. |
| **Adjust quiz length** | Add or delete entries in `quizContent`; the logic automatically adjusts. |

---

## 🤝 Contributing

1. **Fork** the project  
2. Create a branch: `git checkout -b feat/my-feature`  
3. **Commit** your changes: `git commit -m "feat: add my feature"`  
4. **Push**: `git push origin feat/my-feature`  
5. Open a **Pull Request**

---

## 📄 License

Source code is released under the **MIT License**. Stardew Valley assets are used under *fair use* for non‑commercial fan content; please do not use them commercially without permission from ConcernedApe.

---

Made with&nbsp;♥ by [Cid Oliveira](https://github.com/cidoliveira)
