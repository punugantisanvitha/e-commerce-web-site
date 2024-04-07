function removeFromCart(productId) {
    let cart = JSON.parse(localStorage.getItem('cart')) || [];

    // Use filter to remove the product with the specified id
    cart = cart.filter(product => product.id !== productId);

    localStorage.setItem('cart', JSON.stringify(cart));
    updateCart();
}

function updateQuantity(productId, action) {
    let cart = JSON.parse(localStorage.getItem('cart')) || [];
    const productIndex = cart.findIndex(product => product.id === productId);

    if (productIndex !== -1) {
        // increment the quantity 
        if (action === 'increment' && cart[productIndex].quantity <5) {
            cart[productIndex].quantity += 1;
            // decrement the quantity
        } else if (action === 'decrement' && cart[productIndex].quantity > 1) {
            cart[productIndex].quantity -= 1;
        }
    }

    localStorage.setItem('cart', JSON.stringify(cart));
    updateCart();
}

function updateCart() {
    let cartContainer = document.getElementById("cartItems");
    let totalAmount = 0;

    cartContainer.innerHTML = '';

    let cart = JSON.parse(localStorage.getItem('cart')) || [];

    cart.forEach(product => {
        totalAmount += product.price * product.quantity;
        cartContainer.innerHTML += `
            <div class="cart-item">
                <p>${product.name}: ₹${product.price} </p>
                <img src="${product.img}" alt="${product.name}" class="image-all">
                <p>Total Price: ₹${product.price * product.quantity}</p>
                <button class="decrement" onclick="updateQuantity(${product.id},'decrement')"><i class="fa-solid fa-minus"></i></button>
                <p class="m-1 Quantity">Quantity:${product.quantity}</p>
                <button class="increment"  onclick="updateQuantity(${product.id},'increment')"><i class="fa-solid fa-plus"></i></button>
                <div>
                    <button class="remove" onclick="removeFromCart(${product.id})">Remove</button>
                </div>
            </div>
        `;
    });

    document.getElementById("totalAmount").innerHTML = `
        <span>Total Amount ₹${totalAmount}</span>
    `;
}

// Initial update when the cart page loads
updateCart();