let cart = 
JSON.parse(localStorage.getItem("cart")) || [];

function updateCartCount() {
    document.getElementById("cart-count").textContent = cart.length;
}

function addToCart(productName, price) {
    cart.push({name: productName, price: price});

localStorage.setItem("cart", JSON.stringify(cart));
    updateCartCount();
}

function displayCartItem() {
    let cartItemContainer =
document.getElementById("cart-items");
    let cartTotal =
document.getElementById("cart-total");

cartItemContainer.innerHTML = "";
    let total = 0;
    
    cart.forEach((item, index) => {
        let itemElement = 
    document.getElementById("p");
        itemElement.textContent = `${item.name} - $$ {item-price}`;

    cartItemContainer.appendChild(itemElement);
        total += item.price;
    });

    cartTotal.textContent = total;
}

function clearCart() {
    cart = [];
localStorage.setItem("cart", JSON.stringify(cart));
    displayCartItem();
    updateCartCount();
}

document.addEventListener("DOMContentLoaded", () => {
    updateCartCount();
    if
(document.getElementById("cart-items")) {
    displayCartItem();
}
});