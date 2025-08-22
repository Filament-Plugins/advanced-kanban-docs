# Column Header Actions

```php
public function kanban(Kanban $kanban): Kanban
{
    return $kanban
        // ... other configuration
        ->columnHeaderActions([
            Actions\Action::make('add_task')
                ->label('Add Task')
                ->icon('heroicon-o-plus')
                ->action(fn ($column) => $this->addTaskToColumn($column)),
        ]);
}
```