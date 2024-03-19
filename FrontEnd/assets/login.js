document.addEventListener("DOMContentLoaded", function () {
  const loginForm = document.querySelector("form");
  loginForm.addEventListener("submit", (event) => {
    event.preventDefault();

    const emailInput = document.getElementById("email").value;
    const passwordInput = document.getElementById("password").value;

    fetch("http://localhost:5678/api/users/login", {
      method: "POST",
      headers: {
        "Content-type": "application/json",
      },
      body: JSON.stringify({
        email: emailInput,
        password: passwordInput,
      }),
    }).then((res) => {
      if (res.ok) {
        const data = res.json();
        const token = data.token;
        window.sessionStorage.setItem("token", token);
        window.localStorage.href = "../index.html";
      } else {
        console.log("Authenfication inconnu !");
      }
    });
  });
});
/******************************************************************************************************************************* */
// // document
// //   .querySelector("input[type=submit")
// //   .addEventListener("click", function () {
// //     var valid = true;
// //     for (let input of document.querySelectorAll(
// //       'input[type="email"], input[type="password"]'
// //     )) {
// //       valid &= input.reportValidity();
// //       if (!valid) {
// //         break;
// //       }
// //     }
// //     if (valid) {
// //       window.location.href = "../index.html";
// //     }
// //   });

// // /******************************************************************************************************************************** */

// Exécution js code lorsque la page est chargé
// document.addEventListener("DOMContentLoaded", function () {
//   document.getElementById("formLogin").addEventListener("submit", (e) => {
//     e.preventDefault();
//     //Collecte des données à partir du formulaire
//     const user = {
//       email: document.querySelector("#email").value,
//       password: document.querySelector("#password").vlaue,
//     };
//     //Envoyer une requete afin de s'anthentifier
//     fetch("http://localhost:5678/api/users/login", {
//       methode: "POST",
//       headers: { "Content-type": "application/json" },
//       body: JSON.stringify(user),
//     })
//       .then((res) => {
//         switch (res.status) {
//           case 500:
//           case 503:
//             alert("Erreur côté serveur !");
//             break;
//           case 401:
//           case 404:
//             alert("Email ou mot de passe incorrect !");
//             break;
//           case 200:
//             console.log("Authenfication réussie.");
//             return response.json();
//             break;
//           default:
//             alert("Erreur inconnue !");
//             break;
//         }
//       })
//       .then((data) => {
//         console.log(data);
//         localStorage.setItem("token", data.token);
//         localStorage.setItem("userId", data.userId);
//         /* Se rediger vers la page du site (index.html) */
//         location.href = "./index.html";
//       })
//       .catch(function (err) {
//         console.log(err);
//       });
//   });
// });

// ******************************************************************************************************* */

// const form = document.getElementById("formLogin");
// const inputs = document.querySelectorAll(
//   'input[type="email"], input[type="password"]'
// );
// console.log(inputs);
// let email, password;

// const emailChecker = (value) => {
//   const errorMail = document.querySelector(".emailError");
//   if (value != "sophie.bluel@test.tld") {
//     errorMail.classList.add("error span");
//     errorMail.textContent = "Email est incorrect";
//     email = null;
//   }
//   // if (!value.macth(/^[\w_-]+@[\w-]+\.[a-z]{2,4}$/i)) {
//   //   email.classList.add("error span");
//   //   errorMail.textContent = "Email est incorrect";
//   //   email.null;
//   // }
//   else {
//     errorMail.classList.remove("error span");
//     errorMail.textContent = "";
//     email = value;
//   }
// };
// const passwordChecker = (value) => {
//   const errorPass = document.querySelector(".passError");
//   if (!value.match(/^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)[a-zA-Z\d]{5,}$/)) {
//     errorPass.classList.add("#formLogin span ");
//     errorPass.textContent =
//       " Minimum cinq caractères, au moins une lettre majuscule, une lettre minuscule et un chiffre";
//     password = null;
//   } else {
//     errorPass.classList.remove("#formLogin span ");
//     errorPass.textContent = "";
//     password = value;
//   }
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
// form.addEventListener("submit", (e) => {
//   e.preventDefaut();
//   if (email && password) {
//     const data = {
//       email,
//       password,
//     };
//     console.log(data);
//     email = null;
//     password = null;
//     window.location.href = "./index.html";
//   } else {
//     alert("Veuillez remplir correctement les champs");
//   }
// });
// /********************************************************************************************************* */
// // async function fectchUsers() {
// //   await fetch("http://localhost:5678/api/users")
// //     .then((response) => response.json)
// //     .then((users) => console.log(users))
// //     .catch((error) =>
// //       console.error("Erreur lors de la récupération des users", error)
// //     );
// // }
// // fectchUsers();
// /*--------la connection--------*/

// //     if (!email.value.match(/^[\w_-]+@[\w-]+\.[a-z]{2,4}$/i)) {
// //       errorMail.textContent = "Email est incorrect";

// // // ******************************************************************************************************************/
// // const form = document.getElementById("formLogin");

// // form.addEventListener("submit", (e) => {
// //   e.preventDefault();
// //   let error;
// //   const email = document.getElementById("email");
// //   const password = document.getElementById("password");
// //   if (!email.value.match(/^[\w_-]+@[\w-]+\.[a-z]{2,4}$/i)) {
// //     error = "Email incorrect";
// //   }
// //   if (!password.value) {
// //     error = "Veuillez renseigner un mot de passe";
// //   }
// //   if (error) {
// //     e.preventDefault();
// //     document.getElementById("error").innerHTML = error;
// //     return false;
// //   } else {
// //     window.location.href = "./index.html";
// //   }
// // });

// //********************************************************************************************************************//
// // console.log(document.forms["formLogin"]["email"]);

// // document.forms["formLogin"].addEventlistenner("submit", function (e) {
// //   var error;
// //   var inputs = this;
// //   //traitement cas par cas (input unique)
// //   if (inputs["email"].value != "sophie.bluel@test.tld") {
// //     error = "Adresse email incorrecte";
// //   }

// //   //traitement générique
// //   for (i = 0; i > inputs.length; i++) {
// //     console.log(inputs[i]);
// //     if (!inputs[i].value) {
// //       error = "Veuillez renseigner tous les champs";
// //       break;
// //     }
// //   }
// //   if (error) {
// //     e.preventDefaut();
// //     document.getElementById("error").innerHtml = error;
// //     return false;
// //   } else {
// //     alert("vous êtes connecté!");
// //   }
// // });
// //-------------------------------------------------------------------------------------------------------------------------------------------//
