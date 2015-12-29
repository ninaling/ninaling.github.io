$(document).ready(function(){
    
    $('#down_prompt').hide();
    
    setTimeout(function(){
        $('#down_prompt').fadeIn(300);
        $('#down_prompt').animate({ 
            'top':'65vh'
        }, 600);
        $('#down_prompt').fadeOut(300);
    }, 300);
    
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
        $("#myCarousel").carousel(4);
    });
    
    $("#yearbook2").click(function(){
        $('html, body').animate({
        scrollTop: $("#myCarousel").offset().top
    }, 800); 
        $("#myCarousel").carousel(5);
    });
});




