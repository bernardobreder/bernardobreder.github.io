
$(document).ready(function () {
    $(".container h1")
        .addClass("font-weight-light")
        .addClass("text-uppercase");
    $(".container dl dd")
        .addClass("text-justify")
    $(".container dl dt")
        .addClass("text-left")

        $("ul.tree a")
        .css('cursor', 'pointer')
        .click(function () {
            let parent = $(this).parent()
            if (parent.hasClass("open")) {
                parent.removeClass("open")
                parent.find("li.open").removeClass("open")
            } else {
                parent.addClass("open")
            }
        })
    
});