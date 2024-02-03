<?php

$dbhost = "localhost";
$dbuser = "root";
$dbpass = "";
$dbname = "login";

$conn = mysqli_connect($dbhost, $dbuser, $dbpass, $dbname);

if (!$conn) {
        echo "Error: Unable to connect to MySQL.";
}
