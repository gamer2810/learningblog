var selected = 0;
var deletearr = [];
var deletenumber = ' project(s) have been selected';
var deletebtn = 'Delete selected projects ';
var table;

$(document).ready(function () {
    var searchParams = new URLSearchParams(window.location.search);
    var lang = $.cookie('PIM_LOCALE_NAME');

    if(lang !== undefined) {
        if(lang == 'fr') {
            lang = 'French';
            deletenumber = ' projet(s) ont été sélectionnés';
            deletebtn = 'Supprimer sélectionnée ';
        }
        if(lang == 'vn') {
            lang = 'Vietnamese';
            deletenumber = ' dự án đã được chọn';
            deletebtn= 'Xóa các dự án đã chọn ';
        }
        if(lang == 'en') {
            lang = 'English';
            deletenumber = ' project(s) have been selected';
            deletebtn = 'Delete selected projects ';
        }
    };

    var url = `/dt_i18n/${lang}.lang`;

    table = $('#prj-table').DataTable({
        dom: 'frt<"deletebar">ip',
        order:[1,"asc"],
        bLengthChange: false,
        bFilter: true,
        pageLength: 5,
        aoColumns:[
            {className: "text-center", sortable: false,bSortable: false},
            {bSortable: true, sortable:true},
            null,
            null,
            null,
            null,
            {className: "text-center",sortable: false,bSortable: false},
        ],
        responsive: true,
        language:{
            url: url,
            paginate:{
                next: '<img src="../imgs/nextpage_icon.png"/>',
                previous: '<img src="../imgs/previous_page.png"/>',
            }
        },
        fnInitComplete: function () {
            $("div.deletebar").html(`<p class="validation-err"><span class="validation-err-cause">${deletenumber}</span><button class="validation-err-dismiss">${deletebtn}<i class="fa fa-trash"></i></button></p>`);
            $(".validation-err").hide();
            $('.validation-err-dismiss').click(function () {
                for(arow of deletearr){
                    deleteRow($('#arow'));
                }})},
    });


    $('#btn-search').click(function () {
        var criteria = $('.search-bar-criteria').val();
        var filterVal = $('.search-bar-status').val();
        if(filterVal !== null) {
            var filter = getFilter(filterVal);
            table.column(3).search(filter).draw();
        }
        table.search(criteria).draw();

    });

    $('#btn-reset-search').click(function () {
        $('.search-bar-criteria').val('');
        $('.search-bar-status').val('all');

        table.search('').draw();
    })


});

function getFilter(filterval){
    if(filterval ==='new')
        return 'New';
    if(filterval ==='pla')
        return 'Planned';
    if(filterval ==='inp')
        return 'In Progress';
    return 'Finished';
}

function deleteRow(caller){
    table.row($(caller).parents('tr')).remove().draw();
}

function checkboxDelete(caller) {
    if(caller.checked) {
        selected += 1;
        deletearr.push(caller.id);
    }
    else{
        selected -= 1;
        var index = deletearr.indexOf(caller.id);
        deletearr.splice(index,1);
    }

    if(selected === 0) {
        $(".validation-err").hide();
    } else {
        $(".validation-err-cause").text(`${selected} ${deletenumber}`);
        $(".validation-err").show();
    }
};


// $(document).ready(function() {
//     $('#prj-table').DataTable();
// } );