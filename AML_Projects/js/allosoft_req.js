$(window).on('load', function () {

    $('#all_date').empty();

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


    load_reqitems();

});

function get_emp_dtl() {


    var QueryString = "softreq_emp";
    var input = $("[id*=txt_emp]").val();

    $.ajax({
        type: "POST",
        contentType: "application/json; charset=utf-8",
        url: "Allocation_request.aspx/get_emp_dtl",
        data: "{QueryString:'" + QueryString + "',input : '" + input + "'}",
        dataType: "json",
        success: function (Result) {
           
            Result = Result.d;

            $('#txt_name').val(Result.split('~')[0].toString());
            $('#txt_dep').val(Result.split('~')[1].toString());
            $('#txt_branch').val(Result.split('~')[2].toString());
            $('#txt_mail').val(Result.split('~')[3].toString());
            $('#txt_mob').val(Result.split('~')[4].toString());
            $("[id*=branch_id]").val(Result.split('~')[6].toString());
            $("[id*=dep_id]").val(Result.split('~')[5].toString());



        },

        error: function (Result) {
            alert(Result);
        }
    });


}

function load_reqitems() {

    var QueryString = "Getsoftreq_items";
    $.ajax({
        type: "POST",
        contentType: "application/json; charset=utf-8",
        url: "Allocation_request.aspx/getreq_items",
        data: "{QueryString:'" + QueryString + "'}",
        dataType: "json",
        success: function (Result) {
            $('#drop_req').empty();
            $('#drop_req').append($("<option></option>").val("-1").html("-----------Select----------"));
            $.each(Result.d, function (data, value) {
                $('#drop_req').append($("<option></option>").val(value.Name).html(value.Id));
            })
        },
        error: function (Result) {
            alert(Result);
        }
    });
}





function Upload() {

    var fileList = document.getElementById("FileUpload").files;
    var fileReader = new FileReader();
    if (fileReader && fileList && fileList.length) {
        var d = new Date();
        var fileName = fileList[0].name;
        fileReader.readAsDataURL(fileList[0]);
        fileReader.onload = function () {
            var imageData = fileReader.result;
            var d2 = imageData.split(":");
            var d3 = d2[1].split(";");
            var imageData = fileReader.result;

            var file = fileList.length;


            var emp_code = $("#txt_emp").val();
            var e_name = $("#txt_name").val();
            var dep_id = $("[id*=dep_id]").val();
            var br_id = $("[id*=branch_id]").val();
            var e_mail = $("#txt_mail").val();
            var ph = $("#txt_mob").val();
            var req_soft = $('#drop_req option:selected').text();
            var desc = $("#txt_desc").val();
            var reqsoft_id = $('#drop_req option:selected').val();
            var log_usr = $("[id*=hdUserId]").val();

            if (emp_code == "") {
                alert('Please Enter Employee Code');
                return false;
            }
            else if (reqsoft_id == '-1') {
                alert('Please Select Required Software');
                return false;
            }

            else if (desc == "") {
                alert('Please Enter Description')
                return false;
            }
            else {













                //                      1                   2               3           4           5               6           7               8               9               10
                var InputString = emp_code + "µ" + e_name + "µ" + dep_id + "µ" + br_id + "µ" + e_mail + "µ" + ph + "µ" + req_soft + "µ" + desc + "µ" + reqsoft_id + "µ" + log_usr;


                var InputString2 = fileName;


                var Querystring = "8994";


                //alert('slelected tick0' + tic_lis_arry[0]);
                //alert('slelected tick1' + tic_lis_arry[1]);

                $.ajax({
                    type: "POST",
                    contentType: "application/json; charset=utf-8",
                    url: "Allocation_request.aspx/lic_data_upload",
                    data: "{QueryStr : '" + Querystring + "',input :'" + InputString + "',input2 :'" + InputString2 + "',input3:'" + imageData + "'}",
                    dataType: "json",
                    success: function (Result) {
                       
                        if (Result.d.length > 0) {
                           
                            Result = Result.d;
                           
                            var res = Result.split('¥')[0];

                            //alert(res);
                            if (res == res) {
                                alert("Succesfully submitted");
                            }
                            window.open('Allocation_request.aspx', '_self');

                            //window.location.reload();
                        } //else {

                    },
                    error: function (Result) {
                        alert(Result.d);
                    }
                });
            }

        }
    }
}








