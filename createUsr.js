const newName = document.querySelector('#name')
const newUsr = document.querySelector('#user')
const newPassword = document.querySelector('#password')
const createUsr = document.querySelector('#newUsr')

createUsr.addEventListener('click', createNewUsr)

async function createNewUsr(){
    //{
    //    "name": "Nicolas",
    //    "email": "nico@gmail.com",
    //    "password": "1234",
    //    "avatar": "https://api.lorem.space/image/face?w=640&h=480&r=867",
    //}
    var data = new Object()
        data.name = `${newName.value}`
        data.email = `${newUsr.value}`
        data.password = `${newPassword.value}`
        data.avatar = 'https://ionicframework.com/docs/img/demos/avatar.svg'
    await fetch(
        "https://api.escuelajs.co/api/v1/users/",
        {
          method: 'POST',
          mode: 'cors',
          credentials: 'same-origin',
          headers: {'Content-Type': 'application/json'},
          body: JSON.stringify(data),
        },)
            .then(response => console.log(response))
            .catch(error => console.log(error))
    sessionStorage.setItem('email', `${data.email}`)
    sessionStorage.setItem('password', `${data.password}`)
    sessionStorage.setItem('name', `${data.name}`)
    location.href = './index.html'
}