//API
const API = "https://api.escuelajs.co/api/v1"

function fetchAPI(url){
    return fetch(url)
}

fetchAPI(`${API}/categories`)
    .then(Response => Response.json())
    .then(response => {for(obj of response){
        CAT.push(obj.name)
    }})
    .catch(error => console.log(error))

// OBJ Principal

const CAT = []
console.log(CAT)

//Header
const header = document.querySelector('.header')


const logo = document.createElement('h1')
    logo.innerText = 'NOT'
const navbar = document.createElement('div')
const categories = document.createElement('div')
    categories.innerText = 'Categories'
const logIN = document.createElement('div')
    logIN.innerText = 'Log In'



navbar.appendChild(categories)
navbar.appendChild(logIN)
header.appendChild(logo)
header.appendChild(navbar)
