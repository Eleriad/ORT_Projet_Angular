<?php

header('Access-Control-Allow-Origin: *');
header('Access-Control-Allow-Methods: GET, POST');
header("Access-Control-Allow-Headers: X-Requested-With");

if (isset($_POST['theme']) && isset($_POST['question']) && isset($_POST['prop1']) && isset($_POST['prop2']) && isset($_POST['prop3']) && isset($_POST['prop4']) && isset($_POST['difficulte']) && isset($_POST['anecdote'])) {
    $dbh = new PDO('mysql:dbname=quizzangular;host=127.0.0.1', 'root', 'root');
    $sth = $dbh->prepare("INSERT INTO generals (id, theme, question, prop1, prop2, prop3, prop4, difficulte, anecdote) VALUES (null, :theme, :question, :prop1, :prop2, :prop3, :prop4, :difficulte, :anecdote)");

    $sth->execute(array(
        'theme' => $_POST['theme'],
        'question' => $_POST['question'],
        'prop1' => $_POST['prop1'],
        'prop2' => $_POST['prop2'],
        'prop3' => $_POST['prop3'],
        'prop4' => $_POST['prop4'],
        'difficulte' => $_POST['difficulte'],
        'anecdote' => $_POST['anecdote']
    ));

    header('Content-type: application/json');

    $sth = $dbh->prepare("SELECT * FROM generals");
    $sth->execute();
    echo json_encode($sth->fetchAll());
} else {
    echo json_encode(array(
        'erreur' => 'Il manque des paramètres.'
    ));
}
