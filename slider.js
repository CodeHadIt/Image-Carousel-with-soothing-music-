const toggleBtn = document.querySelector("#checkbox");
let musicBtn = document.querySelector("#music-icon");
let audioFile = document.querySelector("#audio");

let stopMusic = false;
let myInterval;

let counter = 1;

function slider() {
    let slideBtn = document.getElementById("radio" + counter)
    slideBtn.checked = true;
    counter++;
    if (counter > 9) {
        counter = 1
    }
};

function sliderToggle(){
    toggleBtn.checked ? myInterval = setInterval(slider, 3000) : clearInterval(myInterval);
}

toggleBtn.addEventListener("change", () => {
    sliderToggle();
})

musicBtn.addEventListener("click", ()=> {
    if(!stopMusic){
        audioFile.play();
        stopMusic = true;
    }
    else{
        audioFile.pause();
        stopMusic = false;
    }
    
})

