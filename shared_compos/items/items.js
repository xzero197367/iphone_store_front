const items = [
  {
    name: 'iPhone 14 Pro Max 128GB Deep Blue',
    price: '$900',
    image: '../assets/products/iphone.png',
  },
  {
    name: 'Black Magic Pocket Cinema Camera 6k',
    price: '$2535',
    image: '../assets/products/camera.png',
  },
  {
    name: 'Apple Watch Series 9 GPS 41mm Starlight Aluminium Case',
    price: '$399',
    image: '../assets/products/watch.png',
  },
  {
    name: 'AirPods Max Silver',
    price: '$549',
    image: '../assets/products/head_phone.png',
  },
  {
    name: 'Samsung Galaxy6 Classic 47mm Black',
    price: '$369',
    image: '../assets/products/black_watch.png',
  },
  {
    name: 'Samsung Z Fold5 Unlocked | 256GB | Phantom Black',
    price: '$1799',
    image: '../assets/products/phone.png',
  },
  {
    name: 'Galaxy Buds FE Graphite',
    price: '$99.99',
    image: '../assets/products/air_bods.png',
  },
  {
    name: 'Apple iPad 9 10.2 64GB WI FI Silver (MK2L3) 2021',
    price: '$398',
    image: '../assets/products/ibad.png',
  },
]

function createSingleItem(item) {
  const itemLi = document.createElement('li')
  itemLi.innerHTML = `<figure>
    <button class="favorite_btn">
      <i class="fa-solid fa-heart"></i>
    </button>
    <img src="${item.image}" alt="" />
    <figcaption>
      <p>${item.name}</p>
      <h1>${item.price}</h1>
      <button class="buy_btn">Buy Now</button>
    </figcaption>
  </figure>`
  return itemLi
}

function createItems(items) {
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
        ${createItems(items).outerHTML}
      </section>`
  return itemsSection
}

document.addEventListener('DOMContentLoaded', () => {
  const itemsSection = createItemsSection()
  const foundSection = document.getElementById('items')
  if(foundSection){
    foundSection.appendChild(itemsSection)
  }
})
