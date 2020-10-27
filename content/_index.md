---
title: "Simulation de la revalorisation salariale"
date: 2020-10-23T08:08:47+02:00
draft: false
---

Le ministre a promis une revalorisation « exceptionnelle » du salaire des personnels. Mais s’agit-il véritablement d’une hausse importante du salaire ? SUD éducation vous propose ce simulateur pour faire le point.

{{< rawhtml >}}


<script type="text/javascript" src="js/salaires.js"></script>
<script type="text/javascript" src="js/esthetique.js"></script>
<script type="text/javascript" src="js/impression.js"></script>
<link rel="stylesheet" type="text/css" href="css/resultat.css">

<h2>Votre situation</h2>

<div class="blocSelection">
    <label for="statut">Sélectionnez votre corps ou statut&nbsp;:</label>
        <div class="menuSelection">
            <select name="Corps" id="statut">
			    <option value="pe">Professeur⋅e des écoles</option>
			    <option value="certifie">Certifié⋅e, PLP, PEPS, CPE, PsyÉN</option>
			    <option value="contrat">Contractuel⋅le enseignant⋅e</option>
				<option value="agrege">Agrégé⋅e</option>
				<option value="autre">Autre</option>
			   </select>
        </div>
</div>

  
<div class="blocSelection">
    <label for="echelon">Sélectionnez votre échelon&nbsp;:</label>
            <div class="menuSelection">
                <select name="echelon" id="echelon">
			    <option value="1">Échelon 1</option>
			    <option value="2">Échelon 2</option>
			    <option value="3">Échelon 3</option>
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

<div id="resultat">
	<h2>Résultat</h2>
	<p>Le gouvernement envisage 4 scénarios de répartition de 400 millions d’euros. Il s’agit d’une prime dégressive à mesure que l’on progresse dans la carrière.</p>
</div>

<div id="debutCarriere">
	<p>Le versement de la “prime d’attractivité” du ministère n'est pas prévu par le ministère. SUD éducation dénonce cette décision, d’autant plus que les salaires des enseignant-e-s en début de carrière sont scandaleusement bas. SUD éducation revendique une augmentation des salaires d’autant plus forte que les salaires sont faibles, pour tous les personnels.</p>
</div>

<div id="echelonEleve">
	<p>Au-delà du huitième échelon de la classe normale, aucune revalorisation n’est prévue pour les personnels, pourtant enseignants depuis de nombreuses années.</p>
</div>

<div id="autre">
	<p>Vous n’êtes pas personnel enseignant&nbsp;? La revalorisation n’est pas prévue pour vous. Pour SUD éducation, ce sont <b>bien tous les personnels qui doivent bénéficier d’une augmentation de salaire maintenant</b>.</p>
</div>

<div id="contractuel">
	<p>Pour les enseignant-e-s non-titulaires, le ministère prévoit le versement forfaitaire d’une prime différente selon le scénario retenu.</p>
	<figure><table>
<thead>
<tr><th>Scénario</th><th>Montant brut annuel</th><th>Montant brut mensuel</th></tr></thead>
<tbody><tr><td>Scénario 1</td><td>800€ bruts</td><td>66,67€ bruts</td></tr><tr><td>Scénario 2</td><td>800€ bruts</td><td>66,67€ bruts</td></tr><tr><td>Scénario 3</td><td>700€ bruts</td><td>58,33€ bruts</td></tr><tr><td>Scénario 4</td><td>600€ bruts</td><td>50€ bruts</td></tr></tbody>
</table></figure>
</div>

<div id="scenarios">
	<h3>Scénario 1</h3>
	<p id="sc1">
	<h3>Scénario 2</h3>
	<p id="sc2">
	<h3>Scénario 3</h3>
	<p id="sc3">
	<h3>Scénario 4</h3>
	<p id="sc4">
</div>


{{< /rawhtml >}}
