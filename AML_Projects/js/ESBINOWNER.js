
var imac_typ;
var wo_sr_value;
var wo_added;

function frmExit() {
    window.open("index.aspx", "_self");
}

$(window).on('load', function () {
    //setInterval(UserTview, 5000);
    GetBin();
    tempwlog = 0;

    global_tickno = '';

    //Esecurity-------

    var deptId = $("[id*=hdDeptId]").val()
   // alert(deptId);


    if (deptId == deptId) {

        //$('#SUBMIT').hide();
        //$('#SUBMITES').show();
        $('#Essub').show();
        $('#Essub1').show();
        $('#Essub2').show();
        $('#Cbin').hide();
        $('#cat1').hide();
        $('#div_subcat').hide();


    }
    //else {
    //    //$('#SUBMITES').hide();
    //    //$('#Essub').hide();
    //    $('#Essub1').hide();
    //    $('#Essub2').hide();
    //    $('#SUBMIT').show();
    //    $('#Cbin').show();
    //    $('#cat1').show();
    //    $('#div_subcat').show();
    //}

    //-----------------------------servicerequest------------------------------

    $("#txt_ReportedBysr").val($("[id*=hduname]").val());

    //-----------------------------servicerequest------------------------------
    //-----------------------------incidentcreation------------------------------

    $("#txt_ReportedByin").val($("[id*=hduname]").val());

    //-----------------------------incidentcreation------------------------------


    $("#txt_rptfrm").datepicker({
        dateFormat: 'dd/MM/yy',
        changeMonth: true,
        changeYear: true,
        stepMonths: true,
        todayHighlight: true,
        onSelect: function (dateText, inst) {

        }
    });

    $("#txt_rptto").datepicker({
        dateFormat: 'dd/MM/yy',
        changeMonth: true,
        changeYear: true,
        stepMonths: true,
        todayHighlight: true,
        onSelect: function (dateText, inst) {

        }
    });

    $("#txt_callattenddte").datepicker({
        dateFormat: 'dd/MM/yy',
        changeMonth: true,
        changeYear: true,
        stepMonths: true,
        todayHighlight: true,
        onSelect: function (dateText, inst) {

        }
    });

    $("#txtFDatec").datepicker({
        dateFormat: 'dd/MM/yy',
        changeMonth: true,
        changeYear: true,
        stepMonths: true,
        todayHighlight: true,
        maxDate: 0,
        onSelect: function (dateText, inst) {

        }
    });
    $("#txtTDatec").datepicker({
        dateFormat: 'dd/MM/yy',
        changeMonth: true,
        changeYear: true,
        stepMonths: true,
        todayHighlight: true,
        onSelect: function (dateText, inst) {

        }
    });

    $("#txt_rptto").datepicker({
        dateFormat: 'dd/MM/yy',
        changeMonth: true,
        changeYear: true,
        stepMonths: true,
        todayHighlight: true,
        onSelect: function (dateText, inst) {

        }
    });



    //$("#txt_warret_stde").datepicker({
    //    dateFormat: 'dd/MM/yy',
    //    changeMonth: true,
    //    changeYear: true,
    //    stepMonths: true,
    //    todayHighlight: true,
    //    maxDate: 0,
    //    onSelect: function (dateText, inst) {

    //    }
    //});
    binOwnerChck();
    GetAssetstate();

    //get_zone();


    //UserTview();
    //statusshow();
    //statsshow();
    //BinOwnshow();
    //$('#hosupport').hide();
    $('#txt_mac_ins1').hide();
    $('#txt_mac_mov1').hide();
    $('#txt_mac_stk1').hide();
    $('#txt_mac_dcmn1').hide();
    $('#txt_mac_dsps1').hide();

    $('#dept_stk2').hide();
    $('#dept_movfrm2').hide();
    $('#dept_dcmn2').hide();
    $('#dept_dsps2').hide();
    $('#dept_movto2').hide();
    $('#div_Release').hide();
    $('#tblapprv').hide();
    $('#lab_appr_tb').hide();
    $('#stsdiv').hide();
    $('#worklogtb').empty();
    $('#wldv').hide();
    $("#btn_wrkordr").hide();
    $('#btn_ADD').prop('disabled', false);
    $('#wlremove').prop('disabled', true);
    $('#wlsubmit').prop('disabled', true);
    row_added = 0;
    binown = 0;
    mov_asst_avi = 0;
    dec_asst_avi = 0;
    dis_asst_avi = 0;
    //$('#tickno_div').hide();
    //$('.date_bx').hide();
    //$('#sts_div').hide();
    //$('#search_div').hide();
    //$('#sts_dibin').hide();
    //$('input[type="checkbox"]').on('change', function () {
    //    $('input[type="checkbox"]').not(this).prop('checked', false);
    //    if ($('#chk_tickno').prop('checked') == true) {
    //        $('#tickno_div').show();
    //        $('.date_bx').hide();
    //        $('#sts_div').hide();
    //        $('#search_div').show();
    //        $('#txt_rptfrm').val('');
    //        $('#txt_rptto').val('');
    //        $('#ddlsts').val(-1);
    //        $('#ddlbin').val(-1);
    //        $('#sts_dibin').hide();

    //    }
    //    else if ($('#chk_rpt_frm').prop('checked') == true) {
    //        $('#tickno_div').hide();
    //        $('.date_bx').show();
    //        $('#sts_div').hide();
    //        $('#search_div').show();
    //        $('#txt_ticketno').val('');
    //        $('#ddlsts').val(-1);
    //        $('#ddlbin').val(-1);
    //        $('#sts_dibin').hide();

    //    }
    //    else if ($('#chk_sts').prop('checked') == true) {
    //        $('#tickno_div').hide();
    //        $('.date_bx').hide();
    //        $('#sts_div').show();
    //        $('#search_div').show();
    //        $('#txt_ticketno').val('');
    //        $('#txt_rptfrm').val('');
    //        $('#txt_rptto').val('');
    //        $('#ddlbin').val(-1);
    //        $('#sts_dibin').hide();
    //    }
    //    else if ($('#chk_binOwn').prop('checked') == true) {
    //        $('#tickno_div').hide();
    //        $('.date_bx').hide();
    //        $('#sts_div').hide();
    //        $('#search_div').show();
    //        $('#txt_ticketno').val('');
    //        $('#txt_rptfrm').val('');
    //        $('#txt_rptto').val('');
    //        $('#ddlsts').val(-1);
    //       // $('#sts_dibin').hide();
    //        $('#sts_dibin').show();
    //    }
    //    $('input[type="checkbox"]').removeEventListener();
    //});

    tempwlog = 0;
    GetSeverity();
    GetUrgency();
    shwexstreqtype1();
    GetImpact();
    GetINCategory();
    GetINsubCategory();
    //GetINsubCategorybinsr();
    GetRequestType();
    GetUrgencysr();
    imc_typ();

    wo_added = 0;
    GetRequestTypesr();
    imc_typsr();
    GetUrgencysr();
    //GetBin();



    //----------------getinfields
    GetINCategoryIn();
    GetINsubCategoryIn();
    GetImpactIn();
    GetUrgencyIn();
    GetSeverityin();
    GetImpactin();

    $('#div_sel_bin').removeClass('d-none');


    //-----pending dump report

    Bin();
    zone();
    Status();
    Category();
    $('#txtFDate').empty();
    $('#txtTDate').empty();

    $("#txtFDate").datepicker({
        dateFormat: 'dd/MM/yy',
        changeMonth: true,
        changeYear: true,
        stepMonths: true,
        todayHighlight: true,
        maxDate: 0,
        onSelect: function (dateText, inst) {

        }
    });
    $('#txtFDate').datepicker().datepicker('setDate', new Date());
    $("#txtTDate").datepicker({
        dateFormat: 'dd/MM/yy',
        changeMonth: true,
        changeYear: true,
        stepMonths: true,
        todayHighlight: true,
        maxDate: 0,
        onSelect: function (dateText, inst) {
        }
    });
    $('#txtTDate').datepicker().datepicker('setDate', new Date());

    Binresolved();

    equipmentLoad();
    


});
var i;
var binown;
function rwdetails() {
    $('#worklogtb').find('tr').click(function () {

        // $('#exampleModal').modal('show');
        i = $(this).index();

    });
    $('#select_tick_ls').removeEventListener();

}

$(document).ready(function () {
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

    });

    $('#wlogaddd').on('hide.bs.modal', function (event) {

        $('#wlogadd_entBy').val(null);
        $('#wlogadd_summary').val(null);
        $('#wlogadd_descript').val(null);

    });


    //--------attachment show details--
    $('#attachements').on('show.bs.modal', function (event) {
        Attachmentshow();
    });

    $('#attachements').on('hide.bs.modal', function (event) {

        $('#AttachmentDtl').empty();

    });



});


//------------hide and show release request field based on request typ---------
function reqtypb() {
    if ($('#ddlReqType').val() == 27) {
        $('#div_Release').show();
        $('#div_attch').hide();
    } else {
        $('#div_Release').hide();
        $('#div_attch').show();
    }
    if ($('#ddlReqType').val() == 28) {
        $('#imac_fields').show();
        $('#div_attch').hide();
    } else {
        $('#imac_fields').hide();
        $('#div_attch').show();

    }

    if ($('#ddlReqType').val() == 401) {
        $('#div_imactype').show();
    }
    else {
        $('#ddlimacType').val(0);
        $('#div_imactype').hide();

    }


}



//------------------------function binowner------

function GetEmpdetails1() {

    var e_cde = '';
    e_cde = document.getElementById('txt_EMPNO').value;
    if ($("#radGYes").prop("checked") == false && $("#radGNo").prop("checked") == false) {
        alert('Please Select Affected By Person Or Branch ');

    }
    else if (e_cde == null || e_cde == '') {

        alert('please fill EmpCode/BranchID textbox');
    } else {


        if ($("#radGYes").prop("checked") == true) {
            person = 1;
            // $('#div_emp_name').show();
            //  $('#div_emp_name').show();
            //  $('#br_dt_div').show();

        }
        else if ($("#radGNo").prop("checked") == true) {
            person = 0;
            // $('#div_emp_name').hide()
            //  $('#div_emp_name').hide()
            // $('#br_nme').show();


        }

        if (person == 1) {
            $('#txt_Email').empty;
            var QueryString = "GetEmployeeDetails";
            var input = $("#txt_EMPNO").val();




            $.ajax({

                type: "POST",
                contentType: "application/json; charset=utf-8",
                url: "Binowner.aspx/getFillempdetails",
                data: "{QueryString:'" + QueryString + "',input : '" + input + "'}",
                dataType: "json",
                success: function (Result) {
                    if (Result.d.length > 0) {
                        Result = Result.d.split("^");
                        $('#txt_EMPNAME').val(Result[0]);
                        $('#txt_BR_DEP').val(Result[1]);
                        // $('#txt_locationsr').val(Result[1]);

                        $('#txt_email').val($("#txt_EMPNO").val() + '@manappuram.com');


                        $('#txt_phno').val(Result[2]);
                        $('#txt_ALTPHNO').val(Result[2]);
                    } else {

                        alert('No Entries Found');
                        // $('#txt_Email').val('');
                    }


                },
                error: function (Result) {

                    alert(Result);
                }


            });
        }
        else if (person == 0) {
            var QueryString = "Getbranchdtls";
            var input = $("#txt_EMPNO").val();



            $.ajax({

                type: "POST",
                contentType: "application/json; charset=utf-8",
                url: "Binowner.aspx/getbranchdt",
                data: "{QueryString:'" + QueryString + "',input : '" + input + "'}",
                dataType: "json",
                success: function (Result) {
                    if (Result.d.length > 0) {

                        Result = Result.d.split("^");
                        $('#txt_EMPNAME').val(Result[0]);
                        $('#txt_BR_DEP').val(Result[0]);
                        //$('#txt_locationsr').val(Result[0]);

                        $('#txt_phno').val(Result[1]);
                        $('#txt_ALTPHNO').val(Result[2]);
                        $('#txt_email').val(Result[3]);
                    }
                    else {

                        alert('No Entries Found');
                        //  $('#txt_Email').val('');
                    }


                },
                error: function (Result) {

                    alert(Result);
                }


            });
        }
    }
}






function Attachmentshow() {
    debugger;
    $("#FileAttch").val("");
    // alert('WORKLOG VIEW'+dt);
    // $('#worklogtb').empty();glob
    $('#AttachmentDtl').show();
    var InputString = global_tickno;
    var Querystring = "AttachmentListES";
    $.ajax({
        type: "POST",
        contentType: "application/json; charset=utf-8",
        url: "ES_BIN_OWNER.aspx/AttchDtl",
        data: "{QueryStr : '" + Querystring + "',input :'" + InputString + "'}",
        dataType: "json",
        success: function (Result) {
            if (Result.d.length > 0) {
                $('#AttachmentDtl').empty();
                $('#AttachmentDtl').show();

                for (var i = 0; i < Result.d.length; i++) {


                    $('#AttachmentDtl').append('<div class="card border-success mb-1 bg-light rounded " id="' + Result.d[i].Id + '" style="max-width:100rem;">' +
                        ' <div class="card-body ">' +
                        ' <p class="card-title crdstyle">' + Result.d[i].Name + '</p>' +
                        '<input name="' + Result.d[i].Id + '" type="button" value="VIEW" class="btn-info" data-toggle="tooltip" data-placement="right" title="View"  onclick="DocView1(this.name)" data-backdrop="false"/>' +
                        '<input id="' + Result.d[i].Id + '" type="button" value="X" style="border-radius:40px;width:30px;font-size:10px;" class="btn-input float-lg-right" data-toggle="tooltip" data-placement="right" title="Delete" onclick="del_attach(this.id)" data-backdrop="false"/>' +

                        '</div> </div >');

                }


            }
            else {

                $('#AttachmentDtl').empty();
                $('#AttachmentDtl').show();
            }
        },
        error: function (Result) {
            alert(Result);
        }
    });



}

function DocView1(dt) {
   // alert(dt);
    ViewDocument(dt);
}


//function ViewDocument(dt) {
//    debugger;
//    String2 = "PROC_ITSM";
//    String3 = "AttShowES";
//    $.ajax({
//        type: "POST",
//        contentType: "application/json; charset=utf-8",
//        url: "ES_BIN_OWNER.aspx/DocumentsDownload",
//        data: "{QueryString:'" + dt + "',QueryString1:'" + String2 + "',InputString: '" + String3 + "'}",
//        dataType: "json",
//        success: function (Result) {
//            if (Result.d != 'NoData') {
//                var fileName = Result.d;
//                var myUrl = "IMAGES/" + fileName;
//                OpenDialog(myUrl, 875, 650, function (termsOfServiceAccepted) {
//                    if (termsOfServiceAccepted) {
//                        $.ajax({
//                            type: "POST",
//                            contentType: "application/json;charset=utf-8",
//                            url: "ES_BIN_OWNER.aspx/deleteDownloadFile",
//                            data: "{input: '" + fileName + "' }",
//                            dataType: "json",
//                            success: function (Result) {
//                            },
//                            error: function (Result) {
//                            }
//                        });
//                    }
//                });
//            } else {
//                alert("No Images Uploaded");
//            }

//        },
//        error: function (Result) {

//        }
//    });
//}

function OpenDialog(url, width, height, callback) {
    var win = window.open(url, "Manappuram Document Verification", width, height, "menubar=0,toolbar=0", "_blank");
    var timer = setInterval(function () {
        if (win.closed) {
            clearInterval(timer);
            var returnValue = true;
            callback(returnValue);
        }
    }, 10);
}

function ViewDocumentPM(String1) {
    debugger;
    String2 = "PROC_ITSM";
    String3 = "AttShowPM";
    $.ajax({
        type: "POST",
        contentType: "application/json; charset=utf-8",
        url: "ES_BIN_OWNER.aspx/DocumentsDownload",
        data: "{QueryString:'" + String1 + "',QueryString1:'" + String2 + "',InputString: '" + String3 + "'}",
        dataType: "json",
        success: function (Result) {
            if (Result.d != 'NoData') {
                var fileName = Result.d;
                var myUrl = "IMAGES/" + fileName;

                window.open("IMAGES/" + Result.d);

            } else {
                alert("No Attachments Uploaded");
            }

        },
        error: function (Result) {

        }
    });
}
function ViewDocumentCR(String1) {
    //alert(String1);
    debugger;
    String2 = "PROC_ITSM";
    String3 = "AttShowCR";
    $.ajax({
        type: "POST",
        contentType: "application/json; charset=utf-8",
        url: "ES_BIN_OWNER.aspx/DocumentsDownload",
        data: "{QueryString:'" + String1 + "',QueryString1:'" + String2 + "',InputString: '" + String3 + "'}",
        dataType: "json",
        success: function (Result) {
            if (Result.d != 'NoData' && Result.d != 'NO ATTACHMENT') {
                var fileName = Result.d;

                window.open("IMAGES/" + Result.d);


            } else {
                alert("No Attachments Uploaded");
            }

        },
        error: function (Result) {

        }
    });
}

function fileupload() {
    debugger;
    if (CurSts == 6) {
        ModelPopWarning('No More Uploads.!')
        return false;
    }
    else {
        if ($("#FileAttch").val() !== "") {

            var r = confirm('Are You Sure Upload File??');

            if (r == true) {


                var fileList = document.getElementById("FileAttch").files;
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

                        var d1 = fileList[0].name.split(".");




                        var InputData = fileName.replace(/[ ]/gi, '') + '¥' + global_tickno;
                        //alert(InputData);
                        $.ajax({
                            type: "POST",
                            contentType: "application/json; charset=utf-8",
                            url: "ES_BIN_OWNER.aspx/confirmdocument", 
                            data: "{val:'" + InputData + "',upload_file:'" + imageData + "'}",
                            dataType: "json",
                            success: function (Result) {

                                Result = Result.d;
                                Result = Result.split("¥"); 

                                if (Result[0] == "Successfully Uploaded") {
                                    alert('Successfully Uploaded');
                                    $('#atta_cnt').text(parseInt($('#atta_cnt').text()) + 1);
                                    Attachmentshow();
                                    // window.open('Binowner.aspx', '_self');
                                    //Getsuccessid();
                                } else {

                                    alert('Something Went Wrong');
                                }
                            },

                            error: function (Result) {
                                alert(Result.d);
                            }
                        });





                    }
                }
            } else {

                $("#FileAttch").val("");

            }
        } else {

            alert('No Files Attached');

        }
    }


}



var tempwlog;
var global_tickno;
var row_added;
var curr_status_id;
var curr_status_name;
var temp;
var Changed_bin;
var Bin_own_id;
function binOwnerChck() {
    debugger;
    //alert('entered into function');
    var k;

    var Querystring = "checkBinOwner1";

    var InputString = $("[id*=hdUserId]").val();
    // alert(InputString);

    $.ajax({
        type: "POST",
        contentType: "application/json; charset=utf-8",
        url: "ES_BIN_OWNER.aspx/bin_member_check",
        data: "{QueryStr : '" + Querystring + "',input :'" + InputString + "'}",
        dataType: "json",
        success: function (Result) {

            if (Result.d != 0) {


                $('#ddlbin').empty();
                $('#ddlbin').append($("<option></option>").val("-1").html("Select Your Bin "));
                $.each(Result.d, function (data, value) {
                    $('#ddlbin').append($("<option></option>").val(value.Id).html(value.Name));

                })
                //statusshow();
                statsshow();
                BinOwnshow();

            } else {

                alert('You Are Not Autherized To View This Page..');
                window.open('index.aspx', '_self');


            }
            //Result = Result.d.split("^");
            ////alert(Result[1]);
            //if (Result[0] == 0) {
            //    alert('You Are Not Authorized To View This Page...!!')
            //    window.open('index.aspx', '_self');



            //} else {
            //    binown = Result[0];
            //    $('#pge_ttl').text(Result[1].toUpperCase()+" BIN");
            //    $('#TICK_TBL_NAME').text(Result[1].toUpperCase() + " BIN TICKETS");
            //    UserTview(Result[0]);


            //}


        },
        error: function (Result) {
            alert(Result.d);
        }
    });



}

function mwlogadd() {
    debugger;
   // alert('click');
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
//change bin owner list
//function BinOwnerList() {

//    var intPrnc;

//    intPrnc = "GetStatus";

//    $.ajax({
//        type: "post",
//        contentType: "application/json; charset=utf-8",
//        url: "Binowner.aspx/ticketstatus",
//        data: "{QueryString:'" + intPrnc + "'}",
//        dataType: "json",
//        success: function (Result) {
//            $('#ddlsts').empty();
//            $('#ddlsts').append($("<option></option>").val("-1").html("Select status "));
//            $.each(Result.d, function (data, value) {
//                $('#ddlsts').append($("<option></option>").val(value.Id).html(value.Name));
//            })
//        },
//        error: function (Result) {
//            alert(Result);
//        }
//    });
//}


//------------------------------------------------------FEEBASED-----------------------------

////GetSupportTeam  ddlchBin
//function BinOwnshow() {

//    var intPrnc;

//    intPrnc = "GetBinownerR";

//    $.ajax({
//        type: "post",
//        contentType: "application/json; charset=utf-8",
//        url: "Binowner.aspx/BinOwner",
//        data: "{QueryString:'" + intPrnc + "'}",
//        dataType: "json",
//        success: function (Result) {
//            $('#ddlccurbin').empty();
//            $('#ddlchBin').empty();
//            //$('#ddlccurbin').append($("<option></option>").val("-1").html("Select bin owner "));
//           // $('#ddlchBin').append($("<option></option>").val("-1").html("Select bin owner "));
//            $.each(Result.d, function (data, value) {
//                $('#ddlccurbin').append($("<option></option>").val(value.Id).html(value.Name));
//                $('#ddlchBin').append($("<option></option>").val(value.Id).html(value.Name));
//            })
//        },
//        error: function (Result) {
//            alert(Result);
//        }
//    });
//}


//function BinOwnval(k) {


//    var intPrnc;

//    intPrnc = "GetBinownerR";

//    $.ajax({
//        type: "post",
//        contentType: "application/json; charset=utf-8",
//        url: "Binowner.aspx/BinOwner",
//        data: "{QueryString:'" + intPrnc + "'}",
//        dataType: "json",
//        success: function (Result) {


//            $.each(Result.d, function (data, value) {
//                //$('#ddlbin').append($("<option></option>").val(value.Id).html(value.Name));
//                //$('#ddlchBin').append($("<option></option>").val(value.Id).html(value.Name));
//                if (k == value.Name) {

//                    Changed_bin=(value.Id);

//                }
//            })
//        },
//        error: function (Result) {
//            alert(Result);
//        }
//    });
//}
//------------------------------------------------------FEEBASED END-----------------------------




//GetSupportTeam  ddlchBin
function BinOwnshow() {
    debugger;

    var intPrnc, input;
    intPrnc = "GetBinownerRHoapps";
    var inp = $('#ddlbin').val();
    if (inp == 1 || inp == -1) {
        input = 1;
    }
    else {
        input = inp;
    }
    $.ajax({
        type: "post",
        contentType: "application/json; charset=utf-8",
        url: "Binowner.aspx/BinOwner",
        data: "{QueryString:'" + intPrnc + "',input:'" + input + "'}",
        dataType: "json",
        success: function (Result) {
            //$('#ddlccurbin').empty();
            $('#ddlchBin').empty();
            $.each(Result.d, function (data, value) {
                //$('#ddlccurbin').append($("<option></option>").val(value.Id).html(value.Name));
                $('#ddlchBin').append($("<option></option>").val(value.Id).html(value.Name));
            })
        },
        error: function (Result) {
            alert(Result);
        }
    });
}

function BinOwnval(k) {

    debugger;
    var intPrnc, input;
    intPrnc = "GetBinownerRHoapps";
    var inp = $('#ddlbin').val();
    if (inp == 1 || inp == -1) {
        input = 1;
    }
    else {
        input = inp;
    }
    $.ajax({
        type: "post",
        contentType: "application/json; charset=utf-8",
        url: "Binowner.aspx/BinOwner",
        data: "{QueryString:'" + intPrnc + "',input:'" + input + "'}",
        dataType: "json",
        success: function (Result) {

            $.each(Result.d, function (data, value) {
                //$('#ddlbin').append($("<option></option>").val(value.Id).html(value.Name));
                //$('#ddlchBin').append($("<option></option>").val(value.Id).html(value.Name));
                if (k == value.Id) {

                    Changed_bin = (value.Id);
                    $('#ddlccurbin').val(value.Id);

                }
            })
        },
        error: function (Result) {
            alert(Result);
        }
    });
}


//function statusshow() {
//    debugger;

//    var intPrnc;

//    intPrnc = "GetStatus";

//    $.ajax({
//        type: "post",
//        contentType: "application/json; charset=utf-8",
//        url: "Binowner.aspx/ticketstatus",
//        data: "{QueryString:'" + intPrnc + "'}",
//        dataType: "json",
//        success: function (Result) {
//            $('#ddlstatus').empty();
//           // $('#ddlstatus').append($("<option></option>").val("-1").html("Select status "));
//            $.each(Result.d, function (data, value) {

//                    $('#ddlstatus').append($("<option></option>").val(value.Id).html(value.Name));


//            })
//        },
//        error: function (Result) {
//            alert('kk');
//        }
//    });
//}
function Currstatsshow(curst) {
    var intPrnc;

    intPrnc = "GetStatus";

    $.ajax({
        type: "post",
        contentType: "application/json; charset=utf-8",
        url: "Binowner.aspx/ticketstatus",
        data: "{QueryString:'" + intPrnc + "'}",
        dataType: "json",
        success: function (Result) {
            $.each(Result.d, function (data, value) {
                if (value.Id == curst) {
                    $('#txt_currentstatus').val(value.Name);
                    curr_status_id = value.Id;
                    curr_status_name = value.Name;
                }
            })
        },
        error: function (Result) {
            alert(Result);
        }
    });
}

function DocDocViewView(dt) {
    ViewDocument(dt);
}



function statsshow() {
    debugger;
    var intPrnc;

    intPrnc = "GetStatusforSearch";

    $.ajax({
        type: "post",
        contentType: "application/json; charset=utf-8",
        url: "Binowner.aspx/ticketstatus",
        data: "{QueryString:'" + intPrnc + "'}",
        dataType: "json",
        success: function (Result) {
            $('#ddlsts').empty();
            $('#ddlsts').append($("<option></option>").val("-1").html("Select status "));
            $.each(Result.d, function (data, value) {
                $('#ddlsts').append($("<option></option>").val(value.Id).html(value.Name));
            })
        },
        error: function (Result) {
            alert(Result.d);
        }
    });
}


function AssignTo_dtl() {

    var intPrnc;

    intPrnc = "GetSupportTeam";

    $.ajax({
        type: "post",
        contentType: "application/json; charset=utf-8",
        url: "Binowner.aspx/SupportT",
        data: "{QueryString:'" + intPrnc + "'}",
        dataType: "json",
        success: function (Result) {
            $('#ddlassign').empty();
            $('#ddlassign').append($("<option></option>").val("-1").html("ASSIGINING TEAM "));
            $.each(Result.d, function (data, value) {
                $('#ddlassign').append($("<option></option>").val(value.Id).html(value.Name));

            })
        },
        error: function (Result) {
            alert(Result);
        }
    });
}

//------------------------------------------------------------

function imc_typ() {

    var intPrnc;

    intPrnc = "getimactype";

    $.ajax({
        type: "post",
        contentType: "application/json; charset=utf-8",
        url: "Binowner.aspx/getimac",
        data: "{QueryString:'" + intPrnc + "'}",
        dataType: "json",
        success: function (Result) {
            $('#ddlimacType').empty();
            $('#ddlimacType').append($("<option></option>").val("0").html("SELECT OPTION"));
            $.each(Result.d, function (data, value) {
                $('#ddlimacType').append($("<option></option>").val(value.Id).html(value.Name));

            })
        },
        error: function (Result) {
            alert(Result);
        }
    });
}
//--------------------------------------
//var refreshIntervalId;
//$('#ddlbin').onchange(function () {

//    if ($('#ddlbin option:selected').val() = -1) {
//        clearInterval(refreshIntervalId);
//    } else {
//        alert('entered to else');
//        clearInterval(refreshIntervalId);
//        refreshIntervalId = setInterval(UserTview(), 5000);
//    }



//})

//------------------------------------------------------------

function UserTview() {

    var k;
    $('#divtblPrincpleIntDtl').show();
    $('#tblticket').show();

    if ($('#ddlbin option:selected').val() != -1) {
        $('#TICK_TBL_NAME').text($('#ddlbin option:selected').text());
        //$('#ddlccurbin').text($('#ddlbin option:selected').text());
        var Querystring = "getBinTicketES";
        var d = 15797;
        var InputString = $('#ddlbin option:selected').val();/*bin;*//*$("[id*=hdUserId]").val();*/
        var user_id = $("[id*=hdUserId]").val();
        //alert(user_id);
        $.ajax({
            type: "POST",
            contentType: "application/json; charset=utf-8",
            url: "ES_BIN_OWNER.aspx/GetUserTble",
            data: "{QueryStr : '" + Querystring + "',input :'" + InputString + "'}",
            dataType: "json",
            success: function (Result) {
                if (user_id == d) {
                    if (Result.d.length > 0) {
                        $('#tblticket').empty();
                        $('#tblticket').append('<thead><td scope="col">NO</td><td scope="col">Incident/SR</td><td scope="col">Branch/dep</td><td scope="col">Summary</td> <td scope="col">Decription</td> <td scope="col">Rep.date</td> <td scope="col">Status</td><td scope="col"></td></thead><tbody>');
                        for (var i = 0; i < Result.d.length; i++) {
                            k = i + 1;
                            //alert(Result.d[i].INCId);
                            if (Result.d[i].Status == "RESOLVED" || Result.d[i].Status == "CANCEL") {
                                $('#tblticket').append('<tr><td>' + k + '</td>' +
                                    '<td>' + Result.d[i].INName + '</td>' +
                                    '<td>' + Result.d[i].Branchordep + '</td>' +
                                    '<td>' + Result.d[i].Summary + '</td>' +
                                    '<td>' + Result.d[i].Desc + '</td>' +
                                    '<td>' + Result.d[i].Repdate + '</td>' +
                                    '<td>' + Result.d[i].Status + '</td>' +
                                    '<td>' + '<input type = "button" value="Re_Open" name = "btn1" id="' + Result.d[i].INName + '" onclick="Reopen(id)"/> ' + '</td > ' + '</tr >');

                            }
                            else {
                                $('#tblticket').append('<tr><td>' + k + '</td>' +
                                    '<td>' + Result.d[i].INName + '</td>' +
                                    '<td>' + Result.d[i].Branchordep + '</td>' +
                                    '<td>' + Result.d[i].Summary + '</td>' +
                                    '<td>' + Result.d[i].Desc + '</td>' +
                                    '<td>' + Result.d[i].Repdate + '</td>' +
                                    '<td>' + Result.d[i].Status + '</td>' + '</tr >')


                            }



                        }
                        $('#tblticket').append(
                            '</tbody>');
                    } else {

                        $('#tblticket').empty();
                        $('#tblticket').hide();

                    }
                }

                else {
                    if (Result.d.length > 0) {
                        $('#tblticket').empty();
                        $('#tblticket').append('<thead < tr ><td scope="col">NO</td><td scope="col">Incident/SR</td><td scope="col">Branch/dep</td><td scope="col">Summary</td> <td scope="col">Decription</td> <td scope="col">Rep.date</td> <td scope="col">Status</td></tr></thead><tbody>');
                        for (var i = 0; i < Result.d.length; i++) {
                            k = i + 1;
                            $('#tblticket').append('<tr><td>' + k + '</td>' +
                                '<td>' + Result.d[i].INName + '</td>' +
                                '<td>' + Result.d[i].Branchordep + '</td>' +
                                '<td>' + Result.d[i].Summary + '</td>' +
                                '<td>' + Result.d[i].Desc + '</td>' +
                                '<td>' + Result.d[i].Repdate + '</td>' +
                                '<td>' + Result.d[i].Status + '</td>' + '</tr>');
                        }
                        $('#tblticket').append(
                            '</tbody>');
                    } else {

                        $('#tblticket').empty();
                        $('#tblticket').hide();

                    }
                }

            },
            error: function (Result) {
                alert(Result);
            }
        });
    }


}

function Tview() {
    debugger;
    //$("#hosupport").hide();
    var k;
    $('#TICK_TBL_NAME').text('SEARCHED TICKETS');
    $('#divtblPrincpleIntDtl').show();
    $('#tblticket').show();


    var txtsr = $("#txt_ticketno").val().toUpperCase();
    var txtsdate = $("#txt_rptfrm").val();
    var txtendate = $("#txt_rptto").val();
    //var status = $("#ddlsts").val(); 
    var status = $('#ddlsts option:selected').val();
    var emp_br = $("#txt_emp_br").val();
    //alert(txtsr);
    if (status == -1) {

        status = "";
    }
    if (txtsdate == "") {

        txtsdate = "";
    } if (txtendate == "") {

        txtendate = "";
    } if (txtsr == "") {

        txtsr = "";
    } if (emp_br == "") {

        emp_br = "";
    }
    var InputString = txtsr + "¥" + txtsdate + "¥" + txtendate + "¥" + status + "¥" + emp_br;
   // alert(InputString);
    var d = 15797;
    var user_id = $("[id*=hdUserId]").val();
    var Querystring = "getusersearchES";


    $.ajax({
        type: "POST",
        contentType: "application/json; charset=utf-8",
        url: "ES_BIN_OWNER.aspx/GetTble",
        data: "{QueryStr : '" + Querystring + "',input :'" + InputString + "'}",
        dataType: "json",
        success: function (Result) {
            if (user_id == d) {

                if (Result.d.length > 0) {
                    $('#tblticket').empty();
                    $('#tblticket').append('<thead>< tr ><td scope="col">NO</td><td scope="col">Incident/SR</td><td scope="col">Branch/dep</td><td scope="col">Summary</td> <td scope="col">Decription</td> <td scope="col">Rep.date</td><td scope="col">status</td></tr></thead><tbody>'
                    );
                    for (var i = 0; i < Result.d.length; i++) {
                        k = i + 1;
                        if (Result.d[i].sts == "RESOLVED" || Result.d[i].sts == "CANCEL") {
                            $('#tblticket').append('<tr><td>' + k + '</td>' +
                                '<td>' + Result.d[i].INName + '</td>' +
                                '<td>' + Result.d[i].Branchordep + '</td>' +
                                '<td>' + Result.d[i].Summary + '</td>' +
                                '<td>' + Result.d[i].Desc + '</td>' +
                                '<td>' + Result.d[i].Repdate + '</td>' +
                                '<td>' + Result.d[i].sts + '</td>' +
                                '<td>' + '<input type = "button" value="Re_Open" name = "btn1" id="' + Result.d[i].INName + '" onclick="Reopen(id)"/> ' + '</td > ' + '</tr >');
                        }
                        else {
                            $('#tblticket').append('<tr><td>' + k + '</td>' +
                                '<td>' + Result.d[i].INName + '</td>' +
                                '<td>' + Result.d[i].Branchordep + '</td>' +
                                '<td>' + Result.d[i].Summary + '</td>' +
                                '<td>' + Result.d[i].Desc + '</td>' +
                                '<td>' + Result.d[i].Repdate + '</td>' +
                                '<td>' + Result.d[i].sts + '</td>' +

                                '</tr >');
                        }
                    }
                    $('#tblticket').append(
                        '</tbody>');
                }
                else {
                    ModelPopWarning('No Entries Found');
                    $('#tblticket').empty();


                }
            }
            else {
                if (Result.d.length > 0) {
                    $('#tblticket').empty();
                    $('#tblticket').append('<thead>< tr ><td scope="col">NO</td><td scope="col">Incident/SR</td><td scope="col">Branch/dep</td><td scope="col">Summary</td> <td scope="col">Decription</td> <td scope="col">Rep.date</td><td scope="col">status</td></tr></thead><tbody>'
                    );
                    for (var i = 0; i < Result.d.length; i++) {
                        k = i + 1;

                        $('#tblticket').append('<tr><td>' + k + '</td>' +
                            '<td>' + Result.d[i].INName + '</td>' +
                            '<td>' + Result.d[i].Branchordep + '</td>' +
                            '<td>' + Result.d[i].Summary + '</td>' +
                            '<td>' + Result.d[i].Desc + '</td>' +
                            '<td>' + Result.d[i].Repdate + '</td>' +
                            '<td>' + Result.d[i].sts + '</td>' +

                            '</tr >');
                    }

                    $('#tblticket').append(
                        '</tbody>');
                }
                else {
                    ModelPopWarning('No Entries Found');
                    $('#tblticket').empty();


                }
            }
        },
        error: function (Result) {
            alert(Result);
        }
    });
}



function hosuSh(reqtyp) {
    //alert('hosh function' + reqtyp);
    //alert(binown);
    if (reqtyp != "" && binown == 39) {
        $('#hosupport').show();
        $('#hosupport').removeClass('d-none');
        $("#txt_callattenddte").datepicker('enable');
        $("#txt_callattenddte").prop('readonly', false);
        $("#txt_attendby").prop('readonly', false);
        $("#txt_hostname").prop('readonly', false);
    } else if (reqtyp = "") {
        $('#hosupport').hide();
        $('#hosupport').addClass('d-none');
    }
}


function Wlog_Submit() {
    debugger;
    r = $('#worklogtb tr:last').index();
    r = r + 1;
    //if ($('#ddlstatus option:selected').val() == -1) {
    //    var InputString = global_tickno + "¥" + $("[id*=hdUserId]").val() + "¥" + $('#wlogadd_summary').val().replace(/[']/gi,'"') + "¥" + $('#wlogadd_descript').val().replace(/[']/gi,'"') + "¥" + curr_status_id;


    //}
    //else
    // {
    //var InputString = global_tickno + "¥" + $("[id*=hdUserId]").val() + "¥" + $('#wlogadd_summary').val().replace(/[']/gi, '"') + "¥" + $('#wlogadd_descript').val().replace(/[']/gi, '"') + "¥" + $('#ddlcurrsts option:selected').val();
    //                       1                       2                                      3                                                        4                                                        5                                               6  
    var InputString = global_tickno + "¥" + $("[id*=hdUserId]").val() + "¥" + $('#wlogadd_summary').val().replace(/[']/gi, '"') + "¥" + $('#wlogadd_descript').val().replace(/[']/gi, '"') + "¥" + $('#ddlcurrsts option:selected').val() + "¥" + $("[id*=hdCurrBin]").val();
    //alert(InputString);
    //  }
    var Querystring = "savewlogdetailsHoappsES";
    tempwlog = 1;

    //alert(InputString);


    $.ajax({
        type: "POST",
        contentType: "application/json; charset=utf-8",
        url: "ES_BIN_OWNER.aspx/insertwlog",
        data: "{QueryStr : '" + Querystring + "',input :'" + InputString + "'}",
        dataType: "json",
        success: function (Result) {
            $('#wlogaddd').modal('hide');
            if (Result.d.length > 0) {
                Result = Result.d;
                //alert(Result);
                WorkLogView(global_tickno);
            }
        },
        error: function (Result) {
            alert('NOT REGISTERD');
        }
    });
    //    $('#worklogtb tr:eq(' + r + ') td:eq(3)').attr('contenteditable', false);
    //    $('#worklogtb tr:eq(' + r + ') td:eq(4)').attr('contenteditable', false);
    //    $('#btn_ADD').prop('disabled', false);
    //    $('#wlremove').prop('disabled', true);
    //$('#wlsubmit').prop('disabled', true);
    //alert($('#ticket_show').text());

}





function gr() {
    //alert("!!!");
    $('#tblticket').find('tr').click(function () {
        var row = $(this).find('td:eq(1)').text();
        wo_sr_value = row;
        shdetails(row);
        WorkLogView(row);
        //Btncheck();
        UserApprvTview(row);
        global_tickno = row;
        tempwlog = 0;
        $('#tblticket').removeEventListener();
    });
}


var CurSts;

function shdetails(tn) {
    debugger;
    var tr = tn;
    changsts(tr);
    $("#txt_callattenddte").datepicker('disable');
    $('#tblall').hide();
    $('#divtball').hide();
    var SoI;
    var input = tn;
    //var QueryString = "XC";
    var QueryString = "ESFetchData";
    SoI = tn.substring(0, 2);
    $("#ticket_show").text(tn);
    if (tn.substring(0, 2) == 'IN') {

        $('#div_imactype').addClass('d-none');
        $('#div_subcat').removeClass('d-none');
        $('#div_req').addClass('d-none');
        $('#div_reqsub').addClass('d-none');

        $("#div_Release").addClass('d-none');
        $("#div_Release").hide();
        $("#imac_dtl").addClass('d-none');
        $("#imac_dtl").hide();
        $("#hosupport").hide();
        $("#hosupport").addClass('d-none');
        $("#reason_fr_err").addClass('d-none');
        $("#div_impact").removeClass('d-none');
        $.ajax({
            type: "POST",
            contentType: "application/json; charset=utf-8",
            url: "ES_BIN_OWNER.aspx/getlinkdata",
            data: "{QueryString:'" + QueryString + "',input : '" + input + "'}",
            dataType: "json",
            success: function (Result) {
                Result = Result.d.split("^");

                $('#txt_reportby').val(Result[0]);
                if (Result[1] == 1) {
                    //$("#txt_affecttby").val('person');
                    $("#radGYes").prop('checked', true);
                    $("#radGNo").prop('checked', false);


                }
                else if (Result[1] == 0) {
                    $("#radGYes").prop('checked', false);
                    $("#radGNo").prop('checked', true);



                    //$("#txt_affecttby").val('branch');
                }
                $('#txt_EMPNO').val(Result[2]);
                $('#txt_phno').val(Result[3]);
                $('#txt_ALTPHNO').val(Result[4]);
                // $('#txt_severity').val(Result[5]);
                $('#ddlchsev').val(Result[5]);
                // $('#txt_priority').val(Result[6]);
                $('#ddlchUrg').val(Result[6]);
                // $('#txt_impact').val(Result[7]);
                $('#ddlimp').val(Result[7]);
                $('#txt_impactdetails').val(Result[8]);
                //  $('#txt_incategory').val(Result[9]);
                $('#ddlchclass').val(Result[9]);

                $('#txt_subject').val(Result[11]);
                $('#txt_description').val(Result[12]);
                $('#txt_impci').val(Result[13]);
                $('#Esub1').val(Result[22]);
               
                SubCategory1Load(Result[22], Result[23]);
                GetINCategoryes3Load(Result[23], Result[24]);
            
             
                if (Result[13] == "") {
                    $("#div_Release").hide();
                    $("#div_Release").addClass('d-none');
                    $("#imac_dtl").addClass('d-none');
                    $("#hosupport").hide();
                    $("#hosupport").addClass('d-none');


                } else {
                    $("#div_Release").hide();
                    $("#div_Release").addClass('d-none');
                    $("#imac_dtl").addClass('d-none');
                    $("#hosupport").hide();
                    $("#hosupport").addClass('d-none');
                }
                $('#txt_EMPNAME').val(Result[14]);

                $('#txt_BR_DEP').val(Result[15]);



                // $('#ddlstatus').val(-1);

                // $('#ddlchBin option:selected').val(Result[17]);
                debugger;
                //alert(Result[17]);
                //$('#ddlchBin').text(Result[17]);
                BinOwnval(Result[17]);
                //Changed_bin = $('#ddlchBin option:selected').val();
                //  $('#txt_Type').val(Result[10]);
                $('#ddlsubcat').val(Result[10]);

                //  $('#txt_Bin').val(Result[17]);
                $('#ddlccurbin').val(Result[21]);
                $('#ddlcurrsts').val(Result[16]);

                $('#atta_cnt').text(Result[18]);

                Currstatsshow(Result[16]);


                if (Result[16] == 5 || Result[16] == 6 || Result[16] == 8) {

                    solutionDtl(tn);
                    $('#reason_fr_err').removeClass('d-none');
                    $('#stsdiv').removeClass('d-none');
                    $('#reason_fr_err').show();
                    $('#stsdiv').show();

                } else {

                    $('#stsdiv').addClass('d-none');
                    $('#reason_fr_err').addClass('d-none');
                    //$('#txt_solution').removeClass('disabled');
                    //$('#txt_reason_fr_err').removeClass('disabled');

                    //$('#txt_solution').prop("disabled", true);
                    //$('#txt_reason_fr_err').prop("disabled", true);

                }
                if (tn.substring(0, 2) == 'SR') {
                    $('#sr_fields').hide();
                    $('#impact_hidden_sr').hide();
                }
                else {
                    $('#impact_hidden_sr').show();
                    $('#sr_fields').show();

                }
                if (Result[16] == 5 || Result[16] == 6 || Result[16] == 8) {
                    $('#wlog_add_rmv_buttons').hide();

                    $('#last_sumit_buttons').hide();
                    $('#ddl_sts_hidd').hide();
                    $('#ddl_chng_hidd').hide();
                }
                else {
                    $('#ddl_sts_hidd').show();
                    $('#wlog_add_rmv_buttons').hide();
                    $('#wlog_add_rmv_buttons').show();
                    $('#last_sumit_buttons').show();
                    $('#ddl_chng_hidd').show();
                    $("#txt_solution").addClass('disabled');
                    $("#txt_reason_fr_err").addClass('disabled');

                }
                debugger;
                $('#imac_dtl').hide();
                $('#txt_email').val(Result[19]);
                if (Result[20] == '') {

                    $('#ClogMode1').val(4);

                }
                else {

                    $('#ClogMode1').val(Result[20]);

                }
                //alert(Result[21]);
                $("[id*=hdCurrBin]").val(Result[21]);
                //alert($("[id*=hdCurrBin]").val());
                CurSts = Result[16];
                //alert(Result[13]);


            },
            error: function (Result) {



                //alert('hi');
            }




        });

    }
}
   




           

///E Security Data Fetch----


function equipmentLoad() {

    var QueryString = "GetINesecurityCategory";

   
    $.ajax({
        type: "POST",
        contentType: "application/json; charset=utf-8",
        url: "ES_BIN_OWNER.aspx/getINCategoryes",
        data: "{QueryString:'" + QueryString + "'}",
        dataType: "json",
        success: function (Result) {
            $('#Esub1').empty();
            $('#Esub1').append($("<option></option>").val("-1").html("--Select Incident Category--"));
            $.each(Result.d, function (data, value) {
                $('#Esub1').append($("<option></option>").val(value.INCId).html(value.INCName));
            })

            GetINCategoryes2();
        },
        error: function (Result) {
            alert('equipmentLoad()' + Result.d);
        }

    });


}

function SubCategory1Load(InputString,sub) {
   
   
    var QueryString = "GetINesecurityCategorysub1";
    $.ajax({
        type: "POST",
        contentType: "application/json; charset=utf-8",
        url: "ES_BIN_OWNER.aspx/getSubCategoryessub1",
        data: "{QueryString:'" + QueryString + "',input : '" + InputString + "'}",
        dataType: "json",
        success: function (Result) {
            $('#Esub2').empty();
            $('#Esub2').append($("<option></option>").val("-1").html("--Select Sub Category--"));
            $.each(Result.d, function (data, value) {
                $('#Esub2').append($("<option></option>").val(value.INCId).html(value.INCName));
            })
           // alert(sub);
            $('#Esub2').val(sub);
        },
        error: function (Result) {
            alert('getSubCategoryessub1()' + Result.d);
        }

    });

}



function GetINCategoryes2() {
    var InputString = $("#Esub1").val();
    var QueryString = "GetINesecurityCategorysub1";
    $.ajax({
        type: "POST",
        contentType: "application/json; charset=utf-8",
        url: "ES_BIN_OWNER.aspx/getSubCategoryessub1",
        data: "{QueryString:'" + QueryString + "',input : '" + InputString + "'}",
        dataType: "json",
        success: function (Result) {
            $('#Esub2').empty();
            $('#Esub2').append($("<option></option>").val("-1").html("--Select Sub Category--"));
            $.each(Result.d, function (data, value) {
                $('#Esub2').append($("<option></option>").val(value.INCId).html(value.INCName));
            })
            GetINCategoryes3();
        },
        error: function (Result) {
            alert('getSubCategoryessub2()' + Result.d);
        }

    });
  //  GetINCategoryes3();
}

function GetINCategoryes3() {
    debugger;
    var InputString = $("#Esub2").val();
    var QueryString = "GetINesecurityCategorysub2";
  //  alert(InputString);
    $.ajax({
        type: "POST",
        contentType: "application/json; charset=utf-8",
        url: "ES_BIN_OWNER.aspx/getSubCategoryessub2",
        data: "{QueryString:'" + QueryString + "',input : '" + InputString + "'}",
        dataType: "json",
        success: function (Result) {
            $('#Esub3').empty();
            $('#Esub3').append($("<option></option>").val("-1").html("--Select Sub Category--"));
            $.each(Result.d, function (data, value) {
                $('#Esub3').append($("<option></option>").val(value.INCId).html(value.INCName));
            })

        },
        error: function (Result) {
            alert('getSubCategoryessub3()' + Result.d);
        }

    });

}

function GetINCategoryes3Load(InputString, sub) {
    debugger;
   // var InputString = $("#Esub2").val();
    var QueryString = "GetINesecurityCategorysub2";
    //  alert(InputString);
    $.ajax({
        type: "POST",
        contentType: "application/json; charset=utf-8",
        url: "ES_BIN_OWNER.aspx/getSubCategoryessub2",
        data: "{QueryString:'" + QueryString + "',input : '" + InputString + "'}",
        dataType: "json",
        success: function (Result) {
            $('#Esub3').empty();
            $('#Esub3').append($("<option></option>").val("-1").html("--Select Sub Category--"));
            $.each(Result.d, function (data, value) {
                $('#Esub3').append($("<option></option>").val(value.INCId).html(value.INCName));
            })
            $('#Esub3').val(sub);
        },
        error: function (Result) {
            alert('getSubCategoryessub3()' + Result.d);
        }

    });

}

///E Security Data Fetch----end

function Btncheck() {
    debugger;

    var user = $("[id*=hdUserId]").val();
    var txt = $("#txt_ticketno").val().toUpperCase();
    if (txt.substring(0, 2) == 'IN') {
        var InputString = user + "¥" + txt;
        var QueryStr = "GetOwnerbyIdIN";
        $.ajax({
            type: "POST",
            contentType: "application/json; charset=utf-8",
            url: "Binowner.aspx/GetOwnerbyIdIN",
            data: "{QueryStr:'" + QueryStr + "',input:'" + InputString + "'}",
            dataType: "json",
            success: function (Result) {
                debugger;
                if (Result.d.length > 0) {
                    Result = Result.d;
                    if (Result == 0) {
                        $('#SUBMIT').hide();
                    }
                    else {
                        $('#SUBMIT').show();

                    }
                }
            },
            error: function (Result) {

                alert(Result);
            }
        });
    }
    else {
        var InputString = user + "¥" + txt;
        var QueryStr = "GetOwnerbyIdSR";
        $.ajax({
            type: "POST",
            contentType: "application/json; charset=utf-8",
            url: "Binowner.aspx/GetOwnerbyIdSR",
            data: "{QueryStr:'" + QueryStr + "',input:'" + InputString + "'}",
            dataType: "json",
            success: function (Result) {
                debugger;
                if (Result.d.length > 0) {
                    Result = Result.d;
                    if (Result == 0) {
                        $('#SUBMIT').hide();
                        //$('#btnConfirmsr').hide();
                        //$('#btnConfirmIn').hide();
                    }
                    else {
                        $('#SUBMIT').show();

                    }
                }
            },
            error: function (Result) {

                alert(Result);
            }
        });
    }
}

function solutionDtl(tick) {
    $('#stsdiv').removeClass('d-none');
    $('#stsdiv').show();
    $('#reason_fr_err').removeClass('d-none');
    $('#reason_fr_err').show();
    $("#txt_reason_fr_err").show();
    $("#txt_solution").show();
    //$("#txt_solution").addClass('disabled');
    //$("#txt_reason_fr_err").addClass('disabled');
    $("#txt_solution").attr('readonly', true);
    $("#txt_reason_fr_err").attr('readonly', true);
    var QueryString = "TicketSolutionUpdateDetail";

    $.ajax({

        type: "POST",
        contentType: "application/json; charset=utf-8",
        url: "Binowner.aspx/SoluUpdDtl",
        data: "{QueryString:'" + QueryString + "',input:'" + tick + "'}",
        dataType: "json",
        success: function (Result) {
            if (Result.d.length > 0) {
                $('#txt_solution').empty();
                Result = Result.d.split("^");
                $('#txt_solution').val('Updated By:  ' + Result[1] + '---/Employee Code:  ' + Result[0] + '---/UpdatedDate:  ' + Result[2] + '--/Solution:  ' + Result[3]);
                $('#txt_reason_fr_err').val('Updated By:  ' + Result[1] + '---/Employee Code:  ' + Result[0] + '---/UpdatedDate:  ' + Result[2] + '--/Reason For Issue:  ' + Result[4]);
                //$('#txt_reason_fr_err').val(Result[4]);
                //$('#txt_AsstSerial').val(Result[1]);
                //$('#txt_Manufacture').val(Result[2]);
            }


        },
        error: function (Result) {

            alert(Result);
        }


    });



}







function SelectedAsstDtl(Asset) {
    //alert($('#user_asset option:selected').val());

    //var Asset = $('#user_asset option:selected').val();
    //alert('entered into get');

    var QueryString = Asset;

    //var input = $("#txt_Empcode").val();

    $.ajax({

        type: "POST",
        contentType: "application/json; charset=utf-8",
        url: "Binowner.aspx/SelectedAsstDTL",
        data: "{QueryString:'" + QueryString + "'}",
        dataType: "json",
        success: function (Result) {
            if (Result.d.length > 0) {
                Result = Result.d.split("^");
                $('#txt_AsstTyp').val(Result[0]);
                $('#txt_AsstSerial').val(Result[1]);
                $('#txt_Manufacture').val(Result[2]);
            }


        },
        error: function (Result) {

            alert(Result);
        }


    });

}

function Addworklogtb() {
    var addsts;
    if ($('#ddlstatus option:selected').val() == -1)
        addsts = curr_status_name;
    else
        addsts = $('#ddlstatus option:selected').text();

    row_added = 1;
    var dt = new Date();
    var day = dt.getDay().toString() + "/" + dt.getMonth().toString() + "/" + dt.getFullYear().toString();
    var mon = dt.getMonth();
    var yr = dt.getFullYear();
    $('#worklogtb').append('<tr><td>' + day + '</td>' +
        '<td>' + $("[id*=hdUserId]").val() + '</td>' +
        '<td>' + $("[id*=hdBrid]").val() + '</td>' +
        '<td>' + $('#wlogadd_summary').val() + '</td>' +
        '<td>' + $('#wlogadd_descript').val() + '</td>' +
        '<td>' + $('#txt_currentstatus').val() + '</td>' +
        '</tr>');

    $('#worklogtb').append(
        '</tbody>');
    var r = $('#worklogtb tr:last').index();
    r = r + 1;
    $('#worklogtb tr:last').find('td:eq(3)').focus();
    $('#btn_ADD').prop('disabled', true);
    $('#wlremove').prop('disabled', false);
    $('#wlsubmit').prop('disabled', false);
    //    $('#worklogtb tr:last td:eq(4)').text('ChangedText');
    $('#worklogtb tr:eq(' + r + ') td:eq(3)').attr('contenteditable', true);
    $('#worklogtb tr:eq(' + r + ') td:eq(4)').attr('contenteditable', true);

}


function WorkLogView(dt) {
    debugger;
    //alert(dt);
    //$('#worklogtb').empty();
    $('#wlogblk').empty();
    $('#wldv').show();
    $('#wlogblk').show();
    var InputString = dt;
    var Querystring = "GetAllWlogES";
    $.ajax({
        type: "POST",
        contentType: "application/json; charset=utf-8",
        url: "Binowner.aspx/GtWlogTble",
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
            alert("error");
            //alert(Result.d);
        }
    });



}

function wlogsbmt() {

    var r = $('#worklogtb tr:last').index();
    r = r + 1;
    $('#worklogtb tr:eq(' + r + ') td:eq(3)').attr('contenteditable', false);
    $('#worklogtb tr:eq(' + r + ') td:eq(4)').attr('contenteditable', false);
}



function wlogrmv() {
    row_added = 0;
    $('#worklogtb tr:last').remove();
    $('#btn_ADD').prop('disabled', false);
    $('#wlremove').prop('disabled', true);
    $('#wlsubmit').prop('disabled', true);

}

function setchbin() {
    Changed_bin = $('#ddlchBin option:selected').val();


}


function confirminview() {
    debugger;
    var temp = ($('#txt_reason_fr_err').val()).trim();
    var temp1 = ($('#txt_solution').val()).trim();

    var asset;
    var cur_sts;
    var input;

    var QueryString

    var res = global_tickno.substring(0, 2);
    if (res == 'IN') {
        QueryString = "CONFIRMVIEW";
    }
    else if (res == 'SR') {
        QueryString = "CONFIRMSRVIEW";
    }
    if ($("#ddlassign").val() == "-1") {
        alert("Please Select Assign To");
        return false;
    }
    else if (($('#ddlstatus option:selected').val() == 5 || $('#ddlstatus option:selected').val() == 6) && temp == "") {

        ModelPopWarning("Please Enter Reason For Issue...");

    } else if (($('#ddlstatus option:selected').val() == 5 || $('#ddlstatus option:selected').val() == 6) && temp1 == "") {
        ModelPopWarning("Please Enter Solution...");

    } else if (tempwlog == 0) {


        ModelPopWarning("Before Making Changes In Tickets Please Add Change Details In Worklog ");
    }


    else if (global_tickno == "") {
        ModelPopWarning("Please select Ticket no");
        return false;
    }

    else {
        if ($('#ddlstatus option:selected').val() == -1) {

            input = global_tickno + "¥" + curr_status_id + "¥" + $("#txt_solution").val() + "¥" + ""/*$("[id*=hdUserId]").val()*/ + "¥" + Changed_bin + "¥" + $("#txt_reason_fr_err").val();
        }
        else {

            if ($('#ddlstatus option:selected').val() == 5 || $('#ddlstatus option:selected').val() == 6) {

                input = global_tickno + "¥" + $("#ddlstatus option:selected").val() + "¥" + $("#txt_solution").val() + "¥" + $("[id*=hdUserId]").val() + "¥" + Changed_bin + "¥" + $("#txt_reason_fr_err").val();


            } else {

                input = global_tickno + "¥" + $("#ddlstatus option:selected").val() + "¥" + $("#txt_solution").val() + "¥" + ""/*$("[id*=hdUserId]").val()*/ + "¥" + Changed_bin + "¥" + $("#txt_reason_fr_err").val();
            }
        }
        //alert(input);
        $.ajax({
            type: "POST",
            contentType: "application/json; charset=utf-8",
            url: "Binowner.aspx/confirmview",
            data: "{QueryString:'" + QueryString + "',input : '" + input + "'}",
            dataType: "json",
            success: function (Result) {
                Result = Result.d;
                alert(Result);
                window.open('Binowner.aspx', '_self');

            },

            error: function (Result) {
                alert(Result);
            }
        });

    }


}
function getempnme2() {


    var QueryString = "getempnme";

    var input = $("#txt_empcod2").val().trim();
    $.ajax({
        type: "POST",
        contentType: "application/json; charset=utf-8",
        url: "Binowner.aspx/load_empnmeInc",
        data: "{QueryString:'" + QueryString + "',input : '" + input + "'}",
        dataType: "json",
        success: function (Result) {
            //alert(Result.d);
            Result = Result.d;
            $("#txt_emp_nme2").val(Result);
            //SaveuploadData(Result);
            // window.open('AdminModule.aspx', '_self');



        },

        error: function (Result) {
            alert(Result);
        }
    });
}
function getempnme() {


    var QueryString = "getempnme";

    var input = $("#txt_empcod").val().trim();
    $.ajax({
        type: "POST",
        contentType: "application/json; charset=utf-8",
        url: "Binowner.aspx/load_empnmeInc",
        data: "{QueryString:'" + QueryString + "',input : '" + input + "'}",
        dataType: "json",
        success: function (Result) {
            //alert(Result.d);
            Result = Result.d;
            $("#txt_emp_nme").val(Result);
            //SaveuploadData(Result);
            // window.open('AdminModule.aspx', '_self');



        },

        error: function (Result) {
            alert(Result);
        }
    });
}
function TesterName() {
    debugger;
    var QueryString = "getTesterName";
    $.ajax({
        type: "POST",
        contentType: "application/json; charset=utf-8",
        url: "Binowner.aspx/getTstrName",
        data: "{QueryString:'" + QueryString + "'}",
        dataType: "json",
        success: function (Result) {
            debugger;
            $('#ddlTester').empty();
            $('#ddlTester').append($("<option></option>").val("-1").html("--Select Tester Name--"));
            $.each(Result.d, function (data, value) {

                $('#ddlTester').append($("<option></option>").val(value.Id).html(value.Name));
            })
        },
        error: function (Result) {
            alert(Result);
        }

    });

}
function showTypesCls2() {
    if ($("#radEmpnme2").prop("checked")) {
        $("#se_by_empcode2").addClass('d-none');
        $("#se_by_empnme2").removeClass('d-none');
        $("#txt_emp2").val('');
        $("#txt_emp_cod2").val('');


    }
    else if ($("#radEmpcod2").prop("checked")) {
        $("#se_by_empnme2").addClass('d-none');
        $("#se_by_empcode2").removeClass('d-none');
        $("#txt_empcod2").val('');
        $("#txt_emp_nme2").val('');

    }
}

function showTypesCls() {
    if ($("#radEmpnme").prop("checked")) {
        $("#se_by_empcode").addClass('d-none');
        $("#se_by_empnme").removeClass('d-none');
        $("#txt_emp").val('');
        $("#txt_emp_cod").val('');


    }
    else if ($("#radEmpcod").prop("checked")) {
        $("#se_by_empnme").addClass('d-none');
        $("#se_by_empcode").removeClass('d-none');
        $("#txt_empcod").val('');
        $("#txt_emp_nme").val('');

    }
}


function ModuleName() {
    debugger;
    var QueryString = "getModName";
    $.ajax({
        type: "POST",
        contentType: "application/json; charset=utf-8",
        url: "Binowner.aspx/getModuleName",
        data: "{QueryString:'" + QueryString + "'}",
        dataType: "json",
        success: function (Result) {
            debugger;
            $('#txt_ModName').empty();
            $('#txt_ModName').append($("<option></option>").val("-1").html("--Select Module Name-- "));
            $.each(Result.d, function (data, value) {

                $('#txt_ModName').append($("<option></option>").val(value.Id).html(value.Name));
            })
        },
        error: function (Result) {
            alert(Result);
        }

    });

}


function Cls() {

    //$("#ddlClassif").val("-1");
    //$("#txt_ModName").val("-1");
    //$("#txt_IssueType").val("-1");
    //$("#txt_emp").val("");
    //$("#txt_emp_cod").val("");
    //$("#txt_empcod").val("");
    //$("#txt_emp_nme").val("");
    if ($('#Classification option:selected').val() == 4) {
        ModuleName();
        TesterName();
        $("#txt_ModNameDiv").removeClass('d-none');
        $("#txt_IssueTypeDiv").removeClass('d-none');
        $("#empsearch").removeClass('d-none');
        $("#empsearch2").removeClass('d-none');
        $("#divcrf").removeClass('d-none');

    }
    else {
        $("#txt_ModNameDiv").addClass('d-none');
        $("#txt_IssueTypeDiv").addClass('d-none');
        $("#empsearch").addClass('d-none');
        $("#empsearch2").addClass('d-none');
        $("#se_by_empnme").addClass('d-none');
        $("#se_by_empnme2").addClass('d-none');
        $("#se_by_empcode").addClass('d-none');
        $("#se_by_empcode2").addClass('d-none');
        $("#divcrf").addClass('d-none');
        $("#txt_crf").val("");


    }
}

function stssel() {

    $("#ddlClassif").val("-1");
    $("#txt_ModName").val("-1");
    $("#txt_IssueType").val("-1");
    $("#txt_emp").val("");
    $("#txt_emp2").val("");
    $("#txt_emp_cod").val("");
    $("#txt_emp_cod2").val("");
    $("#txt_empcod").val("");
    $("#txt_empcod2").val("");
    $("#txt_emp_nme").val("");
    $("#txt_emp_nme2").val("");
    $("#txt_crf").val("");



    if ($('#ddlcurrsts option:selected').val() == 6 && global_tickno.substring(0, 2) == 'IN') {

        $("#stsdiv").removeClass('d-none');
        $("#stsdiv").show();
        $("#reason_fr_err").show();
        $("#reason_fr_err").removeClass('d-none');
        $("#txt_solution").val("");
        $('#txt_reason_fr_err').val("");
        $("#txt_solution").attr('readonly', false);
        $("#txt_reason_fr_err").attr('readonly', false);

        $("#Classification").removeClass('d-none');

    }
    else if ($('#ddlcurrsts option:selected').val() == 5) {

        $("#stsdiv").removeClass('d-none');
        $("#stsdiv").show();
        $("#reason_fr_err").show();
        $("#reason_fr_err").removeClass('d-none');
        $("#txt_solution").val("");
        $('#txt_reason_fr_err').val("");
        $("#txt_solution").attr('readonly', false);
        $("#txt_reason_fr_err").attr('readonly', false);

        $("#Classification").addClass('d-none');
        $("#txt_ModNameDiv").addClass('d-none');
        $("#txt_IssueTypeDiv").addClass('d-none');
        $("#empsearch").addClass('d-none');
        //$("#empsearch2").addClass('d-none');
        $("#se_by_empnme").addClass('d-none');
        //$("#se_by_empnme2").addClass('d-none');
        $("#se_by_empcode").addClass('d-none');
        //$("#se_by_empcode2").addClass('d-none');
        $("#divcrf").addClass('d-none');


    }
    else if ($('#ddlcurrsts option:selected').val() == 6 && global_tickno.substring(0, 2) == 'SR') {

        $("#stsdiv").removeClass('d-none');
        $("#stsdiv").show();
        $("#reason_fr_err").show();
        $("#reason_fr_err").removeClass('d-none');
        $("#txt_solution").val("");
        $('#txt_reason_fr_err').val("");
        $("#txt_solution").attr('readonly', false);
        $("#txt_reason_fr_err").attr('readonly', false);

        $("#Classification").addClass('d-none');
        $("#txt_ModNameDiv").addClass('d-none');
        $("#txt_IssueTypeDiv").addClass('d-none');
        $("#empsearch").addClass('d-none');
        //$("#empsearch2").addClass('d-none');
        $("#se_by_empnme").addClass('d-none');
        //$("#se_by_empnme2").addClass('d-none');
        $("#se_by_empcode").addClass('d-none');
        //$("#se_by_empcode2").addClass('d-none');
        $("#divcrf").addClass('d-none');


    }
    else {
        $("#reason_fr_err").addClass('d-none');
        $("#reason_fr_err").hide();
        $("#stsdiv").addClass('d-none');
        $("#stsdiv").hide();
        $("#txt_solution").attr('readonly', true);
        $("#txt_reason_fr_err").attr('readonly', true);

        $("#Classification").addClass('d-none');
        $("#txt_ModNameDiv").addClass('d-none');
        $("#txt_IssueTypeDiv").addClass('d-none');
        $("#empsearch").addClass('d-none');
        //$("#empsearch2").addClass('d-none');
        $("#se_by_empnme").addClass('d-none');
        //$("#se_by_empnme2").addClass('d-none');
        $("#se_by_empcode").addClass('d-none');
        //$("#se_by_empcode2").addClass('d-none');
        $("#divcrf").addClass('d-none');

    }
}


function UserApprvTview(tno) {
    // alert(tno);
    // alert('entered into approval function');
    //$('#lab_appr_tb').show();
    $('#divtblapprvdtl').show();
    $('#tblapprv').show();

    var Querystring = "Log_Details";

    //var InputString = $("[id*=hdUserId]").val();global_tickno
    var InputString = tno;

    $.ajax({
        type: "POST",
        contentType: "application/json; charset=utf-8",
        url: "Binowner.aspx/GetapprvTbl",
        data: "{QueryStr : '" + Querystring + "',input :'" + InputString + "'}",
        dataType: "json",
        success: function (Result) {

            if (Result.d.length > 0) {
                $("#lab_appr_tb").removeClass('d-none');
                $('#lab_appr_tb').show();
                $('#tblapprv').empty();
                $('#tblapprv').append('<thead>< tr ><td scope="col">Date</td><td scope="col">Approvel person</td><td scope="col">Approve status</td><td scope="col">Reason</td></tr></thead><tbody>');
                for (var i = 0; i < Result.d.length; i++) {
                    $('#tblapprv').append('<tr><td>' + Result.d[i].ApprvDate + '</td>' +
                        '<td>' + Result.d[i].ApprovedBy + '</td>' +
                        '<td>' + Result.d[i].ApprvStatus + '</td>' +
                        '<td>' + Result.d[i].Reason + '</td>' +
                        '</tr>');
                }
                $('#tblapprv').append(
                    '</tbody>');
                approvers_f_apprv(tno);
            } else {
                $("#lab_appr_tb").addClass('d-none');
                $('#lab_appr_tb').hide();
                $('#tblapprv').empty();
            }

        },
        error: function (Result) {
            alert(Result);
        }
    });



}

function approvers_f_apprv(tno) {
    var k;

    //alert(tno+'ticket number from waitin for apprv function');
    // alert('entered into approval function');
    $('#divtblapprvdtl').show();
    $('#tblapprv').show();

    var Querystring = "ApprovNotAssign";

    //var InputString = $("[id*=hdUserId]").val();global_tickno
    var InputString = tno;

    $.ajax({
        type: "POST",
        contentType: "application/json; charset=utf-8",
        url: "Binowner.aspx/GetapprvPerTbl",
        data: "{QueryStr : '" + Querystring + "',input :'" + InputString + "'}",
        dataType: "json",
        success: function (Result) {
            //alert(Result.d+'Result.d');
            //alert(Result.d.length+'Result.d.length');
            //k = Result.d.length;
            Result = Result.d.split("^");
            // alert(Result[0]+'result[0]');
            //alert(Result.length + 'result length');
            k = Result.length;
            // alert(k + 'k');
            if (k > 0) {
                // alert('entered into if k');
                // $('#tblapprv').empty();
                // $('#tblapprv').append('<thead class="bg-success text-white">< tr ><th scope="col">Date</th><th scope="col">Approved by</th><th scope="col">Approve status</th></tr></thead><tbody class="border border-dark">');
                for (var i = 1; i < k; i++) {
                    $('#tblapprv').append('<tr><td>' + '--' + '</td>' +
                        '<td>' + Result[i] + '</td>' +
                        '<td>' + '--' + '</td>' +
                        '<td>' + '--' + '</td>' +
                        '</tr>');
                }
                $('#tblapprv').append(
                    '</tbody>');
            }
        },
        error: function (Result) {
            alert(Result);
        }
    });





}

//software list to remove from system
function viewall(tickno) {
    debugger;
    var Querystring;
    var input = tickno;
    var soft;
    var ver;
    $('#tblall').show();
    $('#divtball').show();
    Querystring = "softremovelst";

    $.ajax({
        type: "POST",
        contentType: "application/json; charset=utf-8",
        url: "Binowner.aspx/softwarelist",
        data: "{QueryStr : '" + Querystring + "',input :'" + input + "'}",
        dataType: "json",
        success: function (Result) {
            debugger;
            if (Result.d.length > 0) {
                $('#tblall').empty();
                $('#tblall').append('<thead class="bg-success text-white">< tr ><th scope="col">No.</th><th scope="col">Application</th><th scope="col">Application Version</th> </tr></thead><tbody class="border border-dark">'
                );
                Result = Result.d.split("¥");

                soft = Result[0].split('^');
                ver = Result[1].split('^');
                for (i = 0; i < soft.length; i++) {
                    r = i + 1;
                    $('#tblall').append('<tr>' +
                        '<td>' + r + '</td>' +
                        //'<td>' + Result.d[i].BranchId + '</td>' +
                        //'<td>' + Result.d[i].BranchName + '</td>' +
                        //'<td>' + Result.d[i].EmployeeCode + '</td>' +
                        //'<td>' + Result.d[i].DeptName + '</td>' +
                        // '<td>' + Result.d[i].HostName + '</td>' +
                        '<td>' + soft[0] + '</td>' +
                        '<td>' + ver[1] + '</td>' +
                        //'<td>' + Result.d[i].EnterDate + '</td>' +
                        //'<td><input type="button" class="btn btn-info" onclick="grr();" value="Add To Remove"/></td>' +

                        '</tr >');
                }
                $('#tblall').append(
                    '</tbody>');
                $('#divtball').show();
            }
            else {
                $('#tblall').empty();
            }

        },
        error: function (Result) {
            alert(Result);
        }
    });
}



//------------------new change field change option



function changsts(tr) {

    debugger;
    var QueryStr;
    var InputStr;
    InputStr = tr;
    if (tr.substring(0, 2) == 'SR') {
        InputStr = tr;
    }
    else {
        InputStr = '';
    }

    QueryStr = "GetStatusNew";

    $.ajax({
        type: "post",
        contentType: "application/json; charset=utf-8",
        url: "Binowner.aspx/Getstatuslst",
        data: "{QueryString:'" + QueryStr + "',input:'" + InputStr + "'}",
        dataType: "json",
        success: function (Result) {
            $('#ddlcurrsts').empty();
            // $('#ddlcurrsts').append($("<option></option>").val("-1").html("Select status "));
            $.each(Result.d, function (data, value) {

                $('#ddlcurrsts').append($("<option></option>").val(value.Id).html(value.Name));


            })
        },
        error: function (Result) {
            alert(Result.d);
        }
    });
}


function GetRequestType() {

    var QueryString = "ServiceCatlogDtl";
    $.ajax({
        type: "POST",
        contentType: "application/json; charset=utf-8",
        url: "Binowner.aspx/getRequestype",
        data: "{QueryString:'" + QueryString + "'}",
        dataType: "json",
        success: function (Result) {
            $('#ddlReqType').empty();
            //  $('#ddlReqType').append($("<option></option>").val("-1").html("Select Request Type "));
            $.each(Result.d, function (data, value) {
                $('#ddlReqType').append($("<option></option>").val(value.ReqId).html(value.ReqName));
            })
        },
        error: function (Result) {
            alert('GetRequestType()' + Result.d);
        }

    });
    return;
}
//------new urgency


function GetUrgency() {

    var QueryString = "GetUrgency";
    $.ajax({
        type: "POST",
        contentType: "application/json; charset=utf-8",
        url: "Binowner.aspx/getUrgeny",
        data: "{QueryString:'" + QueryString + "'}",
        dataType: "json",
        success: function (Result) {
            $('#ddlchUrg').empty();
            //  $('#ddlchUrg').append($("<option></option>").val("-1").html("Select Urgency/Priority "));
            $.each(Result.d, function (data, value) {
                $('#ddlchUrg').append($("<option></option>").val(value.PrioId).html(value.PrioName));
            })
        },
        error: function (Result) {
            alert('GetUrgency()' + Result.d);
        }

    });
    return;
}


//-----get in new category


//function GetINCategry() {

//    var QueryString = "GetINCategory";
//    $.ajax({
//        type: "POST",
//        contentType: "application/json; charset=utf-8",
//        url: "Binowner.aspx/getINCaty",
//        data: "{QueryString:'" + QueryString + "'}",
//        dataType: "json",
//        success: function (Result) {
//            $('#ddlClassification').empty();
//            $('#ddlClassification').append($("<option></option>").val("-1").html("Select Classification/Incident Category "));
//            $.each(Result.d, function (data, value) {
//                $('#ddlClassification').append($("<option></option>").val(value.INCId).html(value.INCName));
//            })
//        },
//        error: function (Result) {
//            alert('GetINCategory()' + Result.d);
//        }

//    });
//    return;
//}

//------insubcategory--
function GetINsubCategory() {
    var QueryStr = "getbinsubcat";
    $.ajax({
        type: "POST",
        contentType: "application/json; charset=utf-8",
        url: "Binowner.aspx/getSubCgory",
        data: "{QueryString:'" + QueryStr + "'}",
        dataType: "json",
        success: function (Result) {
            $('#ddlsubcat').empty();
            // $('#ddlsubcat').append($("<option></option>").val("-1").html("Select Sub Category "));
            $.each(Result.d, function (data, value) {
                $('#ddlsubcat').append($("<option></option>").val(value.INSubId).html(value.INSubName));
            })
        },
        error: function (Result) {
            alert('GetINsubCategory()' + Result.d);
        }

    });
    return;
}



//------SR BIN subcategory--
function GetINsubCategorybinsr() {
    var QueryStr = "getbinsubsr";
    $.ajax({
        type: "POST",
        contentType: "application/json; charset=utf-8",
        url: "Binowner.aspx/getSubCgorysr",
        data: "{QueryString:'" + QueryStr + "'}",
        dataType: "json",
        success: function (Result) {
            $('#ddlReqTypeinsub').empty();
            $('#ddlReqTypeinsub').append($("<option></option>").val("-1").html("Select Sub Category "));
            $.each(Result.d, function (data, value) {
                $('#ddlReqTypeinsub').append($("<option></option>").val(value.INSubId).html(value.INSubName));
            })
        },
        error: function (Result) {
            alert('GetINsubCategorybinsr()' + Result.d);
        }

    });
    return;
}


//----get severity---

function GetSeverity() {

    var QueryString = "GetSeverity";
    $.ajax({
        type: "POST",
        contentType: "application/json; charset=utf-8",
        url: "Binowner.aspx/getSevty",
        data: "{QueryString:'" + QueryString + "'}",
        dataType: "json",
        success: function (Result) {
            $('#ddlchsev').empty();
            // $('#ddlchsev').append($("<option></option>").val("-1").html("Select Severity"));
            $.each(Result.d, function (data, value) {
                $('#ddlchsev').append($("<option></option>").val(value.INSubId).html(value.INSubName));
            })
        },
        error: function (Result) {
            alert('GetSeverity()' + Result.d);
        }

    });
    return;
}


function GetImpact() {

    var QueryStr = "GetImpact";
    $.ajax({
        type: "POST",
        contentType: "application/json; charset=utf-8",
        url: "Binowner.aspx/getImpa",
        data: "{QueryString:'" + QueryStr + "'}",
        dataType: "json",
        success: function (Result) {
            $('#ddlimp').empty();
            // $('#ddlimp').append($("<option></option>").val("-1").html("Select Impact "));
            $.each(Result.d, function (data, value) {
                $('#ddlimp').append($("<option></option>").val(value.ImpctId).html(value.ImpctName));
            })
        },
        error: function (Result) {
            alert('GetImpact()' + Result.d);
        }

    });

    // GetSeverity();
}

function GetINCategory() {

    var QueryString = "GetINCategory";
    $.ajax({
        type: "POST",
        contentType: "application/json; charset=utf-8",
        url: "Binowner.aspx/getINCaty",
        data: "{QueryString:'" + QueryString + "'}",
        dataType: "json",
        success: function (Result) {
            $('#ddlchclass').empty();
            // $('#ddlchclass').append($("<option></option>").val("-1").html("Select Classification/Incident Category "));
            $.each(Result.d, function (data, value) {
                $('#ddlchclass').append($("<option></option>").val(value.INCId).html(value.INCName));
            })
        },
        error: function (Result) {
            alert('GetINCategory()' + Result.d);
        }

    });

}





function Getlistofbin() {

    var QueryString = "GetINCategory";
    $.ajax({
        type: "POST",
        contentType: "application/json; charset=utf-8",
        url: "Binowner.aspx/getINCaty",
        data: "{QueryString:'" + QueryString + "'}",
        dataType: "json",
        success: function (Result) {
            $('#ddlchclass').empty();
            $('#ddlchclass').append($("<option></option>").val("-1").html("Select Classification/Incident Category "));
            $.each(Result.d, function (data, value) {
                $('#ddlchclass').append($("<option></option>").val(value.INCId).html(value.INCName));
            })
        },
        error: function (Result) {
            alert('GetINCategory()' + Result.d);
        }

    });

}

//-----get request type



//function GetRequestType() {

//    var QueryString = "ServiceCatlogDtl";
//    $.ajax({
//        type: "POST",
//        contentType: "application/json; charset=utf-8",
//        url: "ServiceRequest.aspx/getRequesttype",
//        data: "{QueryString:'" + QueryString + "'}",
//        dataType: "json",
//        success: function (Result) {
//            $('#ddlReqType').empty();
//            $('#ddlReqType').append($("<option></option>").val("-1").html("Select Request Type "));
//            $.each(Result.d, function (data, value) {
//                $('#ddlReqType').append($("<option></option>").val(value.ReqId).html(value.ReqName));
//            })
//        },
//        error: function (Result) {
//            alert('GetRequestType()' + Result.d);
//        }

//    });
//    return;
//}


function changesubmit() {
    debugger;
    var per = '';
    var per_br_code = '';


    if ($('#radGYes').prop('checked') == true) {

        per = 1;
        per_br_code = $('#txt_EMPNO').val();

    } else if ($('#radGNo').prop('checked') == true) {

        per = 0;
        per_br_code = $('#txt_EMPNO').val();

    }
    var temp = ($('#txt_reason_fr_err').val()).trim();
    var temp1 = ($('#txt_solution').val()).trim();

    var asset;
    var cur_sts;
    var input;

    var QueryString;
    var Classfctn;
    var ModlName;
    var IssTyp;
    var devlpr;
    var Tstr;
    var crfid;
    var res = global_tickno.substring(0, 3);

  //  alert(res);

    if ($('#ClogMode1 option:selected').val() == '') {

    }

    if ($('#ddlcurrsts option:selected').val() != 6) {

        Classfctn = '';
        ModlName = '';
        IssTyp = '';
        devlpr = '';
        Tstr = '';
        crfid = '';
    }
    else {

        if ($('#ddlClassif option:selected').val() != 4) {

            Classfctn = $('#ddlClassif option:selected').val();
            ModlName = '';
            IssTyp = '';
            devlpr = '';
            Tstr = '';
            crfid = '';
        }
        else {

            Classfctn = $('#ddlClassif option:selected').val();
            ModlName = $('#txt_ModName option:selected').val();
            IssTyp = $('#txt_IssueType option:selected').val();
            Tstr = $('#ddlTester option:selected').val();
            crfid = $("#txt_crf").val()
            if ($("#radEmpnme").prop("checked")) {

                devlpr = $('#txt_emp_cod').val();
            }
            else if ($("#radEmpcod").prop("checked")) {

                devlpr = $('#txt_empcod').val();

            }
        }
    }
    if (res == 'INS') {
        QueryString = "updateincidentEsecuritydtl";
    }
    

    if (($('#ddlcurrsts option:selected').val() == 5 || $('#ddlcurrsts option:selected').val() == 6) && temp == "") {

        ModelPopWarning("Please Enter Reason For Issue...");

    } else if (($('#ddlcurrsts option:selected').val() == 5 || $('#ddlcurrsts option:selected').val() == 6) && temp1 == "") {
        ModelPopWarning("Please Enter Solution...");

    }

    else if (global_tickno == "") {
        ModelPopWarning("Please select Ticket no");
        return false;

    }

    else if ($("#ddlcurrsts option:selected").val() == -1) {
        ModelPopWarning("Please select Current Status");
        return false;
    }
    else if ($("#ddlchUrg option:selected").val() == -1) {
        ModelPopWarning("Please select Priority");
        return false;
    }

    else if ($('#txt_subject').val().trim() == "") {
        ModelPopWarning("Please Add Subject");
        return false;
    }
    else if ($('#txt_description').val().trim() == "") {
        ModelPopWarning("Please Add Description");
        return false;
    }
    else {

        if (global_tickno.substring(0, 3) == 'INS') {

            if ($("#ddlimp option:selected").val() == -1) {

                ModelPopWarning("Please select Impact");
                return false;
            }

            else if ($("#ddlchsev option:selected").val() == -1) {

                ModelPopWarning("Please select Severity");
                return false;
            }

            else if ($("#ddlchclass option:selected").val() == -1) {

                ModelPopWarning("Please select Classification/Incident category");
                return false;
            }
            else if ($("#ddlsubcat option:selected").val() == -1) {

                ModelPopWarning("Please select Subcategory");
                return false;
            }

            else if (global_tickno.substring(0, 3) == 'INS' && $("#ddlsubcat option:selected").val() == -1) {

                alert('Please select Sub Category');
            }
            else {
                //                                      
                input = global_tickno + "¥" +//1
                    $("#ddlcurrsts option:selected").val() + "¥" +//2
                    $("#ddlimp option:selected").val() + "¥" +//3
                    $("#ddlchsev option:selected").val() + "¥" +//4
                
                    $("#ddlchUrg option:selected").val() + "¥" +//5

                   /* $("#ddlsubcat option:selected").val() + "¥" +*/
                    //$("#ddlccurbin option:selected").val() + "¥" +

                    $("#txt_impactdetails").val() + "¥" +//6
                    $("#txt_subject").val() + "¥" +//7
                    $("#txt_description").val() + "¥" +//8
                    $("#txt_impci").val() + "¥" +//9
                    $("#txt_solution").val() + "¥" +//10
                    $("#txt_reason_fr_err").val() + "¥" +//11
                    $("[id*=hdUserId]").val() + "¥" +//12
                    $("#txt_phno").val() + "¥" +//13
                    $("#txt_ALTPHNO").val() + "¥" +//14
                    $("#txt_email").val() + "¥" +//15
                    per + "¥" +//16
                    per_br_code + "¥" +//17
                    $("#ClogMode1").val() + "¥" +//18
                    Classfctn + "¥" +//19
                    ModlName + "¥" +//20
                    IssTyp + "¥" +//21
                    devlpr + "¥" +//22
                    Tstr + "¥" +//23
                    crfid + "¥" +//24
                    $("#Esub1 option:selected").val() + "¥" +//25
                    $("#Esub2 option:selected").val() + "¥" +//26
                    $("#Esub3 option:selected").val();//27
            }

        }

       

     //   alert(input);

        $.ajax({
            type: "POST",
            contentType: "application/json; charset=utf-8",
            url: "ES_BIN_OWNER.aspx/confirmview",
            data: "{QueryString:'" + QueryString + "',input : '" + input + "'}",
            dataType: "json",
            success: function (Result) {
                Result = Result.d;
                alert(Result);
                tempwlog = 0;
                window.location.reload();

            },

            error: function (Result) {
                alert(Result.d);
            }
        });


    }


}

//Esecurity confirm////

function ESsubmit() {

    var per = '';
    var per_br_code = '';


    if ($('#radGYes').prop('checked') == true) {

        per = 1;
        per_br_code = $('#txt_EMPNO').val();

    } else if ($('#radGNo').prop('checked') == true) {

        per = 0;
        per_br_code = $('#txt_EMPNO').val();

    }
    var temp = ($('#txt_reason_fr_err').val()).trim();
    var temp1 = ($('#txt_solution').val()).trim();

    var asset;
    var cur_sts;
    var input;

    var QueryString;
    var Classfctn;
    var ModlName;
    var IssTyp;
    var devlpr;
    var Tstr;
    var crfid;
    var res = global_tickno.substring(0, 3);

    if ($('#ClogMode1 option:selected').val() == '') {

    }

    if ($('#ddlcurrsts option:selected').val() != 6) {

        Classfctn = '';
        ModlName = '';
        IssTyp = '';
        devlpr = '';
        Tstr = '';
        crfid = '';
    }
    else {

        if ($('#ddlClassif option:selected').val() != 4) {

            Classfctn = $('#ddlClassif option:selected').val();
            ModlName = '';
            IssTyp = '';
            devlpr = '';
            Tstr = '';
            crfid = '';
        }
        else {

            Classfctn = $('#ddlClassif option:selected').val();
            ModlName = $('#txt_ModName option:selected').val();
            IssTyp = $('#txt_IssueType option:selected').val();
            Tstr = $('#ddlTester option:selected').val();
            crfid = $("#txt_crf").val()
            if ($("#radEmpnme").prop("checked")) {

                devlpr = $('#txt_emp_cod').val();
            }
            else if ($("#radEmpcod").prop("checked")) {

                devlpr = $('#txt_empcod').val();

            }
        }
    }
    if (res == 'INS') {
        QueryString = "updateincidentEsecuritydtl";
    }
    if (($('#ddlcurrsts option:selected').val() == 5 || $('#ddlcurrsts option:selected').val() == 6) && temp == "") {

        ModelPopWarning("Please Enter Reason For Issue...");

    } else if (($('#ddlcurrsts option:selected').val() == 5 || $('#ddlcurrsts option:selected').val() == 6) && temp1 == "") {
        ModelPopWarning("Please Enter Solution...");

    }

    else if (global_tickno == "") {
        ModelPopWarning("Please select Ticket no");
        return false;

    }

    else if ($("#ddlcurrsts option:selected").val() == -1) {
        ModelPopWarning("Please select Current Status");
        return false;
    }
    else if ($("#ddlchUrg option:selected").val() == -1) {
        ModelPopWarning("Please select Priority");
        return false;
    }

    else if ($('#txt_subject').val().trim() == "") {
        ModelPopWarning("Please Add Subject");
        return false;
    }
    else if ($('#txt_description').val().trim() == "") {
        ModelPopWarning("Please Add Description");
        return false;
    }
    else if ($("#ddlimp option:selected").val() == -1) {

        ModelPopWarning("Please select Impact");
        return false;
    }

    else if ($("#ddlchsev option:selected").val() == -1) {

        ModelPopWarning("Please select Severity");
        return false;
    }

    else if ($("#Esub1 option:selected").val() == -1) {

        ModelPopWarning("Please select Equipment Type:");
        return false;
    }
    else if ($("#Esub2 option:selected").val() == -1) {

        ModelPopWarning("Please select Sub Category 1");
        return false;
    }
    else if ($("#Esub3 option:selected").val() == -1) {

        ModelPopWarning("Please select Sub Category 2");
        return false;
    }

    else if ($("#ddlimacType option:selected").val() == 0 && $("#ddlReqType option:selected").val() == 401) {
        ModelPopWarning("Please Select IMAC Type");
        return false;
    }
    else if ($('#ddlcurrsts option:selected').val() == 6 && $('#ddlReqType option:selected').val() == 401 && wo_added == 0) {

        ModelPopWarning('Please add workorder before close the imac ticket');
    }
    else {


        //                                        1                               2                                              3                                                                             
        input = global_tickno + "¥" + $("#ddlcurrsts option:selected").val() + "¥" + $("#ddlchUrg option:selected").val() + "¥" +
            //                                                   4                                     5                                          6
            $("#ddlReqType option:selected").val() + "¥" + $("#ddlccurbin option:selected").val() + "¥" + $("#txt_subject").val() + "¥" +
            //                                               7                             8                               9                
            $("#txt_description").val() + "¥" + $("#txt_impci").val() + "¥" + $("#txt_solution").val() + "¥" +
            //                                               10                                 11                                     12
            $("#txt_reason_fr_err").val() + "¥" + $("[id*=hdUserId]").val() + "¥" + $("#ddlimacType option:selected").val() + "¥" +
            //                                         13                            14                             15                      16              17                    18
            $("#txt_phno").val() + "¥" + $("#txt_ALTPHNO").val() + "¥" + $("#txt_email").val() + "¥" + per + "¥" + per_br_code + "¥" + $("#ClogMode1").val() + "¥" + $("#ddlReqTypeinsub option:selected").val() + "¥" + $("#Esub1 option:selected").val() + "¥" + $("#Esub2 option:selected").val() + "¥" + $("#Esub3 option:selected").val();

    }
    


$.ajax({
    type: "POST",
    contentType: "application/json; charset=utf-8",
    url: "ES_BIN_OWNER.aspx/confirmview1",
    data: "{QueryString:'" + QueryString + "',input : '" + input + "'}",
    dataType: "json",
    success: function (Result) {
        Result = Result.d;
        alert(Result);
        tempwlog = 0;
        window.location.reload();

    },

    error: function (Result) {
        alert(Result.d);
    }
});


    
}



//------------------------------------------------WORK ORDER BUTTON CLICK FUNCTION---------------------------------
function wo_forms() {

    $("#workorderadd").modal('show');
    $('#totpge').addClass('container1');

    debugger;


    if ($("#ddlbin option:selected").text() == "Select Your Bin ") {
        ModelPopWarning("Please Choose Your Bin");

        // return false;
    }



    //document.getElementById("wo_bin").value = $('#ddlbin option:selected').text();
    document.getElementById("wo_sr_no").value = wo_sr_value;

    Getprdttype();


    $('#ins_head').hide(); $('#mov_head').hide(); $('#stk_head').hide(); $('#dcmn_head').hide(); $('#dsps_head').hide(); $('#bmove_head').hide(); $('#binst_head').hide();
    $('#wo_instal').hide();
    $('#wo_movement').hide();
    $('#wo_stock').hide();
    $('#wo_decommision').hide();
    $('#wo_dispose').hide();
    $('#wo_bulk_installation').hide();
    $('#wo_bulk_movement').hide();

    //if (imac_typ == "1") {

    //    $('#wo_instal').show();
    //    $('#ins_head').show();
    //    $('#mov_head').hide(); $('#stk_head').hide(); $('#dcmn_head').hide(); $('#dsps_head').hide();

    //    $('input[type="checkbox"]').on('change', function () {
    //        $('input[type="checkbox"]').not(this).prop('checked', false);
    //        $('input[type="checkbox"]').removeEventListener();
    //    });


    //}

    if ($('#ddlimacType option:selected').val() == "2") {

        $('#wo_movement').show();
        $('#mov_head').show();
        $('#ins_head').hide(); $('#stk_head').hide(); $('#dcmn_head').hide(); $('#dsps_head').hide();

        $('input[type="checkbox"]').on('change', function () {
            $('input[type="checkbox"]').not(this).prop('checked', false);
            $('input[type="checkbox"]').removeEventListener();
        });

    }

    else if ($('#ddlimacType option:selected').val() == "1") {

        $('#wo_stock').show();
        $('#stk_head').show();
        $('#ins_head').hide(); $('#mov_head').hide(); $('#dcmn_head').hide(); $('#dsps_head').hide(); $('#bmove_head').hide(); $('#binst_head').hide();


    }

    else if ($('#ddlimacType option:selected').val() == "3") {

        $('#wo_decommision').show();
        $('#dcmn_head').show();
        $('#ins_head').hide(); $('#mov_head').hide(); $('#stk_head').hide(); $('#dsps_head').hide(); $('#bmove_head').hide(); $('#binst_head').hide();

        $('input[type="checkbox"]').on('change', function () {
            $('input[type="checkbox"]').not(this).prop('checked', false);
            $('input[type="checkbox"]').removeEventListener();
        });

    }
    else if ($('#ddlimacType option:selected').val() == "4") {

        $('#wo_dispose').show();
        $('#dsps_head').show();
        $('#ins_head').hide(); $('#mov_head').hide(); $('#stk_head').hide(); $('#dcmn_head').hide(); $('#bmove_head').hide(); $('#binst_head').hide();

        $('input[type="checkbox"]').on('change', function () {
            $('input[type="checkbox"]').not(this).prop('checked', false);
            $('input[type="checkbox"]').removeEventListener();
        });

    } else if ($('#ddlimacType option:selected').val() == "5") {

        $('#wo_bulk_installation').show();
        $('#binst_head').show();
        $('#ins_head').hide(); $('#mov_head').hide(); $('#stk_head').hide(); $('#bmove_head').hide(); $('#dcmn_head').hide(); $('#dsps_head').hide();

        $('input[type="checkbox"]').on('change', function () {
            $('input[type="checkbox"]').not(this).prop('checked', false);
            $('input[type="checkbox"]').removeEventListener();
        });

    } else if ($('#ddlimacType option:selected').val() == "6") {

        $('#wo_bulk_movement').show();
        $('#bmove_head').show();
        $('#ins_head').hide(); $('#mov_head').hide(); $('#stk_head').hide(); $('#binst_head').hide(); $('#dcmn_head').hide(); $('#dsps_head').hide();

        $('input[type="checkbox"]').on('change', function () {
            $('input[type="checkbox"]').not(this).prop('checked', false);
            $('input[type="checkbox"]').removeEventListener();
        });

    }
    //------------------BG blur-----------------
    $('#workorderadd').on('hide.bs.modal', function (event) {

        $('#totpge').removeClass('container1');

    });

    $('#pm_popup').on('hide.bs.modal', function (event) {

        $('#totpge').removeClass('container1');


    });

    get_zone();

}


//------------------------MAC ADRESS -----------------------------


function Macshowstk() {
    debugger;

    if ($('#select_type_stk option:selected').text() == "LAPTOP" || $('#select_type_stk option:selected').text() == "DESKTOP" || $('#select_type_stk option:selected').text() == "INTERNET DONGLE" || $('#select_type_stk option:selected').text() == "ROUTER" || $('#select_type_stk option:selected').text() == "TABLET") {
        $('#txt_mac_stk1').show();
    }

    if ($('#select_type_stk option:selected').text() == "LAPTOP" || $('#select_type_stk option:selected').text() == "DESKTOP" || $('#select_type_stk option:selected').text() == "SERVER") {
        $('#work123').show();
    }

    else {
        $('#txt_mac_stk1').hide();
        $('#work123').hide();
    }



}




//------------------------PRODUCT TYPE-----------------------------


function Getprdttype() {
    debugger;
    var QueryString = "GetAssettype";
    $.ajax({

        type: "POST",
        contentType: "application/json; charset=utf-8",
        url: "Assetmanagement.aspx/getAssettype",
        data: "{QueryString:'" + QueryString + "'}",
        dataType: "json",
        success: function (Result) {


            $('#select_type_ins,#select_type_mov,#select_type_stk,#select_type_dcmn,#select_type_dsps').empty();
            $('#select_type_ins,#select_type_mov,#select_type_stk,#select_type_dcmn,#select_type_dsps').append($("<option></option>").val("-1").html("Select Product Type "));
            $.each(Result.d, function (data, value) {
                $('#select_type_ins,#select_type_mov,#select_type_stk,#select_type_dcmn,#select_type_dsps').append($("<option></option>").val(value.ASId).html(value.ASName));

            })

        },
        error: function (Result) {

            alert("Error");
        }

    });

}


//-----------------------------------------Number Validation------------------------------------

function isNumber(evt, val1, isDec) {
    evt = (evt) ? evt : window.event;
    var charCode = (evt.which) ? evt.which : evt.keyCode;
    if (isDec = 0 && charCode == 46) {
        return false;
    } else if (isDec = 1 && charCode == 46) {
        var dec = val1.split('.');
        if (dec.length > 1 && charCode == 46) {
            return false;
        }
        return true;
    }

    if (charCode == 37 || charCode == 39) {
        return true;
    }
    if ((charCode > 31 && charCode < 48) || charCode > 57) {
        return false;
    }
    return true;
}




//------------------------------------------------MORE/LESS BUTTON--------------------------------------

//function myFunction() {
//    var dots = document.getElementById("dots");
//    var moreText = document.getElementById("work123");
//    var btnText = document.getElementById("myBtn");



//    if (dots.style.display === "none") {
//        dots.style.display = "inline";
//        btnText.innerHTML = "More";
//        moreText.style.display = "none";
//    } else {
//        dots.style.display = "none";
//        btnText.innerHTML = "Less";
//        moreText.style.display = "inline";
//    }
//} 



//---------------------------------------------STOCK EMP CODE / BRANCH ID / DEPT. ID---------------------------------------

function stkBTNcheck() {

    debugger;

    if ($("#emp_stk").prop("checked") == true) {

        $('#dept_stk2').hide();
        $('#emp_bch_stk1').show();
        $('#emp_bch_stk2').show();

    }
    else if ($("#bch_stk").prop("checked") == true) {
        $('#dept_stk2').hide();
        $('#emp_bch_stk1').show();
        $('#emp_bch_stk2').show();

    }
    else if ($("#dept_stk").prop("checked") == true) {

        $('#emp_bch_stk1').hide();
        $('#emp_bch_stk2').hide();
        Getdepartment();
        $('#dept_stk2').show();

    }
}

function stkEmpdetails() {

    debugger;

    //var e_cde = '';
    //e_cde = document.getElementById('#emp_text').value;
    //if ($("#emp_frm").prop("checked") == false && $("#bch_frm").prop("checked") == false) {
    //    alert('Please Select Affected By Person Or Branch ');

    //}
    //if (e_cde == null || e_cde == '') {

    //    alert('please fill EmpCode/BranchID textbox');
    //} else {


    if ($("#emp_stk").prop("checked") == true) {
        person = 1;


    }
    else if ($("#bch_stk").prop("checked") == true) {
        person = 0;

    }

    if (person == 1) {

        var QueryString = "GetEmployeeDetails";
        var input = $("#empbchstk_id").val();

        $.ajax({

            type: "POST",
            contentType: "application/json; charset=utf-8",
            url: "Binowner.aspx/getFillempdetails",
            data: "{QueryString:'" + QueryString + "',input : '" + input + "'}",
            dataType: "json",
            success: function (Result) {

                if (Result.d.length > 0) {


                    Result = Result.d.split("^");


                    document.getElementById("empbchstk_nme").value = Result[0];
                    $('#txt_asstLoc_stk').val(Result[6]);

                } else {

                    alert('No Entries Found');

                }


            },
            error: function (Result) {

                alert("Error Occured");
            }


        });
    }
    else if (person == 0) {
        var QueryString = "Getbranchdtls";
        var input = $("#empbchstk_id").val();


        $.ajax({

            type: "POST",
            contentType: "application/json; charset=utf-8",
            url: "Binowner.aspx/getbranchdt",
            data: "{QueryString:'" + QueryString + "',input : '" + input + "'}",
            dataType: "json",
            success: function (Result) {

                if (Result.d.length > 0) {

                    Result = Result.d.split("^");



                    document.getElementById("empbchstk_nme").value = Result[0];
                    $('#txt_asstLoc_stk').val(Result[4]);

                }
                else {

                    alert('No Entries Found');

                }


            },
            error: function (Result) {

                alert(Result);
            }


        });
    }

}

//-----------------------------------------MOVEMENT EMP/BRANCH/DEPARTMENT CHECK------------------------------------

//--------------------FROM--------------------------------

function movfrmBTNcheck() {

    debugger;

    if ($("#emp_frm").prop("checked") == true) {

        $('#dept_movfrm2').hide();
        $('#emp_bch_movfrm1').show();
        $('#emp_bch_movfrm2').show();

    }
    else if ($("#bch_frm").prop("checked") == true) {
        $('#dept_movfrm2').hide();
        $('#emp_bch_movfrm1').show();
        $('#emp_bch_movfrm2').show();

    }
    else if ($("#dept_frm").prop("checked") == true) {


        $('#emp_bch_movfrm1').hide();
        $('#emp_bch_movfrm2').hide();
        Getdepartment();
        $('#dept_movfrm2').show();

    }
}

function movfrmGetEmpdetails() {

    debugger;

    //var e_cde = '';
    //e_cde = document.getElementById('#emp_text').value;
    //if ($("#emp_frm").prop("checked") == false && $("#bch_frm").prop("checked") == false) {
    //    alert('Please Select Affected By Person Or Branch ');

    //}
    //if (e_cde == null || e_cde == '') {

    //    alert('please fill EmpCode/BranchID textbox');
    //} else {


    if ($("#emp_frm").prop("checked") == true) {
        person = 1;


    }
    else if ($("#bch_frm").prop("checked") == true) {
        person = 0;

    }

    if (person == 1) {

        var QueryString = "GetEmployeeDetails";
        var input = $("#emp_txt").val();

        $.ajax({

            type: "POST",
            contentType: "application/json; charset=utf-8",
            url: "ServiceRequest.aspx/getFillempdetails",
            data: "{QueryString:'" + QueryString + "',input : '" + input + "'}",
            dataType: "json",
            success: function (Result) {

                if (Result.d.length > 0) {

                    Result = Result.d.split("^");


                    document.getElementById("txt_brn_add1").value = Result[0];

                } else {

                    alert('No Entries Found');

                }


            },
            error: function (Result) {

                alert("Error Occured");
            }


        });
    }
    else if (person == 0) {
        var QueryString = "Getbranchdtls";
        var input = $("#emp_txt").val();

        $.ajax({

            type: "POST",
            contentType: "application/json; charset=utf-8",
            url: "ServiceRequest.aspx/getbranchdt",
            data: "{QueryString:'" + QueryString + "',input : '" + input + "'}",
            dataType: "json",
            success: function (Result) {


                if (Result.d.length > 0) {

                    Result = Result.d.split("^");


                    document.getElementById("txt_brn_add1").value = Result[0];

                }
                else {

                    alert('No Entries Found');

                }


            },
            error: function (Result) {

                alert(Result);
            }


        });
    }

}
//--------------------TO--------------------------------
var to_em_br_dep;
var to_em_br_dep_typ;

function movtoBTNcheck() {

    debugger;

    if ($("#emp_to").prop("checked") == true) {

        $('#dept_movto2').hide();
        $('#emp_bch_movto1').show();
        $('#emp_bch_movto2').show();
        to_em_br_dep = 2;

    }
    else if ($("#bch_to").prop("checked") == true) {
        $('#dept_movto2').hide();
        $('#emp_bch_movto1').show();
        $('#emp_bch_movto2').show();
        to_em_br_dep = 1;

    }
    else if ($("#dept_to").prop("checked") == true) {


        $('#emp_bch_movto1').hide();
        $('#emp_bch_movto2').hide();
        Getdepartment();
        $('#dept_movto2').show();
        to_em_br_dep = 3;

    }
}

function movtoGetEmpdetails() {

    debugger;

    //var e_cde = '';
    //e_cde = document.getElementById('#emp_text').value;
    //if ($("#emp_frm").prop("checked") == false && $("#bch_frm").prop("checked") == false) {
    //    alert('Please Select Affected By Person Or Branch ');

    //}
    //if (e_cde == null || e_cde == '') {

    //    alert('please fill EmpCode/BranchID textbox');
    //} else {


    if ($("#emp_to").prop("checked") == true) {
        person = 1;


    }
    else if ($("#bch_to").prop("checked") == true) {
        person = 0;

    }

    if (person == 1) {

        var QueryString = "GetEmployeeDetails";
        var input = $("#to_empid").val();

        $.ajax({

            type: "POST",
            contentType: "application/json; charset=utf-8",
            url: "ServiceRequest.aspx/getFillempdetails",
            data: "{QueryString:'" + QueryString + "',input : '" + input + "'}",
            dataType: "json",
            success: function (Result) {

                if (Result.d.length > 0) {

                    Result = Result.d.split("^");


                    document.getElementById("to_empname").value = Result[0];
                    to_em_br_dep_typ = Result[0];

                } else {

                    alert('No Entries Found');

                }


            },
            error: function (Result) {

                alert("Error Occured");
            }


        });
    }
    else if (person == 0) {
        var QueryString = "Getbranchdtls";
        var input = $("#to_empid").val();

        $.ajax({

            type: "POST",
            contentType: "application/json; charset=utf-8",
            url: "ServiceRequest.aspx/getbranchdt",
            data: "{QueryString:'" + QueryString + "',input : '" + input + "'}",
            dataType: "json",
            success: function (Result) {


                if (Result.d.length > 0) {

                    Result = Result.d.split("^");


                    document.getElementById("to_empname").value = Result[0];
                    to_em_br_dep_typ = Result[0];

                }
                else {

                    alert('No Entries Found');

                }


            },
            error: function (Result) {

                alert(Result);
            }


        });
    }

}

//-------------------------MOVEMENT DEPARTMENT ON CHANGE-------------------------

function movtodept_change() {

    to_em_br_dep_typ = $('#movtodprt option:selected').text();

}



//---------------------------------------------DECOMMISSION EMP CODE / BRANCH ID / DEPT. ID---------------------------------------

function dcmnBTNcheck() {

    debugger;

    if ($("#emp_dcmn").prop("checked") == true) {

        $('#dept_dcmn2').hide();
        $('#emp_bch_dcmn1').show();
        $('#emp_bch_dcmn2').show();

    }
    else if ($("#bch_dcmn").prop("checked") == true) {
        $('#dept_dcmn2').hide();
        $('#emp_bch_dcmn1').show();
        $('#emp_bch_dcmn2').show();

    }
    else if ($("#dept_dcmn").prop("checked") == true) {

        $('#emp_bch_dcmn1').hide();
        $('#emp_bch_dcmn2').hide();
        Getdepartment();
        $('#dept_dcmn2').show();

    }
}

function dcmnEmpdetails() {

    debugger;

    //var e_cde = '';
    //e_cde = document.getElementById('#emp_text').value;
    //if ($("#emp_frm").prop("checked") == false && $("#bch_frm").prop("checked") == false) {
    //    alert('Please Select Affected By Person Or Branch ');

    //}
    //if (e_cde == null || e_cde == '') {

    //    alert('please fill EmpCode/BranchID textbox');
    //} else {


    if ($("#emp_dcmn").prop("checked") == true) {
        person = 1;


    }
    else if ($("#bch_dcmn").prop("checked") == true) {
        person = 0;

    }

    if (person == 1) {

        var QueryString = "GetEmployeeDetails";
        var input = $("#empbchdcmn_id").val();

        $.ajax({

            type: "POST",
            contentType: "application/json; charset=utf-8",
            url: "ServiceRequest.aspx/getFillempdetails",
            data: "{QueryString:'" + QueryString + "',input : '" + input + "'}",
            dataType: "json",
            success: function (Result) {

                if (Result.d.length > 0) {

                    Result = Result.d.split("^");


                    document.getElementById("empbchdcmn_nme").value = Result[0];

                } else {

                    alert('No Entries Found');

                }


            },
            error: function (Result) {

                alert("Error Occured");
            }


        });
    }
    else if (person == 0) {
        var QueryString = "Getbranchdtls";
        var input = $("#empbchdcmn_id").val();


        $.ajax({

            type: "POST",
            contentType: "application/json; charset=utf-8",
            url: "ServiceRequest.aspx/getbranchdt",
            data: "{QueryString:'" + QueryString + "',input : '" + input + "'}",
            dataType: "json",
            success: function (Result) {


                if (Result.d.length > 0) {

                    Result = Result.d.split("^");


                    document.getElementById("empbchdcmn_nme").value = Result[0];

                }
                else {

                    alert('No Entries Found');

                }


            },
            error: function (Result) {

                alert(Result);
            }


        });
    }

}


//---------------------------------------------DISPOSE EMP CODE / BRANCH ID / DEPT. ID---------------------------------------

function dspsBTNcheck() {

    debugger;

    if ($("#emp_dsps").prop("checked") == true) {

        $('#dept_dsps2').hide();
        $('#emp_bch_dsps1').show();
        $('#emp_bch_dsps2').show();

    }
    else if ($("#bch_dsps").prop("checked") == true) {
        $('#dept_dsps2').hide();
        $('#emp_bch_dsps1').show();
        $('#emp_bch_dsps2').show();

    }
    else if ($("#dept_dsps").prop("checked") == true) {

        $('#emp_bch_dsps1').hide();
        $('#emp_bch_dsps2').hide();
        Getdepartment();
        $('#dept_dsps2').show();

    }
}

function dspsEmpdetails() {

    debugger;

    //var e_cde = '';
    //e_cde = document.getElementById('#emp_text').value;
    //if ($("#emp_frm").prop("checked") == false && $("#bch_frm").prop("checked") == false) {
    //    alert('Please Select Affected By Person Or Branch ');

    //}
    //if (e_cde == null || e_cde == '') {

    //    alert('please fill EmpCode/BranchID textbox');
    //} else {


    if ($("#emp_dsps").prop("checked") == true) {
        person = 1;


    }
    else if ($("#bch_dsps").prop("checked") == true) {
        person = 0;

    }

    if (person == 1) {

        var QueryString = "GetEmployeeDetails";
        var input = $("#empbchdsps_id").val();

        $.ajax({

            type: "POST",
            contentType: "application/json; charset=utf-8",
            url: "ServiceRequest.aspx/getFillempdetails",
            data: "{QueryString:'" + QueryString + "',input : '" + input + "'}",
            dataType: "json",
            success: function (Result) {

                if (Result.d.length > 0) {

                    Result = Result.d.split("^");


                    document.getElementById("empbchdsps_nme").value = Result[0];

                } else {

                    alert('No Entries Found');

                }


            },
            error: function (Result) {

                alert("Error Occured");
            }


        });
    }
    else if (person == 0) {
        var QueryString = "Getbranchdtls";
        var input = $("#empbchdsps_id").val();


        $.ajax({

            type: "POST",
            contentType: "application/json; charset=utf-8",
            url: "ServiceRequest.aspx/getbranchdt",
            data: "{QueryString:'" + QueryString + "',input : '" + input + "'}",
            dataType: "json",
            success: function (Result) {


                if (Result.d.length > 0) {

                    Result = Result.d.split("^");


                    document.getElementById("empbchdsps_nme").value = Result[0];

                }
                else {

                    alert('No Entries Found');

                }


            },
            error: function (Result) {

                alert(Result);
            }


        });
    }

}


//-----------------------------------------------------GET DEPARTMENT----------------------------------------

function Getdepartment() {
    debugger;
    var QueryString = "GetdepNAME";
    $.ajax({
        type: "POST",
        contentType: "application/json; charset=utf-8",
        url: "Assetmanagement.aspx/getAssignto",
        data: "{QueryString:'" + QueryString + "'}",
        dataType: "json",
        success: function (Result) {
            $('#stkdprt,#insdprt,#dcmndprt,#dspsdprt,#movfrmdprt,#movtodprt').empty();
            $('#stkdprt,#insdprt,#dcmndprt,#dspsdprt,#movfrmdprt,#movtodprt').append($("<option></option>").val("-1").html("Select Department "));
            $.each(Result.d, function (data, value) {

                $('#stkdprt,#insdprt,#dcmndprt,#dspsdprt,#movfrmdprt,#movtodprt').append($("<option></option>").val(value.ReqId).html(value.ReqName));
            })
        },
        error: function (Result) {
            alert(Result);
        }

    }); return;

}

//---------------------------IMAC CHANGE CONDITION-------------------

//function imc_typ_chng{

//    if ($('#ddlimacType').val()==)


//}


function imac_chg() {

    if ($("#ddlReqType option:selected").val() == 401) {

        $("#div_imactype").removeClass("d-none");
        $("#ddlimacType").val(Result[26]);
        imac_typ = Result[26];
    } else {

        $("#div_imactype").addClass("d-none");
        $("#ddlimacType").val(0);


    }
}


//-------------------------------------------------------------------

function STOCK() {
    wo_added = 1;


    var app;
    // alert(parseFloat($("#txt_prchCost_stk").val()).toFixed(2));




    var fileList = document.getElementById("FileUpload_wo").files;
    var fileReader = new FileReader();

    if ($('#FileUpload_wo').val() == "") {

        ModelPopWarning("Please attach IMAC Document..");

    } else {
        if (fileReader && fileList && fileList.length) {
            var d = new Date();
            var fileName = fileList[0].name;
            fileReader.readAsDataURL(fileList[0]);
            fileReader.onload = function () {
                var imageData = fileReader.result;
                var d2 = imageData.split(":");
                var d3 = d2[1].split(";");
                var imageData = fileReader.result;

                var d1 = fileList[0].name.split(".");

                //alert(imageData.length);

                if (imageData.length > 1048576) {

                    ModelPopWarning('Attachement size exceeded the limit...Maximum Size 1 Mb');
                }
                else {


                    var imac_stk = imac_typ;
                    var asset = 3;
                    var k = 0;
                    var branch;
                    var input;
                    var alloc2;
                    var assgnemp = '';
                    var assgndept = '';
                    var assgnbr = '';


                    var asset_frm_emp = '';
                    var asset_frm_dept = '';
                    var asset_frm_br = '';

                    var check;

                    // var pcost = $('#txt_prchCost_stk').val().split('.');

                    var QueryString = "addstock_temp";

                    //if ($('#emp_stk').prop('checked') == false && $('#bch_stk').prop('checked') == false && $('#dept_stk').prop('checked') == false) {

                    //    ModelPopWarning('Please Select Assign to Option..');
                    //}


                    //else if (($('#emp_stk').prop('checked') == true || $('#bch_stk').prop('checked') == true) && $('#empbchstk_id').val().trim() == '') {



                    //    ModelPopWarning('Please Serarch Assign to with Employeecode or Branch id..');

                    //} else if ($('#dept_stk').prop('checked') == true && $('#stkdprt option:selected').val()) {

                    //    ModelPopWarning('Please Select Department..');

                    //}
                    //else if ($('#select_type_stk option:selected').val() == -1) {


                    //    ModelPopWarning('Please Select Asset Type');

                    //} else if ($('#txt_name_stk').val().trim() == "") {


                    //    ModelPopWarning('Please Enter Asset Name');
                    //} else if ($('#txt_prchCost_stk').val().trim() == "") {

                    //    ModelPopWarning('Please Enter Purchase Cost');
                    //} else if (pcost[0].length > 8) {

                    //    ModelPopWarning('Purchase Cost Exceeded The Limit');
                    //}

                    //else if ($('#txt_purchdt_stk').val().trim() == "") {


                    //    ModelPopWarning('Please Enter Purchase Date..');
                    //} else if ($('#txt_sernum_stk').val().trim() == "") {

                    //    ModelPopWarning('Please Enter serialnumber..');
                    //} else if ($('#txt_model').val().trim() == "") {

                    //    ModelPopWarning('Please Enter Part Model..');
                    //} else if ($('#txt_prdtNme_assttag').val().trim() == "") {

                    //    ModelPopWarning('Please Enter Asset Tag..');
                    //} else if ($('#txt_host_nme').val().trim() == "") {


                    //    ModelPopWarning('Please Entr Host Name..');
                    //} else if ($('#txt_warret_stde').val().trim() == "") {


                    //    ModelPopWarning('Purchase Enter Warrenty Start date..');
                    //} else if ($('#txt_wrntEnd_stk').val().trim() == "") {


                    //    ModelPopWarning('Please Enter Warrenty Expiry date.. ');
                    //} else if ($('#assState_stk').val() == -1) {


                    //    ModelPopWarning('Please Select Asset State..');
                    //} else if ($('#assoUs_stk option:selected').val() == 0) {

                    //    ModelPopWarning('Please Select Associated User asset..');
                    //} else if ($('#asstLsd_stk option:selected').val() == 0) {

                    //    ModelPopWarning('Please Select Asset Leased or Not Option..');
                    //} else if ($('#txt_asstLoc_stk').val().trim() == "") {

                    //    ModelPopWarning('Please Enter Asset Location Address..');
                    //} else if ($('#txt_remarks_stk').val().trim() == "") {

                    //    ModelPopWarning('Please Enter Remarks..');
                    //} -------------------------------------------------//else if ($('#assState_stk option:selected').val().trim() == "") {

                    //    alert('Please Enter Warrenty End Date..');
                    //} else if ($('#assoUs_stk option:selected').val() == 0) {

                    //    alert('Please Enter Associated User Asset..');

                    //} else if ($('#asstLsd_stk option:selected').val() == 0) {

                    //    alert('Please Select Asset Leased Or Not');
                    //} else if ($('#asstLsd_stk').val().trim() == "") {

                    //    alert('Please Enter Asset Location Address..');
                    //}


                    if ($('#ddlimacType option:selected').val() == 1) {


                        var op = $('#select_type_stk option:selected').text();


                        if ($("#emp_stk").prop("checked")) {

                            alloc2 = 2;
                            assgnemp = $("#empbchstk_id").val();
                        }
                        else if ($("#bch_stk").prop("checked")) {

                            alloc2 = 1;
                            assgnbr = $("#empbchstk_id").val();

                        }
                        else if ($("#dept_stk").prop("checked")) {
                            alloc2 = 3;
                            assgndept = $("#stkdprt option:selected").val();


                        }


                        if (op == 'DESKTOP') {


                            check = 1;
                        }
                        else if (op == 'SERVER') {


                            check = 1;
                        }
                        else if (op == 'LAPTOP') {


                            check = 1;
                        }
                        else {

                            check = 0;
                        }

                        if ($('#emp_stk').prop('checked') == false && $('#bch_stk').prop('checked') == false && $('#dept_stk').prop('checked') == false) {

                            ModelPopWarning('Please Select Assign to Option..');
                        }


                        else if (($('#emp_stk').prop('checked') == true || $('#bch_stk').prop('checked') == true) && $('#empbchstk_id').val().trim() == '') {



                            ModelPopWarning('Please Serarch Assign to with Employeecode or Branch id..');

                        } else if ($('#dept_stk').prop('checked') == true && $('#stkdprt option:selected').val() == -1) {

                            ModelPopWarning('Please Select Department..');

                        }
                        else if ($('#select_type_stk option:selected').val() == -1) {


                            ModelPopWarning('Please Select Asset Type');

                        }
                        //    else if ($('#txt_name_stk').val().trim() == "") {


                        //    ModelPopWarning('Please Enter Asset Name');
                        //}
                        //    else if ($('#txt_prchCost_stk').val().trim() == "") {

                        //    ModelPopWarning('Please Enter Purchase Cost');
                        //} 
                        //else if (pcost[0].length > 8) {

                        //    ModelPopWarning('Purchase Cost Exceeded The Limit');
                        //}

                        //else if ($('#txt_purchdt_stk').val().trim() == "") {


                        //    ModelPopWarning('Please Enter Purchase Date..');
                        //} 
                        else if ($('#txt_sernum_stk').val().trim() == "") {

                            ModelPopWarning('Please Enter serialnumber..');
                        } else if ($('#txt_model').val().trim() == "") {

                            ModelPopWarning('Please Enter Part Model..');
                        } else if ($('#txt_prdtNme_assttag').val().trim() == "") {

                            ModelPopWarning('Please Enter Asset Tag..');
                        } else if ($('#txt_host_nme').val().trim() == "") {


                            ModelPopWarning('Please Entr Host Name..');
                        } else if ($('#txt_warret_stde').val().trim() == "") {


                            ModelPopWarning('Purchase Enter Warrenty Start date..');
                        } else if ($('#txt_wrntEnd_stk').val().trim() == "") {


                            ModelPopWarning('Please Enter Warrenty Expiry date.. ');
                        } else if ($('#assState_stk').val() == -1) {


                            ModelPopWarning('Please Select Asset State..');
                        }
                        //    else if ($('#assoUs_stk option:selected').val() == 0) {

                        //    ModelPopWarning('Please Select Associated User asset..');
                        //} else if ($('#asstLsd_stk option:selected').val() == 0) {

                        //    ModelPopWarning('Please Select Asset Leased or Not Option..');
                        //} 
                        else if ($('#txt_asstLoc_stk').val().trim() == "") {

                            ModelPopWarning('Please Enter Asset Location Address..');
                        } else if ($('#txt_remarks_stk').val().trim() == "") {

                            ModelPopWarning('Please Enter Remarks..');
                        } else {
                            app = 1;
                            ////                          1                                             2                                          3                                  4                                  5                                   6                                   7                                    8                                   9                                                         10                                 11                                   12                                  13                                         14                                     15                                             16                                               17                                   18                                             19                         20                                       21                    
                            //input = $('#ddlimacType option:selected').val() + "¥" + $('#select_type_stk option:selected').val() + "¥" + $("#txt_name_stk").val() + "¥" + $("#txt_prdtTyp_stk").val() + "¥" + $("#txt_prdtNme_stk").val() + "¥" + $("#txt_mnfctr_stk").val() + "¥" + $("#txt_partnu_stk").val() + "¥" + $("#txt_macAddrs1_stk").val() + "¥" + parseFloat($("#txt_prchCost_stk").val()).toFixed(2) + "¥" + $("#txt_purchdt_stk").val() + "¥" + $("#txt_sernum_stk").val() + "¥" + $("#txt_wrntEnd_stk").val() + "¥" + $("#txt_asstLoc_stk").val() + "¥" + $('#assState_stk option:selected').val() + "¥" + $('#assoUs_stk option:selected').val() + "¥" + $('#asstLsd_stk option:selected').val() + "¥" + $("#txt_hostname_stk").val() + "¥" + $("#txt_servtag_stk").val() + "¥" + $("#txt_model_stk").val() + "¥" + $("#txt_manufact_stk").val() + "¥" + $("#txt_operatingsy_stk").val()
                            //    //               22                                     23                              24                                      25                                    26                             27                                  28                                    29                                  30                             31                                  32                                  33                                  34                                  35                                   36                                   37                                     38                                   39                                 40                                        41                                          42                                    43                  44             45             46               47                 48              49                   50               
                            //    + "¥" + $("#txt_servicepack_stk").val() + "¥" + $("#txt_memory_stk").val() + "¥" + $("#txt_vmemor_stk").val() + "¥" + $("#txt_proManufa_stk").val() + "¥" + $("#txt_clock_stk").val() + "¥" + $("#txt_cores_stk").val() + "¥" + $("#txt_ipAddress_stk").val() + "¥" + $("#txt_macAddr_stk").val() + "¥" + $("#txt_nic_stk").val() + "¥" + $("#txt_netw_stk").val() + "¥" + $("#txt_defaultGate_stk").val() + "¥" + $("#txt_dhc_stk").val() + "¥" + $("#txt_hddModel_stk").val() + "¥" + $("#txt_hddSerno_stk").val() + "¥" + $("#txt_hddManu_stk").val() + "¥" + $("#txt_hddCapacity_stk").val() + "¥" + $("#txt_moniType_stk").val() + "¥" + $("#txt_moniSerno_stk").val() + "¥" + $("#txt_moniManu_stk").val() + "¥" + $("#txt_moniResolution_stk").val() + "¥" + $("#txt_remarks_stk").val() + "¥" + $("[id*=hdUserId]").val() + "¥" + check + "¥" + alloc2 + "¥" + assgnemp + "¥" + assgndept + "¥" + assgnbr + "¥" + global_tickno + "¥" + fileName
                            //    //                51                            52                                    53                               54                                  55                                     56                               57
                            //    + "¥" + $("#txt_model").val() + "¥" + $("#txt_prdtNme_assttag").val() + "¥" + $("#txt_host_nme").val() + "¥" + $("#txt_warret_stde").val() + "¥" + $("#txt_asstLoc_stk").val() + "¥" + $("#txt_remarks_stk").val() + "¥" + $('#txt_AgrmntDt_mov_in').val();


                            //               1                                                         2                                              3                               4                               5                                       6                                      7                                        8                                         9                               10        
                            input = $('#ddlimacType option:selected').val() + "¥" + $('#select_type_stk option:selected').val() + "¥" + $("#txt_mnfctr_stk").val() + "¥" + $("#txt_sernum_stk").val() + "¥" + $("#txt_wrntEnd_stk").val() + "¥" + $("#txt_asstLoc_stk").val() + "¥" + $('#assState_stk option:selected').val() + "¥" +/* $("#txt_hostname_stk").val()*/ '' + "¥" + /*$("#txt_servtag_stk").val()*/ '' + "¥" +/* $("#txt_model_stk").val()*/ ''
                                //        11                                   12                               13                 14             15                   16              17               18                  19                             
                                + "¥" + $("#txt_remarks_stk").val() + "¥" + $("[id*=hdUserId]").val() + "¥" + /*check*/0 + "¥" + alloc2 + "¥" + assgnemp + "¥" + assgndept + "¥" + assgnbr + "¥" + global_tickno + "¥" + fileName
                                //              20                               21                                    22                                   23                             24                                 25                                    26                                        27  
                                + "¥" + $("#txt_model").val() + "¥" + $("#txt_prdtNme_assttag").val() + "¥" + $("#txt_host_nme").val() + "¥" + $("#txt_warret_stde").val() + "¥" + $("#txt_remarks_stk").val() + "¥" + $('#txt_AgrmntDt_mov_in').val() + "¥" + $('#txt_criticality').val() + "¥" + $('#ddl_category').val();


                        }
                    } else if ($('#ddlimacType option:selected').val() == 2) {//asst movement condition 

                        if ($("#emp_to").prop("checked")) {
                            assgndept = ""
                            assgnbr = "";
                            alloc2 = 2;
                            assgnemp = $("#to_empid").val();
                        }
                        else if ($("#bch_to").prop("checked")) {
                            assgndept = "";
                            assgnemp = "";
                            alloc2 = 1;
                            assgnbr = $("#to_empid").val();

                        } else if ($("#dept_to").prop("checked")) {
                            alloc2 = 3;
                            assgnemp = "";
                            assgnbr = "";
                            assgndept = $("movtodprt option:selected").val();


                        }
                        if (mov_asst_avi == 0) {    //  if asset details not available

                            if ($('#emp_to').prop('checked') == false && $('#bch_to').prop('checked') == false && $('#dept_to').prop('checked') == false) {


                                ModelPopWarning("please assign asset to ");


                            } else if ($('#emp_to').prop('checked') == true && $('#to_empid').val() == "") {

                                ModelPopWarning('Please enter employee code for assign');

                            } else if ($('#bch_to').prop('checked') == true && $('#to_empid').val() == "") {

                                ModelPopWarning('Please enter Branch code for assign');

                            } else if ($('#bch_to').prop('checked') == true && $('#movtodprt option:selected').val() == -1) {

                                ModelPopWarning('Please select Department for assign');

                            }
                            else if ($('#txt_AgrmntDt_mov').val() == "") {

                                ModelPopWarning("Please add date  of movement..");


                            } else if ($('#txt_remarks_mov').val() == "") {


                                ModelPopWarning("Please add Remarks ...");


                            } else {




                                app = 1;

                                //                      1                                        2                                  3                               4                       5               6                7              8               9               10               11                          12                               13                                            14               15
                                input = $('#ddlimacType option:selected').val() + "¥" + $("[id*=hdUserId]").val() + "¥" + $("#txt_remarks_mov").val() + "¥" + frm_em_br_dep_type + "¥" + frm_bch + "¥" + frm_emp + "¥" + frm_dept + "¥" + alloc2 + "¥" + assgnbr + "¥" + assgnemp + "¥" + assgndept + "¥" + /*$("#txt_assetcode_mov").val()*/ -1 + "¥" + /*$("#txt_mn_asstLoc_stk").val()*/'' + "¥" + fileName + "¥" + global_tickno

                                    //                16                              17                                        18                                  19
                                    + "¥" + $("#txt_remarks_mov").val() + "¥" + $("#txt_AgrmntDt_mov").val() + "¥" + /*$("#txt_m_prdtNme_assttag").val() */'' + "¥" + /*$("#txt_m_host_nme").val()*/'' + "¥" + mov_asst_avi;



                            }




                        } else {//  if asset details available


                            if ($('#txt_mn_asstLoc_stk').val().trim() == "") {

                                ModelPopWarning('Please Enter Asset Current Location...');

                            } else if ($('#emp_to').prop('checked') == false && $('#bch_to').prop('checked') == false && $('#dept_to').prop('checked') == false) {

                                ModelPopWarning('Please Select Assign to Option..');
                            }


                            else if (($('#emp_to').prop('checked') == true || $('#bch_to').prop('checked') == true) && $('#to_empid').val().trim() == '') {



                                ModelPopWarning('Please Search Assign to with Employeecode or Branch id..');

                            } else if ($('#dept_to').prop('checked') == true && $('#movtodprt option:selected').val()) {

                                ModelPopWarning('Please Select Department..');

                            }
                            else if ($('#txt_AgrmntDt_mov').val().trim() == "") {

                                ModelPopWarning('Please Select Date of Movement..');
                            }
                            else if ($('#txt_remarks_mov').val().trim() == "") {

                                ModelPopWarning('Please Enter Remarks..');
                            }

                            else {

                                app = 1;

                                //                      1                                        2                                  3                               4                       5               6                7              8               9               10               11                          12                               13                               14               15
                                input = $('#ddlimacType option:selected').val() + "¥" + $("[id*=hdUserId]").val() + "¥" + $("#txt_remarks_mov").val() + "¥" + frm_em_br_dep_type + "¥" + frm_bch + "¥" + frm_emp + "¥" + frm_dept + "¥" + alloc2 + "¥" + assgnbr + "¥" + assgnemp + "¥" + assgndept + "¥" + $("#txt_assetcode_mov").val() + "¥" + $("#txt_mn_asstLoc_stk").val() + "¥" + fileName + "¥" + global_tickno

                                    //                16                              17                                        18                                  19
                                    + "¥" + $("#txt_remarks_mov").val() + "¥" + $("#txt_AgrmntDt_mov").val() + "¥" + $("#txt_m_prdtNme_assttag").val() + "¥" + $("#txt_m_host_nme").val() + "¥" + mov_asst_avi;


                            }
                        }

                    } else if ($('#ddlimacType option:selected').val() == 3) {

                        if (dec_asst_avi == 0) {    //  decomission without asset code


                            if ($('#txt_AgrmntDt_dcmn').val() == "") {

                                ModelPopWarning("Please add date  of movement..");


                            } else if ($('#txt_remarks_dcmn').val() == "") {


                                ModelPopWarning("Please add Remarks ...");
                            } else {

                                app = 1;
                                input = $('#ddlimacType option:selected').val() + "¥" + $("[id*=hdUserId]").val() + "¥" + $("#txt_remarks_dcmn").val() + "¥" + /*frm_em_br_dep_type */"" + "¥" + /*frm_bch*/ "" + "¥" + /*frm_emp*/"" + "¥" + /*frm_dept*/ "" + "¥" +/* $("#txt_assetcode_dcmn").val()*/ -1 + "¥" + /*$("#txt_DD_asstLoc_stk ").val()*/ "" + "¥" + fileName + "¥" + global_tickno

                                    //             12                                     13
                                    + "¥" + $("#txt_remarks_dcmn").val() + "¥" + $("#txt_AgrmntDt_dcmn").val() + "¥" + dec_asst_avi;



                            }


                        } else {//decomission with asset code

                            if ($('#txt_AgrmntDt_dcmn').val() == "") {

                                ModelPopWarning("Please add date  of movement..");


                            } else if ($('#txt_remarks_dcmn').val() == "") {


                                ModelPopWarning("Please add Remarks ...");


                            }
                            else {


                                //app = 1;

                                ////                      1                                        2                                  3                               4                       5               6                7              8               9               10               11                          12                               13                                            14               15
                                //input = $('#ddlimacType option:selected').val() + "¥" + $("[id*=hdUserId]").val() + "¥" + $("#txt_remarks_mov").val() + "¥" + frm_em_br_dep_type + "¥" + frm_bch + "¥" + frm_emp + "¥" + frm_dept + "¥" + alloc2 + "¥" + assgnbr + "¥" + assgnemp + "¥" + assgndept + "¥" + /*$("#txt_assetcode_mov").val()*/ -1 + "¥" + /*$("#txt_mn_asstLoc_stk").val()*/'' + "¥" + fileName + "¥" + global_tickno

                                //    //                16                              17                                        18                                  19
                                //    + "¥" + $("#txt_remarks_mov").val() + "¥" + $("#txt_AgrmntDt_mov").val() + "¥" + /*$("#txt_m_prdtNme_assttag").val() */'' + "¥" + /*$("#txt_m_host_nme").val()*/'';
                                ////                      1                                         2                                   3                               4                      5               6               7                           8                                     9                            10                  11
                                app = 1;
                                input = $('#ddlimacType option:selected').val() + "¥" + $("[id*=hdUserId]").val() + "¥" + $("#txt_remarks_dcmn").val() + "¥" + frm_em_br_dep_type + "¥" + frm_bch + "¥" + frm_emp + "¥" + frm_dept + "¥" + $("#txt_assetcode_dcmn").val() + "¥" + $("#txt_DD_asstLoc_stk ").val() + "¥" + fileName + "¥" + global_tickno

                                    //             12                                     13                              14
                                    + "¥" + $("#txt_remarks_dcmn").val() + "¥" + $("#txt_AgrmntDt_dcmn").val() + "¥" + dec_asst_avi;


                            }

                        }


                    } else if ($('#ddlimacType option:selected').val() == 4) {
                        //---------------------------------------dd


                        if (dis_asst_avi == 0) {    //  decomission without asset code


                            if ($('#txt_AgrmntDt_dsps').val() == "") {

                                ModelPopWarning("Please add date  of movement..");


                            } else if ($('#txt_remarks_dsps').val() == "") {


                                ModelPopWarning("Please add Remarks ...");
                            } else {

                                //                       1                                        2                                    3                                4                           5                      6                    7                              8                                       9                                 10               11

                                app = 1;
                                input = $('#ddlimacType option:selected').val() + "¥" + $("[id*=hdUserId]").val() + "¥" + $("#txt_remarks_dsps").val() + "¥" + /*frm_em_br_dep_type*/'' + "¥" + /*frm_bch */'' + "¥" + /*frm_emp */'' + "¥" +/* frm_dept*/'' + "¥" +/* $("#txt_assetcode_dsps").val()*/ -1 + "¥" + $('#txt_dc_asstLoc_stk').val() + "¥" + fileName + "¥" + global_tickno

                                    //                12                                       13                           14
                                    + "¥" + $("#txt_remarks_dsps").val() + "¥" + $("#txt_AgrmntDt_dsps").val() + "¥" + dis_asst_avi;

                            }


                        } else {//decomission with asset code

                            if ($('#txt_AgrmntDt_dsps').val() == "") {

                                ModelPopWarning("Please add date  of movement..");


                            } else if ($('#txt_remarks_dsps').val() == "") {


                                ModelPopWarning("Please add Remarks ...");


                            }
                            else {


                                //app = 1;

                                ////                      1                                        2                                  3                               4                       5               6                7              8               9               10               11                          12                               13                                            14               15
                                //input = $('#ddlimacType option:selected').val() + "¥" + $("[id*=hdUserId]").val() + "¥" + $("#txt_remarks_mov").val() + "¥" + frm_em_br_dep_type + "¥" + frm_bch + "¥" + frm_emp + "¥" + frm_dept + "¥" + alloc2 + "¥" + assgnbr + "¥" + assgnemp + "¥" + assgndept + "¥" + /*$("#txt_assetcode_mov").val()*/ -1 + "¥" + /*$("#txt_mn_asstLoc_stk").val()*/'' + "¥" + fileName + "¥" + global_tickno

                                //    //                16                              17                                        18                                  19
                                //    + "¥" + $("#txt_remarks_mov").val() + "¥" + $("#txt_AgrmntDt_mov").val() + "¥" + /*$("#txt_m_prdtNme_assttag").val() */'' + "¥" + /*$("#txt_m_host_nme").val()*/'';
                                //                       1                                        2                                    3                                4                    5               6               7                        8                                   9                                 10               11

                                app = 1;
                                input = $('#ddlimacType option:selected').val() + "¥" + $("[id*=hdUserId]").val() + "¥" + $("#txt_remarks_dsps").val() + "¥" + frm_em_br_dep_type + "¥" + frm_bch + "¥" + frm_emp + "¥" + frm_dept + "¥" + $("#txt_assetcode_dsps").val() + "¥" + $('#txt_dc_asstLoc_stk').val() + "¥" + fileName + "¥" + global_tickno

                                    //                12                                       13                          14
                                    + "¥" + $("#txt_remarks_dsps").val() + "¥" + $("#txt_AgrmntDt_dsps").val() + "¥" + dis_asst_avi;

                            }

                        }





                        //---------------------------------------dd



                        ////                       1                                        2                                    3                                4                    5               6               7                        8                                   9                                 10               11

                        //app = 1;
                        //input = $('#ddlimacType option:selected').val() + "¥" + $("[id*=hdUserId]").val() + "¥" + $("#txt_remarks_dsps").val() + "¥" + frm_em_br_dep_type + "¥" + frm_bch + "¥" + frm_emp + "¥" + frm_dept + "¥" + $("#txt_assetcode_dsps").val() + "¥" + $('#txt_dc_asstLoc_stk').val() + "¥" + fileName + "¥" + global_tickno

                        //    //                12                                       13
                        //    + "¥" + $("#txt_remarks_dsps").val() + "¥" + $("#txt_AgrmntDt_dsps").val();

                    } else if ($('#ddlimacType option:selected').val() == 5) {

                        if ($('#ddlno_imac option:selected').val() == -1) {

                            ModelPopWarning('Please Select Number Of Installation');
                        } else if ($('#txt_AgrmntDt_bi').val().trim() == "") {

                            ModelPopWarning('Please select Date Of Movement..');
                        } else if ($('#bchid_bi').val().trim() == "") {

                            ModelPopWarning('Please Enter Branch Id..');
                        } else if ($('#txt_asst_bi_loc').val().trim() == "") {

                            ModelPopWarning('Please Enter Asset Location..');
                        } else if ($('#txt_remarks_bi_dsps').val().trim() == "") {

                            ModelPopWarning('Please Enter Remarks..');
                        }
                        else {

                            app = 1;
                            //                  1                                             2                                 3                                     4                               5                                6                              7                   8                  9
                            input = $('#ddlimacType option:selected').val() + "¥" + $("[id*=hdUserId]").val() + "¥" + $("#txt_AgrmntDt_bi").val() + "¥" + $("#bchid_bi").val() + "¥" + $('#txt_asst_bi_loc').val() + "¥" + $("#txt_remarks_bi_dsps").val() + "¥" + fileName + "¥" + global_tickno + "¥" + $('#ddlno_imac option:selected').val();
                        }



                    } else if ($('#ddlimacType option:selected').val() == 6) {

                        app = 1;
                        //                  1                                           2                                     3                                     4                                 5                            6                                     7                 8                        9                                         
                        input = $('#ddlimacType option:selected').val() + "¥" + $("[id*=hdUserId]").val() + "¥" + $("#txt_AgrmntDt_mv_bi").val() + "¥" + $("#bchid_br_mov").val() + "¥" + $("#txt_asst_mov_loc").val() + "¥" + $("#txt_remarks_mov_dsps").val() + "¥" + fileName + "¥" + global_tickno + "¥" + $("#ddlno_imac_mov option:selected").val();




                    }

                }

                if (app == 1) {
                    $.ajax({
                        type: "POST",
                        contentType: "application/json; charset=utf-8",
                        url: "Binowner.aspx/confirmworkorder",
                        data: "{InputStr:'" + input + "',upload_file : '" + imageData + "'}",
                        dataType: "json",
                        success: function (Result) {
                            Result = Result.d;
                            Result = Result.split("¥");
                            alert('WORK ORDER NO  :' + Result[1]);
                            $("#workorderadd").modal('hide');
                            changesubmit();

                            // window.open('Binowner.aspx', '_self');
                        },

                        error: function (Result) {
                            alert(Result);
                        }
                    });

                }
            }//------image data length

        }//---function closing



    }
    //------------
}
//-----------------FUNCTION FOR ASSET ADD
function ch_sub_wo() {
    debugger;

    if (tempwlog == 0) {

        ModelPopWarning("Before Making Changes In Tickets Please Add Change Details In Worklog ");
    }
    else if ($('#ddlReqType option:selected').val() == 401 && $('#ddlcurrsts option:selected').val() == 6 && global_tickno.substring(0, 2) == 'SR') {

        wo_forms();

        //$("#workorderadd").modal('show');
    }
    else if ($('#ddlReqType option:selected').val() == 607 && global_tickno.substring(0, 2) == 'SR') {

        $("#pm_popup").modal('show');
    }
    else if (($('#ddlcurrsts option:selected').val() == 6 && global_tickno.substring(0, 2) == 'IN')) {

        if ($('#ddlClassif option:selected').val() == -1) {

            ModelPopWarning("Select Classification");
        }
        else {
            if ($('#ddlClassif option:selected').val() == 4) {

                if ($('#txt_ModName option:selected').val() == -1) {

                    ModelPopWarning("Select Module Name");
                }
                else if ($('#txt_IssueType option:selected').val() == -1) {

                    ModelPopWarning("Select Module Name");
                }
                else if ($('#txt_emp_cod').val() == '' && $('#txt_emp_nme').val() == '') {

                    ModelPopWarning("Enter Valid Emp Code/Name");
                }
                else if ($('#ddlTester option:selected').val() == -1) {

                    ModelPopWarning("Select Tester");

                }
                else if ($('#txt_crf').val() == '') {

                    ModelPopWarning("Enter CRF ID");

                }
                else {

                    changesubmit();
                }
            }
            else {

                changesubmit();

            }

        }

    }
    else {

        changesubmit();

    }
}
//---------------

//--------------------------------------ASSET STATE--------------------------------


function GetAssetstate() {

    var QueryString = "GetAssetSTATE";
    $.ajax({
        type: "POST",
        contentType: "application/json; charset=utf-8",
        url: "Assetmanagement.aspx/getAssignto",
        data: "{QueryString:'" + QueryString + "'}",
        dataType: "json",
        success: function (Result) {
            $('#assState_stk').empty();
            $('#assState_stk').append($("<option></option>").val("-1").html("Select Assign State "));
            $.each(Result.d, function (data, value) {

                $('#assState_stk').append($("<option></option>").val(value.ReqId).html(value.ReqName));
            })
        },
        error: function (Result) {
            alert(Result);
        }

    });

}

//----------------------------------------INSTALLATION SEARCH BY ASSET CODE------------------------------


function Getasset_ins() {




    var input = $("#txt_search_ins").val();
    if ($('#chk_tickno').prop('checked') == true) {
        var QueryString = "GETassetdatas";


        $.ajax({

            type: "POST",
            contentType: "application/json; charset=utf-8",
            url: "Binowner.aspx/getasstdtls",
            data: "{QueryString:'" + QueryString + "',input : '" + input + "'}",
            dataType: "json",
            success: function (Result) {



                Result = Result.d.split("¥");
                $('#txt_assetcode_ins').val(Result[0]);
                $('#txt_sernum_ins').val(Result[1]);
                $('#txt_prdt_nme_ins').val(Result[2]);
                $('#txt_mnfctr_ins').val(Result[3]);
                $('#txt_purchdt_ins').val(Result[4]);
                $('#txt_partnu_ins').val(Result[5]);
                $('#txt_wrnt_strt_end').val(Result[6]);




            },
            error: function (Result) {

                alert(Result);
            }


        });
    }
    else if ($('#chk_rpt_frm').prop('checked') == true) {

        var QueryString = "GETsernumdatas";


        $.ajax({

            type: "POST",
            contentType: "application/json; charset=utf-8",
            url: "Binowner.aspx/getsernumdtls",
            data: "{QueryString:'" + QueryString + "',input : '" + input + "'}",
            dataType: "json",
            success: function (Result) {

                Result = Result.d.split("¥");
                $('#txt_assetcode_ins').val(Result[0]);
                $('#txt_sernum_ins').val(Result[1]);
                $('#txt_prdt_nme_ins').val(Result[2]);
                $('#txt_mnfctr_ins').val(Result[3]);
                $('#txt_purchdt_ins').val(Result[4]);
                $('#txt_partnu_ins').val(Result[5]);
                $('#txt_wrnt_strt_end').val(Result[6]);




            },
            error: function (Result) {

                alert(Result);
            }


        });


    }

    else {
        ModelPopWarning("Choose Either Asset Code Or Serial Number");
    }

}

//----------------------------------------MOVEMENT SEARCH BY ASSET CODE------------------------------

var frm_em_br_dep_type = '';
var frm_emp = ' ';
var frm_bch = ' ';
var frm_dept = ' ';
var mov_asst_avi;
function Getasset_mov() {
    //alert('entered to js function');


    var input = $("#txt_search_mov").val();

    if ($('#chk_tickno_mov').prop('checked') == true) {
        var QueryString = "GETassetdatas";


        $.ajax({

            type: "POST",
            contentType: "application/json; charset=utf-8",
            url: "Binowner.aspx/getasstdtls",
            data: "{QueryString:'" + QueryString + "',input : '" + input + "'}",
            dataType: "json",
            success: function (Result) {
                //alert(Result.d);

                if (Result.d.length > 0) {
                    mov_asst_avi = 1;
                    $('#asst_dtl').removeClass('d-none');
                    Result = Result.d.split("¥");
                    $('#txt_assetcode_mov').val(Result[0]);
                    $('#txt_sernum_mov').val(Result[1]);
                    $('#txt_prdt_nme_mov').val(Result[2]);
                    $('#txt_mnfctr_mov').val(Result[3]);
                    //$('#txt_purchdt_ins').val(Result[4]);
                    $('#txt_partnu_mov').val(Result[5]);
                    $('#txt_wrnt_end_mov').val(Result[6]);

                    frm_em_br_dep_type = Result[7];

                    if (frm_em_br_dep_type == 1) {

                        frm_bch = Result[8];
                    }
                    else if (frm_em_br_dep_type == 2) {

                        frm_emp = Result[8];
                    }
                    else if (frm_em_br_dep_type == 3) {

                        frm_dept = Result[8];
                    }


                    if (Result[7] == 1) {
                        //alert("entered into bch by asset code");
                        $('#divbnch_mov').removeClass('d-none');
                        $('#divemp_mov').addClass('d-none');
                        $('#divdept_mov').addClass('d-none');
                        $('#bchid_mov').val(Result[8]);
                        $('#bchname_mov').val(Result[9]);
                    }
                    else if (Result[7] == 2) {
                        //alert('entered to employee by asset code');

                        $("#divemp_mov").removeClass('d-none');
                        $('#divbnch_mov').addClass('d-none');
                        $('#divdept_mov').addClass('d-none');
                        $('#empid_mov').val(Result[8]);
                        $('#empname_mov').val(Result[9]);
                        //$('#empbranch_mov').val(Result[9]);
                    }
                    else if (Result[7] == 3) {
                        //alert('entered to dept by asset code');
                        $('#divdept_mov').removeClass('d-none');
                        $('#divemp_mov').addClass('d-none');
                        $('#divbnch_mov').addClass('d-none');
                        $('#dept_mov').val(Result[8]);
                        //$('#bchname_mov').val(Result[9]);
                    }

                    $('#txt_m_model').val(Result[10]);
                    $('#txt_m_prdtNme_assttag').val(Result[11]);
                    $('#txt_m_host_nme').val(Result[12]);
                    $('#txt_m_warret_stde').val(Result[13]);
                    $('#txt_mn_asstLoc_stk').val(Result[14]);
                } else {
                    mov_asst_avi = 0;
                    $('#txt_search_mov').val('');
                    $('#asst_dtl').addClass('d-none');
                    ModelPopWarning('No asset details found fill other details and attach imac document with asset details and submit..');
                }


            },
            error: function (Result) {

                alert(Result);
            }


        });
    }


    else if ($('#chk_rpt_mov').prop('checked') == true) {


        var QueryString = "GETsernumdatas";


        $.ajax({

            type: "POST",
            contentType: "application/json; charset=utf-8",
            url: "Binowner.aspx/getsernumdtls",
            data: "{QueryString:'" + QueryString + "',input : '" + input + "'}",
            dataType: "json",
            success: function (Result) {
                //alert(Result.d);

                if (Result.d.length > 0) {
                    mov_asst_avi = 1;
                    $('#asst_dtl').removeClass('d-none');

                    Result = Result.d.split("¥");
                    $('#txt_assetcode_mov').val(Result[0]);
                    $('#txt_sernum_mov').val(Result[1]);
                    $('#txt_prdt_nme_mov').val(Result[2]);
                    $('#txt_mnfctr_mov').val(Result[3]);
                    //$('#txt_purchdt_ins').val(Result[4]);
                    $('#txt_partnu_mov').val(Result[5]);
                    $('#txt_wrnt_end_mov').val(Result[6]);

                    frm_em_br_dep_type = Result[7];

                    if (frm_em_br_dep_type == 1) {

                        frm_bch = Result[8];
                    }
                    else if (frm_em_br_dep_type == 2) {

                        frm_emp = Result[8];
                    }
                    else if (frm_em_br_dep_type == 3) {

                        frm_dept = Result[8];
                    }

                    if (Result[7] == 1) {
                        //alert('entered to bch by serNo');

                        $('#divbnch_mov').removeClass('d-none');
                        $('#divemp_mov').addClass('d-none');
                        $('#divdept_mov').addClass('d-none');
                        $('#bchid_mov').val(Result[8]);
                        $('#bchname_mov').val(Result[9]);
                    }
                    else if (Result[7] == 2) {
                        //alert('entered to emp by serNo');

                        $("#divemp_mov").removeClass('d-none');
                        $('#divbnch_mov').addClass('d-none');
                        $('#divdept_mov').addClass('d-none');
                        $('#empid_mov').val(Result[8]);
                        $('#empname_mov').val(Result[9]);
                        //$('#empbranch_mov').val(Result[9]);
                    }
                    else if (Result[7] == 3) {
                        //alert('entered to dept by serNo');
                        $('#divdept_mov').removeClass('d-none');
                        $('#divemp_mov').addClass('d-none');
                        $('#divbnch_mov').addClass('d-none');
                        $('#dept_mov').val(Result[8]);
                        //$('#bchname_mov').val(Result[9]);
                    }
                    $('#txt_m_model').val(Result[10]);
                    $('#txt_m_prdtNme_assttag').val(Result[11]);
                    $('#txt_m_host_nme').val(Result[12]);
                    $('#txt_m_warret_stde').val(Result[13]);
                    $('#txt_mn_asstLoc_stk').val(Result[14]);
                } else {
                    $('#txt_search_mov').val('');
                    $('#asst_dtl').addClass('d-none');
                    ModelPopWarning('Asset details not found fill other details and add attachement document with asset details..');
                }




            },
            error: function (Result) {

                alert(Result);
            }


        });


    }

    else {
        ModelPopWarning("Choose Either Asset Code Or Serial Number");
    }

}


var dec_asst_avi;
//----------------------------------------DECOMMISSION SEARCH BY ASSET CODE------------------------------


function Getasset_dcmn() {
    debugger;

    var input = $("#txt_search_dcmn").val();
    if ($('#chk_tickno_dcmn').prop('checked') == true) {
        var QueryString = "GETassetdatas";

        $.ajax({

            type: "POST",
            contentType: "application/json; charset=utf-8",
            url: "Binowner.aspx/getasstdtls",
            data: "{QueryString:'" + QueryString + "',input : '" + input + "'}",
            dataType: "json",
            success: function (Result) {
                //alert(Result.d);
                alert(Result.d.length);
                if (Result.d.length > 0) {
                    $('#div_deco').removeClass('d-none');
                    dec_asst_avi = 1;
                    Result = Result.d.split("¥");
                    $('#txt_assetcode_dcmn').val(Result[0]);
                    $('#txt_sernum_dcmn').val(Result[1]);
                    $('#txt_prdt_nme_dcmn').val(Result[2]);
                    $('#txt_mnfctr_dcmn').val(Result[3]);
                    //$('#txt_purchdt_ins').val(Result[4]);
                    $('#txt_partnu_dcmn').val(Result[5]);
                    $('#txt_wrnt_end_dcmn').val(Result[6]);
                    //alert(Result[7]);


                    frm_em_br_dep_type = Result[7];

                    if (frm_em_br_dep_type == 1) {

                        frm_bch = Result[8];
                    }
                    else if (frm_em_br_dep_type == 2) {

                        frm_emp = Result[8];
                    }
                    else if (frm_em_br_dep_type == 3) {

                        frm_dept = Result[8];
                    }




                    if (Result[7] == 1) {
                        $('#divbch_dcmn').removeClass('d-none');
                        $('#divemp_dcmn').addClass('d-none');
                        $('#divdept_dcmn').addClass('d-none');
                        $('#bchid_dcmn').val(Result[8]);
                        $('#bchname_dcmn').val(Result[9]);
                    }
                    else if (Result[7] == 2) {

                        $("#divemp_dcmn").removeClass('d-none');
                        $('#divbch_dcmn').addClass('d-none');
                        $('#divdept_dcmn').addClass('d-none');
                        $('#empid_dcmn').val(Result[8]);
                        $('#empname_dcmn').val(Result[9]);
                        //$('#empbranch_mov').val(Result[9]);
                    }
                    else if (Result[7] == 3) {
                        $('#divdept_dcmn').removeClass('d-none');
                        $('#divemp_dcmn').addClass('d-none');
                        $('#divbch_dcmn').addClass('d-none');
                        $('#dept_dcmn').val(Result[8]);
                        //$('#bchname_mov').val(Result[9]);
                    }
                    $('#txt_wrnt_end_dcmn').val(Result[7]);
                    $('#txt_wrnt_end_dcmn').val(Result[8]);
                    $('#txt_d_model').val(Result[10]);
                    $('#txt_d_prdtNme_assttag').val(Result[11]);
                    $('#txt_d_host_nme').val(Result[12]);
                    $('#txt_d_warret_stde').val(Result[13]);
                    $('#txt_DD_asstLoc_stk').val(Result[14]);

                } else {
                    $('#div_deco').addClass('d-none');

                    dec_asst_avi = 0;
                    ModelPopWarning('Asset details not found fill other details and add imac document with full asset details then submit.. ');
                }






            },
            error: function (Result) {

                alert(Result);
            }


        });
    }
    else if ($('#chk_rpt_dcmn').prop('checked') == true) {


        var QueryString = "GETsernumdatas";


        $.ajax({

            type: "POST",
            contentType: "application/json; charset=utf-8",
            url: "Binowner.aspx/getsernumdtls",
            data: "{QueryString:'" + QueryString + "',input : '" + input + "'}",
            dataType: "json",
            success: function (Result) {
                alert(Result.d.length);
                if (Result.d.length > 0) {
                    $('#div_deco').removeClass('d-none');
                    dec_asst_avi = 1;
                    Result = Result.d.split("¥");
                    $('#txt_assetcode_dcmn').val(Result[0]);
                    $('#txt_sernum_dcmn').val(Result[1]);
                    $('#txt_prdt_nme_dcmn').val(Result[2]);
                    $('#txt_mnfctr_dcmn').val(Result[3]);
                    //$('#txt_purchdt_ins').val(Result[4]);
                    $('#txt_partnu_dcmn').val(Result[5]);
                    $('#txt_wrnt_end_dcmn').val(Result[6]);

                    frm_em_br_dep_type = Result[7];

                    if (frm_em_br_dep_type == 1) {

                        frm_bch = Result[8];
                    }
                    else if (frm_em_br_dep_type == 2) {

                        frm_emp = Result[8];
                    }
                    else if (frm_em_br_dep_type == 3) {

                        frm_dept = Result[8];
                    }


                    if (Result[7] == 1) {
                        $('#divbnch_dcmn').removeClass('d-none');
                        $('#divemp_dcmn').addClass('d-none');
                        $('#divdept_dcmn').addClass('d-none');
                        $('#bchid_dcmn').val(Result[8]);
                        $('#bchname_dcmn').val(Result[9]);
                    }
                    else if (Result[7] == 2) {
                        //alert('entered to employee');

                        $("#divemp_dcmn").removeClass('d-none');
                        $('#divbnch_dcmn').addClass('d-none');
                        $('#divdept_dcmn').addClass('d-none');
                        $('#empid_dcmn').val(Result[8]);
                        $('#empname_dcmn').val(Result[9]);
                        //$('#empbranch_mov').val(Result[9]);
                    }
                    else if (Result[7] == 3) {
                        //alert('ffff');
                        $('#divdept_dcmn').removeClass('d-none');
                        $('#divemp_dcmn').addClass('d-none');
                        $('#divbnch_dcmn').addClass('d-none');
                        $('#dept_dcmn').val(Result[8]);
                        //$('#bchname_mov').val(Result[9]);
                    }

                    $('#txt_d_model').val(Result[10]);
                    $('#txt_d_prdtNme_assttag').val(Result[11]);
                    $('#txt_d_host_nme').val(Result[12]);
                    $('#txt_d_warret_stde').val(Result[13]);
                    $('#txt_DD_asstLoc_stk').val(Result[14]);

                } else {
                    $('#div_deco').addClass('d-none');

                    dec_asst_avi = 0;
                    ModelPopWarning('Asset details not found fill other details and add imac document with full asset details then submit.. ');

                }

            },
            error: function (Result) {

                alert(Result);
            }


        });


    }

    else {
        ModelPopWarning("Choose Either Asset Code Or Serial Number");
    }

}



var dis_asst_avi;
//----------------------------------------DISPOSE SEARCH BY ASSET CODE------------------------------


function Getasset_dsps() {
    debugger;

    var input = $("#txt_search_dsps").val();
    if ($('#chk_tickno_dsps').prop('checked') == true) {
        var QueryString = "GETassetdatas";

        $.ajax({

            type: "POST",
            contentType: "application/json; charset=utf-8",
            url: "Binowner.aspx/getasstdtls",
            data: "{QueryString:'" + QueryString + "',input : '" + input + "'}",
            dataType: "json",
            success: function (Result) {
                //alert(Result.d);
                if (Result.d.length > 0) {
                    $('#dis_div').removeClass('d-none');
                    dis_asst_avi = 1;
                    Result = Result.d.split("¥");
                    $('#txt_assetcode_dsps').val(Result[0]);
                    $('#txt_sernum_dsps').val(Result[1]);
                    $('#txt_prdt_nme_dsps').val(Result[2]);
                    $('#txt_mnfctr_dsps').val(Result[3]);
                    //$('#txt_purchdt_ins').val(Result[4]);
                    $('#txt_partnu_dsps').val(Result[5]);
                    $('#txt_purchdt_dsps').val(Result[6]);

                    frm_em_br_dep_type = Result[7];

                    if (frm_em_br_dep_type == 1) {

                        frm_bch = Result[8];
                    }
                    else if (frm_em_br_dep_type == 2) {

                        frm_emp = Result[8];
                    }
                    else if (frm_em_br_dep_type == 3) {

                        frm_dept = Result[8];
                    }


                    if (Result[7] == 1) {
                        //alert('entered into branch-by asstCode');

                        $('#divbch_dsps').removeClass('d-none');
                        $('#divemp_dsps').addClass('d-none');
                        $('#divdept_dsps').addClass('d-none');
                        $('#bchid_dsps').val(Result[8]);
                        $('#bchname_dsps').val(Result[9]);
                    }
                    else if (Result[7] == 2) {
                        //alert('entered into employee-by asstCode');

                        $("#divemp_dsps").removeClass('d-none');
                        $('#divbch_dsps').addClass('d-none');
                        $('#divdept_dsps').addClass('d-none');
                        $('#empid_dsps').val(Result[8]);
                        $('#empname_dsps').val(Result[9]);
                        //$('#empbranch_mov').val(Result[9]);
                    }
                    else if (Result[7] == 3) {
                        //alert('entered into department-by asstCode');

                        $('#divdept_dsps').removeClass('d-none');
                        $('#divemp_dsps').addClass('d-none');
                        $('#divbch_dsps').addClass('d-none');
                        $('#dept_dsps').val(Result[8]);
                        //$('#bchname_mov').val(Result[9]);
                    }
                    //$('#txt_wrnt_end_dcmn').val(Result[7]);
                    //$('#txt_wrnt_end_dcmn').val(Result[8]);
                    $('#txt_dis_model').val(Result[10]);
                    $('#txt_dis_prdtNme_assttag').val(Result[11]);
                    $('#txt_dis_host_nme').val(Result[12]);
                    $('#txt_dis_warret_stde').val(Result[13]);
                    $('#txt_dc_asstLoc_stk').val(Result[14]);

                }
                else {
                    $('#dis_div').addClass('d-none');
                    dis_asst_avi = 0;
                    ModelPopWarning('Asset details not found fill other details and add imac document with full asset details then submit.. ');
                }


            },
            error: function (Result) {

                alert(Result);
            }


        });
    }
    else if ($('#chk_rpt_dsps').prop('checked') == true) {


        var QueryString = "GETsernumdatas";


        $.ajax({

            type: "POST",
            contentType: "application/json; charset=utf-8",
            url: "Binowner.aspx/getsernumdtls",
            data: "{QueryString:'" + QueryString + "',input : '" + input + "'}",
            dataType: "json",
            success: function (Result) {
                //alert(Result.d);
                if (Result.d.length > 0) {
                    $('#dis_div').removeClass('d-none');
                    dis_asst_avi = 1;

                    Result = Result.d.split("¥");
                    $('#txt_assetcode_dsps').val(Result[0]);
                    $('#txt_sernum_dsps').val(Result[1]);
                    $('#txt_prdt_nme_dsps').val(Result[2]);
                    $('#txt_mnfctr_dsps').val(Result[3]);
                    //$('#txt_purchdt_ins').val(Result[4]);
                    $('#txt_partnu_dsps').val(Result[5]);
                    $('#txt_purchdt_dsps').val(Result[6]);

                    frm_em_br_dep_type = Result[7];

                    if (frm_em_br_dep_type == 1) {

                        frm_bch = Result[8];
                    }
                    else if (frm_em_br_dep_type == 2) {

                        frm_emp = Result[8];
                    }
                    else if (frm_em_br_dep_type == 3) {

                        frm_dept = Result[8];
                    }


                    if (Result[7] == 1) {
                        //alert('entered into branch-by serNo');

                        $('#divbch_dsps').removeClass('d-none');
                        $('#divemp_dsps').addClass('d-none');
                        $('#divdept_dsps').addClass('d-none');
                        $('#bchid_dsps').val(Result[8]);
                        $('#bchname_dsps').val(Result[9]);
                    }
                    else if (Result[7] == 2) {
                        //alert('entered to employee-by serNo');

                        $("#divemp_dsps").removeClass('d-none');
                        $('#divbch_dsps').addClass('d-none');
                        $('#divdept_dsps').addClass('d-none');
                        $('#empid_dsps').val(Result[8]);
                        $('#empname_dsps').val(Result[9]);
                        //$('#empbranch_mov').val(Result[9]);
                    }
                    else if (Result[7] == 3) {
                        /*alert('entered to dept-by serNo');*/
                        $('#divdept_dsps').removeClass('d-none');
                        $('#divemp_dsps').addClass('d-none');
                        $('#divbch_dsps').addClass('d-none');
                        $('#dept_dsps').val(Result[8]);
                        //$('#bchname_mov').val(Result[9]);
                    }


                    $('#txt_dis_model').val(Result[10]);
                    $('#txt_dis_prdtNme_assttag').val(Result[11]);
                    $('#txt_dis_host_nme').val(Result[12]);
                    $('#txt_dis_warret_stde').val(Result[13]);
                    $('#txt_dc_asstLoc_stk').val(Result[14]);
                } else {


                    $('#dis_div').addClass('d-none');
                    dis_asst_avi = 0;
                    ModelPopWarning('Asset details not found fill other details and add imac document with full asset details then submit.. ');
                }





            },
            error: function (Result) {

                alert(Result);
            }


        });


    }

    else {
        ModelPopWarning("Choose Either Asset Code Or Serial Number");
    }

}




function get_zone() {
    var QueryStr = 'get_ritc_zone';
    var inputstring = $("[id*=hdUserId]").val();

    $.ajax({

        type: "POST",
        contentType: "application/json; charset=utf-8",
        url: "Binowner.aspx/get_fzm",
        data: "{QueryString:'" + QueryStr + "',input:'" + inputstring + "'}",
        dataType: "json",
        success: function (Result) {
            if (Result.d.length > 0) {
                $('#wo_bin').val(Result.d);
            }


        },
        error: function (Result) {

            alert(Result.d);
        }


    });


}


function get_bulk_branch() {
    var QueryStr = 'get_bulkins_bra';
    var inputstring = $("#bchid_bi").val();

    $.ajax({

        type: "POST",
        contentType: "application/json; charset=utf-8",
        url: "Binowner.aspx/get_branch",
        data: "{QueryString:'" + QueryStr + "',input:'" + inputstring + "'}",
        dataType: "json",
        success: function (Result) {
            if (Result.d.length > 0) {
                Result = Result.d.split('^');
                $('#bchname_bi').val(Result[0]);
                $('#txt_asst_bi_loc').val(Result[1]);
            } else {
                $('#bchname_bi').val("");
                ModelPopWarning('Invalid Branchid..');
            }


        },
        error: function (Result) {

            alert(Result.d);
        }


    });


}



function get_bulk_mov_branch() {
    var QueryStr = 'get_bulkins_bra';
    var inputstring = $("#bchid_br_mov").val();

    $.ajax({

        type: "POST",
        contentType: "application/json; charset=utf-8",
        url: "Binowner.aspx/get_branch",
        data: "{QueryString:'" + QueryStr + "',input:'" + inputstring + "'}",
        dataType: "json",
        success: function (Result) {
            if (Result.d.length > 0) {
                Result = Result.d.split('^');
                $('#bchname__br_mov').val(Result[0]);
                $('#txt_asst_mov_loc').val(Result[1]);
            } else {
                $('#bchid_br_mov').val("");
                ModelPopWarning('Invalid Branchid..');
            }


        },
        error: function (Result) {

            alert(Result.d);
        }


    });


}


//--------------------------------------------service request-----------08/11/2021--------------------



function GetEmpdetails() {

    var e_cde = '';
    e_cde = document.getElementById('txt_Empcodesr').value;
    if ($("#radGYessr").prop("checked") == false && $("#radGNosr").prop("checked") == false) {
        alert('Please Select Affected By Person Or Branch ');

    }
    else if (e_cde == null || e_cde == '') {

        alert('please fill EmpCode/BranchID textbox');
    } else {


        if ($("#radGYessr").prop("checked") == true) {
            person = 1;
            $('#br_nme').hide();
            $('#emp_nme_div').show();
            $('#br_dt_div').show();

        }
        else if ($("#radGNosr").prop("checked") == true) {
            person = 0;
            $('#br_dt_div').hide()
            $('#emp_nme_div').hide()
            $('#br_nme').show();


        }

        if (person == 1) {
            $('#txt_Email').empty;
            var QueryString = "GetEmployeeDetails";
            var input = $("#txt_Empcodesr").val();

            $.ajax({

                type: "POST",
                contentType: "application/json; charset=utf-8",
                url: "Binowner.aspx/getFillempdetails",
                data: "{QueryString:'" + QueryString + "',input : '" + input + "'}",
                dataType: "json",
                success: function (Result) {
                    if (Result.d.length > 0) {
                        Result = Result.d.split("^");
                        $('#txt_empnamesr').val(Result[0]);
                        $('#txt_Branchsr').val(Result[1]);
                        $('#txt_locationsr').val(Result[1]);
                        $('#txt_department').val(Result[3]);

                        $('#txt_Emailsr').val($("#txt_Empcodesr").val() + '@manappuram.com');


                        $('.txt_ph').val(Result[2]);
                    } else {

                        alert('No Entries Found');
                        $('#txt_Email').val('');
                    }


                },
                error: function (Result) {

                    alert(Result);
                }


            });
        }
        else if (person == 0) {
            var QueryString = "Getbranchdtls";
            var input = $("#txt_Empcodesr").val();



            $.ajax({

                type: "POST",
                contentType: "application/json; charset=utf-8",
                url: "Binowner.aspx/getbranchdt",
                data: "{QueryString:'" + QueryString + "',input : '" + input + "'}",
                dataType: "json",
                success: function (Result) {
                    if (Result.d.length > 0) {

                        Result = Result.d.split("^");
                        $('#txt_BrNamesr').val(Result[0]);
                        //$('#txt_Branch').val(Result[1]);
                        $('#txt_locationsr').val(Result[0]);

                        $('#txt_Phonenumbersr').val(Result[1]);
                        $('#txt_phonesr').val(Result[2]);
                        $('#txt_Emailsr').val(Result[3]);
                    }
                    else {

                        alert('No Entries Found');
                        $('#txt_Email').val('');
                    }


                },
                error: function (Result) {

                    alert(Result);
                }


            });
        }
    }
}


/*-------dropdown-urgency------*/
function GetUrgencysr() {

    var QueryString = "GetUrgency";
    $.ajax({
        type: "POST",
        contentType: "application/json; charset=utf-8",
        url: "ServiceRequest.aspx/getUrgencyprio",
        data: "{QueryString:'" + QueryString + "'}",
        dataType: "json",
        success: function (Result) {
            $('#ddlUrgencysr').empty();
            $('#ddlUrgencysr').append($("<option></option>").val("-1").html("Select Urgency/Priority "));
            $.each(Result.d, function (data, value) {
                $('#ddlUrgencysr').append($("<option></option>").val(value.PrioId).html(value.PrioName));
            })
        },
        error: function (Result) {
            alert('GetUrgency()' + Result.d);
        }

    });
    return;
}




/*-------end------*/







function GetSeveritysr() {

    var QueryString = "GetSeverity";
    $.ajax({
        type: "POST",
        contentType: "application/json; charset=utf-8",
        url: "ServiceRequest.aspx/GetSeverity",
        data: "{QueryString:'" + QueryString + "'}",
        dataType: "json",
        success: function (Result) {
            $('#ddlSeverity').empty();
            $('#ddlSeverity').append($("<option></option>").val("-1").html("Select Severity"));
            $.each(Result.d, function (data, value) {
                $('#ddlSeverity').append($("<option></option>").val(value.SevId).html(value.SevName));
            })
        },
        error: function (Result) {
            alert('GetSeverity()' + Result.d);
        }

    });
    return;
}

/*---------start-Dropdown  source-----*/

function GetSourceDtlsxx() {

    var QueryString = "GetSource";
    $.ajax({

        type: "POST",
        contentType: "application/json; charset=utf-8",
        url: "ServiceRequest.aspx/getSourceData",
        data: "{QueryString:'" + QueryString + "'}",
        dataType: "json",
        success: function (Result) {
            $('#ddlsource').empty();
            $('#ddlsource').append($("<option></option>").val("-1").html("Select Source "));
            $.each(Result.d, function (data, value) {
                $('#ddlsource').append($("<option></option>").val(value.SId).html(value.SName));

            })
        },
        error: function (Result) {

            alert('GetSourceDtls()' + Result.d);
        }

    });

}




//------------hide and show release request field based on request typ---------
function reqtypsr() {
    if ($('#ddlReqTypesr').val() == 27) {
        $('#div_Release').show();
        $('#div_attch').hide();
    } else {
        $('#div_Release').hide();
        $('#div_attch').show();
    }
    if ($('#ddlReqTypesr').val() == 28) {
        $('#imac_fields').show();
        $('#div_attch').hide();
    } else {
        $('#imac_fields').hide();
        $('#div_attch').show();

    }

    if ($('#ddlReqTypesr').val() == 401) {
        $('#ddlimac').removeClass('d-none');
        $('#ddlimac').show();
    }
    else {
        $('#ddlimacType').val(0);
        $('#ddlimac').addClass('d-none');
        $('#ddlimac').hide();

    }


}


/* Include Many js files */



function showTypes() {
    if ($("#radGYes").prop("checked")) {
        $("#SelctType").fadeIn();
        $("#department").show();

        //getGuarenteeType();
    }
    else if ($("#radGNo").prop("checked")) {
        $("#SelctType").fadeOut();
        $("#department").hide();



    }
}


function showTypes1() {
    if ($("#radGYessr").prop("checked")) {

        $("#department").show();

        //getGuarenteeType();
    }
    else if ($("#radGNosr").prop("checked")) {

        $("#department").hide();



    }
}


function showTypes2() {
    if ($("#radGYesin").prop("checked")) {

        $("#dephidein").show();

        //getGuarenteeType();
    }
    else if ($("#radGNoin").prop("checked")) {

        $("#dephidein").hide();



    }
}



//--------user assets-------
function GetUserAssetxx() {
    var e_cde = '';
    e_cde = document.getElementById('txt_Empcode').value;
    var QueryString = e_cde;
    $.ajax({
        type: "POST",
        contentType: "application/json; charset=utf-8",
        url: "ServiceRequest.aspx/GetusrAssets",
        data: "{QueryString:'" + QueryString + "'}",
        dataType: "json",
        success: function (Result) {
            $('#user_asset').empty();
            $('#user_asset').append($("<option></option>").val("-1").html("Select User Asset "));
            $.each(Result.d, function (data, value) {
                $('#user_asset').append($("<option></option>").val(value.Id).html(value.Name));
            })
        },
        error: function (Result) {
            alert('GetUserAsset()' + Result.d);
        }

    });

}



/*---------start-Dropdown  status-----*/

function GetStatussr() {

    var QueryString = "GetStatus";
    $.ajax({
        type: "POST",
        contentType: "application/json; charset=utf-8",
        url: "ServiceRequest.aspx/Getstatusup",
        data: "{QueryString:'" + QueryString + "'}",
        dataType: "json",
        success: function (Result) {
            $('#ddlStatus').empty();
            $('#ddlStatus').append($("<option></option>").val("-1").html("Select Status "));
            $.each(Result.d, function (data, value) {
                $('#ddlStatus').append($("<option></option>").val(value.Id).html(value.Name));
            })
        },
        error: function (Result) {
            alert('GetStatus()' + Result.d);
        }

    });
    return;
}

/*-------end------*/

/*---------start-Dropdown  Requesttype-----*/

function GetRequestTypesr() {

    var QueryStr = "ServiceCatlogDtl";
    $.ajax({
        type: "POST",
        contentType: "application/json; charset=utf-8",
        url: "servicerequest.aspx/getRequesttype",
        data: "{QueryString:'" + QueryStr + "'}",
        dataType: "json",
        success: function (Result) {
            $('#ddlReqTypesr').empty();
            $('#ddlReqTypesr').append($("<option></option>").val("-1").html("Select Request Type "));
            $.each(Result.d, function (data, value) {
                $('#ddlReqTypesr').append($("<option></option>").val(value.ReqId).html(value.ReqName));
            })
        },
        error: function (Result) {
            alert('GetRequestType()' + Result.d);
        }

    });
    return;
}

/*---------start-Dropdown  Requesttype submenu-----*/

function GetRequestTypesub() {
    var reqid = document.getElementById("ddlReqTypesr").value;

    var QueryStr = "ServiceCatlogDtlsub";

    $.ajax({
        type: "POST",
        contentType: "application/json; charset=utf-8",
        url: "servicerequest.aspx/getRequesttypesub",
        data: "{QueryString:'" + QueryStr + "' , subQueryString:'" + reqid + "'}",
        dataType: "json",
        success: function (Result) {
            $('#ddlsubReqType').empty();
            $('#ddlsubReqType').append($("<option></option>").val("-1").html("Select Request Type "));
            $.each(Result.d, function (data, value) {
                $('#ddlsubReqType').append($("<option></option>").val(value.ReqId).html(value.ReqName));
            })
        },
        error: function (Result) {
            alert('GetRequestTypesub()' + Result.d);
        }

    });
    return;
}



function imc_typsr() {

    var intPrnc;

    intPrnc = "getimactype";

    $.ajax({
        type: "post",
        contentType: "application/json; charset=utf-8",
        url: "Binowner.aspx/getimac",
        data: "{QueryString:'" + intPrnc + "'}",
        dataType: "json",
        success: function (Result) {
            $('#ddlimacTypesr').empty();
            $('#ddlimacTypesr').append($("<option></option>").val("0").html("SELECT OPTION"));
            $.each(Result.d, function (data, value) {
                $('#ddlimacTypesr').append($("<option></option>").val(value.Id).html(value.Name));

            })
        },
        error: function (Result) {
            alert(Result);
        }
    });
}





//-------------------------------------------


function AddSRorIN() {
    var mil;
    var sedmail;

    debugger;

    $('#btnConfirmsr').prop('disabled', true);
    $('#btnExitsr').prop('disabled', true);
    var imactyp;
    var oldasstser;
    var movf;
    var movto;
    var movtoemp;
    //if ($('#txt_oldAsstSerial').val() == '') {
    //    oldasstser = 0;

    //} else {
    //    oldasstser = $('#txt_oldAsstSerial').val();

    //}

    //if ($('#txt_MovFrm').val() == '') {
    //    movf = 0;

    //} else {
    //    movf = $('#txt_MovFrm').val();

    //}

    //if ($('#txt_MovTo').val() == '') {
    //    movto = 0;

    //} else {
    //    movto = $('#txt_MovTo').val();

    //}
    //if ($('#txt_MovToEmp').val()=='') {
    //  movtoemp = 0;

    //} else {
    //    movtoemp = $('#txt_MovToEmp').val();

    //}



    if ($('#chk_systeminstall').prop('checked') == true) {

        imactyp = 1;


    } else if ($('#chk_systemreplacement').prop('checked') == true) {

        imactyp = 2;
    } else if ($('#chk_movement').prop('checked') == true) {
        imactyp = 3;

    } else if ($('#chk_SystemRemove').prop('checked') == true) {
        imactyp = 4;

    }
    //alert($('#ddlReqType').val());
    var InputData;
    //alert($('#ddlReqType option:selected').val());
    var person;
    if ($("#radGYessr").prop("checked") == false && $("#radGNosr").prop("checked") == false) {
        alert('Please Select Person or Branch');
        $('#btnConfirmsr').prop('disabled', false);
        $('#btnExitr').prop('disabled', false);

    }
    else if ($("#txt_Empcodesr").val() == '') {
        alert('Please Search with Employee code or Branch Code');
        $('#btnConfirmsr').prop('disabled', false);
        $('#btnExitsr').prop('disabled', false);
    }
    else if ($("#txt_Emailsr").val() == '' || $("#txt_phonesr").val() == '') {
        alert('Please Enter Email id and Alternate Phone Number');
        $('#btnConfirmsr').prop('disabled', false);
        $('#btnExitsr').prop('disabled', false);
    }

    else if ($("#ddlUrgencysr option:selected").val() == "-1") {
        ModelPopWarning("Please Select Urgency/Priority Type");
        $('#btnConfirmsr').prop('disabled', false);
        $('#btnExitsr').prop('disabled', false);
        return false;
    }
    else if ($("#txt_reqsummarysr").val() == "") {
        ModelPopWarning("Please enter Request Summary");
        $('#btnConfirmsr').prop('disabled', false);
        $('#btnExitsr').prop('disabled', false);
        return false;
    }
    else if ($("#txt_Descriptionsr").val() == "") {
        ModelPopWarning("Please enter Request Description");
        $('#btnConfirmsr').prop('disabled', false);
        $('#btnExitsr').prop('disabled', false);
        return false;
    }
    else if (($("#srpopup").val()).trim() == "") {
        ModelPopWarning("Please enter current bin");
        $('#btnConfirmsr').prop('disabled', false);
        $('#btnExitsr').prop('disabled', false);


    }
    //call logging mode validation in sr
    else if ($("#srcall option:selected").val() == "-1") {
        ModelPopWarning("Please select call logging mode");
        $('#btnConfirmsr').prop('disabled', false);
        $('#btnExitsr').prop('disabled', false);
        return false;
    }
    else if ($("#ddlReqTypesr option:selected").val() == "-1") {
        ModelPopWarning("Please select request type");
        $('#btnConfirmsr').prop('disabled', false);
        $('#btnExitsr').prop('disabled', false);
        return false;
    }
    else if ($("#ddlsubReqType option:selected").val() == "-1") {
        ModelPopWarning("Please select Subrequest type");
        $('#btnConfirmsr').prop('disabled', false);
        $('#btnExitsr').prop('disabled', false);
        return false;
    }

    else if ($("#ddlReqTypesr option:selected").val() == 401 && $('#ddlimacTypesr option:selected').val() == 0) {

        ModelPopWarning('Please select Imac Type..');
        $('#btnConfirmsr').prop('disabled', false);
        $('#btnExitsr').prop('disabled', false);
    }

    else {
        if ($("#radGYessr").prop("checked") == true) {
            person = 1;


        }
        else if ($("#radGNosr").prop("checked") == true) {
            person = 0;


        }

        if ($("#FileUploadsr").val() == "") {
            // alert("no atttach");
            //if ($('#ddlReqType').val() ==27) {
            //   // alert('entered into reqtyp');
            //    //                1                            2                   3                             4                                    5                                       6                                  7                                 8                                     9                                     10                11                          12                               13                               14                         
            //    InputData = $("[id*=hdUserId]").val() + "¥" + person + "¥" + $("#txt_Empcode").val() + "¥" + $("#txt_phone").val() + "¥" + $("#txt_Email").val() + "¥" + $("#ddlUrgency option:selected").val() + "¥" + $('#txt_reqsummary').val().replace(/[']/gi,'"') + "¥" + $("#txt_Description").val().replace(/[']/gi,'"') + "¥" + $('#ddlReqType option:selected').val() + "¥" + 1 + "¥" + $('#txt_crfid').val() + "¥" + $('#txt_Parentapp').val() + "¥" + $('#txt_Tester').val() + "¥" + $('#txt_CodeReview').val();
            //    //alert(InputData);
            //} else if ($('#ddlReqType').val() == 28) {

            //    InputData = $("[id*=hdUserId]").val() + "¥" + person + "¥" + $("#txt_Empcode").val() + "¥" + $("#txt_phone").val() + "¥" + $("#txt_Email").val() + "¥" + $("#ddlUrgency option:selected").val() + "¥" + $('#txt_reqsummary').val().replace(/[']/gi,'"') + "¥" + $("#txt_Description").val().replace(/[']/gi,'"') + "¥" + $('#ddlReqType option:selected').val() + "¥" + 1
            //        + "¥" + $('#user_asset option:selected').text() + "¥" + imactyp + "¥" + $('#txt_oldAsstSerial').val() + "¥" + $('#txt_MovFrm').val() + "¥" + $('#txt_MovTo').val() + "¥" + $('#txt_MovToEmp').val();


            // }
            // else {
            // alert('entered into else');

            //1                 2             3              4                               5                                   6                              7                       8         9           10          11                12                                     13        14         15           16                                 17                              18         19              20                           21         22         23                                      
            // var InputData = $("[id*=hdUserId]").val() + "¥" + person + "¥" + 0 + "¥" + $("#txt_Empcode").val() + "¥" + $("#txt_Phonenumber").val() + "¥" + $("#txt_phone").val() + "¥" + $("#txt_Email").val() + "¥" + 0 + "¥" + 0 + "¥" + 'null' + "¥" + 0 + "¥" + $("#ddlUrgency option:selected").val() + "¥" + 0 + "¥" + 0 + "¥" + 0 + "¥" + $('#txt_reqsummary').val() + "¥" + $("#txt_Description").val() + "¥" + 0 + "¥" + 1 + "¥" + $("[id *= hdUserId]").val() + "¥" + 1 + "¥" + 0 + "¥"+ $('#ddlReqType option:selected').val();
            InputData = $("[id*=hdUserId]").val() + "¥" + person + "¥" + $("#txt_Empcodesr").val() + "¥" + $("#txt_phonesr").val() + "¥" + $("#txt_Emailsr").val() + "¥" + $("#ddlUrgencysr option:selected").val() + "¥" + $('#txt_reqsummarysr').val().replace(/[']/gi, '"') + "¥" + $("#txt_Descriptionsr").val().replace(/[']/gi, '"') + "¥" + $('#ddlReqTypesr option:selected').val() + "¥" + 1 + "¥" + $('#ddlimacTypesr option:selected').val() + "¥" + $('#srpopup').val() + "¥" + $('#srcall').val() + "¥" + $('#ddlsubReqType option:selected').val() + "¥" + $("#txt_department").val();
            //                          1                  2               3                                4                             5                                6                                             7                                                    8                                                         9                                         10                             11                            12                                  13                            14
            //  alert(InputData);
            // }

            if (person = 1) {

                mil = $("#txt_Empcodesr").val() + "@manappuram.com";

            } else {

                mil = $("#txt_Emailsr").val();
            }


            $.ajax({
                type: "POST",
                contentType: "application/json; charset=utf-8",
                url: "Binowner.aspx/AddSrNoAttach",
                data: "{input:'" + InputData + "',User:'" + mil + "'}",
                dataType: "json",
                success: function (Result) {

                    debugger;
                    alert('Ticket No = ' + Result.d);
                    clear_dtl();
                    $('#btnConfirmsr').prop('disabled', false);
                    $('#btnExitsr').prop('disabled', false);
                    //window.open('Binowner.aspx', '_self');
                    //sedmail =
                    //    'Dear Team,</br></br > A ticket ' + Result.d + ' has been rised in your employee code.You can check ticket details through applciation portal-- >ITSM TOOL-- >Ticket Management-- >Ticketview';
                    //Approve_check(Result.d);
                    // sendmail(sedmail);

                    // Approve_check(Result.d);
                    //SaveuploadData(Result);
                    //window.open('ServiceRequest.aspx', '_self');

                },

                error: function (Result) {
                    alert(Result.d);
                    $('#btnConfirmsr').prop('disabled', false);
                    $('#btnExitsr').prop('disabled', false);
                }
            });


        }

        else {


            // alert('entered into attach');
            var fileList = document.getElementById("FileUploadsr").files;
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

                    var d1 = fileList[0].name.split(".");
                    //alert('filename' + fileName);


                    //alert('before input data');
                    //1                    2             3              4                               5                                   6                              7                       8         9           10          11                12                                     13        14         15           16                                 17                              18         19              20                           21         22         23                                      
                    // var InputData = $("[id*=hdUserId]").val() + "¥" + person + "¥" + 0 + "¥" + $("#txt_Empcode").val() + "¥" + $("#txt_Phonenumber").val() + "¥" + $("#txt_phone").val() + "¥" + $("#txt_Email").val() + "¥" + 0 + "¥" + 0 + "¥" + 'null' + "¥" + 0 + "¥" + $("#ddlUrgency option:selected").val() + "¥" + 0 + "¥" + 0 + "¥" + 0 + "¥" + $('#txt_reqsummary').val() + "¥" + $("#txt_Description").val() + "¥" + 0 + "¥" + 1 + "¥" + $("[id *= hdUserId]").val() + "¥" + '' + "¥" + 0 + "¥"+ $('#ddlReqType option:selected').val();

                    //                         1                       2                     3                               4                             5                            6                                               7                                                        8                                                            9                                   10             11                     12                                        
                    var InputData = $("[id*=hdUserId]").val() + "¥" + person + "¥" + $("#txt_Empcodesr").val() + "¥" + $("#txt_phonesr").val() + "¥" + $("#txt_Emailsr").val() + "¥" + $("#ddlUrgencysr option:selected").val() + "¥" + $('#txt_reqsummarysr').val().replace(/[']/gi, '"') + "¥" + $("#txt_Descriptionsr").val().replace(/[']/gi, '"') + "¥" + $('#ddlReqTypesr option:selected').val() + "¥" + 1 + "¥" + fileName + "¥" + $('#ddlimacTypesr option:selected').val() + "¥" + $('#srpopup').val() + "¥" + $('#srcall').val() + "¥" + $('#ddlsubReqType option:selected').val() + "¥" + $("#txt_department").val();


                    if (person = 1) {

                        mil = $("#txt_Empcode").val() + "@manappuram.com";

                    } else {

                        mil = $("#txt_Email").val();
                    }
                    debugger;
                    $.ajax({

                        type: "POST",
                        contentType: "application/json; charset=utf-8",
                        url: "Binowner.aspx/confirmSrWithdocument",
                        data: "{val:'" + InputData + "',upload_file:'" + imageData + "'}",
                        dataType: "json",
                        success: function (Result) {
                            debugger;
                            Result = Result.d;
                            Result = Result.split("¥");
                            var k = Result[1].split("^");

                            if (Result[0] == "Successfully Uploaded") {
                                // alert('before get success id call');
                                alert('Ticket No: ' + k[0]);
                                clear_dtl();
                                $('#btnConfirmsr').prop('disabled', false);
                                $('#btnExitsr').prop('disabled', false);
                                //  window.open('ServiceRequest.aspx', '_self');

                                //  Approve_check(k[0]);

                                //Getsuccessid();
                            }
                            else {

                                alert('error');
                            }
                            //SaveuploadData(Result);
                            // window.open('ServiceRequest.aspx', '_self');

                        },

                        error: function (Result) {
                            alert(Result.d);
                            $('#btnConfirmsr').prop('disabled', false);
                            $('#btnExitsr').prop('disabled', false);
                        }
                    });

                }


            }

        }
    }



}


var i = 0;
function tic_show() {

    if (i == 0) {


        $('#div_tick_no').removeClass('d-none');
        $('#div_tick_no').fadeIn();
        i = 1;

    } else {

        //  $('#div_tick_no').addClass('d-none');
        $('#div_tick_no').fadeOut();
        i = 0;

    }
    //if (i == 0) {

    //    i = 1;
    //} else {

    //    i = 0;
    //}

}


function sr_copy() {

    $('#s_button').prop('disabled', true);

    var QueryString = "getSr_tick_details";
    var input = $("#txt_ticket_no").val();



    $.ajax({

        type: "POST",
        contentType: "application/json; charset=utf-8",
        url: "Binowner.aspx/getsr_tick_dtl",
        data: "{QueryString:'" + QueryString + "',input : '" + input + "'}",
        dataType: "json",
        success: function (Result) {
            $('#s_button').prop('disabled', false);
            if (Result.d.length > 0) {

                Result = Result.d.split("^");

                if (Result[0] == 1) {
                    person = 1;
                    $('#br_nme').hide();
                    $('#emp_nme_div').show();
                    $('#br_dt_div').show();

                }
                else if (Result[0] == 0) {
                    person = 0;
                    $('#br_dt_div').hide()
                    $('#emp_nme_div').hide()
                    $('#br_nme').show();


                }
                if (Result[0] == 1) {

                    $('#radGYessr').prop('checked', true);
                    $('#radGNosr').prop('checked', false);
                    $('#txt_Empcodesr').val(Result[1]);
                    $('#txt_empnamesr').val(Result[6]);
                    $('#txt_Branchsr').val(Result[7]);
                    $('#txt_Emailsr').val(Result[8]);
                    $('#txt_Phonenumbersr').val(Result[9]);
                    $('#txt_phonesr').val(Result[9]);
                    $('#txt_locationsr').val(Result[7]);
                } else if (Result[0] == 0) {
                    $('#radGYessr').prop('checked', false);
                    $('#radGNosr').prop('checked', true);
                    $('#txt_Empcodesr').val(Result[1]);
                    $('#txt_BrNamesr').val(Result[2]);
                    $('#txt_Phonenumbersr').val(Result[3]);
                    $('#txt_phonesr').val(Result[4]);
                    $('#txt_Emailsr').val(Result[5]);
                    $('#txt_locationsr').val(Result[2]);


                }

                if (Result[11] == 401) {


                    $('#ddlimac').show();
                    $('#ddlimac').removeClass('d-none');
                    $('#ddlimacTypesr').val(Result[11]);

                }
                else {
                    $('#ddlimac').hide();
                    $('#ddlimac').addClass('d-none');
                    $('#ddlimacTypesr').val(-1);

                }


                $('#ddlUrgencysr').val(Result[10]);
                $('#ddlReqTypesr').val(Result[11]);
                $('#ddlimacTypesr').val(Result[12]);
                $('#txt_reqsummarysr').val(Result[13]);
                $('#txt_Descriptionsr').val(Result[14]);
                ////$('#txt_Branch').val(Result[1]);
                //$('#txt_locationsr').val(Result[0]);

                //$('#txt_Phonenumbersr').val(Result[1]);
                //$('#txt_phonesr').val(Result[2]);
                //$('#txt_Emailsr').val(Result[3]);
                //$('#txt_Emailsr').val(Result[3]);
            }
            else {

                alert('No Entries Found');
                $('#txt_Email').val('');
            }


        },
        error: function (Result) {
            $('#s_button').prop('disabled', false);
            alert(Result);
        }


    });



}


//------------CLEAR FUNCTION-------


function clear_dtl() {

    $('#radGYessr').prop('checked', false);
    $('#radGNosr').prop('checked', false);
    $('#txt_Empcodesr').val("");
    $('#txt_empnamesr').val("");
    $('#txt_BrNamesr').val("");
    $('#txt_Branchsr').val("");
    $('#txt_Phonenumbersr').val("");
    $('#txt_phonesr').val("");
    $('#txt_Emailsr').val("");
    $('#txt_locationsr').val("");
    $('#ddlUrgencysr').val(-1);
    $('#ddlReqTypesr').val(-1);
    $('#ddlimac').addClass('d-none');
    $('#ddlimacTypesr').val(0);
    $('#txt_reqsummarysr').val("");
    $('#txt_Descriptionsr').val("");
    $('#FileUploadsr').val("");
    $('#srpopup').val("");
    $('#ddlsubReqType').val(-1);
    $('#srcall').val(-1);
    $('#txt_department').val("");

}

function reqtyp() {
    if ($('#ddlReqType').val() == 27) {
        $('#div_Release').show();
        $('#div_attch').hide();
    } else {
        $('#div_Release').hide();
        $('#div_attch').show();
    }
    if ($('#ddlReqType').val() == 28) {
        $('#imac_fields').show();
        $('#div_attch').hide();
    } else {
        $('#imac_fields').hide();
        $('#div_attch').show();

    }

    if ($('#ddlReqTypesr').val() == 401) {
        $('#ddlimac').removeClass('d-none');
    }
    else {
        $('#ddlimacTypesr').val(0);
        $('#ddlimac').addClass('d-none');

    }

    GetRequestTypesub();
}

//------------CLEAR FUNCTION-------






//--------------------------------------------service request-------------------------------


//------------------------------incident request-------------------------------------




/*-------dropdown-incategory------*/
function GetINCategoryIn() {

    var QueryString = "GetINCategory";
    $.ajax({
        type: "POST",
        contentType: "application/json; charset=utf-8",
        url: "ServiceRequest.aspx/getINCategory",
        data: "{QueryString:'" + QueryString + "'}",
        dataType: "json",
        success: function (Result) {
            $('#ddlClassificationin').empty();
            $('#ddlClassificationin').append($("<option></option>").val("-1").html("Select Classification/Incident Category "));
            $.each(Result.d, function (data, value) {
                $('#ddlClassificationin').append($("<option></option>").val(value.INCId).html(value.INCName));
            })
        },
        error: function (Result) {
            alert('GetINCategory()' + Result.d);
        }

    });
    return;
}








/*-------dropdown-inSUBcategory------*/
function GetINsubCategoryIn() {
    debugger;
    var InputString = $("#ddlClassificationin").val();
    var QueryString = "GetINsubCategory";
    $.ajax({
        type: "POST",
        contentType: "application/json; charset=utf-8",
        url: "ServiceRequest.aspx/getSubCategory",
        data: "{QueryString:'" + QueryString + "',input : '" + InputString + "'}",
        dataType: "json",
        success: function (Result) {
            $('#ddlsubCategoryin').empty();
            $('#ddlsubCategoryin').append($("<option></option>").val("-1").html("Select Sub Category "));
            $.each(Result.d, function (data, value) {
                $('#ddlsubCategoryin').append($("<option></option>").val(value.INSubId).html(value.INSubName));
            })
        },
        error: function (Result) {
            alert('GetINsubCategory()' + Result.d);
        }

    });
    return;
}



function GetINsubCatvalueset(k) {
    var InputString = $("#ddlClassificationin").val();
    var QueryString = "GetINsubCategory";
    $.ajax({
        type: "POST",
        contentType: "application/json; charset=utf-8",
        url: "ServiceRequest.aspx/getSubCategory",
        data: "{QueryString:'" + QueryString + "',input : '" + InputString + "'}",
        dataType: "json",
        success: function (Result) {
            $('#ddlsubCategoryin').empty();
            $('#ddlsubCategoryin').append($("<option></option>").val("-1").html("Select Sub Category "));
            $.each(Result.d, function (data, value) {
                $('#ddlsubCategoryin').append($("<option></option>").val(value.INSubId).html(value.INSubName));
            })

            $('#ddlsubCategoryin').val(k);
        },
        error: function (Result) {
            alert('GetINsubCategory()' + Result.d);
        }

    });

    return;
}



/*---------start-Dropdown  impact----*/

function GetImpactIn() {

    var QueryString = "GetImpact";
    $.ajax({
        type: "POST",
        contentType: "application/json; charset=utf-8",
        url: "ServiceRequest.aspx/getImpact",
        data: "{QueryString:'" + QueryString + "'}",
        dataType: "json",
        success: function (Result) {
            $('#ddlImpact').empty();
            $('#ddlImpact').append($("<option></option>").val("-1").html("Select Impact "));
            $.each(Result.d, function (data, value) {
                $('#ddlImpact').append($("<option></option>").val(value.ImpctId).html(value.ImpctName));
            })
        },
        error: function (Result) {
            alert('GetImpact()' + Result.d);
        }

    });

}

/*-------dropdown-urgency------*/
function GetUrgencyIn() {

    var QueryString = "GetUrgency";
    $.ajax({
        type: "POST",
        contentType: "application/json; charset=utf-8",
        url: "ServiceRequest.aspx/getUrgencyprio",
        data: "{QueryString:'" + QueryString + "'}",
        dataType: "json",
        success: function (Result) {
            $('#ddlUrgencyin').empty();
            $('#ddlUrgencyin').append($("<option></option>").val("-1").html("Select Urgency/Priority "));
            $.each(Result.d, function (data, value) {
                $('#ddlUrgencyin').append($("<option></option>").val(value.PrioId).html(value.PrioName));
            })
        },
        error: function (Result) {
            alert('GetUrgency()' + Result.d);
        }

    });
    return;
}



//------------get severity

function GetSeverityin() {

    var QueryString = "GetSeverity";
    $.ajax({
        type: "POST",
        contentType: "application/json; charset=utf-8",
        url: "Binowner.aspx/getSevty",
        data: "{QueryString:'" + QueryString + "'}",
        dataType: "json",
        success: function (Result) {
            $('#ddlSeverityin').empty();
            $('#ddlSeverityin').append($("<option></option>").val("-1").html("Select Severity"));
            $.each(Result.d, function (data, value) {
                $('#ddlSeverityin').append($("<option></option>").val(value.INSubId).html(value.INSubName));
            })
        },
        error: function (Result) {
            alert('GetSeverity()' + Result.d);
        }

    });
    return;
}

//-----------------

//--------------get impact


function GetImpactin() {

    var QueryStr = "GetImpact";
    $.ajax({
        type: "POST",
        contentType: "application/json; charset=utf-8",
        url: "Binowner.aspx/getImpa",
        data: "{QueryString:'" + QueryStr + "'}",
        dataType: "json",
        success: function (Result) {
            $('#ddlImpactin').empty();
            $('#ddlImpactin').append($("<option></option>").val("-1").html("Select Impact "));
            $.each(Result.d, function (data, value) {
                $('#ddlImpactin').append($("<option></option>").val(value.ImpctId).html(value.ImpctName));
            })
        },
        error: function (Result) {
            alert('GetImpact()' + Result.d);
        }

    });

    // GetSeverity();
}



//--------------get impact


var empcodevalue = '';
function GetEmpdetailsin() {


    var person = '';

    if ($("#radGYesin").prop("checked") == true) {
        person = 1;

    }
    else if ($("#radGNoin").prop("checked") == true) {
        person = 0;

    }

    if (person == 2) {
        ModelPopWarning("Please Select Affected by");

        return false;
    }

    else if ($("#txt_Empcodein").val() == "") {
        ModelPopWarning("Please enter Emp code/Branch ID");
        //alert("Please Enter bank Name");
        return false;
    }

    else {
        if (person == 1) {
            var QueryString = "GetEmployeeDetails";
            var input = $("#txt_Empcodein").val();

            $.ajax({

                type: "POST",
                contentType: "application/json; charset=utf-8",
                url: "Binowner.aspx/getFillempdetails",
                data: "{QueryString:'" + QueryString + "',input : '" + input + "'}",
                dataType: "json",
                success: function (Result) {

                    Result = Result.d.split("^");
                    $('#txt_empnamein').val(Result[0]);
                    $('#txt_Branchin').val(Result[1]);
                    $('#txt_Phonenumberin').val(Result[2]);
                    // $('#txt_locationin').val(Result[1]);

                    $('#txt_Emailin').val($("#txt_Empcodein").val() + '@manappuram.com');
                    $('#deptin').val(Result[3]);


                },
                error: function (Result) {

                    alert(Result);
                }


            });
        }
        else {
            var QueryString = "Getbranchdtls";
            var input = $("#txt_Empcodein").val();

            $.ajax({

                type: "POST",
                contentType: "application/json; charset=utf-8",
                url: "Binowner.aspx/getbranchdt",
                data: "{QueryString:'" + QueryString + "',input : '" + input + "'}",
                dataType: "json",
                success: function (Result) {

                    Result = Result.d.split("^");
                    $('#txt_empnamein').val(Result[0]);
                    $('#txt_Branchin').val(Result[0]);
                    $('#txt_Phonenumberin').val(Result[1]);
                    $('#txt_phonein').val(Result[2]);
                    $('#txt_Emailin').val(Result[3]);


                },
                error: function (Result) {

                    alert(Result);
                }


            });
        }
    }
}
/*-------end------*/


var w = 0;
function tic_show_in() {

    if (w == 0) {


        $('#div_INtick_no').removeClass('d-none');
        $('#div_INtick_no').fadeIn();
        w = 1;

    } else {

        //  $('#div_tick_no').addClass('d-none');
        $('#div_INtick_no').fadeOut();
        w = 0;

    }


}



function clear_dtl_in() {

    $('#radGYesin').prop('checked', false);
    $('#radGNoin').prop('checked', false);
    $('#txt_Empcodein').val("");
    $('#txt_empnamein').val("");
    $('#txt_BrNamein').val("");
    $('#txt_Branchin').val("");
    $('#txt_Phonenumberin').val("");
    $('#txt_phonein').val("");
    $('#txt_Emailin').val("");
    $('#txt_locationin').val("");
    $('#ddlUrgencyin').val(-1);
    $('#ddlClassificationin').val(-1);
    //$('#ddlsubCategoryin').hide();
    $('#ddlsubCategoryin').empty();
    $('#ddlReqTypeinsub').val(-1);

    $('#ddlImpactin').val(-1);
    $('#ddlSeverityin').val(-1);
    $('#txt_Subjectin').val("");
    $('#txt_ImpactDtin').val("");
    $('#txt_Descriptionin').val("");
    $('#FileUploadin').val("");
    $('#incident_popup').val("");
    $('#incidentcall').val(-1);


}





//function sr_copy_in() {

//    $('#s_INbutton').prop('disabled', true);

//    var QueryString = "getSr_tick_details";
//    var input = $("#txt_INticket_no").val();



//    $.ajax({

//        type: "POST",
//        contentType: "application/json; charset=utf-8",
//        url: "Binowner.aspx/getsr_tick_dtl",
//        data: "{QueryString:'" + QueryString + "',input : '" + input + "'}",
//        dataType: "json",
//        success: function (Result) {
//            if (Result.d.length > 0) {

//                $('#s_INbutton').prop('disabled', false);

//                Result = Result.d.split("^");

//                if (Result[0] == 1) {
//                    person = 1;
//                    $('#br_nme').hide();
//                    $('#emp_nme_div').show();
//                    $('#br_dt_div').show();

//                }
//                else if (Result[0] == 0) {
//                    person = 0;
//                    $('#br_dt_div').hide()
//                    $('#emp_nme_div').hide()
//                    $('#br_nme').show();


//                }
//                if (Result[0] == 1) {

//                    $('#radGYesin').prop('checked', true);
//                    $('#radGNoin').prop('checked', false);
//                    $('#txt_Empcodein').val(Result[1]);
//                    $('#txt_empnamein').val(Result[6]);
//                    $('#txt_Branchin').val(Result[7]);
//                    $('#txt_Emailin').val(Result[8]);
//                    $('#txt_Phonenumberin').val(Result[9]);
//                    $('#txt_phonein').val(Result[9]);
//                    $('#txt_locationsr').val(Result[7]);
//                } else if (Result[0] == 0) {
//                    $('#radGYessr').prop('checked', false);
//                    $('#radGNosr').prop('checked', true);
//                    $('#txt_Empcodesr').val(Result[1]);
//                    $('#txt_BrNamesr').val(Result[2]);
//                    $('#txt_Phonenumbersr').val(Result[3]);
//                    $('#txt_phonesr').val(Result[4]);
//                    $('#txt_Emailsr').val(Result[5]);
//                    $('#txt_locationsr').val(Result[3]);


//                }

//                if (Result[11] == 401) {


//                  //  $('#ddlimac').show();
//                    $('#ddlimac').removeClass('d-none');

//                    $('#ddlimacTypesr').val(Result[11]);

//                }
//                else {
//                    //$('#ddlimac').hide();
//                    $('#ddlimac').addClass('d-none');
//                    $('#ddlimacTypesr').val(-1);

//                }


//                $('#ddlUrgencyin').val(Result[10]);
//                $('#ddlClassificationin').val(Result[13]);
//                $('#ddlsubCategoryin').val(Result[14]);
//                $('#txt_Subjectin').val(Result[15]);
//                $('#txt_Descriptionin').val(Result[16]);
//                $('#ddlSeverityin').val(Result[9]);
//                $('#ddlImpactin').val(Result[17]);
//                ////$('#txt_Branch').val(Result[1]);
//                //$('#txt_locationsr').val(Result[0]);

//                //$('#txt_Phonenumbersr').val(Result[1]);
//                //$('#txt_phonesr').val(Result[2]);
//                //$('#txt_Emailsr').val(Result[3]);
//                //$('#txt_Emailsr').val(Result[3]);
//            }
//            else {

//                alert('No Entries Found');
//                $('#txt_Email').val('');
//            }


//        },
//        error: function (Result) {

//            alert(Result);
//        }


//    });



//}



//--------incident submit

function AddIN() {
    var sedmail;
    var mil;
    $('#btnConfirmIn').prop('disabled', true);
    $('#btnExitIn').prop('disabled', true);
    //alert('entered to function');
    //alert($("#txt_Description").val().length);
    //alert($("#txt_ImpactDt").val().length);
    debugger;
    var person, incident;
    //if ($("#radIN").prop("checked") == true) {
    //    incident = 1;

    //}
    //else if ($("#radSR").prop("checked") == true) {
    //    incident = 0;

    //}


    if ($("#radGYesin").prop("checked") == true) {
        person = 1;

    }

    else if ($("#radGNoin").prop("checked") == true) {
        person = 0;

    }
    if ($("#ddlSeverityin").val() == "-1") {
        ModelPopWarning("Please Select Severity");
        $('#btnConfirmIn').prop('disabled', false);
        $('#btnExitIn').prop('disabled', false);
        //alert("Please Select Financial Type");
        return false;
    }
    else if ($("#ddlUrgencyin").val() == "-1") {
        ModelPopWarning("Please select Urgency/Priority");
        $('#btnConfirmIn').prop('disabled', false);
        $('#btnExitIn').prop('disabled', false);
        //alert("Please Enter bank Name");
        return false;
    }
    else if ($("#ddlImpactin").val() == "-1") {
        ModelPopWarning("Please select Impact");
        $('#btnConfirmIn').prop('disabled', false);
        $('#btnExitIn').prop('disabled', false);
        //alert("Please Enter Branch Name");
        return false;
    } else if (($("#txt_ImpactDtin").val()).trim() == "") {
        ModelPopWarning("Please Enter Impact Details");
        $('#btnConfirmIn').prop('disabled', false);
        $('#btnExitIn').prop('disabled', false);
        //alert("Please Enter Branch Name");
        return false;
    } else if ($("#ddlClassification").val() == "-1") {
        ModelPopWarning("Please select Incident Category");
        $('#btnConfirmIn').prop('disabled', false);
        $('#btnExitIn').prop('disabled', false);
        //alert("Please Enter Branch Name");
        return false;
    }
    else if ($("#ddlsubCategoryin").val() == "-1") {
        ModelPopWarning("Please select SubCategory");
        $('#btnConfirmIn').prop('disabled', false);
        $('#btnExitIn').prop('disabled', false);
        //alert("Please Enter Branch Name");
        return false;
    }
    //----Current bin validation of incident----
    else if (($("#incident_popup").val()).trim() == "") {
        ModelPopWarning("Please enter current bin");
        $('#btnConfirmIn').prop('disabled', false);
        $('#btnExitIn').prop('disabled', false);

    }
    // call logging validation in incident
    else if ($("#incidentcall option:selected").val() == "-1") {
        ModelPopWarning("Please Select call logging mode");
        $('#btnConfirmIn').prop('disabled', false);
        $('#btnExitIn').prop('disabled', false);
        return false;
    }
    else if (($("#txt_Subjectin").val()).trim() == "") {
        ModelPopWarning("Please enter Subject");
        $('#btnConfirmIn').prop('disabled', false);
        $('#btnExitIn').prop('disabled', false);
        //alert("Please Enter Branch Name");

    }
    else if (($("#txt_Descriptionin").val()).trim() == "") {
        ModelPopWarning("Please enter Description");
        $('#btnConfirmIn').prop('disabled', false);
        $('#btnExitIn').prop('disabled', false);
        //alert("Please Enter Branch Name");

    }
    else if (($("#txt_Empcodein").val()).trim() == "") {
        ModelPopWarning("Please enter Employee code/Branch ID");
        $('#btnConfirmIn').prop('disabled', false);
        $('#btnExitIn').prop('disabled', false);
        //alert("Please Enter Branch Name");

    }
    else if ($("#txt_Branchin").val() == "") {
        ModelPopWarning("Please search For Emp/Branch Details");
        $('#btnConfirmIn').prop('disabled', false);
        $('#btnExitIn').prop('disabled', false);
        //alert("Please Enter Branch Name");

    }
    //else if ($("#txt_Descriptionin").val().length > 3500) {
    //    ModelPopWarning("Description Content Data Size Exceed the Limit Please Reduce The Content..!!");
    //    $('#btnConfirm').prop('disabled', false);
    //    $('#btnExit').prop('disabled', false);

    //}
    else if ($("#txt_ImpactDtin").val().length > 3500) {
        ModelPopWarning("Impact Detail Content Exceed the data Limit Please Reduce The Content..!!");
        $('#btnConfirmIn').prop('disabled', false);
        $('#btnExitIn').prop('disabled', false);
    }
    else {

        if ($("#FileUploadin").val() != "") {


            var fileList = document.getElementById("FileUploadin").files;
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

                    var d1 = fileList[0].name.split(".");
                    var InputData = $("[id*=hdUserId]").val() + "¥" + person + "¥" + $("[id*=hdBrid]").val() + "¥" + $("#txt_Empcodein").val() + "¥" + $("#txt_Phonenumberin").val() + "¥" + $("#txt_phonein").val() + "¥" + $("#txt_Emailin").val() + "¥" + -1 + "¥" + $("#ddlImpactin option:selected").val() + "¥" + $("#txt_ImpactDtin").val().replace(/[']/gi, '"') + "¥" + $("#ddlSeverityin option:selected").val() + "¥" + $("#ddlUrgencyin option:selected").val() + "¥" + 0 + "¥" + $("#ddlClassificationin option:selected").val() + "¥" + $("#ddlsubCategoryin option:selected").val() + "¥" + $("#txt_Subjectin").val().replace(/[']/gi, '"') + "¥" + $("#txt_Descriptionin").val().replace(/[']/gi, '"') + "¥" + $("#txt_ImapactedCIin").val() + "¥" + 1 + "¥" + $("[id *= hdUserId]").val() + "¥" + 1 + "¥" + 1 + "¥" + 1 + "¥" + fileName + "¥" + $("#incident_popup").val() + "¥" + $("#incidentcall option:selected").val() + "¥" + $("#deptin").val();

                    if (person = 1) {

                        mil = $("#txt_Empcodein").val() + "@manappuram.com";

                    } else {

                        mil = $("#txt_Emailin").val();
                    }

                    $.ajax({
                        type: "POST",
                        contentType: "application/json; charset=utf-8",
                        url: "Binowner.aspx/confirmdocumentincident",
                        data: "{val:'" + InputData + "',upload_file:'" + imageData + "',User:'" + mil + "'}",
                        dataType: "json",
                        success: function (Result) {


                            Result = Result.d;
                            Result = Result.split("¥");
                            //alert(Result);

                            if (Result[0] == "Successfully Uploaded") {
                                //Result[1] = Result[1].split('^');
                                alert('TICKET NO:' + Result[1]);
                                clear_dtl_in();
                                $('#btnConfirmIn').prop('disabled', false);
                                $('#btnExitIn').prop('disabled', false);
                                // sedmail =
                                //     'Dear Team,</br></br > A ticket ' + Result[1] + ' has been rised in your employee code.You can check ticket details through applciation portal-- > ITSM TOOL-- > Ticket Management-- > Ticketview';
                                //// sendmail(sedmail);
                                //apprvmailsend(Result[1]);

                                // window.open('Binowner.aspx', '_self');
                                //Getsuccessid();
                            }





                        },

                        error: function (Result) {
                            alert(Result.d + 'ERROR');
                        }
                    });





                }
            }
            //sendmail(sedmail);
        }
        else {
            var decc = $("#txt_Descriptionin").val();
            //decc = JSON.stringify(decc);
            decc = decc.replace(/[']/gi, '"');
            //alert(decc);
            //var impp = $("#txt_ImpactDt").val();
            //impp = JSON.stringify(impp);
            //impp = impp.replace(/[^a-z0-9\s]/gi, '');
            //alert(decc);
            //alert(impp);
            //alert($("#txt_Description").val().length);
            var QueryString = "";
            //sedmail =
            //    'Dear Team,</br></br > A ticket  has been rised in your employee code.You can check ticket details through applciation portal-- > ITSM TOOL-- > Ticket Management-- > Ticketview';

            //                 1                               2                  3                            4                                    5                               6                                7                           8                 9                                               10                                                               11                                                  12                             13                                       14                                        15                                                  16                                           17                                                           18                               19                          20               21        22                                                 
            var input = $("[id*=hdUserId]").val() + "¥" + person + "¥" + $("[id*=hdBrid]").val() + "¥" + $("#txt_Empcodein").val() + "¥" + $("#txt_Phonenumberin").val() + "¥" + $("#txt_phonein").val() + "¥" + $("#txt_Emailin").val() + "¥" + -1 + "¥" + $("#ddlImpactin option:selected").val() + "¥" + $("#txt_ImpactDtin").val().replace(/[']/gi, '"') + "¥" + $("#ddlSeverityin option:selected").val() + "¥" + $("#ddlUrgencyin option:selected").val() + "¥" + 0 + "¥" + $("#ddlClassificationin option:selected").val() + "¥" + $("#ddlsubCategoryin option:selected").val() + "¥" + $("#txt_Subjectin").val().replace(/[']/gi, '"') + "¥" + $("#txt_Descriptionin").val().replace(/[']/gi, '"') + "¥" + $("#txt_ImapactedCIin").val() + "¥" + 1 + "¥" + $("[id *= hdUserId]").val() + "¥" + 1 + "¥" + 1 + "¥" + 1 + "¥" + $("#incident_popup").val() + "¥" + $("#incidentcall option:selected").val() + "¥" + $("#deptin").val();
            //alert(input.replace(/[^a-z0-9\s]/gi, ''));
            // input=input.replaceAll("[^a-zA-Z0-9]", " ");  
            // alert(encodeURIComponent(input));
            //var myJSONString = JSON.stringify(input);
            //alert(myJSONString);
            //var myEscapedJSONString = myJSONString.replace(/\\n/g, "\\n")
            //    .replace(/\\'/g, "\\'")
            //    .replace(/\\"/g, '\\"')
            //    .replace(/\\&/g, "\\&")
            //    .replace(/\\r/g, "\\r")
            //    .replace(/\\t/g, "\\t")
            //    .replace(/\\b/g, "\\b")
            //    .replace(/\\f/g, "\\f");
            // alert(myEscapedJSONString);

            if (person = 1) {

                mil = $("#txt_Empcodein").val() + "@manappuram.com";

            } else {

                mil = $("#txt_Emailin").val();
            }

            $.ajax({
                type: "POST",
                contentType: "application/json; charset=utf-8",
                url: "Binowner.aspx/Addincident",
                data: "{QueryString:'" + QueryString + "',input : '" + input + "',User:'" + mil + "'}",
                dataType: "json",
                success: function (Result) {


                    Result = Result.d;
                    // Result = Result.split('^');
                    // alert(Result[1]);

                    alert('Ticket Number:' + Result);
                    clear_dtl_in();
                    $('#btnConfirmIn').prop('disabled', false);
                    $('#btnExitIn').prop('disabled', false);

                    // sendmail(sedmail);
                    // apprvmailsend(Result);
                    // window.open('Binowner.aspx', '_self');


                },

                error: function (Result) {
                    alert(Result.d + 'error');
                }
            });


        }


    }



}


//--------incident submit

//---get in ticket details


function in_copy() {



    var QueryString = "getIn_tick_details";
    var input = $("#txt_INticket_no").val();



    $.ajax({

        type: "POST",
        contentType: "application/json; charset=utf-8",
        url: "Binowner.aspx/getin_tick_dtl",
        data: "{QueryString:'" + QueryString + "',input : '" + input + "'}",
        dataType: "json",
        success: function (Result) {
            if (Result.d.length > 0) {

                Result = Result.d.split("^");

                if (Result[0] == 1) {
                    person = 1;
                    //  $('#emp').show();

                }
                else if (Result[0] == 0) {
                    person = 0;
                    //  $('#emp').hide()


                }
                if (Result[0] == 1) {

                    $('#radGYesin').prop('checked', true);
                    $('#radGNoin').prop('checked', false);
                    $('#txt_Empcodein').val(Result[1]);
                    $('#txt_empnamein').val(Result[2]);
                    $('#txt_Branchin').val(Result[3]);
                    $('#txt_Emailin').val(Result[1] + '@manappuram.com');
                    $('#txt_Phonenumberin').val(Result[4]);
                    //$('#txt_phonein').val(Result[9]);
                    $('#txt_locationin').val(Result[3]);
                } else if (Result[0] == 0) {
                    $('#radGYesin').prop('checked', false);
                    $('#radGNoin').prop('checked', true);
                    $('#txt_Empcodein').val(Result[1]);
                    $('#txt_empnamein').val(Result[5]);
                    $('#txt_Branchin').val(Result[5]);
                    $('#txt_Phonenumberin').val(Result[6]);
                    $('#txt_phonein').val(Result[7]);
                    $('#txt_Emailin').val(Result[8]);
                    $('#txt_locationin').val(Result[5]);


                }

                //alert(Result[14] + 'result of 14');
                $('#txt_ImpactDtin').val(Result[12]);
                $('#ddlUrgencyin').val(Result[10]);
                $('#ddlClassificationin').val(Result[13]);
                GetINsubCatvalueset(Result[14]);
                $('#ddlsubCategoryin').val(Result[14]);
                $('#txt_Subjectin').val(Result[15]);
                $('#txt_Descriptionin').val(Result[16]);
                $('#ddlSeverityin').val(Result[9]);
                $('#ddlImpactin').val(Result[11]);
                ////$('#txt_Branch').val(Result[1]);
                //$('#txt_locationsr').val(Result[0]);

                //$('#txt_Phonenumbersr').val(Result[1]);
                //$('#txt_phonesr').val(Result[2]);
                //$('#txt_Emailsr').val(Result[3]);
                //$('#txt_Emailsr').val(Result[3]);
            }
            else {

                alert('No Entries Found');
                $('#txt_Email').val('');
            }


        },
        error: function (Result) {

            alert(Result);
        }


    });



}




//---get in ticket details

//-----------------hide and show bin icon
var sea_rch = 0;
var bin_sel = 0;
function sh_details(k) {

    if (k == 1) {
        statsshow();
        if (sea_rch == 0) {
            $('#div_srh').removeClass('d-none');
            $('#div_sel_bin').addClass('d-none');
            sea_rch = 1;
            bin_sel = 0;
        } else {
            $('#div_srh').addClass('d-none');
            $('#div_sel_bin').addClass('d-none');
            sea_rch = 0;
            bin_sel = 0;

        }
    } else if (k == 2) {

        if (bin_sel == 0) {
            $('#div_srh').addClass('d-none');
            $('#div_sel_bin').removeClass('d-none');
            bin_sel = 1;
            sea_rch = 0;
        } else {
            $('#div_srh').addClass('d-none');
            $('#div_sel_bin').addClass('d-none');
            bin_sel = 0;
            sea_rch = 0;

        }

    }

}

//-----------------hide and show bin icon



//------------------------------incident request-------------------------------------
//----------------pending dump report---------------------------------------

function zone() {
    //zone
    var QueryString = "selectzone";
    QueryString = "selectzone";
    $.ajax({
        type: "POST",
        contentType: "application/json; charset=utf-8",
        url: "PendingDumpReport.aspx/FillZone",
        data: "{QueryString:'" + QueryString + "'}",
        dataType: "json",
        success: function (Result) {
            $('#ddlZone').empty();
            $('#ddlZone').append($("<option></option>").val("-1").html("ALL "));
            $.each(Result.d, function (data, value) {

                $('#ddlZone').append($("<option></option>").val(value.Id).html(value.Name));
            })

            $('#ddlZone').change(function () {
                //if ($("#ddlZone option:selected").val() == -1)
                {
                    $('#ddlRegion').empty();
                    $('#ddlRegion').append($("<option></option>").val("-1").html("ALL"));
                    $('#ddlArea').empty();
                    $('#ddlArea').append($("<option></option>").val("-1").html("ALL"));
                    $('#ddlBranch').empty();
                    $('#ddlBranch').append($("<option></option>").val("-1").html("ALL"));
                }

                //Region
                var QueryString = "selectreg";
                var inputstring = $("#ddlZone option:selected").val();
                $.ajax({
                    type: "POST",
                    contentType: "application/json; charset=utf-8",
                    url: "PendingDumpReport.aspx/FillRegion",
                    data: "{QueryString:'" + QueryString + "',input:'" + inputstring + "'}",
                    dataType: "json",
                    success: function (Result) {
                        $('#ddlRegion').empty();
                        $('#ddlRegion').append($("<option></option>").val("-1").html("ALL "));
                        $.each(Result.d, function (data, value) {
                            $('#ddlRegion').append($("<option></option>").val(value.Id).html(value.Name));
                        })

                        $('#ddlRegion').change(function () {
                            //if ($("#ddlRegion option:selected").val() == -1)
                            {
                                $('#ddlArea').empty();
                                $('#ddlArea').append($("<option></option>").val("-1").html("ALL"));
                                $('#ddlBranch').empty();
                                $('#ddlBranch').append($("<option></option>").val("-1").html("ALL"));
                            }

                            //Area
                            var QueryString = "getarea";
                            var inputstring = $("#ddlRegion option:selected").val();
                            $.ajax({
                                type: "POST",
                                contentType: "application/json; charset=utf-8",
                                url: "PendingDumpReport.aspx/FillArea",
                                data: "{QueryString:'" + QueryString + "',input:'" + inputstring + "'}",
                                dataType: "json",
                                success: function (Result) {
                                    $('#ddlArea').empty();
                                    $('#ddlArea').append($("<option></option>").val("-1").html("ALL"));
                                    $.each(Result.d, function (data, value) {

                                        $('#ddlArea').append($("<option></option>").val(value.Id).html(value.Name));
                                    })

                                    $('#ddlArea').change(function () {
                                        //if ($("#ddlArea option:selected").val() == -1)
                                        {
                                            $('#ddlBranch').empty();
                                            $('#ddlBranch').append($("<option></option>").val("-1").html("ALL"));
                                        }

                                        //branch
                                        var QueryString = "BranchDtl";
                                        var inputstring = $("#ddlArea option:selected").val();
                                        $.ajax({
                                            type: "POST",
                                            contentType: "application/json; charset=utf-8",
                                            url: "PendingDumpReport.aspx/FillBranch",
                                            data: "{QueryString:'" + QueryString + "',input:'" + inputstring + "'}",
                                            dataType: "json",
                                            success: function (Result) {
                                                $('#ddlBranch').empty();
                                                $('#ddlBranch').append($("<option></option>").val("-1").html("ALL"));
                                                $.each(Result.d, function (data, value) {

                                                    $('#ddlBranch').append($("<option></option>").val(value.Id).html(value.Name));
                                                })
                                            },
                                            error: function (Result) {
                                                alert(Result);
                                            }
                                        });
                                    });

                                },
                                error: function (Result) {
                                    alert(Result);
                                }
                            });
                        });
                    },
                    error: function (Result) {
                        alert(Result);
                    }
                });
            });
        },
        error: function (Result) {
            alert(Result);
        }
    });
}

function Bin() {
    var QueryString = "Gebinmaster";
    var inputstring = $("#ddlBin option:selected").val();
    $.ajax({
        type: "POST",
        contentType: "application/json; charset=utf-8",
        url: "PendingDumpReport.aspx/FillBin",
        data: "{QueryString:'" + QueryString + "',input:'" + inputstring + "'}",
        dataType: "json",
        success: function (Result) {
            $('#ddlBin').empty();
            $('#ddlBin').append($("<option></option>").val("-1").html("ALL"));
            $.each(Result.d, function (data, value) {

                $('#ddlBin').append($("<option></option>").val(value.Id).html(value.Name));
            })
        },
        error: function (Result) {
            alert(Result);
        }
    });
}

function Status() {
    var QueryString = "GetStatus";
    var inputstring = $("#ddlStatus option:selected").val();
    $.ajax({
        type: "POST",
        contentType: "application/json; charset=utf-8",
        url: "PendingDumpReport.aspx/FillBin",
        data: "{QueryString:'" + QueryString + "',input:'" + inputstring + "'}",
        dataType: "json",
        success: function (Result) {
            $('#ddlStatus').empty();
            $('#ddlStatus').append($("<option></option>").val("-1").html("ALL"));
            $.each(Result.d, function (data, value) {

                $('#ddlStatus').append($("<option></option>").val(value.Id).html(value.Name));
            })
        },
        error: function (Result) {
            alert(Result);
        }
    });
}

function Category() {
    var QueryString = "selectcategory";
    var inputstring = $("#ddlCategory option:selected").val();
    $.ajax({
        type: "POST",
        contentType: "application/json; charset=utf-8",
        url: "PendingDumpReport.aspx/FillBin",
        data: "{QueryString:'" + QueryString + "',input:'" + inputstring + "'}",
        dataType: "json",
        success: function (Result) {
            $('#ddlCategory').empty();
            $('#ddlCategory').append($("<option></option>").val("-1").html("ALL"));
            $.each(Result.d, function (data, value) {

                $('#ddlCategory').append($("<option></option>").val(value.Id).html(value.Name));
            })
        },
        error: function (Result) {
            alert(Result);
        }
    });
}

function ViewReport() {
    var FDate = $('#txtFDate').val();
    var TDate = $('#txtTDate').val();
    var Bin = $('#ddlBin option:selected').val();
    var Zone = $('#ddlZone option:selected').val();
    var Region = $('#ddlRegion option:selected').val();
    var Area = $('#ddlArea option:selected').val();
    var Branch = $('#ddlBranch option:selected').val();
    var Status = $('#ddlStatus option:selected').val();
    var Category = $('#ddlCategory option:selected').val();

    if (Branch == '-1') {
        Branch = '';
    }
    if (Area == '-1') {
        Area = '';
    }
    if (Region == '-1') {
        Region = '';
    }
    if (Zone == '-1') {
        Zone = '';
    }
    if (Bin == '-1') {
        Bin = '';
    }
    if (Status == '-1') {
        Status = '';
    }
    //if (Category == '-1') {
    //    Category = '';
    //}
    var frmdate = convertDate(FDate);
    var Todate = convertDate(TDate);
    // var Querystring = "pendingdumpreport";    

    //                  1                 2           3         4             5              6             7               8              9
    var InputString = frmdate + '¥' + Todate + '¥' + Bin + '¥' + Zone + '¥' + Region + '¥' + Area + '¥' + Branch + '¥' + Status /*+ '¥' + Category*/;
    var Querystring1 = "newfulldumpreport";
    // var InputString = "27/05/2021" + '¥' + "23/07/2021" + '¥' + "" + '¥' + "" + '¥' + "" + '¥' + "" + '¥' + "" + '¥' + "" + '¥' + "";
    var mainid = Querystring1;
    var subid = InputString;
    //alert(InputString);
    window.open("ReportDownLoadExcel.aspx?Querystr=" + Querystring1 + "&inp=" + InputString);




    //alert(InputString);
    //alert(Querystring);
    //$.ajax({
    //    type: "POST",
    //    contentType: "application/json; charset=utf-8",
    //    url: "PendingDumpReport.aspx/ViewPendingReport",
    //    data: "{QueryString : '" + Querystring + "',input : '" + InputString + "'}",
    //    dataType: "json",
    //    success: function (Result) {
    //       // alert(Result.d);
    //       // Result = Result.d;
    //        if (Result.d.length > 0) {
    //            fillwallettableApp(Result);
    //        }
    //        else {

    //            $('#tblTickList').empty();
    //            $('#tblTickList').hide();



    //        }
    //    },
    //    error: function (Result) {
    //        alert(Result);
    //    }
    //});
}

function fillwallettableApp(Result) {
    var valData, n = 1;
    // valData = data.split('!');
    $("#tblTickList").empty();
    if ($("#tblTickList tr").length == 0) {

        $("#tblTickList").empty();

        $('#divviewrpt').show();
        $('#tblTickList').append('<thead>< tr ><td scope="col" class="col-md-1">Sl No.</td><td scope="col">Ticket ID</td><td scope="col">Owner Group/dep</td><td scope="col">Report Date</td> <td scope="col">Status</td> <td scope="col" class="col-md-1">Status Date</td> <td scope="col" class="col-md-1">Request Type/Category</td> <td scope="col" class="col-md-1">Sub Category</td> <td scope="col" class="col-md-1">Branch ID</td> <td scope="col" class="col-md-1">Branch Name</td> <td scope="col" class="col-md-1">Description</td> <td scope="col" class="col-md-1">Work Log</td> <td scope="col" class="col-md-1">Created By</td> <td scope="col" class="col-md-1">Affected Person</td> <td scope="col" class="col-md-1">Class</td> <td scope="col" class="col-md-1">Region</td> <td scope="col" class="col-md-1">Zone</td> <td scope="col" class="col-md-1">State</td> <td scope="col" class="col-md-1">No of delay days</td> <td scope="col" class="col-md-1">Severity</td></tr></thead><tbody>');

        //$('#tblTickList').append('<tr style="background-color:lightgoldenrodyellow;color:black;"><th class="text-center" style="width:500px;">Sl No.&nbsp;</th><th class="text-center">REPORT DATE</th><th class="text-center">CREATED BY CODE</th><th class="text-center">CREATED BY NAME&nbsp;</th><th class="text-center">AFFECTED PERSON&nbsp;</th><th class="text-center">CLASS&nbsp;</th><th class="text-center">TICKET ID&nbsp;</th><th class="text-center">BRANCH ID&nbsp;</th><th class="text-center">BRANCH NAME&nbsp;</th><th class="text-center">REQUEST TYPE/SUB CATEGORY&nbsp;</th><th class="text-center">CURRENT BIN&nbsp;</th><th class="text-center">DESCRIPTION&nbsp;</th><th class="text-center">CONTACT NUMBER&nbsp;</th><th class="text-center">MAIL ID&nbsp;</th><th class="text-center">STATUS&nbsp;</th><th class="text-center">STATUS DATE&nbsp;</th><th class="text-center">AREA&nbsp;</th><th class="text-center">REGION&nbsp;</th><th class="text-center">ZONE&nbsp;</th><th class="text-center">STATE&nbsp;</th></tr > ');
        for (var i = 0; i < Result.d.length; i++) {
            k = i + 1;
            $('#tblTickList').append('<tr><td class="col-md-1">' + k + '</td>' +
                '<td>' + Result.d[i].TicketID + '</td>' +
                '<td>' + Result.d[i].OwnerGroup + '</td>' +
                '<td>' + Result.d[i].ReportDate + '</td>' +
                '<td>' + Result.d[i].Status + '</td>' +
                '<td>' + Result.d[i].StatusDate + '</td>' +
                '<td>' + Result.d[i].Category + '</td>' +
                '<td>' + Result.d[i].SubCategory + '</td>' +
                '<td>' + Result.d[i].BranchID + '</td>' +
                '<td>' + Result.d[i].BRanchNme + '</td>' +
                '<td>' + Result.d[i].Description + '</td>' +
                '<td>' + Result.d[i].WorkLog + '</td>' +
                '<td>' + Result.d[i].CreatedBy + '</td>' +
                '<td>' + Result.d[i].AffectedPerson + '</td>' +
                '<td>' + Result.d[i].Class + '</td>' +
                '<td>' + Result.d[i].Region + '</td>' +
                '<td>' + Result.d[i].Zone + '</td>' +
                '<td>' + Result.d[i].State + '</td>' +
                '<td class="col-md-1">' + Result.d[i].DaysDelay + '</td>' +
                '<td>' + Result.d[i].Severity + '</td>' +
                '</tr>');
        }
        $('#tblTickList').append(
            '</tbody>');
        //return;
    }
    //if (valData.length == "1") {
    //    $('#divviewrpt').hide();
    //}
    //else {
    //    $('#divviewrpt').show();
    //}

    //for (i = 0; i < valData.length - 1; i++) {
    //    var valdata1 = valData[i].split('^');
    //    //alert(valdata1);
    //    var input = valdata1[2];        
    //    $('#tblTickList').append('<tbody><tr>' +
    //        '<td class="text-center">' + parseInt(n) + '</td>' +
    //        '<td class="text-left" style="width:500px;height:40px;">' + valdata1[0] + '</td>' +
    //        '<td class="text-left" style="width:500px;height:40px;">' + valdata1[1] + '</td>' +
    //        '<td class="text-left" style="width:500px;height:40px;">' + valdata1[2] + '</td>' +
    //        '<td class="text-left" style="width:500px;height:40px;">' + valdata1[3] + '</td>' +
    //        '<td class="text-left" style="width:500px;height:40px;">' + valdata1[4] + '</td>' +
    //        '<td class="text-left" style="width:500px;height:40px;">' + valdata1[5] + '</td>' +
    //        '<td class="text-left" style="width:500px;height:40px;">' + valdata1[6] + '</td>' +
    //        '<td class="text-left" style="width:500px;height:40px;">' + valdata1[7] + '</td>' +
    //        '<td class="text-left" style="width:500px;height:40px;">' + valdata1[8] + '</td>' +
    //        '<td class="text-left" style="width:500px;height:40px;">' + valdata1[9] + '</td>' +
    //        '<td class="text-left" style="width:500px;height:40px;">' + valdata1[10] + '</td>' +
    //        '<td class="text-left" style="width:500px;height:40px;">' + valdata1[11] + '</td>' +
    //        '<td class="text-left" style="width:500px;height:40px;">' + valdata1[12] + '</td>' +
    //        '<td class="text-left" style="width:500px;height:40px;">' + valdata1[13] + '</td>' +
    //        '<td class="text-left" style="width:500px;height:40px;">' + valdata1[14] + '</td>' +
    //        '<td class="text-left" style="width:500px;height:40px;">' + valdata1[15] + '</td>' +
    //        '<td class="text-left" style="width:500px;height:40px;">' + valdata1[16] + '</td>' +
    //        '<td class="text-left" style="width:500px;height:40px;">' + valdata1[17] + '</td>' +
    //        '<td class="text-left" style="width:500px;height:40px;">' + valdata1[18] + '</td>' +
    //        '</tr ></tbody > ');

    //    n = n + 1;
    //}
}


function exportTableToExcel(tableID, filename = '') {
    var downloadLink;
    var dataType = 'application/vnd.ms-excel';
    var tableSelect = document.getElementById(tableID);
    var tableHTML = tableSelect.outerHTML.replace(/ /g, '%20');
    // Specify file name
    filename = filename ? filename + '.xls' : 'PendingdumpReport.xls';

    // Create download link element
    downloadLink = document.createElement("a");

    document.body.appendChild(downloadLink);

    if (navigator.msSaveOrOpenBlob) {
        var blob = new Blob(['\ufeff', tableHTML], {
            type: dataType
        });
        navigator.msSaveOrOpenBlob(blob, filename);
    } else {
        // Create a link to the file
        downloadLink.href = 'data:' + dataType + ', ' + tableHTML;

        // Setting the file name
        downloadLink.download = filename;

        //triggering the function
        downloadLink.click();
    }
}

function convertDate(inputFormat) {
    function pad(s) { return (s < 10) ? '0' + s : s; }
    var d = new Date(inputFormat)
    return [pad(d.getDate()), pad(d.getMonth() + 1), d.getFullYear()].join('/')
}







//----------------------------------download function



function Dumpreport() {
    var QueryString = "selectcategory";
    var inputstring = $("#ddlCategory option:selected").val();
    $.ajax({
        type: "POST",
        contentType: "application/json; charset=utf-8",
        url: "PendingDumpReport.aspx/FillBin",
        data: "{QueryString:'" + QueryString + "'}",
        dataType: "json",
        success: function (Result) {
            alert(Result.d);
        },
        error: function (Result) {
            alert(Result);
        }
    });
}



function Reportdown() {
    debugger;
    //var frmdate = convertDate(FDate);
    ////var Todate = convertDate(TDate);
    //var bin = $('#ddlBin option:selected').val();
    //var zne = $('#ddlZone option:selected').val();
    //var reg = $('#ddlRegion option:selected').val();
    //var are = $('#ddlArea option:selected').val();
    //var br = $('#ddlBranch option:selected').val();
    //var sts = $('#ddlStatus option:selected').val();
    //var cat = $('#ddlCategory option:selected').val();
    var Querystring1 = "pendingdumpreport";

    var InputString = "" + '¥' + "" + '¥' + "" + '¥' + "" + '¥' + "" + '¥' + "" + '¥' + "" + '¥' + "" + '¥' + "";
    $.ajax({
        type: "POST",
        contentType: "application/json; charset=utf-8",
        url: "PendingDumpReport.aspx/downloadexcel",
        data: "{QueryString:'" + Querystring1 + "',input:'" + InputString + "'}",
        dataType: "json",

        success: function (Result) {
            alert(Result.d);
            // Result = Result.d;
            //if (Result.d.length > 0) {

            //    alert(Result.d);

            //}

        },
        error: function (Result) {
            alert(Result.d);
        }
    });
}





function ExportToExcel() {

    var frmdate = convertDate(27 / 05 / 2021);
    //alert(frmdate);
    //var Todate = convertDate(TDate);
    var Querystring1 = "fulldumpreport";
    var InputString = "" + '¥' + "" + '¥' + "" + '¥' + "" + '¥' + "" + '¥' + "" + '¥' + "" + '¥' + "" + '¥' + "";

    var mainid = Querystring1;
    var subid = InputString;
    window.open("ReportDownLoadExcel.aspx?Querystr=" + Querystring1 + "&inp=" + InputString);



}


function ExportToExcelResolved() {

    var frmdate = convertDate($('#txtFDatec').val());/*convertDate(27 / 05 / 2021);*/
    var todate = convertDate($('#txtTDatec').val());
    //alert(frmdate);
    //var Todate = convertDate(TDate);
    var Querystring1 = "resolved_tick";
    var InputString = frmdate + '¥' + todate + '¥' + $('#ddlBinc option:selected').val() + '¥' + "" + '¥' + "" + '¥' + "" + '¥' + "" + '¥' + "" + '¥' + "";

    var mainid = Querystring1;
    var subid = InputString;

    //alert(Querystring1);
    //alert(InputString);
    window.open("ReportDownLoadExcel.aspx?Querystr=" + Querystring1 + "&inp=" + InputString);



}

function getCriticality() {
    var category = $('#ddl_category').val();
    var branch_id = $('#bch_stk').val();
    var asset = $('#select_type_stk').val();
    var QueryString = "GetCriticality";
    var input = category + "¥" + asset;
    if ($('#bch_stk').prop("checked") == true) {
        if (branch_id == 0) {
            if (category == 1 || category == 2) {
                $('#txt_criticality').val('LEVEL 1');
            }
            else if (asset == 8 || asset == 7) {
                $('#txt_criticality').val('LEVEL 2');
            }
            else if (asset == 2) {
                $('#txt_criticality').val('LEVEL 3');
            }
            else {
                $('#txt_criticality').val('LEVEL 3');
            }
        }
        else {
            if (asset == 31 || asset == 11) {
                $('#txt_criticality').val('LEVEL 1');
            }
            else if (asset == 8 || asset == 7) {
                $('#txt_criticality').val('LEVEL 2');
            }
            else if (asset == 2) {
                $('#txt_criticality').val('LEVEL 3');
            }
            else {
                $('#txt_criticality').val('LEVEL 3');
            }
        }

    }
    else if ($('#emp_stk').prop("checked") == true) {
        var emp = $("#empbchstk_id").val();
        $.ajax({
            type: "POST",
            contentType: "application/json; charset=utf-8",
            url: "Binowner.aspx/getcriticality",
            data: "{QueryString:'getEmployebranch',input : '" + emp + "'}",
            dataType: "json",
            success: function (Result) {
                Result = Result.d;
                if (Result == 0) {
                    if (category == 1 || category == 2) {
                        $('#txt_criticality').val('LEVEL 1');
                    }
                    else if (asset == 8 || asset == 7) {
                        $('#txt_criticality').val('LEVEL 2');
                    }
                    else if (asset == 2) {
                        $('#txt_criticality').val('LEVEL 3');
                    }
                    else {
                        $('#txt_criticality').val('LEVEL 3');
                    }
                }
                else {
                    if (asset == 31 || asset == 11) {
                        $('#txt_criticality').val('LEVEL 1');
                    }
                    else if (asset == 8 || asset == 7) {
                        $('#txt_criticality').val('LEVEL 2');
                    }
                    else if (asset == 2) {
                        $('#txt_criticality').val('LEVEL 3');
                    }
                    else {
                        $('#txt_criticality').val('LEVEL 3');
                    }
                }

            },
            error: function (Result) {

                alert(Result);
            }
        });
        $('#txt_criticality').val('');
    }

}





//----------------pending dump report---------------------------------------

//--attachement delete
function del_attach(v_id) {

   // alert(v_id);

    var r = confirm('Are You Sure Delete File??');

    if (r == true) {

        if (CurSts == 6 || CurSts == 5) {
            ModelPopWarning('No More Delete.!')
            return false;
        }
        else {
            var inputstr = v_id + '¥' + global_tickno;

            var QueryString = "delete_attachES";
            $.ajax({
                type: "POST",
                contentType: "application/json; charset=utf-8",
                url: "ES_BIN_OWNER.aspx/del_attach",
                data: "{QueryString:'" + QueryString + "',input:'" + inputstr + "'}",
                dataType: "json",
                success: function (Result) {

                    alert('Deleted');
                    $('#atta_cnt').text(parseInt($('#atta_cnt').text()) - 1);
                    Attachmentshow();

                },
                error: function (Result) {

                    alert('attachement delete' + Result.d);
                }

            });
            return;
        }
    }
}


//--attachement delete



//--------searc by resolved date bin

function Binresolved() {
    var QueryString = "Gebinmaster";
    var inputstring = $("#ddlBinc option:selected").val();
    $.ajax({
        type: "POST",
        contentType: "application/json; charset=utf-8",
        url: "PendingDumpReport.aspx/FillBin",
        data: "{QueryString:'" + QueryString + "',input:'" + inputstring + "'}",
        dataType: "json",
        success: function (Result) {
            $('#ddlBinc').empty();
            $('#ddlBinc').append($("<option></option>").val("-1").html("ALL"));
            $.each(Result.d, function (data, value) {

                $('#ddlBinc').append($("<option></option>").val(value.Id).html(value.Name));
            })
        },
        error: function (Result) {
            alert(Result);
        }
    });
}




//---------------------------------Abhinash and Bibin----------------
//------------------------------Bin owner pop up load---------------------
function shwexstreqtype1() {
    debugger;
    var QueryString = "GetBins";
    var input = $("[id*=hdUserId]").val();
    //alert(input);
    $.ajax({
        type: "POST",
        contentType: "application/json; charset=utf-8",
        url: "Binowner.aspx/GetBinNames",
        data: "{QueryString:'" + QueryString + "',inputString: '" + input + "'}",
        dataType: "json",
        success: function (Result) {
            $('#ddlccurbin').empty();
            //  $('#ddlchUrg').append($("<option></option>").val("-1").html("Select Urgency/Priority "));
            $.each(Result.d, function (data, value) {
                $('#ddlccurbin').append($("<option></option>").val(value.BinId).html(value.BinName));
            })
        },
        error: function (Result) {
            //alert('shwexstreqtype1()' + Result.d);
        }

    });
    return;
}

//function shwexstreqtype1() {
//    debugger;
//    $("#servicereq1").empty();
//    var Querystring;
//    $("#servicereq1").show();
//    var input = $('#ddlbin').val();
//    intPrnc = "GetDataValue";

//    $.ajax({
//        type: "POST",
//        contentType: "application/json; charset=utf - 8",
//        url: "Binowner.aspx/CurrentbinVal",
//        data: "{ QueryString: '" + intPrnc + "', input: '" + input + "' }",
//        dataType: "json",
//        success: function (Result) {
//            if (Result.d.length > 0) {
//                $("#servicereq1").empty();
//                $("#servicereq1").append('<thead class="bg - success text- white">< tr ></tr></thead><tbody class="border border - dark">');
//                /*<th scope="col">Current Bin</th>*/
//                for (var i = 0; i < Result.d.length; i++) {
//                    $("#servicereq1").append('<tr Id="name" onclick="myFunction1(' + Result.d[i].Id + ')"><td>' + Result.d[i].Name + '</td>' +
//                        '</tr >');



//                    //alert(Result.d[i].Name)




//                }
//                $("#servicereq1").append(
//                    '</tbody>');
//            }
//        }, error: function (Result) { alert(Result); }
//    });
//}



//function myFunction1(a) {
//    debugger;
//    intPrnc = "GetDataValuebyId";
//    $.ajax({
//        type: "POST",
//        contentType: "application/json; charset=utf-8",
//        url: "Binowner.aspx/CurrentbinVal",
//        data: "{QueryString : '" + intPrnc + "',input:'" + a + "'}",
//        dataType: "json",
//        success: function (Result) {
//            if (Result.d.length > 0) {
//                for (var i = 0; i < Result.d.length; i++) {
//                    debugger;
//                    $("#ddlccurbin").val(Result.d[i].Name);
//                    //alert(d[i].Name)



//                    $("#binownerlog").modal('hide');
//                    $("#txt_reqname1").val("");
//                }
//            }
//        },
//        error: function (Result) {
//            alert(Result);
//        }



//    })
//}

//-----------------------End-----------------------------
//--------------------------------------------------------SR Creation  Currentbin Pop up----------------------------------------------------

function shwexstreqtype3() {
    $("#servicereq3").empty();
    var Querystring;
    $("#servicereq3").show();
    var input = $('#txt_reqname3').val();
    intPrnc = "GetDataValueSRIN";
    $.ajax({
        type: "POST",
        contentType: "application/json; charset=utf - 8",
        url: "Binowner.aspx/CurrentbinVal",
        data: "{ QueryString: '" + intPrnc + "', input: '" + input + "' }",
        dataType: "json",
        success: function (Result) {
            if (Result.d.length > 0) {
                $("#servicereq3").empty();
                $("#servicereq3").append('<thead class="bg - success text- white">< tr ></tr></thead><tbody class="border border - dark">');
                for (var i = 0; i < Result.d.length; i++) {
                    $("#servicereq3").append('<tr Id="name" onclick="myFunction3(' + Result.d[i].Id + ')"><td>' + Result.d[i].Name + '</td>' +
                        '</tr >');
                }
                $("#servicereq3").append(
                    '</tbody>');
            }
        }, error: function (Result) { alert(Result); }
    });
}

function myFunction3(a) {
    intPrnc = "GetDataValuebyId";
    $.ajax({
        type: "POST",
        contentType: "application/json; charset=utf-8",
        url: "Binowner.aspx/CurrentbinVal",
        data: "{QueryString : '" + intPrnc + "',input:'" + a + "'}",
        dataType: "json",
        success: function (Result) {
            if (Result.d.length > 0) {
                for (var i = 0; i < Result.d.length; i++) {
                    $("#srpopup").val(Result.d[0].Name);
                    $("#srlog").modal('hide');
                    $("#txt_reqname3").val("");

                }
            }
        },
        error: function (Result) {
            alert(Result);
        }

    })
}
function shwexstreqtype2() {
    $("#servicereq2").empty();
    var Querystring;
    $("#servicereq2").show();
    var input = $('#txt_reqname2').val();
    intPrnc = "GetDataValueSRIN";
    $.ajax({
        type: "POST",
        contentType: "application/json; charset=utf - 8",
        url: "Binowner.aspx/CurrentbinVal",
        data: "{ QueryString: '" + intPrnc + "', input: '" + input + "' }",
        dataType: "json",
        success: function (Result) {
            if (Result.d.length > 0) {
                $("#servicereq2").empty();
                $("#servicereq2").append('<thead class="bg - success text- white">< tr ></tr></thead><tbody class="border border - dark">');
                for (var i = 0; i < Result.d.length; i++) {
                    $("#servicereq2").append('<tr Id="name" onclick="myFunction2(' + Result.d[i].Id + ')"><td>' + Result.d[i].Name + '</td>' +
                        '</tr >');
                }
                $("#servicereq2").append(
                    '</tbody>');
            }
        }, error: function (Result) { alert(Result); }
    });
}

function myFunction2(a) {
    intPrnc = "GetDataValuebyId";
    $.ajax({
        type: "POST",
        contentType: "application/json; charset=utf-8",
        url: "Binowner.aspx/CurrentbinVal",
        data: "{QueryString : '" + intPrnc + "',input:'" + a + "'}",
        dataType: "json",
        success: function (Result) {
            if (Result.d.length > 0) {
                for (var i = 0; i < Result.d.length; i++) {
                    $("#incident_popup").val(Result.d[0].Name);
                    $("#incidentlog").modal('hide');
                    $("#txt_reqname2").val("");
                }
            }
        },
        error: function (Result) {
            alert(Result);
        }

    })
}

//---------------------------------------------------------------------END------------------------------------------------------------------
//------------------------------------------------------------------To Reopen tickets------------------------------------------------------- 
function Reopen(i) {
    var checkstr = confirm('Are you sure you want to Reopen this?');
    if (checkstr == true) {
        $(this).remove();
        var QueryString = "ReOpen";
        $.ajax({
            type: "POST",
            contentType: "application/json; charset=utf-8",
            url: "Binowner.aspx/confreqtype1",
            data: "{QueryString:'" + QueryString + "',input : '" + i + "'}",
            dataType: "json",
            success: function (Result) {
                alert("Reopened Successfully");
                window.location.reload();
                Result = Result.d;
                $("#tblticket tr").off('click');
            },
            error: function (Result) {
                alert(Result);
                $("#tblticket tr").off('click');
            }
        });
    }
    else {
        return false;
    }
}

//Docu View----------------


function ViewDocument(dt) {
    debugger;
    String2 = "PROC_ITSM";
    String3 = "AttShowES";
   // alert('ServiceViewDocES');
    $.ajax({
        type: "POST",
        contentType: "application/json; charset=utf-8",
        url: "ServiceViewDocES.asmx/DocumentsDownload",
        data: "{QueryString:'" + dt + "',QueryString1:'" + String2 + "',InputString: '" + String3 + "'}",
        dataType: "json",
        success: function (Result) {
            if (Result.d != 'NoData') {
                var fileName = Result.d;
                var myUrl = "IMAGES/" + fileName;
                OpenDialog(myUrl, 875, 650, function (termsOfServiceAccepted) {
                    if (termsOfServiceAccepted) {
                        $.ajax({
                            type: "POST",
                            contentType: "application/json;charset=utf-8",
                            url: "../ServiceViewDocES.asmx/deleteDownloadFile",
                            data: "{input: '" + fileName + "' }",
                            dataType: "json",
                            success: function (Result) {
                            },
                            error: function (Result) {
                            }
                        });
                    }
                });
            } else {
                alert("No Images Uploaded");
            }

        },
        error: function (Result) {

        }
    });
}

function OpenDialog(url, width, height, callback) {
    var win = window.open(url, "Manappuram Document Verification", width, height, "menubar=0,toolbar=0", "_blank");
    var timer = setInterval(function () {
        if (win.closed) {
            clearInterval(timer);
            var returnValue = true;
            callback(returnValue);
        }
    }, 10);
}

function ViewDocumentPM(String1) {
    debugger;
    String2 = "PROC_ITSM";
    String3 = "AttShowPM";
    $.ajax({
        type: "POST",
        contentType: "application/json; charset=utf-8",
        url: "ServiceViewDocES.asmx/DocumentsDownload",
        data: "{QueryString:'" + String1 + "',QueryString1:'" + String2 + "',InputString: '" + String3 + "'}",
        dataType: "json",
        success: function (Result) {
            if (Result.d != 'NoData') {
                var fileName = Result.d;
                var myUrl = "IMAGES/" + fileName;

                window.open("IMAGES/" + Result.d);

            } else {
                alert("No Attachments Uploaded");
            }

        },
        error: function (Result) {

        }
    });
}
function ViewDocumentCR(String1) {
    //alert(String1);
    debugger;
    String2 = "PROC_ITSM";
    String3 = "AttShowCR";
    $.ajax({
        type: "POST",
        contentType: "application/json; charset=utf-8",
        url: "ServiceViewDocES.asmx/DocumentsDownload",
        data: "{QueryString:'" + String1 + "',QueryString1:'" + String2 + "',InputString: '" + String3 + "'}",
        dataType: "json",
        success: function (Result) {
            if (Result.d != 'NoData' && Result.d != 'NO ATTACHMENT') {
                var fileName = Result.d;

                window.open("IMAGES/" + Result.d);


            } else {
                alert("No Attachments Uploaded");
            }

        },
        error: function (Result) {

        }
    });
}




function getFITableDtls() {
    $("#tableShowFI").show();
    var InputString = $("#ddl_Loan").val();
    var Querystring = "GetLoanTable";
    $.ajax({
        type: "POST",
        contentType: "application/json; charset=utf-8",
        url: "LoanMasterChecker.aspx/ShowLoans",
        data: "{QueryStr : '" + Querystring + "',input :'" + InputString + "'}",
        dataType: "json",
        success: function (Result) {
            if (Result.d.length > 0) {
                $('#tableShowLoans').empty();
                $("#tableShowLoans").append('<thead>< tr ><th class="col-md-2">Source</th> <th class="col-md-2">Fund</th> <th class="col-md-2">FI Type </th><th class="col-md-2">FI Name</th><th class="col-md-2">Agreement Entered Date</th><th class="col-md-2">Agreement From Date</th><th class="col-md-2">Agreement To Date</th><th class="col-md-2">Entered By</th></tr ></thead><tbody>'
                );
                for (var i = 0; i < Result.d.length; i++) {
                    $("#tableShowLoans").append('<tr><td>' + Result.d[i].srcnm + '</td>' +
                        '<td>' + Result.d[i].fnd + '</td>' +
                        '<td>' + Result.d[i].fityp + '</td>' +
                        '<td>' + Result.d[i].fi + '</td>' +
                        '<td>' + Result.d[i].AEdt + '</td>' +
                        '<td>' + Result.d[i].Afrmdt + '</td>' +
                        '<td>' + Result.d[i].Atodt + '</td>' +
                        '<td>' + Result.d[i].Enme + '</td>' +
                        '</tr >');
                }
                $("#tableShowLoans").append(
                    '</tbody>');
            }
        }
    })
}
function CheckLoans() {
    var aprRjct
    if ($("#radAppr").prop("checked")) {
        aprRjct = 1;
    }
    else if ($("#radRjct").prop("checked")) {
        aprRjct = 0;
    }
    var InputData = aprRjct + "µ" + $("#ddl_Loan").val() + "µ" + $("[id*=hdUserId]").val();
    if ($("#radAppr").prop("checked") == false && $("#radRjct").prop("checked") == false) {
        alert("Please select an Option");
        return false;
    }
    else if ($("#ddl_Loan").val() == "-1") {
        alert("Please Select A Fund");
        return false;
    } else {
        $.ajax({
            type: "POST",
            contentType: "application/json; charset=utf-8",
            url: "LoanMasterChecker.aspx/ApprRejcLoan",
            data: "{input :'" + InputData + "'}",
            dataType: "json",
            success: function (Result) {
                alert(Result.d);
                $('#radAppr').prop('checked', false);
                $('#radRjct').prop('checked', false);
                $("#ddl_Loan").val('-1');
                $('#tableShowLoans').empty();
            },
            error: function (Result) {
                alert(Result);
            }
        });
    }
}





//--------------------------------------------------------------------------END-------------------------------------------------------------
