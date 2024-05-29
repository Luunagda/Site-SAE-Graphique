/****************************************************
 * Filtres
 ****************************************************/

// permet de passer des paramètres aux filtres (ici -> annee)
function parAnne(annee) {
    return function (elt) {
        if (elt["annee"] == annee) return elt;
    }
}
function nbEntree(){
    if(films["rang"]<=10){
        console.log(films["rang"]);
        return films["rang"];
    }
};
function Nat(id){
    return function(elt){
        for(let i=0;i<elt["nationalite"].length;i++)
            if (elt["nationalite"][i]==id) return elt
    }
    

}