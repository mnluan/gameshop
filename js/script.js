let count = 1
document.getElementById("radio1").checked = true;

setInterval( ()=>{
    nextImage();
}, 5000);

function nextInfo(){
    if(document.getElementById("radio1").checked){
        document.getElementById('title').innerHTML = 'Cyberpunk 2077';
        document.getElementById('price-slide').innerHTML = 'US$ 35,00';
    }
    if(document.getElementById("radio2").checked){
        document.getElementById('title').innerHTML = 'Sifu';
        document.getElementById('price-slide').innerHTML = 'US$ 22,90';
    }
    if(document.getElementById("radio3").checked){
        document.getElementById('title').innerHTML = 'The Elder Scrolls V: Skyrim';
        document.getElementById('price-slide').innerHTML = 'US$ 19,99';
    }
    if(document.getElementById("radio4").checked){
        document.getElementById('title').innerHTML = 'Elden Ring';
        document.getElementById('price-slide').innerHTML = 'US$ 42,00';
    }
    if(document.getElementById("radio5").checked){
        document.getElementById('title').innerHTML = 'EA Sports FC';
        document.getElementById('price-slide').innerHTML = 'US$ 39,99';
    }
    if(document.getElementById("radio6").checked){
        document.getElementById('title').innerHTML = 'HOTWHEELS: Unleashed';
        document.getElementById('price-slide').innerHTML = 'US$ 17,99';
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