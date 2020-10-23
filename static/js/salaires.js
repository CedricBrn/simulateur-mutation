function calcul() {
    /*Tableau de tableaux des indices pour chaque corps
	indices[0] : indices des ceritifié-es
	indices[1] : indices des PE
    indices[2] : indices des agrégé-es
	etc.*/
    let indices = [
        [388, 441, 445, 458, 471, 492, 511, 547, 583, 625, 669, 710, 756, 798],
        [388, 441, 445, 458, 471, 492, 511, 547, 583, 625, 669, 710, 756, 798],
        [448, 498, 502, 539, 574, 609, 651, 700, 750, 796, 830, 890, 925, 972],
    ];


    
    /* Primes et indemnités */
    const pointIndice = 4.686 //Valeur du point d'indice
    const isoe = 1213.56 // Indemnité de suivi et d'orientation 2d degré
    const isae = 1213.56 //Indemnité de suivi premier degré
    const rep = 1734 // Prime Rep
    const repPlus = 3479 // Prime Rep+
    const hsaAgrege1 = 1974.53 // 1re HSA Agrégé
    const hsaAgrege = 1645.44 // HSA Agrégé en plus
    const hsaCertifie1 = 1358.66 // 1re HSA certifié
    const hsaCertifie = 1132.22 // HSA certifié en plus

    //Récupération de la valeur du bouton "corps" sélectionné
    let corps = parseInt(document.getElementById('statut').value, 10);
    let echelon = indices[corps][parseInt(document.getElementById('echelon').value, 10) - 1]

    if (corps < 3) {
        salaireBrutEchelon = ( echelon * pointIndice ) + (isoe /12)
    }

    console.log(salaireBrutEchelon)

    //Affichage du titre 
    document.getElementById('resultatActuel').innerHTML = "Ma retraite dans le système actuel";

    //Calcul du dernier salaire dans la balise prévue à cet effet
    let dernierSalaire = valeurPoint * indices[corps][echelon - 1];
    //Si direction d'école
    let anneesDirection1 = parseInt(document.getElementById('direction_1').value, 10);
    let anneesDirection23 = parseInt(document.getElementById('direction_23').value, 10);
    let anneesDirection4 = parseInt(document.getElementById('direction_4').value, 10);
    let anneesDirection59 = parseInt(document.getElementById('direction_59').value, 10);
    let anneesDirection10 = parseInt(document.getElementById('direction_10Plus').value, 10);
    let bonificationSalarialeDirection = 0;
    let salaireCumuleDirection = 0;
 
    dernierSalaire += bonificationSalarialeDirection;

    //Arrondi au centime
    dernierSalaire = Math.floor(dernierSalaire * 100) / 100;
    //Ecriture du dernier salaire dans la balise prévue à cet effet
    document.getElementById('salaire').innerHTML = " Dernier salaire mensuel brut&nbsp;: " + dernierSalaire + "&nbsp;€";

    //Calcul du nombre d'annuités
    let annuites = ageFinCarriere - ageDebutCarriere;
    let trimestresAcquis = annuites * 4;

   
    let naissance = parseInt(document.getElementById("naissance").value, 10);
    let trimestresRequis = 172;
    for (var i = 0; i < trimestresExige.length; i++) {
        if (naissance == trimestresExige[i][0]) {
            trimestresRequis = trimestresExige[i][1];
        }
    }

    //Ecriture du nombre de trimestres requis
    document.getElementById("trimestresRequis").innerHTML = "Nombre de trimestres requis : " + trimestresRequis;
    //Ecriture du nombre de trimestres acquis
    document.getElementById("trimestresAcquis").innerHTML = "Nombre de trimestres acquis : " + trimestresAcquis;

    // Calcul de la décote dans le système actuel
    let decote = 1 - (trimestresRequis - trimestresAcquis) * coeffDecoteActuel;

    let pensionRepartition = 0;

    if (estContractuel == false) {
        // Calcul de la pension dans le système actuel pour les fonctionnaires
        pensionRepartition = dernierSalaire * plafondSalaireBrutFonctionnaireActuel * decote * trimestresAcquis / trimestresRequis;
    } else {
        // Calcul de la pension dans le système actuel pour les contractuel-le-s
        let parcoursCarriere = moyenneSalaireContractuelAnnees;
        if (annuites < moyenneSalaireContractuelAnnees) {
            parcoursCarriere = annuites;
        }
        let salaireCumuleContractuel = dureeDernierEchelon * valeurPoint * indices[corps][echelon - 1];
        parcoursCarriere -= dureeDernierEchelon;
        echelon -= 2; // Permet de s'assurer que la boucle démarre au dernier échelon
        while (parcoursCarriere > 0 && echelon >= 0) {
            salaireCumuleContractuel = salaireCumuleContractuel + (12 * valeurPoint * indices[corps][echelon] * dureesEchelons[corps][echelon]);
            parcoursCarriere -= dureesEchelons[corps][echelon];
            echelon--;
        }
        pensionRepartition = (salaireCumuleContractuel / 12 / moyenneSalaireContractuelAnnees) * plafondSalaireBrutContractuelActuel * decote * trimestresAcquis / trimestresRequis;
    }

    //Arrondi au centime
    pensionRepartition = Math.floor(pensionRepartition * 100) / 100;


    // Calcul du minimum contributif actuellement
    let coefficientMinRepartition;

    if (trimestresAcquis >= trimestresRequis) {
        coefficientMinRepartition = 1;
    } else {
        coefficientMinRepartition = trimestresAcquis / trimestresRequis;
    }

    //Ecriture de la pension dans le champ prévu à cet effet
    if (pensionRepartition < minimumContributifActuel * coefficientMinRepartition) {
        pensionRepartition = minimumContributifActuel * coefficientMinRepartition;
        pensionRepartition = Math.floor(pensionRepartition * 100) / 100;


        document.getElementById("retraiteRepartition").innerHTML = "Montant mensuel brut de la retraite trop bas. Vous serez au minimum contributif : " + pensionRepartition + "€";
    } else {
        document.getElementById("retraiteRepartition").innerHTML = "Montant mensuel brut de la retraite : " + pensionRepartition + "€";
    }
    //Affichage du titre 
    document.getElementById('resultatPoint').innerHTML = "Ma retraite dans le système à points (Delevoye)";

    // Pour les générations avant 75, déclage de l'âge de départ à la retraite de 2 ans → 64 ans
    if (naissance < 1975) {
       
        let pensionDecalee = pensionRepartition * (1 - (0.05 * (64 - ageFinCarriere))) ; // On applique une décote de 5% par an avant le départ à 64 ans

        pertesMensuelles = pensionRepartition - pensionDecalee ;
        pertesMensuelles = Math.floor(pertesMensuelles * 100) / 100;
        if (pertesMensuelles > 0) {
            //Ecriture des pertes mensuelles dans le champ prévu
            document.getElementById("pertesMensuelles").innerHTML = "<b>Pertes avec le système Delevoye (âge de départ décalé à 64 ans) : " + pertesMensuelles + "&nbsp;€ par mois. </b>";
            //calcul des pertes annuelles
            let pertesAnnuelles = 12 * pertesMensuelles;
            //Arrondi au centime
            pertesAnnuelles = Math.floor(pertesAnnuelles * 100) / 100;
            //Ecriture des pertes mensuelles dans le champ prévu
            document.getElementById("pertesAnnuelles").innerHTML = "<b>Pertes avec le système Delevoye (âge de départ décalé à 64 ans) : " + pertesAnnuelles + "&nbsp;€ par an. </b>";
        }

        } else {

            annees = ageFinCarriere - ageDebutCarriere;

            //Intégration des primes
            let primeRep = parseInt(document.getElementById('rep').value, 10) * rep;
            let primeRepPlus = parseInt(document.getElementById('repPlus').value, 10) * repPlus;

            // Calcul nombre de points
            let nombrePoints = 0;
            if (parseInt(document.getElementById('primesEtIndemnites').value, 10) == 1) {
                switch (corps) {
                    case 0: // Adjaenes
                        nombrePoints = (salaireCumule + primeRep + primeRepPlus) * montantCotisationsSociales;
                        break;
                    case 1: // AESH
                        nombrePoints = salaireCumule * montantCotisationsSociales;
                        break;
                    case 2: // Contractuel-le grille favorable
                        nombrePoints = (salaireCumule + primeRep + primeRepPlus) * montantCotisationsSociales;
                        break;
                    case 3: // Contractuel-le grille défavorable
                        nombrePoints = (salaireCumule + primeRep + primeRepPlus) * montantCotisationsSociales;
                        break;
                    case 4: // Certifié-e ou PLP
                        // On compte 1,25 HSA pour les certifié-e-s si les primes sont intégrées
                        nombrePoints = (salaireCumule + primeRep + primeRepPlus + (isoe * annees) + (hsaCertifie1 * annees) + ((hsaCertifie / 4.0) * annees)) * montantCotisationsSociales;
                        break;
                    case 5: // PE
                        nombrePoints = (salaireCumule + salaireCumuleDirection + primeISS + (isae * annees) + primeRep + primeRepPlus) * montantCotisationsSociales;
                        break;
                    case 6: // Agrégé-e
                        nombrePoints = (salaireCumule + primeRep + primeRepPlus + (isoe * annees) + (hsaAgrege1 * annees) + ((hsaAgrege / 4.0) * annees)) * montantCotisationsSociales;
                        break;
                    default:
                        nombrePoints = salaireCumule * montantCotisationsSociales;
                }
            } else {
                nombrePoints = (salaireCumule + salaireCumuleDirection) * montantCotisationsSociales;
            }



            //Arrondi 
            nombrePoints = Math.floor(nombrePoints);
            //Ecriture du nombre de point dans le champ prévu
            document.getElementById("nombrePoints").innerHTML = "Nombre de points : " + nombrePoints;

            //Calcul de la pension dans le système à points
            //age pivot à 64 ans né-es avant 1975, 65 ans né-es entre 1975 et 1987, 66 ans né-es après 1987
            let agePivot = 66;
            if (naissance < 1975) {
                agePivot = 64;
            } else if (naissance < 1987) {
                agePivot = 65;
            }
            //Affichage de l'âge pivot
            document.getElementById("agePivot").innerHTML = "Age du taux plein (âge pivot) : " + agePivot;


            let decotePoints = 1 - (agePivot - ageFinCarriere) * coefficientDecote;

            // Le calcul de la retraite à points mensuelle est le suivant :
            // Nombre de points acquis × décote × valeur de service du point / 12 mois
            let retraitePoints = nombrePoints * decotePoints * valeurServicePoints / 12;

            // Sera-t-on à la retraite minimum revalorisée ?
            let minimumRetraite = smicNet * tauxMinimumContributif;

            // Nombre minimal d'années cotisées pour bénéficier du minimum contributif
            // Le minimum contributif est distinct de l'ASPA (minimum vieillesse)
            // Fixé à 43 ans au minimum, puis augmente avec l'espérance de vie projetée.

            let annuitesrequises = 43;
            if (agePivot > 64) {
                annuitesrequises += 1;
            }
            if (agePivot > 65) {
                annuitesrequises += 1;
            }
            let coefficientMinimumContributif;
            if (annuites > annuitesrequises) {
                coefficientMinimumContributif = 1;
            } else {
                coefficientMinimumContributif = annees / annuitesrequises;
            }
            if (retraitePoints < minimumRetraite * coefficientMinimumContributif) {
                retraitePoints = minimumRetraite * coefficientMinimumContributif;
            }

            //Arrondi au centime
            retraitePoints = Math.floor(retraitePoints * 100) / 100;
            //Ecriture de la pension dans le champ prévu à cet effet
            if (document.getElementById('statut').value < 4) {
                document.getElementById("resultatActuel-contractuel").innerHTML = "<i>Attention&nbsp;:</i> le calcul part du principe que votre carrière sera sans aucune interruption de contrat ni temps partiel contraint. La retraite brute dans votre cas sera sans doute plus basse.";
                document.getElementById("resultatPoints-contractuel").innerHTML = "<i>Attention&nbsp;:</i> le calcul part du principe que votre carrière sera sans aucune interruption de contrat ni temps partiel contraint. La retraite brute dans votre cas sera sans doute plus basse.";
            }
            if (retraitePoints < minimumRetraite * coefficientMinimumContributif) {
                retraitePoints = minimumRetraite * coefficientMinimumContributif;
                document.getElementById("retraitePoints").innerHTML = "Montant mensuel brut de la retraite trop bas. Vous serez concerné-e par le minimum contributif (85% du SMIC proratisé en fonction du nombre d'années travaillées) : " + Math.floor(retraitePoints * 100) / 100 + " €";
            } else {
                document.getElementById("retraitePoints").innerHTML = "Montant mensuel brut de la retraite : " + retraitePoints + "&nbsp;€";
            }



            //calcul des pertes mensuelles

            let pertesMensuelles = pensionRepartition - retraitePoints;
            //Arrondi au centime
            pertesMensuelles = Math.floor(pertesMensuelles * 100) / 100;
            if (pertesMensuelles > 0) {
                //Ecriture des pertes mensuelles dans le champ prévu
                document.getElementById("pertesMensuelles").innerHTML = "<b>Pertes avec le système à points : " + pertesMensuelles + "&nbsp;€ par mois. </b>";
                //calcul des pertes annuelles
                let pertesAnnuelles = 12 * pertesMensuelles;
                //Arrondi au centime
                pertesAnnuelles = Math.floor(pertesAnnuelles * 100) / 100;
                //Ecriture des pertes mensuelles dans le champ prévu
                document.getElementById("pertesAnnuelles").innerHTML = "<b>Pertes avec le système à points : " + pertesAnnuelles + "&nbsp;€ par an. </b>";
            }

            //Remarques sur les simulations
            document.getElementById("remarques").innerHTML = "<h2>Remarques sur les simulations</h2><p>Les montants sont calculés à partir de la législation actuelle et des éléments du rapport Delevoye. Il s’agit de comparer le système actuel avec celui qui serait en vigueur à application complète de la réforme.</p><p>Nous avons considéré une évolution de carrière à l'ancienneté se terminant à la hors classe.<br/>Pour des raisons de simplicité, certaines situations ne sont pas prises en compte comme : le nombre d'enfants, le service militaire ou civil, les situations de handicap, les pensions de reversion, etc.</p><p><b>Il s'agit de comprendre quels seraient les écarts entre les deux systèmes et il n'y a pas de distorsion avec ces simplifications car les ordres de grandeurs demeurent similaires.</b></p><p><i>Si le gouvernement conteste ces simulations, libre à lui de mettre à disposition des salarié-e-s un outil comme celui que nous proposons !</i></p>";

            // Faire apparaître le bouton d'impression
            document.getElementById('impression').style.display = 'block';


        }
    }