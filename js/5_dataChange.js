/******* Graphique data change *************/

// Set the value of KoolOnLoadCallFunction to the name of a JS function (e.g. chartReadyHandler) that is called when the chart is ready to be created.
var chartVars = "KoolOnLoadCallFunction=chartReadyHandler";
 
// Create a chart.
// Parameters:
// 1. Chart Identifier (You can use any name you like.)
// 2. <div> Identifier (The <div> where the chart is created.)
// 3. Variables used for creating the chart (chartVars)
// 4. Chart Width (default: 100%)
// 5. Chart Height (default: 100%)
KoolChart.create("charto", "chartHolder", chartVars, "100%", "100%");
 
// The JavaScript function that is set to the value of KoolOnLoadCallFunction.
// This function calls the two functions, setLayout() and setData().
// The two functions (setLayout() and setData()) set the layout and data on the chart.
// Parameters: id - The chart identifier that is used as the first parameter of KoolChart.create().
function chartReadyHandler(id) {
 document.getElementById(id).setLayout(layoutStr);
   document.getElementById(id).setData(makeData());
 
    setTimeout(changeData, 6000);
}
 
function changeData(){
    document.getElementById("charto").setData(makeData());
  setTimeout(changeData, 6000);
}
let films=[];

function makeData(){
  var i, n,
       chartData = [],
     data,
       datas = films;
 
       
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
               '<KoolChart backgroundColor="#FFFFFF" borderStyle="none" fontFamily="Noto Sans">' // The Google web fonts are used in this sample.
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
                                  +'<SolidColor color="#DE1C12"/>'
                                  +'<SolidColor color="#ED8C3A"/>'
                                  +'<SolidColor color="#A61B1B"/>'
                                  +'<SolidColor color="#FFEDD2"/>'
                                  +'<SolidColor color="#DE1C12"/>'
                                  +'<SolidColor color="#E2A5B5"/>'
                                  +'<SolidColor color="#CCCCCC"/>'
                                  +'<SolidColor color="#000000"/>'
                                  +'<SolidColor color="#46658C"/>'
                                  +'<SolidColor color="#397EB7"/>'
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