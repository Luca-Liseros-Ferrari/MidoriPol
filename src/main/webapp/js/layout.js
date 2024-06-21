let logo = document.querySelectorAll(".logo");
let menuLinks = document.querySelectorAll(".menuLinks");
let switchContainer = document.querySelector(".switchFromMenu");
let switchBtnFromMenu = document.querySelector(".switchFromMenu img");
let content = document.querySelector(".content");
let childContent = document.querySelector(".pageContent");
let menuContainer = document.querySelector(".menu");
let menuContainerUl = document.querySelector(".menuUl");
let imgIcons = document.querySelectorAll(".imgIcons");
let imgIconsImg = document.querySelectorAll(".imgIcons img");
let textIcons = document.querySelectorAll(".textIcons");

// creo menu e routing
const nomi = ["home", "bio", "find me", "music", "services"];
const urls = [
  "index.html",
  "bio.html",
  "find_me.html",
  "music.html",
  "services.html",
];
menuLinks.forEach(function (item, index) {
  item.innerHTML = nomi[index];
  // routing
  item.addEventListener("click", function () {
    window.location.href = urls[index];
  });
});

// go to menu
for (let i = 0; i < logo.length; i++) {
  logo[i].addEventListener("click", openMenu);
}

// switch trig btn
switchBtnFromMenu.addEventListener("click", changeColor);

function openMenu() {
  console.log("menu");

  if (menuContainer.style.display != "grid") {
    menuContainer.style.display = "grid";
  } else {
    menuContainer.style.display = "none";
  }

  for (let i = 0; i < menuLinks.length; i++) {
    let singola = menuLinks[i];
    if (singola.style.display != "grid") {
      singola.style.display = "grid";
      childContent.style.display = "none";
    } else if (singola.style.display == "grid") {
      singola.style.display = "none";
      childContent.style.display = "grid";
    }
  }
  if (switchContainer.style.display !== "block") {
    switchContainer.style.display = "block";
  } else {
    switchContainer.style.display = "none";
  }
}

function changeColor() {
  console.log("change  color ");
  if (document.body.className === "out") {
    document.body.classList.remove("out");
    document.body.classList.add("full");
    changeLinkColorToBlack();

    // ciclo sulle tre immagini logo
    for (let i = 0; i < logo.length; i++) {
      logo[i].addEventListener("click", openMenu);
      setBlackImg(logo[i]);
    }
    // ciclo sulle icone
    for (let i = 0; i < imgIconsImg.length; i++) {
      changeIconsToBlack(imgIconsImg[i]);
    }

    // changing switch
    setBlackSwitch(switchBtnFromMenu);

    // Salva lo stato della modalità switch nel cookie o nello storage di sessione
    sessionStorage.setItem("switchMode", "green");
  } else if (document.body.className === "full") {
    document.body.classList.remove("full");
    document.body.classList.add("out");
    changeLinkColorToGreen();

    // ciclo sulle tre immagini logo nere
    for (let i = 0; i < logo.length; i++) {
      logo[i].addEventListener("click", openMenu);
      setGreenImg(logo[i]);
    }

    // ciclo sulle icone
    for (let i = 0; i < imgIconsImg.length; i++) {
      changeIconsToGreen(imgIconsImg[i]);
    }

    // changing switch
    setGreenSwitch(switchBtnFromMenu);
    // Salva lo stato della modalità switch nel cookie o nello storage di sessione
    sessionStorage.setItem("switchMode", "black");
  }
}

function setBlackImg(element) {
  if (window.innerWidth < 730 && window.innerWidth > 500) {
    element.setAttribute("src", "./images/layoutImages/midoriBlackMedium.png");
  } else if (window.innerWidth < 500) {
    element.setAttribute("src", "./images/layoutImages/midoriBlackSmall.png");
  } else if (
    (window.innerHeight <= 868 && window.innerWidth <= 1200) ||
    (window.innerHeight <= 868 && window.innerWidth >= 1200)
  ) {
    element.setAttribute("src", "./images/layoutImages/midoriBlackMedium.png");
  } else if (window.innerWidth < 1200) {
    element.setAttribute("src", "./images/layoutImages/midoriBlackMedium.png");
  } else {
    element.setAttribute("src", "./images/layoutImages/midoriBlackBig.png");
  }
}

function setGreenImg(element) {
  if (window.innerWidth < 730 && window.innerWidth > 500) {
    element.setAttribute("src", "./images/layoutImages/midoriGreenMedium.png");
  } else if (window.innerWidth < 500) {
    element.setAttribute("src", "./images/layoutImages/midoriGreenSmall.png");
  } else if (
    (window.innerHeight <= 868 && window.innerWidth <= 1200) ||
    (window.innerHeight <= 868 && window.innerWidth >= 1200)
  ) {
    element.setAttribute("src", "./images/indexImages/midoriGreenMedium.png");
  } else if (window.innerWidth < 1200) {
    element.setAttribute("src", "./images/layoutImages/midoriGreenMedium.png");
  } else {
    element.setAttribute("src", "./images/layoutImages/midoriGreenBig.png");
  }
}

function changeIconsToBlack(element) {
  var src = element.getAttribute("src");
  if (src.endsWith("/igGreen.svg")) {
    element.setAttribute("src", "./images/findMeIcons/igBlack.svg");
  } else if (src.endsWith("/spotifyGreen.svg")) {
    element.setAttribute("src", "./images/findMeIcons/spotifyBlack.svg");
  } else if (src.endsWith("/ytGreen.svg")) {
    element.setAttribute("src", "./images/findMeIcons/ytBlack.svg");
  } else if (src.endsWith("/emailGreen.svg")) {
    element.setAttribute("src", "./images/findMeIcons/emailBlack.svg");
  }
}
function changeIconsToGreen(element) {
  var src = element.getAttribute("src");
  if (src.endsWith("/igBlack.svg")) {
    element.setAttribute("src", "./images/findMeIcons/igGreen.svg");
  } else if (src.endsWith("/spotifyBlack.svg")) {
    element.setAttribute("src", "./images/findMeIcons/spotifyGreen.svg");
  } else if (src.endsWith("/ytBlack.svg")) {
    element.setAttribute("src", "./images/findMeIcons/ytGreen.svg");
  } else if (src.endsWith("/emailBlack.svg")) {
    element.setAttribute("src", "./images/findMeIcons/emailGreen.svg");
  }
}

function setBlackSwitch(element) {
  element.src = "images/layoutImages/switchBtn/switchBlackMenu.png";
}
function setGreenSwitch(element) {
  element.src = "images/layoutImages/switchBtn/switchGreenMenu.png";
}

function changeLinkColorToBlack() {
  for (let i = 0; i < menuLinks.length; i++) {
    let singola = menuLinks[i];
    singola.style.color = "#000";
    singola.style.webkitTextFillColor = "black";
    singola.style.webkitTextStrokeWidth = "2px";
    singola.style.webkitTextStrokeColor = "#39b04a";

    /*
    if (window.innerWidth < 500) {
      singola.style.color = "#000";
      singola.style.webkitTextFillColor = "black";
      singola.style.webkitTextStrokeWidth = "2px";
      singola.style.webkitTextStrokeColor = "#39b04a";
    }
    */
  }

  childContent.style.color = "#39b04a";
  childContent.style.webkitTextFillColor = "#39b04a";
  childContent.style.webkitTextStrokeWidth = "0";
  childContent.style.webkitTextStrokeColor = "#39b04a";
}

function changeLinkColorToGreen() {
  for (let i = 0; i < menuLinks.length; i++) {
    let singola = menuLinks[i];
    singola.style.color = "#39b04a";
    singola.style.webkitTextFillColor = "#39b04a";
    singola.style.webkitTextStrokeWidth = "0";
    singola.style.webkitTextStrokeColor = "none";
  }
  /*
  childContent.style.color = "#39b04a";
  childContent.style.webkitTextFillColor = "#39b04a";
  childContent.style.webkitTextStrokeWidth = "0";
  childContent.style.webkitTextStrokeColor = "#39b04a";
  */
}
