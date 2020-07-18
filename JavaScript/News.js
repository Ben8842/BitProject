//This function calls the compareCrypto API for the latest news and sends it to the news page
const myNews = () => {
  var x = 0;
  $.getJSON(
    "https://min-api.cryptocompare.com/data/v2/news/?lang=EN",
    function (newsy) {
      console.log(newsy);

      var icon1 = newsy.Data[0].imageurl;
      var title1 = newsy.Data[0].title;
      var nurl1 = newsy.Data[0].url;
      var body1 = newsy.Data[0].body;

      $(".icon1").attr("src", icon1);
      $(".newsTitle1").append(title1);
      $(".newsURL1").append(nurl1);
      $(".body1").append(body1);

      var icon2 = newsy.Data[1].imageurl;
      var title2 = newsy.Data[1].title;
      var nurl2 = newsy.Data[1].url;
      var body2 = newsy.Data[1].body;

      $(".icon2").attr("src", icon2);
      $(".newsTitle2").append(title2);
      $(".newsURL2").append(nurl2);
      $(".body2").append(body2);

      var icon3 = newsy.Data[3].imageurl;
      var title3 = newsy.Data[3].title;
      var nurl3 = newsy.Data[3].url;
      var body3 = newsy.Data[3].body;

      $(".icon3").attr("src", icon3);
      $(".newsTitle3").append(title3);
      $(".newsURL3").append(nurl3);
      $(".body3").append(body3);
    }
  );
};
