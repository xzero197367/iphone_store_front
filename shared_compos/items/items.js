import { products } from "../../data/products.js";
import { cartItems, onItemClicked } from "../../data/cart.js";

console.log(cartItems);

window.addToCart = function (productId) {
  // alert(productId)
  cartItems.push(productId);
  onRefreshProducts();
};

function getItemText(item) {}
export function createSingleItem(item) {
  const itemLi = document.createElement("li");

  itemLi.innerHTML = `
    <figure>
      <button class="favorite_btn">
        <i class="fa-solid fa-heart"></i>
      </button>
      <img src="${item.image}" alt="${item.name}" />
      <figcaption>
        <p>${item.name}</p>
        <h1>${item.price}</h1>
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
}
function createItemsSection() {
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
}


function onRefreshProducts() {
  const itemsSection = createItemsSection();
  const foundSection = document.getElementById("items");
  if (foundSection) {
    foundSection.appendChild(itemsSection);
  }
}

document.addEventListener("DOMContentLoaded", () => {
  onRefreshProducts();
});
