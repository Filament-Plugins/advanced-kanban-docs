# 📋 Kanban Class Options

## 1. Kanban Class Methods Overview

This section provides a complete reference of all available methods in the Kanban class with their descriptions and parameters.

| Method | Description | Parameters |
|--------|-------------|------------|
| `model()` | Set the Eloquent model for the kanban board | `string\|Model $model` |
| `statusField()` | Set the status field name that determines column placement | `string $field` |
| `titleField()` | Set the title field name to display on cards | `string $field` |
| `descriptionField()` | Set the description field name to display on cards | `string $field` |
| `columns()` | Set the kanban columns configuration | `array $columns` |
| `searchableFields()` | Set fields that can be searched | `array $fields` |
| `searchable()` | Enable or disable search functionality | `bool $condition = true` |
| `searchField()` | Set a specific search field | `string $field` |
| `filterFormSchema()` | Set the filter form schema | `array $schema` |
| `headerActions()` | Set actions available in the header | `array $actions` |
| `recordActions()` | Set actions available on individual records | `array $actions` |
| `columnHeaderActions()` | Set actions available in column headers | `array $actions` |
| `recordsPerColumn()` | Set maximum number of records per column | `int $count` |
| `modifyQueryUsing()` | Modify the base query for fetching records | `Closure $callback` |
| `modifyRecordQueryUsing()` | Modify query for specific column records | `Closure $callback` |
| `applyFiltersUsing()` | Set custom filter application logic | `Closure $callback` |
| `applySearchUsing()` | Set custom search application logic | `Closure $callback` |
| `emptyStateMessage()` | Set custom empty state message | `string $message` |

## 2. Model Configuration Methods

### 2.1 `model(string|Model $model)`

Sets the Eloquent model that the kanban board will use to fetch and display records.

```php
->model(Task::class)
->model(\App\Models\Task::class)
```

### 2.2 `statusField(string $field)`

Sets the field name that contains the status value. This field determines which column each record appears in.

```php
->statusField('status')
->statusField('state')
->statusField('phase')
```

### 2.3 `titleField(string $field)`

Sets the field name that will be displayed as the title on each kanban card.

```php
->titleField('title')
->titleField('name')
->titleField('subject')
```

### 2.4 `descriptionField(string $field)`

Sets the field name that will be displayed as the description on each kanban card.

```php
->descriptionField('description')
->descriptionField('content')
->descriptionField('notes')
```

## 3. Column Configuration Methods

### 3.1 `columns(array $columns)`

Sets the kanban columns configuration. Can be a simple key-value array or use `KanbanColumn` objects for advanced configuration.

```php
// Simple array format
->columns([
    'todo' => 'To Do',
    'in-progress' => 'In Progress',
    'done' => 'Done',
])

// Advanced KanbanColumn format
->columns([
    KanbanColumn::make('todo')
        ->label('To Do')
        ->color('gray')
        ->icon('heroicon-o-clock'),
    KanbanColumn::make('done')
        ->label('Done')
        ->color('green')
        ->icon('heroicon-o-check-circle'),
])
```

## 4. Search Configuration Methods

### 4.1 `searchableFields(array $fields)`

Sets the fields that can be searched using the search functionality.

```php
->searchableFields(['title', 'description'])
->searchableFields(['name', 'email', 'phone'])
```

### 4.2 `searchable(bool $condition = true)`

Enables or disables the search functionality for the kanban board.

```php
->searchable(true)   // Enable search
->searchable(false)  // Disable search
```

### 4.3 `searchField(string $field)`

Sets a specific field to use for search instead of the default searchable fields.

```php
->searchField('title')
->searchField('name')
```

### 4.4 `applySearchUsing(Closure $callback)`

Sets custom logic for applying search to the query.

```php
->applySearchUsing(function ($query, $search) {
    return $query->where(function ($q) use ($search) {
        $q->where('title', 'like', "%{$search}%")
          ->orWhere('description', 'like', "%{$search}%");
    });
})
```

## 5. Filter Configuration Methods

### 5.1 `filterFormSchema(array $schema)`

Sets the form schema for filtering records. Uses Filament form components.

```php
->filterFormSchema([
    Forms\Components\Select::make('priority')
        ->options(['low', 'medium', 'high']),
    Forms\Components\DatePicker::make('created_at'),
])
```

### 5.2 `applyFiltersUsing(Closure $callback)`

Sets custom logic for applying filters to the query.

```php
->applyFiltersUsing(function ($query, $filters) {
    if (isset($filters['priority'])) {
        $query->where('priority', $filters['priority']);
    }
    if (isset($filters['date_range'])) {
        $query->whereBetween('created_at', $filters['date_range']);
    }
    return $query;
})
```

## 6. Action Configuration Methods

### 6.1 `headerActions(array $actions)`

Sets actions that appear in the kanban header. Uses Filament actions.

```php
->headerActions([
    Actions\CreateAction::make()
        ->label('New Task'),
    Actions\Action::make('export')
        ->label('Export'),
])
```

### 6.2 `recordActions(array $actions)`

Sets actions that appear on individual kanban cards.

```php
->recordActions([
    Actions\EditAction::make(),
    Actions\DeleteAction::make(),
    Action::make('duplicate')
        ->label('Duplicate'),
])
```

### 6.3 `columnHeaderActions(array $actions)`

Sets actions that appear in each column header.

```php
->columnHeaderActions([
    Actions\Action::make('add_task')
        ->label('Add Task'),
    Actions\Action::make('export_column')
        ->label('Export'),
])
```

## 7. Pagination Configuration Methods

### 7.1 `recordsPerColumn(int $count)`

Sets the maximum number of records to display per column.

```php
->recordsPerColumn(10)
->recordsPerColumn(25)
```

## 8. Query Modification Methods

### 8.1 `modifyQueryUsing(Closure $callback)`

Allows you to modify the base query used to fetch records.

```php
->modifyQueryUsing(function ($query) {
    return $query->where('user_id', auth()->id())
        ->orderBy('priority', 'desc');
})
```

### 8.2 `modifyRecordQueryUsing(Closure $callback)`

Allows you to modify the query for specific column records. Provides access to the column object.

```php
->modifyRecordQueryUsing(function ($query, $column) {
    if ($column->getStatus() === 'urgent') {
        return $query->where('priority', 'high');
    }
    return $query;
})
```

## 9. Display Configuration Methods

### 9.1 `emptyStateMessage(string $message)`

Sets a custom message to display when a column has no records.

```php
->emptyStateMessage('No tasks in this column yet.')
->emptyStateMessage('Add your first task to get started!')
```

## 10. Complete Example

```php
public function kanban(Kanban $kanban): Kanban
{
    return $kanban
        // Model Configuration
        ->model(Task::class)
        ->statusField('status')
        ->titleField('title')
        ->descriptionField('description')
        
        // Column Configuration
        ->columns([
            'todo' => 'To Do',
            'in-progress' => 'In Progress',
            'done' => 'Done',
        ])
        
        // Search Configuration
        ->searchableFields(['title', 'description'])
        ->searchable(true)
        
        // Filter Configuration
        ->filterFormSchema([
            Forms\Components\Select::make('priority')
                ->options(['low', 'medium', 'high']),
        ])
        
        // Action Configuration
        ->headerActions([
            Actions\CreateAction::make(),
        ])
        ->recordActions([
            Actions\EditAction::make(),
            Actions\DeleteAction::make(),
        ])
        
        // Pagination Configuration
        ->recordsPerColumn(15)
        
        // Query Modification
        ->modifyQueryUsing(function ($query) {
            return $query->orderBy('created_at', 'desc');
        })
        
        // Display Configuration
        ->emptyStateMessage('No tasks found in this column.');
}
``` 