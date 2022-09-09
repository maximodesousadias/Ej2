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
Vamos a utilizar el mismo array de objetos "Pizzas🍕" del desafío general anterior. 

👉 Crear un archivo HTML que contenga un h2, un h4, un input number y un botón. 

👉 El desafío será, al tocar el botón, capturar el valor ingresado en el input.
👉 Renderizar en el h2 el nombre y en el h4 el precio de la pizza cuyo id coincida con el numero ingresado en el input. 

🚨 Si no coincide con ningún id, renderizar un mensaje de error. 
*/

//Paso 1:

const input = document.querySelector('.input-text')
const nameBlank = document.querySelector('.output-name')
const priceBlank = document.querySelector('.output-price')
const addForm = document.querySelector('.add-form')

//Paso 2:

const matchId = e => {

    e.preventDefault();

    const inputValue = parseInt(input.value);

    if(pizzas.some(pizza => pizza.id == inputValue)){
        //const pizzaName = pizza => pizzas.
        //pizzaId = pizzas.map(pizza => pizza.id == inputValue).name
        //nameBlank.innerHTML = pizzas.map(pizza => pizza.id == inputValue).name
        const pizzaObject = pizzas.filter(pizza => pizza.id == inputValue)[0];
        nameBlank.innerHTML = `La pizza que seleccionaste es ${pizzaObject.nombre}`;
        priceBlank.innerHTML = `Su precio es de $${pizzaObject.precio}`;
        return;
    }else{
        alert("ERROR. Intente con otro ID");
    }
}

//Paso 3:

addForm.addEventListener('submit', matchId)

