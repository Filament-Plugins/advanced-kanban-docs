# Query Modifications

This section covers how to modify the query used to retrieve records for a specific Kanban column. This can be useful for implementing custom filtering, sorting, or other query adjustments based on the column's context.

## 1. Base Query Modifications
You can modify the base query by using the `->modifyQueryUsing()` method on the Kanban component. This allows you to apply global filters or conditions to all records displayed in the Kanban board.

```php
use Asmit\AdvancedKanban\Kanban;

Kanban::make()
    ->modifyQueryUsing(function ($query) {
        return $query->where('is_active', true);
    });
```

## 2. Record Query Modifications
You can modify the record query for a Kanban column using the `modifyRecordQueryUsing` method. This method accepts a closure that receives the current query builder instance and the column instance.

### Example

```php
use Asmit\AdvancedKanban\Columns\KanbanColumn;

KanbanColumn::make()
    ->modifyRecordQueryUsing(function ($query) {
        return $query->where('status', 'to_do')->orderBy('created_at', 'asc');
    });
```
