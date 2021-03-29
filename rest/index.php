<?php
header("Access-Control-Allow-Origin: *");
header("Access-Control-Allow-Headers: *");
header("Access-Control-Allow-Credentials : true ");
header("Content-Type: application/json");
require(__DIR__."/core.php");
require(__DIR__."/rest.php");

if(!isset($_GET['action'])){
    apiError("No method found");
}
if(!in_array($_GET['type'], $allowed_methods)){
    apiError("Method not allowed");
}
if(!isset($_GET['type'])){
    apiError("Invalid action");
}

$action = $_GET['action'];
$type = $_GET['type'];

try{
    call_user_func(camelCase($action) ."::". camelCase($type));
}
catch(Exception $e){
    apiError($e);
}
?>