import { products } from '../../data/products.js'
import { createSingleItem,  createItems } from '../../shared_compos/items/items.js'

document.addEventListener('DOMContentLoaded', () => {
  const productsSection = document.createElement('section');
  productsSection.className = "items_section";

  const title = document.createElement("h2");
  title.textContent = "Products";

  const itemsList = createItems(products); // real DOM with working event listeners

  productsSection.appendChild(title);
  productsSection.appendChild(itemsList);

  const foundSection = document.getElementById('products');
  if (foundSection) {
    foundSection.innerHTML = ""; // Clear existing content
    foundSection.appendChild(productsSection);
  }
});
