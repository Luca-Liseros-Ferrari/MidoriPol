let mixingMasteringContainerText = document.querySelector(
  ".mixingMasteringText"
);

let mixingTitle = document.querySelector(".mixingTitle");
let servicesItem = document.querySelectorAll(".servicesItem");

// icons
let icons = document.querySelector(".icons");

// creo icone
let deliveryIcon = document.createElement("img");
deliveryIcon.src = "./images/servicesIcons/hour.svg";
deliveryIcon.classList.add("delivery");
let revisionsIcon = document.createElement("img");
revisionsIcon.src = "./images/servicesIcons/recycling.svg";
revisionsIcon.classList.add("revisions");
let checked = document.createElement("img");
checked.src = "./images/servicesIcons/checked.svg";
checked.classList.add("checked");

// specifiche
let specificheLi = document.querySelectorAll(".specifiche li");

let mixingMasterUnoText =
  "Your song will be mixed and mastered to industry standard up to 15 separate stems. Wav + Mp3 Delivery";
let mixingMasterDueText =
  "Your song will be mixed and mastered to industry standard up to 30 separate stems. Wav + Mp3 Delivery";
let mixingMasterTreText =
  "Your song will be mixed and mastered to industry standard up to 50 separate stems. Wav + Mp3 Delivery";

let specificaLiUno = "15 stems";
let specificaLiDue = "30 stems";
let specificaLiTre = "50 stems";

// display first text each at beginning
mixingMasteringContainerText.innerHTML = mixingMasterUnoText;
<<<<<<< HEAD
icons.innerHTML = ` <span class="deliveryClass"> ${deliveryIcon.outerHTML} 4-day delivery </span>
                    <span class= "revisionsClass"> ${revisionsIcon.outerHTML} 3 revisions <span> `;
=======
icons.innerHTML = `
 <span class="deliveryClass"> ${deliveryIcon.outerHTML} 4-day delivery </span>
 <span class= "revisionsClass"> ${revisionsIcon.outerHTML} 3 revisions <span> `;
>>>>>>> ad82924 (Descrizione delle modifiche)
specificheLi[2].innerHTML = `${checked.outerHTML} ${specificaLiUno} `;

servicesItem.forEach(function (item) {
  item.addEventListener("click", function () {
    // Rimuove la classe "active" da tutti gli elementi
    servicesItem.forEach(function (otherItem) {
      if (otherItem !== item) {
        otherItem.classList.remove("active");
      }
    });
    item.classList.add("active");

    // mixingmastering and mastering selection
    if (item.classList.contains("mixMasterOne")) {
      mixingTitle.innerHTML = "Mixing/Mastering (15 stems) $50";
      mixingMasteringContainerText.innerHTML = mixingMasterUnoText;
      icons.innerHTML = "span 1";
      specificheLi[2].innerHTML = `${checked.outerHTML} ${specificaLiUno} `;
<<<<<<< HEAD
      icons.innerHTML = ` <span class="deliveryClass"> ${deliveryIcon.innerHTML} 4-day delivery </span>
                          <span class= "revisionsClass"> ${revisionsIcon.innerHTML} 3 revisions <span> `;
=======
      icons.innerHTML = `
<span class="deliveryClass"> ${deliveryIcon.outerHTML} 4-day delivery </span>
<span class= "revisionsClass"> ${revisionsIcon.outerHTML} 3 revisions <span> `;
>>>>>>> ad82924 (Descrizione delle modifiche)

    } else if (item.classList.contains("mixMasterTwo")) {
      mixingTitle.innerHTML = "Mixing/Mastering (16 - 30 stems) $70";
      mixingMasteringContainerText.innerHTML = mixingMasterDueText;
      icons.innerHTML = "span 2";
      specificheLi[2].innerHTML = `${checked.outerHTML} ${specificaLiDue} `;
<<<<<<< HEAD
      icons.innerHTML = ` <span class="deliveryClass"> ${deliveryIcon.innerHTML} 5-day delivery </span>
                          <span class= "revisionsClass"> ${revisionsIcon.innerHTML} 3 revisions <span> `;
=======
      icons.innerHTML = ` 
 <span class="deliveryClass"> ${deliveryIcon.outerHTML} 5-day delivery </span>
 <span class= "revisionsClass"> ${revisionsIcon.outerHTML} 3 revisions <span> `;
>>>>>>> ad82924 (Descrizione delle modifiche)

    } else if (item.classList.contains("mixMasterThree")) {
      mixingTitle.innerHTML = "Mixing/Mastering (31 - 50 stems) $90";
      mixingMasteringContainerText.innerHTML = mixingMasterTreText;
      icons.innerHTML = "span 3";
      specificheLi[2].innerHTML = `${checked.outerHTML} ${specificaLiTre} `;
<<<<<<< HEAD
      icons.innerHTML = ` <span class="deliveryClass"> ${deliveryIcon.innerHTML} 5-day delivery </span>
                          <span class= "revisionsClass"> ${revisionsIcon.innerHTML} 3 revisions <span> `;
=======
      icons.innerHTML = `
<span class="deliveryClass"> ${deliveryIcon.outerHTML} 5-day delivery </span>
<span class= "revisionsClass"> ${revisionsIcon.outerHTML} 3 revisions <span> `;
>>>>>>> ad82924 (Descrizione delle modifiche)

    }
  });
});
