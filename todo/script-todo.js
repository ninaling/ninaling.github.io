$(document).ready(function(){
    $('.modify').hide();
    $('.item').hover(
        function(){
            $('.modify').show(); 
        
        },function(){
            $('.modify').hide();
            
        });
    $('.flag').click(function(){
        if ($(this).css('color')=='black') {console.log('the star is black');}
        if ($(this).css('color')=='red') {console.log('the star is red');}
        $(this).css('color', 'red'); 
    });
});