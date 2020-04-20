<?php

header('Access-Control-Allow-Origin: *');
header('Access-Control-Allow-Methods: GET, POST');
header("Access-Control-Allow-Headers: X-Requested-With");


$dbh = new PDO('mysql:dbname=quizzangular;host=127.0.0.1', 'root', 'root');
$sth = $dbh->prepare("SELECT * FROM general");
$sth->execute();

header('Content-type: application/json');
echo json_encode($sth->fetchAll());
