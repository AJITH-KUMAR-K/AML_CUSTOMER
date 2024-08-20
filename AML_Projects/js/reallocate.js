$(window).on('load', function () {

    log_access();

    $("#txt_emp").val('');
    $("#txt_name").val('');
    $("#txt_dep").val('');
    $("#txt_branch").val('');
    $("#txt_mail").val('');
    $("#txt_mob").val('');
    $("#txt_st").val('');
    //-------------------  
    $("#dt_allow").val('');
    $("#txt_vrsn").val('');
    $("#txt_ltyp").val('');
    $("#str_dte").val('');
    $("#exp_dte").val('');

    
});


function log_access() {

    var QueryString1 = "login";
    var inputstring = $("[id*=hdUserId]").val();

    $.ajax({
        type: "post",
        contentType: "application/json; charset=utf-8",
        url: "re_allocation.aspx/logusr",
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


function btnreallowcat() {
    window.open("Allocation_request.aspx", "_self")
}

function allow_emp_dtl() {
    var QueryString = "Getalemp";
    var input = $("[id*=txt_emp]").val();

    if (input == "") {
        alert('Please Enter Employee Code');
        return false;
    }

    $.ajax({
        type: "POST",
        contentType: "application/json; charset=utf-8",
        url: "re_allocation.aspx/getempdtl",
        data: "{QueryString:'" + QueryString + "',input : '" + input + "'}",
        dataType: "json",
        success: function (Result) {

            
            Result = Result.d;
            if (Result == "") {
                alert('No Matches Found !! Please Try Another User ID')
                $('#dd_emp').val("");

            }


            $('#txt_name').val(Result.split('~')[0].toString());
            $('#txt_dep').val(Result.split('~')[1].toString());
            $('#txt_branch').val(Result.split('~')[2].toString());
            $('#txt_mail').val(Result.split('~')[3].toString());
            $('#txt_mob').val(Result.split('~')[4].toString());
            $('#txt_st').val(Result.split('~')[7].toString());

            $("[id*=Hd_depid]").val(Result.split('~')[5].toString());
            $("[id*=hdBrid]").val(Result.split('~')[6].toString());

            allowsoftwr();

        },

        error: function (Result) {
            alert(Result);
        }
    });
}

function allowsoftwr() {

    var QueryString = "Getalsoft";
    var inputstring = $("[id*=txt_emp]").val();

    $.ajax({
        type: "POST",
        contentType: "application/json; charset=utf-8",
        url: "re_allocation.aspx/alwsoft",
        data: "{QueryString:'" + QueryString + "',input : '" + inputstring + "'}",
        dataType: "json",
        success: function (Result) {
            var Result = Result.d;
            var Drpcnt = Result.length;

            $('#drop_soft').empty();
            $('#drop_soft').append($("<option></option>").val("-1").html("---SELECT---"));
            $.each(Result, function (data, value) {
                $('#drop_soft').append($("<option></option>").val(value.Id).html(value.Name));

            })


            if (Drpcnt == "0") {

                $("#txt_emp").val('');
                $("#txt_name").val('');
                $("#txt_dep").val('');
                $("#txt_branch").val('');
                $("#txt_mail").val('');
                $("#txt_mob").val('');
                $("#txt_st").val('');
                //----  
                $("#dt_allow").val('');
                $("#txt_vrsn").val('');
                $("#txt_ltyp").val('');
                $("#str_dte").val('');
                $("#exp_dte").val('');

            }
        },
        error: function (Result) {
            alert(Result);
        }


    });

}


function alsoftfn() {

    var QueryString = "Getalsoftdtls";
    var itemid = $("#drop_soft option:selected").val();
    var emp = $("[id*=txt_emp]").val();
    var inputstring = itemid + '~' + emp;

    $.ajax({
        type: "POST",
        contentType: "application/json; charset=utf-8",
        url: "re_allocation.aspx/alwsoftdtl",
        data: "{QueryString:'" + QueryString + "',input : '" + inputstring + "'}",
        dataType: "json",
        success: function (Result) {
            var Result = Result.d;
            var select = $("#drop_soft option:selected").val();
            if (select == -1) {
                alert("Please select ALlocated item !!")
                return false;
            }

            if (Result == "") {

                alert("No data Found!!")
            }


            $('#dt_allow').val(Result.split('~')[1].toString());
            $('#txt_vrsn').val(Result.split('~')[2].toString());
            $('#txt_ltyp').val(Result.split('~')[3].toString());
            $('#str_dte').val(Result.split('~')[4].toString());
            $('#exp_dte').val(Result.split('~')[5].toString());

            $("[id*=po_id]").val(Result.split('~')[0].toString());



        },
        error: function (Result) {
            alert(Result);
        }


    });
}

function remvlicnse() {

    var QueryString = "rmvlicens";
    var poid = $("[id*=po_id]").val();
    var itemid = $("#drop_soft option:selected").val();
    var inputstring = poid + '~' + itemid;
    $.ajax({
        type: "POST",
        contentType: "application/json; charset=utf-8",
        url: "re_allocation.aspx/rmvbtn",
        data: "{QueryString:'" + QueryString + "',input : '" + inputstring + "'}",
        dataType: "json",
        success: function (Result) {
            var Result = Result.d;

            alert(Result);

            allowsoftwr();

            $("#dt_allow").val('');
            $("#txt_vrsn").val('');
            $("#txt_ltyp").val('');
            $("#str_dte").val('');
            $("#exp_dte").val('');



        },
        error: function (Result) {

        }


    });
}


function Exit() {
    window.open("index.aspx", "_self");
}