# 🎮 Prime Numbers Pong 

A creative coding and digital art game that reimagines classic Pong through
mathematics, rhythm, and generative visuals.

Prime Numbers Pong is an experimental 4-player Pong game where prime numbers
drive gameplay mechanics, visual events, and audio rhythms. The project blends
game logic with creative coding, focusing on interaction, timing, and
mathematical structures rather than competition alone.

---

## ✨ Features

### Gameplay
- **4-Player Pong**: One human player vs. three AI-controlled paddles
- **Prime-Driven Mechanics**: Prime numbers unlock special actions and states
- **Shot System**: Fire projectiles to temporarily freeze AI paddles
- **Special Primes**: Fermat, Mersenne, Palindromic, Twin, and Sophie Germain primes
- **Progressive Difficulty**: Paddle strength and behavior evolve over time

### Visuals
- Generative neon aesthetics
- Dynamic paddles and animated obstacles
- Multi-layered collision dots (LAUFLICHTER system)
- Prime-based rhythm and timing patterns
- Real-time visual feedback linked to mathematical states

### Audio
- Retro-style sound effects
- Prime-triggered audio events
- All sounds modified and integrated specifically for gameplay feedback

---

## 🕹 Controls

- **Mouse movement** — control the player paddle (bottom)
- **Mouse click** — fire a shot (available shots increase on prime scores)
- **Pause / Sound toggle** — via in-game UI

---

## 🛠 Technologies

- **JavaScript (ES6+)**
- **p5.js** — rendering, animation, interaction
- **p5.sound.js** — audio playback and timing
- **HTML5 Canvas**
- **CSS**

---

## 🚀 Play Online

Live demo:  
👉 https://rm-r3.github.io/primenumberspong 

---

## 💻 Local Development

Clone the repository:

```bash
git clone https://github.com/rm-r3/primenumberspong.git
cd primenumberspong

—
Run a local server (required for audio loading):
# Python 3
python -m http.server 8000

—
Open in browser:
http://localhost:8000

—

📁 Project Structure
primenumberspong/
├── index.html                  # Main game entry point
├── manifest.webmanifest        # PWA / Android install configuration
├── sw.js                       # Service Worker (offline support)
├── apple-touch-icon.png        # iOS Home Screen icon (180×180)
├── favicon_pong_32x32.svg      # SVG favicon
├── favicon_pong_32x32.png      # PNG favicon fallback
├── icon-192.png                # Android / PWA icon
├── icon-192-maskable.png       # Android maskable icon
├── icon-512.png                # Android / PWA icon
├── icon-512-maskable.png       # Android maskable icon
├── AUDIO_NOTICE.txt            # Audio asset licensing notes
├── LICENSE.md                     # MIT License
├── README.md
├── .gitignore
├── fonts/
│   ├── Rubik80sFade-Regular.ttf
│   └── SIL OPEN FONT LICENSE Version 1.1.rtf
└── sound/
    └── fx_*.mp3                # Game sound effects


📚 Third-Party Assets & Licenses

This project includes third-party assets with their own licenses.

—
Fonts
	•	Rubik 80s Fade
Licensed under the SIL Open Font License 1.1
Source: https://fonts.google.com/specimen/Rubik+80s+Fade
Full license text included in fonts/LICENSE.txt
	•	Press Start 2P
Licensed under the SIL Open Font License 1.1
Served via https://fonts.bunny.net
Source: https://fonts.google.com/specimen/Press+Start+2P



—
Audio

Sound effects were originally sourced from Artlist and modified by the
author for use in this game.

Original sound designers include:
	•	Alberto Sueri
	•	Folia Soundstudio
	•	Soundholder

Audio files are included solely as part of this project and are not intended
for standalone redistribution or reuse outside this game.

For details, see AUDIO_NOTICE.txt.
—
Libraries
	•	p5.js © Processing Foundation
	•	p5.sound.js © Processing Foundation

—

📜 License

The source code of this project is licensed under the MIT License.
See the LICENSE file for details.

Third-party assets are licensed under their respective licenses.

—

🎨 Author

Rene Mathis
AI Product · Creative coding · Interactive systems · Digital art
	•	GitHub: https://github.com/rm-r3
	•	LinkedIn: https://www.linkedin.com/in/rene-mathis-conceptdesign

—

🌟 Notes

This project is intended as a creative coding and digital art experiment.
It emphasizes exploration, systems thinking, and generative interaction rather
than competitive balance.

—

© 2023–2026 Rene Mathis
*Where the beauty of mathematics meets gameplay*