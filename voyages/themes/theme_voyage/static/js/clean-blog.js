
// Navigation Scripts to Show Header on Scroll-Up
jQuery(document).ready(function($) {
    var MQL = 1170;

    //primary navigation slide-in effect
    if ($(window).width() > MQL) {
        var headerHeight = $('.navbar-custom').height();
        $(window).on('scroll', {
                previousTop: 0
            },
            function() {
                var currentTop = $(window).scrollTop();
                //check if user is scrolling up
                if (currentTop < this.previousTop) {
                    //if scrolling up...
                    if (currentTop > 0 && $('.navbar-custom').hasClass('is-fixed')) {
                        $('.navbar-custom').addClass('is-visible');
                    } else {
                        $('.navbar-custom').removeClass('is-visible is-fixed');
                    }
                } else {
                    //if scrolling down...
                    $('.navbar-custom').removeClass('is-visible');
                    if (currentTop > headerHeight && !$('.navbar-custom').hasClass('is-fixed')) $('.navbar-custom').addClass('is-fixed');
                }
                this.previousTop = currentTop;
            });
    }
});

jQuery(document).ready(function($) {
    if (document.querySelector('#gallery') !== null) {
        $('head').append('<script type="text/javascript" src="/js/jquery.nanogallery2.core.min.js"></script>');
        $('head').append('<link href="/css/nanogallery2.min.css" rel="stylesheet">');
        $('head').append('<link href="/css/nanogallery2.woff.min.css" rel="stylesheet">');
    }

    if (document.querySelector('#flickr-gallery') !== null) {
        $('head').append('<script type="text/javascript" src="/js/jquery.nanogallery2.core.min.js"></script>');
        $('head').append('<script type="text/javascript" src="/js/jquery.nanogallery2.data_flickr.min.js"></script>');
        $('head').append('<link href="/css/nanogallery2.min.css" rel="stylesheet">');
        $('head').append('<link href="/css/nanogallery2.woff.min.css" rel="stylesheet">');

        $("#flickr-gallery").nanogallery2({
            locationHash: false,
            viewerGallery: 'none',
            thumbnailHeight: 200,
            thumbnailWidth: 'auto',
            thumbnailLabel: { display: false },
            thumbnailBorderHorizontal: 0,
            thumbnailBorderVertical: 0,
            thumbnailGutterWidth: 1,
            thumbnailGutterHeight: 1,
            imageTransition: 'slideAppear',
            viewerFullscreen: true,
            viewerToolbar: { display: false },
            viewerTools: { topRight: "zoomButton, fullscreenButton, closeButton", topLeft: "pageCounter" },
            kind: 'flickr',
            userID: '191193251@N07',
            flickrAPIKey: 'e7ed48c35d5170dfc1b7854aec1d66ce',
            album: document.querySelector('#flickr-gallery').getAttribute('data-album-id')
        });
    }
});
