<?php

    header('Content-Type: application/json');

    $inc = include ("conexion.php");

    $id_adopcion = $_POST['id_adopcion'];
    if($inc){

        $actualizar = "UPDATE adopciones SET estado = (CASE WHEN estado = 1 THEN 0 ELSE 1 END) WHERE id_adopcion = '$id_adopcion'";
        $resultado = mysqli_query($con,$actualizar);
        if($resultado){
            echo json_encode(array('exito' => true, 'mensaje' => 'Se realizo la consulta con exito'));
        } else {
            echo json_encode(array('exito' => false, 'mensaje' =>  'Error' . mysqli_error($con)));
        }

    }else{
        echo json_encode(array('exito' => false, 'mensaje' => 'Error de conexión' . mysqli_error($con)));
    }

?>