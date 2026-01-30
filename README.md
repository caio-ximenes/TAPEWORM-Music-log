# TAPEWORM Music Log

A sophisticated React application designed for music enthusiasts to curate, track, and visualize top-tier music collections. This project focuses on delivering a seamless user experience for browsing top albums, filtering by eras, and viewing detailed listening statistics.

## 🚀 Features

- **Dynamic Era Selection**: An interactive, scrollable timeline allowing users to filter music collections by specific years.
- **Comprehensive Album Stats**: Visualizes key metrics such as total spins, likes, and rating percentages for each album.
- **Modular Component Architecture**: Built with reusability in mind, featuring distinct components for Albums, Artists, and UI elements.
- **Responsive Design**: Styled with SCSS Modules to ensure a consistent and modern aesthetic across devices.

## 🛠️ Technology Stack

- **Frontend Framework**: [React](https://reactjs.org/)
- **Styling**: [Sass (SCSS)](https://sass-lang.com/) with CSS Modules
- **State Management**: React Hooks (`useState`, `useEffect`, `useRef`)
- **Linting & Formatting**: ESLint, Prettier

## 📂 Project Structure

```text
src/
├── components/          # Reusable UI components
│   ├── albuns/          # Album-related components (Cards, Lists)
│   ├── artists/         # Artist-related components
│   ├── shared/          # Shared layout components (Headers, etc.)
│   └── ui/              # Generic UI elements (SectionTitle, EraSelection)
├── pages/               # Application pages (Best, Home, etc.)
├── styles/              # Global styles and variables
└── index.scss           # Entry point for styles
```

## ⚡ Getting Started

Follow these steps to set up the project locally.

### Prerequisites

- Node.js (v16.0.0 or higher recommended)
- npm or yarn

### Installation

1. **Clone the repository**

   ```bash
   git clone https://github.com/your-username/tapeworm-music-log.git
   cd tapeworm-music-log
   ```

2. **Install dependencies**

   ```bash
   npm install
   ```

3. **Run the development server**

   ```bash
   npm run dev
   ```

   _Note: Check `package.json` if the start script differs (e.g., `npm start`)._

4. **Build for production**
   ```bash
   npm run build
   ```

## 📄 License

Distributed under the MIT License.
