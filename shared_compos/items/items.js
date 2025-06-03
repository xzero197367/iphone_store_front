import { products } from '../../data/products.js'
import { getCart } from '../../data/cart.js'

window.addToCart = function (productId) {
  // alert(productId)
  cartItems.push(productId)
  onRefreshProducts()
}
export function createSingleItem(item) {
  const itemLi = document.createElement('li')
  const cartItems = getCart()

  itemLi.innerHTML = `
    <figure>
      <button class="favorite_btn">
        <i class="fa-solid fa-heart"></i>
      </button>
      <img src="${item.image}" alt="${item.name}" />
      <figcaption>
        <p>${item.name}</p>
        <h1>${item.price}</h1>

        <button class="buy_btn" onclick="addToCart(${item.id})">
             Buy Now
        </button>
      </figcaption>
    </figure>
  `
  return itemLi
}

export function createItems(items) {
  const itemUl = document.createElement('ul')
  itemUl.innerHTML = `<ul class="items">
          ${items?.map((item) => createSingleItem(item).outerHTML).join('')}
        </ul>`
  return itemUl
}

function createItemsSection() {
  const itemsSection = document.createElement('section')
  itemsSection.innerHTML = `<section class="items_section">
        <ul class="nav_menu">
          <li>New Arrival</li>
          <li>Best Seller</li>
          <li>Featured Products</li>
        </ul>
        ${createItems(products).outerHTML}
      </section>`
  return itemsSection
}

function onRefreshProducts() {
  const itemsSection = createItemsSection()
  const foundSection = document.getElementById('items')
  if (foundSection) {
    foundSection.appendChild(itemsSection)
  }
}
document.addEventListener('DOMContentLoaded', () => {
  onRefreshProducts()
})
