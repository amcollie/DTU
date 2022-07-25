
<?php

function OpenCon()
 {
 $dbhost = "digiepal.com";
 $dbuser = "h5g8w9v3_GOVUSR";
 $dbpass = "nM]hK3i6Dntr";
 $db = "h5g8w9v3_GOVTEST";


 $conn = new mysqli($dbhost, $dbuser, $dbpass,$db) or die("Connect failed: %s\n". $conn -> error);

 // Check connection

 return $conn;
 }
 
function CloseCon($conn)
 {
 $conn -> close();
 }

 
   
?>