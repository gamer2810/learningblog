function validateForm(){
    var lang = $.cookie('PIM_LOCALE_NAME');
    var alert='';

    if(lang !== undefined) {
        if(lang == 'fr') {
            alert = 'Veuillez remplir tous les champs obligatoires';
        }
        if(lang == 'vn') {
            alert = 'Vui lòng điền vào tất cả ô trống.';
        }
        if(lang == 'en') {
            alert='Please fill all mandatory fields.';
        }
    };

    var prjNumber = document.forms["project-form"]["number"];
    var prjName  = document.forms["project-form"]["name"];
    var prjCustomer  = document.forms["project-form"]["customer"];

    if(prjNumber.value === '' || prjName.value === '' || prjCustomer.value === ''){
        $('.validation-err-cause').text(alert);
        $('.validation-err').show();
    }
}