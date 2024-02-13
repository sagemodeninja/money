<?php
    namespace Controllers;

    use Core\ControllerBase;
    use Core\Attributes\Get;
    use Core\Attributes\Post;
    use Core\Attributes\Patch;
    use Core\Attributes\Delete;
    use Models\WalletModel;

    class WalletController extends ControllerBase {
        #[Get]
        public function GetAll() {
            $wallets = WalletModel::getAll();
            return $this->Ok($wallets);
        }

        #[Get("{id}")]
        public function GetById($id) {
            $wallet = WalletModel::getById($id);
            return $this->Ok($wallet);
        }

        #[Post]
        public function Create($wallet) {
            WalletModel::create($wallet);
            return $this->Created();
        }

        #[Patch("{id}")]
        public function Update($id, $wallet) {
            WalletModel::update($id, $wallet);
            return $this->Ok();
        }

        #[Delete("{id}")]
        public function Remove($id) {
            WalletModel::remove($id);
            return $this->NoContent();
        }
    }
?>