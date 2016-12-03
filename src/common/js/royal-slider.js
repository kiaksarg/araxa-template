/**
 * Created by hosseinAb on 12/3/2016.
 */
$(".royal-slider .button").hover(function() {
    var is_active = $(this).hasClass("active");
    if(!is_active){
        $( ".royal-slider .button" ).each(function( index ) {
            $(this).removeClass("active");
        });
        $( this ).addClass("active");

        var img = $(this).data("img");
        $('.royal-slider .slider-img').fadeOut(200, function() {
            $(".royal-slider .slider-img").attr("src",img);
            $('.royal-slider .slider-img').fadeIn(400);
        });
        
        var link = $(this).data("link");
        $(".royal-slider .slider-img-link").attr("href",link);
    }
});