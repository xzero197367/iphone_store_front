

function createMainItems(){
    const main_items_section = document.createElement("section");
    main_items_section.className = "main_items_section";

    main_items_section.innerHTML =`
        <figure>
          <img src="../assets/main_items/airbod1.png" class="float_rotate_image"/>
          <img src="../assets/main_items/watch1.png"/>
          <figcaption>
            <h1>Popular Products</h1>
            <p>iPad combines a magnificient 10.2-inch Retina display, incredible performance, multitasking and ease of use.</p>
            <button>Shop Now</button>
          </figcaption>
        </figure>
        <figure>
          <img src="../assets/main_items/ipad1.png"/>
          <figcaption>
            <h1>Popular Products</h1>
            <p>iPad combines a magnificient 10.2-inch Retina display, incredible performance, multitasking and ease of use.</p>
            <button>Shop Now</button>
          </figcaption>
        </figure>
        <figure>
          <img src="../assets/main_items/fold1.png"/>
          <figcaption>
            <h1>Popular Products</h1>
            <p>iPad combines a magnificient 10.2-inch Retina display, incredible performance, multitasking and ease of use.</p>
            <button>Shop Now</button>
          </figcaption>
        </figure>
        <figure>
          <img src="../assets/main_items/mac1.png"/>
          <figcaption>
            <h1>Popular Products</h1>
            <p>iPad combines a magnificient 10.2-inch Retina display, incredible performance, multitasking and ease of use.</p>
            <button>Shop Now</button>
          </figcaption>
        </figure>
    `
    return main_items_section;
}

document.addEventListener("DOMContentLoaded", function(){
    const main_items_section = createMainItems();
    document.getElementById("main_items").appendChild(main_items_section);
})