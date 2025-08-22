# Custom Card Component

Create a custom card component to display rich content:

```php
public function kanban(Kanban $kanban): Kanban
{
    return $kanban
        // ... other configuration
        ->modifyRecordUsing(function ($record) {
            // Customize how records are displayed
            return $record;
        });
}
```