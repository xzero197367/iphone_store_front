// Change main product image
function changeMainImage(src) {
  document.getElementById("mainImage").src = src;

  // Update active thumbnail
  document.querySelectorAll(".thumbnail").forEach((thumb) => {
    thumb.classList.remove("active");
  });
  event.target.classList.add("active");
}

// Select color option
function selectColor(element) {
  document.querySelectorAll(".color-option").forEach((option) => {
    option.classList.remove("active");
  });
  element.classList.add("active");
}

// Select storage option
function selectStorage(element) {
  document.querySelectorAll(".storage-option").forEach((option) => {
    option.classList.remove("active");
  });
  element.classList.add("active");

  // Update price based on storage
  const price = element.dataset.price;
  document.querySelector(".price").textContent = `$${price}.00`;
}

// Change quantity
function changeQuantity(change) {
  const quantityInput = document.getElementById("quantity");
  let currentValue = parseInt(quantityInput.value);
  let newValue = currentValue + change;

  if (newValue >= 1 && newValue <= 10) {
    quantityInput.value = newValue;
  }
}

// Add to cart functionality
function addToCart() {
  const selectedColor = document.querySelector(".color-option.active").dataset
    .color;
  const selectedStorage = document.querySelector(".storage-option.active")
    .dataset.storage;
  const quantity = document.getElementById("quantity").value;
  const price = document.querySelector(".price").textContent;

  alert(
    `Added to cart:\nApple iPhone 14 Pro Max\nColor: ${selectedColor}\nStorage: ${selectedStorage}\nQuantity: ${quantity}\nPrice: ${price}`
  );
}

// Smooth scroll to sections
function scrollToSection(sectionId) {
  document.getElementById(sectionId).scrollIntoView({
    behavior: "smooth",
  });
}

// Initialize quantity input event listener
document.getElementById("quantity").addEventListener("change", function () {
  if (this.value < 1) this.value = 1;
  if (this.value > 10) this.value = 10;
});
