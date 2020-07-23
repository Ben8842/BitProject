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
      $.each(superCurrency, (index, coinBucket) => {
        y++;
        var pricef = Math.floor(coinBucket.price * 100) / 100;
        var market_capf = Math.floor(coinBucket.market_cap * 100) / 100;
        var pricefc = pricef.toLocaleString();
        var market_capfc = market_capf.toLocaleString();
        var delta_24hf = Math.floor(coinBucket.delta_24h * 100) / 100;
        var volume_24hf = Math.floor(coinBucket.volume_24h * 100) / 100;
        var delta_24hfc = delta_24hf.toLocaleString();
        var volume_24hfc = volume_24hf.toLocaleString();
        var slide = "slide" + y;
        var slideMax = Math.floor(1000000 / coinBucket.price);
        var outslide = "out" + y;
        var submitid = "sid" + y;
        var superPrice = "sup" + y;

        /*  output += `
              <tr>
              <th scope="row">${y}</th>
              <td>${coinBucket.name}</td>
              <td><input id="${slide}" type="range" min="0" max="${slideMax}" value="0" class="custom-range" size="0" onchange="showSlide(${y}, ${pricef})">             
              <td><p id="${outslide}"></p></td>
              <td><p id="${superPrice}"></p></td>
               <td>$ ${pricefc}</td>
               <td>${coinBucket.symbol}</td>
              </tr>
              `; */
        output += `
              <tr>
              <th scope="row">${y}</th>
            
              <td class="slider">
              <form name="NumberOfCoins" >
              <input type="range" class="sliding" name="CoinName" id="${slide}" value="0" min="0" max="${slideMax}" oninput="${outslide}.value = ${slide}.value">
              <output name="OutputName" id="${outslide}">0</output>
              </form>
              </td>

                <td>${coinBucket.symbol}</td>
               <td>$ ${pricefc}</td>
               <td>${coinBucket.name}</td>
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
  var chartType = document.getElementById("chartType");
  var userChoice = chartType.options[chartType.selectedIndex].value;
  $.getJSON(
    "https://coinlib.io/api/v1/coinlist?key=56a2275998bf3767&page=1&order=rank_asc",
    function (ranklist) {
      var superData = [];
      var superLabel = [];
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
        //console.log(toty);
      }
      //Here we are pushing the data values from each slider to the chart data array
      //We are also calculating the percentage of the total from each slider and
      //pushing this information along with the name to the label array of the chart
      //in order to create the chart legend.
      var u = 0;
      var q = 1;
      while (u < 100) {
        var bliding = "slide" + q;
        if (document.getElementById(bliding).value != 0) {
          var per = Math.floor(
            ((document.getElementById(bliding).value *
              ranklist.coins[u].price) /
              toty) *
              100
          );
          superLabel.push(ranklist.coins[u].name + " % " + per);
          superData.push(
            Math.floor(
              ranklist.coins[u].price *
                document.getElementById(bliding).value *
                100
            ) / 100
          );
          //console.log(per);
        }
        u++;
        q++;
      }
      //Here is where the chart is created based on the data and label arrays created above
      var ctx = document.getElementById("superChart").getContext("2d");

      var chart = new Chart(ctx, {
        // The type of chart we want to create
        type: userChoice,
        // The data for our dataset
        data: {
          labels: superLabel,

          datasets: [
            {
              label: "",
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
          responsive: true,
          maintainAspectRatio: false,
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
      var totPD = Math.floor(totP * 100) / 100;
      var totPDc = totPD.toLocaleString();
      //console.log(totPD);

      document.getElementById("description").innerHTML =
        "Your Total Portfolio Value";
      document.getElementById("totalPortfolio").innerHTML = "$ " + totPDc;
    }
  );
};

//This function defines the reset button functionality for build portfolio
const refreshFunction = () => {
  location.reload();
};
