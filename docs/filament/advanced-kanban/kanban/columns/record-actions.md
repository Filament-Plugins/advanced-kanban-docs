# Record Actions

You can add actions to each record using the `->recordActions()` method. This method accepts an array of actions that will be displayed for each record card.

## Basic Example

```php
<?php
use Asmit\AdvancedKanban\Kanban;
use Asmit\AdvancedKanban\RecordAction\Action;
use Asmit\AdvancedKanban\RecordAction\DeleteAction;

public function kanban(Kanban $kanban): Kanban
{
    return $kanban
        ->model(Task::class)
        ->statusField('status')
        ->recordActions([
            Action::make('edit')
                ->label('Edit')
                ->icon('heroicon-o-pencil')
                ->action(fn($record) => $this->editTask($record)),
            Action::make('view')
                ->label('View')
                ->icon('heroicon-o-eye')
                ->action(fn($record) => $this->viewTask($record))
                ->openUrlInNewTab(),
        ])
        ->columns([
            // Your columns here
        ]);
}
```

## Using Action Groups

You can group multiple actions using `ActionGroup`:

```php
use Asmit\AdvancedKanban\RecordAction\Action;
use Asmit\AdvancedKanban\RecordAction\DeleteAction;
use Asmit\AdvancedKanban\Actions\ActionGroup;

public function kanban(Kanban $kanban): Kanban
{
    return $kanban
        ->model(Task::class)
        ->statusField('status')
        ->recordActions([
            Action::make('edit')
                ->label('Edit')
                ->icon('heroicon-o-pencil')
                ->action(fn($record) => $this->editTask($record)),
            ActionGroup::make([
                Action::make('view')
                    ->label('View Details')
                    ->icon('heroicon-o-eye')
                    ->action(fn($record) => $this->viewTask($record)),
                Action::make('duplicate')
                    ->label('Duplicate')
                    ->icon('heroicon-o-document-duplicate')
                    ->action(fn($record) => $this->duplicateTask($record)),
                DeleteAction::make('delete')
                    ->label('Delete')
                    ->icon('heroicon-o-trash')
                    ->color('danger')
                    ->action(fn($record) => $this->deleteTask($record)),
            ])
            ->label('More Actions')
            ->icon('heroicon-o-ellipsis-vertical')
            ->dropdownPlacement('bottom-end'),
        ])
        ->columns([
            // Your columns here
        ]);
}
```

## Built-in Actions

Advanced Kanban provides specialized actions for common operations:

### DeleteAction

A pre-configured delete action with confirmation:

```php
use Asmit\AdvancedKanban\RecordAction\DeleteAction;

DeleteAction::make('delete')
    ->label('Delete Task')
    ->icon('heroicon-o-trash')
    ->color('danger')
    ->action(fn($record) => $this->deleteTask($record))
    ->requiresConfirmation()
    ->modalHeading('Delete Task')
    ->modalDescription('Are you sure you want to delete this task? This action cannot be undone.');
```

## Best Practices

- Use record actions for operations specific to individual records
- Group related actions using ActionGroup for better organization
- Provide clear labels and icons for better user experience
- Use the built-in DeleteAction for delete operations
- Consider the record context when designing actions

**Note:** Make sure to import the correct `Action` and `DeleteAction` classes from the `Asmit\AdvancedKanban\RecordAction` namespace.