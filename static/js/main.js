function logoAnimation() {
    var e = document.getElementById("mySvg");
    e.classList.contains("hidden") && e.classList.remove("hidden"), e.classList.add("visible");
    var t = document.getElementById("path1"),
        i = t.getTotalLength();
    t.style.strokeDasharray = i, t.style.strokeDashoffset = i;
    var a = document.getElementById("path2"),
        n = a.getTotalLength();
    a.style.strokeDasharray = n, a.style.strokeDashoffset = n;
    var o = document.getElementById("path3"),
        s = o.getTotalLength();
    o.style.strokeDasharray = s, o.style.strokeDashoffset = s;
    var l = document.getElementById("text1");
    l.style.fill = "transparent";
    var r = document.getElementById("ellipse1");
    r.style.fill = "transparent", t.getBoundingClientRect(), t.style.transition = t.style.WebkitTransition = "stroke-dashoffset 2s ease-in-out", t.style.strokeDashoffset = "0", o.getBoundingClientRect(), o.style.transition = o.style.WebkitTransition = "stroke-dashoffset 2s ease-in-out", o.style.strokeDashoffset = "0", t.addEventListener("transitionend", function() {
        r.style.transition = "fill 0.5s", r.style.fill = "#ae8625", r.addEventListener("transitionend", function() {
            a.getBoundingClientRect(), a.style.transition = a.style.WebkitTransition = "stroke-dashoffset 0.5s ease-in-out", a.style.strokeDashoffset = "0", a.addEventListener("transitionend", function() {
                l.style.transition = "fill 0.5s", l.style.fill = "#ae8625"
            })
        })
    })
}

function imagesAnimation() {
    var e = document.querySelectorAll("#main .side-row img");
    for (let t = 0; t < e.length; t++) setTimeout(function() {
        e[t].classList.add("img-visible")
    }, 500 * t)
}

function responsive() {
    var e = document.querySelector("#main #icon2"),
        t = document.querySelector("#main #icon3"),
        i = document.querySelector("#main #icon4"),
        a = document.querySelector("#main #icon5"),
        n = document.querySelector("#main #icon1-vertical"),
        o = document.querySelector("#main #icon6-vertical");

    function s() {
        var s = e.parentElement,
            l = t.parentElement,
            r = i.parentElement,
            c = a.parentElement,
            d = n.parentElement,
            h = o.parentElement;
        window.innerWidth < 1760 ? (s.classList.remove("object-wrapper-top"), s.classList.add("object-wrapper-left"), c.classList.remove("object-wrapper-bottom"), c.classList.add("object-wrapper-right"), d.classList.remove("hidden"), h.classList.remove("hidden")) : (s.classList.remove("object-wrapper-left"), s.classList.add("object-wrapper-top"), c.classList.remove("object-wrapper-right"), c.classList.add("object-wrapper-bottom"), d.classList.add("hidden"), h.classList.add("hidden")), window.innerWidth < 1220 && (l.classList.remove("object-wrapper-right"), l.classList.add("object-wrapper-left"), r.classList.remove("object-wrapper-left"), r.classList.add("object-wrapper-right"))
    }
    window.addEventListener("resize", s), s()
}

function updateElementPosition() {
    var e = $(window).scrollTop();

    function t(t, i, a) {
        var n = $("#services").height() * (i / 100);
        $(t).css("top", n - e * a + "px")
    }
    t("#image5", 30, .2), t("#image6", 75, .5)
}

function smoothScrollingOnClick() {
    $('a[href^="#"]').on("click", function(e) {
        var t = $(this.getAttribute("href"));
        t.length && (e.preventDefault(), $("html, body").stop().animate({
            scrollTop: t.offset().top - 100
        }, 500))
    })
}

function createGallery() {
    var e = jQuery.extend({
        thumbnailHeight: "400",
        thumbnailWidth: "auto",
        galleryDisplayMode: "pagination",
        galleryMaxRows: 3,
        gallerySorting: "random",
        thumbnailAlignment: "fillWidth",
        thumbnailL1GutterWidth: 20,
        thumbnailL1GutterHeight: 20,
        thumbnailBorderHorizontal: 1,
        thumbnailBorderVertical: 1,
        thumbnailDisplayTransition: "flipUp",
        thumbnailDisplayTransitionDuration: 400,
        thumbnailDisplayInterval: 200,
        thumbnailDisplayOrder: "rowByRow",
        thumbnailHoverEffect2: "toolsSlideUp|labelSlideDown",
        touchAnimation: !0,
        touchAutoOpenDelay: -1,
        viewerToolbar: {
            display: !1
        },
        viewerTools: {
            topLeft: "label",
            topRight: "rotateLeft, rotateRight, fullscreenButton, closeButton"
        },
        galleryTheme: {
            thumbnail: {
                titleShadow: "none",
                descriptionShadow: "none",
                titleColor: "#fff",
                borderColor: "#fff"
            },
            navigationPagination: {
                background: "#3C4B5B",
                color: "#fff",
                colorHover: "#aaa",
                borderRadius: "4px"
            }
        },
        locationHash: !0,
        items: []
    });

    // Load gallery images from local folder
    const galleryImages = getGalleryImages();
    for (let i = 0; i < galleryImages.length; i++) {
        e.items.push({
            src: galleryImages[i]
        });
    }
    jQuery("#nanogallery2").nanogallery2(e);

    /* Original Google Drive implementation
    getGalleryIds().then(t => {
        if (t.length > 0) {
            for (var i = 0; i < t.length; i++) e.items.push({
                src: "https://drive.google.com/thumbnail?id=" + t[i] + "&sz=w1000"
            });
            jQuery("#nanogallery2").nanogallery2(e)
        }
    }).catch(e => console.log(e))
    */
}

function getGalleryImages() {
    // Return array of gallery image paths
    const galleryPath = 'static/img/gallery/';
    const images = [];
    
    // Add all gallery images (we found 30 images in the gallery folder)
    for (let i = 1; i <= 30; i++) {
        images.push(`${galleryPath}gallery_image${i}.webp`);
    }
    
    return images;
}

/* Original Google Drive implementation
async function getGalleryIds() {
    try {
        let e = await fetch("https://europe-west3-my-website-411719.cloudfunctions.net/get-gallery-ids");
        if (!e.ok) throw Error(`HTTP error! status: ${e.status}`);
        let t = await e.json();
        return t.file_ids
    } catch (i) {
        console.error("Failed to fetch gallery ids:", i)
    }
}
*/

function animateHeader() {
    window.onscroll = function() {
        var e = document.getElementById("navbar"),
            t = document.documentElement.scrollHeight - window.scrollY - window.innerHeight;
        window.scrollY > 400 && t > 200 ? e.classList.add("animated") : e.classList.remove("animated")
    }
}
document.addEventListener("DOMContentLoaded", function() {
    logoAnimation(), imagesAnimation(), responsive(), updateElementPosition(), smoothScrollingOnClick(), createGallery(), animateHeader()
}), $(window).scroll(updateElementPosition);