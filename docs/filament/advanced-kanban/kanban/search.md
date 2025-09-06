# Search

Advanced Kanban provides simple search functionality by default. You can enable it by using the `->searchableFields()` method in your kanban page and passing the fields you want to search in.

By default, it supports the `like` operator for searching. You can pass second-level relations using dot (`.`) notation.

## Basic Search Setup

```php
public function kanban(Kanban $kanban): Kanban
{
    return $kanban
        ->model(Task::class)
        ->statusField('status')
        ->searchableFields(['title', 'description', 'assignedTo.name']) // ← Add searchable fields here
        ->columns([
            // Your columns here
        ]);
}
```

## Customizing Search Behavior

You can customize the search behavior by overriding the `applySearch` method in your kanban page:

```php
<?php
use Illuminate\Database\Eloquent\Builder;

public function kanban(Kanban $kanban): Kanban
{   
    return $kanban
        ->model(Task::class)
        ->statusField('status')
        ->applySearchUsing(function(Builder $query, string $search) {
            return $query->where('title', 'like', '%' . $search . '%')
                ->orWhere('description', 'like', '%' . $search . '%')
                ->orWhereHas('assignedTo', function($q) use ($search) {
                    $q->where('name', 'like', '%' . $search . '%');
                });
        })
        ->columns([
            // Your columns here
        ]);
}
```

## Loading Indicator
You can enable a loading indicator by using the `->enableLoadingIndicator()` method in your kanban page.


## Search Features

- **Debounced Input**: Search is automatically debounced to improve performance
- **Multi-field Search**: Search across multiple fields simultaneously
- **Relationship Search**: Search in related models using dot notation
- **Custom Logic**: Override search behavior with your own logic
