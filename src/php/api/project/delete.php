<?php 

// получаем соединение с базой данных
include_once "../config/database.php";
// создание объекта товара
include_once "./project.php";

// вспомогательные функции
include_once "../../utils/utils.php";

$database = new Database();
$db = $database->getConnection();
$project = new Project($db);
// получаем отправленные данные
$data = json_decode(file_get_contents("php://input"));

$projectDir = $_SERVER['DOCUMENT_ROOT'] . "/projects/" . $data->id . "/";
// убеждаемся, что данные не пусты
if (
    !empty($data->id)
) {
    $project->id = $data->id;
    $project->delete($project->id);
    if (is_dir($projectDir)) {
        recursiveRemoveDir($projectDir);
        // сообщим пользователю
        echo json_encode(array(
            "message" => "Проект был удален.",
            "id" => $project->id
        ), JSON_UNESCAPED_UNICODE);
    } else {
        echo json_encode(array(
            "message" => "Неверный путь для удаления",
            "path" => $projectDir
        ), JSON_UNESCAPED_UNICODE);
    }
}