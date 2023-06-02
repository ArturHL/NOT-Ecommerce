const cart = document.querySelector('.cart')
const cartMenu = document.querySelector('.cart-Menu')
const contenido = document.querySelector('.contenido')
const contenidoT = document.querySelector('.contenidoT')
const cartProducts = []
let numberOfProducts = 0

//ShowMenu

cart.addEventListener('click', toggleCart)

function toggleCart(){
    cartMenu.classList.toggle('inactive')
}

// Render Main CartMenu

if(sessionStorage.getItem('name') !== undefined && sessionStorage.getItem('name') && cartProducts !== []){
    contenidoT.innerText = 'Agrega Productos a tu carrito'
}else{
    contenidoT.innerText = 'Inicia Sesion para usar el carrito'
}

let idProductInCart = 0
function add(id){
    fetchAPI(`${API}/products`)
        .then(Response => Response.json())
        .then(res => {
            // Render Product on MainMenu
            for(obj of res){
                if(obj.id == id){
                    contenido.insertAdjacentHTML('beforeend', `
                    <div class="pCartContainer" id="p${idProductInCart}">
                        <img src="${obj.images[0]}" alt="Img">
                        <div>
                            <p>${obj.title}</p>
                            <p>$${obj.price}</p>
                        </div>
                        <img onclick="removeP(${idProductInCart})" class="removeProductCart" src="./img/x.png" alt="Img">
                    </div>
                    `) 
                    cartProducts.push([obj.id, idProductInCart])
                    idProductInCart = idProductInCart + 1
                    break
                }
            }
            // Inactive Initial Text
            if(cartProducts !== []){
                contenidoT.classList.add('inactive')
            }

            //CartCount
            const cartCount = document.querySelector('.cart-count')
            numberOfProducts = cartProducts.length
            cartCount.innerText = numberOfProducts
        })
}

const remove = document.querySelector('.removeProductCart')

function removeP(id){
    const ContainerProductCart = document.querySelector(`#p${id}`)
    ContainerProductCart.remove()
    // Falta remover dinamicamente el producto del array de id's
    //for(obj of cartProducts){
    //    if(obj[1] == id){
    //        cartProducts.splice()
    //    }
    //}
}