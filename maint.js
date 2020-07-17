//This uses the global api call to receive general global information for marqee at bottom of home page
$.getJSON("https://coinlib.io/api/v1/global?key=56a2275998bf3767", function (
  stuff
) {
  //console.log(stuff);

  var numberofcoins = stuff.coins;
  var tmcap = Math.floor(stuff.total_market_cap);
  var tv_24 = Math.floor(stuff.total_volume_24h);

  $(".tmc").append(
    "$" +
      tmcap.toLocaleString() +
      "  is the current value of the entire digital currency market.  The current 24 hour volume of the market is: $" +
      tv_24.toLocaleString()
  );
  //$('.tv_24').append("The current 24 hour volume of the market is: $" + tv_24.toLocaleString());
});

//This function below 'detailsFunction' is currently not used
//various difficulties here
const detailsFunction = () => {
  console.log(superinfo);
  $.getJSON(
    "https://min-api.cryptocompare.com/data/pricemultifull?fsyms=" +
      superinfo +
      "&tsyms=USD",
    function (detailinfo) {
      console.log(detailinfo);
      var x = 0;
      var y = 1;
      while (x < 1) {
        var imgid = "imgid" + y;
        var cpd = "cpd" + y;
        var cph = "cph" + y;
        var hday = "hday" + y;
        var lday = "lday" + y;

        // document.getElementById(imgid).innerHRML = detailinfo.DISPLAY.

        x++;
        y++;
      }
    }
  );
};

//This function below 'myFunction' is currently not used
//This function uses the coinlist api call to create the top ten list
const myFunction = () => {
  $.getJSON(
    "https://coinlib.io/api/v1/coinlist?key=56a2275998bf3767&page=1&order=rank_asc",
    function (ranklist) {
      //console.log(ranklist);

      var first = ranklist.coins[0].name;
      var second = ranklist.coins[1].name;
      var third = ranklist.coins[2].name;
      var fourth = ranklist.coins[3].name;
      var fifth = ranklist.coins[4].name;
      var sixth = ranklist.coins[5].name;
      var seventh = ranklist.coins[6].name;
      var eighth = ranklist.coins[7].name;
      var ninth = ranklist.coins[8].name;
      var tenth = ranklist.coins[9].name;

      $(".CTitleOne").append("Coin Name");
      $(".first").append("1. " + first);
      $(".second").append("2. " + second);
      $(".third").append("3. " + third);
      $(".fourth").append("4. " + fourth);
      $(".fifth").append("5. " + fifth);
      $(".sixth").append("6. " + sixth);
      $(".seventh").append("7. " + seventh);
      $(".eighth").append("8. " + eighth);
      $(".ninth").append("9. " + ninth);
      $(".tenth").append("10. " + tenth);

      var firstM = Math.floor(ranklist.coins[0].market_cap);
      var secondM = Math.floor(ranklist.coins[1].market_cap);
      var thirdM = Math.floor(ranklist.coins[2].market_cap);
      var fourthM = Math.floor(ranklist.coins[3].market_cap);
      var fifthM = Math.floor(ranklist.coins[4].market_cap);
      var sixthM = Math.floor(ranklist.coins[5].market_cap);
      var seventhM = Math.floor(ranklist.coins[6].market_cap);
      var eighthM = Math.floor(ranklist.coins[7].market_cap);
      var ninthM = Math.floor(ranklist.coins[8].market_cap);
      var tenthM = Math.floor(ranklist.coins[9].market_cap);

      $(".CTitleTwo").append("Market Cap");
      $(".firstM").append("$ " + firstM.toLocaleString());
      $(".secondM").append("$ " + secondM.toLocaleString());
      $(".thirdM").append("$ " + thirdM.toLocaleString());
      $(".fourthM").append("$ " + fourthM.toLocaleString());
      $(".fifthM").append("$ " + fifthM.toLocaleString());
      $(".sixthM").append("$ " + sixthM.toLocaleString());
      $(".seventhM").append("$ " + seventhM.toLocaleString());
      $(".eighthM").append("$ " + eighthM.toLocaleString());
      $(".ninthM").append("$ " + ninthM.toLocaleString());
      $(".tenthM").append("$ " + tenthM.toLocaleString());
    }
  );
};

//This function below 'myBit' is currently not used
//This function uses the coin api call to get some information on a single coin
const myBit = () => {
  $.getJSON(
    "https://coinlib.io/api/v1/coin?key=56a2275998bf3767&page=1&symbol=BCH",
    function (coininfo) {
      console.log(coininfo);

      var delta_24h = coininfo.delta_24h;
      var mCap = Math.floor(coininfo.market_cap);
      var price = Math.round(coininfo.price * 100) / 100;
      var name = coininfo.name;

      $(".CTitleOne").append(name);
      $(".first").append("Current price is " + price);
      $(".second").append("24h price change is " + delta_24h + "%");
      $(".third").append("Market cap is " + mCap);
    }
  );
};

//declaring global variable: this was built to gather a string to be used in another function, another function (detailsFUnction) that is not working yet
var superinfo;
