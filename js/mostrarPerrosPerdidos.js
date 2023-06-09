import {url} from './url.js';
var  contenedor = document.getElementById('contenedorDatos');


fetch (url+"/php/mostrar-perros-perdidos.php")
.then(res => res.json())
.then(data  => {
    if(data.exito){
        data.data.forEach(datos => {
            var div = document.createElement('div');
            div.appendChild(document.createElement('br'));
        
            // Raza
            var razaTitulo = document.createElement('strong');
            razaTitulo.textContent = 'Raza: ';
            div.appendChild(razaTitulo);
            div.appendChild(document.createTextNode(datos.raza_perro));
            div.appendChild(document.createElement('br'));

            // Sexo
            var sexoTitulo = document.createElement('strong');
            sexoTitulo.textContent = 'Sexo: ';
            div.appendChild(sexoTitulo);
            div.appendChild(document.createTextNode(datos.sexo));
            div.appendChild(document.createElement('br'));


            // Fecha que se perdio
            var fechaTitulo = document.createElement('strong');
            fechaTitulo.textContent = 'Fecha: ';
            div.appendChild(fechaTitulo);
            div.appendChild(document.createTextNode(datos.fecha));

            // Zona
            var zonaTitulo = document.createElement('strong');
            zonaTitulo.textContent = 'Zona: ';
            div.appendChild(document.createElement('br'));
            div.appendChild(zonaTitulo);
            div.appendChild(document.createTextNode(datos.zona));

            // Características
            var caracteristicasTitulo = document.createElement('strong');
            caracteristicasTitulo.textContent = 'Características: ';
            div.appendChild(document.createElement('br'));
            div.appendChild(caracteristicasTitulo);
            div.appendChild(document.createTextNode(datos.caracteristicas));

            // Comportamiento
            var comportamientoTitulo = document.createElement('strong');
            comportamientoTitulo.textContent = 'Comportamiento: ';
            div.appendChild(document.createElement('br'));
            div.appendChild(comportamientoTitulo);
            div.appendChild(document.createTextNode(datos.comportamiento));

            // Estado
            var estadoTitulo = document.createElement('strong');
            estadoTitulo.textContent = 'Estado: ';
            div.appendChild(document.createElement('br'));
            div.appendChild(estadoTitulo);

            if (datos.estado == 0){
                div.appendChild(document.createTextNode("Perdido"));
            }else{
                div.appendChild(document.createTextNode("Encontro su dueño"));                
            }

            // Foto        
            div.appendChild(document.createElement('br'));
            var img = document.createElement('img');
            img.src = url + '/php/cargar-foto-perdidos.php?id=' + datos.id_perdidos;
            img.width = 200;
            div.appendChild(img);
            div.appendChild(document.createElement('br'));

            if(datos.estado == 0){
                //Boton contactar
                var buttonContactar = document.createElement('button');
                buttonContactar.textContent = 'Contactar';
                div.appendChild(buttonContactar);      
                
                //Boton estado
                var buttonEstado = document.createElement('button');
                buttonEstado.textContent = 'Cambiar estado adopcion';
                div.appendChild(buttonEstado);
            }


            div.appendChild(document.createElement('br'));
            div.appendChild(document.createElement('br'));

            document.getElementById('contenedorDatos').appendChild(div);


            if ((localStorage.getItem('loggedAdm') === 'true') || ((localStorage.getItem('loggedIn') === 'true') && ((localStorage.getItem('idUsuario') === datos.id_cliente)))){
    
                if (datos.estado == 0){
                        buttonEstado.addEventListener('click', function(event) {
                        
                        var formD = new FormData();

                        formD.append('id_perdidos', datos.id_perdidos);

                        fetch (( url+"/php/cambiarEstadoPerdido.php"),{
                            method: 'POST',
                            body: formD   
                        })
                        .then(res => res.json())
                        .then(data  => {
                            if(data.exito){
                                console.log(datos.mensaje);
                                location.reload();
                                alert(data.mensaje);
                            }else{
                                console.log(datos.mensaje);
                                alert(data.mensaje);
                            }
                        })
                    })
                }

            }else{
                if (datos.estado == 0){
                    buttonEstado.hidden = true;
                }
            }

            if(datos.estado == 0){
                    buttonContactar.addEventListener('click', function(event) {
                    localStorage.setItem('razaPerro', datos.raza_perro);
                    localStorage.setItem('tipoServicio', 'perro perdido');
                    localStorage.setItem('mailAviso', datos.mail);
                    window.location.href = (url+'/formPerroBP.html');
                })
            }

            document.getElementById('contenedorDatos').appendChild(document.createElement('hr'));
            document.getElementById('contenedorDatos').appendChild(document.createElement('hr'));


        });
    }else{
        var div = document.createElement('div');
        div.appendChild(document.createTextNode('No hay perros perdidos por el momento'));
        document.getElementById('contenedorDatos').appendChild(div);
    }
    
})
.catch(error => console.error(error));

