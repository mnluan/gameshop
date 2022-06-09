function cartview(){
    var cart_number = JSON.parse(localStorage.getItem("id"));
    var cart_number = cart_number.length;

    if (cart_number < 1){
        document.getElementById('allitems').innerHTML = '<div>'+
        '<div id="img_info"><img src="../img/empty-cart.png" alt="cart_empty"></img></div>'+
        '<div id="empty_info">YOUR CART HAVE NO GAMES!<div><br>'+
        '</div>';
    }else{
        var item = JSON.parse(localStorage.getItem("id"));
            item.forEach(game => {
                fetch(`https://mnluan.github.io/gameshop/db/games.json`)
                .then((res) => res.json())
                .then((data) => {
                for (j = 0; j < data.length; j++){
                    if(game.id == data[j]._id.$oid){
                        document.getElementById('allitems').innerHTML += '' +
                        '<div id="game_img"><img src=".' + data[j].Image + '" alt="'+ data[j].name  +'"></div>'+
                        '<div id="game_name">' + data[j].name.toUpperCase() + '</div>'+
                        '<div id="game_price">US$ ' + data[j].price + '</div>' +
                        '<button> X </button>'
                    }
                }
            
            });
        })
    }
}

cartview();