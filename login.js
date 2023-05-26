// Animation Animals

const img = document.querySelector('.img')
const srcImg = [
    './img/abeja.png',
    './img/anaconda.png',
    './img/camaleon.png',
    './img/coala.png',
    './img/medusa.png',
    './img/tortuga.png',
    './img/zorro.png',
    './img/ajolote.png',
]
let index = 0;

function reloadImg(){
    if(index >= 8){
        index = 0
    }
    img.src = `${srcImg[index]}`
    index = index + 1
}
setInterval(() => {
    reloadImg()
}, 2000);

// Log In
const inputUser = document.querySelector('#user')
const inputPassword = document.querySelector('#password')
const btnLogIn = document.querySelector('#btnLogIn')

btnLogIn.addEventListener('click', matchUser)

async function matchUser(){
    const users = []
    await fetch("https://api.escuelajs.co/api/v1/users")
        .then(response => response.json())
        .then(response => {
            for(usr of response){
            users.push(usr)
        }})
        .catch(error => console.log(error))
    const usrValue = inputUser.value
    const passvalue = inputPassword.value
    for(obj of users){
        if(obj.email == usrValue && obj.password == passvalue){
            console.log("Match")
            console.log(obj)
            break
        }else{
            alert("Tu email o tu contraseña esta incorrecta, porfavor reintentalo.")
            return
        }
    }
}