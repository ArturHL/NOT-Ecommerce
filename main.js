//API
// https://api.escuelajs.co/api/v1/
async function fetchAPI (urlAPI){
    const response = await fetch(urlAPI)
    console.log(response)
    const result = await response.json()
    console.log(result)
    return result
}

const categoriesName = async(urlAPI)=>{
    try{
        const categories = await fetchAPI(`${urlAPI}categories`)
        console.log(categories)
        const categorie1 = await fetchAPI(`${urlAPI}categories/${categories[0].id}`)
        console.log(categorie1)
    } catch(error){
        return console.error(error)
    }
}
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
