

function createFooter(){
    const footer = document.createElement("section");
    const style = document.createElement('link')
    style.rel = 'stylesheet'
    style.href = '../shared_compos/footer/footer.css'
    document.head.appendChild(style)
    footer.classList.add("footer_section");
    footer.innerHTML = `

        <section class="first">
          <img src="../assets/Logo_white.png" alt="">
          <p>We are a residential interior design firm located in Portland. Our boutique-studio offers more than</p>

          <div class="social">
            <img src="../assets/social/Facebook.png"/>
            <img src="../assets/social/Instagram.png"/>
            <img src="../assets/social/Tiktok.png"/>
            <img src="../assets/social/Twitter.png"/>
          </div>
        </section>
        <section class="second">
          <h1>Services</h1>
          <ul>
            <li>Bonus program</li>
            <li>Gift cards</li>
            <li>Credit and payment</li>
            <li>Service contracts</li>
            <li>Non-cash account</li>
            <li>Payment</li>
          </ul>
        </section>
        <section class="third">
          <h1>Assistance to the buyer</h1>
          <ul>
            <li>Find an order</li>
            <li>Terms of delivery</li>
            <li>Exchange and return of goods</li>
            <li>Guarantee</li>
            <li>Frequently asked questions</li>
            <li>Terms of use of the site</li>
          </ul>
        </section>
    
    `

    return footer
}

document.addEventListener("DOMContentLoaded", () => {
    const footer = createFooter();
    document.getElementById("footer").appendChild(footer);
})