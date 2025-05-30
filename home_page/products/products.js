
function createProductSection(){
    const productSection = document.createElement('section');
    productSection.innerHTML = `

         <section class="products_section">
        <section class="left">
          <figure>
            <img src="../assets/PlayStation.png" alt="" />
            <figcaption>
              <h1>Playstation 5</h1>
              <p>
                Incredibly  powerful CPUs, GPUs, and an SSD with integrated I/O will redefine your PlayStation experience.    
              </p>
            </figcaption>
          </figure>

          <div class="subs">
            <figure>
              <img src="../assets/head_phone.png" alt="" />
              <figcaption>
                <h1>Apple AirPods <span>Max</span></h1>
                <p>
                  Computaional audio. Listen, it's powerful
                </p>
              </figcaption>
            </figure>

            <figure>
              <img src="../assets/apply_vision.png" alt="" />
              <figcaption>
                <h1>Apple Vision <span>Pro</span></h1>
                <p>
                  An immersive way to experience entertainment
                </p>
              </figcaption>
            </figure>
          </div>
        </section>

        <section class="right">
          <figure>
            
            <figcaption>
              <h1>Macbook <span>Air</span></h1>
              <p>
                The new 15-inch MacBook Air makes room for more of what you love with a spacious Liquid Retina display.  
              </p>
              <button>Shop Now</button>
            </figcaption>

            <img src="../assets/Screen.png" alt="" />
          </figure>
        </section>
      </section>
    
    `
    return productSection;
}

document.addEventListener("DOMContentLoaded", function(){
    const productSection = createProductSection();
    document.getElementById('products').appendChild(productSection);
})