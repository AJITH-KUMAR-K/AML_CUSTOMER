function frmExit() {
    window.open("index.aspx", "_self");
}
$(window).on('load', function () {
    clear();
    GetLoanAvailFundType();
});
function clear() {
    $("#ShowTblNewLoan").hide();
    $("#ShowTblOldLoan").hide();
    $("#ShowTblNewLoanEMI").hide();
    $("#ddlFundType").empty();
    $("#ddlFi").empty();
    $("#ddlLoans").empty();
}
function GetLoanAvailFundType() {
    var QueryString = "GetLoanAvailFundType";
    $("#ShowTblNewLoan").hide();
    $("#ShowTblOldLoan").hide();
    $("#ddlFundType").empty();
    $("#ddlFi").empty();
    $("#ddlLoans").empty();
    $.ajax({
        type: "post",
        contentType: "application/json; charset=utf-8",
        url: "ApproveLoanAvailment.aspx/getFillData",
        data: "{typ:'GetLoanAvailFundType', val1 :''}",
        dataType: "json",
        success: function (Result) {
            Result = Result.d;
            $.each(Result, function (key, value) {
                $('#ddlFundType').append($("<option></option>").val(value.id).html(value.name));
            });
        }
    });
}

function GetLoanAvailFI() {
    var QueryString = "GetLoanAvailFI";
    $("#ShowTblNewLoan").hide();
    $("#ShowTblOldLoan").hide();
    $("#ddlFi").empty();
    $("#ddlLoans").empty();
    //var InputData = $("#ddlfundsourse").val() + "µ" + $("#ddlselfi").val()
    var InputData = $("#ddlFundType").val()
    $.ajax({
        type: "post",
        contentType: "application/json; charset=utf-8",
        url: "ApproveLoanAvailment.aspx/getFillData",
        data: "{typ:'GetLoanAvailFI', val1 :'" + InputData + "'}",
        dataType: "json",
        success: function (Result) {
            Result = Result.d;
            $.each(Result, function (key, value) {
                $('#ddlFi').append($("<option></option>").val(value.id).html(value.name));
            });
        }
    });
}

function GetLoanAvailLoans() {
    var QueryString = "GetLoanAvailLoans";
    $("#ShowTblNewLoan").hide();
    $("#ShowTblOldLoan").hide();
    $("#ddlLoans").empty();
    var InputData = $("#ddlFundType").val() + "µ" + $("#ddlFi").val()
    $.ajax({
        type: "post",
        contentType: "application/json; charset=utf-8",
        url: "ApproveLoanAvailment.aspx/getFillData",
        data: "{typ:'GetLoanAvailLoans', val1 :'" + InputData + "'}",
        dataType: "json",
        success: function (Result) {
            Result = Result.d;
            $.each(Result, function (key, value) {
                $('#ddlLoans').append($("<option></option>").val(value.id).html(value.name));
            });
        }
    });
}

function getTableOldLoanDtls() {
    var QueryString = "getTableOldLoanDtls";
    $.ajax({
        type: "post",
        contentType: "application/json; charset=utf-8",
        url: "ApproveLoanAvailment.aspx/getTableData",
        data: "{typ:'getTableOldLoanDtls', val1:'" + $('#ddlLoans').val() + "',data:''}",
        dataType: "json",
        success: function (Result) {
            if (Result.d == '') {             
                $('#ShowTblOldLoan').hide();
            }
            else {
                $('#ShowTblOldLoan').show();
            }
            Result = Result.d;
            oldloanfilltable(Result);
        },
        error: function (Result) {
        }
    });
}

function getTableNewLoanDtls() {
    var QueryString = "getTableNewLoanDtls";
    $.ajax({
        type: "post",
        contentType: "application/json; charset=utf-8",
        url: "ApproveLoanAvailment.aspx/getTableData",
        data: "{typ:'getTableNewLoanDtls', val1:'" + $('#ddlLoans').val() + "',data:''}",
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

function getTableNewLoanDtlsEmi() {
    var QueryString = "getTableNewLoanDtlsEmi";
    $.ajax({
        type: "post",
        contentType: "application/json; charset=utf-8",
        url: "ApproveLoanAvailment.aspx/getTableData",
        data: "{typ:'getTableNewLoanDtlsEmi', val1:'" + $('#ddlLoans').val() + "',data:''}",
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

function oldloanfilltable(data) {
    $("#tblShowOldLoan").empty();
    var valData, valData1;
    var n = 0;
    valData = data.split('Θ');
    if ($("#tblShowOldLoan tr").length == 0) {
        $('#tblShowOldLoan').append('<thead class="bg-success text-white"><tr><th scope="col">Fund Type</th><th scope="col">Financial Institution</th><th scope="col">Fund ID</th><th scope="col">Loan ID</th><th scope="col">Loan Amount</th><th scope="col">Interest Rate</th><th scope="col">Tenure</th><th scope="col">Loan Date</th><th scope="col">Maturity Date</th><th scope="col">Repayment Date</th></tr></thead>');
    }
    for (i = 0; i < valData.length - 1; i++) {
        valData1 = valData[i].split('µ');
        $('#tblShowOldLoan').append('<tbody><tr>' +
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

function newloanfilltable(data) {
    $("#tblShowNewLoan").empty();
    var valData, valData1;
    var n = 0;
    valData = data.split('Θ');
    if ($("#tblShowNewLoan tr").length == 0) {
        $('#tblShowNewLoan').append('<thead class="bg-success text-white"><tr><th scope="col">Fund Type</th><th scope="col">Financial Institution</th><th scope="col">Fund ID</th><th scope="col">Loan ID</th><th scope="col">Loan Amount</th><th scope="col">Interest Rate</th><th scope="col">Tenure</th><th scope="col">Loan Date</th><th scope="col">Maturity Date</th><th scope="col">Repayment Date</th></tr></thead>');
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
        $('#tblShowNewLoanEMI').append('<thead class="bg-success text-white"><tr><th scope="col">LoanID</th><th scope="col">InstallmentNo</th><th scope="col">InstallmentType</th><th scope="col">InstallmentFrequency</th><th scope="col">Amount</th><th scope="col">PenaltyAmount</th><th scope="col">InterestFromDate</th><th scope="col">InterestToDate</th><th scope="col">PaymentDate</th></tr></thead>');
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
    else if ($("#ddlFi").val() == "-1") {
        ModelPopWarning("Please Select Financial Institution...!");
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
        alert(data);
        $.ajax({
            type: "post",
            contentType: "application/json; charset=utf-8",
            url: "ApproveLoanAvailment.aspx/ConfirmApprove",
            data: "{typ:'ConfirmLoanAvailApprove',itmDtl:'" + data + "',data:''}",
            dataType: "json",
            success: function (Result) {
                alert(Result.d);
                window.open('ApproveLoanAvailment.aspx', '_self');

            }
        });
    }    
}

function Loanverifyval() {

    if ($('#ddlfundsourseveri').val() == '-1') {
        ModelPopWarning("Select Fund Category...!");
        //alert('Select Fund Source...!');
        $('#txtintramt').focus();
        return false;
    }

    else if ($('#ddlsubfoundveri').val() == '-1') {
        ModelPopWarning("Select Fund Sub Category...!");
        //alert('Select Fund Sub Source...!');
        $('#ddlsubfoundveri').focus();
        return false;
    }
    return true;
}
//function showfundsourceveri() {
//    $("#ddlfundsourseveri").empty();
//    $.ajax({
//        type: "post",
//        contentType: "application/json; charset=utf-8",
//        url: "Loan_Availment_verify.aspx/getFillData",
//        data: "{typ:'SELFUNDSOURCE', val1 :'" + $('#ddlselfi').val() + "'}",
//        dataType: "json",
//        success: function (Result) {
//            //alert("CHENNAI SUPER KINGS");
//            Result = Result.d;
//            $.each(Result, function (key, value) {
//                $('#ddlfundsourseveri').append($("<option></option>").val(value.id).html(value.name));
//            });
//        }
//    });
//}
//function verifundshow() {
//    //alert('one');
//    $.ajax({
//        type: "post",
//        contentType: "application/json; charset=utf-8",
//        url: "Loan_Availment_verify.aspx/getFillData",
//        data: "{typ:'SELFUNDSUBSOURCE', val1 :'" + $('#ddlfundsourseveri').val() + "'}",
//        dataType: "json",
//        success: function (Result) {

//            //alert("full");
//            Result = Result.d;
//            $('#ddlsubfoundveri').empty();
//            $.each(Result, function (key, value) {
//                $('#ddlsubfoundveri').append($("<option></option>").val(value.id).html(value.name));
//            });
//        }
//    });
//}

//function VeriFundProvider() {
//    //$("#prjdetailes").empty();
//    //alert("doooooooooo"); 
//    $.ajax({
//        type: "post",
//        contentType: "application/json; charset=utf-8",
//        url: "Loan_Availment_verify.aspx/getfunddata",
//        data: "{typ:'SELFUNDPROVIDER', val1:'" + $('#ddlfundsourseveri').val() + "',data:'" + $('#ddlsubfoundveri').val().split("æ")[1] + "'}",
//        dataType: "json",
//        success: function (Result) {
//            //alert("comming"); 
//            if (Result.d == '') {
//                alert('invisible');
//                $('#divfuveri').hide();
//                $('#divflowdone').hide();
//                $('#divpamode').hide();
//            }
//            else {
//                $('#divfuveri').show();
//                $('#divflowdone').show();
//                $('#divpamode').show();
//            }
//            Result = Result.d;
//            Vefundfilltable(Result);
//            VerOldloandetailes();
//            Modepaymenttabledel();
//        },
//        error: function (Result) {
//        }
//    });
//}
////------------------Fund Flow Table----------------------//
//function VerOldloandetailes() {
//    //$("#prjdetailes").empty();
//    //alert("gpppppppppppp");
//    $.ajax({
//        type: "post",
//        contentType: "application/json; charset=utf-8",
//        url: "Loan_Availment_verify.aspx/getoldloandtl",
//        data: "{typ:'SELOLDLOANDEL', val1:'" + $('#ddlfundsourseveri').val() + "',data:'" + $('#ddlsubfoundveri').val().split("æ")[1] + "'}",
//        dataType: "json",
//        success: function (Result) {

//            if (Result.d == '') {
//                //alert('invisible');               
//                $('#divflowdone').hide();

//            }
//            else {
//                $('#divflowdone').show();
//            }
//            //alert("bring it");
//            Result = Result.d;
//            verloanfilltable(Result);
//        },
//        error: function (Result) {
//        }
//    });
//}
////-------------------------fill mode pay table detailes---------------------//

//function Modepaymenttabledel() {
//    //$("#prjdetailes").empty();
//    //alert("kooooiiiiii");
//    $.ajax({
//        type: "post",
//        contentType: "application/json; charset=utf-8",
//        url: "Loan_Availment_verify.aspx/getpaymodefill",
//        data: "{typ:'SELMODPAYTAB', val1:'" + $('#ddlfundsourseveri').val() + "',data:'" + $('#ddlsubfoundveri').val().split("æ")[1] + "'}",
//        dataType: "json",
//        success: function (Result) {
//            //alert("bring it");

//            if (Result.d == '') {
//                //alert('invisible');

//                $('#divpamode').hide();

//            }
//            else {

//                $('#divpamode').show();
//            }

//            Result = Result.d;
//            vermodepayfill(Result);

//        },
//        error: function (Result) {

//        }
//    });
//}

//----------LOAN VERIFY VALIDATION----------//


function ModelPopSuccess(msg) {
    $("#successMsgContent").html(msg);
    //jQuery("#centralModalDanger").modal('show');
    $("#centralModalSuccess").modal("show");
}
function ModelPopWarning(msg) {
    $("#warnMsgContent").html(msg);
    //jQuery("#centralModalWarning").modal('show');
    $("#centralModalWarning").modal("show");
}


//$.ajax({
//    type: "post",
//    contentType: "application/json; charset=utf-8",
//    url: "Loan_Availment_verify.aspx/getFillData",
//    data: "{typ:'SELFUNDSOURCE', val1 :''}",
//    dataType: "json",
//    success: function (Result) {
//        //alert("full");
//        Result = Result.d;
//        $.each(Result, function (key, value) {
//            $('#ddlfundsourseveri').append($("<option></option>").val(value.id).html(value.name));
//        });
//    }
//});