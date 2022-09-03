const produit = window.location.search.split("?").join("");
const urlParams = new URLSearchParams(produit);
console.log(produit);
const id = urlParams.get("id")
console.log(id)


fetch(`http://localhost:3000/api/products/${id}`)
.then ((res) => res.json())
.then((products) => displayProducts(products))
.catch((error) => {
    console.error(error);
})

function displayProducts(produits) {

    const sectionItem__img = document.querySelector(".item__img");
    console.log(sectionItem__img);

    const {_id, imageUrl, altTxt, name, description, colors ,price } = produits ;
    console.log(_id, imageUrl, altTxt, name, description);
    console.log(produits);

    const image = document.createElement("img")
    image.src=`${imageUrl}`
    image.alt=`${altTxt}`
    console.log(image);

    const nom = document.querySelector("#title");
    nom.innerText=`${name}`

    const nodePrice = document.querySelector("#price")
    nodePrice.innerText=`${price}`

    const nodeDescription = document.querySelector("#description");
    nodeDescription.innerText=`${description}`

    const Select = document.querySelector("#colors")
   
    colors.forEach(color => {
        const nodeColors = document.createElement("option")
        nodeColors.value=`${color}`
        nodeColors.innerText=`${color}`
        Select.appendChild(nodeColors)
    });

    sectionItem__img.appendChild(image)
       
}



