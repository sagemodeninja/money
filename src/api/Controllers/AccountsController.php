<?php
    namespace Controllers;

    use Core\Controller;
    use Core\Attributes\Get;
use Core\ControllerBase;
use Models\AccountModel;

    class AccountsController extends ControllerBase {
        #[Get("categorized")]
        public function GetCategorized() {
            $accounts = AccountModel::getCategorized();
            return $this->Ok($accounts);
        }
    }
?>