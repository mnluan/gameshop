function addgame(id){
  var gameid = id;
  var cart = JSON.parse(localStorage.getItem("id"));

  if(cart == null ){
    localStorage.setItem("id", "[]");
  }

  var cod = {id: gameid}
  cart.push(cod);
  localStorage.setItem("id", JSON.stringify(cart));
  alert("Game added in cart!");

}
