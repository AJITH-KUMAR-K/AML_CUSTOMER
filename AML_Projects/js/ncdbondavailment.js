var valgst;
var meturity;
var repay;
var bultval;
function exitPage() {
    window.open("index.aspx", "_self");
}
$(window).on('load', function () {
    debugger;
    //clear();

    //$('#divfeed').hide();
    //$('#divsgst').hide();
    //$('#divcgst').hide();
    //$('#divINSERTAVAILMENTfi').hide();
    //$('#divRateTerm').hide();


    $("#txtAllotmentDate").datepicker({
        dateFormat: 'dd/MM/yy',
        changeMonth: true,
        changeYear: true,
        stepMonths: true,
        todayHighlight: true,
        onSelect: function (dateText, inst) {

        }
    });

    //$("#txtlonagree").datepicker({
    //    dateFormat: 'dd/MM/yy',
    //    changeMonth: true,
    //    changeYear: true,
    //    stepMonths: true,
    //    todayHighlight: true,
    //    onSelect: function (dateText, inst) {

    //    }
    //});

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


    //$("#txtrepaydate").datepicker({
    //    dateFormat: 'dd/MM/yy',
    //    changeMonth: true,
    //    changeYear: true,
    //    stepMonths: true,
    //    todayHighlight: true,
    //    minDate: 0,
    //    onSelect: function (dateText, inst) {

    //    }
    //});
    alert("hai")
    //clearRepay();
    GetFundDtlsNcd();
    GetIntMethodType();
    //SELFITYPENCD();
    //SELINTRESTTYPE();
    //SELLOANACCNAME();
    //SELBANKACC();
    // SELPAYMENTMODE();
    //}
    //$("#fupImports").val('');
    //$("#tblPaymentDtl").empty();
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

    $('#divUSDBond').hide();
});

function SELFITYPENCD() {
    $('#ddlFiType').empty();
    $('#ddlFi').empty();
    var QueryString = "GetFinInstType";
    $.ajax({
        type: "post",
        contentType: "application/json; charset=utf-8",
        url: "ncdbondavailment.aspx/getFillDataNcd",
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
function FillFI() {
    $("#ddlFi").empty();
    $.ajax({
        type: "post",
        contentType: "application/json; charset=utf-8",
        url: "ncdbondavailment.aspx/getFillDataNcd",
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
function GetFundDtlsNcd() {
    $('#ddlSubCat').empty();
    $('#ddlFiType').empty();
    $('#ddlFi').empty();
    $("#divFiType").hide();
    $("#divFi").hide(); 
    var QueryString = "GetFundTypeNcd";
    alert(QueryString);
    $.ajax({
        type: "POST",
        contentType: "application/json; charset=utf-8",
        url: "NcdBondAvailment.aspx/getFillDataNcd",        
        data: "{typ:'" + QueryString + "', val1 :''}",
        dataType: "json",
        success: function (Result) {
            $('#ddlCategory').empty();
            $('#ddlCategory').append($("<option></option>").val("-1").html("Select Fund Category "));
            $.each(Result.d, function (data, value) {
                $('#ddlCategory').append($("<option></option>").val(value.id).html(value.name));
            })
        },
        error: function (Result) {
            alert(Result);
        }
    });
}
function GetSubFundDtlsNcd() {
    var InputString = $("#ddlCategory").val();
    var QueryString = "GetSubFundTypeNcd";
    $('#ddlFiType').empty();
    $('#ddlFi').empty();
    debugger;
    if ($('#ddlCategory').val() == '5') {
        $('#divUSDBond').show();      
    }
    else {
        $('#divUSDBond').hide();
    }
    $.ajax({
        type: "POST",
        contentType: "application/json; charset=utf-8",
        url: "NcdBondAvailment.aspx/getFillDataNcd",
        data: "{typ:'" + QueryString + "', val1 :'" + InputString + "'}",
        dataType: "json",
        async: false,
        success: function (Result) {
            $('#ddlSubCat').empty();
            $('#ddlSubCat').append($("<option></option>").val("-1").html("Select Sub Fund Category "));
            $.each(Result.d, function (data, value) {
                $('#ddlSubCat').append($("<option></option>").val(value.id).html(value.name));
            })

        },
        error: function (Result) {
            alert(Result);
        }
    });
}
function GetFiTypeNcd() {
    var SubCat = $("#ddlSubCat").val();
    if (SubCat != "2") {
        $("#divFiType").show();
        $("#divFi").show(); 
        $("#divPISeries").hide();
        SELFITYPENCD();
    }
    else {
        $("#divFiType").hide();
        $("#divFi").hide(); 
        $("#divPISeries").show();
    }
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
function GetIntMethodType() {
    var QueryString = "GetIntMethodType";
    
    $.ajax({
        type: "post",
        contentType: "application/json; charset=utf-8",
        url: "NcdBondAvailment.aspx/getFillDataNcd",
        data: "{typ:'GetIntMethodType', val1 :''}",
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
function showmeturitydate() {
    
    var tt = document.getElementById('txtAllotmentDate').value;

    var date = new Date(tt);
    var newdate = new Date(date);

    newdate.setDate(newdate.getDate() + parseInt($('#txtTenure').val()));

    var dd = newdate.getDate();
    var mm = newdate.getMonth() + 1;
    var y = newdate.getFullYear();

    var month_names = ["January", "February", "March",
        "April", "May", "June",
        "July", "August", "September",
        "October", "November", "December"];

    var someFormattedDate = dd + '/' + month_names[mm - 1] + '/' + y;
    $('#txtMaturityDate').val(someFormattedDate);
    //alert(someFormattedDate);   
    //document.getElementById('follow_Date').value = someFormattedDate;
}

function DisablePrinciple() {

    if ($('#chkPrincipleamt').prop('checked')) {
        $('#txtprinamt').prop("disabled", false);        
        $('#txtprinamt').val('');
        PricipleAmtWords.innerHTML = '';
    }
    else {
        $('#txtprinamt').prop("disabled", true);
        $('#txtprinamt').val('');
        PricipleAmtWords.innerHTML = '';
    }

}
function DisableInterest() {
    if ($('#chkInterestamt').prop('checked')) {
        $('#txtintramt').prop("disabled", false);        
       $('#txtintramt').val('');
       IntAmtWords.innerHTML = '';
    }
    else {
        $('#txtintramt').prop("disabled", true);
        $('#txtintramt').val('');
        IntAmtWords.innerHTML = '';
    }

}

function fillpaymenttable(data) {
    //Principle Amount Only
     var int = $('#txtprinamt').val();
    if ($('#txtprinamt').val()) {
            var v_penalty, v_penval;
        $('#divTblPrinciple').show();
        debugger;
        var len = $("#tblPrincipleOnly tr").length;
        
            if ($("#tblPrincipleOnly tr").length == 1) {
                $("#tblPrincipleOnly").empty();
                //$('#tblPrincipleOnly').append('<thead class="bg-success text-white"><tr><th scope="col">Date of payment</th><th scope="col">Due date</th> <th class="align-center">Penalty if any</th><th scope="col">Penalty %</th><th scope="col">Principle Amount</th><th scope="col" style="display:none" class="align-center">Interest Amount</th><th scope="col">Delete</th></tr></thead>');
                $('#tblPrincipleOnly').append('<thead class="bg-success text-white"><tr><th scope="col">Date of payment</th><th scope="col">Due date</th><th scope="col">Principle Amount</th><th scope="col" style="display:none" class="align-center">Interest Amount</th><th scope="col">Delete</th></tr></thead>');
                //$("#repaygenpayment").append('<thead class="bg-success text-white">< tr ><th scope="col">Sr.No</th> <th scope="col">From Date</th> <th scope="col">Interest Upto Date</th><th scope="col">InterestAmount</th><th scope="col">Payment Date</th></tr ></thead><tbody>');
                //  //srNo-v_dt5(1)£FromDate-v_dt5(2)£toDate-v_dt5(3)£PaymentDate-v_dt5(4)£Amount-v_dt5(5)£INST_TYPE-v_dt5(6)£PenaltyStatus-v_dt5(7)£PenaltyAmount-v_dt5(8)£PAY_FREQUENCY-v_dt5(9)
            }

            $('#tblPrincipleOnly').append('<tbody><tr>' +
                //'<td style="display:none">' + $('#ddlselprj').val() + '</td>' +
                //'<td>' + $('#ddlselactivitystageact').val() + '</td>' +
                //'<td style="display:none">' + $('#ddlselsubactivitystage').val() + '</td>' +
                '<td>' + $('#txtdateofpay').val() + '</td>' +
                '<td>' + $('#txtduedate').val() + '</td>' +
                //'<td>' + v_penalty + '</td>' +
                //'<td>' + $('#txtpenalty').val() + '</td>' +

                //'<td>' + $("#ddlselprj option:selected").text() + '</td>' +
                //'<td>' + $("#ddlselactivitystageact option:selected").text() + '</td>' +
                //'<td>' + $("#ddlselsubactivitystage option:selected").text() + '</td>' +     
                '<td>' + $('#txtprinamt').val() + '</td>' +
                '<td style="display:none">' + $('#txtintramt').val() + '</td>' +
                //'<td style="display:none">' + v_penval + '</td>' +
                '<td style="width:3%;"><ul><li><a href="javascript:void(0);" title="Delete" class="bs-tooltip remove"><i class="ti-trash"></i>Delete</a> </li> </ul></td>' +
                '</tr></tbody > ');
        }

}

//----------------------table2--------------------------//
function fillpaymenttable1(data) {
    //Interest Amount Only
     var int = $('#txtintramt').val();
    if ($('#txtintramt').val()) {
            var v_penalty, v_penval;
            $('#divTblInterest').show();
            if ($("#tblInterestOnly tr").length == 1) {
                $("#tblInterestOnly").empty();
                //$('#tblInterestOnly').append('<thead class="bg-success text-white"><tr><th scope="col">Date of payment</th><th scope="col">Due date</th> <th  scope="col">Penalty if any</th><th scope="col">Penalty %</th><th scope="col" style="display:none">Principle Amt</th><th scope="col">Interest Amt</th><th scope="col">Delete</th></tr></thead>');
                $('#tblInterestOnly').append('<thead class="bg-success text-white"><tr><th scope="col">Date of payment</th><th scope="col">Due date</th><th scope="col" style="display:none">Principle Amt</th><th scope="col">Interest Amt</th><th scope="col">Delete</th></tr></thead>');
            }

            //if ($('#chkloanacc').prop('checked')) {
            //    v_penalty = 'PENALTY';
            //    v_penval = 1;
            //}
            //else {
            //    v_penalty = 'NO PENALTY';
            //    v_penval = 0;
            //}
            //alert("hooi");
            $('#tblInterestOnly').append('<tbody><tr>' +
                //'<td style="display:none">' + $('#ddlselprj').val() + '</td>' +
                //'<td>' + $('#ddlselactivitystageact').val() + '</td>' +
                //'<td style="display:none">' + $('#ddlselsubactivitystage').val() + '</td>' +
                '<td>' + $('#txtdateofpay').val() + '</td>' +
                '<td>' + $('#txtduedate').val() + '</td>' +
                //'<td>' + v_penalty + '</td>' +
                //'<td>' + $('#txtpenalty').val() + '</td>' +

                //'<td>' + $("#ddlselprj option:selected").text() + '</td>' +
                //'<td>' + $("#ddlselactivitystageact option:selected").text() + '</td>' +
                //'<td>' + $("#ddlselsubactivitystage option:selected").text() + '</td>' +     
                '<td style="display:none">' + $('#txtprinamt').val() + '</td>' +
                '<td>' + $('#txtintramt').val() + '</td>' +
                //'<td style="display:none">' + v_penval + '</td>' +
                '<td style="width:3%;"><ul><li><a href="javascript:void(0);" title="Delete" class="bs-tooltip remove"><i class="ti-trash"></i>Delete</a> </li> </ul></td>' +
                '</tr></tbody > ');
        }
    
}
function selection() {
   
    $('#txtdateofpay').val('');
    $('#txtduedate').val('');
    $('#txtprinamt').val('');
    $('#txtintramt').val('');
    PricipleAmtWords.innerHTML = '';
    IntAmtWords.innerHTML = '';

}
function ConfirmNcd() {
    var Data, itmdata, dateval, itmdatachild, MainAcc, SubAcc, LoanBal, Loanamnt, fundTfrMain, fundTfrSub;
    Data = '';
    itmdata = '';
    LoanBal = '';
    var tblAccntData = "";
    if (!validConfirm()) {
        return false;
    }
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
            
            itmdata = itmdata + i + '££' + table.rows[i].cells[1].innerHTML + '£' + table.rows[i].cells[0].innerHTML + '£' + table.rows[i].cells[2].innerHTML + '£2£' + '£5æ';
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
            
            itmdata = itmdata + i + '££' + table.rows[i].cells[1].innerHTML + '£' + table.rows[i].cells[0].innerHTML + '£' + table.rows[i].cells[3].innerHTML + '£1£' +'£5æ';
            //srNo-v_dt5(1)£FromDate-v_dt5(2)£toDate-v_dt5(3)£PaymentDate-v_dt5(4)£Amount-v_dt5(5)£INST_TYPE-v_dt5(6)£PenaltyStatus-v_dt5(7)£PenaltyAmount-v_dt5(8)£PAY_FREQUENCY-v_dt5(9)
        }
    }
    itmdata = itmdata + '¥' + 1;

    if ($("[id*=hdnLoanMainAcc]").val().split("-", 1) == "") {
        ModelPopWarning("Please select Loan Main Ledger");
        return false;
    }
    else {
        MainAcc = $("[id*=hdnLoanMainAcc]").val().split("-", 1);
    }
    SubAcc = $("[id*=hdnLoanSubAcc]").val().split("-", 1);

    var raterm = "";
    var hedgeType = "";
    var usdamt = "";
    var inrrate = "";
    var publicissueseries = "";
    if ($('#ddlCategory').val() == '5') {
        raterm = $('#txtRateTerm').val();
        hedgeType = $('#txtHedgeType').val();
        usdamt = $('#txtUsdAmt').val();
        inrrate = $('#txtInrRate').val();
    }
    else {
        raterm = "";
        hedgeType = "";
        usdamt = "";
        inrrate = "";
    }
    if ($('#ddlSubCat').val() == '12') {
        publicissueseries = $('#txtPublicIssueSeries').val();
    }
    //+ 'µ' + raterm + 'µ' + hedgeType + 'µ' + usdamt + 'µ' + inrrate
    //Data = $("[id*=hdBranchId]").val() + 'µ' + $("[id*=hdFirmId]").val() + 'µ' + $('#ddlFund').val().split("æ")[1] + 'µ' + Loanamnt + 'µ' + inttype1 + 'µ' + $('#txtintrate').val() + 'µ' + $('#txttenure').val() + 'µ' + $('#txtAvailmentDate').val() + 'µ' + $('#txtlonagree').val() + 'µ' + modpay + 'µ' + MainAcc + 'µ' + SubAcc + 'µ' + fundTfrMain + 'µ' + fundTfrSub + 'µ' + dateval + 'µ' + $("[id*=hdUserId]").val() + 'µ' + repay + 'µ' + LoanBal + 'µ' + raterm + 'µ' + tblAccntData;

    Data = $("[id*=hdBranchId]").val() + 'µ' + $("[id*=hdFirmId]").val() + 'µ' + $("#ddlCatgry").val() + "µ" + $("#ddlsSubCat").val() + "µ" + $("#ddlFiTyp").val() + "µ" + $("#ddlFInst").val() + "µ" + publicissueseries + "µ" + $('#txtIsinNo').val() + "µ" + $('#txtRating').val() + "µ" + $('#txtloanamt').val() + "µ" + $('#txtintrate').val() + "µ" + $('#ddlintresttype').val() + "µ" + $('#txtAllotmentDate').val() + "µ" + $('#txtTenure').val() + "µ" + $('#txtMaturityDate').val() + "µ" + $('#txtMatAmt').val() + 'µ' + raterm + 'µ' + hedgeType + 'µ' + usdamt + 'µ' + inrrate + 'µ' + MainAcc + 'µ' + SubAcc + 'µ' + $("[id*=hdUserId]").val();

    $.ajax({
        type: "post",
        contentType: "application/json; charset=utf-8",
        url: "NcdBondAvailment.aspx/ConfirmNcd",
        data: "{typ:'INSERTNEWNCDBOND',itmDtl:'" + Data + "',data:'" + itmdata + "'}",
        dataType: "json",
        success: function (Result) {
            // alert('got this one');
            alert(Result.d);

            window.open('NcdBondAvailment.aspx', '_self');

        }
    });

}
function validConfirm() {
    if ($('#ddlCategory').val() == '-1') {
        ModelPopWarning("Select Fund Category ...!!!");
        $('#ddlCategory').focus();
        return false;
    }

    else if ($('#ddlSubCat').val() == '-1') {
        ModelPopWarning("Select Fund Sub Category ...!!!");
        $('#ddlSubCat').focus();
        return false;
    }
    var SubCat = $("#ddlSubCat").val();
    if (SubCat == '2') {
        if ($('#txtPublicIssueSeries').val() == '') {
            ModelPopWarning("Enter Public Issue Series...!!!");
            $('#txtPublicIssueSeries').focus();
            return false;
        }
    }
    else if(SubCat == '12') {
        if ($('#txtHedgeType').val() == '') {
            ModelPopWarning("Enter Hedging Type...!!!");
            $('#txtHedgeType').focus();
            return false;
        }
        if ($('#txtUsdAmt').val() == '') {
            ModelPopWarning("Enter Amount in USD...!!!");
            $('#txtUsdAmt').focus();
            return false;
        }
        if ($('#txtInrRate').val() == '') {
            ModelPopWarning("Enter Conversion Rate INR...!!!");
            $('#txtInrRate').focus();
            return false;
        }
    }
    else {
        if ($('#ddlFi').val() == '-1') {
            ModelPopWarning("Select Financial Institution ...!!!");
            $('#ddlFi').focus();
            return false;
        }
    }
    if ($('#txtIsinNo').val() == '') {
        ModelPopWarning("Enter ISIN Number...!!!");
        $('#txtIsinNo').focus();
        return false;
    }
    if ($('#txtRating').val() == '') {
        ModelPopWarning("Enter Rating...!!!");
        $('#txtRating').focus();
        return false;
    }
    if ($('#txtloanamt').val() == '') {
        ModelPopWarning("Enter Amount...!!!");
        $('#txtloanamt').focus();
        return false;
    }
    if ($('#txtintrate').val() == '') {
        ModelPopWarning("Enter Interest Rate...!!!");
        $('#txtintrate').focus();
        return false;
    }
    if ($('#ddlintresttype').val() == '-1') {
        ModelPopWarning("Select Interest Method ...!!!");
        $('#ddlintresttype').focus();
        return false;
    }
    if ($('#txtAllotmentDate').val() == '') {
        ModelPopWarning("Select Allottement Date...!!!");
        $('#txtAllotmentDate').focus();
        return false;
    }
    if ($('#txtTenure').val() == '') {
        ModelPopWarning("Enter Tenure...!!!");
        $('#txtTenure').focus();
        return false;
    }
    if ($('#txtMatAmt').val() == '') {
        ModelPopWarning("Enter Maturity Amount...!!!");
        $('#txtMatAmt').focus();
        return false;
    }
    return true;
}