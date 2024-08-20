function frmExit() {
    window.open("index.aspx", "_self");
}

$(window).on('load', function () {


    $("#txt_RewDte").datepicker({
        dateFormat: 'dd/MM/yy',
        changeMonth: true,
        changeYear: true,
        stepMonths: true,
        todayHighlight: true,
        onSelect: function (dateText, inst) {

        }
    });

    //$("#txt_rptto").datepicker({
    //    dateFormat: 'dd/MM/yy',
    //    changeMonth: true,
    //    changeYear: true,
    //    stepMonths: true,
    //    todayHighlight: true,
    //    onSelect: function (dateText, inst) {

    //    }
    //});
    //RRTview();
    CRTview();
    BinOwnshow();
  //  ViewDocumentCR();
    //ReviewBy();
    //statusshow();
    //impt_dtl();
    //AssignTo_dtl();
    //$('#tblticket').empty();
    //$('#divtblPrincpleIntDtl').hide();
    //$('#worklogtb').empty();
   // $('#sel_tick_div').hide();
    


});
var cr_no;

var tick_arr = '';
var tkp = '';
var ch_tick_no;
var g_l_i;
//var changeNo;
var global_lable_no = [];
$(window).on('ready', function () {
    g_l_i = 0;
    tick_arr = '';
    global_lable_no.empty();
});
function chkbx() {
    $('input[type="checkbox"]').on('change', function () {
        $('input[type="checkbox"]').not(this).prop('checked', false);
    });


}
//$(document).ready(function () {
//    $('.check').click(function () {
//        $('.check').not(this).prop('checked', false);
//    });
//});




$('#tblticket').onclick(function () {
    var row = $(this).find('td:first').text();

    //alert('You clicked ' + row);
    var dt = row.toString();
    shdetails(dt);
    WorkLogView(dt);
    //changeNo = dt;
    $('#tblticket').removeEventListener();


});


$(":button").click(function () {
    alert(this.name + "clicked button name"); // or alert($(this).attr('id'));
});



var tdid = "";
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
}


function ReviewBy() {

    var employee_code = $('#txt_rewby').val();
    var QueryString = 'EmployeeName';

    intPrnc = "reviewedby";

    $.ajax({
        type: "post",
        contentType: "application/json; charset=utf-8",
        url: "CRBreview.aspx/rewby",
        data: "{QueryString:'" + QueryString + "',empcode:'" + employee_code+"'}",
        dataType: "json",
        success: function (Result) {
            if (Result.d.length > 0) {
                $.each(Result.d, function (data, value) {
                    $('#approved_persons').append('<div id = ' + employee_code + ' style = "border:solid;float:left;width:auto;border" ><input type="button" style="background-color:dimgray;color:white;" name=' + employee_code + ' value="X" onclick="rmv_lab(this.name)" />' + value.Name + '</div >');
                    global_lable_no.push(employee_code);
                    
                })
            } else {

                alert('No Entries Found');
            }
            //$('#ddlrewby').empty();
            //$('#ddlrewby').append($("<option></option>").val("-1").html("Select review person "));
            //$.each(Result.d, function (data, value) {
            //    $('#ddlrewby').append($("<option></option>").val(value.Id).html(value.Name));
            //})
        },
        error: function (Result) {
            alert(Result.d);
        }
    });
}

function BinOwnshow() {

    var intPrnc;

    intPrnc = "GetBinownerR";

    $.ajax({
        type: "post",
        contentType: "application/json; charset=utf-8",
        url: "CRBreview.aspx/BinOwner",
        data: "{QueryString:'" + intPrnc + "'}",
        dataType: "json",
        success: function (Result) {
            $('#ddlAssign').empty();
            $('#ddlAssign').empty();
           
            $('#ddlAssign').append($("<option></option>").val("-1").html("Select bin owner "));
            $.each(Result.d, function (data, value) {
                $('#ddlAssign').append($("<option></option>").val(value.Id).html(value.Name));
               
            })
        },
        error: function (Result) {
            alert(Result);
        }
    });
}








function RRTview() {
   
    //$('#divtblPrincpleIntDtl').show();
    //$('#tblRr').show();
    Querystring = 'RRTblDetails';
    $.ajax({
        type: "POST",
        contentType: "application/json; charset=utf-8",
        url: "CRBreview.aspx/GetRRTble",
        data: "{QueryStr : '" + Querystring + "'}",
        dataType: "json",
        success: function (Result) {
            if (Result.d.length > 0) {              
                $('#tblRr').empty();//t.fi_name,t.branch,t.addrss,t.contact_person,t.phone_no,t.mobile_no,t.email_id,t.pan,t.gstn,t.cin
                $('#tblRr').append('<thead class="bg-success text-white">< tr ><th scope="col">RR ID</th><th scope="col">CATEGORY</th><th scope="col">CRF</th><th scope="col">TYPE</th> <th scope="col">DATE</th><th scope="col">REQUESTED BY</th><th scope="col">checkbox</th></tr></thead><tbody class="border border-dark">'
                );
                for (var i = 0; i < Result.d.length; i++) {
                    $('#tblRr').append('<tr><td>' + Result.d[i].RRID + '</td>' +
                        '<td>' + Result.d[i].CATEGORY + '</td>' +
                        '<td>' + Result.d[i].CRFID + '</td>' +
                        '<td>' + Result.d[i].TYP + '</td>' +
                        '<td>' + Result.d[i].ENTDTE + '</td>' +
                        '<td>' + Result.d[i].ENTBY + '</td>' +
                        '<td>' + '<input type = "checkbox" value="ADD" class="check" name = "btn1" id="' + i + '" onclick="chkbx()"/>' + '</td>' +
                        '</tr>');
                }
                $('#tblRr').append(
                    '</tbody>');
            }
        },
        error: function (Result) {
            alert(Result);
        }
    });



}

function CRTview() {
    //$('#divtblPrincpleIntDtl').show();
    //$('#tblRr').show();
    Querystring = 'CRTblDetails';
    $.ajax({
        type: "POST",
        contentType: "application/json; charset=utf-8",
        url: "CRBreview.aspx/GetCRTble",
        data: "{QueryStr : '" + Querystring + "'}",
        dataType: "json",
        success: function (Result) {
            if (Result.d.length > 0) {
                $('#tbllCr').empty();
                $('#tbllCr').append('<thead class="bg-success text-white"><tr><th scope="col">CR ID</th><th scope="col">CHANGE TYPE</th><th scope="col">CREATED BY</th><th scope="col">CREATED DATE</th><th scope="col">OWNER GROUP</th></tr></thead><tbody class="border border-dark">');
                for (var i = 0; i < Result.d.length; i++) {
                    $('#tbllCr').append('<tr><td>' + Result.d[i].CRID + '</td>' +
                        '<td>' + Result.d[i].CHANGETYPE + '</td>' +
                        '<td>' + Result.d[i].CREATEDBY + '</td>' +
                        '<td>' + Result.d[i].CREATEDDATE + '</td>' +
                        '<td>' + Result.d[i].OWNERGRP + '</td>' +
                        '</tr>');
                }
                $('#tbllCr').append(
                    '</tbody>');
            }
        },
        error: function (Result) {
            alert(Result);
        }
    });



}

function AddrrRw()
{
    alert('addrow function');
    $("#tblRr input[type=checkbox]:checked").each(function () {
        var row = $(this).closest("tr")[0];
       alert(row);
        $('#tblseltick').append('<tr><td>' +row.cells[0].innerHTML+ '</td>' +
            '<td>' + $('#txt_RewDte').val()+ '</td>' +
            '<td>' + $('#txt_crbescription').val() + '</td>' +
            '<td>' + $('#ddlrewby option:selected').text() + '</td></tr>');
    });
    $('#tblseltick').append(
        '</tbody>');
    $('#txt_RewDte').val('select date');
    $('#txt_crbescription').val(''); 
    $('#ddlrewby').val(-1);
   

}


function gr() {

    $('#tbllCr').find('tr').click(function () {
        var row = $(this).find('td:first').text();
       // alert(row);
        cr_no = row;
        ch_tick_no = row;
        SrUnderChList(row);
        shdetails(row);
        

        //WorkLogView(row);
        $('#tblticket').removeEventListener();


    });


}

function SRdetails() {

    $('#tableSrTickLs').find('tr').click(function () {
        var row = $(this).find('td:first').text();
        shSRdetails(row);
        $('#tblticket').removeEventListener();


    });


}


function SrUnderChList(SrTicketNo) {
    $('#divSrDtl').show();
    $('#tableSrTickLs').show();
    // alert('apprv tick show function');
    //$('#divtblPrincpleIntDtl').show();

    var Querystring = "GetSRforCR";

    // var InputString = $("[id*=hdUserId]").val();

    $.ajax({
        type: "POST",
        contentType: "application/json; charset=utf-8",
        url: "CRapproval.aspx/GetSrForChange",
        data: "{QueryStr : '" + Querystring + "',input :'" + SrTicketNo + "'}",
        dataType: "json",
        success: function (Result) {
            if (Result.d.length > 0) {
                //alert(Result.d.length);
                $('#tableSrTickLs').empty();
                $('#tableSrTickLs').append('<thead><tr><td scope="col">SRTicket No</td><td scope="col">Branch</td><td scope="col">Subject</td> <td scope="col">Description</td> <td scope="col">Rep.date</td></tr></thead><tbody>');
                for (var i = 0; i < Result.d.length; i++) {
                    //alert(Result.d[i].crid + 'cr_id');
                    $('#tableSrTickLs').append('<tr data-toggle="modal" data-target="#ticketdet" onmousedown="SRdetails()"><td>' + Result.d[i].srid + '</td>' +
                        '<td>' + Result.d[i].branch + '</td>' +
                        '<td>' + Result.d[i].subject + '</td>' +
                        '<td>' + Result.d[i].descr + '</td>' +
                        '<td>' + Result.d[i].Repdate + '</td>' + '</tr>');
                }
                $('#tableSrTickLs').append(
                    '</tbody>');
            }

        },
        error: function (Result) {
            alert(Result);
        }
    });

}



function chkb_tick(i) {
    //alert(tick_arr);
    var r = '';
    var k = '';
    r = parseInt(i);
    r = r + 1;
    k = $('#tblticket tr:eq(' + r + ')').find('td:first').text();
    //alert(k);

    global_lable_no.push(k);
    // alert(global_lable_no[g_l_i]);
    g_l_i++;

    // tick_arr = tick_arr + k+"¥" ;
    // alert("data stored in array" + tick_arr);
    //alert(k);
    tick_lab(k);
}
function tick_lab(tickno) {
    tdid = tickno;
    // $('#tbl_sel_tick').append('<td id="' + tdid + '"><label style="border:solid;width:100px"><input type="button" value="*" onclick="delet_tick_tbl(this.id)"/>' + tickno + '</label></td>');

    $('#tick_lis').append('<div id="' + tdid + '" style="border:solid;float:left;width:100px"><input type="button" style="background-color:dimgray;color:white;" name=' + tdid + ' value="X" onclick="rmv_lab(this.name)"/>' + tdid + '</div>');
    i++;
    lab_div_id = 'lab_div_id' + i.toString;


}
function rmv_lab(tkp) {
    //alert(tkp);
    // alert(tkp + 'tkp');
    // alert(tkp+'removing element no');
    global_lable_no = $.grep(global_lable_no, function (value) {
        return value != tkp;
    });
    // alert(global_lable_no[inc] + 'set 0 to removed element location');
    $('#' + tkp + '').remove();


}
function delet_tick_tbl(i) {

    var k;
    r = parseInt(i);
    r = r + 1;
    k = $('#tblticket tr:eq(' + r + ')').find('td:first').text();
    $('#tblticket tr:eq' + r + ' td:id(' + k.toString() + ')').remove();

}


function AddGB() {

    var gbid = '';

    var inc;
    var str = '';
    //alert(global_lable_no.length);
    for (inc = 0; inc < global_lable_no.length; inc++) {
        //  if (global_lable_no[inc] != '0') {
        tick_arr = tick_arr + global_lable_no[inc] + "¥";
        // }

    }
    //alert(tick_arr + 'total array length');


    var person, incident;
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

            var d1 = fileList[0].name.split(".");

            // alert(imageData);


            var InputData = $("#txt_gbtitle").val() + "¥" + $("#txt_gbdescription").val() + "¥" + $("[id*=hdUserId]").val();
            $.ajax({
                type: "POST",
                contentType: "application/json; charset=utf-8",
                url: "GlobalTicket.aspx/confirmdocument",
                data: "{val:'" + InputData + "',upload_file:'" + imageData + "'}",
                dataType: "json",
                success: function (Result) {


                    Result = Result.d;
                    if (Result == "Successfully Uploaded") {

                        Getsuccessid();
                        // gbno_add(gbid);
                    }


                    //SaveuploadData(Result.d); 
                    // SaveuploadData(Result.d.split("^")[1]);   


                },

                error: function (Result) {
                    alert(Result);
                }
            });

            gbno_add(gbid);



        }
    }



}
function CRBconfirm() {
    var apprv_rej=0;
    //var InputString='';
    var reviewedby = '';
    for (var i = 0; i < global_lable_no.length; i++)
        reviewedby = global_lable_no[i]+','+ reviewedby ;
    if ($("#radApprove").prop("checked")) {
        apprv_rej = 1;
        
    }
    else if ($("#radReject").prop("checked")) {
        apprv_rej=2;
    }
    var querystr1 = "CRBreviewDTL";
    var InputString = ch_tick_no + "¥" + $("[id*=hdUserId]").val() + "¥" + reviewedby + "¥" + apprv_rej + "¥" + $('#txt_crbescription').val() + "¥" + $('#ddlAssign option:selected').val();

    $.ajax({
        type: "POST",
        contentType: "application/json; charset=utf-8",
        url: "CRBreview.aspx/crbsavedata",
        data: "{Querystring:'" + querystr1 + "',val:'" + InputString+ "'}",
        dataType: "json",
        success: function (Result) {
            Result = Result.d;


            alert(Result);
            window.open('CRBreview.aspx', '_self');


            //SaveuploadData(Result.d); 
            // SaveuploadData(Result.d.split("^")[1]);   


        },

        error: function (Result) {
            alert(Result);
        }
    });




}



function Getsuccessid() {
    // alert("BB");
    var gbtickno;
    var QueryString = "Getgbid";


    $.ajax({

        type: "POST",
        contentType: "application/json; charset=utf-8",
        url: "GlobalTicket.aspx/getticketid",
        data: "{QueryString:'" + QueryString + "'}",
        dataType: "json",
        success: function (Result) {
            gbtickno = Result.d;
            Getupdate(gbtickno);
            //Result = Result.d;
            //gbno_add(gbid);
            //alert('ticket no=' + Result);

            //window.open('GlobalTicket.aspx', '_self');

        },
        error: function (Result) {

            alert(Result);
        }


    });
    //alert(gbtickno);
    //return gbtickno;


}


function Getupdate(gbno) {
    //alert("aa");
    // alert(tick_arr);
    var gbtickno;
    var QueryString = "Geupdategb";

    var InputString = gbno;
    //alert('tickno=' + gbno);
    $.ajax({

        type: "POST",
        contentType: "application/json; charset=utf-8",
        url: "GlobalTicket.aspx/getupdate",
        data: "{QueryStr : '" + QueryString + "',input :'" + InputString + "',arry:'" + tick_arr + "'}",
        dataType: "json",
        success: function (Result) {


            //Result = Result.d;
            //gbno_add(gbid);
            alert('ticket no=' + Result.d);

            window.open('GlobalTicket.aspx', '_self');

        },
        error: function (Result) {

            alert(Result);
        }


    });
    //alert(gbtickno);
    //return gbtickno;


}
function shdetails(tn) {
   //alert('entere into show');
    //var SoI;
    var input = tn;
    var QueryString = "GetCrDetails";
    SoI = tn.substring(0, 2);
    // $("#ticket_show").text(tn);
    // alert(tn);
    // alert('entered into show deatils');
    $.ajax({
        type: "POST",
        contentType: "application/json; charset=utf-8",
        url: "CRBreview.aspx/getlinkdataCH",
        data: "{QueryString:'" + QueryString + "',input : '" + input + "'}",
        dataType: "json",
        success: function (Result) {
            //alert(Result.d.length);
            Result = Result.d.split("^");
            $('#txt_changetyp').val(Result[0]);
            if (Result[1] == 1) {
                $("#radGYes").prop('checked', true);
                $("#radGNo").prop('checked', false);

            }
            else if (Result[1] == 0) {


                $("#radGYes").prop('checked', false);
                $("#radGNo").prop('checked', true);
            }
            $('#txt_Impact').val(Result[2]);
            $('#txt_Urgency').val(Result[3]);
            // $('#txt_BR_DEP').val(Result[4]);
            $('#txt_Priority').val(Result[4]);
            $('#txt_ChangeRisk').val(Result[5]);
            // $('#txt_impact').val(Result[7]);
            //$('#txt_impactdetails').val(Result[8]);
            //$('#txt_severity').val(Result[5]);
            $('#txt_Group').val(Result[6]);
            //$('#txt_incategory').val(Result[9]);
            $('#txt_ChangeOwner').val(Result[7]);
            $('#txt_rollback').val(Result[8]);
            $('#txt_reason').val(Result[9]);
            $('#txt_ServicesEffected').val(Result[10]);
            // $('#txt_impci').val(Result[13]);
            //$('#ddlstatus').val(-1);
            //Currstatsshow(Result[9]);
           

           


        },
        error: function (Result) {



            alert(Result);
        }




    });







}


function shSRdetails(tn) {
    var SoI;
    var input = tn;
    var QueryString = "GetTview";
    SoI = tn.substring(0, 2);
    //$("#ticket_show").text(tn);
    // alert(tn.substring(0, 2) == 'IN');
    if (tn.substring(0, 2) == 'IN') {

        $.ajax({
            type: "POST",
            contentType: "application/json; charset=utf-8",
            url: "CRBreview.aspx/getlinkdataIN",
            data: "{QueryString:'" + QueryString + "',input : '" + input + "'}",
            dataType: "json",
            success: function (Result) {
                Result = Result.d.split("^");
                $('#txt_reportby').val(Result[0]);
                if (Result[1] == 1) {
                    $("#txt_affecttby").val('person');

                }
                else if (Result[1] == 0) {



                    $("#txt_affecttby").val('branch');
                }
                $('#txt_EMPNO').val(Result[2]);
                $('#txt_EMPNAME').val(Result[14]);
                $('#txt_BR_DEP').val(Result[15]);
                $('#txt_phno').val(Result[3]);
                $('#txt_ALTPHNO').val(Result[4]);
                $('#txt_impact').val(Result[7]);
                $('#txt_impactdetails').val(Result[8]);
                $('#txt_severity').val(Result[5]);
                $('#txt_priority').val(Result[6]);
                $('#txt_incategory').val(Result[9]);
                $('#txt_subject').val(Result[11]);
                $('#txt_description').val(Result[12]);
                $('#txt_impci').val(Result[13]);
                $('#ddlstatus').val(-1);
                $('#ddlchBin option:selected').val(Result[17]);
                Changed_bin = Result[17];
            
                Currstatsshow(Result[16]);
                if (tn.substring(0, 2) == 'SR') {
                    $('#sr_fields').hide();
                    // $('#impact_hidden_sr').hide();
                }
                else {
                    //$('#impact_hidden_sr').show();
                    $('#sr_fields').show();

                }
                //if (Result[16] == '5' || Result[16] == '6') {
                //    $('#wlog_add_rmv_buttons').hide();
                //    $('#txt_solution').hide();
                //    $('#last_sumit_buttons').hide();
                //    $('#ddl_sts_hidd').hide();
                //}
                //else {
                //    $('#ddl_sts_hidd').show();
                //    $('#wlog_add_rmv_buttons').hide();
                //    $('#wlog_add_rmv_buttons').show();
                //    $('#txt_solution').show();
                //    $('#last_sumit_buttons').show();

                //}


            },
            error: function (Result) {



                alert(Result);
            }




        });

    }
    else {
        //alert('entered into else');
        $.ajax({
            type: "POST",
            contentType: "application/json; charset=utf-8",
            url: "CRBreview.aspx/getlinkdataSR",
            data: "{QueryString:'" + QueryString + "',input : '" + input + "'}",
            dataType: "json",
            success: function (Result) {
                // alert(Result.d.length);
                Result = Result.d.split("^");
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
                //$('#txt_incategory').val(Result[9]);
                $('#txt_subject').val(Result[7]);
                $('#txt_description').val(Result[8]);
                $('#txt_crfid').val(Result[13]);
                $('#txt_Parentapp').val(Result[14]);
                $('#txt_Tester').val(Result[15]);
                $('#txt_CodeReview').val(Result[16]);
                $('#txt_chdtl').val(Result[17]);
                // $('#txt_BR_DEP').val(Result[10]);
                // $('#txt_impci').val(Result[13]);
                $('#ddlstatus').val(-1);
                getcrDtl(tn);
                Currstatsshow(Result[9]);
                // $('#txt_currentstatus').val(Result[9]);
                if (tn.substring(0, 2) == 'SR') {
                    $('#sr_fields').hide();
                    $('#impact_hidden_sr').hide();
                }
                else {
                    $('#impact_hidden_sr').show();
                    $('#sr_fields').show();

                }
                //if (Result[9] == '5' || Result[9] == '6') {
                //    $('#wlog_add_rmv_buttons').hide();
                //    $('#txt_solution').hide();
                //    $('#last_sumit_buttons').hide();
                //    $('#ddl_sts_hidd').hide();
                //}
                //else {
                //    $('#ddl_sts_hidd').show();
                //    $('#wlog_add_rmv_buttons').hide();
                //    $('#wlog_add_rmv_buttons').show();
                //    $('#txt_solution').show();
                //    $('#last_sumit_buttons').show();

                //}


            },
            error: function (Result) {



                alert(Result);
            }




        });



    }



}


function getcrDtl(srno) {

    var QueryString = "getSrdetailCr";
    var input = srno;
    $.ajax({
        type: "POST",
        contentType: "application/json; charset=utf-8",
        url: "CRapproval.aspx/dtlcr",
        data: "{QueryStr:'" + QueryString + "',input:'" + input + "',crno:'" + cr_no + "'}",
        dataType: "json",
        success: function (Result) {
            if (Result.d.length > 0) {
                Result = Result.d.split("^");
                $('#txt_chdtl').val(Result[0]);
            }
        },
        error: function (Result) {
            alert(Result);
        }
    });
}
function DocView() {
   // debugger;
    //alert(cr_no);
    //Str = dt + "µ" + global_tickno;
    ViewDocumentCR(cr_no);
}