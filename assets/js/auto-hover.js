$(document).ready(function(){
    
    $(window).scroll(function(){
        if($(this).scrollTop() > 900 && $(this).scrollTop() < 1350){
            $('.link-pelayanan').addClass('auto-hover');
            $('.link-menu').removeClass('auto-hover');
        } else if($(this).scrollTop() >= 1350 && $(this).scrollTop() < 2000){
            $('.link-menu').addClass('auto-hover');
            $('.link-pelayanan').removeClass('auto-hover');
            $('.link-reservasi').removeClass('auto-hover');
        } else if($(this).scrollTop() >= 2000 && $(this).scrollTop() < 2600){
            $('.link-reservasi').addClass('auto-hover');
            $('.link-menu').removeClass('auto-hover');
            $('.link-galeri').removeClass('auto-hover');
        } else if($(this).scrollTop() >= 2600 && $(this).scrollTop() < 2900){
            $('.link-galeri').addClass('auto-hover');
            $('.link-reservasi').removeClass('auto-hover');
        } else {
            $('.link-galeri').removeClass('auto-hover');
        }
    });

});