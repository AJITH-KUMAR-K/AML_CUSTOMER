$(window).load(function () {
    getFinInst();
    getBank();
});
//function RemovHoly() {
//    if ($('#radRemv').prop("checked")) {
//        $('#shwRmrk').fadeOut();
//    }
//    else {
//        $('#shwRmrk').fadeIn();
//    }
//}
function getFinInst() {
      var InputString = "GetFInst";
    $.ajax({
        type: "POST",
        contentType: "application/json; charset=utf-8",
        url: "TreasuryHoliday.aspx/getFinancialInst",
        data: "{ input : '" + InputString + "'}",
        dataType: "json",
        success: function (Result) {
            $('#ddlFinacial').empty();
            $('#ddlFinacial').append($("<option></option").val("-1").html("Select Financial Institution"));
            $.each(Result.d, function (data, value) {
                $('#ddlFinacial').append($("<option></option>").val(value.ID).html(value.FIname));
            })
        },
        error: function (Result) {
            alert(Result);

        }
    });
}
function getBank() {
    $.ajax({
        type: "POST",
        contentType: "application/json; charset=utf-8",
        url: "TreasuryHoliday.aspx/getBankName",
        dataType: "json",
        success: function (Result) {
            $('#ddlbank').empty();
            $('#ddlbank').append($("<option></option").val("-1").html("Select Bank"));
            $(Result.d, function (data, value) {
                $('#ddlbank').append($("<option></option>").val(value.ID).html(value.FIname));
            })
        },
        error: function (Result) {
            alert(Result);

        }
    });
}
function AddHoliday() {
    var InputData = $("#ddlFinacial").val() + "µ" + $("#txt_date").val() + "µ" + $("#txt_remrk").val() + "µ" + $("[id*=hdUserId]").val();
    $.ajax({
        type: "POST",
        contentType: "application/json; charset=utf-8",
        url: "TreasuryHoliday.aspx/AddHoliday",
        data: "{input : '" + InputData + "'}",
        dataType: "json",
        success: function (Result) {
            alert(Result.d);
            $("#ddlFinancial").val(-1);
           // $("#ddlbank").val(-1);
            $("#txt_date").val("");
            $("#txt_remrk").val("");

        },
        error: function (Result) {
            alert(Result);
        }

    });
}