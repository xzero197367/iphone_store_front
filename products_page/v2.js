// #region Sample product data
const products = [
    {
        id: 1,
        name: "Apple iPhone 14 Pro 512GB Gold",
       
        price: 1437,
        brand: "Apple",
        memory: "512GB",
        // image: "data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iMjAwIiBoZWlnaHQ9IjIwMCIgdmlld0JveD0iMCAwIDIwMCAyMDAiIGZpbGw9Im5vbmUiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyI+CjxyZWN0IHdpZHRoPSIyMDAiIGhlaWdodD0iMjAwIiBmaWxsPSIjRjVGNUY1Ii8+CjxyZWN0IHg9IjQwIiB5PSIzMCIgd2lkdGg9IjEyMCIgaGVpZ2h0PSIxNDAiIHJ4PSIyMCIgZmlsbD0iI0ZGRiIvPgo8Y2lyY2xlIGN4PSI3NSIgY3k9IjUwIiByPSI4IiBmaWxsPSIjMDAwIi8+Cjwvc3ZnPgo="
        image : "./phones/phone1.jpg"
    },
    {
        id: 2,
        name: "Apple iPhone 11 128GB White",

        price: 510,
        brand: "Apple",
        memory: "128GB",
      
      // image: "data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iMjAwIiBoZWlnaHQ9IjIwMCIgdmlld0JveD0iMCAwIDIwMCAyMDAiIGZpbGw9Im5vbmUiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyI+CjxyZWN0IHdpZHRoPSIyMDAiIGhlaWdodD0iMjAwIiBmaWxsPSIjRjVGNUY1Ii8+CjxyZWN0IHg9IjQwIiB5PSIzMCIgd2lkdGg9IjEyMCIgaGVpZ2h0PSIxNDAiIHJ4PSIyMCIgZmlsbD0iI0ZGRiIvPgo8Y2lyY2xlIGN4PSI3NSIgY3k9IjUwIiByPSI4IiBmaWxsPSIjMDAwIi8+Cjwvc3ZnPgo="
         image : "./phones/phone1.jpg"
    },
    {
        id: 3,
        name: "Apple iPhone 11 128GB White",

        price: 550,
        brand: "Apple",
        memory: "128GB",
         image : "./phones/phone1.jpg"
        // image: "data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iMjAwIiBoZWlnaHQ9IjIwMCIgdmlld0JveD0iMCAwIDIwMCAyMDAiIGZpbGw9Im5vbmUiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyI+CjxyZWN0IHdpZHRoPSIyMDAiIGhlaWdodD0iMjAwIiBmaWxsPSIjRjVGNUY1Ii8+CjxyZWN0IHg9IjQwIiB5PSIzMCIgd2lkdGg9IjEyMCIgaGVpZ2h0PSIxNDAiIHJ4PSIyMCIgZmlsbD0iI0ZGRiIvPgo8Y2lyY2xlIGN4PSI3NSIgY3k9IjUwIiByPSI4IiBmaWxsPSIjMDAwIi8+Cjwvc3ZnPgo="

    },
    {
        id: 4,
        name: "Apple iPhone 14 Pro 1TB Gold",
       
        price: 1499,
        brand: "Apple",
        memory: "1TB",
         image : "./phones/phone1.jpg"
    //  image: "data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iMjAwIiBoZWlnaHQ9IjIwMCIgdmlld0JveD0iMCAwIDIwMCAyMDAiIGZpbGw9Im5vbmUiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyI+CjxyZWN0IHdpZHRoPSIyMDAiIGhlaWdodD0iMjAwIiBmaWxsPSIjRjVGNUY1Ii8+CjxyZWN0IHg9IjQwIiB5PSIzMCIgd2lkdGg9IjEyMCIgaGVpZ2h0PSIxNDAiIHJ4PSIyMCIgZmlsbD0iI0ZGRiIvPgo8Y2lyY2xlIGN4PSI3NSIgY3k9IjUwIiByPSI4IiBmaWxsPSIjMDAwIi8+Cjwvc3ZnPgo="

    },
    {
        id: 5,
        name: "Apple iPhone 14 Pro 1TB Gold",

        price: 1399,
        brand: "Apple",
        memory: "1TB",
         image : "./phones/phone1.jpg"
        //   image: "data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iMjAwIiBoZWlnaHQ9IjIwMCIgdmlld0JveD0iMCAwIDIwMCAyMDAiIGZpbGw9Im5vbmUiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyI+CjxyZWN0IHdpZHRoPSIyMDAiIGhlaWdodD0iMjAwIiBmaWxsPSIjRjVGNUY1Ii8+CjxyZWN0IHg9IjQwIiB5PSIzMCIgd2lkdGg9IjEyMCIgaGVpZ2h0PSIxNDAiIHJ4PSIyMCIgZmlsbD0iI0ZGRiIvPgo8Y2lyY2xlIGN4PSI3NSIgY3k9IjUwIiByPSI4IiBmaWxsPSIjMDAwIi8+Cjwvc3ZnPgo="

    },
    {
        id: 6,
        name: "Apple iPhone 14 Pro 128GB Deep Purple",
        price: 1600,
        brand: "Apple",
        memory: "128GB",
         image : "./phones/phone1.jpg"
        //    image: "data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iMjAwIiBoZWlnaHQ9IjIwMCIgdmlld0JveD0iMCAwIDIwMCAyMDAiIGZpbGw9Im5vbmUiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyI+CjxyZWN0IHdpZHRoPSIyMDAiIGhlaWdodD0iMjAwIiBmaWxsPSIjRjVGNUY1Ii8+CjxyZWN0IHg9IjQwIiB5PSIzMCIgd2lkdGg9IjEyMCIgaGVpZ2h0PSIxNDAiIHJ4PSIyMCIgZmlsbD0iI0ZGRiIvPgo8Y2lyY2xlIGN4PSI3NSIgY3k9IjUwIiByPSI4IiBmaWxsPSIjMDAwIi8+Cjwvc3ZnPgo="

    },
    {
        id: 7,
        name: "Apple iPhone 13 mini 128GB Pink",

        price: 850,
        brand: "Apple",
        memory: "128GB",
         image : "./phones/phone1.jpg"
        //    image: "data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iMjAwIiBoZWlnaHQ9IjIwMCIgdmlld0JveD0iMCAwIDIwMCAyMDAiIGZpbGw9Im5vbmUiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyI+CjxyZWN0IHdpZHRoPSIyMDAiIGhlaWdodD0iMjAwIiBmaWxsPSIjRjVGNUY1Ii8+CjxyZWN0IHg9IjQwIiB5PSIzMCIgd2lkdGg9IjEyMCIgaGVpZ2h0PSIxNDAiIHJ4PSIyMCIgZmlsbD0iI0ZGRiIvPgo8Y2lyY2xlIGN4PSI3NSIgY3k9IjUwIiByPSI4IiBmaWxsPSIjMDAwIi8+Cjwvc3ZnPgo="

    },
    {
        id: 8,
        name: "Apple iPhone 14 Pro 256GB Space Black",
        
        price: 1399,
        brand: "Apple",
        memory: "256GB",
         image : "./phones/phone1.jpg"
        //    image: "data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iMjAwIiBoZWlnaHQ9IjIwMCIgdmlld0JveD0iMCAwIDIwMCAyMDAiIGZpbGw9Im5vbmUiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyI+CjxyZWN0IHdpZHRoPSIyMDAiIGhlaWdodD0iMjAwIiBmaWxsPSIjRjVGNUY1Ii8+CjxyZWN0IHg9IjQwIiB5PSIzMCIgd2lkdGg9IjEyMCIgaGVpZ2h0PSIxNDAiIHJ4PSIyMCIgZmlsbD0iI0ZGRiIvPgo8Y2lyY2xlIGN4PSI3NSIgY3k9IjUwIiByPSI4IiBmaWxsPSIjMDAwIi8+Cjwvc3ZnPgo="

    },
    {
        id: 9,
        name: "Apple iPhone 14 Pro 256GB Silver",
        
        price: 1399,
        brand: "Apple",
        memory: "256GB",
         image : "./phones/phone1.jpg"
        //    image: "data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iMjAwIiBoZWlnaHQ9IjIwMCIgdmlld0JveD0iMCAwIDIwMCAyMDAiIGZpbGw9Im5vbmUiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyI+CjxyZWN0IHdpZHRoPSIyMDAiIGhlaWdodD0iMjAwIiBmaWxsPSIjRjVGNUY1Ii8+CjxyZWN0IHg9IjQwIiB5PSIzMCIgd2lkdGg9IjEyMCIgaGVpZ2h0PSIxNDAiIHJ4PSIyMCIgZmlsbD0iI0ZGRiIvPgo8Y2lyY2xlIGN4PSI3NSIgY3k9IjUwIiByPSI4IiBmaWxsPSIjMDAwIi8+Cjwvc3ZnPgo="

    },
    {
        id: 10,
        name: "Samsung Galaxy S23 256GB Black",
        price: 899,
        brand: "Samsung",
        memory: "256GB",
        image : "./phones/phone1.jpg"
        //   image: "data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iMjAwIiBoZWlnaHQ9IjIwMCIgdmlld0JveD0iMCAwIDIwMCAyMDAiIGZpbGw9Im5vbmUiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyI+CjxyZWN0IHdpZHRoPSIyMDAiIGhlaWdodD0iMjAwIiBmaWxsPSIjRjVGNUY1Ii8+CjxyZWN0IHg9IjQwIiB5PSIzMCIgd2lkdGg9IjEyMCIgaGVpZ2h0PSIxNDAiIHJ4PSIyMCIgZmlsbD0iI0ZGRiIvPgo8Y2lyY2xlIGN4PSI3NSIgY3k9IjUwIiByPSI4IiBmaWxsPSIjMDAwIi8+Cjwvc3ZnPgo="

    },
    {
        id: 11,
        name: "Samsung Galaxy S23 Ultra 512GB Green",
        price: 1299,
        brand: "Samsung",
        memory: "512GB",
         image : "./phones/phone1.jpg"
        //   image: "data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iMjAwIiBoZWlnaHQ9IjIwMCIgdmlld0JveD0iMCAwIDIwMCAyMDAiIGZpbGw9Im5vbmUiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyI+CjxyZWN0IHdpZHRoPSIyMDAiIGhlaWdodD0iMjAwIiBmaWxsPSIjRjVGNUY1Ii8+CjxyZWN0IHg9IjQwIiB5PSIzMCIgd2lkdGg9IjEyMCIgaGVpZ2h0PSIxNDAiIHJ4PSIyMCIgZmlsbD0iI0ZGRiIvPgo8Y2lyY2xlIGN4PSI3NSIgY3k9IjUwIiByPSI4IiBmaWxsPSIjMDAwIi8+Cjwvc3ZnPgo="

    },
    {
        id: 12,
        name: "Xiaomi Redmi Note 12 Pro 256GB Blue",
        price: 349,
        brand: "Xiaomi",
        memory: "256GB",
         image : "./phones/phone1.jpg"
        //    image: "data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iMjAwIiBoZWlnaHQ9IjIwMCIgdmlld0JveD0iMCAwIDIwMCAyMDAiIGZpbGw9Im5vbmUiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyI+CjxyZWN0IHdpZHRoPSIyMDAiIGhlaWdodD0iMjAwIiBmaWxsPSIjRjVGNUY1Ii8+CjxyZWN0IHg9IjQwIiB5PSIzMCIgd2lkdGg9IjEyMCIgaGVpZ2h0PSIxNDAiIHJ4PSIyMCIgZmlsbD0iI0ZGRiIvPgo8Y2lyY2xlIGN4PSI3NSIgY3k9IjUwIiByPSI4IiBmaWxsPSIjMDAwIi8+Cjwvc3ZnPgo="

    }
];

// #endregion

// #region vars
let filteredProducts = [...products]; //  spread operator
let currentPage = 1;
const itemsPerPage = 9;
let favorites = []; // why this control all products 
// #endregion

// #region Initialize the application
document.addEventListener('DOMContentLoaded', function() {
    initializePriceSlider();
    renderProducts();
    updateProductCount();
    
    // Add event listeners for price inputs
    document.getElementById('priceFrom').addEventListener('input', applyPriceFilter);
    document.getElementById('priceTo').addEventListener('input', applyPriceFilter);
    
    // Add event listener for sort dropdown
    document.querySelector('.sort-dropdown').addEventListener('change', function() {
        sortProducts(this.value);
    });
});

// #endregion

// #region Price slider functionality
function initializePriceSlider() {
    const priceMin = document.getElementById('priceMin');
    const priceMax = document.getElementById('priceMax');
    const priceFromInput = document.getElementById('priceFrom');
    const priceToInput = document.getElementById('priceTo');
    const priceRangeFill = document.getElementById('priceRangeFill');

    function updatePriceSlider() {
        const minVal = parseInt(priceMin.value);
        const maxVal = parseInt(priceMax.value);
        
        // Prevent overlap
        if (maxVal - minVal < 50) {
            if (event.target === priceMin) {
                priceMin.value = maxVal - 50;
            } else {
                priceMax.value = minVal + 50;
            }
            return;
        }
        
        // Update input fields
        priceFromInput.value = priceMin.value;
        priceToInput.value = priceMax.value;
        
        // Update visual slider fill
        const minPercent = ((priceMin.value - priceMin.min) / (priceMin.max - priceMin.min)) * 100;
        const maxPercent = ((priceMax.value - priceMin.min) / (priceMax.max - priceMin.min)) * 100;
        
        priceRangeFill.style.left = minPercent + '%';
        priceRangeFill.style.width = (maxPercent - minPercent) + '%';
        
        // Apply filter
        applyPriceFilter();
    }

    function updateFromInputs() {
        const minVal = parseInt(priceFromInput.value) || 0;
        const maxVal = parseInt(priceToInput.value) || 2000;
        
        if (minVal >= maxVal || minVal < 0 || maxVal > 2000) return;
        
        priceMin.value = minVal;
        priceMax.value = maxVal;
        updatePriceSlider();
    }

    // Event listeners
    priceMin.addEventListener('input', updatePriceSlider);
    priceMax.addEventListener('input', updatePriceSlider);
    priceFromInput.addEventListener('change', updateFromInputs);
    priceToInput.addEventListener('change', updateFromInputs);
    
    // Initialize with default values
    updatePriceSlider();
}

// #endregion

// #region Apply price filter
function applyPriceFilter() {
    const priceMin = parseInt(document.getElementById('priceFrom').value) || 0;
    const priceMax = parseInt(document.getElementById('priceTo').value) || 2000;
    
    filteredProducts = products.filter(product => {
        return product.price >= priceMin && product.price <= priceMax;
    });

    currentPage = 1;
    renderProducts();
    updateProductCount();
}

// #endregion


// #region Render products
function renderProducts() {
    const grid = document.getElementById('productsGrid');
    
    if (filteredProducts.length === 0) {
        grid.innerHTML = '<div class="no-results">No products found in this price range.</div>';
        return;
    }
    
    const startIndex = (currentPage - 1) * itemsPerPage;
    const endIndex = startIndex + itemsPerPage;
    const pageProducts = filteredProducts.slice(startIndex, endIndex);
    
    grid.innerHTML = pageProducts.map(product => `
        <div class="product-card" data-id="${product.id}">
            <img src="${product.image}" alt="${product.name}" class="product-image">
            <h3 class="product-title">${product.name}</h3>
            <div class="product-price">$${product.price}</div>
            <button class="buy-btn" onclick="buyProduct(${product.id})">Buy Now</button>
        </div>
    `).join('');
    
    updatePagination();
}

// #endregion

// #region Update product count
function updateProductCount() {
    const countElement = document.querySelector('.selected-count strong');
    if (countElement) {
        countElement.textContent = filteredProducts.length;
    }
}

// #endregion


// #region Buy product
function buyProduct(productId) {
    const product = products.find(p => p.id === productId);
    alert(`Added ${product.name} to cart!`);
}

// #endregion

// #region Toggle filter sections
function toggleFilter(button) {
    const filterContent = button.closest('.filter-header').nextElementSibling;
    const isCollapsed = filterContent.style.display === 'none';
    
    filterContent.style.display = isCollapsed ? 'block' : 'none';
    button.textContent = isCollapsed ? '▲' : '▼';
}
// #endregion

// #region Brand filter search (keeping for compatibility but not used in filtering)
function filterBrands(searchTerm) {
    const brandItems = document.querySelectorAll('.brand-item');
    brandItems.forEach(item => {
        const brandName = item.querySelector('.brand-name').textContent.toLowerCase();
        if (brandName.includes(searchTerm.toLowerCase())) {
            item.style.display = 'flex';
        } else {
            item.style.display = 'none';
        }
    });
}

// #endregion

// #region Pagination functions
function updatePagination() {
    const totalPages = Math.ceil(filteredProducts.length / itemsPerPage);
    const prevBtn = document.getElementById('prevBtn');
    const nextBtn = document.getElementById('nextBtn');
    
    if (prevBtn) prevBtn.disabled = currentPage === 1;
    if (nextBtn) nextBtn.disabled = currentPage === totalPages || totalPages === 0;
    
    // Update active page button
    document.querySelectorAll('.pagination button').forEach((btn, index) => {
        if (btn.textContent && !isNaN(btn.textContent)) {
            btn.classList.toggle('active', parseInt(btn.textContent) === currentPage);
        }
    });
}

function changePage(direction) {
    const totalPages = Math.ceil(filteredProducts.length / itemsPerPage);
    
    if (direction === 'prev' && currentPage > 1) {
        currentPage--;
    } else if (direction === 'next' && currentPage < totalPages) {
        currentPage++;
    } else if (typeof direction === 'number') {
        currentPage = direction;
    }
    
    renderProducts();
    window.scrollTo({ top: 0, behavior: 'smooth' });
}

// #endregion



