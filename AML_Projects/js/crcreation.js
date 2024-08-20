function frmExit() {
    window.open("index.aspx", "_self");
}

$(window).on('load', function () {
   
    ChangeTview();
    urg_dtl();
    impt_dtl();
    ddlcrt_dtl();
    ddlcreffect_dtl();
    crgrpmst_dtl();
    crriskmst_dtl();
    cr_priority();
    owngp();
    sel_tick_row_id = 000;
    rwwid = 0;
    $('#txt_tickdtl').hide();
    //sel_tick.empty();
   // $('#ticket_dtl').empty();
   // $('#divDtl').show();
    //$('#worklogtb').empty();
    //$('#wldv').hide();

    changsts();

   
         


});

////// Sks----- start-------->
var des;
var sum;


function mwlogadd() {

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

function Wlog_Submit() {

   // debugger;
   
     des = $('#wlogadd_descript').val().replace(/[']/gi, '"');
     sum = $('#wlogadd_summary').val().replace(/[']/gi, '"');

    
  
    $('#wlogaddd').modal('hide');
    
   // alert(des);
  
   
}






function changsts() {
   // debugger;
   

    var intPrnc;

    intPrnc = "GetStatusCR";

    $.ajax({
        type: "post",
        contentType: "application/json; charset=utf-8",
        url: "CRBcreation.aspx/Getstatuslst",
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



$(document).ready(function () {
   // debugger
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




    //-------------------Sks end-------------->
    

    //--------attachment show details--
    $('#attachements').on('show.bs.modal', function (event) {
        Attachmentshow();
    });

    $('#attachements').on('hide.bs.modal', function (event) {

        $('#AttachmentDtl').empty();

    });



});












//$('#tblticket').onclick(function () {
//    var row = $(this).find('td:first').text();

//    //alert('You clicked ' + row);
//    var dt = row.toString();
//    shdetails(dt);
//    WorkLogView(dt);
//    $('#tblticket').removeEventListener();


//});

var global_tickno = '';
var sel_tick = [];
var sel_tick_row_id;
var tic_lis_arry = [];
var rwid;

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
            $('#ddlsts').empty();
            $('#ddlstatus').empty();
            $('#ddlsts').append($("<option></option>").val("-1").html("Select status "));
            $('#ddlstatus').append($("<option></option>").val("-1").html("Select status "));
            $.each(Result.d, function (data, value) {
                $('#ddlsts').append($("<option></option>").val(value.Id).html(value.Name));
                $('#ddlstatus').append($("<option></option>").val(value.Id).html(value.Name));
            })
        },
        error: function (Result) {
            alert(Result);
        }
    });
}

function urg_dtl() {
    

    var intPrnc;

    intPrnc = "GetUrgency";

    $.ajax({
        type: "post",
        contentType: "application/json; charset=utf-8",
        url: "CRBcreation.aspx/dllurgency",
        data: "{QueryString:'" + intPrnc + "'}",
        dataType: "json",
        success: function (Result) {
            $('#ddlUrgencyy').empty();
            $('#ddlUrgencyy').append($("<option></option>").val("-1").html("Select impact "));
            $.each(Result.d, function (data, value) {
                $('#ddlUrgencyy').append($("<option></option>").val(value.Id).html(value.Name));

            })
        },
        error: function (Result) {
            alert(Result);
        }
    });
}
function cr_priority() {
   

    var intPrnc;

    intPrnc = "GetPriority";

    $.ajax({
        type: "post",
        contentType: "application/json; charset=utf-8",
        url: "CRBcreation.aspx/getpriority",
        data: "{QueryString:'" + intPrnc + "'}",
        dataType: "json",
        success: function (Result) {
            $('#ddlPriority').empty();
            $('#ddlPriority').append($("<option></option>").val("-1").html("Select priority "));
            $.each(Result.d, function (data, value) {
                $('#ddlPriority').append($("<option></option>").val(value.Id).html(value.Name));

            })
        },
        error: function (Result) {
            alert(Result);
        }
    });
}





function impt_dtl() {
    

    var intPrnc;

    intPrnc = "GetImpact";

    $.ajax({
        type: "post",
        contentType: "application/json; charset=utf-8",
        url: "CRBcreation.aspx/dllimpact",
        data: "{QueryString:'" + intPrnc + "'}",
        dataType: "json",
        success: function (Result) {
            $('#ddlImpact1').empty();
            $('#ddlImpact1').append($("<option></option>").val("-1").html("Select impact "));
            $.each(Result.d, function (data, value) {
                $('#ddlImpact1').append($("<option></option>").val(value.Id).html(value.Name));

            })
        },
        error: function (Result) {
            alert(Result);
        }
    });
}




function ddlcrt_dtl() {
    
    var intPrnc;
    intPrnc = "GET_CRTYP";
    

        $.ajax({
            type: "post",
            contentType: "application/json; charset=utf-8",
            url: "CRBcreation.aspx/SupportT",
            data: "{QueryString:'" + intPrnc + "'}",
            dataType: "json",
            success: function (Result) {
                $('#ddlchtyp').empty();
                $('#ddlchtyp').append($("<option></option>").val("-1").html("select change type "));
                $.each(Result.d, function (data, value) {
                    $('#ddlchtyp').append($("<option></option>").val(value.Id).html(value.Name));

                })
            },
            error: function (Result) {
                alert(Result);
            }
        });
    

  
}
function ddlcreffect_dtl() {
    
    var i;
    var intPrnc;
  
 
    intPrnc = "GET_CRAffectService";
   

        $.ajax({
            type: "post",
            contentType: "application/json; charset=utf-8",
            url: "CRBcreation.aspx/ddlcreffect",
            data: "{QueryString:'" + intPrnc + "'}",
            dataType: "json",
            success: function (Result) {
                $('#ddlServices').empty();
                $('#ddlServices').append($("<option></option>").val("-1").html("select affected service "));
                $.each(Result.d, function (data, value) {
                    $('#ddlServices').append($("<option></option>").val(value.Id).html(value.Name));

                })
            },
            error: function (Result) {
                alert(Result);
            }
        });
    


}
function crgrpmst_dtl() {
    var i;
    var intPrnc;
   
    intPrnc = "GET_CrGrpMst";
    

        $.ajax({
            type: "post",
            contentType: "application/json; charset=utf-8",
            url: "CRBcreation.aspx/crgrpmst",
            data: "{QueryString:'" + intPrnc + "'}",
            dataType: "json",
            success: function (Result) {
                $('#ddlGroup').empty();
                $('#ddlGroup').append($("<option></option>").val("-1").html("select group"));
                $.each(Result.d, function (data, value) {
                    $('#ddlGroup').append($("<option></option>").val(value.Id).html(value.Name));

                })
            },
            error: function (Result) {
                alert(Result);
            }
        });
    


}
function crriskmst_dtl() {
    
    var i;
    var intPrnc;

    intPrnc = "GET_CrRiskMst";
    

        $.ajax({
            type: "post",
            contentType: "application/json; charset=utf-8",
            url: "CRBcreation.aspx/CrRisk",
            data: "{QueryString:'" + intPrnc + "'}",
            dataType: "json",
            success: function (Result) {
                $('#ddlchangeRiskk').empty();
                $('#ddlchangeRiskk').append($("<option></option>").val("-1").html("select risk "));
                $.each(Result.d, function (data, value) {
                    $('#ddlchangeRiskk').append($("<option></option>").val(value.Id).html(value.Name));

                })
            },
            error: function (Result) {
                alert(Result);
            }
        });
    


}



function owngp() {

    var i;
    var intPrnc;

    intPrnc = "GetBinownerR";


    $.ajax({
        type: "post",
        contentType: "application/json; charset=utf-8",
        url: "CRBcreation.aspx/getowngp",
        data: "{QueryString:'" + intPrnc + "'}",
        dataType: "json",
        success: function (Result) {
            $('#ddlchowner').empty();
            $('#ddlchowner').append($("<option></option>").val("-1").html("select risk "));
            $.each(Result.d, function (data, value) {
                $('#ddlchowner').append($("<option></option>").val(value.SId).html(value.SName));

            })
        },
        error: function (Result) {
            alert(result.d);
        }
    });



}






function Tview() {
    $('#txt_tickdtl').show();
    $('#divtblPrincpleIntDtl').show();
    $('#tblticket').show();
    
    var InputString = $("#txt_ticketno").val();
    var Querystring = "GetSrInPbGb";
    $.ajax({
        type: "POST",
        contentType: "application/json; charset=utf-8",
        url: "CRBcreation.aspx/GetTble",
        data: "{QueryStr : '" + Querystring + "',input :'" + InputString + "'}",
        dataType: "json",
        success: function (Result) {
            if (Result.d.length > 0) {
                $('#ticket_dtl').empty();//t.fi_name,t.branch,t.addrss,t.contact_person,t.phone_no,t.mobile_no,t.email_id,t.pan,t.gstn,t.cin
                $('#ticket_dtl').append('<thead class="bg-success text-white">< tr ><th scope="col">Incident/SR</th><th scope="col">Summary</th><th scope="col">Decription</th> <th scope="col">Rep.date</th><th scope="col">BUTTON</th></tr></thead><tbody class="border border-dark">'
                );
                for (var i = 0; i < Result.d.length; i++) {
                    $('#ticket_dtl').append('<tr><td>' + Result.d[i].INName + '</td>' +
                        //'<td>' + Result.d[i].Branchordep + '</td>' +
                        '<td>' + Result.d[i].Summary + '</td>' +
                        '<td>' + Result.d[i].Desc + '</td>' +
                        '<td>' + Result.d[i].Repdate + '</td>' +
                        '<td><input type="button" value="add" id=' + i +' class="btn btn-info" data-toggle="modal" onclick="Addselecttb(this.id)" data-backdrop="false"/></td>' +
 '</tr >');
                }
                $('#ticket_dtl').append(
                    '</tbody>');
            }
        },
        error: function (Result) {
            alert(Result);
        }
    });



}





function Addselecttb() {
    var p = 0;
   // alert('entered into addselecttb');
    //alert($('#txt_chdtl').val());
    //rwid = global_tickno;
    //var x = document.getElementById("txt_ch_dtl").value;
    if ($('#txt_chdtl').val() =="") {
        alert('please enter Details');
    }
    else {

        //var retrospective = 0;
        //var rwstr = '';
        //rwwid = 1;
        //var tick_valu = '';
        //var p = 0;
        //var temp = rwid;
        //// alert('array element' + sel_tick[0]);
        //rwid = rwid + 1;
        var k = global_tickno;;
        //alert(k)
        for (i = 0; i < sel_tick.length; i++) {
            if ((sel_tick[i] == k) || (sel_tick.length == 0)) {
                alert('Already Inserted Element');
                p = 1;
            }
        }
        if (p == 0) {
            //alert('received  row id' + rwid);
            //alert("[id*=hdUserId]").val().toString() ); 
            //alert('first row' + $('#ticket_dtl tr:eq(' + rwid + ') td:eq(0)').text());
            //alert(sel_tick_row_id + 'row id from add function');
            $('#select_tick_ls').append('<tr><td>' + global_tickno + '</td>' +
                '<td>' + $('#txt_EMPNO').val() + '</td>' +
                '<td>' + $('#txt_BR_DEP').val() + '</td>' +
                '<td>' + $('#txt_chdtl').val() + '</td>' +
                '<td><input type="button" value="X REMOVE" class="btn btn-info" data-toggle="modal" onclick="selet_row_remove()" data-backdrop="false" /></td>' + '</tr>');
            $('#select_tick_ls').append('</tbody>');
            tick_valu = global_tickno;
            sel_tick.push(tick_valu);
            rwstr = global_tickno + "¥" + $('#txt_chdtl').val();
            //alert(rwstr);
            tic_lis_arry.push(rwstr);

            sel_tick_row_id = sel_tick_row_id + 1;
        }
        $('#txt_crtitle').val(null);
    }


}





function selet_row_remove() { 
    var i;
    var m;
    $('#select_tick_ls').find('tr').click(function () {
        var relement = $(this).index();
        relement = relement + 1;
        var row = $(this).find('td:first').text();
        $('#select_tick_ls tr:eq('+ relement+')').remove();
        sel_tick = $.grep(sel_tick, function (value) {
            return value != row;
           

        });
       
        $('#select_tick_ls').removeEventListener();
       
        
       

    });
   
}




function each_rw_sbmit(InputString, ch_no) {
    //var p = 'NOT Successfully Submited';
   // alert('row submit function' + InputString + 'chno' + ch_no);
    var Querystring = 'cr_row_insert';
    $.ajax({
        type: "POST",
        contentType: "application/json; charset=utf-8",
        url: "CRBcreation.aspx/sub_row_cr_create",
        data: "{QueryStr : '" + Querystring + "',input :'" + InputString + "',ch_no :'" + ch_no + "'}",
        dataType: "json",
        success: function (Result) {
            if (Result.d.length > 0) {
                
                Result = Result.d;
               // alert(Result);
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



function chng_req_sub() {

  

     //des = $('#wlogadd_descript').val().replace(/[']/gi, '"');
     //sum = $('#wlogadd_summary').val().replace(/[']/gi, '"');


    //alert('ARRAY LENGTH' + tic_lis_arry.length);
    var TicketString = '';
    var retrospective;
    var rollback;
    var scdate = $("#date1").val();
    var imdate = $("#date2").val();
    var cldate = $("#date3").val();



    if ($('#ddlchtyp').val() == -1) {

        alert('Please Select Change Type');
    } else if ($('#radRetroN').prop('checked') == false && $('#radRetroY').prop('checked') == false) {

        alert('Select Option Retrospective');
    } else if ($('#ddlImpact1').val() == -1) {
        alert('Please Select Impact');

    }
    else if ($('#ddlUrgencyy').val() == -1) {
        alert('Please Select Urgency');
    } else if ($('#ddlPriority').val() == -1) {
        alert('Please Select Priority');
    } else if ($('#ddlchangeRiskk').val() == -1) {
        alert('Please Select ChangeRIsk');
    }
    else if ($('#ddlGroup').val() == -1) {
        alert('Please Select Group');
    } else if ($('#ddlchowner').val() == -1) {
        alert('Please Select ChangeOwner');
    } else if ($('#ddlchowner').val() == -1) {
        alert('Please Select ChangeOwner');
    } else if ($('#radN').prop('checked') == false && $('#radY').prop('checked') == false) {

        alert('Select Option Rollback Yes Or No');
    } else if ($('#ddlServices').val() == -1) {
        alert('Please Select ServicesEffected');
    }
    else if ($('#ddlcurrsts').val() == -1) {
        alert('Please Select current status');
    }


    else if ($('#date1').val() == "") {
        alert('Please Select  Scheduled start date');
    }
    else if ($('#date2').val() == "") {
        alert('Please Select  implementation date');
    }
    else if ($('#date3').val() == "") {
        alert('Please Select  closure date');
    }
    else {
        //var strr = $("[id*=hdUserId]").val();
        
        if ($("#radY").prop("checked") == true) {
            rollback = 1;

        }
        else if ($("#radN").prop("checked") == true) {
            rollback = 0;
        }
        if ($("#radRetroY").prop("checked") == true) {
            retrospective = 1;

        }
        else if ($("#radRetroN").prop("checked") == true) {
            retrospective = 0;
        }

        
        //var InputString = "jbn" + "¥" + "jbn2";
        //alert(InputString);
       // debugger;
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




                                       //1                                     2                                        3                         4                                                      5                                                 6                                             7                                                      8                                        9                                  10                                                            11                 12                       13                              14           15             16                       17         
                var InputString = $("[id*=hdUserId]").val() + "¥" + $('#ddlchtyp option:selected').val() + "¥" + retrospective + "¥" + $('#ddlImpact1 option:selected').val() + "¥" + $('#ddlUrgencyy option:selected').val() + "¥" + $('#ddlPriority option:selected').val() + "¥" + $('#ddlchangeRiskk option:selected').val() + "¥" + $('#ddlGroup option:selected').val() + "¥" + $('#ddlchowner option:selected').val() + "¥" + rollback /*+ "¥" + $('#ddlServices option:selected').val()*/ + "¥" + scdate + "¥" + imdate + "¥" + $('#ddlcurrsts option:selected').val() + "¥" + sum + "¥" + des + "¥" + cldate + "¥" + $('#ddlServices option:selected').val() ;
               
                  //                    1                                                                                                                                  
                var InputString2 = fileName;


                var Querystring = "cr_insert";
               

                //alert('slelected tick0' + tic_lis_arry[0]);
                //alert('slelected tick1' + tic_lis_arry[1]);

                $.ajax({
                    type: "POST",
                    contentType: "application/json; charset=utf-8",
                    url: "CRBcreation.aspx/sub_cr_create",
                    data: "{QueryStr : '" + Querystring + "',input :'" + InputString + "',input2 :'" + InputString2 + "',input3:'" + imageData + "'}",
                    dataType: "json",
                    success: function (Result) {
                        if (Result.d.length > 0) {
                            //alert(Result.d);
                            Result = Result.d;
                            call_insert(Result);
                            //alert(Result);
                        } //else {

                        //    alert('result.d is empty');
                        //}
                    },
                    error: function (Result) {
                        alert(Result.d);
                    }
                });


            }

        }
    }
}
        function call_insert(k) {
            //alert('entered into call insert function');
            var temp;
            var i;
            // alert(tic_lis_arry.length);
            //alert('call insert'+k);
            for (i = 0; i < tic_lis_arry.length; i++) {
                // alert('entered into for loop');
                temp = i + "¥" + tic_lis_arry[i];
                each_rw_sbmit(temp, k);
            }
            alert('Successfully Inserted  Ticket Number=' + k);
            window.open('CRBcreation.aspx', '_self');
        }


        //function WorkLogView(dt) {
        //    // alert('ENTERED INTO WORK LOG VIEW FUB=NCTION');
        //    $('#worklogtb').empty();
        //    $('#wldv').show();
        //    var InputString = dt;
        //    var Querystring = "GetAllWlog";
        //    $.ajax({
        //        type: "POST",
        //        contentType: "application/json; charset=utf-8",
        //        url: "ticketview.aspx/GtWlogTble",
        //        data: "{QueryStr : '" + Querystring + "',input :'" + InputString + "'}",
        //        dataType: "json",
        //        success: function (Result) {
        //            //alert("ENTERD INTO RESULT FUNCTION");
        //            if (Result.d.length > 0) {
        //                $('#worklogtb').empty();//t.fi_name,t.branch,t.addrss,t.contact_person,t.phone_no,t.mobile_no,t.email_id,t.pan,t.gstn,t.cin
        //                $('#worklogtb').append('<thead class="bg-success text-white">< tr ><th scope="col">DATE</th><th scope="col">EMPLOYEE CODE</th><th scope="col">DEPARTMENT</th><th scope="col">Summary</th><th scope="col">Decription</th><th scope="col">Ticket Status</th></tr></thead><tbody class="border border-dark">'
        //                );
        //                for (var i = 0; i < Result.d.length; i++) {

        //                    $('#worklogtb').append('<tr><td>' + Result.d[i].Date + '</td>' +
        //                        '<td > ' + Result.d[i].Empcode + '</td > ' +
        //                        '<td>' + Result.d[i].Department + '</td > ' +
        //                        '<td>' + Result.d[i].Summary + '</td>' +
        //                        '<td>' + Result.d[i].Description + '</td>' +
        //                        '<td>' + Result.d[i].Ticketstatus + '</td>' + '</tr >');
        //                }
        //                $('#worklogtb').append(
        //                    '</tbody>');
        //            }
        //        },
        //        error: function (Result) {
        //            alert(Result);
        //        }
        //    });



        //}


        function ChangeTview() {
            //alert('entered into change ticketview function');
            var k;
            //$('#divtblPrincpleIntDtl').show();
            //$('#tblticket').show();

            var Querystring = "GetChangeTicket";

            var InputString = $("[id*=hdUserId]").val();

            $.ajax({
                type: "POST",
                contentType: "application/json; charset=utf-8",
                url: "CRBcreation.aspx/GetUserTble",
                data: "{QueryStr : '" + Querystring + "',input :'" + InputString + "'}",
                dataType: "json",
                success: function (Result) {
                    if (Result.d.length > 0) {
                        $('#ticket_dtl').empty();
                        $('#ticket_dtl').append('<thead>< tr ><td scope="col">NO</td><td scope="col">Incident/SR</td><td scope="col">Branch/dep</td><td scope="col">Summary</td> <td scope="col">Decription</td> <td scope="col">Rep.date</td> <td scope="col">Status</td></tr></thead><tbody>');
                        for (var i = 0; i < Result.d.length; i++) {
                            k = i + 1;
                            $('#ticket_dtl').append('<tr data-toggle="modal" data-target="#ticketdet" onmousedown="gr()"><td>' + k + '</td>' +
                                '<td>' + Result.d[i].INName + '</td>' +
                                '<td>' + Result.d[i].Branchordep + '</td>' +
                                '<td>' + Result.d[i].Summary + '</td>' +
                                '<td>' + Result.d[i].Desc + '</td>' +
                                '<td>' + Result.d[i].Repdate + '</td>' +
                                '<td>' + Result.d[i].Status + '</td>' + '</tr>');
                        }
                        $('#ticket_dtl').append(
                            '</tbody>');
                    } else {

                        $('#ticket_dtl').empty();
                        $('#ticket_dtl').hide();

                    }

                },
                error: function (Result) {
                    alert(Result);
                }
            });



        }

        function gr() {

            $('#ticket_dtl').find('tr').click(function () {
                var row = $(this).find('td:eq(1)').text();
                shdetails(row);
                //WorkLogView(row);
                //UserApprvTview(row);
                global_tickno = row;
                $('#ticket_dtl').removeEventListener();



            });


        }



        function shdetails(tn) {
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
                    url: "CRBcreation.aspx/getlinkdataIN",
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
                $.ajax({
                    type: "POST",
                    contentType: "application/json; charset=utf-8",
                    url: "CRBcreation.aspx/getlinkdataSR",
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
                        // $('#txt_impci').val(Result[13]);
                        $('#ddlstatus').val(-1);
                        $('#txt_crfid').val(Result[13]);
                        $('#txt_Parentapp').val(Result[14]);
                        $('#txt_Tester').val(Result[15]);
                        $('#txt_CodeReview').val(Result[16]);
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
    





    