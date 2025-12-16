# Portfolio Website

Modern, responsive portfolio website built with React, TypeScript, and Material UI. Features bilingual support (Polish/English) and showcases projects, skills, experience, and education.

## Features

- 🌐 **Bilingual Support** - Polish and English language switching
- 🎨 **Material UI** - Modern, professional design
- 📱 **Fully Responsive** - Works on all devices
- ⚡ **Fast Performance** - Built with Vite
- 🎯 **TypeScript** - Type-safe codebase
- 🎭 **Smooth Animations** - Fade and scroll animations

## Tech Stack

- **Frontend**: React 19, TypeScript, Material UI
- **Build Tool**: Vite
- **Styling**: Material UI Theme, CSS-in-JS
- **State Management**: React Context API

## Getting Started

### Prerequisites

- Node.js (v18 or higher)
- npm or yarn

### Installation

1. Clone the repository:
```bash
git clone https://github.com/yourusername/portfolio.git
cd portfolio
```

2. Install dependencies:
```bash
npm install
```

3. Start the development server:
```bash
npm run dev
```

4. Open your browser and navigate to `http://localhost:5173`

### Build for Production

```bash
npm run build
```

The built files will be in the `dist` directory.

### Preview Production Build

```bash
npm run preview
```

## Project Structure

```
src/
├── components/      # React components
│   ├── About.tsx
│   ├── Contact.tsx
│   ├── Education.tsx
│   ├── Experience.tsx
│   ├── Footer.tsx
│   ├── Hero.tsx
│   ├── Navbar.tsx
│   ├── Projects.tsx
│   └── Skills.tsx
├── contexts/        # React contexts
│   └── LanguageContext.tsx
├── data/            # Portfolio data
│   └── portfolioData.ts
├── types/           # TypeScript types
│   └── index.ts
├── App.tsx          # Main app component
├── main.tsx         # Entry point
├── theme.ts         # Material UI theme
└── index.css        # Global styles
```

## Customization

To customize the portfolio with your own information:

1. Edit `src/contexts/LanguageContext.tsx` to update:
   - Personal information
   - Skills
   - Experience
   - Projects
   - Education
   - Contact information
   - Translations

2. Add your profile image:
   - Place your image in `public/` directory
   - Update `personalInfo.imageUrl` in LanguageContext

3. Customize colors and theme:
   - Edit `src/theme.ts` to change Material UI theme

## Deployment

### Deploy to Vercel

1. Install Vercel CLI:
```bash
npm i -g vercel
```

2. Deploy:
```bash
vercel
```

### Deploy to Netlify

1. Build the project:
```bash
npm run build
```

2. Drag and drop the `dist` folder to [Netlify](https://www.netlify.com/)

### Deploy to GitHub Pages

1. Install gh-pages:
```bash
npm install --save-dev gh-pages
```

2. Add to `package.json`:
```json
"scripts": {
  "predeploy": "npm run build",
  "deploy": "gh-pages -d dist"
}
```

3. Deploy:
```bash
npm run deploy
```

## License

This project is open source and available under the [MIT License](LICENSE).

## Contact

Vadym Yarmoshuk
- Email: vadym.yarmoshuk.02@gmail.com
- LinkedIn: [vadym-yarmoshuk](https://www.linkedin.com/in/vadym-yarmoshuk-9b4364305)
