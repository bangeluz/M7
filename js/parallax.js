$(window).scroll(function() {
  var wScroll = $(this).scrollTop();
  if(wScroll > $('.skills').offset().top - 500) {
    $('.skills .lvl h3').each(function(i) {
      setTimeout(function(){
        $('.skills .lvl h3 +').eq(i).addClass('animation-pro');
      }, 350 * (i+1));
    });
  }
});
