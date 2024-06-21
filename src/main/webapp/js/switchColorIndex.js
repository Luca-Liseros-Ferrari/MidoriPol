let switchBtnFromMenu = document.querySelector(".switchFromMenu img");
switchBtnFromMenu.addEventListener("click", blackMode);

// BLACK MODE
function blackMode() {
  console.log("clickin")
  if (document.body.className === "out") {
    document.body.classList.remove("out");
    document.body.classList.add("full");
    switchBtnFromMenu.src =
      "./images/layoutImages/switchBtn/switchBlackMenu.png";
    textImg.src = "./images/indexImages/midoriPolBlack.png";
    logoImg.src = "./images/indexImages/logoBlack.png";
    copyRightText.style.color = "#39b04a";
    changeLinkColorToBlack();
    setBlackImg(textPhone);
    // Salva lo stato della modalità switch nel cookie o nello storage di sessione
    sessionStorage.setItem("switchMode", "green");
  } else if (document.body.className === "full") {
    document.body.classList.remove("full");
    document.body.classList.add("out");
    switchBtnFromMenu.src =
      "./images/layoutImages/switchBtn/switchGreenMenu.png";
    textImg.src = "./images/indexImages/midoriPol.png";
    logoImg.src = "./images/indexImages/logo.png";
    copyRightText.style.color = "#39b04a";
    changeLinkColorToGreen();
    setGreenImg(textPhone);
    // Salva lo stato della modalità switch nel cookie o nello storage di sessione
    sessionStorage.setItem("switchMode", "black");
  }
}

function changeLinkColorToBlack() {
    for (let i = 0; i < menuLinks.length; i++) {
      let singola = menuLinks[i];
      singola.style.color = "#000";
      singola.style.webkitTextFillColor = "#000";
      singola.style.webkitTextStrokeWidth = "2px";
      singola.style.webkitTextStrokeColor = "#39b04a";
      /*
      if (window.innerWidth < 500) {
        singola.style.color = "#000";
        singola.style.webkitTextFillColor = "#000";
        singola.style.webkitTextStrokeWidth = "2px";
        singola.style.webkitTextStrokeColor = "#39b04a";
      }
      */
    }
  }
  
  function changeLinkColorToGreen() {
    for (let i = 0; i < menuLinks.length; i++) {
      let singola = menuLinks[i];
      singola.style.color = "#39b04a";
      singola.style.webkitTextFillColor = "#39b04a";
      singola.style.webkitTextStrokeWidth = "0";
      singola.style.webkitTextStrokeColor = "none";
    }
  }

  /*
// Verifica se esiste uno stato della modalità switch salvato 
window.addEventListener("DOMContentLoaded", function () {
  const switchMode = sessionStorage.getItem("switchMode")
  if (switchMode === "green") {
    document.body.classList.remove("black")
    document.body.classList.add("green")
    switchBtnFromMenu.src = "images/layoutImages/switchBtn/switchGreenMenu.png";
    textImg.src = "./images/indexImages/midoriPolBlack.png"
    logoImg.src = "./images/indexImages/logoBlack.png"
  } else if (switchMode === "black") {
    document.body.classList.remove("green")
    document.body.classList.add("black")
    switchBtnFromMenu.src = "images/layoutImages/switchBtn/switchBlackMenu.png";
    textImg.src = "./images/indexImages/midoriPol.png"
    logoImg.src = "./images/indexImages/logo.png"
  } 
})

*/
