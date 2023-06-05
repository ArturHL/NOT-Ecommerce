//Relocation Main
const topTitle = document.querySelector('.titleP')

topTitle.addEventListener('click', relocateMain)

function relocateMain(){
    location.href = './index.html'
}

// Render Profile
const profileContainer = document.querySelector('.userProfile')

profileContainer.innerHTML = `
        <img src="${sessionStorage.getItem('avatar')}" alt="">
        <div>
            <p>${sessionStorage.getItem('name')}</p>
            <p>${sessionStorage.getItem('email')}</p>
        </div>
`

const profileData = document.querySelector('.profile-Data')

profileData.innerHTML = `
<ul>
    <li>Nombre: ${sessionStorage.getItem('name')}</li>
    <li>E-mail: ${sessionStorage.getItem('email')}</li>
    <li>Contraseña: ${sessionStorage.getItem('password')}</li>
    <li>Creado el: ${sessionStorage.getItem('creationAt')}</li>
</ul>
`


const editProfile = document.querySelector('editProfile')
const newCategory = document.querySelector('CreateCategory')
const newProduct = document.querySelector('CreateProduct')
const menu = document.querySelector('.menuFunction')

// Display Menu Utilities

function displayMenu(display){
    const container = document.querySelector('.menuFunction-info')
    menu.classList.toggle('inactive')
    // Profile
    if(display == 'profile'){
        container.innerHTML = `
        <h4>Editar Perfil <span onclick="displayMenu()"><img src="./img/close.png" alt=""></span></h4>
        <ul class="menuUl">
            <li onclick="editName()">Nombre: ${sessionStorage.getItem('name')} <span>Editar</span></li>
            <li onclick="editEmail()">E-mail: ${sessionStorage.getItem('email')} <span>Editar</span></li>
            <li onclick="editPassword()">Contraseña: ${sessionStorage.getItem('password')} <span>Editar</span></li>
            <li onclick="editAvatar()">Avatar: ${sessionStorage.getItem('avatar')} <span>Editar</span></li>
        </ul>
        `
    }
    // Create Category
    if(display == 'category'){
        container.innerHTML = `
        <h4>Crear Categoria <span onclick="displayMenu()"><img src="./img/close.png" alt=""></span></h4>
        <ul class='formCat'>
            <li>
                Nombre* <input type="text" name="" id="nameCategory" placeholder=" Nombre de la Categoria">
            </li>
            <li>
                URL <input type="text" name="" id="urlCategory" placeholder=" URL de Imagen">
            </li>
        </ul>
        <button onclick="createCategory()" class="createCat">Crear</button>
        `

        const form = document.querySelector('.menuFunction-form')
        form.innerHTML = ''
    }
    // Create Product
    if(display == 'product'){
        container.innerHTML = `
        <h4>Crear Producto <span onclick="displayMenu()"><img src="./img/close.png" alt=""></span></h4>
        <ul class='formCat'>
            <li>
                Titulo <input type="text" name="" id="nameProduct" placeholder=" Nombre del Producto">
            </li>
            <li>
                URL <input type="text" name="" id="urlProduct" placeholder=" URL de Imagen">
            </li>
            <li>
            Precio <input type="text" name="" id="Price" placeholder=" $$$">
            </li>
            <li>
                Categoria <input type="text" name="" id="pCategory" placeholder=" A que categoria pertenece?">
            </li>
            <li>
                Descripcion <input type="text" name="" id="descriptionProduct" placeholder=" ....">
            </li>
        </ul>
        <button onclick="createProduct()" class="createCat">Crear</button>
        `
    }

}
// Edit Profile
const container = document.querySelector('.menuFunction-form')
function editName(){
    container.innerHTML = `
    <input type="text" placeholder="New Name">
    <button>Save</button>`
}
function editEmail(){
    container.innerHTML = `
    <input type="text" placeholder="New Email">
    <button>Save</button>`
}
function editPassword(){
    container.innerHTML = `
    <input type="text" placeholder="New Password">
    <button>Save</button>`
}
function editAvatar(){
    container.innerHTML = `
    <input type="text" placeholder="New URL">
    <button>Save</button>`
}


// Create Category

async function createCategory(){
    // {
    //    "id": 1,
    //    "name": "Clothes",
    //    "image": "https://api.lorem.space/image/fashion?w=640&h=480&r=4278"
    // }
    var data = new Object()
        data.name = document.querySelector('#nameCategory').value
        data.image = document.querySelector('#urlCategory').value
        await fetch(
            "https://api.escuelajs.co/api/v1/categories/",
            {
            method: 'POST',
            mode: 'cors',
            credentials: 'same-origin',
            headers: {'Content-Type': 'application/json'},
            body: JSON.stringify(data),
            },)
            .then(Response => Response.json())
            .then(Response => console.log(Response))
            .catch(error => console.log(error))
}
// Create Products

async function createProduct(){
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

    var data = new Object()
    data.title = document.querySelector('#nameProduct').value
    data.price = document.querySelector('#Price').value
    data.description = document.querySelector('#descriptionProduct').value
    data.category = document.querySelector('#pCategory').value // {Tiene que ser un objeto}
    data.image = document.querySelector('#urlProduct').value
    await fetch(
        "https://api.escuelajs.co/api/v1/products/",
        {
        method: 'POST',
        mode: 'cors',
        credentials: 'same-origin',
        headers: {'Content-Type': 'application/json'},
        body: JSON.stringify(data),
        },)
        .then(Response => Response.json())
        .then(Response => console.log(Response))
        .catch(error => console.log(error))
}