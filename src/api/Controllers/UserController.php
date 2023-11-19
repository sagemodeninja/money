<?php
    namespace Controllers;

    use Core\Attributes\Get;
    use Core\Attributes\Post;
    use Core\Controller;
    use Models\UserModel;

    class UserController extends Controller {
        #[Post]
        public function Create($user) {
            UserModel::create($user);
            $this->Ok();
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
    }
?>