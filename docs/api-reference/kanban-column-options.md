# 🔧 KanbanColumn Configuration Options

## 1. KanbanColumn Methods Overview

This section provides a complete reference of all available methods in the KanbanColumn class with their descriptions and parameters.

| Method | Description | Parameters |
|--------|-------------|------------|
| `make()` | Create a new KanbanColumn instance | `string $status` |
| `label()` | Set the display label for the column | `string\|Closure $label` |
| `description()` | Set the column description | `string $description` |
| `color()` | Set the column color | `string\|Closure $color` |
| `icon()` | Set the column icon | `string\|Closure $icon` |
| `iconColor()` | Set the icon color | `string\|Closure $color` |
| `hidden()` | Hide or show the column | `bool\|Closure $hidden = true` |
| `allowedTransitions()` | Set allowed status transitions | `array\|Closure $transitions` |
| `lockCardUsing()` | Set card locking condition | `bool\|Closure $condition = true` |
| `modifyRecordQueryUsing()` | Modify query for column records | `Closure $callback` |

## 2. Column Creation Methods

### 2.1 `make(string $status)`

Creates a new KanbanColumn instance with the specified status.

```php
KanbanColumn::make('todo')
KanbanColumn::make('in-progress')
KanbanColumn::make('done')
```

## 3. Display Configuration Methods

### 3.1 `label(string|Closure $label)`

Sets the display label for the column. This is what users will see as the column header.

```php
->label('To Do')
->label('In Progress')
->label('Under Review')
->label(fn() => 'Custom ' . ucfirst($this->status))
```

### 3.2 `description(string $description)`

Sets a description for the column that can be displayed as a tooltip or subtitle.

```php
->description('Tasks that need to be started')
->description('Tasks currently being worked on')
->description('Completed tasks ready for review')
```

### 3.3 `color(string|Closure $color)`

Sets the color theme for the column. Can be a string or closure for dynamic colors.

```php
->color('gray')
->color('blue')
->color('green')
->color('red')
->color(fn() => $this->status === 'urgent' ? 'red' : 'gray')
```

### 3.4 `icon(string|Closure $icon)`

Sets the icon for the column header. Uses Heroicon names.

```php
->icon('heroicon-o-clock')
->icon('heroicon-o-play')
->icon('heroicon-o-check-circle')
->icon('heroicon-o-exclamation-triangle')
->icon(fn() => $this->status === 'urgent' ? 'heroicon-o-exclamation-triangle' : 'heroicon-o-clock')
```

### 3.5 `iconColor(string|Closure $color)`

Sets the color for the column icon.

```php
->iconColor('gray')
->iconColor('blue')
->iconColor('green')
->iconColor('red')
->iconColor(fn() => $this->status === 'urgent' ? 'red' : 'gray')
```

## 4. Visibility Configuration Methods

### 4.1 `hidden(bool|Closure $hidden = true)`

Hides or shows the column. Useful for conditional column display.

```php
->hidden(true)  // Hide the column
->hidden(false) // Show the column
->hidden(fn() => auth()->user()->cannot('view-archived'))
->hidden(fn() => $this->status === 'archived' && !$showArchived)
```

## 5. Workflow Configuration Methods

### 5.1 `allowedTransitions(array|Closure $transitions)`

Sets which statuses records can transition to from this column. Controls drag-and-drop behavior.

```php
// Simple array format
->allowedTransitions(['in-progress'])

// Multiple allowed transitions
->allowedTransitions(['in-progress', 'review'])

// No transitions allowed (final state)
->allowedTransitions([])

// Dynamic transitions based on conditions
->allowedTransitions(fn() => [
    'in-progress',
    auth()->user()->can('skip-review') ? 'done' : 'review'
])

// Complex workflow rules
->allowedTransitions(fn() => match($this->status) {
    'todo' => ['in-progress'],
    'in-progress' => ['review', 'todo'],
    'review' => ['done', 'in-progress'],
    'done' => ['review'],
    default => []
})
```

## 6. Card Behavior Configuration Methods

### 6.1 `lockCardUsing(bool|Closure $condition = true)`

Sets conditions for when cards in this column should be locked (prevented from moving).

```php
// Lock all cards in this column
->lockCardUsing(true)

// Never lock cards in this column
->lockCardUsing(false)

// Lock cards based on record properties
->lockCardUsing(fn($record) => $record->priority === 'urgent')

// Lock cards based on user permissions
->lockCardUsing(fn($record) => !auth()->user()->can('move-urgent-tasks'))

// Lock cards based on column status
->lockCardUsing(fn($record) => $this->status === 'archived')
```

## 7. Query Modification Methods

### 7.1 `modifyRecordQueryUsing(Closure $callback)`

Allows you to modify the query for records in this specific column. Provides access to the query and column object.

```php
// Filter records based on column status
->modifyRecordQueryUsing(function ($query, $column) {
    if ($column->getStatus() === 'urgent') {
        return $query->where('priority', 'high');
    }
    return $query;
})

// Add custom ordering for specific columns
->modifyRecordQueryUsing(function ($query, $column) {
    if ($column->getStatus() === 'done') {
        return $query->orderBy('completed_at', 'desc');
    }
    return $query->orderBy('created_at', 'asc');
})

// Apply column-specific filters
->modifyRecordQueryUsing(function ($query, $column) {
    if ($column->getStatus() === 'archived') {
        return $query->where('is_archived', true);
    }
    return $query->where('is_archived', false);
})
```

## 8. Complete Example

```php
public function kanban(Kanban $kanban): Kanban
{
    return $kanban
        ->model(Task::class)
        ->statusField('status')
        ->columns([
            KanbanColumn::make('backlog')
                ->label('Backlog')
                ->description('Tasks waiting to be prioritized')
                ->color('gray')
                ->icon('heroicon-o-archive-box')
                ->iconColor('gray')
                ->allowedTransitions(['todo'])
                ->lockCardUsing(false),
            
            KanbanColumn::make('todo')
                ->label('To Do')
                ->description('Tasks ready to be started')
                ->color('blue')
                ->icon('heroicon-o-clock')
                ->iconColor('blue')
                ->allowedTransitions(['in-progress', 'backlog'])
                ->lockCardUsing(fn($record) => $record->priority === 'urgent'),
            
            KanbanColumn::make('in-progress')
                ->label('In Progress')
                ->description('Tasks currently being worked on')
                ->color('yellow')
                ->icon('heroicon-o-play')
                ->iconColor('yellow')
                ->allowedTransitions(['review', 'todo'])
                ->lockCardUsing(false)
                ->modifyRecordQueryUsing(function ($query, $column) {
                    return $query->orderBy('started_at', 'desc');
                }),
            
            KanbanColumn::make('review')
                ->label('Review')
                ->description('Tasks ready for review')
                ->color('purple')
                ->icon('heroicon-o-eye')
                ->iconColor('purple')
                ->allowedTransitions(['done', 'in-progress'])
                ->lockCardUsing(fn($record) => !auth()->user()->can('approve-tasks')),
            
            KanbanColumn::make('done')
                ->label('Done')
                ->description('Completed tasks')
                ->color('green')
                ->icon('heroicon-o-check-circle')
                ->iconColor('green')
                ->allowedTransitions(['review'])
                ->lockCardUsing(fn($record) => $record->is_archived)
                ->modifyRecordQueryUsing(function ($query, $column) {
                    return $query->orderBy('completed_at', 'desc');
                }),
            
            KanbanColumn::make('archived')
                ->label('Archived')
                ->description('Archived tasks')
                ->color('gray')
                ->icon('heroicon-o-archive-box')
                ->iconColor('gray')
                ->allowedTransitions([])
                ->lockCardUsing(true)
                ->hidden(fn() => !auth()->user()->can('view-archived'))
                ->modifyRecordQueryUsing(function ($query, $column) {
                    return $query->where('is_archived', true);
                }),
        ]);
}
```

## 9. Advanced Usage Patterns

### 9.1 Dynamic Column Creation

```php
// Create columns dynamically based on project phases
$phases = ['planning', 'development', 'testing', 'deployment'];

$columns = collect($phases)->map(function ($phase) {
    return KanbanColumn::make($phase)
        ->label(ucfirst($phase))
        ->color(match($phase) {
            'planning' => 'blue',
            'development' => 'yellow',
            'testing' => 'purple',
            'deployment' => 'green',
        })
        ->icon(match($phase) {
            'planning' => 'heroicon-o-light-bulb',
            'development' => 'heroicon-o-code-bracket',
            'testing' => 'heroicon-o-beaker',
            'deployment' => 'heroicon-o-rocket-launcher',
        });
})->toArray();
```

### 9.2 Conditional Workflow Rules

```php
KanbanColumn::make('urgent')
    ->label('Urgent')
    ->color('red')
    ->icon('heroicon-o-exclamation-triangle')
    ->allowedTransitions(fn() => {
        $user = auth()->user();
        $transitions = ['in-progress'];
        
        if ($user->can('skip-review')) {
            $transitions[] = 'done';
        }
        
        if ($user->can('delegate-urgent')) {
            $transitions[] = 'delegated';
        }
        
        return $transitions;
    })
    ->lockCardUsing(fn($record) => !auth()->user()->can('handle-urgent-tasks'))
    ->modifyRecordQueryUsing(function ($query, $column) {
        return $query->where('priority', 'urgent')
                    ->orderBy('created_at', 'asc');
    })
``` 