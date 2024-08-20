
$(window).on('load', function () {
   // IntrestPrinciple();
    Vefundfilltable();
    $("#Shwtable").hide();
});
//if ($("#RadIntrst").prop("checked")) {
    //    intPrnc = "GetIntRePaymentTbl";
    //}
    //else if ($("#RadPrncple").prop("checked")) {
    //    intPrnc = "GetPrncRepaymnt";
    //}
function IntrestPrinciple() {
    var intPrnc;
    if ($("#RadIntrst").prop("checked")) {
        $("#Shwtable").fadeIn();
        //alert("dfdf");
        intPrnc = "GetIntRePaymentTbl";
            }
    else if ($("#RadPrncple").prop("checked")) {
        $("#Shwtable").fadeIn();
        intPrnc = "GetPrncRepaymnt";
          }
   
    $.ajax({
        type: "post",
        contentType: "application/json; charset=utf-8",
        url: "LoanRePayment.aspx/getfunddata",
        data: "{typ:'" + intPrnc +"', val1:''}",
        dataType: "json",
        success: function (Result) {
            //alert("comming"); 

            Result = Result.d;
            Vefundfilltable(Result);
        },
        error: function (Result) {
        }
    });
}

function Vefundfilltable(data) {
  //  $("#funddetailes1").empty();
  //  alert('come');
    debugger;
    var valData, valData1;
    var n = 0;
    valData = data.split('Θ');    
    if (valData.length > 0) {
        $('#funddetailes1').empty();
        //alert($("#funddetailes1 tr").length);
        //if ($("#funddetailes1 tr").length == 1) {
        if ($("#RadIntrst").prop("checked")) {
            var Strt = '<thead class="bg-success text-white"><tr><th scope="col">Pay</th><th scope="col">LoanID</th><th scope="col">Installment</th><th scope="col">Financial_Institition</th><th scope="col">Interest_Amount</th><th scope="col">From_Date</th><th scope="col">To_Date</th><th scope="col">Pay_Date</th><th scope="col">LoanAccount</th></tr></thead><tbody class="border border-dark">';
        }
        else {
            var Strt = '<thead class="bg-success text-white"><tr><th scope="col">Pay</th><th scope="col">LoanID</th><th scope="col">Installment</th><th scope="col">Financial_Institition</th><th scope="col">Principle_Amount</th><th scope="col">From_Date</th><th scope="col">To_Date</th><th scope="col">Pay_Date</th><th scope="col">LoanAccount</th></tr></thead><tbody class="border border-dark">';
        }
        $('#funddetailes1').append(Strt);
        //}
    }



    for (i = 0; i < valData.length - 1; i++) {
        valData1 = valData[i].split('^');
        $('#funddetailes1').append('<tr>' +
            //'<td>' + $("#tableData tr").length + '</td>' +
            '<td><input class="form-control input-sm align-right "  id="chkbx' + i + '"  name="Paymnt" type="checkbox" onclick="addIntrst(' + i + ')"/></td>' +
            '<td>' + valData1[0] + '</td>' +
            '<td>' + valData1[1] + '</td>' +
            '<td>' + valData1[2] + '</td>' +
            '<td>' + valData1[3] + '</td>' +
            '<td>' + valData1[5] + '</td>' +
            '<td>' + valData1[6] + '</td>' +
            '<td>' + valData1[7] + '</td>' +
            '<td>' + valData1[4] + '</td>' +
          //'<td class="align-middle"><input type="checkbox" name="rdbPo' + i + '" data-toggle="collapse"  id="ckkbx' + valData1[0] + '"/></td>' + 
             //'<td>' + $("#ddlselprj option:selected").text() + '</td>' +
            //'<td style="display:none;>' + valData1[1] + '</td>' +      
            '</tr> </tbody>');

    }

}
var IRate = 0;
function addIntrst(i) {
    var table;
    if ($("#chkbx" + i).prop("checked")) {
         table = document.getElementById('funddetailes1');
        IRate = parseFloat(IRate) + parseFloat(table.rows[i + 1].cells[2].innerText);
    }
    else {
         table = document.getElementById('funddetailes1');
        IRate = parseFloat(IRate) - parseFloat(table.rows[i + 1].cells[2].innerText);
    }
   // alert(IRate);
    $("#txt_tot").val(IRate);
}
//function PutRepayment() {
//    var table = document.getElementById('funddetailes1');
//    var InputDta = table.rows[i + 1].cells[0].innerText + "µ" +
//}

function frmExit() {
    window.open("index.aspx", "_self");
}

