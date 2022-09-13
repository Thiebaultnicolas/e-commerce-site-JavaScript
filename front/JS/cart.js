
// Récupération du localstorage et des items
let lsProducts = JSON.parse(localStorage.getItem('basket'))
// Récupérer toutes les données de l'API
fetch(`http://localhost:3000/api/products/`)
	.then(res => res.json())
	.then(apiProducts => {
		//produits provenant de l'api (products)
		apiProducts.forEach(apiProduct => {
			const lsProductFound = lsProducts.find(
				lsProduct => apiProduct._id === lsProduct.id
			)

			if (lsProductFound) {
				display({
					...apiProduct,
					...lsProductFound,
				})
			}
		})
	})
	.catch(error => console.error(error))

function display(product) {
	
	// Introduction des elements dans la section
	const section = document.querySelector('#cart__items')

	// Création de l'article
	const article = document.createElement('article')
	article.classList.add('cart__item')
	article.dataset.id = `${product.id}`
	article.dataset.color = `${product.color}`
	section.appendChild(article)

	// Image du produit
	const divImage = document.createElement('div')
	divImage.classList.add('cart__item__img')
	article.appendChild(divImage)

	const image = document.createElement('img')
	image.src = product.imageUrl
	image.alt = product.altTxt
	divImage.appendChild(image)

	// Contenu du produit
	const divContent = document.createElement('div')
	divContent.classList.add('cart__item__content')
	article.appendChild(divContent)

	const description = document.createElement('div')
	description.classList.add('cart__item__content__description')
	divContent.appendChild(description)

	const nameProduct = document.createElement('h2')
	nameProduct.innerHTML = product.name
	description.appendChild(nameProduct)

	const colorProduct = document.createElement('p')
	colorProduct.innerHTML = product.color
	description.appendChild(colorProduct)

	const priceProduct = document.createElement('p')
	priceProduct.innerHTML = `${product.price} €`
	description.appendChild(priceProduct)

	const divSettings = document.createElement('div')
	divSettings.classList.add('cart__item__content__settings')
	divContent.appendChild(divSettings)

	// quantité du produit

	const divQuantity = document.createElement('div')
	divQuantity.classList.add('cart__item__content__settings__quantity')
	divSettings.appendChild(divQuantity)

	const quantity = document.createElement('p')
	quantity.innerHTML = product.quantity
	quantity.innerText = 'Qté : '
	divQuantity.appendChild(quantity)

	const input = document.createElement('input')
	input.classList.add('itemQuantity')
	input.type = 'number'
	input.name = 'itemQuantity'
	input.min = 1
	input.max = 100
	input.value = product.quantity
	divQuantity.appendChild(input)

	// bouton supprimer du produit

	const divButtonSupp = document.createElement('div')
	divButtonSupp.classList.add('cart__item__content__settings__delete')
	divSettings.appendChild(divButtonSupp)

	const buttonSupp = document.createElement('p')
	buttonSupp.classList.add('deleteItem')
	buttonSupp.innerHTML = 'Supprimer'
	divButtonSupp.appendChild(buttonSupp)
  

	// modification quantitée 
	const changeQuantitee = document.querySelectorAll(".itemQuantity");
	changeQuantitee.forEach(changement => {

		changement.addEventListener("change", (p) => {
			const getRootChange = p.target.closest("article");
			for (const product of lsProducts) {
				if (product._id == getRootChange.dataset.id && product.color == getRootChange.dataset.color) {
					product.quantity = p.target.value;
				
					if(product.quantity >= 101){

						product.quantity = 1
						e.target.value = 1
					} 

					if(product.quantity < 1 ){

						product.quantity = 1
						e.target.value = 1
					} 
				
					localStorage.setItem("basket", JSON.stringify(lsProducts));
					quantityTotalbasket();
					prixTotal();
				}
			}
		})

	})	


	// Supprimer produit
    const bouttonSupp = document.querySelectorAll(".deleteItem");
    
	bouttonSupp.forEach (btn => {

		btn.addEventListener("click" , (p) => {
			const test = p.target.closest("article");
			lsProducts = lsProducts.filter((p) => p._id !== test.dataset.id || p.color !== test.dataset.color );
			refreshBasket(lsProducts);
			test.remove()
			quantityTotalbasket();
			prixTotal()
			
		})
	})

	// Mise a jour du panier 
    function refreshBasket(lsProducts) {
         if (lsProducts.length === 0) {
            localStorage.removeItem("basket");
        } else {
            localStorage.setItem("basket", JSON.stringify(lsProducts));
        }
    }
	

    // Afficher quantité total d'objet dans le panier

	quantityTotalbasket();
	function quantityTotalbasket() {
		let result = 0;
		for (const product  of lsProducts) {
			result += +product.quantity;
		}
		const totalQuantity = document.querySelector("#totalQuantity")
		totalQuantity.textContent = result;
	}

 
}
 
    // Afficher quantité total d'objet dans le panier
	function prixTotal() {
					
		let result = 0
		for (const product of lsProducts) {
		result += product.price * product.quantity
								
		}
		const shownPrice = document.querySelector("#totalPrice");
		shownPrice.textContent = result;
		console.log(product .price)
		} 

