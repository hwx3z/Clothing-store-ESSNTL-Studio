const cartItemsContainer = document.getElementById("cart-items");
const totalElement = document.getElementById("total");

let cart = JSON.parse(localStorage.getItem("cart")) || [];

function renderCart() {
  cartItemsContainer.innerHTML = "";
  let total = 0;

  cart.forEach((item, index) => {
    total += item.price;

    const div = document.createElement("div");
    div.classList.add("cart-item");

    div.innerHTML = `
      <img src="${item.image}">
      <div class="cart-info">
        <h3>${item.name}</h3>
        <p>$ ${item.price.toFixed(2)}</p>
        <button class="remove-btn" onclick="removeItem(${index})">Remove</button>
      </div>
    `;

    cartItemsContainer.appendChild(div);
  });

  totalElement.innerText = "$ " + total.toFixed(2);
}

function removeItem(index) {
  cart.splice(index, 1);
  localStorage.setItem("cart", JSON.stringify(cart));
  renderCart();
}

renderCart();