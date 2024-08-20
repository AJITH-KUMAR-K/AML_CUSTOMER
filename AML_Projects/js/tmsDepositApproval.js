

function frmExit() {
    window.open("index.aspx", "_self");
}
$(window).on('load', function () {
    clear();
   // GetLoanAvailFundType();
    GetLoanDeposit();
});
function clear() {
    $("#ShowTblNewLoan").hide();
    //$("#ShowTblOldLoan").hide();
    //$("#ShowTblNewLoanEMI").hide();
    //$("#ddlFundType").empty();
   // $("#ddlFi").empty();
    //$("#ddlLoans").empty();
}
function GetLoanDeposit() {  
    var QueryString = "GetLoanDeposit";   
    $("#ddlDeposit").empty();

    $.ajax({
        type: "post",
        contentType: "application/json; charset=utf-8",
        url: "DepositWithBankApproval.aspx/getFillData",
        data: "{typ:'GetLoanDeposit', val1 :''}",
        dataType: "json",
        success: function (Result) {
            Result = Result.d;
            $.each(Result, function (key, value) {
                $('#ddlDeposit').append($("<option></option>").val(value.id).html(value.name));
            });
        }
    });
}

//-------------
function getTableNewDepositDtls() {
    var QueryString = "getTableNewDepositDtls";
    
   
    $.ajax({
        type: "post",
        contentType: "application/json; charset=utf-8",
        url: "DepositWithBankApproval.aspx/getTableData",       
        data: "{typ:'getTableNewDepositDtls', val1:'" + $('#ddlDeposit').val() + "',data:''}",
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



function newloanfilltable(data) {
    
    $("#tblShowNewLoan").empty();
    var valData, valData1;
    var n = 0;
    valData = data.split('Θ');
    if ($("#tblShowNewLoan tr").length == 0) {
        $('#tblShowNewLoan').append('<thead class="bg-success text-white"><tr><th scope="col">Financial Institution</th><th scope="col">FD NUMBER</th><th scope="col">DEPOSIT AMOUNT</th><th scope="col">Interest Rate</th><th scope="col">DEPOSIT DATE</th><th scope="col">PURPOSE</th><th scope="col">PROVISION</th><th scope="col">Maturity Date</th></tr></thead>');
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
            '</tr> </tbody>');
    }
}



function ConfirmDepositApprove() {
    var data;
    var aprRjct
    if ($("#ddlDeposit").val() == "-1") {
        ModelPopWarning("Please Select Deposit Details...!");
        return false;
    }
   else  if ($("#radAppr").prop("checked") == false && $("#radRjct").prop("checked") == false) {
        ModelPopWarning("Select Approve Or Reject...!");
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
        data = aprRjct + "µ" + $("#ddlDeposit").val() + "µ" + $("[id*=hdUserId]").val();

        $.ajax({
            type: "post",
            contentType: "application/json; charset=utf-8",
            url: "DepositWithBankApproval.aspx/ConfirmApprove",
            data: "{typ:'ConfirmDepositApprove',itmDtl:'" + data + "',data:''}",
            dataType: "json",
            success: function (Result) {
                alert(Result.d);
                window.open('DepositWithBankApproval.aspx', '_self');

            }
        });
    }
}


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



