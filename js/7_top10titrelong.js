
      
        var options = {
          series: [],
          chart: {
          height: 390,
          type: 'radialBar',
        },
        plotOptions: {
          radialBar: {
            offsetY: 0,
            startAngle: 0,
            endAngle: 270,
            hollow: {
              margin: 5,
              size: '30%',
              background: 'transparent',
              image: undefined,
            },
            dataLabels: {
              name: {
                show: false,
              },
              value: {
                show: false,
              }
            }
          }
        },
        colors: ['#A61B1B','#E51F24','#E46463','#F59E59','#ED8D39','#00a15d','#5F86C4','#4C64AC','#46658C','#000000'],
        title: {
          text: "Top 10 des titres les plus longs",
          style: {
            fontFamily: 'Evil Empire',
          },
        },
        labels: [],
        legend: {
          show: true,
          floating: true,
          fontSize: '16px',
          position: 'left',
          offsetX: 160,
          offsetY: 15,
          labels: {
            useSeriesColors: true,
          },
          markers: {
            size: 0
          },
          formatter: function(seriesName, opts) {
            return seriesName + ":  " + opts.w.globals.series[opts.seriesIndex] + " lettres"
          },
          itemMargin: {
            vertical: 3
          }
        },
        responsive: [{
          breakpoint: 480,
          options: {
            legend: {
                show: false
            }
          }
        }]
        };

        let titre=films.reduce(NblettreTitre,{});
        
        console.log(Object.keys(titre).length);

        let listeTitre=[];
        let listeNbLettre=[];
        for (let i=0; i<Object.keys(titre).length;i++){
          listeTitre.push(Object.keys(titre)[i]);
          listeNbLettre.push(Object.values(titre)[i]);
        }
        
        for (let i = listeNbLettre.length - 1; i > 0; i = i - 1) {
          for (let j = 0; j < i; j = j + 1) {
            
            if (Object.values(listeNbLettre)[j + 1] < Object.values(listeNbLettre)[j]) {
              // Echanger les deux valeurs
              let a = listeNbLettre[j + 1];
              listeNbLettre[j + 1] = listeNbLettre[j];
              listeNbLettre[j] = a;
              let b = listeTitre[j + 1];
              listeTitre[j + 1] = listeTitre[j];
              listeTitre[j] = b;
            }
          }
        }
  
  listeNbLettre=listeNbLettre.reverse();
  listeTitre=listeTitre.reverse();

  let top10NbLettre=[];
  let top10Titre=[];

  for (let i=0; i<10;i++){
    top10NbLettre.push(listeNbLettre[i]);
    top10Titre.push(listeTitre[i]);
  }
  
  console.log(listeTitre)
  console.log(listeNbLettre)

  options["labels"]=top10Titre;
  options["series"]=top10NbLettre;

  var chart = new ApexCharts(document.querySelector("#titre"), options);
  chart.render();