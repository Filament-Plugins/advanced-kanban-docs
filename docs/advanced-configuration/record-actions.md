# Record Actions

```php
public function kanban(Kanban $kanban): Kanban
{
    return $kanban
        // ... other configuration
        ->recordActions([
            Actions\EditAction::make()
                ->url(fn ($record) => route('filament.admin.resources.tasks.edit', $record)),
            Actions\DeleteAction::make(),
            Actions\ActionGroup::make([
                Actions\Action::make('duplicate')
                    ->label('Duplicate')
                    ->icon('heroicon-o-document-duplicate')
                    ->action(fn ($record) => $this->duplicateTask($record)),
                Actions\Action::make('archive')
                    ->label('Archive')
                    ->icon('heroicon-o-archive-box')
                    ->color('warning')
                    ->action(fn ($record) => $this->archiveTask($record)),
            ]),
        ]);
}
```