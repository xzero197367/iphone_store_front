// Sample product data
const sampleProducts = [
  {
    id: 1,
    name: "Wireless Headphones",
    price: 99.99,
    image: "🎧",
    description: "High-quality wireless headphones with noise cancellation",
  },
  {
    id: 2,
    name: "Smart Watch",
    price: 249.99,
    image: "⌚",
    description: "Fitness tracking smartwatch with heart rate monitor",
  },
  {
    id: 3,
    name: "Laptop Stand",
    price: 39.99,
    image: "💻",
    description: "Adjustable aluminum laptop stand for better ergonomics",
  },
  {
    id: 4,
    name: "Coffee Mug",
    price: 14.99,
    image: "☕",
    description: "Insulated travel coffee mug with leak-proof lid",
  },
];

// Cart state
let cart = JSON.parse(localStorage.getItem("cart")) || [];
let discountApplied = false;
let discountAmount = 0;

// Discount codes
const discountCodes = {
  SAVE10: 0.1,
  WELCOME20: 0.2,
  STUDENT15: 0.15,
};

// Initialize cart on page load
document.addEventListener("DOMContentLoaded", function () {
  renderCart();
  updateSummary();
});

function addSampleItems() {
  // Add sample items to cart if not already present
  sampleProducts.forEach((product) => {
    const existingItem = cart.find((item) => item.id === product.id);
    if (!existingItem) {
      cart.push({
        ...product,
        quantity: 1,
      });
    }
  });

  saveCart();
  renderCart();
  updateSummary();
  showNotification("Sample items added to cart!");
}

function renderCart() {
  const container = document.getElementById("cartItemsContainer");

  if (cart.length === 0) {
    container.innerHTML = `
                    <div class="empty-cart">
                        <div class="empty-cart-icon">🛒</div>
                        <h3>Your cart is empty</h3>
                        <p>Add some items to get started!</p>
                    </div>
                `;
    return;
  }

  container.innerHTML = cart
    .map(
      (item) => `
                <div class="cart-item" data-id="${item.id}">
                    <div class="item-image">${item.image}</div>
                    <div class="item-details">
                        <h3>${item.name}</h3>
                        <p>${item.description}</p>
                    </div>
                    <div class="item-price">$${item.price.toFixed(2)}</div>
                    <div class="quantity-controls">
                        <button class="quantity-btn" onclick="updateQuantity(${
                          item.id
                        }, ${item.quantity - 1})" ${
        item.quantity <= 1 ? "disabled" : ""
      }>-</button>
                        <input type="number" class="quantity-input" value="${
                          item.quantity
                        }" min="1" max="99" onchange="updateQuantity(${
        item.id
      }, this.value)">
                        <button class="quantity-btn" onclick="updateQuantity(${
                          item.id
                        }, ${item.quantity + 1})">+</button>
                    </div>
                    <button class="remove-btn" onclick="removeItem(${
                      item.id
                    })">Remove</button>
                </div>
            `
    )
    .join("");
}

function updateQuantity(id, newQuantity) {
  newQuantity = parseInt(newQuantity);

  if (newQuantity < 1) {
    removeItem(id);
    return;
  }

  if (newQuantity > 99) {
    newQuantity = 99;
  }

  const item = cart.find((item) => item.id === id);
  if (item) {
    item.quantity = newQuantity;
    saveCart();
    renderCart();
    updateSummary();
    showNotification("Quantity updated!");
  }
}

function removeItem(id) {
  cart = cart.filter((item) => item.id !== id);
  saveCart();
  renderCart();
  updateSummary();
  showNotification("Item removed from cart!");
}

function updateSummary() {
  const itemCount = cart.reduce((total, item) => total + item.quantity, 0);
  const subtotal = cart.reduce(
    (total, item) => total + item.price * item.quantity,
    0
  );

  // Calculate shipping (free over $100)
  const shipping = subtotal > 100 ? 0 : subtotal > 0 ? 9.99 : 0;

  // Calculate discount
  let discount = 0;
  if (discountApplied) {
    discount = subtotal * discountAmount;
  }

  // Calculate tax (8.5%)
  const taxableAmount = subtotal - discount;
  const tax = taxableAmount * 0.085;

  const total = subtotal + shipping + tax - discount;

  // Update DOM
  document.getElementById("itemCount").textContent = itemCount;
  document.getElementById("subtotal").textContent = `$${subtotal.toFixed(2)}`;
  document.getElementById("shipping").textContent =
    shipping === 0 ? "FREE" : `$${shipping.toFixed(2)}`;
  document.getElementById("tax").textContent = `$${tax.toFixed(2)}`;
  document.getElementById("total").textContent = `$${total.toFixed(2)}`;

  // Show/hide discount row
  const discountRow = document.getElementById("discountRow");
  if (discountApplied && discount > 0) {
    discountRow.style.display = "flex";
    document.getElementById("discount").textContent = `-$${discount.toFixed(
      2
    )}`;
  } else {
    discountRow.style.display = "none";
  }

  // Enable/disable checkout button
  const checkoutBtn = document.getElementById("checkoutBtn");
  checkoutBtn.disabled = cart.length === 0;
}

function applyDiscount() {
  const codeInput = document.getElementById("discountCodeInput");
  const code = codeInput.value.trim().toUpperCase();

  if (discountCodes[code]) {
    discountApplied = true;
    discountAmount = discountCodes[code];
    updateSummary();
    showNotification(
      `Discount code "${code}" applied! ${discountAmount * 100}% off`
    );
    codeInput.value = "";
  } else if (code) {
    showNotification("Invalid discount code", "error");
  }
}

function checkout() {
  if (cart.length === 0) return;

  // Simulate checkout process
  showNotification("Redirecting to checkout...", "success");

  setTimeout(() => {
    alert(
      "Thank you for your purchase! This is a demo - no actual payment was processed."
    );
    cart = [];
    discountApplied = false;
    discountAmount = 0;
    saveCart();
    renderCart();
    updateSummary();
  }, 1500);
}

function continueShopping() {
  showNotification("Redirecting to shop...", "info");
  // In a real app, this would redirect to the product catalog
}

function saveCart() {
  localStorage.setItem("cart", JSON.stringify(cart));
}

function showNotification(message, type = "success") {
  const notification = document.getElementById("notification");
  notification.textContent = message;
  notification.className = `notification ${type}`;
  notification.classList.add("show");

  setTimeout(() => {
    notification.classList.remove("show");
  }, 3000);
}

// Add some sample items on first visit
if (cart.length === 0) {
  // Optionally add one sample item
  cart.push({
    ...sampleProducts[0],
    quantity: 1,
  });
  saveCart();
  renderCart();
  updateSummary();
}
