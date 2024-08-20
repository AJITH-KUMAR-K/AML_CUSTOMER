$(window).on('load', function () {
    $("#WORKSTDETAILS").hide();
    $("#div_bran").hide();
    $("#div_dept").hide();
    $('#emprd').prop("checked", true);
    $('#txt_emp').val($("[id*=hdUserId]").val());
    $('#tblticket').empty();
    $('#divtblPrincpleIntDtl').hide();
    $('#div_empc_tr').hide();
    $('#div_dept_tr').hide();
    $('#div_bran_tr').hide();
    Getdepartment();
    //UserAssets();
   
   

});

$(document).ready(function () {
    $('[data-toggle="tooltip"]').tooltip();
});


var global_tickno;
var row_added;

//----------------------------------------------------------------









function getassthis(asstcode) {
    $("#tblassthis").empty();
    var Querystring;
    $("#divtbldtl").show();



    var InputString = asstcode;

    Querystring = "asst_history";




    $.ajax({
        type: "POST",
        contentType: "application/json; charset=utf-8",
        url: "AssetView.aspx/getAsstview",
        data: "{QueryStr : '" + Querystring + "',input :'" + InputString + "'}",
        dataType: "json",
        success: function (Result) {
            if (Result.d.length > 0) {
                $('#tblassthis').empty();//t.fi_name,t.branch,t.addrss,t.contact_person,t.phone_no,t.mobile_no,t.email_id,t.pan,t.gstn,t.cin
                $("#tblassthis").append('<thead class="bg-success text-white">< tr ><th scope="col">Date</th><th scope="col">Entered By</th> <th scope="col">Status</th> <th scope="col">Transfer_To</th><th scope="col">Transfer_From</th></tr></thead><tbody class="border border-dark">'
                );
                for (var i = 0; i < Result.d.length; i++) {
                    $("#tblassthis").append('<tr><td>' + Result.d[i].date + '</td>' +

                        '<td>' + Result.d[i].reqby + '</td>' +
                        '<td>' + Result.d[i].sts + '</td>' +
                        '<td>' + Result.d[i].trans_to + '</td>' +
                        '<td>' + Result.d[i].trans_frm + '</td>' +

                        '</tr >');
                    gbid = Result.d[i].INName;

                } esle
                {

                    $('#tblassthis').empty();
                    alert('No Entries Found');



                }
                $("#tblassthis").append(
                    '</tbody>');
            }
        },
        error: function (Result) {
            alert(Result);
        }
    });

}





//-----------------------------------------------------------------


    //$('#tblticket').onclick(function () {
    //    var row = $(this).find('td:first').text();

    //    //alert('You clicked ' + row);
    //    var dt = row.toString();
    //    shdetails(dt);
    //    WorkLogView(dt);
    //    $('#tblticket').removeEventListener();


    //});

function sh_emp_dpt_brc() {
    if ($('#emprd').prop("checked")) {
        $('#div_empc').show();
        $('#div_dept').hide();
        $('#div_bran').hide();

    }
    else if ($("#deprd").prop("checked")) {
        $('#div_empc').hide();
        $('#div_dept').show();
        $('#div_bran').hide();
    }
    else if ($("#branchrd").prop("checked")) {
        $('#div_empc').hide();
        $('#div_dept').hide();
        $('#div_bran').show();
    }
}
   
function transfer_show() {

    $('#transfer_details').removeClass('d-none');





}

function sh_emp_transfer() {
    if ($('#emptr').prop("checked")) {
        $('#div_empc_tr').show();
        $('#div_dept_tr').hide();
        $('#div_bran_tr').hide();

    }
    else if ($("#deptr").prop("checked")) {
        $('#div_empc_tr').hide();
        $('#div_dept_tr').show();
        $('#div_bran_tr').hide();
    }
    else if ($("#branchtr").prop("checked")) {
        $('#div_empc_tr').hide();
        $('#div_dept_tr').hide();
        $('#div_bran_tr').show();
    }
}




//function UserAssets() {
    
//    var intPrnc;
//    var input = $("[id*=hdUserId]").val();
    
//    intPrnc = "GetUassets";
   
//    $.ajax({
//        type: "post",
//        contentType: "application/json; charset=utf-8",
//        url: "AssetView.aspx/UserAssets",
//        data: "{QueryString:'" + intPrnc + "',input : '" + input + "'}",
//        dataType: "json",
//        success: function (Result) {
//            $('#ddlUassets').empty();
//            $('#ddlUassets').append($("<option></option>").val("-1").html("Select Your Asset "));
//            $.each(Result.d, function (data, value) {
//                $('#ddlUassets').append($("<option></option>").val(value.Id).html(value.Name));
                
//            })
//        },
//        error: function (Result) {
//            alert(Result);
//        }
//    });

//}

//function ShowAll() {
//    $('#WORKSTDETAILS').slideUp();
//    //alert('showall');
//    shAstDetails();
//    shWRkSDetails();

//}



function shAstDetails(AsstCd) {
    
    //alert('login into shdetails');
   // AssetId = $('#ddlUassets option:selected').val();

    var QueryString = "GetUassetDetails";
    var input = AsstCd;



    $.ajax({



        type: "POST",
        contentType: "application/json; charset=utf-8",
        url: "AssetView.aspx/AssetV",
        data: "{QueryString:'" + QueryString + "',input : '" + input + "'}",
        dataType: "json",
        success: function (Result) {
           
            if (Result.d.length > 0) {
                Result = Result.d.split("^");
                $('#txt_assetcod').val(Result[0]);
                $('#txt_assnme').val(Result[1]);
                $('#txt_manuname').val(Result[2]);
                $('#txt_serialno').val(Result[3]);
                $('#txt_expdte').val(Result[4]);
                $('#txt_asseloc').val(Result[5]);
                $('#txt_assetstate').val(Result[6]);
                $('#txt_category_typ').val(Result[12]);
                $('#txt_satrtdte').val(Result[10]);
                $('#txt_model').val(Result[7]);
                $('#txt_asset_tag').val(Result[8]);
                $('#txt_host_name').val(Result[9]);
                $('#txt_criticality').val(Result[11]);
               
                //$('#txt_impci').val(Result[14]);
                //$('#ddlstatus').val(-1);
            } else {

                alert('No Entries Found');
            }
        },
        error: function (Result) {



            alert(Result);
        }




    });
}



function shWRkSDetails(Asstcd) {
    
        //var AssetId;
        //alert('login into shdetails');
       // AssetId = $('#ddlUassets option:selected').val();
       // alert(AssetId);
        var QueryString = "GetWorkstation";
    var input = Asstcd;
        $.ajax({
            type: "POST",
            contentType: "application/json; charset=utf-8",
            url: "AssetView.aspx/WOKSTDET",
            data: "{QueryString:'" + QueryString + "',input : '" + input + "'}",
            dataType: "json",
            success: function (Result) {
                if (Result.d.length > 0) {
                    $('#WORKSTDETAILS').slideDown();
                    Result = Result.d.split("^");
                    $('#txt_hostname').val(Result[0]);
                    $('#txt_servicetag').val(Result[1]);
                    $("#txt_Model").val(Result[2]);
                    $("#txt_Manufacturer").val(Result[3]);
                    $('#txt_OS').val(Result[4]);
                    $('#txt_ServicePack').val(Result[5]);
                    $('#txt_Memory').val(Result[6]);
                    $('#txt_virtualmemory').val(Result[7]);
                    $('#txt_Manufacture').val(Result[8]);
                    $('#txt_clockspeed').val(Result[9]);
                    $('#txt_NoOfCores').val(Result[10]);
                    $('#txt_IPaddress').val(Result[11]);
                    $('#txt_macaddress').val(Result[12]);
                    $('#txt_NIC').val(Result[13]);
                    $('#txt_Network').val(Result[14]);
                    $('#txt_DefaultGateway').val(Result[15]);
                    $('#txt_dhcp').val(Result[16]);
                    $('#txt_HModel').val(Result[17]);
                    $('#txt_SerialNumber').val(Result[18]);
                    $('#txt_HManufacturer').val(Result[19]);
                    $('#txt_HDcapacity').val(Result[20]);
                    $('#txt_MonitType').val(Result[21]);
                    $('#txt_monSerialNumber').val(Result[22]);
                    $('#txt_MonManufacturer').val(Result[23]);
                    $('#txt_Resolution').val(Result[24]);
                }
                
            },
            error: function (Result) {



                alert(Result);
            }




        });


}

function UserAssetTview() {
var Temp=0;
    var InputString;
    if ($('#emprd').prop("checked")) {
       
            InputString = $("#txt_emp").val();
            //InputString = $("[id*=hdUserId]").val();
            InputString = InputString + "¥" + 2;
           
        
    }
    else if ($("#deprd").prop("checked")) {
        if ($("#ddldep option:selected").val() == -1) {
            alert('Select Department');;
            Temp = 1;

        } else {
            InputString = $("#ddldep option:selected").val();
            InputString = InputString + "¥" + 3;
        }
    }
    else if ($("#branchrd").prop("checked")) {
      
        InputString = $("#txt_branch").val();;
            InputString = InputString + "¥" + 1;
        
    }
    if (Temp == 0) {
        $('#divtblPrincpleIntDtl').show();
        $('#tblticket').show();
    var Querystring = "GetUassetTview";
    $.ajax({
        type: "POST",
        contentType: "application/json; charset=utf-8",
        url: "AssetView.aspx/GetUserTbleview",
        data: "{QueryStr : '" + Querystring + "',input :'" + InputString + "'}",
        dataType: "json",
        success: function (Result) {
            if (Result.d.length > 0) {

                $('#tblticket').empty();
                $('#tblticket').append('<thead class="bg-success text-white">< tr ><th scope="col">Asset code</th><th scope="col">Asset Name</th><th scope="col">Manufacture Name</th> <th scope="col">Asset State</th><th scope="col">Criticality</th></tr></thead><tbody class="border border-dark">');
                for (var i = 0; i < Result.d.length; i++) {
                    $('#tblticket').append('<tr><td>' + Result.d[i].Asstcode + '</td>' +
                        '<td>' + Result.d[i].AsstNme + '</td>' +
                        '<td>' + Result.d[i].ManufName + '</td>' +
                        '<td>' + Result.d[i].AsstState + '</td>' +
                        '<td>' + Result.d[i].criticality + '</td>' +
                        '</tr>');
                }
                $('#tblticket').append(
                    '</tbody>');
            } else {

                alert('No Entries Found');
                $('#tblticket').empty();
            }
        },
        error: function (Result) {
            alert(Result);
        }
    });
}


}

function gr() {

    $('#tblticket').find('tr').click(function () {
        var row = $(this).find('td:first').text();
        shAstDetails(row);
        shWRkSDetails(row);
        getassthis(row);
        //shdetails(row);
        //WorkLogView(row);
       // global_tickno = row;
        $('#tblticket').removeEventListener();



    });


}

function Getdepartment() {

    var QueryString = "GetdepNAME";
    $.ajax({
        type: "POST",
        contentType: "application/json; charset=utf-8",
        url: "Assetmanagement.aspx/getAssignto",
        data: "{QueryString:'" + QueryString + "'}",
        dataType: "json",
        success: function (Result) {
            $('#ddldep').empty();
            $('#ddldep_tr').empty();
            $('#ddldep').append($("<option></option>").val("-1").html("Select Department "));
            $('#ddldep_tr').append($("<option></option>").val("-1").html("Select Department "));
            $.each(Result.d, function (data, value) {

                $('#ddldep').append($("<option></option>").val(value.ReqId).html(value.ReqName));
                $('#ddldep_tr').append($("<option></option>").val(value.ReqId).html(value.ReqName));
            })
        },
        error: function (Result) {
            alert(Result);
        }

    });

}


function submit1() {
    QueryString = "BHtransferInsert";
    if ($('#emptr').prop("checked") == true) {
        //                        1                         2                         3         4         5          6        7         8            9             10                           11                   
        var input = $("#txt_assetcod").val() + "¥" + $("#txt_emp_tr").val() + "¥" + '' + "¥" + -1 + "¥" + 2 + "¥" + 1 + "¥" + '' + "¥" + '' + "¥" + '' + "¥" + $("[id*=hdUserId]").val() + "¥" + 1;
    } else if ($('#branchtr').prop("checked") == true) {
        //                        1               2                         3                4         5          6        7         8            9             10                           11                   
        input = $("#txt_assetcod").val() + "¥" + '' + "¥" + $("#txt_branch_tr").val()  + "¥" + -1 + "¥" + 1 + "¥" + 1 + "¥" + '' + "¥" + '' + "¥" + '' + "¥" + $("[id*=hdUserId]").val() + "¥" + 1;


    } else if ($('#deptr').prop("checked") == true) {

        //                        1              2          3             4                       5          6        7         8            9             10                           11                   
        input = $("#txt_assetcod").val() + "¥" + '' + "¥" + '' + "¥" + $("#ddldep_tr").val()  + "¥" + 3 + "¥" + 1 + "¥" + '' + "¥" + '' + "¥" + '' + "¥" + $("[id*=hdUserId]").val() + "¥" + 1;


    }
    alert(input);
    $.ajax({
        type: "POST",
        contentType: "application/json; charset=utf-8",
        url: "Assetview.aspx/confirmproblem",
        data: "{QueryString:'" + QueryString + "',input : '" + input + "'}",
        dataType: "json",
        success: function (Result) {

            Result = Result.d;
            alert('Asset code  :' + Result);

            window.open('Assetview.aspx', '_self');
        },

        error: function (Result) {
            alert(Result);
        }
    });






}