//sorting function for the Cold Coins page
//This is very similar to the hotdisplay function, instead of b-a we do a-b in the compare function
const coldDisplay = () => {
  $.getJSON(
    "https://coinlib.io/api/v1/coinlist?key=56a2275998bf3767&page=1&order=rank_asc",
    function (hots) {
      console.log(hots);

      //This will sort the JSON object by category delta_24, and return a new object 'bottle' which I will use to create the hot list.
      bottle = hots.coins.sort(function (a, b) {
        return parseFloat(a.delta_24h) - parseFloat(b.delta_24h);
      });
      console.log(bottle);

      //this while loop will create the proper id with x and y variables and grabs the proper values from array
      //and push the info to the table.
      var x = 0;
      var y = 1;
      while (x < 10) {
        //these variables hold the proper id to correspond with the html table id values
        var coinid = "coin" + y;
        var priceid = "price" + y;
        var deltaid = "delta" + y;
        //this variable holds the value and limits it to two decimal places
        var pricedectwo = Math.floor(bottle[x].price * 100) / 100;
        var deltadectwo = Math.floor(bottle[x].delta_24h * 100) / 100;

        // console.log(coinid, priceid, mcid);
        //This pushes the coin name, current price and 24h price change (%) to the table
        document.getElementById(coinid).innerHTML = y + ".   " + bottle[x].name;
        document.getElementById(priceid).innerHTML =
          "$" + pricedectwo.toLocaleString();
        document.getElementById(deltaid).innerHTML =
          "% " + deltadectwo.toLocaleString();
        x++;
        y++;
      }
    }
  );
};
