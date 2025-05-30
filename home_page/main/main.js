
function createMain(){
 
    const main = document.createElement('main');
    main.innerHTML = `
   
        <section class="detail">
          <h3>Pro.Beyond</h3>
          <h1>IPhone 14 <span>Pro</span></h1>

          <p>Created to change everything for the better. For everyone.</p>

          <button>Shop Now</button>
        </section>
        <section class="image"> 
          <img src="../assets/iphone_img.png"/>
        </section>
    
    `;
    return main;
}

document.addEventListener("DOMContentLoaded", function(){
    const main = createMain();
    document.getElementById('cover').appendChild(main);
});