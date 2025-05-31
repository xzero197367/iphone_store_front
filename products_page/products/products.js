import { createSingleItem, items, createItems } from '../../shared_compos/items/items.js'

document.addEventListener('DOMContentLoaded', () => {
    const productsSection = document.createElement('section')
    productsSection.innerHTML = `
        <section class="items_section">
            <h2>Products</h2>
            ${createItems(items).outerHTML}
        </section>
    `
    const foundSection = document.getElementById('products')
    if (foundSection) {
        foundSection.appendChild(productsSection)
    }
})