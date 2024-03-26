window.onload = () => {
  // On récupère les bouttons d'ouverture de modale
  const btnOuvertureModal = document.querySelectorAll("[data-toggle=modal]");
  console.log(btnOuvertureModal);
  for (let button of btnOuvertureModal) {
    button.addEventListener("click", function (e) {
      //on empêche la navigation
      e.preventDefault();

      //On recupère la data-target(celle quand click dessus)
      const target = this.dataset.target;

      //On recupère la  bonne modale
      let modal = document.querySelector(target);
      const modale1 = document.getElementById("modale1");
      const modale2 = document.getElementById("modale2");
      const modaleGlobale = document.querySelector(".modale");
      modaleGlobale.style.display = "flex";
      if (modal === modale1) {
        modale2.style.display = "none";
        modale1.style.display = "block";
      }
      if (modal === modale2) {
        modale2.style.display = "block";
        modale1.style.display = "none";
      }

      // On recupère les bouttons de fermeture
      const modaleClose = document.querySelectorAll("[data-dismiss=dialog");
      for (let close of modaleClose) {
        close.addEventListener("click", () => {
          modaleGlobale.style.display = "none";
        });
      }
      //On recupère le bouton de retour en arrière
      const retourEnArriere = document.getElementById("retourEnArriere");
      retourEnArriere.addEventListener("click", () => {
        modale1.style.display = "block";
        modale2.style.display = "none";
      });

      //on gère la fermeture lors du clic sur la zone grise
      modaleGlobale.addEventListener("click", function (e) {});
    });
  }
};
