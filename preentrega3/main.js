const formulario= document.querySelector("#form-login"),
select= document.querySelector("#opcion"),
opciones=["1. Ingresar a la banca personal", "2. Pago a proveedores", "3. Pago de Haberes", "4. Otras consultas", "5. Cerrar sesión",],
elegirOperacion= document.querySelector(".opciones"),
inputOption= document.querySelector(".opcion"),
salida= document.querySelector(".salida");



console.log(elegirOperacion);
// console.log(formulario);
formulario.addEventListener("submit", (e)=>{
    e.preventDefault()
    // console.log(e.target[0]);
    const inputUser= e.target[1],
    inputNombre= e.target[0],
    inputPass= e.target[2];
    console.log(`USER: ${inputUser.value} PASS: ${inputPass.value}`);
    const mostrarUsuario= document.querySelector(".info-usuario")
    mostrarUsuario.innerHTML=`Bienvenido a nuestro banco Sr/Sra ${inputNombre.value} `   
    elegirOperacion.innerHTML= (`Selecciona la operacion que deseas realizar:
    <ol>
        <li>Ingresar a la banca personal</li>
        <li>Pago de proveedores</li>
        <li>Pago de haberes</li>
        <li>Otras consultas</li>
        <li>Cerrar sesión</li>
    </ol>`)
})


// yo quiero que al presionar la opcion de pago de haberes se linkee a otra pagina para hacer todo el proceso 


const btnSubmit= document.querySelector(".btn-login"),
inputNombre=document.querySelector("#nombre"),
inputUser=document.querySelector("#user"),
inputPass= document.querySelector("#pass"),
inputCheck= document.querySelector("#check");

function guardar(valor){
    let user={nombre: inputNombre.value, usuario: inputUser.value, pass: inputPass.value};
    if(valor=== "sessionStorage"){
        sessionStorage.setItem("item", JSON.stringify(user))
    }
    if(valor === "localStorage"){
        localStorage.setItem("item", JSON.stringify(user));
    }
    return user
}

btnSubmit.addEventListener("click", ()=>{
    if(inputCheck.checked){
        guardar("localStorage")
    }else{
        guardar("sessionStorage")
    }
})


const clientes=[];

let user=JSON.parse(localStorage.getItem("item"))
clientes.push(user);
console.log(clientes);



function Cliente(nombre, nacimiento, sexo, telefono, empleados, usuario, clave){
    this.id = (clientes.length + 1);
    this.nombre = nombre;
    this.nacimiento = nacimiento;
    this.sexo = sexo;
    this.telefono = telefono;
    this.empleados = empleados;
    this.usuarioGuardado= usuario;
    this.claveGuardada= clave;
}

const cliente1= new Cliente(
    "Leonardo Guillermo Mattioli", 
    "27/06/1976", 
    "M",
    "343-5785476",
    {empleado1: "27456789547", empleado2: "20235643476"},
    "LeoMattioli",
    "Eleon123",
    )
clientes.push(cliente1);


inputOption.addEventListener("keyup", () => {
    console.log(inputOption.value);
    if(inputOption.value !="5" && inputOption.value !="3"){
       salida.innerHTML=`Bienvenido a la banca digital`
    }
    if(inputOption.value == "3"){
        salida.innerHTML=`Bienvenido a la sección PAGO DE HABERES`
    } 
    if(inputOption.value == "5"){
        salida.innerHTML=`¡Gracias! puedes volver cuando gustes.`
    } 
});    
       

