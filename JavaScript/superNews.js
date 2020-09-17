/*
$(document).ready(() => {
  $("#searchForm").on("submit", (event) => {
    let searchText = $("#searchText").val();
    createLearn(searchText);
    event.preventDefault();
  });
});

coinSelected = (id) => {
  $.getJSON(
    "https://api.coingecko.com/api/v3/coins/markets?vs_currency=usd&order=market_cap_desc&per_page=100&page=1&sparkline=false",
    function (listy) {
      var idNEW = listy[id].id;
      sessionStorage.setItem("coinName", idNEW);
      window.location = "NewLearn.html";
      return false;
    }
  );
};

  //This Function is necessary to trigger the sortable list for the Coin List page
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
        `https://api.coingecko.com/api/v3/coins/markets?vs_currency=usd&order=market_cap_desc&per_page=100&page=1&sparkline=false`
      )
  
      .then((response) => {
        // console.log(response);
        let output = "";
        let superCurrency = response.data;
        var y = 0;
        var x = 0;
  
        $.each(superCurrency, (index, coinBucket) => {
          y++;
          var pricef = Math.floor(coinBucket.current_price * 100) / 100;
          var market_capf = Math.floor(coinBucket.market_cap * 100) / 100;
          var pricefc = pricef.toLocaleString();
          var market_capfc = market_capf.toLocaleString();
          var delta = parseInt(coinBucket.price_change_percentage_24h);
          var delta_24hf =
            Math.floor(coinBucket.price_change_percentage_24h * 100) / 100;
          var volume_24hf = Math.floor(coinBucket.total_volume * 100) / 100;
          var delta_24hfc = delta_24hf.toLocaleString();
          var volume_24hfc = volume_24hf.toLocaleString();
  
          if (delta_24hfc.charAt(0) == "-") {
            output += `
                <tr>
                <th scope="row">${y}    </th>
               
                <td>  <button class="button"  id="wbutton" onclick="coinSelected(${x})"><img src="${coinBucket.image}" alt="help" style="width:40px;height:40px;">     ${coinBucket.name}</button></td>
                <td>${coinBucket.symbol}</td>
                <td>$ ${pricefc}</td>
                <td style="background-color:red; color: white" id="${x}">% ${delta_24hfc}</td>
                <td>$ ${market_capfc}</td>
                <td>$ ${volume_24hfc}</td>
                </tr>
                `;
          } else {
            output += `
                <tr>
                <th scope="row">${y}   </th>
                <td>  <button class="button" id="wbutton" onClick="coinSelected(${x})"> <img src="${coinBucket.image}" alt="help" style="width:40px;height:40px;">      ${coinBucket.name}</button></td>
                <td>${coinBucket.symbol}</td>
                <td>$ ${pricefc}</td>
                <td style="background-color: green; color: white" id="${y}">% ${delta_24hfc}</td>
                <td>$ ${market_capfc}</td>
                <td>$ ${volume_24hfc}</td>
                </tr>
                `;
          }
          x++;
        });
  
        $("#superCoinPlace").html(output);
        //Here I am calling the function to trigger the sorting of the data tables.  I put this here so that the sorting features would hit
        //the page after the API calls have done their thing and the html is already built.
        winthegame();
      });
  };
  */
/*
  createLearn = () => {
    let coinyId = sessionStorage.getItem("coinName");
  
    axios
      .get(`https://api.coingecko.com/api/v3/coins/${coinyId}`)
      .then((response) => {
        //console.log(response);
        let education = response.data.description.en;
        document.getElementById("priceNow").innerHTML =
          "Current price is $" +
          response.data.market_data.current_price.usd.toLocaleString();
        let output = `
            <div class="row p-2">
            <div class="col-md-4">
            <img src="${response.data.image.large}" class="thumbnail">
         </div>
              <div class="col-md">
                <h2>${response.data.name}</h2>
                <ul class="list-group">
                  <li class="list-group-item"> ${education}</li>
                  
                </ul>
              </div>
            </div>
            
               
          `;
        $("#superCoinLearn").html(output);
      })
      .catch((error) => {
        console.log(error);
      });
  };
  */

createNews = () => {
  $.getJSON(
    "https://cryptocontrol.io/api/v1/public/reddit/coin/bitcoin?key=75f00c9a03737a523b4b10f283a84d54",
    function (newsAPI) {
      console.log(newsAPI);
    }
  );
};

/*
create3Learn = () => {
  let coinyId = sessionStorage.getItem("coinName");

  var e = document.getElementById("chartType");

  var timeRange = e.options[e.selectedIndex].text;
  var actualTime = "";
  if (timeRange == "24 Hour Chart") {
    actualTime = "1";
  }
  if (timeRange == "7 Day Chart") {
    actualTime = "7";
  }
  if (timeRange == "14 Day Chart") {
    actualTime = "14";
  }
  if (timeRange == "30 Day Chart") {
    actualTime = "30";
  }
  if (timeRange == "100 Day Chart") {
    actualTime = "100";
  }
  if (timeRange == "250 Day Chart") {
    actualTime = "250";
  }
  if (timeRange == "1000 Day Chart") {
    actualTime = "1000";
  }
  if (timeRange == "Max Day Chart") {
    actualTime = "max";
  }

  console.log(actualTime);
  $("#superChart").remove();
  $("#super2Chart").remove();
  $("iframe.chartjs-hidden-iframe").remove();
  $("#HereItIs").append(
    '<canvas id="super2Chart" style="height: 400px;" class="table">><canvas>'
  );

  $.getJSON(
    "https://api.coingecko.com/api/v3/coins/" +
      coinyId +
      "/market_chart?vs_currency=usd&days=" +
      actualTime +
      '"',

    function (chartData) {
      //console.log(chartData.prices[0][1]);
      var realnums = [];
      var realdates = [];
      for (x = 0; x < chartData.prices.length; x++) {
        realnums.push(chartData.prices[x][1]);
        const unixtime = chartData.prices[x][0];
        const dateObject = new Date(unixtime);
        const humanDateFormat = dateObject.toLocaleString();
        realdates.push(humanDateFormat);
      }
      console.log(actualTime);
      var ctx = document.getElementById("super2Chart").getContext("2d");

      var myLineChart = new Chart(ctx, {
        type: "line",
        data: {
          labels: realdates,
          datasets: [
            {
              label: "Price in USD of " + coinyId + " for the past 100 days",
              data: realnums,
              backgroundColor: ["rgba(0, 128, 0, 0.2)"],
              borderColor: ["rgba(0, 255, 0, 1)"],
              borderWidth: 2,
            },
          ],
        },
        options: {
          scales: {
            yAxes: [
              {
                ticks: {
                  beginAtZero: false,
                },
              },
            ],
          },
        },
      });
    }
  );
};
*/
