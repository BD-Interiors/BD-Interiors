$(document).ready(function () {

    $("#dropdown-btn").click(function (event) {
        event.stopPropagation();
        $("#dropdown-content").css("display", "flex");
    });

    $(document).click(function (event) {
        if (!$(event.target).closest("#dropdown").length) {
            $("#dropdown-content").hide();
        }
    });

});