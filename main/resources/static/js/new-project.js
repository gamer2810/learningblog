$(document).ready(function() {
    var today = moment().format('YYYY-MM-DD');
    $('#prj-startdate').val(today);
    $('#prj-enddate').val(today);
    $('.validation-err').hide();

    var searchParams = new URLSearchParams(window.location.search);
    if(searchParams.has('number')){
        $.ajax({
            method : "GET",
            url : "/getproject/".concat(searchParams.get('number')),
            data : {
                number : searchParams.get('number'),
            },
        }).done(function (data) {
            $('#prj-number').val(data["number"]);
            $('#prj-number').prop('disabled',true);
            $('#prj-name').val(data["name"]);
            $('#prj-customer').val(data["customer"]);
        });
    };
});

$('#prj-number').focus(function(){
    $('#prj-number-hint').css('display','inline');
});

$('#prj-number').focusout(function(){
    $('#prj-number-hint').css('display','none');
});

$('.validation-err-dismiss').click(function () {
    $('.validation-err').hide();
});



