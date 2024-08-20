$(window).on('load', function ()
{
    LOANFILL();
   
    $("#txt_AgrmntDt").datepicker({
        dateFormat: 'dd/MM/yy',
        changeMonth: true,
        changeYear: true,
        stepMonths: true,
        todayHighlight: true,
        onSelect: function (dateText, inst) {

        }
    });
   
});


function LOANFILL() {
var QueryString = "USDLOANFILL";
    $.ajax({
        type: "post",
        contentType: "application/json; charset=utf-8",
        url: "UsdRateUpdation.aspx/getFillData",
        data: "{typ:'" + QueryString + "', val1 :''}",
        dataType: "json",
        success: function (Result) {
            Result = Result.d;
            $('#ddlloanid').empty();
            $('#ddlloanid').append($("<option></option>").val("-1").html("Select category "));
            $.each(Result, function (key, value) {

             $('#ddlloanid').append($("<option></option>").val(value.id).html(value.name));
         });
        }
    });
}

function getTableUsdDtls() {
    var QueryString = "getTableUSDDtls";
    var loanno = $('#ddlloanid').val();
   
    $.ajax({
        type: "post",
        contentType: "application/json; charset=utf-8",
        url: "UsdRateUpdation.aspx/getTableData",
        data: "{typ:'" + QueryString + "', val1:'" + $('#ddlloanid').val() + "',data:''}",
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
            usdfilltable(Result);
        },
        error: function (Result) {
        }
    });
}
function usdfilltable(data) {
    $("#USDdetailes").empty();
    var valData, valData1;
    var n = 0;
    valData = data.split('Θ');
    if ($("#USDdetailes tr").length == 0) {
        $('#USDdetailes').append('<thead class="bg-success text-white"><tr><th scope="col">Fund Type</th><th scope="col">Financial Institution</th><th scope="col">Fund ID</th><th scope="col">Doc ID</th><th scope="col">Amount in INR</th><th scope="col">Interest Rate</th><th scope="col">Tenure</th><th scope="col">Loan Date</th><th scope="col">Maturity Date</th><th scope="col">Repayment Date</th><th scope="col">Usd Amount</th><th scope="col">Usd Rate</th></tr></thead>');
    }
    for (i = 0; i < valData.length - 1; i++) {

        valData1 = valData[i].split('µ');
        $('#USDdetailes').append('<tbody><tr>' +
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
            '</tr> </tbody>');
      
    }
    var amount = valData1[10];
    var urate = valData1[11]
    var usdamt = valData1[4]
    $("#lblamount").text(amount);
    $("#lblusdamount").text(usdamt);
    $("#lblusdrate").text(urate);

}

function calulation()
{
    var rate = $('#txt_usdratenew').val();//usdrate
   
    var s = $("#lblamount").text();//amount
    var result = rate * s; //new amount
    $('#txt_amoulmnt').val(result.toFixed(2));//display newamount

    var usdamt = $("#lblusdamount").text();
    var difference = Math.round(result) - usdamt;

    $('#txt_exangelorg').val(difference.toFixed(2));
}

    function swap()
    {
        var usdamt = $("#lblusdamount").text();
        
        //alert("Enter USD Rate")
        $('#txt_usdratenews').show();
        $('#txt_amoulmnts').show();
        $('#txt_exangelorgs').show();
        $('#mtmrate').hide();
        $('#additional_interset').hide();

    }
function forward()
{
        //alert("Enter USD Rate")
   
        $('#txt_amoulmnts').show();
        $('#txt_exangelorgs').show();
    $('#mtmrate').show();
    $('#additional_interset').show();

    }
function exitPage()
{
        window.open("index.aspx", "_self");
}

function isNumber(evt, val1) {

    evt = (evt) ? evt : window.event;
    var charCode = (evt.which) ? evt.which : evt.keyCode;

    if (val1 == 0 && charCode == 46) {
        return false;

    } else if (val1 == 1 && charCode == 46) {
        var dec = val1.split('.');
        if (dec.length > 1 && charCode == 46) {
            return false;

        }
    }

    if (charCode == 37 || charCode == 39 || charCode == 46) {
        return true;

    }
    if ((charCode > 31 && charCode < 48) || charCode > 57) {
        return false;

    }
    return true;
}   
    function onlyNos(e, t)
    {

        var k;
        document.all ? k = e.keyCode : k = e.which;
        return ((k > 64 && k < 91) || (k > 96 && k < 123) || k == 8 || k == 32 || (k >= 48 && k <= 57) || k == 190 || k == 188);
}
function validateusd() 
{
    var gorl = 0;
    var hedge = 0;
    var date = $('#txt_AgrmntDt').val();
    var remark = $('#txt_remarks').val();
    var rate = $('#txt_usdratenew').val();
    var mtmrate = $('#txt_mtmrate').val();
    var mtmvalue = $('#txt_mtmvalue').val();

    if ($('#ddlloanid').val() == -1) {
        alert("Select Loan Id")
        return false;
    }
    if (date == "") {
        alert("Select Date");
        return false;
    }
    if ($("#radswap").prop("checked")) {
        hedge = 1;
    }
    if ($("#radforward").prop("checked")) {
        hedge = 2;
        }
    if (hedge == 0) {
        alert("Please Select Hedge Option")
        return false;
    }
    
    if (rate == "") {
        alert("please enter USD Rate");
        return false;
    }
       
    if ($("#radloss").prop("checked"))
    {
        gorl = 1;
    }
    if ($("#radgain").prop("checked")) {
        gorl = 2;
    }
    if (gorl == 0) {
        alert("Select Profit Or Loss")
        return false;
    }
    
    if (mtmvalue == "") {
        alert("please enter MTM value");
        return false;
    }  
     if ($("#radforward").prop("checked"))
    {
         
         if (mtmrate == "") {
             alert("please enter MTM Rate");
             return false;
         }
    }  
    if (remark == "") {
        alert("Please Enter your Remark");
        return false;
    }
        confirmusd();
   }

function confirmusd()
{
    var rtntype1 = "";
    var trnval1 = "";
    var rtntyp = "";
    var trnval = "";
    var rtntyp2 = "";
    var trnval2 = "";
    var rtntyp3 = "";
    var trnval3 = "";
    var lid = $('#ddlloanid').val();
    var doc = $('#ddlloanid').text();
    
    var Adate = $('#txt_AgrmntDt').val();
    var newusd = $('#txt_usdratenew').val();
    var amtinr = $('#txt_amoulmnt').val();
    var exlorg = $('#txt_exangelorg').val();
    var mtmvalue = $('#txt_mtmvalue').val();
    var mtmrate = $('#txt_mtmrate').val();
    var remark = $('#txt_remarks').val();
    if ($("#radswap").prop("checked")) {
        rtntype = 1;
        trnval = "swap";
    }
    else if ($("#radforward").prop("checked")) {
        rtntype = 2;
        trnval = "forward";

    }
   
    if ($("#radloss").prop("checked")) {
        rtntype1 = 1;
        trnval1 = "Loss";
    }
    else if ($("#radgain").prop("checked")) {
        rtntype1 = 2;
        trnval1 = "Gain";
    }
    var remark = $("#txt_remarks").val();
    var uid = $("[id*=hdUserId]").val();
    
    var data = Adate + 'µ' + newusd + 'µ' + amtinr + 'µ' + exlorg + 'µ' + mtmvalue + 'µ' + mtmrate + 'µ' + remark + 'µ' + trnval + 'µ' + rtntype1 + 'µ' + lid + 'µ' + uid + 'µ' + $("#txt_mtmrate1").val() + 'µ' + $("#txt_mtmrate2").val() + 'µ' + $("#txt_mtmrate3").val() + 'µ' + $("#txt_mtmrate4").val() + 'µ' + $("#txt_mtmrate5").val() + 'µ' + $("#txt_mtmrate6").val() + 'µ' + $("#txt_mtmvalue1").val() + 'µ' + $("#txt_mtmvalue2").val() + 'µ' + $("#txt_mtmvalue3").val() + 'µ' + $("#txt_mtmvalue4").val() + 'µ' + $("#txt_mtmvalue5").val() + 'µ' + $("#txt_mtmvalue6").val()   ;
   
  
    $.ajax({
        type: "POST",
        contentType: "application/json; charset=utf-8",
        url: "UsdRateUpdation.aspx/confirmdata",
        data: "{input:'" + data + "'}",
        dataType: "json",
        success: function (Result)
        {
            Result = Result.d.msg;         
            alert(Result);
            window.open('UsdRateUpdation.aspx', '_self');
        },
        error: function (Result) {
                 alert(Result);
        }
    });
}



