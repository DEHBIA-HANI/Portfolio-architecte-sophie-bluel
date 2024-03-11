const gallery = document.querySelector(".gallery");
const filter = document.querySelector(".filtrer");
let worksData = []; // Stockez les données de travaux dans la variable globale
let filtreMethod = "btn-Tous";

//Chargement initial des données des travaux
async function fetchworks() {
  await fetch("http://localhost:5678/api/works")
    .then((response) => response.json())
    .then((works) => {
      worksData = works;
      console.log(works);
    })
    .catch((error) =>
      console.error("Erreur lors de la récupération des images:", error)
    );
  galleryDisplay();
}
fetchworks();

filter.innerHTML = `
  <button class="btnsort" id="btn-tous">Tous</button>
  <button class="btnsort" id="btn-objets">objets</button>
  <button class="btnsort" id="btn-appartements">Appartements</button>
  <button class="btnsort" id="btn-Hôtel">Hôtel & restaurants</button>
  `;
const btnSort = document.querySelectorAll(".btnsort");

//Affichage les données des travaux

function galleryDisplay() {
  gallery.innerHTML = worksData
    // filtrer  les travaux par categorie
    .filter((work) => {
      if (filtreMethod === "btn-tous") return work.categoryId;
      else if (filtreMethod === "btn-objets") return work.categoryId === 1;
      else if (filtreMethod === "btn-appartements")
        return work.categoryId === 2;
      else if (filtreMethod === "btn-Hôtel") return work.categoryId === 3;
      else filtreMethod === null;
      return work.categoryId;
    })

    .map((work) => {
      return `
      <figure>
      <img src=${work.imageUrl} alt="Photo ${work.title}">
      <figcaption> ${work.title}</figcaption>
      </figure>
      `;
    })
    .join("");
}
btnSort.forEach((btn) => {
  btn.addEventListener("click", (e) => {
    filtreMethod = e.target.id;
    galleryDisplay();
  });
});
