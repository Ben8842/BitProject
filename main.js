//This uses the global api call to receive general global information for header
$.getJSON("https://coinlib.io/api/v1/global?key=56a2275998bf3767", function(stuff){
    //console.log(stuff);

    var numberofcoins = stuff.coins;
    var tmcap = Math.floor(stuff.total_market_cap);
    var tv_24 = Math.floor(stuff.total_volume_24h);

    $('.tmc').append("The total market cap of all currencies is currently: $" + tmcap.toLocaleString());
    $('.tv_24').append("The current 24 hour volume of the market is: $" + tv_24.toLocaleString());

});


//This function uses the coinlist api call to create the top ten list
function myFunction() {

   $.getJSON("https://coinlib.io/api/v1/coinlist?key=56a2275998bf3767&page=1&order=rank_asc", function(ranklist){
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
   
   $('.CTitleOne').append("Coin Name");
   $('.first').append("1. " + first);
   $('.second').append("2. " + second);
   $('.third').append("3. " + third);
   $('.fourth').append("4. " + fourth);
   $('.fifth').append("5. " + fifth);
   $('.sixth').append("6. " + sixth);
   $('.seventh').append("7. " + seventh);
   $('.eighth').append("8. " + eighth);
   $('.ninth').append("9. " + ninth);
   $('.tenth').append("10. " + tenth);

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
    
   $('.CTitleTwo').append("Market Cap");
   $('.firstM').append("$ " + firstM.toLocaleString());
   $('.secondM').append("$ " + secondM.toLocaleString());
   $('.thirdM').append("$ " + thirdM.toLocaleString());
   $('.fourthM').append("$ " + fourthM.toLocaleString());
   $('.fifthM').append("$ " + fifthM.toLocaleString());
   $('.sixthM').append("$ " + sixthM.toLocaleString());
   $('.seventhM').append("$ " + seventhM.toLocaleString());
   $('.eighthM').append("$ " + eighthM.toLocaleString());
   $('.ninthM').append("$ " + ninthM.toLocaleString());
   $('.tenthM').append("$ " + tenthM.toLocaleString());



   });
}

//This function creates a doughnut chart based on the coinlist api top ten information
function myVis() {

    $.getJSON("https://coinlib.io/api/v1/coinlist?key=56a2275998bf3767&page=1&order=rank_asc", function(ranklist){

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

   var ctx = document.getElementById('myChart').getContext('2d');
   var chart = new Chart(ctx, {
    // The type of chart we want to create
    type: 'doughnut',

    // The data for our dataset
    data: {
        labels: [first, second, third, fourth, fifth, sixth, seventh, eighth, ninth, tenth],
        datasets: [{
            label: 'My First dataset',
            backgroundColor: ['rgb(255, 106, 0)', 'rgb(253, 250, 54)',
            'rgb(40, 165, 230)',    
            'rgb(40, 250, 54)',
            'rgb(189, 165, 150)',
            'rgb(23, 250, 244)',
            'rgb(248, 2, 12)',
            'rgb(229, 132, 201)',
            'rgb(23, 130, 12)',
            'rgb(17, 132, 201)'],
            borderColor: 'rgb(25, 99, 132)',
            data: [firstM, secondM, thirdM, fourthM, fifthM, sixthM, seventhM, eighthM, ninthM, tenthM]
        }]
    },

    // Configuration options go here
    options: {}
});

});
}

//This function uses the coin api call to get some information on a single coin
function myBit() {
    $.getJSON("https://coinlib.io/api/v1/coin?key=56a2275998bf3767&page=1&symbol=BCH", function(coininfo){
        console.log(coininfo);
     
        var delta_24h = coininfo.delta_24h;
        var mCap = Math.floor(coininfo.market_cap);
        var price = Math.round(coininfo.price*100) / 100;
        var name = coininfo.name;

        $('.CTitleOne').append(name);
        $('.first').append("Current price is " + price);
        $('.second').append("24h price change is " + delta_24h + "%");
        $('.third').append("Market cap is " + mCap);
        
    });

}

//This function is supposed to take input from the build page and create portfolio
function myBuildFunction() {

    //here we are grabbing each input (10 of them)
    var amount1 = "";
    var amount1 = document.getElementById("field1").value
    var amount2 = "";
    var amount2 = document.getElementById("field2").value
    var amount3 = "";
    var amount3 = document.getElementById("field3").value
    var amount4 = "";
    var amount4 = document.getElementById("field4").value
    var amount5 = "";
    var amount5 = document.getElementById("field5").value
    var amount6 = "";
    var amount6 = document.getElementById("field6").value
    var amount7 = "";
    var amount7 = document.getElementById("field7").value
    var amount8 = "";
    var amount8 = document.getElementById("field8").value
    var amount9 = "";
    var amount9 = document.getElementById("field9").value
    var amount10 = "";
    var amount10 = document.getElementById("field10").value
    
    
   
//Here is the (coinlist) api call to get the price of each coin
    $.getJSON("https://coinlib.io/api/v1/coinlist?key=56a2275998bf3767&page=1&order=rank_asc", function(portlist){
        console.log(portlist);

        var first = portlist.coins[0].price;
        var second = portlist.coins[1].price;
        var third = portlist.coins[2].price;
        var fourth = portlist.coins[3].price;
        var fifth = portlist.coins[4].price;
        var sixth = portlist.coins[5].price;
        var seventh = portlist.coins[6].price;
        var eighth = portlist.coins[7].price;
        var ninth = portlist.coins[8].price;
        var tenth = portlist.coins[9].price;

        //Here we are multiplying the input number times the current price of the coin
        var v1 = Math.floor(first * amount1 * 100) / 100;
        var v2 = Math.floor(second * amount2 * 100) / 100;
        var v3 = Math.floor(third * amount3 * 100) / 100;
        var v4 = Math.floor(fourth * amount4 * 100) / 100;
        var v5 = Math.floor(fifth * amount5 * 100) / 100;
        var v6 = Math.floor(sixth * amount6 * 100) / 100;
        var v7 = Math.floor(seventh * amount7 * 100) / 100;
        var v8 = Math.floor(eighth * amount8 * 100) / 100;
        var v9 = Math.floor(ninth * amount9 * 100) / 100;
        var v10 = Math.floor(tenth * amount10 * 100) / 100;

        //Here we are adding each of the inputs*current price values to get a total
        var totalC = v1 + v2 + v3 + v4 + v5 + v6 + v7 + v8 + v9 + v10;

        
        $('.calculation').append("Total Portfolio value = $" + totalC.toLocaleString());

        //Here is where we are building the chart
        var ctx = document.getElementById('buildChart').getContext('2d');
        var chart = new Chart(ctx, {
         // The type of chart we want to create
         type: 'doughnut',
     
         // The data for our dataset
         data: {
             labels: ["Bitcoin", "Ethereum", "XRP", "Tether", "Bitcoin Cash", "Bitcoin SV", "Litecoin", "Cardano", "Binance Coin", "EOS"],
             datasets: [{
                 label: 'Value',
                 backgroundColor: ['rgb(255, 106, 0)', 'rgb(253, 250, 54)',
                 'rgb(40, 165, 230)',    
                 'rgb(40, 250, 54)',
                 'rgb(189, 165, 150)',
                 'rgb(23, 250, 244)',
                 'rgb(248, 2, 12)',
                 'rgb(229, 132, 201)',
                 'rgb(23, 130, 12)',
                 'rgb(17, 132, 201)'],
                 borderColor: 'rgb(25, 99, 132)',
                 data: [v1, v2, v3, v4, v5, v6, v7, v8, v9, v10]
             }]
         },
     
         // Configuration options go here
         options: {}
        });


    });

    //$('.result').append(amount1 + " Bitcoins in your portfolio!");


}