/**
 * Created by hosseinAb on 12/6/2016.
 */

$('.gallery-thumbnail-section').click(function () {
    var src = $(this).data('img');
    $('.gallery-active-picture').attr('src',src);
});


$( document ).ready(function() {
    $('#myTabs li:eq(0) a').tab('show');
});

$('#feature-tab a').click(function (e) {
    e.preventDefault();
    $(this).tab('show');
});

$(function(){
    $("#current-rate").rateYo({
        rating: 2.6,
        readOnly: true,
        spacing   : "5px",
        multiColor: {

            "startColor": "#FF0000", //RED
            "endColor"  : "#00FF00"  //GREEN
        }
    });

    $("#user-rate").rateYo({
        rating: 0.0,
        spacing   : "5px",
        multiColor: {

            "startColor": "#FF0000", //RED
            "endColor"  : "#00FF00"  //GREEN
        }
    });
});

$('.responsive-tabs').responsiveTabs({
    accordionOn: ['xs', 'sm'] // xs, sm, md, lg
});