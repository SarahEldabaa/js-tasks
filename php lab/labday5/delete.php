<?php 
include 'config.php';

$id = $_GET['id'];
$sql = "DELETE FROM `users` WHERE id = $id";
$result = mysqli_query($conn, $sql);
header('location:tabletask.php');
?>