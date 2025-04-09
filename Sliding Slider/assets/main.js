let images = [
    "images/p1.png",
    "images/p2.png",
    "images/p3.png"
];

const previous_btn = document.getElementById("previous-btn");
const next_btn = document.getElementById("next-btn");
const img = document.getElementById("img");

let index = 0;

function displayimage() {
    img.src = images[index];
}
 
function showleft(){

    if(index > 0)
    {
        index -- ;
    }
    displayimage();

}

function showright() {

    if(index < images.length-1){
        index++;
    }
    displayimage();
}

function autoslide() {

    if(index < images.length-1){
        index++;
    }
    displayimage();

}

next_btn.addEventListener("click" , showright);
previous_btn.addEventListener("click" , showleft);


displayimage();
setInterval(autoslide , 7000);

