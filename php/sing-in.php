<?php

    header('Content-Type: application/json');
    include ("conexion.php");

    if ($con->connect_error){
        die("La conexion fallo: " .$cnn->connect_error);
    }

    $email = $_POST['email'];
    $contraseña = $_POST['password']; 

    $sql = "SELECT * FROM clientes WHERE (mail = '$email') AND (contraseña = '$contraseña')";
    $resultado = $con->query($sql);

    if ($resultado->num_rows > 0){
        echo json_encode(array('exito' => true, 'mensaje' => 'Se registró correctamente'));
    }else{
        echo json_encode(array('exito' => false, 'mensaje' => 'Mail o contraseña no son validos.'));
    }

?>