# Lock Card

In Advanced Kanban, you can lock cards in specific columns to prevent them from being moved. This is useful for columns that represent final states or stages where records should not be altered.

To lock cards in a column, use the `->lockCardUsing($record)` method when defining the column.

## Basic Example

```php
use Asmit\AdvancedKanban\Columns\KanbanColumn;

public function kanban(Kanban $kanban): Kanban
{
    return $kanban
        ->model(Task::class)
        ->statusField('status')
        ->columns([
            KanbanColumn::make('todo')
                ->label('To Do')
                ->lockCardUsing(fn($record) => $record->id === 1), // Lock specific record

            KanbanColumn::make('completed')
                ->label('Completed')
                ->lockCardUsing(fn($record) => true), // Lock all cards in this column
        ]);
}
```

## Customizing Lock Appearance

### Custom Lock Icon

You can customize the lock icon displayed on locked cards using the `->lockIcon()` method:

```php
KanbanColumn::make('completed')
    ->label('Completed')
    ->lockCardUsing(fn($record) => true)
    ->lockIcon('heroicon-o-lock-closed'); // Use any Heroicon name
```

### Custom Lock Label

You can add a custom label to the lock icon using the `->lockLabel()` method:

```php
KanbanColumn::make('completed')
    ->label('Completed')
    ->lockCardUsing(fn($record) => true)
    ->lockIcon('heroicon-o-lock-closed')
    ->lockLabel('Completed - Cannot be moved'); // Custom label for the lock icon
```

## Best Practices

- Use lock cards sparingly to maintain workflow flexibility
- Provide clear visual feedback when cards are locked
- Consider user permissions when implementing locks
- Use descriptive lock labels to explain why cards are locked
- Test locking logic thoroughly to ensure it works as expected