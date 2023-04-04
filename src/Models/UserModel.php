<?php
    namespace Models;

    use RedBeanPHP\SimpleModel;

    class UserModel extends SimpleModel {
        public static function create($firstname, $lastname, $email): int {
            $user = \R::getRedBean()->dispense('user');
            
            $user->firstname = $firstname;
            $user->lastname = $lastname;
            $user->email = $email;

            return \R::store($user);
        }
    }
?>