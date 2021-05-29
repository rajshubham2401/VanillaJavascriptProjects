// Document Objects
const section = document.querySelector('section');
const music_container = document.getElementById("music-container");

const title = document.getElementById("title");
const progress_container = document.getElementById("progress-container");
const progress = document.getElementById("progress");

const audio = document.getElementById("audio");
const cover = document.getElementById("cover");

const play = document.getElementById("play");
const pause = document.getElementById("pause");
const prev = document.getElementById("prev");
const next = document.getElementById("next");

//Array Of Songs
let songs = ["Warriyo Mortals", "Senorita", "Spectre", "Riddle Remix", "without me"];

let songIndex = 0;

let playMode = 2;

// onload windows
loadSong(songIndex);

// Event Listeners

play.addEventListener("click", () => {
    let isAudioPlaying = music_container.classList.contains("play");
    if (isAudioPlaying) {
        pauseAudio();
    } else {

        playAudio();
    }
});
next.addEventListener('click', nextSong);
prev.addEventListener('click', prevSong);

audio.addEventListener("play", changeEffect);
audio.addEventListener("pause", changeEffect);
audio.addEventListener('timeupdate', updateProgress);
audio.addEventListener('ended', autoplay);

progress_container.addEventListener('click', setProgress);



// Functions
function loadSong() {
    title.innerText = `${songs[songIndex]}`;
    audio.src = `music/${songs[songIndex]}.mp3`;
    cover.src = `img/${songs[songIndex]}.jpg`;
}

function playAudio() {
    audio.play();
}

function pauseAudio() {
    audio.pause();
}

function changeEffect() {
    if (audio.paused) {
        music_container.classList.remove("play");
        play.innerHTML = '<i class="fas fa-play"></i>';
    } else {
        music_container.classList.add("play");
        play.innerHTML = '<i class="fas fa-pause"></i>';

    }
}

function updateProgress() {
    let song_current_time = audio.currentTime;
    let song_duration = audio.duration;
    let width_percent = ((song_current_time / song_duration) * 100).toFixed(1);
    console.log(width_percent);
    progress.style.width = `${width_percent}%`;
}

function setProgress(e) {
    let width = this.clientWidth;
    let clickPos = e.offsetX;
    let song_duration = audio.duration;

    audio.currentTime = (clickPos / width) * song_duration;
}


function nextSong() {
    songIndex++;
    if (songIndex == songs.length) {
        songIndex = 0;
    }
    loadSong(songIndex);
    playAudio();
}

function prevSong() {
    songIndex--;
    if (songIndex < 0) {
        songIndex = songs.length - 1;
    }
    loadSong(songIndex);
    playAudio();
}

function autoplay() {
    if (playMode == 1) { //Repeat One Mode
        playAudio();
    } else if (playMode == 2) { // Repeat All Mode
        nextSong();
    }
}