//This Function is necessary to trigger the sortable list for the Coin List page
//I cleverly wrapped this into its own function so that the sortable table can be built...
//AFTER the page populates the data from the API.  Without using this strategy I have found the sorting features
//to be broken.
function winthegame() {
  $(document).ready(function () {
    $("#table_id").DataTable();
  });
}

//This Function populates the Coin List page
getCoinListSort = () => {
  axios
    .get(
      `https://coinlib.io/api/v1/coinlist?key=56a2275998bf3767&page=1&order=rank_asc`
    )

    .then((response) => {
      console.log(response.data);
      // console.log(response.data.coins[0]);
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
        output += `
            <tr>
            <th scope="row">${y}</th>
            <td>${coinBucket.name}</td>
            <td>${coinBucket.symbol}</td>
            <td>$ ${pricefc}</td>
            <td>% ${delta_24hfc}</td>
            <td>$ ${market_capfc}</td>
            <td>$ ${volume_24hfc}</td>
            </tr>
            `;
      });

      $("#superCoinPlace").html(output);
      //Here I am calling the function to trigger the sorting of the data tables.  I put this here so that the sorting features would hit
      //the page after the API calls have done their thing and the html is already built.
      winthegame();
    });
};
