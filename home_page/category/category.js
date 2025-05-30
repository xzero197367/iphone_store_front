
function createCategorySection(){
    const categorySection = document.createElement('section');
    categorySection.innerHTML = `

    <section class="category_section">
        <h1>Browse By Category</h1>

        <ul>
          <li>
            <img src="../assets/category/Phones.png" alt="" />
            <h1>Phones</h1>
          </li>

          <li>
            <img src="../assets/category/Computers.png" alt="" />
            <h1>Computers</h1>
          </li>

          <li>
            <img src="../assets/category/Smart Watches.png" alt="" />
            <h1>Smart Watches</h1>
          </li>

          <li>
            <img src="../assets/category/Cameras.png" alt="" />
            <h1>Cameras</h1>
          </li>

          <li>
            <img src="../assets/category/Headphones.png" alt="" />
            <h1>Headphones</h1>
          </li>

          <li>
            <img src="../assets/category/Gaming.png" alt="" />
            <h1>Gaming</h1>
          </li>
        </ul>
      </section>

    `
    return categorySection;
}

document.addEventListener("DOMContentLoaded", function(){
    const categorySection = createCategorySection();
    document.getElementById('category').appendChild(categorySection);
})
