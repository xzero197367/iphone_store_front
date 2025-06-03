<<<<<<< HEAD
export let cartItems = [
    
]

export function onItemClicked(item) {
  console.log({ item });
}
=======
function getCart() {
  return JSON.parse(localStorage.getItem('cart')) || []
}

function saveCart(cart) {
  localStorage.setItem('cart', JSON.stringify(cart))
}

function addToCart(product) {
  const cart = getCart()
  const index = cart.findIndex((item) => item.id === product.id)
  if (index !== -1) {
    cart[index].quantity += 1
  } else {
    cart.push({ ...product, quantity: 1 })
  }
  saveCart(cart)
}

function displayCart() {
  const cart = getCart()
  cart.forEach((item) => {
    console.log(`${item.name} - ${item.quantity} x $${item.price}`)
  })
}
function updateCartItem(id, quantity) {
  const cart = getCart()
  const index = cart.findIndex((item) => item.id === id)
  if (index !== -1) {
    if (quantity <= 0) {
      cart.splice(index, 1) // remove item if quantity is 0
    } else {
      cart[index].quantity = quantity
    }
    saveCart(cart)
  }
}

function removeFromCart(id) {
  const cart = getCart().filter((item) => item.id !== id)
  saveCart(cart)
}

export { addToCart, displayCart, updateCartItem, removeFromCart, getCart }
>>>>>>> b52595d63d0a8c750f4f88140dc27c1d39cdb013
