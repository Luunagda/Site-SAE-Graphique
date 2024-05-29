


  


      
  var options = {
    series: [],
    chart: {
    type: 'bar',
    height: 350
  },
  plotOptions: {
    bar: {
      borderRadius: 4,
      horizontal: true,
    }
  },
  dataLabels: {
    enabled: false
  },
  xaxis: {
    type: 'category',
    categories: [],
  }
  };

  let filtreFilmRang3 = films.filter(function(film){ 
    return film.rang<=10
  });
  //console.log("filtre");

  let test = films.reduce(NbFilmParRealisateurs, {});
  let rang3 = filtreFilmRang3.reduce(ParentreeParRang, {});
 
  let cpt=0;
  //for(let cle in rang3){
    options["series"][cpt]=[];
    options["series"][cpt]["name"] = Object.keys(rang3);
    options["series"][cpt]["data"] = Object.values(rang3);

    //console.log("test");
    //console.log(options["series"]);
    cpt++;

   // console.log(rang3);
  //}
        
 
/*
  options["series"][cpt] = [];
  options["series"][cpt]["name"] = cle;
  options["series"][cpt]["data"] = Object.values(annee[cle]);
  console.log("serie");
  console.log(options ["series"][cpt]);
  cpt++;
*/

  let listeRang=[];
    for(let i in filtreFilmRang3){
        listeRang.push(filtreFilmRang3[i].rang);
        
    }  

    options["xaxis"]["categories"] = listeRang; 
  
  var chart = new ApexCharts(document.querySelector("#chart3"), options);
  chart.render();

