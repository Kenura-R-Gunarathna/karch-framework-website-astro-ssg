---
title: Database Queries
description: Documentation for database queries in KARCH.
---

Class for the db queries are included inside the `includes` folder as `database.php`.

use

```php
use App\DB;
```

to include the database class.

## Records selection

```php
$data = DB::table("users")->query("where id='1'")->setFetchMode(PDO::FETCH_OBJ)->get();

foreach ($data as $col) {
    echo "Name : " . $col->name . "<br>";
    echo "Age : " . $col->age . "<br>";
    echo "Email : " . $col->email . "<br>";
}
```

## Mass records insert

```php
$data = DB::table("users")->insert([
    ['name' => 'lisara', 'age' => 24, 'email' => 'lisara@gmail.com', 'updated_at' => date('Y-m-d H:i:s'), 'created_at' => date('Y-m-d H:i:s')],
    ['name' => 'sanuli', 'age' => 14, 'email' => 'sanuli@gmail.com', 'updated_at' => date('Y-m-d H:i:s'), 'created_at' => date('Y-m-d H:i:s')],
]);

return print($data); // whether insertion is successfull or not
```

## Single record insert

```php
$data = DB::table("users")->setTableId("id")->setFetchMode(PDO::FETCH_OBJ)->create(
    [
        'name' => 'lisara',
        'age' => 24,
        'email' => 'lisara@gmail.com'
    ]
);

foreach ($data as $col) {
    echo "Name : " . $col->name . "<br>";
    echo "Age : " . $col->age . "<br>";
    echo "Email : " . $col->email . "<br>";
}
```

## Update records

```php
$data = DB::table("users")->query("where id='1'")->update(
    [
        'name' => 'Kenura',
        'age' => 19,
        'email' => 'kenura@gmail.com'
    ]
);

return print($data); // count of updated records
```

## Delete records

```php
$data = DB::table("users")->query("where id='16'")->delete();

return print($data); // whether delete is successfull or not
```
