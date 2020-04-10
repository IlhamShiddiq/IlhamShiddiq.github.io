$(document).ready(function(){
    
    $(window).scroll(function(){
        if($(this).scrollTop() > 300){
            $("#buttonUp").fadeIn();
        } else {
            $("#buttonUp").fadeOut();
        }
    });

    $("#buttonUp").click(function(){
        $('html, body').animate({scrollTop : 0}, 800);
    });

});