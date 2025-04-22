function stopanimation(){
    console.log("Animations Paused");
    let Animations = document.querySelectorAll(".format");
    for (var i = 0; i < Animations.length; i++){
        Animations[i].style.animation= "paused";
    }
}