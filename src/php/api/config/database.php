<?php

class Database
{
    // укажите свои учетные данные базы данных
    private $host = "localhost";
    private $db_name = "robo-projects";
    private $username = "admin";
    private $password = "admin";
    public $conn;

    private $link;

    // получаем соединение с БД
    public function getConnection()
    {
        $this->conn = null;

        try {
            $this->conn = new PDO("mysql:host=" . $this->host . ";dbname=" . $this->db_name, $this->username, $this->password);
            $this->conn->exec("set names utf8");
        } catch (PDOException $exception) {
            echo "Ошибка подключения: " . $exception->getMessage();
        }

        return $this->conn;
    }
}


//https://ru.stackoverflow.com/questions/252040/pdo-%D0%BA%D0%B0%D0%BA-%D0%B2%D0%B5%D1%80%D0%BD%D1%83%D1%82%D1%8C-%D1%81%D1%82%D1%80%D0%BE%D0%BA%D1%83-%D0%B7%D0%B0%D0%BF%D1%80%D0%BE%D1%81%D0%B0
class MyPDOStatement extends PDOStatement
{
  protected $_debugValues = null;

  protected function __construct()
  {
    // этот пустой конструктор необходим
  }

  public function execute($values=array())
  {
    $this->_debugValues = $values;
    try {
      $t = parent::execute($values);
      // *размышления о логировании*
    } catch (PDOException $e) {
      // *размышления о логировании*
      throw $e;
    }

    return $t;
  }

  public function _debugQuery($replaced=true)
  {
    $q = $this->queryString;

    if (!$replaced) {
      return $q;
    }

    return preg_replace_callback('/:([0-9a-z_]+)/i', array($this, '_debugReplace'), $q);
  }

  protected function _debugReplace($m)
  {
    $v = $this->_debugValues[$m[1]];
    if ($v === null) {
      return "NULL";
    }
    if (!is_numeric($v)) {
      $v = str_replace("'", "''", $v);
    }

    return "'". $v ."'";
  }
}

