# Header Actions

```php
public function kanban(Kanban $kanban): Kanban
{
    return $kanban
        // ... other configuration
        ->headerActions([
            Actions\CreateAction::make()
                ->label('New Task')
                ->url(route('filament.admin.resources.tasks.create')),
            Actions\Action::make('export')
                ->label('Export')
                ->icon('heroicon-o-arrow-down-tray')
                ->action(fn () => $this->exportTasks()),
        ]);
}
```