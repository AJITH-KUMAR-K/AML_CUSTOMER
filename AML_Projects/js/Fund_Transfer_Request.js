$(window).on('load', function () {
   
    $("#tblPrincpleIntDtl").empty();
    $("#tblPaymentDtl").empty();
    clear();
    $("#txtTotalAmount").val(0);
    $("#txt_tot").val(0);
    TotalAmountWords.innerHTML = '';

    $("#divAddAccount1").hide();
    $("#divTotal").hide();
    $("#divaddbutton").hide();
    //var IRate = 0;
   // alert('hai');
    getbank();
   
});

function getbank() {
    $("#ddl_bank").empty();
    $("#ddl_bank1").empty();
    $("#tblPrincpleIntDtl").empty();
    $("#tblPaymentDtl").empty();
    $("#divAddAccount1").hide();
    $("#divTotal").hide();
    $("#divaddbutton").hide();
        //clear();
       
        $.ajax({
            type: "post",
            contentType: "application/json; charset=utf-8",
            url: "Fund_Transfer_Request.aspx/getFillData",
            data: "{typ:'GetFundFromBank', val1 :'1'}",
            dataType: "json",
            success: function (Result) {
                Result = Result.d;
                $('#ddl_bank').empty();
                $('#ddl_bank1').empty();
                $.each(Result, function (key, value) {
                    $('#ddl_bank').append($("<option></option>").val(value.id).html(value.name));
                    $('#ddl_bank1').append($("<option></option>").val(value.id).html(value.name));
                });
            }
        });
}

//--------------fill fund source-------------------//

function getbranch() {
    //clear();
    //clearRepay();
  
    $("#ddl_branch").empty();    
    $("#ddl_accnt").empty();
    $("#tblPrincpleIntDtl").empty();
    $("#tblPaymentDtl").empty();
    $("#divAddAccount1").hide();
    $("#divTotal").hide();
    $("#divaddbutton").hide();


    $.ajax({
        type: "post",
        contentType: "application/json; charset=utf-8",
        url: "Fund_Transfer_Request.aspx/getFillData",
        data: "{typ:'GetFundFromBankBranch', val1 :'" + $('#ddl_bank').val() + "'}",
        dataType: "json",
        success: function (Result) {
            Result = Result.d;
            $.each(Result, function (key, value) {
                $('#ddl_branch').append($("<option></option>").val(value.id).html(value.name));
            });
        }
    });

}


function getaccount() {
  
    $("#ddl_accnt").empty();   
    $("#tblPrincpleIntDtl").empty();
    $("#tblPaymentDtl").empty();
    $("#divAddAccount1").hide();
    $("#divTotal").hide();
    $("#divaddbutton").hide();
    var s = $('#ddl_bank').val() + "µ" + $('#ddl_branch').val()
   // $("#ddl_branch").empty();
    $.ajax({
        type: "post",
        contentType: "application/json; charset=utf-8",
        url: "Fund_Transfer_Request.aspx/getFillData",
        data: "{typ:'GetFundFromaccount', val1 :'" + s + "'}",
        dataType: "json",
        success: function (Result) {
            Result = Result.d;
            $.each(Result, function (key, value) {
                $('#ddl_accnt').append($("<option></option>").val(value.id).html(value.name));
            });
        }
    });

}


function addAmount() {
    //var table = document.getElementById('tblPaymentDtl');
    var ToTAmnt = 0;
    if ($("#ddl_bank1").val() == -1) {
        ModelPopWarning("Please select Bank...!!!");
        return false;
    }
    else if ($("#ddl_branch1").val() == -1) {
        ModelPopWarning("Please select Branch...!!!");
        return false;
    }

    else if ($("#ddl_accnt1").val() == -1) {
        ModelPopWarning("Please select Account...!!!");
        return false;
    }

    else if ($("#txtPayAmount").val() == "") {
        ModelPopWarning("Enter Amount...!!!");
        $('#txtPayAmount').focus();
        return false;
    }
    else { 

        AddToTable();
        clear();
        $("#ddl_branch1").empty();
        $("#ddl_accnt1").empty();  
        //$("#ddl_bank1").value('0'); 
        $("select#ddl_bank1").prop('selectedIndex', 0);

    }

}

function AddToTable() {

    var table = document.getElementById('tblPaymentDtl'); 
    var len = $("#tblPaymentDtl tr").length;
    if (len > 1) {
        var acc = table.rows[1].cells[1].innerText;
    }

    for (i = 1; i < $("#tblPaymentDtl tr").length; i++) {
       
        if (($("#ddl_accnt1 option:selected").text() == table.rows[i].cells[2].innerText)) {
           
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

        $('#tblPaymentDtl').append('<thead class="bg-success text-white"><tr><th scope="col">Bank</th><th scope="col">Branch</th><th scope="col">Account No</th> <th class="align-center">Amount</th><th scope="col">Delete</th></tr></thead><tbody>');

    }
    $('#tblPaymentDtl').append('<tr>' +
        '<td class="align-center">' + $("#ddl_bank1 option:selected").text() + '</td>' +
        '<td class="align-center">' + $("#ddl_branch1 option:selected").text() + '</td>' +
        '<td class="align-center">' + $("#ddl_accnt1 option:selected").text() + '</td>' +
        '<td class="align-center" style="display:none">' + $("#ddl_accnt1").val() + '</td>' +
        '<td class="align-center">' + $("#txtPayAmount").val() + '</td>' +
        //'<td class="align-center"><input class="btn-prop input-md align-center " style="width:100px" id="btnDelt" type="button" value="Delete"/ onclick="DeleteAcc()"></td>' +
        //'<td class="align-center"><ul class="table-controls"><li><a href="javascript:void(0);" class="bs-tooltip remove" title="Delete" ><i class="icon-trash"></i></a></li></ul></td>' +
        '<td style="width:3%;"><ul><li><a href="javascript:void(0);" title="Delete" class="bs-tooltip remove"><i class="ti-trash"></i>Delete</a> </li> </ul></td>' +

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


function clear() {
    
    $("#txtPayAmount").val('');   
    AmtWords.innerHTML = '';
    $("[id*=hdnLoanMainAcc]").val('');
    $("[id*=hdnLoanSubAcc]").val('');
}

$(document).on('click', '.remove', function () {

    $(this).closest('tr').remove();
    DeleteAcc();
    if ($("#tblPaymentDtl tr").length == 1) {
        $("#tblPaymentDtl").empty();
    }
    return false;
});


function frmExit() {
    window.open("index.aspx", "_self");
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


function RepaymentDtls() {
    var tblAmntData = "";
    var tblAccntData = "";   
    tblAmntData = $("#ddl_accnt").val() + "¥" + $("#txtTotalAmount").val();
    var tableData = document.getElementById('tblPaymentDtl');
    var paytype = 0;

    
            for (j = 1; j < $("#tblPaymentDtl tr").length; j++) {
            tblAccntData = tblAccntData + tableData.rows[j].cells[0].innerText + "µ" + tableData.rows[j].cells[3].innerText + "µ" + tableData.rows[j].cells[4].innerText + "¥";
            }
        
    
 
    if (tblAccntData == "") {
      
        ModelPopWarning("Please Add the Account Details ..!!!");
        return false;
    }

    $.ajax({
        type: "POST",
        contentType: "application/json; charset=utf-8",
        url: "Fund_Transfer_Request.aspx/AddRepayment",
        data: "{input:'" + tblAmntData + "',val:'" + tblAccntData + "'}",
        dataType: "json",
        success: function (Result) {
            alert(Result.d);
            window.open('Fund_Transfer_Request.aspx', '_self');
        },
        error: function (Result) {
            alert(Result);
            window.open('Fund_Transfer_Request.aspx', '_self');
            //$("#rbtInterest").prop('checked', false);
            //$("#rbtPrinciple").prop('checked', false);
            //$("#tblPrincpleIntDtl").empty();
            //$("#tblPaymentDtl").empty();
            //$("#txt_tot").val('');
            //$("#txtTotalAmount").val('');
            //$("#ddl_MianLdgRepy").val('-1');
            //$("#ddl_SuBAccnt").val('-1');
            //$("#txtPayAmount").val('');
        }
    });
}


function Getdetailstest(data) {
    alert(data);
}





function GetTable() {
   
    $.ajax({
        type: "post",
        contentType: "application/json; charset=utf-8",
        url: "ApproveLoanAvailment.aspx/getTableData",
        data: "{typ:'GetFundData', val1:'" + $('#ddl_accnt').val() + "',data:''}",
        dataType: "json",
        success: function (Result) {        
            Result = Result.d;
            FillRepayTable(Result);
            
        },
        error: function (Result) {
        }
    });
}



   


function FillRepayTable(data) {

  $("#tblPrincpleIntDtl").empty();  
    var valData, valData1;
    var n = 0;
    valData = data.split('Θ');
    if (valData.length > 0) {
        $('#tblPrincpleIntDtl').empty();
      
        var Strt = '<thead class="bg-success text-white"><tr><th scope="col">Bank Name</th><th scope="col">Branch Name</th><th scope="col">Account No</th><th scope="col">Ifsc code</th></tr></thead><tbody class="border border-dark">';
             $('#tblPrincpleIntDtl').append(Strt);
     
    }
    for (i = 0; i < valData.length - 1; i++) {

        valData1 = valData[i].split('µ');
        $('#tblPrincpleIntDtl').append('<tr>' +          
            '<td>' + valData1[0] + '</td>' +
            '<td>' + valData1[1] + '</td>' +
            '<td>' + valData1[2] + '</td>' +
            '<td>' + valData1[3] + '</td>' +  
            '</tr> </tbody>');

    }
    $("#divAddAccount").fadeIn();
    $("#divAddAccount1").fadeIn();
    $("#divaddbutton").fadeIn();
    $("#divTotal").fadeIn();
  
  
}



function getbranch1() {

    $("#ddl_branch1").empty();
    $("#ddl_accnt1").empty();   

    if ($("#tblPaymentDtl tr").length = 0) {
        $("#tblPaymentDtl").empty();
       
    }
   



    //clear();
    //clearRepay();
   
    //var s = $("#ddl_bank1 option:selected").text();
   // alert(s);
    //$("[id*=hdnLoanMainAcc1]").val(s);
    //var t = $("[id*=hdnLoanMainAcc1]").val();
   // alert(t);

    //$("#ddl_branch1").empty();
    //$("#ddl_accnt1").empty();
    //$("[id*=hdnLoanMainAcc]").val($('#ddl_bank1').val());
    ////$('#hdnLoanMainAcc').val() = 
   // alert($('#hdnLoanMainAcc').val());

    $.ajax({
        type: "post",
        contentType: "application/json; charset=utf-8",
        url: "LoanAvailment.aspx/getFillData",
        data: "{typ:'GetFundFromBankBranch', val1 :'" + $('#ddl_bank1').val() + "'}",
        dataType: "json",
        success: function (Result) {
            Result = Result.d;
            $.each(Result, function (key, value) {
                $('#ddl_branch1').append($("<option></option>").val(value.id).html(value.name));
            });
        }
    });

}


function getaccount1() {
    //clear();
    //clearRepay();

    $("#ddl_accnt1").empty();

    var s = $('#ddl_bank1').val() + "µ" + $('#ddl_branch1').val() + "µ" + $('#ddl_accnt').val();
    // $("#ddl_branch").empty();
    $.ajax({
        type: "post",
        contentType: "application/json; charset=utf-8",
        url: "LoanAvailment.aspx/getFillData",
        data: "{typ:'GetFundtoaccount', val1 :'" + s + "'}",
        dataType: "json",
        success: function (Result) {
            Result = Result.d;
            $.each(Result, function (key, value) {
                $('#ddl_accnt1').append($("<option></option>").val(value.id).html(value.name));
            });
        }
    });

}


