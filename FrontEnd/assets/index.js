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

  galerieWorks(workData, ".gallery");

  fecthCategories(workData);
}
workFetch();

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
/*******************Affichage des traveaux de Sophie Bluel******* */
function galerieWorks(works, selector) {
  const galerie = document.querySelector(selector);
  galerie.innerhtml = "";

  works.forEach((work) => {
    const figure = document.createElement("figure");

    const img = document.createElement("img");
    img.src = work.imageUrl;
    img.alt = work.title;
    figure.appendChild(img);

    const figcation = document.createElement("figcation");
    figcation.textContent = work.title;
    figure.appendChild(figcation);
    galerie.appendChild(figure);
  });
}

/******************Affichage des boutons ********** */
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
  const header = document.querySelector("header");
  console.log(header);
  const projetModifier = document.querySelector(".projetModifier");
  console.log(projetModifier);
  header.innerHTML = `
        <nav class="edition">
           <p><i class="fa-regular fa-pen-to-square"></i>Mode édition</p>
        </nav>
`;
  projetModifier.innerHTML = `
        <h2>Mes Projets</h2>
        <p><i class="fa-regular fa-pen-to-square"></i>modifier</p>
`;
}
// barEdition();

/****************************************************
 * Créer la motale de suppression*/
function motaleSupp() {
  const main = document.querySelector("main");
  console.log(main);
}
motaleSupp();
