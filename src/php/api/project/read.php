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


// запрашиваем пользователя
$stmt = $project->read();
$num = $stmt->rowCount();

$project_arr = array();
$project_arr["project"] = array();
// проверка, найдено ли больше 0 записей
if ($num > 0) {
    // получаем содержимое нашей таблицы
    // fetch() быстрее, чем fetchAll()
    while ($row = $stmt->fetch(PDO::FETCH_ASSOC)) {
        // извлекаем строку (разбиваем ключи массива на переменные)
        extract($row);

        $project_item = array(
            "id" => $id,
            "name" => $name,
            "student" => $student,
            "iframe" => htmlspecialchars_decode($iframe),
            "type" => $type,
            "visits" => $visits
        );
        array_push($project_arr["project"], $project_item);
    }
}
// устанавливаем код ответа - 200 OK
http_response_code(200);
// выводим данные о пользователях в формате JSON
echo json_encode($project_arr);