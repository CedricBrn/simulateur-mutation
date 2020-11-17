function calculmutation() {
    document.getElementById('aAfficher').style.display = 'none';
    document.getElementById('resultat').style.display = 'none';
    /* */

    // -------- declaration des valeurs de reference pour les points  -------------
    // ancienneté de poste
    const pt_anciennete_poste_par_an = 20;
    const pt_anciennete_poste_tous_les_x_ans = 50;
    const pt_anciennete_poste_x_ans = 4;
    const pt_anciennete_poste_forfait_stagiaire_ex_autre_corps = 20;
    // ancienneté de service (echelon)
    const pt_echelon_par_an = 7;
    const pt_echelon_normale_min = 14;
    const pt_echelon_hc_certifies_forfait = 56;
    const pt_echelon_hc_agreges_forfait = 63;
    const pt_echelon_exceptionnel_forfait = 77 ;
    const pt_echelon_max = 98;
    // situation familiale
    const pt_situation_familiale_rapprochement_conjoint = 150.2;
    const pt_situation_familiale_annees_de_separation = {0  : 0,
                                                         0.5: 95,
                                                         1  : 190,
                                                         1.5: 285,
                                                         2  : 325,
                                                         2.5: 420,
                                                         3  : 475,
                                                         3.5: 570,
                                                         4  : 600 };
    const pt_situation_familiale_residences_professionnelles = {"none"                        : 0,
                                                                "departements_limitrophes"    : 0,
                                                                "departements_non_limitrophes": 50,
                                                                "academies_non_limitrophes"   : 100};
    const pt_situation_familiale_autorite_parentale_conjointe = 150.2;
    const pt_situation_familiale_par_enfants_a_charge = 100;
    const pt_situation_familiale_parent_isole = 150;
    const pt_situation_familiale_mutation_simultanee = 80; // NB : non cumulable avec les bonifications « rapprochement de conjoint », « parent Isolé », « autorité parentale conjointe », « vœu préférentiel ».
    // situation personnelle et administrative
    const pt_situation_personnelle_entree_metier = 10;
    const pt_situation_personnelle_academie_stage = 0.1;
    const pt_situation_personnelle_stagiaire_ex_contractuel = {1 : 150,
                                                               2 : 150,
                                                               3 : 150,
                                                               4 : 165,
                                                               5 : 180,
                                                               6 : 180,
                                                               7 : 180,
                                                               8 : 180,
                                                               9 : 180,
                                                               10: 180,
                                                               11: 180};
    const pt_situation_personnelle_stagiaire_ex_autre_corps = 1000;
    const pt_situation_personnelle_reintegration = 1000;
    const pt_situation_personnelle_affectation_education_prioritaire = {"none"        : 0,
                                                                        "rep+"        : 400,
                                                                        "rep"         : 200};
    const pt_situation_personnelle_affectation_mayotte_guyane = 100;
    const pt_situation_personnelle_situation_medicale = {"none"                           : 0,
                                                         "amelioration_situation_handicap": 1000,
                                                         "obligation_emploi"              : 100  };
    const pt_situation_personnelle_ATP_par_annee = 50;
    const pt_situation_personnelle_ATP_nb_max_annee = 4;
    // voeux spécifiques
    const pt_voeux_voeu_preferentiel_par_annee_consecutive = 20;
    const pt_voeux_voeu_preferentiel_max = 100;
    const pt_voeux_voeu_corse = {"none"         : 0,
                                 "stagiaire"    : 600,
                                 "fonctionnaire": 1400,
                                 "2edemande"    : 800,
                                 "3edemande"    : 1000};
    const pt_voeux_voeu_DOM_mayotte = 1000;

    // --------   récupération de valeurs clés ---------
    // Récupération des valeurs de la partie communune
    let statut = document.getElementById('statut').value;
    let anciennete_poste = document.getElementById('anciennete_poste').value;
    let classe = document.getElementById('classe').value;
    let echelon = document.getElementById('echelon').value;
    // Récupération des données de situation familiale
    let bonification_familiale = document.getElementById('bonification_familiale').value;
    let annees_de_separation = document.getElementById('annees_separation').value;
    let enfants_a_charge = document.getElementById('enfants_a_charge').value;
    let residences_professionnelles = document.getElementById('residences_professionnelles').value;
    // Récupération des données de situation personnelle
    let entree_metier = document.getElementById('entree_metier').checked;
    let academie_de_stage = document.getElementById('academie_de_stage').checked;
    let contractuel_actif_avant_stage = document.getElementById('contractuel_actif_avant_stage').checked;
    let academie_ex_corps = document.getElementById('academie_ex_corps').checked;
    let reintegration = document.getElementById('reintegration').checked;
    let affection_mayotte_guyane = document.getElementById('affection_mayotte_guyane').checked;
    let education_prioritaire = document.getElementById('education_prioritaire').value;
    let situation_medicale = document.getElementById('situation_medicale').value;
    let sportif_affecte_ATP = document.getElementById('sportif_affecte_ATP').value;

    // Récupération des données de voeux
    let voeu_preferentiel = document.getElementById('voeu_preferentiel').value;
    let voeu_corse = document.getElementById('voeu_corse').value;
    let voeu_DOM_mayotte = document.getElementById('voeu_DOM_mayotte').checked;

    /* -------------------------
                 CALCUL
       --------------------------   */

    // (1) pt_partie_commune = pt_anciennete_poste + pt_anciennete_service (echelon)
    let pt_partie_commune = 0;
    let ct_partie_commune = "Anciennetés de poste et de service (échelon)";

    let pt_anciennete_poste = 0;
    switch (statut) {
        case "titulaire":
            pt_anciennete_poste = anciennete_poste * pt_anciennete_poste_par_an
                + pt_anciennete_poste_tous_les_x_ans * Math.floor(anciennete_poste / pt_anciennete_poste_x_ans);
            break;
        case "stagiaire_ex_autre_corps":
            pt_anciennete_poste = anciennete_poste * pt_anciennete_poste_par_an
                + pt_anciennete_poste_tous_les_x_ans * Math.floor(anciennete_poste / pt_anciennete_poste_x_ans)
                + pt_anciennete_poste_forfait_stagiaire_ex_autre_corps;
            break;
        default:
            pt_anciennete_poste = 0;
    };
    let pt_anciennete_service = 0;
    switch (classe) {
        case "normale":
            pt_anciennete_service = Math.max(14, echelon * pt_echelon_par_an );
            break;
        case "hc_certifies":
            pt_anciennete_service = Math.min(pt_echelon_hc_certifies_forfait + echelon * pt_echelon_par_an , pt_echelon_max);
            break;
        case "hc_agreges":
            pt_anciennete_service = Math.min(pt_echelon_hc_agreges_forfait + echelon * pt_echelon_par_an , pt_echelon_max);
            break;
        case "exceptionnel":
            pt_anciennete_service = Math.min(pt_echelon_exceptionnel_forfait + echelon * pt_echelon_par_an , pt_echelon_max);
            break;
        default:
            pt_anciennete_service = 0;
    };
    pt_partie_commune = pt_anciennete_poste + pt_anciennete_service;

    // (2) pt_situation_familiale
    let pt_situation_familiale = 0;
    let ct_situation_familiale = " " ;
    switch (bonification_familiale) {
        case "rapprochement_conjoint":
            pt_situation_familiale = pt_situation_familiale_rapprochement_conjoint
                + enfants_a_charge * pt_situation_familiale_par_enfants_a_charge
                + pt_situation_familiale_annees_de_separation[annees_de_separation]
                + pt_situation_familiale_residences_professionnelles[residences_professionnelles];
            ct_situation_familiale = "Rapprochement de conjoints (si pacs/mariage avant le 31 août 2019 ou certificat de grossesse et reconnaissance anticipée avant le 31 décembre 2019) : 150,2 pts pour l’académie de résidence professionnelle du conjoint (1er vœu) et les académies limitrophes. Le conjoint doit avoir une activité professionnelle ou fournir, en cas de chômage, une attestation récente d’inscription à Pôle emploi et de joindre une attestation que la dernière activité professionnelle date d’après le 31 août 2017. ATTENTION : pour bénéficier d’un rapprochement de conjoint lors du mouvement intra, vous devez l’avoir demandé lors du mouvement inter.";
            break;
        case "autorite_parentale_conjointe":
            pt_situation_familiale = pt_situation_familiale_autorite_parentale_conjointe
                + enfants_a_charge * pt_situation_familiale_par_enfants_a_charge;
            ct_situation_familiale = "Autorité parentale conjointe : 150,2 pts pour l’académie de résidence professionnelle de l’autre parent.";
            break;
        case "parent_isole":
            pt_situation_familiale = pt_situation_familiale_parent_isole;
            ct_situation_familiale = "Parent isolé : 150 pts sur le 1er vœu et les académies limitrophes.";
            break;
        case "mutation_simultanee":
            pt_situation_familiale = pt_situation_familiale_mutation_simultanee;
            ct_situation_familiale = "Mutation simultanée de conjoints : (2 titulaires ou 2 stagiaires seulement, obligation de formuler des vœux identiques, pas de bonification pour séparation) 80 pts sur l’académie saisie en vœu n° 1 et les académies voisines.  NB : non cumulable avec les bonifications « rapprochement de conjoint », « parent Isolé », « autorité parentale conjointe », « vœu préférentiel »."
            break;
        default:
            pt_situation_familiale = 0;
            ct_situation_familiale = "Sans objet";
    };

    // (3) pt_situation_personnelle
    let pt_situation_personnelle = 0;
    let ct_situation_personnelle = " ";
    if( ( statut = "stagiaire_ex_contractuel") && contractuel_actif_avant_stage) {
        pt_situation_personnelle = pt_situation_personnelle + pt_situation_personnelle_stagiaire_ex_contractuel[echelon];
    } else if (( statut = "stagiaire") || ( statut = "stagiaire_ex_contractuel") || ( statut = "stagiaire_ex_autre_corps")) {
        pt_situation_personnelle = pt_situation_personnelle + entree_metier * pt_situation_personnelle_entree_metier;
    };
    if (( statut = "stagiaire") || ( statut = "stagiaire_ex_contractuel") || ( statut = "stagiaire_ex_autre_corps")) {
        pt_situation_personnelle = pt_situation_personnelle + academie_de_stage * pt_situation_personnelle_academie_stage;
    };
    if ( statut = "stagiaire_ex_autre_corps") {
        pt_situation_personnelle = pt_situation_personnelle + academie_ex_corps * pt_situation_personnelle_stagiaire_ex_autre_corps;
    };
    pt_situation_personnelle = pt_situation_personnelle + reintegration * pt_situation_personnelle_reintegration;
    if (affection_mayotte_guyane) {
        pt_situation_personnelle = pt_situation_personnelle + affection_mayotte_guyane * pt_situation_personnelle_affectation_mayotte_guyane ;
        if (ct_situation_personnelle.length > 2) {
            ct_situation_personnelle = ct_situation_personnelle + "</br>"
        } else {
        ""
        }
        ct_situation_personnelle = ct_situation_personnelle + "Agents affectés à Mayotte ou en Guyane : 100 pts sur tous les vœux dès 5 ans d’exercice."
    }
    pt_situation_personnelle = pt_situation_personnelle + pt_situation_personnelle_affectation_education_prioritaire[education_prioritaire];
    pt_situation_personnelle = pt_situation_personnelle + pt_situation_personnelle_situation_medicale[situation_medicale];
    let pt_situation_personnelle_ATP = Math.min(sportif_affecte_ATP , pt_situation_personnelle_ATP_nb_max_annee ) * pt_situation_personnelle_ATP_par_annee;
    pt_situation_personnelle = pt_situation_personnelle + pt_situation_personnelle_ATP;

    // (4) pt_voeu
    let pt_voeu = 0;
    let ct_voeu = " ";
    let pt_voeux_voeu_preferentiel = Math.min( (voeu_preferentiel - 1 ) * pt_voeux_voeu_preferentiel_par_annee_consecutive, pt_voeux_voeu_preferentiel_max ) ;
    if (voeu_DOM_mayotte) {
        pt_voeu = pt_voeux_voeu_DOM_mayotte ;
        ct_voeu = "Affectation en Dom y compris à Mayotte : </br>- 1 000 pts pour les académies de la Guadeloupe, la Guyane, la Martinique et la Réunion et le vice-rectorat de Mayotte </br>- Conditions : Avoir son Centre d’Intérêts Moraux et Matériels (CIMM) dans ce Dom. Formuler le vœu Dom ou Mayotte en rang 1.";
    }
    if (voeu_corse != "none") {
        pt_voeu = pt_voeux_voeu_corse[voeu_corse] ;
        if (ct_voeu.length > 2) {ct_voeu = ct_voeu + "</br"}
        ct_voeu = ct_voeu + "Vœu unique sur l’académie de Corse : </br>- 600 pts pour les agents effectuant leur stage dans l’académie en 2019-2020. </br>- 1400 pts pour les fonctionnaires stagiaires en Corse, ex enseignants contractuels du 1er ou du 2nd degré de l’EN, ex CPE contractuels, ex COP/Psy-EN ou ex psychologues scolaires contractuels, ex EAP, ex MA garantis d’emploi. </br>Conditions : justifier d'au moins un an équivalent temps plein au cours des 2 dernières années scolaires précédent le stage (sauf EAP, justifier de 2 ans de service). </br>- 800 pts pour la 2e demande consécutive sur l’académie de Corse. 1 000 pts à partir de la 3e demande consécutive.";
    }
    if ( (voeu_preferentiel > 1) && (pt_situation_familiale > 0) ) {
        if (pt_voeux_voeu_preferentiel > pt_situation_familiale) {
            pt_voeu = pt_voeux_voeu_preferentiel;
            pt_situation_familiale = 0;
            if (ct_voeu.length > 2) {ct_voeu = ct_voeu + "</br"}
            ct_voeu = "ATTENTION: pas de cumul du voeu préférentiel avec la bonification familiale qui n'a pas été prise en compte car moins intéressante."
        } else {
            pt_voeu = 0;
            if (ct_voeu.length > 2) {ct_voeu = ct_voeu + "</br"}
            ct_voeu = "ATTENTION: pas de cumul de la bonification familiale avec le voeu préférentiel qui n'a pas été pris en compte car moins intéressant."
        }
    } else if ( (voeu_preferentiel > 1) && (pt_situation_familiale == 0) ) {
        if ( pt_situation_personnelle_ATP == 0) {
            pt_voeu = pt_voeux_voeu_preferentiel;
            ct_voeu = "Vœu préférentiel : 20 pts / an dès la 2e expression consécutive du même 1er vœu (plafonnés à 100 pts).";
        } else if (pt_voeux_voeu_preferentiel > pt_situation_personnelle_ATP) {
            pt_voeu = pt_voeux_voeu_preferentiel;
            pt_situation_personnelle = pt_situation_personnelle - pt_situation_personnelle_ATP;
            ct_voeu = "Vœu préférentiel : 20 pts / an dès la 2e expression consécutive du même 1er vœu (plafonnés à 100 pts)</br>ATTENTION : non cumulable avec la bonification Sportif haut niveau ATP qui n'a pas été prise en compte car moins intéressante.";
        } else {
            pt_voeu = 0;
            ct_voeu = "ATTENTION: Vœu préférentiel non pris en compte car non cumulable avec la bonification Sportif haut niveau ATP qui a été gardée car plus intéressante.";
        }

    }

    // pt_total = pt_partie_commune (1) + pt_situation_familiale (2) + pt_situation_personnelle (3) + pt_voeu (4) AVEC REGLES DE NON CUMUL
    let pt_total = pt_partie_commune + pt_situation_familiale + pt_situation_personnelle + pt_voeu;

    // rounding to avoid decimal issues ( see http://adripofjavascript.com/blog/drips/avoiding-problems-with-decimal-math-in-javascript.html )
    pt_partie_commune = pt_partie_commune.toFixed(1);
    pt_situation_familiale = pt_situation_familiale.toFixed(1);
    pt_situation_personnelle = pt_situation_personnelle.toFixed(1);
    pt_voeu = pt_voeu.toFixed(1);
    pt_total = pt_total.toFixed(1);
    // REGLES DE NON CUMUL :
    // TO BE LISTED AnD APPLIED
    // toutes les bonifs familiales et voeu preferentiel - OK
    // stagiaire ex conrtractuels actifs et voeu preferentiel - Ok
    // sportif ATP et voeu preferentiel - OK
    // par construction, cas impossibles en même temps???: voeu préférentiel / voeu unique corse / voeu Dom Mayotte; -> EN FAIT SI.

    //Affichage du résultat
    document.getElementById("pt_partie_commune").innerHTML = pt_partie_commune + " pts";
    document.getElementById("ct_partie_commune").innerHTML = ct_partie_commune ;
    document.getElementById("pt_situation_familiale").innerHTML = pt_situation_familiale + " pts";
    document.getElementById("ct_situation_familiale").innerHTML = ct_situation_familiale;
    document.getElementById("pt_situation_personnelle").innerHTML = pt_situation_personnelle + " pts";
    document.getElementById("ct_situation_personnelle").innerHTML = ct_situation_personnelle ;
    document.getElementById("pt_voeu").innerHTML = pt_voeu + " pts";
    document.getElementById("ct_voeu").innerHTML = ct_voeu;
    document.getElementById("pt_total").innerHTML = pt_total + " pts";


    document.getElementById('aAfficher').style.display = 'block';
    document.getElementById('resultat').style.display = 'block';
};

// Afficher les menus  et les div nécessaires
function showFormItem(it, displaybool) {
    var vis = displaybool ? "block" : "none";
    document.getElementById(it).style.display = vis;
};

function showFormItemWhen(it, selectorId, optionValues) {
    var vis = "none";
    if (optionValues.includes(document.getElementById(selectorId).value) ) {
        vis = "block";
    } else {
        vis = "none";
    }
    document.getElementById(it).style.display = vis;
};