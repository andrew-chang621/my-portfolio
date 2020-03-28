jQuery(document).ready(function() {

    "use strict";
    $(window).scroll(function(){
        var top = $(window).scrollTop();
        if (top >= 60) {
            $("header").addClass('scroll-background');
        }
        else
            if ($("header").hasClass('scroll-background')){
                $("header").removeClass('scroll-background');
            }
    });

});