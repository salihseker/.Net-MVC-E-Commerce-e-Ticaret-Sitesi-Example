$(document).ready(function () {
    $(".repsonsive-menu").click(function (e) {
        $(".menu ul").css({display: "block"});
        e.stopPropagation();
        if (e.preventDefault)
            e.preventDefault();
        return false;
    });
    $("body").click(function () {
        $(".menu ul").css({display: "none"});
    });
});

$(document).ready(function () {
    "use strict";
    $(".search-top-form-button").click(function (e) {
        e.stopPropagation();

        $(".search-form-location").css({
            display: "block"
        });

    });
    $('.search-top-form').click(function (e) {
        e.stopPropagation();

        $(".search-form-location").css({
            display: "block"
        });

    });
    $("body").click(function () {
        $(".search-form-location").css({
            display: "none"
        });
    });
});


var tesla_responsive = function (options) {
    "use strict";
    var $window;

    var length;

    var previous;

    var resize;

    if ($.isArray(options)) {

        $window = $(window);

        length = options.length - 1;

        resize = function () {

            var width = $window.width();

            var i;

            for (i = 0; i < length && width > options[i].resolution; i++)
            ;

            if (previous !== i) {

                previous = i;

                options[i].action();

            }

        };

        $window.resize(resize);

        resize();

    }

};


// Limit scope pollution from any deprecated API                     height: 50px;  
(function () {

    "use strict";

    var matched, browser;

    // Use of jQuery.browser is frowned upon.
    // More details: http://api.jquery.com/jQuery.browser
    // jQuery.uaMatch maintained for back-compat
    jQuery.uaMatch = function (ua) {
        ua = ua.toLowerCase();

        var match = /(chrome)[ \/]([\w.]+)/.exec(ua) ||
            /(webkit)[ \/]([\w.]+)/.exec(ua) ||
            /(opera)(?:.*version|)[ \/]([\w.]+)/.exec(ua) ||
            /(msie) ([\w.]+)/.exec(ua) ||
            ua.indexOf("compatible") < 0 && /(mozilla)(?:.*? rv:([\w.]+)|)/.exec(ua) || [];

        return {
            browser: match[1] || "",
            version: match[2] || "0"
        };
    };

    matched = jQuery.uaMatch(navigator.userAgent);
    browser = {};

    if (matched.browser) {
        browser[matched.browser] = true;
        browser.version = matched.version;
    }

    // Chrome is Webkit, but Webkit is also Safari.
    if (browser.chrome) {
        browser.webkit = true;
    } else if (browser.webkit) {
        browser.safari = true;
    }

    jQuery.browser = browser;

    jQuery.sub = function () {
        function jQuerySub(selector, context) {
            return new jQuerySub.fn.init(selector, context);
        }
        jQuery.extend(true, jQuerySub, this);
        jQuerySub.superclass = this;
        jQuerySub.fn = jQuerySub.prototype = this();
        jQuerySub.fn.constructor = jQuerySub;
        jQuerySub.sub = this.sub;
        jQuerySub.fn.init = function init(selector, context) {
            if (context && context instanceof jQuery && !(context instanceof jQuerySub)) {
                context = jQuerySub(context);
            }

            return jQuery.fn.init.call(this, selector, context, rootjQuerySub);
        };
        jQuerySub.fn.init.prototype = jQuerySub.fn;
        var rootjQuerySub = jQuerySub(document);
        return jQuerySub;
    };

})();

// Instantiate theme collapse element object
$theme_accordion = {};
$theme_accordion.collapse = {};

/* ACCORDION */
$(".accordion-toggle").click(function () {
    "use strict";
    if ($(this).parent().hasClass('active')) {
        $theme_accordion.collapse.close($(this).parent().parent());
        return;
    }
    $('#accordion').children('.accordion-group').each(function (i, elem) {
        $theme_accordion.collapse.close(elem);
    });
    $theme_accordion.collapse.open(this);
});


/* ACCORDION STATE MANAGER */
$theme_accordion.collapse.close = function close(element) {
    "use strict";
    jQuery(element).children('.accordion-heading').removeClass('active');
    jQuery(element).children('.accordion-heading').find('.plus').html('+');
};
$theme_accordion.collapse.open = function open(element) {
    "use strict";
    jQuery(element).parent().toggleClass('active');
    jQuery(element).find('.plus').html('-');
};
/* --------------------------- */


/* --------------- CALENDAR ------------------------ */
$(function () {

    "use strict";

    if ($('#calendar').length) {

        var transEndEventNames = {
            'WebkitTransition': 'webkitTransitionEnd',
            'MozTransition': 'transitionend',
            'OTransition': 'oTransitionEnd',
            'msTransition': 'MSTransitionEnd',
            'transition': 'transitionend'
        },
            transEndEventName = transEndEventNames[Modernizr.prefixed('transition')],
            $wrapper = $('#custom-inner'),
            $calendar = $('#calendar'),
            cal = $calendar.calendario({
                onDayClick: function ($el, $contentEl, dateProperties) {

                    if ($contentEl.length > 0) {
                        showEvents($contentEl, dateProperties);
                    }

                },
                caldata: codropsEvents,
                displayWeekAbbr: true
            }),
            $month = $('#custom-month').html(cal.getMonthName()),
            $year = $('#custom-year').html(cal.getYear());

        $('#custom-next').on('click', function () {
            cal.gotoNextMonth(updateMonthYear);
        });
        $('#custom-prev').on('click', function () {
            cal.gotoPreviousMonth(updateMonthYear);
        });

        var updateMonthYear = function () {
            $month.html(cal.getMonthName());
            $year.html(cal.getYear());
        };

        // just an example..
        var showEvents = function ($contentEl, dateProperties) {

            hideEvents();

            var $events = $('<div id="custom-content-reveal" class="custom-content-reveal"><h4>Events for ' + dateProperties.monthname + ' ' + dateProperties.day + ', ' + dateProperties.year + '</h4></div>'),
                $close = $('<span class="custom-content-close"></span>').on('click', hideEvents);

            $events.append($contentEl.html(), $close).insertAfter($wrapper);

            setTimeout(function () {
                $events.css('top', '0%');
            }, 25);

        };

        var hideEvents = function () {

            var $events = $('#custom-content-reveal');
            if ($events.length > 0) {

                $events.css('top', '100%');
                if (Modernizr.csstransitions)
                    $events.on(transEndEventName, function () {
                        $(this).remove();
                    });
                else
                    $events.remove();

            }

        };

    }

});


/* ================= SCROOL TOP ================= */
$(document).ready(function () {
    "use strict";
    $('.backtotop').click(function () {
        $('body,html').animate({
            scrollTop: 0
        }, 1200, 'swing');
        return false;
    });
});


/* ================= IE fix ================= */
$(document).ready(function () {
    "use strict";
    if (!Array.prototype.indexOf) {
        Array.prototype.indexOf = function (obj, start) {
            for (var i = (start || 0), j = this.length; i < j; i++) {
                if (this[i] === obj) {
                    return i;
                }
            }
            return -1;
        };
    }
});

/* ================= START PLACE HOLDER ================= */
$(document).ready(function ($) {
    "use strict";
    $('input[placeholder], textarea[placeholder]').placeholder();
});
/* ================= END PLACE HOLDER ================= */

/* =================Twitter============================ */
var load_twitter = function () {
    "use strict";
    var linkify = function (text) {
        text = text.replace(/(https?:\/\/\S+)/gi, function (s) {
            return '<a href="' + s + '">' + s + '</a>';
        });
        text = text.replace(/(^|)@(\w+)/gi, function (s) {
            return '<a href="http://twitter.com/' + s + '">' + s + '</a>';
        });
        text = text.replace(/(^|)#(\w+)/gi, function (s) {
            return '<a href="http://search.twitter.com/search?q=' + s.replace(/#/, '%23') + '">' + s + '</a>';
        });
        return text;
    };
    $('.twitter_widget').each(function () {
        var t = $(this);
        var t_date_obj = new Date();
        var t_loading = 'Loading tweets..'; //message to display before loading tweets
        var t_container = $('<ul>').addClass('twitter').append('<li>' + t_loading + '</li>');
        t.append(t_container);
        var t_user = t.attr('data-user');
        var t_posts = parseInt(t.attr('data-posts'), 10);
        $.getJSON("php/twitter.php?user=" + t_user, function (t_tweets) {
            t_container.empty();
            for (var i = 0; i < t_posts && i < t_tweets.length; i++) {
                var t_date = Math.floor((t_date_obj.getTime() - Date.parse(t_tweets[i].created_at)) / 1000);
                var t_date_str;
                var t_date_seconds = t_date % 60;
                t_date = Math.floor(t_date / 60);
                var t_date_minutes = t_date % 60;
                if (t_date_minutes) {
                    t_date = Math.floor(t_date / 60);
                    var t_date_hours = t_date % 60;
                    if (t_date_hours) {
                        t_date = Math.floor(t_date / 60);
                        var t_date_days = t_date % 24;
                        if (t_date_days) {
                            t_date = Math.floor(t_date / 24);
                            var t_date_weeks = t_date % 7;
                            if (t_date_weeks)
                                t_date_str = t_date_weeks + ' week' + (1 == t_date_weeks ? '' : 's') + ' ago';
                            else
                                t_date_str = t_date_days + ' day' + (1 == t_date_days ? '' : 's') + ' ago';
                        } else
                            t_date_str = t_date_hours + ' hour' + (1 == t_date_hours ? '' : 's') + ' ago';
                    } else
                        t_date_str = t_date_minutes + ' minute' + (1 == t_date_minutes ? '' : 's') + ' ago';
                } else
                    t_date_str = t_date_seconds + ' second' + (1 == t_date_seconds ? '' : 's') + ' ago';
                var t_message =
                    '<li>' +
                    linkify(t_tweets[i].text) +
                    '<span>' +
                    t_date_str +
                    '</span>' +
                    '</li>';
                t_container.append(t_message);
            }
            load_twitter_rotator();
        });
    });
};
var load_twitter_rotator = function () {
    "use strict";
    var t_interval = 6000; //time for tweet rotation in miliseconds
    var t_time = 1000; //time for fade effect in miliseconds; NOTE: must be equal or lower then t_interval
    var t_active_class = 'active';
    var t_active_selector = '.' + t_active_class;
    var t_items = $('.tt_twitter ul li');
    var t_current = 0;
    var t_max = t_items.length;
    var t_height = 0;
    t_items.each(function () {
        t_height = Math.max(t_height, $(this).outerHeight(true));
    });
    $('.tt_twitter').css({
        height: t_height
    });
    t_items.filter(':first').addClass('active').css({
        opacity: 1
    });
    if (t_max) {
        t_max--;
        setInterval(function () {
            t_items.filter(':eq(' + t_current + ')').removeClass(t_active_class).stop().fadeOut('slow', function () {
                t_items.filter(':eq(' + t_current + ')').addClass(t_active_class).stop().fadeIn('slow');
            });
            t_current = (t_current < t_max) ? t_current + 1 : 0;
        }, t_interval);
    }
};
//load modules-------------

jQuery(document).ready(function ($) {
    "use strict";
    load_twitter();
    load_portfolio_toggle();
    load_partners_slider();
});


//==============END TWITTER====================================

//=============Subscription =======================================
function validateEmail(sEmail) {
    "use strict";
    var filter = /^([\w-\.]+)@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.)|(([\w-]+\.)+))([a-zA-Z]{2,4}|[0-9]{1,3})(\]?)$/;
    if (filter.test(sEmail)) {
        return true;
    } else {
        return false;
    }
}

jQuery("#subscribe").submit(function (event) {
    "use strict";
    //preventing from normal submition
    event.preventDefault();
    //validating email
    var sEmail = jQuery('#subscribe .subscribe_line').val();
    if (jQuery.trim(sEmail).length === 0) {
        jQuery('.subscribe_info').html('Email is missing').fadeIn('fast', function () {
            setTimeout(function () {
                $('.subscribe_info').fadeOut('slow');
            }, 3000);
        });
        event.preventDefault(); //stops script execution
        return false;
    }
    //if valid email send info to php
    if (validateEmail(sEmail)) {
        jQuery.post("php/subscribes.php", jQuery("#subscribe").serialize(), function (result) {
            jQuery('.subscribe_info').html(result).fadeIn('fast', function () {
                setTimeout(function () {
                    $('.subscribe_info').fadeOut('slow');
                }, 3000);
            });
        });
    } else {
        jQuery('.subscribe_info').html('Invalid Email').fadeIn('fast', function () {
            setTimeout(function () {
                $('.subscribe_info').fadeOut('slow');
            }, 3000);
        });
        event.preventDefault();
        return false;
    }
});

/* ================= CONTACTS FORM ================= */

jQuery('#contact_form').each(function () {
    "use strict";
    var t = jQuery(this);
    var t_result = jQuery('#contact_send');
    var t_result_init_val = t_result.val();
    var validate_email = function validateEmail(email) {
        var re = /^(([^<>()[\]\\.,;:\s@\"]+(\.[^<>()[\]\\.,;:\s@\"]+)*)|(\".+\"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
        return re.test(email);
    };
    t.submit(function (event) {
        //t_result.val('');
        event.preventDefault();
        var t_values = {};
        var t_values_items = t.find('input[name],textarea[name]');
        t_values_items.each(function () {
            t_values[this.name] = jQuery(this).val();
        });
        if (t_values.name === '' || t_values.email === '' || t_values.message === '') {
            t_result.val('Please fill in all the required fields.');
        } else
        if (!validate_email(t_values.email))
            t_result.val('Please provide a valid e-mail.');
        else
            jQuery.post("php/contacts.php", t.serialize(), function (result) {
                t_result.val(result);
            });
        setTimeout(function () {
            t_result.val(t_result_init_val);
        }, 3000);
    });

});

/* ================= Project FORM ================= */

jQuery('.project_form, .project-form').each(function () {
    "use strict";
    var t = jQuery(this);
    var t_result = jQuery('.project_send');
    var t_result_init_val = t_result.html();
    var validate_email = function validateEmail(email) {
        var re = /^(([^<>()[\]\\.,;:\s@\"]+(\.[^<>()[\]\\.,;:\s@\"]+)*)|(\".+\"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
        return re.test(email);
    };
    t.submit(function (event) {
        //t_result.html('');
        event.preventDefault();
        var t_values = {};
        var t_values_items = t.find('input[name],textarea[name]');
        t_values_items.each(function () {
            t_values[this.name] = jQuery(this).val();
        });
        if (t_values.name === '' || t_values.email === '' || t_values.message === '') {
            t_result.html('Fill in all fields.');
            setTimeout(function () {
                t_result.html(t_result_init_val);
            }, 3000);
        } else
        if (!validate_email(t_values.email)) {
            t_result.html('Please provide a valid e-mail.');
            setTimeout(function () {
                t_result.html(t_result_init_val);
            }, 3000);
        } else {
            t_result.html('Sending project details...');
            jQuery.post("php/project.php", t.serialize(), function (result) {
                t_result.html(result);
                setTimeout(function () {
                    t_result.html(t_result_init_val);
                }, 3000);
            });
        }
    });

});

/* ================= CAROUSEL ================= */
var load_carousel = function () {
    "use strict";
    $('.slide_content').each(function () {
        var t_time = 500; //time for animation effect
        var t = $(this);
        jQuery.browser = {};
        jQuery.browser.mozilla = /mozilla/.test(navigator.userAgent.toLowerCase()) && !/webkit/.test(navigator.userAgent.toLowerCase());
        jQuery.browser.webkit = /webkit/.test(navigator.userAgent.toLowerCase());
        jQuery.browser.opera = /opera/.test(navigator.userAgent.toLowerCase());
        jQuery.browser.msie = /msie/.test(navigator.userAgent.toLowerCase());
        var t_scroll_width = $.browser.mozilla || $.browser.opera || $.browser.msie ? scrollbarWidth() : 0;
        var t_prev = t.find('.slide_nav_back');
        var t_next = t.find('.slide_nav_next');
        var t_items = t.find('.slide_content_full>div').not('.clear');
        var t_items_n = t_items.length;
        var t_items_container_visible_width;
        var t_items_width;
        var t_visible;
        var t_index;
        var t_index_max;
        var t_prev_function;
        var t_next_function;
        var t_pre_process_specific;
        var t_pre_process = function () {
            t_items.attr('style', 'overflow:hidden; padding:5px 0px;');
            t_index = 0;
            t_items_container_visible_width = t.find('.slide_content_show').width();
            t_items_width = t_items.outerWidth(true);
            t_visible = Math.round(t_items_container_visible_width / t_items_width);
            t_index_max = t_items.length - Math.min(t_items.length, t_visible);
            t_pre_process_specific();
        };
        var t_img = t.find('img');
        var t_img_n = t_img.length;
        var t_img_loaded = function () {
            t_prev.click(function (event) {
                t_prev_function();
                if (event.preventDefault !== undefined)
                    event.preventDefault();
                else
                    return false;
            });
            t_next.click(function (event) {
                t_next_function();
                if (event.preventDefault !== undefined)
                    event.preventDefault();
                else
                    return false;
            });
            var t_w = $(window);
            var t_w_x = -1;
            var t_d = $(document);
            var t_w_width_get = function () {
                var t_w_width = t_w.width();
                var t_w_height = t_w.height();
                var t_d_height = t_d.height();
                if (t_w_height < t_d_height)
                    t_w_width += t_scroll_width;
                return t_w_width;
            };
            var t_w_resize_function = function () {
                var t_w_width = t_w_width_get();
                if (t_w_width >= 768) {
                    if (t_w_x !== 1) {
                        t_w_x = 1;

                        t_pre_process_specific = function () {
                            if (t_index_max)
                                t_items.filter(':gt(' + String(t_visible - 1) + ')').each(function () {
                                    var t_items_hidden = $(this);
                                    t_items_hidden.css({
                                        marginTop: t_items_hidden.height() / 2
                                    }).css({
                                        display: 'none'
                                    });
                                });
                        };
                        t_pre_process();
                        t_prev_function = function () {
                            if (t_index > 0) {
                                t_index--;
                                var t_items_current = t_items.filter(':eq(' + t_index + ')');
                                t_items_current.stop(true, true).animate({
                                    marginTop: 0,
                                    height: 'toggle',
                                    width: 'toggle',
                                    marginLeft: 'toggle'
                                }, {
                                    queue: false,
                                    duration: t_time,
                                    easing: 'swing'
                                });
                                var t_index_opposite = t_index + t_visible;
                                var t_items_copposite = t_items.filter(':eq(' + t_index_opposite + ')');
                                t_items_copposite.stop(true, true).animate({
                                    marginTop: t_items_copposite.height() / 2,
                                    height: 'toggle',
                                    width: 'toggle',
                                    marginLeft: 'toggle'
                                }, {
                                    queue: false,
                                    duration: t_time,
                                    easing: 'swing'
                                });
                            }
                        };
                        t_next_function = function () {
                            if (t_index < t_index_max) {
                                var t_index_opposite = t_index + t_visible;
                                var t_items_copposite = t_items.filter(':eq(' + t_index_opposite + ')');
                                t_items_copposite.stop(true, true).animate({
                                    marginTop: 0,
                                    height: 'toggle',
                                    width: 'toggle',
                                    marginLeft: 'toggle'
                                }, {
                                    queue: false,
                                    duration: t_time,
                                    easing: 'swing'
                                });
                                var t_items_current = t_items.filter(':eq(' + t_index + ')');
                                t_items_current.stop(true, true).animate({
                                    marginTop: t_items_current.height() / 2,
                                    height: 'toggle',
                                    width: 'toggle',
                                    marginLeft: 'toggle'
                                }, {
                                    queue: false,
                                    duration: t_time,
                                    easing: 'swing'
                                });
                                t_index++;
                            }
                        };
                    }
                } else {
                    if (t_w_x !== 2) {
                        t_w_x = 2;

                        t_pre_process_specific = function () {
                            t_visible = 1;
                            t_index_max = t_items_n - 1;
                            if (t_index_max)
                                t_items.filter(':gt(' + String(t_visible - 1) + ')').css({
                                    display: 'none'
                                });
                        };
                        t_pre_process();
                        t_prev_function = function () {
                            if (t_index > 0) {
                                t_items.filter(':eq(' + t_index + ')').css({
                                    display: 'none'
                                });
                                t_index--;
                                t_items.filter(':eq(' + t_index + ')').css({
                                    display: 'block'
                                });
                            }
                        };
                        t_next_function = function () {
                            if (t_index < t_index_max) {
                                t_items.filter(':eq(' + t_index + ')').css({
                                    display: 'none'
                                });
                                t_index++;
                                t_items.filter(':eq(' + t_index + ')').css({
                                    display: 'block'
                                });
                            }
                        };
                    }
                }
            };
            t_w.resize(t_w_resize_function);
            t_w_resize_function();
        };
        var t_img_ready = [];
        var t_img_ready_complete = false;
        var t_img_ready_all = function () {
            var i = 0;
            for (i = 0; i < t_img_n && (t_img_ready[i] === 1 || t_img[i].complete); i++)
            ;
            return i === t_img_n;
        };
        var t_img_ready_check = function () {
            var t_img_ready_complete_temp = t_img_ready_all();
            if (!t_img_ready_complete && t_img_ready_complete_temp) {
                t_img_ready_complete = t_img_ready_complete_temp;
                t_img_loaded();
            }
        };
        t_img.each(function (index) {
            t_img_ready[index] = 0;
        });
        if ($.browser.msie) {
            t_img.each(function () {
                this.src = this.src;
            });
        }
        t_img.load(function (index) {
            t_img_ready[index] = 1;
            t_img_ready_check();
        });
        t_img_ready_check();
        t_prev.mousedown(function () {
            return false;
        });
        t_next.mousedown(function () {
            return false;
        });
    });
};

function scrollbarWidth() {
    "use strict";
    var div = $('<div style="width:50px;height:50px;overflow:hidden;position:absolute;top:-200px;left:-200px;"><div style="height:100px;"></div>');
    // Append our div, do our calculation and then remove it 
    $('body').append(div);
    var w1 = $('div', div).innerWidth();
    div.css('overflow-y', 'scroll');
    var w2 = $('div', div).innerWidth();
    $(div).remove();
    return (w1 - w2);
}


/* ================= PARTNERS SLIDER ================= */
var load_partners_slider = function () {
    "use strict";
    $('.our-partners').each(function () {
        var t = $(this);
        var t_left = t.find('.our-partners-arrows-l');
        var t_right = t.find('.our-partners-arrows-r');
        var t_container = t.find('.our-partners-items-wrapper');
        var t_items = t_container.children();
        var t_width = t_items.outerWidth(true);
        var t_visible = Math.round(t_container.parent().innerWidth() / t_width);
        var t_count = t_items.length;
        var t_max = t_count - t_visible;
        var t_index = 0;
        var t_left_function;
        var t_right_function;
        var t_responsive_1;
        var t_responsive_2;
        if (t_max > 0) {
            t_responsive_1 = function () {
                t_items.filter(':gt(0)').hide();
                t_items.eq(0).show();

                t_visible = 1;
                t_max = t_count - t_visible;
                t_index = 0;
                t_container.css({
                    marginLeft: 0,
                    width: 'auto'
                });
                t_items.removeClass('hidden');

                t_left_function = function () {
                    var t_index_old = t_index;
                    t_index--;
                    if (t_index < 0) {
                        t_index = t_max;
                    }
                    t_items.eq(t_index_old).hide();
                    t_items.eq(t_index).show();
                };
                t_right_function = function () {
                    var t_index_old = t_index;
                    t_index++;
                    if (t_index > t_max) {
                        t_index = 0;
                    }
                    t_items.eq(t_index_old).hide();
                    t_items.eq(t_index).show();
                };
            };
            t_responsive_2 = function () {
                t_items.show();

                t_width = t_items.outerWidth(true);
                t_visible = Math.round(t_container.parent().innerWidth() / t_width);
                t_count = t_items.length;
                t_max = t_count - t_visible;
                t_index = 0;
                t_container.css({
                    marginLeft: -t_index * t_width,
                    width: t_width * (t_count + 1)
                });
                t_items.filter(':lt(' + String(t_visible) + ')').removeClass('hidden');
                t_items.filter(':gt(' + String(t_visible - 1) + ')').addClass('hidden');

                t_left_function = function () {
                    var t_index_old = t_index;
                    t_index--;
                    if (t_index < 0) {
                        t_index = 0;
                        var t_interval = setInterval(function () {
                            if (t_index < t_max)
                                t_right_function();
                            else
                                clearInterval(t_interval);
                        }, 100);
                    } else {
                        t_items.eq((t_index + t_visible) % t_count).addClass('hidden');
                        t_items.eq(t_index).removeClass('hidden');
                    }
                    t_container.css({
                        marginLeft: -t_index * t_width
                    });
                };
                t_right_function = function () {
                    var t_index_old = t_index;
                    t_index++;
                    if (t_index > t_max) {
                        t_index = t_max;
                        var t_interval = setInterval(function () {
                            if (t_index > 0)
                                t_left_function();
                            else
                                clearInterval(t_interval);
                        }, 100);
                    } else {
                        t_items.eq((t_index_old + t_visible) % t_count).removeClass('hidden');
                        t_items.eq(t_index_old).addClass('hidden');
                    }
                    t_container.css({
                        marginLeft: -t_index * t_width
                    });
                };
            };
            tesla_responsive([{
                'resolution': 767,
                'action': t_responsive_1
            }, {
                'resolution': 980,
                'action': t_responsive_2
            }, {
                'resolution': 1200,
                'action': t_responsive_2
            }, {
                'resolution': 'default',
                'action': t_responsive_2
            }]);
            t_left.click(function () {
                t_left_function();
            });
            t_right.click(function () {
                t_right_function();
            });
        }
    });
};


/* ================= START SLIDER ================= */
var t_browser_has_css3;
var t_css3_array = ['transition', '-webkit-transition', '-moz-transition', '-o-transition', '-ms-transition'];
var t_css3_index;
$(document).ready(function () {
    "use strict";
    var t_css3_test = $('body');
    for (t_css3_index = 0, t_css3_test.css(t_css3_array[t_css3_index], ''); t_css3_index < t_css3_array.length && null === t_css3_test.css(t_css3_array[t_css3_index]); t_css3_test.css(t_css3_array[++t_css3_index], ''))
    ;
    if (t_css3_index < t_css3_array.length)
        t_browser_has_css3 = true;
    else
        t_browser_has_css3 = false;
    load_main_slider();
});

var load_main_slider = function () {
    "use strict";
    $('.rs_mainslider').each(function () {
        var t_time = 1000; //time for transition animation
        var t_interval_time = 4000; //time for slide change, must be equal or bigger then effect transition time;
        var t_resume_time = 10000; //time to resume autoplay after a click
        var t_hover_time = 200; //time for hover eefect
        var t_text_time = 500; //time for text animation
        var t = $(this);
        var t_prev = t.find('.rs_mainslider_left');
        var t_next = t.find('.rs_mainslider_right');
        var t_items_container = t.find('ul.rs_mainslider_items');
        var t_items = t_items_container.find('li');
        var t_dots_container = t.find('.rs_mainslider_dots_container ul.rs_mainslider_dots');
        var t_dots;
        var t_items_active_class = 'rs_mainslider_items_active';
        var t_items_active_selector = '.' + t_items_active_class;
        var t_dots_active_class = 'rs_mainslider_dots_active';
        var t_dots_active_selector = '.' + t_dots_active_class;
        var t_index = 0;
        var t_index_max = t_items.length - 1;
        var t_select_fix = function () {
            return false;
        };
        var t_interval = 0;
        var t_timeout = 0;
        var t_autoplay_start = function () {
            t_interval = setInterval(t_next_function, t_interval_time);
        };
        var t_autoplay_stop = function () {
            clearInterval(t_interval);
            clearTimeout(t_timeout);
            t_timeout = setTimeout(t_autoplay_start, t_resume_time);
        };
        var t_text = t.find('ul.rs_mainslider_items li .rs_mainslider_items_text');
        var t_text_top = t_text.css('top');
        var t_text_last;
        var t_next_function = function () {
            var t_text_old = t_text.filter(':eq(' + t_index + ')');
            t_index++;
            if (t_index > t_index_max)
                t_index = 0;
            var t_text_current = t_text.filter(':eq(' + t_index + ')');
            if (t_text_last !== undefined)
                t_text_last.stop(true).css({
                    top: -t_text_last.height()
                });
            t_text_last = t_text_old;
            t_text_old.stop(true).animate({
                top: '100%'
            }, {
                queue: false,
                duration: t_text_time,
                easing: 'easeInBack',
                complete: function () {
                    t_text_current.stop(true).animate({
                        top: t_text_top
                    }, {
                        queue: false,
                        duration: t_text_time,
                        times: 1,
                        easing: 'easeOutBack'
                    });
                }
            });
            t_items_container.css({
                height: t_items.filter(t_items_active_selector).outerHeight(true)
            });
            t_items.filter(t_items_active_selector).removeClass(t_items_active_class).children('.rs_mainslider_items_image').stop(true).animate({
                opacity: 0
            }, {
                queue: false,
                duration: t_time,
                easing: 'swing'
            });
            t_dots.filter(t_dots_active_selector).removeClass(t_dots_active_class);
            t_items.filter(':eq(' + t_index + ')').addClass(t_items_active_class).children('.rs_mainslider_items_image').stop(true).animate({
                opacity: 1
            }, {
                queue: false,
                duration: t_time,
                easing: 'swing'
            });
            t_dots.filter(':eq(' + t_index + ')').addClass(t_dots_active_class);
            t_items_container.css({
                height: 'auto'
            });
        };
        var t_items_count = t_items.length;
        t_text.each(function (i) {
            $(this).css({
                top: '-100%'
            });
        });
        t_items.each(function () {
            var x = $(this);
            var x_img = x.children('.rs_mainslider_items_image');
            var x_text = x.children('.rs_mainslider_items_text');
            x_img.each(function () {
                var t_this = this;
                var t_loaded_function = function () {
                    x_text.css({
                        top: -$(t_this).height()
                    });
                    t_items_count--;
                    if (t_items_count === 0) {
                        t_text.filter(':eq(' + t_index + ')').stop(true).animate({
                            top: t_text_top
                        }, {
                            queue: false,
                            duration: t_text_time,
                            easing: 'easeOutBack'
                        });
                        for (i = 0; i <= t_index_max; i++)
                            t_dots_container.append('<li' + (t_index === i ? ' class="' + t_dots_active_class + '"' : '') + '></li>');
                        t_dots = t_dots_container.children('li');
                        t_items.filter(':eq(' + t_index + ')').addClass(t_items_active_class).children('.rs_mainslider_items_image').stop(true).animate({
                            opacity: 1
                        }, {
                            queue: false,
                            duration: t_time,
                            easing: 'swing'
                        });
                        t_dots.filter(':eq(' + t_index + ')').addClass(t_dots_active_class);
                        t_prev.click(function () {
                            var t_text_old = t_text.filter(':eq(' + t_index + ')');
                            t_index--;
                            if (t_index < 0)
                                t_index = t_index_max;
                            var t_text_current = t_text.filter(':eq(' + t_index + ')');
                            if (t_text_last !== undefined)
                                t_text_last.stop(true).css({
                                    top: -t_text_last.height()
                                });
                            t_text_last = t_text_old;
                            t_text_old.stop(true).css({
                                top: t_text_top
                            }).animate({
                                top: '100%'
                            }, {
                                queue: false,
                                duration: t_text_time,
                                easing: 'easeInBack',
                                complete: function () {
                                    t_text_current.stop(true).animate({
                                        top: t_text_top
                                    }, {
                                        queue: false,
                                        duration: t_text_time,
                                        times: 1,
                                        easing: 'easeOutBack'
                                    });
                                }
                            });
                            t_items_container.css({
                                height: t_items.filter(t_items_active_selector).outerHeight(true)
                            });
                            t_items.filter(t_items_active_selector).removeClass(t_items_active_class).children('.rs_mainslider_items_image').stop(true).animate({
                                opacity: 0
                            }, {
                                queue: false,
                                duration: t_time,
                                easing: 'swing'
                            });
                            t_dots.filter(t_dots_active_selector).removeClass(t_dots_active_class);
                            t_items.filter(':eq(' + t_index + ')').addClass(t_items_active_class).children('.rs_mainslider_items_image').stop(true).animate({
                                opacity: 1
                            }, {
                                queue: false,
                                duration: t_time,
                                easing: 'swing'
                            });
                            t_dots.filter(':eq(' + t_index + ')').addClass(t_dots_active_class);
                            t_items_container.css({
                                height: 'auto'
                            });
                            t_autoplay_stop();
                        });
                        t_next.click(function () {
                            t_next_function();
                            t_autoplay_stop();
                        });
                        t_dots.click(function () {
                            var t_dots_current = t_dots.filter(t_dots_active_selector).not(this);
                            if (t_dots_current.length) {
                                var t_text_old = t_text.filter(':eq(' + t_index + ')');
                                t_index = t_dots.index(this);
                                var t_text_current = t_text.filter(':eq(' + t_index + ')');
                                if (t_text_last !== undefined)
                                    t_text_last.stop(true).css({
                                        top: -t_text_last.height()
                                    });
                                t_text_last = t_text_old;
                                t_text_old.stop(true).css({
                                    top: t_text_top
                                }).animate({
                                    top: '100%'
                                }, {
                                    queue: false,
                                    duration: t_text_time,
                                    easing: 'easeInBack',
                                    complete: function () {
                                        t_text_current.stop(true).animate({
                                            top: t_text_top
                                        }, {
                                            queue: false,
                                            duration: t_text_time,
                                            times: 1,
                                            easing: 'easeOutBack'
                                        });
                                    }
                                });
                                t_items_container.css({
                                    height: t_items.filter(t_items_active_selector).outerHeight(true)
                                });
                                t_items.filter(t_items_active_selector).removeClass(t_items_active_class).children('.rs_mainslider_items_image').stop(true).animate({
                                    opacity: 0
                                }, {
                                    queue: false,
                                    duration: t_time,
                                    easing: 'swing'
                                });
                                t_dots_current.filter(t_dots_active_selector).removeClass(t_dots_active_class);
                                t_items.filter(':eq(' + t_index + ')').addClass(t_items_active_class).children('.rs_mainslider_items_image').stop(true).animate({
                                    opacity: 1
                                }, {
                                    queue: false,
                                    duration: t_time,
                                    easing: 'swing'
                                });
                                t_dots.filter(':eq(' + t_index + ')').addClass(t_dots_active_class);
                                t_items_container.css({
                                    height: 'auto'
                                });
                            }
                            t_autoplay_stop();
                        });
                        t.hover(function () {
                            t_prev.stop(true).animate({
                                opacity: 1
                            }, {
                                queue: false,
                                duration: t_hover_time,
                                easing: 'linear'
                            });
                            t_next.stop(true).animate({
                                opacity: 1
                            }, {
                                queue: false,
                                duration: t_hover_time,
                                easing: 'linear'
                            });
                        }, function () {
                            t_prev.stop(true).animate({
                                opacity: 0
                            }, {
                                queue: false,
                                duration: t_hover_time,
                                easing: 'linear'
                            });
                            t_next.stop(true).animate({
                                opacity: 0
                            }, {
                                queue: false,
                                duration: t_hover_time,
                                easing: 'linear'
                            });
                        });
                        t_prev.mousedown(t_select_fix);
                        t_next.mousedown(t_select_fix);
                        t_dots.mousedown(t_select_fix);
                        t_autoplay_start();
                    }
                };
                var t_loaded_ready = false;
                var t_loaded_check = function () {
                    if (!t_loaded_ready) {
                        t_loaded_ready = true;
                        t_loaded_function();
                    }
                };
                var t_loaded_status = function () {
                    if (t_this.complete)
                        t_loaded_check();
                };
                $(this).load(function () {
                    t_loaded_check();
                });
                t_loaded_status();
                if ($.browser.msie)
                    this.src = this.src;
            });
        });
    });
};
/* ================= END SLIDER ================= */



var load_portfolio_toggle = function () {
    "use strict";
    $('.project_slider_actions .acction_1').click(function () {
        var t = $(this);
        var s = t.data('tesla-portfolio-state');
        var c = $('.project_details');
        var a = $('.project-arrows');
        if (s) {
            t.data('tesla-portfolio-state', false);
            c.stop(true, true).animate({
                marginLeft: 0
            }, {
                duration: 400
            });
            a.stop(true, true).animate({
                marginLeft: 360
            }, {
                duration: 400
            });
        } else {
            t.data('tesla-portfolio-state', true);
            c.stop(true, true).animate({
                marginLeft: -300
            }, {
                duration: 400
            });
            a.stop(true, true).animate({
                marginLeft: 60
            }, {
                duration: 400
            });
        }
    });
};

var load_portfolio_filters = function () {
    "use strict";
    $('.portfolio, .events').each(function () {
        var t_container = $(this);
        if (t_container.children('.filter').length) {
            imagesLoaded(t_container[0], function () {
                t_container.find('.filter+.row').children().addClass('active');
                var portfolio_container = t_container.find('.filter+.row')[0];
                var portfolio_msnry = new Masonry(portfolio_container, {
                    itemSelector: '.active',
                    hiddenStyle: {
                        opacity: 0,
                        transform: 'scale(0.001)',
                        top: 0,
                        left: 0
                    }
                });
                var portfolio_animated_height = function () {
                    t_container.find('.filter+.row').addClass('animated_height');
                    portfolio_msnry.off('layoutComplete', portfolio_animated_height);
                };
                portfolio_msnry.on('layoutComplete', portfolio_animated_height);
                portfolio_msnry.layout();
                var filters = t_container.find('.filter>li>a');
                var items = t_container.find('.filter+.row').children();
                var get_active_items = function () {
                    var a;
                    if (filters.eq(0).hasClass('active')) {
                        a = items;
                    } else {
                        a = $([]);
                        filters.filter('.active').each(function () {
                            var category = $(this).attr('data-category');
                            a = a.add(items.filter('.' + category));
                        });
                    }
                    return a;
                };
                var visible_last;
                filters.click(function (e) {
                    if (e.preventDefault)
                        e.preventDefault();
                    var index = filters.index(this);
                    var t = $(this);
                    if (index) {
                        filters.eq(0).removeClass('active');
                        if (t.hasClass('active')) {
                            t.removeClass('active');
                            if (!filters.filter('.active').length) {
                                filters.eq(0).addClass('active');
                            }
                        } else {
                            t.addClass('active');
                        }
                    } else {
                        filters.filter(':gt(0)').removeClass('active');
                        t.addClass('active');
                    }

                    var visible = get_active_items();
                    visible.css({
                        display: ''
                    }).addClass('active');

                    items.not(visible).removeClass('active');
                    portfolio_msnry.hide(portfolio_msnry.getItems(items.not(visible)));

                    portfolio_msnry.reloadItems();

                    if (undefined !== visible_last) {
                        portfolio_msnry.reveal(portfolio_msnry.getItems(visible.not(visible_last)));
                    }
                    visible_last = visible;

                    portfolio_msnry.layout();
                    return false;
                });
            });
        }
    });
};

var load_portfolio_titles = function () {
    "use strict";
    $('.portfolio_item>.item_hover').each(function () {
        var t = $(this);
        t.append($('<div/>').addClass('item_hover_wrapper').height(t.height()).append(t.children().remove())).addClass('item_hover_full');
    });
};

var load_team = function () {
    "use strict";
    if (!$('.our_team').length)
        return;
    $('.all_team>.row>div>a').click(function (e) {
        if (e.preventDefault)
            e.preventDefault();
        var t_single = $('.single_team');
        t_single.children().remove();
        t_single.append($(this).parent().children('.row').clone());
        return false;
    });
};


/* ================= Our clients slider ================= */

(function () {
    "use strict";
    var ourClients = function () {
        var clientsContainer = $('.client_box'),
            clientsItem = clientsContainer.find('li'),
            numItems = clientsItem.length,
            itemsWidth = clientsItem.outerWidth(true),
            navButtons = $('.r_p_a > li > a'),
            i = 0,
            t = clientsContainer.data('num-items'),
            containerWidth = numItems * itemsWidth;

        if ($(window).width() > 767) {
            clientsContainer.width(containerWidth); //calculate width of clients list

            $(window).resize(function () {
                clientsContainer.width(containerWidth); //calculate width of clients list
            });
        } else {
            t = 1;
            clientsItem.eq(0).css('position', 'relative');
        }

        navButtons.click(function (e) {
            e.preventDefault();

            clientsItem.css({
                '-webkit-transform': 'rotateY(-360deg) scale(0)',
                '-moz-transform': 'rotateY(-360deg) scale(0)',
                '-o-transform': 'rotateY(-360deg) scale(0)',
                '-ms-transform': 'rotateY(-360deg) scale(0)',
                'transform': 'rotateY(-360deg) scale(0)'
            });

            if ($(window).width() < 767) {
                clientsItem.css('position', 'absolute');
            }

            if ($(this).hasClass('test_right')) {

                if (i < numItems - t) {
                    i++;
                } else {
                    i = 0;
                }

                if ($(window).width() > 767) {
                    clientsContainer.css('margin-left', -itemsWidth * i);
                } else {
                    clientsItem.eq(i).css('position', 'relative');
                }
            }

            if ($(this).hasClass('test_left')) {

                if (i > 1) {
                    i--;
                } else {
                    i = numItems - t;
                }

                if ($(window).width() > 767) {
                    clientsContainer.css('margin-left', -itemsWidth * i);
                } else {
                    clientsItem.eq(i).css('position', 'relative');
                }


            }

            for (var z = 0; z < t; z++) {
                clientsItem.eq(z + i).css({
                    '-webkit-transform': 'rotateY(0deg) scale(1)',
                    '-moz-transform': 'rotateY(0deg) scale(1)',
                    '-o-transform': 'rotateY(0deg) scale(1)',
                    '-ms-transform': 'rotateY(0deg) scale(1)',
                    'transform': 'rotateY(0deg) scale(1)'
                });
            }

        });

        for (var z = 0; z < t; z++) {
            clientsItem.eq(z + i).css({
                '-webkit-transform': 'rotateY(0deg) scale(1)',
                '-moz-transform': 'rotateY(0deg) scale(1)',
                '-o-transform': 'rotateY(0deg) scale(1)',
                '-ms-transform': 'rotateY(0deg) scale(1)',
                'transform': 'rotateY(0deg) scale(1)'
            });
        }
    };

    ourClients();
})();


/* ================= Project FORM ================= */



/* AS JavaScript [START] */
$Electra = {};

// Email object
$Electra.email = {};

// Forms
$Electra.form = {};
$Electra.form.errorClass = 's_error';

$Electra.form.subscribe = {};
$Electra.form.subscribe.id = '#newsletter';

jQuery(document).ready(function ($) {

    "use strict";

    /* TESTIMONIALS */
    $('.testimonials a.arrow').click(function (e) {
        e.preventDefault();
        var trigger = $(this).attr('data-trigger');
        var list = $(this).closest('ul.testimonials');
        var total_items = list.children().length - 2;
        var index = list.find('li.testimonial-item.active').index() - 2;

        var next;
        if (trigger === 'next')
            next = ((index + 1) >= total_items) ? 0 : index + 1;
        else if (trigger === 'prev')
            next = ((index - 1) < 0) ? total_items - 1 : index - 1;

        list.children('li.testimonial-item').eq(index).toggleClass('active');
        list.children('li.testimonial-item').eq(next).toggleClass('active');

        return false;
    });

    /* COUNTDOWN */
    var cd_duedate = $('#electra_countdown').attr('data-duedate');
    var cd_start = new Date($('#electra_countdown').attr('data-startdate')).getTime();
    var cd_end = new Date(cd_duedate).getTime();
    $Electra.countdown = (jQuery().countdown) ? $('#electra_countdown').countdown(cd_duedate, function (event) {
        var $this = $(this);
        // Total days
        var days = Math.round(Math.abs((cd_start - cd_end)) / (24 * 60 * 60 * 1000));
        var divider = {
            'seconds': 60,
            'minutes': 60,
            'hours': 24
        };
        var progress = null;
        switch (event.type) {
        case "seconds":
        case "minutes":
        case "hours":
        case "days":
        case "weeks":
        case "daysLeft":
            $this.find('b#' + event.type).html(event.value);
            if (event.type === 'days') {
                progress = ((days - event.value) * 100) / (days);
            } else {
                progress = (100 / divider[event.type]) * (divider[event.type] - event.value);
            }
            $this.find('.countdown_progress.' + event.type + ' .filled')
                .css('width', progress + '%');
            break;
        case "finished":
            $this.hide();
            break;
        }
    }) : null;

    /* GALLERY IMAGE ZOOM */
    $Electra.swipebox = (jQuery().swipebox) ? $(".swipebox").swipebox() : null;

    /* SUBSCRIBE FORM */
    $($Electra.form.subscribe.id).on('submit', function (e) {
        e.preventDefault();
        var form = $(this);
        var input = form.find('input[type="text"]');
        if ($Electra.form.validate(form)) {
            $.post('php/subscribe.php', form.serialize(), function (result) {
                input.attr('placeholder', result);
                input.val('');
            });
        } else {
            setTimeout(function () {
                $(input).removeClass($Electra.form.errorClass);
            }, 800);
        }
        return false;
    });
});

/*  EMAIL VALIDATION FUNCTION */
$Electra.email.validate = function (email) {
    "use strict";
    var re = /^(([^<>()[\]\\.,;:\s@\"]+(\.[^<>()[\]\\.,;:\s@\"]+)*)|(\".+\"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
    return re.test(email);
};
/* --------------------------- */

/*  FORM ELEMENT VALIDATION FUNCTION */
$Electra.form.validate = function validate(form) {
    "use strict";
    var valid = true;
    $.each(form.find(':input:not(:input[type="submit"])'), function (index, input) {
        var val = $(input).val();
        if ($.trim(val) === '') {
            $Electra.form.inputError(input);
            valid = false;
            return false;
        }
        if ($(input).attr('name') === 'email') {
            if (!$Electra.email.validate(val)) {
                $Electra.form.inputError(input);
                valid = false;
                return false;
            }
        }
    });
    return valid;
};

/* TOGGLE INPUT ERROR CLASS */
$Electra.form.inputError = function inputError(input) {
    "use strict";
    if (!$(input).hasClass($Electra.form.errorClass))
        $(input).addClass($Electra.form.errorClass);
    $(input).focus();
};
/* AS JavaScript [END] */


/*========== Flickr Widget ==========*/

/* ================= PHOTOSTREAM ================= */

var load_photostream = function () {
    "use strict";
    $('.flickr_widget').each(function () {
        var stream = $(this);
        var stream_userid = stream.attr('data-userid');
        var stream_items = parseInt(stream.attr('data-items'), 10);
        $.getJSON("http://api.flickr.com/services/feeds/photos_public.gne?lang=en-us&format=json&id=" + stream_userid + "&jsoncallback=?", function (stream_feed) {
            var i;
            var stream_function = function (i) {
                if (stream_feed.items[i].media.m) {
                    var stream_a = $('<a>').addClass('PhotostreamLink').attr('href', stream_feed.items[i].link).attr('target', '_blank');
                    var stream_img = $('<img>').addClass('PhotostreamImage').attr('src', stream_feed.items[i].media.m).attr('alt', '').each(function () {
                        var t_this = this;
                        var j_this = $(this);
                        var t_loaded_function = function () {
                            stream_a.append(t_this);
                        };
                        var t_loaded_ready = false;
                        var t_loaded_check = function () {
                            if (!t_loaded_ready) {
                                t_loaded_ready = true;
                                t_loaded_function();
                            }
                        };
                        var t_loaded_status = function () {
                            if (t_this.complete && j_this.height() !== 0)
                                t_loaded_check();
                        };
                        t_loaded_status();
                        $(this).load(function () {
                            t_loaded_check();
                        });
                    });
                    stream.append($('<li>').append(stream_a));
                }
            };
            for (i = 0; i < stream_items && i < stream_feed.items.length; i++) {
                stream_function(i);
            }
        });
    });
};

load_photostream();

/* -----------------------------------------------------------------------*/

jQuery(document).ready(function ($) {

    "use strict";

    $('.gallery_slider').zoomyslider({
        'debug': true,
        'keynav': true,
        'thumbnails': {
            'onmousemove': true
        }
    });

});

function cl(msg) {
    "use strict";
    console.log(msg);
}

/**
 * Zoomy slider plugin
 */
(function ($) {

    "use strict";

    $.fn.zoomyslider = function (user_opts) {
        var $this = $(this);

        if (!$this.length)
            return;

        var opts = $.extend({
            debug: false,
            arrows: {
                slide: null,
                thumb: null,
                step: '1x'
            },
            thumbnails: {
                onmousemove: true,
                opened: true
            },
            start: 0,
            autoplay: null,
            keynav: false,
            thumbnav: false
        }, user_opts);

        var $global = {
            document: {
                document: $(document),
                width: $(document).width(),
                height: $(document).height()
            }
        };

        // Set Viewport max height
        $this.height($global.document.height - $this.offset().top);

        var $thumbnails = {
            parent: function () {
                return $(this.thumb).closest('[data-slider="thumbnails"]');
            },
            thumb: $this.find('[data-slider="thumb"]').children(),
            margin: function () {
                return parseInt($(this.thumb).eq(this.count()).css('margin-left'), 10);
            },
            viewport: function () {
                return $(this.thumb).closest('[data-slider="thumbnails"]').width();
            },
            width: function () {
                return parseInt($(this.thumb[0]).outerWidth(), 10);
            },
            first: function () {
                return this.thumb[0];
            },
            next: function () {
                return (this.active() === this.count()) ? 0 : this.active() + 1;
            },
            prev: function () {
                return (this.active() === 0) ? this.count() : this.active() - 1;
            },
            drawer: $(this).find('[data-thumb="drawer"]'),
            count: function () {
                return this.thumb.length - 1;
            },
            step: function () {
                var step = (opts.arrows.step.indexOf('x') === -1) ? opts.arrows.step : (opts.arrows.step.match(/[\d\.]+/)[0] * this.width());
                return parseInt(step, 10);
            },
            img: function (index) {
                index = typeof index !== 'undefined' ? index : 0;
                var elem = this.thumb.eq(index);
                return elem.find('img');
            },
            src: function (index) {
                return this.img(index).attr('src');
            },
            active: function () {
                return this.thumb.parent().children('[data-slider="active"]').index();
            },
            update: function (index, arrow) {
                $viewport.show(this.src(index));
                this.thumb.removeAttr('data-slider').find('img').removeClass('hover');
                this.thumb.eq(index).attr('data-slider', 'active').find('img').addClass('hover');

                // Check if the current active thumbnail is not in the viewport and scroll if needed
                var visible = this.isInViewport(index, arrow);
                if (!visible) {
                    arrow = (index === this.count() && arrow === 'left') ? 'end' : arrow;
                    arrow = (index === 0 && arrow === 'right') ? 'start' : arrow;
                    this.scroll(arrow, index);
                }
            },
            scroll: function (arrow, index) {
                var offset = this.viewport() - ((this.width() + this.margin() * 2) * (this.count() + 1));
                var left = parseInt($(this.first()).css('margin-left'), 10);
                console.log(left);
                if (arrow === 'left') {
                    if (index !== 0) {
                        // This check sets the margin left value so that if the current
                        // margin value + scroll step + thumbnail width is less than 0
                        // the thumbnail will scroll normally, if the sum is greater than 0
                        // the thumbnails will be set to default margin (or 0 if the element has no margin set) 
                        // in order to avoid scrolling 
                        // more than needed.
                        left = ((left + this.step() + this.width()) < 0) ? left += this.step() : this.margin();
                        console.log('left:' + left);
                        $(this.first()).css('margin-left', left);
                    } else {
                        this.pull(arrow);
                    }
                } else if (arrow === 'right') {
                    if ((left - this.step()) < offset) {
                        if (left === (offset - this.width())) {
                            this.pull(arrow);
                            return;
                        } else {
                            left = offset + this.margin();
                        }
                    } else {
                        left -= this.step();
                    }
                    $(this.first()).css('margin-left', left);
                } else if (arrow === 'start') {
                    $(this.first()).css('margin-left', this.margin());
                } else if (arrow === 'end') {
                    var ml = offset + this.margin();
                    $(this.first()).css('margin-left', ml);
                }
            },
            pull: function (dir) {
                var first = this.first();
                var margin = parseInt($(first).css('margin-left').match(/[\d\.]+/)[0], 10);
                if (dir === 'left') {
                    $(first).css('margin-left', 40);
                } else if (dir === 'right') {
                    $(first).css('margin-left', -(margin + 40));
                }
                setTimeout(function () {
                    $(first).css('margin-left', -margin);
                }, 600);
            },
            toggleOpen: function () {
                this.parent().toggleClass('closed');
                $(this.drawer).html((this.isOpened()) ? '-' : '+');
            },
            isOpened: function () {
                return !this.parent().hasClass('closed');
            },
            isInViewport: function (index, arrow) {
                if (!index)
                    return parseInt($(this.thumb).eq(index).css('margin-left'), 10) >= 0;
                var pos = $(this.thumb).eq(index).position().left;
                pos = (arrow == 'right') ? pos + this.width() : pos;
                return (pos > 0 && pos < this.viewport()) ? true : false;
            }
        };

        // Handle Viewport Slider Animation
        var $viewport = {
            viewport: $this.find('[data-slider="viewport"]'),
            active: function () {
                return this.viewport.children('[data-slide="in"]');
            },
            pasive: function () {
                return this.viewport.children('[data-slide="out"]');
            },
            show: function (src) {
                if (this.active().hasClass('active')) {
                    this.pasive().find('img').attr('src', src);
                } else {
                    this.active().find('img').attr('src', src);
                }
                this.active().toggleClass('active');
                this.pasive().toggleClass('active');
            }
        };

        // Initialize Default/Starting Slider
        $thumbnails.update(opts.start);

        // Set Slider Navigation Arrows
        var $sliderArrows = (opts.arrows.slide) ? $(opts.arrows.slide) : $this.find('[data-slide-arrow]');
        if (!$sliderArrows.length)
            debug('Slider arrow elemets/selector is missing!');

        // Handle Slider Arrows Click Event
        $sliderArrows.click(function (e) {
            var arrow = $(this).attr('data-slide-arrow');
            var index = null;
            if (arrow === "left") {
                index = $thumbnails.prev();
            } else if (arrow === "right") {
                index = $thumbnails.next();
            }
            $thumbnails.update(index, arrow);
        });

        // Set Thumbnails Navigation Arrows
        var $thumbArrows = (opts.arrows.thumb) ? $(opts.arrows.thumb) : $this.find('[data-thumb-arrow]');
        if (!$thumbArrows.length)
            debug('Thumbnails arrow alements/selector is missing!');

        // Handle Thumbnails Arrow Click Event
        var left = 0;
        $thumbArrows.click(function (e) {
            var arrow = $(this).attr('data-thumb-arrow');
            $thumbnails.scroll(arrow);
        });

        // Handle Thumbnails Click Event
        $thumbnails.thumb.click(function () {
            var index = $(this).index();
            $thumbnails.update(index);
        });

        // Check default parameter and add appropriate class if needed
        if (!opts.thumbnails.opened)
            $thumbnails.toggleOpen();
        // Handle Thumbnails tray drawer
        if (!opts.thumbnails.onmousemove) {
            $thumbnails.drawer.click(function () {
                $thumbnails.toggleOpen();
            });
        }

        // Show thumbnails when mouse at the bottom
        if (opts.thumbnails.onmousemove) {
            $(document).mousemove(function (e) {
                var pos = e.screenY;
                var edge = $global.document.height - $thumbnails.parent().height();
                if (!$thumbnails.isOpened() && pos >= edge) {
                    $thumbnails.toggleOpen();
                } else if ($thumbnails.isOpened() && pos < edge) {
                    $thumbnails.toggleOpen();
                }
            });
        }

        // Autoplay
        if (opts.autoplay !== null) {
            autoplay = function (init) {
                setTimeout(autoplay, opts.autoplay);
                // check if the function runs for the first time
                // in order to avoid skipping the first slide
                if (!init) {
                    $thumbnails.update($thumbnails.next());
                }
            };
            autoplay(true);
        }

        // Keyboard Navigation
        if (opts.keynav) {
            document.onkeydown = function (e) {
                switch (window.event.keyCode) {
                case 37: // Left Key
                    $thumbnails.update($thumbnails.prev(), 'left');
                    break;
                case 39: // Right Key
                    $thumbnails.update($thumbnails.next(), 'right');
                    break;
                }
            };
        }

        // Debug function
        function debug($msg) {
            if (opts.debug === true && window.console && window.console.log) {
                window.console.log($msg);
            }
        }
    };
}(jQuery));