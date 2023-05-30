// Usr menu Interaccion
const showMenu = document.querySelector('.showUsrMenu')

showMenu.innerHTML =`
        <div class="head">
            <div class="head-welcome">
                Bienvenido, ${sessionStorage.getItem('name')}
            </div>
            <div class="head-email">
                ${sessionStorage.getItem('email')}
            </div>
        </div>
        <div class="actions">
            <a href="./utilities.html">Editar Perfil</a>
            <a href="./utilities.html">Crear Categoria</a>
            <a href="./utilities.html">Crear Producto</a>
            <div id="logOut">Log Out</div>
        </div>
`

const btnUsr = document.querySelector('.usrMenu')
const background = document.querySelector('.backgroundMenu')

btnUsr.addEventListener('click', toggleMenu)
background.addEventListener('click', toggleMenu)

function toggleMenu(){
    showMenu.classList.toggle('inactive')
    background.classList.toggle('inactive')
}

// - Menu Actions - //

// Edit Profile

// Create Category

// Create Product


// Log Out
const outSession = document.querySelector('#logOut')

outSession.addEventListener('click', logOut)

function logOut(){
    sessionStorage.clear()
    location.reload()
}
