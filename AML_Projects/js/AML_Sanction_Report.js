var inputstrings;
$(window).on('load', function () {
    //$('#1').hide();
    //$('#2').hide();
    //alert("11");
    //$("[id*=frmDate]").val('');
   // $("[id*=toDate]").val('');


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


    //$("[id*=frmDate1]").val('');
    //$("[id*=toDate1]").val('');


    $("#frmDate1").datepicker({
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

    $("#toDate1").datepicker({
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

function viewreport() {
   // alert("31");
    //var empid = $("[id*=hdvUserID]").val();
    //var enbranch = $("[id*=hdBranchId]").val();
    var frmdt = $("#frmDate").val();
    var todt = $("#toDate").val();
    var date = frmdt + "^" + todt;

    //var date = frmdt + "^" + todt + "^" + enbranch + "^" + empid;
    //var cust_id = $("[id*=custIds]").val();

    if (frmdt == "") {
        alert("Please choose From Date..!");
        $("#frmDate").focus();
        return false;
    }

    if (todt == "") {
        alert("Please choose To Date..!");
        $("#toDate").focus();
        return false;
    }

    frm = Date.parse(frmdt);
    td = Date.parse(todt);
    if (frm - td > 0) {
        alert("date Miss Match");
        $("#frmDate").val('');
        $("#toDate").val('');
        $("#frmDate").focus();
        return false;
    }
  //  alert("22");

    var InputString = $("[id*=custIds]").val();
    $.ajax({
        type: "POST",
        contentType: "application/json; charset=utf-8",
        url: "AML_Sanction_Report.aspx/Reportview",

        data: "{input:'" + date + "'}",

        dataType: "json",

        success: function (Result) {
            Result = Result.d;
            if (Result != "111") {
                $("#tblLoanDtl").html(Result);
            } else {
                alert("NO DATA FOUND");
                $("#tblLoanDtl").empty();
                //$("[id*=custIds]").val('');
                $("[id*=frmDate]").val('');
                $("[id*=toDate]").val('');

            }
        },
        error: function (Result) {
        }
    });
}


function viewreport1() {
    //alert("31");
    //var empid = $("[id*=hdvUserID]").val();
    //var enbranch = $("[id*=hdBranchId]").val();
    var frmdt = $("#frmDate1").val();
    var todt = $("#toDate1").val();
    var date = frmdt + "^" + todt;

    //var date = frmdt + "^" + todt + "^" + enbranch + "^" + empid;
    //var cust_id = $("[id*=custIds]").val();

    if (frmdt == "") {
        alert("Please choose From Date..!");
        $("#frmDate").focus();
        return false;
    }

    if (todt == "") {
        alert("Please choose To Date..!");
        $("#toDate").focus();
        return false;
    }

    frm = Date.parse(frmdt);
    td = Date.parse(todt);
    if (frm - td > 0) {
        alert("date Miss Match");
        $("#frmDate1").val('');
        $("#toDate1").val('');
        $("#frmDate1").focus();
        return false;
    }


    var InputString = $("[id*=custIds]").val();
    $.ajax({
        type: "POST",
        contentType: "application/json; charset=utf-8",
        url: "AML_Sanction_Report.aspx/Reportview1",

        data: "{input:'" + date + "'}",

        dataType: "json",

        success: function (Result) {
            Result = Result.d;
            if (Result != "111") {
                $("#tblLoanDt1l").html(Result);
            } else {
                alert("NO DATA FOUND");
                $("#tblLoanDt1l").empty();
                //$("[id*=custIds]").val('');
                $("[id*=frmDate1]").val('');
                $("[id*=toDate1]").val('');

            }
        },
        error: function (Result) {
        }
    });
}

function excelreport() {


    var tab_text = "<table border='1px'><tr bgcolor='#87AFC6'>";

    var textRange; var j = 0;
    tab = document.getElementById('tblLoanDtl'); // id of table


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
        sa = txtArea1.document.execCommand("SaveAs", true, "StatusReport.xls");
    }
    else {

        var link = document.createElement("a");
        link.setAttribute("href", "data:application/vnd.ms-excel," + encodeURIComponent(tab_text));
        link.setAttribute("download", "SANCTION_EXCEL_REPORT.xls");
        link.style.display = "none";
        document.body.appendChild(link);
        link.click();
        document.body.removeChild(link);

    }

    return (sa);



}

function excelreport1() {


    var tab_text = "<table border='1px'><tr bgcolor='#87AFC6'>";

    var textRange; var j = 0;
    tab = document.getElementById('tblLoanDt1l'); // id of table


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
        sa = txtArea1.document.execCommand("SaveAs", true, "StatusReport.xls");
    }
    else {

        var link = document.createElement("a");
        link.setAttribute("href", "data:application/vnd.ms-excel," + encodeURIComponent(tab_text));
        link.setAttribute("download", "SANCTION_LIST_REPORT.xls");
        link.style.display = "none";
        document.body.appendChild(link);
        link.click();
        document.body.removeChild(link);

    }

    return (sa);



}