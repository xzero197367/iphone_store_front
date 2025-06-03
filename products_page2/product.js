import { addToCart, getCart, removeFromCart } from '../data/cart.js'
import { products } from '../data/products.js'
let filteredProducts = [...products]
let favorites = new Set()
let cardItems = getCart()

// Initialize page
document.addEventListener('DOMContentLoaded', function () {
  renderProducts()
  setupEventListeners()
})

function setupEventListeners() {
  // Price filter
  document.getElementById('minPrice').addEventListener('input', applyFilters)
  document.getElementById('maxPrice').addEventListener('input', applyFilters)
  document
    .getElementById('priceRange')
    .addEventListener('input', updatePriceRange)

  // Brand filter
  document.querySelectorAll('.brand-checkbox').forEach((checkbox) => {
    checkbox.addEventListener('change', applyFilters)
  })

  // Sort
  document.getElementById('sortSelect').addEventListener('change', applySort)

  // Memory search
  document
    .getElementById('memorySearch')
    .addEventListener('input', filterMemoryOptions)
}

function toggleFilter(filterId) {
  const content = document.getElementById(filterId + '-content')
  const arrow = document.getElementById(filterId + '-arrow')

  content.classList.toggle('collapsed')
  arrow.classList.toggle('expanded')
}

function updatePriceRange() {
  const range = document.getElementById('priceRange')
  const maxPrice = document.getElementById('maxPrice')
  maxPrice.value = range.value
  applyFilters()
}

function applyFilters() {
  const minPrice = parseInt(document.getElementById('minPrice').value) || 0
  const maxPrice = parseInt(document.getElementById('maxPrice').value) || 10000

  const selectedBrands = Array.from(
    document.querySelectorAll('.brand-checkbox:checked')
  ).map((cb) => cb.value)

  const selectedMemory = Array.from(
    document.querySelectorAll('#memoryList .brand-checkbox:checked')
  ).map((cb) => cb.value)

  filteredProducts = products.filter((product) => {
    const priceMatch = product.price >= minPrice && product.price <= maxPrice
    const brandMatch =
      selectedBrands.length === 0 || selectedBrands.includes(product.brand)
    const memoryMatch =
      selectedMemory.length === 0 || selectedMemory.includes(product.memory)

    return priceMatch && brandMatch && memoryMatch
  })

  applySort()
}

function applySort() {
  const sortValue = document.getElementById('sortSelect').value

  switch (sortValue) {
    case 'price-low':
      filteredProducts.sort((a, b) => a.price - b.price)
      break
    case 'price-high':
      filteredProducts.sort((a, b) => b.price - a.price)
      break
    case 'name':
      filteredProducts.sort((a, b) => a.name.localeCompare(b.name))
      break
    case 'rating':
    default:
      filteredProducts.sort((a, b) => b.rating - a.rating)
      break
  }

  renderProducts()
}

function renderProducts() {
  const grid = document.getElementById('productsGrid')
  const productCount = document.getElementById('productCount')

  productCount.textContent = filteredProducts.length

  if (filteredProducts.length === 0) {
    grid.innerHTML = `
                    <div class="no-results" style="grid-column: 1 / -1;">
                        <div class="no-results-icon">📱</div>
                        <h3>No products found</h3>
                        <p>Try adjusting your filters to see more results</p>
                    </div>
                `
    return
  }

  grid.innerHTML = filteredProducts
    .map(
      (product) => `
                <div class="product-card">
                    <button class="favorite-btn ${
                      favorites.has(product.id) ? 'active' : ''
                    }" data-id="${product.id}">♡</button>
                    <img src="${product.image}" alt="${product.name}" >
                    <div class="product-name">${product.name}</div>
                    <div class="product-price">$${product.price}</div>
                    <button class="buy-btn" data-id="${product.id}">${
        cardItems.find((item) => item.id === product.id)
          ? 'View Cart'
          : 'Buy Now'
      }</button>
                </div>
            `
    )
    .join('')

  // Add event listeners after rendering
  const favoriteBtns = grid.querySelectorAll('.favorite-btn')
  favoriteBtns.forEach((btn) => {
    btn.addEventListener('click', () => {
      toggleFavorite(parseInt(btn.dataset.id), btn)
    })
  })

  const buyBtns = grid.querySelectorAll('.buy-btn')
  buyBtns.forEach((btn) => {
    btn.addEventListener('click', () => {
      buyProduct(parseInt(btn.dataset.id), btn)
    })
  })
}

function toggleFavorite(productId, btn) {
  if (favorites.has(productId)) {
    favorites.delete(productId)
  } else {
    favorites.add(productId)
  }

  btn.classList.toggle('active', favorites.has(productId))
}

function buyProduct(productId, btn) {
  const product = products.find((p) => p.id === productId)
  const item = cardItems.find((item) => item.id === product.id)
  console.log({ item })
  if (item !== undefined) {
    removeFromCart(product.id)
    btn.innerText = 'Buy Now'
    btn.style.backgroundColor = '#333'
  } else {
    addToCart(product)
    btn.innerText = 'View Cart'
    btn.style.backgroundColor = 'green'
  }
}

function filterMemoryOptions() {
  const searchTerm = document.getElementById('memorySearch').value.toLowerCase()
  const memoryItems = document.querySelectorAll('.memory-item')

  memoryItems.forEach((item) => {
    const label = item.querySelector('.brand-label').textContent.toLowerCase()
    item.style.display = label.includes(searchTerm) ? 'flex' : 'none'
  })
}

// Initialize filters
applyFilters()
