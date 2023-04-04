<?php
    namespace Controllers;

    require 'rb-mysql.php';

    use Core\Attributes\Post;
    use Core\Controller;
    use Models\UserModel;

    class UserController extends Controller {
        #[Post]
        public function Create() {
            $connectionString = 'mysql:host=' . getenv('MYSQL_HOST') . ';dbname=' . getenv('MYSQL_DATABASE');
            \R::setup($connectionString, getenv('MYSQL_USER'), getenv('MYSQL_PASSWORD'));

            $body = file_get_contents('php://input');
            $data = json_decode($body);

            UserModel::create($data->firstname, $data->lastname, $data->email);
            \R::close();
            
            echo "Ok";
        }
    }
?>