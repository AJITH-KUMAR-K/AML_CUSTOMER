function frmExit() {
    window.open("index.aspx", "_self");
}
$(window).on('load', function () {
    $("#ShowtblDiv").hide();
    getFiName();
});
function getFiName() {
       var Qrstr = "GetFIReqst";
    $.ajax({
        type: "POST",
        contentType: "application/json; charset=utf-8",
        url: "ApproveNewFund.aspx/getFIDtls",
        data: "{QueryString:'" + Qrstr +"'}",
        dataType: "json",
        success: function (Result) {
            $('#ddl_fI').empty();
            $('#ddl_fI').append($("<option></option>").val("-1").html("Select Financial Institution "));
            $.each(Result.d, function (data, value) {
                $('#ddl_fI').append($("<option></option>").val(value.Id).html(value.Name).html(value.Fbr));
            })
        },
        error: function (Result) {
            alert(Result);
        }
    });
}
function GetFundDtls() {
    var QueryString = "GetLoanDtls";
    $.ajax({
        type: "POST",
        contentType: "application/json; charset=utf-8",
        url: "ApproveNewFund.aspx/getLoan",
        data: "{QueryString:'" + QueryString + "',input : '" +  $('#ddl_fI').val()+ "'}",
        dataType: "json",
        success: function (Result) {
            $('#ddl_Loan').empty();
            $('#ddl_Loan').append($("<option></option>").val("-1").html("Select Loan "));
            $.each(Result.d, function (data, value) {
                $('#ddl_Loan').append($("<option></option>").val(value.Id).html(value.entrdt).html(value.Id).html(value.finme));
            })
        },
        error: function (Result) {
            alert(Result);
        }
    });
}
function getFITableDtls() {
    $("#ShowtblDiv").show();
    $("#tableShowFI").show();
    var InputString = $("#ddl_Loan").val();
    var Querystring = "GetLoanTable";
    $.ajax({
        type: "POST",
        contentType: "application/json; charset=utf-8",
        url: "ApproveNewFund.aspx/ShowLoans",
        data: "{QueryStr : '" + Querystring + "',input :'" + InputString + "'}",
        dataType: "json",
        success: function (Result) {
            if (Result.d.length > 0) {
                $('#tableShowLoans').empty();
                $("#tableShowLoans").append('<thead class="bg-success text-white text-capitalize"><tr><th scope="col">Fund_Type</th> <th scope="col">Fund</th> <th scope="col">FI_Type </th><th scope="col">FI_Name</th><th scope="col">Entered_Date</th><th scope="col">From_Date</th><th scope="col">To_Date</th><th scope="col">Entered_By</th><th scope="col">Amount</th><th scope="col">ROI</th><th scope="col">Personel_Guarantee</th></tr ></thead><tbody>'
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
                        '<td>' + Result.d[i].amnt + '</td>' +
                        '<td>' + Result.d[i].roi + '</td>' +
                        '<td>' + Result.d[i].PersGr + '</td>' +
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
        aprRjct = 9;
    }
 
    if ($("#radAppr").prop("checked") == false && $("#radRjct").prop("checked") == false) {
        alert("Please select an Option");
        return false;
    }
    
    else if ($("#ddl_fI").val() == "-1") {
        alert("Please Select Financial Institution");
        return false;
    }
    else if ($("#ddl_Loan").val() == "-1") {
        alert("Please Select A Fund");
        return false;
    }
    else {
        var InputData = aprRjct + "µ" + $("#ddl_Loan").val() + "µ" + $("[id*=hdUserId]").val();
              $.ajax({
            type: "POST",
            contentType: "application/json; charset=utf-8",
            url: "ApproveNewFund.aspx/ApprRejcLoan",
            data: "{input :'" + InputData + "'}",
            dataType: "json",
            success: function (Result) {
                alert(Result.d);
                $('#radAppr').prop('checked', false);
                $('#radRjct').prop('checked', false);
                $("#ddl_Loan").val('-1');
                $('#tableShowLoans').empty();
                $("#ddl_fI").val('-1');
                $("#ShowtblDiv").hide();
            },
            error: function (Result) {
                alert(Result);
            }
        });
    }
}