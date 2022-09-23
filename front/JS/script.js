// Récupération des produits depuis le fichier JSON
fetch ("http://localhost:3000/api/products")
.then ((res) => res.json())
.then((products) => displayProducts(products))


function displayProducts(produits) {

   const sectionItems = document.querySelector(".items");


   produits.forEach((produit) => {

      const {_id, imageUrl, altTxt, name, description } = produit ;

      

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








