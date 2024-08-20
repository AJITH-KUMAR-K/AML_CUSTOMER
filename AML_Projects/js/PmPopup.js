//$(document).ready(function () {
//    ////$('#wlogadddPM').on('show.bs.modal', function (event) {
//    ////    $('#wlogadd_entByPM').val($("[id*=hdUserId]").val());
//    ////    alert($("[id*=hdUserId]").val())
//    //    $('#wlogadddPM').removeClass("d-none", function event);
//    //});

//    //$('#wlogadddPM').on('hide.bs.modal', function (event) {

//    //    $('#wlogadd_entByPM').val(null);
//    //    $('#wlogadd_summaryPM').val(null);
//    //    $('#wlogadd_descriptPM').val(null);

//    //});
//    debugger;

//});
var temp1 = 0;
var WLID = '';
var tempwlog = 0;
//var global_tickno='';

//$(window).on('load', function () {
//    debugger;
//    GetBin();
//    tempwlog = 0;
//});
var BinPM = '';
function GetBin() {           //To get the Bin using zone-only for RTSE belong- @Work Log
    //debugger;
    var QueryString='GetZonePM';
    var input = ($("[id*=hdUserId]").val());

    $.ajax({
        type: "POST",
        contentType: "application/json; charset=utf-8",
        url: "Binowner.aspx/GetBinPM",
        data: "{QueryString:'" + QueryString + "',input : '" + input + "'}",
        dataType: "json",
        success: function (Result) {


            if (Result.d.length > 0) {
                Result = Result.d.split("^");

                //alert(Result.d.Name);

                BinPM = Result[0]
                //alert(BinPM);

                //document.getElementById("pm_empbchstk_nme").value = Result[0];
                //$('#pm_txt_asstLoc_stk').val(Result[4]);
                //Get_AssetDtls();
            }
            else {
                //$('#tblAssetList').hide();
                BinPM = '';
                //alert('Non RTSE logged in');
            }
        },
        error: function (Result) {

            alert(Result.d);
        }


    });
}
function AddWLPM() {
    debugger;
    //alert(global_tickno);

    //$('#wlogadddPM').RemoveClass("d-none");
    $('#wlogadddPM').show();
    $('#wlogadd_entByPM').val($("[id*=hdUserId]").val());

}
function CloseWLPMA() {
    $('#wlogadddPM').hide();
    $('#wlogadd_entByPM').val(null);
    $('#wlogadd_summaryPM').val(null);
    $('#wlogadd_descriptPM').val(null);
}

function DateConverter(date_frm) {

    var dateString1 = date_frm;
    var allDate1 = dateString1.split(' ');
    var thisDate1 = allDate1[0].split('-');
    var DateConverted = [thisDate1[2], thisDate1[1], thisDate1[0]].join("-");
    return DateConverted;
}
//------------------------------Branch Item Details---------------------------->>>
function pmEmpdetails() {
    //debugger;

    WorkLogViewPM(global_tickno,'');

    //alert("heeree");

        $('#PMUpdatCard').show();
        $('#tblAssetList').show();
        var QueryString = "Getbranchdtls";
        var input = $("#pm_empbchstk_id").val();


        $.ajax({

            type: "POST",
            contentType: "application/json; charset=utf-8",
            url: "Binowner.aspx/getbranchdt",
            data: "{QueryString:'" + QueryString + "',input : '" + input + "'}",
            dataType: "json",
            success: function (Result) {

                if (Result.d.length > 0) {

                    Result = Result.d.split("^");



                    document.getElementById("pm_empbchstk_nme").value = Result[0];
                    $('#pm_txt_asstLoc_stk').val(Result[4]);
                    Get_AssetDtls();
                }
                else {
                    $('#tblAssetList').hide();
                    alert('No Entries Found');

                }


            },
            error: function (Result) {

                alert(Result.d);
            }


        });

}

///----------------------------ASSET LISTS---------------------->>>
function RBExistingAsset() {
    $('#PMInstaCard').hide();
    $('#PMUpdatCard').show();
    if ($('#pm_empbchstk_id').val() == '') {
        ModelPopWarning("Please Enter Branch ID..");
    }
}
function CBInstal() {
    if ($('#chPMInstal').prop("checked") == true) {
        $('#PMInstaCard').show();
        //$('#PMUpdatCard').hide();
        //$('#CardNoAssetstoShow').hide();
        if ($('#pm_empbchstk_id').val() == '') {
            ModelPopWarning("Please Enter Branch ID..");
        }
        //var QueryString = "GetIMACnum";
        var getIMACno;

        getIMACno = "getIMACnumber";

        $.ajax({
            type: "post",
            contentType: "application/json; charset=utf-8",
            url: "Binowner.aspx/GetIMAC",
            data: "{QueryString:'" + getIMACno + "'}",
            dataType: "json",
            success: function (Result) {
                $('#pm_imacnumber').empty();
                $.each(Result.d, function (data, value) {

                    $('#pm_imacnumber').append($("<option></option>").val(value.Id).html(value.Name));


                })
            },
            error: function (Result) {
                alert(Result.d);
                //alert('erRor');
            }
        });
    }
    else {
        $('#PMInstaCard').hide();
        $('#pm_ddlno_imac').val(null);
        $('#pm_imacnumber').val(null);
    }

}
function RBExistingAssetChng() {
    //$('#pm_txt_AgrmntDt_bi').empty();
    $('#pm_ddlno_imac').val("");
    $('#pm_txt_AgrmntDt_bi').val(""); 
    $('#pm_imacnumber').val(-1);

}

function Get_AssetDtls() {
    debugger;

    var Querystring = "getAsstDtls";
    var InputString = $('#pm_empbchstk_id').val();
    $.ajax({
        type: "POST",
        contentType: "application/json; charset=utf-8",
        url: "Binowner.aspx/GetAssetDetails",
        data: "{QueryStr : '" + Querystring + "',input :'" + InputString + "'}",
        dataType: "json",
        success: function (Result) {
            debugger;
            if (Result.d.length > 0) {
                $('#tblAssetList').empty(); //                                           1                          2                               3                            4                             5                                   6                                      7                                 8                            9                          10                          11
                $('#tblAssetList').append('<thead class="theadid"> < tr ><td scope="col">NO</td><td scope="col">ASSET TYPE</td><td scope="col">MANUFACTURER</td><td scope="col">MODEL</td><td scope="col">CRITICALITY</td><td scope="col">WARRANTY START DATE</td><td scope="col">WARRANTY END DATE</td><td scope="col">ASSET NAME</td><td scope="col">STATUS</td><td scope="col">REMARKS</td><td scope="col">SERIAL NUMBER</td></tr></thead><tbody>');
                for (var i = 0; i < Result.d.length; i++) {
                    k = i + 1;
                    $('#tblAssetList').append('<tr><td>' + k + '</td>' +
                        '<td id="AssetType">' + Result.d[i].Type + '</td>' +
                        '<td id="ManName">' + Result.d[i].ManName + '</td>' +
                        '<td id="Name">' + Result.d[i].Name + '</td>' +
                        '<td id="CrName">' + Result.d[i].CrName + '</td>' +
                        '<td id="StDate">' + Result.d[i].Stdate + '</td>' +
                        '<td id="EndDate">' + Result.d[i].Enddate + '</td>' +
                        '<td><input type="text" id="AssetName' + (i + 1) + '"/></td>' +
                        '<td><select id="AssetState' + (i + 1) + '"></select></td>' +
                        '<td><textarea id="remarks' + (i + 1) + '"/></td>' +
                        '<td id="SerNo">' + Result.d[i].TagName + '</td>' + '</tr>');
                    loadassetstate("AssetState" + (i + 1));
                }
                $('#tblAssetList').append(
                    '</tbody>');
                $('#CardNoAssetstoShow').hide();
            } else {
                temp1 = 1;
                $('#tblAssetList').empty(); 
                $('#tblAssetList').hide();
                $('#CardNoAssetstoShow').show();
                $('#PMUpdatCard').hide(); 
            }
        },
        error: function (Result) {
            alert(Result.d);
        }
    });

}
function loadassetstate(asset) {

    $.ajax({
        type: "POST",
        contentType: "application/json; charset=utf-8",
        url: "Binowner.aspx/GetAssetStateDetails",
        data: "{QueryString:''}",
        dataType: "json",
        success: function (Data) {
            debugger;
            $('#' + asset).append($("<option></option>").val('-1').html('------select-------'));
            $.each(Data.d, function (data, value) {
                $('#' + asset).append($("<option></option>").val(value.Id).html(value.Name));
            })
        }
    })
}

function mwlogaddPM() {
    debugger;

    if (($('#wlogadd_summaryPM').val()).trim() == "") {
        ModelPopWarning('Please Enter Summary..');

    } else if (($('#wlogadd_descriptPM').val()).trim() == "") {

        ModelPopWarning('Please Enter Description..');


    } else if ($('#wlogadd_summaryPM').val().length > 3500) {

        ModelPopWarning('Summary Exceed The Data Limit Please Reduce The Content..!! ');

    }
    //else if ($('#wlogadd_descript').val().length > 3900) {

    //    alert('Description Exceed The Data Limit Please Reduce The Content..!! ');

    //}
    else {
        //alert("hi");
        tempwlog = 1;
        // Addworklogtb();
        Wlog_SubmitPM();

        //WorkLogView($('#ticket_show').val());
    }


}

function Wlog_SubmitPM() {
    debugger;
    r = $('#worklogtb tr:last').index();
    r = r + 1;
    //var UpdStatus='';


    //if (($('#chk_apprv').prop('checked') == false) && ($('#chk_rej').prop('checked') == false)) {
    //    ModelPopWarning('Please Update the Status');
    //    return false;
    //}
    //else if (($('#chk_apprv').prop('checked') == true) && ($('#chk_rej').prop('checked') == false)) {

    //    UpdStatus = 1;

    //}
    //else if (($('#chk_apprv').prop('checked') == false) && ($('#chk_rej').prop('checked') == true)) {

    //    UpdStatus = 2;
    //}

    //When saving Worklog ticket status must be In Progress
    //When saving New Worklog before generating PM No., must be saved using SR number, and should be updated with PM Number Later
   
    //                       1                       2                                     3                                                            4                                                 5                                              
    var InputString = global_tickno + "¥" + $("[id*=hdUserId]").val() + "¥" + $('#wlogadd_summaryPM').val().replace(/[']/gi, '"') + "¥" + $('#wlogadd_descriptPM').val().replace(/[']/gi, '"')  + "¥" + BinPM;
    //alert(InputString);
    var Querystring = "saveNewWlogdetailsPMA";
    tempwlog = 1;


    $.ajax({
        type: "POST",
        contentType: "application/json; charset=utf-8",
        url: "Binowner.aspx/insertwlog",
        data: "{QueryStr : '" + Querystring + "',input :'" + InputString + "'}",
        dataType: "json",
        success: function (Result) {
            $('#wlogaddd').modal('hide'); 
            if (Result.d.length > 0) {
                Result = Result.d;
                WLID = Result;
                //alert(Result);
                WorkLogViewPM(global_tickno, Result);
                CloseWLPMA();
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


function WorkLogViewPM(dt,dr) {
    debugger;
    var InputString='';
    //alert(dt);
    //$('#worklogtb').empty();
    $('#wlogblkPM').empty(); 
    $('#wldv').show();
    $('#wlogblkPM').show();
    var txt = dt.toUpperCase();
    if (txt.substring(0, 2) == 'SR') {
        InputString = txt + "µ" + 1 + "µ" + dr;
    }
    else if (txt.substring(0, 2) == 'PM'){
        InputString = txt + "µ" + 2 + "µ" + dr;
    }
    //alert('Here');
    //alert(InputString);
    var Querystring = "GetAllWlogPMA";
    $.ajax({
        type: "POST",
        contentType: "application/json; charset=utf-8",
        url: "Binowner.aspx/GtWlogTble",
        data: "{QueryStr : '" + Querystring + "',input :'" + InputString + "'}",
        dataType: "json",
        success: function (Result) {
            if (Result.d.length > 0) {
                $('#worklogtb').empty();
                $('#wlogblkPM').empty();
                //$('#worklogtb').append('<thead class="bg-success text-white">< tr ><th scope="col">DATE</th><th scope="col">EMPLOYEE CODE</th><th scope="col">DEPARTMENT</th><th scope="col">Summary</th><th scope="col">Decription</th><th scope="col">Ticket Status</th></tr></thead><tbody class="border border-dark">');
                for (var i = 0; i < Result.d.length; i++) {

                    //$('#worklogtb').append('<tr data-toggle="modal" data-target="#exampleModal" onmousedown="rwdetails()"><td>' + Result.d[i].Date + '</td>' +
                    //    '<td> '+ Result.d[i].Empcode + '</td > ' +
                    //'<td>'+ Result.d[i].Department + '</td> ' +
                    //    '<td>'+ Result.d[i].Summary + '</td>' +
                    //    '<td>' + Result.d[i].Description + '</td>' +
                    //    '<td>' + Result.d[i].Ticketstatus + '</td>' + '</tr>');
                    //------------------------------wlcard----
                    $('#wlogblkPM').append('<div class="card chat-box border-success mb-1 bg-light rounded" style="max-width:100rem;">' +
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
                $('#wlogblkPM').empty();
                $('#wlogblkPM').show();

            }
        },
        error: function (Result) {
            //alert("error");
            alert(Result.d);
        }
    });
}

function PMAssetUpdate() {
    debugger;

    if ($('#pm_empbchstk_id').val() == '') {
        ModelPopWarning("Please Enter Branch ID..");
    }
    else if (tempwlog == 0) {

        ModelPopWarning("Please Add WorkLog Before Submit");
    }
    else if ($('#FileUpload1').val() == "") {

        ModelPopWarning("Please Attach Documents(PM Form & Asset Details)");

    }
    else {
        //alert("attachment1");
        var PMConfirm = "PMConfirm";
        var input_PM = "";
        var PMConfirm1 = "PMConfirm1";
        var PMConfirm2 = "PMConfirm2";
        var fileName1 = "";
        var imageData1 = "";
        var pmid;
        //-----------------------------------------------
        var fileList1 = document.getElementById("FileUpload1").files;
        debugger;
        var fileReader1 = new FileReader();
                   debugger;
            if (fileReader1 && fileList1 && fileList1.length) {
                var d = new Date();
                fileName1 = fileList1[0].name;
                fileReader1.readAsDataURL(fileList1[0]);
                fileReader1.onload = function () {
                    imageData1 = fileReader1.result;
                    if (imageData1.length > 1048576) {

                        alert("size exceeded the limit...Maximum Size 1 Mb");
                        return false;

                    }
                    else {
                        var date_frm = DateConverter($("#pm_txt_AgrmntDt_bi").val());
                        debugger;
                        if ($('#chPMInstal').prop("checked") == true) {
                            debugger;
                            //                    1                  2                      3                                   4                            5                  6                        7                              8                      9               10               
                            input_PM = PMConfirm + "µ" + PMConfirm1 + "µ" + $("#pm_empbchstk_id").val() + "µ" + $("[id*=hdUserId]").val() + "µ" + date_frm + "µ" + fileName1 + "µ" + $("#pm_ddlno_imac").val() + "µ" + $("#pm_imacnumber").val() + "µ" + global_tickno + "µ" + WLID;
                            //input_PM = PMConfirm + "µ" + PMConfirm1 + "µ" + $("#pm_empbchstk_id").val() + "µ" + $("[id*=hdUserId]").val() + "µ" + date_frm  + "µ" + fileName1 + "µ" + $("#pm_ddlno_imac").val() + "µ" + $("#pm_imacnumber").val() + "µ" + global_tickno + "µ" + input_PM; 
                        }
                        else {
                            //                  1                 2                        3                             4                           5                 6                  7                 8                 
                            input_PM = PMConfirm + "µ" + PMConfirm2 + "µ" + $("#pm_empbchstk_id").val() + "µ" + $("[id*=hdUserId]").val() + "µ" + date_frm + "µ" + fileName1 + "µ" + global_tickno + "µ" + WLID;
                            //input_PM = PMConfirm + "µ" + PMConfirm2 + "µ" + $("#pm_empbchstk_id").val() + "µ" + $("[id*=hdUserId]").val() + "µ" + date_frm  + "µ" + fileName1 + "µ" + global_tickno + "µ" + input_PM; 

                        }

                        $.ajax({
                            type: "POST",
                            contentType: "application/json; charset=utf-8",
                            url: "Binowner.aspx/ConfirmPMActivity",
                            data: "{InputStr:'" + input_PM + "',upload_file : '" + fileReader1.result + "'}",
                            dataType: "json",
                            success: function (Result) {
                                Result = Result.d;
                                var dtl = Result.split("¥");
                                $("#workorderadd").modal('hide');
                                pmid = dtl[1];
                                //alert(pmid);
                                UpdateAssetDtls(pmid);

                            },

                            error: function (Result) {
                                alert(Result.d);
                            }
                        });

                    }
                }
            }
    }
}
//-----------------------------------------------
function UpdateAssetDtls(pmid) {
    //alert(pmid);
    debugger
    var fileName2 = "";
    var imageData2 = "";
    var input_AssetDtls = "";
    var fileList2 = document.getElementById("FileUpload2").files;
    var fileReader2 = new FileReader();
    var table = document.getElementById('tblAssetList');
    var rowLength = table.rows.length;

    if ($('#FileUpload2').val() == "") {

        ModelPopWarning("Please Attach Documents(PM Form & Asset Details)");

    }
    else {
        debugger;
        if (fileReader2 && fileList2 && fileList2.length) {
            var d4 = new Date();
            fileName2 = fileList2[0].name;
            fileReader2.readAsDataURL(fileList2[0]);
            fileReader2.onload = function () {
                imageData2 = fileReader2.result;
                //alert(fileReader2.result);
                if (imageData2.length > 1048576) {

                    ModelPopWarning('size exceeded the limit...Maximum Size 1 Mb');

                }
                else
                {
                    for (var i = 1; i < rowLength; i++) {

                        var Type = table.rows[i].cells[1].innerHTML;
                        var Manufacturer = table.rows[i].cells[2].innerHTML;
                        var Name = table.rows[i].cells[3].innerHTML;
                        var Criticality = table.rows[i].cells[4].innerHTML;
                        var StartDate = table.rows[i].cells[5].innerHTML;
                        var EndDate = table.rows[i].cells[6].innerHTML;
                        var Product = $("#AssetName" + i).val();
                        Product = Product.trim();
                        var State = $("#AssetState" + i).val();
                        State = State.trim();
                        var Remarks = $("#remarks" + i).val();
                        Remarks = Remarks.trim();
                        var SerNo = table.rows[i].cells[10].innerHTML;
                        if (Product == '' || State == -1 || Remarks == '')
                        {
                            ModelPopWarning('Fill All the Fields');
                            return false;
                        }
                        else
                        {
                            //                  1               2                3               4                   5                6              7              8              9             10                11             
                            input_AssetDtls = Type + "¥" + Manufacturer + "¥" + Name + "¥" + Criticality + "¥" + StartDate + "¥" + EndDate + "¥" + Product + "¥" + State + "¥" + Remarks + "¥" + SerNo + "$" + input_AssetDtls;
                        }
                    }
                    input_AssetDtls = input_AssetDtls + "µ" + fileName2;

                    debugger
                    $.ajax({
                        type: "POST",
                        contentType: "application/json; charset=utf-8",
                        url: "Binowner.aspx/ConfirmPMActivity2",
                        data: "{InputStr2:'" + input_AssetDtls + "',upload_file2 : '" + fileReader2.result + "' ,val :'" + pmid + "'}",
                        dataType: "json",
                        success: function (Result) {    
                            Result = Result.d;
                            Result = Result.split("¥");
                            alert('WORK ORDER NO:' + Result[1]);
                            changesubmit();
                            window.open('Binowner.aspx', '_self');
                        },

                        error: function (Result) {
                            alert(Result.d);
                        }
                    });
                }
            }
        }    
    }
}