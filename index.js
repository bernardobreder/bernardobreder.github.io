function onGenericPaper(data) {
    if (data.full) {
        $(".short").fadeIn("slow")
        $(".short-only").fadeOut("slow")
        $(".medium").fadeIn("slow")
        $(".medium-only").fadeOut("slow")
        $(".full").fadeIn("slow")
        $(".full-only").fadeIn("slow")
        $(".short-button").addClass("btn-outline-secondary").removeClass("btn-secondary")
        $(".medium-button").addClass("btn-outline-warning").removeClass("btn-warning")
        $(".full-button").removeClass("btn-outline-success").addClass("btn-success")
    } else if (data.medium) {
        $(".short").fadeIn("slow")
        $(".short-only").fadeOut("slow")
        $(".medium").fadeIn("slow")
        $(".medium-only").fadeIn("slow")
        $(".full").fadeOut("slow")
        $(".full-only").fadeOut("slow")
        $(".short-button").addClass("btn-outline-secondary").removeClass("btn-secondary")
        $(".medium-button").removeClass("btn-outline-warning").addClass("btn-warning")
        $(".full-button").addClass("btn-outline-success").removeClass("btn-success")
    } else if (data.short) {
        $(".short").fadeIn("slow")
        $(".short-only").fadeIn("slow")
        $(".medium").fadeOut("slow")
        $(".medium-only").fadeOut("slow")
        $(".full").fadeOut("slow")
        $(".full-only").fadeOut("slow")
        $(".short-button").removeClass("btn-outline-secondary").addClass("btn-secondary")
        $(".medium-button").addClass("btn-outline-warning").removeClass("btn-warning")
        $(".full-button").addClass("btn-outline-success").removeClass("btn-success")
    }
}

function onShortPaper() {
    onGenericPaper({
        short: true, medium: false, full: false,
        references: false, profile: true, howthink: false, college: true, paper: false, experience: false, proposal: false, work: true, language: true, citizenship: false
    })
}

function onMediumPaper() {
    onGenericPaper({
        short: true, medium: true, full: false,
        references: false, profile: true, howthink: true, college: true, paper: true, experience: false, proposal: false, work: true, language: true, citizenship: true
    })
}

function onFullPaper() {
    onGenericPaper({
        short: true, medium: true, full: true,
        references: false, profile: true, howthink: true, college: true, paper: true, experience: true, proposal: true, work: true, language: true, citizenship: true
    })
}

function refreshTooltip() {

}

function onBody() {
    $('[data-toggle="tooltip"]').tooltip()
    $(".full-only").hide()
    $(".short-only").hide()
    onMediumPaper()
}