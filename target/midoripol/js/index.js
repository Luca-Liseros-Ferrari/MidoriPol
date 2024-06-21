let logoMask = document.querySelector(".logoMask");
let bgIconMask = document.querySelector(".bgIconMask");
let wrapContainer = document.querySelector(".wrapContainer");
let logo = document.querySelector(".logo");
let provo = document.querySelector(".logoTry");
let text = document.querySelector(".text");
let container = document.querySelector(".container");
let header = document.querySelector(".header");
let textPhone = document.querySelector(".textPhone");

let menuContainer = document.querySelector(".menu");
let menuContainerUl = document.querySelector(".menuUl");
let menuLinks = document.getElementsByTagName("a");

let bgIcon = document.querySelector(".bgIcon");

// menu trig btn
logoMask.addEventListener("click", menu);
bgIconMask.addEventListener("click", menu);

// menu trig enter
document.addEventListener('keydown', onKeyDown);
function onKeyDown(event) {
  if(event.code == "Enter") {
        menu();
  }
}

// seleziono logo e testo del logo (MIDORI POL)
let logoImg = document.querySelector(".logoImg");
let textImg = document.querySelector(".textImg");

function dissolvo(element) {
  element.style.opacity = "1";
  element.style.transitionProperty = "opacity";
  element.style.transitionDuration = "2s";
  element.style.zIndex = "-999999";
}

function deleteMask(element) {
  element.style.display = "none";
}

function disappearLogoAfter(element) {
  setTimeout(function () {
    element.style.transitionProperty = "opacity";
    element.style.transitionDuration = "1s";
    element.style.opacity = "0";
    element.style.zIndex = "-999";
  }, 4000);
}

// desktop appare
function appare(element) {
  console.log("desktop appare");
  element.style.opacity = "1";
  element.style.transitionProperty = "opacity";
  element.style.transitionDelay = "3s";
  element.style.transitionDuration = "5s";
  element.style.height = "auto";
  element.style.width = "100%";
  element.style.display = "block";
}

// appare laptop
function appareLaptop(element) {
  console.log("height appare laptop");
  element.style.opacity = "1";
  element.style.transitionProperty = "opacity, margin";
  element.style.transitionDelay = "3s";
  element.style.transitionDuration = "5s";
  element.style.height = "auto";
  element.style.width = "100%"; // 100%
  element.style.display = "block";
}

// < 730
function appareCinquecento(element) {
  console.log("appare < 730");
  element.style.opacity = "1";
  element.style.transitionProperty = "opacity, margin";
  element.style.transitionDelay = "3s";
  element.style.transitionDuration = "5s";
  element.style.height = "auto";
  element.style.width = "380px";
  element.style.display = "block";
}

// < 730
function appareMobile(element) {
  console.log("appare < 730");
  element.style.opacity = "1";
  element.style.transitionProperty = "opacity, margin";
  element.style.transitionDelay = "3s";
  element.style.transitionDuration = "5s";
  element.style.height = "auto";
  element.style.width = "480px";
  element.style.display = "block";
}

// < 412
function appareSmall(element) {
  console.log("appare < 412");
  element.style.opacity = "1";
  element.style.transitionProperty = "opacity, margin";
  element.style.transitionDelay = "3s";
  element.style.transitionDuration = "5s";
  element.style.height = "auto";
  element.style.width = "260px"; // 100%
}

// < 300
function appareUltraSmall(element) {
  console.log("appare < 300");
  element.style.opacity = "1";
  element.style.transitionProperty = "opacity, margin";
  element.style.transitionDelay = "3s";
  element.style.transitionDuration = "5s";
  element.style.height = "auto";
  element.style.width = "260px"; // 100%
}

// desktop sposto > 1200
function sposto(element) {
  console.log("desktop sposto");
  element.style.transitionProperty = "height, margin";
  element.style.display = "flex";
  element.style.transitionDelay = "1s";
  element.style.transitionDuration = "2.5s";
  element.style.height = "431px";
  element.style.marginTop = "0"; // 55
  element.style.marginLeft = "91px"; // 66
}

// desktop resize > 1200
function resize(element) {
  console.log("desktop resize");
  element.style.transitionProperty = "width";
  element.style.transitionDelay = "1s";
  element.style.transitionDuration = "3s";
  element.style.width = "676px"; // 547
  element.classList.add("logoAfter");
  disappearLogoAfter(element);
}

// < 1200
function spostoMedium(element) {
  console.log("sposto medium");
  element.style.transitionProperty = "height, margin";
  element.style.display = "flex";
  element.style.transitionDelay = "1s";
  element.style.transitionDuration = "2.5s";
  element.style.height = "306px";
  element.style.marginTop = "0";
  element.style.marginLeft = "61px";
}

// < 1200
function resizeMedium(element) {
  console.log("resize medium ");
  element.style.transitionProperty = "width";
  element.style.transitionDelay = "1s";
  element.style.transitionDuration = "3s";
  element.style.width = "458px"; // 457
  element.classList.add("logoAfter");
  disappearLogoAfter(element);
}

// < 730
function spostoMobile(element) {
  console.log("sposto < 730");
  element.style.transitionProperty = "height, margin";
  element.style.display = "flex";
  element.style.transitionDelay = "1s";
  element.style.transitionDuration = "2.5s";
  element.style.height = "auto"; // auto
  element.style.marginTop = "-81px"; // -81px
  element.style.marginLeft = "32px";
}

// < 730
function resizeMobile(element) {
  console.log("resize < 730");
  element.style.scale = "1";
  element.style.transitionProperty = "width, margin";
  element.style.transitionDelay = "1s";
  element.style.transitionDuration = "3s";
  element.style.width = "315px";
  // element.style.position = "relative";
  element.classList.add("logoAfter");
  disappearLogoAfter(element);
}

// < 730 > 868 height
function spostoMobileHeight(element) {
  console.log("sposto < 730 height > 868");
  element.style.transitionProperty = "height, margin";
  element.style.display = "flex";
  element.style.transitionDelay = "1s";
  element.style.transitionDuration = "2.5s";
  element.style.height = "240px"; // auto
  element.style.marginTop = "0"; // -81px
  element.style.marginLeft = "43px";
}

// < 730 > 868 height
function resizeMobileHeight(element) {
  console.log("resize < 730 height > 868");
  element.style.scale = "1";
  element.style.transitionProperty = "width, margin";
  element.style.transitionDelay = "1s";
  element.style.transitionDuration = "3s";
  element.style.width = "307px";
  // element.style.position = "relative";
  element.classList.add("logoAfter");
  disappearLogoAfter(element);
}

// < 500
function spostoCinquecento(element) {
  console.log("sposto < 500");
  element.style.transitionProperty = "height, margin";
  element.style.display = "flex";
  element.style.transitionDelay = "1s";
  element.style.transitionDuration = "2.5s";
  element.style.height = "209px";
  element.style.marginTop = "0px";
  element.style.marginLeft = "35px";
}
// < 500
function resizeCinquecento(element) {
  console.log("resize < 500");
  element.style.scale = "1";
  element.style.transitionProperty = "width, margin";
  element.style.transitionDelay = "1s";
  element.style.transitionDuration = "3s";
  element.style.width = "190px";
  element.style.position = "relative";
  element.classList.add("logoAfter");
  disappearLogoAfter(element);
}

// < 600 >= 868
function spostoSeicento(element) {
  console.log("sposto < 600");
  element.style.transitionProperty = "height, margin";
  element.style.display = "flex";
  element.style.transitionDelay = "1s";
  element.style.transitionDuration = "2.5s";
  element.style.height = "215px";
  element.style.marginTop = "0";
  element.style.marginLeft = "31px";
}
// < 600 >= 868
function resizeSeicento(element) {
  console.log("resize < 600");
  element.style.scale = "1";
  element.style.transitionProperty = "width, margin";
  element.style.transitionDelay = "1s";
  element.style.transitionDuration = "3s";
  element.style.width = "255px";
  element.style.position = "relative";
  element.classList.add("logoAfter");
  disappearLogoAfter(element);
}

// sposto laptop
function spostoLaptop(element) {
  console.log("height sposto laptop");
  element.style.transitionProperty = "height, margin";
  element.style.display = "flex";
  element.style.transitionDelay = "1s";
  element.style.transitionDuration = "2.5s";
  element.style.height = "368px";
  element.style.marginTop = "-46px";
  element.style.marginLeft = "50px";
  // disappearLogoAfter(element);
}

// resize laptop
function resizeLaptop(element) {
  console.log("height resize laptop");
  element.style.transitionProperty = "width, margin";
  element.style.transitionDelay = "1s";
  element.style.transitionDuration = "3s";
  element.style.width = "463px";
  element.style.position = "relative";
  element.classList.add("logoAfter");
  disappearLogoAfter(element);
}
// < 412
function spostoSmallHeight(element) {
  console.log("sposto < 412");
  element.style.transitionProperty = "height, margin";
  element.style.display = "flex";
  element.style.transitionDelay = "1s";
  element.style.transitionDuration = "2.5s";
  element.style.height = "178px";
  element.style.marginTop = "0";
  element.style.marginLeft = "27px"; // 27
}

// < 412
function resizeSmallHeight(element) {
  console.log("resize < 412 height > 868");
  element.style.scale = "1";
  element.style.transitionProperty = "width, margin";
  element.style.transitionDelay = "1s";
  element.style.transitionDuration = "3s";
  element.style.width = "128px";
  element.classList.add("logoAfter");
  disappearLogoAfter(element);
}

// comparsa progressiva voci menu
function appearMenu(menuContainer, menuContainerUl, singola) {
  menuContainer.style.display = "grid";
  menuContainerUl.style.display = "grid";
  menuContainer.style.transitionProperty = "opacity";
  menuContainer.style.transitionDuration = "5s";
  singola.style.transitionProperty = "opacity";
  singola.style.transitionDuration = "3s";
  singola.style.display = "grid";
  setTimeout(function () {
    menuContainer.style.opacity = "1";
  }, 1000);
  setTimeout(function () {
    menuLinks[0].style.opacity = "1";
  }, 1500);
  setTimeout(function () {
    menuLinks[1].style.opacity = "1";
  }, 2000);
  setTimeout(function () {
    menuLinks[2].style.opacity = "1";
  }, 2500);
  setTimeout(function () {
    menuLinks[3].style.opacity = "1";
  }, 3000);
  setTimeout(function () {
    menuLinks[4].style.opacity = "1";
  }, 3500);
  setTimeout(function () {
    menuLinks[5].style.opacity = "1";
  }, 4000);
}

// cambio colore degli elementi se la classe è black o green
function setBlackImg(element) {
  if (window.innerHeight < 700 && window.innerWidth > 500) {
    element.setAttribute("src", "./images/indexImages/midoriGreenMedium.png");
    element.setAttribute("alt", "logo");
  }
  if (window.innerWidth < 730 && window.innerWidth > 500) {
    element.setAttribute("src", "./images/indexImages/midoriBlackMedium.png");
    element.setAttribute("alt", "logo");
  } else if (window.innerWidth < 500) {
    element.setAttribute("src", "./images/indexImages/midoriBlackSmall.png");
    element.setAttribute("alt", "logo");
  } else if (window.innerWidth < 1200) {
    element.setAttribute("src", "./images/indexImages/midoriBlackMedium.png");
    element.setAttribute("alt", "logo");
  } else {
    element.setAttribute("src", "./images/indexImages/midoriBlackBig.png");
    element.setAttribute("alt", "logo");
  }
  element.style.cursor = "pointer";
  element.addEventListener("click", goHome);
}
function setGreenImg(element) {
  if (window.innerHeight < 700 && window.innerWidth > 500) {
    element.setAttribute("src", "./images/indexImages/midoriGreenMedium.png");
    element.setAttribute("alt", "Logo");
  }
  if (window.innerWidth < 730 && window.innerWidth > 500) {
    element.setAttribute("src", "./images/indexImages/midoriGreenMedium.png");
    element.setAttribute("alt", "Logo");
  } else if (window.innerWidth < 500) {
    element.setAttribute("src", "./images/indexImages/midoriGreenSmall.png");
    element.setAttribute("alt", "Logo");
  } else if (window.innerWidth < 1200) {
    element.setAttribute("src", "./images/indexImages/midoriGreenMedium.png");
    element.setAttribute("alt", "Logo");
  } else {
    element.setAttribute("src", "./images/indexImages/midoriGreenBig.png");
    element.setAttribute("alt", "Logo");
  }
  element.style.cursor = "pointer";
  element.addEventListener("click", goHome);
}
function setBlackSwitch(element) {
  element.src = "images/layoutImages/switchBtn/SwitchBlackMenu.png";
  element.setAttribute("alt", "Switch Button Black");
}
function setGreenSwitch(element) {
  element.src = "images/layoutImages/switchBtn/switchGreenMenu.png";
  element.setAttribute("alt", "Switch Button Green");
}
function setCopyRightToGreen(element) {
  element.style.color = "#39b04a";
}

// torno alla home se clicco il logo dopo aver fatto comparire il menu
function goHome() {
  window.location = "./index.html";
}
function disappearElement (element) {
  element.style.opacity = "0";
}
function marginToZero (element) {
  element.style.margin = "0";
}
// trig alle fn delle transizioni in base alla width e/o height della window e invocazione di appearMenu
function menu() {
  container.style.display = "grid";
  bgIcon.style.display = "none";
  setTimeout(function () {
    for (let i = 0; i < menuLinks.length; i++) {
      let singola = menuLinks[i];
      singola.style.opacity = "0";
      appearMenu(menuContainer, menuContainerUl, singola);
    }
  }, 2000);
  if (textImg.style.opacity === "0") {
    window.location = " ./index.html";
  } else {
    if (document.body.className === "out") {
      setGreenImg(textPhone);
      setGreenSwitch(switchBtnFromMenu);
      setCopyRightToGreen(copyRightText);
      changeLinkColorToGreen();
    } else if (document.body.className === "full") {
      setBlackImg(textPhone);
      setBlackSwitch(switchBtnFromMenu);
      setCopyRightToGreen(copyRightText);
      changeLinkColorToBlack();
    } if (window.innerWidth < 300) {
      console.log("menu < 300 height > 868");
      dissolvo(textImg);
      deleteMask(logoMask);
      spostoSmallHeight(logo);
      resizeSmallHeight(logoImg);
      disappearElement(textPhone);
      marginToZero(textPhone);
      disappearElement(textImg);
      setTimeout(function () {
        appareUltraSmall(textPhone);
      }, 100);
    } else if (window.innerWidth < 412) {
      console.log("menu < 412");
      dissolvo(textImg);
      deleteMask(logoMask);
      spostoSmallHeight(logo);
      resizeSmallHeight(logoImg);
      disappearElement(textPhone);
      marginToZero(textPhone);
      disappearElement(textImg);
      setTimeout(function () {
        appareSmall(textPhone);
      }, 100);
    } else if (window.innerWidth < 730 && window.innerWidth > 500) {
      console.log("menu < 730 > 500 height > 868");
      dissolvo(textImg);
      deleteMask(logoMask);
      spostoMobileHeight(logo);
      resizeMobileHeight(logoImg);
      disappearElement(textPhone);
      marginToZero(textPhone);
      disappearElement(textImg);
      setTimeout(function () {
        appareMobile(textPhone);
      }, 100);
    } else if (window.innerWidth < 500) {
      console.log("menu < 500");
      dissolvo(textImg);
      deleteMask(logoMask);
      spostoCinquecento(logo);
      resizeCinquecento(logoImg);
      disappearElement(textPhone);
      marginToZero(textPhone);
      disappearElement(textImg);
      setTimeout(function () {
        appareCinquecento(textPhone);
      }, 100);
    } else if (window.innerWidth < 1200) {
      console.log("menu < 1200");
      dissolvo(textImg);
      deleteMask(logoMask);
      spostoMedium(logo);
      resizeMedium(logoImg);
      disappearElement(textPhone);
      marginToZero(textPhone);
      disappearElement(textImg);
      setTimeout(function () {
        appare(textPhone);
      }, 100);
    } else if (window.innerWidth > 1200) {
      console.log("menu desktop");
      dissolvo(textImg);
      deleteMask(logoMask);
      sposto(logo);
      resize(logoImg);
      disappearElement(textPhone);
      disappearElement(textImg);
      setTimeout(function () {
        appare(textPhone);
      }, 100);
    }
  }
}


