var valgst;
var meturity;
var repay;
var bultval;
function exitPage() {
    window.open("index.aspx", "_self");
}

$(window).on('load', function () { 
    //Genreypayment();
   // myMove();
    //debugger;
    //if (isPostBack) {
    //}
    //else {
    clear();

        $('#divfeed').hide();
        //$('#divgst').hide();
        $('#divsgst').hide();
        $('#divcgst').hide();
        $('#divINSERTAVAILMENTfi').hide();
    $('#divRateTerm').hide();

        //$('#divgo').hide();
        //$('#divrun').hide();

        $("#txtAvailmentDate").datepicker({
            dateFormat: 'dd/MM/yy',
            changeMonth: true,
            changeYear: true,
            stepMonths: true,
            todayHighlight: true,
            onSelect: function (dateText, inst) {

            }
        });

        $("#txtlonagree").datepicker({
            dateFormat: 'dd/MM/yy',
            changeMonth: true,
            changeYear: true,
            stepMonths: true,
            todayHighlight: true,
            onSelect: function (dateText, inst) {

            }
        });

        $("#txtdateofpay").datepicker({
            dateFormat: 'dd/MM/yy',
            changeMonth: true,
            changeYear: true,
            stepMonths: true,
            todayHighlight: true,
            onSelect: function (dateText, inst) {

            }
        });


        $("#txtduedate").datepicker({
            dateFormat: 'dd/MM/yy',
            changeMonth: true,
            changeYear: true,
            stepMonths: true,
            todayHighlight: true,
            onSelect: function (dateText, inst) {

            }
        });


        $("#txtrepaydate").datepicker({
            dateFormat: 'dd/MM/yy',
            changeMonth: true,
            changeYear: true,
            stepMonths: true,
            todayHighlight: true,
            minDate: 0,
            onSelect: function (dateText, inst) {

            }
        });


        //$("#txtrepaydate").datepicker({
        //    dateFormat: 'dd/MM/yy',
        //    changeMonth: true,
        //    changeYear: true,
        //    stepMonths: true,
        //    todayHighlight: true,
        //    onSelect: function (dateText, inst) {

        //    }
        //});
    clearRepay();
        SELFITYPE();
        SELINTRESTTYPE();
        //SELLOANACCNAME();
        //SELBANKACC();
       // SELPAYMENTMODE();
    //}
    $("#fupImports").val('');
    $("#tblPaymentDtl").empty();
});

function clear() {
    $("#txtloanlimit").val('');
    $("#txtloanbal").val('');
    $("#txtproccessfee").val('');
    $("#txtloanamt").val('');
    $("#txtintrate").val('');

    $("#txtmaturtyAmnt").val('');
    MatrtyAmntWords.innerHTML = '';

    $("#txtAvailmentDate").val('');
    $("#txttenure").val('');
    $("#txtlonagree").val('');
    $('#chktable').prop('checked', false);
    $('#chkloanacc').prop('checked', false);
    $('#rdbmonthend').prop('checked', false);
    $('#rdbmonthdate').prop('checked', false);
    $('#chkPrincipleamt').prop('checked', false);
    $('#chkInterestamt').prop('checked', false);

    $('#txtprinamt').prop("disabled", true);
    $('#txtprinamt').val('');
    PricipleAmtWords.innerHTML = '';

    $('#txtintramt').prop("disabled", true);
    $('#txtintramt').val('');
    IntAmtWords.innerHTML = '';

    $("#funddetailes").empty();
    $("#loanfilltable").empty();
    $("#tblPrincipleOnly").empty();
    $("#tblInterestOnly").empty();
    $("#tblEMI").empty();
    $("#exceltable").empty();
    $("#repaygenpayment").empty();

    $("#txtLoanAcc").val('');
    $("#txtLoanSubAcc").val('');
    $("#txtFtMainAcc").val('');
    $("#txtFtSubAcc").val('');
    
    $("[id*=hdnLoanMainAcc]").val('');
    $("[id*=hdnLoanSubAcc]").val('');
    $("[id*=hdnFTMainAcc]").val('');
    $("[id*=hdnFTSubAcc]").val('');
    $("[id*=hdnLoanBal]").val('');

    PricipleAmtWords.innerHTML = '';
    IntAmtWords.innerHTML = '';

    $('#divTblEMI').hide();
    $('#divTblInterest').hide();
    $('#divTblPrinciple').hide();

    $('#divAccord').hide();
    $('#divfi').hide();
    $('#divfuflow').hide();
    $("#ddlmodpay").empty();
    $('#divRepayBtn').hide();
    $('#divRateTerm').hide();
    
}

//---------------------delete icon---------------//

$(document).on('click', '.remove', function () {
    $(this).closest('tr').remove();

    //calItemTotal();
    if ($("#tblPrincipleOnly tr").length == 1) {
        $("#tblPrincipleOnly").empty();
    }
    if ($("#tblInterestOnly tr").length == 1) {
        $("#tblInterestOnly").empty();
    }
    if ($("#tblEMI tr").length == 1) {
        $("#tblEMI").empty();
    }
    //return false;
});


//-----------amount checking--------------//

function DisablePrinciple() {
   
    if ($('#chkPrincipleamt').prop('checked')) {
        $('#txtprinamt').prop("disabled", false);
        if ($("#ddlFundSourse").val() == '3') {
            alert($('#txtloanlimit').val());
            $("#txtprinamt").val($('#txtloanlimit').val());
            $('#txtprinamt').prop("disabled", true);
        }
        else {
            $('#txtprinamt').val('');
            PricipleAmtWords.innerHTML = '';
        }
    }
    else{
        $('#txtprinamt').prop("disabled", true);
        $('#txtprinamt').val('');
        PricipleAmtWords.innerHTML = '';
    }

}
function DisableInterest() {
    if ($('#chkInterestamt').prop('checked')) {
        $('#txtintramt').prop("disabled", false);
        if ($("#ddlFundSourse").val() == '3') {
            var Intrst = $("#txtmaturtyAmnt").val() - $('#txtloanlimit').val();
            $("#txtintramt").val(Intrst);
            $('#txtintramt').prop("disabled", true);
        }
        else {
            $('#txtintramt').val('');
            IntAmtWords.innerHTML = '';
        }
    }
    else {
        $('#txtintramt').prop("disabled", true);
        $('#txtintramt').val('');
        IntAmtWords.innerHTML = '';
    }

}
function amountcheck() {
    if ($('#txtloanamt').val() != 0 || $('#txtloanamt').val().trim().length != 0)
    {
        var bal = $("[id*=hdnLoanBal]").val();
        if (parseFloat($("[id*=hdnLoanBal]").val()) < parseFloat($('#txtloanamt').val())) {
            ModelPopWarning("Loan Amount Exceeds the Loan Limit of " + bal + "...!!!");
            $('#txtloanamt').val('');
            $('#txtloanamt').focus();
            return;
        }
        else {           
            var bal = $("[id*=hdnLoanBal]").val();
            $('#txtloanbal').val(parseFloat(bal) - parseFloat($('#txtloanamt').val()))
            LoanBalWords.innerHTML = AmountToWords(parseFloat(bal) - parseFloat($('#txtloanamt').val()));
            return;
        }
    }
    
}

//////function loanlimitcheck() {
//////    //if (parseFloat($('#txtloanbal').val()) < parseFloat($('#txtloanamt').val())) {
//////    //    alert('Insufficient Balance...!');
//////    //    return;
//////    //}
//////    if (parseFloat($("[id*=hdnLoanBal]").val()) < parseFloat($('#txtloanamt').val())) {
//////        alert('Insufficient Balance...!');
//////        return;
//////    }

//////}

function searchprocess() {    
    if ($('#chkprocess').prop('checked')) {
        $('#divfeed').show();
    } else {
        $('#divfeed').hide();    
    }
}

function searchtablepen() {
    if ($('#chkloanacc').prop('checked')) {
        $('#divpenalty').show();
    } else {
        $('#divpenalty').hide();
    }
}

function searchContent() {
    if ($('[id*=rdbGST]:checked').val()) {   
        $('#divgst').show();
        $('#divcgst').hide();
        $('#divsgst').hide();
    } else if ($('[id*=rdbSGST]:checked').val()) {      
        $('#divsgst').show();
        $('#divgst').hide();
        $('#divcgst').hide();
    }
    else if ($('[id*=rdbCGST]:checked').val()) {      
        $('#divcgst').show();
        $('#divgst').hide();
        $('#divsgst').hide();      
    }
}

function repaycheck() {
    if ($('[id*=rdbmonthdate]:checked').val()) {
        $('#divRepayDate').show();
        $('#divRepayBtn').show();  
    }
    else if ($('[id*=rdbmonthend]:checked').val()) {
        $('#divRepayDate').hide();
        $('#divRepayBtn').show();       
    }
 }

//----------fILL INTREST TYPE---------------------//
function SELINTRESTTYPE() {
    var QueryString = "SELINTRESTTYPE";
    $.ajax({
        type: "post",
        contentType: "application/json; charset=utf-8",
        url: "LoanAvailment.aspx/getFillData",
        data: "{typ:'SELINTRESTTYPE', val1 :''}",
        dataType: "json",
        success: function (Result) {
            //alert("INTREST TYPE");
            Result = Result.d;
            $.each(Result, function (key, value) {
                $('#ddlintresttype').append($("<option></option>").val(value.id).html(value.name));
            });
        }
    });
}

//-----------select fi type-------------------//

function SELFITYPE() {
    var QueryString = "SELFITYPE";
    $.ajax({
        type: "post",
        contentType: "application/json; charset=utf-8",
        url: "LoanAvailment.aspx/getFillData",
        data: "{typ:'SELFITYPE', val1 :''}",
        dataType: "json",
        success: function (Result) {
            //alert("full");
            Result = Result.d;
            $.each(Result, function (key, value) {
                $('#ddlFiType').append($("<option></option>").val(value.id).html(value.name));
            });
        }
    });
}


//-----------select FI-------------------//

function FillFI() {
    clear();
    clearRepay();
    $("#ddlFi").empty();
    $("#ddlFundSourse").empty();
    $("#ddlSubFundSourse").empty();
    $("#ddlFund").empty();
    $.ajax({
        type: "post",
        contentType: "application/json; charset=utf-8",
        url: "LoanAvailment.aspx/getFillData",
        data: "{typ:'SELFININST', val1 :'" + $('#ddlFiType').val() + "'}",
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


function showfund() {
    var InputData = $("#ddlsubfund").val() + "µ" + $("#ddlselfi").val()
    $.ajax({
        type: "post",
        contentType: "application/json; charset=utf-8",
        url: "LoanAvailment.aspx/getFillData",
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

//--------------fill fund source-------------------//

function FillFundSource() {
    clear();
    clearRepay();
    $("#ddlFundSourse").empty();
    $("#ddlSubFundSourse").empty();
    $("#ddlFund").empty();
    $.ajax({
        type: "post",
        contentType: "application/json; charset=utf-8",
        url: "LoanAvailment.aspx/getFillData",
        data: "{typ:'SELFUNDSOURCE', val1 :'" + $('#ddlFi').val() + "'}",
        dataType: "json",
        success: function (Result) {
            Result = Result.d;
            $.each(Result, function (key, value) {
                $('#ddlFundSourse').append($("<option></option>").val(value.id).html(value.name));
            });
        }
    });

}

//-------------fill fund type-------------------//

function FillFundSourceSub() {
    clear();
    clearRepay();
    $("#ddlSubFundSourse").empty();
    $("#ddlFund").empty();
    var InputData = $("#ddlFundSourse").val() + "µ" + $("#ddlFi").val()
    $.ajax({
        type: "post",
        contentType: "application/json; charset=utf-8",
        url: "LoanAvailment.aspx/getFillData",
        data: "{typ:'SELSUBFUND', val1 :'" + InputData + "'}",
        dataType: "json",
        success: function (Result) {
            Result = Result.d;
            $('#ddlSubFundSourse').empty();
            $.each(Result, function (key, value) {
                $('#ddlSubFundSourse').append($("<option></option>").val(value.id).html(value.name));
            });
        }
    });
    PutCPAccEntry();
}

////-------------fill fund -------------------//

function FillFund() {
    clear();
    clearRepay();
    $("#ddlFund").empty();
    if (($('#ddlSubFundSourse').val() == '4') || ($('#ddlSubFundSourse').val() == '5') || ($('#ddlSubFundSourse').val() == '8')) {
        $('#divRateTerm').show();
    }
    else {
        $('#divRateTerm').hide();
    }
    var InputData = $("#ddlSubFundSourse").val() + "µ" + $("#ddlFi").val()
    $.ajax({
        type: "post",
        contentType: "application/json; charset=utf-8",
        url: "LoanAvailment.aspx/getFillData",
        data: "{typ:'SELFUND', val1 :'" + InputData + "'}",
        dataType: "json",
        success: function (Result) {
            //alert("full");
            Result = Result.d;
            $('#ddlFund').empty();
            $.each(Result, function (key, value) {
                $('#ddlFund').append($("<option></option>").val(value.id).html(value.name));
            });
        }
    });

}

//----------------fund provider Information table------------------//

function FundProvider() {
    $.ajax({
        type: "post",
        contentType: "application/json; charset=utf-8",
        url: "LoanAvailment.aspx/getfunddata",
        data: "{typ:'SELFUNDPROVIDER', val1:'" + $('#ddlFundSourse').val() + "',data:'" + $('#ddlFund').val().split("æ")[1] +"'}",
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
        url: "LoanAvailment.aspx/getoldloandtl",
        data: "{typ:'SELOLDLOAN', val1:'" + $('#ddlFundSourse').val() + "',data:'" + $('#ddlFund').val().split("æ")[1] + "'}",
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

//-------------fill fund type-------------------//

//-------------fill fund -------------------//
function showSTL() {

    $("[id*=hdfunid]").val($('#ddlFund').val().split("æ")[1]);
    //--4-SHORT TERM LOAN--8--Term Loan--9--CP--6--cash credit
    if ($('#ddlFund').val().split("æ")[0] == '4') {  
        $('#divRepayMonth').show(); 
        $('#divgen').show();
        $('#divgen').show();
        $('#divRepayBtn').show();

        //showSTL
        $('#ddlmodpay').val(1);
        $('#ddlmodpay').prop("disabled", true );
        $('#divgo').hide();
        $('#divrun').hide();
    }
    //else if($('#ddlFund').val().split("æ")[0] == '5') {
    //    $('#ddlmodpay').val(3);
    //    $('#ddlmodpay').prop("disabled", true);
    //    $('#divgo').show();
    //    $('#divrun').show();
    //}
    else {        
        $('#ddlmodpay').prop("disabled", false);
        $('#divRepayMonth').hide();
        $('#divgen').hide(); 
        $('#divRepayBtn').hide();

    }     
}



//---------- LOAN MENURITY DATE-----------------//

function showmeturitydate() {
    //alert($('#txtloanagee').val());
    //var currentDate = new Date($('#txtAvailmentDate').val());
    //alert(currentDate);
    //currentDate.setDate(currentDate.getDate() + parseInt($('#txttenure').val()));
    //alert(currentDate);
    //$('#txtlonagree').val(currentDate.toLocaleString('en-US', { Date: "dd/MMM/yyyy" }));

   //--4-SHORT TERM LOAN--8--Term Loan----6--cash credit
    if ($('#ddlFund').val().split("æ")[0] == '4') {
        if ($('#txttenure').val() > 365) {
            //alert('Tenure should be less than or equal to  365 days');
            ModelPopWarning("Tenure should be less than or equal to  365 days...!!!");
            $('#txttenure').val('');
            return;
        }
    }

    var tt = document.getElementById('txtAvailmentDate').value;

    var date = new Date(tt);
    var newdate = new Date(date);

    newdate.setDate(newdate.getDate() + parseInt($('#txttenure').val()));

    var dd = newdate.getDate();
    var mm = newdate.getMonth() + 1;
    var y = newdate.getFullYear();

    var month_names = ["January", "February", "March",
        "April", "May", "June",
        "July", "August", "September",
        "October", "November", "December"];

    var someFormattedDate = dd + '/' + month_names[mm-1] + '/' + y;
    $('#txtlonagree').val(someFormattedDate);
    //alert(someFormattedDate);   
    //document.getElementById('follow_Date').value = someFormattedDate;
}

function interestrate() {
    //alert('mohanlal');
    if ($('#txtintrate').val() > 100) {
        //alert('Interest rate  should be less than 100 ');
        ModelPopWarning("Interest rate  should be less than 100 ...!!!");
        $('#txtintrate').val('');
        return;
    }
}

function clearRepay() {
    $('#divRepayMonth').hide();
    $('#divRepayDate').hide();
    $('#divRepayBtn').hide();
    $("#ddlmodpay").empty();
    $('#divgo').hide();
    $('#divrun').hide();
    $('#divtermloan').hide();
    $('#divterm1').hide();
    $('#divterm').hide();
    $("#fupImports").val('');
    var input = $("#fupImports");
    input.replaceWith(input.val('').clone(true));
    $("#fileName").val('Choose File');
    $("#noFile").val('No file chosen...');   
    $(".file-upload").removeClass('active');

}
function FillLoanLimit() {
    clearRepay();
    if (($('#ddlFund').val().split("æ")[0] == '8') || ($('#ddlFund').val().split("æ")[0] == '-1')) {

    }
    else {
        FillPaymentMode($('#ddlFund').val().split("æ")[0]);
    }

    //alert('loan limit table');
    $.ajax({
        type: "post",
        contentType: "application/json; charset=utf-8",
        url: "LoanAvailment.aspx/getFillDataloan",
        data: "{typ:'SELLOANLIMIT', val1:'" + $('#ddlFundSourse').val() + "',data:'" + $('#ddlFund').val().split("æ")[1] +"'}",
        dataType: "json",
        success: function (Result) {
            if (Result.d == '') {
                $('#divAccord').hide();
                $('#divfi').hide();
                $('#divfuflow').hide();
            }
            else {
                $('#divAccord').show();
                $('#divfi').show();  
                $('#divfuflow').show();             
            }
            //alert(Result.d);
            Result = Result.d.split("~");
            
            FundProvider();
            Oldloandetailes();
            Gstsectionstage();
            ShowTermLoan();
            //Fillloanbalance();
            $('#txtloanlimit').val(Result[0]);
            LoanLimitWords.innerHTML = AmountToWords(Result[0]);
           

            $('#txtproccessfee').val(Result[2]);
            processFeeWords.innerHTML = AmountToWords(Result[2]);
            if (Result[1] == "") {
                $('#txtloanbal').val(Result[0]);
                $("[id*=hdnLoanBal]").val(Result[0])
                LoanBalWords.innerHTML = AmountToWords(Result[0]);
            } else {
                $('#txtloanbal').val(Result[1]);
                $("[id*=hdnLoanBal]").val(Result[1])
                LoanBalWords.innerHTML = AmountToWords(Result[1]);
            }
        }
    });

}

function paymode() {
    //1-Bullet payment---2-EMI-----3-Interest plus Principle
    if ($('#ddlmodpay').val() == '2' || $('#ddlmodpay').val() == '3') {
        $('#divgo').show();
        $('#divrun').show();
      //  $('#divbar').show();
    }
    else {
        $('#divgo').hide();
        $('#divrun').hide();
      //  $('#divbar').hide();       
    }
    //----2-EMI
    if ($('#ddlmodpay').val() == '2') {
        $('#chkPrincipleamt').prop('checked', true);
        $('#chkInterestamt').prop('checked', true);

        $('#chkPrincipleamt').prop("disabled", true);
        $('#chkInterestamt').prop("disabled", true);

        $('#txtprinamt').prop("disabled", false);
        $('#txtprinamt').val('');
        PricipleAmtWords.innerHTML = '';

        $('#txtintramt').prop("disabled", false);
        $('#txtintramt').val('');
        IntAmtWords.innerHTML = '';

        $('#txtdateofpay').val('');
        $('#txtduedate').val('');
    }
    if ($('#ddlmodpay').val() == '3') {
        if ($('#ddlFundSourse').val() == '3') {
            if ($('#txtmaturtyAmnt').val() == '') {
                ModelPopWarning("Enter Maturity Amount...!!!");
                $('#txtmaturtyAmnt').focus();
                $('#divgo').hide();
                $('#divrun').hide();
                $('#ddlmodpay').val('-1');
                return false;
            }
            else if ($('#txttenure').val() == '') {
                ModelPopWarning("Enter Tenure...!!!");
                $('#txttenure').focus();
                $('#divgo').hide();
                $('#divrun').hide();
                $('#ddlmodpay').val('-1');
                return false;
            }
            else if ($('#txtlonagree').val() == '') {
                ModelPopWarning("Enter Tenure...!!!");
                $('#txtlonagree').focus();
                $('#divgo').hide();
                $('#divrun').hide();
                $('#ddlmodpay').val('-1');
                return false;
            }
            else {       
                var loanlmt = $('#txtloanlimit').val();
                var matamt = $('#txtmaturtyAmnt').val();
                parseFloat($('#txtloanamt').val())
                if (parseFloat($('#txtloanlimit').val()) > parseFloat($('#txtmaturtyAmnt').val())) {
                    ModelPopWarning("Maturity Amount should be Greater than Loan Limit...!!!");
                    $('#txtmaturtyAmnt').focus();
                    $('#divgo').hide();
                    $('#divrun').hide();
                    $('#ddlmodpay').val('-1');
                    return false;
                }
                $('#txtprinamt').prop("disabled", false);
                $('#txtprinamt').val(loanlmt);
                $('#txtprinamt').prop("disabled", true);


                var Intrst = $('#txtmaturtyAmnt').val() - $('#txtloanlimit').val();
                $('#txtintramt').prop("disabled", false);
                $("#txtintramt").val(Intrst);
                $('#txtintramt').prop("disabled", true);


                $('#chkPrincipleamt').prop('checked', true);
                $('#chkInterestamt').prop('checked', true);

                $('#chkPrincipleamt').prop("disabled", true);
                $('#chkInterestamt').prop("disabled", true);


                $('#txtdateofpay').val($('#txtlonagree').val());
                $('#txtduedate').val($('#txtlonagree').val());

                $('#txtdateofpay').prop("disabled", true);
                $('#txtduedate').prop("disabled", true);


                //$('#chkPrincipleamt').prop('checked', true);
                //$('#chkInterestamt').prop('checked', true);

                //$('#chkPrincipleamt').prop("disabled", true);
                //$('#chkInterestamt').prop("disabled", true);
               // DisablePrinciple();
                //alert($('#txtloanlimit').val());
               // $('#txtprinamt').prop("disabled", false);
               // $("#txtprinamt").val($('#txtloanlimit').val());
                //$('#txtprinamt').prop("disabled", true);
               // PricipleAmtWords.innerHTML = '';

               // var Intrst = $("#txtmaturtyAmnt").val() - $('#txtloanlimit').val();
               // $('#txtintramt').prop("disabled", false);
               //$("#txtintramt").val(Intrst);
               //$('#txtintramt').prop("disabled", true);
               //IntAmtWords.innerHTML = '';

            }

        }
        else {
            $('#chkPrincipleamt').prop('checked', false);
            $('#chkInterestamt').prop('checked', false);

            $('#chkPrincipleamt').prop("disabled", false);
            $('#chkInterestamt').prop("disabled", false);

            $('#txtprinamt').prop("disabled", true);
            $('#txtprinamt').val('');
            PricipleAmtWords.innerHTML = '';

            $('#txtintramt').prop("disabled", true);
            $('#txtintramt').val('');
            IntAmtWords.innerHTML = '';

            $('#txtdateofpay').val('');
            $('#txtduedate').val('');

        }
      

    }
    //if ($('#chkPrincipleamt').prop('checked')) {
    //    $('#txtprinamt').prop("disabled", false);
    //    $('#txtprinamt').val('');
    //    PricipleAmtWords.innerHTML = '';
    //}
    //else {
    //    $('#txtprinamt').prop("disabled", true);
    //    $('#txtprinamt').val('');
    //    PricipleAmtWords.innerHTML = '';
    //}

    //alert('table come');
    $("#tblPrincipleOnly").empty();
    $('#divTblPrinciple').hide();   
    $("#tblInterestOnly").empty();
    $('#divTblInterest').hide();
    $("#tblEMI").empty();
    $('#divTblEMI').hide();

    //$('#txtdateofpay').val('');
    //$('#txtduedate').val('');
    
    $('#txtpenalty').val('');
    $("#chkloanacc").prop('checked', false);   
}

function selection() { 
    //1-Bullet payment---2-EMI-----3-Interest plus Principle
    //if ($('#ddlmodpay').val() == '1') {
    //    $('#divTblPrinciple').hide();
    //    $('#divTblInterest').hide();
    //    $('#divbar').show();
    //    $('#divTblEMI').hide();
    //}
    //else if ($('#ddlmodpay').val() == '2') {
    //    $('#divTblPrinciple').hide();
    //    $('#divTblInterest').hide();
    //    $('#divbar').show();
    //    $('#divTblEMI').show();
    //}
    //else if ($('#ddlmodpay').val() == '3') {
    //    $('#divTblPrinciple').show();
    //    $('#divTblInterest').show();
    //}
    //else {
    //    $('#divTblPrinciple').hide();

    //}
    $('#txtdateofpay').val('');
    $('#txtduedate').val('');
    $('#txtprinamt').val('');
    $('#txtintramt').val('');
    $('#txtpenalty').val('');
    PricipleAmtWords.innerHTML = '';
    IntAmtWords.innerHTML = '';
    $("#chkloanacc").prop('checked', false); 
   
}

//-------------Fill mode of payment--------------------//
function SELPAYMENTMODE() {
    var QueryString = "SELPAYMENTMODE";
    $("#ddlmodpay").empty();
   // $('#ddlFund').val().split("æ")[1]
    $.ajax({
        type: "post",
        contentType: "application/json; charset=utf-8",
        url: "LoanAvailment.aspx/getFillData",
        data: "{typ:'SELPAYMENTMODE', val1 :''}",
        dataType: "json",
        success: function (Result) {
            Result = Result.d;
            $.each(Result, function (key, value) {
                $('#ddlmodpay').append($("<option></option>").val(value.id).html(value.name));
            });
        }
    });
}

function FillPaymentMode(data) {
    var QueryString = "FillPaymentMode";
    $.ajax({
        type: "post",
        contentType: "application/json; charset=utf-8",
        url: "LoanAvailment.aspx/getFillData",
        data: "{typ:'FillPaymentMode', val1 :'" + data +"'}",
        dataType: "json",
        success: function (Result) {
            Result = Result.d;
            $('#ddlmodpay').empty();
            $.each(Result, function (key, value) {
                $('#ddlmodpay').append($("<option></option>").val(value.id).html(value.name));
            });
        }
    });
}

//-----------------------Mode of pament table--------------//

//------------------table1------------//
function fillpaymenttable(data) {
    //Principle Amount Only
    // //1-Bullet payment---2-EMI-----3-Interest plus Principle
    //--4--STL--5--WCDL--8--Term Loam--9--COMMERCIAL PAPER
    if ($('#ddlmodpay').val() == '3')
    {
        var int = $('#txtprinamt').val();
        if ($('#txtprinamt').val()) {
            var v_penalty, v_penval;
            $('#divTblPrinciple').show();

            if ($("#tblPrincipleOnly tr").length == 0) {
                $("#tblPrincipleOnly").empty();
                $('#tblPrincipleOnly').append('<thead class="bg-success text-white"><tr><th scope="col">Date of payment</th><th scope="col">Due date</th> <th class="align-center">Penalty if any</th><th scope="col">Penalty %</th><th scope="col">Principle Amount</th><th scope="col" style="display:none" class="align-center">Interest Amount</th><th scope="col">Delete</th></tr></thead>');
                //$("#repaygenpayment").append('<thead class="bg-success text-white">< tr ><th scope="col">Sr.No</th> <th scope="col">From Date</th> <th scope="col">Interest Upto Date</th><th scope="col">InterestAmount</th><th scope="col">Payment Date</th></tr ></thead><tbody>');
                //  //srNo-v_dt5(1)£FromDate-v_dt5(2)£toDate-v_dt5(3)£PaymentDate-v_dt5(4)£Amount-v_dt5(5)£INST_TYPE-v_dt5(6)£PenaltyStatus-v_dt5(7)£PenaltyAmount-v_dt5(8)£PAY_FREQUENCY-v_dt5(9)
            }

            if ($('#chkloanacc').prop('checked')) {
                v_penalty = 'PENALTY';
                v_penval = 1;
            }
            else {
                v_penalty = 'NO PENALTY';
                v_penval = 0;
            }
            $('#tblPrincipleOnly').append('<tbody><tr>' +
                //'<td style="display:none">' + $('#ddlselprj').val() + '</td>' +
                //'<td>' + $('#ddlselactivitystageact').val() + '</td>' +
                //'<td style="display:none">' + $('#ddlselsubactivitystage').val() + '</td>' +
                '<td>' + $('#txtdateofpay').val() + '</td>' +
                '<td>' + $('#txtduedate').val() + '</td>' +
                '<td>' + v_penalty + '</td>' +
                '<td>' + $('#txtpenalty').val() + '</td>' +

                //'<td>' + $("#ddlselprj option:selected").text() + '</td>' +
                //'<td>' + $("#ddlselactivitystageact option:selected").text() + '</td>' +
                //'<td>' + $("#ddlselsubactivitystage option:selected").text() + '</td>' +     
                '<td>' + $('#txtprinamt').val() + '</td>' +
                '<td style="display:none">' + $('#txtintramt').val() + '</td>' +
                '<td style="display:none">' + v_penval + '</td>' +
                '<td style="width:3%;"><ul><li><a href="javascript:void(0);" title="Delete" class="bs-tooltip remove"><i class="ti-trash"></i>Delete</a> </li> </ul></td>' +
                '</tr></tbody > ');
        }
        
       
    } 
}

//----------------------table2--------------------------//
function fillpaymenttable1(data) {
    //Interest Amount Only
    // //1-Bullet payment---2-EMI-----3-Interest plus Principle
    var int = $('#txtintramt').val();
    if ($('#ddlmodpay').val() == '3')
    {
        if ($('#txtintramt').val()) {
            var v_penalty, v_penval;
            $('#divTblInterest').show();
            if ($("#tblInterestOnly tr").length == 0) {
                $("#tblInterestOnly").empty();
                $('#tblInterestOnly').append('<thead class="bg-success text-white"><tr><th scope="col">Date of payment</th><th scope="col">Due date</th> <th  scope="col">Penalty if any</th><th scope="col">Penalty %</th><th scope="col" style="display:none">Principle Amt</th><th scope="col">Interest Amt</th><th scope="col">Delete</th></tr></thead>');
            }

            if ($('#chkloanacc').prop('checked')) {
                v_penalty = 'PENALTY';
                v_penval = 1;
            }
            else {
                v_penalty = 'NO PENALTY';
                v_penval = 0;
            }
            //alert("hooi");
            $('#tblInterestOnly').append('<tbody><tr>' +
                //'<td style="display:none">' + $('#ddlselprj').val() + '</td>' +
                //'<td>' + $('#ddlselactivitystageact').val() + '</td>' +
                //'<td style="display:none">' + $('#ddlselsubactivitystage').val() + '</td>' +
                '<td>' + $('#txtdateofpay').val() + '</td>' +
                '<td>' + $('#txtduedate').val() + '</td>' +
                '<td>' + v_penalty + '</td>' +
                '<td>' + $('#txtpenalty').val() + '</td>' +

                //'<td>' + $("#ddlselprj option:selected").text() + '</td>' +
                //'<td>' + $("#ddlselactivitystageact option:selected").text() + '</td>' +
                //'<td>' + $("#ddlselsubactivitystage option:selected").text() + '</td>' +     
                '<td style="display:none">' + $('#txtprinamt').val() + '</td>' +
                '<td>' + $('#txtintramt').val() + '</td>' +
                '<td style="display:none">' + v_penval + '</td>' +
                '<td style="width:3%;"><ul><li><a href="javascript:void(0);" title="Delete" class="bs-tooltip remove"><i class="ti-trash"></i>Delete</a> </li> </ul></td>' +
                '</tr></tbody > ');
        }
    }
}

//--------------------------------table3------------------------//

function fillpaymenttable2(data) {
     //Principle and Interest Amount ----EMI
    // //1-Bullet payment---2-EMI-----3-Interest plus Principle
    if ($('#ddlmodpay').val() == '2') {

        if ($('#txtprinamt').val()) {
            if ($('#txtintramt').val()) {

            var v_penalty, v_penval;
            var srnum=0;
            srnum = $("#tblEMI tr").length;
            srnum = srnum + 1;
                $('#divTblEMI').show();

            if ($("#tblEMI tr").length == 0) {
                $("#tblEMI").empty();
                $('#tblEMI').append('<thead class="bg-success text-white"><tr><th  scope="col">Sr No.</th><th  scope="col">Date of payment</th><th scope="col">Due date</th> <th scope="col">Penalty if any</th><th scope="col">Penalty %</th><th scope="col">Principle Amt</th><th scope="col">Interest Amt</th><th scope="col">Delete</th></tr></thead>');
            }

            if ($('#chkloanacc').prop('checked')) {
                v_penalty = 'PENALTY';
                v_penval = 1;
            }
            else {
                v_penalty = 'NO PENALTY';
                v_penval = 0;
            }
            //alert("hooi");
            $('#tblEMI').append('<tbody><tr>' +
                //'<td style="display:none">' + $('#ddlselprj').val() + '</td>' +
                //'<td>' + $('#ddlselactivitystageact').val() + '</td>' +
                //'<td style="display:none">' + $('#ddlselsubactivitystage').val() + '</td>' +
                '<td>' + srnum + '</td>' +
                '<td>' + $('#txtdateofpay').val() + '</td>' +
                '<td>' + $('#txtduedate').val() + '</td>' +
                '<td>' + v_penalty + '</td>' +
                '<td>' + $('#txtpenalty').val() + '</td>' +

                //'<td>' + $("#ddlselprj option:selected").text() + '</td>' +
                //'<td>' + $("#ddlselactivitystageact option:selected").text() + '</td>' +
                //'<td>' + $("#ddlselsubactivitystage option:selected").text() + '</td>' +     
                '<td>' + $('#txtprinamt').val() + '</td>' +
                '<td>' + $('#txtintramt').val() + '</td>' +
                '<td style="display:none">' + v_penval + '</td>' +
                '<td style="width:3%;"><ul><li><a href="javascript:void(0);" title="Delete" class="bs-tooltip remove"><i class="ti-trash"></i>Delete</a></li></ul></td>' +
                '</tr></tbody >');
        }
        }

    }
}

//------------------confirm loan availement-----------------//

function Saveloanavilment() {
    var Data, itmdata, dateval, itmdatachild, MainAcc, SubAcc, LoanBal, Loanamnt,fundTfrMain,fundTfrSub;
    Data = '';
    itmdata = '';
    LoanBal = '';
    var tblAccntData = "";
    
    if (!Loanavailementvali()) {
        return false;
    }
    //if (($('#ddlSubFundSourse').val() == '4') || ($('#ddlSubFundSourse').val() == '5') || ($('#ddlSubFundSourse').val() == '8')) {
    //    $('#divRateTerm').show();
    //}
    //else {
    //    $('#divRateTerm').hide();
    //}
    //1-Bullet payment---2-EMI-----3-Interest plus Principle
    if ($('#ddlmodpay').val() == '1') {
        if ($('[id*=rdbmonthend]:checked').val()) {
            dateval = 1;
        }
        else if ($('[id*=rdbmonthdate]:checked').val()) {
            dateval = 2;
        }
        else {
            ModelPopWarning("Select Repayment Date...!!!");
            return false;
        }
    }
    else {
        dateval = '0';
    }    
    //--4--STL--5--WCDL--8--Term Loam--9--COMMERCIAL PAPER--6--Cash Credit
    if ($('#ddlFund').val().split("æ")[0] == '4' || $('#ddlFund').val().split("æ")[0] == '5') {
        //1-Bullet payment---2-EMI-----3-Interest plus Principle
        if ($('#ddlmodpay').val() == '1') {
            var table = document.getElementById('repaygenpayment');
            var rowLength = table.rows.length;
            if (rowLength < 1) {
                ModelPopWarning("Generate Repayment Shedule...!!!");
                return false;
            }
            for (var i = 1; i < rowLength; i++) {
                //itmdata = itmdata + table.rows[i].cells[1].innerText + '^' + table.rows[i].cells[2].innerText + '^' + table.rows[i].cells[3].innerText + '^' + table.rows[i].cells[4].innerText + '^' + $("[id*=hdUserId]").val() + 'æ';
                //itmdatahtml = itmdatahtml + table.rows[i].cells[1].innerHTML + '^' + table.rows[i].cells[2].innerHTML + '^' + table.rows[i].cells[3].innerHTML + '^' + table.rows[i].cells[4].innerHTML + '^' + $("[id*=hdUserId]").val() + 'æ';
                if (i == rowLength - 1) {
                    itmdata = itmdata + table.rows[i].cells.item(0).innerHTML + '£' + table.rows[i].cells[1].children[0].value + '£' + table.rows[i].cells[2].children[0].value + '£' + table.rows[i].cells[5].children[0].value + '£' + table.rows[i].cells[4].children[0].value + '£2£0£0£1æ';
                        //SR--FROMDT--TODATE--INTERESTAMT---Principle Amount -----PAYDATE----INTEREST TABLE
                }
                else {
                    itmdata = itmdata + table.rows[i].cells.item(0).innerHTML + '£' + table.rows[i].cells[1].children[0].value + '£' + table.rows[i].cells[2].children[0].value + '£' + table.rows[i].cells[5].children[0].value + '£' + table.rows[i].cells[3].children[0].value + '£1£0£0£1æ';
                        //SR--FROMDT--TODATE--INTERESTAMT---Principle Amount -----PAYDATE-------Principle Table
                }               
                //srNo£FromDate£toDate£PaymentDate£InbterestAmount£PrincipleAmount£EMIAmount£PenaltyStatus£PenaltyAmount£userid
                //srNo-v_dt5(1)£FromDate-v_dt5(2)£toDate-v_dt5(3)£PaymentDate-v_dt5(4)£Amount-v_dt5(5)£INST_TYPE-v_dt5(6)£PenaltyStatus-v_dt5(7)£PenaltyAmount-v_dt5(8)£PAY_FREQUENCY-v_dt5(9)
            }
            itmdata = itmdata + '¥' + 1;
        }
        else if ($('#ddlmodpay').val() == '3') {
            var tablePrinciple = document.getElementById('tblPrincipleOnly');
            var tableInterest = document.getElementById('tblInterestOnly');
            if ((tablePrinciple.rows.length < 1) && (tableInterest.rows.length < 1)) {
                ModelPopWarning("Add Repayment Shedule...!!!");
                return false;
            }
            if (tablePrinciple.rows.length > 1) {
                var table = document.getElementById('tblPrincipleOnly');
                var rowLength = table.rows.length;
                for (var i = 1; i < rowLength; i++) {
                    //0-Date of payment
                    //1-Due dat
                    //2-Penalty
                    //3-Penalty %
                    //4-Principle Amount
                    //5-Interest Amount
                    var penaltyStatus = '0';
                    if (table.rows[i].cells[3].innerHTML == '') {
                        penaltyStatus = '0';
                    }
                    else {
                        penaltyStatus = '1';
                    }
                    itmdata = itmdata + i + '££' + table.rows[i].cells[1].innerHTML + '£' + table.rows[i].cells[0].innerHTML + '£' + table.rows[i].cells[4].innerHTML + '£2£' + penaltyStatus + '£' + table.rows[i].cells[3].innerHTML + '£5æ';
                    //srNo-v_dt5(1)£FromDate-v_dt5(2)£toDate-v_dt5(3)£PaymentDate-v_dt5(4)£Amount-v_dt5(5)£INST_TYPE-v_dt5(6)£PenaltyStatus-v_dt5(7)£PenaltyAmount-v_dt5(8)£PAY_FREQUENCY-v_dt5(9)
                }
            }
            if (tableInterest.rows.length > 1) {
                var table = document.getElementById('tblInterestOnly');
                var rowLength = table.rows.length;
                for (var i = 1; i < rowLength; i++) {
                    //0-Date of payment
                    //1-Due dat
                    //2-Penalty
                    //3-Penalty %
                    //4-Principle Amount
                    //5-Interest Amount
                    var penaltyStatus = '0';
                    if (table.rows[i].cells[3].innerHTML == '') {
                        penaltyStatus = '0';
                    }
                    else {
                        penaltyStatus = '1';
                    }
                    itmdata = itmdata + i + '££' + table.rows[i].cells[1].innerHTML + '£' + table.rows[i].cells[0].innerHTML + '£' + table.rows[i].cells[5].innerHTML + '£1£' + penaltyStatus + '£' + table.rows[i].cells[3].innerHTML + '£5æ';
                    //srNo-v_dt5(1)£FromDate-v_dt5(2)£toDate-v_dt5(3)£PaymentDate-v_dt5(4)£Amount-v_dt5(5)£INST_TYPE-v_dt5(6)£PenaltyStatus-v_dt5(7)£PenaltyAmount-v_dt5(8)£PAY_FREQUENCY-v_dt5(9)
                }
            }
            itmdata = itmdata + '¥' + 1;
        }
    }
    //--4--STL--5--WCDL--8--Term Loam--9--COMMERCIAL PAPER--6--Cash Credit
    if ($('#ddlFund').val().split("æ")[0] == '8') {
       
        var table = document.getElementById('exceltable');
        var rowLength = table.rows.length;
        if (rowLength == 1) {
            ModelPopWarning("Upload Repayment Shedule...!!!");
            return false;
        }
        for (var i = 1; i < rowLength; i++) {
            //itmdata = itmdata + table.rows[i].cells[1].innerText + '^' + table.rows[i].cells[2].innerText + '^' + table.rows[i].cells[3].innerText + '^' + table.rows[i].cells[4].innerText + '^' + $("[id*=hdUserId]").val() + 'æ';
            //itmdatahtml = itmdatahtml + table.rows[i].cells[1].innerHTML + '^' + table.rows[i].cells[2].innerHTML + '^' + table.rows[i].cells[3].innerHTML + '^' + table.rows[i].cells[4].innerHTML + '^' + $("[id*=hdUserId]").val() + 'æ';
            
            itmdata = itmdata + table.rows[i].cells.item(0).innerHTML + '£' + table.rows[i].cells[1].innerHTML + '£' + table.rows[i].cells[2].innerHTML + '£' + table.rows[i].cells[3].innerHTML + '£' + table.rows[i].cells[4].innerHTML + '£' + table.rows[i].cells[5].innerHTML.split("-")[0] + '£0£0£1æ';
            //SR--FROMDT--TODATE-----PAYDATE--Amount-----Payment Type--1--Interest--2--Principle--3--EMI
            //<th scope="col">Sr.No</th> <th scope="col">From Date</th> <th scope="col">Interest Upto Date</th><th scope="col">InterestAmount</th><th scope="col">Payment Date</th></tr ></thead><tbody>');
            //srNo£FromDate£toDate£PaymentDate£InbterestAmount£PrincipleAmount£EMIAmount£PenaltyStatus£PenaltyAmount£userid
            //srNo-v_dt5(1)£FromDate-v_dt5(2)£toDate-v_dt5(3)£PaymentDate-v_dt5(4)£Amount-v_dt5(5)£INST_TYPE-v_dt5(6)£PenaltyStatus-v_dt5(7)£PenaltyAmount-v_dt5(8)£PAY_FREQUENCY-v_dt5(9)
        }
        itmdata = itmdata + '¥' + 2;
    }
    //--4--STL--5--WCDL--8--Term Loam--9--COMMERCIAL PAPER--6--Cash Credit
    if ($('#ddlFund').val().split("æ")[0] == '9') {
         //1-Bullet payment---2-EMI-----3-Interest plus Principle
        var tablePrinciple = document.getElementById('tblPrincipleOnly');
        var tableInterest = document.getElementById('tblInterestOnly');
        var tableEMI = document.getElementById('tblEMI');
        if ((tablePrinciple.rows.length < 1) && (tableInterest.rows.length < 1)){
            ModelPopWarning("Add Repayment Shedule...!!!");
            return false;
        }
        if (tablePrinciple.rows.length > 1) {
            var table = document.getElementById('tblPrincipleOnly');
            var rowLength = table.rows.length;
            for (var i = 1; i < rowLength; i++) {
                //0-Date of payment
                //1-Due dat
                //2-Penalty
                //3-Penalty %
                //4-Principle Amount
                //5-Interest Amount
                var penaltyStatus = '0';
                if (table.rows[i].cells[3].innerHTML == '') {
                    penaltyStatus = '0';
                }
                else {
                    penaltyStatus = '1'; 
                }
                itmdata = itmdata + i + '££' + table.rows[i].cells[1].innerHTML + '£' + table.rows[i].cells[0].innerHTML + '£' + table.rows[i].cells[4].innerHTML + '£2£' + penaltyStatus + '£' + table.rows[i].cells[3].innerHTML + '£5æ';
                //srNo-v_dt5(1)£FromDate-v_dt5(2)£toDate-v_dt5(3)£PaymentDate-v_dt5(4)£Amount-v_dt5(5)£INST_TYPE-v_dt5(6)£PenaltyStatus-v_dt5(7)£PenaltyAmount-v_dt5(8)£PAY_FREQUENCY-v_dt5(9)
            }
        }
        if (tableInterest.rows.length > 1) {
            var table = document.getElementById('tblInterestOnly');
            var rowLength = table.rows.length;
            for (var i = 1; i < rowLength; i++) {
                //0-Date of payment
                //1-Due dat
                //2-Penalty
                //3-Penalty %
                //4-Principle Amount
                //5-Interest Amount
                var penaltyStatus = '0';
                if (table.rows[i].cells[3].innerHTML == '') {
                    penaltyStatus = '0';
                }
                else {
                    penaltyStatus = '1';
                }
                itmdata = itmdata + i + '££' + table.rows[i].cells[1].innerHTML + '£' + table.rows[i].cells[0].innerHTML + '£' + table.rows[i].cells[5].innerHTML + '£1£' + penaltyStatus + '£' + table.rows[i].cells[3].innerHTML + '£5æ';
                //srNo-v_dt5(1)£FromDate-v_dt5(2)£toDate-v_dt5(3)£PaymentDate-v_dt5(4)£Amount-v_dt5(5)£INST_TYPE-v_dt5(6)£PenaltyStatus-v_dt5(7)£PenaltyAmount-v_dt5(8)£PAY_FREQUENCY-v_dt5(9)
            }
        }
        itmdata = itmdata + '¥' + 3;

        //if ($('#ddlmodpay').val() == '2') {
        //    var table = document.getElementById('tblEMI');
        //    var rowLength = table.rows.length;
        //    if (rowLength < 1) {
        //        ModelPopWarning("Add Repayment Shedule...!!!");
        //        return false;
        //    }
        //    for (var i = 1; i < rowLength; i++) {
        //        //itmdata = itmdata + table.rows[i].cells[1].innerText + '^' + table.rows[i].cells[2].innerText + '^' + table.rows[i].cells[3].innerText + '^' + table.rows[i].cells[4].innerText + '^' + $("[id*=hdUserId]").val() + 'æ';
        //        //itmdatahtml = itmdatahtml + table.rows[i].cells[1].innerHTML + '^' + table.rows[i].cells[2].innerHTML + '^' + table.rows[i].cells[3].innerHTML + '^' + table.rows[i].cells[4].innerHTML + '^' + $("[id*=hdUserId]").val() + 'æ';
        //        //1-Date of payment-2-Due date--3-Penalty if any--4--Penalty %--5--Principle Amt--6--Interest Amt');

        //        itmdata = itmdata + table.rows[i].cells.item(0).innerHTML + '££' + table.rows[i].cells[1].children[0].value + '£' + table.rows[i].cells[2].children[0].value + '£' + table.rows[i].cells[5].children[0].value + '£' + table.rows[i].cells[3].children[0].value + '£' + table.rows[i].cells[4].children[0].value + '£1£0£0£1æ';
        //        //SR--FROMDT--TODATE-----PAYDATE--INTERESTAMT---Principle Amount 
        //        //<th scope="col">Sr.No</th> <th scope="col">From Date</th> <th scope="col">Interest Upto Date</th><th scope="col">InterestAmount</th><th scope="col">Payment Date</th></tr ></thead><tbody>');
        //        //srNo£FromDate£toDate£PaymentDate£InbterestAmount£PrincipleAmount£EMIAmount£PenaltyStatus£PenaltyAmount£userid
        //        //srNo-v_dt5(1)£FromDate-v_dt5(2)£toDate-v_dt5(3)£PaymentDate-v_dt5(4)£Amount-v_dt5(5)£INST_TYPE-v_dt5(6)£PenaltyStatus-v_dt5(7)£PenaltyAmount-v_dt5(8)£PAY_FREQUENCY-v_dt5(9)
        //    }
        //    itmdata = itmdata + '¥' + 1;
        //}

    }

    //1-Bullet payment---2-EMI-----3-Interest plus Principle

    //if ($('#ddlmodpay').val() == '1') {
    //    var table = document.getElementById('repaygenpayment');
    //    var rowLength = table.rows.length;
    //    if (rowLength < 1) {
    //        ModelPopWarning("Generate Repayment Shedule...!!!");
    //        return false;
    //    }
    //    for (var i = 1; i < rowLength; i++) {
    //        //itmdata = itmdata + table.rows[i].cells[1].innerText + '^' + table.rows[i].cells[2].innerText + '^' + table.rows[i].cells[3].innerText + '^' + table.rows[i].cells[4].innerText + '^' + $("[id*=hdUserId]").val() + 'æ';
    //        //itmdatahtml = itmdatahtml + table.rows[i].cells[1].innerHTML + '^' + table.rows[i].cells[2].innerHTML + '^' + table.rows[i].cells[3].innerHTML + '^' + table.rows[i].cells[4].innerHTML + '^' + $("[id*=hdUserId]").val() + 'æ';
    //        itmdata = itmdata + table.rows[i].cells.item(0).innerHTML + '£' + table.rows[i].cells[1].children[0].value + '£' + table.rows[i].cells[2].children[0].value + '£' + table.rows[i].cells[5].children[0].value + '£' + table.rows[i].cells[3].children[0].value + '£' + table.rows[i].cells[4].children[0].value + '£1£0£0£1æ';
    //        //SR--FROMDT--TODATE--INTERESTAMT---Principle Amount -----PAYDATE
    //        //<th scope="col">Sr.No</th> <th scope="col">From Date</th> <th scope="col">Interest Upto Date</th><th scope="col">InterestAmount</th><th scope="col">Payment Date</th></tr ></thead><tbody>');
    //        //srNo£FromDate£toDate£PaymentDate£InbterestAmount£PrincipleAmount£EMIAmount£PenaltyStatus£PenaltyAmount£userid
    //        //srNo-v_dt5(1)£FromDate-v_dt5(2)£toDate-v_dt5(3)£PaymentDate-v_dt5(4)£Amount-v_dt5(5)£INST_TYPE-v_dt5(6)£PenaltyStatus-v_dt5(7)£PenaltyAmount-v_dt5(8)£PAY_FREQUENCY-v_dt5(9)
    //    }
    //    itmdata = itmdata + '¥' + 1;        
    //}
    //else {
    //    var table = document.getElementById('tblPrincipleOnly');
    //    var rowLength = table.rows.length;
    //    if (rowLength < 1) {
    //        ModelPopWarning("Generate Repayment Shedule...!!!");
    //        return false;
    //    }
    //    //alert(' second FORLOOP');
    //    for (var i = 1; i < rowLength; i++) {   
    //        //alert('EMI');
    //        //alert(table.rows[i].cells[4].innerText);            
    //        //lert(table.rows[i].cells[5].innerText);
            
    //        var trevalmax = parseFloat(table.rows[i].cells[4].innerText) + parseFloat(table.rows[i].cells[5].innerText);
    //        //alert(trevalmax);
      
    //        //$('#tblPrincipleOnly').append('<thead class="bg-success text-white"><tr><th scope="col">Date of payment</th><th scope="col">Due date</th> <th class="align-center">Penalty if any</th><th scope="col">Penalty %</th><th scope="col">Principle Amount</th><th scope="col" style="display:none" class="align-center">Interest Amount</th><th scope="col">Delete</th></tr></thead>');

    //        itmdata = itmdata + table.rows[i].cells[0].innerText + '^' + table.rows[i].cells[1].innerText + '^' + table.rows[i].cells[2].innerText + '^' + table.rows[i].cells[3].innerText + '^' + table.rows[i].cells[4].innerText + '^' + table.rows[i].cells[5].innerText + '^' + table.rows[i].cells[6].innerText + '^' + $("[id*=hdUserId]").val() + '^' + trevalmax + 'æ';
    //        //alert(itmdata);
    //        //srNo-v_dt5(1)£FromDate-v_dt5(2)£toDate-v_dt5(3)£PaymentDate-v_dt5(4)£Amount-v_dt5(5)£INST_TYPE-v_dt5(6)£PenaltyStatus-v_dt5(7)£PenaltyAmount-v_dt5(8)£PAY_FREQUENCY-v_dt5(9)
    //    }

    //    itmdata = itmdata + '~' + 2;
    //}
    //alert('going onn');
    //Data = $('#txtloanamt').val() + '^' + $('#txtproccessfee').val() + '^' + $('#txtgstrate').val() + '^' + loanid + '^' + $('#txtGst').val() + '^' + $('#txtSgst').val() + '^' + $('#txtCgst').val() + '^' + $('#txttenure').val() + '^' + $('#txtAvailmentDate').val() + '^' + $('#txtlonagree').val() + '^' + $('#ddlmodpay').val() + '^' + $("[id*=hdUserId]").val() + '^' + $('#ddlFundSourse').val() + '^' + $('#ddlFund').val() + '^' + $('#ddlintresttype').val() + '^' + $('#ddlloanaccname').val() + '^' + $('#ddlprofeeaccname').val() + '^' + $('#ddlselbankname').val() + '^' + $('#txtloanbal').val() + '^' + $('#ddlFund').val().split("æ")[1] + '^' + $("[id*=hdBranchId]").val() + '^' + $("[id*=hdFirmId]").val() ; 

    
    if ($('#txtrepaydate').val() == '') {
        repay = '';
    }
    else {        
        repay = $('#txtrepaydate').val();
    }
   // alert($("[id*=hdnLoanMainAcc]").val().split("-", 1));
    if ($("#ddlFundSourse").val() == '3') {
        MainAcc = $("#txtMainnAcc").val();
        //$("[id*=hdnLoanMainAcc]").val();
        Loanamnt = $('#txtloanlimit').val();
        LoanBal = 0;
        SubAcc = $("#txtSubAcc").val();
        //$("[id*=hdnLoanSubAcc]").val();
        fundTfrMain = "";
        fundTfrSub = "";
        //tblAccntData = fundTfrMain + "±" + fundTfrSub + "±" + Loanamnt + "±" + $("[id*=hdUserId]").val() + "¥";
        tblAccntData = "";
    }
    else {
        if ($("[id*=hdnLoanMainAcc]").val().split("-", 1) == "") {
            ModelPopWarning("Please select Loan Main Ledger");
            return false;
        }
        else {
            MainAcc = $("[id*=hdnLoanMainAcc]").val().split("-", 1);
        }
        //if ($("[id*=hdnFTMainAcc]").val().split("-", 1) == "") {
        //    ModelPopWarning("Please select Fund Transfer Main Ledger");
        //    return false;
        //}
        SubAcc = $("[id*=hdnLoanSubAcc]").val().split("-", 1);
        LoanBal = $('#txtloanbal').val();
        Loanamnt = $('#txtloanamt').val();
        //fundTfrMain = $("[id*=hdnFTMainAcc]").val().split("-", 1);
        //fundTfrSub = $("[id*=hdnFTSubAcc]").val().split("-", 1);
        fundTfrMain = "";
        fundTfrSub = "";
        var tableData = document.getElementById('tblPaymentDtl');
        for (j = 1; j < $("#tblPaymentDtl tr").length; j++) {
            //$('#tblPaymentDtl').append('<thead class="bg-success text-white"><tr><th scope="col">Main Account</th><th scope="col">Sub Account</th> <th class="align-center">Amount</th><th scope="col">Delete</th></tr></thead><tbody>');
            tblAccntData = tblAccntData + tableData.rows[j].cells[0].innerText + "±" + tableData.rows[j].cells[1].innerText + "±" + tableData.rows[j].cells[2].innerText + "±" + $("[id*=hdUserId]").val() + "¥";
        }
        var valTbl, valData1;
        var n = 0;
        valTbl = tblAccntData.split('¥');
        if (valTbl.length > 2) {
            if ($("#txtloanamt").val() != $("#txtTotalAmount").val()) {
                ModelPopWarning("Total Fund Transfer Amount and Loan Amount are not equal ..!!!");
                return false;
            }
        }
    }
    //if ($("[id*=hdnLoanSubAcc]").val().split("-", 1) == "") {
    //    ModelPopWarning("Please select Loan Sub Ledger");
    //    return false;
    //}
   // debugger;
   
    //if ($("[id*=hdnFTSubAcc]").val().split("-", 1) == "") {
    //    ModelPopWarning("Please select Fund Transfer Sub Ledger");
    //    return false;
    //}

    //alert(repay);
    //alert($('#txtrepaydate').val());
    var modpay = $('#ddlmodpay').val();
    var inttype1 = $('#ddlintresttype').val();
    if (!$('#ddlintresttype').val()) {
        inttype1 = $('#ddlintresttype').val();
    }
    if ($('#ddlintresttype').val() == null) {
        inttype1 = "";
    }
    if (!$('#ddlmodpay').val()) {
        modpay = $('#ddlmodpay').val();
    }
    if ($('#ddlmodpay').val()==null) {
        modpay = "";
    }
    var raterm = "";
    if (($('#ddlSubFundSourse').val() == '4') || ($('#ddlSubFundSourse').val() == '5') || ($('#ddlSubFundSourse').val() == '8')) {
        raterm = $('#txtRateTerm').val();
    }
    else {
        raterm= "";
    }
   // alert(MainAcc);
    //  alert(SubAcc);
    Data = $("[id*=hdBranchId]").val() + 'µ' + $("[id*=hdFirmId]").val() + 'µ' + $('#ddlFund').val().split("æ")[1] + 'µ' + Loanamnt + 'µ' + inttype1 + 'µ' + $('#txtintrate').val() + 'µ' + $('#txttenure').val() + 'µ' + $('#txtAvailmentDate').val() + 'µ' + $('#txtlonagree').val() + 'µ' + modpay + 'µ' + MainAcc + 'µ' + SubAcc + 'µ' + fundTfrMain + 'µ' + fundTfrSub + 'µ' + dateval + 'µ' + $("[id*=hdUserId]").val() + 'µ' + repay + 'µ' + LoanBal + 'µ' + raterm + 'µ' + tblAccntData;
   // Data = $("[id*=hdBranchId]").val() + 'µ' + $("[id*=hdFirmId]").val() + 'µ' + $('#ddlFund').val().split("æ")[1] + 'µ' + $('#txtloanamt').val() + 'µ' + inttype1 + 'µ' + $('#txtintrate').val() + 'µ' + $('#txttenure').val() + 'µ' + $('#txtAvailmentDate').val() + 'µ' + $('#txtlonagree').val() + 'µ' + modpay + 'µ' + MainAcc + 'µ' + SubAcc + 'µ' + $("[id*=hdnFTMainAcc]").val().split("-", 1) + 'µ' + $("[id*=hdnFTSubAcc]").val().split("-", 1) + 'µ' + dateval + 'µ' + $("[id*=hdUserId]").val() + 'µ' + repay + 'µ' + $("[id*=hdUserId]").val() + 'µ' + $('#txtloanbal').val();
   // Data = $("[id*=hdBranchId]").val() + 'µ' + $("[id*=hdFirmId]").val() + 'µ' + $('#ddlFund').val().split("æ")[1] + 'µ' + $('#txtloanamt').val() + 'µ' + inttype1 + 'µ' + $('#txtintrate').val() + 'µ' + $('#txttenure').val() + 'µ' + $('#txtAvailmentDate').val() + 'µ' + $('#txtlonagree').val() + 'µ' + modpay + 'µ' + $("[id*=hdnLoanMainAcc]").val().split("-", 1) + 'µ' + $("[id*=hdnLoanSubAcc]").val().split("-", 1) + 'µ' + $("[id*=hdnFTMainAcc]").val().split("-", 1) + 'µ' + $("[id*=hdnFTSubAcc]").val().split("-", 1) + 'µ' + dateval + 'µ' + $("[id*=hdUserId]").val() + 'µ' + repay + 'µ' + $("[id*=hdUserId]").val() + 'µ' + $('#txtloanbal').val();
  //  alert(Data);
   
    $.ajax({
        type: "post",
        contentType: "application/json; charset=utf-8", 
        url: "LoanAvailment.aspx/ConfirmTresury",
        data: "{typ:'INSERTAVAILMENT',itmDtl:'" + Data + "',data:'" + itmdata + "'}", 
        dataType: "json",
        success: function (Result) {
           // alert('got this one');
            alert(Result.d);

      window.open('LoanAvailment.aspx', '_self');

        }
    });

}

//-----VALIDATION-----------//


function Loanavailementvali() {
    var mod = $('#ddlmodpay').val();
    var ftype = $('#ddlFund').val().split("æ")[0];
    if ($('#ddlFiType').val() == '-1') {
        ModelPopWarning("Select Financial Institution Type...!!!");
        $('#ddlFiType').focus();
        return false;
    }
    else if ($('#ddlFi').val() == '-1') {
        ModelPopWarning("Select Financial Institution ...!!!");
        $('#ddlFi').focus();
        return false;
    }
    else if ($('#ddlFundSourse').val() == '-1') {
        ModelPopWarning("Select Fund Category ...!!!");
        $('#ddlFundSourse').focus();
        return false;
    }
   
    else if ($('#ddlSubFundSourse').val() == '-1') {
        ModelPopWarning("Select Fund Sub Category ...!!!");
        $('#ddlSubFundSourse').focus();
        return false;
    }
    else if ($('#ddlFund').val() == '-1') {
        ModelPopWarning("Select Fund ...!!!");
        $('#ddlFund').focus();
        return false;
    }
    //else if ($('#txtloanamt').val() == '') {
    //    ModelPopWarning("Enter Loan Amount...!!!");
    //    //alert('Enter Loan Amount...!!!');
    //    $('#txtloanamt').focus();
    //    return false;
    //}
    else if (parseFloat($("[id*=hdnLoanBal]").val()) < parseFloat($('#txtloanamt').val())) {
        var bal = $("[id*=hdnLoanBal]").val();
        ModelPopWarning("Loan Amount Exceeds the Loan Limit of " + bal + "...!!!");
        //alert('Enter Loan Amount Less Than Loan Balance...');
        $('#txtloanamt').val('');
        $('#txtloanamt').focus();
        return;
    }
    else if ($('#ddlintresttype').val() == '-1') {
        ModelPopWarning("Select Interest type...!!!");
        //alert('Select Interest type...!!!');
        $('#ddlintresttype').focus();
        return false;
    }
    else if ($('#txtintrate').val() == '') {
        ModelPopWarning("Enter Interest Rate...!!!");
        //alert('Enter Interest Rate...!!!');
        $('#txtintrate').focus();
        return false;
    }
    else if ($('#txtloanavail').val() == '') {
        ModelPopWarning("Select Loan Availment Date...!!!");
        //alert('Select loan availed on date...!!!');
        $('#txtloanavail').focus();
        return false;
    }
    else if ($('#txttenure').val() == '') {
        ModelPopWarning("Enter Tenure...!!!");
        //alert('Enter tenure...!!!');
        $('#txttenure').focus();
        return false;
    }
    else if ($('#txtlonagree').val() == '') {
        ModelPopWarning("Select Loan Agreement Date...!!!");
        //alert('Enter tenure...!!!');
        $('#txtlonagree').focus();
        return false;
    }
    else if ((mod == '-1') && (ftype != '8')) {
        if (ftype != '6'){
            ModelPopWarning("Select Payment Mode ...!!!");
            $('#ddlmodpay').focus();
            return false;
        }
       
    }
    if ($('#ddlFundSourse').val() == '3') {

        if ($("#txtmaturtyAmnt").val() == '') {
            ModelPopWarning("Enter Maturity Amount...!!!");
            $("#txtmaturtyAmnt").focus;
            return false;
        }
    }
    else if (($('#ddlFundSourse').val() != '3') && ($('#ddlFundSourse').val() == '-1')){
        if ($('#txtloanamt').val() == '') {
            ModelPopWarning("Enter Loan Amount...!!!");
            //alert('Enter Loan Amount...!!!');
            $('#txtloanamt').focus();
            return false;
        }
    }
    //    //else if ($('#txtloanagee').val() == '') {
    //    //    alert('Select Loan Agreement data...!!!');
    //    //    $('#txttenure').focus();
    //    //    return false;
    //    //}

    //    //else if ($('#ddlmodpay').val() == '-1') {
    //    //    alert('Select Mode of payment...!!!');
    //    //    $('#ddlmodpay').focus();
    //    //    return false;
    //    //}

    //    //else if ($('#txtdateofpay').val() == '') {
    //    //    alert('Select Date of payment ...!!!');
    //    //    $('#txtdateofpay').focus();
    //    //    return false;
    //    //}

    //    //else if ($('#txtduedate').val() == '') {
    //    //    alert('Select Due Date...!!!');
    //    //    $('#txtduedate').focus();
    //    //    return false;
    //    //}

    //    //else if ($('#txtprinamt').val() == '') {
    //    //    alert('Enter Priciple amount...!!!');
    //    //    $('#txtprinamt').focus();
    //    //    return false;
    //    //}

    //    //else if ($('#txtintramt').val() == '') {
    //    //    alert('Enter Interest amount...!!!');
    //    //    $('#txtintramt').focus();
    //    //    return false;
    //    //}
        return true;
}

    //----------------Loan availement verify--------------------------//

    //------------------fund provider information------------------------//


    function Vefundfilltable(data) {
        $("#funddetailes1").empty();
        var valData, valData1;
        var n = 0;
        valData = data.split('Θ');
        if ($("#funddetailes1 tr").length == 0) {
            //$('#funddetailes1').append('<tbody><tr style="background-color:#996633;color:black"><th class="align-center">SOURCE NAME</th><th class="align-center">FUND NAME</th><th class="align-center">FI TYPE NAME</th> <th class="align-center">FI NAME</th><th class="align-center">AGREEMENT ENTERED DATE</th><th class="align-center">AGREEMENT FROM DATE</th><th class="align-center">AGREEMENT TO DATE</th><th class="align-center">LOAN LIMIT</th></tr>');
            $('#funddetailes1').append('<thead class="bg-success text-white"><tr><th scope="col">SOURCE NAME</th><th scope="col">FUND NAME</th><th scope="col">FI TYPE NAME</th> <th scope="col">FI NAME</th><th scope="col">AGREEMENT ENTERED DATE</th><th scope="col">AGREEMENT FROM DATE</th><th scope="col">AGREEMENT TO DATE</th><th scope="col">LOAN LIMIT</th></tr></thead>');

        }

        for (i = 0; i < valData.length - 1; i++) {
            valData1 = valData[i].split('^');
            $('#funddetailes1').append('<tbody><tr>' +
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

    //--------------GST section-----------------------//

    function Gstsectionstage() {
        var gstdata;

        $.ajax({
            type: "post",
            contentType: "application/json; charset=utf-8",
            url: "LoanAvailment.aspx/getgststage",
            data: "{typ:'SELGSTRATE', val1:'" + $('#ddlFundSourse').val() + "',data:'" + $('#ddlFund').val().split("æ")[1] + "'}",
            dataType: "json",
            success: function (Result) {

                gstdata = Result.d.split('^')
                if (gstdata[0] == gstdata[2]) {

                    valgst = 1;
                }
                else {

                    valgst = 2;
                }

                //alert(Result.d);

            },
            error: function (Result) {

            }
        });
    }

    function fillgstrate(gstrate) {
        if (gstrate != 0 || gstrate.trim().length != 0) {

            if (valgst == 1) {
                $('#txtSgst').val(gstrate / 2);
                $('#txtCgst').val((parseFloat(gstrate) / 2).toFixed(2));
                $('#txtGst').val();


            }

            else {

                $('#txtSgst').val();
                $('#txtCgst').val();
                $('#txtGst').val(gstrate);

            }
        }

    }

    function verloanfilltable(data) {
        $("#loanfilltable1").empty();
        var valData, valData1;
        var n = 0;
        valData = data.split('Θ');
        if ($("#loanfilltable1 tr").length == 0) {


            $('#loanfilltable1').append('<tbody><tr style="background-color:#996633;color:black"><th class="align-center">LOAN AMOUNT </th><th class="align-center">INTEREST TYPE</th><th class="align-center">INTEREST RATE</th> <th class="align-center">TENURE</th><th class="align-center">LOAN DATE</th><th class="align-center">MATURITY DATE</th><th class="align-center">PAYMENT</th><th class="align-center">LOAN MAIN ACC</th><th class="align-center">LOAN SUB ACC</th><th class="align-center">INTEREST MAIN ACC</th><th class="align-center">INTEREST SUB ACC </th><th class="align-center">ENTERED BY</th><th class="align-center">ENTERED DATE</th></tr>');

        }

        for (i = 0; i < valData.length - 1; i++) {
            valData1 = valData[i].split('^');
            $('#loanfilltable1').append('<tr style="background-color:#999966;color:black">' +
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
                '<td>' + valData1[11] + '</td>' +
                '<td>' + valData1[12] + '</td>' +
                //'<td>' + $("#ddlselprj option:selected").text() + '</td>' +
                //'<td style="display:none;>' + valData1[1] + '</td>' +      
                '</tr> </tbody>');

        }

    }



    function vermodepayfill(data) {
        $("#thirdfilltab").empty();
        //alert('yyyyyyyyyyyyy');
        var valData, valData1, v_penalty, v_penval;
        var n = 0;
        valData = data.split('Θ');
        if ($("#thirdfilltab tr").length == 0) {

            $('#thirdfilltab').append('<tbody><tr style="background-color:#996633;color:black"><th class="align-center">PRINCIPLE AMT</th><th class="align-center">INTEREST AMT</th><th class="align-center">PENALTY AMT</th> <th class="align-center">PENALTY STATUS</th><th class="align-center">DUE DATE</th><th class="align-center">PAY DATE</th><th class="align-center">PAYMENT MODE</th></tr>');
        }

        for (i = 0; i < valData.length - 1; i++) {
            valData1 = valData[i].split('^');
            if (valData1[3] == 1) {

                v_penalty = 'PENALTY';
                v_penval = 1;
            }
            else {

                v_penalty = 'NO PENALTY';
                v_penval = 0;
            }

            $('#thirdfilltab').append('<tr style="background-color:#999966;color:black">' +
                //'<td>' + $("#tableData tr").length + '</td>' +
                '<td>' + valData1[0] + '</td>' +
                '<td>' + valData1[1] + '</td>' +
                '<td>' + valData1[2] + '</td>' +
                '<td>' + v_penalty + '</td>' +
                '<td>' + valData1[4] + '</td>' +
                '<td>' + valData1[5] + '</td>' +
                '<td>' + valData1[6] + '</td>' +

                //'<td>' + $("#ddlselprj option:selected").text() + '</td>' +
                //'<td style="display:none;>' + valData1[1] + '</td>' +      
                '</tr> </tbody>');

        }

    }

    function searchtable() {
        //alert('check box');
        if ($('#chktable').prop('checked')) {
            //$('#divrahu').show();

            $("#repaygenpayment tbody tr").each(function () {
                $(this).find('input:text').prop('disabled', false);
            });

        } else {
            //$('#divrahu').hide();   

            $("#repaygenpayment tbody tr").each(function () {
                $(this).find('input:text').prop('disabled', true);
            });
        }
    }

    //--------------------GENERATE REPAYMENT----------------------------//

    function GetSchedule() {
        //$("#prjdetailes").empty();

        var item;
        var dateval;
        if ($('#ddlmodpay').val() == '1') {
            if ($('[id*=rdbmonthend]:checked').val()) {
                dateval = 1;
            }
            else if ($('[id*=rdbmonthdate]:checked').val()) {
                dateval = 2;
            }
        }
        else {
            dateval = '0';
            $('#divtick').hide();
            $("#repaygenpayment").empty();
            return false;
        }


        if ($("#txtAvailmentDate").val() == "") {
            $('#divtick').hide();
            $("#repaygenpayment").empty();
            return false;
        }
        if ($("#txtintrate").val() == "") {
            $('#divtick').hide();
            $("#repaygenpayment").empty();
            return false;
        }
        if ($("#txttenure").val() == "") {
            $('#divtick').hide();
            $("#repaygenpayment").empty();
            return false;
        }
        if ($("#txtloanamt").val() == "") {
            $('#divtick').hide();
            $("#repaygenpayment").empty();
            return false;
        }

        item = $('#txtloanamt').val() + '^' + $('#ddlFi').val() + '^' + $('#ddlFund').val().split("æ")[0] + '^' + $('#txtintrate').val() + '^' + $('#txttenure').val() + '^' + $('#txtAvailmentDate').val() + '^' + $('#txtrepaydate').val() + '^' + dateval; 
        //alert(item); 
        $.ajax({
            type: "post",
            contentType: "application/json; charset=utf-8",
            url: "LoanAvailment.aspx/getreygenrate",
            data: "{typ:'GENREPAYMENT', val1:'',data:'" + item + "'}",
            dataType: "json",
            success: function (Result) {
                if (Result.d == '') {
                    $('#divtick').hide();
                    $("#repaygenpayment").empty();
                }
                else {
                    $('#divtick').show();
                    Genreypayment(Result.d);  
                }
                //alert(Result.d); 
               //Result = Result.d;       

            },
            error: function (Result) {

            }
        });
    }

    function Genreypayment(redata) {
        $("#repaygenpayment").empty();
        //alert(redata);
        var valData, valData1;
        var n = 0;
        //alert(redata);
        //debugger;
        valData = redata.split('¥');
        if ($("#repaygenpayment tr").length == 0) {
            //$('#repaygenpayment').append('<tbody><tr style="background-color:#996633;color:black"><th class="align-center">SR.NO</th><th class="align-center">FROM DATE</th><th class="align-center">INTEREST UPTO DATE</th><th class="align-center">EMI AMOUNT</th><th class="align-center">PAYMENT DATE</th></tr>');
            $("#repaygenpayment").append('<thead class="bg-success text-white">< tr ><th scope="col">Sr.No</th> <th scope="col">From Date</th> <th scope="col">Interest Upto Date</th><th scope="col">InterestAmount</th><th scope="col">PrincipleAmount</th><th scope="col">Payment Date</th></tr ></thead><tbody>');
        }
        //alert('hlooo');   
        for (i = 0; i < valData.length - 1; i++) {
            valData1 = valData[i].split('µ');
            var onin="this.value = this.value.replace(/[^0-9.]/g, \'\').replace(/(\..*)\./g, \'$1\');";
            //var onin = "fdggfdgdf\'";
            //alert(valData1[3]);
            $('#repaygenpayment').append('<tr>' +

                //'<td>' + $("#tableData tr").length + '</td>' +
                '<td>' + valData1[0] + '</td>' +            
                //'<td>' + valData1[2] + '</td>' +
                '<td><input type="text" id="fromDate' + (parseInt(i) + parseInt(1)) + '" class="input-medium form-control datepicker" name="date" date_class="date_type" placeholder="From Date" value="' + valData1[3] + '" disabled="disabled" style="color:blue" onkeypress="return false"></td>' +
                '<td><input type="text" id="intupDate' + (parseInt(i) + parseInt(1)) + '" class="input-medium form-control datepicker" name="date" date_class="date_type" placeholder="Interest Upto Date" value="' + valData1[4] + '" disabled="disabled" style="color:blue" onkeypress="return false" ></td>' +
                '<td><input class="form-control input-sm align-right" placeholder="InterestAmount" id="txtamount' + (parseInt(i) + parseInt(1)) + '" type="text" value="' + valData1[1] + '" disabled="disabled" style="color:blue" onkeypress="return isNumberKey(event)"></td>' +
                '<td><input class="form-control input-sm align-right" placeholder="PrincipleAmount" id="txtPriamount' + (parseInt(i) + parseInt(1)) + '" type="text" value="' + valData1[2] + '" disabled="disabled" style="color:blue" onkeypress="return isNumberKey(event)" readonly></td>' +
                '<td><input type="text" id="paydate' + (parseInt(i) + parseInt(1)) + '" class="input-medium form-control datepicker" name="date" date_class="date_type" placeholder="Interest Upto Date" value="' + valData1[5] + '" disabled="disabled" style="color:blue" onkeypress="return false"></td>' +
                //'<td>' + valData1[6] + '</td>' +
                //'<td>' + valData1[7] + '</td>' +
                //'<td>' + $("#ddlselprj option:selected").text() + '</td>' +
                //'<td style="display:none;>' + valData1[1] + '</td>' +      
                '</tr> </tbody>');

        }

    }

    $(document).on("click", ".datepicker", function () {

        $(this).datepicker({
            changeMonth: true,
            changeYear: true,
            dateFormat: 'dd/MM/yy'
        }).datepicker("show");
    });


    //---------------REYPAY GENERATE---------------------//

    function Updategenreypay() {
        //alert('rey pay');
        var data="";
       
        var table = document.getElementById('repaygenpayment');
        var rowLength = table.rows.length;

        for (var i = 1; i < rowLength; i++) {
            //alert($('#fromDate' + i).val());

            data = data + $('#fromDate' + i).val() + '^' + $('#intupDate' + i).val() + '^' + $('#txtamount' + i).val() + '^' + $('#paydate' + i).val() + '^' + $('#ddlFund').val().split("æ")[1] + 'æ';
            //alert(data);
            //<th scope="col">Sr.No</th> <th scope="col">From Date</th> <th scope="col">Interest Upto Date</th><th scope="col">InterestAmount</th><th scope="col">Payment Date</th></tr ></thead><tbody>');
        } 

        $.ajax({
            type: "post",
            contentType: "application/json; charset=utf-8",
            url: "LoanAvailment.aspx/ConfirmTresury",
            data: "{typ:'UPDREPAYSCHD',itmDtl:'" + data + "',data:''}",
            dataType: "json",
            success: function (Result) {
                alert('Updation successful....!');
                alert(Result.d);
                window.open('LoanAvailment.aspx', '_self');

            }
        });
    }

    //------------------confirm loan availment varify------------------------//

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

    //function checkUpload() {
    //    alert(1);
    //    var data;
    //    //if (!checkValidConfirm()) {
    //    //    return false;
    //    //}
    //    data = $("[id*=hdfunid]").val() + 'æ' + $("[id*=hdBranchId]").val() + 'æ' + $("[id*=hdFirmId]").val() + 'æ' + $('#txtloanamt').val() + 'æ' + $('#ddlintresttype').val() + 'æ' + $('#txtintrate').val() + 'æ' + $('#txtAvailmentDate').val() + 'æ' + $('#txttenure').val() + 'æ' + $('#txtlonagree').val() + 'æ' + $('#ddlloanaccname').val() + 'æ' + $('#ddlselbankname').val() + 'æ' + $('#ddlremainacc').val() + 'æ' + $('#ddlresubacc').val() + 'æ' + $("[id*=hdUserId]").val() + 'æ' + $('#txtloanbal').val();
    //    $("[id*=hdData]").val(data);
    //    return false;
    //    //alert(data);
    //}

    function ShowTermLoan() {
        //--4-SHORT TERM LOAN--8--Term Loan--6--cash credit
        if ($('#ddlFund').val().split("æ")[0] == '8') {
            $('#divmode').hide();
            $('#divbut').hide();
            $('#divtermloan').show();
            $('#divterm').show();
            $('#divterm1').show();
            $('#divgrid').show();
            $('#divgrid1').show();
        }
        else if($('#ddlFund').val().split("æ")[0] == '6') {
            $('#divmode').hide();
            $('#divbut').hide();
            $('#divtermloan').hide();
            $('#divterm').hide();
            $('#divterm1').hide();
            $('#divgrid').hide();
            $('#divgrid1').hide();
        }
        else {
            $('#divmode').show();
            $('#divbut').show();
            $('#divtermloan').hide();
            $('#divterm').hide();
            $('#divterm1').hide();
            $('#divgrid').hide();
            $('#divgrid1').hide();

            
        }
}

function PutCPAccEntry() {
  
    if ($("#ddlFundSourse").val() == '3') {
        $("#CPAccount").show();
        $("#CPSubAccount").show();
        $("#DivAutoAcc").hide();
        $("#DivAutoSub").hide();
        $("#DivtransfrAc").hide();
        //$("#TrnsferAcc").hide();
        //$("#TrnsferSubAcc").hide();
        $("#divAddFTAccount").hide();
        $("#ShwTotAmt").hide();
        $("#txtMainnAcc").val('32100');
        $("[id*=hdnLoanMainAcc]").val('32100');
        $("#txtSubAcc").val('40599');
        $("[id*=hdnLoanSubAcc]").val('40599');
        $("#ShwBalnceDiv").hide();
        $("#ShwBalDiv").hide();
        $("#MatrtyAmntDiv").show();
        //$("#txtprinamt").val($('#txtloanlimit').val());
        //var Intrst = $("#txtmaturtyAmnt").val() - $('#txtloanlimit').val();
        //$("#txtintramt").val(Intrst);
    }
    else {
        $("#DivAutoAcc").show();
        $("#DivAutoSub").show();
        $("#CPSubAccount").hide();
        $("#CPAccount").hide();
        $("#DivtransfrAc").show();
        //$("#TrnsferAcc").show();
        //$("#TrnsferSubAcc").show();
        $("#divAddFTAccount").show();
        $("#ShwTotAmt").show();
        $("#ShwBalnceDiv").show();
        $("#ShwBalDiv").show();
        $("#MatrtyAmntDiv").hide();
        $("#tblPaymentDtl").empty();
    }

}

function addFTAmount() {
    var ToTAmnt = 0;
    if ($("[id*=hdnFTMainAcc]").val().split("-", 1) == "") {
        ModelPopWarning("Select Fund Transfer Main Account...!!!");
        return false;
    }
    if ($("#txtloanamt").val() == "") {
        ModelPopWarning("Enter Loan Amount...!!!");
        //alert("Please Enter Amount");
        $('#txtloanamt').focus();
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