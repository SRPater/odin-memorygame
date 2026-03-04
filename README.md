# Pokémon Memory Game

A polished, React-based memory game where players must click on unique Pokémon without selecting the same one twice. Built with Vite and the PokéAPI as part of the [The Odin Project](https://theodinproject.com) curriculum.

## 🎮 How to Play
1. Click any Pokémon card to earn a point.
2. After every click, the board shuffles.
3. **The Challenge:** Do not click the same Pokémon more than once!
4. If you click a duplicate, the game ends. If you click all 12 unique Pokémon, you win!

## ✨ Features
* **Live Data:** Fetches random Pokémon data and high-resolution official artwork from the [PokéAPI](https://pokeapi.co/).
* **Custom Modal System:** Replaces native browser alerts with a cohesive, state-driven modal UI for game instructions, wins, and losses.
* **Intelligent Shuffling:** Uses the Fisher-Yates shuffle algorithm to ensure the board is randomized after every move.
* **Retry vs. Reset:** Players can choose to "Retry" (reshuffle the same 12 Pokémon) or "Reset" (fetch a brand new set from the API).
* **Score Tracking:** Real-time score updates and persistent "Best Score" tracking during your session.

## 🛠️ Tech Stack
* **React** (Functional Components & Hooks)
* **Vite** (Build Tool)
* **CSS3** (Custom animations and responsive grid layout)
* **PokéAPI** (External REST API)

## 🚀 Getting Started
1. **Fork the repository:**
   Click the "Fork" button at the top right of this page to create your own copy of the project.
2. **Clone your fork:**
   `git clone [https://github.com/your-username/odin-memorygame.git](https://github.com/your-username/pokemon-memory-game.git)`
3. **Install dependencies:**
   `npm install`
4. **Run the development server:**
   `npm run dev`
5. **Build for production:**
   `npm run build`
