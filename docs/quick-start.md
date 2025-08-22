
# 🎯 Quick Start

## 1. Create a Kanban Page

```bash
php artisan make:filament-page TasksKanban
```

## 2. Implement the Kanban Interface

```php
<?php

namespace App\Filament\Pages;

use App\Models\Task;
use Asmit\AdvancedKanban\Concerns\InteractsWithKanban;
use Asmit\AdvancedKanban\Kanban;
use Asmit\AdvancedKanban\Columns\KanbanColumn;
use Filament\Pages\Page;

class TasksKanban extends Page
{
    use InteractsWithKanban;

    protected static string $view = 'advanced-kanban::index';

    public function kanban(Kanban $kanban): Kanban
    {
        return $kanban
            ->model(Task::class)
            ->statusField('status')
            ->titleField('title')
            ->descriptionField('description')
            ->columns([
                KanbanColumn::make('todo')
                    ->label('To Do')
                    ->color('gray')
                    ->icon('heroicon-o-clock')
                    ->allowedTransitions(['in-progress']),
                
                KanbanColumn::make('in-progress')
                    ->label('In Progress')
                    ->color('blue')
                    ->icon('heroicon-o-play')
                    ->allowedTransitions(['review', 'todo']),
                
                KanbanColumn::make('review')
                    ->label('Review')
                    ->color('yellow')
                    ->icon('heroicon-o-eye')
                    ->allowedTransitions(['done', 'in-progress']),
                
                KanbanColumn::make('done')
                    ->label('Done')
                    ->color('green')
                    ->icon('heroicon-o-check-circle')
                    ->allowedTransitions(['review']),
            ])
            ->searchableFields(['title', 'description'])
            ->recordsPerColumn(10);
    }
}
```

## 3. Add to Navigation

In your panel provider or page configuration:

```php
protected static ?string $navigationIcon = 'heroicon-o-view-columns';
protected static ?string $navigationLabel = 'Tasks Kanban';
protected static ?int $navigationSort = 1;
```