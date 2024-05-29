/******* Affiche titre du film *************/
var options = {
    series: [{
    data: []
  }],
    chart: {
    type: 'area',
    //stacked: false,
    height: 450,
    width: 1000,
    zoom: {
      type: 'x',
      enabled: true,
      autoScaleYaxis: true
    },
    toolbar: {
      autoSelected: 'zoom'
    }
  },
  dataLabels: {
    enabled: false
  },
  colors: ['#DE1C12'],
  title: {
    text: 'Nombre d\'entrée en fonction des années',
    align: 'left',
    style: {
      color: '#ffffff'
    },
  },
  fill: {
    type: 'gradient',
    gradient: {
      shadeIntensity: 1,
      inverseColors: false,
      opacityFrom: 0.5,
      opacityTo: 0,
      stops: [0, 90, 100]
    },
  },
  
  xaxis: {
    categories: []
  }
  };


  let anneeNbentree = films.reduce(AnneesNbentree, {});
  console.log("annee");
  console.log(anneeNbentree);

  
  // insertion des données dans "options"
  
  let cpts = 0;
  //for (cle in anneeNbentree) {
      options["series"][cpts] = [];
      options["series"][cpts]["data"] = Object.values(anneeNbentree);
      options["series"][cpts]["name"]='Nombre d\'entrées total pour l\'année ';
      console.log("serie");
      console.log(options ["series"][cpts]);
      cpts++;
  //}
  

 console.log();
/*
 let listeAnnee=[];
        for(let i in films){
            listeAnnee.push(films[i].annee_de_sortie);
        }

let listeAnneeUniques=listeAnnee.filter((value,index,self)=>self.indexOf(value)===index);
console.log(listeAnneeUniques);*/
  // gestion des noms des colonnes en abscisses
  options["xaxis"]["categories"] = Object.keys(anneeNbentree); // comme couleur voiture filtre
  console.log("!");
  console.log();


  var chart = new ApexCharts(document.querySelector("#chartLine"), options);
  chart.render();
 


  /******* fin affiche titre du film *************/