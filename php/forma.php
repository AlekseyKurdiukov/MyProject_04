<?php

  //Принимаю данные и записываю в переменные
  $email = $_POST["email"];
  $password = $_POST["password"];
  //Проверка введенных данных
  print_r ($_POST);
  echo "<br />".$email."<br />".$password;
  //Подключаюсь к БД и записываю информацию
  $mysqli = new mysqli ("127.0.0.1", "root", "", "users");

  $mysqli -> query ("SET NAMES 'utf8'");

  $success =  $mysqli -> query ("INSERT INTO `user` (`id`, `login`, `password`, `data`) VALUES (NULL, '$email', MD5('$password'), UNIX_TIMESTAMP())");

  $mysqli -> close ();
  //Проверка работы функции
  echo "<br />".$success;
?>
