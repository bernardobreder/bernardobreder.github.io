
function buildTree() {
    let handler = function () {
        let parent = $(this).parent()
        if (parent.hasClass("open")) {
            parent.removeClass("open")
            parent.find("li.open").removeClass("open")
        } else {
            parent.addClass("open")
        }
    }
    $("ul.tree a")
        .css('cursor', 'pointer')
        .click(handler)
        .bind("tap", handler)
}

function onBody() {
    $(".container h1")
        .addClass("font-weight-light")
        .addClass("text-uppercase");
    $(".container dl dd")
        .addClass("text-justify")
    $(".container dl dt")
        .addClass("text-left")
    buildTree()

    $.each($("import"), function (index, item) {
        let url = $(item).attr("src");
        $.ajax({
            url: url,
        }).done(function (data) {
            $(item).replaceWith(data);
            onBody()
        });
    })
}

$(document).ready(function () {
    onBody()
});