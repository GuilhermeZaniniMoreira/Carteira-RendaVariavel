const router = require("express").Router();
const axios = require("axios")

router.get('/last', (req, res) => {
  const ticker = req.query.ticker
  axios.get(`https://query1.finance.yahoo.com/v7/finance/chart/${ticker}.SA?range=5y&interval=1d&indicators=quote&includeTimestamps=true`)
  .then(resp => {
    const length = resp.data.chart.result[0].indicators.adjclose[0].adjclose.length
    const lastClose = resp.data.chart.result[0].indicators.adjclose[0].adjclose[length - 2]
    const todayLast = resp.data.chart.result[0].indicators.adjclose[0].adjclose[length - 1]
    res.send({ lastClose })
  })
})

router.get('/price', (req, res) => {
    const ticker = req.query.ticker
    axios.get(`https://query1.finance.yahoo.com/v10/finance/quoteSummary/${ticker}.SA?&modules=summaryProfile,financialData`)
    .then(resp => {
      const price = resp.data.quoteSummary.result[0].financialData.currentPrice.raw
      res.send({ price })
    })
})

router.get('/check', (req, res) => {
    const ticker = req.query.ticker
    axios.get(`https://query1.finance.yahoo.com/v10/finance/quoteSummary/${ticker}.SA?&modules=summaryProfile,financialData`)
    .then(resp => {

        //res.sendStatus(resp.response.status)
        //console.log(resp.data)
        //const error = resp.data.quoteSummary.result[0]
        //console.log(error)
        /*
        const companyData = resp.data.data.quoteSummary.result[0]
        res.send({ companyData });
        */

        res.send({ status: 200 })

    }).catch(function (error) {
        if (error.response) {
          // The request was made and the server responded with a status code
          // that falls out of the range of 2xx
          //console.log(error.response.data);
          //console.log(error.response.status);
          //res.sendStatus(erro.response.status)
          //console.log(error.response.headers);

          res.send({ status: 404 })

    
        } else if (error.request) {
          // The request was made but no response was received
          // `error.request` is an instance of XMLHttpRequest in the browser and an instance of
          // http.ClientRequest in node.js
          //console.log(error.request);
        } else {
          // Something happened in setting up the request that triggered an Error
          //console.log('Error', error.message);
        }
        //console.log(error.config);
    });

});

module.exports = router;