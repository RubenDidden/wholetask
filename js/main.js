// ACCORDION //
$(document).ready(function () {
    $('#accordion').accordion({
        collapsible: true,
        heightStyle: 'content',
        animate: 1200,
        fluid: true,
    });
});

// THEME SWITCH

var toggle = $('.toggle');
var bol = $('.bol');

var count = true;
var body = $('body');

toggle.click(function () {
    console.log(count);

    if (count == true) {
        count = false;
        bol.css({
            "left": "58%",
        });
        body.css({
            "background": "black",
        });
    } else if (count == false) {
        count = true;
        bol.css({
            "left": "3%",
        });
        body.css({
            "background": "white"
        });
    }
});

// PLAY & PAUSE SWITCH

$('video').each(function (i, el) {
    $('.playtoggle').click(function () {
        console.log($(this));
        if ($(this).hasClass('play')) {
            $(this).removeClass('play');
            $(this).find('.playbutton').css({
                "visibility": "visible",
            });
            $(this).find('.pausebutton').css({
                "visibility": "hidden",
            });
            el.pause();
        } else {
            $(this).addClass('play');
            $(this).find('.playbutton').css({
                "visibility": "hidden",
            });
            $(this).find('.pausebutton').css({
                "visibility": "visible",
            });
            el.play();
        }
    });
});

// FORWARD BUTTON

// $('video').each (function i, el) {
//    var p = $(el).parent();
    

//}


// REWIND BUTTON

