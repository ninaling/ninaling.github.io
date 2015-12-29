$(document).ready(function(){
    $('#next_bit_container').hide();
    
    $('#lets_go_button').click(function(){
        $('#next_bit_container').show();
       $('html, body').animate({
        scrollTop: $("#next_bit_container").offset().top
    }, 800); 
    });
});




