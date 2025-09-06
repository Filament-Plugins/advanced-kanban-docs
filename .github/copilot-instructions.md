# Copilot Instructions for Advanced Kanban Docs

This project is a documentation site for advanced Kanban board features, built with VitePress. Follow these guidelines to ensure AI agents are productive and consistent with project conventions.

## 🏗️ Project Structure & Architecture
- **Docs Source**: All documentation lives in the `docs/` directory, organized by topic and feature. Subfolders (e.g., `kanban/`, `introduction/`, `api-reference/`) map directly to URL routes.
- **Sidebar Navigation**: The sidebar is configured in `.vitepress/config.mjs`. New pages must be added here to appear in the UI.
- **Public Assets**: Place static files (e.g., logos) in `public/`.
- **Vue Components**: Custom components for embedding in docs are in `src/components/` (e.g., `FeatureCard.vue`).
- **Styling**: CSS lives in `src/css/`.

## 🛠️ Developer Workflows
- **Install**: `npm install` (Node.js v22 required; use NVM for version management)
- **Dev Server**: `npm run docs:dev` (auto-reloads on changes)
- **Build**: `npm run docs:build`
- **Preview**: `npm run docs:preview`
- **Add Docs**: Create `.md` files in `docs/`, then update `.vitepress/config.mjs` to add to sidebar
- **Restart Required**: After sidebar/config changes, restart the dev server

## 📚 Patterns & Conventions
- **Markdown Routing**: Each `.md` file becomes a route (e.g., `docs/kanban/actions.md` → `/kanban/actions.html`)
- **Directory Structure = URL Structure**: Organize docs in folders to group related topics; URLs mirror this structure
- **Code Examples**: Use fenced code blocks with language tags in markdown
- **Component Usage**: Import and use Vue components in markdown as needed (e.g., `<FeatureCard />`)
- **No Custom Build Steps**: All builds use standard VitePress scripts; no extra build tooling

## 🔗 Integration Points
- **VitePress**: All site generation and dev server functionality is handled by VitePress
- **No Backend**: This is a static documentation site; no server-side code or API integration

## 📝 Example: Adding a New Doc Page
1. Create `docs/your-topic.md`
2. Add content using markdown (and Vue components if needed)
3. Update `.vitepress/config.mjs` to add the page to the sidebar
4. Restart dev server if sidebar was changed

## 🧭 Key Files & Directories
- `docs/` – All documentation content
- `.vitepress/config.mjs` – Sidebar/navigation config
- `src/components/` – Custom Vue components for docs
- `public/` – Static assets
- `README.md` – Project setup and workflow reference

## 🚫 Out of Scope
- No backend, database, or API code
- No test suite or test runner present
- No custom markdown plugins or VitePress extensions

---
For more, see the [README.md](../README.md) and [VitePress docs](https://vitepress.dev).
