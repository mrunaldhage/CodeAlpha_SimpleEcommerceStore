const productDiv = document.getElementById("products");

products.forEach(item => {

  const div = document.createElement("div");
  div.className = "card";

  div.innerHTML = `
    <img src="${item.image}">
    <h3>${item.name}</h3>
    <p>₹${item.price}</p>
    <button onclick="addToCart(${item.id})">
      Add to Cart
    </button>
  `;

  productDiv.appendChild(div);

});

function addToCart(id) {

  let cart = JSON.parse(localStorage.getItem("cart")) || [];

  const product = products.find(p => p.id === id);

  cart.push(product);

  localStorage.setItem("cart", JSON.stringify(cart));

  alert("Product Added!");
}
