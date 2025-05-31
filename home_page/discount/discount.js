
const discountItems = [
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
]

function createDiscountSection() {
  const discountSection = document.createElement("section");
  discountSection.className = "discount_section";
  discountSection.innerHTML = `
     <h1>Discount up to -50%</h1>
        <section class="discounted_products">
            ${createItems(discountItems).outerHTML}
        </section>
    `;

  return discountSection;
}


document.addEventListener("DOMContentLoaded", () => {
    const discount = document.getElementById("discount");
    discount.appendChild(createDiscountSection());
})