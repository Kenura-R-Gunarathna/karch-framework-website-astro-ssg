---
title: Migrations
description: Documentation for database migrations in KARCH.
---

All the migrations required to create tables are in the `database/migrations` folder, each with their respective table name.

```php
<?php

require_once __DIR__ . '/../../includes/error_handling.php';
require_once __DIR__ . '/../../includes/database.php';
require_once __DIR__ . '/../../includes/data_handling.php';

use App\DB;
use App\DataHandling;

$table_name = "users";

try {
    $users = DB::table($table_name)->migrate([
        "id INT(6) UNSIGNED AUTO_INCREMENT PRIMARY KEY",
        "username VARCHAR(256) NOT NULL",
        "password VARCHAR(256) NOT NULL",
    ]);

    if ($users) {
        return print("$table_name migration completed successfully!");
    }
} catch (\Throwable $th) {
    return print("migration error : " . $th->getMessage());
}
```

to run a migration such as below run the code

```bash
php databse\migrations\{migration-filename}.php
```
