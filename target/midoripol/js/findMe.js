
// routing from icon image
for (let [index, element] of imgIcons.entries()) {
  element.addEventListener("click", function () {
    if (index == 0) {
      window.location = "https://www.instagram.com/midoripol/?hl=it";
    }
    if (index == 1) {
      window.location =
        "https://open.spotify.com/intl-it/artist/7pt6rLLczVcFX0X2obVIKg";
    }
    if (index == 2) {
      window.location =
        "https://www.youtube.com/channel/UCaqVFXYIOb5ekUge0BOQjnw";
    }
    if (index == 3) {
      window.location = "mailto:midoripolofficial@gmail.com";
    }
  });
}

function linearOneFive (element) {
  element.style.transition = "all 1.5s ease-out";
}

function linearTwo (element) {
  element.style.transition = "all 2s ease-out";
}

  // transition effects
  window.addEventListener ("load", (event) => {
    linearOneFive(imgIcons[0]);
    imgIcons[0].style.left = "100px";

    setTimeout(function () {
     linearOneFive(imgIcons[1])
      imgIcons[1].style.left = "100px";
    }, 200);

    setTimeout(function () {
      linearTwo(imgIcons[2])
      imgIcons[2].style.left = "100px";
    }, 300);

    setTimeout(function () {
     linearTwo(imgIcons[3])
      imgIcons[3].style.left = "100px";
    }, 400);
  });

if (window.innerWidth < 1200 && window.innerWidth > 730) { 
window.addEventListener("load", (event) => {
  linearOneFive(imgIcons[0]);
  imgIcons[0].style.left = "55px";
  setTimeout(function () {
    linearOneFive(imgIcons[1])
    imgIcons[1].style.left = "55px";
  }, 200);
  setTimeout(function () {
     linearTwo(imgIcons[2])
    imgIcons[2].style.left = "55px";
  }, 300);
  setTimeout(function () {
    linearTwo(imgIcons[3])
    imgIcons[3].style.left = "55px";
  }, 400);

})
} if (window.innerWidth < 730) { 
   window.addEventListener("load", (event) => {
    linearOneFive(imgIcons[0]);
    imgIcons[0].style.left = "0px";
    setTimeout(function () {
      linearOneFive(imgIcons[1])
      imgIcons[1].style.left = "0px";
    }, 200);
    setTimeout(function () {
      linearTwo(imgIcons[2])
      imgIcons[2].style.left = "0px";
    }, 300);
    setTimeout(function () {
      linearTwo(imgIcons[3])
      imgIcons[3].style.left = "0px";
    }, 400);
});

}
