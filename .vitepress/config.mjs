import { defineConfig } from 'vitepress'

// https://vitepress.dev/reference/site-config
export default defineConfig({
    srcDir: "docs",
    base: "/",
    title: "Laravel Plugins",
    description: "A powerful and flexible premium Kanban board plugin for Filament 3.x that provides a complete drag-and-drop task management solution with advanced features like workflow transitions, pagination, search, filtering, and custom actions.",
    themeConfig: {
        // https://vitepress.dev/reference/default-theme-config
        search: {
            provider: 'local'
        },
        nav: [
            { text: 'Home', link: '/' },
            { text: 'Help', link: '/filament/advanced-kanban/help' },
        ],

        sidebar: [
            {
                text: 'Advanced Kanban',
                items: [
                    { text: 'Overview', link: '/filament/advanced-kanban/' },
                    { text: 'Installation', link: '/filament/advanced-kanban/installation' },
                    { text: 'Quick Start', link: '/filament/advanced-kanban/quick-start' },
                    { text: 'Help & Support', link: '/filament/advanced-kanban/help' },
                ]
            },
            {
                text: 'Kanban',
                items: [
                    { text: 'Overview', link: '/filament/advanced-kanban/kanban/overview' },
                    { text: 'Search', link: '/filament/advanced-kanban/kanban/search' },
                    {
                        text: 'Filters',
                        items: [
                            { text: 'Overview', link: '/filament/advanced-kanban/kanban/filters/overview' },
                            { text: 'Tab Filters', link: '/filament/advanced-kanban/kanban/filters/tab-filters' },
                        ]
                    },
                    {
                        text: 'Columns',
                        items: [
                            { text: 'Overview', link: '/filament/advanced-kanban/kanban/columns/overview' },
                            { text: 'Record Actions', link: '/filament/advanced-kanban/kanban/columns/record-actions' },
                            { text: 'Header Actions', link: '/filament/advanced-kanban/kanban/columns/heading-actions' },
                        ]
                    }
                ],
            },
            {
                text: 'Advanced Features',
                items: [
                    { text: 'Workflow', link: '/filament/advanced-kanban/kanban/advanced-features/workflow' },
                    { text: 'Card Lock', link: '/filament/advanced-kanban/kanban/advanced-features/lock-card' },
                    { text: 'Components', link: '/filament/advanced-kanban/kanban/advanced-features/components' },
                    { text: 'Handle Record Move', link: '/filament/advanced-kanban/kanban/advanced-features/handle-record-move' },
                    { text: 'Render Hooks', link: '/filament/advanced-kanban/kanban/advanced-features/render-hooks' },
                    { text: 'Query Modifications', link: '/filament/advanced-kanban/kanban/advanced-features/query-modifications' },
                ]
            },
            {
                text: 'Relational Records Kanban',
                items: [
                    { text: 'MRR Kanban Setup', link: '/filament/advanced-kanban/relational-records/mrr-kanban-setup' },
                ]
            },
            {
                text: 'API Reference',
                items: [
                    { text: 'Kanban Class Options', link: '/filament/advanced-kanban/api-reference/kanban-options' },
                    { text: 'KanbanColumn Options', link: '/filament/advanced-kanban/api-reference/kanban-column-options' }
                ]
            }
        ],

        socialLinks: [
            { icon: 'github', link: 'https://github.com/AsmitNepali/advanced-kanban' }
        ],

        footer: {
            message: 'Released under the MIT License.',
            copyright: 'Copyright © 2025-present Asmit Nepali'
        },
    }
})
