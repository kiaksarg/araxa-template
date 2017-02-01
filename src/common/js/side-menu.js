$('.oc-nav').click(function() {
    if ($(mySidenav).attr('value') == 'opened') {
        $(mySidenav).attr('value', 'closed');
        document.getElementById("mySidenav").style.width = "0";
        // document.getElementById("main").style.marginRight = "0px";
    } else {
        $(mySidenav).attr('value', 'opened');
        document.getElementById("mySidenav").style.width = "250px";
        // document.getElementById("main").style.marginRight = "250px";
    }

    // or if you don't care about changing the button text, simply:
    $('#myotherdiv').slideToggle();
});

function respChangeStyle(x) {
    document.getElementById("MenuIcon").classList.toggle("change");



}