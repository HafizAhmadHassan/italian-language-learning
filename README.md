# Parla Italiano 🇮🇹
*Created: 2026-08-26*

A premium Italian language learning website built with React, Vite, and Tailwind CSS.

A1 to C1 level
## Features

- **Structured Lessons** — Interactive Italian lessons with multiple exercise types
- **Vocabulary Builder** — 50+ Italian words with translations in 16 languages
- **Flashcards** — Spaced repetition-style flashcard review system
- **Grammar Guide** — Italian grammar topics with explanations and exercises
- **Practice Center** — Multiple choice, translation, fill-in-the-blank, sentence ordering, and listening exercises
- **Progress Tracking** — XP system, streaks, weekly activity charts, skill breakdown
- **Multi-language Support** — Translations for English, Spanish, French, German, Portuguese, Chinese, Japanese, Korean, Arabic, Hindi, Dutch, Polish, Russian, Turkish, Romanian, and Ukrainian
- **Dark/Light Mode** — Toggle between themes
- **Responsive Design** — Works on desktop, tablet, and mobile
- **Speech Synthesis** — Listen to Italian pronunciation using browser speech API

## Tech Stack

- React 19 + Vite
- Tailwind CSS v4
- React Router v7
- Framer Motion (animations)
- Recharts (charts)
- Lucide React (icons)
- LocalStorage (persistence — no backend required)

## Getting Started

```bash
cd app
npm install
npm run dev
```

Open [http://localhost:5173/italian-language-learning/](http://localhost:5173/italian-language-learning/) in your browser.

## Build

```bash
npm run build
```

## Deployment

The project is configured for GitHub Pages deployment via GitHub Actions. Push to `main` to trigger automatic deployment.

## Project Structure

```
src/
├── components/       # Reusable UI components
│   ├── Layout/       # App layout with sidebar and mobile nav
│   ├── UI/           # Button, Card, ProgressBar, Badge, Modal, Toast
│   └── ...           # Flashcard, Quiz, AudioButton, etc.
├── data/             # Italian learning content
│   ├── lessons/      # Structured lesson data
│   ├── vocabulary/   # Italian vocabulary with translations
│   ├── grammar/      # Grammar topics and exercises
│   ├── practice/     # Practice questions
│   └── translations/ # Multi-language translation mappings
├── pages/            # Application pages
│   ├── Landing/      # Public landing page
│   ├── Auth/         # Login and signup
│   ├── Onboarding/   # 5-step onboarding wizard
│   ├── Dashboard/    # Personalized dashboard
│   ├── Learn/        # Curriculum browser
│   ├── Lesson/       # Interactive lesson experience
│   ├── Vocabulary/   # Vocabulary browser and flashcards
│   ├── Grammar/      # Grammar topics
│   ├── Practice/     # Practice exercises
│   ├── Progress/     # Progress tracking dashboard
│   └── Settings/     # User preferences
└── services/         # Business logic
    ├── auth.js       # Authentication (localStorage)
    ├── progress.js   # Progress tracking
    ├── speech.js     # Web Speech API
    ├── storage.js    # LocalStorage wrapper
    └── translations.js # Translation service
```

## License

MIT
