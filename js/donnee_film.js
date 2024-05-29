let films = [
    {
        "rang":"1",
        "titre":"Titanic",
        "realisateur":["J. Cameron"],
        "annee_de_sortie":1998,
        "nationalite":["US"],
        "entrees_en_millions": 21798906
    }   
    ,
    {
        "rang":"2",
        "titre":"Bienvenue chez les Ch'tis",
        "realisateur":["D. Boon"],
        "annee_de_sortie":2008,
        "nationalite":["FR"],
        "entrees_en_millions": 20444918
    }
    ,
    {
        "rang":"3",
        "titre":"Intouchables",
        "realisateur": ["E. Toledano", "O. Nakache" ],
        "annee_de_sortie":2011,
        "nationalite":["FR"],
        "entrees_en_millions": 19509835
    }
    ,
    {
        "rang":"4",
        "titre":"La Grande Vadrouille",
        "realisateur":["G. Oury"],
        "annee_de_sortie":1966,
        "nationalite":["FR","GB"],
        "entrees_en_millions": 17330139
    }
    ,
    {
        "rang":"5",
        "titre":"Autant en emporte le vent",
        "realisateur":["V. Fleming"],
        "annee_de_sortie":1950,
        "nationalite":["US"],
        "entrees_en_millions": 16728160
    }
    ,
    {
        "rang":"6",
        "titre":"Il etait une fois dans l'Ouest",
        "realisateur":["S. Leone"],
        "annee_de_sortie":1969,
        "nationalite":["IT"],
        "entrees_en_millions": 14891828
    }
    ,
    {
        "rang":"7",
        "titre":"Le Livre de la jungle",
        "realisateur":["W. Reitherman"],
        "annee_de_sortie":1968,
        "nationalite":["US"],
        "entrees_en_millions": 14798057
    }
    ,
    {
        "rang":"8",
        "titre":"Avatar",
        "realisateur":["J. Cameron"],
        "annee_de_sortie":2009,
        "nationalite":["US"],
        "entrees_en_millions": 14782116
    }
    ,
    {
        "rang":"9",
        "titre":"Les 101 Dalmatiens",
        "realisateur":["W. Disney"],
        "annee_de_sortie":1961,
        "nationalite":["US"],
        "entrees_en_millions": 14697525
    }
    ,
    {
        "rang":"10",
        "titre":"Asterix et Obelix : mission Cleopatre",
        "realisateur":["A. Chabat"],
        "annee_de_sortie":2002,
        "nationalite":["FR"],
        "entrees_en_millions": 14408347
    }
    ,
    {
        "rang":"11",
        "titre":"Les Dix Commandements",
        "realisateur":["C.B. DeMille"],
        "annee_de_sortie":1958,
        "nationalite":["US"],
        "entrees_en_millions": 14237371
    }
    ,
    {
        "rang":"12",
        "titre":"Ben Hur",
        "realisateur":["W. Wyler"],
        "annee_de_sortie":1960,
        "nationalite":["US"],
        "entrees_en_millions": 13857770
    }
    ,
    {
        "rang":"13",
        "titre":"Les Visiteurs",
        "realisateur":["J.M. Poire"],
        "annee_de_sortie":1993,
        "nationalite":["FR"],
        "entrees_en_millions": 13673172
    }
    ,
    {
        "rang":"14",
        "titre":"Le Pont de la riviere Kwai",
        "realisateur":["D. Lean"],
        "annee_de_sortie":1957,
        "nationalite":["GB"],
        "entrees_en_millions": 13477151
    }
    ,
    {
        "rang":"15",
        "titre":"Cendrillon",
        "realisateur":["W. Disney"],
        "annee_de_sortie":1950,
        "nationalite":["US"],
        "entrees_en_millions": 13269623
    }
    ,
    {
        "rang":"16",
        "titre":"Le Petit Monde de Don Camillo",
        "realisateur":["J. Duvivier"],
        "annee_de_sortie":1952,
        "nationalite": ["IT","FR"],
        "entrees_en_millions": 12791213
    }
    ,
    {
        "rang":"17",
        "titre":"Les Aristochats",
        "realisateur":["W. Reitherman"],
        "annee_de_sortie":1971,
        "nationalite":["US"],
        "entrees_en_millions": 12737882
    }
    ,
    {
        "rang":"18",
        "titre":"Qu'est-ce qu'on a fait au bon dieu ?",
        "realisateur":["P. De Chauveron"],
        "annee_de_sortie":2014,
        "nationalite":["FR"],
        "entrees_en_millions": 12356551
    }
    ,
    {
        "rang":"19",
        "titre":"Le Jour le plus long",
        "realisateur":["D. F. Zanuck", "K. Annakin", "A. Marton", "B. Wicki", "G. Oswald"],
        "annee_de_sortie":1962,
        "nationalite":["US"],
        "entrees_en_millions": 11930550
    }
    ,
    {
        "rang":"20",
        "titre":"Le Corniaud",
        "realisateur":["G. Oury"],
        "annee_de_sortie":1965,
        "nationalite":["FR","IT"],
        "entrees_en_millions": 11744912
    }
    ,
    {
        "rang":"21",
        "titre":"La Belle et le clochard",
        "realisateur":["W. Disney"],
        "annee_de_sortie":1955,
        "nationalite":["US"],
        "entrees_en_millions": 11253225
    }
    ,
    {
        "rang":"22",
        "titre":"Le Roi lion",
        "realisateur":["R. Aller", "R. Minkoff"],
        "annee_de_sortie":1994,
        "nationalite":["US"],
        "entrees_en_millions": 10747322
    }
    ,
    {
        "rang":"23",
        "titre":"Bambi",
        "realisateur":["W. Disney"],
        "annee_de_sortie":1948,
        "nationalite":["US"],
        "entrees_en_millions": 10715149
    }
    ,
    {
        "rang":"24",
        "titre":"Star Wars : Episode 7, le reveil de la force",
        "realisateur":["J. J. Abrams"],
        "annee_de_sortie":2015,
        "nationalite":["US"],
        "entrees_en_millions": 10345644
    }
    ,
    {
        "rang":"25",
        "titre":"Taxi 2",
        "realisateur":["G. Krawczyk"],
        "annee_de_sortie":2000,
        "nationalite":["FR"],
        "entrees_en_millions": 10302954
    }
    ,
    {
        "rang":"26",
        "titre":"Trois hommes et un couffin",
        "realisateur":["C. Serreau"],
        "annee_de_sortie":1985,
        "nationalite":["FR"],
        "entrees_en_millions": 10251813
    }
    ,
    {
        "rang":"27",
        "titre":"Les Bronzes 3 - amis pour la vie",
        "realisateur":["P. Leconte"],
        "annee_de_sortie":2006,
        "nationalite":["FR"],
        "entrees_en_millions": 10229483
    }
    ,
    {
        "rang":"28",
        "titre":"Les Canons de Navarone",
        "realisateur":["J. Lee Thompson"],
        "annee_de_sortie":1961,
        "nationalite":["US"],
        "entrees_en_millions": 10181324
    }
    ,
    {
        "rang":"29",
        "titre":"La Guerre des boutons",
        "realisateur":["Y. Robert"],
        "annee_de_sortie":1962,
        "nationalite":["FR"],
        "entrees_en_millions": 10052423
    }
    ,
    {
        "rang":"30",
        "titre":"Les Miserables",
        "realisateur":["J.P. Le Chanois", "J.P. Dreyfus"],
        "annee_de_sortie":1958,
        "nationalite":["FR","IT"],
        "entrees_en_millions": 9969086
        }
    ,
    {
        "rang":"31",
        "titre":"Le Roi Lion",
        "realisateur":["J. Favreau"],
        "annee_de_sortie":2019,
        "nationalite":["US"],
        "entrees_en_millions": 9848728
    }
    ,
    {
        "rang":"32",
        "titre":"E.T. l'extra-terrestre",
        "realisateur":["S. Spielberg"],
        "annee_de_sortie":1982,
        "nationalite":["US"],
        "entrees_en_millions": 9847614
    }
    ,
    {
        "rang":"33",
        "titre":"Docteur Jivago",
        "realisateur":["D. Lean"],
        "annee_de_sortie":1966,
        "nationalite":["US"],
        "entrees_en_millions": 9817737
    }
    ,
    {
        "rang":"34",
        "titre":"Vingt mille lieues sous les mers",
        "realisateur":["R. Fleischer"],
        "annee_de_sortie":1955,
        "nationalite":["US"],
        "entrees_en_millions": 9628014
    }
    ,
    {
        "rang":"35",
        "titre":"Harry Potter a l'ecole des sorciers",
        "realisateur":["C. Colombus"],
        "annee_de_sortie":2001,
        "nationalite":["US"],
        "entrees_en_millions": 9545909
    }
    ,
    {
        "rang":"36",
        "titre":"Sous le plus grand chapiteau du monde",
        "realisateur":["C.B. DeMille"],
        "annee_de_sortie":1953,
        "nationalite":["US"],
        "entrees_en_millions": 9488114
    }
    ,
    {
        "rang":"37",
        "titre":"Le Monde de Nemo",
        "realisateur":["A. Stanton", "L. Unkrich"],
        "annee_de_sortie":2003,
        "nationalite":["US"],
        "entrees_en_millions": 9446595
    }
    ,
    {
        "rang":"38",
        "titre":"Le Diner de cons",
        "realisateur":["F. Veber"],
        "annee_de_sortie":1998,
        "nationalite":["FR"],
        "entrees_en_millions": 9249770
    }
    ,
    {
        "rang":"39",
        "titre":"Le Grand Bleu",
        "realisateur":["L. Besson"],
        "annee_de_sortie":1988,
        "nationalite":["FR"],
        "entrees_en_millions": 9200891
    }
    ,
    {
        "rang":"40",
        "titre":"L'Ours",
        "realisateur":["J.J. Annaud"],
        "annee_de_sortie":1988,
        "nationalite":["FR"],
        "entrees_en_millions": 9138948
    }
    ,
    {
        "rang":"41",
        "titre":"Emmanuelle",
        "realisateur":["J. Jaeckin"],
        "annee_de_sortie":1974,
        "nationalite":["FR"],
        "entrees_en_millions": 8894166
    }
    ,
    {
        "rang":"42",
        "titre":"Harry Potter et la chambre des secrets",
        "realisateur":["C. Colombus"],
        "annee_de_sortie":2002,
        "nationalite":["US"],
        "entrees_en_millions": 8862273
    }
    ,
    {
        "rang":"43",
        "titre":"La Vache et le prisonnier",
        "realisateur":["H. Verneuil"],
        "annee_de_sortie":1959,
        "nationalite":["FR", "IT"],
        "entrees_en_millions": 8851261
    }
    ,
    {
        "rang":"44",
        "titre":"West Side Story",
        "realisateur":["R. Wise", "J. Robbins"],
        "annee_de_sortie":1962,
        "nationalite":["US"],
        "entrees_en_millions": 8780013
    }
    ,
    {
        "rang":"45",
        "titre":"Asterix et Obelix contre Cesar",
        "realisateur":["C. Zidi"],
        "annee_de_sortie":1999,
        "nationalite":["FR","DE","IT"],
        "entrees_en_millions": 8776587
    }
    ,
    {
        "rang":"46",
        "titre":"La Grande Evasion",
        "realisateur":["R. Walsh"],
        "annee_de_sortie":1963,
        "nationalite":["US"],
        "entrees_en_millions": 8757609
    }
    ,
    {
        "rang":"47",
        "titre":"Le Bataillon du ciel",
        "realisateur":["A. Esway"],
        "annee_de_sortie":1947,
        "nationalite":["FR"],
        "entrees_en_millions": 8649752
    }
    ,
    {
        "rang":"48",
        "titre":"Le Fabuleux Destin d'Amelie Poulain",
        "realisateur":["J.P. Jeunet"],
        "annee_de_sortie":2001,
        "nationalite":["FR","DE"],
        "entrees_en_millions": 8527435
    }
    ,
    {
        "rang":"49",
        "titre":"Les Choristes",
        "realisateur":["C. Barratier"],
        "annee_de_sortie":2004,
        "nationalite":["FR","CH"],
        "entrees_en_millions": 8469922
    }
    ,
    {
        "rang":"50",
        "titre":"Le Dictateur",
        "realisateur":["C. Chaplin"],
        "annee_de_sortie":1945,
        "nationalite":["US"],
        "entrees_en_millions": 8406911
    }
    ,
    {
        "rang":"51",
        "titre":"Pour qui sonne le glas ?",
        "realisateur":["S. Wood"],
        "annee_de_sortie":1947,
        "nationalite":["US"],
        "entrees_en_millions": 8274759
    }
    ,
    {
        "rang":"52",
        "titre":"Rien a declarer",
        "realisateur":["D. Boon"],
        "annee_de_sortie":2011,
        "nationalite":["FR","BE"],
        "entrees_en_millions": 8140813
    }
    ,
    {
        "rang":"53",
        "titre":"Violettes imperiales",
        "realisateur":["R. Pottier"],
        "annee_de_sortie":1952,
        "nationalite":["FR","ES"],
        "entrees_en_millions": 8125846
    }
    ,
    {
        "rang":"54",
        "titre":"Les Couloirs du temps - les visiteurs 2",
        "realisateur":["J.M. Poire"],
        "annee_de_sortie":1998,
        "nationalite":["FR"],
        "entrees_en_millions": 8039466
    }
    ,
    {
        "rang":"55",
        "titre":"Le Boulanger de Valorgue",
        "realisateur":["H. Verneuil"],
        "annee_de_sortie":1953,
        "nationalite":["FR"],
        "entrees_en_millions": 7889091
    }
    ,
    {
        "rang":"56",
        "titre":"Un Indien dans la ville",
        "realisateur":["H. Palud"],
        "annee_de_sortie":1994,
        "nationalite":["FR"],
        "entrees_en_millions": 7887974
    }
    ,
    {
        "rang":"57",
        "titre":"Pinocchio",
        "realisateur":["W. Disney"],
        "annee_de_sortie":1946,
        "nationalite":["US"],
        "entrees_en_millions": 7854113
    }
    ,
    {
        "rang":"58",
        "titre":"L'age de glace 3 - le temps des dinosaures",
        "realisateur":["C. Saldanha"],
        "annee_de_sortie":2009,
        "nationalite":["US"],
        "entrees_en_millions": 7836584
    }
    ,
    {
        "rang":"59",
        "titre":"Star Wars : episode 1 - la menace fantome",
        "realisateur":["G. Lucas"],
        "annee_de_sortie":1999,
        "nationalite":["US"],
        "entrees_en_millions": 7835365
    }
    ,
    {
        "rang":"60",
        "titre":"Tarzan",
        "realisateur":["C. Buck", "K. Lima"],
        "annee_de_sortie":1999,
        "nationalite":["US"],
        "entrees_en_millions": 7822887
    }
    ,
    {
        "rang":"61",
        "titre":"Le Gendarme de Saint-Tropez",
        "realisateur":["J. Girault"],
        "annee_de_sortie":1964,
        "nationalite":["FR","IT"],
        "entrees_en_millions": 7811393
    }
    ,

    {
        "rang":"62",
        "titre":"Le Comte de Monte Cristo",
        "realisateur":["R. Vernay"],
        "annee_de_sortie":1955,
        "nationalite":["FR","IT"],
        "entrees_en_millions": 7780963
    }
    ,

    {
        "rang":"63",
        "titre":"Sixieme Sens",
        "realisateur":["M. Night Shyamalan"],
        "annee_de_sortie":2000,
        "nationalite":["US"],
        "entrees_en_millions": 7743424
    }
    ,

    {
        "rang":"64",
        "titre":"Ratatouille",
        "realisateur":["B. Bird", "J. Pinkava"],
        "annee_de_sortie":2007,
        "nationalite":["US"],
        "entrees_en_millions": 7727621
    }
    ,

    {
        "rang":"65",
        "titre":"Le Cinquieme Element",
        "realisateur":["L. Besson"],
        "annee_de_sortie":1997,
        "nationalite":["FR"],
        "entrees_en_millions": 7713105
    }
    ,

    {
        "rang":"66",
        "titre":"Harry Potter et la coupe de feu",
        "realisateur":["M. Newell"],
        "annee_de_sortie":2005,
        "nationalite":["GB"],
        "entrees_en_millions": 7712423
    }
    ,

    {
        "rang":"67",
        "titre":"la famille Belier",
        "realisateur":["E. Lartigau"],
        "annee_de_sortie":2014,
        "nationalite":["FR"],
        "entrees_en_millions": 7704036
    }
    ,

    {
        "rang":"68",
        "titre":"Orange mecanique",
        "realisateur":["S. Kubrick"],
        "annee_de_sortie":1972,
        "nationalite":["GB"],
        "entrees_en_millions": 7629804
    }
    ,

    {
        "rang":"69",
        "titre":"La Reine des neiges 2",
        "realisateur":["C. Buck", "J. Lee"],
        "annee_de_sortie":2019,
        "nationalite":["US"],
        "entrees_en_millions": 7527360
    }
    ,

    {
        "rang":"70",
        "titre":"Les Bidasses en folie",
        "realisateur":["C. Zidi"],
        "annee_de_sortie":1971,
        "nationalite":["FR"],
        "entrees_en_millions": 7460911
    }
    ,

    {
        "rang":"71",
        "titre":"Le Retour de Don Camillo",
        "realisateur":["J. Duvivier"],
        "annee_de_sortie":1953,
        "nationalite": ["IT","FR"],
        "entrees_en_millions": 7425550
    }
    ,

    {
        "rang":"72",
        "titre":"Le Seigneur des anneaux - le retour du roi",
        "realisateur":["P. Jackson"],
        "annee_de_sortie":2003,
        "nationalite":["NZ"],
        "entrees_en_millions": 7423673
    }
    ,

    {
        "rang":"73",
        "titre":"La Verite si je mens 2",
        "realisateur":["T. Gilou"],
        "annee_de_sortie":2001,
        "nationalite":["FR"],
        "entrees_en_millions": 7407982
    }
    ,

    {
        "rang":"74",
        "titre":"Jour de fete",
        "realisateur":["J. Tati"],
        "annee_de_sortie":1949,
        "nationalite":["FR"],
        "entrees_en_millions": 7402939
    }
    ,

    {
        "rang":"75",
        "titre":"Aladdin",
        "realisateur":["J. Musker"],
        "annee_de_sortie":1993,
        "nationalite":["US"],
        "entrees_en_millions": 7353322
    }
    ,

    {
        "rang":"76",
        "titre":"Les Aventures de Peter Pan",
        "realisateur":["W. Disney"],
        "annee_de_sortie":1953,
        "nationalite":["US"],
        "entrees_en_millions": 7347176
    }
    ,

    {
        "rang":"77",
        "titre":"Les Aventures de Rabbi Jacob",
        "realisateur":["G. Oury"],
        "annee_de_sortie":1973,
        "nationalite": ["FR","IT"],
        "entrees_en_millions": 7307118
    }
    ,

    {
        "rang":"78",
        "titre":"Danse avec les loups",
        "realisateur":["K. Costner"],
        "annee_de_sortie":1991,
        "nationalite":["US"],
        "entrees_en_millions": 7281824
    }
    ,

    {
        "rang":"79",
        "titre":"Les Aventures de Bernard et Bianca",
        "realisateur":["Wolfgang Reitherman", "Art Stevens", "John Lounsbery"],
        "annee_de_sortie":1977,
        "nationalite":["US"],
        "entrees_en_millions": 7242381
    }
    ,

    {
        "rang":"80",
        "titre":"Jean de Florette",
        "realisateur":["C. Berri"],
        "annee_de_sortie":1986,
        "nationalite":["FR"],
        "entrees_en_millions": 7225184
    }
    ,

    {
        "rang":"81",
        "titre":"Star Wars : episode 3 - la revanche des Sith",
        "realisateur":["G. Lucas"],
        "annee_de_sortie":2005,
        "nationalite":["US"],
        "entrees_en_millions": 7205953
    }
    ,

    {
        "rang":"82",
        "titre":"Harry Potter et le prisonnier d'Azkaban",
        "realisateur":["A. Cuaron"],
        "annee_de_sortie":2004,
        "nationalite":["GB"],
        "entrees_en_millions": 7152904
    }
    ,

    {
        "rang":"83",
        "titre":"Shrek 2",
        "realisateur":["A. Adamson", "V. Jenson"],
        "annee_de_sortie":2004,
        "nationalite":["US"],
        "entrees_en_millions": 7142658
    }
    ,

    {
        "rang":"84",
        "titre":"Le Seigneur des anneaux - les deux tours",
        "realisateur":["P. Jackson"],
        "annee_de_sortie":2002,
        "nationalite":["NZ"],
        "entrees_en_millions": 7128603
    }
    ,

    {
        "rang":"85",
        "titre":"Samson et Dalila",
        "realisateur":["C.B. DeMille"],
        "annee_de_sortie":1951,
        "nationalite":["US"],
        "entrees_en_millions": 7116461
    }
    ,

    {
        "rang":"86",
        "titre":"Star Wars les derniers Jedi",
        "realisateur":["R. Johnson"],
        "annee_de_sortie":2017,
        "nationalite":["US"],
        "entrees_en_millions": 7094279
    }
    ,

    {
        "rang":"87",
        "titre":"Jeanne d'Arc",
        "realisateur":["V. Fleming"],
        "annee_de_sortie":1949,
        "nationalite":["US"],
        "entrees_en_millions": 7092805
    }
    ,

    {
        "rang":"88",
        "titre":"La Chevre",
        "realisateur":["F. Veber"],
        "annee_de_sortie":1981,
        "nationalite":["FR","MX"],
        "entrees_en_millions": 7080976
    }
    ,

    {
        "rang":"89",
        "titre":"Monsieur Vincent",
        "realisateur":["M. Cloche"],
        "annee_de_sortie":1947,
        "nationalite":["FR"],
        "entrees_en_millions": 7057022
    }
    ,

    {
        "rang":"90",
        "titre":"Les Sept Mercenaires",
        "realisateur":["J. Sturges"],
        "annee_de_sortie":1961,
        "nationalite":["US"],
        "entrees_en_millions": 7044522
    }
    ,

    {
        "rang":"91",
        "titre":"Le Seigneur des anneaux - la communaute de l'anneau",
        "realisateur":["P. Jackson"],
        "annee_de_sortie":2001,
        "nationalite":["NZ"],
        "entrees_en_millions": 7011664
    }
    ,

    {
        "rang":"92",
        "titre":"Skyfall",
        "realisateur":["S. Mendes"],
        "annee_de_sortie":2012,
        "nationalite":["GB"],
        "entrees_en_millions": 7009368
    }
    ,

    {
        "rang":"93",
        "titre":"Si Versailles m'etait conte",
        "realisateur":["S. Guitry"],
        "annee_de_sortie":1954,
        "nationalite":["FR"],
        "entrees_en_millions": 6987432
    }
    ,

    {
        "rang":"94",
        "titre":"Les Grandes Vacances",
        "realisateur":["J. Girault"],
        "annee_de_sortie":1967,
        "nationalite":["FR","IT"],
        "entrees_en_millions": 6987269
    }
    ,

    {
        "rang":"95",
        "titre":"Le Salaire de la peur",
        "realisateur":["H.G. Clouzot"],
        "annee_de_sortie":1953,
        "nationalite":["FR","IT"],
        "entrees_en_millions": 6950146
    }
    ,

    {
        "rang":"96",
        "titre":"Michel Strogoff",
        "realisateur":["C. Gallone"],
        "annee_de_sortie":1956,
        "nationalite":["FR","IT"],
        "entrees_en_millions": 6869247
    }
    ,

    {
        "rang":"97",
        "titre":"Le Gendarme se marie",
        "realisateur":["J. Girault"],
        "annee_de_sortie":1968,
        "nationalite":["FR","IT"],
        "entrees_en_millions": 6828665
    
    }
    ,

    {
        "rang":"98",
        "titre":"Avengers : Endgame",
        "realisateur":["A. Russo", "J. Russo"],
        "annee_de_sortie":2019,
        "nationalite":["US"],
        "entrees_en_millions": 6825154
    
    }
    ,

    {
        "rang":"99",
        "titre":"Le Bossu de Notre-Dame",
        "realisateur":["K. Wise", "G. Trousdale"],
        "annee_de_sortie":1996,
        "nationalite":["US"],
        "entrees_en_millions": 6813099
    
    }
    ,

    {
        "rang":"100",
        "titre":"Asterix aux Jeux Olympiques",
        "realisateur":["F. Forestier", "T. Langmann"],
        "annee_de_sortie":2008,
        "nationalite":["FR","DE","ES","IT"],
        "entrees_en_millions": 6807835
    
    }
    ,

    {
        "rang":"101",
        "titre":"Mission speciale",
        "realisateur":["M. de Canonge"],
        "annee_de_sortie":1946,
        "nationalite":["FR"],
        "entrees_en_millions": 6781120
    
    }
    ,

    {
        "rang":"102",
        "titre":"Jurassic Park",
        "realisateur":["S. Spielberg"],
        "annee_de_sortie":1993,
        "nationalite":["US"],
        "entrees_en_millions": 6755899
    
    }
    ,

    {
        "rang":"103",
        "titre":"Fanfan la Tulipe",
        "realisateur":["Christian-Jaque"],
        "annee_de_sortie":1952,
        "nationalite":["FR","IT"],
        "entrees_en_millions": 6737998
    
    }
    ,
    {
        "rang":"104",
        "titre":"L'Exorciste",
        "realisateur":["W. Friedkin"],
        "annee_de_sortie":1974,
        "nationalite":["US"],
        "entrees_en_millions": 6727910
    }
    ,

    {
        "rang":"105",
        "titre":"Qu'est-ce qu'on a encore fait au bon dieu ?",
        "realisateur":["P. de Chauveron"],
        "annee_de_sortie":2019,
        "nationalite":["FR","BE"],
        "entrees_en_millions": 6719759
    }
    ,

    {
        "rang":"106",
        "titre":"Rox et Rouky",
        "realisateur":["A. Stevens"],
        "annee_de_sortie":1981,
        "nationalite":["US"],
        "entrees_en_millions": 6717395
    }
    ,

    {
        "rang":"107",
        "titre":"Goldfinger",
        "realisateur":["G. Hamilton"],
        "annee_de_sortie":1965,
        "nationalite":["GB"],
        "entrees_en_millions": 6676568
    }
    ,

    {
        "rang":"108",
        "titre":"Les Trois Freres",
        "realisateur":["D. Bourdon", "B. Campan"],
        "annee_de_sortie":1995,
        "nationalite":["FR"],
        "entrees_en_millions": 6671088
    }
    ,

    {
        "rang":"109",
        "titre":"les Minions",
        "realisateur":["P. Coffin", "K. Balda"],
        "annee_de_sortie":2015,
        "nationalite":["US"],
        "entrees_en_millions": 6663465
    }
    ,

    {
        "rang":"110",
        "titre":"Nous irons a Paris",
        "realisateur":["J. Boyer"],
        "annee_de_sortie":1950,
        "nationalite":["FR"],
        "entrees_en_millions": 6659325
    }
    ,

    {
        "rang":"111",
        "titre":"Manon des sources",
        "realisateur":["C. Berri"],
        "annee_de_sortie":1986,
        "nationalite":["FR"],
        "entrees_en_millions": 6646236
    }
    ,

    {
        "rang":"112",
        "titre":"l'Age de glace 4 : la derive des continents",
        "realisateur":["M.Thurmeier", "S. Martino"],
        "annee_de_sortie":2012,
        "nationalite":["US"],
        "entrees_en_millions": 6642048
    }
    ,

    {
        "rang":"113",
        "titre":"Sissi",
        "realisateur":["E. Marischka"],
        "annee_de_sortie":1956,
        "nationalite":["AT"],
        "entrees_en_millions": 6637836
    }
    ,

    {
        "rang":"114",
        "titre":"L'Age de glace 2",
        "realisateur":["C. Saldanha"],
        "annee_de_sortie":2006,
        "nationalite":["US"],
        "entrees_en_millions": 6627706
    }
    ,

    {
        "rang":"115",
        "titre":"Le Cercle des poetes disparus",
        "realisateur":["P. Weir"],
        "annee_de_sortie":1989,
        "nationalite":["US"],
        "entrees_en_millions": 6601781
    }
    ,

    {
        "rang":"116",
        "titre":"La Belle au bois dormant",
        "realisateur":["W. Disney"],
        "annee_de_sortie":1959,
        "nationalite":["US"],
        "entrees_en_millions": 6592751
    }
    ,

    {
        "rang":"117",
        "titre":"Harry Potter et les reliques de la mort - 2e partie",
        "realisateur":["D. Yates"],
        "annee_de_sortie":2011,
        "nationalite":["GB"],
        "entrees_en_millions": 6577156
    }
    ,

    {
        "rang":"118",
        "titre":"Pirates des Caraibes - le secret du coffre maudit",
        "realisateur":["G. Verbinski"],
        "annee_de_sortie":2006,
        "nationalite":["US"],
        "entrees_en_millions": 6522015
    }
    ,

    {
        "rang":"119",
        "titre":"Robin des bois",
        "realisateur":["W. Reitherman"],
        "annee_de_sortie":1974,
        "nationalite":["US"],
        "entrees_en_millions": 6485372
    }
    ,

    {
        "rang":"120",
        "titre":"Taxi",
        "realisateur":["G. Pires"],
        "annee_de_sortie":1998,
        "nationalite":["FR"],
        "entrees_en_millions": 6485260
    }
    ,

    {
        "rang":"121",
        "titre":"Rain Man",
        "realisateur":["B. Levinson"],
        "annee_de_sortie":1989,
        "nationalite":["US"],
        "entrees_en_millions": 6475822
    }
    ,

    {
        "rang":"122",
        "titre":"La Guerre des etoiles",
        "realisateur":["G. Lucas"],
        "annee_de_sortie":1977,
        "nationalite":["US"],
        "entrees_en_millions": 6460540
    }
    ,

    {
        "rang":"123",
        "titre":"Sissi imperatrice",
        "realisateur":["E. Marischka"],
        "annee_de_sortie":1957,
        "nationalite":["AT"],
        "entrees_en_millions": 6429021
    }
    ,

    {
        "rang":"124",
        "titre":"Les Aventuriers de l'arche perdue",
        "realisateur":["S. Spielberg"],
        "annee_de_sortie":1981,
        "nationalite":["US"],
        "entrees_en_millions": 6404631
    }
    ,

    {
        "rang":"125",
        "titre":"Tant qu'il y aura des hommes",
        "realisateur":["F. Zinnemann"],
        "annee_de_sortie":1954,
        "nationalite":["US"],
        "entrees_en_millions": 6401375
    }
    ,

    {
        "rang":"126",
        "titre":"Arthur et les Minimoys",
        "realisateur":["L. Besson"],
        "annee_de_sortie":2006,
        "nationalite":["FR"],
        "entrees_en_millions": 6400180
    }
    ,

    {
        "rang":"127",
        "titre":"La Cuisine au beurre",
        "realisateur":["G. Grangier"],
        "annee_de_sortie":1963,
        "nationalite":["FR","IT"],
        "entrees_en_millions": 6397594
    }
    ,

    {
        "rang":"128",
        "titre":"Spider-Man",
        "realisateur":["S. Raimi"],
        "annee_de_sortie":2002,
        "nationalite":["US"],
        "entrees_en_millions": 6382266
    }
    ,

    {
        "rang":"129",
        "titre":"La Symphonie pastorale",
        "realisateur":["J. Delannoy"],
        "annee_de_sortie":1946,
        "nationalite":["FR"],
        "entrees_en_millions": 6373084
    }
    ,

    {
        "rang":"130",
        "titre":"Ivanhoe",
        "realisateur":["R. Thorpe"],
        "annee_de_sortie":1952,
        "nationalite":["US"],
        "entrees_en_millions": 6362071
    }
    ,

    {
        "rang":"131",
        "titre":"Le Bon, la brute et le truand",
        "realisateur":["S. Leone"],
        "annee_de_sortie":1968,
        "nationalite":["IT"],
        "entrees_en_millions": 6350067
    }
    ,

    {
        "rang":"132",
        "titre":"Les Dents de la mer",
        "realisateur":["S. Spielberg"],
        "annee_de_sortie":1976,
        "nationalite":["US"],
        "entrees_en_millions": 6346372
    }
    ,

    {
        "rang":"133",
        "titre":"Spider-Man 3",
        "realisateur":["S. Raimi"],
        "annee_de_sortie":2007,
        "nationalite":["US"],
        "entrees_en_millions": 6320882
    }
    ,

    {
        "rang":"134",
        "titre":"Quo Vadis",
        "realisateur":["M. Le Roy"],
        "annee_de_sortie":1953,
        "nationalite":["US"],
        "entrees_en_millions": 6305624
    }
    ,

    {
        "rang":"135",
        "titre":"La Gloire de mon pere",
        "realisateur":["Y. Robert"],
        "annee_de_sortie":1990,
        "nationalite":["FR"],
        "entrees_en_millions": 6298736
    }
    ,

    {
        "rang":"136",
        "titre":"Le Gendarme et les extra-terrestres",
        "realisateur":["J. Girault"],
        "annee_de_sortie":1979,
        "nationalite":["FR"],
        "entrees_en_millions": 6280079
    }
    ,

    {
        "rang":"137",
        "titre":"Indiana Jones et la derniere croisade",
        "realisateur":["S. Spielberg"],
        "annee_de_sortie":1989,
        "nationalite":["US"],
        "entrees_en_millions": 6256297
    }
    ,

    {
        "rang":"138",
        "titre":"Harry Potter et l'ordre du Phoenix",
        "realisateur":["D. Yates"],
        "annee_de_sortie":2007,
        "nationalite":["GB"],
        "entrees_en_millions": 6219499
    }
    ,

    {
        "rang":"139",
        "titre":"Marche a l'ombre",
        "realisateur":["M. Blanc"],
        "annee_de_sortie":1984,
        "nationalite":["FR"],
        "entrees_en_millions": 6168425
    }
    ,

    {
        "rang":"140",
        "titre":"Pas si bete",
        "realisateur":["A. Berthomieu"],
        "annee_de_sortie":1946,
        "nationalite":["FR"],
        "entrees_en_millions": 6165419
    }
    ,

    {
        "rang":"141",
        "titre":"Merlin l'enchanteur",
        "realisateur":["W. Reitherman"],
        "annee_de_sortie":1964,
        "nationalite":["US"],
        "entrees_en_millions": 6160500
    }
    ,

    {
        "rang":"142",
        "titre":"La Chartreuse de Parme",
        "realisateur":["Christian-Jaque"],
        "annee_de_sortie":1948,
        "nationalite":["FR"],
        "entrees_en_millions": 6152480
    }
    ,

    {
        "rang":"143",
        "titre":"Germinal",
        "realisateur":["C. Berri"],
        "annee_de_sortie":1993,
        "nationalite":["FR","BE"],
        "entrees_en_millions": 6149725
    }
    ,

    {
        "rang":"144",
        "titre":"Harry Potter et le Prince de sang-mele",
        "realisateur":["D. Yates"],
        "annee_de_sortie":2009,
        "nationalite":["GB"],
        "entrees_en_millions": 6140398
    }
    ,

    {
        "rang":"145",
        "titre":"Le Pere tranquille",
        "realisateur":["R. Clement"],
        "annee_de_sortie":1946,
        "nationalite":["FR"],
        "entrees_en_millions": 6139259
    }
    ,

    {
        "rang":"146",
        "titre":"Les Feux de la rampe",
        "realisateur":["C. Chaplin"],
        "annee_de_sortie":1952,
        "nationalite":["US"],
        "entrees_en_millions": 6137070
    }
    ,

    {
        "rang":"147",
        "titre":"Oscar",
        "realisateur":["E. Molinaro"],
        "annee_de_sortie":1967,
        "nationalite":["FR"],
        "entrees_en_millions": 6123063
    }
    ,

    {
        "rang":"148",
        "titre":"Taxi 3",
        "realisateur":["G. Krawczyk"],
        "annee_de_sortie":2003,
        "nationalite":["FR"],
        "entrees_en_millions": 6108669
    }
    ,

    {
        "rang":"149",
        "titre":"Harry Potter et les reliques de la mort - 1re partie",
        "realisateur":["D. Yates"],
        "annee_de_sortie":2010,
        "nationalite":["GB"],
        "entrees_en_millions": 6102789
    }
    ,

    {
        "rang":"150",
        "titre":"Star Wars : episode 9, l'ascension de Skywalker",
        "realisateur":["J.J. Abrams"],
        "annee_de_sortie":2019,
        "nationalite":["US"],
        "entrees_en_millions": 6063436
    }
    ,

    {
        "rang":"151",
        "titre":"Terminator 2 - le jugement dernier",
        "realisateur":["J. Cameron"],
        "annee_de_sortie":1991,
        "nationalite":["US"],
        "entrees_en_millions": 6007492
    }
    ,

    {
        "rang":"152",
        "titre":"Midnight Express",
        "realisateur":["A. Parker"],
        "annee_de_sortie":1978,
        "nationalite":["GB"],
        "entrees_en_millions": 5974912
    }
    ,

    {
        "rang":"153",
        "titre":"Les Dieux sont tombes sur la tete",
        "realisateur":["J. Uys"],
        "annee_de_sortie":1983,
        "nationalite":["ZA"],
        "entrees_en_millions": 5950116
    }
    ,

    {
        "rang":"154",
        "titre":"Mourir d'aimer",
        "realisateur":["A. Cayatte"],
        "annee_de_sortie":1971,
        "nationalite":["FR","IT"],
        "entrees_en_millions": 5912600
    }
    ,

    {
        "rang":"155",
        "titre":"Qui veut la peau de Roger Rabbit ?",
        "realisateur":["R. Zemeckis"],
        "annee_de_sortie":1988,
        "nationalite":["US"],
        "entrees_en_millions": 5909001
    }
    ,

    {
        "rang":"156",
        "titre":"Crocodile Dundee",
        "realisateur":["P. Faiman"],
        "annee_de_sortie":1987,
        "nationalite":["AU"],
        "entrees_en_millions": 5887982
    }
    ,

    {
        "rang":"157",
        "titre":"Guerre et Paix",
        "realisateur":["K. Vidor"],
        "annee_de_sortie":1956,
        "nationalite":["US"],
        "entrees_en_millions": 5885856
    }
    ,

    {
        "rang":"158",
        "titre":"Les Ripoux",
        "realisateur":["C. Zidi"],
        "annee_de_sortie":1984,
        "nationalite":["FR"],
        "entrees_en_millions": 5882397
    }
    ,

    {
        "rang":"159",
        "titre":"L'Odyssee du Docteur Wassel",
        "realisateur":["C.B. DeMille"],
        "annee_de_sortie":1946,
        "nationalite":["US"],
        "entrees_en_millions": 5866693
    }
    ,

    {
        "rang":"160",
        "titre":"Rambo 2 - la mission",
        "realisateur":["G.P. Cosmatos"],
        "annee_de_sortie":1985,
        "nationalite":["US"],
        "entrees_en_millions": 5851440
    }
    ,

    {
        "rang":"161",
        "titre":"Le Bossu",
        "realisateur":["A. Hunebelle"],
        "annee_de_sortie":1959,
        "nationalite":["FR","IT"],
        "entrees_en_millions": 5847123
    }
    ,

    {
        "rang":"162",
        "titre":"L'Aile ou la Cuisse",
        "realisateur":["C. Zidi"],
        "annee_de_sortie":1976,
        "nationalite":["FR"],
        "entrees_en_millions": 5843090
    }
    ,

    {
        "rang":"163",
        "titre":"Les Vacances de Monsieur Hulot",
        "realisateur":["J. Tati"],
        "annee_de_sortie":1953,
        "nationalite":["FR"],
        "entrees_en_millions": 5799875
    }
    ,

    {
        "rang":"164",
        "titre":"Sissi face a son destin",
        "realisateur":["E. Marischka"],
        "annee_de_sortie":1958,
        "nationalite":["AT"],
        "entrees_en_millions": 5794263
    }
    ,

    {
        "rang":"165",
        "titre":"Quatre mariages et un enterrement",
        "realisateur":["M. Newell"],
        "annee_de_sortie":1994,
        "nationalite":["GB"],
        "entrees_en_millions": 5781268
    }
    ,

    {
        "rang":"166",
        "titre":"Mulan",
        "realisateur":["T. Bancroft", "B. Cook"],
        "annee_de_sortie":1998,
        "nationalite":["US"],
        "entrees_en_millions": 5776901
    }
    ,

    {
        "rang":"167",
        "titre":"Men in Black",
        "realisateur":["B. Sonnenfeld"],
        "annee_de_sortie":1997,
        "nationalite":["US"],
        "entrees_en_millions": 5759617
    }
    ,

    {
        "rang":"168",
        "titre":"Le train sifflera trois fois",
        "realisateur":["F. Zinnemann"],
        "annee_de_sortie":1952,
        "nationalite":["US"],
        "entrees_en_millions": 5756216
    }
    ,

    {
        "rang":"169",
        "titre":"Moi,moche et mechant 3",
        "realisateur":["K. Balda", "P. Coffin","E. Guillon"],
        "annee_de_sortie":2017,
        "nationalite":["US"],
        "entrees_en_millions": 5746829
    }
    ,

    {
        "rang":"170",
        "titre":"Grease",
        "realisateur":["R. Kleiser"],
        "annee_de_sortie":1978,
        "nationalite":["US"],
        "entrees_en_millions": 5745596
    }
    ,

    {
        "rang":"171",
        "titre":"Les Indestructibles 2",
        "realisateur":["B. Brad"],
        "annee_de_sortie":2018,
        "nationalite":["US"],
        "entrees_en_millions": 5744813
    }
    ,

    {
        "rang":"172",
        "titre":"Les Fous du stade",
        "realisateur":["C. Zidi"],
        "annee_de_sortie":1972,
        "nationalite":["FR"],
        "entrees_en_millions": 5744270
    }
    ,

    {
        "rang":"173",
        "titre":"Le Troisieme Homme",
        "realisateur":["C. Reed"],
        "annee_de_sortie":1949,
        "nationalite":["GB"],
        "entrees_en_millions": 5742569
    }
    ,

    {
        "rang":"174",
        "titre":"Operation tonnerre",
        "realisateur":["T. Young"],
        "annee_de_sortie":1965,
        "nationalite":["GB"],
        "entrees_en_millions": 5735506
    }
    ,

    {
        "rang":"175",
        "titre":"Andalousie",
        "realisateur":["R. Vernay"],
        "annee_de_sortie":1951,
        "nationalite":["FR","ES"],
        "entrees_en_millions": 5735108
    }
    ,

    {
        "rang":"176",
        "titre":"Les Anges gardiens",
        "realisateur":["J.M. Poire"],
        "annee_de_sortie":1995,
        "nationalite":["FR"],
        "entrees_en_millions": 5734326
    }
    ,

    {
        "rang":"177",
        "titre":"Les Valseuses",
        "realisateur":["B. Blier"],
        "annee_de_sortie":1974,
        "nationalite":["FR"],
        "entrees_en_millions": 5729042
    }
    ,

    {
        "rang":"178",
        "titre":"La Bataille du rail",
        "realisateur":["R. Clement"],
        "annee_de_sortie":1946,
        "nationalite":["FR"],
        "entrees_en_millions": 5727974
    }
    ,

    {
        "rang":"179",
        "titre":"Lawrence d'Arabie",
        "realisateur":["D. Lean"],
        "annee_de_sortie":1963,
        "nationalite":["GB"],
        "entrees_en_millions": 5718291
    }
    ,

    {
        "rang":"180",
        "titre":"A nous les petites Anglaises",
        "realisateur":["M. Lang"],
        "annee_de_sortie":1976,
        "nationalite":["FR"],
        "entrees_en_millions": 5704446
    }
    ,

    {
        "rang":"181",
        "titre":"La Verite",
        "realisateur":["H.G. Clouzot"],
        "annee_de_sortie":1960,
        "nationalite":["FR","IT"],
        "entrees_en_millions": 5701210
    }
    ,

    {
        "rang":"182",
        "titre":"Notre-Dame de Paris",
        "realisateur":["J. Delannoy"],
        "annee_de_sortie":1956,
        "nationalite":["FR","IT"],
        "entrees_en_millions": 5700102
    }
    ,

    {
        "rang":"183",
        "titre":"Indiana Jones et le temple maudit",
        "realisateur":["S. Spielberg"],
        "annee_de_sortie":1984,
        "nationalite":["US"],
        "entrees_en_millions": 5690878
    }
    ,

    {
        "rang":"184",
        "titre":"Les Tuche 3",
        "realisateur":["O. Baroux"],
        "annee_de_sortie":2018,
        "nationalite":["FR"],
        "entrees_en_millions": 5687833
    }
    ,

    {
        "rang":"185",
        "titre":"Matrix Reloaded",
        "realisateur":["L. Wachowski","A. Wachowski"],
        "annee_de_sortie":2003,
        "nationalite":["US"],
        "entrees_en_millions": 5672070
    }
    ,

    {
        "rang":"186",
        "titre":"Pirates des Caraibes - jusqu'au bout du monde",
        "realisateur":["G. Verbinski"],
        "annee_de_sortie":2007,
        "nationalite":["US"],
        "entrees_en_millions": 5639260
    }
    ,

    {
        "rang":"187",
        "titre":"Pocahontas, une legende indienne",
        "realisateur":["M. Gabriel", "E. Goldberg"],
        "annee_de_sortie":1995,
        "nationalite":["US"],
        "entrees_en_millions": 5634513
    }
    ,

    {
        "rang":"188",
        "titre":"La Ch'tite Famille",
        "realisateur":["D. Boon"],
        "annee_de_sortie":2018,
        "nationalite":["FR"],
        "entrees_en_millions": 5630428
    }
    ,

    {
        "rang":"189",
        "titre":"Bons baisers de Russie",
        "realisateur":["T. Young"],
        "annee_de_sortie":1964,
        "nationalite":["GB"],
        "entrees_en_millions": 5625125
    }
    ,

    {
        "rang":"190",
        "titre":"Star Wars : episode 2 - l'attaque des clones",
        "realisateur":["G. Lucas"],
        "annee_de_sortie":2002,
        "nationalite":["US"],
        "entrees_en_millions": 5624277
    }
    ,

    {
        "rang":"191",
        "titre":"Le Petit Nicolas",
        "realisateur":["L. Tirard"],
        "annee_de_sortie":2009,
        "nationalite":["FR","BE"],
        "entrees_en_millions": 5616187
    }
    ,

    {
        "rang":"192",
        "titre":"Joker",
        "realisateur":["T. Phillips"],
        "annee_de_sortie":2019,
        "nationalite":["US"],
        "entrees_en_millions": 5611793
    }
    ,

    {
        "rang":"193",
        "titre":"Independence Day",
        "realisateur":["R. Emmerich"],
        "annee_de_sortie":1996,
        "nationalite":["US"],
        "entrees_en_millions": 5606839
    }
    ,

    {
        "rang":"194",
        "titre":"Quai des Orfevres",
        "realisateur":["H.G. Clouzot"],
        "annee_de_sortie":1947,
        "nationalite":["FR"],
        "entrees_en_millions": 5582579
    }
    ,

    {
        "rang":"195",
        "titre":"La Folie des grandeurs",
        "realisateur":["G. Oury"],
        "annee_de_sortie":1971,
        "nationalite":["FR","DE","ES"],
        "entrees_en_millions": 5568547
    }
    ,

    {
        "rang":"196",
        "titre":"Le Cerveau",
        "realisateur":["G. Oury"],
        "annee_de_sortie":1969,
        "nationalite":["FR","IT"],
        "entrees_en_millions": 5548991
    }
    ,

    {
        "rang":"197",
        "titre":"Vaiana, la legende du bout du monde",
        "realisateur":["J. Musker", "R. Clements"],
        "annee_de_sortie":2016,
        "nationalite":["US"],
        "entrees_en_millions": 5548902
    }
    ,

    {
        "rang":"198",
        "titre":"Le Petit Baigneur",
        "realisateur":["R. Dhery"],
        "annee_de_sortie":1968,
        "nationalite":["FR","IT"],
        "entrees_en_millions": 5542856
    }
    ,

    {
        "rang":"199",
        "titre":"Shrek le troisieme",
        "realisateur":["C. Miller"],
        "annee_de_sortie":2007,
        "nationalite":["US"],
        "entrees_en_millions": 5536365
    }
    ,

    {
        "rang":"200",
        "titre":"Love Story",
        "realisateur":["A. Hiller"],
        "annee_de_sortie":1971,
        "nationalite":["US"],
        "entrees_en_millions": 5512408
    }
];


let nat = [
    {"US" : "Etats-Unis"},
    {"FR" : "France"},
    {"GB" : "Royaume-Uni"},
    {"IT" : "Italie"},
    {"DE" : "Allemagne"},
    {"CH" : "Suisse"},
    {"BE" : "Belgique"},
    {"ES" : "Espagne"},
    {"NZ" : "Nouvelle-Zélande"},
    {"MX" : "Mexique"},
    {"AT" : "Autriche"},
    {"ZA" : "Afrique du Sud"},
    {"AU" : "Australie"}
];



let liste_vierge=[];
for (let i in films){
    liste_vierge.push("["+ films[i]["nationalite"]+"],");
};
let liste_annee=[];
for (let i in films){
    liste_annee.push(films[i]["annee_de_sortie"]);
};
console.log(liste_annee);
let liste_nat = liste_vierge.filter((value,index,self)=>self.indexOf(value)===index);
let liste = liste_vierge.filter((value,index,self)=>self.indexOf(value)===index);
let annee_liste = liste_annee.filter((value,index,self)=>self.indexOf(value)===index);
(console.log(annee_liste));

let liste_nat_zero = [];
while (liste.length!=0){
    liste.shift();
    liste_nat_zero.push(0);
}
let liste_an = [];
while (annee_liste.length!=0){
    annee_liste.shift();
    liste_an.push(0);
}
console.log(liste_an);


function an(films){
    let liste_ann = [];
    for (let h in films){
        if (films[h]["annee_de_sortie"]<1950){
            liste_ann.push(["Avant 1950"]);
        }
        else if (1950<films[h]["annee_de_sortie"]<1959){
            liste_ann.push(["Entre 1950 et 1959"]);
        }
        else if (1960<films[h]["annee_de_sortie"]<1969){
            liste_ann.push(["Entre 1960 et 1969"]);
        }
        else if (1970<films[h]["annee_de_sortie"]<1979){
            liste_ann.push(["Entre 1970 et 1979"]);
        }
        else if (1980<films[h]["annee_de_sortie"]<1989){
            liste_ann.push(["Entre 1980 et 1989"]);
        }
        else if (1990<films[h]["annee_de_sortie"]<1999){
            liste_ann.push(["Entre 1990 et 1999"]);
        }
        else if (2000<films[h]["annee_de_sortie"]<2009){
            liste_ann.push(["Entre 2000 et 2009"]);
        }
        else if (2010<films[h]["annee_de_sortie"]<2020){
            liste_ann.push(["Entre 2010 et 2020"]);
        }
        else if (films[h]["annee_de_sortie"]>2020){
            liste_ann.push(["Après 2020"]);
        }
    }
    console.log("année");
}
