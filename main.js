var counter = 0;
const counter_box = document.getElementById('counter');
console.log(counter_box);
function on_click() {
    counter++;
    counter_box.innerHTML = `<h1 class="score"> ${counter} </h1>`;
    console.log(counter);
}