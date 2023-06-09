import {url} from './url.js'
var  contenedor = document.getElementById('contenedorDatos');



fetch (url+"/php/mostrarUsuarios.php")
.then(res => res.json())
.then(data  => {
    console.log (data); 
    if(data.exito){
        data.data.forEach(datos => {

        var div = document.createElement('div');        
        // nombre
        var nombreTitulo = document.createElement('strong');
        nombreTitulo.textContent = 'Nombre: ';
        div.appendChild(nombreTitulo);
        div.appendChild(document.createTextNode(datos.nombre));

        // Apellido
        var apellidoTitulo = document.createElement('strong');
        apellidoTitulo.textContent = 'Apellido: ';
        div.appendChild(document.createElement('br'));
        div.appendChild(apellidoTitulo);
        div.appendChild(document.createTextNode(datos.apellido));

        // Email
        var emailTitulo = document.createElement('strong');
        emailTitulo.textContent = 'Email: ';
        div.appendChild(document.createElement('br'));
        div.appendChild(emailTitulo);
        div.appendChild(document.createTextNode(datos.mail));

        // Telefono
        var telefonoTitulo = document.createElement('strong');
        telefonoTitulo.textContent = 'Telefono: ';
        div.appendChild(document.createElement('br'));
        div.appendChild(telefonoTitulo);
        div.appendChild(document.createTextNode(datos.telefono));

        // Tipo usuario
        var tipoTitulo = document.createElement('strong');
        tipoTitulo.textContent = 'Tipo Usuario: ';
        div.appendChild(document.createElement('br'));
        div.appendChild(tipoTitulo);
        if (datos.es_administrador == 1){
            div.appendChild(document.createTextNode("Administrador"));
        }else{
            div.appendChild(document.createTextNode("Usuario Comun"));
        }

        // Boton registrar Perro
        var botonRegistrar = document.createElement('button');
        botonRegistrar.textContent = 'Registrar Perro';

        botonRegistrar.addEventListener('click', function () {
        console.log('Se hizo clic en el botón');
          localStorage.setItem('emailTitulo',datos.mail );
          window.location.href = (url+'/registrar-perro.html');
        });


        // Boton Ver perfil
        var botonPerfil = document.createElement('button');
        botonPerfil.textContent = 'Ver Perfil';
        

        botonPerfil.addEventListener('click', function () {
            console.log('Se hizo clic en el botón');
            localStorage.setItem('emailTitulo',datos.mail);
            localStorage.setItem('idUsuario',datos.id_cliente ); 
            window.location.href = (url+'/miPerfil.html');  //------Modificar url
        });

        // Agregar el botón al contenedor
        div.appendChild(document.createElement('br'));
        div.appendChild(botonRegistrar);

        div.appendChild(document.createElement('br'));
        div.appendChild(botonPerfil);

        
        div.appendChild(document.createElement('br'));
        div.appendChild(document.createElement('br'));

        document.getElementById('contenedorDatos').appendChild(div);
        document.getElementById('contenedorDatos').appendChild(document.createElement('hr'));
        document.getElementById('contenedorDatos').appendChild(document.createElement('hr'));
                
        });
    }else{
        console.log("No hay Usuarios");
        var p = document.createElement('p');
        p.textContent = data.mensaje;
        contenedor.appendChild(p);
    }
    
})
.catch(error => console.error(error));