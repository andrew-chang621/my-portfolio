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

    function parallax() {
        var s = document.getElementsByClassName("floater");
        var yPos = 0 - window.pageYOffset/5;
        for (var i = 0; i < s.length; i++) {
            s[i].style.top = 260 + i*120 + yPos + "px";
        }	
    }
    
    window.addEventListener("scroll", function(){
        parallax();	
    });

    var scroll = window.requestAnimationFrame ||
                function(callback){ window.setTimeout(callback, 1000/60)};
    var elementsToShow = document.querySelectorAll('.show-on-scroll'); 

    function loop() {

        Array.prototype.forEach.call(elementsToShow, function(element){
        if (isElementInViewport(element)) {
            element.classList.add('is-visible');
        } else {
            element.classList.remove('is-visible');
        }
        });

        scroll(loop);
    }
    loop();

    // Helper function from: http://stackoverflow.com/a/7557433/274826
    function isElementInViewport(el) {
    // special bonus for those using jQuery
        if (typeof jQuery === "function" && el instanceof jQuery) {
            el = el[0];
        }
        var rect = el.getBoundingClientRect();
        return (
            (rect.top <= 0
            && rect.bottom >= 0)
            ||
            (rect.bottom >= (window.innerHeight || document.documentElement.clientHeight) &&
            rect.top <= (window.innerHeight || document.documentElement.clientHeight))
            ||
            (rect.top >= 0 &&
            rect.bottom <= (window.innerHeight || document.documentElement.clientHeight))
        );
    }

});