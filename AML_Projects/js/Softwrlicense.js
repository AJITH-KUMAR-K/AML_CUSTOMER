$(window).on('load', function () {
    log_access();

     $('#dtls_div').hide();
    //description();

    //------podate-------

    $("#po_frm_dt").datepicker({
        dateFormat: 'dd/MM/yy',
        changeMonth: true,
        changeYear: true,
        stepMonths: true,
        todayHighlight: false,
        //maxDate: 0,
        onSelect: function (dateText, inst) {
        }
    });


    $("#po_to_dt").datepicker({
        dateFormat: 'dd/MM/yy',
        changeMonth: true,
        changeYear: true,
        stepMonths: true,
        todayHighlight: false,
        //maxDate: 0,
        onSelect: function (dateText, inst) {
        }
    });



    //---sub date--------

    $("#str_dte").datepicker({
        dateFormat: 'dd/MM/yy',
        changeMonth: true,
        changeYear: true,
        stepMonths: true,
        todayHighlight: false,
        //maxDate: 0,
        onSelect: function (dateText, inst) {
        }
    });


    $("#exp_dte").datepicker({
        dateFormat: 'dd/MM/yy',
        changeMonth: true,
        changeYear: true,
        stepMonths: true,
        todayHighlight: false,
        //maxDate: 0,
        onSelect: function (dateText, inst) {
        }
    });




    $('#licnse_typ').val("-1");
    $("#licdiv").show();
    $("#po_frm_dt").val('');
    $("#po_to_dt").val('');

});

function frmExit() {
    window.open("index.aspx", "_self");
}



function log_access() {

    var QueryString1 = "login";
    var inputstring = $("[id*=hdUserId]").val();

    $.ajax({
        type: "post",
        contentType: "application/json; charset=utf-8",
        url: "Softwarelicenseregister.aspx/log_user",
        data: "{QueryString:'" + QueryString1 + "',InputData:'" + inputstring + "'}",
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


function detailsdiv() {
    $("#drop_itm").val(-1);
    $('#srl_no').val('');
    $('#txt_vndr').val('');
    $('#quant_y').val('');
    $('#po_dte').val('');
    $('#str_dte').val('');
    $('#exp_dte').val('');
    $('#po_value').val('');
    $('#itm_desc').val('');
    $("#txt_vrsn").val('');
    $("#licnse_typ").val(-1);

    var opt = $("#drop_po option:selected").val();

    if (opt >= 0) {

        $('#dtls_div').show();

        itemload();
    }
    else {

        $('#dtls_div').hide();
    }






}


function dropload() {

    var QueryString1 = "getpo";
    var dte1 = $("#po_frm_dt").val();
    var dte2 = $("#po_to_dt").val();
    var inputstring = dte1 + '~' + dte2;

    $.ajax({
        type: "POST",
        contentType: "application/json; charset=utf-8",
        url: "Softwarelicenseregister.aspx/PO",
        data: "{QueryString:'" + QueryString1 + "',input : '" + inputstring + "'}",
        dataType: "json",
        success: function (Result) {
            var Result = Result.d;
            $('#drop_po').empty();
            $('#drop_po').append($("<option></option>").val("-1").html("---SELECT---"));
            $.each(Result, function (data, value) {
                $('#drop_po').append($("<option></option>").val(value.Id).html(value.Name));

            })

        },
        error: function (Result) {
            alert(Result);
        }


    });
}



function licensefn() {

    var dt1 = $("#licnse_typ").val();

    if (dt1 == 0) {
        $("#exp_dte").prop("disabled", true);

        $("#licdiv").hide();

    }
    else {

        $("#exp_dte").prop("disabled", false);
        $("#licdiv").show();
    }
}




function itemload() {
    var QueryString = "getitem";
    var inputstring = $("#drop_po option:selected").text();
    $.ajax({
        type: "POST",
        contentType: "application/json; charset=utf-8",
        url: "Softwarelicenseregister.aspx/item",
        data: "{QueryString:'" + QueryString + "',input:'" + inputstring + "'}",
        dataType: "json",
        success: function (Result) {
            var Result = Result.d;
            $('#drop_itm').empty();
            $('#drop_itm').append($("<option></option>").val("-1").html("---SELECT---"));
            $.each(Result, function (data, value) {
                $('#drop_itm').append($("<option></option>").val(value.Id).html(value.Name));

            })

        },
        error: function (Result) {
            alert(Result);
        }


    });



}



function description() {
    // var QueryString = "getdescription";
    //var ticketno = "SR51552";
    var po = $("#drop_po option:selected").text();
    var item = $("#drop_itm option:selected").val();
    var QueryString = "getdtl";
    var inputstring = po + '~' + item;
    $('#srl_no').val('');
    $('#txt_vndr').val('');
    $('#quant_y').val('');
    $('#po_dte').val('');
    $('#str_dte').val('');
    $('#exp_dte').val('');
    $('#po_value').val('');
    $('#itm_desc').val('');
    $("#txt_vrsn").val('');
    $("#licnse_typ").val(-1);

    $.ajax({
        type: "POST",
        contentType: "application/json; charset=utf-8",
        url: "Softwarelicenseregister.aspx/PO2",
        data: "{QueryString:'" + QueryString + "',inputstring:'" + inputstring + "'}",
        dataType: "json",
        success: function (Result) {
            var res1 = Result.d;
            var resdata1 = res1.split("~")[0].toString();
            var resdata2 = res1.split("~")[1].toString();
            var resdata3 = res1.split("~")[2].toString();
            var resdata4 = res1.split("~")[3].toString();
            var resdata5 = res1.split("~")[4].toString();
            var resdata6 = res1.split("~")[5].toString();
            var resdata7 = res1.split("~")[6].toString();
            var resdata8 = res1.split("~")[7].toString();

            $("#srl_no").val(resdata1);
            $("#txt_vndr").val(resdata2);
            $("#quant_y").val(resdata3);
            $("#po_dte").val(resdata4);
            $("#str_dte").val(resdata5);
            $("#exp_dte").val(resdata6);
            $("#po_value").val(resdata7);
            $("#itm_desc").val(resdata8);

        }
    });
}

function frmupdate() {

    var QueryString1 = "update";

    var ltyp2 = $("#licnse_typ").val();
    var po = $("#drop_po option:selected").text();
    var item = $("#drop_itm option:selected").text();
    var eitem = $("#edit_itm").val();
    var vendor = $("#txt_vndr").val();
    var qty = $("#quant_y").val();
    var podt = $("#po_dte").val();
    var versn = $("#txt_vrsn").val();
    var ltyp = $("#licnse_typ option:selected").text();
    var dte1 = $("#str_dte").val();
    var dte2 = $("#exp_dte").val();
    var val = $("#po_value").val();
    var desc = $("#itm_desc").val();
    var catgid = $("#drop_po").val();
    var itemid = $("#drop_itm option:selected").val();
    var ltyp1 = $("#drop_itm").val();


    //  -----------------------validation -----------------------------------------//
    //item_drop

    if (ltyp1 == -1) {
        alert("Please select Item!!!");
        return false;
    }
    else if (versn.trim() == "") {
        alert("Please enter version!!!");
        return false;
    }
    //ltyp
    else if (ltyp2 == -1) {
        alert("Please select License Type!!!");
        return false;
    }
    else if (ltyp2 == 0 && dte1 == "") {

        alert("Please select subscription start date!!!");
        return false;

    }
    else if (ltyp2 == 1 && dte2 == "" || dte1 == "") {

        alert("Date field should not be empty!!!");
        return false;

    }

    else {


        if (eitem == "") {

            var InputData = po + '~' + item + '~' + vendor + '~' + qty + '~' + podt + '~' + versn + '~' + ltyp + '~' + dte1 + '~' + dte2 + '~' + val + '~' + desc + '~' + catgid + '~' + itemid;
        }
        else {

            var InputData = po + '~' + eitem + '~' + vendor + '~' + qty + '~' + podt + '~' + versn + '~' + ltyp + '~' + dte1 + '~' + dte2 + '~' + val + '~' + desc + '~' + catgid + '~' + itemid;

        }


        $.ajax({
            type: "POST",
            contentType: "application/json; charset=utf-8",
            url: "Softwarelicenseregister.aspx/frmupdt",
            data: "{QueryString:'" + QueryString1 + "',InputData:'" + InputData + "'}",
            dataType: "json",
            success: function (Result) {
                var Result = Result.d;
                alert(Result);

                $('#srl_no').val('');
                $('#txt_vndr').val('');
                $('#quant_y').val('');
                $('#po_dte').val('');
                $('#str_dte').val('');
                $('#exp_dte').val('');
                $('#po_value').val('');
                $('#itm_desc').val('');
                $('#edit_itm').val('');
                $('#txt_vrsn').val('');
                $("#licnse_typ").val(-1);


                itemload();

            },
            error: function (Result) {
                alert(Result);

            }

        });

         }

}

function frmConfirm() {

    var QueryString1 = "softreg";
    var InputData = $("#drop_po option:selected").text();


    $.ajax({
        type: "POST",
        contentType: "application/json; charset=utf-8",
        url: "Softwarelicenseregister.aspx/frmsub",
        data: "{QueryString:'" + QueryString1 + "',InputData:'" + InputData + "'}",
        dataType: "json",
        success: function (Result) {
            var Result = Result.d;
            var resdata1 = Result.split("~")[1].toString();
            var resdata2 = Result.split("~")[0].toString();

            if (resdata1 == 1) {
                alert(resdata2);
            }
            else {
                alert(resdata2);
                return false
            }


            window.open('Softwarelicenseregister.aspx', '_self');



        },
        error: function (Result) {
            alert(Result);
        }

    });

}

//-------------------------------------------------------////Documentview/////----------------------------------------------------------------------------------//
function ViewAttachment() {
    var QueryString1 = "Attachment";
    var inputstring = $("#drop_po option:selected").text();

    $.ajax({
        type: "post",
        contentType: "application/json; charset=utf-8",
        url: "Softwarelicenseregister.aspx/Viewattach",
        data: "{QueryString:'" + QueryString1 + "',InputData:'" + inputstring + "'}",
        dataType: "json",
        success: function (Result) {

            Result = Result.d;
            var element = document.createElement('a');
            element.setAttribute('href', '/ITSM/Image/' + Result);
            element.setAttribute('download', Result);
            element.style.display = 'none';
            document.body.appendChild(element);
            element.click();
            document.body.removeChild(element);
        },
        error: function (Result) {
        }
    });
}



