$(function () {

    "use strict";

    function trimText(selector , maxLength) {

        $(selector).each(function () {

            if ($(this).text().length > maxLength) {

                var trimmedText = $(this).text().substr(0, maxLength);

                $(this).text(trimmedText + '...');
            }
        });
    }

    trimText('.container p', 150);

});