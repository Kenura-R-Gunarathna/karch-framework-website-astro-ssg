---
title: Special Functions
description: Documentation for special functions in KARCH.
---

Using special functions you can control views, redirects and assets in below mentioned methods.

## Views

To view a html or php file. All the view file locations are given relative to the `Views` folder.

eg:- `/index.html` or `index.html` ( for a file as `index.html` inside the views folder )

```php
view("{view-location}");
```

## Redirects

To redirect a web page insert

```php
redirect("{full-url}");
```

here you should insert the full url of the web page.

## Assets

To load the assets like images, documents and videos for public view insert

```php
asset("{relative-url-from-public-folder}");
```

here you should insert the relative url of the files inside the `public` folder skiping `../public/` part of the relative url.

## Route

Return the `url` of a specific `route` in the website.

```php
route("{route-name-or-uri}");
```

## Request

Return the `$_REQUEST` values of the website.

```php
request("{request-name}");
```

## Config

Return the `$_ENV` values of the website inside the `.env` file.

```php
config("{config-name}");
```

## Get

Return the `$_GET` request values of the website.

```php
get("{get-request-name}");
```

## Post

Return the `$_POST` request values of the website.

```php
post("{post-request-name}");
```

## Cookie

Return the `$_COOKIE` values of the website.

```php
cookie("{cookie-name}");
```

## Files

Return the `$_FILES` values of the website.

```php
files("{file-name}");
```

## Session

Return the `$_SESSION` values of the website stored in the web server.

```php
session("{session-name}");
```
