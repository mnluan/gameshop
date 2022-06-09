function createHeader(){
    document.getElementById('header').innerHTML = '' +
    '<header>' +
        '<a href="./index.html" class="logo"><img src="./img/logo.png" alt="logo"></a>' +
        '<div id="homebar">' +
          '<form>' +
            '<script src="https://ajax.googleapis.com/ajax/libs/jquery/2.1.1/jquery.min.js"></script>' +
            '<input type="search" id="searchbar" placeholder="Search..." onkeydown="autoSearch()">' +
          '</form>' +
        '</div>' +
        '<div id="menu-bar"></div>' +
        '<nav class="navbar">' +
          '<a class="cart-menu" href="./cart/cartview.html"><img src="./img/cart.png" alt="cart"></a><div class="count" id="count"></div>' +
        '</nav>' +
    '</header>' + 
    '<section class="search_result" id="search_result">' +
      '<button onclick="closebtn()"><b>X</b></button>' +
      '<div id="result"></div>' +
    '</section>'
};
  
createHeader();