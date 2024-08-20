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
    $('#div_empnme_tr').hide();

    Getdepartment();
    //UserAssets();
   
   

});

$(document).ready(function () {
    $('[data-toggle="tooltip"]').tooltip();
});


var global_tickno;
var row_added;



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

    $('#div_transfer_dtl').removeClass('d-none');
    $('#div_reason_fr_iisue').addClass('d-none');




}

function sh_emp_transfer() {
    if ($('#emptr').prop("checked")) {
        $('#div_empc_tr').show();
        $('#div_dept_tr').hide();
        $('#div_bran_tr').hide();
        $('#div_empnme_tr').show();



    }
    else if ($("#deptr").prop("checked")) {
        $('#div_empc_tr').hide();
        $('#div_dept_tr').show();
        $('#div_bran_tr').hide();
        $('#div_empnme_tr').hide();

    }
    else if ($("#branchtr").prop("checked")) {
        $('#div_empc_tr').hide();
        $('#div_dept_tr').hide();
        $('#div_bran_tr').show();
        $('#div_empnme_tr').hide();

    }
}

function dispose() {

    $('#div_reason_fr_iisue').removeClass('d-none');
    $('#div_transfer_dtl').addClass('d-none');

}


//function UserAssets() {
    
//    var intPrnc;
//    var input = $("[id*=hdUserId]").val();
    
//    intPrnc = "GetUassets";
   
//    $.ajax({
//        type: "post",
//        contentType: "application/json; charset=utf-8",
//        url: "assettransfer.aspx/UserAssets",
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
        url: "assettransfer.aspx/AssetV",
        data: "{QueryString:'" + QueryString + "',input : '" + input + "'}",
        dataType: "json",
        success: function (Result) {
           
            if (Result.d.length > 0) {
                Result = Result.d.split("^");
                $('#txt_assetcod').val(Result[0]);
                $('#txt_assnme').val(Result[1]);
                $("#txt_prodtyp").val(Result[2]);
                $("#txt_pronme").val(Result[3]);
                $('#txt_manuname').val(Result[4]);
                $('#txt_partno').val(Result[5]);
                $('#txt_macadd').val(Result[6]);
                $('#txt_purchcost').val(Result[7]);
                $('#txt_purchdte').val(Result[8]);
                $('#txt_serialno').val(Result[9]);
                $('#txt_expdte').val(Result[10]);
                $('#txt_assetloc').val(Result[11]);
                $('#txt_assetstate').val(Result[12]);
                $('#txt_associatewith').val(Result[13]);
                if (Result[14] == 1)
                    $('#txt_assetIsLeased').val('YES');
                else if (Result[14] == 0)
                    $('#txt_assetIsLeased').val('NO');
                //$('#txt_description').val(Result[13]);
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
            url: "assettransfer.aspx/WOKSTDET",
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
       
            //InputString = $("#txt_emp").val();
            InputString = $("[id*=hdUserId]").val();
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
      
            InputString = $("[id*=hdBrid]").val();;
            InputString = InputString + "¥" + 1;
        
    }
    if (Temp == 0) {
        $('#divtblPrincpleIntDtl').show();
        $('#tblticket').show();
    var Querystring = "GetUassetTview";
    $.ajax({
        type: "POST",
        contentType: "application/json; charset=utf-8",
        url: "BHAssetmanagement.aspx/GetUserTbleview",
        data: "{QueryStr : '" + Querystring + "',input :'" + InputString + "'}",
        dataType: "json",
        success: function (Result) {
            if (Result.d.length > 0) {
                $('#tblticket').empty();
                $('#tblticket').append('<thead class="bg-success text-white">< tr ><th scope="col">Asset code</th><th scope="col">Asset Name</th><th scope="col">Manufacture Name</th> <th scope="col">Asset State</th></tr></thead><tbody class="border border-dark">');
                for (var i = 0; i < Result.d.length; i++) {
                    $('#tblticket').append('<tr><td>' + Result.d[i].Asstcode + '</td>' +
                        '<td>' + Result.d[i].AsstNme + '</td>' +
                        '<td>' + Result.d[i].ManufName + '</td>' +
                        '<td>' + Result.d[i].AsstState + '</td>' +
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
var asscode;
function gr() {

    $('#tblticket').find('tr').click(function () {
        var row = $(this).find('td:first').text();
        shAstDetails(row);
        shWRkSDetails(row);
        asscode = row;
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
    var tran_frm;
    var trans_frm_emp;
    var trans_frm_br;
    var trans_frm_dept;
    if ($('#emprd').prop("checked") == true) {

        tran_frm = 2;
        trans_frm_emp = $("[id*=hdUserId]").val();
        trans_frm_br = "";
        trans_frm_dept = "";
    } else if ($('#branchrd').prop("checked") == true) {
        tran_frm = 1;
        trans_frm_emp = "";
        trans_frm_br = $("[id*=hdBrid]").val();
        trans_frm_dept = "";
    } else if ($('#deprd').prop("checked") == true) {
        tran_frm = 3;
        trans_frm_emp = "";
        trans_frm_br = "";
        trans_frm_dept = $("[id*=hdUserId]").val();
    } else {

        alert('No Option selected');
    }
    QueryString = "assettransfer";
    if ($('#emptr').prop("checked") == true) {
        //                      1                             2                        3          4        5         6           7                  8                              9                     10                     11                   12
        //                 requested by              transfer to employee code    branch        dpt       transto   tra/dis   assetcode          reason for transfer          emp/br/dep          trans_code              trans_br           trans_dpt
        var input = $("[id*=hdUserId]").val() + "¥" + $('#txt_emp_tr').val() + "¥" + "" + "¥" + "" + "¥" + 2 + "¥" + 1 + "¥" + asscode + "¥" + $('#transfer_reason').val() + "¥" + tran_frm + "¥" + trans_frm_emp + "¥" + trans_frm_br + "¥"+trans_frm_dept ;


    } else if ($('#branchtr').prop("checked") == true) {
        //                      1                       2                    3                      4        5         6           7                  8                              9                     10                     11                   12
        //                 requested by         transfertoemployeecode    branch                  dpt       transto   tra/dis   assetcode          reason for transfer          emp/br/dep          trans_code              trans_br           trans_dpt
        var input = $("[id*=hdUserId]").val() + "¥" + "" + "¥" + $('#txt_branch_tr').val() + "¥" + "" + "¥" + 1 + "¥" + 1 + "¥" + asscode + "¥" + $('#transfer_reason').val() + "¥" + tran_frm + "¥" + trans_frm_emp + "¥" + trans_frm_br + "¥" + trans_frm_dept;



    } else if ($('#deptr').prop("checked") == true) {
        //                      1                     2           3             4                                        5         6           7                  8                              9                     10                     11                   12
        //                 requested by   transfertoemployeecode branch        dpt                                    transto   tra/dis   assetcode          reason for transfer                emp/br/dep          trans_code              trans_br           trans_dpt
        var input = $("[id*=hdUserId]").val() + "¥" + "" + "¥" + "" + "¥" + $('#ddldep_tr option:selected').val() + "¥" + 3 + "¥" + 1 + "¥" + asscode + "¥" + $('#transfer_reason').val() + "¥" + tran_frm + "¥" + trans_frm_emp + "¥" + trans_frm_br + "¥" + trans_frm_dept;
    }
    $.ajax({
        type: "POST",
        contentType: "application/json; charset=utf-8",
        url: "assettransfer.aspx/confirmproblem",
        data: "{QueryString:'" + QueryString + "',input : '" + input + "'}",
        dataType: "json",
        success: function (Result) {

            Result = Result.d;
            alert(Result);

            window.open('assettransfer.aspx', '_self');
        },

        error: function (Result) {
            alert(Result);
        }
    });


}


function Getemployeedetails() {

    var QueryString ="emp_dtl";
    var input = $('#txt_emp_tr').val();
    $.ajax({
        type: "POST",
        contentType: "application/json; charset=utf-8",
        url: "assettransfer.aspx/getempdetails",
        data: "{QueryString:'" + QueryString + "',input:'"+input+"'}",
        dataType: "json",
        success: function (Result) {
            $('#txt_empnme_tr').val(Result.d);
        },
        error: function (Result) {
            alert(Result);
        }

    });

}



function getbranchnme(){

    var QueryString ="brach_dtl";
    var input = $('#txt_branch_tr').val();
    $.ajax({
        type: "POST",
        contentType: "application/json; charset=utf-8",
        url: "assettransfer.aspx/getbrachdetails",
        data: "{QueryString:'" + QueryString + "',input:'" + input + "'}",
        dataType: "json",
        success: function (Result) {
            $('#txt_brnme_tr').val(Result.d);
        },
        error: function (Result) {
            alert(Result);
        }

    });


}



//dispose submit function

function submit2() {
    var tran_frm;
    var trans_frm_emp;
    var trans_frm_br;
    var trans_frm_dept;
    if ($('#emprd').prop("checked") == true) {

        tran_frm = 2;
        trans_frm_emp = $("[id*=hdUserId]").val();
        trans_frm_br = "";
        trans_frm_dept = "";
    } else if ($('#branchrd').prop("checked") == true) {
        tran_frm = 1;
        trans_frm_emp = "";
        trans_frm_br = $("[id*=hdBrid]").val();
        trans_frm_dept = "";
    } else if ($('#deprd').prop("checked") == true) {
        tran_frm = 3;
        trans_frm_emp = "";
        trans_frm_br = "";
        trans_frm_dept = $("[id*=hdUserId]").val();
    } else {

        alert('No Option selected');
    }
    QueryString = "assettransfer";
  
        //                  1                2                   3        4        5         6           7                  8                                  9                     10                     11                   12
        //            requested by   transfertoemployeecode    branch    dpt       transto   tra/dis   assetcode          reason for transfer              emp/br/dep            trans_code              trans_br           trans_dpt
    var input = $("[id*=hdUserId]").val() + "¥" + "" + "¥" + "" + "¥" + "" + "¥" + "" + "¥" + 0 + "¥" + asscode + "¥" + $('#txt_reason_fr_iisue').val() + "¥" + tran_frm + "¥" + trans_frm_emp + "¥" + trans_frm_br + "¥" + trans_frm_dept;


    
    $.ajax({
        type: "POST",
        contentType: "application/json; charset=utf-8",
        url: "assettransfer.aspx/confirmproblem",
        data: "{QueryString:'" + QueryString + "',input : '" + input + "'}",
        dataType: "json",
        success: function (Result) {

            Result = Result.d;
            alert(Result);

            window.open('assettransfer.aspx', '_self');
        },

        error: function (Result) {
            alert(Result);
        }
    });


}



function asstransdtl() {
    // alert('WORKLOG VIEW'+dt);
    // $('#worklogtb').empty();
    var InputString = $("[id*=hdUserId]").val();
    var Querystring = "transfer_his";
    $.ajax({
        type: "POST",
        contentType: "application/json; charset=utf-8",
        url: "assettransfer.aspx/Gttransdtl",
        data: "{QueryStr : '" + Querystring + "',input :'" + InputString + "'}",
        dataType: "json",
        success: function (Result) {
            if (Result.d.length > 0) {
                $('#wlogblk').empty();
                $('#wlogblk').show();

                //$('#worklogtb').append('<thead class="bg-success text-white">< tr ><th scope="col">DATE</th><th scope="col">EMPLOYEE CODE</th><th scope="col">DEPARTMENT</th><th scope="col">Summary</th><th scope="col">Decription</th><th scope="col">Ticket Status</th></tr></thead><tbody class="border border-dark">');
                for (var i = 0; i < Result.d.length; i++) {

                    //$('#worklogtb').append('<tr data-toggle="modal" data-target="#exampleModal" onmousedown="rwdetails()"><td>' + Result.d[i].Date + '</td>' +
                    //    '<td> '+ Result.d[i].Empcode + '</td > ' +
                    //'<td>'+ Result.d[i].Department + '</td> ' +
                    //    '<td>'+ Result.d[i].Summary + '</td>' +
                    //    '<td>' + Result.d[i].Description + '</td>' +
                    //    '<td>' + Result.d[i].Ticketstatus + '</td>' + '</tr>');
                    $('#wlogblk').append('<div class="card border-success mb-1 bg-light rounded" style="max-width: 100rem;">' +
                        ' <div class="card-body ">' +
                        //' <h5 class="card-title">' + Result.d[i].Ename + ' <h6>  ' + Result.d[i].Empcode + '</h6></h5>' +
                        '<p class="card-text" style="max-height:300px;overflow-y:scroll;">Requested date :' + Result.d[i].reqDate +
                        '</p><p></br> Requested By  :' + Result.d[i].reqbyEmpcode + '</p>' +
                        '</p><p></br> Requested Branch  :' + Result.d[i].reqbranch + '</p>' +
                        '</p><p></br> Requested AssetType  :' + Result.d[i].asst_typ+ '</p>' +
                        '</p><p></br> Requested AssetCode  :' + Result.d[i].asst_code+ '</p>' +
                        '</p><p></br> Transfer or dispose  :' + Result.d[i].trans_disp + '</p>' +
                        '</p><p></br> transfer/dispose reason  :' + Result.d[i].trans_disp_res + '</p>' +
                        '</p><p></br> ritc verification  :' + Result.d[i].ritc_vri_sts + '</p>' +
                        '</p><p></br> ritc employee code  :' + Result.d[i].ritc_empcode + '</p>' +
                        '</p><p></br> ritc approve reject reason  :' + Result.d[i].ritc_apprv_rej_reason + '</p>' +
                        '</p><p></br> asset manager approve reject status  :' + Result.d[i].asstmng_apprv_rej_sts + '</p>' +
                        '</p><p></br> asset manager employee code  :' + Result.d[i].asst_mng_empcode + '</p>' +
                        '</p><p></br> asset manager approve reject reason  :' + Result.d[i].asst_mng_apprv_rej_reason + '</p>' +
                        ' </div> </div >');

                }

                //$('#worklogtb').append(
                //    '</tbody>');
            }
            else {
                //$('#btn_ADD').prop('disabled', false);
                //$('#wlremove').prop('disabled', true);
                //$('#wlsubmit').prop('disabled', true);
                //$('#worklogtb').empty();
                //$('#worklogtb').append('<thead class="bg-success text-white">< tr ><th scope="col">DATE</th><th scope="col">EMPLOYEE CODE</th><th scope="col">DEPARTMENT</th><th scope="col">Summary</th><th scope="col">Decription</th><th scope="col">Ticket Status</th></tr></thead><tbody class="border border-dark">');
                //$('#worklogtb').append('</tbody>');
                //$('#worklogtb').append('<br/><br/>');
                $('#wlogblk').empty();
                $('#wlogblk').show();
            }
        },
        error: function (Result) {
            alert(Result);
        }
    });



}
