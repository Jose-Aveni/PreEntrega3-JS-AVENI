class productos {
    constructor(nombre, precio) {
        this.nombre = nombre;
        this.precio = precio;
    }
};

const brownieMarroc = new productos("Brownie Marroc", 550);
const brownieMerengue = new productos("Brownie Merengue", 500);
const lemonPie = new productos("Lemon Pie", 400);
const rogel = new productos("Rogel", 300);

const arrayProductos = [brownieMarroc, brownieMerengue, lemonPie, rogel];
let arrayStorageUp = [];


// Obtenemos todos los elementos con la clase "btnQuiero"
const botones = document.querySelectorAll(".btnQuiero");

// Agregamos un controlador de eventos a cada botón
botones.forEach((boton) => {
    boton.addEventListener("click", (event) => {
        // Obtenemos el nombre del botón en el que se hizo click
        let nombreBoton = event.target.getAttribute("data-nombre");

        //  Añadimos el producto que el cliente eligió al arrayStorageUp
        arrayProductos.forEach((producto) => {
            nombreBoton == producto.nombre && arrayStorageUp.push(producto);
        });

        //  Mensaje de aviso de carga en carrito
        Toastify({
            text: "Agregado al carrito",
            duration: 1000,
            style: {
                background: "linear-gradient(to right, rgb(255, 90, 125), rgb(255, 90, 125)",
            }
        }).showToast();

        // Cargamos los objetos en el localStorage
        let aJson = JSON.stringify(arrayStorageUp);
        localStorage.setItem("arrayStorageUp", aJson);
    });
});