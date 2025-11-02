<div align="center">

# ✨ Portfolio ✨

### _My personal portfolio website showcasing my work and projects_

[![Live Site](https://img.shields.io/badge/🌐_Live_Site-borgarbarland.com-blue?style=for-the-badge)](https://borgarbarland.com)

---

</div>

---

## 📖 About

This is my portfolio website built with **modern web technologies** to showcase my projects, articles, and professional experience.

## 🚀 Tech Stack

- ⚡ **Framework:** [Next.js](https://nextjs.org/) with React
- 📘 **Language:** TypeScript
- 🎨 **Styling:** Tailwind CSS
- 🎭 **Animations:** Custom animation controller with React context
- 📦 **Package Manager:** pnpm

## 🛠️ Getting Started

### 📋 Prerequisites

- Node.js
- pnpm (recommended) or npm/yarn

### ⚙️ Installation

```bash
# Install dependencies
pnpm install
```

### 💻 Development

```bash
# Run the development server
pnpm dev
```

Open [http://localhost:3000](http://localhost:3000) in your browser to see the result.

### 🏗️ Build

```bash
# Create a production build
pnpm build

# Start the production server
pnpm start
```

### ✅ Linting

```bash
# Run ESLint
pnpm lint
```

## 📂 Project Structure

```
portfolio/
├── src/
│   ├── app/              # Next.js app directory
│   │   ├── articles/     # Articles section
│   │   ├── components/   # React components
│   │   │   ├── articles/ # Article-related components
│   │   │   ├── home/     # Home page components
│   │   │   └── layout/   # Layout components
│   │   ├── globals.css   # Global styles
│   │   ├── layout.tsx    # Root layout
│   │   └── page.tsx      # Home page
│   ├── contexts/         # React contexts
│   ├── controllers/      # Business logic
│   └── data/             # Static data and constants
├── public/               # Static assets
│   ├── articles/         # Article images
│   └── icons/            # Icons and favicons
└── ...config files
```

## 🚢 Deployment

The site is containerized using Docker and can be deployed using the included deployment script:

```bash
# Deploy using the deployment script
./deploy.sh
```

Or build and run with Docker:

```bash
# Build the Docker image
docker build -t portfolio .

# Run the container
docker run -p 3000:3000 portfolio
```

## 🐛 Bug Reports

Found a bug? Please feel free to report it! You can:

- 📝 Open an issue on this repository
- 💬 Contact me through the website

All bug reports are welcome and appreciated! 🙏

---

<div align="center">

**Made with ❤️ by Borgar Barland**

_© 2025 All rights reserved_

</div>
