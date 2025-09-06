# Columns

Columns are the core of the kanban board. Each column represents a specific status or category for the records. To define columns, use the `->columns()` method in your kanban page and pass an array of `KanbanColumn` instances.

## 1. Basic Example

```php
<?php
use Asmit\AdvancedKanban\Columns\KanbanColumn;

public function kanban(Kanban $kanban): Kanban
{
    return $kanban
        ->model(Task::class)
        ->statusField('status')
        ->columns([
            KanbanColumn::make('todo')
                ->label('To Do')
                ->color('gray'),
            KanbanColumn::make('in_progress')
                ->label('In Progress')
                ->color('blue'),
            KanbanColumn::make('completed')
                ->label('Completed')
                ->color('green'),
        ]);
}
```

## 2. Color Customization

You can customize the color of each column using the `->color()` method:

```php
KanbanColumn::make('todo')
    ->label('To Do')
    ->color('green'); // Supports hex, rgb, hsl, and Tailwind colors
```

## 3. Icon Support

You can add an icon to each column using the `->icon()` method:

```php
KanbanColumn::make('todo')
    ->label('To Do')
    ->icon('heroicon-o-clipboard-list'); // Use any Heroicon name
```

## 4. Extra Column Header Classes

You can add extra CSS classes to the column header using the `->extraColumnHeadingClass()` method:

```php
KanbanColumn::make('todo')
    ->label('To Do')
    ->extraColumnHeadingClass('text-lg font-bold'); // Add custom classes
```

## 5. Column Description

Add a description to your columns for better context:

```php
KanbanColumn::make('todo')
    ->label('To Do')
    ->description('Tasks that need to be started')
    ->color('gray');
```