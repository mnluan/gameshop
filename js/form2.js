function games_purchase(){
    var total = 0;
    var item = JSON.parse(localStorage.getItem("id"));
    item.forEach(game => {
        fetch(`../db/games.json`)
        .then((res) => res.json())
        .then((data) => {
        for (i = 0; i < data.length; i++){
            if(game.id == data[i]._id.$oid){
                total += data[i].price;
                document.getElementById('items-info').innerHTML += '' +
                '<div id="gameshow">'+
                    '<div class="cover">'+
                        '<div class="order-game-img"> <img src=".' + data[i].Image + '" alt="'+ data[i].name  +'"> </div>'+
                    '</div>'+
                    '<div class="order-info">'+
                        '<div class="order-game-name">' + data[i].name + '</div>'+
                        '<div class="order-game-price">'+ data[i].price + '</div>'+
                    '</div>'+
                '</div>';
                document.getElementById('ordernow').innerHTML = '<div id="total">US$ ' +total;
            }
        }
        });
    });
}

function credit(){
    if(document.getElementById("cc").checked){
        document.getElementById('cardinfo').innerHTML = '' +
        '<label for="cardflag">Choose a Card:</label>'+
        '<select id="cardflag" name="cardflag">'+
            '<option value="visa" >Visa</option>'+
            '<option value="mastercard" selected>Mastercard</option>'+
            '<option value="americanexpress">American Express</option>'+
        '</select>'+
        '<label for="card-number">Card Number:</label>'+
        '<input type = "text" name = "cardnumber" id="cardnumber" class="labelinput" placeholder="xxxx-xxxx-xxxx-xxxx" pattern="[0-9]{4}-[0-9]{4}-[0-9]{4}-[0-9]{4}" required>'+
        '<label for="card-name">Name on Card:</label>'+
        '<input type = "text" name = "cardname" id="cardname" placeholder="Cardholder name here" required>'+
        '<div class="cardinfo2">'+
        '<label for="card-date">Expiry Date:</label>'+
        '<input type = "month" name = "carddate" id="carddate" required>'+
        '</div>'+
        '<div class="cardinfo2">'+
        '<label for="card-date">Secure Code:</label>'+
        '<input type = "text" name = "carddate" id="securecard" placeholder="xxx" pattern="[0-9]{3}" required>'+
        '</div>';
    }
}

function debit(){
    if(document.getElementById("dc").checked){
        document.getElementById('cardinfo').innerHTML = '' +
        '<label for="cardflag">Choose a Card:</label>'+
        '<select id="cardflag" name="cardflag">'+
            '<option value="visa_debit">Visa debit</option>'+
            '<option value="maestro" selected>Maestro</option>'+
            '<option value="americanexpress">American Express</option>'+
        '</select>'+
        '<label for="card-number">Card Number:</label>'+
        '<input type = "text" name = "cardnumber" id="cardnumber" class="labelinput" placeholder="xxxx-xxxx-xxxx-xxxx" pattern="[0-9]{4}-[0-9]{4}-[0-9]{4}-[0-9]{4}" required>'+
        '<label for="card-name">Name on Card:</label>'+
        '<input type = "text" name = "cardname" id="cardname" placeholder="Cardholder name here" required>'+
        '<div class="cardinfo2">'+
        '<label for="card-date">Expiry Date:</label>'+
        '<input type = "month" name = "carddate" id="carddate" required>'+
        '</div>'+
        '<div class="cardinfo2">'+
        '<label for="card-date">Secure Code:</label>'+
        '<input type = "text" name = "carddate" id="securecard" placeholder="xxx" pattern="[0-9]{3}" required>'+
        '</div>';
    }
}

function ewallet(){
    if(document.getElementById("other").checked){
        document.getElementById('cardinfo').innerHTML = '' +
        '<label for="card-number">Card Number:</label>'+
        '<input type = "text" name = "cardnumber" id="cardnumber" class="labelinput" placeholder="xxxx-xxxx-xxxx-xxxx" pattern="[0-9]{4}-[0-9]{4}-[0-9]{4}-[0-9]{4}" required>'+
        '<label for="email">Email:</label>'+
        '<input type="email" name = "email" id="email" pattern="[a-z0-9._%+-]+@[a-z0-9.-]+\.[a-z]{2,4}$" placeholder="youremail@exemple.com" required>'+
        '<label for="card-name">Name:</label>'+
        '<input type = "text" name = "cardname" id="cardname" placeholder="Your name here" required>'+
        '<div class="cardinfo2">'+
        '<label for="card-date">Expiry Date:</label>'+
        '<input type = "month" name = "carddate" id="carddate" required>'+
        '</div>'+
        '<div class="cardinfo2">'+
        '<label for="card-date">Secure Code:</label>'+
        '<input type = "text" name = "carddate" id="securecard" placeholder="xxx" pattern="[0-9]{3}" required>'+
        '</div>';
    }
}

games_purchase();