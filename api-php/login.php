<?php

header('Access-Control-Allow-Origin: *');
header('Access-Control-Allow-Methods: GET, POST');
header("Access-Control-Allow-Headers: X-Requested-With");

if (isset($_POST['pseudo']) && isset($_POST['password'])) {
    $dbh = new PDO('mysql:dbname=quizzangular;host=127.0.0.1', 'root', 'root');

    $sth = $dbh->prepare("SELECT * FROM users WHERE pseudo = :pseudo AND password = :password");

    $sth->execute(array(
        'pseudo' => $_POST['pseudo'],
        'password' => $_POST['password']
    ));

    header('Content-type: application/json');

    $user = $sth->fetch(PDO::FETCH_ASSOC);

    if ($user) {
        echo json_encode($user);
    } else {
        echo json_encode(array('erreur' => "Il manque des paramètres :-( "));
    }
} else {
    echo json_encode(array(
        'erreur' => 'Il manque des paramètres pour pouvoir enregistrer cet utilisateur :-( '
    ));
}
