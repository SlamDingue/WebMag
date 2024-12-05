function getData() {
   fetch('data.json')
     .then((response) => {
       if (!response.ok) {
         throw new Error('Network response was not ok');
       }
       return response.json();
     })
     .then((data) => {
       // Traitez les données comme vous le souhaitez
       console.log('Données récupérées du fichier JSON :', data);
       /// ON ECRIT LE CODE ICI ! 
      //  On écrit ici les variables 

      // Nom du Journal
      let nomJournal = data.journal.nomJournal;
      console.log(nomJournal);

      // Nom du thème 1 :
      let theme1 = data.journal.themes[0].nom;
      console.log(theme1);
       // Nom du thème 2 :
      let theme2 = data.journal.themes[1].nom;
      console.log(theme2);

      // Nom du thème 3 :
      let theme3 = data.journal.themes[2].nom;
      console.log(theme3);

      // Nom du thème 4 :
      let theme4 = data.journal.themes[3].nom;
      console.log(theme4);

      // Nom du thème 5 :
      let theme5 = data.journal.themes[4].nom;
      console.log(theme5);

      // Nom du thème 6 :
      let theme6 = data.journal.themes[5].nom;
      console.log(theme6);

      // Phrase d'accroche :
      let phraseAccroche = data.journal.phraseAccroche;
      console.log (phraseAccroche);

      // Description du thème 1 :
      let theme1Description = data.journal.themes[0].description;
      console.log(theme1Description);

      // Description du thème 2 :
      let theme2Description = data.journal.themes[1].description;
      console.log(theme2Description);

      // Description du thème 3 :
      let theme3Description = data.journal.themes[2].description;
      console.log(theme3Description);

      // Description du thème 4 :
      let theme4Description = data.journal.themes[3].description;
      console.log(theme4Description);

      // Description du thème 5 :
      let theme5Description = data.journal.themes[4].description;
      console.log(theme5Description);

      // Description du thème 6 :
      let theme6Description = data.journal.themes[5].description;
      console.log(theme6Description);

      // Titre article principal :
      let titreArticlePrincipal = data.journal.articlePrincipal.titre;
      console.log(titreArticlePrincipal);

      // Theme article principal :
      let themeArticlePrincipal = data.journal.articlePrincipal.theme;
      // console.log(themeArticlePrincipal);

      // Date article principal :
      let dateArticlePrincipal = data.journal.articlePrincipal.date;
      // console.log(dateArticlePrincipal);

      // Image article principal :
      let imageArticlePrincipal = data.journal.articlePrincipal.image;
      // console.log(imageArticlePrincipal);

      // Description article principal :
      let descriptionArticlePrincipal = data.journal.articlePrincipal.description;
      // console.log(descriptionArticlePrincipal);

      // Titre Article 1 :
      let titreArticle1 = data.journal.articles[0].titre;
      // console.log(titreArticle1);

      // Theme Article 1 :
      let themeArticle1 = data.journal.articles[0].theme;
      // console.log(themeArticle1);

      // Date Article 1  :
      let dateArticle1 = data.journal.articles[0].date;
      // console.log(dateArticle1);

      // Description Article 1 (attention subtilité lien arborescence regarder dans article le thème puis regarder dans thème pour voir le numéro correspondant) :
      let descriptionArticle1 = data.journal.themes[1].description;
      // console.log(descriptionArticle1);

      // Image Article 1  :
      let imageArticle1 = data.journal.articles[0].image;
      // console.log(imageArticle1);

      // Description équipe - Prénom 1 : 
      let prenom1Denotreequipe = data.journal.auteurs[0].prenom;
      // console.log(prenom1Denotreequipe);

      // Description équipe - Présentation 1: 
      let presentationDenotreequipe = data.journal.auteurs[0].presentation;
      // console.log(presentationDenotreequipe);


      // On appelle les fonctions après les avoir créer. Les fonctions sont en bas pour une meilleure visibilité. 


      afficherNavigation(data);
      afficherPresentation(data);
      afficherArticle(data);
      afficherArticles(data);
      afficherAuteurs(data);
      afficherFooter(data)

       /// FIN DU CODE
     })
     .catch((error) => console.error('Erreur lors de la lecture des données :', error));
 }
 
 getData();

 ///ON écrit les fonctions ici



// Barre de navigation 
function afficherNavigation(data) {
  let nav = document.querySelector('nav');
  let nomJournal = data.journal.nomJournal;
  let image = data.journal.image; 
  let theme1nom = data.journal.themes[0].nom;
  let theme2nom = data.journal.themes[1].nom;
  let theme3nom = data.journal.themes[2].nom;
  let phrase = "S'abonner";
  

let logo = `<div id="logo">
  <img src="images\logo.jpg" alt="Logo">
  <h2>${nomJournal}</h2>`;

nav.insertAdjacentHTML("beforeend", logo);

let link= `<li><a class="link" href="">${theme1nom}</a></li>
  <li><a class="link" href="">${theme2nom}</a></li>
  <li><a class="link" href="">${theme3nom}</a></li>`


nav.insertAdjacentHTML("beforeend", link);

let buttonContainer= ` <a class ="button primary" href=""> ${phrase} </a>
         <img class="avatar" src="avatar.jpg" alt="avatar chien cool">`


nav.insertAdjacentHTML("beforeend",buttonContainer);




}; 


// Présentation des thèmes 
 function afficherPresentation(data) {
  let presentationContainer = document.getElementById('title-container');
  let container = document.getElementById('container')
  let nomJournal = data.journal.nomJournal;
  let phraseAccroche = data.journal.phraseAccroche;


  let titre = ` <h2>${nomJournal}</h2>
  <h1>${phraseAccroche}</h1>`

  presentationContainer.insertAdjacentHTML("beforeend", titre);

  


  data.journal.themes.forEach((theme) => {
          let themenom = theme.nom;
          let description = theme.description; 
          console.log(themenom , description);


let themePresentation = `
      <div class="theme-container">
         <h1>${themenom}</h1>
         <p>${description}</p>
      </div>    
      
      ` 
      container.insertAdjacentHTML("beforeend", themePresentation);
});
 }



// Fonction de l'article principal - attention on appelle la fonction et c'est en haut.
// Attention il n'y a pas de boucles car on appelle une fois l'information.

function afficherArticle(data) {
  let articlePrincipalContainer = document.getElementById('article-principal');
  let article = data.journal.articlePrincipal;
    let titre = article.titre;
    let date = article.date;
    let theme = article.theme;
    let image = article.image;
    let description = article.description; 
        console.log(titre, date,theme,image, description);



    let articlePrincipal = `<div id = "articlePrincipal">
    <img src="${image}" alt="${titre}">
    <h1>${titre}</h1>
    <h2>${theme}  -  ${date} </h2>
    <p>${description}</p>
    <a class ="button primary" href="#">Lire l'article </a>
 </div>`

 articlePrincipalContainer.insertAdjacentHTML("beforeend", articlePrincipal);
}

//  Fonction des articles que l'on affiche via la fonction , attention on appelle la fonction et c'est en haut . On fait une boucle dans la fonction pour que cela appelle les différents articles. 

function afficherArticles(data) {
  let articleContainer = document.getElementById('article-container');
  data.journal.articles.forEach((article) => {
    let titre = article.titre;
    let date = article.date;
    let theme = article.theme;
    let image = article.image;
     console.log(titre, date,theme,image);


    

    let articles = `<div class = "articles">
    <img src="${image}" alt="${titre}">
    <h1>${titre}</h1>
    <h2>${theme}  -  ${date} </h2>
    <a class ="button primary" href="#">Lire l'article </a>
 </div>`

  articleContainer.insertAdjacentHTML("beforeend", articles);

});
};

// Fonction pour découvrir Notre équipe = les auteurs 

function afficherAuteurs(data) {
  let equipeContainer = document.getElementById('equipe-container');
  let bloqueEquipe = document.getElementById('bloque-equipe')

  let phrase = "DECOUVREZ NOTRE EQUIPE";
  console.log(phrase);
  

  let titleContainer = document.getElementById('discover-equipe')
  console.log(titleContainer);
  

  titleContainer.innerHTML = phrase;

  



  data.journal.auteurs.forEach((auteur) => {
  let image = auteur.image;
  let typeExperience = auteur.typeExperience;
  let prenom = auteur.prenom;
  let presentation = auteur.presentation;
  
     console.log(image,typeExperience,prenom,presentation);

 


 let auteurs = `
      <div class="auteurs">
         <img src=${image} alt="${typeExperience}">
         <h2>${prenom}</h2>
         <p>${presentation}</p>
      </div>`
      

      bloqueEquipe.insertAdjacentHTML("beforeend", auteurs);
  });
};

// Footer : 
function afficherFooter(data) {
  let footer = document.querySelector('footer');
  let nomJournal = data.journal.nomJournal;
console.log (nomJournal);

let element = `<h3> ${nomJournal} 2024</h3>`

footer.insertAdjacentHTML("beforeend", element);
};