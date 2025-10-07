# Advanced Kanban - Complete Documentation

A comprehensive guide to the Advanced Kanban plugin for Filament 4.x

## Table of Contents

1. [Introduction](#introduction)
   - [What is Advanced Kanban?](#what-is-advanced-kanban)
   - [Key Features](#key-features)
   - [When to Use Advanced Kanban](#when-to-use-advanced-kanban)
   - [Requirements](#requirements)

2. [Installation](#installation)
   - [System Requirements](#system-requirements)
   - [Activating Your Exclusive License](#activating-your-exclusive-license)
   - [Add Private Repository](#1-add-private-repository)
   - [Install the Package](#2-install-the-package)
   - [Authentication](#3-authentication)
   - [Register on Filament Panel](#4-register-on-filament-panel)
   - [Publish Assets](#5-publish-assets)
   - [Verify Installation](#6-verify-installation)

3. [Quick Start](#quick-start)
   - [Create a Kanban Page](#1-create-a-kanban-page)
   - [Basic Configuration](#2-basic-configuration)

4. [Core Concepts](#core-concepts)
   - [Kanban Board Structure](#kanban-board-structure)
   - [Basic Configuration](#basic-configuration)
   - [Common Configuration Options](#common-configuration-options)

5. [Configuration](#configuration)
   - [Model Configuration](#model-configuration)
   - [Column Configuration](#column-configuration)

6. [Columns](#columns)
   - [Basic Example](#basic-example)
   - [Column Customization](#column-customization)
   - [Workflow and Allowed Transitions](#workflow-and-allowed-transitions)
   - [Lock Cards](#lock-cards)

7. [Search & Filtering](#search--filtering)
   - [Search](#search)
   - [Filters](#filters)

8. [Actions](#actions)
   - [Record Actions](#record-actions)
   - [Column Header Actions](#column-header-actions)

9. [Advanced Features](#advanced-features)
   - [Custom Components](#custom-components)
   - [Customize Record Move Behavior](#customize-record-move-behavior)
   - [Query Modifications](#query-modifications)
   - [Render Hooks](#render-hooks)

10. [API Reference](#api-reference)
    - [Kanban Class Methods](#kanban-class-methods)
    - [KanbanColumn Methods](#kanbancolumn-methods)

11. [Relational Records](#relational-records)
    - [MRR (Manage Related Records) Kanban Setup](#mrr-manage-related-records-kanban-setup)

12. [Help & Support](#help--support)
    - [Common Issues](#common-issues)
    - [Troubleshooting Guide](#troubleshooting-guide)
    - [Best Practices](#best-practices)
    - [Getting Support](#getting-support)
    - [Version Compatibility](#version-compatibility)
    - [License](#license)

---

## Introduction

### What is Advanced Kanban?

Advanced Kanban is a premium [Filament PHP](https://filamentphp.com) plugin that provides a production-ready, highly customizable Kanban board. It enables teams to visualize workflows, move tasks between statuses with drag & drop, and enhance productivity with rich actions, search, and filtering.

### Key Features

#### Core Functionality
- **Drag & Drop Interface**: Intuitive drag-and-drop functionality for moving records between columns
- **Workflow Transitions**: Define allowed status transitions to control record movement
- **Real-time Search**: Search across multiple fields
- **Advanced Filtering**: Custom filter forms with multiple field types
- **Pagination**: Load more records per column with infinite scroll

#### Advanced Capabilities
- **Custom Actions**: Header, record, and column header actions
- **Customizable Cards**: Custom card components with rich content display
- **Column Customization**: Colors, icons, labels, and descriptions for columns
- **Record Locking**: Prevent specific records from being moved
- **Performance Optimized**: Efficient queries with caching and lazy loading
- **Priority Support**: Dedicated support for enterprise customers

### When to Use Advanced Kanban

Advanced Kanban is perfect for:

- **Task Management**: Project task tracking, bug tracking, feature development workflows
- **Approval Workflows**: Content approval, document review, purchase request approvals
- **Content Pipelines**: Blog post publishing, video production, design review processes
- **Issue Tracking**: Customer support tickets, bug reporting, feature request tracking
- **Any Status-Driven Process**: Sales pipelines, recruitment, inventory management

### Requirements

#### System Requirements
- **PHP**: 8.2 or higher
- **Laravel**: 11.x or higher
- **Filament**: 4.x

---

## Installation

Welcome to Advanced Kanban - Thank you for choosing our premium solution!

#### Activating Your Exclusive License

Advanced Kanban use AnyStack to provide you with payment processing, professional license management, and reliable software distribution.

During the purchasing process, AnyStack will provide you with a license key. You will also be asked by AnyStack to activate your license by providing a domain. This is usually the domain of where your final project will live. You'll use this same domain to install locally and in production. Once you have provided a domain, your license key will be activated and you can proceed with installing with composer below.

#### 1. Add Private Repository

First, add the Advanced Kanban private repository to your `composer.json` file:

```json
{
  "repositories": [
    {
      "type": "composer",
      "url": "https://filament-advanced-kanban.composer.sh"
    }
  ]
}
```

#### 2. Install the Package

Run the following command in your project root:

```bash
composer require asmit/advanced-kanban
```

#### 3. Authentication

During installation, you will be prompted to provide authentication credentials:

```
Loading composer repositories with package information
Authentication required (filament-advanced-kanban.composer.sh):
Username: [your-email-address]
Password: [your-license-key]
```

**Authentication Details:**
- **Username**: Enter the email address associated with your license
- **Password**: Enter your license key provided by AnyStack

**Example:**
If your license details are:
- Contact email: `john@example.com`
- License key: `8c21df8f-6273-4932-b4ba-8bcc723ef500`
- Activation fingerprint: `example.com`

You would enter:
```
Username: john@example.com
Password: 8c21df8f-6273-4932-b4ba-8bcc723ef500:example.com
```

**Important Notes:**
- If your license policy requires a fingerprint, append it to your license key separated by a colon (:)
- If no fingerprint is required, simply use your license key without the colon and fingerprint

#### 4. Register on Filament Panel

Register the kanban builder on your Filament panel by adding it to the plugins array:

```php
<?php

use Asmit\AdvancedKanban\KanbanBuilder;
use Filament\Panel;

public function panel(Panel $panel): Panel
{
    return $panel
        ->plugins([
            KanbanBuilder::make()
            // Other plugins if any
        ]);
}
```

#### 5. Publish Assets

Run the following command to publish the required assets:

```bash
php artisan filament:assets
```

#### 6. Verify Installation

After completing the installation, you should be able to:

- Create kanban pages using `php artisan make:filament-page YourKanbanPage`
- Use the `KanbanPage` class in your Filament pages
- Access all kanban-related classes and components

---

## Quick Start

### 1. Create a Kanban Page

To add a kanban board, create a new Filament page:

```bash
php artisan make:filament-page TasksKanban
```

### 2. Basic Configuration

The package provides a quick and easy way to set up a kanban board in your Filament admin panel. It assumes that you have `title` and `description` fields in your kanban card. Initially, it provides basic card design and functionality which includes `title` and `description` fields.

You can change these fields using the `->titleField()` and `->descriptionField()` methods.

**Important:** You must extend `KanbanPage` and provide the model and status field.

**Note:** Don't set a `$view` property - `KanbanPage` has its own view built-in.

```php
<?php

namespace App\Filament\Pages;

use App\Models\Task;
use Asmit\AdvancedKanban\Columns\KanbanColumn;
use Asmit\AdvancedKanban\Pages\KanbanPage;
use Asmit\AdvancedKanban\Kanban;

class TasksKanban extends KanbanPage  // ← Must extend KanbanPage
{
    // Other properties like $navigationIcon, $navigationGroup, etc.

    public function kanban(Kanban $kanban): Kanban
    {
        return $kanban
            ->model(Task::class)           // ← Pass your model
            ->statusField('status')        // ← Pass the status field
            ->columns([
                KanbanColumn::make('todo')     // ← Pass required column
                    ->label('To Do'),
                KanbanColumn::make('in_progress')
                    ->label('In Progress'),
                KanbanColumn::make('completed')
                    ->label('Completed'),
            ])
            ->searchableFields(['title', 'description'])
            ->recordsPerColumn(10);
    }
}
```

### 3. That's It!

Your kanban board is ready! The page will automatically appear in your Filament navigation and display your tasks organized by status columns.

**Key Requirements:**
- ✅ Extend `KanbanPage`
- ✅ Pass `->model(YourModel::class)`
- ✅ Pass `->statusField('your_status_field')`
- ✅ Don't set `$view` - KanbanPage has its own view

---

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

---

## Configuration

### Model Configuration

#### Setting the Model
```php
->model(Task::class)
->model(\App\Models\Task::class)
```

#### Status Field
```php
->statusField('status')
->statusField('state')
->statusField('phase')
```

#### Title and Description Fields
```php
->titleField('title') // default title field
->titleField('name')
->titleField('subject')

->descriptionField('description') // default description field
->descriptionField('content')
->descriptionField('notes')
```

### Column Configuration

#### Basic Column Setup
```php
use Asmit\AdvancedKanban\Columns\KanbanColumn;

->columns([
    KanbanColumn::make('todo')
        ->label('To Do')
        ->color('gray'),
    KanbanColumn::make('in_progress')
        ->label('In Progress')
        ->color('blue'),
    KanbanColumn::make('completed')
        ->label('Completed')
        ->color('green'),
])
```

#### Advanced Column Configuration
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

---

## Columns

### Basic Example

```php
<?php
use Asmit\AdvancedKanban\Columns\KanbanColumn;

public function kanban(Kanban $kanban): Kanban
{
    return $kanban
        ->model(Task::class)
        ->statusField('status')
        ->columns([
            KanbanColumn::make('todo')
                ->label('To Do')
                ->color('gray'),
            KanbanColumn::make('in_progress')
                ->label('In Progress')
                ->color('blue'),
            KanbanColumn::make('completed')
                ->label('Completed')
                ->color('green'),
        ]);
}
```

### Column Customization

#### Color Customization
```php
KanbanColumn::make('todo')
    ->label('To Do')
    ->color('green'); // Supports hex, rgb, hsl, and Tailwind colors
```

#### Icon Support
```php
KanbanColumn::make('todo')
    ->label('To Do')
    ->icon('heroicon-o-clipboard-list'); // Use any Heroicon name
```

#### Extra Column Header Classes
```php
KanbanColumn::make('todo')
    ->label('To Do')
    ->extraColumnHeadingClass('text-lg font-bold'); // Add custom classes
```

#### Column Description
```php
KanbanColumn::make('todo')
    ->label('To Do')
    ->description('Tasks that need to be started')
    ->color('gray');
```

### Workflow and Allowed Transitions

Define allowed transitions between columns to control record movement:

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

### Lock Cards

Lock cards in specific columns to prevent them from being moved:

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
                ->lockCardUsing(fn($record) => $record->id === 1), // Lock specific record

            KanbanColumn::make('completed')
                ->label('Completed')
                ->lockCardUsing(fn($record) => true), // Lock all cards in this column
        ]);
}
```

#### Custom Lock Appearance
```php
KanbanColumn::make('completed')
    ->label('Completed')
    ->lockCardUsing(fn($record) => true)
    ->lockIcon('heroicon-o-lock-closed') // Use any Heroicon name
    ->lockLabel('Completed - Cannot be moved'); // Custom label for the lock icon
```

---

## Search & Filtering

### Search

#### Basic Search Setup
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

#### Customizing Search Behavior
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

#### Loading Indicator
```php
->enableLoadingIndicator()
```

### Filters

Advanced Kanban does not provide built-in filters like other Filament resources. However, you can implement custom filtering logic in your kanban page.

#### Basic Filter Example
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

#### Advanced Filter Example
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

#### Tabs to Filter Kanban Records

You can use Filament tabs to scope the Kanban board query, mirroring Filament's resource tabs behavior. Define tabs with `modifyQueryUsing(...)`, and the active tab will automatically filter the Kanban data.

Resource/Relation Manager example:

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

Standalone Kanban page example:

```php
use Asmit\AdvancedKanban\Pages\KanbanPage;
use Filament\Resources\Concerns\HasTabs;
use Filament\Schemas\Components\Tabs\Tab;
use Illuminate\Database\Eloquent\Builder;

class TaskKanban extends KanbanPage
{
    use HasTabs;

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

Notes:
- The active tab is initialized on first load and switching tabs reloads Kanban records.
- No extra wiring is needed—Advanced Kanban automatically applies the active tab's query to the Kanban data source.
---

## Actions

### Record Actions

Add actions to each record using the `->recordActions()` method:

```php
<?php
use Asmit\AdvancedKanban\Kanban;
use Asmit\AdvancedKanban\RecordAction\Action;
use Asmit\AdvancedKanban\RecordAction\DeleteAction;

public function kanban(Kanban $kanban): Kanban
{
    return $kanban
        ->model(Task::class)
        ->statusField('status')
        ->recordActions([
            Action::make('edit')
                ->label('Edit')
                ->icon('heroicon-o-pencil')
                ->action(fn($record) => $this->editTask($record)),
            Action::make('view')
                ->label('View')
                ->icon('heroicon-o-eye')
                ->action(fn($record) => $this->viewTask($record))
                ->openUrlInNewTab(),
        ])
        ->columns([
            // Your columns here
        ]);
}
```

#### Using Action Groups
```php
use Asmit\AdvancedKanban\RecordAction\Action;
use Asmit\AdvancedKanban\RecordAction\DeleteAction;
use Asmit\AdvancedKanban\Actions\ActionGroup;

public function kanban(Kanban $kanban): Kanban
{
    return $kanban
        ->model(Task::class)
        ->statusField('status')
        ->recordActions([
            Action::make('edit')
                ->label('Edit')
                ->icon('heroicon-o-pencil')
                ->action(fn($record) => $this->editTask($record)),
            ActionGroup::make([
                Action::make('view')
                    ->label('View Details')
                    ->icon('heroicon-o-eye')
                    ->action(fn($record) => $this->viewTask($record)),
                Action::make('duplicate')
                    ->label('Duplicate')
                    ->icon('heroicon-o-document-duplicate')
                    ->action(fn($record) => $this->duplicateTask($record)),
                DeleteAction::make('delete')
                    ->label('Delete')
                    ->icon('heroicon-o-trash')
                    ->color('danger')
                    ->action(fn($record) => $this->deleteTask($record)),
            ])
            ->label('More Actions')
            ->icon('heroicon-o-ellipsis-vertical')
            ->dropdownPlacement('bottom-end'),
        ])
        ->columns([
            // Your columns here
        ]);
}
```

### Column Header Actions

Add actions to column headers using the `->columnHeaderActions()` method:

```php
<?php
use Filament\Actions\Action;

public function kanban(Kanban $kanban): Kanban
{
    return $kanban
        ->model(Task::class)
        ->statusField('status')
        ->columns([
            // Your columns here
        ])
        ->columnHeaderActions([
            Action::make('add_task')
                ->label('Add Task')
                ->icon('heroicon-o-plus')
                ->color('primary')
                ->action(function($arguments) {
                    // $arguments contains the current column status
                    $this->addTaskToColumn($arguments['status']);
                }),
        ]);
}
```

#### Using Action Groups for Column Headers
```php
use Filament\Actions\Action;
use Asmit\AdvancedKanban\Actions\ActionGroup;

public function kanban(Kanban $kanban): Kanban
{
    return $kanban
        ->model(Task::class)
        ->statusField('status')
        ->columns([
            // Your columns here
        ])
        ->columnHeaderActions([
            ActionGroup::make([
                Action::make('add_task')
                    ->label('Add Task')
                    ->icon('heroicon-o-plus')
                    ->action(fn($arguments) => $this->addTask($arguments['status'])),
                Action::make('bulk_edit')
                    ->label('Bulk Edit')
                    ->icon('heroicon-o-pencil')
                    ->action(fn($arguments) => $this->bulkEdit($arguments['status'])),
                Action::make('export_column')
                    ->label('Export Column')
                    ->icon('heroicon-o-arrow-down-tray')
                    ->action(fn($arguments) => $this->exportColumn($arguments['status'])),
            ])
            ->label('More Actions')
            ->icon('heroicon-o-ellipsis-vertical')
            ->color('gray'),
        ]);
}
```

---

## Advanced Features

### Custom Components

The Kanban board is made up of two main components: **Column Headers** and **Cards (Records)**. You can customize these components by generating your own components.

#### Generating Custom Components
```bash
php artisan make:kanban-components --resource=YourResource
```

This command will create two Blade files in the `resources/views/components/kanban/your-resource/` directory:

- `column-header.blade.php` - Custom column header component
- `card.blade.php` - Custom card component

#### Using Custom Components
```php
<?php

namespace App\Filament\Pages;

use Asmit\AdvancedKanban\Pages\KanbanPage;

class TasksKanban extends KanbanPage
{
    protected static string $columnHeaderComponent = 'kanban.tasks.column-header';
    protected static string $cardComponent = 'kanban.tasks.card';

    public function kanban(Kanban $kanban): Kanban
    {
        return $kanban
            ->model(Task::class)
            ->statusField('status')
            ->columns([
                // Your columns here
            ]);
    }
}
```

### Customize Record Move Behavior

Override the `handleRecordMove` method in your Kanban page class:

```php
<?php

namespace App\Filament\Pages;

use App\Models\Task;
use Illuminate\Database\Eloquent\Model;

class TasksKanban extends KanbanPage
{
    public function handleRecordMove(string $newStatus, Model $record): void
    {
        // Update the record's status
        $record->update(['status' => $newStatus]);
        
        // Log the move
        activity()
            ->performedOn($record)
            ->log("Task moved to {$newStatus}");
    }
}
```

#### Using Hooks

##### Before Record Move
```php
public function beforeRecordMove(string $newStatus, Model $record): void
{
    // Perform actions before the record is moved
    if ($newStatus === 'completed') {
        // Validate that the task can be completed
        if (!$record->all_subtasks_completed) {
            throw new \Exception('Cannot complete task: all subtasks must be finished');
        }
    }
    
    // Log the move attempt
    \Log::info("Attempting to move task {$record->id} to {$newStatus}");
}
```

##### After Record Move
```php
public function afterRecordMove(mixed $oldStatus, string $newStatus, Model $record): void
{
    // Perform actions after the record is moved
    if ($newStatus === 'completed') {
        // Send notification
        $record->assignee->notify(new TaskCompletedNotification($record));
        
        // Update completion timestamp
        $record->update(['completed_at' => now()]);
    }
    
    // Log the successful move
    \Log::info("Task {$record->id} moved from {$oldStatus} to {$newStatus}");
}
```

### Query Modifications

#### Base Query Modifications
```php
use Asmit\AdvancedKanban\Kanban;

Kanban::make()
    ->modifyQueryUsing(function ($query) {
        return $query->where('is_active', true);
    });
```

#### Record Query Modifications
```php
use Asmit\AdvancedKanban\Columns\KanbanColumn;

KanbanColumn::make()
    ->modifyRecordQueryUsing(function ($query) {
        return $query->where('status', 'to_do')->orderBy('created_at', 'asc');
    });
```

### Render Hooks

Advanced Kanban provides render hooks that allow you to add custom views before the search and at the board footer.

#### Available Hooks
- `KanbanRenderHook::KANBAN_SEARCH_BEFORE` - Add content before the search bar
- `KanbanRenderHook::KANBAN_PAGE_FOOTER` - Add content at the bottom of the page

---

## API Reference

### Kanban Class Methods

| Method | Description | Parameters |
|--------|-------------|------------|
| `model()` | Set the Eloquent model for the kanban board | `string\|Model $model` |
| `statusField()` | Set the status field name that determines column placement | `string $field` |
| `titleField()` | Set the title field name to display on cards | `string $field` |
| `descriptionField()` | Set the description field name to display on cards | `string $field` |
| `columns()` | Set the kanban columns configuration | `array\|Closure $columns` |
| `searchableFields()` | Set fields that can be searched | `bool\|Closure $fields` |
| `enableLoadingIndicator()` | Enable or disable loading indicator | `Closure\|bool $condition = true` |
| `filterFormSchema()` | Set the filter form schema | `array\|Closure $schema` |
| `recordActions()` | Set actions available on individual records | `array\|Closure $actions` |
| `columnHeaderActions()` | Set actions available in column headers | `array\|Closure $actions` |
| `recordsPerColumn()` | Set maximum number of records per column | `int $count` |
| `modifyQueryUsing()` | Modify the base query for fetching records | `Closure $callback` |
| `modifyRecordQueryUsing()` | Modify query for specific column records | `Closure $callback` |
| `applyFiltersUsing()` | Set custom filter application logic | `Closure $callback` |
| `applySearchUsing()` | Set custom search application logic | `Closure $callback` |
| `emptyStateMessage()` | Set custom empty state message | `string $title`, `string $description` |

### KanbanColumn Methods

| Method | Description | Parameters |
|--------|-------------|------------|
| `make()` | Create a new KanbanColumn instance | `string $status` |
| `label()` | Set the display label for the column | `string\|Closure $label` |
| `description()` | Set the column description | `string $description` |
| `icon()` | Set the column icon | `string\|Closure\|ScalableIcon $icon` |
| `iconColor()` | Set the icon color | `string\|Closure $color` |
| `hidden()` | Hide or show the column | `bool\|Closure $hidden = true` |
| `allowedTransitions()` | Set allowed status transitions | `array\|Closure $transitions` |
| `lockCardUsing()` | Set card locking condition | `string\|Closure $icon` |
| `lockedIcon()` | Set locked icon | `bool\|Closure\|ScalableIcon $icon = true` |
| `lockedLabel()` | Set locked label | `string\|Closure $label = true` |
| `modifyRecordQueryUsing()` | Modify query for column records | `Closure $callback` |

---

## Relational Records

### MRR (Manage Related Records) Kanban Setup

To manage related records in a kanban board, use the MRR (Manage Related Records) feature.

#### 1. Create an MRR Page
```bash
php artisan make:filament-page UserTasks --resource=UserResource --relationship=tasks
```

#### 2. Implement HasKanban Interface
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

#### 3. That's It!

Your MRR kanban board is ready! It will show only the related records for the current parent record.

**Key Requirements for MRR:**
- ✅ Implement `HasKanban` interface
- ✅ Use `HasKanbanRelatedRecords` trait
- ✅ Set `$resource` to your parent resource
- ✅ Set `$relationship` to your relationship name
- ✅ Pass `->model(YourModel::class)`
- ✅ Pass `->statusField('your_status_field')`

**⚠️ Important:** This feature is **not available** for regular Relation Managers, only for MRR pages.

---

## Help & Support

### Common Issues

#### Installation Problems

**Issue**: Package not found during installation
```bash
composer require asmit/advanced-kanban
```

**Solution**: 
- Ensure you have a valid license
- Check your Composer configuration
- Verify you're using the correct package name

**Issue**: Assets not loading properly
```bash
php artisan filament:assets
```

**Solution**:
- Clear your application cache: `php artisan cache:clear`
- Clear your view cache: `php artisan view:clear`
- Ensure you've published the assets correctly

#### Configuration Issues

**Issue**: Kanban page not appearing in navigation

**Solution**:
- Ensure your page extends `KanbanPage`
- Check that you've set the correct navigation properties
- Verify the page is properly registered in your panel

**Issue**: Records not displaying in columns

**Solution**:
- Check that your model has the correct status field
- Verify the status values match your column keys
- Ensure your model is properly configured

#### Performance Issues

**Issue**: Slow loading with many records

**Solution**:
- Use pagination with `->recordsPerColumn()`
- Implement proper database indexing
- Consider using eager loading for relationships
- Optimize your search and filter queries

### Troubleshooting Guide

#### Common Error Messages

**"Column not found"**
- Check that your column keys match the status values in your database
- Ensure all required columns are defined

**"Model not found"**
- Verify the model class exists and is properly imported
- Check that the model has the required status field

### Best Practices

#### Performance Optimization
1. **Use Pagination**: Limit records per column for better performance
2. **Optimize Queries**: Use eager loading for relationships
3. **Index Your Database**: Add indexes on status and search fields
4. **Cache Results**: Implement caching for frequently accessed data

#### Security Considerations
1. **Validate Inputs**: Always validate user inputs in custom actions
2. **Check Permissions**: Implement proper authorization checks
3. **Sanitize Data**: Clean user data before processing
4. **Use HTTPS**: Ensure secure connections in production

#### Code Organization
1. **Separate Concerns**: Keep business logic separate from presentation
2. **Use Traits**: Leverage Laravel traits for reusable functionality
3. **Follow PSR Standards**: Maintain consistent coding standards
4. **Document Code**: Add comments for complex logic

### Getting Support

#### Documentation
- [Official Documentation](https://laravelplugins.com)
- [Installation Guide](#installation)
- [Quick Start Guide](#quick-start)
- [API Reference](#api-reference)

#### Community Support
- **GitHub Issues**: Report bugs and request features
- **Discord Community**: Join our community for discussions
- **Stack Overflow**: Search for existing solutions

### License

Advanced Kanban is a premium plugin that requires a valid license for production use.

---

## Conclusion

Advanced Kanban is designed to be flexible and powerful while remaining easy to use. Whether you're building a simple task board or a complex workflow system, these features provide the tools you need to create effective kanban boards.

For more information, examples, and community support, contact at mail2asmitnepali@gmail.com.

---

*This documentation covers all the features and capabilities of Advanced Kanban. For the most up-to-date information, please refer to the [official documentation](https://laravelplugins.com) and release notes.*
