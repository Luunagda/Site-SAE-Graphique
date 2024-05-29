/******* Top 10 des films qui ont fait le plus d'entrées *************/
      
var options = {
  legend: {
    fontFamily: 'Evil Empire',
  },
    series: [],
    chart: {
    type: 'donut',
    width : 600,
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
     // console.log("Val formatted: ", opt.w.config.series[opt.seriesIndex].valueInvented);
      return 'Rang '+ (opt.seriesIndex+1)
    },
  },
  colors: ['#A61B1B','#E51F24','#E46463','#F59E59','#ED8D39','#F6CF43','#5F86C4','#4C64AC','#46658C','#000000'],
  title: {
    text: "Top 10 des films qui ont fait le plus d'entrées",
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
                return val + " nombre d'entrées"
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


 // console.log("films");

  let filtreFilmRang = films.filter(function(film){ 
    return film.rang<=10
  });
  //console.log("filtre");
  //console.log(filtreFilmRang);
  let rang = filtreFilmRang.reduce(Parentree, {});
 // console.log(rang);
 // console.log(Object.keys(rang));
 
  
  options["series"] = Object.values(rang);
  options["labels"] = Object.keys(rang);
  //console.log(Object.keys(rang));

  var chart = new ApexCharts(document.querySelector("#top10films"), options);
  chart.render();

/******* fin top 10 des films qui ont fait le plus d'entrées *************/