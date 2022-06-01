var input = document.getElementById("searchbar");

function closebtn(){
  document.getElementById("search_result").style.display = "none"; 
}

function autoSearch(){
  var x = document.getElementById("searchbar").value.toUpperCase();
  if((x == "") || (x == " ")){
    document.getElementById("search_result").style.display = "none";
    document.getElementById('result').innerHTML = "";
    list = "";
  }else{
    var list = "";
    fetch(`https://mnluan.github.io/gameshop/db/games.json`)
      .then((res) => res.json())
      .then((data) => {
        for (i = 0; i < data.length; i++){
          document.getElementById("search_result").style.display = "block"; 
          var string = data[i].name.toUpperCase();
          if(string.includes(x)){
            document.getElementById('result').innerHTML = "";
            var url = data[i]._id.$oid;
            list += data[i].name;
            document.getElementById('result').innerHTML += '<div><a href="https://mnluan.github.io/gameshop/game/' + url + '" target="_blank">'+ data[i].name +'</a></div>';
          }
        }
      });
  }
}

input.addEventListener("keypress", function(event) {
    if (event.key === "Enter") {
      event.preventDefault();
      document.getElementById('result').innerHTML = "";
      var x = document.getElementById("searchbar").value.toUpperCase();
      fetch(`https://mnluan.github.io/gameshop/db/games.json`)
      .then((res) => res.json())
      .then((data) => {
        for (i = 0; i < data.length; i++){
          var string = data[i].name.toUpperCase();
          if((string.includes(x)) && ((x != "") && (x != " "))){
            var url = data[i]._id.$oid
            document.getElementById('result').innerHTML += '<div><a href="https://mnluan.github.io/gameshop/game/' + url + '" target="_blank">'+ data[i].name +'</a></div>';
            document.getElementById("search_result").style.display = "block"; 
          }
        }
      });
    }
  });