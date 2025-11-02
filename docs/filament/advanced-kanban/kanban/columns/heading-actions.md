# Column Header Actions

You can add actions to the column headers using the `->columnHeaderActions()` method. This method accepts an array of actions that will be displayed in each column header.

## Basic Example

```php
<?php
use Filament\Actions\Action;

public function kanban(Kanban $kanban): Kanban
{
    return $kanban
        ->model(Task::class)
        ->statusField('status')
        ->columns([
            // Your columns here
        ])
        ->columnHeaderActions([
            Action::make('add_task')
                ->label('Add Task')
                ->icon('heroicon-o-plus')
                ->color('primary')
                ->action(function($arguments) {
                    // $arguments contains the current column status
                    $this->addTaskToColumn($arguments['status']);
                }),
        ]);
}
```

## Using Action Groups

You can also pass `ActionGroup` to group multiple actions together:

```php
use Filament\Actions\Action;
use Asmit\AdvancedKanban\Actions\ActionGroup;

public function kanban(Kanban $kanban): Kanban
{
    return $kanban
        ->model(Task::class)
        ->statusField('status')
        ->columns([
            // Your columns here
        ])
        ->columnHeaderActions([
            ActionGroup::make([
                Action::make('add_task')
                    ->label('Add Task')
                    ->icon('heroicon-o-plus')
                    ->action(fn($arguments) => $this->addTask($arguments['status'])),
                Action::make('bulk_edit')
                    ->label('Bulk Edit')
                    ->icon('heroicon-o-pencil')
                    ->action(fn($arguments) => $this->bulkEdit($arguments['status'])),
                Action::make('export_column')
                    ->label('Export Column')
                    ->icon('heroicon-o-arrow-down-tray')
                    ->action(fn($arguments) => $this->exportColumn($arguments['status'])),
            ])
            ->label('More Actions')
            ->icon('heroicon-o-ellipsis-vertical')
            ->color('gray'),
        ]);
}
```

## Accessing Column Context

The action callback receives an `$arguments` array containing:

- `status` - The current column's status value
- Any additional data you pass to the action
## Built-in Actions

Advanced Kanban provides specialized actions for common operations:

### CreateAction
A pre-configured create action:

```php
use Asmit\AdvancedKanban\RecordAction\CreateAction;

CreateAction::make('create')
    ->schema([
        // Your form schema here
    ])
```
## Best Practices

- Use column header actions for operations specific to that column
- Group related actions using ActionGroup for better organization
- Provide clear labels and icons for better user experience
- Consider the column context when designing actions