/* --------------------------------------------------------------- */
/* --- Popular items section ------------------------------------- */
/* --------------------------------------------------------------- */

const prodRow = document.getElementById("productPageRow");

//The first 8 items, which are stored in the first json file, will be displayed by default.
var request = new XMLHttpRequest();
request.open("GET", `../js/popularitems1.json`);
request.onload = function () {
    var defaultData = JSON.parse(request.responseText);
    var defaultCardHTML = "";
    
    for (i=0 ; i<defaultData.length ; i++) {
        defaultCardHTML += `
            <div class="col-12 col-md-6 col-lg-3 card-frame my-2">
                <div class="card product-card">
                    <div class="product-card-onHover">
                        <div>
                            <button class="productcard-hover-btns add-cart" onclick="incrementCart()"><img src="../images/homepage/product-images/icons/Plus_(24x24).svg" alt="Add to cart"></button>
                            <button class="productcard-hover-btns add-wish" onclick="incrementWish()"><img src="../images/homepage/product-images/icons/Heart_(24x24).svg" alt="Add to wishlist"></button>
                        </div>
                        <a href="productpage.html" class="productcard-hover-link">GO TO PRODUCT PAGE</a>
                    </div>
                    <img src="${defaultData[i].image}" class="card-img-top product-img" alt="Product Image">
                    <div class="card-body">
                        <h5 class="card-title">${defaultData[i].name}</h5>
                        <p class="card-text">$ ${defaultData[i].price}</p>
                    </div>
                </div>
            </div>
        `
    }
    prodRow.insertAdjacentHTML("afterbegin", defaultCardHTML);
}
request.send();

/* --------------------------------------------------------------- */
/* --- Read more button  ----------------------------------------- */
/* --------------------------------------------------------------- */

//Somehow, this didn't work :(((
function showMore() {
    var moreText = document.getElementById("moreText");

    if (moreText.style.display === "none") {
        moreText.style.display = "block";
    } else {
        moreText.style.display = "none";
    }
}