let errorMessages = document.querySelectorAll(".errorMessages");

// separo i messaggi di errore
let nameErrorMessage = errorMessages[0];
let mailErrorMessage = errorMessages[1];

// setto i bordi rossi
function redBorders(element, elementTwo) {
  element.style.border = " solid red 2px ";
  elementTwo.style.border = "solid red 2px ";
  resetBorders(element);
  resetBorders(elementTwo);
}
function singleErrorBorder(element) {
  element.style.border = " solid red 2px ";
  resetBorders(element);
}

function resetBorders(element) {
  setTimeout(function () {
    element.style.border = "solid 2px #39b04a";
  }, 2000);
}

// fn che fa sparire i messaggi di errore
function disappearErrorMessage(element) {
  setTimeout(function () {
    element.innerHTML = "";
  }, 2000);
}

function fillInMessage(element) {
  element.style.color = "red";
  element.innerHTML = "Please fill in all fields";
  disappearErrorMessage(element);
}

function InsertValidName(element) {
  element.style.color = "red";
  element.innerHTML =
    "enter your name <br> it should have at least three characters";
  disappearErrorMessage(element);
}

function InsertEmail(element) {
  element.style.color = "red";
  element.innerHTML = "Please insert a valid email";
  disappearErrorMessage(element);
}

document.getElementById("sendEmail").addEventListener("submit", validateForm);

function validateForm(event) {
  var nameInput = document.getElementById("name");
  var emailInput = document.getElementById("email");
  let nome = nameInput.value;
  let email = emailInput.value;

  /*
  email.addEventListener("input", function() {
    if (email.indexOf('@') === -1) {
      InsertEmail(mailErrorMessage);
      console.log("errorrrr")
    }
  })
  */
  event.preventDefault();

  if (nome.trim() === "" && email.trim() === "") {
    redBorders(nameInput, emailInput);
    for (let i = 0; i < errorMessages.length; i++) {
      fillInMessage(errorMessages[i]);
    }
    return;
  }

  if (email.trim() != "" && nome.length < 3) {
    // singleErrorBorder(nameErrorMessage)
    InsertValidName(nameErrorMessage);
    return;
  }
  if (email.trim() === "" || email.indexOf('@') === -1 && nome.length > 3) {
    // singleErrorBorder(mailErrorMessage)
    InsertEmail(mailErrorMessage);
    return;
  } else if (email.trim() === "" || email.indexOf('@') === -1 && nome.length < 3) {
    // singleErrorBorder(nameErrorMessage)
    InsertValidName(nameErrorMessage);
    // singleErrorBorder(mailErrorMessage)
    InsertEmail(mailErrorMessage);
    return;
  }

  // Verifica se l'indirizzo email è valido
  var emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  if (!email.match(emailRegex)) {
    singleErrorBorder(mailErrorMessage);
    InsertEmail(mailErrorMessage);
    return;
  }

  // invio della mail
  var data = {
    customerName: document.getElementById('name').value,
    mittenteEmail: document.getElementById('email').value,
    subject: document.querySelector(".active").textContent,
  };
  fetch('midoripol/services/sendemail', {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json'
    },
    body: JSON.stringify(data)
  })
      .then(function(response) {
        if (!response.ok) {
          throw new Error('Errore durante l\'invio della richiesta');
        } if (response.ok) {
          window.location = "./emailSent.html"
          console.log("email inviata")
        }
      })
      .catch(function(error) {
        console.error('Errore:', error);
      });
}
