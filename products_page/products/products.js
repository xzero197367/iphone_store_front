import { products } from '../../data/products.js'
import { createSingleItem,  createItems } from '../../shared_compos/items/items.js'

document.addEventListener('DOMContentLoaded', () => {
    const productsSection = document.createElement('section')
    productsSection.innerHTML = `
        <section class="items_section">
            <h2>Products</h2>
            ${createItems(products).outerHTML}
        </section>
    `
    const foundSection = document.getElementById('products')
    if (foundSection) {
        foundSection.innerHTML = productsSection.outerHTML;
    }
})

