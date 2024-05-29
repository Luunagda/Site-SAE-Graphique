function nbParAnneesNationalite(accumulateur, film) {    
    let nationalite = film["nationalite"];
    let annee = film["annee_de_sortie"];

    if (!accumulateur[nationalite]) accumulateur[nationalite] ={};
    if (!accumulateur[nationalite][annee]) accumulateur[nationalite][annee] = 0;

    accumulateur[nationalite][annee]++;
    
    
    return accumulateur;
}

function AnneesNbentree(accumulateur, film) {    
    let entree = film["entrees_en_millions"];
    let annee = film["annee_de_sortie"];

    if (!accumulateur[annee]) accumulateur[annee] = 0;
    accumulateur[annee] += entree

    console.log("accumulateur");
    console.log(accumulateur);
    
    return accumulateur;
}
//AT : Autriche / AU : Australie / BE : Belgique / CH : Suisse / CZ : République Tchèque / DE : Allemagne / ES : Espagne / FR : France / GB : Royaume-Uni / IT : Italie / MX : Mexique / NZ : Nouvelle-Zélande / RU : Russie / US : Etats-Unis / ZA : Afrique du Sud.


function anneeEtComptage(accumulateur, poisson) {
    let annee = poisson["COL 1"];
    let typePoisson = poisson["COL 5"];
    let comptage = parseInt(poisson["COL 6"], 10); //!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!


    if (!accumulateur[annee]) accumulateur[annee] = [];
    if (!accumulateur[annee][typePoisson]) accumulateur[annee][typePoisson] = 0;

    accumulateur[annee][typePoisson] += comptage; //!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!

    return accumulateur;
}




function EntreeParAnnee(accumulateur, film) {    
    let entree = film["entrees_en_millions"];
    let annee = film["annee_de_sortie"];

    if (!accumulateur[entrees_en_millions]) accumulateur[entrees_en_millions] = 0;

    accumulateur[entrees_en_millions]++;
    
    return accumulateur;
}


function Parentree(accumulateur, film) {    
    let entrees_en_millions = film["entrees_en_millions"];
    let titre = film["titre"];
    
    if (!accumulateur[titre]) accumulateur[titre] = entrees_en_millions;


    return accumulateur;
}

function ParentreeParRang(accumulateur, film) {    
    let entrees_en_millions= film["entrees_en_millions"];
    let titre = film["titre"];
    let rang = film["rang"];

    if (!accumulateur[titre]) accumulateur[titre] =entrees_en_millions;


    //accumulateur[titre][entrees_en_millions]++;
    
    return accumulateur;
}

function NbFilmParRealisateurs(accumulateur, films){
    let realisateurs = films["realisateur"];

    for (let  i in realisateurs){
        if (!accumulateur[realisateurs[i]]) accumulateur[realisateurs[i]] = 0;
        accumulateur[realisateurs[i]]++;
    }

  
    
    return accumulateur;
}



function ParReal(accumulateur, film) {    
    let real = film["realisateur"];
    
    
    if (!accumulateur[real]) accumulateur[real] = 0;


    accumulateur[real]++;
  

    return accumulateur;
}

  

function ParAnnee(accumulateur, film) {    
    let annee = film["annee_de_sortie"];

    if (annee<1950) accumulateur["Avant 1950"]++;
    else if (1950<=annee && annee<=1959) accumulateur["Entre 1950 et 1959"]++;
    else if (1960<=annee && annee<=1969) accumulateur["Entre 1960 et 1969"]++;
    else if (1970<=annee && annee<=1979) accumulateur["Entre 1970 et 1979"]++;
    else if (1980<=annee && annee<=1989) accumulateur["Entre 1980 et 1989"]++;
    else if (1990<=annee && annee<=1999) accumulateur["Entre 1990 et 1999"]++;
    else if (2000<=annee && annee<=2009) accumulateur["Entre 2000 et 2009"]++;
    else if (2010<=annee) accumulateur["Après 2010"]++;
    

  //  console.log("annee");
  //  console.log(annee);
    return accumulateur;
}


function nbEntreeParAnnee(accumulateur, film){
    let annee = film["annee_de_sortie"];
    let entree = film["entrees_en_millions"];
    let realisateur = film["realisateur"];
    let titre = film["titre"];

    if (!accumulateur[realisateur]) accumulateur[realisateur] = [];
    //if (!accumulateur[realisateur][titre]) accumulateur[realisateur][titre] = [];

    accumulateur[realisateur].push([annee,entree]);
        //console.log("accumulateur");
        //console.log(accumulateur);


    return accumulateur;
}

function ParNat(accumulateur, film) {    
    let nat = film["nationalite"];
    
    for (let  i in nat){
        if (!accumulateur[nat[i]]) accumulateur[nat[i]] = 0;
        accumulateur[nat[i]]++;
    }
   
  

    return accumulateur;
}


function ParNat(accumulateur, film) {    
    let nat = film["nationalite"];
    
    for (let  i in nat){
        if (!accumulateur[nat[i]]) accumulateur[nat[i]] = 0;
        accumulateur[nat[i]]++;
    }
   
  
    return accumulateur;
}


/*
function ParNatIndex(accumulateur, film) {    
    let nat = film["nationalite"];
    let id = Object.keys(film);
    
    for (let  i in nat){
        if (!accumulateur[nat[i]]) accumulateur[nat[i]] = [0,id];
        accumulateur[nat[i]][0]++;
    }
    console.log(accumulateur);
  
    return accumulateur;
}*/

function NblettreTitre(accumulateur, film) {    
    let titre = film["titre"];

    if (!accumulateur[titre]) accumulateur[titre] = titre.replace(/\s/g,'').length;
    
    
    
    console.log(accumulateur)
    return accumulateur;
}