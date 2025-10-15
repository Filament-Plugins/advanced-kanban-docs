# MRR (Manage Related Records) Kanban Setup
To manage related records in a kanban board, please use the MRR (Manage Related Records) feature.
Currently, this feature is only available for MRR pages.
## 1. Create an MRR Page

```bash
    php artisan make:filament-page ManageUserTasks --resource=UserResource --type=ManageRelatedRecords
```

## 2. Implement HasKanban Interface

```php
<?php

namespace App\Filament\Pages;

use App\Filament\Resources\UserResource;
use App\Models\Task;
use Asmit\AdvancedKanban\Concerns\HasKanbanRelatedRecords;
use Asmit\AdvancedKanban\Contracts\HasKanban;
use Asmit\AdvancedKanban\Kanban;
use Asmit\AdvancedKanban\Columns\KanbanColumn;
use Filament\Resources\Pages\ManageRelatedRecords;

class UserTasks extends ManageRelatedRecords implements HasKanban
{
    use HasKanbanRelatedRecords;  // ← Must use this trait

    protected static string $resource = UserResource::class;  // ← Set your resource
    protected static string $relationship = 'tasks';         // ← Set your relationship

    public function kanban(Kanban $kanban): Kanban
    {
        return $kanban
            ->model(Task::class)           // ← Pass your model
            ->statusField('status')        // ← Pass the status field
            ->titleField('title')
            ->descriptionField('description')
            ->columns([
                KanbanColumn::make('To Do'), // ← Pass required column
                KanbanColumn::make('In Progress'),
            ])
            ->searchableFields(['title', 'description'])
            ->recordsPerColumn(10);
    }
}
```

## 3. That's It!

Your MRR kanban board is ready! It will show only the related records for the current parent record.

**Key Requirements for MRR:**
- ✅ Implement `HasKanban` interface
- ✅ Use `HasKanbanRelatedRecords` trait
- ✅ Set `$resource` to your parent resource
- ✅ Set `$relationship` to your relationship name
- ✅ Pass `->model(YourModel::class)`
- ✅ Pass `->statusField('your_status_field')`

**⚠️ Important:** This feature is **not available** for regular Relation Managers, only for MRR pages.

## Example with Advanced Configuration

```php
<?php

namespace App\Filament\Pages;

use App\Filament\Resources\UserResource;
use App\Models\Task;
use Asmit\AdvancedKanban\Concerns\HasKanbanRelatedRecords;
use Asmit\AdvancedKanban\Contracts\HasKanban;
use Asmit\AdvancedKanban\Kanban;
use Asmit\AdvancedKanban\Columns\KanbanColumn;
use Filament\Resources\Pages\ManageRelatedRecords;

class UserTasks extends ManageRelatedRecords implements HasKanban
{
    use HasKanbanRelatedRecords;

    protected static string $resource = UserResource::class;
    protected static string $relationship = 'tasks';

    public function kanban(Kanban $kanban): Kanban
    {
        return $kanban
            ->model(Task::class)
            ->statusField('status')
            ->titleField('title')
            ->descriptionField('description')
            ->columns([
                KanbanColumn::make('todo')
                    ->label('To Do')
                    ->color('gray')
                    ->icon('heroicon-o-clock'),
                
                KanbanColumn::make('in-progress')
                    ->label('In Progress')
                    ->color('blue')
                    ->icon('heroicon-o-play'),
                
                KanbanColumn::make('review')
                    ->label('Review')
                    ->color('yellow')
                    ->icon('heroicon-o-eye'),
                
                KanbanColumn::make('done')
                    ->label('Done')
                    ->color('green')
                    ->icon('heroicon-o-check-circle'),
            ])
            ->searchableFields(['title', 'description'])
            ->recordsPerColumn(15);
    }
}
``` 