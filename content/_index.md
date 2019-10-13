---
title: "Comparateur de retraites entre le système actuel et le projet du gouvernement"
date: 2019-10-12T08:08:47+02:00
draft: false
---


{{< rawhtml >}}

<script>

function affichePrimes() {
    num = document.getElementById('statut').value ;
    if (num == 1) {
                document.getElementById('primes').style.display='none';
    } else {
                document.getElementById('primes').style.display='block';
    }
    if(num==2 || num==3 || num==4 || num==6) {
        document.getElementById('primeISOE').style.display='block';
    } else {
        document.getElementById('primeISOE').style.display='none';
    }
    if(num==5) {
        document.getElementById('direction').style.display='block';
        document.getElementById('primeISAE').style.display='block';
    } else {
        document.getElementById('direction').style.display='none';
        document.getElementById('primeISAE').style.display='none';
    }
    return;
    
}


</script>

	<h2>Déroulement de votre carrière</h2>

	
	<div class="blocSelection">
	<label for="statut">Sélectionnez votre corps&nbsp;:</label>
	<div id="apparenceStatut">
    <div class="menuSelection">
	
<select name="Corps" id="statut" onchange=affichePrimes()>
			    <option value="0">ADJAENES</option>
			    <option value="1">AESH</option>
			    <option value="2">Contractuel-le enseignant-e (grille favorable, ex Paris)</option>
			    <option value="3">Contractuel-le enseignant-e (grille défavorable, ex  Amiens)</option>
			    <option value="4" selected>Certifié⋅e, PLP, CPE…</option>
			    <option value ="6">Agrégé-e</option>
			    <option value="5">Prof⋅e des écoles</option>
			   </select>
    </div>
	</div>
    </div>

	<ul id="direction">
<p> Dans votre cas, nous avons besoin de quelques information supplémentaires.<p/>
    <li>
    	<div class="blocSelection">
    	<label for="direction_1">Nombre d'années chargé-e de direction dans une école à classe unique&nbsp;:</label>
    <div class="menuSelection">
    
			<select name="direction1classe" id="direction_1">
			    <option value="0" selected>0 année</option>
			    <option value="1">1 année</option>
			    <option value="3">3 années</option>
			    <option value="5">5 années</option>
			    <option value="10">10 années</option>
			    <option value="15">15 années</option>
			    <option value="20">20 années</option>
			    <option value="25">25 années</option>
			    <option value="30">30 années</option>
			    <option value="35">35 années</option>
			    <option value="40">40 années</option>
			   </select>
			   </div>
			   </div>
	</li>

	<li>
	        	<div class="blocSelection">
    	<label for="direction_24">Nombre d'années chargé-e de direction dans une école de 2 à 4 classes&nbsp;:</label>
    <div class="menuSelection">
			<select name="direction2a4classes" id="direction_24">	
			    <option value="0" selected>0 année</option>
			    <option value="1">1 année</option>
			    <option value="3">3 années</option>
			    <option value="5">5 années</option>
			    <option value="10">10 années</option>
			    <option value="15">15 années</option>
			    <option value="20">20 années</option>
			    <option value="25">25 années</option>
			    <option value="30">30 années</option>
			    <option value="35">35 années</option>
			    <option value="40">40 années</option>
			   </select>
			   </div>
			   </div>
	</li>
	<li>
	    <div class="blocSelection">
    	<label for="direction_59">Nombre d'années chargé-e de direction dans une école de 5 à 9 classes&nbsp;:</label>
    <div class="menuSelection">
			<select name="direction5a9classes" id="direction_59">	
			    <option value="0" selected>0 année</option>
			    <option value="1">1 année</option>
			    <option value="3">3 années</option>
			    <option value="5">5 années</option>
			    <option value="10">10 années</option>
			    <option value="15">15 années</option>
			    <option value="20">20 années</option>
			    <option value="25">25 années</option>
			    <option value="30">30 années</option>
			    <option value="35">35 années</option>
			    <option value="40">40 années</option>
			   </select>
			   </div>
			   </div>
	</li>
	<li>
	<div class="blocSelection">
    	<label for="direction_10Plus">Nombre d'années chargé-e de direction dans une école de 10 classes et plus&nbsp;:</label>
    <div class="menuSelection">
			<select name="direction10classesEtPlus" id="direction_10Plus">
			    <option value="0" selected>0 année</option>
			    <option value="1">1 année</option>
			    <option value="3">3 années</option>
			    <option value="5">5 années</option>
			    <option value="10">10 années</option>
			    <option value="15">15 années</option>
			    <option value="20">20 années</option>
			    <option value="25">25 années</option>
			    <option value="30">30 années</option>
			    <option value="35">35 années</option>
			    <option value="40">40 années</option>
			   </select>
			   </div>
			   </div>
	</li>
	</ul>
	</p>
	<ul class="formulaire">
	<li>
	<div class="blocSelection">
    	<label for="debut">Âge de début de carrière&nbsp;:</label>
    <div class="menuSelection">
	<select name="ageDebutCarriere" id="debut">
			    <option value="20">20 ans</option>
			    <option value="21">21 ans</option>
			    <option value="22">22 ans</option>
			    <option value="23" selected>23 ans</option>
			    <option value="24">24 ans</option>
			    <option value="25">25 ans</option>
			    <option value="26">26 ans</option>
			    <option value="27">27 ans</option>
			    <option value="28">28 ans</option>
			    <option value="29">29 ans</option>
			    <option value="30">30 ans</option>
			    <option value="31">31 ans</option>
			    <option value="32">32 ans</option>
			    <option value="33">33 ans</option>
			    <option value="34">34 ans</option>
			    <option value="35">35 ans</option>
			    <option value="36">36 ans</option>
			    <option value="37">37 ans</option>
			    <option value="38">38 ans</option>
			    <option value="39">39 ans</option>
			    <option value="40">40 ans</option>
			    <option value="41">41 ans</option>
			    <option value="42">42 ans</option>
			    <option value="43">43 ans</option>
			    <option value="44">44 ans</option>
			    <option value="45">45 ans</option>
			    <option value="46">46 ans</option>
			    <option value="47">47 ans</option>
			    <option value="48">48 ans</option>
			    <option value="49">49 ans</option>
			    <option value="50">50 ans</option>
			   </select>
			   </div>
			   </div>
	<li>
		<div class="blocSelection">
    	<label for="fin">Âge de départ à la retraite&nbsp;:</label>
    <div class="menuSelection"> 
	<select name="ageFinCarriere" id="fin">
			    <option value="62" selected>62 ans</option>
			    <option value="63">63 ans</option>
			    <option value="64">64 ans</option>
			    <option value="65">65 ans</option>
			    <option value="66">66 ans</option>
			    <option value="67">67 ans</option>
			   </select>
			   </div>
			   </div>
	<li>
		<div class="blocSelection">
    	<label for="naissance">Année de naissance&nbsp;:</label>
    <div class="menuSelection"> 
                <select name="anneeNaissance" id="naissance">
			    <option value="1958">1958</option>
			    <option value="1959">1959</option>
			    <option value="1960">1960</option>
			    <option value="1961">1961</option>
			    <option value="1962">1962</option>
			    <option value="1963">1963</option>
			    <option value="1964">1964</option>
			    <option value="1965">1965</option>
			    <option value="1966">1966</option>
			    <option value="1967">1967</option>
			    <option value="1968">1968</option>
			    <option value="1969">1969</option>
			    <option value="1970" selected>1970</option>
			    <option value="1971">1971</option>
			    <option value="1972">1972</option>
			    <option value="1973">1973</option>
			    <option value="1974">1974</option>
			    <option value="1975">1975</option>
			    <option value="1976">1976</option>
			    <option value="1977">1977</option>
			    <option value="1978">1978</option>
			    <option value="1979">1979</option>
			    <option value="1980">1980</option>
			    <option value="1981">1981</option>
			    <option value="1982">1982</option>
			    <option value="1983">1983</option>
			    <option value="1984">1984</option>
			    <option value="1985">1985</option>
			    <option value="1986">1986</option>
			    <option value="1987">1987</option>
			    <option value="1988">1988</option>
			    <option value="1989">1989</option>
			    <option value="1990">1990</option>
			    <option value="1991">1991</option>
			    <option value="1992">1992</option>
			    <option value="1993">1993</option>
			    <option value="1994">1994</option>
			    <option value="1995">1995</option>
			    <option value="1996">1996</option>
			    <option value="1997">1997</option>
			    <option value="1998">1998</option>
			   </select>
			   </div>
			   </div>
    </li>
	</ul>
	<div id="primes">
	<h3>Et si on intégrait les primes ?</h3>
	<p><i>Nous vous proposons de faire des simulations en intégrant les primes. Pour ne pas les prendre en compte, il suffit de laisser 0 dans le champ prévu. Ce dispositif n'est pas prévu dans le rapport Delevoye, mais il a été mis sur la table pour compenser les pertes de pension prévues dans la fonction publique. Faites-vous votre opinion avec ces simulations...</i></p>
	<p>
	<ul class="formulaire">
	    <li id="primeISOE">
	    		<div class="blocSelection">
    	<label for="isoe">Nombre d'années avec l'ISOE&nbsp;:</label>
    <div class="menuSelection"> 
	    <select name="menuISOE" id="isoe">	
			    <option value="0" selected>0 année</option>
			    <option value="1">1 année</option>
			    <option value="3">3 années</option>
			    <option value="5">5 années</option>
			    <option value="10">10 années</option>
			    <option value="15">15 années</option>
			    <option value="20">20 années</option>
			    <option value="25">25 années</option>
			    <option value="30">30 années</option>
			    <option value="35">35 années</option>
			    <option value="40">40 années</option>
			   </select>
			   </div>
			   </div>
        </li>
	    <li id="primeISAE">
	    	    		<div class="blocSelection">
    	<label for="isae">Nombre d'années avec l'ISAE&nbsp;:</label>
    <div class="menuSelection">
	    <select name="menuISAE" id="isae">	
			    <option value="0" selected>0 année</option>
			    <option value="1">1 année</option>
			    <option value="3">3 années</option>
			    <option value="5">5 années</option>
			    <option value="10">10 années</option>
			    <option value="15">15 années</option>
			    <option value="20">20 années</option>
			    <option value="25">25 années</option>
			    <option value="30">30 années</option>
			    <option value="35">35 années</option>
			    <option value="40">40 années</option>
			   </select>
			   </div>
			   </div>
		</li>
	    <li>
	    
	      		<div class="blocSelection">
    	<label for="rep">Nombre d'années en REP&nbsp;:</label>
    <div class="menuSelection">
	    <select name="menuREP" id="rep">	
			    <option value="0" selected>0 année</option>
			    <option value="1">1 année</option>
			    <option value="3">3 années</option>
			    <option value="5">5 années</option>
			    <option value="10">10 années</option>
			    <option value="15">15 années</option>
			    <option value="20">20 années</option>
			    <option value="25">25 années</option>
			    <option value="30">30 années</option>
			    <option value="35">35 années</option>
			    <option value="40">40 années</option>
			   </select>
		    </div>
		   </div>
	    </li>
	    <li>
	          		<div class="blocSelection">
    	<label for="repPlus">Nombre d'années en REP+&nbsp;:</label>
    <div class="menuSelection">
	    <select name="menuREPPlus" id="repPlus">
			    <option value="0" selected>0 année</option>
			    <option value="1">1 année</option>
			    <option value="3">3 années</option>
			    <option value="5">5 années</option>
			    <option value="10">10 années</option>
			    <option value="15">15 années</option>
			    <option value="20">20 années</option>
			    <option value="25">25 années</option>
			    <option value="30">30 années</option>
			    <option value="35">35 années</option>
			    <option value="40">40 années</option>
			   </select>
			    </div>
			   </div>
	    </li>
	</ul>
	</p>
	
	</div>
	<div class="boutonCalcul" >
	<input type="button" value="Calculer ma retraite" onclick="calcul();" />
    </div>
	<!--Balises d'accueil des résultats dans le système actuel -->
	<h2 id="resultatActuel"></h2>
	<p id="salaire"></p>
	<p id="trimestresRequis"></p>
	<p id="trimestresAcquis"></p>
	<p id="retraiteRepartition"></p>

	<!--Balises d'accueil des résultats dans le système à points -->
	<h2 id="resultatPoint"></h2>
	<p id="nombrePoints"></p>
	<p id="agePivot"></p>
	<p id="retraitePoints"></p>
	<p id="pertesMensuelles"></p>
	<p id="pertesAnnuelles"></p>
	<div id="remarques"></div>

<script>
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
	    //Ecriture de la pension dans le champ prévu à cet effet
	    document.getElementById("retraiteRepartition").innerHTML = "Montant mensuel brut de la retraite : " + pensionRepartition + " €";

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
	    let decotePoints = 1 - (agePivot - ageFinCarriere) * 0.05;
	    let retraitePoints = nombrePoints * decotePoints * 0.55 / 12;
	    //Arrondi au centime
	    retraitePoints = Math.floor(retraitePoints * 100) / 100;
	    //Ecriture de la pension dans le champ prévu à cet effet
	    document.getElementById("retraitePoints").innerHTML = "Montant mensuel brut de la retraite : " + retraitePoints + " €";

	    //calcul des pertes mensuelles
	    let pertesMensuelles = pensionRepartition - retraitePoints;	    
	    //Arrondi au centime
	    pertesMensuelles = Math.floor(pertesMensuelles * 100) / 100;
	    //Ecriture des pertes mensuelles dans le champ prévu
	    document.getElementById("pertesMensuelles").innerHTML = "<b>Pertes avec le système à points : " + pertesMensuelles + " € par mois. </b>";

	    //calcul des pertes annuelles
	    let pertesAnnuelles = 12 * pertesMensuelles;	    
	    //Arrondi au centime
	    pertesAnnuelles = Math.floor(pertesAnnuelles * 100) / 100;
	    //Ecriture des pertes mensuelles dans le champ prévu
	    document.getElementById("pertesAnnuelles").innerHTML = "<b>Pertes avec le système à points : " + pertesAnnuelles + " € par an. </b>";

	    //Remarques sur les simulations
	    document.getElementById("remarques").innerHTML = "<h2>Remarques sur les simulations</h2><p>Les montants sont calculés à partir de la législation actuelle et des éléments du rapport Delevoye. <br/>Nous avons considéré une évolution de carrière à l'ancienneté se terminant à la hors classe.<br/>Pour des raisons de simplicité, certaines situations ne sont pas prises en compte comme : le nombre d'enfants, le service militaire ou civil, les situations de handicap, les pensions de reversion, etc.</p><p><b>Il s'agit de comprendre quels seraient les écarts entre les deux systèmes et il n'y a pas de distorsion avec ces simplifications car les ordres de grandeurs demeurent similaires.</b></p><p><i>Si le gouvernement conteste ces simulations, libre à lui de mettre à dispositions des salarié-e-s un outil similaire !</i></p>" ;

    }
</script>


{{< /rawhtml >}}
