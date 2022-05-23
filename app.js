//Variables
const tareas = document.querySelector('#tareas');
inicio();

//Eventos
function inicio() {
    
    document.querySelector('#formulario').addEventListener('submit',agregarTarea);

}

//Funciones
function agregarTarea(e){
    e.preventDefault();
    const tarea = document.querySelector('#tarea').value;

    if(tarea == ""){
        alert('Ingrese una tarea')
    }
      
    
    
    else{

        const li = document.createElement('li');
        li.innerText = tarea;
        const borrarTarea = document.createElement('a');
        borrarTarea.classList = 'borrar';
        borrarTarea.innerText = 'X';
        li.appendChild(borrarTarea);
        tareas.appendChild(li);
        borrarTarea.addEventListener('click',borrar);
    }

    e.target.reset();

}

function borrar(){
    this.parentNode.remove();
}