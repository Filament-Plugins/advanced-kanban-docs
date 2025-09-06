# ⚡ Installation Guide

Follow these steps to install and activate **Advanced Kanban** in your Filament project.

## 1. Install the Package

Run the following command in your project root:

```bash
composer require asmit/advanced-kanban
```

## 2. Register on Filament Panel

Register the kanban builder on your Filament panel by adding it to the plugins array:

```php
<?php

use Asmit\AdvancedKanban\KanbanBuilder;
use Filament\Panel;

public function panel(Panel $panel): Panel
{
    return $panel
        ->plugins([
            KanbanBuilder::make()
            // Other plugins if any
        ]);
}
```

## 3. Publish Assets

Run the following command to publish the required assets:

```bash
php artisan filament:assets
```

## 4. Verify Installation

After completing the installation, you should be able to:

- Create kanban pages using `php artisan make:filament-page YourKanbanPage`
- Use the `KanbanPage` class in your Filament pages
- Access all kanban-related classes and components

**Next Steps:** Check out the [Quick Start Guide](/filament/advanced-kanban/quick-start) to create your first kanban board.