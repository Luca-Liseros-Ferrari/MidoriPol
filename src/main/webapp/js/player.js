let playBtn = document.getElementById("play")
let trackLength = document.getElementById("trackLength")
let track = document.getElementById("track")
let pauseBtn = document.getElementById("pause")
let timeInfo = document.querySelector(".timeInfo")
timeInfo.style.display = "none"
console.log(timeInfo)

playBtn.addEventListener("click", playMusic)
pauseBtn.addEventListener("click", pauseMusic)


function playMusic () {
playBtn.style.display = "none"
pauseBtn.style.display = "block"
timeInfo.style.display = "block";
// timeInfo.style.visibility = "visible"
if(track.paused) {
    track.play();
    startUpdateSeekBar();
}
   
}

function pauseMusic () {
    playBtn.style.display = "block"
    pauseBtn.style.display = "none"
    timeInfo.style.display = "none"
    track.pause();
    stopUpdateSeekBar();
}


// SLIDER 
let seek_slider = document.getElementById("seek_slider");
let curr_time = document.getElementById("current-time");
let total_duration = document.getElementById("total-duration");

  let charge = track.onloadedmetadata = function() {
  //total duration
  let durationMinutes = Math.floor(track.duration / 60);
  let durationSeconds = Math.floor(track.duration - durationMinutes * 60);
  if (durationMinutes < 10) { durationMinutes = "0" + durationMinutes; }
  if (durationSeconds < 10) { durationSeconds = "0" + durationSeconds; }
  total_duration.textContent = durationMinutes + ":" + durationSeconds;
  };
  //display ALWAYS duration time 
  window.addEventListener("load", charge);


    track.ontimeupdate = function() {
    // The currentTime property returns the current position of the track/video playback
    /////Passed time////
    var currentMinutes = Math.floor(track.currentTime / 60);
    var currentSeconds = Math.floor(track.currentTime % 60);
    if (currentMinutes < 10) { currentMinutes = "0" + currentMinutes; }
    if (currentSeconds < 10) { currentSeconds = "0" + currentSeconds; }
    curr_time.textContent = currentMinutes + ":" + currentSeconds;
    seek_slider.value = track.currentTime * (100 / track.duration);
  }

  let updateSeekBarInterval;

function startUpdateSeekBar() {
  updateSeekBarInterval = setInterval(updateSeekBarStyle, 1000);
}

// Arresta l'aggiornamento dello stile della barra
function stopUpdateSeekBar() {
  clearInterval(updateSeekBarInterval);
}

  function updateSeekBarStyle() {
    const progress = (track.currentTime / track.duration) * 100;
    seek_slider.style.background = `linear-gradient(to right, #39b04a 0%, #39b04a ${progress}%, #fff ${progress}%, #fff 100%)`;
  }

  seek_slider.onchange =  function () {
    
    // Calculate the seek position by the percentage of the seek slider and get the relative duration to the track
    move = track.duration * (seek_slider.value / 100);
   
    // Set the current track position to the calculated seek position
    track.currentTime = move;
  }

  seek_slider.onclick =  function () {
    
    // Calculate the seek position by the percentage of the seek slider and get the relative duration to the track
    move = track.duration * (seek_slider.value / 100);
   
    // Set the current track position to the calculated seek position
    track.currentTime = move;
  }
  
