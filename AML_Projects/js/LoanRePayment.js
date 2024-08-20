$(window).on('load', function () { 
    //IntrestPrinciple GetMainAcc();
    $("#tblPrincpleIntDtl").empty();
    $("#tblPaymentDtl").empty();
    clear();
    $("#txtTotalAmount").val(0);
    $("#txt_tot").val(0);
    TotalAmountWords.innerHTML = '';

    $('#rbtInterest').prop('checked', false);
    $('#rbtPrinciple').prop('checked', false);

    $("#divPrincInter").hide();
    
    $("#divtblPrincpleIntDtl").hide();
    $("#divAddAccount").hide();
    $("#divTotal").hide();
    var IRate = 0;
});
function CPOther() {
    if ($("#rbtCp").prop("checked")) {
        $("#divPrincInter").hide();
        IntrestPrinciple();
    }
    else if ($("#rbtOther").prop("checked") == true) {
        $('#rbtInterest').prop('checked', false);
        $('#rbtPrinciple').prop('checked', false);
        $("#tblPrincpleIntDtl").empty();
        $("#tblPaymentDtl").empty();
        clear();
        $("#txtTotalAmount").val(0);
        $("#txt_tot").val(0);
        TotalAmountWords.innerHTML = '';
        $("#divtblPrincpleIntDtl").hide();
        $("#divAddAccount").hide();
        $("#divTotal").hide();
        $("#divPrincInter").fadeIn();
    }
}
function clear() {
    $("#txtLoanAcc").val('');
    $("#txtLoanSubAcc").val('');
    $("#txtPayAmount").val('');
    
    LoanAccName.innerHTML = '';
    LoanSubAccName.innerHTML = '';
    AmtWords.innerHTML = '';

    $("[id*=hdnLoanMainAcc]").val('');
    $("[id*=hdnLoanSubAcc]").val('');
}
function IntrestPrinciple() {
    var intPrnc, FundTyp;
   // FundTyp = $("#ddlFundTypRe").val();
    //if ($("#chkFundCat").prop("checked") == true) {
    //    FundTyp = '3';
    //}
    //else {
    //    FundTyp = '1';     
    //}
 
    if ($("#rbtCp").prop("checked")) {
        FundTyp = '3';
        $("#tblPrincpleIntDtl").empty();
        $("#tblPaymentDtl").empty();
        $("#txtTotalAmount").val(0);
        $("#txt_tot").val(0);
        $("#divtblPrincpleIntDtl").fadeIn();
        $("#divAddAccount").fadeOut();
        $("#divTotal").fadeIn();
        intPrnc = "GetIntPrncRePaymentTbl";
    }
    else {
        FundTyp = '1';     
        if ($("#rbtInterest").prop("checked")) {
            IRate = 0;
            //if ($("#chkFundCat").prop("checked") == true) {
            //    // $("#tblPrincpleIntDtl").empty();
            //    //  $("#tblPaymentDtl").empty();
            //    $("#txtTotalAmount").val(0);
            //    $("#txt_tot").val(0);
            //    $("#divtblPrincpleIntDtl").fadeIn();
            //    $("#divAddAccount").fadeOut();
            //    $("#divTotal").fadeIn();
            //    $("#DivTotalAmnt").fadeOut();
            //    intPrnc = "GetIntRePaymentTbl";
            //}
            //else {
            $("#tblPrincpleIntDtl").empty();
            $("#tblPaymentDtl").empty();
            $("#txtTotalAmount").val(0);
            $("#txt_tot").val(0);
            $("#divtblPrincpleIntDtl").fadeIn();
            $("#divAddAccount").fadeIn();
            $("#divTotal").fadeIn();
            intPrnc = "GetIntRePaymentTbl";
            //}
        }
        else if ($("#rbtPrinciple").prop("checked") == true) {
            IRate = 0;
            //if ($("#chkFundCat").prop("checked") == true) {
            //    $("#tblPrincpleIntDtl").empty();
            //    $("#tblPaymentDtl").empty();
            //    $("#txtTotalAmount").val(0);
            //    $("#txt_tot").val(0);
            //    $("#divtblPrincpleIntDtl").fadeIn();
            //    $("#divAddAccount").fadeOut();
            //    $("#divTotal").fadeIn();
            //    $("#DivTotalAmnt").fadeOut();
            //    intPrnc = "GetPrncRepaymnt";
            //}
            //else {
            $("#tblPrincpleIntDtl").empty();
            $("#tblPaymentDtl").empty();
            $("#txtTotalAmount").val(0);
            $("#txt_tot").val(0);
            $("#divtblPrincpleIntDtl").fadeIn();
            $("#divAddAccount").fadeIn();
            $("#divTotal").fadeIn();
            intPrnc = "GetPrncRepaymnt";
            //}
        }
        else {
            $("#tblPrincpleIntDtl").empty();
            $("#tblPaymentDtl").empty();
            $("#txtTotalAmount").val(0);
            $("#txt_tot").val(0);            
            $("#divAddAccount").fadeOut();
        }
    }
    $.ajax({
        type: "post",
        contentType: "application/json; charset=utf-8",
        url: "LoanRePayment.aspx/getfunddata",
        data: "{typ:'" + intPrnc +"', val1:'"+ FundTyp +"'}",
        dataType: "json",
        success: function (Result) {
            //alert("comming"); 
            Result = Result.d;
            FillRepayTable(Result);
        },
        error: function (Result) {

        }
    });
}

function FillRepayTable(data) {
  //  $("#tblPrincpleIntDtl").empty();
  //  alert('come');
    var valData, valData1;
    var n = 0;
    valData = data.split('Θ');
    if (valData.length > 0) {
        $('#tblPrincpleIntDtl').empty();
        //alert($("#tblPrincpleIntDtl tr").length);
        //if ($("#tblPrincpleIntDtl tr").length == 1) {
        if ($("#rbtInterest").prop("checked")) {
            var Strt = '<thead class="bg-success text-white"><tr><th scope="col">Pay</th><th scope="col">LoanID</th><th scope="col">Installment</th><th scope="col">Financial_Institition</th><th scope="col">Pay_Type</th><th scope="col">Principle_Amount</th><th scope="col">Interest_Amount</th><th scope="col">From_Date</th><th scope="col">To_Date</th><th scope="col">Pay_Date</th><th scope="col">LoanAccount</th></tr></thead><tbody class="border border-dark">';
        }
        else {
            var Strt = '<thead class="bg-success text-white"><tr><th scope="col">Pay</th><th scope="col">LoanID</th><th scope="col">Installment</th><th scope="col">Financial_Institition</th><th scope="col">Pay_Type</th><th scope="col">Principle_Amount</th><th scope="col">Interest_Amount</th><th scope="col">From_Date</th><th scope="col">To_Date</th><th scope="col">Pay_Date</th><th scope="col">LoanAccount</th></tr></thead><tbody class="border border-dark">';
        }
        $('#tblPrincpleIntDtl').append(Strt);
        //}
    }
    for (i = 0; i < valData.length - 1; i++) {

        valData1 = valData[i].split('^');
        $('#tblPrincpleIntDtl').append('<tr>' +
            //'<td>' + $("#tableData tr").length + '</td>' +
            '<td><input class="form-control input-sm align-right " id="chkbx' + i + 'm" name="Paymnt" type="checkbox" onclick="addIntrst(' + i + ')"/></td>' +
            '<td>' + valData1[0] + '</td>' +
            '<td>' + valData1[1] + '</td>' +
            '<td>' + valData1[2] + '</td>' +
            '<td>' + valData1[3] + '</td>' +
            '<td>' + valData1[4] + '</td>' +
            '<td>' + valData1[5] + '</td>' +
            '<td>' + valData1[7] + '</td>' +
            '<td>' + valData1[8] + '</td>' +
            '<td>' + valData1[9] + '</td>' +
            '<td>' + valData1[6] + '</td>' +
            //'<td class="align-middle"><input type="checkbox" name="rdbPo' + i + '" data-toggle="collapse"  id="ckkbx' + valData1[0] + '"/></td>' + 
            //'<td>' + $("#ddlselprj option:selected").text() + '</td>' +
           // '<td style="display:none;>' + valData1[9] + '</td>' + 
            '<td><input id="hdn' + i + '" type="hidden" value="' + valData1[9] + '"/></td>' +

            '</tr> </tbody>');

    }
 }

function addIntrst(i) { 
   
    var table;
    var tot = 0;
    if ($("#txt_tot").val() == "") {
        tot = 0;
    }
    else {
        tot = parseFloat($("#txt_tot").val());
    }

    if ($("#rbtCp").prop("checked")) {
        if ($("#chkbx" + i +"m").prop("checked")) {
            var j = i + 1;
            table = document.getElementById('tblPrincpleIntDtl');
            tot = tot + parseFloat(table.rows[j].cells[5].innerText) + parseFloat(table.rows[j].cells[6].innerText);
        }
        else {
            var j = i + 1;
            table = document.getElementById('tblPrincpleIntDtl');
           
            tot = tot - parseFloat(table.rows[j].cells[5].innerText) - parseFloat(table.rows[j].cells[6].innerText);
        }
        $("#txt_tot").val(tot);
        $("#txtTotalAmount").val(tot);
    }
    else {
        if ($("#chkbx" + i +"m").prop("checked")) {
            var j = i + 1;
            table = document.getElementById('tblPrincpleIntDtl');
            tot = tot + parseFloat(table.rows[j].cells[5].innerText) + parseFloat(table.rows[j].cells[6].innerText);
        }
        else {
            var j = i + 1;
            table = document.getElementById('tblPrincpleIntDtl');
            tot = tot - parseFloat(table.rows[j].cells[5].innerText) - parseFloat(table.rows[j].cells[6].innerText);
        }
        $("#txt_tot").val(tot);
        //$("#txtTotalAmount").val(tot);
    }
   
   
   // alert($("#txt_tot").val());
 }

//function GetMainAcc() {
//       var QueryString = "GetMainLedegRepymnt";
//    $.ajax({
//        type: "POST",
//        contentType: "application/json; charset=utf-8",
//        url: "LoanRePayment.aspx/getMainLedgr",
//        data: "{QueryString:'" + QueryString + "'}",
//        dataType: "json",
//        success: function (Result) {
//            $('#ddl_MianLdgRepy').empty();
//            $('#ddl_MianLdgRepy').append($("<option></option>").val("-1").html("Select Account Number "));
//            $.each(Result.d, function (data, value) {
//                $('#ddl_MianLdgRepy').append($("<option></option>").val(value.Id).html(value.Id).html(value.Name));
//            })
//        },
//        error: function (Result) {
//            alert(Result);
//        }
//    });
//}

//function GetSubAcc() {
//          var QueryString = "GetSubAccRepymnt";
//    var InputString = $("#ddl_MianLdgRepy").val();
//      $.ajax({
//        type: "POST",
//        contentType: "application/json; charset=utf-8",
//        url: "LoanRePayment.aspx/getSubLedgr",
//        data: "{QueryString:'" + QueryString + "',input:'" + InputString + "'}",
//        dataType: "json",
//        success: function (Result) {
//            if (Result.d.length > 0) {
//                $("#ShwSub").fadeIn();
//                $('#ddl_SuBAccnt').empty();
//                $('#ddl_SuBAccnt').append($("<option></option>").val("-1").html("Select Sub Account Number "));
//                $.each(Result.d, function (data, value) {
//                    $('#ddl_SuBAccnt').append($("<option></option>").val(value.Id).html(value.Id).html(value.Name));
//                })
//            }
//            else {
//                $("#ShwSub").fadeOut();
//            }
//        },
//        error: function (Result) {
//            alert(Result);
//        }
//    });
//}
//function getAmount() {
//    var InputString = $("#ddl_SuBAccnt").val();
//       $.ajax({
//        type: "POST",
//        contentType: "application/json; charset=utf-8",
//        url: "LoanRePayment.aspx/GetAmonut",
//        data: "{QuertStr:'GetLoanAmountRepy',input:'" + InputString + "'}",
//        dataType: "json",
//        success: function (Result) {
//            $("#txtPayAmount").val(Result.d);
//        },
//        error: function (Result) {
//            alert(Result.d);
//        }
//    });
//}
function addAmount() {
          //var table = document.getElementById('tblPaymentDtl');
    var ToTAmnt = 0;
    //if ($("#ddl_MianLdgRepy").val() == -1) {
    //    alert("Please select Main Account");
    //    return false;
    //}
    //else if ($("#ddl_SuBAccnt").val() == -1) {
    //    alert("Please select Sub Account");
    //    return false;
    //}
    if ($("[id*=hdnLoanMainAcc]").val().split("-", 1) == "") {
        ModelPopWarning("Select Main Account...!!!");
        return false;
    }

    if ($("#txtPayAmount").val() == "") {
        ModelPopWarning("Enter Amount...!!!");
        //alert("Please Enter Amount");
        $('#txtPayAmount').focus();
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
            
            clear();
        }
    });
}
function SubCheck(callback) {
    var str = '0';
    var subdata;
  
    $("[id*=hdnSubAccStatus]").val(0);
    var InputString = $("[id*=hdnLoanMainAcc]").val().split("-", 1) + "µ" + $("#txtLoanSubAcc").val();
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
   
    for (i = 1; i < $("#tblPaymentDtl tr").length ; i++) {
        if (($("[id*=hdnLoanMainAcc]").val().split("-", 1) == table.rows[i].cells[0].innerText) && ($("#txtLoanSubAcc").val() == table.rows[i].cells[1].innerText)) {
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
                '<td class="align-center">' + $("[id*=hdnLoanMainAcc]").val().split("-", 1) + '</td>' +
                '<td class="align-center">' + $("#txtLoanSubAcc").val() + '</td>' +
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


//function PutRepayment() {
//    var table = document.getElementById('tblPrincpleIntDtl');
//    var InputDta = table.rows[i + 1].cells[0].innerText + "µ" +
//}
$(document).on('click', '.remove', function () {
    
    $(this).closest('tr').remove();
    DeleteAcc();
    if ($("#tblPaymentDtl tr").length == 1) {
        $("#tblPaymentDtl").empty();
    }
       return false;
});

function RepaymentDtls() {
    var tblAmntData = "";
    var tblAccntData = "";
    var table = document.getElementById('tblPrincpleIntDtl');
    var tableData = document.getElementById('tblPaymentDtl');
    var paytype = 0;

    if (!($("#rbtCp").prop("checked"))) {
        if ($("#rbtInterest").prop("checked") == false && $("#rbtPrinciple").prop("checked") == false) {
            //alert("Please Select Option");
            ModelPopWarning("Please Select an Option ..!!!");
            return false;
        }
        if (($("#rbtInterest").prop("checked"))) {
            paytype = 1;
        }
        if (($("#rbtPrinciple").prop("checked"))) {
            paytype = 2;
        }
        
        
        //if ($("#txt_tot").val() != $("#txtTotalAmount").val()) {
        //    //alert("Repayment Amount Is not equal ..");
        //    ModelPopWarning("Repayment Amount Is not equal ..!!!");
        //    return false;
        //}
        //else 
        if (parseInt($("#txtTotalAmount").val())>0){
            for (i = 1; i < $("#tblPrincpleIntDtl tr").length; i++) {
                var j = i - 1;
                //if ($('[id*=chkbx' + j + ']:checked')) {
                if ($('[id*=chkbx' + j + 'm]').is(':checked')) {
                    var dt = $('#hdn' + j).val();
                    //loan_id--amount--user--instllmentno
                    // var Strt = '<thead class="bg-success text-white"><tr><th scope="col">Pay</th > <th scope="col">LoanID</th> <th scope="col">Installment</th> <th scope="col">Financial_Institition</th> <th scope="col">Pay_Type</th> <th scope="col">Interest_Amount</th> <th scope="col">From_Date</th> <th scope="col">To_Date</th> <th scope="col">Pay_Date</th> <th scope="col">LoanAccount</th></tr ></thead > <tbody class="border border-dark">';
                    if (paytype == 1) {
                        tblAmntData = tblAmntData + table.rows[i].cells[1].innerText + "µ" + table.rows[i].cells[6].innerText + "µ" + $("[id*=hdUserId]").val() + "µ" + table.rows[i].cells[2].innerText + "µ" + $('#hdn' + j).val() + "µ" + paytype + "¥";
                    }
                    else if (paytype == 2){
                        tblAmntData = tblAmntData + table.rows[i].cells[1].innerText + "µ" + table.rows[i].cells[5].innerText + "µ" + $("[id*=hdUserId]").val() + "µ" + table.rows[i].cells[2].innerText + "µ" + $('#hdn' + j).val() + "µ" + paytype + "¥";
                    }
                    
                }
            }
            if (tblAmntData == "") {
                //alert("Please select atleast one Loan");
                ModelPopWarning("Please select atleast one Loan ..!!!");
                return false;
            }
            var valTbl, valData1;
            var n = 0;
            valTbl = tblAmntData.split('¥');
            if (valTbl.length > 2) {
                if ($("#txt_tot").val() != $("#txtTotalAmount").val()) {
                    ModelPopWarning("Repayment Amount Is not equal ..!!!");
                    return false;
                }
            }

            for (j = 1; j < $("#tblPaymentDtl tr").length; j++) {
                //$('#tblPaymentDtl').append('<thead class="bg-success text-white"><tr><th scope="col">Main Account</th><th scope="col">Sub Account</th> <th class="align-center">Amount</th><th scope="col">Delete</th></tr></thead><tbody>');
                tblAccntData = tblAccntData + tableData.rows[j].cells[0].innerText + "µ" + tableData.rows[j].cells[1].innerText + "µ" + tableData.rows[j].cells[2].innerText + "µ" + $("[id*=hdUserId]").val() + "¥";
            }
        }
    }
    else {   //CP
        var PymntAmnt = 0;
        for (i = 1; i < $("#tblPrincpleIntDtl tr").length; i++) {
            var j = i - 1;
            if ($('[id*=chkbx' + j + 'm]').is(':checked')) {
                tblAmntData = tblAmntData + table.rows[i].cells[1].innerText + "µ" + table.rows[i].cells[5].innerText + "µ" + $("[id*=hdUserId]").val() + "µ" + table.rows[i].cells[2].innerText + "µ" + $('#hdn' + j).val() + "µ0" + "¥";

            }
        }
        if ($("#rbtPrinciple").prop("checked") == true) {
            tblAccntData = 32100 + "µ" + 40599 + "µ" + $("#txt_tot").val() + "µ" + $("[id*=hdUserId]").val() + "¥";
        }
        else if ($("#rbtInterest").prop("checked") == true) {
            tblAccntData = 32100 + "µ" + 40599 + "µ" + $("#txt_tot").val() + "µ" + $("[id*=hdUserId]").val() + "¥";
        } else {
            tblAccntData = 32100 + "µ" + 40599 + "µ" + $("#txt_tot").val() + "µ" + $("[id*=hdUserId]").val() + "¥";
        }
    }
    //alert(tblAmntData);
      // alert(tblAccntData);
    //CPCP082200186002µ5600000µ19675µ1µ01-Mar-2020¥

        if (tblAmntData == "") {
            //alert("Please select atleast one Loan");
            ModelPopWarning("Please select atleast one Loan ..!!!");
            return false;
        }
 
        $.ajax({
            type: "POST",
            contentType: "application/json; charset=utf-8",
            url: "LoanRePayment.aspx/AddRepayment",
            data: "{input:'" + tblAmntData + "',val:'" + tblAccntData + "'}",
            dataType: "json",
            success: function (Result) {
                alert(Result.d);
                window.open('LoanRePayment.aspx', '_self');
            },
            error: function (Result) {
                alert(Result);
                window.open('LoanRePayment.aspx', '_self');
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
