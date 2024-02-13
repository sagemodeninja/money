<?php
    namespace Controllers;

    use Core\ControllerBase;
    use Core\Attributes\Get;
    use Core\Attributes\Post;
    use Core\Attributes\Patch;
    use Core\Attributes\Delete;
    use Models\UserModel;

    class UserController extends ControllerBase {
        #[Get]
        public function GetAll() {
            $users = UserModel::getAll();
            return $this->Ok($users);
        }

        #[Get("{id}")]
        public function GetById($id) {
            $user = UserModel::getById($id);
            return $this->Ok($user);
        }

        #[Post]
        public function Create($user) {
            UserModel::create($user);
            return $this->Created();
        }

        #[Patch("{id}")]
        public function Update($id, $user) {
            UserModel::update($id, $user);
            return $this->Ok();
        }

        #[Delete("{id}")]
        public function Remove($id) {
            UserModel::remove($id);
            return $this->NoContent();
        }
    }
?>