var valgst;
function frmExit() {
    window.open("../Index.aspx", "_self");
}
$(window).load(function () {
    getFIdtls();
    getFeeLedger();
   // Gstsectionstage();
});
function getFIdtls() {
    var InputString = "GetFiProcessinFee";
    $.ajax({
        type: "POST",
        contentType: "application/json; charset=utf-8",
        url: "Processing_fee.aspx/GetFIDtls",
        data: "{input:'" + InputString + "'}",
        dataType: "json",
        success: function (Result) {
            $('#ddl_FI').empty();
            $('#ddl_FI').append($("<option></option>").val("-1").html("Select Financial Institution "));
            $.each(Result.d, function (data, value) {
                $('#ddl_FI').append($("<option></option>").val(value.ID).html(value.Name));
            })
        },
        error: function (Result) {
            alert(Result);
        }
    });
}
function getFIType() {
    var QueryString = $("#ddl_FI").val();
    var InputString = "GetFITypeDtl";
        $.ajax({
        type: "POST",
        contentType: "application/json; charset=utf-8",
        url: "Processing_fee.aspx/GetFITypeDtls",
        data: "{input:'" + InputString + "',QryStr : '" + QueryString + "'}",
        dataType: "json",
        success: function (Result) {
            $("#txt_FiTyp").val(Result.d.split("µ")[0]);
            $("#txt_FundID").val(Result.d.split("µ")[1]);            
                    },
        error: function (Result) {
            alert(Result);
        }
    });
}

function AddProcssingFee() {
    var RadGst;
    if ($("#RadIgst").prop("checked") == true) {
        RadGst = 1;
    }
    else if ($("#RadSgst").prop("checked") == true) {
        RadGst = 2;
    }
    if ($("#ddl_FI").val() == "-1") {
        alert("Please Select Financial Institution");
        return false;
    }
    else if ($("#txt_Prcssfee").val() == "") {
        alert("Please Enter Processing Fee");
        return false;
    }
    else if ($("#txt_gdst").val() == "") {
        alert("Please Enter GST Rate");
        return false;
    }
    else if ($("#RadIgst").prop("checked") == false && $("#RadSgst").prop("checked") == false) {
        alert("Please Choose GST");
        return false;
    }
    else {
        var InputData = $("#ddl_FI").val() + "µ" + $("#txt_Prcssfee").val() + "µ" + $("#txt_gdst").val() + "µ" + RadGst + "µ" + $("[id*=hdUserId]").val();
        $.ajax({
            type: "POST",
            contentType: "application/json; charset=utf-8",
            url: "Processing_fee.aspx/AddProcessingFee",
            data: "{input:'" + InputString + "'}",
            dataType: "json",
            success: function (Result) {
                alert(Result.d);
                $("#ddl_FI").val('-1');
                $("#txt_Prcssfee").val('');
                $("#txt_gdst").val('');
                $('#RadIgst').prop('checked', false);
                $('#RadSgst').prop('checked', false);
            },
            error: function (Result) {
                alert(Result);
            }
        });
    }
}

function CalcGst(gstValue) {
        var proc = $("#txt_Prcssfee").val();
       var Gstrate = $("#txt_gst").val(); 
    var gstValue = proc * (Gstrate / 100);
    fillgstrate(gstValue);
}

function Gstsectionstage() {
       var gstdata;
 var   QuerString = "GSTRATE";
    $.ajax({
        type: "post",
        contentType: "application/json; charset=utf-8",
        url: "Processing_fee.aspx/getgststage",
        data: "{typ:'" + QuerString + "',data:'" + $('#txt_FundID').val() + "'}",
        dataType: "json",
        success: function (Result) {
            gstdata = Result.d;
            alert(gstdata);
            if (gstdata[0] == gstdata[1]) {

                valgst = 1;
            }
            else {

                valgst = 2;
            }
            //alert(Result.d);
            //if (gstdata == 1) {
            //    valgst = 1;
            //}
            //else {
            //    valgst = 2;
            //}
            //$("[id*=hdGstValue]").val(valgst);
        },
        error: function (Result) {

        }
    });
}
function fillgstrate(gstValue) {
    //valgst = $("[id*=hdGstValue]").val();
    //alert(valgst);
    if (gstValue != 0 || gstValue.trim().length != 0) {

        if (valgst == 1) {
            $('#txt_SGst').val(gstValue / 2);
            $('#txt_CGst').val((parseFloat(gstValue) / 2).toFixed(2));
            $('#txt_IGst').val();
        }

        else {
            $('#txt_SGst').val();
            $('#txt_CGst').val();
            $('#txt_IGst').val(gstValue);
        }
    }
}
