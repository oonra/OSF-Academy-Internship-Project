/* --------------------------------------------------------------- */
/* --- Toogle password in login modal ---------------------------- */
/* --------------------------------------------------------------- */

//Checkbox is attached to the function via "onclick=" attribute.
function showPassword() {
    var toggleBtn = document.getElementById("password");

    if (toggleBtn.type === "password") {
        toggleBtn.type = "text";
    } else {
        toggleBtn.type = "password";
    }
}


/* --------------------------------------------------------------- */
/* --- Cart and wishlist button increments ----------------------- */
/* --------------------------------------------------------------- */

/* --- Incrementing cart and wishlist values when clicked on hover add buttons --- */

function incrementCart() {
    var amountCart  = document.getElementById("cart-amount");
    var insideCart  = amountCart.innerHTML;

    ++insideCart;
    console.log(insideCart);
    document.getElementById("cart-amount").innerHTML = insideCart;
  
    if (insideCart >= 10) {
        amountCart.style.right    = "1px";
        amountCart.style.fontSize = "10px";
    }
    if (insideCart >= 100) {
        amountWish.style.top    = "1px";
        amountCart.style.right    = "0px";
        amountCart.style.fontSize = "8px";
    }
}

function incrementWish() {
    var amountWish  = document.getElementById("wish-amount");
    var insideWish  = amountWish.innerHTML;

    ++insideWish;
    console.log(insideWish);
    document.getElementById("wish-amount").innerHTML = insideWish;

    if (insideWish >= 10) {
        amountWish.style.right    = "1px";
        amountWish.style.fontSize = "10px";
    }
    if (insideWish >= 100) {
        amountWish.style.top    = "1px";
        amountWish.style.right    = "0.5px";
        amountWish.style.fontSize = "8px";
    }
}

/* --------------------------------------------------------------- */
/* --- Footer customizations ------------------------------------- */
/* --------------------------------------------------------------- */

//Getting the current year for footer
document.getElementById("year").innerHTML = new Date().getFullYear();