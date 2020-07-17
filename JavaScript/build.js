//This function takes input from the build page and creates portfolio
const myBuildFunction = () => {
  //here we are grabbing each input (10 of them)
  var amount1 = "";
  var amount1 = document.getElementById("field1").value;
  var amount2 = "";
  var amount2 = document.getElementById("field2").value;
  var amount3 = "";
  var amount3 = document.getElementById("field3").value;
  var amount4 = "";
  var amount4 = document.getElementById("field4").value;
  var amount5 = "";
  var amount5 = document.getElementById("field5").value;
  var amount6 = "";
  var amount6 = document.getElementById("field6").value;
  var amount7 = "";
  var amount7 = document.getElementById("field7").value;
  var amount8 = "";
  var amount8 = document.getElementById("field8").value;
  var amount9 = "";
  var amount9 = document.getElementById("field9").value;
  var amount10 = "";
  var amount10 = document.getElementById("field10").value;
  //Here we are grabbing the drop down chart value
  var chartType = document.getElementById("chartType");
  var userChoice = chartType.options[chartType.selectedIndex].value;
  console.log(chartType);
  console.log(userChoice);

  //Here is the (coinlist) api call to get the price of each coin
  $.getJSON(
    "https://coinlib.io/api/v1/coinlist?key=56a2275998bf3767&page=1&order=rank_asc",
    function (portlist) {
      console.log(portlist);

      var first = portlist.coins[0].price;
      var second = portlist.coins[1].price;
      var third = portlist.coins[2].price;
      var fourth = portlist.coins[3].price;
      var fifth = portlist.coins[4].price;
      var sixth = portlist.coins[5].price;
      var seventh = portlist.coins[6].price;
      var eighth = portlist.coins[7].price;
      var ninth = portlist.coins[8].price;
      var tenth = portlist.coins[9].price;

      //Here we are multiplying the input number times the current price of the coin
      var v1 = Math.floor(first * amount1 * 100) / 100;
      var v2 = Math.floor(second * amount2 * 100) / 100;
      var v3 = Math.floor(third * amount3 * 100) / 100;
      var v4 = Math.floor(fourth * amount4 * 100) / 100;
      var v5 = Math.floor(fifth * amount5 * 100) / 100;
      var v6 = Math.floor(sixth * amount6 * 100) / 100;
      var v7 = Math.floor(seventh * amount7 * 100) / 100;
      var v8 = Math.floor(eighth * amount8 * 100) / 100;
      var v9 = Math.floor(ninth * amount9 * 100) / 100;
      var v10 = Math.floor(tenth * amount10 * 100) / 100;

      //Here we are adding each of the inputs*current price values to get a total
      var totalC = v1 + v2 + v3 + v4 + v5 + v6 + v7 + v8 + v9 + v10;

      $(".calculation").append(
        "Total Portfolio value = $" + totalC.toLocaleString()
      );

      var options = {
        tooltips: {
          enabled: false,
        },
        plugins: {
          datalabels: {
            formatter: (value, ctx) => {
              let sum = 0;
              let dataArr = ctx.chart.data.datasets[0].data;
              dataArr.map((data) => {
                sum += data;
              });
              let percentage = ((value * 100) / sum).toFixed(2) + "%";
              return percentage;
            },
            color: "#000",
          },
        },
      };

      //Here is where we are building the chart
      var ctx = document.getElementById("buildChart").getContext("2d");
      var chart = new Chart(ctx, {
        // The type of chart we want to create
        type: userChoice,

        // The data for our dataset
        data: {
          labels: [
            "Bitcoin",
            "Ethereum",
            "XRP",
            "Tether",
            "Bitcoin Cash",
            "Bitcoin SV",
            "Litecoin",
            "Cardano",
            "Binance Coin",
            "EOS",
          ],
          datasets: [
            {
              label: "Value",
              backgroundColor: [
                "rgb(255, 106, 0)",
                "rgb(253, 250, 54)",
                "rgb(40, 165, 230)",
                "rgb(40, 250, 54)",
                "rgb(189, 165, 150)",
                "rgb(23, 250, 244)",
                "rgb(248, 2, 12)",
                "rgb(229, 132, 201)",
                "rgb(23, 130, 12)",
                "rgb(17, 132, 201)",
              ],
              borderColor: "rgb(25, 99, 132)",
              data: [v1, v2, v3, v4, v5, v6, v7, v8, v9, v10],
            },
          ],
        },

        // Configuration options go here
        options: options,
      });
      /*  not sure how to get this addData function to work
          function addData(){
              console.log("21");
              buildChart.data.datasets[3].data[0] = 20;
            
            myLineChart.update();
          }*/
    }
  );

  //$('.result').append(amount1 + " Bitcoins in your portfolio!");
};

//This function grabs the current slider value and displays it on the build portfolio page
const displaySlideValue = () => {
  var slider1 = document.getElementById("field1");
  var output1 = document.getElementById("demo1");
  output1.innerHTML = slider1.value;

  slider1.oninput = function () {
    output1.innerHTML = this.value;
  };

  var slider2 = document.getElementById("field2");
  var output2 = document.getElementById("demo2");
  output2.innerHTML = slider2.value;

  slider2.oninput = function () {
    output2.innerHTML = this.value;
  };

  var slider3 = document.getElementById("field3");
  var output3 = document.getElementById("demo3");
  output3.innerHTML = slider3.value;

  slider3.oninput = function () {
    output3.innerHTML = this.value;
  };

  var slider4 = document.getElementById("field4");
  var output4 = document.getElementById("demo4");
  output4.innerHTML = slider4.value;

  slider4.oninput = function () {
    output4.innerHTML = this.value;
  };

  var slider5 = document.getElementById("field5");
  var output5 = document.getElementById("demo5");
  output5.innerHTML = slider5.value;

  slider5.oninput = function () {
    output5.innerHTML = this.value;
  };

  var slider6 = document.getElementById("field6");
  var output6 = document.getElementById("demo6");
  output6.innerHTML = slider6.value;

  slider6.oninput = function () {
    output6.innerHTML = this.value;
  };

  var slider7 = document.getElementById("field7");
  var output7 = document.getElementById("demo7");
  output7.innerHTML = slider7.value;

  slider7.oninput = function () {
    output7.innerHTML = this.value;
  };

  var slider8 = document.getElementById("field8");
  var output8 = document.getElementById("demo8");
  output8.innerHTML = slider8.value;

  slider8.oninput = function () {
    output8.innerHTML = this.value;
  };

  var slider9 = document.getElementById("field9");
  var output9 = document.getElementById("demo9");
  output9.innerHTML = slider9.value;

  slider9.oninput = function () {
    output9.innerHTML = this.value;
  };

  var slider10 = document.getElementById("field10");
  var output10 = document.getElementById("demo10");
  output10.innerHTML = slider10.value;

  slider10.oninput = function () {
    output10.innerHTML = this.value;
  };
};

//This function defines the reset button functionality for build portfolio
const refreshFunction = () => {
  location.reload();
};
