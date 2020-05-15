$(document).ready(function () { 
    $(".form-check-input").click(function() {
        var label = $(this).next();
        var info = label.children("#email");
        $("#to").val(info.text());
    });
});