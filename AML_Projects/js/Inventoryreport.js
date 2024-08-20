$(window).on('load', function () {

    login();
    invtryrpt();

});


function Exit() {
    window.open("index.aspx", "_self");
}

function login() {

    var QueryString1 = "allo_reg_access";
    var inputstring = $("[id*=hdUserId]").val();
    $.ajax({
        type: "post",
        contentType: "application/json; charset=utf-8",
        url: "Inventory_report.aspx/login_l",
        data: "{QueryString:'" + QueryString1 + "',input:'" + inputstring + "'}",
        dataType: "json",
        success: function (Result) {

            Result = Result.d;
            if (Result == "111") {
            }
            else {
                alert("You are not authorized to view this page!!");
                window.open("index.aspx", "_self");
            }
        },
        error: function (Result) {
        }
    });



}

function invtryrpt() {

    var QueryString = 'invrpt'

    $.ajax({
        type: "POST",
        contentType: "application/json; charset=utf-8",
        url: "Inventory_report.aspx/rpt",
        data: "{QueryString:'" + QueryString + "'}",
        dataType: "json",
        async: false,

        success: function (Result) {
            var Result = Result.d;
            if (Result == "") {
                alert('No Data Found');
                return false;
            }
            else {

                //alert(Result);
                filltable(Result);
            }


        },



    });


}


function excelupload() {
    debugger;
    var Querystring1 = "invrpt";
    window.open("ChangeRequestReport.aspx?Querystr=" + Querystring1 + "&inp=" + '', '_self');
}

function filltable(data) {
    //var dep_id = $("[id*=Hd_depid]").val();
    //alert(data);
    //debugger;
    var valData, valData1;
    $("#tbl_dtls").empty();
    if ($("#tbl_dtls tr").length == 0) {
        $("#tbl_dtls").empty();
        $('#tbl_dtls').append('<tr style="background-color:darkgrey;color:black border-inherit;border-spacing: 10px;width:50px"><th class="text-center">SL NO.</th><th class="text-center">ITEM</th><th class="text-center">AVAILABLE QUANTITY</th><th class="text-center">ASSIGNED QUANTITY</th><th class="text-center"style="width:100px;">SUBSCRIPTION START DATE</th><th class="text-center">SUBSCRIPTION EXPIRY DATE</th><th class="text-center">VERSION</th><th class="text-center">LICENSE</th>');
    }
    valData = data.split('@');


    for (i = 0; i < valData.length - 1; i++) {
        valData1 = valData[i].split('$');
        // alert(valData1);
        $('#tbl_dtls').append('<tbody><tr>' +
            '<td class="text-center">' + (i + 1) + '</td>' +
            '<td class="text-center">' + valData1[0] + '</td>' +
            '<td class="text-center">' + valData1[1] + '</td>' +
            '<td class="text-center">' + valData1[2] + '</td>' +
            '<td class="text-center">' + valData1[3] + '</td>' +
            '<td class="text-center">' + valData1[4] + '</td>' +
            '<td class="text-center">' + valData1[5] + '</td>' +
            '<td class="text-center">' + valData1[6] + '</td>' +
           
            
            
            '</tr > </tbody > ');
    }

}
