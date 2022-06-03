let count = 1
document.getElementById("radio1").checked = true;

setInterval( ()=>{
    nextImage();
}, 5000);

function nextInfo(){
    fetch(`https://mnluan.github.io/gameshop/db/games.json`)
    .then((res) => res.json())
    .then((data) => {
        if(document.getElementById("radio1").checked){
            document.getElementById('title').innerHTML = data[0].name;
            document.getElementById('price-slide').innerHTML = 'US$ '+ data[0].price;
            document.getElementById("sliderALT").innerHTML = '<img src="./img/slides/01.jpg">';
            document.getElementById('salebtn').innerHTML = "";
            document.getElementById('salebtn').innerHTML += '<button id="buy-slide" onclick="location.href=`./game/app.html?id='+data[0]._id.$oid+'`" type="button">Buy Now</button>';
            document.getElementById('salebtn').innerHTML += '<button id="cart-slide">Add to Cart</button>';
        }
        if(document.getElementById("radio2").checked){
            document.getElementById('title').innerHTML = data[2].name;
            document.getElementById('price-slide').innerHTML = 'US$ ' + data[2].price;
            document.getElementById("sliderALT").innerHTML = '<img src="./img/slides/02.jpg">';
            document.getElementById('salebtn').innerHTML = "";
            document.getElementById('salebtn').innerHTML += '<button id="buy-slide" onclick="location.href=`./game/app.html?id='+data[2]._id.$oid+'`" type="button">Buy Now</button>';
            document.getElementById('salebtn').innerHTML += '<button id="cart-slide">Add to Cart</button>';
        }
        if(document.getElementById("radio3").checked){
            document.getElementById('title').innerHTML = data[3].name;
            document.getElementById('price-slide').innerHTML = 'US$ ' + data[3].price;
            document.getElementById("sliderALT").innerHTML = '<img src="./img/slides/03.jpg">';
            document.getElementById('salebtn').innerHTML = "";
            document.getElementById('salebtn').innerHTML += '<button id="buy-slide" onclick="location.href=`./game/app.html?id='+data[3]._id.$oid+'`" type="button">Buy Now</button>';
            document.getElementById('salebtn').innerHTML += '<button id="cart-slide">Add to Cart</button>';
        }
        if(document.getElementById("radio4").checked){
            document.getElementById('title').innerHTML = data[4].name;
            document.getElementById('price-slide').innerHTML = 'US$ ' + data[4].price;
            document.getElementById("sliderALT").innerHTML = '<img src="./img/slides/04.jpg">';
            document.getElementById('salebtn').innerHTML = "";
            document.getElementById('salebtn').innerHTML += '<button id="buy-slide" onclick="location.href=`./game/app.html?id='+data[4]._id.$oid+'`" type="button">Buy Now</button>';
            document.getElementById('salebtn').innerHTML += '<button id="cart-slide">Add to Cart</button>';
        }
        if(document.getElementById("radio5").checked){
            document.getElementById('title').innerHTML = data[22].name;
            document.getElementById('price-slide').innerHTML = 'US$ ' + data[22].price;
            document.getElementById("sliderALT").innerHTML = '<img src="./img/slides/05.jpg">';
            document.getElementById('salebtn').innerHTML = "";
            document.getElementById('salebtn').innerHTML += '<button id="buy-slide" onclick="location.href=`./game/app.html?id='+data[22]._id.$oid+'`" type="button">Buy Now</button>';
            document.getElementById('salebtn').innerHTML += '<button id="cart-slide">Add to Cart</button>';
        }
        if(document.getElementById("radio6").checked){
            document.getElementById('title').innerHTML = data[5].name;
            document.getElementById('price-slide').innerHTML = 'US$ ' + data[5].price;
            document.getElementById("sliderALT").innerHTML = '<img src="./img/slides/06.jpg">';
            document.getElementById('salebtn').innerHTML = "";
            document.getElementById('salebtn').innerHTML += '<button id="buy-slide" onclick="location.href=`./game/app.html?id='+data[5]._id.$oid+'`" type="button">Buy Now</button>';
            document.getElementById('salebtn').innerHTML += '<button id="cart-slide">Add to Cart</button>';
        }
    })
};

function nextImage(){
    count++;
    if(count>6){
        count = 1;
    }
    document.getElementById("radio"+count).checked = true;
    nextInfo();
};

nextInfo();