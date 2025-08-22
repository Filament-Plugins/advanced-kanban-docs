# Advanced Column with Transitions

```php
KanbanColumn::make('in-progress')
    ->label('In Progress')
    ->description('Tasks currently being worked on')
    ->color('blue')
    ->icon('heroicon-o-play')
    ->allowedTransitions(['review', 'todo', 'blocked'])
    ->lockCardUsing(fn ($record) => $record->is_locked)
```