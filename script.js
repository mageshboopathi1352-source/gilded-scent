let cart = [];

function addToCart(name, price) {
  cart.push({ name, price });
  updateCart();
}

function updateCart() {
  let cartBox = document.getElementById("cart");
  cartBox.innerHTML = "";

  cart.forEach(item => {
    let li = document.createElement("li");
    li.textContent = item.name + " - ₹" + item.price;
    cartBox.appendChild(li);
  });
}
