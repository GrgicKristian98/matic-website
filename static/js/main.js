function logoAnimation() {
    var path1 = document.getElementById('myPath1');
    var length1 = path1.getTotalLength();

    path1.style.strokeDasharray = length1;
    path1.style.strokeDashoffset = length1;

    var path2 = document.getElementById('myPath2');
    var length2 = path2.getTotalLength();

    path2.style.strokeDasharray = length2;
    path2.style.strokeDashoffset = length2;

    var path3 = document.getElementById('myPath3');
    var length3 = path3.getTotalLength();

    path3.style.strokeDasharray = length3;
    path3.style.strokeDashoffset = length3;

    var path4 = document.getElementById('myPath4');
    path4.style.fill = 'transparent';

    path1.getBoundingClientRect();
    path1.style.transition = path1.style.WebkitTransition = 'stroke-dashoffset 2s ease-in-out';
    path1.style.strokeDashoffset = '0';

    path3.getBoundingClientRect();
    path3.style.transition = path3.style.WebkitTransition = 'stroke-dashoffset 2s ease-in-out';
    path3.style.strokeDashoffset = '0';

    path1.addEventListener('transitionend', function () {
        path2.getBoundingClientRect();
        path2.style.transition = path2.style.WebkitTransition = 'stroke-dashoffset 0.5s ease-in-out';
        path2.style.strokeDashoffset = '0';

        path2.addEventListener('transitionend', function () {
            path4.style.transition = 'fill 0.5s';
            path4.style.fill = '#ae8625';
        });
    });
}

function imagesAnimation() {
    var images = document.querySelectorAll("#main .side-row img");

    for (let i = 0; i < images.length; i++) {
        setTimeout(function () {
            images[i].classList.add('img-visible');
        }, i * 500);
    }
}

function responsiveDesign() {
    var icon2 = document.querySelector("#main #icon2");
    var icon3 = document.querySelector("#main #icon3");
    var icon4 = document.querySelector("#main #icon4");
    var icon5 = document.querySelector("#main #icon5");

    var icon1Vertical = document.querySelector("#main #icon1-vertical");
    var icon6Vertical = document.querySelector("#main #icon6-vertical");

    function checkWindowSize() {
        var icon2Parent = icon2.parentElement;
        var icon3Parent = icon3.parentElement;
        var icon4Parent = icon4.parentElement;
        var icon5Parent = icon5.parentElement;

        var icon1VerticalParent = icon1Vertical.parentElement;
        var icon6VerticalParent = icon6Vertical.parentElement;

        if (window.innerWidth < 1760) {
            icon2Parent.classList.remove('object-wrapper-top');
            icon2Parent.classList.add('object-wrapper-left');

            icon5Parent.classList.remove('object-wrapper-bottom');
            icon5Parent.classList.add('object-wrapper-right');

            icon1VerticalParent.classList.remove('hidden');
            icon6VerticalParent.classList.remove('hidden');
        } else {
            icon2Parent.classList.remove('object-wrapper-left');
            icon2Parent.classList.add('object-wrapper-top');

            icon5Parent.classList.remove('object-wrapper-right');
            icon5Parent.classList.add('object-wrapper-bottom');

            icon1VerticalParent.classList.add('hidden');
            icon6VerticalParent.classList.add('hidden');
        }

        if (window.innerWidth < 1220) {
            icon3Parent.classList.remove('object-wrapper-right');
            icon3Parent.classList.add('object-wrapper-left');

            icon4Parent.classList.remove('object-wrapper-left');
            icon4Parent.classList.add('object-wrapper-right');
        }
    }

    window.addEventListener('resize', checkWindowSize);
    checkWindowSize();
}

function updateElementPosition() {
    var scrollTop = $(window).scrollTop();

    function scrollEffect(imageId, initialTopPercentage, speedFactor) {
        var initialTopPixels = $('#services').height() * (initialTopPercentage / 100);
        var newTop = (initialTopPixels - scrollTop * speedFactor) + 'px';
        $(imageId).css('top', newTop);
    }

    scrollEffect('#image5', 30, 0.2);
    scrollEffect('#image6', 82, 0.5);
}

function smoothScrollingOnClick() {
    $('a[href^="#"]').on('click', function (event) {
        var target = $(this.getAttribute('href'));

        if (target.length) {
            event.preventDefault();
            $('html, body').stop().animate({
                scrollTop: target.offset().top - 100
            }, 500);
        }
    });
}

function createGallery() {
    var options = {
        thumbnailHeight: '400',
        thumbnailWidth: 'auto',
        galleryDisplayMode: 'pagination',
        galleryMaxRows: 3,
        gallerySorting: 'random',
        thumbnailAlignment: 'fillWidth',
        thumbnailL1GutterWidth: 20,
        thumbnailL1GutterHeight: 20,
        thumbnailBorderHorizontal: 1,
        thumbnailBorderVertical: 1,
        thumbnailDisplayTransition: 'flipUp',
        thumbnailDisplayTransitionDuration: 400,
        thumbnailDisplayInterval: 200,
        thumbnailDisplayOrder: 'rowByRow',
        thumbnailHoverEffect2: 'toolsSlideUp|labelSlideDown',
        touchAnimation: true,
        touchAutoOpenDelay: -1,
        viewerToolbar: {display: false},
        viewerTools: {
            topLeft: 'label',
            topRight: 'rotateLeft, rotateRight, fullscreenButton, closeButton'
        },
        galleryTheme: {
            thumbnail: {titleShadow: 'none', descriptionShadow: 'none', titleColor: '#fff', borderColor: '#fff'},
            navigationPagination: {background: '#3C4B5B', color: '#fff', colorHover: '#aaa', borderRadius: '4px'},
        },
        locationHash: true,
        items: []
    };

    var settings = jQuery.extend(options);

    for (var i = 1; i <= 30; i++) {
        settings.items.push({src: 'static/img/gallery/gallery_image' + i + '.jpg'});
    }

    jQuery("#nanogallery2").nanogallery2(settings);
}

function animateHeader() {
    window.onscroll = function() {
        var navbar = document.getElementById('navbar');
        var scrollDistanceFromBottom = document.documentElement.scrollHeight - window.scrollY - window.innerHeight;

        if (window.scrollY > 400 && scrollDistanceFromBottom > 200) {
            navbar.classList.add('animated');
        } else {
            navbar.classList.remove('animated');
        }
    };
}


window.onload = function () {
    logoAnimation();
    imagesAnimation();
    responsiveDesign();
    updateElementPosition();
    smoothScrollingOnClick();
    createGallery();
    animateHeader();
}

$(window).scroll(updateElementPosition);
