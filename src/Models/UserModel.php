<?php
    namespace Models;

    use RedBeanPHP\SimpleModel;

    class UserModel extends SimpleModel {

        public $id;
        public $firstname;
        public $lastname;
        public $email;
        public $status = false;

        public static function getAll() {
            $users = \R::findAll('user', "status = ?", [true]);

            \R::close();

            return $users;
        }

        public static function getById($id) {
            $user = \R::load('user', 1);
            return $user;
        }

        public function create() {
            $user = \R::getRedBean()->dispense('user');
            
            $user->firstname = $this->firstname;
            $user->lastname = $this->lastname;
            $user->email = $this->email;

            \R::store($user);
            \R::close();
        }
    }
?>