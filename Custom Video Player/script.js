const video = document.getElementById("video");
const play = document.getElementById("play");
const pause = document.getElementById("pause");
const stop = document.getElementById("stop");
const volume_up = document.getElementById('volume-up');
const mute = document.getElementById('mute');
const volume_down = document.getElementById('volume-down');
const progress = document.getElementById("progress");
const timestamp = document.getElementById("timestamp");
const expand = document.getElementById('expand');
const forward = document.getElementById('forward');
const backward = document.getElementById('backward');

let videoArray = ["Guru Randhawa_Crazy Habibi Vs Decent Munda _Arjun Patiala_Sunny Leone, Diljit ,Varun S_ Sachin-Jigar ( 1080 X 1920 ).mp4", "SURMA_KAALA_Song___Jassie_Gill_Ft_Rhea_Chakraborty___Snappy,_Jass_Manak___Ar.mp4"];
let videoIndex = 0;

//Event Listener

window.onload = videoLoad(videoIndex);

video.addEventListener('click', changeVideoStatus);
video.addEventListener('play', changeIcon);
video.addEventListener('pause', changeIcon);
video.addEventListener('timeupdate', updateProgress);
video.addEventListener('dblclick', fullscreenMode);

play.addEventListener('click', changeVideoStatus);
pause.addEventListener('click', changeVideoStatus);
stop.addEventListener('click', stopVideo);

// forward.addEventListener('click', nextVideo);
// backward.addEventListener('click', previousVideo);


volume_up.addEventListener('click', videoVolumeDown);
mute.addEventListener('click', videoVolumeUp);
volume_down.addEventListener('click', videoMute);

progress.addEventListener('change', updateVideoProgress);

expand.addEventListener('click', fullscreenMode);



//Functions

function videoLoad(videoIndex) {
    video.innerHTML = '<source src="video/' + videoArray[videoIndex] + '" type="video/mp4">';
}

// function nextVideo() {

//     videoIndex++;
//     console.log(videoIndex);
//     videoLoad(videoIndex);
// }

// function previousVideo() {

//     videoIndex--;
//     console.log(videoIndex);
//     videoLoad(videoIndex);
// }

function changeVideoStatus() {


    if (video.paused) {
        video.play();

    } else {
        video.pause();

    }
}

function stopVideo() {
    video.currentTime = 0;
    video.pause();
}

function updateProgress() {
    progress.value = (video.currentTime / video.duration) * 100;

    let min = Math.floor(video.currentTime / 60);
    if (min < 10) {
        min = "0" + min;
    }
    let sec = Math.floor(video.currentTime % 60);
    if (sec < 10) {
        sec = "0" + sec;
    }

    timestamp.innerText = min + ":" + sec;
}

function updateVideoProgress() {
    video.currentTime = (progress.value * video.duration) / 100;
}

function changeIcon() {

    if (video.paused) {
        pause.style.display = "none";
        play.style.display = "inline-block";

    } else {
        play.style.display = "none";
        pause.style.display = "inline-block";

    }
}

function videoMute() {
    video.volume = 0.0;
    mute.style.display = 'inline-block';
    volume_down.style.display = 'none';
}

function videoVolumeUp() {
    video.volume = 1.0;
    volume_up.style.display = 'inline-block';
    mute.style.display = 'none';
}

function videoVolumeDown() {
    video.volume = 0.3;
    volume_down.style.display = 'inline-block';
    volume_up.style.display = 'none';
}

function fullscreenMode() {
    if (video.requestFullscreen) {
        video.requestFullscreen();
    }

}