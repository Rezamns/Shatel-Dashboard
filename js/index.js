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

$(document).ready(function() { 
  if(typeof news !== 'undefined' && news.length > 0) {
    var allNews =[];
    
      news.forEach(function(news){
        var newsBox = $('.news-box').clone();
        $(newsBox).removeClass('hidden');
        newsBox.find('.title')[0].innerHTML = news.title || '';
        newsBox.find('.date')[0].innerHTML = news.date || '';
        newsBox.find('.text')[0].innerHTML = news.text || '';
        if(news.url){newsBox.find('.actions').append(' <a href="' + news.url + '"><button class="button news-button" title="ادامه خبرها">ادامه خبر ...</button></a>')}
        newsBox.find('img').attr('src','./upload/images/' + news.img || '');
        allNews.push(newsBox[0]);
        newsBox = null;
      }) ; 
      $(".news-container").append(allNews);
    }
    else {
      $(".news-title").css("display", "none");
    }
  })

