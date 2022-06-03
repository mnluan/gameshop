var url = window.location.href;

function createHTML(data, i){
    document.getElementById('list-all').innerHTML += '<div class="game-item">' + 
    '<a href="./game/' + data[i]._id.$oid +'.html"><div class="game-item">' + 
    '<img class="logo" src=".'+ data[i].Image + '">' +
    '<div class="title">' + data[i].name +'</div></a>'+
    '</div><br>';
}

function listgames(){
fetch(`https://mnluan.github.io/gameshop/db/games.json`)
.then((res) => res.json())
.then((data) => {
    if(url == "https://mnluan.github.io/gameshop/all.html" || url == "https://mnluan.github.io/gameshop/all.html?"){
        for (i = 0; i < data.length; i++){
            createHTML(data, i);
        }
    }
    
    for (i = 0; i < data.length; i++){
        if((url == "https://mnluan.github.io/gameshop/rpg.html") && (data[i].genre == "rpg")){
            createHTML(data, i);
        }
    }

    for (i = 0; i < data.length; i++){
        if((url == "https://mnluan.github.io/gameshop/fps.html") && (data[i].genre == "FPS")){
            document.getElementById('list-all').innerHTML += '<div class="game-item">' + 
            createHTML(data, i);
        }
    }

    for (i = 0; i < data.length; i++){
        if((url == "https://mnluan.github.io/gameshop/racing.html") && (data[i].genre == "racing")){
            document.getElementById('list-all').innerHTML += '<div class="game-item">' + 
            createHTML(data, i);
        }
    }

    for (i = 0; i < data.length; i++){
        if((url == "https://mnluan.github.io/gameshop/indie.html") && (data[i].genre == "indie")){
            document.getElementById('list-all').innerHTML += '<div class="game-item">' + 
            createHTML(data, i);
        }
    }

    for (i = 0; i < data.length; i++){
        if((url == "https://mnluan.github.io/gameshop/fight.html") && (data[i].genre == "fight")){
            document.getElementById('list-all').innerHTML += '<div class="game-item">' + 
            createHTML(data, i);;
        }
    }

    for (i = 0; i < data.length; i++){
        if((url == "https://mnluan.github.io/gameshop/strategy.html") && (data[i].genre == "strategy")){
            document.getElementById('list-all').innerHTML += '<div class="game-item">' + 
            createHTML(data, i);
        }
    }

});

};

listgames();