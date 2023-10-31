let pagCarrito = document.getElementById("pagCarrito");
let btnVerProductos = document.getElementById("btnVerProductos");

let productosHTMLActualizado = [];

btnVerProductos.addEventListener("click", () => {
    let carritoStorage = JSON.parse(localStorage.getItem("arrayStorageUp"));
    let productosHTML = "";
    
    carritoStorage.forEach((producto) => {
        let nombre = producto.nombre;
        let precio = producto.precio;
        productosHTML += `${nombre} - $${precio}<br>`;
    });
    
    pagCarrito.innerHTML = productosHTML;
});

let btnEliminarTodo = document.getElementById("btnEliminarTodo");

btnEliminarTodo.addEventListener("click", () => {
    localStorage.clear();
    sessionStorage.clear();
    // window.location.reload();
    pagCarrito.innerHTML = "Deberás recargar (F5) la página principal";  
 });