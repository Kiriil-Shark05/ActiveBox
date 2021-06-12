$(function(){

$('.scroll').on('click', function(e){
  $('html,body').stop().animate({ scrollTop: $('#features').offset().top }, 800);
  e.preventDefault();
});

$('.scroll2').on('click', function(e){
  $('html,body').stop().animate({ scrollTop: $('#works').offset().top }, 800);
  e.preventDefault();
});

$('.scroll3').on('click', function(e){
  $('html,body').stop().animate({ scrollTop: $('#team').offset().top }, 800);
  e.preventDefault();
});

$('.scroll4').on('click', function(e){
  $('html,body').stop().animate({ scrollTop: $('#testimonials').offset().top }, 800);
  e.preventDefault();
});


$('.scroll5').on('click', function(e){
  $('html,body').stop().animate({ scrollTop: $('#download').offset().top }, 800);
  e.preventDefault();
});


})
