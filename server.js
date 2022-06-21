const express = require("express");
const app = express();

const PORT = process.env.PORT || 3016;
const URL = "127.0.0.1";

app.get("/", (req, res) => {
  app.use(express.json());
  res.status(200);

  res.setHeader("Content-type", "application/json");
  const jsonApi = JSON.stringify({
    location: "Milano",
    name: "Ristorante del Duomo",
    menu: [
      {
        bevande: [
          "coca cola",
          "fanta",
          "sprite",
          { birra: ["ceres", "peroni", "ichnusa", "moretti"] },
          {vino: {
            rosso: [
                'Nero Di Troia Salento IGP San Patrime',
                'Chianti DOCG Valvirginio 2020',
                'Malvasia Nera Salento IGP Vecchia Torre 2019',
                'Primitivo IGP San Patrime'
            ]
        },
        bianco: [
            'Pecorino Donna Orgilla Fiorano 2020',
            'Zibibbo Secco Al Qasar Rallo 2020',
            'Verdicchio Castelli di Jesi Superiore La Staffa 2021',
            'Falanghina Janare Senete La Guardiense 2021'
        ]
    },
          "acqua naturale",
          "acqua frizzante",
        ],
      },
      {
        antipasti: [
          {
            carne: [
              "Piccoli pasticci ripieni di agnello",
              "Panzerotti al forno con crema di fave pecorino e salame",
              "Ravioli cinesi al vapore",
              "Corn dog",
            ],
          },
          {
            pesce: [
              "Sfogliette con pesce spada affumicato",
              "Carpaccio di pesce spada al pepe verde",
              "Polpettine di tonno e ricotta",
              "Capesante gratinate",
            ],
          },
        ],
      },
      {
        primi: [
          {
            carne: [
              "Tagliatelle al ragù bianco",
              "Paccheri ripieni con salsiccia e funghi",
              "Tajarin con sugo di carne e fegatini",
              "Tagliatelle ripiene di carne e ricotta",
            ],
          },
          {
            pesce: [
              "Paella de marisco",
              "Calamarata",
              "Riso Venere con gamberetti e zucchine",
              "Linguine gamberetti, zucchine e zafferano",
            ],
          },
        ],
      },
      {
        secondi: {
          carne: [
            "Filetto al pepe verde",
            "Grigliata di carne",
            "Spezzatino di vitello con patate",
            "Saltimbocca alla romana",
          ],
          pesce: [
            "Orata al forno",
            "Salmone croccante",
            "Tonno in crosta di pistacchi",
            "Pesce spada alla siciliana",
          ],
        },
      },
      {
        dessert: [
          "Dessert di panna e ricotta al caffè",
          "Danubio dolce",
          "Dessert cioccolato birra e fragole",
          "Dolci sospiri",
        ],
      },
    ],
  });
  res.send(jsonApi);
});
app.listen(PORT, URL, () => {
  console.log(`server in ascolto alla porta ${PORT}`);
});
