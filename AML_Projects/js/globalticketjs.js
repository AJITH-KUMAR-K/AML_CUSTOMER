function frmExit() {
    window.open("index.aspx", "_self");
}

$(window).on('load', function () {
    $("#txt_rptfrm").datepicker({
        dateFormat: 'dd/MM/yy',
        maxDate: 0,
        changeMonth: true,
        changeYear: true,
        stepMonths: true,
        todayHighlight: true,
        onSelect: function (dateText, inst) {

        }
    });

    $("#txt_rptto").datepicker({
        dateFormat: 'dd/MM/yy',
        maxDate: 0,
        changeMonth: true,
        changeYear: true,
        stepMonths: true,
        todayHighlight: true,
        onSelect: function (dateText, inst) {

        }
    });
    
    statusshow();
    severityshow();
    $('#tblticket').empty();
    $('#divtblPrincpleIntDtl').hide();
  //  $('#tickno_div').hide();
    //$('.date_bx').hide();
    //$('#sts_div').hide();
    //$('#search_div').hide();
    $('input[type="checkbox"]').on('change', function () {
        $('input[type="checkbox"]').not(this).prop('checked', false);
        if ($('#chk_tickno').prop('checked') == true) {
            $('#tickno_div').show();
            $('.date_bx').hide();
            $('#sts_div').hide();
            $('#search_div').show();
            $('#txt_rptfrm').val('');
            $('#txt_rptto').val('');
            $('#ddlsts').val(-1);
           
        }
        else if ($('#chk_rpt_frm').prop('checked') == true) {           
            $('#tickno_div').hide();
            $('.date_bx').show();
            $('#sts_div').hide();
            $('#search_div').show();
            $('#txt_ticketno').val('');
            $('#ddlsts').val(-1);
           
        }
        else if ($('#chk_sts').prop('checked') == true) {
            $('#tickno_div').hide();
            $('.date_bx').hide();
            $('#sts_div').show();
            $('#search_div').show();
            $('#txt_ticketno').val('');
            $('#txt_rptfrm').val('');
            $('#txt_rptto').val('');
        }
        $('input[type="checkbox"]').removeEventListener();
    });

});
var tick_arr = '';
var tkp = '';
var g_l_i;
var global_lable_no = [];

$(window).on('ready', function () {
    g_l_i = 0;
    tick_arr = '';
    global_lable_no.empty();
   
});
//--------------------------sruthy----------------
function severityshow() {
   
    var intPrnc;

    intPrnc = "GetSeverity";

    $.ajax({
        type: "post",
        contentType: "application/json; charset=utf-8",
        url: "GlobalTicket.aspx/severitystatus",
        data: "{QueryString:'" + intPrnc + "'}",
        dataType: "json",
        success: function (Result) {
            debugger;
            $('#ddlseverity').empty();
            $('#ddlstatus').empty();
            $('#ddlseverity').append($("<option></option>").val("-1").html("Select status "));
           $('#ddlstatus').append($("<option></option>").val("-1").html("Select status "));
            $.each(Result.d, function (data, value) {
                $('#ddlseverity').append($("<option></option>").val(value.Id).html(value.Name));
               $('#ddlstatus').append($("<option></option>").val(value.Id).html(value.Name));
            })
        },
        error: function (Result) {
            alert(Result);
        }
    });
}


//---------------------------------------------


var tdid = "";
function Tview1() {
    //$("#hosupport").hide();
    var k;
   // $('#TICK_TBL_NAME').text('SEARCHED TICKETS');
    $('#divtblPrincpleIntDtl').show();
    $('#tblticket').show();


    var txtsr = $("#txt_ticketno").val().toUpperCase();
    var txtsdate = $("#txt_rptfrm").val();
    var txtendate = $("#txt_rptto").val();
    var status = $("#ddlsts").val();
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
    //alert(InputString);
    var Querystring = "getgbNewSearch";
    $.ajax({
        type: "POST",
        contentType: "application/json; charset=utf-8",
        url: "GlobalTicket.aspx/GetTble",
        data: "{QueryStr : '" + Querystring + "',input :'" + InputString + "'}",
        dataType: "json",
        success: function (Result) {
            if (Result.d.length > 0) {
                $('#tblticket').empty();
                $('#tblticket').append('<thead>< tr ><td scope="col">NO</td><td scope="col">Incident/SR</td><td scope="col">Branch/dep</td><td scope="col">Summary</td> <td scope="col">Decription</td> <td scope="col">Rep.date</td><td scope="col">Sts</td><td scope="col">Add</td></tr></thead><tbody>'
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
                        '<td>' + '<input type = "button" value="ADD" name = "btn1" id="' + i + '" onclick="chkb_tick(this.id)"/>' + '</td>' +
                        '</tr >');
                }
                $('#tblticket').append(
                    '</tbody>');
            }
            else {
                alert('No Entries Found or ticket alreday added');
                $('#tblticket').empty();
            }
        },
        error: function (Result) {
            alert(Result);
        }
    });
}
function statusshow()
{ 
    var intPrnc; 
    intPrnc = "GetGBStatus";  
    $.ajax({
        type: "post",
        contentType: "application/json; charset=utf-8",
        url: "GlobalTicket.aspx/ticketstatus",
        data: "{QueryString:'" + intPrnc + "'}",
        dataType: "json",
        success: function (Result) {
            debugger;
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










function Tview() {
    if ($('#txt_ticketno').val() == '' && $('#ddlsts').val() == -1 && $('#txt_rptfrm').val() == '' && $('#txt_rptto').val() == '') {

        alert('Enter Search Options ');
    } else {

        $('#divtblPrincpleIntDtl').show();
        $('#tblticket').show();
        //var InputString = $("#txt_ticketno").val() + "¥" + $("#txt_rptfrm").val() + "¥" + $("#txt_rptto").val() + "¥" + $("#ddlsts").val();
        var txtsr = $("#txt_ticketno").val();
        var txtsdate = $("#txt_rptfrm").val();
        var txtendate = $("#txt_rptto").val();
        var status = $("#ddlsts").val();
        Querystring = "SearchInGb";

        if (txtsr != '' && txtsdate == '' && txtendate == '' && status == -1) {
            //Querystring = "GetincidentID";
            var InputString = 'GetById' + "¥" + $("#txt_ticketno").val();
        }
        else if (txtsr == '' && txtsdate != '' && txtendate != '' && status == -1) {
            //Querystring = "GetinDate";
            var InputString = 'GetByDate' + "¥" + $("#txt_rptfrm").val() + "¥" + $("#txt_rptto").val();
        }
        //else if (txtsr != '' && txtsdate != '' && txtendate != '' && status != -1) {
        //    Querystring = "Getincidentdata";
        //}
        else if (txtsr == '' && txtsdate == '' && txtendate == '' && status != -1) {
            // Querystring = "GetinSt";
            var InputString = 'GetBySts' + "¥" + $("#ddlsts option:selected").val();
        }


        $.ajax({
            type: "POST",
            contentType: "application/json; charset=utf-8",
            url: "GlobalTicket.aspx/GetTble",
            data: "{QueryStr : '" + Querystring + "',input :'" + InputString + "'}",
            dataType: "json",
            success: function (Result) {
                if (Result.d.length > 0) {
                    $('#divtblPrincpleIntDtl').show();
                    $('#tblticket').empty();//t.fi_name,t.branch,t.addrss,t.contact_person,t.phone_no,t.mobile_no,t.email_id,t.pan,t.gstn,t.cin
                    $('#tblticket').append('<thead class="bg-success text-white">< tr ><th scope="col">Incident/SR</th><th scope="col">Branch/dep</th><th scope="col">Summary</th> <th scope="col">Decription</th> <th scope="col">Rep.date</th><th scope="col">checkbox</th></tr></thead><tbody class="border border-dark">'
                    );
                    for (var i = 0; i < Result.d.length; i++) {
                        $('#tblticket').append('<tr><td>' + Result.d[i].INName + '</td>' +
                            '<td>' + Result.d[i].Branchordep + '</td>' +
                            '<td>' + Result.d[i].Summary + '</td>' +
                            '<td>' + Result.d[i].Desc + '</td>' +
                            '<td>' + Result.d[i].Repdate + '</td>' +
                            '<td>' + '<input type = "button" value="ADD" name = "btn1" id="' + i + '" onclick="chkb_tick(this.id)"/>' + '</td>' +
                            '</tr >');
                    }
                    $('#tblticket').append(
                        '</tbody>');
                } else {
                    alert('No Tickets OR Already Added to global');
                    $('#tblticket').empty();
                    $('#divtblPrincpleIntDtl').hide();


                }

            },
            error: function (Result) {
                alert(Result);
            }
        });
    }

   
}


function gr() {

    $('#tblticket').find('tr').click(function () {
        var row = $(this).find('td:first').text();


        

        shdetails(row);

        WorkLogView(row);
        $('#tblticket').removeEventListener();


    });


}
function chkb_tick(i) {
    var ins_y_n = 0;
    var r = '';
    var k = ''; 
    r = parseInt(i);
    r = r + 1;
    k = $('#tblticket tr:eq(' + r + ')').find('td:eq(1)').text();
    
    for (var i = 0; i < global_lable_no.length; i++) {
        if (global_lable_no[i] == k) {
            ins_y_n = 1;

        }
    }
    if (ins_y_n == 1) {
        alert('already inserted element');
    }
    else {
        global_lable_no.push(k);
        g_l_i++;
        tick_lab(k);
    }
}
function tick_lab(tickno) {
    var tdid = tickno;    
          $('#tick_lis').append('<div id="' + tdid + '" style="border:solid;float:left;width:100px"><input type="button" style="background-color:dimgray;color:white;" name=' + tdid + ' value="X" onclick="rmv_lab(this.name)"/>' + tdid + '</div>');
        i++;
        lab_div_id = 'lab_div_id' + i.toString;
    
    
}
function rmv_lab(tkp) {
    global_lable_no = $.grep(global_lable_no, function(value) {
        return value != tkp;
});
    $('#' + tkp+'').remove();


}
function delet_tick_tbl(i) {
    
    var k;
    r = parseInt(i);
    r = r + 1;
    k = $('#tblticket tr:eq(' + r + ')').find('td:first').text();
    $('#tblticket tr:eq' + r + ' td:id(' + k.toString() + ')').remove();

}


function AddGB() {
    var sr = '';
    for (var i = 0; i < global_lable_no.length; i++)
    {
        sr = sr + global_lable_no[i]+",";
    }
    
    $('#SUBMIT').prop('disabled', false);
    $('#btnExit').prop('disabled', false);
    var gbid = '';

    var inc;
    var str = '';
    if (global_lable_no.length == 0) {
        alert('Select Ticket');

    }
    else if ($('#txt_gbtitle').val() == '') {
        alert('Enter Title');

    }
    else if ($('#ddlseverity').val() == -1) {
        alert('Please Select Severity');
    }
    else if ($('#txt_gbdescription').val() == '') {
        alert('Enter Description');

    }
    else {
        for (inc = 0; inc < global_lable_no.length; inc++) {
            tick_arr = tick_arr + global_lable_no[inc] + "¥";
        }

        var InputData = $("#txt_gbtitle").val() + "¥" + $("#txt_gbdescription").val() + "¥" + $("[id*=hdUserId]").val() + "¥" + sr + "¥" + $('#ddlseverity option:selected').val();
      

        if ($('#FileUpload').val() =='') {
            
       
            $.ajax({
                type: "POST",
                contentType: "application/json; charset=utf-8",
                url: "GlobalTicket.aspx/SVgbNoAtt",
                data: "{input:'" + InputData + "'}",
                dataType: "json",
                success: function (Result) {

                    //Result = Result.d;
                    if (Result.d.length>0) {

                        //Getsuccessid();
                        alert('Ticket No = ' + Result.d);
                        Getupdate(Result.d);
                    }

                },

                error: function (Result) {
                    alert(Result.d);
                }
            });

           // gbno_add(gbid);




        } else {
          
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
                  
                  
                    //if (d1[1] != "jpeg" && d1[1] != "jpg" && d1[1]  != "png") {

                    //    alert("Invalid Format");
                    //    return false;
                    //}
                  //  alert(InputData);

                    InputData = InputData + "¥" + fileName.replace(/[ ]/gi, '')
                    //var InputData = $("#txt_gbtitle").val() + "¥" + $("#txt_gbdescription").val() + "¥" + $("[id*=hdUserId]").val();
                    $.ajax({
                        type: "POST",
                        contentType: "application/json; charset=utf-8",
                        url: "GlobalTicket.aspx/confirmdocument",
                        data: "{val:'" + InputData + "',upload_file:'" + imageData + "'}",
                        dataType: "json",
                        success: function (Result) {
                            Result = Result.d;
                            Result = Result.split("¥");

                            //Result = Result.d;
                            if (Result[0] == "Successfully Uploaded") {

                                alert('Ticket Number:='+Result[1]);
                              
                                Result = Result[1].replace(/'/g, '');
                                Getupdate(Result);
                                //Getsuccessid();

                            }

                        },

                        error: function (Result) {
                            alert(Result.d);
                        }
                    });
                }
                   // gbno_add(gbid);

                    }

                 }
            }
        
        }
    

 



function Getsuccessid() {
  
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
            
        },
        error: function (Result) {

            alert(Result);
        }


    });
   
    

}


function Getupdate(gbno)
{
    
    var gbtickno;
    var QueryString = "Geupdategb";

    var InputString = gbno;
    
    $.ajax({

        type: "POST",
        contentType: "application/json; charset=utf-8",
        url: "GlobalTicket.aspx/getupdate",
        data: "{QueryStr : '" + QueryString + "',input :'" + InputString + "',arry:'" + tick_arr + "'}",
        dataType: "json",
        success: function (Result) {
       

            //alert('ticket no=' + Result.d);
            //alert('ticket no=' + Result.d);

            window.open('GlobalTicket.aspx', '_self');

        },
        error: function (Result) {

            alert(Result);
        }


    });
    


}