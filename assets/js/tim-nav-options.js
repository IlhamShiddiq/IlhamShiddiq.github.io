$(document).ready(function(){
    
    $(window).scroll(function(){
        if($(this).scrollTop() > 300){
            $('.navbar-team').addClass('trans');
            $('.lin').addClass('putih');
        } else {
            $(".navbar-team").removeClass('trans');
            $('.lin').removeClass('putih');
        }
    });

});