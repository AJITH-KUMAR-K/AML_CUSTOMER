
function exitPage() {
    window.open("index.aspx", "_self");
}

$(window).on('load', function () { 
    //debugger;
    clear();
    $("#txtTraDate").datepicker({
        dateFormat: 'dd/MM/yy',
        changeMonth: true,
        changeYear: true,
        stepMonths: true,
        todayHighlight: true,
        maxDate: 0,
        onSelect: function (dateText, inst) {
        }
    });
    $('#txtTraDate').datepicker().datepicker('setDate', new Date());
    FillFI();
});

function clear() {
   // $("#txtloanamt").val('');
   // LoanAmtWords.innerHTML = '';
 
    $('#rbtDeposit').prop('checked', false);
    $('#rbtWithdrawal').prop('checked', false);
    $('#rbtInt').prop('checked', false);
    $('#rbtChrgGst').prop('checked', false);

    $('#txtloanlimit').prop("disabled", true);
    $('#txtloanlimit').val('');
    LoanLimitWords.innerHTML = '';

    $('#txtloanbal').prop("disabled", true);
    $('#txtloanbal').val('');
    LoanBalWords.innerHTML = '';

    $("#funddetailes").empty();
    $("#loanfilltable").empty();
    
    $('#divAccord').hide();
    $('#divfi').hide();
    $('#divfuflow').hide();
    $("#divwith").hide();

    $("[id*=hdnLoanBal]").val('');
    $("[id*=hdnLoanLimit]").val('');
    
}

//-------------------------FILL FInancial Institution---------------------//
function FillFI() {
    // clear();
    //clearRepay();
    //debugger;
    $("#ddlFi").empty();
    $("#ddlFund").empty();
    $("#ddlLoan").empty();
    $.ajax({
        type: "post",
        contentType: "application/json; charset=utf-8",
        url: "LoanRepaymentCC.aspx/getFillData",
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
    //clear();
    $("#ddlFund").empty();
    $("#ddlLoan").empty();
    var InputData = $("#ddlFi").val()
    if ($('#ddlFi').val() == '-1') {
        clear();
        return false;
    }
    else {
        $.ajax({
            type: "post",
            contentType: "application/json; charset=utf-8",
            url: "LoanRepaymentCC.aspx/getFillData",
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
    clear();
}
//-----------------------------FILL Fund--------------------------------//

//-------------------------FILL Loan---------------------//
function FillLoan() {    
    $("#ddlLoan").empty();
    var InputData = $("#ddlFund").val();
    if ($('#ddlFund').val() == '-1') {
        clear();
        return false;
    }
    else {
        $.ajax({
            type: "post",
            contentType: "application/json; charset=utf-8",
            url: "LoanRepaymentCC.aspx/getFillData",
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
    clear();
}
//-----------------------------CASH CREDIT TABLE FILL--------------------------------//

function ShowStatement() {
    var usr, fundid = '';
    fundid = $("#ddlFund").val();

    if (fundid == '-1' || fundid == '' || fundid == null) {
        alert("Please Select Fund To Continue...");
        return false;
    }
    else {
        encryptUrl(fundid);
    }
}

function encryptUrl(fundid) {
    var newWindow = window.open("", "_blank");
    //window.open("", "newPage");
    $.ajax({
        type: "post",
        contentType: "application/json; charset=utf-8",
        url: "LoanRepaymentCC.aspx/Encrypt",
        data: "{clearText:'" + fundid + "'}",
        dataType: "json",
        success: function (Result) {
            Result = Result.d;
            // debugger;            
            newWindow.location.href = "StatementCC.aspx?fundid=" + Result;
            //window.open("StatementCC.aspx?fundid=" + Result, "_blank");
           // alert(Result);
            //window.open("StatementCC.aspx?fundid=" + Result, "_blank");
            //window.open("POFormView.aspx?poid=" + Result);
            //window.location = "StatementCC.aspx?fundid=" + Result;
        }
    });

}

//-----------------------------CASH CREDIT TABLE FILL--------------------------------//
function FillLoanDetails() {
    if ($('#ddlLoan').val() == '-1') {
        clear();
        return false;
    }
    else {
        $.ajax({
            type: "post",
            contentType: "application/json; charset=utf-8",
            url: "LoanRepaymentCC.aspx/getFillDataloan",
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

                //fundidshow();
                //LoanDetailsTableFill();
                FundProvider();
                Oldloandetailes();
                $('#txtloanlimit').val(Result[0]);
                $("[id*=hdnLoanLimit]").val(Result[0]);                
                LoanLimitWords.innerHTML = AmountToWords(Result[0]);
                //$('#txtproccessfee').val(Result[2]);
                //processFeeWords.innerHTML = AmountToWords(Result[2]);

                if (Result[1] == "") {
                    $('#txtloanbal').val(Result[0]);
                    $("[id*=hdnLoanBal]").val(Result[0]);
                    LoanBalWords.innerHTML = AmountToWords(Result[0]);

                } else {
                    $('#txtloanbal').val(Result[1]);
                    $("[id*=hdnLoanBal]").val(Result[1]);
                    LoanBalWords.innerHTML = AmountToWords(Result[1]);
                }
            }
        });
    }    
}

//----------------fund provider Information table------------------//

function FundProvider() {
    $.ajax({
        type: "post",
        contentType: "application/json; charset=utf-8",
        url: "LoanRepaymentCC.aspx/getfunddata",
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
        url: "LoanRepaymentCC.aspx/getoldloandtl",
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

function searchContent() {
   
    $("#ShwTotAmt").show();
    if ($('[id*=rbtDeposit]:checked').val()) {
        $('#divwith').show();
        $('#lblamt').html('Repayment Amount:');
        $("#txtloanamt").val('');
        LoanAmtWords.innerHTML = '';
        $('#txtloanbal').val(parseFloat($("[id*=hdnLoanBal]").val()))
        LoanBalWords.innerHTML = AmountToWords(parseFloat($("[id*=hdnLoanBal]").val()));
        $("#txtsgst").val('');
        $("#txtcgst").val('');
        $("#txtigst").val('');
        $("#txtchrgeamt").val('');
        $('#divChrgSGst').hide();
        $('#divChrgCGst').hide();
        $('#divChrgIGst').hide();
        $('#divchrg').hide();
        $("#DivtransfrAc").show();
        $("#divAddFTAccount").show();

    } else if ($('[id*=rbtWithdrawal]:checked').val()) {
        $('#divwith').show();
        $('#lblamt').html('Availment Amount:');
        $("#txtloanamt").val('');
        LoanAmtWords.innerHTML = '';
        $('#txtloanbal').val(parseFloat($("[id*=hdnLoanBal]").val()))
        LoanBalWords.innerHTML = AmountToWords(parseFloat($("[id*=hdnLoanBal]").val()));
        $("#txtsgst").val('');
        $("#txtcgst").val('');
        $("#txtigst").val('');
        $("#txtchrgeamt").val('');
        $('#divChrgSGst').hide();
        $('#divChrgCGst').hide();
        $('#divChrgIGst').hide();
        $('#divchrg').hide();
        $("#DivtransfrAc").show();
        $("#divAddFTAccount").show();
    }
    else if ($('[id*=rbtChrgGst]:checked').val()) {
        $('#divwith').show();
        $('#lblamt').html('Bank Charge :');
        $("#txtloanamt").val('');
        LoanAmtWords.innerHTML = '';
        $('#divchrg').show();
        $('#lblchrgborrow').html('Bank Borrowing:');
        $("#txtchrgeamt").val('');
        ChrgeAmtWords.innerHTML = '';
        $('#txtloanbal').val(parseFloat($("[id*=hdnLoanBal]").val()))
        LoanBalWords.innerHTML = AmountToWords(parseFloat($("[id*=hdnLoanBal]").val()));
        $('#divChrgSGst').show();
        $('#lblsgstamt').html('SGST Amount:');
        $("#txtsgst").val('');
        sgstAmtWords.innerHTML = '';
        $('#divChrgCGst').show();
        $('#lblcgstamt').html('CGST Amount:');
        $("#txtcgst").val('');
        cgstAmtWords.innerHTML = '';
        $('#divChrgIGst').show();
        $('#lbligstamt').html('IGST Amount:');
        $("#txtigst").val('');
        igstAmtWords.innerHTML = '';
        $("#DivtransfrAc").hide();
        $("#divAddFTAccount").hide();
    }
    else if ($('[id*=rbtInt]:checked').val()) {
        $('#divwith').show();
        $('#lblamt').html('Interest Amount:');
        $("#txtloanamt").val('');
        LoanAmtWords.innerHTML = '';
        $('#txtloanbal').val(parseFloat($("[id*=hdnLoanBal]").val()))
        LoanBalWords.innerHTML = AmountToWords(parseFloat($("[id*=hdnLoanBal]").val()));
        $("#txtsgst").val('');
        $("#txtcgst").val('');
        $("#txtigst").val('');
        $("#txtchrgeamt").val('');
        $('#divChrgSGst').hide();
        $('#divChrgCGst').hide();
        $('#divChrgIGst').hide();        
        $('#divchrg').hide();
    }
    
}

function InsertCCloan() {

    if ($('#ddlFi').val() == '-1' || $('#ddlFi').val() == '' || $('#ddlFi').val() == null) {
        ModelPopWarning("Select Financial Institution...!!!");
        $('#ddlFi').focus();
        return false;
    }
    else if ($('#ddlFund').val() == '-1' || $('#ddlFund').val() == '' || $('#ddlFund').val() == null) {
        ModelPopWarning("Select Fund...!!!");
        $('#ddlFund').focus();
        return false;
    }
    else if ($('#ddlLoan').val() == '-1' || $('#ddlLoan').val() == '' || $('#ddlLoan').val() == null) {
        ModelPopWarning("Select Loan...!!!");
        $('#ddlLoan').focus();
        return false;
    }

    //alert('CASH CREDIT');
    var cc_type, cc_descr;

    var data = "";
    var tblAccntData = "";
    if ($("#rbtDeposit").prop("checked") == false && $("#rbtWithdrawal").prop("checked") == false && $("#rbtChrgGst").prop("checked") == false && $("#rbtInt").prop("checked") == false) {
        ModelPopWarning("Choose Any Option...!!!");
        return false;
    }
    if ($('[id*=rbtDeposit]:checked').val()) {
        cc_type = 'D';
        //cc_descr = 'LOAN DEPOSIT'
    }
    else if ($('[id*=rbtWithdrawal]:checked').val()) {
        cc_type = 'C';
        //cc_descr = 'LOAN WITHDRAWAL'
    }
    else if ($('[id*=rbtChrgGst]:checked').val()) {
        cc_type = 'G';
        //cc_descr = 'BANK CHARGE'
    }
    else if ($('[id*=rbtInt]:checked').val()) {
        cc_type = 'I';
        //cc_descr = 'LOAN INTEREST'
    }
    var payamt = 0;
    var chrgamt = 0;
    var sgst = 0;
    var cgst = 0;
    var igst = 0;
    var totamt = 0;
    var totpayamt = 0;
    if ($("#txtloanamt").val() == "") {
        $("#txtloanamt").val(0);
    }
    else { payamt = parseInt($("#txtloanamt").val()); }

    if ($('[id*=rbtChrgGst]:checked').val()) {
        if ($("#txtchrgeamt").val() == "") {
            $("#txtchrgeamt").val(0);
        }
        else { chrgamt = parseInt($("#txtchrgeamt").val()); }

        if ($("#txtsgst").val() == "") {
            $("#txtsgst").val(0);
        }
        else { sgst = parseInt($("#txtsgst").val()); }

        if ($("#txtcgst").val() == "") {
            $("#txtcgst").val(0);
        }
        else { cgst = parseInt($("#txtcgst").val()); }

        if ($("#txtigst").val() == "") {
            $("#txtigst").val(0);
        }
        else { igst = parseInt($("#txtigst").val()); }

        $("#txtTotalAmount").val(parseInt(payamt) + parseInt(chrgamt) + parseInt(sgst) + parseInt(cgst) + parseInt(igst));

    }
    if ($('[id*=rbtInt]:checked').val()) {
        $("#txtTotalAmount").val(parseInt(payamt));
    }

    var tableData = document.getElementById('tblPaymentDtl');
    if (parseInt($("#txtTotalAmount").val()) > 0) {
        totamt = parseInt($("#txtTotalAmount").val());
        totpayamt = sgst + cgst + igst + payamt + chrgamt;

        if (totamt != totpayamt) {
            ModelPopWarning("Amount not equal ..!!!");
            return false;
        }
        for (j = 1; j < $("#tblPaymentDtl tr").length; j++) {
            //$('#tblPaymentDtl').append('<thead class="bg-success text-white"><tr><th scope="col">Main Account</th><th scope="col">Sub Account</th> <th class="align-center">Amount</th><th scope="col">Delete</th></tr></thead><tbody>');
            tblAccntData = tblAccntData + tableData.rows[j].cells[0].innerText + "µ" + tableData.rows[j].cells[1].innerText + "µ" + tableData.rows[j].cells[2].innerText + "µ" + $("[id*=hdUserId]").val() + "¥";
        }
    }
    else {
        ModelPopWarning("Add Fund Transfer Account...!!!");
        return false;
    }
    var bankchrggst = sgst + "æ" + cgst + "æ" + igst + "æ" + payamt + "æ" + chrgamt;
    //loanidµamountµpaytypeCD
    //data = $('#ddlLoan').val() + 'µ' + $('#txtloanamt').val() + 'µ' + cc_type + 'µ' + $('#txtTraDate').val() + 'µ' + $("[id*=hdUserId]").val() + 'µ' + bankchrggst;
    data = $('#ddlLoan').val() + 'µ' + $("#txtTotalAmount").val() + 'µ' + cc_type + 'µ' + $('#txtTraDate').val() + 'µ' + $("[id*=hdUserId]").val() + 'µ' + bankchrggst;
    
    $.ajax({
        type: "post",
        contentType: "application/json; charset=utf-8",
        url: "LoanRepaymentCC.aspx/ConfirmTreasury",
        data: "{typ:'INSERTCCLOAN',itmDtl:'" + data + "',data:'" + tblAccntData + "'}",
        dataType: "json",
        success: function (Result) {
            //alert('insertion successful....!');
            alert(Result.d);
            window.open('LoanRepaymentCC.aspx', '_self');

        }
    });
}

function amountcheck() {
    if ($('#txtloanamt').val() != 0 || $('#txtloanamt').val().trim().length != 0 || $('#txtchrgeamt').val() != 0 || $('#txtchrgeamt').val().trim().length != 0) {

        var bal = $("[id*=hdnLoanBal]").val();
        var limit = $("[id*=hdnLoanLimit]").val();       
        //bal-50, limit-100, amt=60
        if ($('[id*=rbtWithdrawal]:checked').val()) {
            if (parseFloat($("[id*=hdnLoanBal]").val()) < parseFloat($('#txtloanamt').val())) {
                ModelPopWarning("Amount Exceeds the Loan Balance of " + bal + "...!!!");               
                $('#txtloanbal').val(parseFloat($("[id*=hdnLoanBal]").val()))
                LoanBalWords.innerHTML = AmountToWords(parseFloat($("[id*=hdnLoanBal]").val()));
                $('#txtloanamt').val('');
                LoanAmtWords.innerHTML = "";
                $('#txtloanamt').focus();
                return;
            }
            else {
                $('#txtloanbal').val(parseFloat(bal) - parseFloat($('#txtloanamt').val()))
                LoanBalWords.innerHTML = AmountToWords(parseFloat(bal) - parseFloat($('#txtloanamt').val()));
                return;
            }
        }
        else if ($('[id*=rbtDeposit]:checked').val()) {
            //bal-50, limit-100, amt=60
            var amt = parseFloat($('#txtloanamt').val());
            var newBal = parseFloat(bal) + parseFloat(amt);
            if (parseFloat(limit) < parseFloat(newBal)) {
                ModelPopWarning("Balance Exceeds the Loan Limit of " + limit + "...!!!");
                $('#txtloanbal').val(parseFloat($("[id*=hdnLoanBal]").val()))
                LoanBalWords.innerHTML = AmountToWords(parseFloat($("[id*=hdnLoanBal]").val()));
                $('#txtloanamt').val('');
                LoanAmtWords.innerHTML = "";
                $('#txtloanamt').focus();
                return;
            }
            else {
                $('#txtloanbal').val(newBal)
                LoanBalWords.innerHTML = AmountToWords(newBal);
                return;
            }
        }
        else if ($('[id*=rbtChrgGst]:checked').val()) {
            if ($("#txtsgst").val() == "") {
                $("#txtsgst").val(0);
            }
            if ($("#txtcgst").val() == "") {
                $("#txtcgst").val(0);
            }
            if ($("#txtigst").val() == "") {
                $("#txtigst").val(0);
            }
            if ($("#txtloanamt").val() == "") {
                $("#txtloanamt").val(0);
            }
            if ($("#txtchrgeamt").val() == "") {
                $("#txtchrgeamt").val(0);
            }
            if (parseFloat($("[id*=hdnLoanBal]").val()) < parseFloat($('#txtloanamt').val()) + parseFloat($('#txtchrgeamt').val()) + parseFloat($('#txtsgst').val()) + parseFloat($('#txtigst').val()) + parseFloat($('#txtcgst').val())) {
                ModelPopWarning("Amount Exceeds the Loan Balance of " + bal + "...!!!");
                $('#txtloanbal').val(parseFloat($("[id*=hdnLoanBal]").val()))
                LoanBalWords.innerHTML = AmountToWords(parseFloat($("[id*=hdnLoanBal]").val()));
                $('#txtloanamt').val('');
                $('#txtchrgeamt').val('');
                $('#txtsgst').val('');
                $('#txtcgst').val('');
                $('#txtigst').val('');
                LoanAmtWords.innerHTML = "";
                $('#txtloanamt').focus();
                return;
            }
            else {
                $('#txtloanbal').val(parseFloat(bal) - parseFloat($('#txtloanamt').val()) + parseFloat($('#txtchrgeamt').val()) + parseFloat($('#txtsgst').val()) + parseFloat($('#txtigst').val()) + parseFloat($('#txtcgst').val()));
                LoanBalWords.innerHTML = AmountToWords(parseFloat(bal) - (parseFloat($('#txtloanamt').val()) + parseFloat($('#txtchrgeamt').val()) + parseFloat($('#txtsgst').val()) + parseFloat($('#txtigst').val()) + parseFloat($('#txtcgst').val())));
                return;
            }
        }

    }

}

//function cashcreditamount() {
//    if ($('[id*=rbtWithdrawal]:checked').val()) {
//            var bal = $("[id*=hdnLoanBal]").val();
//            $('#txtloanbal').val(parseFloat(bal) - parseFloat($('#txtloanamt').val()))
//            LoanBalWords.innerHTML = AmountToWords(parseFloat(bal) - parseFloat($('#txtloanamt').val()));
//            return;
//        }
//    else if ($('[id*=rbtDeposit]:checked').val()) {
//            var bal = $("[id*=hdnLoanBal]").val();
//            $('#txtloanbal').val(parseFloat(bal) + parseFloat($('#txtloanamt').val()))
//            LoanBalWords.innerHTML = AmountToWords(parseFloat(bal) + parseFloat($('#txtloanamt').val()));
//            return;
//        }
//}

//function loanlimitcheck() {
//    if (parseFloat($('#txtloanbal').val()) < parseFloat($('#txtloanamt').val())) {
//        ModelPopWarning("Insufficient Balance...!");
//        return;
//    }
//}
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
            $("#txtFtSubAcc").val('');
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

function AddToTable() {
  
    var table = document.getElementById('tblPaymentDtl');
    // var tableDtl = document.getElementById('tableDataDetails'); 
    var len = $("#tblPaymentDtl tr").length;
    if (len > 1) {
        var acc = table.rows[1].cells[1].innerText;
    }

    for (i = 1; i < $("#tblPaymentDtl tr").length; i++) {
        if (($("[id*=hdnFTMainAcc]").val().split("-", 1) == table.rows[i].cells[0].innerText) && ($("#txtFtSubAcc").val() == table.rows[i].cells[1].innerText)) {
            //alert('Item Already Added...!!!');
            ModelPopWarning("Account Already Added...!!!");
            return false;
        }
    }
    if ($("#txtTotalAmount").val() == "") {
        $("#txtTotalAmount").val(0);

        ToTAmnt = parseFloat($("#txtPayAmount").val()) + parseFloat($("#txtTotalAmount").val());
        $("#txtTotalAmount").val(ToTAmnt);
    }
    else {
        ToTAmnt = parseFloat($("#txtPayAmount").val()) + parseFloat($("#txtTotalAmount").val());
        $("#txtTotalAmount").val(ToTAmnt);
    }

    if ($("#tblPaymentDtl tr").length == 0) {
        //$('#tblPaymentDtl').append('<tbody><tr style="background-color:#996633;color:black"><th class="align-center">Main Account</th><th class="align-center">Sub Account</th><th class="align-center">Amount</th><th class="align-center">Delete</th></tr>'
        //);
        $('#tblPaymentDtl').append('<thead class="bg-success text-white"><tr><th scope="col">Main Account</th><th scope="col">Sub Account</th> <th class="align-center">Amount</th><th scope="col">Delete</th></tr></thead><tbody>');

    }
    $('#tblPaymentDtl').append('<tr>' +
        '<td class="align-center">' + $("[id*=hdnFTMainAcc]").val().split("-", 1) + '</td>' +
        '<td class="align-center">' + $("#txtFtSubAcc").val() + '</td>' +
        '<td class="align-center">' + $("#txtPayAmount").val() + '</td>' +
        //'<td class="align-center"><input class="btn-prop input-md align-center " style="width:100px" id="btnDelt" type="button" value="Delete"/ onclick="DeleteAcc()"></td>' +
        //'<td class="align-center"><ul class="table-controls"><li><a href="javascript:void(0);" class="bs-tooltip remove" title="Delete" ><i class="icon-trash"></i></a></li></ul></td>' +
        '<td style="width:3%;"><ul><li><a href="javascript:void(0);" title="Delete" class="bs-tooltip delete"><i class="ti-trash"></i>Delete</a> </li> </ul></td>' +

        '</tr> </tbody>');


}
function DeleteAcc() {
    var table = document.getElementById('tblPaymentDtl');
    var DelValue = 0;
    for (i = 1; i < $("#tblPaymentDtl tr").length; i++) {
        DelValue = DelValue + parseFloat(table.rows[i].cells[2].innerText);
    }
    $("#txtTotalAmount").val(DelValue);
}
function clearFT() {
    $("#txtFtMainAcc").val('');
    $("#txtFtSubAcc").val('');
    $("#txtPayAmount").val('');

    FTMainAccName.innerHTML = '';
    FTSubAccName.innerHTML = '';
    AmtWords.innerHTML = '';

    $("[id*=hdnFTMainAcc]").val('');
    $("[id*=hdnFTSubAcc]").val('');
}
$(document).on('click', '.delete', function () {

    $(this).closest('tr').remove();
    DeleteAcc();
    if ($("#tblPaymentDtl tr").length == 1) {
        $("#tblPaymentDtl").empty();
    }
    return false;
});