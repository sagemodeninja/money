<?php
    namespace Controllers;

    use Core\Attributes\Get;
    use Core\Attributes\Post;
    use Core\Controller;

    class AccountsController extends Controller {
        #[Get("categorized")]
        public function GetCategorized() {
            $user = UserModel::getById(1);
            $this->Ok($user);
        }

        private function connect() {
            $MYSQL_HOST = getenv('MYSQL_HOST');
            $MYSQL_USER = getenv('MYSQL_USER');
            $MYSQL_PASSWORD = getenv('MYSQL_PASSWORD');
            $MYSQL_DATABASE = getenv('MYSQL_DATABASE');

            return @mysqli_connect($MYSQL_HOST, $MYSQL_USER, $MYSQL_PASSWORD, $MYSQL_DATABASE);
        }
    }
?>