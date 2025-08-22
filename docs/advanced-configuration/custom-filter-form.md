# Custom Filter Form

```php
public function kanban(Kanban $kanban): Kanban
{
    return $kanban
        // ... other configuration
        ->filterFormSchema([
            Forms\Components\Select::make('priority')
                ->options([
                    'low' => 'Low',
                    'medium' => 'Medium',
                    'high' => 'High',
                ]),
            Forms\Components\Select::make('assignee_id')
                ->relationship('assignee', 'name'),
            Forms\Components\DatePicker::make('due_date'),
        ]);
}