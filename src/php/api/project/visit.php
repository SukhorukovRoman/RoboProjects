<?php 

// необходимые HTTP-заголовки
// header("Access-Control-Allow-Origin: *");
// header("Content-Type: application/json; charset=UTF-8");
// header("Access-Control-Allow-Methods: POST");
// header("Access-Control-Max-Age: 3600");
// header("Access-Control-Allow-Headers: Content-Type, Access-Control-Allow-Headers, Authorization, X-Requested-With");

//Для локального использования
header('Content-Type: application/json');
header('Access-Control-Allow-Origin: *');
header('Access-Control-Allow-Methods: GET, POST, OPTIONS');
header('Access-Control-Allow-Headers: Content-Type');
header('Access-Control-Allow-Credentials: true');
header('Access-Control-Allow-Origin: *');
header('Access-Control-Allow-Headers: Origin, X-Requested-With, Content-Type, Accept');

//Конец локального использования
//https://php.ru/forum/threads/resh-fetch-post-has-been-blocked-by-cors-policy-response-to-preflight-request-doesnt-pass-access.88710/
if ($_SERVER['REQUEST_METHOD'] === 'OPTIONS') {
    header("Access-Control-Allow-Origin: *");
    header('Access-Control-Allow-Headers: Content-Type');
   exit();
}

// получаем соединение с базой данных
include_once "../config/database.php";
// создание объекта товара
include_once "./project.php";

$database = new Database();
$db = $database->getConnection();
$project = new Project($db);

// получаем отправленные данные
$data = json_decode(file_get_contents("php://input"));
// убеждаемся, что данные не пусты
if (
    !empty($data->id)
) {
    $project->id = $data->id;
    $presult = $project->visit($project->id);

    var_dump($presult);
}