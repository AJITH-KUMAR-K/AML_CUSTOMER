$(window).on('load', function () {
   
    $("[id*=frmDate]").val('');
    $("[id*=toDate]").val('');
  



   




    $("#frmDate").datepicker({
        dateFormat: 'dd/MM/yy',
        changeMonth: true,
        changeYear: true,
        stepMonths: true,
        todayHighlight: true,
        endDate: "today",
        maxDate: '0',
        onSelect: function (dateText, inst) {
        }

    });

    $("#toDate").datepicker({
        dateFormat: 'dd/MM/yy',
        changeMonth: true,
        changeYear: true,
        stepMonths: true,
        todayHighlight: true,
        endDate: "today",
        maxDate: '0',
        onSelect: function (dateText, inst) {
        }

    });
});

//function checkform() {

//    var InputData = $("[id*=hdvUserID]").val();

//    $.ajax({
//        type: "POST",
//        contentType: "application/json; charset=utf-8",
//        url: "KYC_Reverifiaction_Date_Selection.aspx/AUTHORISATION",
//        data: "{typ:'REPORT_AUTHORISATION',input: '" + InputData + "'}",

//        dataType: "json",
//        success: function (Result) {
//            Result = Result.d;
//            if (Result == 0) {
//                alert("You are not authorised to view this page!!!!");
//                window.open('../Index/Index.aspx', '_self');

//            }
//        },
//        error: function (Result) {

//        }
//    });
//}

function viewreport() {
    debugger;
    var frmdt = $("[id*=frmDate]").val();
    var todt = $("[id*=toDate]").val();
    var reportid = $('#report').val();

    

    if (frmdt == '' && todt == '') {

        alert("Select from date and todate!!!");
        return false;

    }

    else {

        if (frmdt != '' && todt == '') {
            alert("Please choose To Date..!");
            $("#toDate").focus();
            return false;
        }
        if (frmdt == '' && todt != '') {
            alert("Please choose From Date..!");
            $("#frmDate").focus();
            return false;
        }
        if (frmdt != '' && todt != '') {
            frm = Date.parse(frmdt);
            td = Date.parse(todt);
            if (frm - td > 0) {
                alert("date Miss Match");
                $("#frmDate").val('');
                $("#toDate").val('');
                $("#frmDate").focus();
                return false;
            }
        }


    }
    var data1 = $("#frmDate").val() + '~' + $("#toDate").val();
    $("#table-report").html("");
   
    var flg = 1;
    $.ajax({
        type: "post",
        contentType: "application/json; charset=utf-8",
        url: "AlertVerificationReport.aspx/getFillData",
        data: "{flag:'" + flg + "', data:'" + data1 + "'}",

        success: function (response) {

            $("#table-report").html(response.d);

        }
    });


}
function excelreport1() {


    var tab_text = "<table border='1px'><tr bgcolor='#87AFC6'>";

    var textRange; var j = 0;
    tab = document.getElementById('table-report'); // id of table


    for (j = 0; j < tab.rows.length; j++) {

        tab_text = tab_text + tab.rows[j].innerHTML + "</tr>";
        tab_text = tab_text + "</tr>";
    }




    tab_text = tab_text + "</table>";
    tab_text = tab_text.replace(/<A[^>]*>|<\/A>/g, "");//remove if u want links in your table
    tab_text = tab_text.replace(/<img[^>]*>/gi, ""); // remove if u want images in your table
    tab_text = tab_text.replace(/<input[^>]*>|<\/input>/gi, ""); // reomves input params




    var ua = window.navigator.userAgent;
    var msie = ua.indexOf("MSIE ");



    if (msie > 0 || !!navigator.userAgent.match(/Trident.*rv\:11\./))      // If Internet Explorer
    {
        txtArea1.document.open("txt/html", "replace");
        txtArea1.document.write(tab_text);
        txtArea1.document.close();
        txtArea1.focus();
        sa = txtArea1.document.execCommand("SaveAs", true, "AMLALERT.xls");
    }
    else {

        var link = document.createElement("a");
        link.setAttribute("href", "data:application/vnd.ms-excel," + encodeURIComponent(tab_text));
        link.setAttribute("download", "AML ALERT VERIFICATION REPORT.xls");
        link.style.display = "none";
        document.body.appendChild(link);
        link.click();
        document.body.removeChild(link);

    }

    return (sa);



}
