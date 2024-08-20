function frmExit() {
    window.open("../Index.aspx", "_self");
}
$(window).load(function () {
    getPaymntDtl();
    getIntrst();
});
//function getPaymntDtl() {
//    var QueryString="GetPaymnetDtls"
//    $.ajax({
//        type: "POST",
//        contentType: "application/json; charset=utf-8",
//        url: "LoanRePayment.aspx/GetPayDate",
//        data: "{QuerStr : '" + QueryString + "'}",
//        dataType: "json",
//        success: function (Result) {
//            $('#ddlPayDt').empty();
//            $('#ddlPayDt').append($("<option></option>").val("-1").html("Select Payment "));
//            $.each(Result.d, function (data, value) {
//                $('#ddlPayDt').append($("<option></option>").val(value.ID).html(value.Name));
//            })
//        },
//        error: function (Result) {
//            alert(Result);
//        }
//        });
//}
//function getFITableDtls() {
//      var InputString = $("#ddlPayDt").val();
//    var Querystring = "GetPymntTable";
//    $.ajax({
//        type: "POST",
//        contentType: "application/json; charset=utf-8",
//        url: "LoanRePayment.aspx/ShowPaymntTable",
//        data: "{QueryStr : '" + Querystring + "',input :'" + InputString + "'}",
//        dataType: "json",
//        success: function (Result) {
//            if (Result.d.length > 0) {
//                $('#tableLoanDtls').empty();
//                $("#tableLoanDtls").append('<thead>< tr ><th class="col-md-2">Loan ID</th> <th class="col-md-2">Source</th> <th class="col-md-2">Fund </th><th class="col-md-2">FI Type</th><th class="col-md-2">FI Name</th><th class="col-md-2">Interest</th><th class="col-md-2">Principle</th><th class="col-md-2">Penalty</th></tr ></thead><tbody>'
//                );
//                for (var i = 0; i < Result.d.length; i++) {
//                    $("#tableLoanDtls").append('<tr><td>' + Result.d[i].LoanId + '</td>' +
//                        '<td>' + Result.d[i].Src + '</td>' +
//                        '<td>' + Result.d[i].Sub + '</td>' +
//                        '<td>' + Result.d[i].fiCtg + '</td>' +
//                        '<td>' + Result.d[i].FI + '</td>' +
//                        '<td>' + Result.d[i].Inrst + '</td>' +
//                        '<td>' + Result.d[i].Prncpl + '</td>' +
//                        '<td>' + Result.d[i].LB + '</td>' +
//                        '</tr >');
//                }
//                $("#tableLoanDtls").append(
//                    '</tbody>');
//            }
//        }
//    });
//}
//function getIntrst() {
//    var Querystring = "GetIntrLoanLedger";
//    $.ajax({
//        type: "POST",
//        contentType: "application/json; charset=utf-8",
//        url: "LoanRePayment.aspx/GetIntrst",
//        dataType: "json",
//        success: function (Result) {
//            $('#ddlIntrstLedg').empty();
//            $('#ddlIntrstLedg').append($("<option></option>").val("-1").html("Select Interest Loan Ledger"));
//            $.each(Result.d, function (data, value) {
//                $('#ddlIntrstLedg').append($("<option></option>").val(value.ID).html(value.Name));
//            })
//        },
//        error: function (Result) {
//            alert(Result);
//        }
        
//    });
//}
function getFITableDtls() {
    var InputString = $("#txtSubAcc").val();
    var Querystring = "GetRePaymentTbl";
    $.ajax({
        type: "POST",
        contentType: "application/json; charset=utf-8",
        url: "LoanRePayment.aspx/ShowRepayment",
        data: "{QueryStr : '" + Querystring + "',input :'" + InputString + "'}",
        dataType: "json",
        success: function (Result) {
            if (Result.d.length > 0) {
                $('#tableRePaymnt').empty();
                $("#tableRePaymnt").append('<thead>< tr ><th class="col-md-2">Interest Repayment</th> <th class="col-md-2">Acc Name</th> <th class="col-md-2">Amount</th><th class="col-md-2">Verify</th></tr ></thead><tbody>'
                );
                for (var i = 0; i < Result.d.length; i++) {
                    $("#tableRePaymnt").append('<tr><td>' + Result.d[i].Intrst + '</td>' +
                        '<td>' + Result.d[i].Acc + '</td>' +
                        '<td>' + Result.d[i].Dtls + '</td>' +
                        '<td>' + Result.d[i].vrfy + '</td>' +
                        '</tr >');
                }
                $("#tableRePaymnt").append(
                    '</tbody>');
            }
        }
    });
}