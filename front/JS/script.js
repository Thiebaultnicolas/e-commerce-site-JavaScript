// Récupération des product depuis le fichier JSON
fetch ("http://localhost:3000/api/products")
.then ((res) => res.json())
.then((products) => displayProducts(products))


function displayProducts(produits) {

   const sectionItems = document.querySelector(".items");
console.log(sectionItems);

   produits.forEach((produit) => {

      const {_id, imageUrl, altTxt, name, description } = produit ;

      console.log(_id, imageUrl, altTxt, name, description);

      const a = document.createElement("a")
      a.href=`./product.html?id=${_id}`
      const article = document.createElement("article")
      const image = document.createElement("img")
      image.src=`${imageUrl}`
      image.alt=`${altTxt}`
      const h3 = document.createElement("h3")
      h3.innerText=`${name}`
      h3.classList.add("productName")
      const p = document.createElement("p")
      p.innerText=`${description}`
      p.classList.add("productDescription")

      article.appendChild(image)
      article.appendChild(h3)
      article.appendChild(p)
      a.appendChild(article)

      sectionItems.appendChild(a)
   
   })   
}








/*
function canape
     // Création des fiches produits 
     for (let i = 0; i< products.length; i++) {

        const lien = document.createElement("a");
        lien.href = "./product.html?id=" + id

        let canape = products[i];

        console.log(canape);

        const article = document.createElement("article");

        const imageElement = document.createElement("img");
        imageElement.src = canape.imageUrl;

        const nomElement = document.createElement("h3");
        nomElement.innerText = canape.name;

        const descriptionElement = document.createElement("p");
        descriptionElement.innerText = canape.description;

        // Récupération de l'élement du DOM qui accueillera les produits

        const sectionItems = document.querySelector(".items");
        
         // Ajout des éléments crées dans le DOM
        lien.appendChild(imageElement);
        lien.appendChild(nomElement);
        lien.appendChild(descriptionElement);
        sectionItems.appendChild(lien);

     }


})
*/