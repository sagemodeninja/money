<?php
    namespace Controllers;

    use Core\Attributes\Get;
    use Core\Attributes\Post;
    use Core\Controller;
    use Models\UserModel;

    class AccountController extends Controller {
        #[Get]
        public function GetAll() {
            $users = UserModel::getAll();
            $this->Ok($users);
        }
    }
?>