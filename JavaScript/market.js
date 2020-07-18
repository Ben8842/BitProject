//This function creates a doughnut chart based on the coinlist api top ten information
const myVis = () => {
  $.getJSON(
    "https://coinlib.io/api/v1/coinlist?key=56a2275998bf3767&page=1&order=rank_asc",
    function (ranklist) {
      //Here I am calculating the total market to use in the percentage calculations
      let tot = 0;
      let y = 0;
      while (y < 99) {
        tot = tot + parseInt(ranklist.coins[y].market_cap);
        y++;
      }
      //The rom variable will represent the rest of market slice.  I will use while loop to
      //add up the 11-79 largest currencies to give an estimate what the rest of market looks like compared
      // to the top ten coins in the chart
      let rom = 0;
      //console.log(rom);
      let x = 10;
      while (x < 80) {
        rom = rom + parseInt(ranklist.coins[x].market_cap);
        x++;
      }
      //console.log(rom);
      //Chart.defaults.global.legend.position = bottom;
      var ctx = document.getElementById("myChart").getContext("2d");

      var chart = new Chart(ctx, {
        // The type of chart we want to create
        type: "doughnut",
        // The data for our dataset
        data: {
          labels: [
            ranklist.coins[0].name +
              " " +
              Math.floor(
                (parseInt(ranklist.coins[0].market_cap) / parseInt(tot)) * 100
              ) +
              "%",
            ranklist.coins[1].name +
              " " +
              Math.floor(
                (parseInt(ranklist.coins[1].market_cap) / parseInt(tot)) * 100
              ) +
              "%",
            ranklist.coins[2].name +
              " " +
              Math.floor(
                (parseInt(ranklist.coins[2].market_cap) / parseInt(tot)) * 100
              ) +
              "%",
            ranklist.coins[3].name +
              " " +
              Math.floor(
                (parseInt(ranklist.coins[3].market_cap) / parseInt(tot)) * 100
              ) +
              "%",
            ranklist.coins[4].name +
              " " +
              Math.floor(
                (parseInt(ranklist.coins[4].market_cap) / parseInt(tot)) * 100
              ) +
              "%",
            ranklist.coins[5].name +
              " " +
              Math.floor(
                (parseInt(ranklist.coins[5].market_cap) / parseInt(tot)) * 100
              ) +
              "%",
            ranklist.coins[6].name +
              " " +
              Math.floor(
                (parseInt(ranklist.coins[6].market_cap) / parseInt(tot)) * 100
              ) +
              "%",
            ranklist.coins[7].name +
              " " +
              Math.floor(
                (parseInt(ranklist.coins[7].market_cap) / parseInt(tot)) * 100
              ) +
              "%",
            ranklist.coins[8].name +
              " " +
              Math.floor(
                (parseInt(ranklist.coins[8].market_cap) / parseInt(tot)) * 100
              ) +
              "%",
            ranklist.coins[9].name +
              " " +
              Math.floor(
                (parseInt(ranklist.coins[9].market_cap) / parseInt(tot)) * 100
              ) +
              "%",
            "Rest of market" +
              " " +
              Math.floor((parseInt(rom) / parseInt(tot)) * 100) +
              "%",
          ],
          datasets: [
            {
              label: "My First dataset",
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

              data: [
                Math.floor(ranklist.coins[0].market_cap),
                Math.floor(ranklist.coins[1].market_cap),
                Math.floor(ranklist.coins[2].market_cap),
                Math.floor(ranklist.coins[3].market_cap),
                Math.floor(ranklist.coins[4].market_cap),
                Math.floor(ranklist.coins[5].market_cap),
                Math.floor(ranklist.coins[6].market_cap),
                Math.floor(ranklist.coins[7].market_cap),
                Math.floor(ranklist.coins[8].market_cap),
                Math.floor(ranklist.coins[9].market_cap),
                rom,
              ],
            },
          ],
        },

        // Configuration options go here
        options: {
          legend: {
            position: "left",
            align: "center",
          },
        },
      });
    }
  );
};
