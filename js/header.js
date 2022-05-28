function createHeader(){
    document.getElementById('header').innerHTML = '' +
    '<header>' +
        '<a href="./index.html" class="logo"><img src="./img/logo.png" alt="logo"></a>' +
        '<div id="menu-bar"></div>' +
        '<nav class="navbar">' +
          '<a class="cart-menu" href="#"><img src="./img/cart.png" alt="cart"> <div class="count" id="count"></div></a>' +
        '</nav>' +
    '</header>'
};
  
createHeader();