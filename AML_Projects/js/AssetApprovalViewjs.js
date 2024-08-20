$(window).on('load', function () {
    $("#WORKSTDETAILS").hide();
    $("#div_bran").hide();
    $("#div_dept").hide();
    $('#emprd').prop("checked", true);
    $('#txt_emp').val($("[id*=hdUserId]").val());
    $('#tblticket').empty();
    $('#divtblPrincpleIntDtl').hide();
    RitcAsstTview();
    Getdepartment();
   // RitcAsstTview();
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
        if ($("#txt_emp").val() == '') {
            alert('Enter Employee Code');
            Temp = 1;

        }else {
            InputString = $("#txt_emp").val();
            InputString = InputString + "¥" + 2;
           
        }
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
        if ($("#txt_branch").val() == '') {
            alert('Enter Branch Id');
            Temp = 1;
        } else {
            InputString = $("#txt_branch").val();
            InputString = InputString + "¥" + 1;
        }
    }
    if (Temp == 0) {
        $('#divtblPrincpleIntDtl').show();
        $('#tblticket').show();
    var Querystring = "GetUassetTview";
    $.ajax({
        type: "POST",
        contentType: "application/json; charset=utf-8",
        url: "AssetApprovalView.aspx/GetUserTbleview",
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
            }
        },
        error: function (Result) {
            alert(Result);
        }
    });
}


}


function RitcAsstTview() {
    var Temp = 0;
    var InputString;
    InputString = $("[id*=hdUserId]").val();
        $('#divtblPrincpleIntDtl').show();
        $('#tblticket').show();
    var Querystring = "ritcbhapprovalasst";
        $.ajax({
            type: "POST",
            contentType: "application/json; charset=utf-8",
            url: "AssetApprovalView.aspx/GetUserTbleview",
            data: "{QueryStr : '" + Querystring + "',input :'" + InputString + "'}",
            dataType: "json",
            success: function (Result) {
                if (Result.d.length > 0) {
                    $('#tblticket').empty();
                    $('#tblticket').append('<thead classGetUassetTview="bg-success text-white"><tr><th scope="col">Asset code</th><th scope="col">Asset Name</th><th scope="col">Manufacture Name</th> <th scope="col">Asset State</th></tr></thead><tbody class="border border-dark">');
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
                }
            },
            error: function (Result) {
                alert(Result);
            }
        });
    


}






function gr() {

    $('#tblticket').find('tr').click(function () {
        var row = $(this).find('td:first').text();
        shAstDetails(row);
        shWRkSDetails(row);
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
            $('#ddldep').append($("<option></option>").val("-1").html("Select Department "));
            $.each(Result.d, function (data, value) {

                $('#ddldep').append($("<option></option>").val(value.ReqId).html(value.ReqName));
            })
        },
        error: function (Result) {
            alert(Result);
        }

    });

}
  