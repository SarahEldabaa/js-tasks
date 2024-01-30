<?php

$dbhost = 'localhost';
$dbuser = 'root';
$dbpass = '';
$dbname = 'userdetails';
$conn = mysqli_connect($dbhost, $dbuser, $dbpass, $dbname);

if (!$conn) {
        echo "Error: Unable to connect to MySQL." . PHP_EOL;
}

// echo 'Connected successfully<br>';
