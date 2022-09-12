/*
const cart = [];

retrieveItemsFromCache () 
console.log(cart)
cart.forEach((item) => displayItem (item))

function retrieveItemsFromCache () {
    const numberOfItems = localStorage.length
    for (let i = 0; i < numberOfItems ;i++) {
        const item = localStorage.getItem(localStorage.key(i))
        const itemObject = JSON.parse(item)
        cart.push(itemObject)
    }
}

*/

fetch("http://localhost:3000/api/products")
.then ((res) => res.json())
.then((products) => displayBasketApi(products))
.catch((error) => {
    console.error(error);
})

function displayBasketApi(produits) {

    const article = document.querySelector("#cart__items");
    console.log(article);

    produits.forEach((produit) => {

        const {_id, imageUrl, altTxt, name, description, colors ,price } = produits ;
        console.log(_id, imageUrl, altTxt, name, description,colors,price);
  
        const article = document.createElement("article")
        article.classList.add("cart__item")
        article.dataset.id = _id
        article.dataset.color = colors

        const div1 =  document.createElement("div")
        div1.classList.add("cart__item__img")
    
        const image = document.createElement("img")
        image.src = imageUrl
        image.alt = altTxt

        const div2 =  document.createElement("div")
        div2.classList.add("cart__item__content")

        const div3 =  document.createElement("div")
        div3.classList.add("cart__item__content_description")

        const nom =  document.createElement("h2")
        nom.innerText = name

        const color =  document.createElement("p")
        color.innerText = description

        const prix =  document.createElement("p")
        prix.innerText = price

        const div4 =  document.createElement("div")
        div4.classList.add("cart__item__content__settings")
    
        const div5 =  document.createElement("div")
        div5.classList.add("cart__item__content__settings__quantity")
     
  })
}

  
  function displayBasketLocalStorage(itemLocalStorage) {

// appeler local storage ici
    const itemLocalStorage = localStorage.length
    for (let i = 0; i < itemLocalStorage ;i++) {
        const item = localStorage.getItem(localStorage.key(i))
        const itemObject = JSON.parse(itemLocalStorage)
        
    }

    const quantity =  document.createElement("p")
    //quantity.innerText = ?;

    const input =  document.createElement("input")
    //input.innerText = ?;

    const div6 =  document.createElement("div")
    div6.classList.add("cart__item__content__settings__delete")

    const supprimer =  document.createElement("p")
    //supprimer.innerText = ?;

}




