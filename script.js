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
      console.log(themeArticlePrincipal);

      // Date article principal :
      let dateArticlePrincipal = data.journal.articlePrincipal.date;
      console.log(dateArticlePrincipal);

      // Description article principal :
      let descriptionArticlePrincipal = data.journal.articlePrincipal.description;
      console.log(descriptionArticlePrincipal);

      // Titre Article 1 :
      let titreArticle1 = data.journal.articles[0].titre;
      console.log(titreArticle1);

      // Theme Article 1 :
      let themeArticle1 = data.journal.articles[0].theme;
      console.log(themeArticle1);

      // Date Article 1  :
      let dateArticle1 = data.journal.articles[0].date;
      console.log(dateArticle1);

      // Description Article 1 (attention subtilité lien arborescence regarder dans article le thème puis regarder dans thème pour voir le numéro correspondant) :
      let descriptionArticle1 = data.journal.themes[1].description;
      console.log(descriptionArticle1);

      // Image Article 1  :
      let imageArticle1 = data.journal.articles[0].image;
      console.log(imageArticle1);

      // Description équipe - Prénom 1 : 
      let prenom1Denotreequipe = data.journal.auteurs[0].prenom;
      console.log(prenom1Denotreequipe);

      // Description équipe - Présentation 1: 
      let presentationDenotreequipe = data.journal.auteurs[0].presentation;
      console.log(presentationDenotreequipe);

















       

      

       /// FIN DU CODE
     })
     .catch((error) => console.error('Erreur lors de la lecture des données :', error));
 }
 
 getData();

 ///ON écrit les fonctions ici

    