//This is a function that uses axios.  It populates the Top One Hundred page
getCoinList = () => {
  axios
    .get(
      `https://coinlib.io/api/v1/coinlist?key=56a2275998bf3767&page=1&order=rank_asc`
    )

    .then((response) => {
      //var x = 0;
      //var y = 1;
      //console.log(response.data);
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
        output += `
          <tr>
          <th scope="row">${y}</th>
          <td>${coinBucket.name}</td>
          <td>$ ${pricefc}</td>
          <td>$ ${market_capfc}</td>
          </tr>
          `;
      });
      /*let output = `
        <tr>
        <th scope="row">index</th>
        <td>${response.data.coins[0].name}</td>
        <td>${response.data.coins[0].price}</td>
        <td>${response.data.coins[0].market_cap}</td>
        </tr>
          `;*/
      $("#superCoinPlace").html(output);
    });
  /*
      .catch(error => {
        console.log(error);
      });*/
};
