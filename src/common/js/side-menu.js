$('.oc-nav').click(function() {
    if ($(mySidenav).attr('value') == 'opened') {
        $(mySidenav).attr('value', 'closed');
        document.getElementById("mySidenav").style.width = "0";
        // document.getElementById("main").style.marginRight = "0";
    } else {
        $(mySidenav).attr('value', 'opened');
        document.getElementById("mySidenav").style.width = "250px";
        // document.getElementById("main").style.marginRight = "250px";
    }

    // or if you don't care about changing the button text, simply:
    $('#myotherdiv').slideToggle();
});