---
title: Routes
description: Documentation for routing in KARCH.
---

Class for the routes are included inside the `routes` folder as `web.php`.

use

```php
use App\Route;
```

to include the route class.

```php
Route::post('/login', Controller::class, 'login');

Route::post('/function', function () {
    echo "The anonymous callback function has been executed.";
});
```
