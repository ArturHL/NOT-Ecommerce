const ul = document.querySelector('.ul')
const cartProducts =  JSON.parse(sessionStorage.getItem("cartProducts"))
const count = document.querySelector('.totalCount')
let totalCount = 0

for(i of cartProducts){
    fetch(`https://api.escuelajs.co/api/v1/products/${i[0]}`)
        .then(response => response.json())
        .then(response => {
            ul.insertAdjacentHTML('beforeend', `
                <li>
                    <div>   
                        <img src="${response.images[0]}" alt="">
                        <p>${response.title}</p>
                        <p>${response.price}</p>
                    </div>
                </li>
                `)
            totalCount = totalCount + response.price
            count.innerText = `$ ${totalCount}`
        }) 
        .catch(error => console.log(error))
}

const title = document.querySelector('.title')

title.addEventListener('click', relocate)

function relocate(){
    location.href = './index.html'
}