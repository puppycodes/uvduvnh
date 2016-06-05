$( document ).ready(function () {
    var current = 0,

        $imgs = jQuery('#cycle .art');
    imgAmount = $imgs.length;

    $($imgs.css('position', 'absolute').hide().get(0)).show();


    window.setInterval(swapImages, 1000);

    function swapImages() {
        
        var $currentImg = $('.art:visible');
        
        var $nextImg = $('.art:hidden').eq(Math.floor(Math.random() * $('.art:hidden').length));
            speed = 500;
        $currentImg.fadeOut(speed);
        $nextImg.fadeIn(speed);
    }
});