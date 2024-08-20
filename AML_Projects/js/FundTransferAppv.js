function frmExit() {
    window.open("index.aspx", "_self");
}
$(window).on('load', function () {
    $("#ShowtblDiv").hide();
    getRequest();
});
function getRequest() {
    var Qrstr = "GetFillApproveFT";
    $.ajax({
        type: "POST",
        contentType: "application/json; charset=utf-8",
        url: "FundTransferApprove.aspx/getFIDtls",
        data: "{QueryString:'" + Qrstr + "'}",
        dataType: "json",
        success: function (Result) {
            $('#ddl_Reqst').empty();
            $('#ddl_Reqst').append($("<option></option>").val("-1").html("Select Fund Transfer Request"));
            $.each(Result.d, function (data, value) {
                $('#ddl_Reqst').append($("<option></option>").val(value.Id).html(value.Name).html(value.Fbr));
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
    var InputString = $("#ddl_Reqst").val();
    var Querystring = "GetFillApproveFTDtls";
    $.ajax({
        type: "POST",
        contentType: "application/json; charset=utf-8",
        url: "FundTransferApprove.aspx/getTableData",
        data: "{typ : '" + Querystring + "',val1 :'" + InputString + "', data:''}",
        dataType: "json",
        success: function (Result) {
            Result = Result.d;
            newloanfilltable(Result);
            
        },
        error: function (Result) {
        }
    });
}

function newloanfilltable(data) {

    $("#tableShowRqst").empty();
    var valData, valData1;
    var n = 0;
    valData = data.split('Θ');
    if ($("#tableShowRqst tr").length == 0) {
        $('#tableShowRqst').append('<thead class="bg-success text-white"><tr><th scope="col">BANK NAME</th><th scope="col">BRANCH NAME</th><th scope="col">BANK NAME</th><th scope="col">BRANCH NAME</th><th scope="col">BANK ACC NO</th><th scope="col">IFSC CODE</th><th scope="col">TFR AMOUNT</th></tr></thead>');
    }
    for (i = 0; i < valData.length - 1; i++) {
        valData1 = valData[i].split('µ');
        $('#tableShowRqst').append('<tbody><tr>' +
            '<td>' + valData1[0] + '</td>' +
            '<td>' + valData1[1] + '</td>' +
            '<td>' + valData1[2] + '</td>' +
            '<td>' + valData1[3] + '</td>' +
            '<td>' + valData1[4] + '</td>' +
            '<td>' + valData1[5] + '</td>' +
            '<td>' + valData1[6] + '</td>' +
            '</tr> </tbody>');
    }
}

function ApproveFT() {
    var data;
    var aprRjct
    if ($("#ddl_Reqst").val() == "-1") {
        ModelPopWarning("Please Select Request...!");
        return false;
    }
    else if ($("#radAppr").prop("checked") == false && $("#radRjct").prop("checked") == false) {
        ModelPopWarning("Select Approve Or Reject...!");
        return false;
    }


    else {
        if ($("#radAppr").prop("checked")) {
            aprRjct = 1;
        }
        else if ($("#radRjct").prop("checked")) {
            aprRjct = 0;
        }
        //data = $('#ddlfundsourseveri').val() + '^' + $('#ddlsubfoundveri').val().split("æ")[1] + '^' + $("[id*=hdUserId]").val();
        data = $("#ddl_Reqst").val() + "µ" + aprRjct + "µ" + $("[id*=hdUserId]").val() + "µ" + $("[id*=hdBranchId]").val() + "µ" + $("[id*=hdFirmId]").val();

        $.ajax({
            type: "post",
            contentType: "application/json; charset=utf-8",
            url: "FundTransferApprove.aspx/ConfirmApprove",
            data: "{typ:'FUNDTRANSFERAPPROVE',itmDtl:'" + data + "',data:''}",
            dataType: "json",
            success: function (Result) {
                alert(Result.d);
                window.open('FundTransferApprove.aspx', '_self');

            }
        });
         }
}

