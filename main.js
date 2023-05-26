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
const logIN = document.createElement('a')
    logIN.innerText = 'Log In'
    logIN.classList.add('login')
    logIN.setAttribute('href', './login.html')


header.appendChild(logo)
header.appendChild(logIN)

// NAV CAT
const navCAT = document.querySelector('.categories')
fetchAPI(`${API}/categories`)
    .then(Response => Response.json())
    .then(response => {
        for(obj of response){
            const newCategory = document.createElement('p')
            const nombreCAT = `${obj.name.slice(0,1).toUpperCase()}${obj.name.slice(1)}`
            newCategory.innerText = nombreCAT
            navCAT.appendChild(newCategory)
    }})
    .catch(error => console.log(error))

// Main Render
const main = document.querySelector('.main')
fetchAPI(`${API}/products?offset=0&limit=10`)
.then(Response => Response.json())
.then(response => {
    response.forEach((obj, index) => {
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
            console.log(`${index} valor impreso a`)}
    )
})
.catch(error => location.href = './404.html')

function renderProducts(Offset){
    let limit = 10
    let offset = Offset
    if (offset > 0){
            fetchAPI(`${API}/products?offset=${offset}&limit=${limit}`)
                .then(Response => Response.json())
                .then(response => {
                    response.forEach((obj, index) => {
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
                            console.log(`${index} valor impreso ${obj.id}`)

                        })
                })
                .then(response => {
                    let i = 0
                    while( i < 10){
                        const container = document.querySelector('.productContainer')
                        container.remove()
                        i = i + 1
                    }
                })
                .catch(error => location.href = "./404.html") 
    }else{
        fetchAPI(`${API}/products?offset=0&limit=${limit}`)
        .then(Response => Response.json())
        .then(response => {
            response.forEach((obj, index) => {
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
                    console.log(`${index} valor impreso`)})
        
        })
        .then(response => {
            let i = 0
            while( i < 10){
                const container = document.querySelector('.productContainer')
                container.remove()
                i = i + 1
            }
            
        })
        .catch(error => location.href = "./404.html") 
    }

}

//Pages Buttons Render
fetchAPI(`${API}/products`)
    .then(response => response.json())
    .then(response => {
        var total = 0
        for(i in response){
            total = total + 1
        }
        total = total / 10
        var incremento = 0
        var valorContainer = 1
        const selectorsContainer = document.querySelector(".pages-selector")
        while(incremento < total){
            const selector = document.createElement("div")
                selector.innerText = valorContainer.toString()
                selector.setAttribute("onclick", `renderProducts(${incremento * 10})`)
            selectorsContainer.appendChild(selector)
            incremento = incremento + 1
            valorContainer = valorContainer + 1
        }
    })
    .catch(error => location.href = "./404.html")