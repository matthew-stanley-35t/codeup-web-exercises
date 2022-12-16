"use strict";

$(function() {

    const konamiCode = [38, 38, 40, 40, 37, 39, 37, 39, 66, 65, 13]; // ↑↑↓↓←→←→BAreturn
    let check = [];

    function addKey(keyCode) {
        check.push(keyCode)
    }

    function validate() {
        return check.map((val, i) => konamiCode[i] === val ? true : false);
    }

//allows for clicking
// let buttons = document.querySelectorAll('button');
// buttons.forEach(button => {
// 		button.addEventListener('click', event => {
// 			addKey(parseInt(event.path[0].dataset.key))
// 			const isUnvalid = validate().includes(false);
//
// 			if(isUnvalid){
// 				check = [];
// 			}
//
// 			if(check.length === konamiCode.length && !isUnvalid){
// 				alert("code entered");
// 			}
// 		});
// 	})

    function show_image() {
        let img = document.createElement("img");
        img.src = "imgs/konami.gif";
        img.width = "500";
        img.height = "500";
        img.id = "konamiGif"
        //img.alt = alt;

        // This next line will just add it to the <body> tag
        //document.getElementById("codeEntered").appendChild(img);
        $("#controller").addClass("invisible");
        $("#codeEntered").append(img);
        setTimeout(() => {;
            $(`#controller`).removeClass("invisible");
            $(`#konamiGif`).remove();
        }, 5000);
    }
//allows for keyboard input
    $(document).keyup(function(event){
        const validKeyDown = document.querySelector(`button[data-key="${event.keyCode}"]`);

        if(!!validKeyDown){
            addKey(event.keyCode)
            console.log(event.keyCode)
        } else {
            check = [];
        }

        if(event.keyCode == 66){
            $("#bButton").css("box-shadow", "none");
            let delay = 40; // delay time in milliseconds
            let timeoutId = setTimeout(function () {
                $("#bButton").css("box-shadow", "0px 1px 2px 0.5px #0b0b09");
            }, delay);
        }

        const isUnvalid = validate().includes(false);

        if(isUnvalid){
            check = [];
        }

        if(check.length === konamiCode.length && !isUnvalid){
            show_image();

        }
    });

});


