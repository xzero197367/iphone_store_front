<<<<<<< HEAD
import { products } from "../../data/products.js";
import { cartItems, onItemClicked } from "../../data/cart.js";

console.log(cartItems);

window.addToCart = function (productId) {
  // alert(productId)
  cartItems.push(productId);
  onRefreshProducts();
};

function getItemText(item) {}
=======
import { products } from '../../data/products.js'
import { getCart } from '../../data/cart.js'

window.addToCart = function (productId) {
  // alert(productId)
  cartItems.push(productId)
  onRefreshProducts()
}
>>>>>>> b52595d63d0a8c750f4f88140dc27c1d39cdb013
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
<<<<<<< HEAD
        <button type="button" class="buy_btn">
          ${cartItems.includes(item.id) ? "View Cart" : "Buy Now"}
        </button>
      </figcaption>
    </figure>
  `;

  const buyBtn = itemLi.querySelector(".buy_btn");

  buyBtn.addEventListener("click", () => {
    onItemClicked(item.id); // Call function normally
  });

  return itemLi;
}

export function createItems(items) {
  const itemUl = document.createElement("ul");
  itemUl.className = "items";

  items.forEach((item) => {
    const itemElement = createSingleItem(item);
    itemUl.appendChild(itemElement);
  });

  return itemUl;
=======

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
>>>>>>> b52595d63d0a8c750f4f88140dc27c1d39cdb013
}
function createItemsSection() {
<<<<<<< HEAD
  const itemsSection = document.createElement("section");
  itemsSection.className = "items_section";

  const navMenu = document.createElement("ul");
  navMenu.className = "nav_menu";
  navMenu.innerHTML = `
    <li>New Arrival</li>
    <li>Best Seller</li>
    <li>Featured Products</li>
  `;

  const itemsList = createItems(products); // real DOM element

  itemsSection.appendChild(navMenu);
  itemsSection.appendChild(itemsList);

  return itemsSection;
=======
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
>>>>>>> b52595d63d0a8c750f4f88140dc27c1d39cdb013
}


function onRefreshProducts() {
  const itemsSection = createItemsSection()
  const foundSection = document.getElementById('items')
  if (foundSection) {
    foundSection.appendChild(itemsSection)
  }
}
<<<<<<< HEAD

document.addEventListener("DOMContentLoaded", () => {
  onRefreshProducts();
});
=======
document.addEventListener('DOMContentLoaded', () => {
  onRefreshProducts()
})
>>>>>>> b52595d63d0a8c750f4f88140dc27c1d39cdb013
