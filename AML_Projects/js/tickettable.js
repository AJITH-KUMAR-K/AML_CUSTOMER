function frmExit() {
    window.open("index.aspx", "_self");
}

$(window).on('load', function () {
    global_tickno = '';
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

    UserTview();
    statusshow();
    statsshow();
    BinOwnshow();
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
    debugger;

    $("#FileAttch").val("");
    // alert('WORKLOG VIEW'+dt);
    // $('#worklogtb').empty();glob
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
                        ' <p class="card-title crdstyle">' + Result.d[i].Name +'</p>' +
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

// file upload function


function fileupload(){

    


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

var global_tickno;
var row_added;
var curr_status_id;
var curr_status_name;
var temp;
var Changed_bin;


function mwlogadd() {
    debugger;
    
    if (($('#wlogadd_summary').val()).trim() == "") {
        alert('Please Enter Summary..');

    } else if (($('#wlogadd_descript').val()).trim() == "") {

        alert('Please Enter Description..');


    } else if (($('#wlogadd_summary').val().length > 3500)){


        alert('Summary Exceed the Limit Please Reduce The Content..!!');
    }
    //else if (($('#wlogadd_descript').val().length>3500)) {

    //    alert('Description Exceed The Data Limit Please Reduce The Content..!!');
    //}
    else {
        tempwlog = 1;
        // Addworklogtb();
        Wlog_Submit();
       // WorkLogView(global_tickno);
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
//        url: "ticketview.aspx/ticketstatus",
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
        url: "ticketview.aspx/BinOwner",
        data: "{QueryString:'" + intPrnc + "'}",
        dataType: "json",
        success: function (Result) {
            $('#ddlbin').empty();
            $('#ddlchBin').empty();
            $('#ddlbin').append($("<option></option>").val("-1").html("Select bin owner "));
            $('#ddlchBin').append($("<option></option>").val("-1").html("Select bin owner "));
            $.each(Result.d, function (data, value) {
                $('#ddlbin').append($("<option></option>").val(value.Id).html(value.Name));
                $('#ddlchBin').append($("<option></option>").val(value.Id).html(value.Name));
            })
        },
        error: function (Result) {
            alert(Result);
        }
    });
    return;
}





function BinOwnval(k) {


    var intPrnc;

    intPrnc = "GetBinownerR";

    $.ajax({
        type: "post",
        contentType: "application/json; charset=utf-8",
        url: "Binowner.aspx/BinOwner",
        data: "{QueryString:'" + intPrnc + "'}",
        dataType: "json",
        success: function (Result) {


            $.each(Result.d, function (data, value) {
                //$('#ddlbin').append($("<option></option>").val(value.Id).html(value.Name));
                //$('#ddlchBin').append($("<option></option>").val(value.Id).html(value.Name));
                if (k == value.Name) {

                    Changed_bin = (value.Id);

                }
            })
        },
        error: function (Result) {
            //alert(4);
        }
    });
}


function statusshow() {
    
    var intPrnc;
    
    intPrnc = "GetStatus";
   
    $.ajax({
        type: "post",
        contentType: "application/json; charset=utf-8",
        url: "ticketview.aspx/ticketstatus",
        data: "{QueryString:'" + intPrnc + "'}",
        dataType: "json",
        success: function (Result) {
            $('#ddlstatus').empty();
            $('#ddlstatus').append($("<option></option>").val("-1").html("Select status "));
            $.each(Result.d, function (data, value) {
                if (value.Id == 5 || value.Id == 6 || value.Id == 11) {
                    $('#ddlstatus').append($("<option></option>").val(value.Id).html(value.Name));
                    
                }
            })
        },
        error: function (Result) {
            alert(Result);
        }
    });
    return;
}
function Currstatsshow(curst) {
    var intPrnc;

    intPrnc = "GetStatus";

    $.ajax({
        type: "post",
        contentType: "application/json; charset=utf-8",
        url: "ticketview.aspx/ticketstatus",
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
    return;
}

function DocView(AttchSno) {

    ViewDocument(AttchSno);
}



function statsshow() {

    var intPrnc;

    intPrnc = "GetStatus";

    $.ajax({
        type: "post",
        contentType: "application/json; charset=utf-8",
        url: "ticketview.aspx/ticketstatus",
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
            alert(Result);
        }
    });
}


function AssignTo_dtl() {

    var intPrnc;

    intPrnc = "GetSupportTeam";

    $.ajax({
        type: "post",
        contentType: "application/json; charset=utf-8",
        url: "ticketview.aspx/SupportT",
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

    var Querystring ="GetUserTicket";

    var InputString = $("[id*=hdUserId]").val();

    $.ajax({
        type: "POST",
        contentType: "application/json; charset=utf-8",
        url: "ticketview.aspx/GetUserTble",
        data: "{QueryStr : '" + Querystring + "',input :'" + InputString + "'}",
        dataType: "json",
        success: function (Result) {
            if (Result.d.length > 0) {
                $('#tblticket').empty();
                $('#tblticket').append('<thead < tr ><td scope="col" class="col-md-1">NO</td><td scope="col">Incident/SR</td><td scope="col">Branch/dep</td><td scope="col">Summary</td> <td scope="col">Decription</td> <td scope="col">Rep.date</td> <td scope="col" class="col-md-1">Status</td></tr></thead><tbody>');
                for (var i = 0; i < Result.d.length; i++) {
                    k = i + 1;
                    $('#tblticket').append('<tr><td class="col-md-1">' + k + '</td>' +
                        '<td>' + Result.d[i].INName + '</td>' +
                        '<td>' + Result.d[i].Branchordep + '</td>' +
                        '<td>' + Result.d[i].Summary + '</td>' +
                        '<td>' + Result.d[i].Desc + '</td>' +
                        '<td>' + Result.d[i].Repdate + '</td>' +
                        '<td class="col-md-1">' + Result.d[i].Status + '</td>' +'</tr>');
                }
                $('#tblticket').append(
                    '</tbody>');
                return;
            } else {
                
                $('#tblticket').empty();
                $('#tblticket').hide();

            }
           
        },
        error: function (Result) {
            alert(Result.d);
        }
    });



}

function Tview() {
    var k;
    $('#TICK_TBL_NAME').text('SEARCHED TICKETS');
    $('#divtblPrincpleIntDtl').show();
    $('#tblticket').show();

    
    var txtsr = $("#txt_ticketno").val().toUpperCase();
    var txtsdate = $("#txt_rptfrm").val();
    var txtendate = $("#txt_rptto").val();
    var status = $("#ddlsts").val();
    var emp_br = $("#txt_emp_br").val();
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
    
    var InputString = txtsr + "¥" + txtsdate + "¥" + txtendate + "¥" + status + "¥" + $("[id*=hdUserId]").val() + "¥"+ emp_br ;
    var Querystring = "getusersearch";

        $.ajax({
            type: "POST",
            contentType: "application/json; charset=utf-8",
            url: "ticketview.aspx/GetTble",
            data: "{QueryStr : '" + Querystring + "',input :'" + InputString + "'}",
            dataType: "json",
            success: function (Result) {
               // alert(Result.d.length);
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
   
    if (reqtyp !="") {
        $("#hosupport").show();
        $("#hosupport").removeClass('d-none');
        $("#txt_callattenddte").datepicker('disable');
        //$('#txt_callattenddte').prop('readonly', true);
       // $('#txt_attendby').prop('readonly', false);
        //$('#txt_hostname').prop('readonly', false);
    } else if (reqtyp = "") {
        $("#txt_callattenddte").datepicker('disable');

        $("#hosupport").hide();
        $("#hosupport").addClass('d-none');
    }
}


function Wlog_Submit() {
    debugger;
        r = $('#worklogtb tr:last').index();
        r = r + 1;
    if ($('#ddlstatus option:selected').val() == -1) {
//                              1                           2                                 3                                                       4                                                     5                    6
        var InputString = global_tickno + "¥" + $("[id*=hdUserId]").val() + "¥" + $('#wlogadd_summary').val().replace(/[']/gi, '"') + "¥" + $('#wlogadd_descript').val().replace(/[']/gi, '"') + "¥" + curr_status_id + "¥" + CurrBin;

    }
    else {
 //                              1                              2                                3                                                     4                                                               5                               6 
        var InputString = global_tickno + "¥" + $("[id*=hdUserId]").val() + "¥" + $('#wlogadd_summary').val().replace(/[']/gi, '"') + "¥" + $('#wlogadd_descript').val().replace(/[']/gi, '"') + "¥" + $('#ddlstatus option:selected').val() + "¥" + CurrBin;
    }
        var Querystring = "savewlogdetails";



        $.ajax({
            type: "POST",
            contentType: "application/json; charset=utf-8",
            url: "ticketview.aspx/insertwlog",
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
        //Btncheck(row);
        $('#tblticket').removeEventListener(); 
       

       
    });
    
    

}

var CurrBin = '';
function shdetails(tn) {
    debugger;
    var SoI;
    var input=tn;
    var QueryString = "GetTview";
    SoI = tn.substring(0, 2);
    $("#ticket_show").text(tn);
    if (tn.substring(0, 2) == 'IN') {
        $("#div_Release").addClass('d-none');
        $("#div_Release").hide();
        $("#imac_dtl").addClass('d-none');
        $("#imac_dtl").hide();
        $("#hosupport").hide();
        $("#hosupport").addClass('d-none');
        $('#reason_fr_err').addClass('d-none');
        $('#impact_hidden_sr').show();
        $('#sr_fields').show();
        $('#SR_Sub').addClass('d-none');


        $.ajax({
            type: "POST",
            contentType: "application/json; charset=utf-8",
            url: "ticketview.aspx/getlinkdata",
            data: "{QueryString:'" + QueryString + "',input : '" + input + "'}",
            dataType: "json",
            success: function (Result) {
                Result = Result.d.split("^");
                CurrBin = Result[18];
                $('#txt_reportby').val(Result[0]);
                if (Result[1] == 1) {
                    $("#txt_affecttby").val('person');

                }
                else if (Result[1] == 0) {



                    $("#txt_affecttby").val('branch');
                }
                $('#txt_EMPNO').val(Result[2]);
                $('#txt_phno').val(Result[3]);
                $('#txt_ALTPHNO').val(Result[4]);
                $('#txt_severity').val(Result[5]);
                $('#txt_priority').val(Result[6]);
                $('#txt_impact').val(Result[7]);
                $('#txt_impactdetails').val(Result[8]);
                $('#txt_incategory').val(Result[9]);
                $('#txt_subject').val(Result[11]);
                $('#txt_description').val(Result[12]);
                $('#txt_impci').val(Result[13]);
                if (Result[13] == "") {
                    $("#div_Release").hide();
                    $("#div_Release").addClass('d-none');
                    $("#imac_dtl").addClass('d-none');
                    $("#hosupport").hide();
                    $("#hosupport").addClass('d-none');


                } else {
                    $('#div_Release').show();
                }
                $('#txt_EMPNAME').val(Result[14]);

                $('#txt_BR_DEP').val(Result[15]);


                
              
                $('#ddlstatus').val(-1);
               
               // $('#ddlchBin option:selected').val(Result[17]);
                Changed_bin = BinOwnval(Result[17]);
                $('#txt_Type').val(Result[10]);
                $('#txt_Bin').val(Result[17]);
              
                Currstatsshow(Result[16]);
                if (Result[16] == 5 || Result[16] == 6) {

                    solutionDtl(tn);

                } else {

                    $('#stsdiv').addClass('d-none');

                }

                if (Result[16] == '5' || Result[16] == '6') {
                    $('#wlog_add_rmv_buttons').hide();
                   // $('#txt_solution').hide();
                    $('#last_sumit_buttons').hide();
                    $('#ddl_sts_hidd').hide();
                    $('#ddl_chng_hidd').hide();
                    $('#reason_fr_err').removeClass('d-none');
                }
                //else if (Result[2] != $("[id*=hdUserId]").val() && Result[19] != $("[id*=hdUserId]").val()) {
                //    $('#wlog_add_rmv_buttons').hide();
                //    // $('#txt_solution').hide();
                //    $('#last_sumit_buttons').hide();
                //    $('#ddl_sts_hidd').hide();
                //    $('#ddl_chng_hidd').hide();
                //    $('#reason_fr_err').removeClass('d-none');
                //}
                else {
                    $('#ddl_sts_hidd').show();
                    $('#wlog_add_rmv_buttons').hide();
                    $('#wlog_add_rmv_buttons').show();
                    $('#txt_solution').show();
                    $('#last_sumit_buttons').show();
                    $('#ddl_chng_hidd').show();
                    $('#reason_fr_err').addClass('d-none');

                }
                if (Result[23] == "") {
                    $('#imac_dtl').hide();
                    //hosuSh(Result[23]);
                } else {
                    $('#imac_dtl').show();
                    //hosuSh(Result[23]);
                }

            },
            error: function (Result) {



                alert(Result);
            }




        });

    }
    else {
        $('#sr_fields').hide();
        $('#impact_hidden_sr').hide();
        $('#SR_Sub').removeClass('d-none');
        $.ajax({
            type: "POST",
            contentType: "application/json; charset=utf-8",
            url: "ticketview.aspx/getlinkdataSR",
            data: "{QueryString:'" + QueryString + "',input : '" + input + "'}",
            dataType: "json",
            success: function (Result) {
                 Result = Result.d.split("^");
                 CurrBin = Result[27];

                    $('#div_Release').show();
                    $('#txt_reportby').val(Result[0]);
                if (Result[1] == 1) {
                    $("#txt_affecttby").val('person');

                }
                else if (Result[1] == 0) {
                    $("#txt_affecttby").val('branch');
                }
                $('#txt_EMPNO').val(Result[2]);
                $('#txt_EMPNAME').val(Result[3]);
               $('#txt_BR_DEP').val(Result[11]);
                $('#txt_phno').val(Result[4]);
                $('#txt_ALTPHNO').val(Result[5]);
               // $('#txt_impact').val(Result[7]);
                //$('#txt_impactdetails').val(Result[8]);
                //$('#txt_severity').val(Result[5]);
                $('#txt_priority').val(Result[6]);
                $('#txt_subject').val(Result[7]);
                $('#txt_description').val(Result[8]);
                Changed_bin= BinOwnval(Result[12]);
               // Changed_bin = Result[12];
               // $('#txt_BR_DEP').val(Result[10]);
               // $('#txt_impci').val(Result[13]);
                $('#ddlstatus').val(-1);
                Currstatsshow(Result[9]);//
                $('#txt_Type').val(Result[24]);
                $('#txt_Bin').val(Result[25]);
                $('#txt_sr_sub').val(Result[26]);

                if (Result[9] == 5 || Result[9] == 6) {

                    solutionDtl(tn);


                } else {

                    $('#stsdiv').addClass('d-none');
                  //  $('#stsdiv').addClass('d-none');

                }
               //$('#txt_currentstatus').val(Result[9]);
                if (Result[13] == "") {
                    $('#div_Release').hide();
                    $("#div_Release").addClass('d-none');



                } else {
                    $("#div_Release").removeClass('d-none');
                    $('#div_Release').show();
                }
                 $('#txt_crfid').val(Result[13]);
                $('#txt_Parentapp').val(Result[14]);
                $('#txt_Tester').val(Result[15]);
                $('#txt_CodeReview').val(Result[16]);
                ///////
                
                if (Result[18] == 1) {
                    $('#txt_Imactyp').val('System Install');
                    $('#oldasset').hide();
                    $('#mvfrm').hide();
                    $('#mvto').hide();
                    $('#mvtoemp').hide();

                } else if (Result[18] == 2) {
                    $('#txt_Imactyp').val('System Replacement');
                    $('#oldasset').show();
                    $('#mvfrm').hide();
                    $('#mvto').hide();
                    $('#mvtoemp').hide();
                }
                else if (Result[18] == 3) {
                    $('#txt_Imactyp').val('Sytem Movement');
                    $('#oldasset').hide();
                    $('#mvfrm').show();
                    $('#mvto').show();
                    $('#mvtoemp').hide();
                }
                else if (Result[18] == 4) {
                    $('#oldasset').hide();
                    $('#mvfrm').hide();
                    $('#mvto').hide();
                    $('#mvtoemp').show();

                }
                $('#txt_oldAsstSerial').val(Result[19]);
                $('#txt_MovFrm').val(Result[20]);
                $('#txt_MovTo').val(Result[21]);
                $('#txt_MovToEmp').val(Result[22]);
                if (Result[23] == "") {
                    $('#imac_dtl').hide();
                    $("#imac_dtl").addClass('d-none');
                    hosuSh(Result[23]);
                } else {
                    $('#imac_dtl').show();
                    $("#imac_dtl").removeClass('d-none');
                    hosuSh(Result[23]);
                }
                $('#txt_UasstCod').val(Result[23])
                SelectedAsstDtl(Result[23]);

                if (tn.substring(0, 2) == 'SR') {
                    $('#sr_fields').hide();
                    $('#impact_hidden_sr').hide();
                }
                else {
                    $('#impact_hidden_sr').show();
                    $('#sr_fields').show();

                }
                if (Result[9] == '5' || Result[9] == '6') {
                    $('#wlog_add_rmv_buttons').hide();
                    //$('#txt_solution').hide();
                    $('#last_sumit_buttons').hide();
                    $('#ddl_sts_hidd').hide();
                    $('#ddlchBin').hide();
                    $('#reason_fr_err').removeClass('d-none');
                }
                else {
                    $('#ddl_sts_hidd').show();
                    $('#wlog_add_rmv_buttons').hide();
                    $('#wlog_add_rmv_buttons').show();
                    $('#txt_solution').show();
                    $('#last_sumit_buttons').show();
                    $('#ddlchBin').show();
                    $('#reason_fr_err').addClass('d-none');
                }

                WorkLogView(tn);
            },
            error: function (Result) {



                alert(Result);
            }




        });



    }



}
//function Btncheck(tkt) {
//    debugger;
//    $('#divCurBin').addClass('d-none');
//    $('#divCurBin2').removeClass('d-none');

//    debugger;
//    var user = $("[id*=hdUserId]").val();
//    //var txt = $("#txt_ticketno").val().toUpperCase();

//    if (tkt.substring(0, 2) == 'IN') {

//        var QueryStr = "GetOwnerbyIdIN";
//    }
//    else if (tkt.substring(0, 2) == 'SR') {

//        var QueryStr = "GetOwnerbyIdSR";
//    }
//    var InputString = user + "¥" + tkt;
//    $.ajax({
//        type: "POST",
//        contentType: "application/json; charset=utf-8",
//        url: "ticketview.aspx/GetOwnerBins",
//        data: "{QueryStr:'" + QueryStr + "',input:'" + InputString + "'}",
//        dataType: "json",
//        success: function (Result) {
//            if (Result.d.length > 0) {
//                Result = Result.d.split("^");
//                alert(Result[0]);
//                alert(Result[1]);
//                alert(Result[2]);


//                if (Result[1] == 5 || Result[1] == 6) {
//                    $('#SUBMIT').hide();
//                    $('#btn_ADD').hide();
//                    //$('#binchangebtn').addClass('d-none');
//                }
//                else if (Result[0] == 0 && Result[2] == 0) {
//                    $('#SUBMIT').hide();
//                    $('#btn_ADD').hide();
//                    //$('#binchangebtn').addClass('d-none');
//                }
//                else {
//                    $('#SUBMIT').show();
//                    $('#btn_ADD').show();
//                    //$('#binchangebtn').removeClass('d-none');
//                }
//            }
//        },
//        error: function (Result) {

//            alert(Result);
//        }
//    });
//}

function solutionDtl(tick) {
     $('#stsdiv').removeClass('d-none');
    $('#stsdiv').show();
    $("#txt_solution").attr('readonly', true);
    $("#txt_reason_fr_err").attr('readonly', true);
    var QueryString = "TicketSolutionUpdateDetail";

    $.ajax({

        type: "POST",
        contentType: "application/json; charset=utf-8",
        url: "ticketview.aspx/SoluUpdDtl",
        data: "{QueryString:'" + QueryString + "',input:'" + tick+"'}",
        dataType: "json",
        success: function (Result) {
            if (Result.d.length > 0) {
                $('#txt_solution').empty();
                Result = Result.d.split("^");
                $('#txt_solution').val('Updated By:  ' + Result[1] + '---/Updated By:  ' + Result[0] + '---/UpdatedDate:  ' + Result[2]+'--/Solution:  '+Result[3]);
                $('#txt_reason_fr_err').val('Updated By:  ' + Result[1] + '---/Updated By:  ' + Result[0] + '---/UpdatedDate:  ' + Result[2]+'--/Reason For Issue:  '+Result[4]);
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
        url: "ticketview.aspx/SelectedAsstDTL",
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
    debugger;
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

//function wlogsbmt() {
    
//    var r = $('#worklogtb tr:last').index();
//    r = r + 1;
//    $('#worklogtb tr:eq(' + r + ') td:eq(3)').attr('contenteditable', false);
//    $('#worklogtb tr:eq(' + r + ') td:eq(4)').attr('contenteditable', false);
//}



//function wlogrmv() {
//    row_added = 0;
//    $('#worklogtb tr:last').remove();
//    $('#btn_ADD').prop('disabled', false);
//    $('#wlremove').prop('disabled', true);
//    $('#wlsubmit').prop('disabled', true);

//}
var tempwlog = 0;
function confirminview() {
    //JOBIN
    debugger;
    //Changed_bin=$('#ddlchBin option:selected').val();
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
        ModelPopWarning("Please Select Assign To");
        return false;
    }
    else if (($('#ddlstatus option:selected').val() == 5 || $('#ddlstatus option:selected').val() == 6 )&& ($("#txt_reason_fr_err").val()).trim() == "") {
       
        ModelPopWarning("Please Enter Reason For Issue..");
        return false;
    } else if (($('#ddlstatus option:selected').val() == 5 || $('#ddlstatus option:selected').val() == 6) && ($("#txt_solution").val()).trim() == "") {
        ModelPopWarning("Please Enter Solution..");
        return false;
    }
    else if (tempwlog == 0) {

        ModelPopWarning("Before Making Changes In Tickets Please Add Change Details In Worklog ");
    }
    else if (global_tickno == "") {
        ModelPopWarning("Please select Ticket no");
        return false;
    }
    else if (($('#ddlstatus option:selected').val() == -1)) {

        ModelPopWarning("Please select Status");
        return false;

    }

    else {
        if ($('#ddlstatus option:selected').val() == -1) {
//                          1                     2                          3                                      4                          5                          6
            input = global_tickno + "¥" + curr_status_id + "¥" + $("#txt_solution").val() + "¥" + ""/*$("[id*=hdUserId]").val()*/ + "¥" + CurrBin + "¥" + $("#txt_reason_fr_err").val() ;
        }
        else {

            if ($('#ddlstatus option:selected').val() == 5 || $('#ddlstatus option:selected').val() == 6) {

//                            1                              2                                       3                                  4                           5                           6
                input = global_tickno + "¥" + $("#ddlstatus option:selected").val() + "¥" + $("#txt_solution").val() + "¥" + $("[id*=hdUserId]").val() + "¥" + CurrBin + "¥" + $("#txt_reason_fr_err").val() ;

            } else {
//                             1                               2                                      3                                     4                            5                          6
                input = global_tickno + "¥" + $("#ddlstatus option:selected").val() + "¥" + $("#txt_solution").val() + "¥" + ""/*$("[id*=hdUserId]").val()*/ + "¥" + CurrBin + "¥" + $("#txt_reason_fr_err").val() ;
            }
            
        }
            $.ajax({
                type: "POST",
                contentType: "application/json; charset=utf-8",
                url: "ticketview.aspx/confirmview",
                data: "{QueryString:'" + QueryString + "',input : '" + input + "'}",
                dataType: "json",
                success: function (Result) {
                    Result = Result.d;
                    alert(Result);
                    window.open('ticketview.aspx', '_self');

                },

                error: function (Result) {
                    alert(Result);
                }
            });

        }
    
    
}

function stssel() {

    if ($('#ddlstatus option:selected').val() == 6 || $('#ddlstatus option:selected').val() == 5) {
         
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
       
    }
}


function UserApprvTview(tno) {
   // alert(tno);
    // alert('entered into approval function');
    $('#lab_appr_tb').show();
    $('#divtblapprvdtl').show();
    $('#tblapprv').show();

    var Querystring = "Log_Details";

    //var InputString = $("[id*=hdUserId]").val();global_tickno
    var InputString = tno;

    $.ajax({
        type: "POST",
        contentType: "application/json; charset=utf-8",
        url: "ticketview.aspx/GetapprvTbl",
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
        url: "ticketview.aspx/GetapprvPerTbl",
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


