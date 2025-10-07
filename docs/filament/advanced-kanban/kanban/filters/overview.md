# Filters

Advanced Kanban does not provide built-in filters like other Filament resources. However, you can implement custom filtering logic in your kanban page.

## Implementation Steps

To add filters to your kanban board:

1. **Create Filter Form Schema**: Use the `->filterFormSchema()` method to define your filter form
2. **Apply Filters**: Use the `->applyFiltersUsing()` method to apply the filters to your kanban query

## Basic Example

```php
<?php
use Filament\Forms\Components\Select;
use Illuminate\Contracts\Database\Eloquent\Builder;

public function kanban(Kanban $kanban): Kanban
{
    return $kanban
        ->model(Task::class)
        ->statusField('status')
        ->searchableFields(['title', 'description'])
        ->filterFormSchema([
            Select::make('priority')
                ->options([
                    'low' => 'Low',
                    'medium' => 'Medium',
                    'high' => 'High',
                ])
                ->placeholder('All Priorities'),
            Select::make('assigned_to')
                ->options(User::pluck('name', 'id'))
                ->placeholder('All Users'),
        ])
        ->applyFiltersUsing(function(Builder $query, array $data) {
            if (!empty($data['priority'])) {
                $query->where('priority', $data['priority']);
            }
            
            if (!empty($data['assigned_to'])) {
                $query->where('assigned_to', $data['assigned_to']);
            }
            
            return $query;
        })
        ->columns([
            // Your columns here
        ]);
}
```

## Advanced Filter Example

```php
<?php
use Filament\Forms\Components\DatePicker;
use Filament\Forms\Components\Toggle;

public function kanban(Kanban $kanban): Kanban
{
    return $kanban
        ->model(Task::class)
        ->statusField('status')
        ->filterFormSchema([
            Select::make('priority')
                ->options([
                    'low' => 'Low',
                    'medium' => 'Medium',
                    'high' => 'High',
                ]),
            DatePicker::make('due_date')
                ->label('Due Date'),
            Toggle::make('is_urgent')
                ->label('Urgent Tasks Only'),
        ])
        ->applyFiltersUsing(function(Builder $query, array $data) {
            if (!empty($data['priority'])) {
                $query->where('priority', $data['priority']);
            }
            
            if (!empty($data['due_date'])) {
                $query->whereDate('due_date', $data['due_date']);
            }
            
            if (!empty($data['is_urgent'])) {
                $query->where('is_urgent', true);
            }
            
            return $query;
        });
}
```