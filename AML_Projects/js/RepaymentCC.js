
function exitPage() {
    window.open("index.aspx", "_self");
}

$(window).on('load', function () {
   
    //$('#divfeed').hide();
    //$('#divsgst').hide();
    //$('#divcgst').hide();
    //$('#divINSERTAVAILMENTfi').hide();
    

    //clearRepay();
    FillFI();
    //SELINTRESTTYPE();
    //SELLOANACCNAME();
    //SELBANKACC();
    // SELPAYMENTMODE();
    //}
});
function ShowStatement() {
    debugger;
    var usr, fundid = '';
    fundid = $("#ddlFund").val();

    if (fundid == -1 || fundid == '') {
        alert("Please Select Fund To Continue...");
    }
    else {        
        encryptUrl(fundid);
    }
}

function encryptUrl(fundid) {
    debugger;
    //var newWindow = window.open("", "_blank");
    //window.open("", "newPage");
    $.ajax({
        type: "post",
        contentType: "application/json; charset=utf-8",
        url: "RepaymentCC.aspx/Encrypt",
        data: "{clearText:'" + fundid + "'}",
        dataType: "json",
        success: function (Result) {
            //Result = Result.d;
           // debugger;            
            //newWindow.location.href = "StatementCC.aspx?fundid=" + Result;
            //window.open("StatementCC.aspx?fundid=" + Result, "_blank");
            alert("You will now be redirected.");
            window.location = "//www.aspsnippets.com/";
        }
    });

}
//function FillFITypeCC() {
//    var QueryString = "FillFITypeCC";
//    $.ajax({
//        type: "post",
//        contentType: "application/json; charset=utf-8",
//        url: "RepaymentCC.aspx/getFillData",
//        data: "{typ:'FillFITypeCC', val1 :''}",
//        dataType: "json",
//        success: function (Result) {
//            Result = Result.d;
//            $.each(Result, function (key, value) {
//                $('#ddlFiType').append($("<option></option>").val(value.id).html(value.name));
//            });
//        }
//    });
//}


//-----------select FI-------------------//
//-------------------------FILL FInancial Institution---------------------//
function FillFI() {
   // clear();
    //clearRepay();
    $("#ddlFi").empty();
    $("#ddlFund").empty();
    $("#ddlLoan").empty();
    $.ajax({
        type: "post",
        contentType: "application/json; charset=utf-8",
        url: "RepaymentCC.aspx/getFillData",
        data: "{typ:'FillFIRepayCC', val1 :''}",
        dataType: "json",
        success: function (Result) {
            Result = Result.d;
            $('#ddlFi').empty();
            $.each(Result, function (key, value) {
                $('#ddlFi').append($("<option></option>").val(value.id).html(value.name));
            });
        }
    });

}
//-------------------------FILL Financial Institution---------------------//

//-------------------------FILL Fund---------------------//
function FillFund() {
    $("#ddlFund").empty();
    $("#ddlLoan").empty();
    var InputData = $("#ddlFi").val()
    $.ajax({
        type: "post",
        contentType: "application/json; charset=utf-8",
        url: "RepaymentCC.aspx/getFillData",
        data: "{typ:'FillFundRepayCC', val1 :'" + InputData + "'}",
        dataType: "json",
        success: function (Result) {
            Result = Result.d;
            $('#ddlFund').empty();
            $.each(Result, function (key, value) {
                $('#ddlFund').append($("<option></option>").val(value.id).html(value.name));
            });
        }
    });

}
//-----------------------------FILL Fund--------------------------------//

//-------------------------FILL Loan---------------------//
function FillLoan() {
    $("#ddlLoan").empty();
    var InputData = $("#ddlFund").val();
    $.ajax({
        type: "post",
        contentType: "application/json; charset=utf-8",
        url: "RepaymentCC.aspx/getFillData",
        data: "{typ:'FillLoanRepayCC', val1 :'" + InputData + "'}",
        dataType: "json",
        success: function (Result) {
            Result = Result.d;
            $('#ddlLoan').empty();
            $.each(Result, function (key, value) {
                $('#ddlLoan').append($("<option></option>").val(value.id).html(value.name));
            });
        }
    });

}
//-----------------------------CASH CREDIT TABLE FILL--------------------------------//


function fundidshow() {

    //alert(9);
    //alert(($('#ddlsubfound').val().split("æ")[1]));
    //$("[id*=hdfundid]").val($('#ddlsubfound').val().split("æ")[1]);
    $("[id*=hdfundid]").val($("#ddlFund").val());
    // $("[id*=hdfundid]").val(1);
    //alert($("[id*=hdfundid]").val());
}


//function SelCCfundsource() {
//    $("#ddlFundSource").empty();
//    $("#ddlSubFundSource").empty();
//    $("#ddlFund").empty();
//    $.ajax({
//        type: "post",
//        contentType: "application/json; charset=utf-8",
//        url: "RepaymentCC.aspx/getFillData",
//        data: "{typ:'SELCASHCREDIRFS', val1 :'" + $('#ddlFi').val() + "'}",
//        dataType: "json",
//        success: function (Result) {
//            //alert("CHENNAI SUPER KINGS");
//            Result = Result.d;
//            $.each(Result, function (key, value) {

//                $('#ddlFundSource').append($("<option></option>").val(value.id).html(value.name));


//            });
//        }
//    });

//}

//function SelectCCsubfund() {

//    //alert('srgrg');
//    //alert($("#ddlsubfund").val());
//    var InputData = $("#ddlFundSource").val() + "µ" + $("#ddlFi").val()
//    $.ajax({
//        type: "post",
//        contentType: "application/json; charset=utf-8",
//        url: "RepaymentCC.aspx/getFillData",
//        data: "{typ:'SELCASHCREDIT', val1 :'" + InputData + "'}",
//        dataType: "json",
//        success: function (Result) {
//            //alert("full");
//            Result = Result.d;
//            $('#ddlsubfund').empty();
//            $.each(Result, function (key, value) {
//                $('#ddlsubfund').append($("<option></option>").val(value.id).html(value.name));
//            });
//        }
//    });

//}


function FillLoanlimit() {
    $.ajax({
        type: "post",
        contentType: "application/json; charset=utf-8",
        url: "RepaymentCC.aspx/getFillDataloan",
        data: "{typ:'SELLOANLIMIT', val1:'',data:'" + $("#ddlFund").val() + "'}",
        dataType: "json",
        success: function (Result) {
            if (Result.d == '') {
                $('#divfi').hide();
                $('#divfuflow').hide();
            }
            else {
                $('#divfi').show();
                $('#divfuflow').show();
            }
            //alert(Result.d);
            Result = Result.d.split("~");
            CashcreditFundProvid();
            fundidshow();

            $('#txtloanlimit').val(Result[0]);
            LoanLimitWords.innerHTML = AmountToWords(Result[0]);
            $('#txtproccessfee').val(Result[2]);
            processFeeWords.innerHTML = AmountToWords(Result[2]);
            if (Result[1] == "") {
                $('#txtloanbal').val(Result[0]);
                LoanBalWords.innerHTML = AmountToWords(Result[0]);

            } else {
                $('#txtloanbal').val(Result[1]);
                LoanBalWords.innerHTML = AmountToWords(Result[1]);
            }



        }
    });

}

function FillLoanDetails() {
    debugger;
    $.ajax({
        type: "post",
        contentType: "application/json; charset=utf-8",
        url: "RepaymentCC.aspx/getFillDataloan",
        data: "{typ:'SELLOANLIMIT', val1:'',data:'" + $("#ddlFund").val() + "'}",
        dataType: "json",
        success: function (Result) {
            //if (Result.d == '') {
            //    $('#divAccord').hide();
            //    $('#divfi').hide();
            //    $('#divfuflow').hide();
            //}
            //else {
            //    $('#divAccord').show();
            //    $('#divfi').show();
            //    $('#divfuflow').show();
            //}
            Result = Result.d.split("~");
            

            fundidshow();
            //LoanDetailsTableFill();
            FundProvider();
            Oldloandetailes();

            $('#txtloanlimit').val(Result[0]);
            LoanLimitWords.innerHTML = AmountToWords(Result[0]);
            $('#txtproccessfee').val(Result[2]);
            processFeeWords.innerHTML = AmountToWords(Result[2]);
            if (Result[1] == "") {
                $('#txtloanbal').val(Result[0]);
                LoanBalWords.innerHTML = AmountToWords(Result[0]);

            } else {
                $('#txtloanbal').val(Result[1]);
                LoanBalWords.innerHTML = AmountToWords(Result[1]);
            }
        }
    });

}

//----------------fund provider Information table------------------//

function FundProvider() {
    $.ajax({
        type: "post",
        contentType: "application/json; charset=utf-8",
        url: "RepaymentCC.aspx/getfunddata",
        data: "{typ:'SELFUNDPROVIDER', val1:'',data:'" + $("#ddlFund").val() + "'}",
        dataType: "json",
        success: function (Result) {
            if (Result.d == '') {
                $('#divfi').hide();
            }
            else {
                $('#divAccord').show();
                $('#divfi').show();
            }
            Result = Result.d;
            fundfilltable(Result);
        },
        error: function (Result) {
        }
    });
}

function fundfilltable(data) {
    $("#funddetailes").empty();
    var valData, valData1;
    var n = 0;
    valData = data.split('Θ');
    if ($("#funddetailes tr").length == 0) {
        $("#funddetailes").empty();
        //$('#funddetailes').append('<tbody><tr style="background-color:#996633;color:black"><th class="align-center">SOURCE NAME</th><th class="align-center">FUND NAME</th><th class="align-center">FI TYPE NAME</th> <th class="align-center">FI NAME</th><th class="align-center">AGREEMENT ENTERED DATE</th><th class="align-center">AGREEMENT FROM DATE</th><th class="align-center">AGREEMENT TO DATE</th><th class="align-center">LOAN LIMIT</th></tr>');
        $("#funddetailes").append('<thead class="bg-success text-white">< tr ><th scope="col">FundCategory</th> <th scope="col">Fund Type</th> <th scope="col">FundProviderType</th><th scope="col">FundProvider</th><th scope="col">AgreementDate</th><th scope="col">AgreementFromDate</th><th scope="col">AgreementToDate</th><th scope="col">FundLimit</th></tr ></thead><tbody>'
        );
    }
    for (i = 0; i < valData.length - 1; i++) {
        valData1 = valData[i].split('^');
        //$('#funddetailes').append('<tr style="background-color:#999966;color:black">' +
        $('#funddetailes').append('<tr>' +
            //'<td>' + $("#tableData tr").length + '</td>' +
            '<td>' + valData1[0] + '</td>' +
            '<td>' + valData1[1] + '</td>' +
            '<td>' + valData1[2] + '</td>' +
            '<td>' + valData1[3] + '</td>' +
            '<td>' + valData1[4] + '</td>' +
            '<td>' + valData1[5] + '</td>' +
            '<td>' + valData1[6] + '</td>' +
            '<td>' + valData1[7] + '</td>' +
            //'<td>' + $("#ddlselprj option:selected").text() + '</td>' +
            //'<td style="display:none;>' + valData1[1] + '</td>' +      
            '</tr> </tbody>');

    }

}

//------------------Fund Flow Table----------------------//

function Oldloandetailes() {
    $.ajax({
        type: "post",
        contentType: "application/json; charset=utf-8",
        url: "RepaymentCC.aspx/getoldloandtl",
        data: "{typ:'SELOLDLOAN', val1:'',data:'" + $("#ddlFund").val() + "'}",
        dataType: "json",
        success: function (Result) {
            if (Result.d == '') {
                //alert('gpppppppppppp');
                $('#divfuflow').hide();
            }
            else {
                $('#divAccord').show();
                $('#divfuflow').show();
            }
            Result = Result.d;
            loanfilltableFN(Result);
        },
        error: function (Result) {
        }
    });
}

function loanfilltableFN(data) {
    $("#loanfilltable").empty();
    var valData, valData1;
    var n = 0;
    valData = data.split('Θ');
    if ($("#loandetailes tr").length == 0) {
        //$('#loanfilltable').append('<tbody><tr style="background-color:#996633;color:black"><th class="align-center">LOAN AMOUNT </th><th class="align-center">INTEREST TYPE</th><th class="align-center">INTEREST RATE</th> <th class="align-center">TENURE</th><th class="align-center">LOAN DATE</th><th class="align-center">MATURITY DATE</th><th class="align-center">PAYMENT</th><th class="align-center">LOAN MAIN ACC</th><th class="align-center">LOAN SUB ACC</th><th class="align-center">INTEREST MAIN ACC</th><th class="align-center">INTEREST SUB ACC </th><th class="align-center">ENTERED BY</th><th class="align-center">ENTERED DATE</th></tr>');
        $("#loanfilltable").append('<thead class="bg-success text-white">< tr ><th scope="col">LoanAmount</th> <th scope="col">InterestType</th> <th scope="col">InterestRate</th><th scope="col">Tenure</th><th scope="col">LoanDate</th><th scope="col">MaturityDate</th><th scope="col">Payment</th><th scope="col">LoanMainLedger</th><th scope="col">LoanSubLedger</th><th scope="col">InterestMainLedger</th><th scope="col">InterestSubLedger</th></tr ></thead><tbody>'
        );
    }

    for (i = 0; i < valData.length - 1; i++) {
        valData1 = valData[i].split('^');
        //$('#loanfilltable').append('<tr style="background-color:#999966;color:black">' +
        $('#loanfilltable').append('<tr>' +
            //'<td>' + $("#tableData tr").length + '</td>' +
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
            '<td>' + valData1[10] + '</td>' +
            //'<td>' + valData1[11] + '</td>' +
            //'<td>' + valData1[12] + '</td>' +
            //'<td>' + $("#ddlselprj option:selected").text() + '</td>' +
            //'<td style="display:none;>' + valData1[1] + '</td>' +      
            '</tr> </tbody>');

    }

}

function showfund() {
    var InputData = $("#ddlsubfund").val() + "µ" + $("#ddlFi").val()
    $.ajax({
        type: "post",
        contentType: "application/json; charset=utf-8",
        url: "RepaymentCC.aspx/getFillData",
        data: "{typ:'SELFUND', val1 :'" + InputData + "'}",
        dataType: "json",
        success: function (Result) {
            //alert("full");
            Result = Result.d;
            $('#ddlsubfound').empty();
            $.each(Result, function (key, value) {
                $('#ddlsubfound').append($("<option></option>").val(value.id).html(value.name));
            });
        }
    });

}





function LoanDetailsTableFill() {
    $.ajax({
        type: "post",
        contentType: "application/json; charset=utf-8",
        url: "RepaymentCC.aspx/getfunddata",
        data: "{typ:'SELFUNDPROVIDER', val1:'',data:'" + $("#ddlFund").val() + "'}",
        dataType: "json",
        success: function (Result) {
            //alert("comming"); 

            if (Result.d == '') {
                $('#divLoanDetails').hide();
            }
            else {
                $('#divLoanDetails').show();
            }
            Result = Result.d;
            CCfundtabledata(Result);
            //CColdfunddetails();
            //Modepaymenttabledel();

        },
        error: function (Result) {

        }
    });
}





//------------fund table---------------//

function CCfundtabledata(data) {
    $("#tableccfund").empty();
    var valData, valData1;
    var n = 0;
    valData = data.split('T');
    if ($("#tableccfund tr").length == 0) {
        $('#tableccfund').append('<tbody><tr style="background-color:#996633;color:black"><th class="align-center">SOURCE NAME</th><th class="align-center">FUND NAME</th><th class="align-center">FI TYPE NAME</th> <th class="align-center">FI NAME</th><th class="align-center">AGREEMENT ENTERED DATE</th><th class="align-center">AGREEMENT FROM DATE</th><th class="align-center">AGREEMENT TO DATE</th><th class="align-center">LOAN LIMIT</th></tr>');
    }

    for (i = 0; i < valData.length - 1; i++) {
        valData1 = valData[i].split('^');
        $('#tableccfund').append('<tr style="background-color:#999966;color:black">' +
            //'<td>' + $("#tableData tr").length + '</td>' +
            '<td>' + valData1[0] + '</td>' +
            '<td>' + valData1[1] + '</td>' +
            '<td>' + valData1[2] + '</td>' +
            '<td>' + valData1[3] + '</td>' +
            '<td>' + valData1[4] + '</td>' +
            '<td>' + valData1[5] + '</td>' +
            '<td>' + valData1[6] + '</td>' +
            '<td>' + valData1[7] + '</td>' +
            //'<td>' + $("#ddlselprj option:selected").text() + '</td>' +
            //'<td style="display:none;>' + valData1[1] + '</td>' +      
            '</tr> </tbody>');

    }

}





function loanlimitcheck() {

    if (parseFloat($('#txtloanbal').val()) < parseFloat($('#txtloanamt').val())) {
        alert('Insufficient Balance...!');
        return;
    }

}



//function cashcreditamount() {

//    if ($('#ddlsubfound').val().split("æ")[0] == '6') {
//        alert('loan check');

//        if ($('[id*=radGNo]:checked').val()) {

//            alert('withraw');
//            var bal = $('#txtloanbal').val();
//            $('#txtloanbal').val(parseFloat(bal) - parseFloat($('#txtloanamt').val()))
//            LoanBalWords.innerHTML = AmountToWords(parseFloat(bal) - parseFloat($('#txtloanamt').val()));
//            //$('#txtloanamt').val('');
//            return;
//        }
//        else if ($('[id*=radGYes]:checked').val()) {

//            alert('reypay');
//            var bal = $('#txtloanbal').val();
//            $('#txtloanbal').val(parseFloat(bal) + parseFloat($('#txtloanamt').val()))
//            LoanBalWords.innerHTML = AmountToWords(parseFloat(bal) + parseFloat($('#txtloanamt').val()));
//            //$('#txtloanamt').val('');
//            return;
//        }
//    }

//}









function searchContent() {


    if ($('[id*=radGYes]:checked').val()) {
        $('#divwith').show();
        $('#lblamt').html('Reypayment Amount:');

    } else if ($('[id*=radGNo]:checked').val()) {
        $('#divwith').show();
        $('#lblamt').html('Withdrawal Amount:');
    }


}
















function InsertCCloan() {

    //alert('CASH CREDIT');
    var cc_type, cc_descr;

    var data = "";

    if ($('[id*=radGYes]:checked').val()) {

        cc_type = 'C';
        cc_descr = 'LOAN REPAYMENT'
    }
    else if ($('[id*=radGNo]:checked').val()) {

        cc_type = 'D';
        cc_descr = 'LOAN AVAILMENT'
    }


    data = $('#txtloanamt').val() + '^' + $('#txtloanamt').val() + '^' + $('#ddlsubfound').val().split("æ")[1] + '^' + $('#txtloanbal').val() + '^' + cc_type + '^' + cc_descr;
    alert(data);

    $.ajax({
        type: "post",
        contentType: "application/json; charset=utf-8",
        url: "RepaymentCC.aspx/ConfirmTresury",
        data: "{typ:'INSERTCCLOAN',itmDtl:'" + data + "',data:''}",
        dataType: "json",
        success: function (Result) {
            alert('insertion successful....!');
            alert(Result.d);
            window.open('RepaymentCC.aspx', '_self');

        }
    });
}


function AmountToWords(price) {
    var sglDigit = ["Zero", "One", "Two", "Three", "Four", "Five", "Six", "Seven", "Eight", "Nine"],
        dblDigit = ["Ten", "Eleven", "Twelve", "Thirteen", "Fourteen", "Fifteen", "Sixteen", "Seventeen", "Eighteen", "Nineteen"],
        tensPlace = ["", "Ten", "Twenty", "Thirty", "Forty", "Fifty", "Sixty", "Seventy", "Eighty", "Ninety"],
        handle_tens = function (dgt, prevDgt) {
            return 0 == dgt ? "" : " " + (1 == dgt ? dblDigit[prevDgt] : tensPlace[dgt])
        },
        handle_utlc = function (dgt, nxtDgt, denom) {
            return (0 != dgt && 1 != nxtDgt ? " " + sglDigit[dgt] : "") + (0 != nxtDgt || dgt > 0 ? " " + denom : "")
        };

    var str = "",
        digitIdx = 0,
        digit = 0,
        nxtDigit = 0,
        words = [];
    if (price += "", isNaN(parseInt(price))) str = "";
    else if (parseInt(price) > 0 && price.length <= 10) {
        for (digitIdx = price.length - 1; digitIdx >= 0; digitIdx--) switch (digit = price[digitIdx] - 0, nxtDigit = digitIdx > 0 ? price[digitIdx - 1] - 0 : 0, price.length - digitIdx - 1) {
            case 0:
                words.push(handle_utlc(digit, nxtDigit, ""));
                break;
            case 1:
                words.push(handle_tens(digit, price[digitIdx + 1]));
                break;
            case 2:
                words.push(0 != digit ? " " + sglDigit[digit] + " Hundred" + (0 != price[digitIdx + 1] && 0 != price[digitIdx + 2] ? " and" : "") : "");
                break;
            case 3:
                words.push(handle_utlc(digit, nxtDigit, "Thousand"));
                break;
            case 4:
                words.push(handle_tens(digit, price[digitIdx + 1]));
                break;
            case 5:
                words.push(handle_utlc(digit, nxtDigit, "Lakh"));
                break;
            case 6:
                words.push(handle_tens(digit, price[digitIdx + 1]));
                break;
            case 7:
                words.push(handle_utlc(digit, nxtDigit, "Crore"));
                break;
            case 8:
                words.push(handle_tens(digit, price[digitIdx + 1]));
                break;
            case 9:
                words.push(0 != digit ? " " + sglDigit[digit] + " Hundred" + (0 != price[digitIdx + 1] || 0 != price[digitIdx + 2] ? " and" : " Crore") : "")
        }
        str = words.reverse().join("")
    } else str = "Equal or Above Thousand Crore";
    return str

}

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




