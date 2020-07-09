//This uses the global api call to receive general global information for header
$.getJSON("https://coinlib.io/api/v1/global?key=56a2275998bf3767", function(stuff){
    //console.log(stuff);

    var numberofcoins = stuff.coins;
    var tmcap = Math.floor(stuff.total_market_cap);
    var tv_24 = Math.floor(stuff.total_volume_24h);

    $('.tmc').append("$" + tmcap.toLocaleString() + "  is the current value of the entire digital currency market.  The current 24 hour volume of the market is: $" + tv_24.toLocaleString());
    //$('.tv_24').append("The current 24 hour volume of the market is: $" + tv_24.toLocaleString());
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

//This function takes input from the build page and creates portfolio
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
    //Here we are grabbing the drop down chart value
    var chartType = document.getElementById("chartType");
    var userChoice = chartType.options[chartType.selectedIndex].value;
    console.log(chartType);
    console.log(userChoice);
    
   
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
         type: userChoice,
     
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
         options: {
         }
        });
        /*  not sure how to get this addData function to work
        function addData(){
            console.log("21");
            buildChart.data.datasets[3].data[0] = 20;
          
          myLineChart.update();
        }*/
    });

    //$('.result').append(amount1 + " Bitcoins in your portfolio!");




}

//This function calls the compareCrypto API for the latest news and sends it to the news page
function myNews() {
    var x = 0;
    $.getJSON("https://min-api.cryptocompare.com/data/v2/news/?lang=EN", function(newsy){
    console.log(newsy);

    var icon1= newsy.Data[0].imageurl;
    var title1= newsy.Data[0].title;
    var nurl1= newsy.Data[0].url;
    var body1= newsy.Data[0].body;

    $('.icon1').attr('src', icon1);
    $('.newsTitle1').append(title1);
    $('.newsURL1').append(nurl1);
    $('.body1').append(body1);

    

    var icon2= newsy.Data[1].imageurl;
    var title2= newsy.Data[1].title;
    var nurl2= newsy.Data[1].url;
    var body2= newsy.Data[1].body;

    $('.icon2').attr('src', icon2);
    $('.newsTitle2').append(title2);
    $('.newsURL2').append(nurl2);
    $('.body2').append(body2);

    var icon3= newsy.Data[3].imageurl;
    var title3= newsy.Data[3].title;
    var nurl3= newsy.Data[3].url;
    var body3= newsy.Data[3].body;

    $('.icon3').attr('src', icon3);
    $('.newsTitle3').append(title3);
    $('.newsURL3').append(nurl3);
    $('.body3').append(body3);

    
});  
}

//declaring global variable
var superinfo;

//This function populates the top ten list
function tenFunction() {
    $.getJSON("https://coinlib.io/api/v1/coinlist?key=56a2275998bf3767&page=1&order=rank_asc", function(tenlist){
      console.log(tenlist);
      var x = 0;
      var y = 1;
      superinfo = tenlist.coins[0].symbol + "," + tenlist.coins[1].symbol + "," + tenlist.coins[2].symbol + "," + tenlist.coins[3].symbol + "," + tenlist.coins[4].symbol + "," + tenlist.coins[5].symbol + "," + tenlist.coins[6].symbol + "," + tenlist.coins[7].symbol + "," + tenlist.coins[8].symbol + "," + tenlist.coins[9].symbol;
      console.log(superinfo + "tenFunction");
      //this while loop creates the proper id with x and y variables and grabs the proper values from array 
      //and pushes the info to the accordiangit
     while( x < 10) {
         //these variables hold the proper id to correspond with the html accordian id values
         var coinid = "coin" + y;
         var priceid = "price" + y;
         var mcid = "mc" + y;
         //this variable holds the value and limits it to two decimal places
         var pricedectwo = Math.floor(tenlist.coins[x].price * 100) / 100;
         var mcdectwo = Math.floor(tenlist.coins[x].market_cap * 100) / 100;

        // console.log(coinid, priceid, mcid);
        //This pushes the coin name, current price and current market cap to the accordian
         document.getElementById(coinid).innerHTML = y + ".   " + tenlist.coins[x].name;
         document.getElementById(priceid).innerHTML = "$" + pricedectwo.toLocaleString();
         document.getElementById(mcid).innerHTML = "$" + mcdectwo.toLocaleString();
          x++; 
          y++;
    }
    });
}

//various difficulties here
function detailsFunction(){
    console.log(superinfo);
    $.getJSON("https://min-api.cryptocompare.com/data/pricemultifull?fsyms=" + superinfo + "&tsyms=USD", function(detailinfo){
        console.log(detailinfo);
        var x = 0;
        var y = 1;
        while( x < 1) {
            var imgid = "imgid" + y;
            var cpd = "cpd" + y;
            var cph = "cph" + y;
            var hday = "hday" + y;
            var lday = "lday" + y;

           // document.getElementById(imgid).innerHRML = detailinfo.DISPLAY.

            x++;
            y++;
        }


    });
}

//sorting function for the Hot Coins page
function hotDisplay() {
    $.getJSON("https://coinlib.io/api/v1/coinlist?key=56a2275998bf3767&page=1&order=rank_asc", function(hots){
        console.log(hots);

    //This will sort the JSON object by category delta_24, and return a new object 'viking' which I will use to create the hot list.  
        viking = hots.coins.sort(function(a, b) {
            return parseFloat(b.delta_24h) - parseFloat(a.delta_24h);
        });
        console.log(viking)
        
        //this while loop will create the proper id with x and y variables and grabs the proper values from array 
        //and push the info to the table.
        var x = 0;
        var y = 1;
     while( x < 10) {
        //these variables hold the proper id to correspond with the html table id values
        var coinid = "coin" + y;
        var priceid = "price" + y;
        var deltaid = "delta" + y;
        //this variable holds the value and limits it to two decimal places
        var pricedectwo = Math.floor(viking[x].price * 100) / 100;
        var deltadectwo = Math.floor(viking[x].delta_24h * 100) / 100;

       // console.log(coinid, priceid, mcid);
       //This pushes the coin name, current price and 24h price change (%) to the table
        document.getElementById(coinid).innerHTML = y + ".   " + viking[x].name;
        document.getElementById(priceid).innerHTML = "$" + pricedectwo.toLocaleString();
        document.getElementById(deltaid).innerHTML = "% " + deltadectwo.toLocaleString();
         x++; 
         y++;
   }
      
    });
}

//sorting function for the Cold Coins page
//This is very similar to the hotdisplay function, instead of b-a we do a-b in the compare function
function coldDisplay() {
    $.getJSON("https://coinlib.io/api/v1/coinlist?key=56a2275998bf3767&page=1&order=rank_asc", function(hots){
        console.log(hots);

    //This will sort the JSON object by category delta_24, and return a new object 'viking' which I will use to create the hot list.  
        viking = hots.coins.sort(function(a, b) {
            return parseFloat(a.delta_24h) - parseFloat(b.delta_24h);
        });
        console.log(viking)
        
        //this while loop will create the proper id with x and y variables and grabs the proper values from array 
        //and push the info to the table.
        var x = 0;
        var y = 1;
     while( x < 10) {
        //these variables hold the proper id to correspond with the html table id values
        var coinid = "coin" + y;
        var priceid = "price" + y;
        var deltaid = "delta" + y;
        //this variable holds the value and limits it to two decimal places
        var pricedectwo = Math.floor(viking[x].price * 100) / 100;
        var deltadectwo = Math.floor(viking[x].delta_24h * 100) / 100;

       // console.log(coinid, priceid, mcid);
       //This pushes the coin name, current price and 24h price change (%) to the table
        document.getElementById(coinid).innerHTML = y + ".   " + viking[x].name;
        document.getElementById(priceid).innerHTML = "$" + pricedectwo.toLocaleString();
        document.getElementById(deltaid).innerHTML = "% " + deltadectwo.toLocaleString();
         x++; 
         y++;
}

});
}

//This function grabs the current slider value and displays it on the build portfolio page
function displaySlideValue() {
  var slider1 = document.getElementById("field1");
  var output1 = document.getElementById("demo1");
  output1.innerHTML = slider1.value;

  slider1.oninput = function() {
  output1.innerHTML = this.value;
  }

  var slider2 = document.getElementById("field2");
  var output2 = document.getElementById("demo2");
  output2.innerHTML = slider2.value;

  slider2.oninput = function() {
  output2.innerHTML = this.value;
  }

  var slider3 = document.getElementById("field3");
  var output3 = document.getElementById("demo3");
  output3.innerHTML = slider3.value;

  slider3.oninput = function() {
  output3.innerHTML = this.value;
  }

  var slider4 = document.getElementById("field4");
  var output4 = document.getElementById("demo4");
  output4.innerHTML = slider4.value;

  slider4.oninput = function() {
  output4.innerHTML = this.value;
  }

  var slider5 = document.getElementById("field5");
  var output5 = document.getElementById("demo5");
  output5.innerHTML = slider5.value;

  slider5.oninput = function() {
  output5.innerHTML = this.value;
  }

  var slider6 = document.getElementById("field6");
  var output6 = document.getElementById("demo6");
  output6.innerHTML = slider6.value;

  slider6.oninput = function() {
  output6.innerHTML = this.value;
  }

  var slider7 = document.getElementById("field7");
  var output7 = document.getElementById("demo7");
  output7.innerHTML = slider7.value;

  slider7.oninput = function() {
  output7.innerHTML = this.value;
  }

  var slider8 = document.getElementById("field8");
  var output8 = document.getElementById("demo8");
  output8.innerHTML = slider8.value;

  slider8.oninput = function() {
  output8.innerHTML = this.value;
  }

  var slider9 = document.getElementById("field9");
  var output9 = document.getElementById("demo9");
  output9.innerHTML = slider9.value;

  slider9.oninput = function() {
  output9.innerHTML = this.value;
  }

  var slider10 = document.getElementById("field10");
  var output10 = document.getElementById("demo10");
  output10.innerHTML = slider10.value;

  slider10.oninput = function() {
  output10.innerHTML = this.value;
  }


}

//This function defines the reset button functionality for build portfolio
function refreshFunction() {
    location.reload();
}

