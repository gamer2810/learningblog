$(document).ready(function () {
    var lang = $.cookie('PIM_LOCALE_NAME');

    if(lang !== undefined) {
        if(lang == 'fr') {
            $('#language-choices-fr').attr("checked","checked");
            return;
        }
        if(lang == 'vn') {
            $('#language-choices-vn').attr("checked","checked");
            return;
        }

        $('#language-choices-en').attr("checked","checked");
    }
    else{
        $('#language-choices-en').attr("checked","checked");
    }
});

$('input[type=radio][name=lang]').change(function () {
    window.location.href = window.location.pathname + '?lang=' + this.value;
});