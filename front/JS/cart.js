
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
	console.log(product)
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
	priceProduct.innerHTML = `${product.quantity * product.price} €`
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
}

function ajoutItems() {
	// Introduction des elements dans la section
	const section = document.querySelector('#cart__items')
	console.log(section)

	// Création de l'article
	const article = document.createElement('article')
	article.classList.add('cart__item')
	article.dataset.id = `${idArticle}`
	article.dataset.color = `${colorArticle}`
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
	colorProduct.innerHTML = colorArticle
	description.appendChild(colorProduct)

	const priceProduct = document.createElement('p')
	priceProduct.innerHTML = `${product.price}€`
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
}
