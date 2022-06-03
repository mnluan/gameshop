let params = new URLSearchParams(location.search);
var nameURL = params.get('category');

function createHTML(i, d){
    document.getElementById('list-all').innerHTML += '' + 
    '<a href="./game/app.html?id=' + d[i]._id.$oid +'"><div class="game-item">' + 
    '<img class="logo" src="'+ d[i].Image + '">' +
    '<div class="title">' + d[i].name +'</div></a>'+
    '</div><br>';
}

function listgames(){
fetch(`https://mnluan.github.io/gameshop/db/games.json`)
.then((res) => res.json())
.then((data) => {
    if(nameURL == "all"){
        for (i = 0; i < data.length; i++){
            createHTML(i, data);
            console.log("all");
        }
    }
    
    for (j = 0; j < data.length; j++){
        if(nameURL == data[j].genre){
            createHTML(j, data);
            console.log(nameURL);
        }
    }

    });
};

listgames();