function frmExit() {
    window.open("index.aspx", "_self");
}
$(window).on('load', function () {
    

   // $("#txt_ReportedBy").val($("[id*=hduname]").val());
    $('#divtblCrApprvtDtl').hide();
    aprrvTickShw();
    $('#divSrDtl').hide();
   //work empcode autofill

    $('#wlogaddd').on('show.bs.modal', function (event) {
        $('#wlogadd_entBy').val($("[id*=hdUserId]").val());

    });
          

   
    
   

});






var cr_no;
var glob_tick_no;
////   -----------PHONE NUMBER VALIDATION
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
////  -----------  EMAIL VALIDATION
function CheckEmailId(Semail, ControlID) {
    var filter = /^([\w-\.]+)@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.)|(([\w-]+\.)+))([a-zA-Z]{2,4}|[0-9]{1,3})(\]?)$/;
    if (filter.test(Semail)) {
        return true;
    }
    else {
        alert("Enter Valid Email ID");
        $("#" + ControlID).val("");
        return false;
    }
}
function include(file) {

    var script = document.createElement('script');
    script.src = file;
    script.type = 'text/javascript';
    script.defer = true;

    document.getElementsByTagName('head').item(0).appendChild(script);

}
/*-----------------incident/sr radio-----------*/


function showINorSR() {
    if ($("#radIN").prop("checked")) {
        $("#SelctType").fadeIn();
        
    }
    else if ($("#radSR").prop("checked")) {
        $("#SelctType").fadeOut();
    }
}


/* Include Many js files */



function showTypes() {
    if ($("#radGYes").prop("checked")) {
        $("#SelctType").fadeIn();
       
        //getGuarenteeType();
    }
    else if ($("#radGNo").prop("checked")) {
        $("#SelctType").fadeOut();
       
      
    }
}






/*--confirm button for incident or sr    ------*/

function AddSRapproval() {
    
    var QueryString ="approvalcheck";
    var aprRjct;
    if ($("#radAppr").prop("checked")) {
        aprRjct = 2;
    }
    else if ($("#radRjct").prop("checked")) {
        aprRjct = 3;
    }

    if ($("#radAppr").prop("checked") == false && $("#radRjct").prop("checked") == false) {
        alert("Please select an Option");
        return false;
    }
    else if ($('#txt_reason').val='') {
        alert('Please Enter Reason');
    }
     else {
        var InputData = srid + "¥" + $("[id*=hdUserId]").val() + "¥" + $("#txt_reason").val() + "¥" + aprRjct;
       // alert(InputData);
        $.ajax({
            type: "POST",
            contentType: "application/json; charset=utf-8",
            url: "SRApproval.aspx/SRapprovalinsert",
            data: "{QueryString:'" + QueryString + "',input : '" + InputData + "'}",
            dataType: "json",
            success: function (Result) {
               
                //alert(Result.d);
                Result = Result.d;
                alert( Result);
                //SaveuploadData(Result);
                window.open('SRApproval.aspx', '_self');

            },

            error: function (Result) {
                alert(Result);
            }
        });
                  



                
               
    }
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
}



/*---------------------------------fileupload--------------------*/

function Getsuccessid() {

    var QueryString = "Getticketid";
    //var input = $("#txt_Empcode").val();
    
    $.ajax({

        type: "POST",
        contentType: "application/json; charset=utf-8",
        url: "SRApproval.aspx/getticketid",
        data: "{QueryString:'" + QueryString + "'}",
        dataType: "json",
        success: function (Result) {

            Result = 'Ticket Number:' + Result.d;
            alert(Result);
            window.open('SRCreation.aspx', '_self');

        },
        error: function (Result) {

            alert(Result);
        }


    });

}

function SaveuploadData(seqid) {
    //var fileList = document.getElementById("FileUpload").files;
    //var fileReader = new FileReader();
    //if (fileReader && fileList && fileList.length) {
    //    var d = new Date();
    //    var fileName = fileList[0].name;
    //    fileReader.readAsDataURL(fileList[0]);
    //    fileReader.onload = function () {
    //        var imageData = fileReader.result;
    //        var d2 = imageData.split(":");
    //        var d3 = d2[1].split(";");
    //        var imageData = fileReader.result;
            
    //        var d1 = fileList[0].name.split(".");


    //        data = seqid ;
    //        $.ajax({
    //            type: "post",
    //            contentType: "application/json; charset=utf-8",
    //            url: "SRCreation.aspx/confirmdocument",
    //            data: "{val:'" + data + "',upload_file:'" + imageData + "'}",
    //            dataType: "json",
    //            success: function (result) {
    //                result = result.d;
    //                alert(result);
    //                window.location = "../SRCreation.aspx";
    //            },
    //            error: function (result) {
    //                alert(result);
    //                window.location = "../SRCreation.aspx";
    //            }
    //        });
    //    }
    //}
    //var data;
    //data = '';

   

    //var fileList = document.getElementById("FileUpload").files;
    
    //var fileReader = new FileReader();
    //if (fileReader && fileList && fileList.length) {
        
    //    var fileName = fileList[0].name;
    //    extension = fileName.replace(/^.*\./, '');

    //    if (extension == fileName) {
    //        extension = '';
    //    } else {
    //        // if there is an extension, we convert to lower case
    //        // (N.B. this conversion will not effect the value of the extension
    //        // on the file upload.)
    //        extension = extension.toLowerCase();
    //    }
    //    //fileReader.readAsArrayBuffer(fileList[0]);
    //    fileReader.readAsDataURL(fileList[0]);
    //    fileReader.onload = function () {
    //        var imageData = fileReader.result;
    //        //alert(imageData);
    //        var InputData = seqid;
    //         //alert(InputData);
    //        $.ajax({
    //            type: "POST",
    //            contentType: "application/json; charset=utf-8",
    //            url: "SRCreation.aspx/PutdatalDocuments",
    //            data: "{ImageData:'" + imageData + "',InputData:'" + InputData + "'}",
    //            dataType: "json",
    //            success: function (Result) {
                    
    //                alert(Result.d);
    //            },
    //            error: function (Result) {
    //                alert(Result);
    //            }
    //        });

    //    };
    //}

}


//}
/*--------------IN/SR  gridload for search--------*/
function getINTABLE() {
    $("#tableShowIN").empty();
    var Querystring;
    $("#tableShowIN").show();
    var txtsr = $("#txt_SR").val();
    var txtsdate = $("#txt_AgrmntDt").val();
    var txtendate = $("#txt_DtAgrmntTo").val();
    var status = $("#ddlStatus").val();

    var InputString = $("#txt_SR").val() + "¥" + $("#txt_AgrmntDt").val() + "¥" + $("#txt_DtAgrmntTo").val() + "¥" + $("#ddlStatus").val();

  



    if (txtsr != '' && txtsdate == '' && txtendate == '' && status == -1) {
        Querystring = "GetIDSEARCH";
    }
    else if (txtsr == '' && txtsdate != '' && txtendate != '' && status == -1) {
        Querystring = "GetSRDate";
    }
    else if(txtsr != '' && txtsdate != '' && txtendate != '' && status != -1)
    {
        Querystring = "GetSRSEARCH";
    }
    else if (txtsr == '' && txtsdate == '' && txtendate == '' && status != -1) {
        Querystring = "GetSRSt";
    }
        
        $.ajax({
            type: "POST",
            contentType: "application/json; charset=utf-8",
            url: "SRApproval.aspx/getTable",
            data: "{QueryStr : '" + Querystring + "',input :'" + InputString + "'}",
            dataType: "json",
            success: function (Result) {
                if (Result.d.length > 0) {
                    $('#tableShowIN').empty();//t.fi_name,t.branch,t.addrss,t.contact_person,t.phone_no,t.mobile_no,t.email_id,t.pan,t.gstn,t.cin
                    $("#tableShowIN").append('<thead class="bg-success text-white">< tr ><th scope="col">Incident/SR</th><th scope="col">Branch/dep</th><th scope="col">Summary</th> <th scope="col">Decription</th> <th scope="col">Rep.date</th></tr></thead><tbody class="border border-dark">'
                    );
                    for (var i = 0; i < Result.d.length; i++) {
                        $("#tableShowIN").append('<tr><td>' + Result.d[i].INName + '</td>' +
                            '<td>' + Result.d[i].Branchordep + '</td>' +
                            '<td>' + Result.d[i].Summary + '</td>' +
                            '<td>' + Result.d[i].Desc + '</td>' +
                            '<td>' + Result.d[i].Repdate + '</td>' +

                            '</tr >');
                    }
                    $("#tableShowIN").append(
                        '</tbody>');
                }
            },
            error: function (Result) {
                alert(Result);
            }
        });
    
}


var srid;

var global_tickno = "";
function gr() {

    $('#divtblCrApprvtDtl').find('tr').click(function () {
        var row = $(this).find('td:first').text();
       
        srid = row;
        cr_no = row;
        SrUnderChList(row);
        $('#sele_tick_nme').text(row);
        //alert(row);
        //alert('You clicked ' + row);
      //  var dt = row.toString();
        shdetails(row);
       // debugger;
        
      
        WorkLogView(row);

        $('#divtblCrApprvtDtl').removeEventListener();

    });




}

////// Sks----- start-------->
var des;
var sum;


function mwlogadd() {
    
   // debugger;

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
        tempwlog = 1;
        // Addworklogtb();
       
        Wlog_Submit();

        //WorkLogView($('#ticket_show').val());
    }


}

var subdes;
var subdesval = 1;

var crid = $("#sele_tick_nme").text();

// work log function
function Wlog_Submit() {
  //  debugger;
    r = $('#worklogtb tr:last').index();
    r = r + 1;
    
    var crid = $("#sele_tick_nme").text();
    subdes = $("#wlogadd_descript").val();
    subdesval = 0;

    des = $('#wlogadd_descript').val().replace(/[']/gi, '"');
    sum = $('#wlogadd_summary').val().replace(/[']/gi, '"');
       
    var InputString = crid + "¥" + $("[id*=hdUserId]").val() + "¥" + $('#wlogadd_summary').val().replace(/[']/gi, '"') + "¥" + $('#wlogadd_descript').val().replace(/[']/gi, '"');
  //  alert(InputString);
    var Querystring = "savewlogdetailsCRApproval";
    tempwlog = 1;


    $.ajax({
        type: "POST",
        contentType: "application/json; charset=utf-8",
        url: "CRapproval.aspx/insertwlog",
        data: "{QueryStr : '" + Querystring + "',input :'" + InputString + "'}",
        dataType: "json",
        success: function (Result) {
            $('#wlogaddd').modal('hide');
            if (Result.d.toString() == "Inserted Successfully") {
                Result = Result.d;
                alert(Result);
                WorkLogView(crid);
            }
        },
        error: function (Result) {
            alert('NOT REGISTERD');
        }
    });

    $('#wlogaddd').modal('hide');
    $('#wlogadd_summary').val('');
    $('#wlogadd_descript').val('');
  

}


//work log function end

//work log view function
function WorkLogView(dt) {
  //  debugger;
   // alert(dt);
    //$('#worklogtb').empty();
    $('#wlogblk').empty();
    $('#wldv').show();
    $('#wlogblk').show();
    var InputString = dt;
    var Querystring = "GetWlogCHREQ";
    $.ajax({
        type: "POST",
        contentType: "application/json; charset=utf-8",
        url: "CRapproval.aspx/GtWlogTble",
        data: "{QueryStr : '" + Querystring + "',input :'" + InputString + "'}",
        dataType: "json",
        success: function (Result) {
            if (Result.d.length > 0) {
                $('#worklogtb').empty();
                $('#wlogblk').empty();
                //debugger;
                //$('#worklogtb').append('<thead class="bg-success text-white">< tr ><th scope="col">DATE</th><th scope="col">EMPLOYEE CODE</th><th scope="col">DEPARTMENT</th><th scope="col">Summary</th><th scope="col">Decription</th><th scope="col">Ticket Status</th></tr></thead><tbody class="border border-dark">');
                for (var i = 0; i < Result.d.length; i++) {
                   // debugger;
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
                        ' <h5 class="card-title">' + Result.d[i].Empname + ' <h6>  ' + Result.d[i].Empcode + '</h6></h5>' +
                        //  '<p class="card-text" style="max-height:300px;overflow-y:scroll;">Sumnmary :' + Result.d[i].Summary + '</br> Description  :' + Result.d[i].Description + '</p>' +
                        '<label for="">Summary : <span class="text-danger mt-0"></span></label>' + '<br/>' +
                        '<textarea id="' + 's' + i + '" class=" form-control mt-0" rows="2" style="width:100%;background-color:white;" name="Summary" onclick="" readonly>' + Result.d[i].Summary + '</textarea >' + '<br/>' +
                        '<label for="">Description : <span class="text-danger mt-0"></span></label>' + '<br/>' +
                        '<textarea id="' + 'd' + i + '" class=" form-control mt-0" rows="7" style="width:100%;background-color:white;" name="Description" onclick="" readonly>' + Result.d[i].Description + '</textarea >' +

                        ' </div> </div >');
                }
               // shdetails2(row);

                //$('#worklogtb').append(
                //    '</tbody>');
            }
            else {
              
                $('#wlogblk').empty();
                $('#wlogblk').show();

            }
        },
        error: function (Result) {
            alert("error");
            alert(Result);
        }
    });
}


//submit




function Crupdate() {
   // debugger;
    var InputString;
    var appr_rej;
    //var p = 'NOT Successfully Submited';

    //}
    var test = $("#txt_reason").val();

    if (test != 0) {
        if ($('#radAppr').prop('checked') == false && $('#radRjct').prop('checked') == false) {
            ModelPopWarning('Select Option Approval status');
            return false;
        }
    } else {
        ModelPopWarning('Please Enter the Reason..');
        return false;
    }
    //////


    if (subdesval == 1) {

        ModelPopWarning("Enter work log");
        return;

    }
    else {

        if ($("#radAppr").prop("checked")) {
            appr_rej = 2;

            //getGuarenteeType();
        }
        else if ($("#radRjct").prop("checked")) {
            appr_rej = 3;

        }


    }
    



    var Querystring = 'UpdateStsReasonCr';
    InputString = srid + "¥" + appr_rej + "¥" + $('#txt_reason').val();
    $.ajax({
        type: "POST",
        contentType: "application/json; charset=utf-8",
        url: "CRapproval.aspx/crupdateAppr_Rej",
        data: "{QueryStr : '" + Querystring + "',input :'" + InputString + "'}",
        dataType: "json",
        success: function (Result) {
            if (Result.d.length > 0) {

                Result = Result.d;
                alert(Result);
                window.open('CRapproval.aspx', '_self');
                //if (result.d == 'Successfully Submited')
                //  p = 'Successfully Submited';

            }
        },
        error: function (Result) {
            alert('NOT INSERTED ROWS IN TABLE');
        }
    });
    return;



}

function DocView() {
   // debugger;
    //alert(cr_no);
    //Str = dt + "µ" + global_tickno;
    ViewDocumentCR(cr_no);
}



function shdetails(tn) {
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
            url: "CRapproval.aspx/getlinkdataCH",
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

                $('#txt_status').val(Result[9]);
                $('#sta_date').val(Result[10]);
                $('#imp_date').val(Result[11]);
                $('#clo_date').val(Result[12]);
                $('#txt_ServicesEffected').val(Result[13]);

             
              

            },
            error: function (Result) {



                alert(Result);
            }




        });



    



}


function Appr_wit_tick() {
//$('#divtblPrincpleIntDtl').show();
    var ticknumber;
    $('#tableapprv').show();

    var Querystring = "TicketForApprover";

    var InputString = $("[id*=hdUserId]").val();

    $.ajax({
        type: "POST",
        contentType: "application/json; charset=utf-8",
        url: "ticketview.aspx/GetUserTble",
        data: "{QueryStr : '" + Querystring + "',input :'" + InputString + "'}",
        dataType: "json",
        success: function (Result) {
            if (Result.d.length > 0) {
                $('#tableapprv').empty();
                $('#tableapprv').append('<thead>< tr ><th scope="col">Incident/SR</th><th scope="col">Branch/dep</th><th scope="col">Summary</th> <th scope="col">Decription</th> <th scope="col">Rep.date</th></tr></thead><tbody>');
                for (var i = 0; i < Result.d.length; i++) {
                    ticknumber = ticknumber+','+ Result.d[i].Tickno;
                        
                }

            }

        },
        error: function (Result) {
            alert(Result);
        }
    });



}


function aprrvTickShw() {
    $('#divtblCrApprvtDtl').show();
    $('#tableCrApproval').show();
   // alert('apprv tick show function');
    //$('#divtblPrincpleIntDtl').show();
    
    var Querystring = "GetChangeTicketls";

   // var InputString = $("[id*=hdUserId]").val();

    $.ajax({
        type: "POST",
        contentType: "application/json; charset=utf-8",
        url: "CRapproval.aspx/ApprvTick",
        data: "{QueryStr : '" + Querystring + "'}",
        dataType: "json",
        success: function (Result) {
            if (Result.d.length > 0) {
                //alert(Result.d.length);
                $('#tableCrApproval').empty();
                $('#tableCrApproval').append('<thead><tr><td scope="col">ChangeTicketNo.</td><td scope="col">Created by</td><td scope="col">Urgency</td> <td scope="col">Owner Group</td> <td scope="col">Rep.date</td></tr></thead><tbody>');
                for (var i = 0; i < Result.d.length; i++) {
                    //alert(Result.d[i].crid + 'cr_id');
                    $('#tableCrApproval').append('<tr><td>' + Result.d[i].crid + '</td>' +
                        '<td>' + Result.d[i].createdby + '</td>' +
                        '<td>' + Result.d[i].urgency + '</td>' +
                        '<td>' + Result.d[i].ownergrp + '</td>' +
                        '<td>' + Result.d[i].Repdate + '</td>' + '</tr>');
                }
                $('#tableCrApproval').append(
                    '</tbody>');
            }

        },
        error: function (Result) {
            alert(Result);
        }
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
                    $('#tableSrTickLs').append('<tr data-toggle="modal" data-target="#ticketdet"><td>' + Result.d[i].srid + '</td>' +
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



function gr2() {

    $('#tableSrTickLs').find('tr').click(function () {
        var row = $(this).find('td:first').text();
        shdetails2(row);
        //WorkLogView(row);
        //UserApprvTview(row);
        //global_tickno = row;
        $('#tableSrTickLs').removeEventListener();



    });


}

function shdetails2(tn) {
    var SoI;
    var input = tn;
    var QueryString = "GetTview";
    SoI = tn.substring(0, 2);
    //$("#ticket_show").text(tn);
    // alert(tn.substring(0, 2) == 'IN');
    
    
        //alert('entered into else');
        $.ajax({
            type: "POST",
            contentType: "application/json; charset=utf-8",
            url: "CRapproval.aspx/getlinkdataSR",
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
                // $('#txt_BR_DEP').val(Result[10]);
                //// $('#txt_impci').val(Result[13]);
                //$('#ddlstatus').val(-1);
                $('#txt_crfid').val(Result[13]);
                $('#txt_Parentapp').val(Result[14]);
                $('#txt_Tester').val(Result[15]);
                $('#txt_CodeReview').val(Result[16]);
                $('#txt_chdtl').val(Result[17]);
                getcrDtl(tn);
                Currstatsshow(Result[9]);
                //// $('#txt_currentstatus').val(Result[9]);
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



function getcrDtl(srno) {
    
    var QueryString = "getSrdetailCr";
    var input = srno;
    $.ajax({
        type: "POST",
        contentType: "application/json; charset=utf-8",
        url: "CRapproval.aspx/dtlcr",
        data: "{QueryStr:'" + QueryString + "',input:'" + input + "',crno:'" + cr_no+"'}",
        dataType: "json",
        success: function (Result) {
            if (Result.d.length > 0) {
                Result = Result.d.split("^");
                //$('#ddlLoanAccn').empty();
                //$('#ddlLoanAccn').append($("<option></option>").val("-1").html("Select Loan Ledger "));
                //$.each(Result.d, function (data, value) {
                //    $('#ddlLoanAccn').append($("<option></option>").val(value.Id).html(value.Name));
                //})
                $('#txt_chdtl').val(Result[0]);
            }
        },
        error: function (Result) {
            alert(Result);
        }
    });
}


function AccName() {
    var LoanAcc = "";
    LoanAcc = $("[id*=hdSerLoan]").val().split("-", 2);
    LoanAccName.innerHTML = $("[id*=hdSerLoan]").val().split("-", 2);
}
//function ModelPopSuccess(msg) {
//    $("#successMsgContent").html(msg);
//    //jQuery("#centralModalDanger").modal('show');
//    $("#centralModalSuccess").modal("show");
//}
function ModelPopWarning(msg) {
    $("#warnMsgContent").html(msg);
    $("#centralModalWarning").modal("show");
}
