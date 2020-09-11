/* Script 1: 
Close nav menu after clicking on link (small screens)

.navbar-collapse is clicked on while open ->
.navbar-toggler will be toggled ->
closing .navbar-collapse ->
while going to the section corresponding to the clicked link */

$(document).ready(function() {
    $(document).click(function(event) {
        var clickover = $(event.target);
        var _opened = $(".navbar-collapse").hasClass("show");
        if (_opened === true && !clickover.hasClass("navbar-toggler")) {
            $(".navbar-toggler").click();
        }
    });
});

/* Script 2:
Lightbox settings: https://lokeshdhakar.com/projects/lightbox2/ */

$(document).ready(function() {
    lightbox.option({
        'wrapAround': true
    })
});

