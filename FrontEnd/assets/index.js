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
  //appeller la fonction pour afficher tous les travaux dans notre modale Dellete
  galerieWorks(workData, ".supprime-photo");
  // Appeller la fonction de supression des travaux
  Dellete();
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

    const figcaption = document.createElement("figcation");
    figcaption.textContent = work.title;
    figure.appendChild(figcaption);
    galerie.appendChild(figure);
  });
}

/******************Affichage des boutons par filtre ********** */
function fecthCategories(works) {
  fetch("http://localhost:5678/api/categories")
    .then((response) => response.json())
    .then((categories) => {
      console.log(categories);
      categorieFilter(categories, works);
    })
    .catch((error) =>
      console.error("Erreur lors de la récupérations des catégories", error)
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
 * Créer la bar edition ,l'icon et mot modifier **/

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

/****************************************************/
//---------Suppression des travaux-------------
function Dellete() {
  const Poubelles = document.querySelectorAll(".supprime-photo .fa-trash-can");
  // console.log(Poubelles);
  const imageSupp = document.querySelectorAll(".supprime-photo figure ");
  console.log(imageSupp);
  Poubelles.forEach((poubelle) => {
    poubelle.addEventListener("click", () => {
      const id = poubelle.id;
      console.log(id);
      const init = {
        method: "DELETE",
        headers: { "Content-type": "application/json" },
      };

      fetch("http://localhost:5678/api/works/" + id, init)
        .then((response) => {
          if (!response.ok) {
            console.log("impossible de supprimer !!");
          }
          return response.json();
        })
        .then((data) => {
          console.log(data);
          galerieWorks(workData, ".supprime-photo");
        })
        .catch((error) => {
          console.log(error);
        });
    });
  });
}
/************************************************************* */
//-----Ajout des travaux : -----------/

// 1-Afficher l'image selectionnée de notre pc

//     *1-1-Récupérer tous les variables-
const photoAjouter = document.querySelector(".photoAjouter");
const inputFile = document.querySelector("#avatar");
const contenuPhoto = document.querySelector(".photo-file");
//     *1-2-Quand on clique sur notre la zone "+Ajout photo"
photoAjouter.addEventListener("click", function () {
  inputFile.click();
});
//     *1-3-Ecouter le changement sur inputFile
inputFile.addEventListener("change", function () {
  //   *1-4-l'image qui se trouve sur mon pc
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
//3-Créer la liste des catégories pour linput selecte

function selectCategorieModale2() {
  fetch("http://localhost:5678/api/categories")
    .then((response) => response.json())
    .then((data) => {
      const dataSelects = data;
      const select = document.querySelector("#modale2 select[name=categories]");
      dataSelects.forEach((data) => {
        const option = document.createElement("option");
        option.value = data.id;
        option.textContent = data.name;
        select.appendChild(option);
      });
    })
    .catch((error) =>
      console.error("Erreur lors de la récupérations des catégories", error)
    );
}
selectCategorieModale2();

//4-Faire un POST pour ajouter un travail(image)
const form = document.querySelector("#modale2 form");
const title = document.querySelector("#modale2 #titre");
const category = document.querySelector("#modale2 #categorie");
console.log(category);
