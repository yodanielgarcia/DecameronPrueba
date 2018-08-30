<?php

require_once('conexion.php');
	
$id= $_GET["identificacion"];
$pass= $_GET["password"];

$sql = "SELECT remember_token,tipo_u,activo_inactivo FROM Usuarios WHERE identificacion = '$id' and password='$pass'";

$query=pg_query($conn,$sql) or die("Error");


    while($row = pg_fetch_array($query)) {
        echo json_encode($row);
    }
?>