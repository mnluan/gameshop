let count = 1
document.getElementById("radio1").checked = true;

setInterval( ()=>{
    nextImage();
}, 5000);

function nextInfo(){

    if(document.getElementById("radio1").checked){
        document.getElementById('title').innerHTML = 'Cyberpunk <br>2077';
        document.getElementById('price-slide').innerHTML = 'US$ 35,00';
        document.getElementById("sliderALT").innerHTML = '<img src="./img/slides/01.jpg">';
    }
    if(document.getElementById("radio2").checked){
        document.getElementById('title').innerHTML = 'SIFU';
        document.getElementById('price-slide').innerHTML = 'US$ 22,90';
        document.getElementById("sliderALT").innerHTML = '<img src="./img/slides/02.jpg">';
    }
    if(document.getElementById("radio3").checked){
        document.getElementById('title').innerHTML = 'The Elder Scrolls V: Skyrim';
        document.getElementById('price-slide').innerHTML = 'US$ 19,99';
        document.getElementById("sliderALT").innerHTML = '<img src="./img/slides/03.jpg">';
    }
    if(document.getElementById("radio4").checked){
        document.getElementById('title').innerHTML = 'Elden Ring';
        document.getElementById('price-slide').innerHTML = 'US$ 42,00';
        document.getElementById("sliderALT").innerHTML = '<img src="./img/slides/04.jpg">';
    }
    if(document.getElementById("radio5").checked){
        document.getElementById('title').innerHTML = 'EA Sports <br>FIFA 22';
        document.getElementById('price-slide').innerHTML = 'US$ 39,99';
        document.getElementById("sliderALT").innerHTML = '<img src="./img/slides/05.jpg">';
    }
    if(document.getElementById("radio6").checked){
        document.getElementById('title').innerHTML = 'HOTWHEELS: Unleashed';
        document.getElementById('price-slide').innerHTML = 'US$ 17,99';
        document.getElementById("sliderALT").innerHTML = '<img src="./img/slides/06.jpg">';
    }
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