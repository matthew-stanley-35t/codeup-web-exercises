"use strict";

$(function() {

    $('h1').click(function() {
        $(this).css("background", "green");
    })

    $('p').dblclick(function() {
        $(this).css("font-size", "18px")
    })

    $('li').hover(function(){
        $('li').css('color', 'red');
    }, function(){
        $('li').css('color', 'black');
    });

});