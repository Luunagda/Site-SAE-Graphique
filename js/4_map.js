/******* Map monde des films *************/

am5.ready(function() {
        
    // Create root element
    // https://www.amcharts.com/docs/v5/getting-started/#Root_element
    var root = am5.Root.new("mapmonde");
    
    // Set themes
    // https://www.amcharts.com/docs/v5/concepts/themes/
    root.setThemes([
      am5themes_Animated.new(root)
    ]);
   
    /*var chart = root.container.children.push(
      am5map.MapChart.new(root, {
        panX: "rotateX",
        projection: am5map.geoNaturalEarth1()
      })
    );*/
   
    // Create the map chart
    // https://www.amcharts.com/docs/v5/charts/map-chart/
    var chart = root.container.children.push(
      am5map.MapChart.new(root, {
        panX: "rotateX",
        panY: "rotateY",
        projection: am5map.geoMercator()
      })
    );
    
    // Create series for background fill
    // https://www.amcharts.com/docs/v5/charts/map-chart/map-polygon-series/#Background_polygon
    var backgroundSeries = chart.series.push(am5map.MapPolygonSeries.new(root, {}));
    backgroundSeries.mapPolygons.template.setAll({
      fill: root.interfaceColors.get("alternativeBackground"),
      fillOpacity: 0,
      strokeOpacity: 0
    });
    // Add background polygo
    // https://www.amcharts.com/docs/v5/charts/map-chart/map-polygon-series/#Background_polygon
    backgroundSeries.data.push({
      geometry: am5map.getGeoRectangle(90, 180, -90, -180)
    });
    
    // Create main polygon series for countries
    // https://www.amcharts.com/docs/v5/charts/map-chart/map-polygon-series/
  
    var polygonSeries = chart.series.push(
      am5map.MapPolygonSeries.new(root, {
        geoJSON: am5geodata_worldLow
      })
    );
    
    polygonSeries.mapPolygons.template.setAll({
      fill: root.interfaceColors.get("alternativeBackground"),
      fillOpacity: 0.15,
      strokeWidth: 0.5,
      stroke: root.interfaceColors.get("background"),
      tooltipText: "{name}",
      interactive: true
    });
  
    
    polygonSeries.mapPolygons.template.states.create("hover", {
      fill: am5.color(0x677935)
    });
  
    
  
    
    // Create polygon series for circles
    // https://www.amcharts.com/docs/v5/charts/map-chart/map-polygon-series/
    var circleTemplate = am5.Template.new({
      tooltipText: "{name}: {value}"
    });
    
    var bubbleSeries = chart.series.push(
      am5map.MapPointSeries.new(root, {
        calculateAggregates: true,
        valueField: "value",
        polygonIdField: "id"
      })
      
    );
  
    bubbleSeries.bullets.push(function () {
      return am5.Bullet.new(root, {
        sprite: am5.Circle.new(root, {
          radius: 10,
          templateField: "circleTemplate"
        }, circleTemplate)
      });
    });
    
    bubbleSeries.set("heatRules", [{
      target: circleTemplate,
      min: 3,
      max: 30,
      key: "radius",
      dataField: "value"
    }]);
    
    var colors = am5.ColorSet.new(root, {});
    
  
    
    // Add globe/map switch
    var cont = chart.children.push(am5.Container.new(root, {
      layout: root.horizontalLayout,
      x: 20,
      y: 40
    }));
    
    cont.children.push(am5.Label.new(root, {
      centerY: am5.p50,
      text: "Carte"
    }));
    
    var switchButton = cont.children.push(
      am5.Button.new(root, {
        themeTags: ["switch"],
        centerY: am5.p50,
        icon: am5.Circle.new(root, {
          themeTags: ["icon"]
        })
      })
    );
    
    switchButton.on("active", function () {
      if (!switchButton.get("active")) {
        chart.set("projection", am5map.geoMercator());
        backgroundSeries.mapPolygons.template.set("fillOpacity", 0);
      } else {
        chart.set("projection", am5map.geoOrthographic());
        backgroundSeries.mapPolygons.template.set("fillOpacity", 0.1);
      }
    });
    
    cont.children.push(
      am5.Label.new(root, {
        centerY: am5.p50,
        text: "Globe"
      })
    );
    
    // Make stuff animate on load
    chart.appear(1000, 100);
    
    // Creating processor only for the first series
  
    let anneenat = films.reduce(ParNat, {});
  
    let codeCle = [];
    for (let key in nat)
      codeCle.push(Object.values(nat[key])[0]);
    //console.log(codeCle);
  
    function getRandomInt(max) {
      return Math.floor(Math.random() * max);
    }
    let nati=Object.keys(anneenat);
    let nbnat=Object.values(anneenat);
    let tab =[];
    for (let i in nati){
  
      tab.push(
        {
          id: nati[i],
          name: codeCle[i],
          value: nbnat[i],
          circleTemplate: { fill: colors.getIndex(getRandomInt(500)), fillOpacity: 0.8 }
        }
        
       
        );
        //console.log(nbnat[i]);
    }
  
    bubbleSeries.data.setAll(tab);
  
    let annenat = bubbleSeries.data.values.reduce(ParNat, {});
  
  
    
    circleTemplate.events.on("click", function(ev) {
    console.log("ev");
    console.log(ev.target.dataItem.dataContext);
        Affiche(ev.target.dataItem.dataContext.id);    
    });
        
    
  
  });
  
    
  /******* fin map monde des films *************/
  














let triFilm=[];
  /******* Graphique enchainé : affiche par nationalité *************/

function Affiche(id){

    console.log(Object.values(films)["nationalite"]);
   // for (let h in films){
     // if (films[h]["nationalite"]==index){
       // tab.push(films[h]);
      //  console.log(films[h]);
      //}
    //}
  
   //console.log("gros test");
    //console.log(tab);
   
    let filmsFiltre = films.filter(Nat(id));
    console.log(filmsFiltre);
    
  var options = {
    legend: {
      fontFamily: 'Evil Empire',
    },
    series: [],
    chart: {
    foreColor: '#FFFFFF',
    width:500,
    height: 300,
    type: 'scatter',
    zoom: {
      enabled: true,
      type: 'xy'
    },
    events: {
      click: function(event, chartContext, config) {
              var chartVars = "KoolOnLoadCallFunction=chartReadyHandler";
              console.log('ça marche !')
              //let tab = ["Rang du film : "+film.rang, film.titre, film.realisateur, film.annee_de_sortie, film.entrees_en_millions+" nombre d'entrées", film.nationalite];
              let index = config.seriesIndex;
              let id = config.dataPointIndex;
              triFilm=[];
              let filtre=films.filter(function(elt){if (elt["realisateur"]==options["series"][index]["name"]) return elt;})
              console.log(options["series"][index]["name"]);
              console.log(filtre)
              triFilm.push(filtre[id].rang, filtre[id].realisateur, filtre[id].annee_de_sortie, filtre[id].entrees_en_millions, filtre[id].nationalite, filtre[id].titre)
              KoolChart.create("charto", "chartHolder", chartVars, "80%", "80%");
              console.log(triFilm)
          //}
      }
    }
  },
  colors: ['#DE1C12', '#ED8C3A', '#A61B1B', '#d07684', '#FFEDD2', '#DE1C12', '#E2A5B5', '#CCCCCC', '#000000', '#46658C', '#397EB7', '#ff1d0b','#00aaff', '#ff9e81'],
  title: {
    text: "Nombre d'entrées par réalisateur chaque année"
  },
  xaxis: {
    min:1920, 
    max: 2022,
    tickAmount: 10,
    labels: {
      formatter: function(val) {
        return parseFloat(val).toFixed(1)
      }
    }
  },
  yaxis: {
   
    tickAmount: 7
  }
  };
  
    let nbentree = filmsFiltre.reduce(nbEntreeParAnnee, {});
    //console.log("nbentree");
    //console.log(nbentree);
  
  let listel = Object.keys(nbentree);
  //let listelUniques=listel.filter((value,index,self)=>self.indexOf(value)===index);
  //console.log(listelUniques);
  
  let cpteur = 0;
    //for (cle in nbentree) {
      for (cle in nbentree){
        options["series"][cpteur]=[];
        options["series"][cpteur]["name"] =cle;
        options["series"][cpteur]["data"] = nbentree[cle];
        cpteur++;
        
      }
      
  //  }
  
  console.log(options["series"])
  document.querySelector("#dots").innerHTML="";
    
  
  var chart = new ApexCharts(document.querySelector("#dots"), options);
  chart.render();
  
  
  
  }
  /******* fin graphique enchainé : affiche par nationalité *************/

  /***début du graphique enchaîné de toute les infos sur un film */


function chartReadyHandler(id) {
 document.getElementById(id).setLayout(layoutStr);
   document.getElementById(id).setData(makeData());
 
    setTimeout(changeData, 7000);
}
 
function changeData(){
    document.getElementById("charto").setData(makeData());
  setTimeout(changeData, 6000);
}
//for (let i in films){
  
  //let film = films[i];
  
  //console.log(tab);
//}


function makeData(){
  var i, n,
       chartData = [],
     data,
     
       datas = triFilm;
    for(i = 0, n = datas.length ; i < n ; i += 1){
       chartData.push({
            text : datas[i],
            weight : Math.floor(Math.random(10) * 100)
      });
 }
   return chartData;
}
 
// Use a string variable for Layout.
var layoutStr =
               '<KoolChart backgroundColor="#ccc" borderStyle="none" fontFamily="Evil Empire">' // The Google web fonts are used in this sample.
                    +'<Options>'
                      +'<Caption text="Informations des films"/>'
                  +'</Options>'
                 /*
                      Declares <WordCloudChart>
                     showDataTips: Whether or not to show tooltips when the user mouse overs the item.
                   */
                  +'<WordCloudChart showDataTips="true">'
                       +'<series>'
                           /*
                              Declares <WordCloudSeries>
                            */
                          +'<WordCloudSeries textField="text" weightField="weight">'
                                +'<showDataEffect>'
                                   +'<SeriesInterpolate duration="1000"/>'
                               +'</showDataEffect>'
                              +'<fills>'
                                    +'<SolidColor color="#A61B1B"/>'
                                  +'<SolidColor color="#E51F24"/>'
                                  +'<SolidColor color="#E46463"/>'
                                  +'<SolidColor color="#F59E59"/>'
                                  +'<SolidColor color="#ED8D39"/>'
                                  +'<SolidColor color="#a1005d"/>'
                              +'</fills>'
                           +'</WordCloudSeries>'
                     +'</series>'
                  +'</WordCloudChart>'
              +'</KoolChart>';
 
/**
 * If you want to use themes provided with KoolChart version 3.0 or later, call the following functions.
 * otherwise, comment out or delete the following functions.
 *
 * -- The Themes registered in KoolChart.themes --
 * - simple
 * - cyber
 * - modern
 * - lovely
 * - pastel
 * -------------------------------------------------
 *
 * The KoolChart.themes variable is defined in theme.js
 */
KoolChart.registerTheme(KoolChart.themes);
 
/**
 * The function called when the theme button in the sample HTML is clicked.
 * Parameter Values:
 * - simple
 * - cyber
 * - modern
 * - lovely
 * - pastel
 * - default
 *
 * default: Applies the default theme which is the basic design of KoolChart.
 */
function KoolChartChangeTheme(theme){
    document.getElementById("charto").setTheme(theme);
}
 
/******* fin graphique data change *************/
