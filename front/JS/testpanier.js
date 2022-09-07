
// enregistrer panier dans le local storage
function saveBasket(basket) {
    localStorage.setItem("basket", JSON.stringify(basket));
}

//recupération du local storage
function getBasket() {
    let basket = localStorage.getItem("basket");
    if (basket == null ) {
        return [];
    }else {
        return JSON.parse(basket);
    }
}
console.log(localStorage.getItem('basket'));
//Ajout dans le panier
function addBasket(product) {
    let basket = getBasket();
    let foundProduct = basket.find(p => p.id == product.id);
    if (foundProduct != undefined) {
          foundProduct.quantity++;
    } else {
         basket.quantity = 1;
         basket.push(product);
    }
    saveBasket(basket);
}

// supprimer objet du panier
function removeFromBasket (product) {
    let basket = getBasket();
    basket = basket.filter(p => p.id != product.id);
    saveBasket(basket);
}

// changer la quantité d'un objet ajout ou retirer 
function changeQuantity(product, quantity) {
    let basket = getBasket();
    let foundProduct = basket.find (p => p.id == product.id);
    if (foundProduct != undefined) {
        foundProduct.quantity += quantity; 
        if (foundProduct.quantity <= 0){
            removeFromBasket(foundProduct);
        } else {
            saveBasket(basket);
        }
    } 
}

// Calculer la quantité depuis le panier

function getNumberProduct () {
    let basket = getBasket();
    let number = 0;

    for (let product of basket ) {
        number += product.quantity;
    }
    return number;
}

// Calculer la prix depuis le panier 23:00

function getTotalPrice () {
    let basket = getBasket();
    let number = 0;
    for (let product of basket ) {
        total += product.quantity * product.price;
    }
    return total;
}


/* 
Fonctionnement : 

1 : 

si on est sur une page produit avec un bouton " ajoutez au panier" on 
dois donc addEvenListener sur le bouton et en cliquant 
sur le bouton on appelle la function addBasket en lui 
passant le produit qui est afficher sur la page

2 : 

si on est sur le panier et que l'on as un bouton pour supprimer 
un produit du panier on appele la function remove from basket 
avec le produit qui correspond a la ligne sur laquelle on as cliqué

*/