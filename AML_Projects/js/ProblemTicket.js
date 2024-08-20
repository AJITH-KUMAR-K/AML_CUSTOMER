function frmExit() {
    window.open("index.aspx", "_self");
}
$(window).on('load', function () {
    $("#SelctType").hide();
    $("#divtblsh").hide();
    $("#tick_sel").hide();
    //GetAssignDtls();
    GetStatusup();
   // GetAssignToType();
   

    //$("#txt_ReportedBy").val( $("[id*=hduname]").val());
   
    $("#txt_AgrmntDt").datepicker({
        dateFormat: 'dd/MM/yy',
        changeMonth: true,
        changeYear: true,
        stepMonths: true,
        todayHighlight: true,
        onSelect: function (dateText, inst) {

        }
    });

    $("#txt_DtAgrmntFrm").datepicker({
        dateFormat: 'dd/MM/yy',
        changeMonth: true,
        changeYear: true,
        stepMonths: true,
        todayHighlight: true,
        onSelect: function (dateText, inst) {

        }
    });

    $("#txt_DtAgrmntTo").datepicker({
        dateFormat: 'dd/MM/yy',
        changeMonth: true,
        changeYear: true,
        stepMonths: true,
        todayHighlight: true,
        onSelect: function (dateText, inst) {

        }
    });


    $('#date_div1').hide();
    $('#tickno_div').hide();
    $('#date_div').hide();
    $('#sts_div').hide();
    $('#search_div').hide();
    $('input[type="checkbox"]').on('change', function () {
        $('input[type="checkbox"]').not(this).prop('checked', false);
        if ($('#chk_tickno').prop('checked') == true) {
            $('#tickno_div').show();
            $('#date_div').hide();
            $('#date_div1').hide();
            $('#sts_div').hide();
            $('#search_div').show();
            $('#txt_AgrmntDt').val('');
            $('#txt_DtAgrmntTo').val('');
            $('#ddlStatus').val(-1);

        }
        else if ($('#chk_rpt_frm').prop('checked') == true) {
            $('#tickno_div').hide();
            $('#date_div').show();
            $('#date_div1').show();
            $('#sts_div').hide();
            $('#search_div').show();
            $('#txt_ticketno').val('');
            $('#ddlStatus').val(-1);

        }
        else if ($('#chk_sts').prop('checked') == true) {
            $('#tickno_div').hide();
            $('#date_div').hide();
            $('#date_div1').hide();
            $('#sts_div').show();
            $('#search_div').show();
            $('#txt_ticketno').val('');
            $('#txt_AgrmntDt').val('');
            $('#txt_DtAgrmntTo').val('');
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
//function GetFundDtls() {
//    var QueryString = "GetFundType";
//    $.ajax({
//        type: "POST",
//        contentType: "application/json; charset=utf-8",
//        url: "NewFund.aspx/getFundType",
//        data: "{QueryString:'" + QueryString + "'}",
//        dataType: "json",
//        success: function (Result) {
//            $('#ddlCatgry').empty();
//            $('#ddlCatgry').append($("<option></option>").val("-1").html("Select Fund Category "));
//            $.each(Result.d, function (data, value) {
//                $('#ddlCatgry').append($("<option></option>").val(value.Id).html(value.Name));
//            })
//        },
//        error: function (Result) {
//            alert(Result);
//        }
//    });
//}


/*---------start-Dropdown  status-----*/

function GetStatusup() {
    
    var QueryString = "GetStatus";
    $.ajax({
        type: "POST",
        contentType: "application/json; charset=utf-8",
        url: "ProblemTicket.aspx/getSubCategory",
        data: "{QueryString:'" + QueryString + "'}",
        dataType: "json",
        success: function (Result) {
            $('#ddlsts').empty();
            $('#ddlsts').append($("<option></option>").val("-1").html("Select Status "));
            $.each(Result.d, function (data, value) {
                $('#ddlsts').append($("<option></option>").val(value.INSubId).html(value.INSubName));
            })
        },
        error: function (Result) {
            alert(Result);
        }
        
    });
   
}

/*-------end------*/

/*---------start-Dropdown  Requesttype-----*/

function GetAssignToType() {

    var QueryString = "GetAssignTO";
    var input = $("#ddlassign").val();
    $.ajax({
        type: "POST",
        contentType: "application/json; charset=utf-8",
        url: "ProblemTicket.aspx/getAssignto",
        data: "{QueryString:'" + QueryString + "',input : '" + input + "'}",
        dataType: "json",
        success: function (Result) {
            $('#ddlassignto').empty();
            $('#ddlassignto').append($("<option></option>").val("-1").html("Select Assign To "));
            $.each(Result.d, function (data, value) {
                
                $('#ddlassignto').append($("<option></option>").val(value.ReqId).html(value.ReqName));
            })
        },
        error: function (Result) {
            alert(Result);
        }

    });

}

/*-------dropdown-urgency------*/
//function GetUrgency() {

//    var QueryString = "GetUrgency";
//    $.ajax({
//        type: "POST",
//        contentType: "application/json; charset=utf-8",
//        url: "ProblemTicket.aspx/getUrgencyprio",
//        data: "{QueryString:'" + QueryString + "'}",
//        dataType: "json",
//        success: function (Result) {
//            $('#ddlUrgency').empty();
//            $('#ddlUrgency').append($("<option></option>").val("-1").html("Select Urgency/Priority "));
//            $.each(Result.d, function (data, value) {
//                $('#ddlUrgency').append($("<option></option>").val(value.PrioId).html(value.PrioName));
//            })
//        },
//        error: function (Result) {
//            alert(Result);
//        }

//    });

//}
/*-------dropdown-incategory------*/
//function GetINCategory() {

//    var QueryString = "GetINCategory";
//    $.ajax({
//        type: "POST",
//        contentType: "application/json; charset=utf-8",
//        url: "ProblemTicket.aspx/getINCategory",
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
//            alert(Result);
//        }

//    });

//}
/*-------dropdown-inSUBcategory------*/
//function GetINsubCategory() {
//    var InputString = $("#ddlClassification").val();
//    var QueryString = "GetINsubCategory";
//    $.ajax({
//        type: "POST",
//        contentType: "application/json; charset=utf-8",
//        url: "ProblemTicket.aspx/getSubCategory",
//        data: "{QueryString:'" + QueryString + "',input : '" + InputString + "'}",
//        dataType: "json",
//        success: function (Result) {
//            $('#ddlsubCategory').empty();
//            $('#ddlsubCategory').append($("<option></option>").val("-1").html("Select Sub Category "));
//            $.each(Result.d, function (data, value) {
//                $('#ddlsubCategory').append($("<option></option>").val(value.INSubId).html(value.INSubName));
//            })
//        },
//        error: function (Result) {
//            alert(Result);
//        }

//    });

//}
//function GetSeverity() {

//    var QueryString = "GetSeverity";
//    $.ajax({
//        type: "POST",
//        contentType: "application/json; charset=utf-8",
//        url: "ProblemTicket.aspx/GetSeverity",
//        data: "{QueryString:'" + QueryString + "'}",
//        dataType: "json",
//        success: function (Result) {
//            $('#ddlSeverity').empty();
//            $('#ddlSeverity').append($("<option></option>").val("-1").html("Select Severity"));
//            $.each(Result.d, function (data, value) {
//                $('#ddlSeverity').append($("<option></option>").val(value.SevId).html(value.SevName));
//            })
//        },
//        error: function (Result) {
//            alert(Result);
//        }

//    });

//}
/*---------start-Dropdown  impact----*/

//function GetImpact() {

//    var QueryString = "GetImpact";
//    $.ajax({
//        type: "POST",
//        contentType: "application/json; charset=utf-8",
//        url: "ProblemTicket.aspx/getImpact",
//        data: "{QueryString:'" + QueryString + "'}",
//        dataType: "json",
//        success: function (Result) {
//            $('#ddlImpact').empty();
//            $('#ddlImpact').append($("<option></option>").val("-1").html("Select Impact "));
//            $.each(Result.d, function (data, value) {
//                $('#ddlImpact').append($("<option></option>").val(value.ImpctId).html(value.ImpctName));
//            })
//        },
//        error: function (Result) {
//            alert(Result);
//        }

//    });

//}
/*---------start-Dropdown  source-----*/

function GetAssignDtls() {
   
    var QueryString = "GetAssignTeam";
    $.ajax({
        
        type: "POST",
        contentType: "application/json; charset=utf-8",
        url: "ProblemTicket.aspx/getAssignData",
        data: "{QueryString:'" + QueryString + "'}",
        dataType: "json",
        success: function (Result) {
            $('#ddlassign').empty();
            $('#ddlassign').append($("<option></option>").val("-1").html("Select Assign Team "));
            $.each(Result.d, function (data, value) {
                $('#ddlassign').append($("<option></option>").val(value.ASId).html(value.ASName));
                
            })
        },
        error: function (Result) {
            
            alert(Result);
        }
        
    });
    
}
/*---------start- Empdetails-----*/

//function GetEmpdetails() {
//    var person;
//    if ($("#radGYes").prop("checked") == true) {
//        person = 1;

//    }
//    else if ($("#radGNo").prop("checked") == true) {
//        person = 0;

//    }
//    if (person == 1)
//    {
//        var QueryString = "GetEmployeeDetails";
//        var input = $("#txt_Empcode").val();

//        $.ajax({

//            type: "POST",
//            contentType: "application/json; charset=utf-8",
//            url: "ProblemTicket.aspx/getFillempdetails",
//            data: "{QueryString:'" + QueryString + "',input : '" + input + "'}",
//            dataType: "json",
//            success: function (Result) {

//                Result = Result.d.split("^");
//                $('#txt_empname').val(Result[0]);
//                $('#txt_Branch').val(Result[1]);
//                $('#txt_Phonenumber').val(Result[2]);



//            },
//            error: function (Result) {

//                alert(Result);
//            }


//        });
//    }
//    else
//    {
//        var QueryString = "Getbranchdtls";
//        var input = $("#txt_Empcode").val();

//        $.ajax({

//            type: "POST",
//            contentType: "application/json; charset=utf-8",
//            url: "ProblemTicket.aspx/getbranchdt",
//            data: "{QueryString:'" + QueryString + "',input : '" + input + "'}",
//            dataType: "json",
//            success: function (Result) {

//                Result = Result.d.split("^");
//                //$('#txt_empname').val(Result[0]);
//                $('#txt_Branch').val(Result[0]);
//                $('#txt_Phonenumber').val(Result[1]);



//            },
//            error: function (Result) {

//                alert(Result);
//            }


//        });
//    }
//}
/*-------end------*/


/*--confirm button for incident or sr    ------*/

function AddprobemTicket() {
    var asset;
    
    var QueryString = "ADDTICKET";


    var incident;
  
   
    for (incident = 0; incident < global_lable_no.length; incident++) {
      
        tick_arr = tick_arr + global_lable_no[incident] + "¥";
     

    }
    //alert(tick_arr);
    //if ($("#radSR").prop("checked") == true) {
    //    asset = 1;

    //}
    //else if ($("#radIN").prop("checked") == true) {
    //    asset = 0;

    //}


    //if ($("#radGYes").prop("checked") == true) {
    //    person = 1;

    //}
    //else if ($("#radGNo").prop("checked") == true) {
    //    person = 0;

    //}
    //if ($("#ddlassign").val() == "-1") {
    //    ModelPopWarning("Please Select Assign Team");
    //    //alert("Please Select Financial Type");
    //    return false;
    //}
     if ($("#txt_Title").val() == "") {
        ModelPopWarning("Please enter Title");
        //alert("Please Enter bank Name");
        return false;
    }
    else if ($("#txt_Desc").val() == "") {
        ModelPopWarning("Please enter description");
        //alert("Please Enter bank Name");
        return false;
    }
     else if (tick_arr == "") {
        ModelPopWarning("Please select Tickets");
        //alert("Please Enter Branch Name");
        return false;
    }
    
    //else if (gbid == "") {
    //    ModelPopWarning("Please select GBTicket");
    //    //alert("Please Enter bank Name");
    //    return false;
    //}


    else {

        var input =  $("#txt_Title").val() + "¥" + $("#txt_Desc").val() + "¥" + 1 + "¥" + $("[id*=hdUserId]").val()  ;
                    $.ajax({
                        type: "POST",
                        contentType: "application/json; charset=utf-8",
                        url: "ProblemTicket.aspx/confirmproblem",
                        data: "{QueryString:'" + QueryString + "',input : '" + input + "',arry:'" + tick_arr + "'}",
                        dataType: "json",
                        success: function (Result) {
                            //alert(Result.d);
                            Result = Result.d;
                            if ($("#FileUpl").val() == '') {
                                alert('Problem Ticket ID:' + Result);
                                window.open('ProblemTicket.aspx', '_self');
                            }
                            else {

                                attachpb(Result);
                            }


                            //SaveuploadData(Result);
                            

                        },

                        error: function (Result) {
                            alert(Result);
                        }
                    });

                
          }
 }

    










var gbid="";


//function getgbTABLE() {
//    $("#tableShowgb").empty();
//    var Querystring;
//    $("#tableShowgb").show();
    
   

//    var InputString = $("#txt_GB").val() ;

//    Querystring = "GetGBSEARCH";



        
//        $.ajax({
//            type: "POST",
//            contentType: "application/json; charset=utf-8",
//            url: "ProblemTicket.aspx/getTableGB",
//            data: "{QueryStr : '" + Querystring + "',input :'" + InputString + "'}",
//            dataType: "json",
//            success: function (Result) {
//                if (Result.d.length > 0) {
//                    $('#tableShowgb').empty();//t.fi_name,t.branch,t.addrss,t.contact_person,t.phone_no,t.mobile_no,t.email_id,t.pan,t.gstn,t.cin
//                    $("#tableShowgb").append('<thead class="bg-success text-white">< tr ><th scope="col">GB</th><th scope="col">Summary</th> <th scope="col">Decription</th> <th scope="col">Rep.date</th></tr></thead><tbody class="border border-dark">'
//                    );
//                    for (var i = 0; i < Result.d.length; i++) {
//                        $("#tableShowgb").append('<tr><td>' + Result.d[i].INName + '</td>' +
                           
//                            '<td>' + Result.d[i].Summary + '</td>' +
//                            '<td>' + Result.d[i].Desc + '</td>' +
//                            '<td>' + Result.d[i].Repdate + '</td>' +

//                            '</tr >');
//                        gbid = Result.d[i].INName;
                        
//                    }
//                    $("#tableShowgb").append(
//                        '</tbody>');
//                }
//            },
//            error: function (Result) {
//                alert(Result);
//            }
//        });
    
//}


function rmv_lab(tkp) {
    // alert(tkp + 'tkp');
    // alert(tkp+'removing element no');
    global_lable_no = $.grep(global_lable_no, function (value) {
        return value != tkp;
    });
    // alert(global_lable_no[inc] + 'set 0 to removed element location');
    $('#' + tkp + '').remove();


}
function chkb_tick(i) {
    var ins_y_n = 0;
    $("#tick_sel").show();
    var r = '';
    var k = '';
    r = parseInt(i);
    r = r + 1;
    k = $('#tblpb tr:eq(' + r + ')').find('td:first').text();
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
        // alert(global_lable_no[g_l_i]);
        g_l_i++;

        // tick_arr = tick_arr + k+"¥" ;
        // alert("data stored in array" + tick_arr);
        //alert(k);
        tick_lab(k);
    }
}
function tick_lab(tickno) {
    tdid = tickno;
    // $('#tbl_sel_tick').append('<td id="' + tdid + '"><label style="border:solid;width:100px"><input type="button" value="*" onclick="delet_tick_tbl(this.id)"/>' + tickno + '</label></td>');

    $('#tick_lis').append('<div id="' + tdid + '" style="border:solid;float:left;width:100px"><input type="button" style="background-color:dimgray;color:white;" name=' + tdid + ' value="X" onclick="rmv_lab(this.name)"/>' + tdid + '</div>');
    i++;
    lab_div_id = 'lab_div_id' + i.toString;


}
function searchview() {

   
    var Querystring;
    $('#divtblsh').show();
    $('#tblpb').show();

    var InputString = $("#txt_ticketno").val() + "¥" + $("#txt_AgrmntDt").val() + "¥" + $("#txt_DtAgrmntFrm").val() + "¥" + $("#ddlsts").val();

    

    var txtsr = $("#txt_ticketno").val();
    
    var txtsdate = $("#txt_AgrmntDt").val();
    var txtendate = $("#txt_DtAgrmntFrm").val();
    var status = $("#ddlsts").val();
  
    if (txtsr != '' && txtsdate == '' && txtendate == '' && status == -1) {
        
        Querystring = "PBincidentID";
    }
    else if (txtsr == '' && txtsdate != '' && txtendate != '' && status == -1) {
        Querystring = "PBinDate";
    }
    else if (txtsr != '' && txtsdate != '' && txtendate != '' && status != -1) {
        Querystring = "PBincidentdata";
    }
    else if (txtsr == '' && txtsdate == '' && txtendate == '' && status != -1) {
        Querystring = "PBGetinSt";
    }

    
    $.ajax({
        type: "POST",
        contentType: "application/json; charset=utf-8",
        url: "ProblemTicket.aspx/GetTble",
        data: "{QueryStr : '" + Querystring + "',input :'" + InputString + "'}",
        dataType: "json",
        success: function (Result) {
            
            if (Result.d.length > 0) {
                $('#tblpb').empty();//t.fi_name,t.branch,t.addrss,t.contact_person,t.phone_no,t.mobile_no,t.email_id,t.pan,t.gstn,t.cin
                $('#tblpb').append('<thead class="bg-success text-white">< tr ><th scope="col">Incident/SR</th><th scope="col">Branch/dep</th><th scope="col">Summary</th> <th scope="col">Decription</th> <th scope="col">Rep.date</th><th scope="col">checkbox</th></tr></thead><tbody class="border border-dark">'
                );
                for (var i = 0; i < Result.d.length; i++) {
                    $('#tblpb').append('<tr><td>' + Result.d[i].INName + '</td>' +
                        '<td>' + Result.d[i].Branchordep + '</td>' +
                        '<td>' + Result.d[i].Summary + '</td>' +
                        '<td>' + Result.d[i].Desc + '</td>' +
                        '<td>' + Result.d[i].Repdate + '</td>' +
                        '<td>' + '<input type = "button" value="ADD" name = "btn1" id="' + i + '" onclick="chkb_tick(this.id)"/>' + '</td>' +
                        '</tr >');
                }
                $('#tblpb').append(
                    '</tbody>');
            }
            else {
                $('#tblpb').empty();
            }
        },
        error: function (Result) {
            alert(Result);
        }
    });



}




function attachpb(tktno) {


    var input = tktno + "¥" + 2;


    var fileList = document.getElementById("FileUpl").files;
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

            $.ajax({

                type: "POST",
                contentType: "application/json; charset=utf-8",
                url: "ProblemTicket.aspx/confirmupload",
                data: "{val:'" + input + "',upload_file:'" + imageData + "'}",
                dataType: "json",
                success: function (Result) {


                    Result = Result.d;


                    
                    if (Result == "Successfully Uploaded") {
                        alert('Problem Ticket ID:' + tktno);
                    }
                    

                    window.open('ProblemTicket.aspx', '_self');

                },
                error: function (Result) {

                    alert(Result);
                }


            });



        }
    }
}

function gr() {

    $('#tableShowgb').find('tr').click(function () {
        var row = $(this).find('td:first').text();



        //alert('You clicked ' + row);
        var dt = row.toString();
        shdetails(dt);
        // WorkLogView(dt);
        $('#tblticket').removeEventListener();




    });




}
function shdetails(tn) {

    var QueryString = "GetLoadData";
    var input = tn;

    $.ajax({

        type: "POST",
        contentType: "application/json; charset=utf-8",
        url: "ProblemTicket.aspx/getlinkdata",
        data: "{QueryString:'" + QueryString + "',input : '" + input + "'}",
        dataType: "json",
        success: function (Result) {

            Result = Result.d.split("^");
            $('#txt_source').val(Result[0]);
            $('#txt_ReportedBy').val(Result[1]);
            
            if (Result[2] == 1) {
                $("#radGYes").prop("checked", true)
                
            }
            else if (Result[2] == 0)
            {

                $("#radGNo").prop("checked") = true;
            }
            $('#txt_Empcode').val(Result[3]);
            $('#txt_phonenum').val(Result[4]);
            $('#txt_phone').val(Result[5]);
            $('#txt_Severity').val(Result[6]);
            $('#txt_urgency').val(Result[7]);
            $('#txt_Impact').val(Result[8]);
            $('#txt_ImpactDetails').val(Result[9]);
            $('#txt_class').val(Result[10]);
            $('#txt_subcategory').val(Result[11]);
            $('#txt_Subject').val(Result[12]);
            $('#txt_Description').val(Result[13]);
            $('#txt_ImapactedCI').val(Result[14]);
            $('#txt_emp').val(Result[15]);
            $('#txt_Branch').val(Result[16]);
        },
        error: function (Result) {

            alert(Result);
        }


    });



}




//function AmountToWords(price) {
//    var sglDigit = ["Zero", "One", "Two", "Three", "Four", "Five", "Six", "Seven", "Eight", "Nine"],
//        dblDigit = ["Ten", "Eleven", "Twelve", "Thirteen", "Fourteen", "Fifteen", "Sixteen", "Seventeen", "Eighteen", "Nineteen"],
//        tensPlace = ["", "Ten", "Twenty", "Thirty", "Forty", "Fifty", "Sixty", "Seventy", "Eighty", "Ninety"],
//        handle_tens = function (dgt, prevDgt) {
//            return 0 == dgt ? "" : " " + (1 == dgt ? dblDigit[prevDgt] : tensPlace[dgt])
//        },
//        handle_utlc = function (dgt, nxtDgt, denom) {
//            return (0 != dgt && 1 != nxtDgt ? " " + sglDigit[dgt] : "") + (0 != nxtDgt || dgt > 0 ? " " + denom : "")
//        };

//    var str = "",
//        digitIdx = 0,
//        digit = 0,
//        nxtDigit = 0,
//        words = [];
//    if (price += "", isNaN(parseInt(price))) str = "";
//    else if (parseInt(price) > 0 && price.length <= 10) {
//        for (digitIdx = price.length - 1; digitIdx >= 0; digitIdx--) switch (digit = price[digitIdx] - 0, nxtDigit = digitIdx > 0 ? price[digitIdx - 1] - 0 : 0, price.length - digitIdx - 1) {
//            case 0:
//                words.push(handle_utlc(digit, nxtDigit, ""));
//                break;
//            case 1:
//                words.push(handle_tens(digit, price[digitIdx + 1]));
//                break;
//            case 2:
//                words.push(0 != digit ? " " + sglDigit[digit] + " Hundred" + (0 != price[digitIdx + 1] && 0 != price[digitIdx + 2] ? " and" : "") : "");
//                break;
//            case 3:
//                words.push(handle_utlc(digit, nxtDigit, "Thousand"));
//                break;
//            case 4:
//                words.push(handle_tens(digit, price[digitIdx + 1]));
//                break;
//            case 5:
//                words.push(handle_utlc(digit, nxtDigit, "Lakh"));
//                break;
//            case 6:
//                words.push(handle_tens(digit, price[digitIdx + 1]));
//                break;
//            case 7:
//                words.push(handle_utlc(digit, nxtDigit, "Crore"));
//                break;
//            case 8:
//                words.push(handle_tens(digit, price[digitIdx + 1]));
//                break;
//            case 9:
//                words.push(0 != digit ? " " + sglDigit[digit] + " Hundred" + (0 != price[digitIdx + 1] || 0 != price[digitIdx + 2] ? " and" : " Crore") : "")
//        }
//        str = words.reverse().join("")
//    } else str = "Equal or Above Thousand Crore";
//    return str

//}
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
//function getbnkledg() {
//    var QueryString = "GetBankLedger";
//    $.ajax({
//        type: "POST",
//        contentType: "application/json; charset=utf-8",
//        url: "NewFund.aspx/getBankLedg",
//        data: "{QueryStr:'" + QueryString + "'}",
//        dataType: "json",
//        success: function (Result) {
//            $('#ddlBnkLedger').empty();
//            $('#ddlBnkLedger').append($("<option></option>").val("-1").html("Select Bank Account Ledger "));
//            $.each(Result.d, function (data, value) {
//                $('#ddlBnkLedger').append($("<option></option>").val(value.Id).html(value.Name));
//            })
//        },
//        error: function (Result) {
//            alert(Result);
//        }
//    });
//}
//function getLoanLedg() {
//    var QueryString = "GetLoanLedger";
//    $.ajax({
//        type: "POST",
//        contentType: "application/json; charset=utf-8",
//        url: "NewFund.aspx/getloanLedg",
//        data: "{QueryStr:'" + QueryString + "'}",
//        dataType: "json",
//        success: function (Result) {
//            $('#ddlLoanAccn').empty();
//            $('#ddlLoanAccn').append($("<option></option>").val("-1").html("Select Loan Ledger "));
//            $.each(Result.d, function (data, value) {
//                $('#ddlLoanAccn').append($("<option></option>").val(value.Id).html(value.Name));
//            })
//        },
//        error: function (Result) {
//            alert(Result);
//        }
//    });
//}