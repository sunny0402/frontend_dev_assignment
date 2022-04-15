## Front End Dev Assignment

https://luxury-peony-a1314a.netlify.app/

## Backend Dev Assignment

For the users and vehicles I would create the following MySQL tables.

CREATE TABLE `mytestusers` (
`id` bigint unsigned NOT NULL AUTO_INCREMENT,
`name` varchar(255) NOT NULL,
`email` varchar(255) NOT NULL,
`created_at` timestamp DEFAULT CURRENT_TIMESTAMP,
`updated_at` timestamp DEFAULT CURRENT_TIMESTAMP,
PRIMARY KEY (`id`),
UNIQUE KEY `users_email_unique` (`email`)
);

CREATE TABLE `thecars` (
`id` bigint unsigned NOT NULL AUTO_INCREMENT,
`user_id` bigint unsigned,
`make` VARCHAR(128) NOT NULL,
`year` INTEGER NOT NULL,
`model` VARCHAR(128) NOT NULL,
PRIMARY KEY (`id`),
FOREIGN KEY (`user_id`) REFERENCES `mytestusers`(`id`)
);

Any form data needs to be processed before being inserted into the database.
There classes for database connection, data validation, and database operations should be made.

A simple example of adding data to the database in pure php.

```
<?php
require_once "connection.php";
session_start();

//protect the database from being modified without the user properly logging in
if (!isset($_SESSION['name']) || strlen($_SESSION['name']) < 1) {
    die('ACCESS DENIED');
}


//IF SUBMITTED FORM BUT SOME FIELDS ARE BLANK
if (isset($_POST['add']) && ((strlen($_POST['make']) < 1) || (strlen($_POST['model']) < 1)
    || (strlen($_POST['year']) < 1) || (strlen($_POST['mileage']) < 1))) {
    $_SESSION['error'] = "All fields are required";
    header("Location: add.php");
    return;
}

//IF ALL FORM FIELDS SUBMITTED VALIDATE INPUT
if (isset($_POST['make']) && isset($_POST['model']) && isset($_POST['year'])) {
    if (!(is_numeric($_POST['year']))) {
        $_SESSION["error"] = 'Year must be numeric';
        header("Location: add.php");
        return;
    }
    if ((strlen($_POST['make'])) < 1) {
        $_SESSION["error"] = "Make is required";
        header("Location: add.php");
        return;
    }
    //INSERT INTO DATABASE
    else {
        $stmt = $data_object->prepare('INSERT INTO the_cars (make, model, year)
   VALUES ( :mk, :md, :yr, :mi)');
        $stmt->execute(array(
            ':mk' => $_POST['make'],
            ':md' => $_POST['model'],
            ':yr' => $_POST['year']
        ));
        $_SESSION['success'] = "added";
        header('Location: index.php');
        return;
    }
}
?>

<!--       VIEW      -->
<!DOCTYPE html>
<html>

<head>
    <meta charset="utf-8">
    <meta name="viewport" content="width=device-width, initial-scale=1, shrink-to-fit=no">
    <link rel="stylesheet" href="my_css/style.css">
    <title>Test Add Data</title>
</head>

<body>
    <div class="container">
        <form method="post">
            <label for="make_id">Make:</label>
            <input type="text" name="make" id="make_id"><br />

            <label for="model_id">Model:</label>
            <input type="text" name="model" id="model_id"><br />

            <label for="year_id">Year:</label>
            <input type="text" name="year" id="year_id"><br />

            <input type="submit" name="add" value="Add Vehicle">
            <input type="submit" name="logout" value="Logout">
        </form>
    </div>
</body>

</html>
```

In my experiencing using a framework like Laravel adding a column to
a database table can acheived by updating the model and running a migration.

For example adding a license plate column to a users table.

I am unsure how to add form fields without editing the table.

```
<?php

use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Support\Facades\Schema;

class AddLicensePlateToUsersTable extends Migration
{
    /**
     * Run the migrations.
     *
     * @return void
     */
    public function up()
    {
        Schema::table('users', function (Blueprint $table) {
            $table->string('license_plate')->nullable();
        });
    }

    /**
     * Reverse the migrations.
     *
     * @return void
     */
    public function down()
    {
        Schema::table('users', function (Blueprint $table) {
            $table->dropColumn('license_plate');
        });
    }
}


```
