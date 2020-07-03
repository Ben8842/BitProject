
$.getJSON("https://coinlib.io/api/v1/global?key=56a2275998bf3767", function(stuff){
    console.log(stuff);

    var numberofcoins = stuff.coins;
    var tmcap = Math.floor(stuff.total_market_cap);
    var tv_24 = Math.floor(stuff.total_volume_24h);

    $('.tmc').append("The total market cap of all currencies is currently: $" + tmcap.toLocaleString());
    $('.tv_24').append("The current 24 hour volume of the market is: $" + tv_24.toLocaleString());

});



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
