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

/******************************************************************************************************************************** */

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

//
