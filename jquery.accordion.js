/*
 * accordion
 *
 * A very simple jQuery accordion/drawer widget
 *
 * Will turn every even item within the container element
 * into a handle and every odd item into a drawer.
 * When handles are clicked, drawers either open or close.
 * If a drawer has a css class "open" it will be open.
 *
 * Usage: <div class="accordion">[...]</div>
 *
 * Copyright (c) 2011 Dave McCall (http://dave-mccall.com)
 *
 * Released under the MIT license.
 * http://www.opensource.org/licenses/mit-license.php
 *
 */

(function ($) {
    $.fn.accordion = function (method) {
        var methods = {
            init: function (options) {
                if (options == null) options = {};
                this.each(function () {
                    var $this = $(this);
                    if ($this.hasClass("initialized")) return $this;
                    $this.addClass("accordion initialized");
                    var index = 0;
                    $this.children().each(function () {
                        var $child = $(this);
                        if (index % 2 == 0) {
                            $child.addClass("handle").bind("click", function () {
                                $child.toggleClass("open").next(".drawer").toggleClass("open").slideToggle();
                                return false;
                            });
                        }
                        else {
                            $child.addClass("drawer");
                            if ($child.hasClass("open"))
                                $child.prev(".handle").addClass("open");
                            else
                                $child.css({ display: "none" });

                        }
                        index++;
                    });
                });
                return $(this);
            }
        }
        if (methods[method])
            return methods[method].apply(this, Array.prototype.slice.call(arguments, 1));
        else if (typeof method === 'object' || !method)
            return methods["init"].apply(this, arguments);
        else
            $.error("Method " + method + " does not exist");
    }
	$(document).ready(function () {
		$(".accordion").accordion();
	});
})(jQuery);