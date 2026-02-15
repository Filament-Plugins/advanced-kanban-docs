---
layout: doc
title: Advanced Kanban for Filament
description: A powerful and flexible premium Kanban board plugin for Filament 4.x & 5.x

---

# Advanced Kanban for Filament

A powerful and flexible premium Kanban board plugin for Filament 4.x & 5.x that provides an intuitive drag-and-drop interface for managing records across different status columns.

<div class="premium-cta-container">
  <a href="https://checkout.anystack.sh/filament-advanced-kanban" target="_blank" class="premium-btn premium-btn-primary">
    <span class="btn-icon">💎</span>
    <span class="btn-content">
      <span class="btn-title">Buy Premium License</span>
      <span class="btn-subtitle">One-time payment • Lifetime updates</span>
    </span>
  </a>
  <a href="https://kanban-demo.laravelplugins.com/admin/kanban-task" target="_blank" class="premium-btn premium-btn-secondary">
    <span class="btn-icon">🎯</span>
    <span class="btn-content">
      <span class="btn-title">Try Live Demo</span>
      <span class="btn-subtitle">See it in action</span>
    </span>
  </a>
</div>

<style scoped>
.premium-cta-container {
  display: flex;
  gap: 16px;
  margin: 32px 0;
  flex-wrap: wrap;
}

.premium-btn {
  display: inline-flex;
  align-items: center;
  gap: 12px;
  padding: 16px 28px;
  border-radius: 12px;
  text-decoration: none;
  font-weight: 600;
  transition: all 0.3s cubic-bezier(0.4, 0, 0.2, 1);
  box-shadow: 0 4px 12px rgba(0, 0, 0, 0.1);
  border: 2px solid transparent;
}

.premium-btn-primary {
  background: linear-gradient(135deg, #3b82f6 0%, #2563eb 100%);
  color: white !important;
}

.premium-btn-primary:hover {
  transform: translateY(-3px);
  box-shadow: 0 12px 28px rgba(59, 130, 246, 0.4);
  background: linear-gradient(135deg, #2563eb 0%, #1d4ed8 100%);
  color: white !important;
}

.premium-btn-primary .btn-title,
.premium-btn-primary .btn-subtitle,
.premium-btn-primary .btn-icon {
  color: white !important;
}

.premium-btn-secondary {
  background: var(--vp-c-bg-soft);
  color: var(--vp-c-text-1);
  border-color: var(--vp-c-divider);
}

.premium-btn-secondary:hover {
  transform: translateY(-3px);
  border-color: var(--vp-c-brand-1);
  background: var(--vp-c-bg);
  box-shadow: 0 8px 20px rgba(0, 0, 0, 0.12);
}

.btn-icon {
  font-size: 24px;
}

.btn-content {
  display: flex;
  flex-direction: column;
  align-items: flex-start;
}

.btn-title {
  font-size: 16px;
  font-weight: 600;
  line-height: 1.2;
}

.btn-subtitle {
  font-size: 12px;
  font-weight: 400;
  opacity: 0.85;
  margin-top: 2px;
}

.dark .premium-btn {
  box-shadow: 0 4px 12px rgba(0, 0, 0, 0.3);
}

.dark .premium-btn-primary:hover {
  box-shadow: 0 12px 28px rgba(59, 130, 246, 0.3);
}

.dark .premium-btn-secondary:hover {
  box-shadow: 0 8px 20px rgba(0, 0, 0, 0.5);
}

@media (max-width: 768px) {
  .premium-cta-container {
    flex-direction: column;
  }
  
  .premium-btn {
    width: 100%;
    justify-content: center;
  }
}
</style>

## Demo Video

<div style="position: relative; padding-bottom: 56.25%; height: 0; overflow: hidden; max-width: 100%; margin: 24px 0;">
  <iframe style="position: absolute; top: 0; left: 0; width: 100%; height: 100%; border-radius: 12px;" src="https://www.youtube.com/embed/lqVxcOwHQAA?si=JD1Zezx-kR6sSj0f" title="Advanced Kanban Demo" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerpolicy="strict-origin-when-cross-origin" allowfullscreen></iframe>
</div>

## ✨ Key Features

### Core Functionality
- **🎯 Drag & Drop Interface** - Intuitive drag-and-drop for moving records between columns
- **🔄 Workflow Transitions** - Define allowed status transitions to control record movement
- **🔍 Real-time Search** - Search across multiple fields with debounced input
- **📋 Advanced Filtering** - Custom filter forms with multiple field types and tab-based filters
- **📄 Pagination** - Load more records per column with infinite scroll

### Advanced Capabilities
- **⚙️ Custom Actions** - Header, record, and column header actions
- **🎨 Customizable Cards** - Custom card components with rich content display
- **📊 Column Customization** - Colors, icons, labels, and descriptions
- **🔐 Record Locking** - Prevent specific records from being moved
- **⚡ Performance Optimized** - Efficient queries with caching and lazy loading
- **🌍 Multilanguage Support** - Full translation support via Filament's translation system
- **💎 Priority Support** - Dedicated support for enterprise customers

## 🎯 Perfect For

Advanced Kanban is ideal for:

| Use Case | Examples |
|----------|----------|
| **Task Management** | Project tracking, bug tracking, feature development workflows |
| **Approval Workflows** | Content approval, document review, purchase requests |
| **Content Pipelines** | Blog publishing, video production, design reviews |
| **Issue Tracking** | Customer support tickets, bug reporting, feature requests |
| **Sales & Recruitment** | Sales pipelines, recruitment processes, lead management |

## 🚀 Quick Navigation

<div style="display: grid; grid-template-columns: repeat(auto-fit, minmax(280px, 1fr)); gap: 16px; margin: 32px 0;">
  
  <a href="/filament/advanced-kanban/installation" style="display: block; padding: 20px; background: var(--vp-c-bg-soft); border-radius: 12px; text-decoration: none; border: 1px solid var(--vp-c-divider); transition: all 0.3s;">
    <div style="font-size: 32px; margin-bottom: 8px;">📦</div>
    <div style="font-weight: 600; font-size: 18px; margin-bottom: 8px; color: var(--vp-c-text-1);">Installation</div>
    <div style="font-size: 14px; color: var(--vp-c-text-2);">Get started with Advanced Kanban in minutes</div>
  </a>

  <a href="/filament/advanced-kanban/quick-start" style="display: block; padding: 20px; background: var(--vp-c-bg-soft); border-radius: 12px; text-decoration: none; border: 1px solid var(--vp-c-divider); transition: all 0.3s;">
    <div style="font-size: 32px; margin-bottom: 8px;">🚀</div>
    <div style="font-weight: 600; font-size: 18px; margin-bottom: 8px; color: var(--vp-c-text-1);">Quick Start</div>
    <div style="font-size: 14px; color: var(--vp-c-text-2);">Create your first Kanban board</div>
  </a>

  <a href="/filament/advanced-kanban/kanban/columns/overview" style="display: block; padding: 20px; background: var(--vp-c-bg-soft); border-radius: 12px; text-decoration: none; border: 1px solid var(--vp-c-divider); transition: all 0.3s;">
    <div style="font-size: 32px; margin-bottom: 8px;">📊</div>
    <div style="font-weight: 600; font-size: 18px; margin-bottom: 8px; color: var(--vp-c-text-1);">Columns & Actions</div>
    <div style="font-size: 14px; color: var(--vp-c-text-2);">Customize columns and add actions</div>
  </a>

  <a href="/filament/advanced-kanban/kanban/advanced-features/workflow" style="display: block; padding: 20px; background: var(--vp-c-bg-soft); border-radius: 12px; text-decoration: none; border: 1px solid var(--vp-c-divider); transition: all 0.3s;">
    <div style="font-size: 32px; margin-bottom: 8px;">⚡</div>
    <div style="font-weight: 600; font-size: 18px; margin-bottom: 8px; color: var(--vp-c-text-1);">Advanced Features</div>
    <div style="font-size: 14px; color: var(--vp-c-text-2);">Workflows, hooks, and customization</div>
  </a>

  <a href="/filament/advanced-kanban/api-reference/kanban-options" style="display: block; padding: 20px; background: var(--vp-c-bg-soft); border-radius: 12px; text-decoration: none; border: 1px solid var(--vp-c-divider); transition: all 0.3s;">
    <div style="font-size: 32px; margin-bottom: 8px;">📖</div>
    <div style="font-weight: 600; font-size: 18px; margin-bottom: 8px; color: var(--vp-c-text-1);">API Reference</div>
    <div style="font-size: 14px; color: var(--vp-c-text-2);">Complete API documentation</div>
  </a>

  <a href="/filament/advanced-kanban/help" style="display: block; padding: 20px; background: var(--vp-c-bg-soft); border-radius: 12px; text-decoration: none; border: 1px solid var(--vp-c-divider); transition: all 0.3s;">
    <div style="font-size: 32px; margin-bottom: 8px;">💬</div>
    <div style="font-weight: 600; font-size: 18px; margin-bottom: 8px; color: var(--vp-c-text-1);">Help & Support</div>
    <div style="font-size: 14px; color: var(--vp-c-text-2);">Get help and support</div>
  </a>

</div>

## 📋 System Requirements

- **PHP**: 8.2 or higher
- **Laravel**: 11.x or higher  
- **Filament**: 4.x | 5.x (Latest)

## 📄 License

Advanced Kanban is a premium plugin that requires a valid license for production use.

<style scoped>
a[style*="background: var(--vp-c-bg-soft)"]:hover {
  transform: translateY(-4px);
  box-shadow: 0 8px 16px rgba(0, 0, 0, 0.1);
  border-color: var(--vp-c-brand);
}
</style>
