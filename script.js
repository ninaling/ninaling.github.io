$(document).ready(function(){
    
    $('#left_prompt').hide();
    setTimeout(function(){
        $('#left_prompt').fadeIn(300);
        $('#left_prompt').animate({ 
            'right':'15vw'
        }, 600);
        $('#left_prompt').fadeOut(300);
    }, 300);
    

    $(window).on('scroll', function() {
        $(this).scrollLeft(0); //sets left scroll to 0px
    });
    
    $(window).on( "swipe", function() {
        $('#circuit').animate({
            'margin-right':'12px'
        }, 100)
        setTimeout(function() {
            $('#circuit').animate({
                'margin-right':'0px'
            }, 100)
          }, 5000)
    } );
    
    $('#circuit').mouseenter(function(){
        $(this).animate({
            'margin-right':'12px'
        }, 100)
    });
    
    $('#circuit').mouseleave(function(){
        $(this).animate({
            'margin-right':'0px'
        }, 100)
    });
    
        // Activate Carousel
    $("#myCarousel").carousel({interval: 5000});
    
    // Enable Carousel Indicators
    $(".item1").click(function(){
        $("#myCarousel").carousel(0);
    });
    $(".item2").click(function(){
        $("#myCarousel").carousel(1);
    });
    $(".item3").click(function(){
        $("#myCarousel").carousel(2);
    });
    $(".item4").click(function(){
        $("#myCarousel").carousel(3);
    });
    $(".item5").click(function(){
        $("#myCarousel").carousel(4);
    });
    $(".item6").click(function(){
        $("#myCarousel").carousel(5);
    });

    // Enable Carousel Controls
    $(".left").click(function(){
        $("#myCarousel").carousel("prev");
    });
    $(".right").click(function(){
        $("#myCarousel").carousel("next");
    });
    
    $("#yearbook").click(function(){
        $('html, body').animate({
        scrollTop: $("#myCarousel").offset().top
    }, 800); 
        $("#myCarousel").carousel(5);
    });
});




