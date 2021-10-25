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