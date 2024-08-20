$(window).on('load', function () {
    debugger;
    binOwnerChck();
    $('#txtFDate').empty();
    $('#txtTDate').empty();

    $("#txtFDate").datepicker({
        dateFormat: 'dd/MM/yy',
        changeMonth: true,
        changeYear: true,
        stepMonths: true,
        todayHighlight: true,
        maxDate: 0,
        onSelect: function (dateText, inst) {

        }
    });
    $('#txtFDate').datepicker().datepicker('setDate', new Date());
    $("#txtTDate").datepicker({
        dateFormat: 'dd/MM/yy',
        changeMonth: true,
        changeYear: true,
        stepMonths: true,
        todayHighlight: true,
        maxDate: 0,
        onSelect: function (dateText, inst) {
        }
    });
    $('#txtTDate').datepicker().datepicker('setDate', new Date());

});


function binOwnerChck() {           

    var QueryString = 'checkBinOwner2';
    var input = ($("[id*=hdUserId]").val());

    $.ajax({
        type: "POST",
        contentType: "application/json; charset=utf-8",
        url: "IncidentReport.aspx/Bin_member_check",
        data: "{QueryString:'" + QueryString + "',input : '" + input + "'}",
        dataType: "json",
        success: function (Result) {


            if (Result.d > 0) {
                debugger;
                alert(Result.d);
                alert('Please Select Required Dates to generate Report');
             
            } else {
                alert('You are Not Authorized to View this Page..');
                window.open('index.aspx', '_self');
            }
        },
        error: function (Result) {

            alert(Result.d);
        }


    });
}
function ReportwithFilter() {
    debugger;
    var FDate = $('#txtFDate').val();
    var TDate = $('#txtTDate').val();
    //var Status = $('#ddlStatus option:selected').val();
    var frmdate = convertDate(FDate);
    var Todate = convertDate(TDate);
    var InputString = frmdate + '¥' + Todate /*+ '¥' + Status*/;
    //alert(InputString);
    //var Querystring1 = "CRReportWithFilter";
    var Querystring1 = "IncidentReportWithFilter";
    window.open("IncidentReportView.aspx?Querystr=" + Querystring1 + "&inp=" + InputString, '_self');
}

function convertDate(inputFormat) {
    function pad(s) { return (s < 10) ? '0' + s : s; }
    var d = new Date(inputFormat)
    return [pad(d.getDate()), pad(d.getMonth() + 1), d.getFullYear()].join('/')
}