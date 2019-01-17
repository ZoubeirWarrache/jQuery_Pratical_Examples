$(function () {

    "use strict";

    var newTask = $('.task-input');

    // add new task to list
    $('.add-task').on('submit', function (e) {

        e.preventDefault();

        if (newTask.val() != '') {

            $('<li>'+ newTask.val() +'</li>').appendTo('.tasks');
        }

        newTask.val('');
    });

    // remove task on click
    $('.tasks').on('click', 'li', function() {

        $(this).css('text-decoration', 'line-through').delay(500).fadeOut(500, function () {

            $(this).remove();
        });
    });
});