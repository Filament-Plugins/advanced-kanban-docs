
# 🎯 Quick Start

## 1. Create a Kanban Page

```bash
php artisan make:filament-page TasksKanban
```

## 2. Extend KanbanPage and Implement the Kanban Method

**Important:** You must extend `KanbanPage` and provide the model and status field.

**Note:** Don't set a `$view` property - `KanbanPage` has its own view built-in.

```php
<?php

namespace App\Filament\Pages;

use App\Models\Task;
use Asmit\AdvancedKanban\Pages\KanbanPage;
use Asmit\AdvancedKanban\Kanban;

class TasksKanban extends KanbanPage  // ← Must extend KanbanPage
{
    protected static ?string $navigationIcon = 'heroicon-o-view-columns';
    protected static ?string $navigationLabel = 'Tasks Kanban';
    protected static ?int $navigationSort = 1;

    public function kanban(Kanban $kanban): Kanban
    {
        return $kanban
            ->model(Task::class)           // ← Pass your model
            ->statusField('status')        // ← Pass the status field
            ->columns([
                KanbanColumn::make('To Do'), // ← Pass required column
                KanbanColumn::make('In Progress'),
            ])
            ->searchableFields(['title', 'description'])
            ->recordsPerColumn(10);
    }
}
```

## 3. That's It!

Your kanban board is ready! The page will automatically appear in your Filament navigation and display your tasks organized by status columns.

**Key Requirements:**
- ✅ Extend `KanbanPage`
- ✅ Pass `->model(YourModel::class)`
- ✅ Pass `->statusField('your_status_field')`
- ✅ Don't set `$view` - KanbanPage has its own view
