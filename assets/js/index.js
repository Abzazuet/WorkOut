const burger = document.querySelector("#burger-menu");
const ul = document.querySelector("nav ul");
const nav = document.querySelector("nav");
burger.addEventListener("click",() =>{
    ul.classList.toggle("show");
});
const navLink = document.querySelectorAll(".link");
navLink.forEach((link) => {
    link.addEventListener("click", ()=> {
        ul.classList.remove("show");
    });
});
//Guardar en un diccionario los valores ingresados
const calculate = document.querySelector("#submit-btn");
let valorParametros = [];
calculate.addEventListener("click", () => {
    const parametros = document.querySelectorAll(".input");
    console.log(parametros)
    parametros.forEach((parametro) => {
        var parametrox = document.getElementById(parametro.id).value;
        valorParametros[parametro.id] = parametrox;
        document.getElementById("proteinas").innerText="Calculo proteinas";
        document.getElementById("carbos").innerText="Calculo carbos";
        document.getElementById("grasa").innerText="Calculo grasas";
    });
    //Variable valorParametros
});
