const cart = document.querySelector('.cart')
const contenido = document.querySelector('.contenido')

if(sessionStorage.getItem('name') !== undefined && sessionStorage.getItem('name')){
    contenido.innerText = 'Agrega Productos a tu carrito'
}else{
    contenido.innerText = 'Inicia Sesion para usar el carrito'
}
