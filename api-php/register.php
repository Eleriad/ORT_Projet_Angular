<?php

header('Access-Control-Allow-Origin: *');
header('Access-Control-Allow-Methods: GET, POST');
header("Access-Control-Allow-Headers: X-Requested-With");

if (isset($_POST['pseudo']) && isset($_POST['password'])) {
    $dbh = new PDO('mysql:dbname=quizzangular;host=127.0.0.1', 'root', 'root');

    $sth = $dbh->prepare("INSERT INTO users (id, pseudo, password) VALUES (null, :pseudo, :password)");

    $sth->execute(array(
        'pseudo' => $_POST['pseudo'],
        'password' => $_POST['password']
    ));

    header('Content-type: application/json');

    echo json_encode(array(
        'message' => "L'utilisateur a bien été créé ;-) "
    ));
} else {
    echo json_encode(array(
        'erreur' => 'Il manque des paramètres pour pouvoir enregistrer cet utilisateur :-( '
    ));
}
