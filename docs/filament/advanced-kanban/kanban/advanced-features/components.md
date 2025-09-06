# Components

The Kanban board is made up of two main components: **Column Headers** and **Cards (Records)**. You can customize these components by generating your own components with the command below.

## Generating Custom Components

```bash
php artisan make:kanban-components --resource=YourResource
```

This command will create two Blade files in the `resources/views/components/kanban/your-resource/` directory:

- `column-header.blade.php` - Custom column header component
- `card.blade.php` - Custom card component

## Using Custom Components

To use your custom components, override the default components in your kanban page:

```php
<?php

namespace App\Filament\Pages;

use Asmit\AdvancedKanban\Pages\KanbanPage;

class TasksKanban extends KanbanPage
{
    protected static string $columnHeaderComponent = 'kanban.tasks.column-header';
    protected static string $cardComponent = 'kanban.tasks.card';

    public function kanban(Kanban $kanban): Kanban
    {
        return $kanban
            ->model(Task::class)
            ->statusField('status')
            ->columns([
                // Your columns here
            ]);
    }
}
```

## Component Structure

### Column Header Component

The column header component receives the following data:

```php
// Available variables in column-header.blade.php
$column // KanbanColumn instance
$status // Column status value
$label // Column label
$color // Column color
$icon // Column icon
$description // Column description
```

### Card Component

The card component receives the following data:

```php
// Available variables in card.blade.php
$record // Eloquent model instance
$title // Record title
$description // Record description
$actions // Record actions
$isLocked // Whether the card is locked
```

## Example Custom Components

### Custom Column Header

```blade
{{-- resources/views/components/kanban/tasks/column-header.blade.php --}}
<div class="flex items-center justify-between p-4 bg-gray-50 border-b">
    <div class="flex items-center space-x-2">
        @if($icon)
            <x-heroicon-o-{{ $icon }} class="w-5 h-5 text-gray-500" />
        @endif
        <h3 class="font-semibold text-gray-900">{{ $label }}</h3>
        @if($description)
            <p class="text-sm text-gray-500">{{ $description }}</p>
        @endif
    </div>
    <div class="flex items-center space-x-2">
        {{ $slot }}
    </div>
</div>
```

### Custom Card

```blade
{{-- resources/views/components/kanban/tasks/card.blade.php --}}
<div class="bg-white rounded-lg shadow-sm border p-4 hover:shadow-md transition-shadow">
    <div class="flex items-start justify-between">
        <div class="flex-1">
            <h4 class="font-medium text-gray-900 mb-2">{{ $title }}</h4>
            @if($description)
                <p class="text-sm text-gray-600 mb-3">{{ $description }}</p>
            @endif
            <div class="flex items-center space-x-2 text-xs text-gray-500">
                <span>Created: {{ $record->created_at->diffForHumans() }}</span>
                @if($record->due_date)
                    <span>Due: {{ $record->due_date->format('M d') }}</span>
                @endif
            </div>
        </div>
        @if($isLocked)
            <div class="ml-2">
                <x-heroicon-o-lock-closed class="w-4 h-4 text-gray-400" />
            </div>
        @endif
    </div>
    @if($actions)
        <div class="mt-3 pt-3 border-t">
            {{ $actions }}
        </div>
    @endif
</div>
```

## Best Practices

- Keep components simple and focused on presentation
- Use consistent styling with your application theme
- Ensure components are responsive and accessible
- Test components thoroughly with different data scenarios
- Consider reusability when designing custom components
