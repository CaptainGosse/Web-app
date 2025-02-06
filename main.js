var counter = 0;
const counter_box = document.getElementById('counter');
const my_audio = document.getElementsByClassName('meow');

function playing(){
    var num = Math.floor((Math.random() * my_audio.length));
    console.log(num)
    my_audio[num].play();
}

function on_click() {
    counter++;
    counter_box.innerHTML = `<h1 class="score"> ${counter} </h1>`;
    //console.log(counter);
    playing();
    
}