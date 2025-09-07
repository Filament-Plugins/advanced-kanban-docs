# ⚡ Installation Guide

Follow these steps to install and activate **Advanced Kanban** in your Filament project.

> **Note:** We use [AnyStack.sh](https://anystack.sh) to handle payment and distribution for this premium package.

## Requirements

In order to distribute your PHP package you must make sure a valid `composer.json` is located in the root of your repository. If you attempt to import or publish a release without a valid `composer.json` you will receive a notification.

## 1. Add Private Repository

Your customers can use PHP's package manager to install your package once they add the private registry to their `composer.json`. Add the following repository configuration to your project's `composer.json` file:

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

## 2. Install the Package

Once the repository has been added to the `composer.json` file, you can install **Filament Advanced Kanban** like any other composer package using the composer require command:

```bash
composer require asmit/advanced-kanban
```

### Authentication

When you run the install command, you will be prompted to provide authentication credentials:

```
Loading composer repositories with package information
Authentication required (filament-advanced-kanban.composer.sh):
Username: [licensee-email]
Password: [license-key]
```

The username will be your **email address** and the password will be your **license key**.

#### With Fingerprint

If your license policy requires a fingerprint, you will need to append your fingerprint to your license key separated by a colon (`:`).

**Example:**
- Contact email: `your-email@example.com`
- License key: `8c21df8f-6273-4932-b4ba-8bcc723ef500`
- Activation fingerprint: `your-domain.com`

Enter the following when prompted:
```
Username: your-email@example.com
Password: 8c21df8f-6273-4932-b4ba-8bcc723ef500:your-domain.com
```

## 3. Register on Filament Panel

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

## 4. Publish Assets

Run the following command to publish the required assets:

```bash
php artisan filament:assets
```

## 5. Verify Installation

After completing the installation, you should be able to:

- Create kanban pages using `php artisan make:filament-page YourKanbanPage`
- Use the `KanbanPage` class in your Filament pages
- Access all kanban-related classes and components

**Next Steps:** Check out the [Quick Start Guide](/filament/advanced-kanban/quick-start) to create your first kanban board.