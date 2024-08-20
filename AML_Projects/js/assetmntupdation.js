function frmExit() {
    window.open("index.aspx", "_self");
}
$(window).on('load', function () {
    $("#SelctType").hide();
    $("#tableShowIN").hide();
    $("#work").hide();
    $("#brname").hide();
    $("#history").hide();
    $("#empc").hide();
    $("#bran").hide();
    $("#depa").hide();
    $("#emname").hide();
    //Getassettype();
    GetAssetstate();
    Getdepartment();
    Getdepartsearch();
    Getassttyp();
    //assetcode();
   
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
    }); $("#txt_war_star_dte").datepicker({
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
    $('#ser_div1').hide();
    $('#search_div').hide();
    $('input[type="checkbox"]').on('change', function () {
        $('input[type="checkbox"]').not(this).prop('checked', false);
        if ($('#chk_tickno').prop('checked') == true) {
            $('#tickno_div').show();
            $('#date_div').hide();
            $('#date_div1').hide();
            $('#sts_div').hide();
            $('#search_div').show();
            $('#txt_BRID').val('');
            $('#txt_empcode').val('');
            $('#ddldepart').val(-1);
            $('#ser_div1').hide();
            $('#txt_ser').val('');
            $('#search_div').show();
            $('#ass_code').show();

        }
        else if ($('#chk_rpt_frm').prop('checked') == true) {
            $('#tickno_div').hide();
            $('#date_div').show();
            $('#date_div1').hide();
            $('#sts_div').hide();
            $('#search_div').show();
            $('#txt_ass').val('');
            $('#txt_empcode').val('');
            $('#ddldepart').val(-1);
            $('#ser_div1').hide();
            $('#txt_ser').val('');
            $('#search_div').show();
            $('#ass_code').show();

        }
        else if ($('#chk_sts').prop('checked') == true) {
            $('#tickno_div').hide();
            $('#date_div').hide();
            $('#date_div1').show();
            $('#sts_div').hide();
            $('#search_div').show();
            $('#txt_ass').val('');
            $('#txt_BRID').val('');
            $('#ddldepart').val(-1);
            $('#ser_div1').hide();
            $('#txt_ser').val('');
            $('#search_div').show();
            $('#ass_code').show();
        }
        else if ($('#chk_dep').prop('checked') == true) {
            $('#tickno_div').hide();
            $('#date_div').hide();
            $('#date_div1').hide();
            $('#sts_div').show();
            $('#search_div').show();
            $('#txt_ass').val('');
            $('#txt_BRID').val('');
            $('#txt_empcode').val('');
            $('#ser_div1').hide();
            $('#txt_ser').val('');
            $('#search_div').show();
            $('#ass_code').show();
        } else if ($('#chk_serial').prop('checked') == true) {
            $('#tickno_div').hide();
            $('#date_div').hide();
            $('#date_div1').hide();
            $('#sts_div').hide();
            $('#search_div').show();
            $('#txt_ass').val('');
            $('#txt_BRID').val('');
            $('#txt_empcode').val('');
            $('#ser_div1').show();
            $('#txt_ser').val('');
            $('#search_div').show();
            $('#ass_code').show();
        } else if ($('#chk_new_asst').prop('checked') == true) {
            $('#tickno_div').hide();
            $('#date_div').hide();
            $('#date_div1').hide();
            $('#sts_div').hide();
            $('#search_div').show();
            $('#txt_ass').val('');
            $('#txt_BRID').val('');
            $('#txt_empcode').val('');
            $('#ser_div1').hide();
            $('#txt_ser').val('');
            $('#search_div').hide();
            $('#ass_code').hide();
            $('#history').hide();
            $('#tableShowIN').hide();
            $('.newast').val("");
            $('.newast1').val(-1);
            $('#radGYes').prop("checked", false);
            $('#radGNo').prop("checked", false);
            $('.ddlnew option:selected').val(-1);

        }
        $('input[type="checkbox"]').removeEventListener();
    });


});




////--------------only number-------//


function isNumber(evt) {
    evt = (evt) ? evt : window.event;
    var charCode = (evt.which) ? evt.which : evt.keyCode;
    if (charCode > 31 && (charCode < 48 || charCode > 57)) {
        return false;
    }
    return true;
}
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


var check;
function workstation() {
     var op = $("#ddlassettype option:selected").text();
    
    if (op == 'DESKTOP' ){

        $("#work").show();
        check = 1;
    }
    else if (op == 'SERVER') {

        $("#work").show();
        check = 1;
    }
   else if (op == 'LAPTOP') {

        $("#work").show();
        check = 1;
    }
    else {
        $("#work").hide();
        check = 0;
    }
}



function branchlod() {
    $("#bran").show();
    $("#txt_emp").val("");
    $("#emname").hide();
    $("#ddldep").val("-1");
    $("#empc").hide();
    $("#depa").hide();
    $("#brname").show();
    $("#txt_em").val("");
}
function emplod() {
    $("#bran").hide();
    $("#brname").hide();
    $("#txt_branch").val("");
    $("#ddldep").val("-1");
    $("#empc").show();
    $("#depa").hide();
    $("#emname").show();
    $("#txt_br").val("");

}
function deplod() {
    $("#bran").hide();
    $("#depa").show();
    $("#empc").hide();
    $("#brname").hide();
    $("#txt_emp").val("");
    $("#txt_branch").val("");
    $("#txt_br").val("");

    $("#emname").hide();
    $("#txt_em").val("");
 
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







function getattable() {



    var Querystring;
    $("#tableShowIN").show();

   

    var InputString = $("#txt_ass").val() + "¥" + $("#txt_BRID").val() + "¥" + $("#txt_empcode").val() + "¥" + $("#ddldepart option:selected").val() + "¥" + $("#txt_ser").val();



    var txtsr = $("#txt_ass").val();
    var txtsdate = $("#txt_BRID").val();
    var txtendate = $("#txt_empcode").val();
    var status = $("#ddldepart").val();
    var serial = $("#txt_ser").val();



    if (txtsr != '' && txtsdate == '' && txtendate == '' && status == -1 && serial=='') {
        
        Querystring = "Getasscode";
    }
    else if (txtsdate != '' && txtendate == '' && status == -1 && txtsr == '' && serial == '') {
        Querystring = "Getbrasset";
    }
    else if (txtsr == '' && txtsdate == '' && txtendate != '' && status == -1 && serial == '') {
        Querystring = "Getempasset";
    }
    else if (txtsr == '' && txtsdate == '' && txtendate == '' && status != -1 && serial == '') {
        Querystring = "Getdepet";
    } else if (txtsr == '' && txtsdate == '' && txtendate == '' && status == -1 && serial != '') {
        Querystring = "Getserialast";
    }
    
 

    $.ajax({
        type: "POST",
        contentType: "application/json; charset=utf-8",
        url: "assetmntupdation.aspx/getTableGB",
        data: "{QueryStr : '" + Querystring + "',input :'" + InputString + "'}",
        dataType: "json",
        success: function (Result) {
            if (Result.d.length > 0) {

                $('#tableShowIN').empty();
                $("#tableShowIN").append('<thead class="bg-success text-white">< tr ><th scope="col">ID</th><th scope="col">Asset code</th><th scope="col">Asset type</th> <th scope="col">Manufacture</th> <th scope="col">Asset State</th><th scope="col">Allocated Date</th><th scope="col">Criticality</th></tr></thead><tbody class="border border-dark">'
                );
                for (var i = 0; i < Result.d.length; i++) {
                    $("#tableShowIN").append('<tr><td><a onclick="gr()" href="#">' + Result.d[i].INName + '</td>' +
                        '<td><a onclick="gr()" href="#">' + Result.d[i].Branchordep + '</td>' +
                        '<td>' + Result.d[i].Summary + '</td>' +
                        '<td>' + Result.d[i].Desc + '</td>' +
                        '<td>' + Result.d[i].Repdate + '</td>' +
                        '<td>' + Result.d[i].state + '</td>' +
                        '<td>' + Result.d[i].criticality + '</td>' +
                        '</tr >');
                }
                $("#tableShowIN").append(
                    '</tbody>');
            }
            else {
                $('#tableShowIN').empty();
                alert('No Entries Found');
            }
        },
        error: function (Result) {
            alert(Result);
        }
    });

}
function Getassttyp() {
    var QueryString = "GetAssettype";
    $.ajax({
        type: "POST",
        contentType: "application/json; charset=utf-8",
        url: "assetmntupdation.aspx/getassettyp",
        data: "{QueryString:'" + QueryString + "'}",
        dataType: "json",
        success: function (Result) {
            $('#ddlassettype').empty();
            $('#ddlassettype').append($("<option></option>").val("-1").html("Select Asset Type "));
            $.each(Result.d, function (data, value) {
                $('#ddlassettype').append($("<option></option>").val(value.FtId).html(value.FtName));
            })
        },
        error: function (Result) {
            alert(Result);
        }
    });
}


/*---------start-Dropdown  status-----*/

//function GetStatus() {
    
//    var QueryString = "GetStatus";
//    $.ajax({
//        type: "POST",
//        contentType: "application/json; charset=utf-8",
//        url: "ProblemTicket.aspx/Getstatusup",
//        data: "{QueryString:'" + QueryString + "'}",
//        dataType: "json",
//        success: function (Result) {
//            $('#ddlStatus').empty();
//            $('#ddlStatus').append($("<option></option>").val("-1").html("Select Status "));
//            $.each(Result.d, function (data, value) {
//                $('#ddlStatus').append($("<option></option>").val(value.Id).html(value.Name));
//            })
//        },
//        error: function (Result) {
//            alert(Result);
//        }
        
//    });
   
//}

/*-------end------*/

/*---------start-Dropdown  Requesttype-----*/

function GetAssetstate() {
   
    var QueryString = "GetAssetSTATE";
    $.ajax({
        type: "POST",
        contentType: "application/json; charset=utf-8",
        url: "assetmntupdation.aspx/getAssignto",
        data: "{QueryString:'" + QueryString + "'}",
        dataType: "json",
        success: function (Result) {
            $('#ddlassetstate').empty();
            $('#ddlassetstate').append($("<option></option>").val("-1").html("Select Assign State "));
            $.each(Result.d, function (data, value) {
                
                $('#ddlassetstate').append($("<option></option>").val(value.ReqId).html(value.ReqName));
            })
        },
        error: function (Result) {
            alert(Result);
        }

    });

}
function Getdepartsearch() {

    var QueryString = "GetdepNAME";
    $.ajax({
        type: "POST",
        contentType: "application/json; charset=utf-8",
        url: "assetmntupdation.aspx/getAssignto",
        data: "{QueryString:'" + QueryString + "'}",
        dataType: "json",
        success: function (Result) {
            $('#ddldepart').empty();
            $('#ddldepart').append($("<option></option>").val("-1").html("Select Department "));
            $.each(Result.d, function (data, value) {

                $('#ddldepart').append($("<option></option>").val(value.ReqId).html(value.ReqName));
            })
        },
        error: function (Result) {
            alert(Result);
        }

    });

}


function Getdepartment() {

    var QueryString = "GetdepNAME";
    $.ajax({
        type: "POST",
        contentType: "application/json; charset=utf-8",
        url: "assetmntupdation.aspx/getAssignto",
        data: "{QueryString:'" + QueryString + "'}",
        dataType: "json",
        success: function (Result) {
            $('#ddldep').empty();
            $('#ddldep').append($("<option></option>").val("-1").html("Select Department "));
            $.each(Result.d, function (data, value) {

                $('#ddldep').append($("<option></option>").val(value.ReqId).html(value.ReqName));
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

function Getassettype() {
    
    var QueryString = "GetAssettype";
    $.ajax({
        
        type: "POST",
        contentType: "application/json; charset=utf-8",
        url: "assetmntupdation.aspx/getAssettype",
        data: "{QueryString:'" + QueryString + "'}",
        dataType: "json",
        success: function (Result) {
            $('#ddlasssttype').empty();
            $('#ddlasssttype').append($("<option></option>").val("-1").html("Select Asset Type "));
            $.each(Result.d, function (data, value) {
                $('#ddlasssttype').append($("<option></option>").val(value.ASId).html(value.ASName));
                
            })
        },
        error: function (Result) {
            
            alert(Result);
        }
        
    });
    
}
/*---------start- Empdetails-----*/

function Getemp() {

    var QueryString = "GETempdata";
    var input = $("#txt_emp").val();

    $.ajax({

        type: "POST",
        contentType: "application/json; charset=utf-8",
        url: "assetmntupdation.aspx/getbran",
        data: "{QueryString:'" + QueryString + "',input : '" + input + "'}",
        dataType: "json",
        success: function (Result) {

            if (Result.d.length > 0) {
                $("#emname").show();
                Result = Result.d.split("^");
                $('#txt_em').val(Result[0]);
                $('#txt_asseloc').val(Result[1]);
            } else {

                alert('No Entries Found..');
            }




        },
        error: function (Result) {

            alert(Result);
        }


    });

}
function Getbranch() {
   
    var QueryString = "GETBRanchdata";
    var input = $("#txt_branch").val();

        $.ajax({

            type: "POST",
            contentType: "application/json; charset=utf-8",
            url: "assetmntupdation.aspx/getbran",
            data: "{QueryString:'" + QueryString + "',input : '" + input + "'}",
            dataType: "json",
            success: function (Result) {

                if (Result.d.length > 0) {
                    $("#brname").show();
                    Result = Result.d.split("^");
                    $('#txt_br').val(Result[0]);
                    $('#txt_asseloc').val(Result[1]);
                } else {


                    alert('No Entries Found...');
                }



            },
            error: function (Result) {

                alert(Result);
            }


        });
    
}
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

function AddASSETMANAGEMENT() {
    workstation();
    var neww;
    var asset = 3, allocation;
    var hh = 0;
    if ($("#branch").prop("checked") == true) {
        allocation = 1;
        if ($("#txt_branch").val() == "") {
            ModelPopWarning("Please enter branch id");
            
            return false;
        }

    }
    else if ($("#emp").prop("checked") == true) {
        allocation = 2;
        if ($("#txt_emp").val() == "") {
            ModelPopWarning("Please enter emp code");
           
            return false;
        }

    }
    else if ($("#dep").prop("checked") == true) {
        allocation = 3;
        if ($("#ddldep").val() == "-1") {
            ModelPopWarning("Please select  Department");

            return false;
        }
    }


    var QueryString = "SAVEASSET";


    if ($("#radGYes").prop("checked") == true) {
        asset = 1;

    }
    else if ($("#radGNo").prop("checked") == true) {
        asset = 0;

    }



    //if ($("#ddlasssttype").val() == "-1") {
    //    ModelPopWarning("Please Select Asset Type");
    //    //alert("Please Select Financial Type");
    //    return false;
    //}
    //else if (allocation == "") {
    //    ModelPopWarning("Please select Allocation To:");
    //    //alert("Please Enter bank Name");
    //    return false;
    //}
    ////else if ($("#txt_assetname").val() == "") {
    ////    ModelPopWarning("Please enter asset name");
    ////    //alert("Please Enter bank Name");
    ////    return false;
    ////}
    //else if ($("#ddlassetstate").val() == "-1") {
    //    ModelPopWarning("Please select Asset state");
    //    //alert("Please Enter Branch Name");
    //    return false;
    //}
    //else if ($("#txt_assetcode").val() == "") {
    //    ModelPopWarning("Please enter Asset Code");
    //    //alert("Please Enter Branch Name");
    //    return false;
    //} else 

    if ($('#chk_new_asst').prop('checked') == true) {

        //var op = $("#ddlassettype option:selected").text();

        //if (op == 'DESKTOP') {

        //    //$("#work").show();
        //    check = 0;
        //}
        //else if (op == 'SERVER') {

        //   // $("#work").show();
        //    check = 0;
        //}
        //else if (op == 'LAPTOP') {

        //   // $("#work").show();
        //    check = 0;
        //}
        //else {
        //  //  $("#work").hide();
        //    check = 0;
        //}


        neww= 1;

        hh = 1;
        //            1                           2                                     3                                    4                              5                                 6                             7                           8                                9                             10                             11
        //var input = neww + "¥" + $('#ddlassettype option:selected').val() + "¥" + $("#txt_assetname").val() + "¥" + $("#txt_producttype").val() + "¥" + $("#txt_productname").val() + "¥" + $("#txt_manuf").val() + "¥" + $("#txt_partnu").val() + "¥" + $("#txt_mac").val() + "¥" + $("#txt_purch").val() + "¥" + $("#txt_AgrmntDt").val() + "¥" + $("#txt_sernum").val()
        //    //              12                               13                               14                                                  15                             16                             17                                18                            19                            20                            21
        //    + "¥" + $("#txt_DtAgrmntFrm").val() + "¥" + $("#txt_asseloc").val() + "¥" + $("#ddlassetstate option:selected").val() + "¥" + $("#txt_asswithuser").val() + "¥" + asset + "¥" + $("[id*=hdUserId]").val() + "¥" + $("#txt_hostname").val() + "¥" + $("#txt_servtag").val() + "¥" + $("#txt_model").val() + "¥" + $("#txt_manufact").val()
        //    //                22                                  23                           24                               25                             26                            27                                28                                 29                           30                           31                        32                                  33                                 34
        //    + "¥" + $("#txt_operatingsy").val() + "¥" + $("#txt_servicepack").val() + "¥" + $("#txt_memory").val() + "¥" + $("#txt_vmemor").val() + "¥" + $("#txt_manufa").val() + "¥" + $("#txt_clock").val() + "¥" + $("#txt_cores").val() + "¥" + $("#txt_ipaddress").val() + "¥" + $("#txt_macaddr").val() + "¥" + $("#txt_nic").val() + "¥" + $("#txt_netw").val() + "¥" + $("#txt_defaultgate").val() + "¥" + $("#txt_dhc").val()

        //    //             35                        36                             37                                     38
        //    + "¥" + $("#txt_modell").val() + "¥" + $("#txt_serno").val() + "¥" + $("#txt_harman").val() + "¥" + $("#txt_hardcapacity").val()

        //    //               39                              40                               41
        //    + "¥" + $("#txt_monitype").val() + "¥" + $("#txt_moniserno").val() + "¥" + $("#txt_moniman").val()
        //    //               42                         43                        44                   45
        //    + "¥" + $("#txt_resolution").val() + "¥" + check + "¥" + $("#txt_emp").val() + "¥" + $("#txt_branch").val()
        //    //              46                                    47                                 48                                  49
        //    + "¥" + $("#ddldep option:selected").val() + "¥" + allocation + "¥" + $('#ddl_criticality option:selected').val() + "¥" + $('#txt_war_star_dte').val()
        //    //               50                            51                              52                   
        //    + "¥" + $('#txt_mod').val() + "¥" + $('#txt_asst_tag').val() + "¥" + $('#txt_host_nme').val();




        //            1                              2                                  3                                4
        var input = neww + "¥" + $('#ddlassettype option:selected').val()+ "¥" + $("#txt_manuf").val() + "¥" + $("#txt_sernum").val()
            //             5                                 6                               7                                               8                             9                   
            + "¥" + $("#txt_DtAgrmntFrm").val() + "¥" + $("#txt_asseloc").val() + "¥" + $("#ddlassetstate option:selected").val()  + "¥" + asset + "¥" + $("[id*=hdUserId]").val() 

            //       10                          11                12            
          + "¥" + check + "¥" + $("#txt_emp").val() + "¥" + $("#txt_branch").val()
            //             13                                    14                              15           
            + "¥" + $("#ddldep option:selected").val() + "¥" + allocation  + "¥" + $('#txt_war_star_dte').val()
            //               16                           17                           18                                   19                                 20
            + "¥" + $('#txt_mod').val() + "¥" + $('#txt_asst_tag').val() + "¥" + $('#txt_host_nme').val() + "¥" + $('#txt_criticality').val() + "¥" + $('#ddlcategory').val();


    }
    else {

        neww= 0;
        hh = 1;
        ////            1              2                   3                              4                                     5                                     6                         7                               8                            9
        //var input = neww + "¥" + asstype + "¥" + $("#txt_ass").val() + "¥" + $("#txt_assetname").val() + "¥" + $("#txt_producttype").val() + "¥" + $("#txt_productname").val() + "¥" + $("#txt_manuf").val() + "¥" + $("#txt_partnu").val() + "¥" + $("#txt_mac").val()
        //    //              10                                    11                                12                             13                              14                                15                            16                        17
        //    + "¥" + $("#txt_purch").val() + "¥" + $("#txt_AgrmntDt").val() + "¥" + $("#txt_sernum").val() + "¥" + $("#txt_DtAgrmntFrm").val() + "¥" + $("#txt_asseloc").val() + "¥" + $("#ddlassetstate").val() + "¥" + $("#txt_asswithuser").val() + "¥" + asset
        //    //                  18                         19                              20                                 21                              22
        //    + "¥" + $("[id*=hdUserId]").val() + "¥" + $("#txt_hostname").val() + "¥" + $("#txt_servtag").val() + "¥" + $("#txt_model").val() + "¥" + $("#txt_manufact").val()
        //    //                       23                         24
        //    + "¥" + $("#txt_operatingsy").val() + "¥" + $("#txt_servicepack").val()
        //    //             25                          26                                27                           28                             29
        //    + "¥" + $("#txt_memory").val() + "¥" + $("#txt_vmemor").val() + "¥" + $("#txt_manufa").val() + "¥" + $("#txt_clock").val() + "¥" + $("#txt_cores").val()
        //    //              30                                31                          32                                 33
        //    + "¥" + $("#txt_ipaddress").val() + "¥" + $("#txt_macaddr").val() + "¥" + $("#txt_nic").val() + "¥" + $("#txt_netw").val()
        //     //                  34                        35                            36                              37                                 38                                  39                           40
        //    + "¥" + $("#txt_defaultgate").val() + "¥" + $("#txt_dhc").val() + "¥" + $("#txt_modell").val() + "¥" + $("#txt_serno").val() + "¥" + $("#txt_harman").val() + "¥" + $("#txt_hardcapacity").val() + "¥" + $("#txt_monitype").val()
        //    //                 41                           42                             43                            44                        45                        46                          47                                      48
        //    + "¥" + $("#txt_moniserno").val() + "¥" + $("#txt_moniman").val() + "¥" + $("#txt_resolution").val() + "¥" + check + "¥" + $("#txt_emp").val() + "¥" + $("#txt_branch").val() + "¥" + $("#ddldep option:selected").val() + "¥" + allocation
        //    //                   49                              50
        //    + "¥" + $('#ddl_criticality').val() + "¥" + $('#txt_war_star_dte').val()
        //    //             51                                52                          53                          54
        //    + "¥" + $('#txt_mod').val() + "¥" + $('#txt_asst_tag').val() + "¥" + $('#txt_host_nme').val() + "¥" + asetcode ;


        //            1              2                    3                       4
        var input = neww + "¥" + asstype + "¥" + $("#txt_ass").val()+ "¥" + $("#txt_manuf").val() 

//                           5                                   6                               7                             8                               9
            + "¥" + $("#txt_sernum").val() + "¥" + $("#txt_DtAgrmntFrm").val() + "¥" + $("#txt_asseloc").val() + "¥" + $("#ddlassetstate").val() + "¥" + asset

//                             10                         11               12                         13                            14                                           15
            + "¥" + $("[id*=hdUserId]").val() + "¥" + check + "¥" + $("#txt_emp").val() + "¥" + $("#txt_branch").val() + "¥" + $("#ddldep option:selected").val() + "¥" + allocation
//                           16
            + "¥" + $('#txt_war_star_dte').val()

//                        17                             18                               19                          20                        21                              22
            + "¥" + $('#txt_mod').val() + "¥" + $('#txt_asst_tag').val() + "¥" + $('#txt_host_nme').val() + "¥" + asetcode + "¥" + $('#txt_criticality').val() + "¥" + $('#ddlcategory').val();


    }
    if (hh == 1) {

        $.ajax({
            type: "POST",
            contentType: "application/json; charset=utf-8",
            url: "assetmntupdation.aspx/confirmproblem",
            data: "{QueryString:'" + QueryString + "',input : '" + input + "'}",
            dataType: "json",
            success: function (Result) {

                Result = Result.d;
                alert(Result);

                window.open('assetmntupdation.aspx', '_self');
            },

            error: function (Result) {
                alert(Result);
            }
        });


    }     
 }

    










var gbid="";


function getassetTABLE(dt) {
    $("#tableasset").empty();
    var Querystring;
    $("#tableasset").show();
    
   

    var InputString = dt;

    Querystring = "Getassettable";



        
        $.ajax({
            type: "POST",
            contentType: "application/json; charset=utf-8",
            url: "assetmntupdation.aspx/getassett",
            data: "{QueryStr : '" + Querystring + "',input :'" + InputString + "'}",
            dataType: "json",
            success: function (Result) {
                if (Result.d.length > 0) {
                    $("#history").show();
                    $('#tableasset').empty();//t.fi_name,t.branch,t.addrss,t.contact_person,t.phone_no,t.mobile_no,t.email_id,t.pan,t.gstn,t.cin
                    $("#tableasset").append('<thead class="bg-success text-white">< tr ><th scope="col">ID</th><th scope="col">Asset Code</th> <th scope="col">Asset Type</th> <th scope="col">Manufacture</th><th scope="col">Asset State</th><th scope="col">Allocated Date</th><th scope="col">Allocated To</th><th scope="col">Allocated user ID</th></tr></thead><tbody class="border border-dark">'
                    );
                    for (var i = 0; i < Result.d.length; i++) {
                        $("#tableasset").append('<tr><td>' + Result.d[i].INName + '</td>' +
                            '<td>' + Result.d[i].Branchordep + '</td>' +
                            '<td>' + Result.d[i].Summary + '</td>' +
                            '<td>' + Result.d[i].Desc + '</td>' +
                            '<td>' + Result.d[i].Repdate + '</td>' +
                            '<td>' + Result.d[i].state + '</td>' +
                            '<td>' + Result.d[i].asset + '</td>' +
                            '<td>' + Result.d[i].user + '</td>' +
                            
                            '</tr >');
                        
                        
                    }
                    $("#tableasset").append(
                        '</tbody>');
                }
            },
            error: function (Result) {
                alert(Result);
            }
    });
    $("#history").show();
    
}



function gr() {

    $('#tableShowIN').find('tr').click(function () {
        var row = $(this).find('td:first').text();
        

        
        //alert('You clicked ' + row);
        var dt = row.toString();
        asetcode = dt;
        shAstDetails(row);
        shWRkSDetails(row);
        
        getassetTABLE(dt);
        workstation();
        $('#tblticket').removeEventListener();




    });

    


}

var asstype = '';
var asetcode = '';
function shAstDetails(AsstCd) {

    //alert('login into shdetails');
    // AssetId = $('#ddlUassets option:selected').val();

    var QueryString = "GetUassetDtl";
    var input = AsstCd;



    $.ajax({



        type: "POST",
        contentType: "application/json; charset=utf-8",
        url: "assetmntupdation.aspx/AssetV",
        data: "{QueryString:'" + QueryString + "',input : '" + input + "'}",
        dataType: "json",
        success: function (Result) {

            if (Result.d.length > 0) {
                Result = Result.d.split("^");
                $('#txt_assetcode').val(Result[0]);
                $('#txt_assetname').val(Result[1]);
                $("#txt_producttype").val(Result[2]);
                $("#ddlassettype").val(Result[26]);
                $("#txt_productname").val(Result[3]);
                $('#txt_manuf').val(Result[4]);
                $('#txt_partnu').val(Result[5]);
                $('#txt_mac').val(Result[6]);
                $('#txt_purch').val(Result[7]);
                $('#txt_AgrmntDt').val(Result[8]);
                $('#txt_sernum').val(Result[9]);
                $('#txt_DtAgrmntFrm').val(Result[10]);
                $('#txt_asseloc').val(Result[11]);
                $('#ddlassetstate').val(Result[12]);
                $('#txt_asswithuser').val(Result[13]);
                $('#txt_war_star_dte').val(Result[24]);
                if (Result[14] == 1) {
                    $('#radGYes').prop("checked", true);
                    $('#radGNo').prop("checked", false);
                }
                else if (Result[14] == 0) {
                    $('#radGNo').prop("checked", true);
                    $('#radGYes').prop("checked", false);
                }
                $('#txt_astype').val(Result[15]);
                if (Result[17] == 1) {
                    $('#branch').prop("checked", true);
                    $('#txt_branch').val(Result[18]);
                    $('#bran').show();
                    $('#depa').hide();
                    $('#empc').hide();
                }
                else if (Result[17] == 2) {
                    $('#emp').prop("checked", true);
                    $('#txt_emp').val(Result[15]);
                    $('#empc').show();
                    $('#depa').hide();
                    $('#bran').hide();
                }
                else if (Result[17] == 3) {
                    $('#dep').prop("checked", true);
                    $('#depa').show();
                    $('#empc').hide();
                    $('#bran').hide();
                    $('#ddldep').val(Result[19]);
                }
                asstype = Result[20];

                $('#txt_mod').val(Result[21]);
                $('#txt_asst_tag').val(Result[22]);
                $('#txt_host_nme').val(Result[23]);
                $('#txt_war_star_dte').val(Result[24]);
                $('#txt_criticality').val(Result[25]);
                $('#ddlcategory').val(Result[27]);

                //alert(asstype);
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



function shWRkSDetails(Asstcd) {

    //var AssetId;
    //alert('login into shdetails');
    // AssetId = $('#ddlUassets option:selected').val();
    // alert(AssetId);
    var QueryString = "GetWorkstation";
    var input = Asstcd;
    $.ajax({
        type: "POST",
        contentType: "application/json; charset=utf-8",
        url: "AssetView.aspx/WOKSTDET",
        data: "{QueryString:'" + QueryString + "',input : '" + input + "'}",
        dataType: "json",
        success: function (Result) {
            if (Result.d.length > 0) {
                $('#work').slideDown();
                Result = Result.d.split("^");
                $('#txt_hostname').val(Result[0]);
                $('#txt_servtag').val(Result[1]);
                $("#txt_model").val(Result[2]);
                $("#txt_manufact").val(Result[3]);
                $('#txt_operatingsy').val(Result[4]);
                $('#txt_servicepack').val(Result[5]);
                $('#txt_memory').val(Result[6]);
                $('#txt_vmemor').val(Result[7]);
                $('#txt_manufa').val(Result[8]);
                $('#txt_clock').val(Result[9]);
                $('#txt_cores').val(Result[10]);
                $('#txt_ipaddress').val(Result[11]);
                $('#txt_macaddr').val(Result[12]);
                $('#txt_nic').val(Result[13]);
                $('#txt_netw').val(Result[14]);
                $('#txt_defaultgate').val(Result[15]);
                $('#txt_dhc').val(Result[16]);
                $('#txt_modell').val(Result[17]);
                $('#txt_serno').val(Result[18]);
                $('#txt_harman').val(Result[19]);
                $('#txt_hardcapacity').val(Result[20]);
                $('#txt_monitype').val(Result[21]);
                $('#txt_moniserno').val(Result[22]);
                $('#txt_moniman').val(Result[23]);
                $('#txt_resolution').val(Result[24]);
            }

        },
        error: function (Result) {



            alert(Result);
        }




    });


}

function assetcode() {

    var QueryString = "GetASSESCODE";
    

    $.ajax({

        type: "POST",
        contentType: "application/json; charset=utf-8",
        url: "assetmntupdation.aspx/getFillassescode",
        data: "{QueryString:'" + QueryString + "'}",
        dataType: "json",
        success: function (Result) {
           
            Result = Result.d.split("^");
            if (Result[0] == '') {
                $('#txt_assetcode').val(1);
            }
            else {
                $('#txt_assetcode').val(Result[0]);

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

function getCriticality() {
    var category = $('#ddlcategory').val();
    var branch_id = $('#txt_branch').val();
    var asset = $('#ddlassettype').val();
    var QueryString = "GetCriticality";
    var input = category + "¥" + asset;
    if ($('#branch').prop("checked") == true) {
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
    else if ($('#emp').prop("checked") == true) {
        var emp = $("#txt_emp").val();

        $.ajax({
            type: "POST",
            contentType: "application/json; charset=utf-8",
            url: "assetmntupdation.aspx/getcriticality",
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

