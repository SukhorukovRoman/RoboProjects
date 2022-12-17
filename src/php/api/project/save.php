<?php 

$img = $_FILES['img'];
$archive = $_FILES['archive'];
$id = trim($_POST["id"]);
$uploadDir = $_SERVER['DOCUMENT_ROOT'] . "/projects/" . $id . "/";

// вспомогательные функции
include_once "../../utils/utils.php";

if ($img) {
    echo save_file($img, 'logo', $uploadDir, false);
}

if ($archive) {
    echo save_file($archive, null, $uploadDir, true);
}