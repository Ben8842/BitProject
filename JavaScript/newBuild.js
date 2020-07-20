//This Function is necessary to trigger the sortable list for the Coin List page
//I cleverly wrapped this into its own function so that the sortable table can be built...
//AFTER the page populates the data from the API.  Without using this strategy I have found the sorting features
//to be broken.
function winthegame() {
  $(document).ready(function () {
    $("#table_id").DataTable({
      pageLength: 100,
    });
  });
}

//This Function populates the Coin List page
getCoinListSort = () => {
  axios
    .get(
      `https://coinlib.io/api/v1/coinlist?key=56a2275998bf3767&page=1&order=rank_asc`
    )

    .then((response) => {
      let output = "";
      let superCurrency = response.data.coins;
      var y = 0;
      var sliderIndex = 0;
      var submitIndex = 0;
      $.each(superCurrency, (index, coinBucket) => {
        y++;
        sliderIndex++;
        submitIndex++;
        var pricef = Math.floor(coinBucket.price * 100) / 100;
        var market_capf = Math.floor(coinBucket.market_cap * 100) / 100;
        var pricefc = pricef.toLocaleString();
        var market_capfc = market_capf.toLocaleString();
        var delta_24hf = Math.floor(coinBucket.delta_24h * 100) / 100;
        var volume_24hf = Math.floor(coinBucket.volume_24h * 100) / 100;
        var delta_24hfc = delta_24hf.toLocaleString();
        var volume_24hfc = volume_24hf.toLocaleString();
        var slide = "slide" + sliderIndex;
        var slideMax = Math.floor(1000000 / coinBucket.price);
        var outslide = "out" + submitIndex;
        var submitid = "sid" + submitIndex;
        var superPrice = "sup" + y;

        output += `
              <tr>
              <th scope="row">${y}</th>
              <td>${coinBucket.name}</td>
              <td>${coinBucket.symbol}</td>
              <td>$ ${pricefc}</td>
              <td><p id="${outslide}"></p></td>
              <td><p id="${superPrice}"></p><td>
              <td><input id="${slide}" type="range" min="0" max="${slideMax}" value="0" class="slider" size="0" onchange="showSlide(${y}, ${pricef})">
              <p id="${outslide}"></p>
              <p id="${superPrice}"></p>
              </td>
              <td><input id ='${submitid}' type="submit" value="Submit"></td>
              </tr>
              `;
      });

      $("#superCoinPlace").html(output);
      //Here I am calling the function to trigger the sorting of the data tables.  I put this here so that the sorting features would hit
      //the page after the API calls have done their thing and the html is already built.
      winthegame();

      var r = 1;
      while (r < 100) {
        var river = document.getElementById("slide" + r).value;
        document.getElementById("out" + r).innerHTML = river;

        r++;
      }
    });
};

//This function is called by the slider attribute 'onchange'.  this shows value of slider and also value of slider * current price
function showSlide(river, mountain) {
  var boat = document.getElementById("slide" + river).value;
  var boatcomma = boat.toLocaleString();

  var peak = Math.floor(mountain * boat * 100) / 100;
  var peakc = peak.toLocaleString();

  document.getElementById("out" + river).innerHTML = boat;
  document.getElementById("sup" + river).innerHTML = peakc;
}

//This function creates a doughnut chart based on the coinlist api top ten information
const newBuild = () => {
  $.getJSON(
    "https://coinlib.io/api/v1/coinlist?key=56a2275998bf3767&page=1&order=rank_asc",
    function (ranklist) {
      var superData = [];
      var superLabel = [];
      var boater = 0;
      var xindex = 0;
      while (xindex < 100) {
        boater++;
        var sliding = "slide" + boater;
        if (document.getElementById(sliding).value != 0) {
          superData.push(
            Math.floor(
              ranklist.coins[xindex].price *
                document.getElementById(sliding).value *
                100
            ) / 100
          );
          // superLabel.push(ranklist.coins[xindex].name);
        }
        xindex++;
      }
      var y = 0;
      var t = 1;
      var toty = 0;
      while (y < 100) {
        var gliding = "slide" + t;
        if (document.getElementById(gliding).value != 0) {
          toty =
            toty +
            Math.floor(
              ranklist.coins[y].price *
                document.getElementById(gliding).value *
                100
            ) /
              100;
        }
        y++;
        t++;
        console.log(toty);
      }
      var u = 0;
      var q = 1;
      while (u < 100) {
        var bliding = "slide" + q;
        if (document.getElementById(bliding).value != 0) {
          console.log("HI" + document.getElementById(bliding).value);
          console.log("hi" + ranklist.coins[u].price);
          console.log("h" + toty);
          var per = Math.floor(
            ((document.getElementById(bliding).value *
              ranklist.coins[u].price) /
              toty) *
              100
          );
          superLabel.push(ranklist.coins[u].name + " %" + per);
          console.log(per);
        }
        u++;
        q++;
      }

      var ctx = document.getElementById("superChart").getContext("2d");

      var chart = new Chart(ctx, {
        // The type of chart we want to create
        type: "doughnut",
        // The data for our dataset
        data: {
          labels: superLabel,
          /*[
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
          ],*/
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

              data: superData,
            },
          ],
        },

        // Configuration options go here
        options: {
          legend: {
            position: "left",
          },
        },
      });
      //Here we create a variable to hold the sum of the superData array, and then send the value to html to display total
      var totP = 0;
      var totP = superData.reduce(function (a, b) {
        return a + b;
      }, 0);
      var totPD = totP.toFixed(2);
      var totPDc = totPD.toLocaleString();
      console.log(totPD);

      document.getElementById("totalPortfolio").innerHTML = totPDc;
    }
  );
};

//This function defines the reset button functionality for build portfolio
const refreshFunction = () => {
  location.reload();
};
