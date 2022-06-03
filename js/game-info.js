function showinfo(){
    var url = window.location.href;

    const index0 = url.lastIndexOf('/');
    const after = url.slice(index0+1);
    url = after;

    const index1 = url.lastIndexOf('.');
    const before = url.slice(0, index1);
    url = before;

    console.log(url);

    fetch(`https://mnluan.github.io/gameshop/db/games.json`)
    .then((res) => res.json())
    .then((data) => {
        for (i = 0; i < data.length; i++){
            if(data[i]._id.$oid ==  url ){
                document.getElementById('game-inf').innerHTML = '' +
                '<div id="game_head">'+
                    '<div id="game_img"><img src=".' + data[i].Image + '" alt="'+ data[i].name  +'"></div>' +
                    '<div id="game_genre">' + data[i].genre.toUpperCase() + '</div>' +
                    '<div id="game_price">"US$ "' + data[i].price + '</div>' +
                    '<div id="btns">' + 
                        '<button id="buy">Buy Now</button><br>' +
                        '<button id="cart">Add to Cart</button>' +
                    '</div>'+
                '</div>' +
                '<div id="pagebody">'+
                    '<div id="game_name">' + data[i].name.toUpperCase() + '</div>' +
                    '<div id="game_descr">' + data[i].description + '</div>'+
                '<div>';
                document.getElementById('game-sub').innerHTML = '<div id="others">• Other games like this: </div>';
                for (j = 0; j < data.length; j++){
                    if((data[i].genre == data[j].genre) && (data[i]._id.$oid != data[j]._id.$oid)){
                    document.getElementById('game-sub').innerHTML += '' +
                    '<a href="./' + data[j]._id.$oid +'.html"><div class="game-item">' + 
                    '<img class="logo" src=".'+ data[j].Image + '">' +
                    '<div class="title">' + data[j].name +'</div></a>'+
                    '</div><br>';
                    }
                }
            }
        }
    });
}

showinfo();