---
title: "Simulateur mutation inter-académique"
date: 2020-10-23T08:08:47+02:00
draft: false
---

Ceci est un simulateur pour estimer vos points de mutation inter-académique. Attention les points peuvent varier d'un voeu à l'autre et nécessitent une vérification précise des conditions d'obtention. Contactez-nous pour vérifier les calculs!

{{< rawhtml >}}


<script type="text/javascript" src="js/mutationinter.js"></script>
<link rel="stylesheet" type="text/css" href="css/simulateur.css">

<h2>Partie commune</h2>
<div class="blocSelection">
   <label for="statut">Sélectionnez votre statut&nbsp;: 
       <div class="tooltip"><img src="infobulle.png" class="tooltipicon"><div class="tooltiptext">
       Stagiaire ex autre corps: Stagiaire précédemment titulaire d'un autre corps de personnels enseignant, d’éducation et d’orientation. 
       </div></div>
   </label>
   <div class="menuSelection">
      <select id="statut" onchange="showFormItemWhen('menu_anciennete_poste','statut',['titulaire','stagiaire_ex_autre_corps']);
                                    showFormItemWhen('menus_stagiaires','statut',['stagiaire','stagiaire_ex_contractuel','stagiaire_ex_autre_corps']);
                                    showFormItemWhen('menu_contractuel_actif_avant_stage','statut',['stagiaire_ex_contractuel']);
                                    showFormItemWhen('menu_academie_ex_corps','statut',['stagiaire_ex_autre_corps']);">
         <option value="rien" selected>Choisissez…</option>
         <option value="titulaire">Titulaire</option>
         <option value="stagiaire">Stagiaire</option>
         <option value="stagiaire_ex_contractuel">Stagiaire ex-contractuel</option>
         <option value="stagiaire_ex_autre_corps">Stagiaire ex autre corps</option>
      </select>
   </div>
</div>

<div class="blocSelection" id="menu_anciennete_poste">
   <label for="menu_anciennete_poste">
   Sélectionnez votre ancienneté:
   <div class="tooltip"><img src="infobulle.png" class="tooltipicon"><div class="tooltiptext">
        Votre ancienneté en années au 31/08/2020, dans le poste actuel ou dans le dernier occupé si disponibilité, congé, ATP, ou si vous êtes stagiaire précédemment titulaire d’un autre corps de personnel enseignant, d’éducation et d’orientation. 
   </div></div>
   </label> 
   <div class="menuSelection">
      <select id="anciennete_poste">
         <option value="0" selected>0</option>
         <option value="1">1</option>
         <option value="2">2</option>
         <option value="3">3</option>
         <option value="4">4</option>
         <option value="5">5</option>
         <option value="6">6</option>
         <option value="7">7</option>
         <option value="8">8</option>
         <option value="9">9</option>
         <option value="10">10</option>
         <option value="11">11</option>
         <option value="12">12</option>
         <option value="13">13</option>
         <option value="14">14</option>
         <option value="15">15</option>
         <option value="16">16</option>
         <option value="17">17</option>
         <option value="18">18</option>
         <option value="19">19</option>
         <option value="20">20</option>
         <option value="21">21</option>
         <option value="22">22</option>
         <option value="23">23</option>
         <option value="24">24</option>
         <option value="25">25</option>
         <option value="26">26</option>
         <option value="27">27</option>
         <option value="28">28</option>
         <option value="29">29</option>
         <option value="30">30</option>
         <option value="31">31</option>
         <option value="32">32</option>
         <option value="33">33</option>
         <option value="34">34</option>
         <option value="35">35</option>
         <option value="36">36</option>
         <option value="37">37</option>
         <option value="38">38</option>
         <option value="39">39</option>
         <option value="40">40</option>
      </select>
   </div>
</div>

<div class="blocSelection" id="menu_classe">
   <label for="menu_classe">Sélectionnez votre classe&nbsp;:
   </label>
   <div class="menuSelection">
      <select id="classe">
         <option value="normale" selected>Classe normale</option>
         <option value="hc_certifies">Hors cl. certifié⋅e-PLP-PEPS-CPE-PsyÉN</option>
         <option value="hc_agreges">Hors cl. agrégés</option>
         <option value="exceptionnel">Classe exceptionnelle</option>
      </select>
   </div>
</div>

<div class="blocSelection" id="menu_echelon">
   <label for="menu_echelon">Sélectionnez votre échelon :
   <div class="tooltip"><img src="infobulle.png" class="tooltipicon"><div class="tooltiptext">
        Echelon au 31/08/2020 (au 01/09/2019 si entrée dans le métier et reclassement).
   </div></div>
   </label>
   <div class="menuSelection">
      <select id="echelon">
         <option value="1" selected>Échelon 1</option>
         <option value="2">Échelon 2</option>
         <option value="3">Échelon 3</option>
         <option value="4">Échelon 4</option>
         <option value="5">Échelon 5</option>
         <option value="6">Échelon 6</option>
         <option value="7">Échelon 7</option>
         <option value="8">Échelon 8</option>
         <option value="9">Échelon 9</option>
         <option value="10">Échelon 10</option>
         <option value="11">Échelon 11</option>
      </select>
   </div>
</div>


<h2>Situation familiale</h2>

<div class="blocSelection" id="menu_bonification_familiale">
   <label for="menu_bonification_familiale">Bonification familiale:
   <div class="tooltip"><img src="infobulle.png" class="tooltipicon"><div class="tooltiptext">
        Attention, ces bonifications devront être justifiées auprès du rectorat afin d'être validées par celui-ci.
   </div></div>
   </label>
   <div class="menuSelection">
      <select id="bonification_familiale" 
            onchange="showFormItemWhen('menu_enfants_a_charge','bonification_familiale',['rapprochement_conjoint','autorite_parentale_conjointe']);
                      showFormItemWhen('menu_annees_separation','bonification_familiale',['rapprochement_conjoint']);
                      showFormItemWhen('menu_residences_professionnelles','bonification_familiale',['rapprochement_conjoint']);">
         <option value="none" selected>Aucune</option>
         <option value="rapprochement_conjoint">Rapprochement de conjoint</option>
         <option value="autorite_parentale_conjointe">Autorité parentale conjointe</option>
         <option value="parent_isole">Parent isolé</option>
         <option value="mutation_simultanee">Mutation simultanée</option>
      </select>
   </div>
</div>  

<div class="blocSelection" id="menu_annees_separation">
   <label for="menu_annees_separation">Années de séparation:
   <div class="tooltip"><img src="infobulle.png" class="tooltipicon"><div class="tooltiptext">
        ° Nécessite au moins 6 mois de séparation effective par année scolaire.</br>
        ° Les conjoint-e-s sont considéré-e-s comme séparé-e-s s'ils/elles exercent leur activité dans deux départements distincts.</br>
        ° Les périodes de congé parental et disponibilité pour suivre le/la conjoint-e sont prises en compte pour la moitié de leur durée.
   </div></div>
   </label>
   <div class="menuSelection">
      <select id="annees_separation">
         <option value=0 selected>0</option>
         <option value=0.5>0.5</option>
         <option value=1>1</option>
         <option value=1.5>1.5</option>
         <option value=2>2</option>
         <option value=2.5>2.5</option>
         <option value=3>3</option>
         <option value=3.5>3.5</option>
         <option value=4>4 ou plus</option>
      </select>
   </div>
</div>

<div class="blocSelection" id="menu_enfants_a_charge">
   <label for="menu_enfants_a_charge">Nombre d'enfants à charge (ou à naître)
   <div class="tooltip"><img src="infobulle.png" class="tooltipicon"><div class="tooltiptext">
        Enfants de moins de 18 ans au 31/08/2020
   </div></div>
   </label>
   <div class="menuSelection">
      <select id="enfants_a_charge">
         <option value=0 selected>0</option>
         <option value=1>1</option>
         <option value=2>2</option>
         <option value=3>3</option>
         <option value=4>4</option>
         <option value=5>5</option>
         <option value=6>6</option>
         <option value=7>7</option>
         <option value=8>8</option>
         <option value=9>9</option>
         <option value=10>10</option>
      </select>
   </div>
</div>

<div class="blocSelection" id="menu_residences_professionnelles">
   <label for="menu_residences_professionnelles">Lieu de résidence professionnelle des deux conjoints :</label>
   <div class="menuSelection">
      <select id="residences_professionnelles">
         <option value="none" selected>Choisissez…</option>
         <option value="departements_limitrophes">académies et départements limitrophes</option>
         <option value="departements_non_limitrophes">départements non limitrophes relevant d’académies limitrophes</option>
         <option value="academies_non_limitrophes">académies non limitrophes</option>
      </select>
   </div>
</div>

<h2>Situation personnelle et administrative</h2>
<div id="menus_stagiaires">
    <p class="boldp">Cas spécifiques aux stagiaires :</p>
    <div class="blocSelection" id="menu_entree_metier">
          <input type="checkbox" id="entree_metier">
          <label for="entree_metier">Bonification d'entrée dans le métier:
          </label>
          <div class="tooltip"><img src="infobulle.png" class="tooltipicon"><div class="tooltiptext">
                Bonification de 10 points sur le premier vœu pour les stagiaires 2019-2020, 2018-2019 et 2017-2018 à condition de ne pas les avoir déjà utilisés. Bonification non prise en compte en cas d'extension.
          </div></div>
    </div>
    <div class="blocSelection" id="menu_academie_de_stage">
       <input type="checkbox" id="academie_de_stage">    
       <label for="academie_de_stage">Vœu de l'académie de stage
       </label>     
      <div class="tooltip"><img src="infobulle.png" class="tooltipicon"><div class="tooltiptext">
        0,1 pt pour le vœu « académie de stage » et pour le vœu « académie d’inscription du concours de recrutement ». Bonification non prise en compte en cas d'extension.
     </div></div>
    </div>
    <div class="blocSelection" id="menu_contractuel_actif_avant_stage">
       <input type="checkbox" id="contractuel_actif_avant_stage">
       <label for="contractuel_actif_avant_stage">Stagiaire ex-contractuel: justifiant d'un an équivalent temps plein dans les 2 dernières années précédant le stage
        </label>
        <div class="tooltip"><img src="infobulle.png" class="tooltipicon"><div class="tooltiptext">
            Stagiaires Ex-contractuels (enseignants 1er et 2nd degré, CPE, COP/PsyEN, MA garantis d’emplois, EAP, AESH, cont. CFA et AED)</br>
            Conditions : justifier d'au moins un an équivalent temps plein au cours des 2 dernières années scolaires précédent le stage. (sauf EAP, justifier de 2 ans de service). </br>
            NB : non cumulable avec la bonification d’entrée dans le métier. "
         </div></div>
    </div>
    <div class="blocSelection" id="menu_academie_ex_corps">
       <input type="checkbox" id="academie_ex_corps">    
       <label for="academie_ex_corps">Stagiaire ex autre corps: vœu sur l'académie de l'ancienne affectation avant réussite du concours</label>
       <div class="tooltip"><img src="infobulle.png" class="tooltipicon"><div class="tooltiptext">
          Stagiaire précédemment titulaire d'un autre corps ou d'un corps de personnels enseignants : 1000 pts sur l’académie de l’ancienne affectation avant réussite du concours. 
       </div></div>
    </div>
    <p class="boldp">Autres cas :</p>
</div>

<div class="blocSelection" id="menu_reintegration">
   <input type="checkbox" id="reintegration">    
   <label for="reintegration">Réintégration</label>
     <div class="tooltip"><img src="infobulle.png" class="tooltipicon"><div class="tooltiptext">
        Après affectation dans un emploi fonctionnel, en école européenne, à St Pierre et Miquelon, en établissement privé sous contrat, en établissement expérimental, ou en qualité de faisant fonction dans l’EN. 1000 pts sur l’ancienne académie d’affectation. 
     </div></div>
</div> 

<div class="blocSelection" id="menu_education_prioritaire">
   <label for="menu_education_prioritaire">Affectation Education prioritaire :
     <div class="tooltip"><img src="infobulle.png" class="tooltipicon"><div class="tooltiptext">
        Affectation en éducation prioritaire: ancienneté au 31 août 2020.</br>
        Sortie d’APV pour les lycées: ancienneté calculée au 31 août 2015. 
     </div></div>
   </label>
   <div class="menuSelection">
      <select name="" id="education_prioritaire">
        <option value="none" selected>Sans objet</option>
        <option value="rep+">REP+ 5ans et +</option>
        <option value="rep">REP 5ans et +</option>
        <option value="apvlycee1">APV lycée 1 an</option>
        <option value="apvlycee2">APV lycée 2 ans</option>
        <option value="apvlycee3">APV lycée 3 ans</option>
        <option value="apvlycee4">APV lycée 4 ans</option>
        <option value="apvlycee5ou6">APV lycée 5 ou 6ans</option>
        <option value="apvlycee7">APV lycée 7 ans</option>
        <option value="apvlycee8">APV lycée 8 ans et +</option>
      </select>
   </div>
</div>

<div class="blocSelection" id="menu_affection_mayotte_guyane">
   <input type="checkbox" id="affection_mayotte_guyane">    
   <label for="affection_mayotte_guyane">Affectation Mayotte ou Guyane</label>
     <div class="tooltip"><img src="infobulle.png" class="tooltipicon"><div class="tooltiptext">
        Agents affectés à Mayotte ou en Guyane : 100 pts sur tous les vœux dès 5 ans d’exercice. 
     </div></div>
</div> 

<div class="blocSelection" id="menu_situation_medicale">
   <label for="menu_situation_medicale">Situation médicale / handicap :
     <div class="tooltip"><img src="infobulle.png" class="tooltipicon"><div class="tooltiptext">
        Situation médicale / handicap : 1 000 pts pour l’académie (ou exceptionnellement les académies) dans laquelle la mutation demandée améliorera la situation de la personne handicapée (agent, conjoint, enfant). Les points seront attribués après avis du médecin conseiller technique du Recteur.</br>
        Pour les agents bénéficiaires de l'obligation d'emploi 100 pts. Non cumulable avec les 1000 pts
     </div></div>
   </label>
   <div class="menuSelection">
      <select id="situation_medicale">
         <option value="none" selected>Sans objet</option>
         <option value="amelioration_situation_handicap">Mutation pour améliorat° de situation</option>
         <option value="obligation_emploi">Agents bénéficiaires de l'oblig° d'emploi</option>
      </select>
    </div>
</div>

<div class="blocSelection" id="menu_sportif_affecte_ATP">
   <label for="menu_sportif_affecte_ATP">Sportif de haut niveau affecté en ATP (nombre d'années):
     <div class="tooltip"><img src="infobulle.png" class="tooltipicon"><div class="tooltiptext">
        Sportif de haut niveau affectés en ATP : 50 pts par année d’ATP dans la limite de 4 ans consécutifs.</br>
        NB : Non cumulable avec la bonification pour vœu préférentiel 
     </div></div>
   </label>
   <div class="menuSelection">
      <select id="sportif_affecte_ATP">
         <option value=0 selected>0</option>
         <option value=1>1</option>
         <option value=2>2</option>
         <option value=3>3</option>
         <option value=4>4 ou plus</option>
      </select>
   </div>
</div>

<h2>Bonifications en fonction du vœu exprimé</h2>

<div class="blocSelection" id="menu_voeu_preferentiel">
   <label for="menu_voeu_preferentiel">Vœu préférentiel :
     <div class="tooltip"><img src="infobulle.png" class="tooltipicon"><div class="tooltiptext">
        Nombre d'années d'expression en 1er vœu</br>
        NB: non cumulable avec les bonifications familiales
     </div></div>
   </label>
   <div class="menuSelection">
      <select id="voeu_preferentiel">
         <option value=1 selected>1ère année</option>
         <option value=2>2ème année consécutive</option>
         <option value=3>3ème année consécutive</option>
         <option value=4>4ème année consécutive</option>
         <option value=5>5ème année consécutive</option>
         <option value=6>6ème année consécutive ou +</option>
      </select>
   </div>
</div>

<div class="blocSelection" id="menu_voeu_corse">
   <label for="menu_voeu_corse">Vœu unique sur l'académie de Corse :
     <div class="tooltip"><img src="infobulle.png" class="tooltipicon"><div class="tooltiptext">
        Vœu unique sur l’académie de Corse : </br>
        - 600 pts pour les agents effectuant leur stage dans l’académie en 2019-2020. </br>
        - 1400 pts pour les fonctionnaires stagiaires en Corse, ex enseignants contractuels du 1er ou du 2nd degré de l’EN, ex CPE contractuels, ex COP/Psy-EN ou ex psychologues scolaires contractuels, ex EAP, ex MA garantis d’emploi. </br>
        Conditions : justifier d'au moins un an équivalent temps plein au cours des 2 dernières années scolaires précédent le stage (sauf EAP, justifier de 2 ans de service). </br>
        - 800 pts pour la 2e demande consécutive sur l’académie de Corse. 1 000 pts à partir de la 3e demande consécutive.
     </div></div>
   </label>
   <div class="menuSelection">
      <select id="voeu_corse">
        <option value="none" selected>Sans objet</option>
        <option value="stagiaire">Stagiaire 2019-2020 en Corse</option>
        <option value="fonctionnaire">Fonctionnaire ayant travaillé en Corse</option>
        <option value="2edemande">2e demande consécutive</option>
        <option value="3edemande">3e demande consécutive ou plus</option>
      </select>
   </div>
</div>

<div class="blocSelection" id="menu_voeu_DOM_mayotte">
   <input type="checkbox" id="voeu_DOM_mayotte">    
   <label for="voeu_DOM_mayotte">Affectation en DOM et Mayotte</label>
        <div class="tooltip"><img src="infobulle.png" class="tooltipicon"><div class="tooltiptext">
        Affectation en Dom y compris à Mayotte :</br>
        - 1 000 pts pour les académies de la Guadeloupe, la Guyane, la Martinique et la Réunion et le vice-rectorat de Mayotte </br>
        - Conditions : Avoir son Centre d’Intérêts Moraux et Matériels (CIMM) dans ce Dom. Formuler le vœu Dom ou Mayotte en rang 1.
     </div></div>
</div> 

<div class="boutonCalcul" id="calcul">
   <input type="button" value="Calculer" onclick="calculmutation();" />
</div>

<div id="aAfficher">
   <div id="resultat">
      <h2>Résultat</h2>
      <p>Voici une estimation de vos points de mutation:</p>
      <figure>
         <table>
            <thead>
               <tr>
                  <th class="col1">Section</th>
                  <th class="col2">Points</th>
                  <th class="col3">Commentaires</th>
               </tr>
            </thead>
            <tbody>
               <tr>
                  <td class="col1">Partie commune</td>
                  <td class="col2" id="pt_partie_commune"></td>
                  <td class="col3" id="ct_partie_commune"></td>
               </tr>
               <tr>
                  <td class="col1">Situation familiale</td>
                  <td class="col2" id="pt_situation_familiale"></td>
                  <td class="col3" id="ct_situation_familiale"></td>
               </tr>
               <tr>
                  <td class="col1">Situation personnelle et administrative</td>
                  <td class="col2" id="pt_situation_personnelle"></td>
                  <td class="col3" id="ct_situation_personnelle"></td>
               </tr>
               <tr>
                  <td class="col1">Spécifiques aux vœux</td>
                  <td class="col2" id="pt_voeu"></td>
                  <td class="col3" id="ct_voeu"></td>
               </tr>
               <tfoot>
                  <td class="col1">Total</td>
                  <td class="col2" id="pt_total"></td>
                  <td class="col3"></td>
               </tfoot>
            </tbody>
         </table>
      </figure>
   </div>
</div>

{{< /rawhtml >}}