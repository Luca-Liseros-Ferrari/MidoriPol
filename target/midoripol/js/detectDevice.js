function applyCSSBasedOnDevice() {
  var header = document.querySelector(".header");
  var isIOS = /iPad|iPhone|iPod/.test(navigator.userAgent) && !window.MSStream;
  var isSmallScreen = window.innerWidth <= 414;

  if (isIOS && isSmallScreen) {
    header.classList.add("ios");
  }
}
applyCSSBasedOnDevice();
