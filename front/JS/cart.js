// Récupération du localstorage et des items
let lsProducts = JSON.parse(localStorage.getItem('basket'))
let products = []
// Récupérer toutes les données de l'API
fetch(`http://localhost:3000/api/products/`)
	.then(res => res.json())
	.then(apiProducts => {
		//Fusion des données entre le localStorge et l'api
		lsProducts.forEach(lsProduct => {
			const productFound = apiProducts.find(
				apiProduct => apiProduct._id === lsProduct.id
			)
			if (productFound) {
				products.push({
					...productFound,
					...lsProduct,
				})
				display(products.at(-1))
			}
		})

		prixTotal()
	})
	.catch(error => console.error(error))

/**
 * @description : Affiche Les canapé dans le dom
 * @param {object} product
 */
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
	priceProduct.innerHTML = new Intl.NumberFormat('fr-FR', {
		style: 'currency',
		currency: 'EUR',
	}).format(product.price)

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

	const changeQuantitee = document.querySelectorAll('.itemQuantity')
	changeQuantitee.forEach(changement => {
		changement.addEventListener('change', p => {
			const getRootChange = p.target.closest('article')
			for (let i = 0; i < lsProducts.length; i++) {
				const product = lsProducts[i]

				if (
					product.id == getRootChange.dataset.id &&
					product.color == getRootChange.dataset.color
				) {
					product.quantity = p.target.value

					if (product.quantity >= 101) {
						product.quantity = 1
						p.target.value = 1
					}

					if (product.quantity < 1) {
						product.quantity = 1
						p.target.value = 1
					}

					products[i].quantity = parseInt(product.quantity)

					localStorage.setItem('basket', JSON.stringify(lsProducts))
					//quantityTotalbasket()
					prixTotal()
				}
			}
		})
	})

	// Supprimer produit

	const bouttonSupp = document.querySelectorAll('.deleteItem')

	bouttonSupp.forEach(btn => {
		btn.addEventListener('click', p => {
			const test = p.target.closest('article')
			lsProducts = lsProducts.filter(
				p => p.id !== test.dataset.id && p.color !== test.dataset.color
			)
			products = products.filter(
				p => p.id !== test.dataset.id && p.color !== test.dataset.color
			)
			refreshBasket(lsProducts)
			test.remove()
			//quantityTotalbasket()
			prixTotal()
		})
	})

	// Mise a jour du panier

	function refreshBasket(lsProducts) {
		if (lsProducts.length === 0) {
			localStorage.removeItem('basket')
		} else {
			localStorage.setItem('basket', JSON.stringify(lsProducts))
		}
	}

	// Afficher quantité total d'objet dans le panier

	quantityTotalbasket()
	function quantityTotalbasket() {
		let result = 0
		for (const product of lsProducts) {
			result += +product.quantity
		}
		const totalQuantity = document.querySelector('#totalQuantity')
		totalQuantity.textContent = result
	}
}

// Afficher prix total du panier

function prixTotal() {
	let result = 0
	console.log(products)
	for (const product of products) {
		result += parseInt(product.price) * parseInt(product.quantity)
	}
	const shownPrice = document.querySelector('#totalPrice')
	shownPrice.textContent = new Intl.NumberFormat('fr-FR', {
		style: 'currency',
		currency: 'EUR',
	})
		.format(result)
		.slice(0, -2)
}


////////////////////////////////////////////// FORMULAIRE /////////////////////////////////////////


/* formulaire commande  */
let formulaireDeCommande = () => {
    document.querySelector("#order").addEventListener("click", e => {
        e.preventDefault()

        /* Récupération formulaire */
        let form = e.target.closest('form').elements

        /* regex List */
        let regEmail = /^[a-zA-Z0-9._-]+@[a-z0-9._-]{2,}\.[a-z]{2,4}$/;
        let regName = /^[a-zA-ZZÀ-ÿ' -]+$/i;
        let regAddress = /^[A-Za-z0-9\é\è\ê\ë\ä\à\ï\ç\ \,\'\-]+$/;
        let regCity = /^[a-zA-ZÀ-ÿ' -]+$/;

        /* validation flag */
        let validate = true;

        /* Champ Name */
        if (!regName.test(form['firstName'].value)) {
            form['firstName'].nextElementSibling.textContent = `Le prenom est invalide, il doit ne contenir que des lettres !`
            validate = false
        }
        /* Champ Last name */
        if (!regName.test(form['lastName'].value)) {
            form['lastName'].nextElementSibling.textContent = `Le nom est invalide, il doit ne contenir que des lettre !`
            validate = false
        }
        /* Champ Address */
        if (!regAddress.test(form['address'].value)) {
            form['address'].nextElementSibling.textContent = `Adresse Invalide, merci de vérifier si elle contient un numéro ainsi qu'un lieu !`
            validate = false
        }
        /* Champ City */
        if (!regCity.test(form['city'].value)) {
            form['city'].nextElementSibling.textContent = `Ville Invalide, merci de renseigner une ville existante !`
            validate = false
        }
        /* Champ Email */
        if (!regEmail.test(form['email'].value)) {
            form['email'].nextElementSibling.textContent = `Email non valide !`
            validate = false
        }

        /* form Error */

        if (!validate) {
            return false;
        }

        /* Envoie de commande */
        let orderFinal;
        let productId = [];

        if (regName && regAddress && regCity && regEmail) {

            for (const product of kanapPannier) {
                productId.push(product._id)
            }

            orderFinal = {
                contact: {
                    firstName: firstName.value,
                    lastName: lastName.value,
                    address: address.value,
                    city: city.value,
                    email: email.value,
                },
                products: productId
            };

            fetch("http://localhost:3000/api/products/order", {
                method: "POST",
                headers: {
                    'Accept': 'application/json',
                    'Content-Type': 'application/json'
                },
                body: JSON.stringify(orderFinal)
            })
                .then(response => response.json())
                .then(data => {
                    localStorage.removeItem('produitDuPannier');
                    window.location.href = "confirmation.html?orderId=" + data.orderId;
                })
                .catch(err => console.log(err))
            
            
        }
        else {
            document.querySelector("#order").value = "Veuillez remplir tout les champs"
        };
    });

};

window.addEventListener('load', () => {
    formulaireDeCommande();
})