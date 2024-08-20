function frmExit() {
    window.open("../Index.aspx", "_self");
}
$(window).load(function () {
    GetFundDtls();
});
function GetFundDtls() {
    var QueryString = "GetLoanDtls";
    $.ajax({
        type: "POST",
        contentType: "application/json; charset=utf-8",
        url: "LoanMasterChecker.aspx/getLoan",
        data: "{QueryString:'" + QueryString + "'}",
        dataType: "json",
        success: function (Result) {
            $('#ddl_Loan').empty();
            $('#ddl_Loan').append($("<option></option>").val("-1").html("Select Loan "));
            $.each(Result.d, function (data, value) {
                $('#ddl_Loan').append($("<option></option>").val(value.Id).html(value.Id).html(value.fiID).html(value.entrdt));
            })
        },
        error: function (Result) {
            alert(Result);
        }
    });
}
function getFITableDtls() {
    $("#tableShowFI").show();
    var InputString = $("#ddl_Loan").val();
    var Querystring = "GetLoanTable";
    $.ajax({
        type: "POST",
        contentType: "application/json; charset=utf-8",
        url: "LoanMasterChecker.aspx/ShowLoans",
        data: "{QueryStr : '" + Querystring + "',input :'" + InputString + "'}",
        dataType: "json",
        success: function (Result) {
            if (Result.d.length > 0) {
                $('#tableShowLoans').empty();
                $("#tableShowLoans").append('<thead>< tr ><th class="col-md-2">Source</th> <th class="col-md-2">Fund</th> <th class="col-md-2">FI Type </th><th class="col-md-2">FI Name</th><th class="col-md-2">Agreement Entered Date</th><th class="col-md-2">Agreement From Date</th><th class="col-md-2">Agreement To Date</th><th class="col-md-2">Entered By</th></tr ></thead><tbody>'
                );
                for (var i = 0; i < Result.d.length; i++) {
                    $("#tableShowLoans").append('<tr><td>' + Result.d[i].srcnm + '</td>' +
                        '<td>' + Result.d[i].fnd + '</td>' +
                        '<td>' + Result.d[i].fityp + '</td>' +
                        '<td>' + Result.d[i].fi + '</td>' +
                        '<td>' + Result.d[i].AEdt + '</td>' +
                        '<td>' + Result.d[i].Afrmdt + '</td>' +
                        '<td>' + Result.d[i].Atodt + '</td>' +
                        '<td>' + Result.d[i].Enme + '</td>' +
                        '</tr >');
                }
                $("#tableShowLoans").append(
                    '</tbody>');
            }
        }
    })
}
function CheckLoans() {
    var aprRjct
    if ($("#radAppr").prop("checked")) {
        aprRjct = 1;
    }
    else if ($("#radRjct").prop("checked")) {
        aprRjct = 0;
    }
    var InputData = aprRjct + "µ" + $("#ddl_Loan").val() + "µ" + $("[id*=hdUserId]").val();
    if ($("#radAppr").prop("checked") == false && $("#radRjct").prop("checked") == false) {
        alert("Please select an Option");
        return false;
    }
    else if ($("#ddl_Loan").val() == "-1") {
        alert("Please Select A Fund");
        return false;
    } else {
              $.ajax({
            type: "POST",
            contentType: "application/json; charset=utf-8",
            url: "LoanMasterChecker.aspx/ApprRejcLoan",
            data: "{input :'" + InputData + "'}",
            dataType: "json",
            success: function (Result) {
                alert(Result.d);
                $('#radAppr').prop('checked', false);
                $('#radRjct').prop('checked', false);
                $("#ddl_Loan").val('-1');
                $('#tableShowLoans').empty();
            },
            error: function (Result) {
                alert(Result);
            }
        });
    }
}