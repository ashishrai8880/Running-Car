

var audio = document.createElement('audio');
audio.setAttribute('src' , 'tune/sound.mp3');
audio.loop = true;


let button = document.getElementsByClassName('sky')[0];


button.addEventListener('click',()=>{
    
    if(audio.paused || audio.currentTime==0){
        audio.play();
    }else{
        audio.pause();
    }
})

