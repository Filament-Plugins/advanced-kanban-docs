# Customize Record Move Behavior

Advanced Kanban allows you to customize the behavior when a record is moved between columns. You can achieve this by overriding the `handleRecordMove` method in your Kanban page class.

## Basic Implementation

```php
<?php

namespace App\Filament\Pages;

use App\Models\Task;
use Illuminate\Database\Eloquent\Model;

class TasksKanban extends KanbanPage
{
    public function handleRecordMove(string $newStatus, Model $record): void
    {
        // Update the record's status
        $record->update(['status' => $newStatus]);
        
        // Log the move
        activity()
            ->performedOn($record)
            ->log("Task moved to {$newStatus}");
    }
}
```

## Using Hooks

You can also use hooks to perform actions before or after a record is moved. These hooks provide more granular control over the move process.

### Before Record Move

```php
public function beforeRecordMove(string $newStatus, Model $record): void
{
    // Perform actions before the record is moved
    if ($newStatus === 'completed') {
        // Validate that the task can be completed
        if (!$record->all_subtasks_completed) {
            throw new \Exception('Cannot complete task: all subtasks must be finished');
        }
    }
    
    // Log the move attempt
    \Log::info("Attempting to move task {$record->id} to {$newStatus}");
}
```

### After Record Move

```php
public function afterRecordMove(mixed $oldStatus, string $newStatus, Model $record): void
{
    // Perform actions after the record is moved
    if ($newStatus === 'completed') {
        // Send notification
        $record->assignee->notify(new TaskCompletedNotification($record));
        
        // Update completion timestamp
        $record->update(['completed_at' => now()]);
    }
    
    // Log the successful move
    \Log::info("Task {$record->id} moved from {$oldStatus} to {$newStatus}");
}
```

## Best Practices

- **Validation**: Always validate moves in `beforeRecordMove`
- **Permissions**: Check user permissions before allowing moves
- **Notifications**: Send relevant notifications in `afterRecordMove`
- **Logging**: Log all move activities for audit trails
- **Error Handling**: Use proper exception handling for validation failures
- **Performance**: Keep hook methods lightweight to avoid performance issues

## Hook Execution Order

1. `beforeRecordMove()` - Validation and pre-move logic
2. `handleRecordMove()` - Actual record update
3. `afterRecordMove()` - Post-move actions and notifications
