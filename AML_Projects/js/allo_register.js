$(window).on('load', function () {
  
    log_access();

    $('#all_date').val("");

    $("#all_date").datepicker({
        dateFormat: 'dd/MM/yy',
        changeMonth: true,
        changeYear: true,
        stepMonths: true,
        todayHighlight: true,
        //maxDate: 0,
        onSelect: function (dateText, inst) {

        }
    });
   // $('#all_date').datepicker().datepicker('setDate', new Date());


});

function log_access() {
  
    var QueryString1 = "allo_reg_access";
    var inputstring = $("[id*=hdUserId]").val();



    $.ajax({
        type: "post",
        contentType: "application/json; charset=utf-8",
        url: "Allocation_reqister.aspx/log_access",
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











function load_reqemp() {
    
    var QueryString = "Getreq_emplist";
    var input = $("[id*=txt_emp]").val();

    if (input == "") {
        alert('Please Enter Employee Code');
        return false;
    }

    $.ajax({
        type: "POST",
        contentType: "application/json; charset=utf-8",
        url: "Allocation_reqister.aspx/Get_reqemp",
        data: "{QueryString:'" + QueryString + "',input : '" + input + "'}",
        dataType: "json",
        success: function (Result) {

            //alert(Result.d);
            //debugger;
            Result = Result.d;
            //alert(Result);
            if (Result == "") {
                alert('No Matches Found !! Please Try Another User ID')
                $('#txt_emp').val("");

            } 
           

            $('#txt_name').val(Result.split('~')[0].toString());
            $('#txt_dep').val(Result.split('~')[1].toString());
            $('#txt_desig').val(Result.split('~')[2].toString());
            $('#txt_empsts').val(Result.split('~')[5].toString());


            

            $("[id*=HD_desid]").val(Result.split('~')[4].toString());
            $("[id*=Hd_depid]").val(Result.split('~')[3].toString());



        },

        error: function (Result) {
            alert(Result);
        }
    });
}



function check_srno() {
    //debugger;
    QueryString = 'sr_check'

    input = $("[id*=txt_sr]").val();

    $.ajax({
        type: "POST",
        contentType: "application/json; charset=utf-8",
        url: "Allocation_reqister.aspx/get_srchecking",
        data: "{QueryString:'" + QueryString + "',input : '" + input + "'}",
        dataType: "json",
        success: function (Result) {
            //alert(Result.d);
            Result = Result.d;
            //alert(Result);
            if (Result == '111') {
                alert('This SR id already Registered ')
                $('#txt_sr').val("");
                return false;

            }
            load_software();


        },

        error: function (Result) {
            alert(Result);
        }
    });



}



function load_software() {

    //alert('lock');
    //debugger;
    $("#sel_item").prop("disabled", false);

    QueryString = 'get_requested_soft'

    input = $("[id*=txt_sr]").val();

    $.ajax({
        type: "POST",
        contentType: "application/json; charset=utf-8",
        url: "Allocation_reqister.aspx/get_reqsoftitem",
        data: "{QueryString:'" + QueryString + "',input : '" + input + "'}",
        dataType: "json",
        success: function (Result) {
            Result = Result.d;
            if (Result == "") {
                alert('SR Number Not Matching..!!');
                $('#txt_sr').val("");
                $('#sel_item').val("");
                $('#txt_po').val("");
                $("#sel_item").prop("disabled", true);
                $("#txt_po").prop("disabled", true);
                $('#txt_count').val("");
                $('#txt_lictype').val("");
                $('#txt_version').val("");
                
                return false;
            }
            

            $('#sel_item').empty();
            $('#sel_item').append($("<option></option>").val("-1").html("-----------Select----------"));
            $.each(Result, function (data, value) {
                $('#sel_item').append($("<option></option>").val(value.Id).html(value.Name));
                

            })
        },
        error: function (Result) {
            alert(Result);
        }
    });

}

function soft_qty() {
    //alert('ggg');
    //debugger;
    $("#txt_po").prop("disabled", false);

    QueryString = 'Get_softQty'
    input = $('#sel_item option:selected').val();


    $.ajax({
        type: "POST",
        contentType: "application/json; charset=utf-8",
        url: "Allocation_reqister.aspx/get_totalqty",
        data: "{QueryString:'" + QueryString + "',input : '" + input + "'}",
        dataType: "json",
        success: function (Result) {
            //alert(Result.d);
            Result = Result.d;
            //alert(Result);
            //if (Result == "") {
            //    alert('No Matches Found !! Please Try Another User ID')
            //    $('#txt_emp').val("");

            //}

            $('#txt_count').val(Result.split('~')[0].toString());

            load_pos(); 




        },

        error: function (Result) {
            alert(Result);
        }
    });

}
function load_pos() {
    //debugger;
    $("#txt_po").prop("disabled", false);

    QueryString = 'Get_softpoid'
    input = $('#sel_item option:selected').val();



    $.ajax({
        type: "POST",
        contentType: "application/json; charset=utf-8",
        url: "Allocation_reqister.aspx/get_reqpo",
        data: "{QueryString:'" + QueryString + "',input : '" + input + "'}",
        dataType: "json",
        success: function (Result) {
            $('#txt_po').empty();
            $('#txt_po').append($("<option></option>").val("-1").html("-----------Select----------"));
            $.each(Result.d, function (data, value) {
                $('#txt_po').append($("<option></option>").val(value.Id).html(value.Name));
            })
        },
        error: function (Result) {
            alert(Result);
        }
    });

}



function load_soft_details() {

    var QueryString="allo_softdtls"
    var item = $('#sel_item option:selected').val();
    var po = $('#txt_po option:selected').text();
    
    var input = item + '~' + po;

    $.ajax({
        type: "POST",
        contentType: "application/json; charset=utf-8",
        url: "Allocation_reqister.aspx/get_reqsoft_dtls",
        data: "{QueryString:'" + QueryString + "',input : '" + input + "'}",
        dataType: "json",
        success: function (Result) {
            //alert(Result.d);
            Result = Result.d;
            //alert(Result);

            $('#txt_lictype').val(Result.split('~')[0].toString());
            $('#txt_version').val(Result.split('~')[1].toString());
          //  $('#txt_count').val(Result.split('~')[2].toString());




        },

        error: function (Result) {
            alert(Result);
        }
    });

}
function insert_data() {
    //alert('insret');
    //debugger;

    var emp_code = $("#txt_emp").val();
    var emp_name = $("#txt_name").val();
    var sr_no = $("#txt_sr").val();
    var desig_id = $("[id*=HD_desid]").val();
    var dep_id = $("[id*=Hd_depid]").val();
    var emp_status = $("#txt_empsts").val();
    var po_id = $('#txt_po option:selected').text();
    var item_id = $('#sel_item option:selected').val();
    var lic_typ = $("#txt_lictype").val();
    var itm_version = $("#txt_version").val();
    var itm_qty = 1;
    var allo_date = $("#all_date").val();
    var ass_decs = $("#txt_asseloc").val();
    var ass_by = $("[id*=hdUserId]").val();
    var item_name = $('#sel_item option:selected').text();




    if (emp_code == "") {
        alert('Please Enter Employee Code');
        return false;
    }
    else if (allo_date == "") {
        alert('Please Select Alloction Date');
        return false;
    }
    else if (sr_no == "") {
        alert('Please Enter SR Number');
        return false;
    }
    else if (po_id == "") {
        alert('Please Enter Po.Id');
        return false;
    }

    else if (item_id == '-1') {
        alert('Please Select Software Item');
        return false;
    }
    else if (ass_decs == "") {
        alert('Please Description');
        return false;
    }

    //              1               2               3               4               5               6               7               8               9               10                  11              12                  13              14              15
    var input = emp_code + "~" + emp_name + "~" + sr_no + "~" + desig_id + "~" + dep_id + "~" + emp_status + "~" + po_id + "~" + item_id + "~" + lic_typ + "~" + itm_version + "~" + itm_qty + "~" + allo_date + "~" + ass_decs + "~" + ass_by + "~" + item_name;

    var Querystring = "upload_allocate_dtls"






    $.ajax({
        type: "POST",
        contentType: "application/json; charset=utf-8",
        url: "Allocation_reqister.aspx/allocate_insert",
        data: "{QueryString:'" + Querystring + "',input : '" + input + "'}",
        dataType: "json",
        success: function (Result) {
            debugger;
            if (Result.d.length > 0) {
                //alert(Result.d);
                Result = Result.d;
                //call_insert(Result);

                alert(Result);
                window.open('Allocation_reqister.aspx', '_self');

                //window.location.reload();
            } //else {

        },
        error: function (Result) {
            alert(Result.d);
        }
    });
}
function Exit() {
    window.open("index.aspx", "_self");
}
