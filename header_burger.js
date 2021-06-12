$(document).ready(function() {


    $('.header_burger').click(function(event) {
            $('.header_burger,.header-block-item').toggleClass('active-burger');
            $('body').toggleClass('lock');
          });


});
