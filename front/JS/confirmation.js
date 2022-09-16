const produit = window.location.search.split("?").join("");
const urlParams = new URLSearchParams(produit);
console.log(produit);
const id = urlParams.get("orderId")
console.log(id)


const OrderNumber = document.getElementById("orderId")
OrderNumber.innerHTML = id