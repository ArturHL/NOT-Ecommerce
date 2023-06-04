const cart = document.querySelector('.cart')
const cartMenu = document.querySelector('.cart-Menu')
const contenido = document.querySelector('.contenido')
const contenidoT = document.querySelector('.contenidoT')
const bntBuy = document.querySelector('.buy')
const cartProducts = []
let numberOfProducts = 0

//ShowMenu

cart.addEventListener('click', toggleCart)

function toggleCart(){
    cartMenu.classList.toggle('inactive')
}

// Render Main CartMenu
function principalTextCart(){
    if(sessionStorage.getItem('name') !== undefined && sessionStorage.getItem('name') && cartProducts !== []){
        contenidoT.innerText = 'Agrega Productos a tu carrito'
    }else{
       contenidoT.innerText = 'Inicia Sesion para usar el carrito'
    }
}
principalTextCart()


// Add & Remove Products ShoppingCart
let idProductInCart = 0
function add(id){
    if(sessionStorage.getItem('name') !== undefined && sessionStorage.getItem('name')){
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
                    bntBuy.classList.remove('inactive')
                }

                //CartCount
                const cartCount = document.querySelector('.cart-count')
                numberOfProducts = cartProducts.length
                cartCount.innerText = numberOfProducts
            })
    }else{
        alert('Inicia Sesion para usar el carrito')
    }
    
}

function removeP(id){
    const ContainerProductCart = document.querySelector(`#p${id}`)
    ContainerProductCart.remove()
    cartProducts.forEach((obj, index)=>{
        if(obj[1] == id){

            cartProducts.splice(index, 1)
            console.log(`objeto ${id} eliminado`)


            const cartCount = document.querySelector('.cart-count')
            numberOfProducts = cartProducts.length
            if (numberOfProducts == 0){
                cartCount.innerText = ''
                if(!cartProducts !== []){
                    contenidoT.classList.remove('inactive')
                    bntBuy.classList.add('inactive')
                }
            }else{
                cartCount.innerText = numberOfProducts
            }
        }
    })
}

// Buy Cart
const buy = document.querySelector('#buyCart')

buy.addEventListener('click', payPage)

function payPage(){
    location.href = './pay.html'
}