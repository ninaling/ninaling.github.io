$(function() {
    $( "#selectable" ).selectable();
});

$(document).ready(function(){
    $("#remove_under_construction").click(function(){
        $("#under_construction").hide();
    });
    $("#top_option").click(function(){
        $("html, body").animate({
            scrollTop: $("#landing").offset().top
        }, 500);
    });
    $("#about_option").click(function(){
        $("html, body").animate({
            scrollTop: $("#about").offset().top-20
        }, 500);
    });
    $("#education_option").click(function(){
        $("html, body").animate({
            scrollTop: $("#education").offset().top-20
        }, 500);
    });
    $(".navigator_option").hover(
        function() {
            $(this).css("opacity", 1);
        }, function() {
            $(this).css("opacity", 0.5);
        }
    );
});