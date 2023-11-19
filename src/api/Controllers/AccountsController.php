<?php
    namespace Controllers;

    use Core\Controller;
    use Core\Attributes\Get;
    use Models\AccountModel;

    class AccountsController extends Controller {
        #[Get("categorized")]
        public function GetCategorized() {
            $accounts = AccountModel::getCategorized();
            $this->Ok($accounts);
        }
    }
?>