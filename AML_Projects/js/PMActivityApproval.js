var tempwlog;
var CurrBin = '';
var CurrSts = '';
var ZoneID;
var global_tickno;
$(window).on('load', function () {
    Getimaczone();
    tempwlog = 0;
});

$(document).ready(function () {
    debugger;
    $('[data-toggle="tooltip"]').tooltip();
    $('#exampleModal').on('show.bs.modal', function (event) {
        var k = 0;
        i = i + 1;

        $('#txt_tickno').val($("[id*=hdUserId]").val());
        $('#txt_branch').val($('#worklogtb tr:eq(' + i + ') td:eq(2)').text());
        $('#txt_summary').val($('#worklogtb tr:eq(' + i + ') td:eq(3)').text());
        $('#txt_descript').text($('#worklogtb tr:eq(' + i + ') td:eq(4)').text());
    });
    $('#wlogaddd').on('show.bs.modal', function (event) {
        $('#wlogadd_entBy').val($("[id*=hdUserId]").val());
        //alert($("[id*=hdUserId]").val())

    });

    $('#wlogaddd').on('hide.bs.modal', function (event) {

        $('#wlogadd_entBy').val(null);
        $('#wlogadd_summary').val(null);
        $('#wlogadd_descript').val(null);

    });


    //--------attachment show details--
    //$('#attachements').on('show.bs.modal', function (event) {
    //    Attachmentshow();
    //});

    //$('#attachements').on('hide.bs.modal', function (event) {

    //    $('#AttachmentDtl').empty();

    //});



});

function PopUpExit() {
    window.open("Index.aspx", "_self");
}
var global_PM_Num= "";
//zone dropdown
function Getimaczone() {
    var QueryString = "get_fzm";
    $.ajax({
        type: "POST",
        contentType: "application/json; charset=utf-8",
        url: "AssRitcapprv.aspx/getimcbin",
        data: "{QueryString:'" + QueryString + "'}",
        dataType: "json",
        success: function (Result) {
            $('#ddl_im').empty();
            $('#ddl_im').append($("<option></option>").val("-1").html("All "));
            $.each(Result.d, function (data, value) {
                $('#ddl_im').append($("<option></option>").val(value.INCId).html(value.INCName));
            })
        },
        error: function (Result) {
            alert('Getimacbin()' + Result.d);
        }

    });

}
//Get PMActivities into the table
function getimaczoneticket() {
    debugger;
    var k;
    var inputstring;

    $('#divtblPrincpleIntDtl').show();
    $('#tblticket').show();
    // $('#TICK_TBL_NAME').text($('#ddlbin option:selected').text());

    var Querystring = "getBinwisePMactivities";
    if ($('#ddl_im option:selected').val() == -1) {

        inputstring = "";

    } else {
        var inputstring = $('#ddl_im option:selected').val();
    }

    // var InputString = 0; /*$('#ddlbin option:selected').val();*//*bin;*//*$("[id*=hdUserId]").val();*/
    $.ajax({
        type: "POST",
        contentType: "application/json; charset=utf-8",
        url: "PMActivityApproval.aspx/GetUserTble1",
        data: "{QueryStr : '" + Querystring + "',input:'" + inputstring + "'}",
        dataType: "json",
        success: function (Result) {
            if (Result.d.length > 0) {
                $('#tblticket').empty();
                $('#tblticket').append('<thead < tr ><td scope="col">NO</td><td scope="col">PM NUMBER</td><td scope="col">STATUS</td> <td scope="col">ACTIVITY DATE</td><td scope="col">DONE BY</td> <td scope="col">VISITED BRANCH</td></tr></thead><tbody>');
                for (var i = 0; i < Result.d.length; i++) {
                    k = i + 1;
                    $('#tblticket').append('<tr><td>' + k + '</td>' +
                        '<td>' + Result.d[i].PMNo + '</td>' +
                        '<td>' + Result.d[i].Status + '</td>' +
                        '<td>' + Result.d[i].ActivityDt + '</td>' +
                        '<td>' + Result.d[i].DoneBy + '</td>' +
                        '<td>' + Result.d[i].Branch + '</td>' +
                        /*'<td>' + Result.d[i].Status + '</td>' + */'</tr>');
                }
                $('#tblticket').append(
                    '</tbody>');
            } else {

                $('#tblticket').empty();
                $('#tblticket').hide();
                ModelPopWarning('No Data to Show..');
            }

        },
        error: function (Result) {
            alert(Result);
        }
    });



}
function gr() {
    debugger;
    $('#chk_apprv').prop('checked', false);
    $('#chk_rej').prop('checked', false);

    $('#tblticket').find('tr').click(function () {
        var row = $(this).find('td:eq(1)').text();
        global_PM_Num = row;
        tempwlog = 0;
        shdetails(row);
        GetAstDtlsApproval(row);
        WorkLogView(row);
        //UserApprvTview(row);
        debugger;
       
        $('#tblticket').removeEventListener();
    });
}

//var imac_typ;
function shdetails(tn) {
    debugger;
    $('#div_details').removeClass('d-none');
    $('#wo_installation').removeClass('d-none');
    $('#divStsChkBx').removeClass('d-none');
    $('#wldv').removeClass('d-none');
    $('#btnSave').removeClass('d-none');

    //$("#txt_callattenddte").datepicker('disable');

    var temp;
    var input = tn;
    QueryString = 'getPM_details';
    // alert(tn.substring(0, 2) == 'IN');



    $.ajax({
        type: "POST",
        contentType: "application/json; charset=utf-8",
        url: "PMActivityApproval.aspx/getlinkdata",
        data: "{QueryString:'" + QueryString + "',input : '" + input + "'}",
        dataType: "json",
        success: function (Result) {
            Result = Result.d.split("^");
            //alert(Result);

            //imac_typ = Result[82];
            //$('#SRticket_NO').text('TICKET NO :' + Result[98]);
            //$('#zone_txt').text('ZONE :' + Result[99]);
            //$('#branch_txt').text('BRANCH :' + Result[5] + '/' + Result[6]);
            //if (Result[82] == 1) {
            //    $('#wo_bulk_movement').addClass('d-none');
            //    $('#wo_bulk_installation').addClass('d-none');
            //    $('#wo_installation').removeClass('d-none');
            //    $('#wo_movement').addClass('d-none');
            //    $('#wo_decommision').addClass('d-none');
            //    $('#wo_dispose').addClass('d-none');



            $('#txt_pmNo').val(Result[0]);
            $('#txt_doneBy').val(Result[2] + ' / ' + Result[3]); 
            $('#txt_activitydate').val(Result[1]); 
            $('#txt_visitedBranch').val(Result[4] + ' / ' + Result[5]); 
            $('#txt_branchAddress').val(Result[6]); 
            $('#txt_zone').val(Result[7] + ' / ' + Result[8]); 
            $('#txt_updatedDateRTSE').val(Result[9]); 
            $('#txt_bin').val(Result[10]);
            debugger;
            CurrSts = Result[14];
            CurrBin = Result[15];
            ZoneID  = Result[16];
            global_tickno = Result[17];
            $('#txt_status').val(Result[11]); 
       
            if (Result[12] != '' && Result[13] != '') {
                $('#containerPMInstal').removeClass('d-none');
                $('#txt_IMACNo').val(Result[12]);
                $('#txt_numberofAssetsInstalled').val(Result[13]);
            }
            else {
                $("containerPMInstal").addClass("d-none");
            }   

        },
        error: function (Result) {

            alert(Result);
        }
    });
}
function GetAstDtlsApproval(tr) {
    //alert('hi');
    debugger;
    var input = tr;
    var k=0;
    var QueryString = "getPM_AssetdetailsAprvl";
    $.ajax({
        type: "POST",
        contentType: "application/json; charset=utf-8",
        url: "PMActivityApproval.aspx/GetAssetDetailsPM",
        data: "{QueryStr : '" + QueryString + "',input :'" + input + "'}",
        dataType: "json",
        success: function (Result) {
            debugger;
            if (Result.d.length > 0) {
                $('#PMUpdatCard').removeClass('d-none');
                $('#tblAssetList').empty(); //                                                                                         1                           2                            3                         4                            5                           6                            7                               8                                   9                              10                          11                           
                $('#tblAssetList').append('<thead class="theadid" style="background-color:#37a17c;color:white"> < tr ><td scope="col">NO</td><td scope="col">SERIAL NUMBER</td><td scope="col">NAME</td><td scope="col">TYPE</td><td scope="col">MANUFACTURER</td><td scope="col">MODEL</td><td scope="col">CRITICALITY</td><td scope="col">WARRANTY STARTS</td><td scope="col">WARRANTY ENDS</td><td scope="col">STATUS</td><td scope="col">REMARKS</td></tr></thead><tbody>');
                alert(Result.d.length);
                for (var i = 0; i < Result.d.length; i++) {
                    k = i + 1;
                    //alert(k);
                    $('#tblAssetList').append('<tr><td>' + k + '</td>' +
                        '<td id="SerNum">' + Result.d[i].SerNo + '</td>' +
                        '<td id="AsName">' + Result.d[i].Name + '</td>' +
                        '<td id="Typ">' + Result.d[i].Type + '</td>' +
                        '<td id="Manu">' + Result.d[i].Manufa + '</td>' +
                        '<td id="Mod">' + Result.d[i].Model + '</td>' +
                        '<td id="Critic">' + Result.d[i].Criticality + '</td>' +
                        '<td id="StDate">' + Result.d[i].WStdate + '</td>' +
                        '<td><id="EnDate">' + Result.d[i].WEnddate +'</td>' +
                        '<td><id="Sts">' + Result.d[i].Status +'</td>' +
                        '<td id="Rem">' + Result.d[i].Remarks + '</td>' +
                        //'<td><input type="text" id="AssetTag' + (i + 1) + '"value="' + Result.d[i].AstTag + '"/></td>' +
                        '</tr>'); 

                    //loadassetstate("AssetState" + (i + 1));
                }
                $('#tblAssetList').append(
                    '</tbody>');
                $('#CardNoAssetstoShow').hide();
            }
            else{


                //$('#tblAssetList').empty();
                //$('#tblAssetList').hide();
                //$('#CardNoAssetstoShow').show();
                //$('#PMUpdatCard').hide();
            }
        },
        error: function (Result) {
            alert(Result);
        }
    });

}
function DocView(dt) {
    debugger;
    //alert(dt);
    Str = dt + "µ" + global_PM_Num;
    ViewDocumentPM(Str);
    //alert(Str);
}

function checkedd(k) {


    $('.checked').prop('checked', false);
    $('#' + k + '').prop('checked', true);

    //if ($('#chk_apprv').prop('checked') == true) {

    //    //$('#div_imac').removeClass('d-none');
    //    $('#div_apprv_reason').removeClass('d-none');
    //    $('#div_rej_reason').addClass('d-none');
    //}
    //else if ($('#chk_apprv').prop('checked') == true) {

    //    $('#div_imac').addClass('d-none');
    //    $('#div_apprv_reason').removeClass('d-none');
    //    $('#div_rej_reason').addClass('d-none');

    //}
    //else if ($('#chk_rej').prop('checked') == true) {

    //    //$('#div_imac').addClass('d-none');
    //    $('#div_apprv_reason').addClass('d-none');
    //    $('#div_rej_reason').removeClass('d-none');
    //}
}

function mwlogadd() {
    debugger;

    if (($('#wlogadd_summary').val()).trim() == "") {
        ModelPopWarning('Please Enter Summary..');

    } else if (($('#wlogadd_descript').val()).trim() == "") {

        ModelPopWarning('Please Enter Description..');


    } else if ($('#wlogadd_summary').val().length > 3500) {

        ModelPopWarning('Summary Exceed The Data Limit Please Reduce The Content..!! ');

    }
    //else if ($('#wlogadd_descript').val().length > 3900) {

    //    alert('Description Exceed The Data Limit Please Reduce The Content..!! ');

    //}
    else {
        //alert("hi");
        tempwlog = 1;
        // Addworklogtb();
        Wlog_Submit();

        //WorkLogView($('#ticket_show').val());
    }


}

function Wlog_Submit() {
    debugger;
    //r = $('#worklogtb tr:last').index();
    //r = r + 1;
    var UpdStatus = '';
    var InputString = '';
  

    if (($('#chk_apprv').prop('checked') == false) && ($('#chk_rej').prop('checked') == false)) {
        ModelPopWarning('Please Update the Status');
        return false;
    }
    else if (($('#chk_apprv').prop('checked') == true) && ($('#chk_rej').prop('checked') == false)) {

        UpdStatus = 1;
 //                       1                          2                                  3                                                          4                                                   5              6                 7
        InputString = global_tickno + "¥" + $("[id*=hdUserId]").val() + "¥" + $('#wlogadd_summary').val().replace(/[']/gi, '"') + "¥" + $('#wlogadd_descript').val().replace(/[']/gi, '"') + "¥" + UpdStatus + "¥" + 2036 + "¥" + global_PM_Num; 

    }
    else if (($('#chk_apprv').prop('checked') == false) && ($('#chk_rej').prop('checked') == true)) {

        UpdStatus = 2;
 //                       1                          2                                  3                                                          4                                                  5                6                  7           
        InputString = global_tickno + "¥" + $("[id*=hdUserId]").val() + "¥" + $('#wlogadd_summary').val().replace(/[']/gi, '"') + "¥" + $('#wlogadd_descript').val().replace(/[']/gi, '"') + "¥" + UpdStatus + "¥" + ZoneID + "¥" + global_PM_Num; 
    }

    //                       1                          2                                  3                                                          4                                                5               6                  7           
    //var InputString = global_tickno + "¥" + $("[id*=hdUserId]").val() + "¥" + $('#wlogadd_summary').val().replace(/[']/gi, '"') + "¥" + $('#wlogadd_descript').val().replace(/[']/gi, '"') + "¥" + CurrSts + "¥" + CurrBin + "¥" + global_PM_Num; 
    //alert(InputString);
    var Querystring = "savewlogdetailsPMAprvl";
    tempwlog = 1;


    $.ajax({
        type: "POST",
        contentType: "application/json; charset=utf-8",
        url: "PMActivityApproval.aspx/insertwlog",
        data: "{QueryStr : '" + Querystring + "',input :'" + InputString + "'}",
        dataType: "json",
        success: function (Result) {
            $('#wlogaddd').modal('hide');
            if (Result.d.length > 0) {
                Result = Result.d;
                //alert(Result);
                WorkLogView(global_PM_Num);
            }
        },
        error: function (Result) {
            alert(Result.d);
        }
    });
    //    $('#worklogtb tr:eq(' + r + ') td:eq(3)').attr('contenteditable', false);
    //    $('#worklogtb tr:eq(' + r + ') td:eq(4)').attr('contenteditable', false);
    //    $('#btn_ADD').prop('disabled', false);
    //    $('#wlremove').prop('disabled', true);
    //$('#wlsubmit').prop('disabled', true);
    //alert($('#ticket_show').text());

}


function WorkLogView(dt) {
    debugger;
    //alert(dt);
    //$('#worklogtb').empty();
    $('#wlogblk').empty();
    $('#wldv').show();
    $('#wlogblk').show();
    var InputString = dt;
    var Querystring = "GetAllWlogPMAprvl";
    $.ajax({
        type: "POST",
        contentType: "application/json; charset=utf-8",
        url: "PMActivityApproval.aspx/GtWlogTble",
        data: "{QueryStr : '" + Querystring + "',input :'" + InputString + "'}",
        dataType: "json",
        success: function (Result) {
            if (Result.d.length > 0) {
                $('#worklogtb').empty();
                $('#wlogblk').empty();
                //$('#worklogtb').append('<thead class="bg-success text-white">< tr ><th scope="col">DATE</th><th scope="col">EMPLOYEE CODE</th><th scope="col">DEPARTMENT</th><th scope="col">Summary</th><th scope="col">Decription</th><th scope="col">Ticket Status</th></tr></thead><tbody class="border border-dark">');
                for (var i = 0; i < Result.d.length; i++) {

                    //$('#worklogtb').append('<tr data-toggle="modal" data-target="#exampleModal" onmousedown="rwdetails()"><td>' + Result.d[i].Date + '</td>' +
                    //    '<td> '+ Result.d[i].Empcode + '</td > ' +
                    //'<td>'+ Result.d[i].Department + '</td> ' +
                    //    '<td>'+ Result.d[i].Summary + '</td>' +
                    //    '<td>' + Result.d[i].Description + '</td>' +
                    //    '<td>' + Result.d[i].Ticketstatus + '</td>' + '</tr>');
                    //------------------------------wlcard----
                    $('#wlogblk').append('<div class="card chat-box border-success mb-1 bg-light rounded" style="max-width:100rem;">' +
                        ' <div class="card-body ">' +
                        '<div class= "text-right" ><span class="text-left">' + Result.d[i].Bin + '&nbsp&nbsp&nbsp&nbsp</span> <span class="text-left">' + Result.d[i].Department + '&nbsp&nbsp&nbsp&nbsp</span> <span class="text-right">' + Result.d[i].Date + '</span></div >' +
                        ' <h5 class="card-title">' + Result.d[i].Ename + ' <h6>  ' + Result.d[i].Empcode + '</h6></h5>' +
                        //  '<p class="card-text" style="max-height:300px;overflow-y:scroll;">Sumnmary :' + Result.d[i].Summary + '</br> Description  :' + Result.d[i].Description + '</p>' +
                        '<label for="">Summary : <span class="text-danger mt-0"></span></label>' + '<br/>' +
                        '<textarea id="' + 's' + i + '" class=" form-control mt-0" rows="2" style="width:100%;background-color:white;" name="Summary" onclick="" readonly>' + Result.d[i].Summary + '</textarea >' + '<br/>' +
                        '<label for="">Description : <span class="text-danger mt-0"></span></label>' + '<br/>' +
                        '<textarea id="' + 'd' + i + '" class=" form-control mt-0" rows="7" style="width:100%;background-color:white;" name="Description" onclick="" readonly>' + Result.d[i].Description + '</textarea >' +

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
            //alert("error");
            alert(Result);
        }
    });
}
var AprvSts;
var CurrBin;

function SubmitPMApprove() {
    debugger;


    if ($('#chk_apprv').prop('checked') == false && $('#chk_rej').prop('checked') == false) {

        ModelPopWarning("Please Update Status(Approve/Reject)");
    }
    else if (tempwlog == 0) {

        ModelPopWarning("Please Add WorkLog Before Submit");
    }
    else {
            if ($('#chk_apprv').prop('checked') == true && $('#chk_rej').prop('checked') == false) {

                AprvSts = 1;
                CurrBin = 2036;
            }
            else if ($('#chk_apprv').prop('checked') == false && $('#chk_rej').prop('checked') == true) {

                AprvSts = 2;
                CurrBin = ZoneID;
            }

        var input = global_PM_Num + "¥" + $("[id*=hdUserId]").val() + "¥" + AprvSts + "¥" + CurrBin;
         //alert(input);

            QueryString = "UpdateStsPMA";
            $.ajax({
                type: "POST",
                contentType: "application/json; charset=utf-8",
                url: "PMActivityApproval.aspx/Submit",
                data: "{QueryString:'" + QueryString + "',input : '" + input + "'}",
                dataType: "json",
                success: function (Result) {
                    Result = Result.d;
                    //alert(Result);
                    ModelPopWarning(Result);
                    setTimeout(function () {
                        window.open('PMActivityApproval.aspx', '_self');
                    }, 5000);

                },

                error: function (Result) {
                    alert(Result);
                }
            });
        

         }
}

    



