$(window).on('load', function () {
    var QueryString = "get_rpitem";
    $.ajax({
        type: "POST",
        contentType: "application/json; charset=utf-8",
        url: "Binowner.aspx/Get_reitem",
        data: "{QueryString:'" + QueryString + "'}",
        dataType: "json",
        success: function (Result) {
            $('#re_item').empty();
            $('#re_item').append($("<option></option>").val("-1").html("Select Item"));
            $.each(Result.d, function (data, value) {

                $('#re_item').append($("<option></option>").val(value.ReqId).html(value.ReqName));
            })
        },
        error: function (Result) {
            alert(Result);
        }
    });
});