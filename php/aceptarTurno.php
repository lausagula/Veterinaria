<?php 

    $inc = include ("conexion.php");

    if($inc){

        $id_turno = $_POST['id_turno'];
        $dia = $_POST['dia'];
        $servicio = $_POST['servicio'];
        $id_cliente = $_POST['id_cliente'];
        $id_perro = $_POST['id_perro'];
        $horario = $_POST['horario'];
        $estado = 'Aceptado';


        $consulta = "INSERT INTO turnos (id_turno, dia, servicio, horario, id_perro, id_cliente, estado) VALUES ('$id_turno', '$dia', '$servicio', '$horario', '$id_perro', '$id_cliente', '$estado')";
        $resultado = mysqli_query($con, $consulta);
        $eliminar = "DELETE FROM turnos_pendientes WHERE id_turno = '$id_turno'";
        $result = mysqli_query($con, $eliminar);
        if(($resultado) && ($result)){
            echo json_encode(array('exito' => true, 'mensaje' => 'El turno fue aceptado correctamente'));    
        }else{
            echo json_encode(array('exito' => false, 'mensaje' => 'Error al aceptar el turno o al eliminarlo'));
        }

        
        // if($result){
        //     echo json_encode(array('exito' => true, 'mensaje' => 'Turno eliminardo de pendientes'));
        // }else{
        //     echo json_encode(array('exito' => false, 'mensaje' => 'Error de conexión'));
        // }

    }else{
        echo json_encode(array('exito' => false, 'mensaje' => 'Error de conexión'));
    }
?>