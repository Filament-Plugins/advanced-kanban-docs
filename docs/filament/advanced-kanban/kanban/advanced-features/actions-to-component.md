# Adding an action to a component
If you have a custom action that you would like to render inside a card component, call:
```php
{{ $this->evaluateAction($this->yourAction(), ['recordId' => $record->getKey()]) }}
```

#### On the Kanban class
**Example:**
```php
use Filament\Actions\Action;
use Filament\Forms\Components\TextInput;

public function addDocsAction(): Action
{
    return Action::make('docs')
        ->schema(function (array $arguments): array {
            return [
                TextInput::make('title')->default($arguments['recordId']),
            ];
        });
}
```

#### In the Blade view
**Example:**
```php
{{ $this->evaluateAction($this->addDocsAction(), ['recordId' => $record->getKey()]) }}
```