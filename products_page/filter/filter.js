import { products } from '../../data/products.js';
import {  createItems } from '../../shared_compos/items/items.js'


function filterProducts(conditionFun = ()=>true){
    let filteredItems = products.filter(conditionFun)
    const productsSection = document.createElement('section')
    productsSection.innerHTML = `
        <section class="items_section">
            <h2>Products</h2>
            ${createItems(filteredItems).outerHTML}
        </section>
    `;
    const foundSection = document.getElementById('products')
    if (foundSection) {
        foundSection.innerHTML = productsSection.outerHTML;
    }
}

const searchInput = document.getElementById("filter_byname_input")
const minPriceInput = document.getElementById("price_min");
const maxPriceInput = document.getElementById("price_max")
searchInput.addEventListener("input", () => {
    filterProducts((item)=>item.name.toLowerCase().includes(searchInput.value.toLowerCase()))
})
minPriceInput.addEventListener("input", () => {
    filterProducts((item)=>minPriceInput.value ? +item.price >= +minPriceInput.value : true)
})
maxPriceInput.addEventListener("input", () => {
    filterProducts((item)=>maxPriceInput.value ? +item.price <= +maxPriceInput.value : true)
})