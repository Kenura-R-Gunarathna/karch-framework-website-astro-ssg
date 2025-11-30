---
title: Requests
description: Documentation for handling requests in KARCH.
---

Class for the requests are included inside the `includes` folder as `data_handling.php`.

use

```php
use App\DataHandling;
```

to include the requests class.

```php
$data = new DataHandling();
```

## Env data

Use the below method to load the `.env` file data.

```php
$data = new DataHandling();

echo $data->env->APP_NAME;
```

## All requests

Using this method all the data inside the `$_REQUEST` php array can be fetched.

```php
echo $data->request->username;
echo $data->request->password;
```

## Get request

Using this method all the data inside the `$_GET` php array can be fetched.

```php
echo $data->get->username;
echo $data->get->password;
```

## Post request

Using this method all the data inside the `$_POST` php array can be fetched.

```php
echo $data->post->username;
echo $data->post->password;
```

## File request

Using this method all the data inside the `$_POST` php array can be fetched.

```php
echo $data->post->username;
echo $data->post->password;
```

## Session request

Using this method all the data inside the `$_SESSION` php array can be fetched.

```php
echo $data->session->username;
echo $data->session->password;
```

## Cookie request

Using this method all the data inside the `$_COOKIE` php array can be fetched.

```php
echo $data->cookie->username;
echo $data->cookie->password;
```
