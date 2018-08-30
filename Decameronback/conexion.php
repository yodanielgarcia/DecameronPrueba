<?php

// class conexion {
header('Access-Control-Allow-Origin: *'); 
// Create connection
// Check connection
$conn_string = "host='localhost' dbname=DecameronDB port=5432 user=postgres password=123456";
$conn = pg_connect($conn_string) or die("Error conexion");
pg_last_error();

return $conn;

pg_close($conn);
?>

