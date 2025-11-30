---
title: Error Handling
description: Documentation for error handling in KARCH.
---

Class for the error handling are included inside the `includes` folder as `error_handling.php`.

use

```php
use App\ErrorHandling;
```

to include the ErrorHandling class.

## View the 404 error

```php
ErrorHandling::_404();
```

for custom 404 error message

```php
ErrorHandling::_404({error-message});
```

## View the 405 error

```php
ErrorHandling::_405();
```

for custom 405 error message

```php
ErrorHandling::_405({error-message});
```

## View the 500 error

```php
ErrorHandling::_500();
```

for custom 500 error message

```php
ErrorHandling::_500({error-message});
```
