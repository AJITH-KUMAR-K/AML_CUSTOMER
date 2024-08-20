function frmExit() {
    window.open("index.aspx", "_self");
}
$(window).on('load', function () {
    clear();
  
    GetDepositData();
});
function clear() {
    $("#ddlDeposit").empty();  
   

    $("#txtLoanAcc").val('');
    $("#txtMainnAcc").val('');
    $("#txtLoanSubAcc").val('');

    $("#txtSubAcc").val('');


    $("[id*=hdnLoanMainAcc]").val('');
    $("[id*=hdnLoanSubAcc]").val('');
    $("[id*=hdnFTMainAcc]").val('');
    $("[id*=hdnFTSubAcc]").val('');
    $("[id*=hdnLoanBal]").val('');
   
    //PricipleAmtWords.innerHTML = '';
    //IntAmtWords.innerHTML = '';

    
}

function GetDepositData() {
   
    var QueryString = "GetDepositData";
    $("#ddlDeposit").empty();

    $.ajax({
        type: "post",
        contentType: "application/json; charset=utf-8",
        url: "DepositWithBankClosure.aspx/getFillData",
        data: "{typ:'GetDepositApproved', val1 :''}",
        dataType: "json",
        success: function (Result) {
            Result = Result.d;
            $.each(Result, function (key, value) {
                $('#ddlDeposit').append($("<option></option>").val(value.id).html(value.name));
            });
        }
    });

}

function getTableNewDepositDtls() {
    var QueryString = "getTableNewDepositDtls";
   

    $.ajax({
        type: "post",
        contentType: "application/json; charset=utf-8",
        url: "DepositWithBankClosure.aspx/getTableData",
        data: "{typ:'getTableDepositDtls', val1:'" + $('#ddlDeposit').val() + "',data:''}",
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


function addFTAmount() {
   
    var ToTAmnt = 0;
    if ($("[id*=hdnFTMainAcc]").val().split("-", 1) == "") {
        ModelPopWarning("Select Fund Transfer Main Account...!!!");
        return false;
    }
   
    $("[id*=hdnSubAccStatus]").val(0);
    //   debugger;
    SubCheck(function () {
        var subcnt = $("[id*=hdnSubAccStatus]").val();
        if (subcnt != "1") {
            ModelPopWarning("Sub Account Is Wrong...!!!");
            $("#txtLoanSubAcc").val('');
            return false;
        }
        else {

            AddToTable();

            clearFT();
        }
    });
}
function SubCheck(callback) {
    var str = '0';
    var subdata;

    $("[id*=hdnSubAccStatus]").val(0);
    var InputString = $("[id*=hdnFTMainAcc]").val().split("-", 1) + "µ" + $("#txtFtSubAcc").val();
    $.ajax({
        type: "POST",
        contentType: "application/json; charset=utf-8",
        url: "LoanRePayment.aspx/getResult",
        data: "{QueryString:'GetSubAccCount',input:'" + InputString + "'}",
        dataType: "json",
        success: function (Result) {
            subdata = Result.d.split('µ');
            var stat = subdata[0];
            $("[id*=hdnSubAccStatus]").val(stat);
            callback();
        },
        error: function (Result) {
            $("[id*=hdnSubAccStatus]").val(0);
            callback();
        }
    });

}
