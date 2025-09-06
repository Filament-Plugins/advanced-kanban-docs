# Workflow and Allowed Transitions

One of the powerful features of Advanced Kanban is the ability to define allowed transitions between columns. This ensures that records can only move to specific columns based on your workflow requirements.

To define allowed transitions, use the `->allowedTransitions()` method and pass an array of column keys that the current column can transition to.

## Basic Example

```php
use Asmit\AdvancedKanban\Columns\KanbanColumn;

public function kanban(Kanban $kanban): Kanban
{
    return $kanban
        ->model(Task::class)
        ->statusField('status')
        ->columns([
            KanbanColumn::make('todo')
                ->label('To Do')
                ->allowedTransitions(['in_progress']), // Can only move to 'In Progress'

            KanbanColumn::make('in_progress')
                ->label('In Progress')
                ->allowedTransitions(['todo', 'review']), // Can move back to 'To Do' or forward to 'Review'

            KanbanColumn::make('review')
                ->label('Review')
                ->allowedTransitions(['in_progress', 'completed']), // Can move back to 'In Progress' or forward to 'Completed'

            KanbanColumn::make('completed')
                ->label('Completed')
                ->allowedTransitions([]), // No transitions allowed from 'Completed'
        ]);
}
```

## Benefits

- **Workflow Control**: Enforce business rules and prevent invalid moves
- **Data Integrity**: Ensure records follow the intended workflow
- **User Experience**: Provide clear visual feedback on allowed moves
- **Process Compliance**: Maintain consistent workflow across your organization

## Best Practices

- Design transitions that reflect your actual business process
- Consider allowing backward moves for flexibility
- Use descriptive column names that match your workflow
- Test your transitions thoroughly to ensure they work as expected