<?php 

    header('Content-Type: application/json');

    include ("conexion.php");


    $raza_perro = $_POST['raza_perro'];
    $sexo = $_POST['sexo'];
    $edad = $_POST['edad'];
    $zona = $_POST['zona'];
    $caracteristicas = $_POST['caracteristicas'];
    $comportamiento = $_POST['comportamiento'];
    $email = $_POST['email'];
    $estado = 0;


    
    $insertar = "INSERT INTO adopciones (raza_perro,sexo,edad,zona,caracteristicas,comportamiento,mail,estado) VALUES ('$raza_perro','$sexo','$edad','$zona','$caracteristicas','$comportamiento','$email',$estado)";
    $query = mysqli_query($con,$insertar);
    if($query){
        echo json_encode(array('exito' => true, 'mensaje' => 'Se registró correctamente'));
    }else{  
     echo json_encode(array('exito' => false, 'mensaje' => 'Error al procesar la solicitud'));
    }


    
?>

