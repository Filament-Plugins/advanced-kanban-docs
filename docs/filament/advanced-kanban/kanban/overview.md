# Kanban Overview

Advanced Kanban provides a comprehensive set of features to create powerful, customizable kanban boards in your Filament applications. This section covers all the core functionality and advanced features available.

## Core Concepts

### Kanban Board Structure

A kanban board consists of:

- **Columns**: Represent different statuses or stages in your workflow
- **Cards**: Individual records displayed as draggable cards
- **Actions**: Interactive elements for performing operations
- **Search & Filters**: Tools for finding and filtering records

### Basic Configuration

Every kanban board requires:

```php
public function kanban(Kanban $kanban): Kanban
{
    return $kanban
        ->model(YourModel::class)        // The model to display
        ->statusField('status')          // The status field name
        ->columns([                      // Define your columns
            KanbanColumn::make('todo')->label('To Do'),
            KanbanColumn::make('in_progress')->label('In Progress'),
            KanbanColumn::make('completed')->label('Completed'),
        ]);
}
```

## Feature Categories

### 1. Search & Filtering

- **[Search](search.md)**: Real-time search across multiple fields
- **[Filters](filters/overview.md)**: Custom filter forms with various field types

### 2. Column Management

- **[Column Overview](columns/overview.md)**: Basic column configuration and customization
- **[Record Actions](columns/record-actions.md)**: Actions displayed on individual cards
- **[Header Actions](columns/heading-actions.md)**: Actions displayed in column headers

### 3. Advanced Features

- **[Workflow](advanced-features/workflow.md)**: Control allowed moves between columns
- **[Card Locking](advanced-features/lock-card.md)**: Prevent specific cards from being moved
- **[Custom Components](advanced-features/components.md)**: Create custom card and column components
- **[Record Move Handling](advanced-features/handle-record-move.md)**: Customize move behavior and validation
- **[Render Hooks](advanced-features/render-hooks.md)**: Add custom content to the board

## Quick Reference

### Common Configuration Options

```php
public function kanban(Kanban $kanban): Kanban
{
    return $kanban
        ->model(Task::class)
        ->statusField('status')
        ->titleField('title')                    // Field to display as card title
        ->descriptionField('description')        // Field to display as card description
        ->searchableFields(['title', 'description']) // Fields to search
        ->recordsPerColumn(10)                   // Pagination limit
        ->columns([
            // Your columns here
        ])
        ->columnHeaderActions([                  // Column-specific actions
            // Actions here
        ])
        ->recordActions([                        // Card-specific actions
            // Actions here
        ]);
}
```

### Column Configuration

```php
KanbanColumn::make('todo')
    ->label('To Do')
    ->color('gray')
    ->icon('heroicon-o-clock')
    ->description('Tasks that need to be started')
    ->allowedTransitions(['in_progress'])        // Control allowed moves
    ->lockCardUsing(fn($record) => false)        // Lock specific cards
    ->extraColumnHeadingClass('font-bold');      // Custom CSS classes
```

## Best Practices

### Performance
- Use pagination for large datasets
- Implement proper database indexing
- Use eager loading for relationships
- Optimize search and filter queries

### User Experience
- Provide clear column labels and descriptions
- Use consistent colors and icons
- Implement logical transition rules
- Add helpful actions for common tasks

### Security
- Validate all user inputs
- Implement proper authorization checks
- Use secure data handling practices
- Follow Laravel security best practices

## Next Steps

- Start with the **[Quick Start Guide](../quick-start.md)** to create your first board
- Explore **[Advanced Features](advanced-features/workflow.md)** for customization
- Check out **[Relational Records](../relational-records/mrr-kanban-setup.md)** for managing related data
- Review the **[API Reference](../api-reference/kanban-options.md)** for complete method documentation

Advanced Kanban is designed to be flexible and powerful while remaining easy to use. Whether you're building a simple task board or a complex workflow system, these features provide the tools you need to create effective kanban boards.
