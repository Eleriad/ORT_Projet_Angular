<?php

header('Access-Control-Allow-Origin: *');
header('Access-Control-Allow-Methods: GET, POST');
header("Access-Control-Allow-Headers: X-Requested-With");

if (isset($_POST['message'])) {
    $dbh = new PDO('mysql:dbname=tw;host=127.0.0.1', 'root', 'root');
    $sth = $dbh->prepare("INSERT INTO tw (id, message) VALUES (null, :message)");

    $sth->execute(array(
        'message' => $_POST['message']
    ));

    header('Content-type: application/json');

    $sth = $dbh->prepare("SELECT * FROM tw");
    $sth->execute();
    echo json_encode($sth->fetchAll());
} else {
    echo json_encode(array(
        'erreur' => 'Il manque des paramètres.'
    ));
}