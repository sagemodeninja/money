<?php
    namespace Controllers;

    require 'rb-mysql.php';

    use Core\Attributes\Get;
    use Core\Attributes\Post;
    use Core\Controller;
    use Models\UserModel;

    class UserController extends Controller {
        public function __construct()
        {
            $connectionString = 'mysql:host=' . getenv('MYSQL_HOST') . ';dbname=' . getenv('MYSQL_DATABASE');
            \R::setup($connectionString, getenv('MYSQL_USER'), getenv('MYSQL_PASSWORD'));
        }

        #[Get]
        public function GetAll() {
            $users = UserModel::getAll();
            $this->Ok($users);
        }

        #[Get("getById")]
        public function GetById() {
            $user = UserModel::getById(1);
            $this->Ok($user);
        }

        #[Post]
        public function Create(UserModel $user) {
            $user->create();
            $this->Ok();
        }
    }
?>