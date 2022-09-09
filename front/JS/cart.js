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

function displayItem(item) {
    const article = makeArticle(item)
    displayarticle(article)
    console.log(article);
    const div1 = makeImageDiv (item)
    article.appendChild(div1)
}

function makeArticle(item) {
    const article = document.createElement("article")
    article.classList.add("cart__item")
    article.dataset.id = item.id
    article.dataset.color = item.color
    return article
}
function displayarticle (article) {
document.querySelector("#cart__items").appendChild(article)

}
function makeImageDiv(item) {
    const div1 = document.createComment ("div")
    div1.classList.add("cart__item__img")

    const image = document.createElement("img")
    image.src = item.imageUrl
    image.alt = item.altTXT
    div1.appendChild(image)
    return div1
}




https://www.youtube.com/watch?v=JBqBSv5h3Ds&t=151s reprendre a 25:10




/*
const numberOfItems = localStorage.getItem("basket");
console.log(localStorage.getItem("basket"));
*/




/*
fetch("http://localhost:3000/api/products")
.then ((res) => res.json())
.then((products) => displayProducts(products))
.catch((error) => {
    console.error(error);
})

function displayProducts(produits) {
    
    const sectionCart__items = document.querySelector("#cart__items");
    console.log(sectionCart__items);

    

    produits.forEach((produit) => {

    const {_id, imageUrl, altTxt, name, description, colors ,price } = produits ;
    console.log(_id, imageUrl, altTxt, name, description,colors,price);
    console.log(produits);

    const article =  document.createElement("article")
    article.classList.add("cart__item")
    article.dataset=`${_id}`
    article.dataset=`${colors}`
    console.log(article);

    const div1 =  document.createElement("div")
    div1.classList.add("cart__item__img")

    const image = document.createElement("img")
    image.src = `${imageUrl}`
    image.alt = `${altTxt}`

    const div2 =  document.createElement("div")
    div2.classList.add("cart__item__content")

    const div3 =  document.createElement("div")
    div3.classList.add("cart__item__content_description")

    const nom =  document.createElement("h2")
    nom.innerText = `${name}`

    const color =  document.createElement("p")
    color.innerText = `${colors}`

    const prix =  document.createElement("p")
    prix.innerText = `${price}`

    const div4 =  document.createElement("div")
    div4.classList.add("cart__item__content__settings")

    const div5 =  document.createElement("div")
    div5.classList.add("cart__item__content__settings__quantity")

    const quantity =  document.createElement("p")
    quantity.innerText = ?;

    const input =  document.createElement("input")
    input.innerText = ?;

    const div6 =  document.createElement("div")
    div6.classList.add("cart__item__content__settings__delete")

    const supprimer =  document.createElement("p")
    supprimer.innerText = ?;


 })
}
*/