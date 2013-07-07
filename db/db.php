<?php
	define("DB_HOST","localhost");
	define("DB_USERNAME","fikhrien_tm");
	define("DB_PASSWORD","v4bs11ryzal");
	
	mysql_connect("$host", "$username", "$password")or die("cannot connect"); 
	mysql_select_db("$db_name")or die("cannot select DB");
?>