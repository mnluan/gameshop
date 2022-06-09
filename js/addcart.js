function createcart(){
  var cart = JSON.parse(localStorage.getItem("id"));
  if(cart == null ){
      localStorage.setItem("id", "[]");
  }
}

function countgames(){
  var cart_number = JSON.parse(localStorage.getItem("id"));
  var cart_number = cart_number.length
  if (cart_number < 1){
    document.getElementById('count').innerHTML = '';
  }else{
    document.getElementById('count').innerHTML = cart_number;
  }
}

function addgame(id){
  var gameid = id;
  var cart = JSON.parse(localStorage.getItem("id"));

  if(cart == null ){
    localStorage.setItem("id", "[]");
  }

  var cod = {id: gameid}
  cart.push(cod);
  localStorage.setItem("id", JSON.stringify(cart));
  countgames();
  alert("Game added in cart!");
}

function removegame(){
/* cart.splice(3,1) apaga do vetor cart o item de indice 3 (somente ele!) */
}

createcart();
countgames();