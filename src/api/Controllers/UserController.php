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
            $this->Ok($users);
        }

        #[Get("{id}/principal/{principal}")]
        public function GetById($id, $principal) {
            $users = UserModel::getById($id);
            $this->Ok($users);
        }

        #[Post]
        public function Create($user) {
            UserModel::create($user);
            $this->Ok();
        }

        #[Patch("{id}")]
        public function Update($id, $user) {
            UserModel::update($id, $user);
            $this->Ok();
        }

        #[Delete("{id}")]
        public function Remove($id) {
            UserModel::remove($id);
            $this->Ok();
        }
    }
?>