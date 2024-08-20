function frmExit() {
    window.open("index.aspx", "_self");
}
$(window).on('load', function () {
    $("#ShowFiReport").hide();
    $("#ddlReport").val("-1");
    $("#ddlStatus").val("-2");
    debugger;
    GetReport();
    getFndCat();
    GetFIType();
    debugger;
    $("#txt_frmDt").datepicker({
        dateFormat: 'dd/MM/yy',
        changeMonth: true,
        changeYear: true,
        stepMonths: true,
        todayHighlight: true,
        maxDate: 0,
        onSelect: function (dateText, inst) {

        }
    });
    $('#txt_frmDt').datepicker().datepicker('setDate', new Date());
    $("#txt_ToDt").datepicker({
        dateFormat: 'dd/MM/yy',
        changeMonth: true,
        changeYear: true,
        stepMonths: true,
        todayHighlight: true,
        maxDate: 0,
        onSelect: function (dateText, inst) {
        }
    });
    $('#txt_ToDt').datepicker().datepicker('setDate', new Date());
});
function GetReport() {
       if ($("#ddlReport").val() == "1") {
        $("#ShowFiReport").show();
       }
       else if ($("#ddlReport").val() == "2") {
           $("#ShowFiReport").show();
       }
    else {
        $("#ShowFiReport").hide();
    }
}
function getFndCat() {
    $("#ddlCatgry").empty();
    $("#ddlSubCat").empty();
    $("#ddlFiTyp").empty();
    $("#ddlFI").empty();
    var QueryString = "GetFundType";
    $.ajax({
        type: "POST",
        contentType: "application/json; charset=utf-8",
        url: "TreasuryReport.aspx/getFundType",
        data: "{QueryString:'" + QueryString + "'}",
        dataType: "json",
        success: function (Result) {
            $('#ddlCatgry').empty();
            $('#ddlCatgry').append($("<option></option>").val("-1").html("Select Fund Category "));
            $.each(Result.d, function (data, value) {
                $('#ddlCatgry').append($("<option></option>").val(value.Id).html(value.Name));
            })
        },
        error: function (Result) {
            alert(Result);
        }
    });
}
function GetSubFundDtls() {
    var InputString = $("#ddlCatgry").val();
    var QueryString = "GetSubFundType";
    $.ajax({
        type: "POST",
        contentType: "application/json; charset=utf-8",
        url: "NewFund.aspx/getSubFund",
        data: "{QueryString:'" + QueryString + "',input : '" + InputString + "'}",
        dataType: "json",
        success: function (Result) {
            $('#ddlSubCat').empty();
            $('#ddlSubCat').append($("<option></option>").val("-1").html("Select Sub Fund Category"));
            $('#ddlSubCat').append($("<option></option>").val("-3").html("ALL"));
            $.each(Result.d, function (data, value) {
                $('#ddlSubCat').append($("<option></option>").val(value.SbId).html(value.SbName));
            })
        },
        error: function (Result) {
            alert(Result);
        }
    });
}
function GetFIType() {
     var QueryString = "GetFIType";
    $.ajax({
        type: "POST",
        contentType: "application/json; charset=utf-8",
        url: "NewFund.aspx/getFinancialType",
        data: "{QueryString:'" + QueryString + "'}",
        dataType: "json",
        success: function (Result) {
            $('#ddlFiTyp').empty();
            $('#ddlFiTyp').append($("<option></option>").val("-1").html("Select Financial Institution Type "));
            $('#ddlFiTyp').append($("<option></option>").val("-3").html("ALL"));
            $.each(Result.d, function (data, value) {
                $('#ddlFiTyp').append($("<option></option>").val(value.FtId).html(value.FtName));
            })
        },
        error: function (Result) {
            alert(Result);
        }
    });
}
function GetFIDetails() {
    var InputString = $("#ddlFiTyp").val();
    var QueryString = "GetFI";
    $.ajax({
        type: "POST",
        contentType: "application/json; charset=utf-8",
        url: "NewFund.aspx/getFIDtls",
        data: "{QueryString:'" + QueryString + "',input : '" + InputString + "'}",
        dataType: "json",
        success: function (Result) {
            $('#ddlFI').empty();
            $('#ddlFI').append($("<option></option>").val("-1").html("Select Financial Institution "));
            $('#ddlFI').append($("<option></option>").val("-3").html("ALL"));
            $.each(Result.d, function (data, value) {
                $('#ddlFI').append($("<option></option>").val(value.FId).html(value.FName));
            })
        },
        error: function (Result) {
            alert(Result);
        }
    });
}



function ViewReport() {
    //alert("1");
    var frmDateCom = $("#txt_frmDt").val();
    var ToDateCom = $("#txt_ToDt").val();
    var newFrmDate = Date.parse(frmDateCom);
    var NewToDate = Date.parse(ToDateCom);
    var dateDifference = NewToDate - newFrmDate;
    if (dateDifference < 0) {
        alert("Choose To Date greater than From Date");
        $("#txt_frmDt").val("");
        $("#txt_ToDt").focus();
        return;
    }   
    if ($('#ddlReport').val() == -1) {
        alert("Please Select An Option");
        return false;
    }
    else if ($('#ddlReport').val() == 1) {
        alert("2");
        var wh, ord = '';
        wh = '1^' + $('#ddlCatgry').val() + '^' + $('#ddlSubCat').val() + '^' + $('#ddlFiTyp').val() + '^' + $('#ddlFI').val() + '^' + $('#ddlStatus').val() + '^' + $('#txt_frmDt').val() + '^' + $('#txt_ToDt').val();
    }
    else if ($('#ddlReport').val() == 2) {
        //alert("3");
        var wh, ord = '';
        wh = '2^' + $('#ddlCatgry').val() + '^' + $('#ddlSubCat').val() + '^' + $('#ddlFiTyp').val() + '^' + $('#ddlFI').val() + '^' + $('#ddlStatus').val() + '^' + $('#txt_frmDt').val() + '^' + $('#txt_ToDt').val();
    }

    $.ajax({
        type: "post",
        contentType: "application/json; charset=utf-8",
        url: "TreasuryReport.aspx/getTableData",
        data: "{typ:'REPORT', val1:'REPORTVIEW',data:'" + wh + "'}",
        dataType: "json",
        success: function (Result) {
            if (Result.d == '') {
                $('#divReport').hide();
            }
            else {
                $('#divReport').show();
            }
            Result = Result.d;
            fundfilltable(Result);
        },
        error: function (Result) {
        }
    });
    //var newWindow = window.open("", "_blank");
    //newWindow.location.href = "ReportShow.aspx?mnuId=" + wh + "&pagHead=" + $('#ddlReport option:selected').text();
    //document.getElementById("myFrame").src = "ReportShow.aspx?mnuId=" + wh + "&pagHead=" + $('#ddlReport option:selected').text();
    //$("#success").load("ReportShow.aspx?mnuId=" + wh + "&pagHead=" + $('#ddlReport option:selected').text(), function (response, status, xhr) {
    //    if (status == "error") {
    //        var msg = "Sorry but there was an error: ";
    //        $("#error").html(msg + xhr.status + " " + xhr.statusText);
    //    }
    //});
    //window.location = "ReportShow.aspx?mnuId=" + wh + "&pagHead=" + $('#ddlReport option:selected').text();
}

function fundfilltable(data) {
    $("#tableReport").empty();
    var valData, valData1, headData, allData, headFields, headRow, dataRow;
    var n = 0;
    allData = data.split('¥');

    valData = allData[1].split('Θ');
    if ($("#tableReport tr").length == 0) {
        $("#tableReport").empty();
        //$("#tableReport").append('<thead class="bg-success text-white">< tr ><th scope="col">FundCategory</th> <th scope="col">Fund Type</th> <th scope="col">FundProviderType</th><th scope="col">FundProvider</th><th scope="col">AgreementDate</th><th scope="col">AgreementFromDate</th><th scope="col">AgreementToDate</th><th scope="col">FundLimit</th></tr ></thead><tbody>'
        //);
        headFields = allData[0].split('µ');
        headRow = headRow + '<thead class="bg-success text-white">< tr>'
        for (j = 0; j < headFields.length - 1; j++) {
            headRow = headRow + '<th scope="col">' + headFields[j] + '</th>'
        }
        headRow = headRow + '</tr ></thead><tbody>'
        $("#tableReport").append(headRow);
    }
    for (i = 0; i < valData.length - 1; i++) {
        valData1 = valData[i].split('µ');
        dataRow = dataRow + '<tr>'
        for (k = 0; k < valData1.length - 1; k++) {
            dataRow = dataRow + '<th scope="col">' + valData1[k] + '</th>'
        }
        dataRow = dataRow + '</tr> </tbody>'
        $("#tableReport").append(dataRow);
        //$('#tableReport').append('<tr>' +
        //    '<td>' + valData1[0] + '</td>' +
        //    '<td>' + valData1[1] + '</td>' +
        //    '<td>' + valData1[2] + '</td>' +
        //    '<td>' + valData1[3] + '</td>' +
        //    '<td>' + valData1[4] + '</td>' +
        //    '<td>' + valData1[5] + '</td>' +
        //    '<td>' + valData1[6] + '</td>' +
        //    '<td>' + valData1[7] + '</td>' +     
        //    '</tr> </tbody>');

    }
    $('#tableReport').DataTable({
        dom: 'Bfrtip',
        buttons: [
            'copyHtml5',
            {
                extend: 'excelHtml5',
                title: 'Project Report - ' + new Date().toJSON().slice(0, 10).replace(/-/g, '-')
            },
            'csvHtml5'
            //'pdfHtml5'
        ]
    });

}
//$(document).ready(function () {
    
//});