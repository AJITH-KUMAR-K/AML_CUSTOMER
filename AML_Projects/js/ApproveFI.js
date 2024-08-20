function frmExit() {
    window.open("index.aspx", "_self");
}
$(window).on('load', function () {
    $('#radAppr').prop('checked', false);
    $('#radRjct').prop('checked', false);
    getFiName();
    $("#Shwtable").hide();
});
function getFiName() {
    var Qrstr = "GetFIApprvl";
     $.ajax({
        type: "POST",
        contentType: "application/json; charset=utf-8",
         url: "ApproveFI.aspx/getFIDtls",
        data: "{QueryString:'" + Qrstr + "'}",
        dataType: "json",
        success: function (Result) {
            $('#ddl_fI').empty();
            $('#ddl_fI').append($("<option></option>").val("-1").html("Select Financial Institution "));
            $.each(Result.d, function (data, value) {
                $('#ddl_fI').append($("<option></option>").val(value.Id).html(value.Fbr).html(value.Name));
            })
        },
        error: function (Result) {
            alert(Result);
        }
    });
}
function GetFitable() {
       $("#Shwtable").show();
    var FiID = "GetFiApproveTbl";
    $.ajax({
        type: "post",
        contentType: "application/json; charset=utf-8",
        url: "ApproveFI.aspx/getFIdata",
        data: "{typ:'" + FiID + "',input:'" + $("#ddl_fI").val() +"'}",
        dataType: "json",
        success: function (Result) {
            Result = Result.d;
            FiTable(Result);

        },
        error: function (Result) {

        }
    });
}
function FiTable(data) {
    $("#tblFIdtls").empty();
    var valData, valData1;
    var n = 0;
    valData = data.split('Θ');
      if ($("#tblFIdtls tr").length == 0) {
        //$('#tblFIdtls').append('<tbody><tr style="background-color:#996633;color:black"><th class="align-center">Finanacial Institution</th><th class="align-center">FI Type</th><th class="align-center">Address</th><th class="align-center">Branch</th> <th class="align-center">PAN</th><th class="align-center">GSTN</th><th class="align-center">CIN</th><th class="align-center">Requested By</th><th class="align-center">Requested Date</th></tr>');
          $('#tblFIdtls').append('<thead class="bg-success text-white"><tr><th scope="col">FinancialInstitutionType</th><th scope="col">FinancialInstitution</th><th scope="col">Branch</th><th scope="col">Address</th> <th scope="col">PAN</th><th scope="col">GSTN</th><th scope="col">CIN</th><th scope="col">RequestedBy</th><th scope="col">RequestedDate</th></tr></thead>');
    }

    for (i = 0; i < valData.length - 1; i++) {
        valData1 = valData[i].split('^');
        $('#tblFIdtls').append('<tbody><tr>' +
            '<td>' + valData1[0] + '</td>' +
            '<td>' + valData1[1] + '</td>' +
            '<td>' + valData1[2] + '</td>' +
            '<td>' + valData1[3] + '</td>' +
            '<td>' + valData1[4] + '</td>' +
            '<td>' + valData1[5] + '</td>' +
            '<td>' + valData1[6] + '</td>' +
            '<td>' + valData1[7] + '</td>' +
            '<td>' + valData1[8] + '</td>' + 
            '</tr> </tbody>');

    }

}

function ApproveFI() {
    var aprRjct
    if ($("#radAppr").prop("checked")) {
        aprRjct = 1;
    }
    else if ($("#radRjct").prop("checked")) {
        aprRjct = 0;
    }

    if ($("#ddl_fI").val() == "-1") {
        //alert("Please Select Financial Institution");
        ModelPopWarning("Please Select Financial Institution..!");
        return false;
    }
    else if ($("#radAppr").prop("checked") == false && $("#radRjct").prop("checked") == false) {
        ModelPopWarning("Please select an Option - Approve/Reject..!");
        //alert("Please select an Option");
        return false;
    }    
    else {
        var InputData = aprRjct + "µ" + $("#ddl_fI").val() + "µ" + $("[id*=hdUserId]").val();
              $.ajax({
            type: "POST",
            contentType: "application/json; charset=utf-8",
            url: "ApproveFI.aspx/ApprRejctFI",
            data: "{input :'" + InputData + "'}",
            dataType: "json",
            success: function (Result) {
                alert(Result.d);
                window.open('ApproveFI.aspx', '_self');
                //$('#radAppr').prop('checked', false);
                //$('#radRjct').prop('checked', false);
                //$('#tblFIdtls').empty();
                //$("#ddl_fI").val('-1');
                //$("#Shwtable").hide();
            },
            error: function (Result) {
                alert(Result);
            }
        });
    }
}

function ModelPopWarning(msg) {
    $("#warnMsgContent").html(msg);
    $("#centralModalWarning").modal("show");
}