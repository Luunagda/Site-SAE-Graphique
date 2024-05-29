// Par années ********************************************
/*
{
  let options = {
      series: [],
      chart: {
          type: 'bar',
          height: 350,
          stacked: true,
          toolbar: {
              show: true
          },
          zoom: {
              enabled: true
          }
      },
      responsive: [{
          breakpoint: 480,
          options: {
              legend: {
                  position: 'bottom',
                  offsetX: -10,
                  offsetY: 0
              }
          }
      }],
      plotOptions: {
          bar: {
              horizontal: false,
              borderRadius: 10,
              dataLabels: {
                  total: {
                      enabled: true,
                      style: {
                          fontSize: '13px',
                          fontWeight: 900
                      }
                  }
              }
          },
      },
      xaxis: {
          type: 'category',
          categories: [],
      },
      legend: {
          position: 'right',
          offsetY: 40
      },
      fill: {
          opacity: .5
      },
      colors:['#FFC300', '#ff8b00', '#FF5733', '#C70039','#900C3F','#581845']
  };

  //
  // ... Mettre ici le code manquant
  //

  let annee = films.reduce(nbParAnneesNationalite, {});
  console.log("annee");
  console.log(annee);

  
  // insertion des données dans "options"
  let cpt = 0;
  for (cle in annee) {
      options["series"][cpt] = [];
      options["series"][cpt]["name"] = cle;
      options["series"][cpt]["data"] = Object.values(annee[cle]);
      console.log("serie");
      console.log(options ["series"][cpt]);
      cpt++;
  }
 console.log(cle);

 let listeAnnee=[];
        for(let i in films){
            listeAnnee.push(films[i].annee_de_sortie);
        }

        let listeAnneeUniques=listeAnnee.filter((value,index,self)=>self.indexOf(value)===index);
console.log(listeAnneeUniques);
  // gestion des noms des colonnes en abscisses
  options["xaxis"]["categories"] = listeAnneeUniques; // comme couleur voiture filtre
  console.log("!");
  console.log(films[annee]);

  // affichage du graphique
  var stackedColumns = new ApexCharts(document.querySelector("#stacked-columns-nationalites"), options);
  stackedColumns.render();
}
*/


/*
var options = {
    series: [{
        name:[],
        data:[2004,10]
    }],
    [{
    name: 'Bubble1',
    data: generateData(new Date('11 Feb 2017 GMT').getTime(), 20, {
      min: 10,
      max: 60
    })
  },
  {
    name: 'Bubble2',
    data: generateData(new Date('11 Feb 2017 GMT').getTime(), 20, {
      min: 10,
      max: 60
    })
  },
  {
    name: 'Bubble3',
    data: generateData(new Date('11 Feb 2017 GMT').getTime(), 20, {
      min: 10,
      max: 60
    })
  },
  {
    name: 'Bubble4',
    data: generateData(new Date('11 Feb 2017 GMT').getTime(), 20, {
      min: 10,
      max: 60
    })
  }],
    chart: {
      height: 350,
      type: 'bubble',
  },
  dataLabels: {
      enabled: false
  },
  fill: {
      opacity: 0.8
  },
  title: {
      text: 'Simple Bubble Chart'
  },
  xaxis: {
      tickAmount: 12,
      type: 'category',
      min: 1940,
      max: 2025
  },
  yaxis: {
      min: 5.51, 
      max: 21.80
  }
  };

  var chart = new ApexCharts(document.querySelector("#chart-bubble"), options);
  chart.render();

*/



var options = {
  legend: {
    fontFamily: 'Evil Empire',
  },
  series: [],
  chart: {
  width: 100,
  height: 600,
  type: 'radialBar',
},
stroke: {
  colors: ['#A61B1B','#E51F24','#E46463','#F59E59','#ED8D39','#F6CF43','#5F86C4','#4C64AC','#46658C','#000000']
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
          return 200000000
        }
      }
    }
  }
},
};


let filtreFilmRang2 = films.filter(function(film){ 
  return film.rang<=10
});
//console.log("filtre");
//console.log(filtreFilmRang);
let rang2 = filtreFilmRang2.reduce(Parentree, {});
//console.log(rang);
//console.log(Object.keys(rang));


options["series"] = Object.values(rang2);
options["labels"] = Object.keys(rang2);
//  console.log(Object.keys(rang));


var chart = new ApexCharts(document.querySelector("#chart2"), options);
chart.render();











var options = {
  series: [],
  chart: {
  width: 800,
  height: 600,
  type: 'polarArea',
},
stroke: {
  colors: ['#A61B1B','#E51F24','#E46463','#F59E59','#ED8D39','#F6CF43','#5F86C4','#4C64AC','#46658C','#000000']
},
fill: {
  opacity: 0.8
},
responsive: [{
  breakpoint: 480,
  options: {
    chart: {
      width: 200
    },
    legend: {
      position: 'bottom'
    }
  }
}]
};



let anneenat = films.reduce(ParNat, {});



options["series"] = Object.values(anneenat);
options["labels"] = Object.keys(anneenat);




var chart = new ApexCharts(document.querySelector("#chart7"), options);
chart.render();