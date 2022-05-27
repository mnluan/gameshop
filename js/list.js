var url = window.location.href;

console.log(url);

function listgames(){
fetch(`https://mnluan.github.io/gameshop/db/games.json`)
.then((res) => res.json())
.then((data) => {
    if(url == "file:///C:/dev/gameshop/all.html" || url == "file:///C:/dev/gameshop/all.html?"){
        for (i = 0; i < data.length; i++){
            document.getElementById('list-all').innerHTML += '<div class="game-item">' + 
            '<img class="logo" src='+ data[i].Image + '>' +
            '<div class="title">' + data[i].name +
            '</div></div><br>'
        }
    }
    
    for (i = 0; i < data.length; i++){
        if((url == "file:///C:/dev/gameshop/rpg.html" || url == "file:///C:/dev/gameshop/rpg.html?") && (data[i].genre == "rpg")){
        document.getElementById('list-all').innerHTML += '<div class="game-item">' + 
        '<img class="logo" src='+ data[i].Image + '>' +
        '<div class="title">' + data[i].name +
        '</div></div><br>'
        }
    }

    for (i = 0; i < data.length; i++){
        if((url == "file:///C:/dev/gameshop/fps.html" || url == "file:///C:/dev/gameshop/fps.html?") && (data[i].genre == "FPS")){
        document.getElementById('list-all').innerHTML += '<div class="game-item">' + 
        '<img class="logo" src='+ data[i].Image + '>' +
        '<div class="title">' + data[i].name +
        '</div></div><br>'
        }
    }

    for (i = 0; i < data.length; i++){
        if((url == "file:///C:/dev/gameshop/racing.html" || url == "file:///C:/dev/gameshop/racing.html?") && (data[i].genre == "racing")){
        document.getElementById('list-all').innerHTML += '<div class="game-item">' + 
        '<img class="logo" src='+ data[i].Image + '>' +
        '<div class="title">' + data[i].name +
        '</div></div><br>'
        }
    }

    for (i = 0; i < data.length; i++){
        if((url == "file:///C:/dev/gameshop/indie.html" || url == "file:///C:/dev/gameshop/indie.html?") && (data[i].genre == "indie")){
        document.getElementById('list-all').innerHTML += '<div class="game-item">' + 
        '<img class="logo" src='+ data[i].Image + '>' +
        '<div class="title">' + data[i].name +
        '</div></div><br>'
        }
    }

    for (i = 0; i < data.length; i++){
        if((url == "file:///C:/dev/gameshop/fight.html" || url == "file:///C:/dev/gameshop/fight.html?") && (data[i].genre == "fight")){
        document.getElementById('list-all').innerHTML += '<div class="game-item">' + 
        '<img class="logo" src='+ data[i].Image + '>' +
        '<div class="title">' + data[i].name +
        '</div></div><br>'
        }
    }

    for (i = 0; i < data.length; i++){
        if((url == "file:///C:/dev/gameshop/strategy.html" || url == "file:///C:/dev/gameshop/strategy.html?") && (data[i].genre == "strategy")){
        document.getElementById('list-all').innerHTML += '<div class="game-item">' + 
        '<img class="logo" src='+ data[i].Image + '>' +
        '<div class="title">' + data[i].name +
        '</div></div><br>'
        }
    }

    }
    )
};

listgames();