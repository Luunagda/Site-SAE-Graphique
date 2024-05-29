/******* Pourcentage de sortie de films *************/

var options = {
    series: [],
    chart: {
    height: 450,
    fontFamily: 'Evil Empire',
    type: 'radialBar',
  },
  colors: ['#A61B1B','#E51F24','#E46463','#F59E59','#ED8D39','#5F86C4','#4C64AC','#46658C'],
  title: {
    text: "Pourcentage de sortie de films",
    align: 'center',
    style: {
      color: '#fff',
    }
  },
  plotOptions: {
    radialBar: {
      dataLabels: {
        name: {
          fontSize: '22px',
        },
        value: {
          fontSize: '16px',
        },
        total: {
          show: true,
          label: 'Total',
          formatter: function (w) {
            // By default this function returns the average of all series. The below is just an example to show the use of custom formatter function
            return 200+" films"
          }
        }
      }
    }
  }
  
  };
  
  
    //console.log("filtre");
  
    let annee = films.reduce(ParAnnee, {
      "Avant 1950":0,
      "Entre 1950 et 1959":0,
      "Entre 1960 et 1969":0,
      "Entre 1970 et 1979":0,
      "Entre 1980 et 1989":0,
      "Entre 1990 et 1999":0,
      "Entre 2000 et 2009":0,
      "Après 2010":0
      });
    //console.log(annee);
  let pourcentage = [];
    for (let i in annee){
      pourcentage.push(100*annee[i]/200)
      //console.log(pourcentage);
    }
  
  
    options["series"] = pourcentage;
    options["labels"] = Object.keys(annee);
    
  
  
  var chart = new ApexCharts(document.querySelector("#pourcentage"), options);
  chart.render();
  
  /******* fin pourcentage de sortie de films *************/