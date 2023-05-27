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
            <a href="#">Crear Categoria</a>
            <a href="#">Crear Producto</a>
            <div id="logOut">Log Out</div>
        </div>
`