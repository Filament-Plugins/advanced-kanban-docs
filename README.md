# Advanced Kanban Docs – Setup & Usage Guide

A comprehensive documentation system built with VitePress for advanced Kanban board functionality.

---

## 🚀 Quick Start

### Prerequisites

- Node.js `^v22`
- npm `10.9.2+`

### Setup

```bash
# Check your current versions
node -v    # Should be ^v22
npm -v     # Should be 10.9.2+

# Install NVM (if not already installed)
curl -o- https://raw.githubusercontent.com/nvm-sh/nvm/v0.35.3/install.sh | bash
source ~/.bashrc   # or source ~/.zshrc for Zsh users

# Set the correct Node version
nvm install v22.16.0
nvm use v22.16.0

# Clone the repository
git clone git@github.com:AsmitNepali/advanced-kanban-docs.git
cd advanced-kanban-docs
git checkout main
git pull origin main

# Install dependencies
npm install

# Start development server
npm run docs:dev
# 🌐 Visit http://localhost:5173/

# Build for production
npm run docs:build

# Preview production build
npm run docs:preview
```

---

## 📝 Creating New Documentation Pages

### Step 1: Create a New Page

```bash
# Navigate to the docs folder
cd ./docs

# Create a new markdown file
touch example.md
```

### Step 2: Add Content to Your Page

Edit your new `example.md` file:

```markdown
# Your Page Title

Your content goes here. Use standard Markdown syntax.

## Features

- Feature 1
- Feature 2
- Feature 3

## Code Example

\```javascript
const example = "Hello World";
console.log(example);
\```
```

### Step 3: Add Page to Sidebar Navigation

To make your new page visible in the UI, edit `.vitepress/config.mjs`:

```javascript
export default {
  // ... other config
  themeConfig: {
    sidebar: [
      {
        text: 'Getting Started',
        items: [
          { text: '💰 Pricing & Licensing', link: '/pricing-licensing' },
          { text: '📦 Installation', link: '/installation' },
          { text: '📝 New Example', link: '/example' } // <- Your new page
        ]
      }
    ]
  }
}
```

✅ **Save and restart** — the sidebar updates automatically.

---

## 🗂️ Organizing Pages

### File Structure

```
docs/
├── example.md              # Creates route: /example.html
├── guides/
│   ├── setup.md           # Creates route: /guides/setup.html
│   └── advanced.md        # Creates route: /guides/advanced.html
└── api/
    └── reference.md       # Creates route: /api/reference.html
```

### Grouping Pages in Sidebar

To organize multiple pages under custom sections:

```javascript
sidebar: [
  {
    text: 'Getting Started',
    items: [
      { text: '💰 Pricing & Licensing', link: '/pricing-licensing' },
      { text: '📦 Installation', link: '/installation' }
    ]
  },
  {
    text: 'Examples',
    items: [
      { text: '📄 Basic Usage', link: '/examples/basic' },
      { text: '📝 Advanced Features', link: '/examples/advanced' },
      { text: '🔧 Custom Configuration', link: '/examples/config' }
    ]
  },
  {
    text: 'API Reference',
    items: [
      { text: '📚 Methods', link: '/api/methods' },
      { text: '🎯 Events', link: '/api/events' }
    ]
  }
]
```

---

## 📋 Important Notes

- **Routing**: The `.md` file you create becomes a route with `.html` extension
  - Example: `example.md` → `<domain>/example.html`
  - Example: `guides/setup.md` → `<domain>/guides/setup.html`

- **Directory Structure**: You can create directories to group related content — the URL structure will mirror your file structure

- **Auto-reload**: The development server automatically reloads when you make changes to markdown files or configuration

- **Sidebar Updates**: After updating the sidebar configuration, restart the development server to see changes

---

## 🛠️ Available Scripts

| Command | Description |
|---------|-------------|
| `npm run docs:dev` | Start development server with hot reload |
| `npm run docs:build` | Build static site for production |
| `npm run docs:preview` | Preview the production build locally |

---

## 🤝 Contributing

1. Fork the repository
2. Create your feature branch (`git checkout -b feature/amazing-feature`)
3. Commit your changes (`git commit -m 'Add some amazing feature'`)
4. Push to the branch (`git push origin feature/amazing-feature`)
5. Open a Pull Request

---

## 📄 License

This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details.

---

## 🔗 Links

- **Live Documentation**: [Your deployed docs URL]
- **Repository**: [https://github.com/AsmitNepali/advanced-kanban-docs](https://github.com/AsmitNepali/advanced-kanban-docs)
- **VitePress Documentation**: [https://vitepress.dev](https://vitepress.dev)

---

*Built with ❤️ using VitePress*
