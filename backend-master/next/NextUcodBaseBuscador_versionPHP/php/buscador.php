<?php
require('leer.php');
if (isset($_POST['submit']){
  if (!empty($_POST['from'] ) && !empty($_POST['to'] ) && !empty( $_POST['city'] ) && !empty($_POST['type'] )) {
    $from = $_POST['from'];
    $to = $_POST['to'];
    $city = $_POST['city'];
    $type = $_POST['type'];

    $json_clientes = json_decode($data);
    foreach ($json_clientes as $casa) {
      $num = str_replace("$", "", $casa->(Precio));
      $num =str_replace(",", "", $num));
      $valor = floatval($num);

    
  }

  }
}
?>
