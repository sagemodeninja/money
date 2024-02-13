<?php
    namespace Controllers;

    use Core\ControllerBase;
    use Core\Attributes\Get;
    use Core\Attributes\Post;
    use Core\Attributes\Patch;
    use Core\Attributes\Delete;
    use Models\AccountModel;

    class AccountController extends ControllerBase {
        #[Get]
        public function GetAll() {
            $accounts = AccountModel::getAll();
            return $this->Ok($accounts);
        }

        #[Get("{id}")]
        public function GetById($id) {
            $account = AccountModel::getById($id);
            return $this->Ok($account);
        }

        #[Post]
        public function Create($account) {
            AccountModel::create($account);
            return $this->Created();
        }

        #[Patch("{id}")]
        public function Update($id, $account) {
            AccountModel::update($id, $account);
            return $this->Ok();
        }

        #[Delete("{id}")]
        public function Remove($id) {
            AccountModel::remove($id);
            return $this->NoContent();
        }
    }
?>