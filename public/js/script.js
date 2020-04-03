// Array of showcase songs
const songs = [
  "damn.mp3",
  "frogs.mp3",
  "down-in-a-hole.mp3",
  "sickman.mp3"
]

const names = [
  "Damn that river - Live",
  "Frogs - Live",
  "Down In A Hole - Live",
  "Sickman - Live"
]
const source = document.getElementById("source");
const player = document.getElementById("player");
const play = document.getElementById("play");
// Setting the source of song on page load
var a = 2;
const whatsA = () => {
  if (a == null) {
    a = 0;

  } else {
    a = a;

  }
  return a;
}
// whatsA();
const trackInit = () => {
  source.src = "/assets/audio/" + songs[2];
  player.load();
  document.getElementById("currentSong").innerText = names[2];
}
// Playing/pausing audio when icon is clicked
const playAudio = () => {
  if (player.paused) {
    player.play();
    play.setAttribute("id", "pause");
  } else {
    player.pause();
    play.removeAttribute("id");
  }

}
// Loop songs once they've finished
player.addEventListener('ended', () => {
  a = a + 1;
  source.src = "/assets/audio/" + songs[a];
  player.load();
  player.play();
  return a;
});
// Skipping audio to next song
const next = () => {
  // To loop the tracks
  a = a + 1;

  if (a > 3) {
    a = 0;
  }
  source.src = "/assets/audio/" + songs[a];
  document.getElementById("currentSong").innerText = names[a];
  if (player.paused) {
    player.play();
    play.setAttribute("id", "pause");
  }
  player.load();
  player.play();

  return a;
}
// Skipping audio to next song
const lastTrack = () => {

  if (a < 0) {
    a = 4;
  }
  a = a - 1;
  if (a == -1) {
    a = 3
  }

  source.src = "/assets/audio/" + songs[a];
  document.getElementById("currentSong").innerText = names[a];
  if (player.paused) {
    player.play();
    play.setAttribute("id", "pause");
  }
  player.load();
  player.play();


  return a;
}
if (player.currentTime == player.duration) {
  source.src = "/assets/audio/" + songs[a++];
}

// Progress bar
const updateProgress = () => {
  if (player.currentTime > 0) {
    const progressBar = document.getElementById('progress');
    progressBar.value = (player.currentTime / player.duration) * 100;
  }
}

// Corner Video
const videoCon = document.getElementById("corner-img");
const exit = document.getElementById("exit-cross");
const modal = document.getElementById("modal");
const video = document.getElementById("video-popup");
// Enlarging video and centering it in page
videoCon.onclick = () => {
  modal.style.display = "block";
  player.pause();
}
exit.onclick = () => {
  modal.style.display = "none";
  video.pause();
}

// Burger menu on smallscreens 
const burger = document.getElementById("burger-menu");
const menu = document.getElementById("menu");
const menuCross = document.getElementById("menu-cross");
const topMenu = document.getElementById("top-menu");
const navbar = document.getElementsByClassName("navbar");


var x = 0;

burger.onclick = () => {
  menu.style.display = "block";
  return x;
}
menuCross.onclick = () => {
  menu.style.display = "none";
}
// When screen size is more than 640px hide burger menu and contents
$(window).resize(function () {
  var wH = $(window).height();
  var wW = $(window).width();
  var wS = $(this).scrollTop();
  if (wW > 721 && wS < 80) {
    burger.style.display = "none";
    menu.style.display = "none";
    videoCon.style.display = "block";
    topMenu.style.display = "inline-block";
  } else if (wW <= 720) {
    videoCon.style.display = "none";
    topMenu.style.display = "none";
    burger.style.display = "block";

  }
});
// On scroll show burger menu on desktop
// $(window).scroll(function () {
//   var wH = $(window).height();
//   var wW = $(window).width();
//   var wS = $(this).scrollTop();

//   if (wW > 720 && wS > 80) {
//     burger.style.display = "block";
//   } else if (wW >= 720 && wS < 80) {
//     burger.style.display = "none";
//     menu.style.display = "none"
//   }
// })

const vidSrc = document.getElementById("vidSource");
const fullCon = document.getElementById("fullCon");
const videoFl = document.getElementById("videoFl");
const col = document.getElementById("collection");

const urlInfo = "?autoplay=0&showinfo=0&controls=0&rel=0$enablejsapi=1&modestbranding=1"

const fullVideo = (e) => {

  if (window.screen.width > "643px") {
    var name = event.srcElement.getElementsByClassName("colSource")[0].src;
    col.scrollIntoView();
    videoFl.src = name + urlInfo;
    // console.log(event.srcElement);

    // videoFl.load();
    // videoFl.play();


    fullCon.style.display = "block";
    // console.log(event.srcElement);
    // event.srcElement.controls = true;
  } else {
    var name = event.srcElement.getElementsByClassName("colSource")[0].src;
    col.scrollIntoView();
    videoFl.src = name + urlInfo;
    // console.log(event.srcElement);

    // videoFl.load();
    // videoFl.play();


    fullCon.style.display = "block";
  }
}

// Image Modal for gallery - NOT Being Used
const imgModal = document.getElementById("gallery-modal");
// Displaying the modal and image 2x biggere
// const imgGallery = (e) => {
//   //Splitting the src element at .png so can add @2x.png
//   imgModal.style.display = "block";
//   const img = document.getElementById("clickedImg");

//   var str = event.srcElement.src;
//   // var array = str.split(".");
//   // img.src = array[0] + "." + array[1] + "." + array[2] + "@2x.png";
//   var array = str.split(".");
//   img.src = array[0] + "@2x.png";
//   // console.log(event.srcElement.src);
//   // console.log(array[0] + "@2x.png");
// }
// Close for cross
const closeModal = () => {
  imgModal.style.display = "none";
}