function frmExit() {
    window.open("index.aspx", "_self");
}
$(window).on('load', function () {
    clear();
    GetNcdAvailFundType();
});
function clear() {
    $("#ShowTblNewLoan").hide();
    $("#ShowTblNewLoanEMI").hide();
    $("#ddlFundType").empty();
    $("#ddlFi").empty();
    $("#ddlLoans").empty();
}
function GetNcdAvailFundType() {

    var QueryString = "GetNcdAvailFundType";
    $("#ShowTblNewLoan").hide();
    //$("#ShowTblOldLoan").hide();
    $("#ddlFundType").empty();
    $("#ddlFi").empty();
    $("#ddlLoans").empty();
    $.ajax({
        type: "post",
        contentType: "application/json; charset=utf-8",
        url: "ApproveLoanAvailment.aspx/getFillData",
        data: "{typ:'GetNcdAvailFundType', val1 :''}",
        dataType: "json",
        success: function (Result) {
            Result = Result.d;
            $.each(Result, function (key, value) {
                $('#ddlFundType').append($("<option></option>").val(value.id).html(value.name));
            });
        }
    });
}
function GetNcdAvailFI() {
    var QueryString = "GetNcdAvailFI";
    $("#ShowTblNewLoan").hide();
    //$("#ShowTblOldLoan").hide();
    $("#ddlFi").empty();
    $("#ddlLoans").empty();
    //var InputData = $("#ddlfundsourse").val() + "µ" + $("#ddlselfi").val()
    var InputData = $("#ddlFundType").val();
    if (InputData == '2') {
        $("#ddlLoans").empty();
        $("#ShowFinInst").hide();
        $.ajax({
            type: "post",
            contentType: "application/json; charset=utf-8",
            url: "ApproveLoanAvailment.aspx/getFillData",
            data: "{typ:'GetNcdAvailedPublicIssue', val1 :'" + InputData + "'}",
            dataType: "json",
            success: function (Result) {
                Result = Result.d;
                $.each(Result, function (key, value) {
                    $('#ddlLoans').append($("<option></option>").val(value.id).html(value.name));
                });
            }
        });
    }
    else {
        $("#ShowFinInst").show();
        $.ajax({
            type: "post",
            contentType: "application/json; charset=utf-8",
            url: "ApproveLoanAvailment.aspx/getFillData",
            data: "{typ:'GetNcdAvailFI', val1 :'" + InputData + "'}",
            dataType: "json",
            success: function (Result) {
                Result = Result.d;
                $.each(Result, function (key, value) {
                    $('#ddlFi').append($("<option></option>").val(value.id).html(value.name));
                });
            }
        });
    }
    
}
function GetNcdAvailed() {
    var QueryString = "GetNcdAvailed";
    $("#ShowTblNewLoan").hide();
    //$("#ShowTblOldLoan").hide();
    $("#ddlLoans").empty();
    var InputData = $("#ddlFundType").val() + "µ" + $("#ddlFi").val()
    $.ajax({
        type: "post",
        contentType: "application/json; charset=utf-8",
        url: "ApproveLoanAvailment.aspx/getFillData",
        data: "{typ:'GetNcdAvailed', val1 :'" + InputData + "'}",
        dataType: "json",
        success: function (Result) {
            Result = Result.d;
            $.each(Result, function (key, value) {
                $('#ddlLoans').append($("<option></option>").val(value.id).html(value.name));
            });
        }
    });
}
function getTableNewNcdDtls() {
    var QueryString = "getTableNewNcdDtls";
    
    $.ajax({
        type: "post",
        contentType: "application/json; charset=utf-8",
        url: "ApproveLoanAvailment.aspx/getTableData",
        data: "{typ:'getTableNewNcdDtls', val1:'" + $('#ddlLoans').val() + "',data:''}",
        dataType: "json",
        success: function (Result) {
            if (Result.d == '') {
                $('#ShowTblNewLoan').hide();
            }
            else {
                $('#ShowTblNewLoan').show();
            }
            Result = Result.d;
            newloanfilltable(Result);
        },
        error: function (Result) {
        }
    });
}

function getTableNewNcdDtlsEmi() {
    var QueryString = "getTableNewNcdDtlsEmi";
    
    $.ajax({
        type: "post",
        contentType: "application/json; charset=utf-8",
        url: "ApproveLoanAvailment.aspx/getTableData",
        data: "{typ:'getTableNewNcdDtlsEmi', val1:'" + $('#ddlLoans').val() + "',data:''}",
        dataType: "json",
        success: function (Result) {
            if (Result.d == '') {
                $('#ShowTblNewLoanEMI').hide();
            }
            else {
                $('#ShowTblNewLoanEMI').show();
            }
            Result = Result.d;
            newloanfillemitableemi(Result);
        },
        error: function (Result) {
        }
    });
}
function newloanfilltable(data) {
    $("#tblShowNewLoan").empty();
    var valData, valData1;
    var n = 0;
    valData = data.split('Θ');
    if ($("#tblShowNewLoan tr").length == 0) {
        $('#tblShowNewLoan').append('<thead class="bg-success text-white"><tr><th scope="col">Fund Type</th><th scope="col">Financial Institution</th><th scope="col">Fund ID</th><th scope="col">Doc ID</th><th scope="col">Loan Amount</th><th scope="col">Interest Rate</th><th scope="col">Tenure</th><th scope="col">Loan Date</th><th scope="col">Maturity Date</th><th scope="col">Repayment Date</th></tr></thead>');
    }
    for (i = 0; i < valData.length - 1; i++) {
        valData1 = valData[i].split('µ');
        $('#tblShowNewLoan').append('<tbody><tr>' +
            '<td>' + valData1[0] + '</td>' +
            '<td>' + valData1[1] + '</td>' +
            '<td>' + valData1[2] + '</td>' +
            '<td>' + valData1[3] + '</td>' +
            '<td>' + valData1[4] + '</td>' +
            '<td>' + valData1[5] + '</td>' +
            '<td>' + valData1[6] + '</td>' +
            '<td>' + valData1[7] + '</td>' +
            '<td>' + valData1[8] + '</td>' +
            '<td>' + valData1[9] + '</td>' +
            '</tr> </tbody>');
    }
}

function newloanfillemitableemi(data) {
    $("#tblShowNewLoanEMI").empty();
    var valData, valData1;
    var n = 0;
    valData = data.split('Θ');
    if ($("#tblShowNewLoanEMI tr").length == 0) {
        $('#tblShowNewLoanEMI').append('<thead class="bg-success text-white"><tr><th scope="col">DocID</th><th scope="col">InstallmentNo</th><th scope="col">InstallmentType</th><th scope="col">InstallmentFrequency</th><th scope="col">Amount</th><th scope="col">PenaltyAmount</th><th scope="col">InterestFromDate</th><th scope="col">InterestToDate</th><th scope="col">PaymentDate</th></tr></thead>');
    }
    for (i = 0; i < valData.length - 1; i++) {
        valData1 = valData[i].split('µ');
        $('#tblShowNewLoanEMI').append('<tbody><tr>' +
            '<td>' + valData1[0] + '</td>' +
            '<td>' + valData1[1] + '</td>' +
            '<td>' + valData1[2] + '</td>' +
            '<td>' + valData1[3] + '</td>' +
            '<td>' + valData1[4] + '</td>' +
            '<td>' + valData1[5] + '</td>' +
            '<td>' + valData1[6] + '</td>' +
            '<td>' + valData1[7] + '</td>' +
            '<td>' + valData1[8] + '</td>' +
            //'<td>' + valData1[9] + '</td>' +
            '</tr> </tbody>');
    }
}
function ConfirmLoanAvailApprove() {
    var data;
    var aprRjct
    if ($("#radAppr").prop("checked") == false && $("#radRjct").prop("checked") == false) {
        ModelPopWarning("Select Approve Or Reject...!");
        return false;
    }
    else if ($("#ddlFundType").val() == "-1") {
        ModelPopWarning("Please Select Fund Type...!");
        return false;
    }
    else if ($("#ddlLoans").val() == "-1") {
        ModelPopWarning("Please Select Fund...!");
        return false;
    }
    else {
        if ($("#radAppr").prop("checked")) {
            aprRjct = 1;
        }
        else if ($("#radRjct").prop("checked")) {
            aprRjct = 0;
        }
        //data = $('#ddlfundsourseveri').val() + '^' + $('#ddlsubfoundveri').val().split("æ")[1] + '^' + $("[id*=hdUserId]").val();
        data = aprRjct + "µ" + $("#ddlLoans").val() + "µ" + $("[id*=hdUserId]").val();
        
        $.ajax({
            type: "post",
            contentType: "application/json; charset=utf-8",
            url: "ApproveLoanAvailment.aspx/ConfirmApprove",
            data: "{typ:'APPROVENEWNCDBOND',itmDtl:'" + data + "',data:''}",
            dataType: "json",
            success: function (Result) {
               
                window.open('ApproveNcdBondAvailment.aspx', '_self');

            }
        });
    }
}