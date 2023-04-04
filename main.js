// POUR FAIRE APPARAITRE LE MENU SUR ECRAN REDUIT

const menu = document.querySelector(".menu");
const togglebtn = document.querySelector(".menu-toggle");

togglebtn.addEventListener("click", () => {
  menu.classList.toggle("block");
});

// LA SELECTION DES COURS
const lescours = [
  {
    id: "1",
    titre: "Data Scientist",
    prix: 600,
    cathegorie: "data",
    description: `<span><i class="fa-regular fa-user"></i></span> 30k`,
    image: "./datascientist/data.jpg",
  },

  {
    id: "2",
    titre: "Finance d'entreprise",
    prix: 200,
    cathegorie: "gestion",
    description: `<span><i class="fa-regular fa-user"></i></span> 10k`,
    image: "./finentre/finance.jpg",
  },

  {
    id: "3",
    titre: "html, css & javascript",
    prix: 400,
    cathegorie: "web",
    description: `<span><i class="fa-regular fa-user"></i></span> 50k`,
    image: "./front/web.jpg",
  },

  {
    id: "4",
    titre: "Data Analyst",
    prix: 400,
    cathegorie: "data",
    description: `<span><i class="fa-regular fa-user"></i></span> 25k`,
    image: "./datanalyst/analyst.jpg",
  },

  {
    id: "5",
    titre: "Finance de Marché",
    prix: 200,
    cathegorie: "gestion",
    description: `<span><i class="fa-regular fa-user"></i></span> 15k`,

    image: "./finmarche/marche.jpg",
  },

  {
    id: "6",
    titre: "PHP orienté Objet",
    prix: 300,
    cathegorie: "web",
    description: `<span><i class="fa-regular fa-user"></i></span> 15k`,

    image: "./back/php.jpg",
  },

  {
    id: "7",
    titre: "Data Enginner",
    prix: 500,
    cathegorie: "data",
    description: `<span><i class="fa-regular fa-user"></i></span> 25k`,

    image: "./dataenginer/engine.jpg",
  },

  {
    id: "8",
    titre: "Comptabilité",
    prix: 200,
    cathegorie: "gestion",
    description: `<span><i class="fa-regular fa-user"></i></span> 5k`,

    image: "./compta/compta.jpg",
  },

  {
    id: "9",
    titre: "Marketing Digital",
    prix: 400,
    cathegorie: "web",
    description: `<span><i class="fa-regular fa-user"></i></span> 35k`,

    image: "./market/market.jpg",
  },

  {
    id: "10",
    titre: "Machine Learning",
    prix: 500,
    cathegorie: "data",
    description: `<span><i class="fa-regular fa-user"></i></span> 45k`,

    image: "./python/python2.jpg",
  },

  {
    id: "12",
    titre: "Vuejs & Laravel",
    prix: 400,
    cathegorie: "web",
    description: `<span><i class="fa-regular fa-user"></i></span> 35k`,

    image: "./vularavel/vue.jpg",
  },

  {
    id: "13",
    titre: "Securité des Données",
    prix: 400,
    cathegorie: "web",
    description: `<span><i class="fa-regular fa-user"></i></span> 25k`,

    image: "./securite/security.jpg",
  },
];

const totalcour = document.querySelector(".allcourses");
const buttons = document.querySelectorAll(".courbtn");

window.addEventListener("DOMContentLoaded", () => {
  toutlescours(lescours);
});

function toutlescours(couritem) {
  let affichercour = couritem.map(function (item) {
    return `<div class="cour-item">
                    <div class="cour-image">
                        <img src="${item.image}" alt="">
                    </div>
                    <div class="cour-text">
                        <h3>${item.titre}</h3>
    
                        <span class="ligne"></span>
                        <div class="cour-detail">
                            <p>${item.prix}$</p>
                            <p class="vue">
                                ${item.description}
                            </p>
    
                        </div>
    
                    </div>
                </div>`;
  });
  affichercour = affichercour.join("");
  totalcour.innerHTML = affichercour;
}

// BOUTTONS

buttons.forEach(function (btn) {
  btn.addEventListener("click", (e) => {
    const donnee = e.currentTarget.dataset.id;
    const cathegorie = lescours.filter(function (courcathegorie) {
      if (courcathegorie.cathegorie === donnee) {
        return courcathegorie;
      }
    });
    if (donnee === "tout") {
      toutlescours(lescours);
    } else {
      toutlescours(cathegorie);
    }
  });
});

// LES QUESTIONS

// question1
const btnquestion = document.querySelector(".faqbtn");
const Reponse1 = document.querySelector(".reponse");
btnquestion.addEventListener("click", () => {
  Reponse1.classList.toggle("active");
});

// question2
const btnquestion2 = document.querySelector(".faqbtn2");
const Reponse2 = document.querySelector(".reponse2");
btnquestion2.addEventListener("click", () => {
  Reponse2.classList.toggle("active");
});

// question3
const btnquestion3 = document.querySelector(".faqbtn3");
const Reponse3 = document.querySelector(".reponse3");
btnquestion3.addEventListener("click", () => {
  Reponse3.classList.toggle("active");
});
