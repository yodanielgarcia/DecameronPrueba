<?php

require_once('conexion.php');
	
$id= $_GET["id"];
$nombre= $_GET["nombre"];
$nit= $_GET["nit"];
$direccion= $_GET["direccion"];
$ciudad= $_GET["ciudad"];
$no_habitaciones= $_GET["no_habitaciones"];


$sql = "SELECT nit FROM Hoteles WHERE nit = '$nit'";

$query=pg_query($conn,$sql) or die("Error");

if(pg_num_rows($query) != '0'){

	echo "Ya Existe Hotel";

}else{
	
	pg_query($conn, "INSERT into Hoteles (id,nombre,nit,direccion,ciudad,no_habitaciones,f_creacion) values 
  ('$id','$nombre','$nit','$direccion','$ciudad','$no_habitaciones','2018-08-30 16:37:11')");
	

}
?>