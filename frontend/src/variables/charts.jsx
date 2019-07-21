let chart1_2_options = {
    maintainAspectRatio: false,
    legend: {
      display: false
    },
    tooltips: {
      backgroundColor: "#f5f5f5",
      titleFontColor: "#333",
      bodyFontColor: "#666",
      bodySpacing: 4,
      xPadding: 12,
      mode: "nearest",
      intersect: 0,
      position: "nearest"
    },
    responsive: true,
    scales: {
      yAxes: [
        {
          barPercentage: 1.6,
          gridLines: {
            drawBorder: false,
            color: "rgba(29,140,248,0.0)",
            zeroLineColor: "transparent"
          },
          ticks: {
            suggestedMin: 60,
            suggestedMax: 125,
            padding: 20,
            fontColor: "#9a9a9a"
          }
        }
      ],
      xAxes: [
        {
          barPercentage: 1.6,
          gridLines: {
            drawBorder: false,
            color: "rgba(29,140,248,0.1)",
            zeroLineColor: "transparent"
          },
          ticks: {
            padding: 20,
            fontColor: "#9a9a9a"
          }
        }
      ]
    }
  };
  
  // #########################################
  // // // used inside src/views/Dashboard.jsx
  // #########################################
  let chartExample1 = {
    data1: canvas => {
      let ctx = canvas.getContext("2d");
  
      let gradientStroke = ctx.createLinearGradient(0, 230, 0, 50);
  
      gradientStroke.addColorStop(1, "rgba(29,140,248,0.2)");
      gradientStroke.addColorStop(0.4, "rgba(29,140,248,0.0)");
      gradientStroke.addColorStop(0, "rgba(29,140,248,0)"); //blue colors
  
      return {
  
        
        labels: [
          "JAN",
          "FEB",
          "MAR",
          "APR",
          "MAY",
          "JUN",
          "JUL",
          "AUG",
          "SEP",
          "OCT",
          "NOV",
          "DEC"
        ],

        datasets: [
          {
            label: "My First dataset",
            fill: true,
            backgroundColor: gradientStroke,
            borderColor: "#1f8ef1",
            borderWidth: 2,
            borderDash: [],
            borderDashOffset: 0.0,
            pointBackgroundColor: "#1f8ef1",
            pointBorderColor: "rgba(255,255,255,0)",
            pointHoverBackgroundColor: "#1f8ef1",
            pointBorderWidth: 20,
            pointHoverRadius: 4,
            pointHoverBorderWidth: 15,
            pointRadius: 4,
            //data: [120, 70, 90, 70, 85, 60, 75, 60, 90, 80, 110, 100]
            data: [50.0,50.70000076293945,51.45000076293945,49.43000030517578,48.720001220703125,49.599998474121094,51.310001373291016,51.75,52.779998779296875,53.45000076293945,54.33000183105469,54.84000015258789,53.060001373291016,52.84000015258789,52.54999923706055,52.400001525878906,52.75,52.400001525878906,51.84000015258789,51.709999084472656,52.279998779296875,52.7599983215332,50.40999984741211,49.720001220703125,50.79999923706055,51.439998626708984,51.72999954223633,53.29999923706055,53.349998474121094,54.150001525878906,55.66999816894531,55.650001525878906,55.220001220703125,54.56999969482422,53.619998931884766,54.04999923706055,52.0,52.150001525878906,53.47999954223633,53.220001220703125,52.59000015258789,53.45000076293945,53.779998779296875,55.20000076293945,55.040000915527344,57.34000015258789,58.58000183105469,59.31999969482422,61.0099983215332,60.20000076293945,62.20000076293945,60.0099983215332,59.47999954223633,59.81999969482422,60.400001525878906,61.20000076293945,59.95000076293945,58.79999923706055,57.4900016784668,57.04999923706055,57.70000076293945,55.88999938964844,56.47999954223633,57.66999816894531,57.70000076293945,58.79999923706055,56.5,56.529998779296875,58.369998931884766,56.75,54.43000030517578,54.61000061035156,55.599998474121094,53.099998474121094,53.869998931884766,56.709999084472656,57.5,57.529998779296875,57.22999954223633,57.59000015258789,57.02000045776367,54.650001525878906,54.849998474121094,56.27000045776367,55.15999984741211,56.150001525878906,55.369998931884766,54.529998779296875,54.040000915527344,50.349998474121094,50.119998931884766,49.91999816894531,52.29999923706055,52.0,52.79999923706055,54.11000061035156,52.880001068115234,52.79999923706055,52.29999923706055,51.290000915527344,50.20000076293945,50.599998474121094,50.369998931884766,50.599998474121094,50.880001068115234,51.25,51.439998626708984,50.0099983215332,49.810001373291016,50.86000061035156,50.439998626708984,49.5,51.0,51.09000015258789,49.0,52.189998626708984,51.90999984741211,52.40999984741211,53.689998626708984,53.099998474121094,52.380001068115234,52.599998474121094,52.349998474121094,52.650001525878906,54.22999954223633,54.7599983215332,55.279998779296875,55.08000183105469,55.650001525878906,56.150001525878906,42.36000061035156,42.7400016784668,46.599998474121094,45.5,46.25,44.68000030517578,44.52000045776367,42.459999084472656,41.59000015258789,43.15999984741211,42.02000045776367,44.29999923706055,45.4900016784668,45.65999984741211,45.880001068115234,45.25,45.4900016784668,45.79999923706055,45.380001068115234,46.9900016784668,47.119998931884766,47.20000076293945,46.83000183105469,47.099998474121094,46.7400016784668,48.04999923706055,48.86000061035156,48.849998474121094,49.880001068115234,49.970001220703125,50.70000076293945,50.709999084472656,50.54999923706055,50.459999084472656,51.900001525878906,50.560001373291016,50.88999938964844,50.04999923706055,49.54999923706055,50.279998779296875,49.599998474121094,49.29999923706055,50.93000030517578,52.599998474121094,51.630001068115234,51.779998779296875,52.15999984741211,51.97999954223633,53.38999938964844,52.349998474121094,51.7599983215332,51.790000915527344,51.47999954223633,51.33000183105469,53.099998474121094,52.25,52.58000183105469,51.29999923706055,51.91999816894531,50.36000061035156,50.33000183105469,50.41999816894531,50.25,50.099998474121094,48.939998626708984,50.400001525878906,49.65999984741211,49.70000076293945,49.0,48.540000915527344,49.459999084472656,47.43000030517578,47.59000015258789,47.95000076293945,46.400001525878906,47.720001220703125,46.75,47.40999984741211,47.459999084472656,47.81999969482422,48.310001373291016,50.189998626708984,50.25,49.70000076293945,50.0099983215332,49.0,48.83000183105469,49.11000061035156,48.38999938964844,48.79999923706055,48.65999984741211,48.34000015258789,51.43000030517578,51.4900016784668,51.849998474121094,51.400001525878906,50.20000076293945,52.0,52.29999923706055,52.439998626708984,52.400001525878906,51.380001068115234,51.58000183105469,51.70000076293945,51.81999969482422,53.650001525878906,51.38999938964844,51.290000915527344,51.66999816894531,50.36000061035156,50.95000076293945,52.130001068115234,52.04999923706055,51.849998474121094]
          }
        ]
      };
    },
    data2: canvas => {
      let ctx = canvas.getContext("2d");
  
      let gradientStroke = ctx.createLinearGradient(0, 230, 0, 50);
  
      gradientStroke.addColorStop(1, "rgba(29,140,248,0.2)");
      gradientStroke.addColorStop(0.4, "rgba(29,140,248,0.0)");
      gradientStroke.addColorStop(0, "rgba(29,140,248,0)"); //blue colors
  
      return {
        labels: [
          "JAN",
          "FEB",
          "MAR",
          "APR",
          "MAY",
          "JUN",
          "JUL",
          "AUG",
          "SEP",
          "OCT",
          "NOV",
          "DEC"
        ],
        datasets: [
          {
            label: "My First dataset",
            fill: true,
            backgroundColor: gradientStroke,
            borderColor: "#1f8ef1",
            borderWidth: 2,
            borderDash: [],
            borderDashOffset: 0.0,
            pointBackgroundColor: "#1f8ef1",
            pointBorderColor: "rgba(255,255,255,0)",
            pointHoverBackgroundColor: "#1f8ef1",
            pointBorderWidth: 20,
            pointHoverRadius: 4,
            pointHoverBorderWidth: 15,
            pointRadius: 4,
            data: [80, 120, 105, 110, 95, 105, 90, 100, 80, 95, 70, 120]
          }
        ]
      };
    },
    data3: canvas => {
      let ctx = canvas.getContext("2d");
  
      let gradientStroke = ctx.createLinearGradient(0, 230, 0, 50);
  
      gradientStroke.addColorStop(1, "rgba(29,140,248,0.2)");
      gradientStroke.addColorStop(0.4, "rgba(29,140,248,0.0)");
      gradientStroke.addColorStop(0, "rgba(29,140,248,0)"); //blue colors
  
      return {
        labels: [
          "JAN",
          "FEB",
          "MAR",
          "APR",
          "MAY",
          "JUN",
          "JUL",
          "AUG",
          "SEP",
          "OCT",
          "NOV",
          "DEC"
        ],
        datasets: [
          {
            label: "My First dataset",
            fill: true,
            backgroundColor: gradientStroke,
            borderColor: "#1f8ef1",
            borderWidth: 2,
            borderDash: [],
            borderDashOffset: 0.0,
            pointBackgroundColor: "#1f8ef1",
            pointBorderColor: "rgba(255,255,255,0)",
            pointHoverBackgroundColor: "#1f8ef1",
            pointBorderWidth: 20,
            pointHoverRadius: 4,
            pointHoverBorderWidth: 15,
            pointRadius: 4,
            data: [60, 80, 65, 130, 80, 105, 90, 8000, 70, 115, 60, 130]
          }
        ]
      };
    },
    options: chart1_2_options
  };
  
  // #########################################
  // // // used inside src/views/Dashboard.jsx
  // #########################################
  let chartExample2 = {
    data: canvas => {
      let ctx = canvas.getContext("2d");
  
      let gradientStroke = ctx.createLinearGradient(0, 230, 0, 50);
  
      gradientStroke.addColorStop(1, "rgba(29,140,248,0.2)");
      gradientStroke.addColorStop(0.4, "rgba(29,140,248,0.0)");
      gradientStroke.addColorStop(0, "rgba(29,140,248,0)"); //blue colors
  
      return {
        labels: ["JUL", "AUG", "SEP", "OCT", "NOV", "DEC"],
        datasets: [
          {
            label: "Data",
            fill: true,
            backgroundColor: gradientStroke,
            borderColor: "#1f8ef1",
            borderWidth: 2,
            borderDash: [],
            borderDashOffset: 0.0,
            pointBackgroundColor: "#1f8ef1",
            pointBorderColor: "rgba(255,255,255,0)",
            pointHoverBackgroundColor: "#1f8ef1",
            pointBorderWidth: 20,
            pointHoverRadius: 4,
            pointHoverBorderWidth: 15,
            pointRadius: 4,
            data: [80, 100, 70, 80, 120, 80]
          }
        ]
      };
    },
    options: chart1_2_options
  };
  
  // #########################################
  // // // used inside src/views/Dashboard.jsx
  // #########################################
  let chartExample3 = {
    data: canvas => {
      let ctx = canvas.getContext("2d");
  
      let gradientStroke = ctx.createLinearGradient(0, 230, 0, 50);
  
      gradientStroke.addColorStop(1, "rgba(72,72,176,0.1)");
      gradientStroke.addColorStop(0.4, "rgba(72,72,176,0.0)");
      gradientStroke.addColorStop(0, "rgba(119,52,169,0)"); //purple colors
  
      return {
        labels: ["USA", "GER", "AUS", "UK", "RO", "BR"],
        datasets: [
          {
            label: "Countries",
            fill: true,
            backgroundColor: gradientStroke,
            hoverBackgroundColor: gradientStroke,
            borderColor: "#d048b6",
            borderWidth: 2,
            borderDash: [],
            borderDashOffset: 0.0,
            data: [53, 20, 10, 80, 100, 45]
          }
        ]
      };
    },
    options: {
      maintainAspectRatio: false,
      legend: {
        display: false
      },
      tooltips: {
        backgroundColor: "#f5f5f5",
        titleFontColor: "#333",
        bodyFontColor: "#666",
        bodySpacing: 4,
        xPadding: 12,
        mode: "nearest",
        intersect: 0,
        position: "nearest"
      },
      responsive: true,
      scales: {
        yAxes: [
          {
            gridLines: {
              drawBorder: false,
              color: "rgba(225,78,202,0.1)",
              zeroLineColor: "transparent"
            },
            ticks: {
              suggestedMin: 60,
              suggestedMax: 120,
              padding: 20,
              fontColor: "#9e9e9e"
            }
          }
        ],
        xAxes: [
          {
            gridLines: {
              drawBorder: false,
              color: "rgba(225,78,202,0.1)",
              zeroLineColor: "transparent"
            },
            ticks: {
              padding: 20,
              fontColor: "#9e9e9e"
            }
          }
        ]
      }
    }
  };
  
  // #########################################
  // // // used inside src/views/Dashboard.jsx
  // #########################################
  const chartExample4 = {
    data: canvas => {
      let ctx = canvas.getContext("2d");
  
      let gradientStroke = ctx.createLinearGradient(0, 230, 0, 50);
  
      gradientStroke.addColorStop(1, "rgba(66,134,121,0.15)");
      gradientStroke.addColorStop(0.4, "rgba(66,134,121,0.0)"); //green colors
      gradientStroke.addColorStop(0, "rgba(66,134,121,0)"); //green colors
  
      return {
        labels: ["JUL", "AUG", "SEP", "OCT", "NOV"],
        datasets: [
          {
            label: "My First dataset",
            fill: true,
            backgroundColor: gradientStroke,
            borderColor: "#00d6b4",
            borderWidth: 2,
            borderDash: [],
            borderDashOffset: 0.0,
            pointBackgroundColor: "#00d6b4",
            pointBorderColor: "rgba(255,255,255,0)",
            pointHoverBackgroundColor: "#00d6b4",
            pointBorderWidth: 20,
            pointHoverRadius: 4,
            pointHoverBorderWidth: 15,
            pointRadius: 4,
            data: [90, 27, 60, 12, 80]
          }
        ]
      };
    },
    options: {
      maintainAspectRatio: false,
      legend: {
        display: false
      },
  
      tooltips: {
        backgroundColor: "#f5f5f5",
        titleFontColor: "#333",
        bodyFontColor: "#666",
        bodySpacing: 4,
        xPadding: 12,
        mode: "nearest",
        intersect: 0,
        position: "nearest"
      },
      responsive: true,
      scales: {
        yAxes: [
          {
            barPercentage: 1.6,
            gridLines: {
              drawBorder: false,
              color: "rgba(29,140,248,0.0)",
              zeroLineColor: "transparent"
            },
            ticks: {
              suggestedMin: 50,
              suggestedMax: 125,
              padding: 20,
              fontColor: "#9e9e9e"
            }
          }
        ],
  
        xAxes: [
          {
            barPercentage: 1.6,
            gridLines: {
              drawBorder: false,
              color: "rgba(0,242,195,0.1)",
              zeroLineColor: "transparent"
            },
            ticks: {
              padding: 20,
              fontColor: "#9e9e9e"
            }
          }
        ]
      }
    }
  };
  
  module.exports = {
    chartExample1, // in src/views/Dashboard.jsx
    chartExample2, // in src/views/Dashboard.jsx
    chartExample3, // in src/views/Dashboard.jsx
    chartExample4 // in src/views/Dashboard.jsx
  };
  