/******* Top 10 des réalisateurs qui ont fait le plus d'entrées *************/
        
var options = {
    legend: {
      fontFamily: 'Evil Empire',
    },
    series: [],
    chart: {
    type: 'donut',
    width : 500,
    fontFamily: 'Evil Empire',
  },
  
  plotOptions: {
    pie: {
      hollow : {
        background : '#f2f2f2'
      },
      donut: {
        labels: {
          show: true,
          name: {
            show: true,
                fontSize: '16px',
                fontFamily: undefined,
                fontWeight: 600,
                color: undefined,
                offsetY: -10
          },
          value: {
            show: true,
                fontSize: '14px',
                fontFamily: undefined,
                fontWeight: 400,
                color: undefined,
                offsetY: 16
          }
        }
      }
    }
  },
  dataLabels: {
    enabled: true,
    enabledOnSeries: 45,
    formatter: function (val, opt) {
        
      let valueFormatted = val.toFixed(0);
      //console.log("Val formatted: ", opt.w.config.series[opt.seriesIndex].valueInvented);
      return  (opt.seriesIndex+1)
    },
  },
  colors: ['#A61B1B','#E51F24','#E46463','#F59E59','#ED8D39','#F6CF43','#5F86C4','#4C64AC','#46658C','#000000'],
  title: {
    text: "Top 10 des réalisateurs qui ont fait le plus d'entrées",
    style: {
      fontFamily: 'Evil Empire',
    }
  },
        stroke: {
          width: 2
        },
        tooltip: {
            y: {
              formatter: function (val) {
                return val + " films"
              }
            }
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
  
  
  let n=0;
  let filtreFilmReal = films.filter(function(film){ 
      return film.realisateur;
  });
  
  
  
  
  let real = filtreFilmReal.reduce(ParReal, {});
  //console.log("real");
  //console.log(real);
  
  let listeReal = [];
  let listeNbFilms = [];
  //console.log(listeReal);
  for (let y in real){
    //console.log(y);
    listeReal.push(y);
    listeNbFilms.push(real[y]);
  }
  
  
  
  for (let i = listeNbFilms.length - 1; i > 0; i = i - 1) {
    for (let j = 0; j < i; j = j + 1) {
      
      if (Object.values(listeNbFilms)[j + 1] < Object.values(listeNbFilms)[j]) {
        // Echanger les deux valeurs
        let a = listeNbFilms[j + 1];
        listeNbFilms[j + 1] = listeNbFilms[j];
        listeNbFilms[j] = a;
        let b = listeReal[j + 1];
        listeReal[j + 1] = listeReal[j];
        listeReal[j] = b;
      }
    }
  }
  
  listeNbFilms=listeNbFilms.reverse();
  listeReal=listeReal.reverse();
  
  
  let listeNbFilmsFin=[];
  let listeRealFin = [];
  
  for (let i=0; i<10;i++){
    listeNbFilmsFin.push(listeNbFilms[i]);
    listeRealFin.push(listeReal[i]);
  }
  
  //console.log(listeNbFilms);
  //console.log(listeReal);
  
  options["series"] = listeNbFilmsFin;
  options["labels"] = listeRealFin;
  
  
  var chart = new ApexCharts(document.querySelector("#top10real"), options);
  chart.render();
  
  /******* fin top 10 des réalisateurs qui ont fait le plus d'entrées *************/