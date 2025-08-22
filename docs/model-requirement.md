# 📋 Model Requirements

Your model should have a status field that can be updated:

```php
<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Model;

class Task extends Model
{
    protected $fillable = [
        'title',
        'description', 
        'status',
        // ... other fields
    ];

    // Optional: Define status constants
    const STATUS_TODO = 'todo';
    const STATUS_IN_PROGRESS = 'in-progress';
    const STATUS_REVIEW = 'review';
    const STATUS_DONE = 'done';
}
```