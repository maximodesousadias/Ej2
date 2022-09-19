const pizzas = [
    {
    id: 1,
    nombre: "Margarita",
    ingredientes: ["Salsa de tomate", "Muzzarella"],
    precio: 950
    },
    {
    id: 2,
    nombre: "Hawaiana",
    ingredientes: ["Salsa de tomate", "Muzzarella", "Ananá"],
    precio: 1200
    },
    {
    id: 3,
    nombre: "Fugazzeta",
    ingredientes: ["Muzzarella", "Cebolla"],
    precio: 1100
    },
    {
    id: 4,
    nombre: "Fugazzeta rellena",
    ingredientes: ["Muzzarella", "Jamón", "Cebolla"],
    precio: 1800
    },
    {
    id: 5,
    nombre: "Jamón y morrones",
    ingredientes: ["Salsa de tomate", "Muzzarella", "Morrón", "Jamón"],
    precio: 1600
    },
    {
    id: 6,
    nombre: "Especial",
    ingredientes: ["Salsa de tomate", "Muzzarella", "Jamón", "Morrón", "Cebolla", "Huevo"],
    precio: 1000
    },
    {
    id: 7,
    nombre: "4 Quesos",
    ingredientes: ["Mozzarella", "Queso Azul", "Queso Parmesano", "Queso Cheddar"],
    precio: 1300
    }
    ];

/*
Utilizando el querido array de objetos "Pizzas🍕", realizar el siguiente desafío: 

👉 A cada Pizza, agregarle una imagen. 
👉 Guardar el array en el local storage. 
👉 Crear un archivo HTML que contenga un card en donde se renderice el nombre, imagen, ingredientes y precio de una pizza (Estilizarlo con CSS 🎨). 
👉 Debajo del card tiene que haber un input y un botón. 

Deberemos colocar un numero en el input y, al apretar el botón, deberá renderizar en el card la pizza cuyo id coincida con el numero ingresado en el input.

🚨 Si no coincide con ningún id, renderizar un mensaje de error.

🆙 En Eduflow, colocar el repositorio de Github, en el cual debe figurar el vercel deployado. 
*/

//Paso 1:

const input = document.querySelector('.input-text')
const nameBlank = document.querySelector('.card')
const addForm = document.querySelector('.add-form')

//Paso 2:
//Guardo en el Local Storage

const saveLocalStorage = array => {
    localStorage.setItem('pizzas', JSON.stringify(pizzas));
}

//Esta funcionando?

//Paso 3:

const renderCard = pizza => {
    const {id, nombre, ingredientes, precio} = pizza;
    return `
        <img class="pizza-pic" src="./img/img-${id}.jpg">
        <h3>${nombre}</h3>
        <p><b>Ingredientes: </b>${ingredientes}</p>
        <h4>$${precio}</h4>
        `
}

const matchId = e => {

    e.preventDefault();

    const inputValue = parseInt(input.value);

    if(pizzas.some(pizza => pizza.id == inputValue)){

        const pizzaObject = pizzas.filter(pizza => pizza.id == inputValue)[0];
        
        nameBlank.innerHTML = renderCard(pizzaObject)
        return;

    }else if(inputValue > 7 || 0 > inputValue){
        nameBlank.innerHTML = `<b>ERROR: </b>Debes seleccionar un valor entre 0 y 7.`
    }else if(isNaN(inputValue)){
        nameBlank.innerHTML = `<b>ERROR: </b>El buscador solo permite números.`
    }
}

const formEventListener = () => {
    addForm.addEventListener('submit', matchId)
}
    
//Paso 3:

const init = () => {
    formEventListener()

}

init()

