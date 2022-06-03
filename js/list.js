var url = window.location.href;

function createHTML(i, d){
    document.getElementById('list-all').innerHTML += '' + 
    '<a href="./game/' + d[i]._id.$oid +'.html"><div class="game-item">' + 
    '<img class="logo" src="'+ d[i].Image + '">' +
    '<div class="title">' + d[i].name +'</div></a>'+
    '</div><br>';
}

function listgames(){
fetch(`https://mnluan.github.io/gameshop/db/games.json`)
.then((res) => res.json())
.then((data) => {
    if(url == "https://mnluan.github.io/gameshop/all.html" || url == "https://mnluan.github.io/gameshop/all.html?"){
        for (i = 0; i < data.length; i++){
            createHTML(i, data);
        }
    }
    
    for (i = 0; i < data.length; i++){
        if((url == "https://mnluan.github.io/gameshop/rpg.html") && (data[i].genre == "rpg")){
            for (i = 0; i < data.length; i++){
                createHTML(i, data);
            }
        }
    }

    for (i = 0; i < data.length; i++){
        if((url == "https://mnluan.github.io/gameshop/fps.html") && (data[i].genre == "FPS")){
            for (i = 0; i < data.length; i++){
                createHTML(i, data);
            }
        }
    }

    for (i = 0; i < data.length; i++){
        if((url == "https://mnluan.github.io/gameshop/racing.html") && (data[i].genre == "racing")){
            for (i = 0; i < data.length; i++){
                createHTML(i, data);
            }
        }
    }

    for (i = 0; i < data.length; i++){
        if((url == "https://mnluan.github.io/gameshop/indie.html") && (data[i].genre == "indie")){
            for (i = 0; i < data.length; i++){
                createHTML(i, data);
            }
        }
    }

    for (i = 0; i < data.length; i++){
        if((url == "https://mnluan.github.io/gameshop/fight.html") && (data[i].genre == "fight")){
            for (i = 0; i < data.length; i++){
                createHTML(i, data);
            }
        }
    }

    for (i = 0; i < data.length; i++){
        if((url == "https://mnluan.github.io/gameshop/strategy.html") && (data[i].genre == "strategy")){
            for (i = 0; i < data.length; i++){
                createHTML(i, data);
            }
        }
    }

    });
};

listgames();