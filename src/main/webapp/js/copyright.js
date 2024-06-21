let copyRightText = document.querySelector(".copyRightText");
let specificYear = "2024";
let currentYear = new Date().getFullYear();
if (specificYear == currentYear) {
    specificYear = ""
}
copyRightText.innerHTML = " copyright " + specificYear + "" + 
currentYear + "&copy; Midori Pol. All rights reserved";
