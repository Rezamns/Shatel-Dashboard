mybutton = document.getElementsByClassName("myBtn");
window.onscroll = function() {scrollFunction()};

function scrollFunction() {
  if (document.body.scrollTop > 20 || document.documentElement.scrollTop > 20) {
    mybutton[0].style.opacity = "1";
} else {
    mybutton[0].style.opacity = "0";
}}

function topFunction() {
  document.body.scrollTop = 0;
  document.documentElement.scrollTop = 0;
}

fetch("https://dashboard4497.w3spaces.com/Dashboard-data.json")
   .then(function(resp) {
        return resp.json();
    })
    .then(function(data) {

      //خبر 1
      document.getElementById("title-1").innerHTML = data.title1;
      document.getElementById("date-1").innerHTML = data.date1;
      document.getElementById("news-1").innerHTML = data.news1;
    //document.getElementById("img-1").innerHTML = data.img1;


      //خبر 2
      document.getElementById("title-2").innerHTML = data.title2;
      document.getElementById("date-2").innerHTML = data.date2;
      document.getElementById("news-2").innerHTML = data.news2;
    //document.getElementById("img-2").innerHTML = data.img2;

      
      //خبر 3
      document.getElementById("title-3").innerHTML = data.title3;
      document.getElementById("date-3").innerHTML = data.date3;
      document.getElementById("news-3").innerHTML = data.news3;
    //document.getElementById("img-3").innerHTML = data.img3;

    });

