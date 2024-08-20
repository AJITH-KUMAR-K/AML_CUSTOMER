var inputstrings;
$(window).on('load', function () {
    filldate();
   
    $("#frmDate").datepicker({
        dateFormat: 'dd/MM/yy',
        changeMonth: true,
        changeYear: true,
        stepMonths: true,
        todayHighlight: true,
        endDate: "today",
        maxDate: '0',
        onSelect: function (dateText, inst) {
            $("[id*=toDate]").val('');
            $("#tblLoanDtl").hide();
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
            $("#tblLoanDtl").hide();
        }

    });

    $("#frmDate1").datepicker({
        dateFormat: 'dd/MM/yy',
        changeMonth: true,
        changeYear: true,
        stepMonths: true,
        todayHighlight: true,
        endDate: "today",
        maxDate: '0',
        onSelect: function (dateText, inst) {
            $("[id*=toDate1]").val('');
            $("#tblLoanDt1l").hide();

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
            $("#tblLoanDt1l").hide();
        }

    });

    $("#frmDate2").datepicker({
        dateFormat: 'dd/MM/yy',
        changeMonth: true,
        changeYear: true,
        stepMonths: true,
        todayHighlight: true,
        endDate: "today",
        maxDate: '0',
        onSelect: function (dateText, inst) {
            $("[id*=toDate2]").val('');
            $("#tblLoanDt12").hide();

        }

    });

    $("#toDate2").datepicker({
        dateFormat: 'dd/MM/yy',
        changeMonth: true,
        changeYear: true,
        stepMonths: true,
        todayHighlight: true,
        endDate: "today",
        maxDate: '0',
        onSelect: function (dateText, inst) {
            $("#tblLoanDt12").hide();
        }

    });
});

function viewreport() {
    $("#tblLoanDtl").show();
    var frmdt = $("#frmDate").val();
    var todt = $("#toDate").val();
    var date = frmdt + "^" + todt;

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
                $("[id*=frmDate]").val('');
                $("[id*=toDate]").val('');

            }
        },
        error: function (Result) {
        }
    });
}


function viewreport1() {
    $("#tblLoanDt1l").show();
    var frmdt = $("#frmDate1").val();
    var todt = $("#toDate1").val();
    var date = frmdt + "^" + todt;

    if (frmdt == "") {
        alert("Please choose From Date..!");
        $("#frmDate1").focus();
        return false;
    }

    if (todt == "") {
        alert("Please choose To Date..!");
        $("#toDate1").focus();
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
                $("[id*=frmDate1]").val('');
                $("[id*=toDate1]").val('');

            }
        },
        error: function (Result) {
        }
    });
}


function viewreport2() {
    $("#tblLoanDt12").show();
    var frmdt = $("#frmDate2").val();
    var todt = $("#toDate2").val();
    var date = frmdt + "^" + todt;

    if (frmdt == "") {
        alert("Please choose From Date..!");
        $("#frmDate2").focus();
        return false;
    }

    if (todt == "") {
        alert("Please choose To Date..!");
        $("#toDate2").focus();
        return false;
    }

    frm = Date.parse(frmdt);
    td = Date.parse(todt);
    if (frm - td > 0) {
        alert("date Miss Match");
        $("#frmDate2").val('');
        $("#toDate2").val('');
        $("#frmDate2").focus();
        return false;
    }


    var InputString = $("[id*=custIds]").val();
    $.ajax({
        type: "POST",
        contentType: "application/json; charset=utf-8",
        url: "AML_Sanction_Report.aspx/Reportview2",

        data: "{input:'" + date + "'}",

        dataType: "json",

        success: function (Result) {
            Result = Result.d;
            if (Result != "111") {
                $("#tblLoanDt12").html(Result);
            } else {
                alert("NO DATA FOUND");
                $("#tblLoanDt12").empty();
                $("[id*=frmDate2]").val('');
                $("[id*=toDate2]").val('');

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


function excelreport2() {


    var tab_text = "<table border='1px'><tr bgcolor='#87AFC6'>";

    var textRange; var j = 0;
    tab = document.getElementById('tblLoanDt12'); // id of table


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
        link.setAttribute("download", "BLACK_LIST_REPORT.xls");
        link.style.display = "none";
        document.body.appendChild(link);
        link.click();
        document.body.removeChild(link);

    }

    return (sa);



}

function filldate() {

    //alert("2");
    var InputString = $("[id*=custIds]").val();

    $.ajax({

        type: "post",
        contentType: "application/json; charset=utf-8",
        url: "AML_Sanction_Report.aspx/getdate",
        data: "{input:'" + InputString + "'}",
        //data: "{typ:'state'}",
        dataType: "json",
        success: function (Result) {
            Result = Result.d;


            //$("#stateid").append($("<option selected></option>").val("-1").html("Select State"));

            //$.each(Result, function (key, value) {
            //    $("#stateid").append($("<option></option>").val(value.ID).html(value.Name));
            $.each(Result, function (key, value) {
                $("#dddate").append($("<option></option>").val
                    (value.id).html(value.name));


            });
        }
    });
}

function selmnth() {
    $("#tblLoanDt13").show();
    var date = $("#dddate").val();

    var InputString = $("[id*=custIds]").val();
    $.ajax({
        type: "POST",
        contentType: "application/json; charset=utf-8",
        url: "AML_Sanction_Report.aspx/Reportview3",

        data: "{input:'" + date + "'}",

        dataType: "json",

        success: function (Result) {
            Result = Result.d;
            if (Result != "111") {
                $("#tblLoanDt13").html(Result);
            } else {
                alert("NO DATA FOUND");
                $("#tblLoanDt13").empty();
              

            }
        },
        error: function (Result) {
        }
    });
}

function excelreport3() {


    var tab_text = "<table border='1px'><tr bgcolor='#87AFC6'>";

    var textRange; var j = 0;
    tab = document.getElementById('tblLoanDt13'); // id of table


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
        link.setAttribute("download", "SCREENINGLIST_QUARTERLY_REPORT.xls");
        link.style.display = "none";
        document.body.appendChild(link);
        link.click();
        document.body.removeChild(link);

    }

    return (sa);



}
