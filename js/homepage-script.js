/* --- Getting the data from JSON files using AJAX method --- */

const cardRow = document.getElementById("cardRow");

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
    cardRow.insertAdjacentHTML("afterbegin", defaultCardHTML);
}
request.send();

//Defining const's for load more action:
const loadBtn = document.getElementById("btnLoadMore");
let fileNum = 2

//Other sets of 8 products will be displayed after every time the load more button is clicked.
loadBtn.addEventListener("click", function() {
    var request = new XMLHttpRequest();
    request.open("GET", `../js/popularitems${fileNum}.json`);
    request.onload = function () {
        var productData = JSON.parse(request.responseText);
        printCard(productData);
    }
    request.send();
    
    fileNum++;
    if (fileNum > 3) {
        loadBtn.style.display = "none"
    }
});

function printCard(data) {
    var cardHTML = "";

    for (i=0 ; i<data.length ; i++) {
        cardHTML += `
            <div class="col-12 col-md-6 col-lg-3 card-frame my-2">
                <div class="card product-card">
                    <div class="product-card-onHover">
                        <div>
                            <button class="productcard-hover-btns add-cart" onclick="incrementCart()"><img src="../images/homepage/product-images/icons/Plus_(24x24).svg" alt=""></button>
                            <button class="productcard-hover-btns add-wish" onclick="incrementWish()"><img src="../images/homepage/product-images/icons/Heart_(24x24).svg" alt=""></button>
                        </div>
                        <a href="productpage.html" class="productcard-hover-link">GO TO PRODUCT PAGE</a>
                    </div>
                    <img src="${data[i].image}" class="card-img-top product-img" alt="Product Image">
                    <div class="card-body">
                        <h5 class="card-title">${data[i].name}</h5>
                        <p class="card-text">$ ${data[i].price}</p>
                    </div>
                </div>
            </div>
        `
    } 
    cardRow.insertAdjacentHTML("beforeend", cardHTML);
}
