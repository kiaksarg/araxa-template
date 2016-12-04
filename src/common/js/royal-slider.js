/**
 * Created by hosseinAb on 12/3/2016.
 */
var mainSelector = $(".royal-slider");
var imgSelector = $(".royal-slider .slider-img");

// taghir ax ba dokme haye paein
$(".royal-slider .button").hover(function() {
    var is_active = $(this).hasClass("active");
    if(!is_active){
        $( ".royal-slider .button" ).each(function( index ) {
            $(this).removeClass("active");
        });
        $( this ).addClass("active");

        var img = $(this).data("img");
        $('.royal-slider .slider-img').fadeOut(200, function() {
            imgSelector.attr("src",img);
            imgSelector.fadeIn(400);
        });
        
        var link = $(this).data("link");
        $(".royal-slider .slider-img-link").attr("href",link);
    }
});

//namayesh va mahv shodane dokme haye prev va next
mainSelector.hover(function() {
    $(".royal-slider .backward-button").css("display", "block");
    $(".royal-slider .forward-button").css("display", "block");
});

mainSelector.mouseleave(function() {
    $(".royal-slider .backward-button").css("display", "none");
    $(".royal-slider .forward-button").css("display", "none");
});

//dokme ghabl
$('.royal-slider .backward-button').click(function () {
    var current_id = $('.royal-slider .button.active').data('id');
    var next_id;
    if (current_id==4){
        next_id = 1;
    }else {
        next_id = current_id + 1;
    }
    changeSliderPicture(next_id);
});

//dokme baad
$('.royal-slider .forward-button').click(function () {
    var current_id = $('.royal-slider .button.active').data('id');
    var next_id;
    if (current_id==1){
        next_id = 4;
    }else {
        next_id = current_id - 1;
    }
    changeSliderPicture(next_id);
});

//function baraye taghir ax slider
function changeSliderPicture(position) {
    $(".royal-slider .button").each(function( index ) {
        if ($(this).data('id')==position){
            $(this).addClass("active");
            var img = $(this).data("img");
            $('.royal-slider .slider-img').fadeOut(200, function() {
                imgSelector.attr("src",img);
                imgSelector.fadeIn(400);
            });

            var link = $(this).data("link");
            $(".royal-slider .slider-img-link").attr("href",link);
        } else {
            $(this).removeClass("active");
        }
    });
}
$( document ).ready(function() {
    setInterval(function(){
        var current_id = $('.royal-slider .button.active').data('id');
        var next_id;
        if (current_id==4){
            next_id = 1;
        }else {
            next_id = current_id + 1;
        }
        changeSliderPicture(next_id);
    }, 10000);
});

