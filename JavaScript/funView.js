//This Function populates the Coin Info page
getCoinListSort = () => {
  axios
    .get(
      `https://min-api.cryptocompare.com/data/top/mktcapfull?limit=100&tsym=USD`
    )

    .then((response) => {
      let superCurrency = response.data.Data;

      var y = 0;
      let output = "";
      $.each(superCurrency, (index, coinBucket) => {
        //var immy = coinBucket.Data[y].CoinInfo.ImageUrl;
        var cName = coinBucket.CoinInfo.FullName;
        var ticker = coinBucket.CoinInfo.Name;
        var priceN = coinBucket.DISPLAY.USD.PRICE;
        var rating = coinBucket.CoinInfo.Rating.Weiss.Rating;
        var priceChangeToday = coinBucket.DISPLAY.USD.CHANGE24HOUR;
        var highPrice = coinBucket.DISPLAY.USD.HIGH24HOUR;
        var lowPrice = coinBucket.DISPLAY.USD.LOW24HOUR;
        var immy =
          "https://www.cryptocompare.com" + coinBucket.CoinInfo.ImageUrl;
        output += `
       
        
      <div class="col-md-4">
        <div class="flip-card">
          <div class="flip-card-inner">
            <div class="flip-card-front">
                <img src=${immy} alt="Avatar" style="width:300px;height:300px;">
             </div>
            <div class="flip-card-back">
          <h1>${cName}</h1> 
          <p>Symbol: ${ticker}</p> 
          <p>Current Price: ${priceN}</p>
          <p>Price Change (past 24 hours): ${priceChangeToday}</p>
          <p>Today's Highest Price: ${highPrice}</p>
          <p>Today's Lowest Price: ${lowPrice}</p>
          <p>Rating: ${rating} </p>
            </div>
          </div>
        </div>
      </div>
  
   
        `;
        y++;
      });
      $("#superCoinPlace").html(output);
    });
};
