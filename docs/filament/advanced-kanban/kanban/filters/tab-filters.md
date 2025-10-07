# Using tabs to filter the records

You can use Filament tabs to scope the Kanban board query, mirroring Filament's resource tabs behavior. Define tabs with `modifyQueryUsing(...)`, and the active tab will automatically filter the Kanban data.

#### Standalone Kanban page example:
```php
use Asmit\AdvancedKanban\Pages\KanbanPage;
use Filament\Schemas\Components\Tabs\Tab;
use Illuminate\Database\Eloquent\Builder;

class TaskKanban extends KanbanPage
{
    public function getTabs(): array
    {
        return [
            'All' => Tab::make('All'),
            'High Priority' => Tab::make('High Priority')
                ->modifyQueryUsing(fn (Builder $query) => $query->where('priority', 'high')),
        ];
    }

    public function kanban(Kanban $kanban): Kanban
    {
        return $kanban
            ->model(Task::class)
            ->statusField('status')
            // ... other Kanban config
        ;
    }
}
```

#### Resource/Relation Manager example:

```php
use Asmit\AdvancedKanban\Concerns\HasKanbanRelatedRecords;
use Asmit\AdvancedKanban\Contracts\HasKanban;
use Filament\Schemas\Components\Tabs\Tab;
use Illuminate\Database\Eloquent\Builder;

class ManageProjectTask extends ManageRelatedRecords implements HasKanban
{
    use HasKanbanRelatedRecords;

    public function getTabs(): array
    {
        return [
            'all' => Tab::make(),
            'complete' => Tab::make()
                ->modifyQueryUsing(fn (Builder $query) => $query->where('status', 'complete')),
            'pending' => Tab::make()
                ->modifyQueryUsing(fn (Builder $query) => $query->where('status', 'pending')),
        ];
    }

    public function kanban(Kanban $kanban): Kanban
    {
        return $kanban
            ->model(Task::class)
            ->statusField('status')
            // ... other Kanban config
        ;
    }
}
```