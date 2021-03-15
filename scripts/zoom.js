$(document).ready(function(){
    $('.pelicula img, h4').hover(function(){
        $(this).addClass('transition');
        
    }, function() {
        $(this).removeClass('transition');
      
    });
});

