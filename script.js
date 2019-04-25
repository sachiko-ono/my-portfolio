$(function () {
    //nav
    $('#nav-toggle').click(function () {
        $('header').toggleClass('open');
        $('nav').slideToggle(500);
    });

    //#About
    $('.face').hide();
    $('.face').fadeIn(10000);

    $('.about-text').fadeIn(10000);



    //show-1 modal

    $('.show-1').click(function () {
        $('#modal').fadeIn();
    });

    $('.close-modal').click(function () {
        $('#modal').fadeOut();
    });

    //show-2 modal

    $('.show-2').click(function () {
        $('#modal-2').fadeIn();
    });

    $('.close-modal').click(function () {
        $('#modal-2').fadeOut();
    });

    //show-3 modal

    $('.show-3').click(function () {
        $('#modal-3').fadeIn();
    });

    $('.close-modal').click(function () {
        $('#modal-3').fadeOut();
    });

    //show-5 modal

    $('.show-5').click(function () {
        $('#modal-5').fadeIn();
    });

    $('.close-modal').click(function () {
        $('#modal-5').fadeOut();
    });

    //show-6 modal

    $('.show-6').click(function () {
        $('#modal-6').fadeIn();
    });

    $('.close-modal').click(function () {
        $('#modal-6').fadeOut();
    });
});
