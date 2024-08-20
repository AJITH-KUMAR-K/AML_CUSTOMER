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

       

  
    $("#txtDepositDate").datepicker({
        dateFormat: 'dd/MM/yy',
        changeMonth: true,
        changeYear: true,
        stepMonths: true,
        todayHighlight: true,
        //minDate: 0,
        onSelect: function (dateText, inst) {

        }
    });

    $("#txt_maturity").datepicker({
        dateFormat: 'dd/MM/yy',
        changeMonth: true,
        changeYear: true,
        stepMonths: true,
        todayHighlight: true,
        //minDate: 0,
        onSelect: function (dateText, inst) {

        }
    });

    /// End Sini

  
    ///clearRepay();
    SELFITYPE();
    //SELINTRESTTYPE();
    FillCategory();
    //SELLOANACCNAME();
    //SELBANKACC();
    // SELPAYMENTMODE();
    //}
   // $("#fupImports").val('');
   // $("#tblPaymentDtl").empty();
});


function SELFITYPE() {
    var QueryString = "GetFinInstType";
   
    $.ajax({
        type: "post",
        contentType: "application/json; charset=utf-8",
        url: "DepositWithBankReq.aspx/getFillDataNcd",
        data: "{typ:'" + QueryString + "', val1 :''}",
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

function FillFI1() {
     clear();
    //  clearRepay();
    $("#ddlFi").empty();
    $.ajax({
        type: "post",
        contentType: "application/json; charset=utf-8",
        url: "DepositWithBankReq.aspx/getFillDataNcd",
        data: "{typ:'GetFinInstn', val1 :'" + $('#ddlFiType').val() + "'}",
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



function FillCategory() {
    clear();
    var QueryString = "CATEGORY";
    $.ajax({
        type: "post",
        contentType: "application/json; charset=utf-8",
        url: "DepositWithBankReq.aspx/getFillData",
        data: "{typ:'CATEGORY', val1 :''}",
        dataType: "json",
        success: function (Result) {
            //alert("full");
            Result = Result.d;
            $.each(Result, function (key, value) {
                $('#ddlcategory').append($("<option></option>").val(value.id).html(value.name));
            });
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
function clear() {

    $("#txtFDNo").val('');
    $("#txtrate").val('');
    $("#txtDepositDate").val('');
    $("#txt_maturity").val('');
    $("#txtDepositAmt").val('');

    PricipleAmtWords.innerHTML = '';

    $("#txtMaturityAmt").val('');

    MatrtyAmntWords.innerHTML = '';

    $("#txt_purpose").val('');
    //$("#txtProvision").val('');

    $("#txtLoanAcc").val('');
    $("#txtMainnAcc").val('');
    $("#txtLoanSubAcc").val('');
    
    $("#txtSubAcc").val('');
    

    $("[id*=hdnLoanMainAcc]").val('');
    $("[id*=hdnLoanSubAcc]").val('');
    $("[id*=hdnFTMainAcc]").val('');
    $("[id*=hdnFTSubAcc]").val('');
   
}


//------------------confirm Deposit Branch Request-----------------//

function SaveDepositreq() {
   
    var Data, itmdata;//, dateval, itmdatachild, MainAcc, SubAcc, LoanBal, Loanamnt, fundTfrMain, fundTfrSub;
    Data = '';
    itmdata = '';
   
    if (!DepositBranchReqvali()) {
        //alert(2);
        return false;
    }
   
    if ($("[id*=hdnLoanMainAcc]").val().split("-", 1) == "") {
        alert("Please select  Main Ledger");
        return false;
    }
    else {
        MainAcc = $("[id*=hdnLoanMainAcc]").val().split("-", 1);
    }
    if ($("[id*=hdnLoanSubAcc]").val().split("-", 1) == "") {
        alert("Please select  Sub Ledger");
        return false;
    }
    else {
        SubAcc = $("[id*=hdnLoanSubAcc]").val().split("-", 1);
    }

    Data = $("[id*=hdBranchId]").val() + 'µ' + $("[id*=hdUserId]").val() + 'µ' + $('#ddlFiType').val() + 'µ' + $('#ddlFi').val() + 'µ' + $('#ddlcategory').val() + 'µ' + $('#txtFDNo').val() + 'µ' + $('#txtrate').val() + 'µ' + $('#txtDepositDate').val() + 'µ' + $('#txt_maturity').val() + 'µ' + $('#txtDepositAmt').val() + 'µ' + $('#txtMaturityAmt').val() + 'µ' + $('#txt_purpose').val() + 'µ' + MainAcc + 'µ' + SubAcc + 'µ' + $("[id*=hdFirmId]").val(); 
    

    $.ajax({
        type: "post",
        contentType: "application/json; charset=utf-8",
        url: "DepositWithBankReq.aspx/ConfirmTresuryReq",
        data: "{typ:'INSERTDEPOSITBREQ',itmDtl:'" + Data + "',data:'" + itmdata + "'}", 
        dataType: "json",
        success: function (Result) {
            // alert('got this one');
            alert(Result.d);

            window.open('DepositWithBankReq.aspx', '_self');

        }
    });

}

//-----VALIDATION-----------//


function DepositBranchReqvali() {
 
   
    if ($('#ddlFiType').val() == '-1') {
       alert("Select Financial Institution Type...!!!");    
       // ModelPopWarning("Select Financial Institution Type...!!!");       
        $('#ddlFiType').focus();
        return false;
    }
    else if ($('#ddlFi').val() == '-1') {
        alert("Select Financial Institution ...!!!");
       // ModelPopWarning("Select Financial Institution ...!!!");
        $('#ddlFi').focus();
        return false;
    }
    else if ($('#ddlcategory').val() == '-1') {
        alert("Select Fund Category ...!!!");
       // ModelPopWarning("Select Fund Category ...!!!");
        $('#ddlcategory').focus();
        return false;
    }   
   
    else if ($('#txtFDNo').val() == '') {
        alert("Enter FD Number...!!!");    
       // ModelPopWarning("Enter FD Number...!!!");    
        $('#txtFDNo').focus();
        return false;
    }

    else if ($('#txtrate').val() == '') {
       // ModelPopWarning("Enter  Rate...!!!");
        alert('Enter  Rate...!!!');
        $('#txtrate').focus();
        return false;
    }

    else if ($('#txtDepositDate').val() == '') {
        alert("Select Deposit Date...!!!");     
       // ModelPopWarning("Select Deposit Date...!!!");     
        $('#txtDepositDate').focus();
        return false;
    }

    else if ($('#txt_maturity').val() == '') {
        alert("Select Maturity Date..!!!");    
       // ModelPopWarning("Select Maturity Date..!!!");    
        $('#txt_maturity').focus();
        return false;
    }

    else if ($('#txtDepositAmt').val() == '') {
       // ModelPopWarning("Enter Deposit Amount...!!!");   
        alert("Enter Deposit Amount...!!!");   
        $('#txtDepositAmt').focus();
        return false;
    }
    else if ($('#txtMaturityAmt').val() == '') {
      //  ModelPopWarning("Enter Maturity Amount...!!!");
        alert("Enter Maturity Amount...!!!");
        $('#txtMaturityAmt').focus();
        return false;
    }
    else if ($('#txt_purpose').val() == '') {
        //ModelPopWarning("Enter Purpose...!!!");
        alert("Enter Purpose...!!!");
        $('#txt_purpose').focus();
        return false;
    }

    //else if ($('#txtProvision').val() == '') {
    //    alert("Enter Provision...!!!");
    //   // ModelPopWarning("Enter Provision...!!!");
    //    $('#txtProvision').focus();
    //    return false;
    //}
    else if ($('#hdnLoanMainAcc').val() == '') {
        alert("Enter Main Account...!!!");
        // ModelPopWarning("Enter Provision...!!!");
        $('#txtMainnAcc').focus();
        return false;
    }
    else if ($('#hdnLoanSubAcc').val() == '') {
        alert("Enter Sub Account...!!!");
        // ModelPopWarning("Enter Provision...!!!");
        $('#txtSubAcc').focus();
        return false;
    }
   
    return true;
}

function rate() {
    //alert('mohanlal');
    if ($('#txtrate').val() > 100) {
        //alert('Interest rate  should be less than 100 ');
        ModelPopWarning("Interest rate  should be less than 100 ...!!!");
        $('#txtrate').val('');
        return;
    }
}
