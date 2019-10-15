    function calcul() {
    	/*Tableau de tableaux des indices pour chaque corps
		indices[0] : indices des ADJAENES
		indices[1] : indices des contractuels AESH
		indices[2] : indices des contractuels Paris
		indices[3] : indices des contractuels Amiens
		indices[4] : indices des ceritifiés
		indices[5] : indices des PE
		indices[6] : indices des agrégés
		etc.*/
    		let indices = [[326,327,328,329,330,332,335,339,343,354,367,380,390,402,411,430,450,466],
	    	[325,330,334,340,346,340,346,352],
	    	[410,431,453,475,498,523,548,573,598,623,650,680,710,741],
	    	[367,388,410,431,453,475,498,523,548,573,598,623,650,680,710,741],
	    	[388,441,445,458,471,483,511,547,583,625,669,710,756,798],
	    	[388,441,445,458,471,483,511,547,583,625,669,710,756,798],
	    	[448,498,502,539,574,609,651,700,750,796,830,890,925,972]];
	    	//Durées des échelons selon la même numérotation
	    	let dureesEchelons = [[1,2,2,2,2,2,2,2,3,3,3,2,3,3,4,3,3],
	    	[3,3,3,3,3,3,3],
	    	[3,3,3,3,3,3,3,3,3,3,3,3,5],
	    	[1,1,2,2,2,3,3,3,3,3,3,3,3,3,3],
	    	[1,1,2,2,2.5,3,3,3.5,4,4,4,1,1],
	    	[1,1,2,2,2.5,3,3,3.5,4,4,4,1,1],
	    	[1,1,2,2,2.5,3,3,3.5,4,4,4,1,1]];
	    	let valeurPoint = 4.686;//Valeur du point d'indice
	    	//Bonifications indiciaires pour les directions d'écoles (en points d'indice)
	    	let bonificationDirection1 = 11;//1 classe
	    	let bonificationDirection2 = 24;//2 à 4 classes
	    	let bonificationDirection3 = 38;//5 à 9 classes
	    	let bonificationDirection4 = 48;//plus de 9 classes

	    	let isoe = 1213.56;//prime annuelle d'orientation 2nd degré
	    	let rep = 1734;
	    	let repPlus = 3479;
	    	let isae = 1213.56;//prime annuelle premier degré
            //Récupération de la valeur du bouton "corps" sélectionné
           let corps = parseInt(document.getElementById('statut').value, 10);

        //On récupère les âges de début et de fin de cariière
        let ageDebutCarriere = parseInt(document.getElementById('debut').value, 10);
        let ageFinCarriere = parseInt(document.getElementById('fin').value, 10);

        //Calcul de l'échelon de fin de carrière et du salaire cumulé sur la carrière
        let echelon = 0;
        let ageCumule = ageDebutCarriere;
        let salaireCumule = 0;
        while(ageCumule < ageFinCarriere && echelon < dureesEchelons[corps].length ){
        	ageCumule += dureesEchelons[corps][echelon];
        	salaireCumule += 12 * dureesEchelons[corps][echelon] * valeurPoint*indices[corps][echelon];
        	echelon++;
        }
        if (ageFinCarriere - ageCumule > 0) {
        	let dureeDernierEchelon = ageFinCarriere - ageCumule;
        	echelon++;
        	salaireCumule += 12 * dureeDernierEchelon * valeurPoint*indices[corps][echelon - 1];
        }

        //Affichage du titre 
	    document.getElementById('resultatActuel').innerHTML = "Retraite dans le système actuel";

        //Calcul du dernier salaire dans la balise prévue à cet effet
        let dernierSalaire = valeurPoint*indices[corps][echelon - 1];
        //Si deirection d'école
        let anneesDirection1 = parseInt(document.getElementById('direction_1').value, 10);
        let anneesDirection24 = parseInt(document.getElementById('direction_24').value, 10);
        let anneesDirection59 = parseInt(document.getElementById('direction_59').value, 10);
        let anneesDirection10 = parseInt(document.getElementById('direction_10Plus').value, 10);
        let bonificationSalarialeDirection = 0;
        let salaireCumuleDirection = 0;
        if (anneesDirection1 != 0) {
        	bonificationSalarialeDirection = valeurPoint * bonificationDirection1;
        	salaireCumuleDirection += bonificationSalarialeDirection * anneesDirection1 * 12;
        }
        if (anneesDirection24 != 0) {
        	bonificationSalarialeDirection = valeurPoint * bonificationDirection2;
        	salaireCumuleDirection += bonificationSalarialeDirection * anneesDirection24 * 12;
        }
        if (anneesDirection59 != 0) {
        	bonificationSalarialeDirection = valeurPoint * bonificationDirection3;
        	salaireCumuleDirection += bonificationSalarialeDirection * anneesDirection59 * 12;
        }
        if (anneesDirection10 != 0) {
        	bonificationSalarialeDirection = valeurPoint * bonificationDirection4;
        	salaireCumuleDirection += bonificationSalarialeDirection * anneesDirection10 * 12;
        }
        dernierSalaire += bonificationSalarialeDirection;

        //Arrondi au centime
        dernierSalaire = Math.floor(dernierSalaire * 100) / 100;
        //Ecriture du dernier salaire dans la balise prévue à cet effet
	    document.getElementById('salaire').innerHTML = " Dernier salaire : " + dernierSalaire + " €";

	    //Calcul du nombre d'annuités
	    let annuites = ageFinCarriere - ageDebutCarriere;
		let trimestresAcquis = annuites * 4;

	    //Calcul de la pension dans le système actuel
		let trimestresExige = [[1960, 167],[1961,168],[1962,168],[1963,168],[1964,169],[1965,169],[1966,169],[1967,170],[1968,170],[1969,170],[1970,171],[1971,171],[1972,171]];
		let naissance = parseInt(document.getElementById("naissance").value, 10);
		let trimestresRequis = 172;
		for (var i = 0 ; i<  trimestresExige.length; i++) {
			if(naissance == trimestresExige[i][0]){
				trimestresRequis = trimestresExige[i][1];
			}
		}

	    //Ecriture du nombre de trimestres requis
	    document.getElementById("trimestresRequis").innerHTML ="Nombre de trimestres requis : " + trimestresRequis;
	    //Ecriture du nombre de trimestres acquis
	    document.getElementById("trimestresAcquis").innerHTML ="Nombre de trimestres acquis : " + trimestresAcquis;
	    let decote = 1 - (trimestresRequis - trimestresAcquis) * 0.0125;
	    let pensionRepartition = dernierSalaire * 0.75 * decote * trimestresAcquis / trimestresRequis;
	    //Arrondi au centime
	    pensionRepartition = Math.floor(pensionRepartition * 100) / 100;

	    
	    // Actuel minimum contributif
	    let minimumRetraiteRepartition = 695.59;
	    let coefficientMinRepartition;
	    
	    if (trimestresAcquis >= trimestresRequis) {
	        coefficientMinRepartition = 1;
	    } else {
	        coefficientMinRepartition = trimestresAcquis / trimestresRequis;
	    }
	    
	     //Ecriture de la pension dans le champ prévu à cet effet
	    if (pensionRepartition < minimumRetraiteRepartition * coefficientMinRepartition) {
	        pensionRepartition = minimumRetraiteRepartition * coefficientMinRepartition;
	        document.getElementById("retraiteRepartition").innerHTML = "Montant mensuel brut de la retraite trop bas. Vous serez au minimum contributif : " + pensionRepartition + "€";
	    } else {
	    document.getElementById("retraiteRepartition").innerHTML = "Montant mensuel brut de la retraite : " + pensionRepartition + "€";
        }
	    //Affichage du titre 
	    document.getElementById('resultatPoint').innerHTML = "Retraite dans le système à points (Delevoye)";

	    //Intégration des primes
	    let primeIsoe = parseInt(document.getElementById('isoe').value, 10) * isoe;
	    let primeIsae = parseInt(document.getElementById('isoe').value, 10) * isae;
	    let primeRep = parseInt(document.getElementById('rep').value, 10) * rep;
	    let primeRepPlus = parseInt(document.getElementById('repPlus').value, 10) * repPlus;
	    //calcul du nombre de points
	    let nombrePoints = (salaireCumule + salaireCumuleDirection + primeIsoe + primeIsae + primeRep + primeRepPlus) * 0.02531 ;
	    //Arrondi 
	    nombrePoints = Math.floor(nombrePoints);
	    //Ecriture du nombre de point dans le champ prévu
	    document.getElementById("nombrePoints").innerHTML ="Nombre de points : " + nombrePoints;

	    //Calcul de la pension dans le système à points
	    //age pivot à 64 ans né-es avant 1975, 65 ans né-es entre 1975 et 1987, 66 ans né-es après 1987
	    let agePivot = 66;
	    if(naissance < 1975){
	    	agePivot = 64;
	    }else if(naissance < 1987){
	    	agePivot = 65;
	    }
	    //Affichage de l'âge pivot
	    document.getElementById("agePivot").innerHTML ="Age du taux plein (âge pivot) : " + agePivot;
	    // La décote est de 5% / an
	    let coefficientDecote = 0.05;
	    // Valeur de service du point prévue dans le rapport Delevoye
	    let valeurServicePoints = 0.55;
	    let decotePoints = 1 - (agePivot - ageFinCarriere) * coefficientDecote;

	    // Le calcul de la retraite à points mensuelle est le suivant :
	    // Nombre de points acquis × décote × valeur de service du point / 12 mois
	    let retraitePoints = nombrePoints * decotePoints * valeurServicePoints / 12;

	    // Sera-t-on à la retraite minimum revalorisée ?
	    let smicNet = 1202.92;
	    let tauxMinimumContributif = 0.85;
	    let minimumRetraite = smicNet * tauxMinimumContributif;

	    // Nombre minimal d'années contisées pour bénéficier du minimum contributif
	    // Le minimum contributif est distinct de l'ASPA (minimum vieillesse)
	    // Fixé à 43 ans au minimum, puis augmente avec l'espérance de vie projetée.
	    
	    annees = ageFinCarriere - ageDebutCarriere;
	    
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
	    	    if (retraitePoints < minimumRetraite * coefficientMinimumContributif){
	    	    retraitePoints = minimumRetraite * coefficientMinimumContributif;
	    }
// Minimum vieillesse
	    // Les prélèvements sur les retraites sont en général de 7,4 %
//	    let prelevementsRetraite = 0.074;
	    
//	    if (retraitePoints < 995.34 / 0.926 ) {
//	        retraitePoints = 995.34 / 0.926;
//	    }

	    //Arrondi au centime
	    retraitePoints = Math.floor(retraitePoints * 100) / 100;
	    //Ecriture de la pension dans le champ prévu à cet effet
	    if (document.getElementById('statut').value < 4) {
	        document.getElementById("resultatActuel-contractuel").innerHTML = "<i>Attention&nbsp;:</i> le calcul part du principe que votre carrière sera sans aucune interruption de contrat ni temps partiel contraint. La retraite brute dans votre cas sera sans doute plus basse.";
	        document.getElementById("resultatPoints-contractuel").innerHTML = "<i>Attention&nbsp;:</i> le calcul part du principe que votre carrière sera sans aucune interruption de contrat ni temps partiel contraint. La retraite brute dans votre cas sera sans doute plus basse.";
	    }
	     if (retraitePoints < minimumRetraite * coefficientMinimumContributif){
	    	    retraitePoints = minimumRetraite * coefficientMinimumContributif;
	    	    document.getElementById("retraitePoints").innerHTML = "Montant mensuel brut de la retraite trop bas. Vous serez concerné-e par le minimum contributif (85% du SMIC proratisé en fonction du nombre d'années travaillées) : " + Math.floor(retraitePoints * 100) / 100 + " €";
	    } else {
	        document.getElementById("retraitePoints").innerHTML = "Montant mensuel brut de la retraite : " + retraitePoints + " €";
	    }

	    //calcul des pertes mensuelles
	    let pertesMensuelles = pensionRepartition - retraitePoints;	    
	    //Arrondi au centime
	    pertesMensuelles = Math.floor(pertesMensuelles * 100) / 100;
	    if (pertesMensuelles > 0) {
	        //Ecriture des pertes mensuelles dans le champ prévu
	        document.getElementById("pertesMensuelles").innerHTML = "<b>Pertes avec le système à points : " + pertesMensuelles + " € par mois. </b>";
            //calcul des pertes annuelles
	        let pertesAnnuelles = 12 * pertesMensuelles;	    
	        //Arrondi au centime
	        pertesAnnuelles = Math.floor(pertesAnnuelles * 100) / 100;
	        //Ecriture des pertes mensuelles dans le champ prévu
	        document.getElementById("pertesAnnuelles").innerHTML = "<b>Pertes avec le système à points : " + pertesAnnuelles + " € par an. </b>";
	    }

	    //Remarques sur les simulations
	    document.getElementById("remarques").innerHTML = "<h2>Remarques sur les simulations</h2><p>Les montants sont calculés à partir de la législation actuelle et des éléments du rapport Delevoye. Il s’agit de comparer le système actuel avec celui qui serait en vigueur à application complète de la réforme.</p><p>Nous avons considéré une évolution de carrière à l'ancienneté se terminant à la hors classe.<br/>Pour des raisons de simplicité, certaines situations ne sont pas prises en compte comme : le nombre d'enfants, le service militaire ou civil, les situations de handicap, les pensions de reversion, etc.</p><p><b>Il s'agit de comprendre quels seraient les écarts entre les deux systèmes et il n'y a pas de distorsion avec ces simplifications car les ordres de grandeurs demeurent similaires.</b></p><p><i>Si le gouvernement conteste ces simulations, libre à lui de mettre à disposition des salarié-e-s un outil comme celui que nous proposons !</i></p>" ;
	    
	    
}
