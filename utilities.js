const profileContainer = document.querySelector('.userProfile')

profileContainer.innerHTML = `
        <img src="${sessionStorage.getItem('avatar')}" alt="">
        <div>
            <p>${sessionStorage.getItem('name')}</p>
            <p>${sessionStorage.getItem('email')}</p>
        </div>
`

const main = document.querySelector('main')