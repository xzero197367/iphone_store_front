function createNav() {
  const nav = document.createElement('nav')
  nav.innerHTML = `
       
    <nav>
      <section class="top">
        <img src="../assets/logo.png" alt="" />
        <input type="text" placeholder="Search..." />
        <ul class="nav-links">
          <li>
            <a href="./home_page/index.html">Home</a>
          </li>
          <li>
            <a href="./about_page/index.html">About</a>
          </li>
          <li>
            <a href="./contact_page/index.html">Contact Us</a>
          </li>
          <li>
            <a href="./services_page/index.html">Blog</a>
          </li>
        </ul>

        <ul class="nav-icons">
          <li>
            <a href="./login_page/index.html">
              <i class="fa-solid fa-heart"></i>
            </a>
          </li>
          <li>
            <a href="./signup_page/index.html">
              <i class="fa-solid fa-cart-shopping"></i>
            </a>
          </li>
          <li>
            <a href="./profile_page/index.html"
              ><i class="fa-solid fa-user"></i
            ></a>
          </li>
        </ul>
      </section>
      <section class="bottom">
        <!-- list of category (Phones, Computers, Smart watches, Cameras, Headphones, Gaming) (icon, name) -->
        <ul>
          <li>
            <a href="./category_page/index.html">
              <i class="fa-solid fa-mobile"></i>
              <span>Phones</span>
            </a>
          </li>
          <li>
            <a href="./category_page/index.html">
              <i class="fa-solid fa-laptop"></i>
              <span>Computers</span>
            </a>
          </li>
          <li>
            <a href="./category_page/index.html">
              <i class="fa-solid fa-watch"></i>
              <span>Smart Watches</span>
            </a>
          </li>
          <li>
            <a href="./category_page/index.html">
              <i class="fa-solid fa-camera"></i>
              <span>Cameras</span>
            </a>
          </li>
          <li>
            <a href="./category_page/index.html">
              <i class="fa-solid fa-headphones"></i>
              <span>Headphones</span>
            </a>
          </li>
          <li>
            <a href="./category_page/index.html">
              <i class="fa-solid fa-gamepad"></i>
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
