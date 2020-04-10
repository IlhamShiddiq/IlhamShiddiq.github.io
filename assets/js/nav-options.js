$(document).ready(function(){
    
    $(window).scroll(function(){
        if($(this).scrollTop() > 600){
            $('.navbar-1').addClass('hide-navbar-1');
            $('.navbar-2').addClass('muncul-navbar-2');
        } else {
            $(".navbar-1").removeClass('hide-navbar-1');
            $(".navbar-2").removeClass('muncul-navbar-2');
        }
    });

});