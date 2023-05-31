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

function displayMenu(display){
    const container = document.querySelector('.menuFunction-info')
    menu.classList.toggle('inactive')
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
    if(display == 'category'){
        //{
        //    "id": 1,
        //    "name": "Clothes",
        //    "image": "https://api.lorem.space/image/fashion?w=640&h=480&r=4278"
        //}
        container.innerHTML = `
        <h4>Crear Categoria <span onclick="displayMenu()"><img src="./img/close.png" alt=""></span></h4>
        <ul class="menuUl">
            <li onclick="editName()">Nombre: ${sessionStorage.getItem('name')} <span>Editar</span></li>
            <li onclick="editEmail()">E-mail: ${sessionStorage.getItem('email')} <span>Editar</span></li>
            <li onclick="editPassword()">Contraseña: ${sessionStorage.getItem('password')} <span>Editar</span></li>
            <li onclick="editAvatar()">Avatar: ${sessionStorage.getItem('avatar')} <span>Editar</span></li>
        </ul>
        `
    }
    if(display == 'product'){
        container.innerHTML = `
        <h4> Crear Producto <span onclick="displayMenu()"><img src="./img/close.png" alt=""></span></h4>
        <ul class="menuUl">
            <li onclick="editName()">Nombre: ${sessionStorage.getItem('name')} <span>Editar</span></li>
            <li onclick="editEmail()">E-mail: ${sessionStorage.getItem('email')} <span>Editar</span></li>
            <li onclick="editPassword()">Contraseña: ${sessionStorage.getItem('password')} <span>Editar</span></li>
            <li onclick="editAvatar()">Avatar: ${sessionStorage.getItem('avatar')} <span>Editar</span></li>
        </ul>
        `
    }

}
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
