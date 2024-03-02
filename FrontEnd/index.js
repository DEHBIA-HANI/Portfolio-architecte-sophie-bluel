const gallery = document.querySelector(".gallery");

let worksData = []; // Stockez les données de travaux dans la variable globale

// Chargement initial des données des travaux
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
  galleryWorks();
}

function galleryWorks() {
  gallery.innerHTML = worksData
    .map(
      (work) =>
        `
    <figure>
    <img src=${work.imageUrl} alt="Photo ${work.title}>
    <figcaption>${work.title}</figcaption>
    </figure>
    `
    )
    .join("");
}
window.addEventListener("load", fetchworks);
