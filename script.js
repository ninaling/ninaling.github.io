$(document).ready(function(){
    
    var height=$(window).height();
    var width=$(window).width();

//    $(window).on('scroll', function() {
//        $(this).scrollLeft(0); //sets left scroll to 0px
//    });
    
    $('#circuit').mouseenter(function(){
        $(this).animate({
            right:'+=8px'
        }, 100)
    });
    
    $('#circuit').mouseleave(function(){
        $(this).animate({
            right:'-=8px'
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




