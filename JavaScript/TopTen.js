//This function populates the top ten list
const tenFunction = () => {
  $.getJSON(
    "https://coinlib.io/api/v1/coinlist?key=56a2275998bf3767&page=1&order=rank_asc",
    function (tenlist) {
      console.log(tenlist);
      var x = 0;
      var y = 1;
      superinfo =
        tenlist.coins[0].symbol +
        "," +
        tenlist.coins[1].symbol +
        "," +
        tenlist.coins[2].symbol +
        "," +
        tenlist.coins[3].symbol +
        "," +
        tenlist.coins[4].symbol +
        "," +
        tenlist.coins[5].symbol +
        "," +
        tenlist.coins[6].symbol +
        "," +
        tenlist.coins[7].symbol +
        "," +
        tenlist.coins[8].symbol +
        "," +
        tenlist.coins[9].symbol;
      console.log(superinfo + "tenFunction");
      //this while loop creates the proper id with x and y variables and grabs the proper values from array
      //and pushes the info to the accordiangit
      while (x < 10) {
        //these variables hold the proper id to correspond with the html accordian main id values
        var coinid = "coin" + y;
        var priceid = "price" + y;
        var mcid = "mc" + y;
        //These variables will hold the id to correspond with the html INSIDE accordian id values
        var delta_24hid = "delta_24hid" + y;
        var symbolid = "symbolid" + y;
        var volume_24hid = "volume_24hid" + y;

        //this variable holds the value and limits it to two decimal places
        var pricedectwo = Math.floor(tenlist.coins[x].price * 100) / 100;
        var mcdectwo = Math.floor(tenlist.coins[x].market_cap * 100) / 100;
        var volumedectwo = Math.floor(tenlist.coins[x].volume_24h * 100) / 100;
        var deltadectwo = Math.floor(tenlist.coins[x].delta_24h * 100) / 100;

        // console.log(coinid, priceid, mcid);
        //This pushes the coin name, current price and current market cap to the accordian
        document.getElementById(coinid).innerHTML =
          y + ".   " + tenlist.coins[x].name;
        document.getElementById(priceid).innerHTML =
          "$" + pricedectwo.toLocaleString();
        document.getElementById(mcid).innerHTML =
          "$" + mcdectwo.toLocaleString();
        //This pushes the symbol, price change, volume to the accordian collapse spots
        document.getElementById(symbolid).innerHTML = tenlist.coins[x].symbol;
        document.getElementById(delta_24hid).innerHTML =
          "%" + deltadectwo.toLocaleString();
        document.getElementById(volume_24hid).innerHTML =
          "$" + volumedectwo.toLocaleString();
        x++;
        y++;
      }
    }
  );
};
