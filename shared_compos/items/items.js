import { products } from '../../data/products.js'



function getItemText(item) {}

export function createSingleItem(item) {
  const itemLi = document.createElement('li')

  itemLi.innerHTML = `
    <figure>
      <button class="favorite_btn">
        <i class="fa-solid fa-heart"></i>
      </button>
      <img src="${item.image}" alt="${item.name}" />
      <figcaption>
        <p>${item.name}</p>
        <h1>${item.price}</h1>
        <button type="button" class="buy_btn" onclick="window.open('../product_page/product.html', '_blank')">
          ${ 'Buy Now'}
        </button>
      </figcaption>
    </figure>
  `


  return itemLi
}

export function createItems(items) {
  const itemUl = document.createElement('ul')
  itemUl.className = 'items'

  items.forEach((item) => {
    const itemElement = createSingleItem(item)
    itemUl.appendChild(itemElement)
  })

  return itemUl
}
function createItemsSection() {
  const itemsSection = document.createElement('section')
  itemsSection.className = 'items_section'

  const navMenu = document.createElement('ul')
  navMenu.className = 'nav_menu'
  navMenu.innerHTML = `
    <li>New Arrival</li>
    <li>Best Seller</li>
    <li>Featured Products</li>
  `

  const itemsList = createItems(products) // real DOM element

  itemsSection.appendChild(navMenu)
  itemsSection.appendChild(itemsList)

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
