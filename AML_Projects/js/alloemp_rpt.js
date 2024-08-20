$(window).on('load', function () {

    $("#frm_dt").datepicker({
        dateFormat: 'dd/MM/yy',
        changeMonth: true,
        changeYear: true,
        stepMonths: true,
        todayHighlight: false,
        //maxDate: 0,
        onSelect: function (dateText, inst) {
        }
    });




    $("#to_dt").datepicker({
        dateFormat: 'dd/MM/yy',
        changeMonth: true,
        changeYear: true,
        stepMonths: true,
        todayHighlight: false,
        //maxDate: 0,
        onSelect: function (dateText, inst) {
        }
    });

    $('#txt_emp').val("");
    log_access();
    login();
    $("#frm_dt").val("");
    $("#to_dt").val("");

});


function log_access() {

    var QueryString1 = "allo_reg_access";
    var inputstring = $("[id*=hdUserId]").val();



    $.ajax({
        type: "post",
        contentType: "application/json; charset=utf-8",
        url: "Soft_empwise_report.aspx/log_access",
        data: "{QueryString:'" + QueryString1 + "',input:'" + inputstring + "'}",
        dataType: "json",
        success: function (Result) {

            Result = Result.d;
            if (Result == "111") {
            }
            else {
                alert("You are not authorized to view this page!!");
                window.open("index.aspx", "_self");
            }
        },
        error: function (Result) {
        }
    });



}

function load_emprprt() {
    //debugger;
    // var input = $("#txt_emp").val();
    var QueryString = 'alloemp_rpt'
    var fr_date = $("#frm_dt").val();
    var to_date = $("#to_dt").val();
    var input = fr_date + "~" + to_date;

    
    $.ajax({
        type: "POST",
        contentType: "application/json; charset=utf-8",
        url: "Soft_empwise_report.aspx/empwise_rpt",
        data: "{QueryString:'" + QueryString + "',input : '" + input + "'}",
        dataType: "json",
        async: false,

        success: function (Result) {
            var Result = Result.d;
            if (Result == "") {
                alert('No Data Found');
                return false;
            }
            else {

                filltable(Result);
            }
            
        },

    });
    
}

function filltable(data) {
    
    var valData, valData1;
    $("#tbl_dtls").empty();
    if ($("#tbl_dtls tr").length == 0) {
        $("#tbl_dtls").empty();
        $('#tbl_dtls').append('<tr style="background-color:darkgrey;color:black border-inherit;border-spacing: 10px;width:50px"><th class="text-center">SL NO.</th><th class="text-center">Emp_Name</th><th class="text-center">Dept_Id</th><th class="text-center">SR No</th><th class="text-center">Emp Status</th><th class="text-center"style="width:100px;">Software</th><th class="text-center">License Type</th><th class="text-center">Version</th><th class="text-center">Allocated Date</th><th class="text-center">Allocated By</th></tr>');
    }
    valData = data.split('@');
    for (i = 0; i < valData.length - 1; i++) {
        valData1 = valData[i].split('$');
        $('#tbl_dtls').append('<tbody><tr>' +
            '<td class="text-center">' + (i + 1) + '</td>' +
            '<td class="text-center">' + valData1[0] + '</td>' +
            '<td class="text-center">' + valData1[1] + '</td>' +
            '<td class="text-center">' + valData1[2] + '</td>' +
            '<td class="text-center">' + valData1[3] + '</td>' +
            '<td class="text-center">' + valData1[4] + '</td>' +
            '<td class="text-center">' + valData1[5] + '</td>' +
            '<td class="text-center">' + valData1[6] + '</td>' +
            '<td class="text-center">' + valData1[7] + '</td>' +
            '<td class="text-center">' + valData1[8] + '</td>' +

            '</tr > </tbody > ');
    }

}
//--------------reallocation report--aj------------
function login() {

    var QueryString1 = "allo_reg_access";
    var inputstring = $("[id*=hdUserId]").val();
    $.ajax({
        type: "post",
        contentType: "application/json; charset=utf-8",
        url: "Reallocation_report.aspx/login_l",
        data: "{QueryString:'" + QueryString1 + "',input:'" + inputstring + "'}",
        dataType: "json",
        success: function (Result) {

            Result = Result.d;
            if (Result == "111") {
            }
            else {
                alert("You are not authorized to view this page!!");
                window.open("index.aspx", "_self");
            }
        },
        error: function (Result) {
        }
    });



}

function load_realemprpt() {

    var QueryString = 'realloemp_rpt'
    var fr_date = $("#frm_dt").val();
    var to_date = $("#to_dt").val();
    var input = fr_date + "~" + to_date;
    $.ajax({
        type: "POST",
        contentType: "application/json; charset=utf-8",
        url: "Reallocation_report.aspx/reallrpt",
        data: "{QueryString:'" + QueryString + "',input : '" + input + "'}",
        dataType: "json",
        async: false,
        success: function (Result) {
            var Result = Result.d;
            var fr_date = $("#frm_dt").val();
            var to_date = $("#to_dt").val();

            if (fr_date == "") {
                alert("Date field cannot be empty!!!");
                return false;
            }
            if (to_date == "") {
                alert("Date field cannot be empty!!!");
                return false;
            }
            if (Result == "") {
                alert('No Data Found');
                return false;
            }
            else {

                filltable(Result);
            }
        },

    });

}

function filltable(data) {
    
    var valData, valData1;
    $("#tbl_dtls").empty();
    if ($("#tbl_dtls tr").length == 0) {
        $("#tbl_dtls").empty();
        $('#tbl_dtls').append('<tr style="background-color:darkgrey;color:black border-inherit;border-spacing: 10px;width:50px"><th class="text-center">SL NO.</th><th class="text-center">EMPLOYEE NAME</th><th class="text-center">EMPLOYEE CODE</th><th class="text-center">DEPARTMENT NAME</th><th class="text-center">EMPLOYEE STATUS</th><th class="text-center"style="width:100px;">SOFTWARE NAME</th><th class="text-center">LICENSE TYPE</th><th class="text-center">ALLOCATED DATE</th><th class="text-center">LICENSE REMOVED DATE</tr>');
    }
    valData = data.split('@');
    for (i = 0; i < valData.length - 1; i++) {
        valData1 = valData[i].split('$');
        $('#tbl_dtls').append('<tbody><tr>' +
            '<td class="text-center">' + (i + 1) + '</td>' +
            '<td class="text-center">' + valData1[0] + '</td>' +
            '<td class="text-center">' + valData1[1] + '</td>' +
            '<td class="text-center">' + valData1[2] + '</td>' +
            '<td class="text-center">' + valData1[3] + '</td>' +
            '<td class="text-center">' + valData1[4] + '</td>' +
            '<td class="text-center">' + valData1[5] + '</td>' +
            '<td class="text-center">' + valData1[6] + '</td>' +
            '<td class="text-center">' + valData1[7] + '</td>' +

            '</tr > </tbody > ');
    }

}
function Exit() {
    window.open("index.aspx", "_self");
}