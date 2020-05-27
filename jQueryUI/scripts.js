$(document).ready(function () {

    var numProducts = 0;

    $('#tabs').tabs();

    $(".draggable").draggable();

    $(".droppable").droppable({
        drop: function (event, ui) {
            numProducts++;
            var plural = '';
            if(numProducts > 1 ){
                plural = "s";
            }
            $(this)
                .find("h2")
                .html("You have " + numProducts + " product" + plural + " in cart!");
        }
    });
})