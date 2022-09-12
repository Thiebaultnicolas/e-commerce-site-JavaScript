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
/*
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
*/
  
 

// Récupération du localstorage et des items
let itemBasket = JSON.parse(localStorage.getItem("basket"));
console.log(itemBasket);

    itemBasket.map((objetLocalStorage) =>  {
        const idArticle = id
        const colorArticle = color
        const quantityArticle = quantity
        ajoutItems()
    })

        function ajoutItems() {
            fetch(`http://localhost:3000/api/products/${id}`)
            .then ((res) => res.json())
            .then((products) => displayProducts(products))
            .catch((error) => {
                console.error(error);
            })

            // Introduction des elements dans la section 
            const section = document.querySelector("#cart__items");
            console.log(section);

            // Création de l'article
            const article = document.createElement("article");
            article.classList.add("cart__item");
            article.dataset.id = `${idArticle}`;
            article.dataset.color = `${colorArticle}`;
            section.appendChild(article);

            // Image du produit 
            const divImage =  document.createElement("div");
            divImage.classList.add("cart__item__img");
            article.appendChild(divImage);
        
            const image = document.createElement("img");
            image.src = displayProducts.imageUrl;
            image.alt = displayProducts.altTxt;
            divImage.appendChild(image);

            // Contenu du produit 
            const divContent = document.createElement("div");
            divContent.classList.add("cart__item__content");
            article.appendChild(divContent);

            const description = document.createElement("div");
            description.classList.add("cart__item__content__description");
            divContent.appendChild(description);

            const nameProduct = document.createElement("h2");
            nameProduct.innerHTML = displayProducts.name;
            description.appendChild(nameProduct);

            let colorProduct = document.createElement("p");
            colorProduct.innerHTML = colorArticle;
            description.appendChild(colorProduct);

            
            let priceProduct = document.createElement("p");
            priceProduct.innerHTML = `${displayProducts.price}€`;
            description.appendChild(priceProduct);

            
            let divSettings = document.createElement("div");
            divSettings.classList.add("cart__item__content__settings");
            divContent.appendChild(divSettings);

            // quantité du produit

            let divQuantity = document.createElement("div");
            divQuantity.classList.add("cart__item__content__settings__quantity");
            divSettings.appendChild(divQuantity);
                    

        }




