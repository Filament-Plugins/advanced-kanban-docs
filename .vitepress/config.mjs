import { defineConfig } from 'vitepress'

// https://vitepress.dev/reference/site-config
export default defineConfig({
    srcDir: "docs",
    base: "/",
    title: "Advanced Kanban",
    description: "A powerful and flexible premium Kanban board plugin for Filament 4.x & 5.x that provides a complete drag-and-drop task management solution with advanced features like workflow transitions, pagination, search, filtering, and custom actions.",
    head: [
        ['link', { rel: 'icon', href: '/favicon.ico' }],
        ['meta', { name: 'theme-color', content: '#3b82f6' }],
        ['meta', { property: 'og:type', content: 'website' }],
        ['meta', { property: 'og:locale', content: 'en' }],
        ['meta', { property: 'og:title', content: 'Advanced Kanban for Filament' }],
        ['meta', { property: 'og:site_name', content: 'Advanced Kanban Documentation' }],
    ],
    themeConfig: {
        // https://vitepress.dev/reference/default-theme-config
        logo: '/logo.svg',
        siteTitle: 'Advanced Kanban',
        search: {
            provider: 'local'
        },
        nav: [
            { text: 'Home', link: '/' },
            { text: 'Documentation', link: '/filament/advanced-kanban/' },
            { text: 'Demo', link: 'https://kanban-demo.laravelplugins.com/admin/kanban-task', target: '_blank' },
            { text: 'Buy Now', link: 'https://checkout.anystack.sh/filament-advanced-kanban', target: '_blank' },
        ],

        sidebar: [
            {
                text: '🚀 Getting Started',
                collapsed: false,
                items: [
                    { text: 'Overview', link: '/filament/advanced-kanban/' },
                    { text: 'Installation', link: '/filament/advanced-kanban/installation' },
                    { text: 'Quick Start', link: '/filament/advanced-kanban/quick-start' },
                ]
            },
            {
                text: '📋 Core Features',
                collapsed: false,
                items: [
                    { text: 'Kanban Overview', link: '/filament/advanced-kanban/kanban/overview' },
                    { text: 'Search', link: '/filament/advanced-kanban/kanban/search' },
                ]
            },
            {
                text: '🎯 Filters',
                collapsed: false,
                items: [
                    { text: 'Filter Overview', link: '/filament/advanced-kanban/kanban/filters/overview' },
                    { text: 'Tab Filters', link: '/filament/advanced-kanban/kanban/filters/tab-filters' },
                ]
            },
            {
                text: '📊 Columns',
                collapsed: false,
                items: [
                    { text: 'Column Overview', link: '/filament/advanced-kanban/kanban/columns/overview' },
                    { text: 'Record Actions', link: '/filament/advanced-kanban/kanban/columns/record-actions' },
                    { text: 'Header Actions', link: '/filament/advanced-kanban/kanban/columns/heading-actions' },
                ]
            },
            {
                text: '⚡ Advanced Features',
                collapsed: false,
                items: [
                    { text: 'Workflow Transitions', link: '/filament/advanced-kanban/kanban/advanced-features/workflow' },
                    { text: 'Card Locking', link: '/filament/advanced-kanban/kanban/advanced-features/lock-card' },
                    { text: 'Custom Components', link: '/filament/advanced-kanban/kanban/advanced-features/components' },
                    { text: 'Handle Record Move', link: '/filament/advanced-kanban/kanban/advanced-features/handle-record-move' },
                    { text: 'Render Hooks', link: '/filament/advanced-kanban/kanban/advanced-features/render-hooks' },
                    { text: 'Query Modifications', link: '/filament/advanced-kanban/kanban/advanced-features/query-modifications' },
                    { text: 'Custom Actions', link: '/filament/advanced-kanban/kanban/advanced-features/actions-to-component' },
                ]
            },
            {
                text: '🔗 Relational Records',
                collapsed: false,
                items: [
                    { text: 'MRR Kanban Setup', link: '/filament/advanced-kanban/relational-records/mrr-kanban-setup' },
                ]
            },
            {
                text: '📖 API Reference',
                collapsed: false,
                items: [
                    { text: 'Kanban Class', link: '/filament/advanced-kanban/api-reference/kanban-options' },
                    { text: 'KanbanColumn Class', link: '/filament/advanced-kanban/api-reference/kanban-column-options' }
                ]
            },
            {
                text: '💬 Help & Support',
                collapsed: false,
                items: [
                    { text: 'Support', link: '/filament/advanced-kanban/help' },
                ]
            }
        ],

        socialLinks: [
            { icon: 'github', link: 'https://github.com/AsmitNepali/advanced-kanban' }
        ],

        editLink: {
            pattern: 'https://github.com/Filament-Plugins/advanced-kanban-docs/edit/main/docs/:path',
            text: 'Edit this page on GitHub'
        },

        footer: {
            message: 'Advanced Kanban for Filament PHP',
            copyright: 'Copyright © 2025-present Asmit Nepali'
        },

        outline: {
            level: [2, 3],
            label: 'On this page'
        }
    }
})
