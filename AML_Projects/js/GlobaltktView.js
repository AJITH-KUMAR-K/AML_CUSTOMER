function frmExit() {
    window.open("index.aspx", "_self");
}
var tick_arr = '';
var tkp = '';
var g_l_i;
var global_lable_no = [];
$(window).on('load', function () {
    $("#SelctType").hide();
    $("#tableShowIN").hide();
    $("#wrkaddnew").hide();
    $("#wldv").hide();
    $("#clostab").hide();
    //GetAssignDtls();
    GetStatus();
    //GetAssignToType();
    GetStsforpb();
    statusshow();
    //$("#txt_ReportedBy").val( $("[id*=hduname]").val());

    $("#txt_AgrmntDt").datepicker({
        dateFormat: 'dd/MM/yy',
        changeMonth: true,
        changeYear: true,
        stepMonths: true,
        todayHighlight: true,
        maxDate: 0,
        onSelect: function (dateText, inst) {

        }
    });

    $("#txt_DtAgrmntFrm").datepicker({
        dateFormat: 'dd/MM/yy',
        changeMonth: true,
        changeYear: true,
        stepMonths: true,
        todayHighlight: true,
        maxDate: 0,
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


});

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


function closingtab() {
    if ($('#ddlst').val() == 6 || $('#ddlst').val() == 5) {
        $("#clostab").show();
    }
    else {
        $("#clostab").hide();
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
function Plusaddworklog() {


    var Querystring = "statuscheck";
    InputString = $("#txt_gb").val();
    $.ajax({
        type: "POST",
        contentType: "application/json; charset=utf-8",
        url: "GlobaltktView.aspx/statuschek",
        data: "{QueryStr : '" + Querystring + "',input :'" + InputString + "'}",
        dataType: "json",
        success: function (Result) {
            debugger;
            if (Result.d > 0) {
                Result = Result.d;
                alert("Ticket Resolved..");
            }
            else {
                $("#wrkaddnew").show();

            }
        },
        error: function (Result) {
            alert(Result);
        }
    });



    // $("#wrkaddnew").show();
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

function GetStatus() {

    var QueryString = "GetStatus";
    $.ajax({
        type: "POST",
        contentType: "application/json; charset=utf-8",
        url: "GlobaltktView.aspx/Getstatusup",
        data: "{QueryString:'" + QueryString + "'}",
        dataType: "json",
        success: function (Result) {
            $('#ddlstatus').empty();
            $('#ddlstatus').append($("<option></option>").val("-1").html("Select Status "));

            $.each(Result.d, function (data, value) {

                $('#ddlstatus').append($("<option></option>").val(value.Id).html(value.Name));

            })
        },
        error: function (Result) {
            alert(Result);
        }

    });

}

function GetStsforpb() {

    var QueryString = "GetStatus";
    $.ajax({
        type: "POST",
        contentType: "application/json; charset=utf-8",
        url: "GlobaltktView.aspx/Getstatusup",
        data: "{QueryString:'" + QueryString + "'}",
        dataType: "json",
        success: function (Result) {
            $('#ddlst').empty();
            $('#ddlst').append($("<option></option>").val("-1").html("Select Status "));
            $.each(Result.d, function (data, value) {
                if (value.Id == 5 || value.Id == 6) {
                    $('#ddlst').append($("<option></option>").val(value.Id).html(value.Name));
                }
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
    $.ajax({
        type: "POST",
        contentType: "application/json; charset=utf-8",
        url: "GlobaltktView.aspx/getAssignto",
        data: "{QueryString:'" + QueryString + "'}",
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
function Worklog_Submit() {
    debugger;

    var sum = $("#txt_summary").val();
    var status = $("#ddlstatus").val();
    var desc = $("#txt_Description").val();

    if (sum == "") {
        alert("Enter Summary ");
        return false;
    }
    if (status == "-1") {
        alert("Select Status");
        return false;
    }
    if (desc == "") {
        alert("Enter Description");
        return false;
    }

    var table = document.getElementById('tablegb');
    var rowLength = table.rows.length;
    var data = "";
    for (var i = 1; i < rowLength; i += 1) {
        var row = table.rows[i];
        var cell = row.cells[0];
        data = data + cell.innerText + '$';
    }

    var InputString = ticket_no + "¥" + $("[id*=hdUserId]").val() + "¥" + $("#txt_summary").val() + "¥" + $("#txt_Description").val() + "¥" + $("#ddlstatus").val() + "¥" + data;

    var Querystring = "CONFIRMGBWORKLOG";
    $.ajax({
        type: "POST",
        contentType: "application/json; charset=utf-8",
        url: "GlobaltktView.aspx/insertworklog",
        data: "{QueryStr : '" + Querystring + "',input :'" + InputString + "'}",
        dataType: "json",
        success: function (Result) {
            if (Result.d.length > 0) {
                Result = Result.d;
                alert(Result);
            }
            WorkLogView();
            // window.open("GlobaltktView.aspx", "_self");
            $("#txt_summary").val("");
            $("#txt_Description").val("");
            $("#ddlstatus").val(-1);
            $("#wrkaddnew").hide();
        },
        error: function (Result) {
            alert(Result);
        }
    });
}
function WorkLogView() {
    $('#worklogtb').empty();
    $('#wldv').show();
    var InputString = $("#txt_gb").val();
    var Querystring = "getgbworlog";
    $.ajax({
        type: "POST",
        contentType: "application/json; charset=utf-8",
        url: "GlobaltktView.aspx/GtWlogTble",
        data: "{QueryStr : '" + Querystring + "',input :'" + InputString + "'}",
        dataType: "json",
        success: function (Result) {
            // alert(Result.d);
            debugger;
            if (Result.d.length > 0) {
                $('#worklogtb').empty();//t.fi_name,t.branch,t.addrss,t.contact_person,t.phone_no,t.mobile_no,t.email_id,t.pan,t.gstn,t.cin
                $('#worklogtb').append('<thead class="bg-success text-white">< tr ><th scope="col">Date</th><th scope="col">Employee Code</th><th scope="col">Department</th><th scope="col">Summary</th><th scope="col">Decription</th><th scope="col">Ticket Status</th></tr></thead><tbody class="border border-dark">'
                );
                for (var i = 0; i < Result.d.length; i++) {
                    $('#worklogtb').append('<tr><td>' + Result.d[i].Date + '</td>' +
                        '<td > ' + Result.d[i].Empcode + '</td > ' +
                        '<td>' + Result.d[i].Department + '</td > ' +
                        '<td>' + Result.d[i].Summary + '</td>' +
                        '<td>' + Result.d[i].Description + '</td>' +
                        '<td>' + Result.d[i].Ticketstatus + '</td>' + '</tr >');
                }
                $('#worklogtb').append(
                    '</tbody>');
            }
            else {
                $('#worklogtb').empty();
                $('#worklogtb').hide();
            }
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
/*---------start-Dropdown source-----*/

function GetAssignDtls() {

    var QueryString = "GetAssignTeam";
    $.ajax({

        type: "POST",
        contentType: "application/json; charset=utf-8",
        url: "GlobaltktView.aspx/getAssignData",
        data: "{QueryString:'" + QueryString + "'}",
        dataType: "json",
        success: function (Result) {
            $('#ddlassign').empty();
            $('#ddlassign').append($("<option></option>").val("-1").html("Select Assign Team"));
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

function AddGBTICKETS() {

    var QueryString = "GBTKTUPD";


    //if ($("#radIN").prop("checked") == true) {
    //    failedc = 1;

    //}
    //else if ($("#radSR").prop("checked") == true) {
    //    failedc = 0;

    //}




    if ($("#ddlst").val() == "-1") {
        ModelPopWarning("Please select status");

        return false;
    }
    else if (($("#ddlst").val() == "6" || $("#ddlst").val() == "5") && $("#txt_reason_fr_err").val() == "") {

        ModelPopWarning("Please Enter Reason for issue...!!");

        return false;

    }
    else if (($("#ddlst").val() == "6" || $("#ddlst").val() == "5") && $("#txt_solution").val() == "") {

        ModelPopWarning("Please Enter solution...!!");
    }
    else if (ticket_no == "") {
        ModelPopWarning("Please enter Ticket number");

        return false;
    }


    else {

        var input = $("#txt_solution").val() + "¥" + $("#ddlst").val() + "¥" + $("[id*=hdUserId]").val() + "¥" + ticket_no + "¥" + $("#txt_reason_fr_err").val();

        $.ajax({
            type: "POST",
            contentType: "application/json; charset=utf-8",
            url: "GlobaltktView.aspx/gbticketsave",
            data: "{QueryString:'" + QueryString + "',input : '" + input + "'}",
            dataType: "json",
            success: function (Result) {
                //alert(Result.d);
                // if ($("#FileUpload").val() == '') {

                alert(Result.d);
                window.open('GlobaltktView.aspx', '_self');
                // }

                //else if ($("#FileUpload").val() != '') {
                //    attachrca(ticket_no);
                //}

                //SaveuploadData(Result);


            },

            error: function (Result) {
                alert(Result);
            }
        });


    }

}





function attachrca(tktno) {


    var input = tktno + "¥" + 1;


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

            $.ajax({

                type: "POST",
                contentType: "application/json; charset=utf-8",
                url: "GlobaltktView.aspx/confirmdocument",
                data: "{val:'" + input + "',upload_file:'" + imageData + "'}",
                dataType: "json",
                success: function (Result) {


                    Result = Result.d;
                    alert(Result);

                    window.open('GlobaltktView.aspx', '_self');

                },
                error: function (Result) {

                    alert(Result);
                }


            });



        }
    }
}
var ticket_no;

function getgbview() {
    $("#tablegb").empty();
    var Querystring;
    $("#tablegb").show();


    ticket_no = $("#txt_gb").val();
    $('#ti_no').text(ticket_no);

    var InputString = $("#txt_gb").val();
    Querystring = "GBSEARCH";
    $.ajax({
        type: "POST",
        contentType: "application/json; charset=utf-8",
        url: "GlobaltktView.aspx/getTableprb",
        data: "{QueryStr : '" + Querystring + "',input :'" + InputString + "'}",
        dataType: "json",
        success: function (Result) {
            
           
            Result = Result.d;
           
            debugger;
            if (Result != "") {
                $('#tablegb').empty();//t.fi_name,t.branch,t.addrss,t.contact_person,t.phone_no,t.mobile_no,t.email_id,t.pan,t.gstn,t.cin
                $("#tablegb").append('<thead class="bg-success text-white">< tr ><th scope="col">Common tickets</th></tr></thead><tbody class="border border-dark">');
                var vdata = Result.split(',');

                for (var i = 0; i < vdata.length - 1; i++) {

                    $("#tablegb").append('<tr><td>' + vdata[i] + '</td>' +
                        '</tr >');

                  $("#attach-tick").show();
                    //$("#attach-tick").css("display", "block")
                }
                $("#tablegb").append(
                    '</tbody>');

             

            }
            else {
                alert("Ticket is not existing");
                $("#tablegb").empty();
                $("#tablegb").hide();
            }
            WorkLogView();
        },
        error: function (Result) {
            alert(Result);
        }
    });

}
function gbdetailsload() {
    ticket_no = $("#txt_gb").val();

    var QueryString = "Getgbdtls";
    var input = ticket_no;

    $.ajax({
        type: "POST",
        contentType: "application/json; charset=utf-8",
        url: "GlobaltktView.aspx/probldataload",
        data: "{QueryString:'" + QueryString + "',input : '" + input + "'}",
        dataType: "json",
        success: function (Result) {
           
            Result = Result.d.split("^");
            $('#txt_Title').val(Result[0]);
            $('#txt_Desc').val(Result[1]);
            $('#ddlseverity').val(Result[2]);

            getgbview(ticket_no);

        },
        error: function (Result) {

            alert(Result);
        }


    });



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
    $('#tick_no').val(tn);

    var QueryString = "GetLoadData";
    var input = tn;

    $.ajax({

        type: "POST",
        contentType: "application/json; charset=utf-8",
        url: "GlobaltktView.aspx/getlinkdata",
        data: "{QueryString:'" + QueryString + "',input : '" + input + "'}",
        dataType: "json",
        success: function (Result) {

            Result = Result.d.split("^");
            $('#txt_source').val(Result[0]);
            $('#txt_ReportedBy').val(Result[1]);

            if (Result[2] == 1) {
                $("#radGYes").prop("checked", true)

            }
            else if (Result[2] == 0) {

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



function Attachmentshow() {

    $("#FileAttch").val("");
    // alert('WORKLOG VIEW'+dt);
    // $('#worklogtb').empty();glob
    $('#AttachmentDtl').show();
    var InputString = $("#txt_gb").val();

    var Querystring = "AttachmentList";
    $.ajax({
        type: "POST",
        contentType: "application/json; charset=utf-8",
        url: "GlobaltktView.aspx/AttchDtl",
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
                        '<input name="' + Result.d[i].Id + '" type="button" value="VIEW" class="btn-info" data-toggle="tooltip" data-placement="right" title="View"  onclick="DocView(this.name)" data-backdrop="false"/>' +
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

function DocView(dt) {

    ViewDocument(dt);
}

function Tview1() {
    //$("#hosupport").hide();
    var k;
    // $('#TICK_TBL_NAME').text('SEARCHED TICKETS');
    $('#divtblPrincpleIntDtl').show();
    $('#tblticket').show();
    $('#scrl-dwn').show();


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
    var Querystring = "getNewSearch";

    $.ajax({
        type: "POST",
        contentType: "application/json; charset=utf-8",
        url: "GlobaltktView.aspx/GetTble",
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
                alert('No Entries Found');
                $('#tblticket').empty();


            }
        },
        error: function (Result) {
            alert(Result);
        }
    });
}
function moreshow() {

    $("#sr_search").show();
    $("#search_div").show();
}

function statusshow() {

    var intPrnc;

    intPrnc = "GetStatus";

    $.ajax({
        type: "post",
        contentType: "application/json; charset=utf-8",
        url: "GlobalTicket.aspx/ticketstatus",
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
function chkb_tick(i) {

    $("#sel_list").show();
    $("#sel_list1").show();
    $("#sub_tkts").show();
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
    global_lable_no = $.grep(global_lable_no, function (value) {
        return value != tkp;
    });
    $('#' + tkp + '').remove();


}

function subticks() {
    var sr = '';
    for (var i = 0; i < global_lable_no.length; i++) {
        sr = sr + global_lable_no[i] + ",";
    }
    if (sr == '') {
        alert('Add tickets to update');
        return false;
    }
    var gns = $("#txt_gb").val() + "¥" + sr;
    var QueryString = 'updatesrticks';

    $.ajax({
        type: "POST",
        contentType: "application/json; charset=utf-8",
        url: "GlobaltktView.aspx/update_tickets",
        data: "{QueryStr : '" + QueryString + "',input :'" + gns + "'}",
        dataType: "json",
        success: function (Result) {
            alert(Result.d);
        },
        error: function (Result) {
            alert(Result);
        }
    });
}