function frmExit() {
    window.open("index.aspx", "_self");
}

$(window).on('load', function () {
    global_tickno = '';
    $("#txt_purchdt_stk").datepicker({
        dateFormat: 'dd/MM/yy',
        changeMonth: true,
        changeYear: true,
        stepMonths: true,
        todayHighlight: true,
        onSelect: function (dateText, inst) {

        }
    });

    $("#txt_wrntEnd_stk").datepicker({
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

    $("#txt_i_warret_stde").datepicker({
        dateFormat: 'dd/MM/yy',
        changeMonth: true,
        changeYear: true,
        stepMonths: true,
        todayHighlight: true,
        onSelect: function (dateText, inst) {

        }
    }); 

    $("#txt_AgrmntDt_mov").datepicker({
        dateFormat: 'dd/MM/yy',
        changeMonth: true,
        changeYear: true,
        stepMonths: true,
        todayHighlight: true,
        onSelect: function (dateText, inst) {

        }
    }); 
    $("#txt_AgrmntDt_dcmn").datepicker({
        dateFormat: 'dd/MM/yy',
        changeMonth: true,
        changeYear: true,
        stepMonths: true,
        todayHighlight: true,
        onSelect: function (dateText, inst) {

        }
    }); 

    $("#txt_AgrmntDt_dsps").datepicker({
        dateFormat: 'dd/MM/yy',
        changeMonth: true,
        changeYear: true,
        stepMonths: true,
        todayHighlight: true,
        onSelect: function (dateText, inst) {

        }
    }); $("#txt_AgrmntDt_bi").datepicker({
        dateFormat: 'dd/MM/yy',
        changeMonth: true,
        changeYear: true,
        stepMonths: true,
        todayHighlight: true,
        onSelect: function (dateText, inst) {

        }
    }); $("#txt_AgrmntDt_mv_bi").datepicker({
        dateFormat: 'dd/MM/yy',
        changeMonth: true,
        changeYear: true,
        stepMonths: true,
        todayHighlight: true,
        onSelect: function (dateText, inst) {

        }
    }); $("#txt_AgrmntDt_mov_in").datepicker({
        dateFormat: 'dd/MM/yy',
        changeMonth: true,
        changeYear: true,
        stepMonths: true,
        todayHighlight: true,
        onSelect: function (dateText, inst) {

        }
    });
    //binOwnerChck();

    //UserTview();
    //statusshow();
    //statsshow();
    //BinOwnshow();
    //$('#hosupport').hide();
    $('#div_Release').hide();
    $('#tblapprv').hide();
    $('#lab_appr_tb').hide();
    $('#stsdiv').hide();
    $('#worklogtb').empty();
    $('#wldv').hide();
    $('#btn_ADD').prop('disabled', false);
    $('#wlremove').prop('disabled', true);
    $('#wlsubmit').prop('disabled', true);
    row_added = 0;
    binown = 0;
    Getimaczone();
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
    UserTview();
    //changsts();
    //GetSeverity();
    //GetUrgency();
    //GetImpact();
    //GetINCategory();
    //GetINsubCategory();
    //GetRequestType();
    getassttyp();
    Getassetstate();
    GetimacBin();
    department_mst();
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


function Attachmentshow() {
    $("#FileAttch").val("");
    $('#AttachmentDtl').show();
    var InputString = global_tickno;
    var Querystring = "AttachmentList";
    $.ajax({
        type: "POST",
        contentType: "application/json; charset=utf-8",
        url: "ticketview.aspx/AttchDtl",
        data: "{QueryStr : '" + Querystring + "',input :'" + InputString + "'}",
        dataType: "json",
        success: function (Result) {
            if (Result.d.length > 0) {
                $('#AttachmentDtl').empty();
                $('#AttachmentDtl').show();

                for (var i = 0; i < Result.d.length; i++) {


                    $('#AttachmentDtl').append('<div class="card border-success mb-1 bg-light rounded " id="' + Result.d[i].Id + '" style="max-width:100rem;" onclick="DocView(this.id)">' +
                        ' <div class="card-body ">' +
                        ' <p class="card-title crdstyle">' + Result.d[i].Name + '</p>' +
                        ' </div> </div >');

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



function fileupload() {




    if ($("#FileAttch").val() != "") {

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




                    var InputData = fileName + '¥' + global_tickno;
                    $.ajax({
                        type: "POST",
                        contentType: "application/json; charset=utf-8",
                        url: "ticketview.aspx/confirmdocument",
                        data: "{val:'" + InputData + "',upload_file:'" + imageData + "'}",
                        dataType: "json",
                        success: function (Result) {


                            Result = Result.d;
                            Result = Result.split("¥");

                            if (Result[0] == "Successfully Uploaded") {
                                alert('Successfully Uploaded');

                                Attachmentshow();
                                // window.open('SRCreation.aspx', '_self');
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



var tempwlog;
var global_tickno;
var row_added;
var curr_status_id;
var curr_status_name;
var temp;
var Changed_bin;
var Bin_own_id;
function binOwnerChck() {
   //alert('entered into function');
    var k;
     
    var Querystring = "checkBinOwner";

    var InputString = $("[id*=hdUserId]").val();
   // alert(InputString);

    $.ajax({
        type: "POST",
        contentType: "application/json; charset=utf-8",
        url: "AssRitcapprv.aspx/bin_member_check",
        data: "{QueryStr : '" + Querystring + "',input :'" + InputString + "'}",
        dataType: "json",
        success: function (Result) {

            if (Result.d != 0) {


                $('#ddlbin').empty();
                $('#ddlbin').append($("<option></option>").val("-1").html("Select Your Bin "));
                $.each(Result.d, function (data, value) {
                    $('#ddlbin').append($("<option></option>").val(value.Id).html(value.Name));

                })
                statusshow();
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
 
    if (($('#wlogadd_summary').val()).trim()=="") {
        alert('Please Enter Summary..');

    } else if (($('#wlogadd_descript').val()).trim() == "") {

        alert('Please Enter Description..');


    } else if ($('#wlogadd_summary').val().length > 3500) {

        alert('Summary Exceed The Data Limit Please Reduce The Content..!! ');

    }
    //else if ($('#wlogadd_descript').val().length > 3900) {

    //    alert('Description Exceed The Data Limit Please Reduce The Content..!! ');

    //}
    else {
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
//        url: "AssRitcapprv.aspx/ticketstatus",
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




//GetSupportTeam  ddlchBin
function BinOwnshow() {

    var intPrnc;

    intPrnc = "GetBinownerR";

    $.ajax({
        type: "post",
        contentType: "application/json; charset=utf-8",
        url: "AssRitcapprv.aspx/BinOwner",
        data: "{QueryString:'" + intPrnc + "'}",
        dataType: "json",
        success: function (Result) {
            $('#ddlccurbin').empty();
            $('#ddlchBin').empty();
            //$('#ddlccurbin').append($("<option></option>").val("-1").html("Select bin owner "));
            $('#ddlchBin').append($("<option></option>").val("-1").html("Select bin owner "));
            $.each(Result.d, function (data, value) {
                $('#ddlccurbin').append($("<option></option>").val(value.Id).html(value.Name));
                $('#ddlchBin').append($("<option></option>").val(value.Id).html(value.Name));
            })
        },
        error: function (Result) {
            alert(Result);
        }
    });
}


function BinOwnval(k) {
 

    var intPrnc;

    intPrnc = "GetBinownerR";

    $.ajax({
        type: "post",
        contentType: "application/json; charset=utf-8",
        url: "AssRitcapprv.aspx/BinOwner",
        data: "{QueryString:'" + intPrnc + "'}",
        dataType: "json",
        success: function (Result) {
           
            
            $.each(Result.d, function (data, value) {
                //$('#ddlbin').append($("<option></option>").val(value.Id).html(value.Name));
                //$('#ddlchBin').append($("<option></option>").val(value.Id).html(value.Name));
                if (k == value.Name) {
                    
                    Changed_bin=(value.Id);

                }
            })
        },
        error: function (Result) {
            alert(Result);
        }
    });
}





function statusshow() {
    
    var intPrnc;
    
    intPrnc = "GetStatus";
   
    $.ajax({
        type: "post",
        contentType: "application/json; charset=utf-8",
        url: "AssRitcapprv.aspx/ticketstatus",
        data: "{QueryString:'" + intPrnc + "'}",
        dataType: "json",
        success: function (Result) {
            $('#ddlstatus').empty();
            $('#ddlstatus').append($("<option></option>").val("-1").html("Select status "));
            $.each(Result.d, function (data, value) {
               
                    $('#ddlstatus').append($("<option></option>").val(value.Id).html(value.Name));
                    
                
            })
        },
        error: function (Result) {
            alert(Result.d);
        }
    });
}
function Currstatsshow(curst) {
    var intPrnc;

    intPrnc = "GetStatus";

    $.ajax({
        type: "post",
        contentType: "application/json; charset=utf-8",
        url: "AssRitcapprv.aspx/ticketstatus",
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

function DocView(dt) {

    ViewDocument(dt);
}



function statsshow() {

    var intPrnc;

    intPrnc = "GetStatus";

    $.ajax({
        type: "post",
        contentType: "application/json; charset=utf-8",
        url: "AssRitcapprv.aspx/ticketstatus",
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
        url: "AssRitcapprv.aspx/SupportT",
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



function UserTview() {
    var k;
    $('#divtblPrincpleIntDtl').show();
    $('#tblticket').show();
   // $('#TICK_TBL_NAME').text($('#ddlbin option:selected').text());

    var Querystring ="getworkorder";

        var InputString = 0; /*$('#ddlbin option:selected').val();*//*bin;*//*$("[id*=hdUserId]").val();*/
    $.ajax({
        type: "POST",
        contentType: "application/json; charset=utf-8",
        url: "AssRitcapprv.aspx/GetUserTble",
        data: "{QueryStr : '" + Querystring + "'}",
        dataType: "json",
        success: function (Result) {
            if (Result.d.length > 0) {
                $('#tblticket').empty();
                $('#tblticket').append('<thead < tr ><td scope="col">NO</td><td scope="col">WO Number</td><td scope="col">Requested Date</td><td scope="col">Requeted By</td> <td scope="col">Requeted Person Branch</td> <td scope="col">Status</td> <td scope="col">Request Type</td></tr></thead><tbody>');
                for (var i = 0; i < Result.d.length; i++) {
                    k = i + 1;
                    $('#tblticket').append('<tr><td>' + k + '</td>' +
                        '<td>' + Result.d[i].INName + '</td>' +
                        '<td>' + Result.d[i].Branchordep + '</td>' +
                        '<td>' + Result.d[i].Summary + '</td>' +
                        '<td>' + Result.d[i].Desc + '</td>' +
                        '<td>' + Result.d[i].Repdate + '</td>' +
                        '<td>' + Result.d[i].Status + '</td>' +'</tr>');
                }
                $('#tblticket').append(
                    '</tbody>');
            } else {
                
                $('#tblticket').empty();
                $('#tblticket').hide();

            }
           
        },
        error: function (Result) {
            alert(Result);
        }
    });
    


}
//---------------------FUNCTION ZONE WISE IMAC

function getimaczoneticket() {
    var k;
    var inputstring;

    $('#divtblPrincpleIntDtl').show();
    $('#tblticket').show();
    // $('#TICK_TBL_NAME').text($('#ddlbin option:selected').text());

    var Querystring = "getselectbinimacwo";
    if ($('#ddl_im option:selected').val() == -1) {

        inputstring = "";

    } else {
        var inputstring = $('#ddl_im option:selected').val();
    }

   // var InputString = 0; /*$('#ddlbin option:selected').val();*//*bin;*//*$("[id*=hdUserId]").val();*/
    $.ajax({
        type: "POST",
        contentType: "application/json; charset=utf-8",
        url: "AssRitcapprv.aspx/GetUserTble1",
        data: "{QueryStr : '" + Querystring + "',input:'"+inputstring+"'}",
        dataType: "json",
        success: function (Result) {
            if (Result.d.length > 0) {
                $('#tblticket').empty();
                $('#tblticket').append('<thead < tr ><td scope="col">NO</td><td scope="col">WO Number</td><td scope="col">Requested Date</td><td scope="col">Requeted By</td> <td scope="col">Requeted Person Branch</td> <td scope="col">Status</td> <td scope="col">Request Type</td></tr></thead><tbody>');
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

        },
        error: function (Result) {
            alert(Result);
        }
    });



}

//-----------------------------------------------
function Tview() {
    //$("#hosupport").hide();
    var k;
    $('#TICK_TBL_NAME').text('SEARCHED TICKETS');
    $('#divtblPrincpleIntDtl').show();
    $('#tblticket').show();

   
    var txtsr = $("#txt_ticketno").val().toUpperCase();
    var txtsdate = $("#txt_rptfrm").val();
        var txtendate = $("#txt_rptto").val();
    var status = $("#ddlsts").val();
    var emp_br = $("#txt_emp_br").val();
    //alert(txtsr);
    if (status == -1) {

        status ="";
    } 
    if (txtsdate =="") {

        txtsdate ="";
    } if (txtendate == "") {

        txtendate = "";
    } if (txtsr =="") {

        txtsr ="";
    } if (emp_br == "") {

        emp_br = "";
    }
    var InputString = txtsr + "¥" + txtsdate + "¥" + txtendate + "¥" + status + "¥" + emp_br;
    //alert(InputString);
    var Querystring = "getNewSearch";

        $.ajax({
            type: "POST",
            contentType: "application/json; charset=utf-8",
            url: "AssRitcapprv.aspx/GetTble",
            data: "{QueryStr : '" + Querystring + "',input :'" + InputString + "'}",
            dataType: "json",
            success: function (Result) {
                 if (Result.d.length > 0) {
                    $('#tblticket').empty();
                    $('#tblticket').append('<thead>< tr ><td scope="col">NO</td><td scope="col">Incident/SR</td><td scope="col">Branch/dep</td><td scope="col">Summary</td> <td scope="col">Decription</td> <td scope="col">Rep.date</td></tr></thead><tbody>'
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
                    alert('No Entries Found');
                $('#tblticket').empty();
                   

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
    if (reqtyp !="" && binown==39) {
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
         r = $('#worklogtb tr:last').index();
        r = r + 1;
    //if ($('#ddlstatus option:selected').val() == -1) {
    //    var InputString = global_tickno + "¥" + $("[id*=hdUserId]").val() + "¥" + $('#wlogadd_summary').val().replace(/[']/gi,'"') + "¥" + $('#wlogadd_descript').val().replace(/[']/gi,'"') + "¥" + curr_status_id;
       

    //}
    //else
   // {
    var InputString = global_tickno + "¥" + $("[id*=hdUserId]").val() + "¥" + $('#wlogadd_summary').val().replace(/[']/gi, '"') + "¥" + $('#wlogadd_descript').val().replace(/[']/gi, '"') + "¥" +1;
       
  //  }
        var Querystring = "savewlogdetails";
    tempwlog = 1;


        $.ajax({
            type: "POST",
            contentType: "application/json; charset=utf-8",
            url: "AssRitcapprv.aspx/insertwlog",
            data: "{QueryStr : '" + Querystring + "',input :'" + InputString + "'}",
            dataType: "json",
            success: function (Result) {
                $('#wlogaddd').modal('hide');
                if (Result.d.length > 0) {
                    Result = Result.d;
                    alert(Result);
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
    
    $('#tblticket').find('tr').click(function () {
        var row = $(this).find('td:eq(1)').text();
        shdetails(row);     
        WorkLogView(row);
        UserApprvTview(row);
        global_tickno = row;
        tempwlog = 0;
        $('#tblticket').removeEventListener(); 
       

       
    });
    
    

}

var imac_typ;
function shdetails(tn) {
    $('#div_details').removeClass('d-none');
    //alert('entered into new function');
    $("#txt_callattenddte").datepicker('disable');
    $('#tblall').hide();
    $('#divtball').hide();
    var temp;
    var input=tn;
    var QueryString = "getimac_details";
    //SoI = tn.substring(0, 2);
    $("#ticket_show").text(tn);
   // alert(tn.substring(0, 2) == 'IN');
   
       

    $.ajax({
        type: "POST",
        contentType: "application/json; charset=utf-8",
        url: "AssRitcapprv.aspx/getlinkdata",
        data: "{QueryString:'" + QueryString + "',input : '" + input + "'}",
        dataType: "json",
        success: function (Result) {
            Result = Result.d.split("^");
            imac_typ = Result[82];
            $('#SRticket_NO').text('TICKET NO :'+Result[98]);
            $('#zone_txt').text('ZONE :' + Result[99]);
            $('#branch_txt').text('BRANCH :' + Result[5] + '/' + Result[6]);
            if (Result[82] == 1) {
                $('#wo_bulk_movement').addClass('d-none');
                $('#wo_bulk_installation').addClass('d-none');
                $('#wo_installation').removeClass('d-none');
                $('#wo_movement').addClass('d-none');
                $('#wo_decommision').addClass('d-none');
                $('#wo_dispose').addClass('d-none');



                $('#txt_report_dte').val(Result[2]);
                $('#txt_report_nme').val(Result[3] + '/' + Result[4]);
                $('#txt_req_per_br').val(Result[5] + '/' + Result[6]);
                $('#txt_req_typ').val(Result[7]);

                if (Result[16] == 1) {
                    $('#emp_stk').prop('checked', false);
                    $('#bch_stk').prop('checked', true);
                    $('#dept_stk').prop('checked', false);

                    $('#emp_bch_stk1').removeClass('d-none');
                    $('#emp_bch_stk2').removeClass('d-none');
                    $('#dept_stk2').addClass('d-none');

                    $('#empbchstk_id').val(Result[17]);
                    $('#empbchstk_nme').val(Result[18]);

                } else if (Result[16] == 2) {
                    $('#emp_stk').prop('checked', true);
                    $('#bch_stk').prop('checked', false);
                    $('#dept_stk').prop('checked', false);


                    $('#emp_bch_stk1').removeClass('d-none');
                    $('#emp_bch_stk2').removeClass('d-none');
                    $('#dept_stk2').addClass('d-none');

                    $('#empbchstk_id').val(Result[19]);
                    $('#empbchstk_nme').val(Result[20]);

                } else if (Result[16] == 3) {

                    $('#emp_stk').prop('checked', false);
                    $('#bch_stk').prop('checked', false);
                    $('#dept_stk').prop('checked', true);

                    $('#emp_bch_stk1').addClass('d-none');
                    $('#emp_bch_stk2').addClass('d-none');
                    $('#dept_stk2').removeClass('d-none');

                    $('#stkdprt').val(Result[21]);
                    // $('#empbchstk_nme').val(Result[15]);
                };
                $('#select_type_stk').val(Result[32]);
                //$('#txt_name_stk').val(Result[34]);
                //$('#txt_prdtTyp_stk').val(Result[35]);
                //$('#txt_prdtNme_stk').val(Result[36]);
                //$('#txt_partnu_stk').val(Result[37]);
                $('#txt_mnfctr_stk').val(Result[37]);
                //$('#txt_macAddrs1_stk').val(Result[39]);
                //$('#txt_prchCost_stk').val(Result[40]);
                //Result[41] = Result[41].split(" ");
                //$('#txt_purchdt_stk').val(Result[41][0]);
                $('#txt_sernum_stk').val(Result[42]);
                Result[43] = Result[43].split(" ");
                $('#txt_wrntEnd_stk').val(Result[43][0]);
                $('#txt_asstLoc_stk').val(Result[44]);
                $('#assState_stk').val(Result[45]);
                //$('#assoUs_stk').val(Result[46]);
                //$('#asstLsd_stk').val(Result[47]);
                //$('#txt_hostname_stk').val(Result[57]);
                //$('#txt_servtag_stk').val(Result[58]);
                //$('#txt_model_stk').val(Result[59]);
                //$('#txt_manufact_stk').val(Result[37]);
                //$('#txt_operatingsy_stk').val(Result[61]);
                //$('#txt_servicepack_stk').val(Result[62]);
                //$('#txt_memory_stk').val(Result[63]);
                //$('#txt_vmemor_stk').val(Result[64]);
                //$('#txt_proManufa_stk').val(Result[65]);
                //$('#txt_clock_stk').val(Result[66]);
                //$('#txt_ipAddress_stk').val(Result[67]);
                //$('#txt_macAddr_stk').val(Result[68]);
                //$('#txt_nic_stk').val(Result[69]);
                //$('#txt_netw_stk').val(Result[70]);
                //$('#txt_defaultGate_stk').val(Result[71]);
                //$('#txt_dhc_stk').val(Result[72]);
                //$('#txt_dhcp').val(Result[73]);
                //$('#txt_hddModel_stk').val(Result[74]);
                //$('#txt_hddSerno_stk').val(Result[75]);
                //$('#txt_hddManu_stk').val(Result[76]);
                //$('#txt_hddCapacity_stk').val(Result[77]);
                //$('#txt_moniType_stk').val(Result[78]);
                //$('#txt_moniSerno_stk').val(Result[79]);
                //$('#txt_moniManu_stk').val(Result[80]);
                //$('#txt_moniResolution_stk').val(Result[81]);
                $('#txt_remarks_stk').val(Result[8]);
                $('#txt_i_model').val(Result[94]);
                $('#txt_i_prdtNme_assttag').val(Result[95]);
                $('#txt_i_host_nme').val(Result[96]);
                Result[97] = Result[97].split(" ");
                $('#txt_i_warret_stde').val(Result[97][0]);
                Result[102] = Result[102].split(" ");
                $('#txt_AgrmntDt_mov_in').val(Result[102][0]);
                $('#ddlcategory').val(Result[106]);
                $('#txt_criticality').val(Result[107]);
                // $('#txt_remarks_stk').val(Result[8]);


            } else if (Result[82] == 2) {
               
                $('#wo_bulk_movement').addClass('d-none');
                $('#wo_bulk_installation').addClass('d-none');
                $('#wo_installation').addClass('d-none');
                $('#wo_movement').removeClass('d-none');
                $('#wo_decommision').addClass('d-none');
                $('#wo_dispose').addClass('d-none');

                $('#txt_assetcode_mov').val(Result[83]);
                $('#txt_sernum_mov').val(Result[84]);
                $('#txt_prdt_nme_mov').val(Result[85]);
                $('#txt_mnfctr_mov').val(Result[86]);
                $('#txt_partnu_mov').val(Result[87]);
                $('#txt_wrnt_end_mov').val(Result[88]);
                $('#txt_remarks_stk').val(Result[8]);
                $('#txt_m_model').val(Result[89]);
                $('#txt_m_prdtNme_assttag').val(Result[104]);
                $('#txt_m_host_nme').val(Result[103]);
                Result[92] = Result[92].split(" ");
                $('#txt_m_warret_stde').val(Result[92][0]);
                $('#txt_remarks_mov').val(Result[8]);
                $('#txt_asst_mov_loc').val(Result[101]);

                //$('#txt_report_dte_mv').val(Result[92]);
                //$('#txt_report_nme_mv').val(Result[92]);
                //$('#txt_req_per_br_mv').val(Result[92]);
                //$('#txt_req_typ_mv').val(Result[92]);

                $('#txt_report_dte_mv').val(Result[2]);
                $('#txt_report_nme_mv').val(Result[3] + '/' + Result[4]);
                $('#txt_req_per_br_mv').val(Result[5] + '/' + Result[6]);
                $('#txt_req_typ_mv').val(Result[7]);

                if (Result[16] == 1) {
                    $('#emp_to').prop('checked', false);
                    $('#bch_to').prop('checked', true);
                    $('#dept_to').prop('checked', false);

                    $('#emp_bch_movto1').removeClass('d-none');
                    $('#emp_bch_movto2').removeClass('d-none');
                    $('#dept_movto2').addClass('d-none');

                   

                    $('#to_empid').val(Result[17]);
                    $('#to_empname').val(Result[18]);




                } else if (Result[16] == 2) {
                    $('#emp_to').prop('checked', true);
                    $('#bch_to').prop('checked', false);
                    $('#dept_to').prop('checked', false);


                    $('#emp_bch_movto1').removeClass('d-none');
                    $('#emp_bch_movto2').removeClass('d-none');
                    $('#dept_movto2').addClass('d-none');

                    //$('#to_empid').val(12);
                    //$('#to_empname').val(13);

                    $('#to_empid').val(Result[19]);
                    $('#to_empname').val(Result[20]);


                } else if (Result[16] == 3) {
                    $('#emp_to').prop('checked', false);
                    $('#bch_to').prop('checked', false);
                    $('#dept_to').prop('checked', true);




                    $('#emp_bch_movto1').addClass('d-none');
                    $('#emp_bch_movto2').addClass('d-none');
                    $('#dept_movto2').removeClass('d-none');



                    $('#movtodprt').val(Result[21]);
                    //$('#to_empname').val(Result[22]);
                };

                $('#txt_i_model').val(Result[89]);
                $('#txt_i_prdtNme_assttag').val(Result[90]);
                $('#txt_i_host_nme').val(Result[91]);
                $('#txt_i_warret_stde').val(Result[92]);
                $('#txt_i_warret_stde').val(Result[92]);
                $("#txt_AgrmntDt_mov").val(Result[102]);



            } else if (Result[82] == 3) {



                $('#txt_report_dte_dc').val(Result[2]);
                $('#txt_report_nme_dc').val(Result[3] + '/' + Result[4]);
                $('#txt_req_per_br_dc').val(Result[5] + '/' + Result[6]);
                $('#txt_req_typ_dc').val(Result[7]);

                $('#wo_bulk_movement').addClass('d-none');
                $('#wo_bulk_installation').addClass('d-none');
                $('#wo_installation').addClass('d-none');
                $('#wo_movement').addClass('d-none');
                $('#wo_decommision').removeClass('d-none');
                $('#wo_dispose').addClass('d-none');

                $('#txt_assetcode_dcmn').val(Result[83]);
                $('#txt_sernum_dcmn').val(Result[84]);
                $('#txt_prdt_nme_dcmn').val(Result[85]);
                $('#txt_mnfctr_dcmn').val(Result[86]);
                $('#txt_partnu_dcmn').val(Result[87]);
                $('#txt_wrnt_end_dcmn').val(Result[88]);
                $('#txt_remarks_dcmn').val(Result[8]);


                $('#txt_d_model').val(Result[89]);
                $('#txt_d_prdtNme_assttag').val(Result[104]);
                $('#txt_d_host_nme').val(Result[103]);
                $('#txt_d_warret_stde').val(Result[92]);
                $('#txt_asst_dec_loc').val(Result[101]);
                $("#txt_AgrmntDt_dcmn").val(Result[102]);

            } else if (Result[82] == 4) {

                $('#txt_report_dte_ds').val(Result[2]);
                $('#txt_report_nme_ds').val(Result[3] + '/' + Result[4]);
                $('#txt_req_per_br_ds').val(Result[5] + '/' + Result[6]);
                $('#txt_req_typ_ds').val(Result[7]);

                $('#wo_bulk_movement').addClass('d-none');
                $('#wo_bulk_installation').addClass('d-none');
                $('#wo_installation').addClass('d-none');
                $('#wo_movement').addClass('d-none');
                $('#wo_decommision').addClass('d-none');
                $('#wo_dispose').removeClass('d-none');


                $('#txt_assetcode_dsps').val(Result[84]);
                $('#txt_sernum_dsps').val(Result[85]);
                $('#txt_prdt_nme_dsps').val(Result[86]);
                $('#txt_mnfctr_dsps').val(Result[87]);
                $('#txt_partnu_dsps').val(Result[88]);
                $('#txt_wrnt_end_dsps').val(Result[89]);
                $('#txt_remarks_dsps').val(Result[90]);



                $('#txt_dc_model').val(Result[89]);
                $('#txt_dc_prdtNme_assttag').val(Result[104]);
                $('#txt_dc_host_nme').val(Result[103]);
                $('#txt_dc_warret_stde').val(Result[92]);

                $('#txt_asst_dis_loc').val(Result[101]);
                $("#txt_AgrmntDt_dsps").val(Result[102]);



            } else if (Result[82] == 5) {

                $('#wo_bulk_movement').addClass('d-none');
                $('#wo_bulk_installation').removeClass('d-none');
                $('#wo_installation').addClass('d-none');
                $('#wo_movement').addClass('d-none');
                $('#wo_decommision').addClass('d-none');
                $('#wo_dispose').addClass('d-none');

                $('#txt_report_bi_dte').val(Result[2]);
                $('#txt_report_bi_nme').val(Result[3] + '/' + Result[4]);
                $('#txt_req_per_bi_br').val(Result[5] + '/' + Result[6]);
                $('#txt_req_bi_typ').val(Result[7]);


                $('#ddlno_imac').val(Result[105]);
                Result[102] = Result[102].split(" ");
                $('#txt_AgrmntDt_bi').val(Result[102][0]);
                $('#bchid_bi').val(Result[5]);
                $('#bchname_bi').val(Result[6]);
                $('#txt_asst_bi_loc').val(Result[101]);
                $('#txt_remarks_bi_dsps').val(Result[8]);


            }

            else if (Result[82] == 6) {


                $('#wo_bulk_installation').addClass('d-none');
                $('#wo_bulk_movement').removeClass('d-none');
                $('#wo_installation').addClass('d-none');
                $('#wo_movement').addClass('d-none');
                $('#wo_decommision').addClass('d-none');
                $('#wo_dispose').addClass('d-none');



                $('#txt_report_mv_dte').val(Result[2]);
                $('#txt_report_mv_nme').val(Result[3] + '/' + Result[4]);
                $('#txt_req_per_mv_br').val(Result[5] + '/' + Result[6]);
                $('#txt_req_mv_typ').val(Result[7]);

                $('#ddlno_imac_mov').val(Result[105]);
                Result[102] = Result[102].split(" ");
                $('#txt_AgrmntDt_mv_bi').val(Result[102][0]);
                $('#bchid_br_mov').val(Result[5]);
                $('#bchname__br_mov').val(Result[6]);
                $('#txt_asst_Bmov_loc').val(Result[101]);
                $('#txt_remarks_Bmov').val(Result[8]);



            }


            if (Result[93] == 1) {

                $('#work123').removeClass('d-none');

            } else {

                $('#work123').addClass('d-none');

            }
                   
            //$('#txt_dc_model').val(Result[90]);
            //$('#txt_dc_prdtNme_assttag').val(Result[91]);
            //$('#txt_dc_host_nme').val(Result[92]);
            //$('#txt_dc_warret_stde').val(Result[93]);


            },
            error: function (Result) {



                alert(Result);
            }




        });

    
   



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
        url: "AssRitcapprv.aspx/SoluUpdDtl",
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
        url: "AssRitcapprv.aspx/SelectedAsstDTL",
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
    var yr=dt.getFullYear();
    $('#worklogtb').append('<tr><td>' + day + '</td>' +
        '<td>' + $("[id*=hdUserId]").val() + '</td>' +
        '<td>'+$("[id*=hdBrid]").val()+'</td>' +
        '<td>' + $('#wlogadd_summary').val()+'</td>' +
        '<td>' + $('#wlogadd_descript').val()+'</td>' +
        '<td>' + $('#txt_currentstatus').val()+ '</td>' +
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
    //alert(dt);
    //$('#worklogtb').empty();
    $('#wlogblk').empty();
    $('#wldv').show();
    $('#wlogblk').show();
    var InputString = dt;
    var Querystring = "GetAllWlog";
    $.ajax({
        type: "POST",
        contentType: "application/json; charset=utf-8",
        url: "AssRitcapprv.aspx/GtWlogTble",
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
                    $('#wlogblk').append('<div class="card border-success mb-1 bg-light rounded" style="max-width:100rem;">'+
                        ' <div class="card-body ">' +
                        '<div class= "text-right" > <span class="text-left">' + Result.d[i].Department + '&nbsp&nbsp&nbsp&nbsp</span> <span class="text-right">' + Result.d[i].Date + '</span></div >' +
                        ' <h5 class="card-title">' + Result.d[i].Ename + ' <h6>  ' + Result.d[i].Empcode + '</h6></h5>'+
                     //  '<p class="card-text" style="max-height:300px;overflow-y:scroll;">Sumnmary :' + Result.d[i].Summary + '</br> Description  :' + Result.d[i].Description + '</p>' +
                        '<label for="">Summary : <span class="text-danger mt-0"></span></label>'+'<br/>' +
                        '<textarea id="' + 's' + i + '" class=" form-control mt-0" rows="2" style="width:100%;background-color:white;" name="Summary" onclick="" readonly>' + Result.d[i].Summary + '</textarea >' + '<br/>' +
                        '<label for="">Description : <span class="text-danger mt-0"></span></label>' +'<br/>'+
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
            alert(Result);
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
         
    } else if(tempwlog==0){


        ModelPopWarning("Before Making Changes In Tickets Please Add Change Details In Worklog ");
    }

   
    else if (global_tickno == "") {
        ModelPopWarning("Please select Ticket no");
        return false;
    }

    else {
        if ($('#ddlstatus option:selected').val() == -1) {
 
            input = global_tickno + "¥" + curr_status_id + "¥" + $("#txt_solution").val() + "¥" + ""/*$("[id*=hdUserId]").val()*/+ "¥" + Changed_bin + "¥" + $("#txt_reason_fr_err").val();
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
                url: "AssRitcapprv.aspx/confirmview",
                data: "{QueryString:'" + QueryString + "',input : '" + input + "'}",
                dataType: "json",
                success: function (Result) {
                     Result = Result.d;
                    alert(Result);
                    window.open('AssRitcapprv.aspx', '_self');

                },

                error: function (Result) {
                    alert(Result);
                }
            });

        }
    
    
}

function stssel() {
    //if ($('#ddlstatus option:selected').val() == 6 || $('#ddlstatus option:selected').val() == 5) {

    //    $("#stsdiv").removeClass('d-none');
    //    $("#stsdiv").show();
    //    $("#reason_fr_err").show();
    //    $("#reason_fr_err").removeClass('d-none');
    //    $("#txt_solution").val("");
    //    $('#txt_reason_fr_err').val("");
    //    $("#txt_solution").attr('readonly',false);
    //    $("#txt_reason_fr_err").attr('readonly',false);
    //}
    //else {
    //    $("#reason_fr_err").addClass('d-none');
    //    $("#reason_fr_err").hide();
    //    $("#stsdiv").addClass('d-none');
    //    $("#stsdiv").hide();
    //    $("#txt_solution").attr('readonly', true);
    //    $("#txt_reason_fr_err").attr('readonly', true);

    //}

    //------------------------------------------------


    if ($('#ddlcurrsts option:selected').val() == 6 || $('#ddlcurrsts option:selected').val() == 5) {

        $("#stsdiv").removeClass('d-none');
        $("#stsdiv").show();
        $("#reason_fr_err").show();
        $("#reason_fr_err").removeClass('d-none');
        $("#txt_solution").val("");
        $('#txt_reason_fr_err').val("");
        $("#txt_solution").attr('readonly', false);
        $("#txt_reason_fr_err").attr('readonly', false);
    }
    else {
        $("#reason_fr_err").addClass('d-none');
        $("#reason_fr_err").hide();
        $("#stsdiv").addClass('d-none');
        $("#stsdiv").hide();
        $("#txt_solution").attr('readonly', true);
        $("#txt_reason_fr_err").attr('readonly', true);

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
        url: "AssRitcapprv.aspx/GetapprvTbl",
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
        url: "AssRitcapprv.aspx/GetapprvPerTbl",
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
        url: "AssRitcapprv.aspx/softwarelist",
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



function changsts() {

    var intPrnc;

    intPrnc = "GetStatus";

    $.ajax({
        type: "post",
        contentType: "application/json; charset=utf-8",
        url: "AssRitcapprv.aspx/Getstatuslst",
        data: "{QueryString:'" + intPrnc + "'}",
        dataType: "json",
        success: function (Result) {
            $('#ddlcurrsts').empty();
            $('#ddlcurrsts').append($("<option></option>").val("-1").html("Select status "));
            $.each(Result.d, function (data, value) {

                $('#ddlcurrsts').append($("<option></option>").val(value.Id).html(value.Name));


            })
        },
        error: function (Result) {
            alert(Result.d);
        }
    });
}


function getassttyp() {

    var QueryString = "GetAssettype";
    $.ajax({
        type: "POST",
        contentType: "application/json; charset=utf-8",
        url: "AssRitcapprv.aspx/getRequestype",
        data: "{QueryString:'" + QueryString + "'}",
        dataType: "json",
        success: function (Result) {
            $('#select_type_stk').empty();
            //$('#select_type_stk').append($("<option></option>").val("-1").html("Select Request Type "));
            $.each(Result.d, function (data, value) {
                $('#select_type_stk').append($("<option></option>").val(value.ReqId).html(value.ReqName));
            })
        },
        error: function (Result) {
            alert('GetRequestType()' + Result.d);
        }

    });
    return;
}
//------new urgency


function Getassetstate() {

    var QueryString = "GetAssetSTATE";
    $.ajax({
        type: "POST",
        contentType: "application/json; charset=utf-8",
        url: "AssRitcapprv.aspx/getUrgeny",
        data: "{QueryString:'" + QueryString + "'}",
        dataType: "json",
        success: function (Result) {
            $('#assState_stk').empty();
            $('#assState_stk').append($("<option></option>").val("-1").html("Select Asset State "));
            $.each(Result.d, function (data, value) {
                $('#assState_stk').append($("<option></option>").val(value.PrioId).html(value.PrioName));
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
//        url: "AssRitcapprv.aspx/getINCaty",
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
        url: "AssRitcapprv.aspx/getSubCgory",
        data: "{QueryString:'" + QueryStr + "'}",
        dataType: "json",
        success: function (Result) {
            $('#ddlsubcat').empty();
           $('#ddlsubcat').append($("<option></option>").val("-1").html("Select Sub Category "));
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


//----get severity---

function GetSeverity() {

    var QueryString = "GetSeverity";
    $.ajax({
        type: "POST",
        contentType: "application/json; charset=utf-8",
        url: "AssRitcapprv.aspx/getSevty",
        data: "{QueryString:'" + QueryString + "'}",
        dataType: "json",
        success: function (Result) {
            $('#ddlchsev').empty();
            $('#ddlchsev').append($("<option></option>").val("-1").html("Select Severity"));
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
        url: "AssRitcapprv.aspx/getImpa",
        data: "{QueryString:'" + QueryStr + "'}",
        dataType: "json",
        success: function (Result) {
            $('#ddlimp').empty();
            $('#ddlimp').append($("<option></option>").val("-1").html("Select Impact "));
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
        url: "AssRitcapprv.aspx/getINCaty",
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





function Getlistofbin() {

    var QueryString = "GetINCategory";
    $.ajax({
        type: "POST",
        contentType: "application/json; charset=utf-8",
        url: "AssRitcapprv.aspx/getINCaty",
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



function GetRequestType() {

    var QueryString = "ServiceCatlogDtl";
    $.ajax({
        type: "POST",
        contentType: "application/json; charset=utf-8",
        url: "ServiceRequest.aspx/getRequesttype",
        data: "{QueryString:'" + QueryString + "'}",
        dataType: "json",
        success: function (Result) {
            $('#ddlReqType').empty();
            $('#ddlReqType').append($("<option></option>").val("-1").html("Select Request Type "));
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


function changesubmit() {
    var temp = ($('#txt_reason_fr_err').val()).trim();
    var temp1 = ($('#txt_solution').val()).trim();

    var asset;
    var cur_sts;
    var input;

    var QueryString;

    var res = global_tickno.substring(0, 2);
    if (res == 'IN') {
        QueryString = "updateincidentdtl";
    }
    else if (res == 'SR') {
        QueryString = "updateSRdtl";
    }
    if (($('#ddlcurrsts option:selected').val() == 5 || $('#ddlcurrsts option:selected').val() == 6) && temp == "") {

        ModelPopWarning("Please Enter Reason For Issue...");

  } else if (($('#ddlcurrsts option:selected').val() == 5 || $('#ddlcurrsts option:selected').val() == 6) && temp1 == "") {
        ModelPopWarning("Please Enter Solution...");

    } else if (tempwlog == 0) {


        ModelPopWarning("Before Making Changes In Tickets Please Add Change Details In Worklog ");
    } else if ($('#ddlcurrsts option:selected').val()==-1) {


        ModelPopWarning("Please Select Current Status ...");


    } else if ($('#ddlchsev option:selected').val() == -1) {


        ModelPopWarning("Please Select severity ...");


    } else if ($('#ddlchclass option:selected').val() == -1) {


        ModelPopWarning("Please Select Classification/incident category ...");


    } else if ($('#ddlchUrg option:selected').val() == -1) {


        ModelPopWarning("Please Select urgency/priority category ...");


    } else if ($('#ddlsubcat option:selected').val() == -1) {


        ModelPopWarning("Please Select subcategory ...");


    } else if ($('#ddlReqType option:selected').val() == -1&& (res=='SR')) {


        ModelPopWarning("Please Select Request Type ...");


    } else if ($('#ddlccurbin option:selected').val() == -1) {


        ModelPopWarning("Please Select Current Bin ...");


    }



    else if (global_tickno == "") {
        ModelPopWarning("Please select Ticket no");
        return false;
    }

    else {
        //if ($('#ddlstatus option:selected').val() == -1) {

        //    input = global_tickno + "¥" + curr_status_id + "¥" + $("#txt_solution").val() + "¥" + ""/*$("[id*=hdUserId]").val()*/ + "¥" + Changed_bin + "¥" + $("#txt_reason_fr_err").val();
        //}
        

      if (global_tickno.substring(0, 2) == 'IN') {
                //            1                        2                                            3                                           4                                          5
                input = global_tickno + "¥" + $("#ddlcurrsts option:selected").val() + "¥" + $("#ddlimp option:selected").val() + "¥" + $("#ddlchsev option:selected").val() + "¥" + $("#ddlchclass option:selected").val()
//                                 6                                            7                                                  8
                    + "¥" + $("#ddlchUrg option:selected").val() + "¥" + $("#ddlsubcat option:selected").val() + "¥" + $("#ddlccurbin option:selected").val()
//                                 9                                    10                                          11
                    + "¥" + $("#txt_impactdetails").val() + "¥" + $("#txt_subject").val() + "¥" + $("#txt_description").val()
//                                      12
                    + "¥" + $("#txt_impci").val()
//                                13                                     14                                   15
                    + "¥" + $("#txt_solution").val() + "¥" + $("#txt_reason_fr_err").val() + "¥" + $("[id*=hdUserId]").val();



      } else if (global_tickno.substring(0, 2) == 'SR'){
   //                           1                         2                                                                                              
          input = global_tickno + "¥" + $("#ddlcurrsts option:selected").val()
//                                        3                                       4                                         5
              + "¥" + $("#ddlchUrg option:selected").val() + "¥" + $("#ddlReqType option:selected").val() + "¥"  + $("#ddlccurbin option:selected").val()
//                                   6                                   7                 
                    + "¥" + $("#txt_subject").val() + "¥" + $("#txt_description").val()
//                                       8
                    + "¥" + $("#txt_impci").val()
//                                    9                              10                                 11
                    + "¥" + $("#txt_solution").val() + "¥" + $("#txt_reason_fr_err").val() + "¥"+$("[id*=hdUserId]").val(); 
      }

      if (global_tickno.substring(0, 2) == 'IN' && $("#ddlsubcat option:selected").val() == -1) {

          alert('Please select Sub Category');
      } else {

          $.ajax({
              type: "POST",
              contentType: "application/json; charset=utf-8",
              url: "AssRitcapprv.aspx/confirmview",
              data: "{QueryString:'" + QueryString + "',input : '" + input + "'}",
              dataType: "json",
              success: function (Result) {
                  Result = Result.d;
                  window.open('AssRitcapprv.aspx', '_self');

              },

              error: function (Result) {
                  alert(Result);
              }
          });
      }

    }


}



//$('.checked input:checkbox').click(function () {
//    $('.checked input:checkbox').not(this).prop('checked', false);
//});  



function checkedd(k) {


    $('.checked').prop('checked', false);
    $('#' + k + '').prop('checked', true);

    if ($('#chkch_bin').prop('checked') == true) {

        $('#div_imac').removeClass('d-none');
        $('#div_apprv_reason').addClass('d-none');
        $('#div_rej_reason').addClass('d-none');
    } else if ($('#chk_apprv').prop('checked') == true) {

        $('#div_imac').addClass('d-none');
        $('#div_apprv_reason').removeClass('d-none');
        $('#div_rej_reason').addClass('d-none');

    } else if ($('#chk_rej').prop('checked') == true) {

        $('#div_imac').addClass('d-none');
        $('#div_apprv_reason').addClass('d-none');
        $('#div_rej_reason').removeClass('d-none');


    }
}





function GetimacBin() {

    var QueryString = "get_imac_bin";
    $.ajax({
        type: "POST",
        contentType: "application/json; charset=utf-8",
        url: "AssRitcapprv.aspx/getimcbin",
        data: "{QueryString:'" + QueryString + "'}",
        dataType: "json",
        success: function (Result) {
            $('#ddl_imac').empty();
            $('#ddl_imac').append($("<option></option>").val("-1").html("Select Imac Bin "));
            $.each(Result.d, function (data, value) {
                $('#ddl_imac').append($("<option></option>").val(value.INCId).html(value.INCName));
            })
        },
        error: function (Result) {
            alert('Getimacbin()' + Result.d);
        }

    });

}


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






function imacsubmit() {

    var inputstring;


    if ($('#chkch_bin').prop('checked') == true) {

        inputstring = global_tickno + "¥" + 1 + "¥" + $('#ddl_imac option:selected').val();

    } else if ($('#chk_apprv').prop('checked') == true) {




    } else if ($('#chk_rej').prop('checked') == true) {



    }

    alert(inputstring);





}

//------------------------------------------asssritcapprvsubmit function--------------------------------------
function submitwo() {
    var app=0;
    var employee;
    var branch;
    var department;
    var assign_to;
    var input;
    var fileName = 1;
    var hostname;
    var asset_tag;
   
    //var pcost = $('#txt_prchCost_stk').val().split('.');

    if (tempwlog == 1) {


        var op = $('#select_type_stk option:selected').text();

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

        if ($('#emp_stk').prop('checked') == true) {
            department = "";
            branch = "";
            employee = $('#empbchstk_id').val();
            assign_to = 2;
        } else if ($('#bch_stk').prop('checked') == true) {
            branch = $('#empbchstk_id').val();
            assign_to = 1;
            employee = "";
            department = "";

        } else if ($('#dept_stk').prop('checked') == true) {
            branch = "";
            employee = "";
            department = $('#stkdprt option:selected').val();
            assign_to = 3;
        }

        if ($('#chkch_bin').prop('checked') == true) {







            if (imac_typ == 1) {//installation


                if ($('#emp_stk').prop('checked') == false && $('#bch_stk').prop('checked') == false && $('#dept_stk').prop('checked') == false) {

                    ModelPopWarning('Please Select Assign to Option..');
                }
                else if (($('#emp_stk').prop('checked') == true || $('#bch_stk').prop('checked') == true) && $('#empbchstk_id').val().trim() == '') {



                    ModelPopWarning('Please Serarch Assign to with Employeecode or Branch id..');

                } else if ($('#dept_stk').prop('checked') == true && $('#stkdprt option:selected').val()==-1) {

                    ModelPopWarning('Please Select Department..');

                }
                else if ($('#select_type_stk option:selected').val() == -1) {


                    ModelPopWarning('Please Select Asset Type');

                }
                //else if ($('#txt_name_stk').val().trim() == "") {


                //    ModelPopWarning('Please Enter Asset Name');
                //} else if ($('#txt_prchCost_stk').val().trim() == "") {

                //    ModelPopWarning('Please Enter Purchase Cost');
                //} else if (pcost[0].length > 8) {

                //    ModelPopWarning('Purchase Cost Exceeded The Limit');
                //}

                //else if ($('#txt_purchdt_stk').val().trim() == "") {


                //    ModelPopWarning('Please Enter Purchase Date..');
                //} 
                else if ($('#txt_sernum_stk').val().trim() == "") {

                    ModelPopWarning('Please Enter serialnumber..');
                } else if ($('#txt_i_model').val().trim() == "") {

                    ModelPopWarning('Please Enter Model..');
                } else if ($('#txt_i_prdtNme_assttag').val().trim() == "") {

                    ModelPopWarning('Please Enter Asset Tag..');
                } else if ($('#txt_i_host_nme').val().trim() == "") {


                    ModelPopWarning('Please Entr Host Name..');
                } else if ($('#txt_i_warret_stde').val().trim() == "") {


                    ModelPopWarning('Enter Warrenty Start date..');

                } else if ($('#txt_wrntEnd_stk').val().trim() == "") {


                    ModelPopWarning('Please Enter Warrenty Expiry date.. ');

                } else if ($('#assState_stk option:selected').val() == -1) {


                    ModelPopWarning('Please Select Asset State..');

                }
                //else if ($('#assoUs_stk option:selected').val() == 0) {

                //    ModelPopWarning('Please Select Associated User asset..');

                //} else if ($('#asstLsd_stk option:selected').val() == 0) {

                //    ModelPopWarning('Please Select Asset Leased or Not Option..');

                //}

                else if ($('#txt_asstLoc_stk').val().trim() == "") {

                    ModelPopWarning('Please Enter Asset Location Address..');

                } else if ($('#txt_remarks_stk').val().trim() == "") {

                    ModelPopWarning('Please Enter Remarks..');
                }
                else {




                    app = 1;
                //    //   1            2                      3                            4                                                   5                                   6                                   7                                    8                                   9                                  10                                 11                                   12                                  13                                   14                                     15                                        16                                               17                                   18                                      19                                20                                       21                                     22                                 23

                //    input = 1 + "¥" + global_tickno + "¥" + imac_typ + "¥" + $('#select_type_stk option:selected').val() + "¥" + $("#txt_name_stk").val() + "¥" + $("#txt_prdtTyp_stk").val() + "¥" + $("#txt_prdtNme_stk").val() + "¥" + $("#txt_mnfctr_stk").val() + "¥" + $("#txt_partnu_stk").val() + "¥" + $("#txt_macAddrs1_stk").val() + "¥" + $("#txt_prchCost_stk").val() + "¥" + $("#txt_purchdt_stk").val() + "¥" + $("#txt_sernum_stk").val() + "¥" + $("#txt_wrntEnd_stk").val() + "¥" + $("#txt_asstLoc_stk").val() + "¥" + $('#assState_stk option:selected').val() + "¥" + $('#assoUs_stk option:selected').val() + "¥" + $('#asstLsd_stk option:selected').val() + "¥" + $("#txt_hostname_stk").val() + "¥" + $("#txt_servtag_stk").val() + "¥" + $("#txt_model_stk").val() + "¥" + $("#txt_manufact_stk").val() + "¥" + $("#txt_operatingsy_stk").val()
                //        //               24                                      25                                    26                             27                                  28                                    29                                  30                             31                                  32                                  33                                  34                                  35                                   36                                   37                                     38                                   39                                 40                                        41                                          42                     43                                            44                               45                         46               47             48                49               50         --        51                             
                //        + "¥" + $("#txt_servicepack_stk").val() + "¥" + $("#txt_memory_stk").val() + "¥" + $("#txt_vmemor_stk").val() + "¥" + $("#txt_proManufa_stk").val() + "¥" + $("#txt_clock_stk").val() + "¥" + $("#txt_cores_stk").val() + "¥" + $("#txt_ipAddress_stk").val() + "¥" + $("#txt_macAddr_stk").val() + "¥" + $("#txt_nic_stk").val() + "¥" + $("#txt_netw_stk").val() + "¥" + $("#txt_defaultGate_stk").val() + "¥" + $("#txt_dhcp").val() + "¥" + $("#txt_hddModel_stk").val() + "¥" + $("#txt_hddSerno_stk").val() + "¥" + $("#txt_hddManu_stk").val() + "¥" + $("#txt_hddCapacity_stk").val() + "¥" + $("#txt_moniType_stk").val() + "¥" + $("#txt_moniSerno_stk").val() + "¥" + $("#txt_moniManu_stk").val() + "¥" + $("#txt_moniResolution_stk").val() + "¥" + $("#txt_remarks_stk").val() + "¥" + $("[id*=hdUserId]").val() + "¥" + check + "¥" + assign_to + "¥" + employee + "¥" + department + "¥" + branch + "¥" + fileName
                //        //                      52                          53                                  54                                 55                                  56                                       57                         58                 59
                //        + "¥" + $("#txt_i_model").val() + "¥" + $("#txt_i_prdtNme_assttag").val() + "¥" + $("#txt_i_host_nme").val() + "¥" + $("#txt_i_warret_stde").val() + "¥" + global_tickno + "¥" +/* $('#ddl_imac option:selected').val() */0 + "¥" + 0 + "¥"+$('#txt_AgrmntDt_mov_in').val();
                    //
                   // --------------

                    //          1                2                  3                      4                                                     5                                6                                      7                                8                                        9
                        input = 1 + "¥" + global_tickno + "¥" + imac_typ + "¥" + $('#select_type_stk option:selected').val()  + "¥" + $("#txt_mnfctr_stk").val() + "¥" + $("#txt_sernum_stk").val() + "¥" + $("#txt_wrntEnd_stk").val() + "¥" + $("#txt_asstLoc_stk").val() + "¥" + $('#assState_stk option:selected').val()  
                   //                      10                                   11                         12                 13                  14                  15               16               17
                            + "¥" + $("#txt_remarks_stk").val() + "¥" + $("[id*=hdUserId]").val() + "¥" + /*check*/0 + "¥" + assign_to + "¥" + employee + "¥" + department + "¥" + branch + "¥" + fileName
                   //                            18                          19                                       20                                      21                               22                                                    23         24               25
                            + "¥" + $("#txt_i_model").val() + "¥" + $("#txt_i_prdtNme_assttag").val() + "¥" + $("#txt_i_host_nme").val() + "¥" + $("#txt_i_warret_stde").val() + "¥" + global_tickno + "¥" +/* $('#ddl_imac option:selected').val() */0 + "¥" + 0 + "¥" + $('#txt_AgrmntDt_mov_in').val()
                   //                        26                                              27
                            + "¥" + $('#ddlcategory option:selected').val() + "¥" + $('#txt_criticality').val();



                }
            } else if (imac_typ == 2) {

                hostname = $('#txt_m_host_nme').val();
                asset_tag = $('#txt_m_prdtNme_assttag').val();

                if ($('#emp_to').prop('checked') == true) {
                    department = "";
                    branch = "";
                    employee = $('#to_empid').val();
                    assign_to = 2;
                } else if ($('#bch_to').prop('checked') == true) {
                    department = "";
                    employee = "";
                    branch = $('#to_empid').val();
                    assign_to = 1;
                } else if ($('#dept_to').prop('checked') == true) {
                    branch = "";
                    employee = "";
                    department = $('#movtodprt option:selected').val();
                    assign_to = 3;
                }
                app = 1;
                //      1            2                      3                4               5               6                   7                  8                                           9                 10               11              12      
             //   input = 1 + "¥" + global_tickno + "¥" + imac_typ + "¥" + assign_to + "¥" + employee + "¥" + branch + "¥" + department + "¥" +/* $('#ddl_imac option:selected').val()*/0 + "¥" + hostname + "¥" + asset_tag + "¥" + 0 + "¥"+$('#txt_AgrmntDt_mov').val();
                //-------------------------------------------

                //      1            2                      3                4               5               6                   7                  8                                           9                 10               11              12      
                input = 1 + "¥" + global_tickno + "¥" + imac_typ + "¥" + assign_to + "¥" + employee + "¥" + branch + "¥" + department + "¥" +/* $('#ddl_imac option:selected').val()*/0
                    + "¥" + hostname + "¥" + asset_tag + "¥" + 0 + "¥" + $("#txt_remarks_mov").val() + "¥" + $('#txt_AgrmntDt_mov').val();


               


            } else if (imac_typ == 3) {
                asset_tag = $('#txt_d_prdtNme_assttag').val();
                hostname = $('#txt_d_host_nme').val();
                app = 1;
                //       1           2                        3                         4                                     5               6                7                    8                                            9
                input = 1 + "¥" + global_tickno + "¥" + imac_typ + "¥" + /*$('#ddl_imac option:selected').val() */0 + "¥" + hostname + "¥" + asset_tag + "¥" + 0 + "¥" + $("#txt_remarks_dcmn").val() + "¥"+$('#txt_AgrmntDt_dcmn').val();
            } else if (imac_typ == 4) {
                asset_tag = $('#txt_dc_prdtNme_assttag').val();
                hostname = $('#txt_dc_host_nme').val();

                app = 1;
                //      1           2                       3                             4                                  5                 6              7              8                                  9
                input = 1 + "¥" + global_tickno + "¥" + imac_typ + "¥" +/* $('#ddl_imac option:selected').val()*/0 + "¥" + hostname + "¥" + asset_tag + "¥" + 0 + "¥" + $("#txt_remarks_dsps").val() + "¥"+$('#txt_AgrmntDt_dsps').val();
            } else if (imac_typ == 5) {

                if ($('#ddlno_imac option:selected').val() == -1) {

                    ModelPopWarning('Please Select Number Of Installations');
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
                    //       1           2                      3                         4                                  5                                    6                              7                                 8                                               9                            10                                          11   
                    input = 1 + "¥" + global_tickno + "¥" + imac_typ + "¥" + $("[id*=hdUserId]").val() + "¥" + $("#txt_AgrmntDt_bi").val() + "¥" + $("#bchid_bi").val() + "¥" + $('#txt_asst_bi_loc').val() + "¥" + $("#txt_remarks_bi_dsps").val() + "¥" + $('#ddlno_imac option:selected').val() + "¥" + /*$('#ddl_imac option:selected').val()*/0 + "¥" + 0 ;
                }
            } else if (imac_typ == 6) {

                if ($('#ddlno_imac_mov option:selected').val() == -1) {

                    ModelPopWarning('Please Select Number Of Installations');
                } else if ($('#txt_AgrmntDt_mv_bi').val().trim() == "") {

                    ModelPopWarning('Please select Date Of Movement..');
                } else if ($('#bchid_br_mov').val().trim() == "") {

                    ModelPopWarning('Please Enter Branch Id..');
                } else if ($('#txt_asst_Bmov_loc').val().trim() == "") {

                    ModelPopWarning('Please Enter Asset Location..');
                } else if ($('#txt_remarks_Bmov').val().trim() == "") {

                    ModelPopWarning('Please Enter Remarks..');
                }
                else {

                    app = 1;
                    //       1           2                      3                         4                                  5                                    6                              7                                          8                                               9                            10                                             11 
                    input = 1 + "¥" + global_tickno + "¥" + imac_typ + "¥" + $("[id*=hdUserId]").val() + "¥" + $("#txt_AgrmntDt_mv_bi").val() + "¥" + $("#bchid_br_mov").val() + "¥" + $('#txt_asst_Bmov_loc').val() + "¥" + $("#txt_remarks_Bmov").val() + "¥" + $('#ddlno_imac_mov option:selected').val() + "¥" +/* $('#ddl_imac option:selected').val()*/ 0 + "¥" + 0 ;
                }
            }

        } else if ($('#chk_apprv').prop('checked') == true) {

            if (imac_typ == 1) {

                app = 1;
                ////   1            2                      3                            4                                                   5                                   6                                   7                                    8                                   9                                  10                                 11                                   12                                  13                                   14                                     15                                        16                                               17                                   18                                      19                                20                                       21                                     22                                 23

                //input = 2 + "¥" + global_tickno + "¥" + imac_typ + "¥" + $('#select_type_stk option:selected').val() + "¥" + $("#txt_name_stk").val() + "¥" + $("#txt_prdtTyp_stk").val() + "¥" + $("#txt_prdtNme_stk").val() + "¥" + $("#txt_mnfctr_stk").val() + "¥" + $("#txt_partnu_stk").val() + "¥" + $("#txt_macAddrs1_stk").val() + "¥" + $("#txt_prchCost_stk").val() + "¥" + $("#txt_purchdt_stk").val() + "¥" + $("#txt_sernum_stk").val() + "¥" + $("#txt_wrntEnd_stk").val() + "¥" + $("#txt_asstLoc_stk").val() + "¥" + $('#assState_stk option:selected').val() + "¥" + $('#assoUs_stk option:selected').val() + "¥" + $('#asstLsd_stk option:selected').val() + "¥" + $("#txt_hostname_stk").val() + "¥" + $("#txt_servtag_stk").val() + "¥" + $("#txt_model_stk").val() + "¥" + $("#txt_manufact_stk").val() + "¥" + $("#txt_operatingsy_stk").val()
                //    //               24                                      25                                    26                             27                                  28                                    29                                  30                             31                                  32                                  33                                  34                                  35                                   36                                   37                                     38                                   39                                 40                                        41                                          42                     43                                            44                               45                         46               47             48                49               50         --        51                             
                //    + "¥" + $("#txt_servicepack_stk").val() + "¥" + $("#txt_memory_stk").val() + "¥" + $("#txt_vmemor_stk").val() + "¥" + $("#txt_proManufa_stk").val() + "¥" + $("#txt_clock_stk").val() + "¥" + $("#txt_cores_stk").val() + "¥" + $("#txt_ipAddress_stk").val() + "¥" + $("#txt_macAddr_stk").val() + "¥" + $("#txt_nic_stk").val() + "¥" + $("#txt_netw_stk").val() + "¥" + $("#txt_defaultGate_stk").val() + "¥" + $("#txt_dhcp").val() + "¥" + $("#txt_hddModel_stk").val() + "¥" + $("#txt_hddSerno_stk").val() + "¥" + $("#txt_hddManu_stk").val() + "¥" + $("#txt_hddCapacity_stk").val() + "¥" + $("#txt_moniType_stk").val() + "¥" + $("#txt_moniSerno_stk").val() + "¥" + $("#txt_moniManu_stk").val() + "¥" + $("#txt_moniResolution_stk").val() + "¥" + $("#txt_remarks_stk").val() + "¥" + $("[id*=hdUserId]").val() + "¥" + check + "¥" + assign_to + "¥" + employee + "¥" + department + "¥" + branch + "¥" + fileName
                //    //                      52                          53                                  54                                 55                                  56                                       57                                         58                      59

                //    + "¥" + $("#txt_i_model").val() + "¥" + $("#txt_i_prdtNme_assttag").val() + "¥" + $("#txt_i_host_nme").val() + "¥" + $("#txt_i_warret_stde").val() + "¥" + global_tickno + "¥" + /*$('#ddl_imac option:selected').val()*/0 + "¥" + $('#txt_apprv_reason').val() + "¥"+$('#txt_AgrmntDt_mov_in').val();


                //          1                2                  3                      4                                                     5                                6                                      7                                8                                        9
                input = 2 + "¥" + global_tickno + "¥" + imac_typ + "¥" + $('#select_type_stk option:selected').val() + "¥" + $("#txt_mnfctr_stk").val() + "¥" + $("#txt_sernum_stk").val() + "¥" + $("#txt_wrntEnd_stk").val() + "¥" + $("#txt_asstLoc_stk").val() + "¥" + $('#assState_stk option:selected').val()
                    //                      10                                   11                         12                 13                  14                  15               16               17
                    + "¥" + $("#txt_remarks_stk").val() + "¥" + $("[id*=hdUserId]").val() + "¥" + /*check*/0 + "¥" + assign_to + "¥" + employee + "¥" + department + "¥" + branch + "¥" + fileName
                    //                            18                          19                                       20                                      21                      22                                                    23         24               25                                 26
                    + "¥" + $("#txt_i_model").val() + "¥" + $("#txt_i_prdtNme_assttag").val() + "¥" + $("#txt_i_host_nme").val() + "¥" + $("#txt_i_warret_stde").val() + "¥" + global_tickno + "¥" +/* $('#ddl_imac option:selected').val() */0 + "¥" + 0 + "¥" + $('#txt_AgrmntDt_mov_in').val() + "¥" + $('#txt_apprv_reason').val()
 
                  //                    27                                          28
                    + "¥" + $('#ddlcategory option:selected').val() + "¥" + $('#txt_criticality').val();;





            } else if (imac_typ == 2) {
                hostname = $('#txt_m_host_nme').val();
                asset_tag = $('#txt_m_prdtNme_assttag').val();

                if ($('#emp_to').prop('checked') == true) {
                    employee = $('#to_empid').val();
                    assign_to = 2;
                    branch = "";
                    department = "";
                } else if ($('#bch_to').prop('checked') == true) {
                    employee = "";
                    branch = $('#to_empid').val();
                    department = "";
                    assign_to = 1;
                } else if ($('#dept_to').prop('checked') == true) {
                    employee = "";
                    branch = "";
                    department = $('#movtodprt option:selected').val();
                    assign_to = 3;
                }
                app = 1;
                //      1              2                       3             4                5                  6                  7                  8                                                   9                               10                                 11                12                      13
                input = 2 + "¥" + global_tickno + "¥" + imac_typ + "¥" + assign_to + "¥" + employee + "¥" + branch + "¥" + department + "¥" + /*$('#ddl_imac option:selected').val()*/ 0 + "¥" + $('#txt_apprv_reason').val() + "¥" + $('#txt_asst_mov_loc').val() + "¥" + hostname + "¥" + asset_tag +"¥"+$('#txt_AgrmntDt_mov').val();

            }
            else if (imac_typ == 3) {
                asset_tag = $('#txt_d_prdtNme_assttag').val();
                hostname = $('#txt_d_host_nme').val();
                app = 1;
                //     1             2                        3                       4                                      5                                        6                                7                 8                         9
                input = 2 + "¥" + global_tickno + "¥" + imac_typ + "¥" +/* $('#ddl_imac option:selected').val() */0 + "¥" + $('#txt_apprv_reason').val() + "¥" + $('#txt_asst_dec_loc').val() + "¥" + hostname + "¥" + asset_tag + "¥" + $('#txt_AgrmntDt_dcmn').val();

            } else if (imac_typ ==4) {

                asset_tag = $('#txt_dc_prdtNme_assttag').val();
                hostname = $('#txt_dc_host_nme').val();

                app = 1;
                //       1             2                   3                             4                                             5                              6                                 7                 8                             9
                input = 2 + "¥" + global_tickno + "¥" + imac_typ + "¥" +/* $('#ddl_imac option:selected').val()*/0 + "¥" + $('#txt_apprv_reason').val() + "¥" + $('#txt_asst_dis_loc').val() + "¥" + hostname + "¥" + asset_tag+ "¥" + $('#txt_AgrmntDt_dsps').val();
            } else if (imac_typ == 5) {

                app = 1;

                //      1               2                   3                   4                                5                                  6                               7                                    8                                              
                input = 2 + "¥" + global_tickno + "¥" + imac_typ + "¥" + $("[id*=hdUserId]").val() + "¥" + $("#txt_AgrmntDt_bi").val() + "¥" + $("#bchid_bi").val() + "¥" + $('#txt_asst_bi_loc').val() + "¥" + $("#txt_remarks_bi_dsps").val() 


//                                        9                                           10                                               11                                  12                                          13
                    + "¥" + $('#ddlno_imac option:selected').val() + "¥" +/* $('#ddl_imac option:selected').val()*/0 + "¥" + $('#txt_apprv_reason').val() + "¥" + $('#txt_AgrmntDt_bi').val() + "¥" + $('#txt_AgrmntDt_bi').val();

            }
            else if (imac_typ == 6) {

                app = 1;

                //      1               2                   3                   4                                5                                  6                               7                                    8              
                input = 2 + "¥" + global_tickno + "¥" + imac_typ + "¥" + $("[id*=hdUserId]").val() + "¥" + $("#txt_AgrmntDt_mv_bi").val() + "¥" + $("#bchid_br_mov").val() + "¥" + $('#txt_asst_Bmov_loc').val() + "¥" + $("#txt_remarks_Bmov").val()


                    //                                        9                                           10                                        11                       12
                    + "¥" + $('#ddlno_imac_mov option:selected').val() + "¥" + /*$('#ddl_imac option:selected').val()*/0 + "¥" + $('#txt_remarks_Bmov').val() + "¥"+$('#txt_AgrmntDt_mv_bi').val();

            }

            //  input = 2 + "¥" + global_tickno + "¥" + $('#txt_apprv_reason').val() ;

        } else if ($('#chk_rej').prop('checked') == true) {

            if (imac_typ == 1) {

                app = 1;
                //     1                     2          3                            4                             5

                input = 3+ "¥" + global_tickno + "¥" + imac_typ + "¥" + $('#txt_rej_reason').val() + "¥" + $("[id*=hdUserId]").val() ;
            } else if (imac_typ == 2) {
                app = 1;
                input = 3 + "¥" + global_tickno + "¥" + imac_typ + "¥" + $('#txt_rej_reason').val() + "¥" + $("[id*=hdUserId]").val() ;

            } else if (imac_typ == 3) {
                app = 1;
                input = 3 + "¥" + global_tickno + "¥" + imac_typ + "¥" + $('#txt_rej_reason').val() + "¥" + $("[id*=hdUserId]").val() ;
            } else if (imac_typ == 4) {
                app = 1;
                input = 3 + "¥" + global_tickno + "¥" + imac_typ  + "¥" + $('#txt_rej_reason').val() + "¥" + $("[id*=hdUserId]").val() ;
            } else if (imac_typ == 5) {
                app = 1;
                input = 3 + "¥" + global_tickno + "¥" + imac_typ + "¥" + $('#txt_rej_reason').val() + "¥" + $("[id*=hdUserId]").val() ;
            } else if (imac_typ == 6) {
                app = 1;
                input = 3 + "¥" + global_tickno + "¥" + imac_typ + "¥" + $('#txt_rej_reason').val() + "¥" + $("[id*=hdUserId]").val();
            }


        } else {


            ModelPopWarning('please select one of option "change bin","approve","reject"');

        }



        if (app == 1) {
            QueryString = "ass_ritc_apprv_conf";
            $.ajax({
                type: "POST",
                contentType: "application/json; charset=utf-8",
                url: "AssRitcapprv.aspx/confirm_submit",
                data: "{QueryString:'" + QueryString + "',input : '" + input + "'}",
                dataType: "json",
                success: function (Result) {
                    Result = Result.d;
                    alert(Result);
                    window.open('AssRitcapprv.aspx', '_self');

                },

                error: function (Result) {
                    alert(Result);
                }
            });
        }

    } else {


        ModelPopWarning('please add worklog before submit');
    }

}


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



function emp_bra_dep() {


    if ($('#emp_stk').prop('checked') == true) {
        $('#emp_bch_stk1').removeClass('d-none');
        $('#emp_bch_stk2').removeClass('d-none');
        $('#dept_stk2').addClass('d-none');


    } else if ($('#bch_stk').prop('checked') == true) {
        $('#emp_bch_stk1').removeClass('d-none');
        $('#emp_bch_stk2').removeClass('d-none');
        $('#dept_stk2').addClass('d-none');


    } else if ($('#dept_stk').prop('checked') == true) {

        $('#emp_bch_stk1').addClass('d-none');
        $('#emp_bch_stk2').addClass('d-none');
        $('#dept_stk2').removeClass('d-none');

    }



}


//function emp_bra_dep_mov() {

//    alert('enteredd to function');

//    if ($('#emp_to').prop('checked') == true) {
//        $('#emp_bch_movto1').removeClass('d-none');
//        $('#emp_bch_movto2').removeClass('d-none');
//        $('#movtodprt').addClass('d-none');


//    } else if ($('#bch_to').prop('checked') == true) {
//        $('#emp_bch_movto1').removeClass('d-none');
//        $('#emp_bch_movto2').removeClass('d-none');
//        $('#movtodprt').addClass('d-none');


//    } else if ($('#dept_to').prop('checked') == true) {

//        $('#emp_bch_movto1').addClass('d-none');
//        $('#emp_bch_movto2').addClass('d-none');
//        $('#movtodprt').removeClass('d-none');

//    }



//}

var check;
function STOCK1() {

    var app = 0;

    var pcost = $('#txt_prchCost_stk').val().split('.');

    debugger;


    var fileList = document.getElementById("FileUpload_wo").files;
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

           

            //if (temp == 0) {
            //    if ($("#branch").prop("checked") == true) {
            //        allocation = 1;

            //        if ($("#txt_branch").val() == "") {
            //            ModelPopWarning("Please enter branch id");

            //            return false;
            //        } else {


            //            branch = $("#txt_branch").val();

            //            k = 1;
            //        }

            //    }
            //    else if ($("#emp").prop("checked") == true) {
            //        allocation = 2;
            //        if ($("#txt_emp").val() == "") {
            //            ModelPopWarning("Please enter emp code");

            //            return false;
            //        } else {

            //            k = 1;
            //            branch = '';
            //        }

            //    }
            //    else if ($("#dep").prop("checked") == true) {
            //        allocation = 3;
            //        if ($("#ddldep").val() == "-1") {
            //            ModelPopWarning("Please select Department");

            //            return false;
            //        } else {

            //            k = 1;
            //            branch = '';

            //        }


            //        //} else {
            //        //    allocation = 2;
            //        //    department = $('#Brnchlst option:selected').val();


            //        //}
            //    }
            //    else if ($("#branch").prop("checked") == false && $("#emp").prop("checked") == false && $("#dep").prop("checked") == false) {


            //        alert('Please select one of option branch,employee,department');
            //    }

            //} else {

            //if ($('#Brnchlst option:selected').val() == -1) {

            //    alert('Please Select Branch');

            //} else {
            //    allocation = 1;
            //    branch = $('#Brnchlst option:selected').val();
            //    k = 1;

            //}




            var QueryString = "addstock_temp";


            //if ($("#radGYes").prop("checked") == true) {
            //    asset = 1;

            //}
            //else if ($("#radGNo").prop("checked") == true) {
            //    asset = 0;

            //}



            //if ($("#ddlasssttype option:selected").val() == "-1") {
            //    ModelPopWarning("Please Select Asset Type");
            //    //alert("Please Select Financial Type");
            //    return false;
            //}
            //else if (allocation == "") {
            //    ModelPopWarning("Please select Allocation To:");
            //    //alert("Please Enter bank Name");
            //    return false;
            //}
            //else if ($("#txt_assetname").val() == "") {
            //    ModelPopWarning("Please enter asset name");
            //    //alert("Please Enter bank Name");
            //    return false;
            //}
            //else if ($("#ddlassetstate").val() == "-1") {
            //    ModelPopWarning("Please select Asset state");
            //    //alert("Please Enter Branch Name");
            //    return false;
            //} else {


            //
            //if ($('#select_type_stk').val() == -1) {


            //    alert('Please Select Asset Type');
            //} else if ($('#txt_name_stk').val().trim() == "") {


            //    alert('Please Enter Asset Name');
            //} else if ($('#txt_prdtTyp_stk').val().trim() == "") {

            //    alert('Please Enter Product Type');
            //} else if ($('#txt_prdtNme_stk').val().trim() == "") {


            //    alert('Please Enter Product Name');
            //} else if ($('#txt_mnfctr_stk').val().trim() == "") {

            //    alert('Please Enter Manufacture Name');
            //} else if ($('#txt_partnu_stk').val().trim() == "") {

            //    alert('Please Enter Part Number..');
            //} else if ($('#txt_macAddrs1_stk').val().trim() == "") {

            //    alert('Please Enter Macaddress..');
            //} else if ($('#txt_prchCost_stk').val().trim() == "") {


            //    alert('Please Entr Purchase cost');
            //} else if ($('#txt_purchdt_stk').val().trim() == "") {


            //    alert('Purchase Date');
            //} else if ($('txt_sernum_stk').val().trim() == "") {


            //    alert('Please Enter Serial Nuumber');
            //} else if ($('#txt_model').val().trim() == "") {


            //    alert('Please Enter Model');
            //} else if ($('#txt_prdtNme_assttag').val().trim() == "") {

            //    alert('Please Enter Product Name')
            //} else if ($('#txt_host_nme').val().trim() == "") {

            //    alert('Please Enter Host Name');
            //} else if ($('#txt_warret_stde').val().trim() == "") {

            //    alert('Please Enter Warrenty Start Date');
            //} else if ($('#txt_wrntEnd_stk').val().trim() == "") {

            //    alert('Please Enter Warrenty End Date..');
            //} else if ($('#assState_stk option:selected').val().trim() == "") {

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

                } else if ($("#dept_stk").prop("checked")) {
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
                    alert('entered to department check..');

                    ModelPopWarning('Please Select Department..');

                }
                else if ($('#select_type_stk option:selected').val() == -1) {


                    ModelPopWarning('Please Select Asset Type');

                } else if ($('#txt_name_stk').val().trim() == "") {


                    ModelPopWarning('Please Enter Asset Name');
                } else if ($('#txt_prchCost_stk').val().trim() == "") {

                    ModelPopWarning('Please Enter Purchase Cost');
                } else if (pcost[0].length > 8) {

                    ModelPopWarning('Purchase Cost Exceeded The Limit');
                }

                else if ($('#txt_purchdt_stk').val().trim() == "") {


                    ModelPopWarning('Please Enter Purchase Date..');
                } else if ($('#txt_sernum_stk').val().trim() == "") {

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
                } else if ($('#assoUs_stk option:selected').val() == 0) {

                    ModelPopWarning('Please Select Associated User asset..');
                } else if ($('#asstLsd_stk option:selected').val() == 0) {

                    ModelPopWarning('Please Select Asset Leased or Not Option..');
                } else if ($('#txt_asstLoc_stk').val().trim() == "") {

                    ModelPopWarning('Please Enter Asset Location Address..');
                } else if ($('#txt_remarks_stk').val().trim() == "") {

                    ModelPopWarning('Please Enter Remarks..');
                }
                {
                    app = 1;
                    //                          1                                             2                                          3                                  4                                  5                                   6                                   7                                    8                                   9                                  10                                 11                                   12                                  13                                         14                                     15                                        16                                               17                                   18                                             19                         20                                       21                    
                    input = $('#ddlimacType option:selected').val() + "¥" + $('#select_type_stk option:selected').val() + "¥" + $("#txt_name_stk").val() + "¥" + $("#txt_prdtTyp_stk").val() + "¥" + $("#txt_prdtNme_stk").val() + "¥" + $("#txt_mnfctr_stk").val() + "¥" + $("#txt_partnu_stk").val() + "¥" + $("#txt_macAddrs1_stk").val() + "¥" + parseFloat($("#txt_prchCost_stk").val()).toFixed(2) + "¥" + $("#txt_purchdt_stk").val() + "¥" + $("#txt_sernum_stk").val() + "¥" + $("#txt_wrntEnd_stk").val() + "¥" + $("#txt_asstLoc_stk").val() + "¥" + $('#assState_stk option:selected').val() + "¥" + $('#assoUs_stk option:selected').val() + "¥" + $('#asstLsd_stk option:selected').val() + "¥" + $("#txt_hostname_stk").val() + "¥" + $("#txt_servtag_stk").val() + "¥" + $("#txt_model_stk").val() + "¥" + $("#txt_manufact_stk").val() + "¥" + $("#txt_operatingsy_stk").val()
                        //               22                                     23                              24                                      25                                    26                             27                                  28                                    29                                  30                             31                                  32                                  33                                  34                                  35                                   36                                   37                                     38                                   39                                 40                                        41                                          42                                    43                  44             45             46               47                 48              49                   50               
                        + "¥" + $("#txt_servicepack_stk").val() + "¥" + $("#txt_memory_stk").val() + "¥" + $("#txt_vmemor_stk").val() + "¥" + $("#txt_proManufa_stk").val() + "¥" + $("#txt_clock_stk").val() + "¥" + $("#txt_cores_stk").val() + "¥" + $("#txt_ipAddress_stk").val() + "¥" + $("#txt_macAddr_stk").val() + "¥" + $("#txt_nic_stk").val() + "¥" + $("#txt_netw_stk").val() + "¥" + $("#txt_defaultGate_stk").val() + "¥" + $("#txt_dhc_stk").val() + "¥" + $("#txt_hddModel_stk").val() + "¥" + $("#txt_hddSerno_stk").val() + "¥" + $("#txt_hddManu_stk").val() + "¥" + $("#txt_hddCapacity_stk").val() + "¥" + $("#txt_moniType_stk").val() + "¥" + $("#txt_moniSerno_stk").val() + "¥" + $("#txt_moniManu_stk").val() + "¥" + $("#txt_moniResolution_stk").val() + "¥" + $("#txt_remarks_stk").val() + "¥" + $("[id*=hdUserId]").val() + "¥" + check + "¥" + alloc2 + "¥" + assgnemp + "¥" + assgndept + "¥" + assgnbr + "¥" + global_tickno + "¥" + fileName
                        //                               51                            52                                    53                               54
                        + "¥" + $("#txt_model").val() + "¥" + $("#txt_prdtNme_assttag").val() + "¥" + $("#txt_host_nme").val() + "¥" + $("#txt_warret_stde").val();
                    alert(input);


                }

            } else if ($('#ddlimacType option:selected').val() == 2) {


                if ($("#emp_to").prop("checked")) {

                    alloc2 = 2;
                    assgnemp = $("#to_empid").val();
                }
                else if ($("#bch_to").prop("checked")) {

                    alloc2 = 1;
                    assgnbr = $("#to_empid").val();

                } else if ($("#dept_to").prop("checked")) {
                    alloc2 = 3;
                    assgndept = $("movtodprt option:selected").val();


                }

                app = 1;
                //                      1                                        2                                  3                               4                       5               6                7              8               9               10               11                          12                               13                               14
                input = $('#ddlimacType option:selected').val() + "¥" + $("[id*=hdUserId]").val() + "¥" + $("#txt_remarks_mov").val() + "¥" + frm_em_br_dep_type + "¥" + frm_bch + "¥" + frm_emp + "¥" + frm_dept + "¥" + alloc2 + "¥" + assgnbr + "¥" + assgnemp + "¥" + assgndept + "¥" + $("#txt_assetcode_mov").val() + "¥" + $("#txt_mn_asstLoc_stk").val() + "¥" + fileName;


            } else if ($('#ddlimacType option:selected').val() == 3) {
                app = 1;
                //                      1                                         2                                   3                               4                      5               6               7                           8                                     9                            10
                input = $('#ddlimacType option:selected').val() + "¥" + $("[id*=hdUserId]").val() + "¥" + $("#txt_remarks_dcmn").val() + "¥" + frm_em_br_dep_type + "¥" + frm_bch + "¥" + frm_emp + "¥" + frm_dept + "¥" + $("#txt_assetcode_dcmn").val() + "¥" + $("#txt_DD_asstLoc_stk").val() + "¥" + fileName;

            } else if ($('#ddlimacType option:selected').val() == 4) {
                app = 1;
                //                       1                                        2                                    3                                4                    5               6               7                        8                                   9                                 10
                input = $('#ddlimacType option:selected').val() + "¥" + $("[id*=hdUserId]").val() + "¥" + $("#txt_remarks_dsps").val() + "¥" + frm_em_br_dep_type + "¥" + frm_bch + "¥" + frm_emp + "¥" + frm_dept + "¥" + $("#txt_assetcode_dsps").val() + "¥" + $('#txt_dc_asstLoc_stk').val() + "¥" + fileName;
            }
            alert(input);
            if (app == 1) {
                $.ajax({
                    type: "POST",
                    contentType: "application/json; charset=utf-8",
                    url: "Binowner.aspx/confirmworkorder",
                    data: "{InputStr:'" + input + "',upload_file : '" + imageData + "'}",
                    dataType: "json",
                    success: function (Result) {

                        Result = Result.d;
                        alert('WORK ORDER NO  :' + Result);

                        window.open('Binowner.aspx', '_self');
                    },

                    error: function (Result) {
                        alert(Result);
                    }
                });

            }

        }
    }
}




function department_mst() {

    var intPrnc;

    intPrnc = "GetdepNAME";

    $.ajax({
        type: "post",
        contentType: "application/json; charset=utf-8",
        url: "AssRitcapprv.aspx/BinOwner",
        data: "{QueryString:'" + intPrnc + "'}",
        dataType: "json",
        success: function (Result) {
            $('#stkdprt').empty();
            $('#stkdprt').empty();
            $('#movtodprt').empty();
            //$('#ddlccurbin').append($("<option></option>").val("-1").html("Select bin owner "));
            $('#stkdprt').append($("<option></option>").val("-1").html("Select bin owner "));
            $('#movtodprt').append($("<option></option>").val("-1").html("Select bin owner "));
            $.each(Result.d, function (data, value) {
                $('#stkdprt').append($("<option></option>").val(value.Id).html(value.Name));
                $('#stkdprt').append($("<option></option>").val(value.Id).html(value.Name));
                $('#movtodprt').append($("<option></option>").val(value.Id).html(value.Name));
            })
        },
        error: function (Result) {
            alert(Result);
        }
    });
}




//--employee_branch search----



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
            url: "ServiceRequest.aspx/getFillempdetails",
            data: "{QueryString:'" + QueryString + "',input : '" + input + "'}",
            dataType: "json",
            success: function (Result) {

                if (Result.d.length > 0) {

                    Result = Result.d.split("^");


                    document.getElementById("empbchstk_nme").value = Result[0];

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




function movtoBTNcheck() {

    debugger;

    if ($("#emp_to").prop("checked") == true) {

        $('#dept_mov2').addClass('d-none');
        $('#emp_bch_movto1').removeClass('d-none');
        $('#emp_bch_movto2').removeClass('d-none');
        $('#dept_mov2').addClass('d-none');
        to_em_br_dep = 2;
        

    }
    else if ($("#bch_to").prop("checked") == true) {
        $('#emp_bch_movto1').removeClass('d-none');
        $('#emp_bch_movto2').removeClass('d-none');
        $('#dept_mov2').addClass('d-none');
        to_em_br_dep = 1;

    }
    else if ($("#dept_to").prop("checked") == true) {

        $('#emp_bch_movto1').addClass('d-none');
        $('#emp_bch_movto2').addClass('d-none');
        $('#dept_mov2').removeClass('d-none');
        Getdepartment();

        to_em_br_dep = 3;

    }
}





function movto_emp_br_dtl() {

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
            url: "assritcapprv.aspx/getbranchdt",
            data: "{QueryString:'" + QueryString + "',input : '" + input + "'}",
            dataType: "json",
            success: function (Result) {

                if (Result.d.length > 0) {

                    Result = Result.d.split("^");

                    $('#to_empname').val(Result[0]);
                   // document.getElementById("empbchstk_nme").value = Result[0];

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
            url: "assritcapprv.aspx/getbranchdt",
            data: "{QueryString:'" + QueryString + "',input : '" + input + "'}",
            dataType: "json",
            success: function (Result) {


                if (Result.d.length > 0) {

                    Result = Result.d.split("^");

                    $('#to_empname').val(Result[0]);
                  //  document.getElementById("empbchstk_nme").value = Result[0];

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





//-----------------------------sdsd


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


//------------criticality------


function getCriticality() {
    var category = $('#ddlcategory').val();
    var branch_id = $('#empbchstk_id').val();
    var asset = $('#ddlassettype').val();
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
            url: "AssRitcapprv.aspx/getcriticality",
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

