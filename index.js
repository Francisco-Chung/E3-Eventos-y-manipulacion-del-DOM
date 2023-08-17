const pizzas = [
  {
    id: 1,
    nombre: "pizza de Muzzarella",
    precio: 500,
    ingredientes: ["Muzzarella", "Tomate", "Aceitunas"],
    imagen: "./img/muzzarella.png",
  },

  {
    id: 2,
    nombre: "pizza de Cebolla",
    precio: 1500,
    ingredientes: ["Muzzarella", "Tomate", "Cebolla"],
    imagen: "./img/cebolla.png",
  },

  {
    id: 3,
    nombre: "pizza 4 Quesos",
    precio: 1380,
    ingredientes: [
      "Muzzarella",
      "Tomate",
      "Queso Azul",
      "Parmesano",
      "Roquefort",
    ],
    imagen: "./img/4quesos.png",
  },

  {
    id: 4,
    nombre: "pizza Especial",
    precio: 1000,
    ingredientes: ["Muzzarella", "Tomate", "Rucula", "Jamón"],
    imagen: "./img/especial.png",
  },

  {
    id: 5,
    nombre: "pizza con Anana",
    precio: 600,
    ingredientes: ["Muzzarella", "Tomate", "Anana"],
    imagen: "./img/anana.png",
  },
];


const form = document.querySelector(".form");
const pizzaId = document.querySelector(".input-txt");
const error = document.querySelector(".error");
const cardContainer = document.querySelector(".card-container");


const ultimaBusqueda = JSON.parse(localStorage.getItem("ultimaPizza"));


const encontrarPizza = (e) => {
  e.preventDefault();
  const findPizzaId = pizzas.find(pizza => {
    return pizza.id === parseInt(pizzaId.value);
  })
  if (isNaN(parseInt(pizzaId.value))) {
    error.textContent = 'Por favor ingrese un número válido';
    cardContainer.innerHTML = ''
    cardContainer.style.background = 'none';
    return;
  };
  if (findPizzaId) {
    const createPizzaCard = () => {
      cardContainer.innerHTML = `  
      <img src='${findPizzaId.imagen}' class='img'>
      <p>${findPizzaId.nombre}</p>
      <p>$${findPizzaId.precio}</p>
      <p>${findPizzaId.ingredientes.join(', ')}</p>
    `
    };
    cardContainer.style.background = 'silver';
    error.textContent = ''
    localStorage.setItem("ultimaPizza", JSON.stringify(findPizzaId));
    return createPizzaCard();
  } else {
    error.textContent = `No se ha encontrado una pizza con ese id`
    cardContainer.innerHTML = ''
    cardContainer.style.background = 'none';
  };
  const ultimaBusqueda = JSON.parse(localStorage.getItem("ultimaPizza"));
  if (ultimaBusqueda) {
    createPizzaCard(ultimaBusqueda);
  };

  form.reset();
};


// Función inicializadora
const init = () => {
  form.addEventListener("submit", encontrarPizza);
};

init();