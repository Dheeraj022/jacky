$(function () {
    "use strict";

    // Register GSAP plugins
    if (window.gsap) {
        gsap.registerPlugin(ScrollTrigger, ScrollToPlugin);
    }

    var accent = 'rgba(255, 152, 0, 1)';
    var dark = '#000';
    var light = '#fff';

    // Define globally so Next.js can invoke it
    window.initAshleyPage = function() {
        // 1. Scroll to top instantly
        window.scrollTo(0, 0);

        // 2. Kill all existing ScrollTriggers to prevent leaks
        if (window.ScrollTrigger) {
            ScrollTrigger.getAll().forEach(t => t.kill());
        }

        // 3. Reset progress bar
        gsap.to('.mil-progress', {
            height: 0,
            ease: 'sine',
            onComplete: () => {
                if (window.ScrollTrigger) ScrollTrigger.refresh();
            },
        });

        // 4. Menu cleanup and reset
        $('.mil-menu-btn').removeClass('mil-active');
        $('.mil-menu').removeClass('mil-active');
        $('.mil-menu-frame').removeClass('mil-active');

        // 5. Append clones (remove old ones first)
        $(".mil-arrow-place .mil-arrow, .mil-animation .mil-dodecahedron, .mil-current-page a").remove();
        $(".mil-arrow").clone().appendTo(".mil-arrow-place");
        $(".mil-dodecahedron").clone().appendTo(".mil-animation");
        $(".mil-lines").clone().appendTo(".mil-lines-place");
        $(".mil-main-menu ul li.mil-active > a").clone().appendTo(".mil-current-page");

        // 6. Accordions
        let groups = gsap.utils.toArray(".mil-accordion-group");
        let menus = gsap.utils.toArray(".mil-accordion-menu");
        
        // Remove previous click listeners by replacing nodes (to avoid duplicate bindings)
        menus.forEach((menu) => {
            let newMenu = menu.cloneNode(true);
            menu.parentNode.replaceChild(newMenu, menu);
        });
        
        // Re-select fresh menus
        let freshMenus = gsap.utils.toArray(".mil-accordion-menu");
        let freshGroups = gsap.utils.toArray(".mil-accordion-group");
        let menuToggles = freshGroups.map(createAnimation);

        freshMenus.forEach((menu) => {
            menu.addEventListener("click", () => toggleMenu(menu));
        });

        function toggleMenu(clickedMenu) {
            menuToggles.forEach((toggleFn) => toggleFn(clickedMenu));
        }

        function createAnimation(element) {
            let menu = element.querySelector(".mil-accordion-menu");
            let box = element.querySelector(".mil-accordion-content");
            let symbol = element.querySelector(".mil-symbol");
            let minusElement = element.querySelector(".mil-minus");
            let plusElement = element.querySelector(".mil-plus");

            gsap.set(box, {
                height: "auto",
            });

            let animation = gsap
                .timeline()
                .from(box, {
                    height: 0,
                    duration: 0.4,
                    ease: "sine"
                })
                .from(minusElement, {
                    duration: 0.4,
                    autoAlpha: 0,
                    ease: "none",
                }, 0)
                .to(plusElement, {
                    duration: 0.4,
                    autoAlpha: 0,
                    ease: "none",
                }, 0)
                .to(symbol, {
                    background: accent,
                    ease: "none",
                }, 0)
                .reverse();

            return function (clickedMenu) {
                if (clickedMenu === menu) {
                    animation.reversed(!animation.reversed());
                } else {
                    animation.reverse();
                }
            };
        }

        // 7. Back to top scroll trigger
        const btt = document.querySelector(".mil-back-to-top .mil-link");
        if (btt) {
            gsap.set(btt, {
                x: -30,
                opacity: 0,
            });

            gsap.to(btt, {
                x: 0,
                opacity: 1,
                ease: 'sine',
                scrollTrigger: {
                    trigger: "body",
                    start: "top -40%",
                    end: "top -40%",
                    toggleActions: "play none reverse none"
                }
            });
        }

        // 8. Progressbar
        gsap.to('.mil-progress', {
            height: '100%',
            ease: 'sine',
            scrollTrigger: {
                scrub: 0.3
            }
        });

        // 9. Scroll animations
        const appearance = document.querySelectorAll(".mil-up");
        appearance.forEach((section) => {
            gsap.fromTo(section, {
                opacity: 0,
                y: 40,
                scale: .98,
                ease: 'sine',
            }, {
                y: 0,
                opacity: 1,
                scale: 1,
                duration: .4,
                scrollTrigger: {
                    trigger: section,
                    toggleActions: 'play none none reverse',
                }
            });
        });

        const scaleImage = document.querySelectorAll(".mil-scale");
        scaleImage.forEach((section) => {
            var value1 = $(section).data("value-1");
            var value2 = $(section).data("value-2");
            gsap.fromTo(section, {
                ease: 'sine',
                scale: value1,
            }, {
                scale: value2,
                scrollTrigger: {
                    trigger: section,
                    scrub: true,
                    toggleActions: 'play none none reverse',
                }
            });
        });

        const parallaxImage = document.querySelectorAll(".mil-parallax");
        if ($(window).width() > 960) {
            parallaxImage.forEach((section) => {
                var value1 = $(section).data("value-1");
                var value2 = $(section).data("value-2");
                gsap.fromTo(section, {
                    ease: 'sine',
                    y: value1,
                }, {
                    y: value2,
                    scrollTrigger: {
                        trigger: section,
                        scrub: true,
                        toggleActions: 'play none none reverse',
                    }
                });
            });
        }

        const rotate = document.querySelectorAll(".mil-rotate");
        rotate.forEach((section) => {
            var value = $(section).data("value");
            gsap.fromTo(section, {
                ease: 'sine',
                rotate: 0,
            }, {
                rotate: value,
                scrollTrigger: {
                    trigger: section,
                    scrub: true,
                    toggleActions: 'play none none reverse',
                }
            });
        });

        // 10. Fancybox
        if ($.fn && $.fn.fancybox) {
            $('[data-fancybox="gallery"]').fancybox({
                buttons: [
                    "slideShow",
                    "zoom",
                    "fullScreen",
                    "close"
                ],
                loop: false,
                protect: true
            });
            $.fancybox.defaults.hash = false;
        }

        // 11. Sliders (Swiper)
        if (window.Swiper) {
            var menuDots = ['<div class="mil-custom-dot mil-slide-1"></div>', '<div class="mil-custom-dot mil-slide-2"></div>', '<div class="mil-custom-dot mil-slide-3"></div>', '<div class="mil-custom-dot mil-slide-4"></div>', '<div class="mil-custom-dot mil-slide-5"></div>', '<div class="mil-custom-dot mil-slide-6"></div>', '<div class="mil-custom-dot mil-slide-7"></div>'];
            
            if (document.querySelector('.mil-reviews-slider')) {
                new Swiper('.mil-reviews-slider', {
                    pagination: {
                        el: '.mil-revi-pagination',
                        clickable: true,
                        renderBullet: function (index, className) {
                            return '<span class="' + className + '">' + (menuDots[index] || '') + '</span>';
                        },
                    },
                    speed: 800,
                    effect: 'fade',
                    parallax: true,
                    navigation: {
                        nextEl: '.mil-revi-next',
                        prevEl: '.mil-revi-prev',
                    },
                });
            }

            if (document.querySelector('.mil-infinite-show')) {
                new Swiper('.mil-infinite-show', {
                    slidesPerView: 2,
                    spaceBetween: 30,
                    speed: 5000,
                    autoplay: true,
                    autoplay: {
                        delay: 0,
                    },
                    loop: true,
                    freeMode: true,
                    breakpoints: {
                        992: {
                            slidesPerView: 4,
                        },
                    },
                });
            }

            if (document.querySelector('.mil-portfolio-slider')) {
                new Swiper('.mil-portfolio-slider', {
                    slidesPerView: 1,
                    spaceBetween: 0,
                    speed: 800,
                    parallax: true,
                    mousewheel: {
                        enable: true
                    },
                    navigation: {
                        nextEl: '.mil-portfolio-next',
                        prevEl: '.mil-portfolio-prev',
                    },
                    pagination: {
                        el: '.swiper-portfolio-pagination',
                        type: 'fraction',
                    },
                });
            }

            if (document.querySelector('.mil-1-slider')) {
                new Swiper('.mil-1-slider', {
                    slidesPerView: 1,
                    spaceBetween: 30,
                    speed: 800,
                    parallax: true,
                    navigation: {
                        nextEl: '.mil-portfolio-next',
                        prevEl: '.mil-portfolio-prev',
                    },
                    pagination: {
                        el: '.swiper-portfolio-pagination',
                        type: 'fraction',
                    },
                });
            }

            if (document.querySelector('.mil-2-slider')) {
                new Swiper('.mil-2-slider', {
                    slidesPerView: 1,
                    spaceBetween: 30,
                    speed: 800,
                    parallax: true,
                    navigation: {
                        nextEl: '.mil-portfolio-next',
                        prevEl: '.mil-portfolio-prev',
                    },
                    pagination: {
                        el: '.swiper-portfolio-pagination',
                        type: 'fraction',
                    },
                    breakpoints: {
                        992: {
                            slidesPerView: 2,
                        },
                    },
                });
            }
        }

        // 12. Cursor hover events
        const cursor = document.querySelector('.mil-ball');
        if (cursor) {
            $('.mil-drag, .mil-more, .mil-choose').off('mouseover mouseleave');
            $('.mil-drag, .mil-more, .mil-choose').on('mouseover', function () {
                gsap.to($(cursor), .2, {
                    width: 90,
                    height: 90,
                    opacity: 1,
                    ease: 'sine',
                });
            });
            $('.mil-drag, .mil-more, .mil-choose').on('mouseleave', function () {
                gsap.to($(cursor), .2, {
                    width: 20,
                    height: 20,
                    opacity: .1,
                    ease: 'sine',
                });
            });

            $('.mil-accent-cursor').off('mouseover mouseleave');
            $('.mil-accent-cursor').on('mouseover', function () {
                gsap.to($(cursor), .2, {
                    background: accent,
                    ease: 'sine',
                });
                $(cursor).addClass('mil-accent');
            });
            $('.mil-accent-cursor').on('mouseleave', function () {
                gsap.to($(cursor), .2, {
                    background: dark,
                    ease: 'sine',
                });
                $(cursor).removeClass('mil-accent');
            });

            $('.mil-drag').off('mouseover mouseleave');
            $('.mil-drag').on('mouseover', function () {
                gsap.to($('.mil-ball .mil-icon-1'), .2, {
                    scale: '1',
                    ease: 'sine',
                });
            });
            $('.mil-drag').on('mouseleave', function () {
                gsap.to($('.mil-ball .mil-icon-1'), .2, {
                    scale: '0',
                    ease: 'sine',
                });
            });

            $('.mil-more').off('mouseover mouseleave');
            $('.mil-more').on('mouseover', function () {
                gsap.to($('.mil-ball .mil-more-text'), .2, {
                    scale: '1',
                    ease: 'sine',
                });
            });
            $('.mil-more').on('mouseleave', function () {
                gsap.to($('.mil-ball .mil-more-text'), .2, {
                    scale: '0',
                    ease: 'sine',
                });
            });

            $('.mil-choose').off('mouseover mouseleave');
            $('.mil-choose').on('mouseover', function () {
                gsap.to($('.mil-ball .mil-choose-text'), .2, {
                    scale: '1',
                    ease: 'sine',
                });
            });
            $('.mil-choose').on('mouseleave', function () {
                gsap.to($('.mil-ball .mil-choose-text'), .2, {
                    scale: '0',
                    ease: 'sine',
                });
            });

            $('a:not(".mil-choose , .mil-more , .mil-drag , .mil-accent-cursor"), input , textarea, .mil-accordion-menu').off('mouseover mouseleave');
            $('a:not(".mil-choose , .mil-more , .mil-drag , .mil-accent-cursor"), input , textarea, .mil-accordion-menu').on('mouseover', function () {
                gsap.to($(cursor), .2, {
                    scale: 0,
                    ease: 'sine',
                });
                gsap.to($('.mil-ball svg'), .2, {
                    scale: 0,
                });
            });
            $('a:not(".mil-choose , .mil-more , .mil-drag , .mil-accent-cursor"), input, textarea, .mil-accordion-menu').on('mouseleave', function () {
                gsap.to($(cursor), .2, {
                    scale: 1,
                    ease: 'sine',
                });
                gsap.to($('.mil-ball svg'), .2, {
                    scale: 1,
                });
            });
        }

        // 13. Menu bindings
        $('.mil-menu-btn').off("click").on("click", function () {
            $('.mil-menu-btn').toggleClass('mil-active');
            $('.mil-menu').toggleClass('mil-active');
            $('.mil-menu-frame').toggleClass('mil-active');
        });

        $('.mil-has-children a').off('click').on('click', function () {
            $('.mil-has-children ul').removeClass('mil-active');
            $('.mil-has-children a').removeClass('mil-active');
            $(this).toggleClass('mil-active');
            $(this).next().toggleClass('mil-active');
        });

        if (window.ScrollTrigger) {
            ScrollTrigger.refresh();
        }
    };

    // Preloader Timeline (runs once on page load)
    if (document.querySelector(".mil-preloader")) {
        var timeline = gsap.timeline();

        timeline.to(".mil-preloader-animation", {
            opacity: 1,
        });

        timeline.fromTo(
            ".mil-animation-1 .mil-h3", {
                y: "30px",
                opacity: 0
            }, {
                y: "0px",
                opacity: 1,
                stagger: 0.4
            },
        );

        timeline.to(".mil-animation-1 .mil-h3", {
            opacity: 0,
            y: '-30',
        }, "+=.3");

        timeline.fromTo(".mil-reveal-box", 0.1, {
            opacity: 0,
        }, {
            opacity: 1,
            x: '-30',
        });

        timeline.to(".mil-reveal-box", 0.45, {
            width: "100%",
            x: 0,
        }, "+=.1");
        timeline.to(".mil-reveal-box", {
            right: "0"
        });
        timeline.to(".mil-reveal-box", 0.3, {
            width: "0%"
        });
        timeline.fromTo(".mil-animation-2 .mil-h3", {
            opacity: 0,
        }, {
            opacity: 1,
        }, "-=.5");
        timeline.to(".mil-animation-2 .mil-h3", 0.6, {
            opacity: 0,
            y: '-30'
        }, "+=.5");
        timeline.to(".mil-preloader", 0.8, {
            opacity: 0,
            ease: 'sine',
        }, "+=.2");
        timeline.fromTo(".mil-up", 0.8, {
            opacity: 0,
            y: 40,
            scale: .98,
            ease: 'sine',

        }, {
            y: 0,
            opacity: 1,
            scale: 1,
            onComplete: function () {
                $('.mil-preloader').addClass("mil-hidden");
            },
        }, "-=1");
    }

    // Cursor mouse tracker setup (only once)
    const cursor = document.querySelector('.mil-ball');
    if (cursor) {
        gsap.set(cursor, {
            xPercent: -50,
            yPercent: -50,
        });

        document.addEventListener('pointermove', movecursor);

        function movecursor(e) {
            gsap.to(cursor, {
                duration: 0.6,
                ease: 'sine',
                x: e.clientX,
                y: e.clientY,
            });
        }

        $('body').on('mousedown', function () {
            gsap.to($(cursor), .2, {
                scale: .1,
                ease: 'sine',
            });
        });
        $('body').on('mouseup', function () {
            gsap.to($(cursor), .2, {
                scale: 1,
                ease: 'sine',
            });
        });
    }

    // Anchor scroll
    $(document).on('click', 'a[href^="#"]', function (event) {
        event.preventDefault();

        var target = $($.attr(this, 'href'));
        if (target.length) {
            var offset = 0;
            if ($(window).width() < 1200) {
                offset = 90;
            }
            $('html, body').animate({
                scrollTop: target.offset().top - offset
            }, 400);
        }
    });

    // Run first initialization
    window.initAshleyPage();
});
