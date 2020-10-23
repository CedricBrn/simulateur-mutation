---
title: "Simulation de la revalorisation salariale"
date: 2020-10-23T08:08:47+02:00
draft: false
---

Le ministre a promis une revalorisation « exceptionnelle » du salaire des personnels. Mais s’agit-il véritablement d’une hausse importante du salaire ? SUD éducation vous propose ce simulateur pour faire le point.

{{< rawhtml >}}


<script type="text/javascript" src="js/retraites.js"></script>
<script type="text/javascript" src="js/esthetique.js"></script>
<script type="text/javascript" src="js/impression.js"></script>
<!-- <link rel="stylesheet" type="text/css" href="css/print.css" media="print"> -->

<h2>Votre situation</h2>

<div class="blocSelection">
    <label for="statut">Sélectionnez votre corps ou statut&nbsp;:</label>
        <div class="menuSelection">
            <select name="Corps" id="statut">
			    <option value="0">Professeur⋅e des écoles</option>
			    <option value="1">Certifié⋅e, PLP, PEPS, CPE, PsyÉN</option>
			    <option value="2">Contractuel⋅le enseignant⋅e</option>
				<option value="3">Autre</option>
			   </select>
        </div>
</div>

  
<div class="blocSelection">
    <label for="echelon">Sélectionnez votre échelon&nbsp;:</label>
            <div class="menuSelection">
                <select name="echelon" id="echelon">
			    <option value="1">Échelon 1</option>
			    <option value="2">Échelon 2</option>
			    <option value="3" selected>Échelon 3</option>
			    <option value="4">Échelon 4</option>
			    <option value="5">Échelon 5</option>
			    <option value="6">Échelon 6</option>
			    <option value="7">Échelon 7</option>
			    <option value="8">Échelon 8</option>
			    <option value="9">Échelon 9 et plus</option>
			   </select>
            </div>
</div>

  

<div class="boutonCalcul">
    <input type="button" value="Calculer" onclick="calcul();" />
</div>
<!--Balises d'accueil des résultats dans le système actuel -->
<div id="resultat">
	<div id="pourImpression">
		<h2 id="resultatActuel"></h2>
		<p id="resultatActuel-contractuel"></p>
		<p id="salaire"></p>
		<p id="trimestresRequis"></p>
		<p id="trimestresAcquis"></p>
		<p id="retraiteRepartition"></p>
		<!--Balises d'accueil des résultats dans le système à points -->
		<h2 id="resultatPoint"></h2>
		<p id="resultatPoints-contractuel"></p>
		<p id="nombrePoints"></p>
		<p id="agePivot"></p>
		<p id="retraitePoints"></p>
		<p id="pertesMensuelles"></p>
		<p id="pertesAnnuelles"></p>
		<div id = "logo-greve-impression">
			<p>
				Simulation effectuée sur <b>retraites.sudeducation.org</b>
			</p>
			<img src="visuels/visuel/AutocollantOnContinue.png">
		</div>
	</div>
</div>
<div id="impression">
	<div class="boutonCalcul">
		<input type="button" value="Imprimer le résultat" onclick="impression('pourImpression');" />
	</div>
	<div id="remarques">
	</div>
</div>

{{< /rawhtml >}}
