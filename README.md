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
- **Shot System**: Fire balls to temporarily freeze AI paddles
- **Special Primes**: Fermat, Mersenne, Palindromic, Twin, and Sophie Germain primes
- **Progressive Difficulty**: Paddle strength and behavior evolve over time
- **UFO Autopilot**: AI-controlled player mode for demonstration or testing

### Visuals
- Generative neon aesthetics
- Dynamic paddles and animated obstacles
- Multi-layered collision dots (LAUFLICHTER system)
- Prime-based rhythm and timing patterns
- Real-time visual feedback linked to mathematical states
- Rotating obstacles that spawn on prime seconds

### Audio
- Retro-style sound effects
- Prime-triggered audio events
- All sounds modified and integrated specifically for gameplay feedback

---

## 🕹 Controls

- **Mouse movement** — control the player paddle (bottom)
- **Mouse click** — fire a shot (available shots increase on prime scores)
- **UFOPILOT** — toggle AI autopilot mode
- **SOUND ON/OFF** — toggle audio
- **PAUSE** — pause/resume game
- **ABOUT** — view game information and credits

---

## 🛠 Technologies

- **JavaScript (ES6+)**
- **p5.js v1.4.0** — rendering, animation, interaction
- **HTML5 Canvas**
- **CSS3** — responsive design and animations
- **Google Analytics (GA4)** — anonymous gameplay tracking

---

## 🚀 Play Online

Live demo:  
👉 **https://rm-r3.github.io/primenumberspong**

---

## 💻 Local Development

Clone the repository:

```bash
git clone https://github.com/rm-r3/primenumberspong.git
cd primenumberspong
```

Run a local server (required for audio loading):

```bash
# Python 3
python -m http.server 8000
```

Open in browser:

```
http://localhost:8000
```

---

## 📁 Project Structure

```
primenumberspong/
├── index.html                  # Main game entry point (~2,500 lines)
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
├── ANALYTICS_TRACKING.md       # Analytics implementation documentation
├── LICENSE.md                  # MIT License
├── README.md                   # This file
├── .gitignore
├── fonts/
│   ├── Rubik80sFade-Regular.ttf
│   └── SIL OPEN FONT LICENSE Version 1.1.rtf
└── sound/
    └── fx_*.mp3                # Game sound effects (14 files)
```

---

## 📊 Analytics & Privacy

This game includes **anonymous analytics** via Google Analytics (GA4) to track gameplay patterns and feature usage. No personal information is collected.

### What's Tracked
- Gameplay statistics (scores, prime achievements)
- UI interactions (button clicks)
- Feature usage (autopilot, sound settings)
- Session performance metrics

### What's NOT Tracked
- Personal information
- User identity
- Mouse movements
- Keyboard input
- IP addresses (anonymized by GA4)

### Local Storage
The game stores only two numbers in `localStorage`:
- Personal best score
- Personal best prime number

For complete analytics documentation, see [ANALYTICS_TRACKING.md](ANALYTICS_TRACKING.md).

---

## 📚 Third-Party Assets & Licenses

This project includes third-party assets with their own licenses.

### Fonts

**Rubik 80s Fade**  
- Licensed under the SIL Open Font License 1.1  
- Source: https://fonts.google.com/specimen/Rubik+80s+Fade  
- Full license text included in `fonts/SIL OPEN FONT LICENSE Version 1.1.rtf`

**Press Start 2P**  
- Licensed under the SIL Open Font License 1.1  
- Served via https://fonts.bunny.net  
- Source: https://fonts.google.com/specimen/Press+Start+2P

### Audio

Sound effects were originally sourced from **Artlist** and modified by the
author for use in this game.

Original sound designers include:
- Alberto Sueri
- Folia Soundstudio
- Soundholder

Audio files are included solely as part of this project and are not intended
for standalone redistribution or reuse outside this game.

For details, see [AUDIO_NOTICE.txt](AUDIO_NOTICE.txt).

### Libraries

- **p5.js v1.4.0** © Processing Foundation (LGPL 2.1)  
  https://p5js.org

- **Google Analytics** © Google LLC  
  Used for anonymous gameplay tracking

---

## 🎲 Game Statistics

- ~2,500 lines of code
- 5 JavaScript classes
- 44 collision-enabled entities
- 14 sound effects
- 6 different collision systems
- 5 prime number detection algorithms
- 8 tracked analytics events

---

## 🔢 Mathematical Features

### Prime Detection Algorithms
- **Fermat Primes**: 3, 5, 17, 257, 65537
- **Mersenne Primes**: 2^p - 1 pattern
- **Palindromic Primes**: Numbers that read the same forwards and backwards
- **Twin Primes**: Prime pairs ±2 apart
- **Sophie Germain Primes**: Primes where 2p+1 is also prime

### Game Mechanics
- Obstacles spawn on prime seconds in even decades (23s, 29s, 43s, 47s...)
- Paddle strength cycles on prime hits (1.0x → 1.02x → 1.05x → 1.1x)
- Triple-shot unlocks on special prime scores
- Shot system freezes AI paddles for 5 seconds

---

## 📜 License

The source code of this project is licensed under the **MIT License**.  
See the [LICENSE.md](LICENSE.md) file for details.

Third-party assets are licensed under their respective licenses.

---

## 🎨 Author

**Rene Mathis**  
AI Product · Creative coding · Interactive systems · Digital art · UX/UI

- **GitHub**: https://github.com/rm-r3
- **LinkedIn**: https://www.linkedin.com/in/rene-mathis-conceptdesign
- **Portfolio**: https://mathis-conceptdesign-portfolio.com

---

## 🌟 Notes

This project is intended as a creative coding and digital art experiment.
It emphasizes exploration, systems thinking, and generative interaction rather
than competitive balance.

The game uses mathematical patterns to create emergent gameplay and visual
experiences, demonstrating how prime numbers can structure interactive systems.

---

## 🤝 Contributing

Contributions, issues, and feature requests are welcome!  
Feel free to check the [issues page](https://github.com/rm-r3/primenumberspong/issues).

---

## 📝 Version History

- **v003.1** (2026-01-09) - Analytics integration, start screen redesign
- **v003.0** (2025) - Obstacles, autopilot, progressive strength system
- **v001.0** (2023) - Initial release

---

© 2023–2026 Rene Mathis  
*Where the beauty of mathematics meets gameplay*