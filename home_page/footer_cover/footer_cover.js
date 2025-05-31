

function createFooterSection(){
    const footerSection = document.createElement('section');
    footerSection.className = 'footer_cover_section';
    footerSection.innerHTML = `

        <div class="left">
          <img src="../assets/footer_cover/lab.png"/>
          <img src="../assets/footer_cover/screen.png"/>
          <img src="../assets/footer_cover/tab.png"/>

        </div>

        <div class="center">
          <h1>Big Summer <span>Sale</span></h1>
          <p>Commdo fames vitae vitae leo mauris in. Eu consequat</p>
          <button class="shop_btn">Shop Now</button>
        </div>

        <div class="right">
          <img src="../assets/footer_cover/phone.png"/>
          <img src="../assets/footer_cover/watch.png"/>
        </div>

    `
    return footerSection;
}

document.addEventListener("DOMContentLoaded", () => {
    const footerCover = document.getElementById("footer_cover");
    footerCover.appendChild(createFooterSection());
})