const cart = document.querySelector('.cart')
const cartMenu = document.querySelector('.cart-Menu')
const contenido = document.querySelector('.contenido')

if(sessionStorage.getItem('name') !== undefined && sessionStorage.getItem('name')){
    contenido.innerText = 'Agrega Productos a tu carrito'
}else{
    contenido.innerText = 'Inicia Sesion para usar el carrito'
}

cart.addEventListener('click', toggleCart)

function toggleCart(){
    cartMenu.classList.toggle('inactive')
}
