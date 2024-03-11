const form = document.getElementById("formLogin");

form.addEventListener("submit", (e) => {
  e.preventDefault();
  let error;
  const email = document.getElementById("email");
  const password = document.getElementById("password");
  if (!email.value.match(/^[\w_-]+@[\w-]+\.[a-z]{2,4}$/i)) {
    error = "Email incorrect";
  }
  if (!password.value) {
    error = "Veuillez renseigner un mot de passe";
  }
  if (error) {
    e.preventDefault();
    document.getElementById("error").innerHTML = error;
    return false;
  } else {
    window.location.href = "./index.html";
  }
});

//------------------------------------------------------------------------------------------------------------------------------//
// console.log(document.forms["formLogin"]["email"]);

// document.forms["formLogin"].addEventlistenner("submit", function (e) {
//   var error;
//   var inputs = this;
//   //traitement cas par cas (input unique)
//   if (inputs["email"].value != "sophie.bluel@test.tld") {
//     error = "Adresse email incorrecte";
//   }

//   //traitement générique
//   for (i = 0; i > inputs.length; i++) {
//     console.log(inputs[i]);
//     if (!inputs[i].value) {
//       error = "Veuillez renseigner tous les champs";
//       break;
//     }
//   }
//   if (error) {
//     e.preventDefaut();
//     document.getElementById("error").innerHtml = error;
//     return false;
//   } else {
//     alert("vous êtes connecté!");
//   }
// });
//-------------------------------------------------------------------------------------------------------------------------------------------//
//const formLogin = document.getElementById("formLogin");

// const inputs = document.querySelectorAll(
//   "input[type=email],input[type=password]"
// );
// const spanError = document.querySelectorAll("#formLogin  span");

// let email, password;

// const errorDisplay = (tag, message, valid) => {
//   const container = document.querySelector("." + tag + "-container");
//   const span = document.querySelector("." + tag + "-container > span");

//   if (!valid) {
//     formLogin.classList.add("error");
//     spanError.textContent = message;
//   } else {
//     formLogin.classList.remove("error");
//     spanError.textContent = message;
//   }
// };

// const emailChecker = (value) => {
//   if (!value.match(/^[\w_-]+@[\w-]+\.[a-z]{2,4}$/i)) {
//     errorDisplay("email", "Le mail n'est pas valide");
//     email = null;
//   } else {
//     errorDisplay("email", "", true);
//     email = value;
//   }
// };

// const passwordChecker = (value) => {
//   progressBar.classList = "";

//   if (
//     !value.match(
//       /^(?=.*?[A-Z])(?=(.*[a-z]){1,})(?=(.*[\d]){1,})(?=(.*[\W]){1,})(?!.*\s).{8,}$/
//     )
//   ) {
//     errorDisplay(
//       "password",
//       "Minimum de 8 caractères, une majuscule, un chiffre et un caractère spécial"
//     );

//     password = null;
//   } else if (value.length < 12) {
//     errorDisplay("password", "", true);
//     password = value;
//   } else {
//     errorDisplay("password", "", true);
//     password = value;
//   }
//   if (confirmPass) confirmChecker(confirmPass);
// };

// inputs.forEach((input) => {
//   input.addEventListener("input", (e) => {
//     switch (e.target.id) {
//       case "email":
//         emailChecker(e.target.value);
//         break;
//       case "password":
//         passwordChecker(e.target.value);
//         break;

//       default:
//         nul;
//     }
//   });
// });

// formLogin.addEventListener("submit", (e) => {
//   e.preventDefault();

//   if (email && password) {
//     const data = {
//       email,
//       password,
//     };
//     console.log(data);

//     inputs.forEach((input) => (input.value = ""));
//     email = null;
//     password = null;

//     alert("Connecté!");
//   } else {
//     alert("veuillez remplir correctement les champs");
//   }
// });
