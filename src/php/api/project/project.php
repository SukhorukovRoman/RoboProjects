<?php

class Project {
    // подключение к базе данных и таблице "user"
    private $conn;
    private $table_name = "projects";

    // свойства объекта
    public $id;
    public $name = '';
    public $student = '';
    public $iframe = '';
    public $type = '';
    public $visits = '';


    // конструктор для соединения с базой данных
    public function __construct($db)
    {
        $this->conn = $db;
    }

    function create()
    {
        // запрос для вставки (создания) записей
        $query = "INSERT INTO
                " . $this->table_name . "
            (student, name, type, iframe)
            VALUES (:student, :name, :type, :iframe)";
            
        // подготовка запроса
        $stmt = $this->conn->prepare($query);

        // выполнение подготовленного выражения
        $queryResult = $stmt->execute(array(
        'student' => htmlspecialchars(strip_tags($this->student)),
        'name' => htmlspecialchars(strip_tags($this->name)),
        'type' => htmlspecialchars(strip_tags($this->type)),
        'iframe' => htmlspecialchars($this->iframe, ENT_QUOTES)
        ));

        // выполняем запрос
        if ($queryResult) {
            return $this->conn->lastInsertId();
        }
        return false;
    }


    function read()
    {
        // выбираем все записи
        $query = "SELECT
            *
        FROM
            " . $this->table_name . "
        ORDER BY
            id ASC";

        // подготовка запроса
        $stmt = $this->conn->prepare($query);

        // выполняем запрос
        $stmt->execute();
        return $stmt;
    }

    function visit($id)
    {
        // выбираем все записи
        $query = "UPDATE 
            " . $this->table_name . "
        SET 
            `visits` = `visits` + 1
        WHERE id=" . $id;

        // подготовка запроса
        $stmt = $this->conn->prepare($query);

        // выполняем запрос
        $stmt->execute();
        return $stmt;
    }

    function delete($id)
    {
        // выбираем все записи
        $query = "DELETE FROM
        " . $this->table_name . "
        WHERE id=" . $id;

        // подготовка запроса
        $stmt = $this->conn->prepare($query);

        // выполняем запрос
        $stmt->execute();
        return $stmt;
    }
}