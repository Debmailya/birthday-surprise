export function initMusic(){

    const music = document.getElementById("bgMusic");
    const button = document.getElementById("musicBtn");

    if(!music || !button) return;

    let playing = false;

    button.addEventListener("click",()=>{

        if(playing){

            music.pause();
            button.innerHTML="🎵";

        }else{

            music.play();
            button.innerHTML="⏸️";

        }

        playing=!playing;

    });

}