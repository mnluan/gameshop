function listgames(){
fetch(`https://mnluan.github.io/gameshop/db/games.json`)
.then((res) => res.json())
.then((data) => {
    for (i = 0; i < data.length; i++){
        document.getElementById('list-all').innerHTML += '<div class="game-item">' + 
        '<img class="logo" src='+ data[i].Image + '>' +
        '<div class="title">' + data[i].name +
        '</div>'
    }
    }
    )
};

listgames();