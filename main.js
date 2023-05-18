//API
const API = "https://api.escuelajs.co/api/v1"

function fetchAPI(url){
    return fetch(url)
}

fetchAPI(`${API}/categories`)
    .then(Response => Response.json())
    .then(response => {for(obj of response){
        CAT.push(obj)
    }})
    .catch(error => console.log(error))

fetchAPI(`${API}/products`)
    .then(Response => Response.json())
    .then(response => {for(obj of response){
        PRD.push(obj)
    }})
    .catch(error => console.log(error))

fetchAPI(`${API}/users`)
    .then(Response => Response.json())
    .then(response => {for(obj of response){
        USR.push(obj)
    }})
    .catch(error => console.log(error))
// OBJ Principal

const CAT = []
// {
//     "id": 1,
//     "name": "Clothes",
//     "image": "https://api.lorem.space/image/fashion?w=640&h=480&r=4278"
// }
console.log(CAT)
console.log(`${CAT} Categories`)
const PRD = []
// {
//     "id": 4,
//     "title": "Handmade Fresh Table",
//     "price": 687,
//     "description": "Andy shoes are designed to keeping in...",
//     "category": {
//       "id": 5,
//       "name": "Others",
//       "image": "https://placeimg.com/640/480/any?r=0.591926261873231"
//     },
//     "images": [
//       "https://placeimg.com/640/480/any?r=0.9178516507833767",
//       "https://placeimg.com/640/480/any?r=0.9300320592588625",
//       "https://placeimg.com/640/480/any?r=0.8807778235430017"
//     ]
// }
console.log(PRD)
console.log(`${PRD} Products`)
const USR = []
// {
//     "id": 1,
//     "email": "john@mail.com",
//     "password": "changeme",
//     "name": "Jhon",
//     "role": "customer",
//     "avatar": "https://api.lorem.space/image/face?w=640&h=480&r=867",
// },
console.log(USR)
console.log(`${USR} Users`)


//Header
const header = document.querySelector('.header')

const logo = document.createElement('h1')
    logo.innerText = 'NOT'
const navbar = document.createElement('div')
const logIN = document.createElement('div')
    logIN.innerText = 'Log In'

header.appendChild(logo)
header.appendChild(logIN)

// NAV CAT
const navCAT = document.querySelector('.categories')
fetchAPI(`${API}/categories`)
    .then(Response => Response.json())
    .then(response => {for(obj of response){
            const newCategory = document.createElement('p')
            const nombreCAT = `${obj.name.slice(0,1).toUpperCase()}${obj.name.slice(1)}`
            newCategory.innerText = nombreCAT
            navCAT.appendChild(newCategory)
    }})
    .catch(error => console.log(error))

// Main Renderizer
const main = document.querySelector('.main')
fetchAPI(`${API}/products`)
    .then(Response => Response.json())
    .then(response => {for(obj of response){
        const productContainer = document.createElement("div")
           productContainer.classList.add("productContainer")
            const productImg = document.createElement("img")
                productImg.classList.add("productImg")
                productImg.src = `${obj.images[0]}`
            const productInfo = document.createElement("div")
                productInfo.classList.add("productInfo")
                const productName = document.createElement("div")
                    productName.classList.add("productName")
                    productName.innerText = `${obj.title}`
                const productPrice = document.createElement("div")
                    productPrice.classList.add("productPrice")
                    productPrice.innerText = `${obj.price}`
            const productDescription = document.createElement("div")
                productDescription.classList.add("productDescription")
                productDescription.innerText = `${obj.description}`
        
        productInfo.appendChild(productName)
        productInfo.appendChild(productPrice)
        productContainer.appendChild(productImg)
        productContainer.appendChild(productInfo)
        productContainer.appendChild(productDescription)
        main.appendChild(productContainer)
    }})
    .catch(error => console.log(error))