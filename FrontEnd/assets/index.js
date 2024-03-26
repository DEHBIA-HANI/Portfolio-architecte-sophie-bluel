async function workFetch() {
  await fetch("http://localhost:5678/api/works")
    .then((response) => response.json())
    .then((works) => {
      workData = works;
      console.log(workData);
    })
    .catch((error) =>
      console.error("Erreur lors de la récupération des images", error)
    );
  /*appeller la fonction pour afficher tous les travaux*/
  galerieWorks(workData, ".gallery");
  /*appeller la fonction pour afficher tous les travaux par catégorie*/
  fecthCategories(workData);
  galerieWorks(workData, ".supprime-photo");
}
workFetch();

/*******************la fonction pour afficher les traveaux de Sophie Bluel******* */
function galerieWorks(works, selector) {
  const galerie = document.querySelector(selector);
  galerie.innerhtml = "";

  works.forEach((work) => {
    const figure = document.createElement("figure");

    const img = document.createElement("img");
    const span = document.createElement("span");
    const poubelle = document.createElement("i");
    poubelle.classList.add("fa-solid", "fa-trash-can");
    poubelle.id = work.id;
    img.src = work.imageUrl;
    img.alt = work.title;
    span.appendChild(poubelle);
    figure.appendChild(span);
    figure.appendChild(img);

    const figcation = document.createElement("figcation");
    figcation.textContent = work.title;
    figure.appendChild(figcation);
    galerie.appendChild(figure);
  });
}

/******************Affichage des boutons ********** */
function fecthCategories(works) {
  fetch("http://localhost:5678/api/categories")
    .then((response) => response.json())
    .then((categories) => {
      console.log(categories);
      categorieFilter(categories, works);
    })
    .catch((error) =>
      console.error("Erreur lors de la récupérations des cagécories", error)
    );
}

function categorieFilter(categories, works) {
  const filtrer = document.querySelector(".filter");
  filtrer.innerhtml = "";
  filtrer.classList.add(".filter");

  const tousButton = document.createElement("button");
  tousButton.textContent = "Tous";
  tousButton.classList.add("btnFilter");
  filtrer.appendChild(tousButton);
  tousButton.onclick = () => {
    galerieWorks(works, ".gallery");
  };
  categories.forEach((categorie) => {
    const button = document.createElement("button");
    button.textContent = categorie.name;
    button.id = categorie.id;
    button.classList.add("btnFilter");
    filtrer.appendChild(button);

    button.onclick = (e) => {
      btnFilter = e.target.id;
      console.log(btnFilter);
      const FiltrerParCategorie = works.filter((work) => {
        if (categorie === work.category)
          return work.workData.categoryId === btnFilter;
        galerieWorks(FiltrerParCategorie, ".gallery");
      });
    };
  });
}
/****************************************************
 * Créer la bar edition ,l'icon et mot modifier
 */
function barEdition() {
  const modeEdition = document.querySelector(".modeEdition");
  const projetModifier = document.querySelector(".projetModifier");

  modeEdition.innerHTML = `
        <nav class="edition">
           <p><i class="fa-regular fa-pen-to-square"></i>Mode édition</p>
        </nav>
`;
  projetModifier.innerHTML = `
          <h2>Mes Projets</h2>
          <a href="#" data-target="#modale1" data-toggle="modal"><i
          class="fa-regular fa-pen-to-square"></i>modifier</a>
  `;
}
barEdition();

/****************************************************
 * la motale tous ses fonctions d'accessibilité*/
// window.onload = () => {
//   // On récupère les bouttons d'ouverture de modale
//   const modaleButtons = document.querySelectorAll("[data-toggle=modal]");
//   for (let button of modaleButtons) {
//     button.addEventListener("click", function (e) {
//       //On empêche la navigation
//       e.preventDefault();
//       //On récupère le data-target
//       let target = this.dataset.target;
//       //On récupère la bonne modale
//       let modal = document.querySelector(target);
//       console.log(modal);
//       //On affiche la bonne modale
//       modal.classList.add("show");
//       //On récupère le boutton de fermeture et retour en arrière
//       const modaleCloseBack = modal.querySelectorAll("       [data-dismiss=dialog");
//       for (let close of modaleCloseBack) {
//         close.addEventListener("click", () => {
//           modal.classList.remove("show");
//         });
//       }
//       //on gère la fermeture lors du clic sur la zone grise
//       modal.addEventListener("click", function (e) {
//         this.classList.remove("show");
//       });
//       //On évite la propagationdu clic d'un enfant à son parent
//       modal.children[0].addEventListener("click", function (e) {
//         e.stopPropagation();
//       });
//     });
//     const fermerGloble = document.querySelector("#fermer");
//     const modalGlobale = document.querySelector("#modale0");

//     fermerGloble.addEventListener("click", () => {
//       modalGlobale.style.display = "none";
//     });
//   }
// };

//on clique sur la touche echap du clavier
window.addEventListener("keydown", function (e) {
  if (e.key === "Escap" || e.key === "Esp") {
    modaleCloseBack(e);
  }
});

//récupérer et afficher l'image selectionnée de notre pc
const photoAjouter = document.querySelector(".photoAjouter");
const inputFile = document.querySelector("#avatar");
const contenuPhoto = document.querySelector(".photo-file");

photoAjouter.addEventListener("click", function () {
  inputFile.click();
});
inputFile.addEventListener("change", function () {
  //l'image qui se trouve sur mon pc
  const image = this.files[0];
  console.log(image);
  const reader = new FileReader();
  reader.onload = () => {
    const imgUrl = reader.result;
    const img = document.createElement("img");
    img.src = imgUrl;
    contenuPhoto.appendChild(img);
    contenuPhoto.classList.add("active");
  };
  reader.readAsDataURL(image);
});
// const btnModifier = document.querySelector(".fa-pen-to-square");
// const modale1=document.getElementById("modale1")

// //Tous mes variables pour la première modale

// //Injecter dans select catégorie <option value=""></option> ceux qu'il sur API categorie
// function choixCatégorie() {
//   const selecteCategorie = document.querySelector("#categorie");
//   const option = document.createElement("option");
//   option.setAttribute("value", category.id);
//   option.textContent = category.name;
//   selecteCategorie.appendChild(option);
//   categorieFilter(categories, works);
// }
// choixCatégorie();

// //Tous mes variables pour ma deuxième modale

// const btnOuvrirModal = document.getElementById("btn-ajout");
// const modale2 = document.getElementById("modale2");
// // const modale1 = document.getElementById("modale1");
// const retourEnArriere = document.getElementById("retourEnArriere");
// function displayModale2() {}
