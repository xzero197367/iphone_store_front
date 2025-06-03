function createNav() {
  const nav = document.createElement('nav')
  //import styles from style.css and append it to head

  const style = document.createElement('link')
  style.rel = 'stylesheet'
  style.href = '../shared_compos/nav/nav.css'
  document.head.appendChild(style)

  nav.innerHTML = `
       
    <nav>
      <section class="top">
        <img src="../assets/logo.png" alt="" onclick="window.location.href = '../../index.html'"/>
        <input type="text" placeholder="Search..." />
        <ul class="nav-links">
          <li>
            <a href="../../home_page/index.html">Home</a>
          </li>
          <li>
            <a href="../../about_us_page/about.html">About</a>
          </li>
          <li>
            <a href="../../contact_page/index.html">Contact Us</a>
          </li>
          <li>
            <a href="../../services_page/index.html">Blog</a>
          </li>
        </ul>

        <ul class="nav-icons">
          <li>
            <a href="./login_page/index.html">
              <i class="fa-solid fa-heart"></i>
            </a>
          </li>
          <li>
            <a href="../cart_page2/cart.html">
              <i class="fa-solid fa-cart-shopping"></i>
            </a>
          </li>
          <li>
            <a href="./profile_page/index.html"
              ><i class="fa-solid fa-user"></i
            ></a>
          </li>
           <li>
            <a href="../login_page/index.html"
              ><i class="fa-solid fa-right-to-bracket"></i
            ></a>
          </li>
        </ul>
      </section>
      <section class="bottom">
        <!-- list of category (Phones, Computers, Smart watches, Cameras, Headphones, Gaming) (icon, name) -->
        <ul>
          <li>
            <a href="../products_page2/products.html">
              <img src="../assets/category_white/phones.png" alt="">
              <span>Phones</span>
            </a>
          </li>
          <li>
            <a href="../products_page2/products.html">
              <img src="../assets/category_white/computer.png" alt="">
              <span>Computers</span>
            </a>
          </li>
          <li>
            <a href="../products_page2/products.html">
              <img src="../assets/category_white/game.png" alt="">
              <span>Smart Watches</span>
            </a>
          </li>
          <li>
            <a href="../products_page2/products.html">
              <img src="../assets/category_white/camera.png" alt="">
              <span>Cameras</span>
            </a>
          </li>
          <li>
            <a href="../products_page2/products.html">
              <img src="../assets/category_white/headphone.png" alt="">
              <span>Headphones</span>
            </a>
          </li>
          <li>
            <a href="../products_page2/products.html">
              <img src="../assets/category_white/game.png" alt="">
              <span>Gaming</span>
            </a>
          </li>
        </ul>
      </section>
    </nav>
    `
  return nav
}
document.addEventListener('DOMContentLoaded', () => {
  const nav = createNav()
  document.getElementById('nav').appendChild(nav)
})
