function onGenericPaper(data) {
    // if (data.references) {
    //     $("references").fadeIn("slow")
    //     $(".reference").fadeIn("slow")
    // } else {
    //     $("references").fadeOut("slow")
    //     $(".reference").fadeOut("slow")
    // }
    // if (data.profile) {
    //     $(".profile").fadeIn("slow")
    // } else {
    //     $(".profile").fadeOut("slow")
    // }
    // if (data.howthink) {
    //     $(".how-i-think").fadeIn("slow")
    // } else {
    //     $(".how-i-think").fadeOut("slow")
    // }
    // if (data.college) {
    //     $(".college").fadeIn("slow")
    // } else {
    //     $(".college").fadeOut("slow")
    // }
    // if (data.paper) {
    //     $(".paper").fadeIn("slow")
    // } else {
    //     $(".paper").fadeOut("slow")
    // }
    // if (data.experience) {
    //     $(".experience").fadeIn("slow")
    // } else {
    //     $(".experience").fadeOut("slow")
    // }
    // if (data.proposal) {
    //     $(".proposal").fadeIn("slow")
    // } else {
    //     $(".proposal").fadeOut("slow")
    // }
    // if (data.work) {
    //     $(".work").fadeIn("slow")
    // } else {
    //     $(".work").fadeOut("slow")
    // }
    // if (data.language) {
    //     $(".language").fadeIn("slow")
    // } else {
    //     $(".language").fadeOut("slow")
    // }
    // if (data.work) {
    //     $(".citizenship").fadeIn("slow")
    // } else {
    //     $(".citizenship").fadeOut("slow")
    // }
    if (data.full) {
        $(".short").fadeIn("slow")        
        $(".medium").fadeIn("slow")
        $(".full").fadeIn("slow")
        $(".short-button").addClass("btn-outline-secondary").removeClass("btn-secondary")
        $(".medium-button").addClass("btn-outline-warning").removeClass("btn-warning")
        $(".full-button").removeClass("btn-outline-success").addClass("btn-success")
    } else if (data.medium) {
        $(".short").fadeIn("slow")
        $(".medium").fadeIn("slow")
        $(".full").fadeOut("slow")
        $(".short-button").addClass("btn-outline-secondary").removeClass("btn-secondary")
        $(".medium-button").removeClass("btn-outline-warning").addClass("btn-warning")
        $(".full-button").addClass("btn-outline-success").removeClass("btn-success")
    } else if (data.short) {
        $(".short").fadeIn("slow")
        $(".medium").fadeOut("slow")
        $(".full").fadeOut("slow")
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
    onFullPaper()
}