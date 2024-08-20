$(window).on('load', function () {
    debugger
    //Status();
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
    
//function Status() {
//    debugger;
//    var QueryString = "GetStatusCR";
//    var inputstring = $("#ddlStatus option:selected").val();
//    $.ajax({
//        type: "POST",
//        contentType: "application/json; charset=utf-8",
//        url: "CRBreport.aspx/GetFilters",
//        data: "{QueryString:'" + QueryString + "',input:'" + inputstring + "'}",
//        dataType: "json",
//        success: function (Result) {
//            $('#ddlStatus').empty();
//            $('#ddlStatus').append($("<option></option>").val("-1").html("ALL"));
//            $.each(Result.d, function (data, value) {

//                $('#ddlStatus').append($("<option></option>").val(value.Id).html(value.Name));
//            })
//        },
//        error: function (Result) {
//            alert(Result);
//        }
//    });
//}
//function FullReport() {
//    debugger;
//    var Querystring1 = "CRReportWithoutFilter";
//    window.open("feedback_report_view.aspx?Querystr=" + Querystring1 + "&inp=" + '', '_self');
//}
function ReportwithFilter() {
    debugger;
    var FDate = $('#txtFDate').val();
    var TDate = $('#txtTDate').val();
    var Status = $('#ddlStatus option:selected').val();
    var frmdate = convertDate(FDate);
    var Todate = convertDate(TDate);
    var InputString = frmdate + '¥' + Todate;
    //alert(InputString);
    var Querystring1 = "FEEDREPORT";
    window.open("feedback_report_view.aspx?Querystr=" + Querystring1 + "&inp=" + InputString, '_self');
}

function convertDate(inputFormat) {
    function pad(s) { return (s < 10) ? '0' + s : s; }
    var d = new Date(inputFormat)
    return [pad(d.getDate()), pad(d.getMonth() + 1), d.getFullYear()].join('/')
}