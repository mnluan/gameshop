function clearcart(){
    localStorage.removeItem("id");
    document.location.reload(true);
}

function removeItem(k){
    var allgames = JSON.parse(localStorage.getItem("id"));
    for (i = 0; i < allgames.length; i++){
        if(allgames[i].id == k){
            allgames.splice(i, 1);
            localStorage.setItem("id", JSON.stringify(allgames));
            document.location.reload(true);
        }
    }
}

function cartview(){
    var cart_number = JSON.parse(localStorage.getItem("id"));
    var cart_number = cart_number.length;
    if (cart_number < 1){
        document.getElementById('allitems').innerHTML = '<div>'+
        '<div id="img_info"><img src="../img/empty-cart.png" alt="cart_empty"></img></div>'+
        '<div id="empty_info">YOUR CART HAVE NO GAMES!<div><br>'+
        '</div>';
    }else{
        document.getElementById('allitems').innerHTML = '<div id="clear"> <button onclick="clearcart();"> Clear Cart </button>'
        var total = 0;
        var item = JSON.parse(localStorage.getItem("id"));
            item.forEach(game => {
                fetch(`../db/games.json`)
                .then((res) => res.json())
                .then((data) => {
                for (j = 0; j < data.length; j++){
                    if(game.id == data[j]._id.$oid){
                        total += data[j].price;
                        document.getElementById('allitems').innerHTML += '' +
                        '<div id="item">'+
                            '<button onclick="removeItem(`'+ game.id +'`)"> X </button>'+
                            '<div id="cart-cover" class="cart-cover"><img src=".' + data[j].Image + '" alt="'+ data[j].name  +'"></div>'+
                            '<div id="cart-item-info">'+
                                '<div id="cart-game-name" class="order-game-name">' + data[j].name.toUpperCase() + '</div>'+
                                '<div id="order-game-price" class="order-game-price">US$ ' + data[j].price + '</div>' +
                            '</div>'+
                        '</div><br>';
                        
                    }
                    console.log(total);
                    document.getElementById('ordernow').innerHTML = '<div id="total">US$ ' +total+ ' </div><button onclick="location.href=`./pay.html`">Order Now</button>';
                }
            
            });
        })
        
    }
}

cartview();