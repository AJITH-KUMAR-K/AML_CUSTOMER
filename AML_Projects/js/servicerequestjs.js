function frmExit() {
    window.open("index.aspx", "_self");
}
$(window).on("load", function () {
    $("#SelctType").hide();
    $("#tableShowIN").hide();
    $("#br_nme").hide();
    $("#div_Release").hide();
    $("#oldasset").hide();
    $("#mvfrm").hide();
    $("#mvto").hide();
    $("#mvtoemp").hide();
    $("#imac_fields").hide();
    $("#ddlimac").hide();

    $("#txt_ReportedBy").val($("[id*=hduname]").val());

    // GetRequestType();
    //GetUrgency();
    $("#txt_AgrmntDt").datepicker({
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

    GetStatus();
    GetRequestType();
    GetUrgency();

});

function ModelPopWarning(msg) {
    $("#warnMsgContent").html(msg);
    $("#centralModalWarning").modal("show");
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
// -------------user asset detail on select-------
function SelectedAsstDtl() {
    //alert($('#user_asset option:selected').val());

    var Asset = $('#user_asset option:selected').val();
    //alert('entered into get');

    var QueryString = Asset;
    //var input = $("#txt_Empcode").val();

    $.ajax({

        type: "POST",
        contentType: "application/json; charset=utf-8",
        url: "ServiceRequest.aspx/SelectedAsstDTL",
        data: "{QueryString:'" + QueryString + "'}",
        dataType: "json",
        success: function (Result) {
            
            if (Result.d.length > 0) {
                Result = Result.d.split("^");
                $('#txt_Assettyp').val(Result[0]);
                $('#txt_SerialNumber').val(Result[1]);
                $('#txt_Manufacture').val(Result[2]);
            } else {

                alert('No Entries Found');
            }


        },
        error: function (Result) {

            alert(Result.d);
        }


    });

}
//------------hide and show release request field based on request typ---------
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

    if ($('#ddlReqType').val() == 401) {
        $('#ddlimac').show();
    }
    else {
        $('#ddlimacType').val(0);
        $('#ddlimac').hide();

    }
    GetRequestTypesub();

}


/* Include Many js files */



function showTypes() {
    if ($("#radGYes").prop("checked")) {
        $("#SelctType").fadeIn();
        $("#dephide").show();

        //getGuarenteeType();
    }
    else if ($("#radGNo").prop("checked")) {
        $("#SelctType").fadeOut();
        $("#dephide").hide();

    }
}
//--------user assets-------
function GetUserAsset() {
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

function GetStatus() {

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

function GetRequestType() {

    var QueryStr = "ServiceCatlogDtl";
    $.ajax({
        type: "POST",
        contentType: "application/json; charset=utf-8",
        url: "servicerequest.aspx/getRequesttype",
        data: "{QueryString:'" + QueryStr + "'}",
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
/*---------start-Dropdown  Requesttype submenu-----*/

function GetRequestTypesub() {
    var reqid = document.getElementById("ddlReqType").value;

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

/*-------dropdown-urgency------*/
function GetUrgency() {

    var QueryString = "GetUrgency";
    $.ajax({
        type: "POST",
        contentType: "application/json; charset=utf-8",
        url: "ServiceRequest.aspx/getUrgencyprio",
        data: "{QueryString:'" + QueryString + "'}",
        dataType: "json",
        success: function (Result) {
            $('#ddlUrgency').empty();
            $('#ddlUrgency').append($("<option></option>").val("-1").html("Select Urgency/Priority "));
            $.each(Result.d, function (data, value) {
                $('#ddlUrgency').append($("<option></option>").val(value.PrioId).html(value.PrioName));
            })
        },
        error: function (Result) {
            alert('GetUrgency()' + Result.d);
        }

    });
    return;
}
/*-------dropdown-incategory------*/
function GetINCategory() {

    var QueryString = "GetINCategory";
    $.ajax({
        type: "POST",
        contentType: "application/json; charset=utf-8",
        url: "ServiceRequest.aspx/getINCategory",
        data: "{QueryString:'" + QueryString + "'}",
        dataType: "json",
        success: function (Result) {
            $('#ddlClassification').empty();
            $('#ddlClassification').append($("<option></option>").val("-1").html("Select Classification/Incident Category "));
            $.each(Result.d, function (data, value) {
                $('#ddlClassification').append($("<option></option>").val(value.INCId).html(value.INCName));
            })
        },
        error: function (Result) {
            alert('GetINCategory()' + Result.d);
        }

    });
    return;
}
/*-------dropdown-inSUBcategory------*/
function GetINsubCategory() {
    var InputString = $("#ddlClassification").val();
    var QueryString = "GetINsubCategory";
    $.ajax({
        type: "POST",
        contentType: "application/json; charset=utf-8",
        url: "ServiceRequest.aspx/getSubCategory",
        data: "{QueryString:'" + QueryString + "',input : '" + InputString + "'}",
        dataType: "json",
        success: function (Result) {
            $('#ddlsubCategory').empty();
            $('#ddlsubCategory').append($("<option></option>").val("-1").html("Select Sub Category "));
            $.each(Result.d, function (data, value) {
                $('#ddlsubCategory').append($("<option></option>").val(value.INSubId).html(value.INSubName));
            })
        },
        error: function (Result) {
            alert('GetINsubCategory()' + Result.d);
        }

    });
    return;
}
function GetSeverity() {

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
/*---------start-Dropdown  impact----*/

function GetImpact() {

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
/*---------start-Dropdown  source-----*/

function GetSourceDtls() {

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
/*---------start- Empdetails-----*/

function GetEmpdetails() {
    GetUserAsset();
    var e_cde = '';
    e_cde = document.getElementById('txt_Empcode').value;
    if ($("#radGYes").prop("checked") == false && $("#radGNo").prop("checked") == false) {
        alert('Please Select Affected By Person Or Branch ');

    }
    else if (e_cde == null || e_cde == '') {

        alert('please fill EmpCode/BranchID textbox');
    } else {


        if ($("#radGYes").prop("checked") == true) {// Affected by Person
            person = 1;
            $('#br_nme').hide();
            $('#emp_nme_div').show();
            $('#br_dt_div').show();
            $('#div_BchOutstanding').addClass('d-none');
            $('#id_txt_DpName').removeClass('d-none');


        }
        else if ($("#radGNo").prop("checked") == true) {// Affected by Branch
            person = 0;
            $('#br_dt_div').hide()
            $('#emp_nme_div').hide()
            $('#br_nme').show();
            $('#div_BchOutstanding').removeClass('d-none');
            $('#id_txt_DpName').addClass('d-none');


        }

        if (person == 1) {
            $('#txt_Email').empty;
            var QueryString = "GetEmployeeDetails";
            var input = $("#txt_Empcode").val();

            $.ajax({

                type: "POST",
                contentType: "application/json; charset=utf-8",
                url: "ServiceRequest.aspx/getFillempdetails",
                data: "{QueryString:'" + QueryString + "',input : '" + input + "'}",
                dataType: "json",
                success: function (Result) {
                    if (Result.d.length > 0) {
                        Result = Result.d.split("^");
                        $('#txt_empname').val(Result[0]);
                        $('#txt_Branch').val(Result[1]);
                        $('#txt_location').val(Result[1]);
                        $('#txt_DpName').val(Result[3]);

                        $('#txt_Email').val($("#txt_Empcode").val() + '@manappuram.com');


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
            var input = $("#txt_Empcode").val();

            $.ajax({

                type: "POST",
                contentType: "application/json; charset=utf-8",
                url: "ServiceRequest.aspx/getbranchdt",
                data: "{QueryString:'" + QueryString + "',input : '" + input + "'}",
                dataType: "json",
                success: function (Result) {
                    if (Result.d.length > 0) {

                        Result = Result.d.split("^");
                        $('#txt_BrName').val(Result[0]);
                        //$('#txt_Branch').val(Result[1]);
                        $('#txt_location').val(Result[4]);

                        $('#txt_Phonenumber').val(Result[1]);
                        $('#txt_phone').val(Result[2]);
                        $('#txt_Email').val(Result[3]);
                        $('#BchOutstanding').val(Result[5]);
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
/*-------end------*/


/*--confirm button for incident or sr    ------*/

function AddSRorIN() {
    var mil;
    var sedmail;
    $('#btnConfirm').prop('disabled', true);
    $('#btnExit').prop('disabled', true);
    var imactyp;
    var oldasstser;
    var movf;
    var movto;
    var movtoemp;
    var outstanding;
    var department;
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
    if ($("#radGYes").prop("checked") == false && $("#radGNo").prop("checked") == false) {
        alert('Please Select Person or Branch');
        $('#btnConfirm').prop('disabled', false);
        $('#btnExit').prop('disabled', false);

    }
    else if ($("#txt_Empcode").val() == '') {
        alert('Please Search with Employee code or Branch Code');
        $('#btnConfirm').prop('disabled', false);
        $('#btnExit').prop('disabled', false);
    }
    else if ($("#txt_Email").val() == '' || $("#txt_phone").val() == '') {
        alert('Please Enter Email id and Alternate Phone Number');
        $('#btnConfirm').prop('disabled', false);
        $('#btnExit').prop('disabled', false);
    }

    else if ($("#ddlUrgency option:selected").val() == "-1") {
        ModelPopWarning("Please Select Urgency/Priority Type");
        $('#btnConfirm').prop('disabled', false);
        $('#btnExit').prop('disabled', false);
        return false;
    }
    else if ($("#txt_reqsummary").val() == "") {
        ModelPopWarning("Please enter Request Summary");
        $('#btnConfirm').prop('disabled', false);
        $('#btnExit').prop('disabled', false);
        return false;
    }
    else if ($("#txt_Description").val() == "") {
        ModelPopWarning("Please enter Request Description");
        $('#btnConfirm').prop('disabled', false);
        $('#btnExit').prop('disabled', false);
        return false;
    }
    else if ($("#ddlReqType option:selected").val() == "-1") {
        ModelPopWarning("Please select request type");
        $('#btnConfirm').prop('disabled', false);
        $('#btnExit').prop('disabled', false);
        return false;


    }

    else if ($("#ddlsubReqType option:selected").val() == "-1") {
        ModelPopWarning("Please select Subrequest type");
        $('#btnConfirm').prop('disabled', false);
        $('#btnExit').prop('disabled', false);
        return false;


    }


    else if ($("#ddlReqType option:selected").val() == 401 && $('#ddlimacType option:selected').val() == 0) {

        ModelPopWarning('Please select Imac Type..');
        $('#btnConfirm').prop('disabled', false);
        $('#btnExit').prop('disabled', false);
    }

    else {
        if ($("#radGYes").prop("checked") == true) {
            
            person = 1;
            outstanding = '';
            department = $("#txt_DpName").val();

        }
        else if ($("#radGNo").prop("checked") == true) {
            person = 0;
            outstanding = $("#BchOutstanding").val();
            department = '';
        }

        if ($("#FileUpload").val() == "") {
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
            InputData = $("[id*=hdUserId]").val() + "¥" + person + "¥" + $("#txt_Empcode").val() + "¥" + $("#txt_phone").val() + "¥" + $("#txt_Email").val() + "¥" + $("#ddlUrgency option:selected").val() + "¥" + $('#txt_reqsummary').val().replace(/[']/gi, '"') + "¥" + $("#txt_Description").val().replace(/[']/gi, '"') + "¥" + $('#ddlReqType option:selected').val() + "¥" + 1 + "¥" + $('#ddlimacType option:selected').val() + "¥" + $('#ddlsubReqType option:selected').val() + "¥" + department + "¥" + outstanding;
            //                   1                           2                   3                                4                             5                                6                                             7                                                    8                                                            9                                   10                         11                                                12                                  13                   14                   
            //alert(InputData);
            // }

            if (person = 1) {

                mil = $("#txt_Empcode").val() + "@manappuram.com";

            } else {

                mil = $("#txt_Email").val();
            }



            $.ajax({
                type: "POST",
                contentType: "application/json; charset=utf-8",
                url: "ServiceRequest.aspx/AddSrNoAttach",
                data: "{input:'" + InputData + "',User:'" + mil + "'}",
                dataType: "json",
                success: function (Result) {
                    alert('Ticket No = ' + Result.d);
                    window.open('ServiceRequest.aspx', '_self');
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
                }
            });


        }

        else {


            // alert('entered into attach');
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
                    //alert('filename' + fileName);


                    //alert('before input data');
                    //1                    2             3              4                               5                                   6                              7                       8         9           10          11                12                                     13        14         15           16                                 17                              18         19              20                           21         22         23                                      
                    // var InputData = $("[id*=hdUserId]").val() + "¥" + person + "¥" + 0 + "¥" + $("#txt_Empcode").val() + "¥" + $("#txt_Phonenumber").val() + "¥" + $("#txt_phone").val() + "¥" + $("#txt_Email").val() + "¥" + 0 + "¥" + 0 + "¥" + 'null' + "¥" + 0 + "¥" + $("#ddlUrgency option:selected").val() + "¥" + 0 + "¥" + 0 + "¥" + 0 + "¥" + $('#txt_reqsummary').val() + "¥" + $("#txt_Description").val() + "¥" + 0 + "¥" + 1 + "¥" + $("[id *= hdUserId]").val() + "¥" + '' + "¥" + 0 + "¥"+ $('#ddlReqType option:selected').val();

                    //                         1                       2                     3                               4                            5                                   6                                             7                                                        8                                                            9                               10           11                          12                                                    13                                  14                 15             
                    var InputData = $("[id*=hdUserId]").val() + "¥" + person + "¥" + $("#txt_Empcode").val() + "¥" + $("#txt_phone").val() + "¥" + $("#txt_Email").val() + "¥" + $("#ddlUrgency option:selected").val() + "¥" + $('#txt_reqsummary').val().replace(/[']/gi, '"') + "¥" + $("#txt_Description").val().replace(/[']/gi, '"') + "¥" + $('#ddlReqType option:selected').val() + "¥" + 1 + "¥" + fileName + "¥" + $('#ddlimacType option:selected').val() + "¥" + $('#ddlsubReqType option:selected').val() + "¥" +  department + "¥" + outstanding;
                    //alert(InputData);

                    if (person = 1) {

                        mil = $("#txt_Empcode").val() + "@manappuram.com";

                    } else {

                        mil = $("#txt_Email").val();
                    }

                    $.ajax({
                        type: "POST",
                        contentType: "application/json; charset=utf-8",
                        url: "ServiceRequest.aspx/confirmdocument",
                        data: "{val:'" + InputData + "',upload_file:'" + imageData + "'}",
                        dataType: "json",
                        success: function (Result) {
                            Result = Result.d;
                            Result = Result.split("¥");
                            var k = Result[1].split("^");

                            if (Result[0] == "Successfully Uploaded") {
                                // alert('before get success id call');
                                alert('Ticket No: ' + k[0]);
                                window.open('ServiceRequest.aspx', '_self');

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
                        }
                    });

                }


            }

        }
    }



}




/*---------------------------------fileupload--------------------*/

function Getsuccessid() {
    var Tick_no;
    //alert('entered into get');

    var QueryString = "Getticketid";
    //var input = $("#txt_Empcode").val();

    $.ajax({

        type: "POST",
        contentType: "application/json; charset=utf-8",
        url: "ServiceRequest.aspx/getticketid",
        data: "{QueryString:'" + QueryString + "'}",
        dataType: "json",
        success: function (Result) {
            Tick_no = Result.d;
            Result = 'Ticket Number:' + Result.d;
            alert(Result);
            Approve_check(Tick_no);
            // window.open('ServiceRequest.aspx', '_self');

        },
        error: function (Result) {

            alert(Result);
        }


    });

}

function SaveuploadData(seqid) {
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


            data = seqid;
            $.ajax({
                type: "post",
                contentType: "application/json; charset=utf-8",
                url: "ServiceRequest.aspx/confirmdocument",
                data: "{val:'" + data + "',upload_file:'" + imageData + "'}",
                dataType: "json",
                success: function (result) {
                    result = result.d;
                    alert(result);
                    window.location = "../ServiceRequest.aspx";
                },
                error: function (result) {
                    alert(result);
                    window.location = "../ServiceRequest.aspx";
                }
            });
        }
    }
    var data;
    data = '';



    var fileList = document.getElementById("FileUpload").files;

    var fileReader = new FileReader();
    if (fileReader && fileList && fileList.length) {

        var fileName = fileList[0].name;
        extension = fileName.replace(/^.*\./, '');

        if (extension == fileName) {
            extension = '';
        } else {

            extension = extension.toLowerCase();
        }

        fileReader.readAsDataURL(fileList[0]);
        fileReader.onload = function () {
            var imageData = fileReader.result;

            var InputData = seqid;

            $.ajax({
                type: "POST",
                contentType: "application/json; charset=utf-8",
                url: "ServiceRequest.aspx/PutdatalDocuments",
                data: "{ImageData:'" + imageData + "',InputData:'" + InputData + "'}",
                dataType: "json",
                success: function (Result) {

                    alert(Result.d);
                },
                error: function (Result) {
                    alert(Result);
                }
            });

        };
    }

}

/*--------------IN/SR  gridload for search--------*/
function getFITableDtls() {
    var k;

    //if ($('#txt_SR').val() == '' && $('#ddlStatus').val() == -1 && $('#txt_AgrmntDt').val() == '' && $('#txt_DtAgrmntTo').val() == '') {

    //    alert('Enter Search Options ');
    //} else {

    //    $("#tableShowIN").show();
    //    //var InputString = $("#txt_ticketno").val() + "¥" + $("#txt_rptfrm").val() + "¥" + $("#txt_rptto").val() + "¥" + $("#ddlsts").val();
    //    var txtsr = $("#txt_SR").val();
    //    var txtsdate = $("#txt_AgrmntDt").val();
    //    var txtendate = $("#txt_DtAgrmntTo").val();
    //    var status = $("#ddlStatus option:selected").val();
    //    Querystring = "SearchBySr";

    //    if (txtsr != '' && txtsdate == '' && txtendate == '' && status == -1) {
    //        //Querystring = "GetincidentID";
    //        var InputString = 'GetById' + "¥" + $("#txt_SR").val();
    //    }
    //    else if (txtsr == '' && txtsdate != '' && txtendate != '' && status == -1) {
    //        //Querystring = "GetinDate";
    //        var InputString = 'GetByDate' + "¥" + $("#txt_AgrmntDt").val() + "¥" + $("#txt_DtAgrmntTo").val();
    //    }
    //    //else if (txtsr != '' && txtsdate != '' && txtendate != '' && status != -1) {
    //    //    Querystring = "Getincidentdata";
    //    //}
    //    else if (txtsr == '' && txtsdate == '' && txtendate == '' && status != -1) {
    //        // Querystring = "GetinSt";
    //        var InputString = 'GetBySts' + "¥" + $("#ddlStatus option:selected").val();
    //    }
    var txtsr = $("#txt_SR").val().toUpperCase();
    var txtsdate = $("#txt_AgrmntDt").val();
    var txtendate = $("#txt_DtAgrmntTo").val();
    var status = $("#ddlStatus").val();
    if (status == -1) {

        status = "";
    }
    if (txtsdate == "") {

        txtsdate = "";
    } if (txtendate == "") {

        txtendate = "";
    } if (txtsr == "") {

        txtsr = "";
    }
    var InputString = txtsr + "¥" + txtsdate + "¥" + txtendate + "¥" + status + "¥" + "";
    var Querystring = "getNewSearch";


    $.ajax({
        type: "POST",
        contentType: "application/json; charset=utf-8",
        url: "ServiceRequest.aspx/getTable",
        data: "{QueryStr : '" + Querystring + "',input :'" + InputString + "'}",
        dataType: "json",
        success: function (Result) {
            if (Result.d.length > 0) {
                $('#tableShowIN').show();
                $('#tableShowIN').empty();//t.fi_name,t.branch,t.addrss,t.contact_person,t.phone_no,t.mobile_no,t.email_id,t.pan,t.gstn,t.cin
                $("#tableShowIN").append('<thead>< tr ><td scope="col">No</td><td scope="col">Incident/SR</td><td scope="col">Branch/dep</td><td scope="col">Summary</td> <td scope="col">Decription</td> <td scope="col">Rep.date</td><td scope="col">Ticket Status</td></tr></thead><tbody>'
                );
                for (var i = 0; i < Result.d.length; i++) {
                    k = i + 1;
                    $("#tableShowIN").append('<tr><td>' + k + '</td>' +
                        '<td>' + Result.d[i].INName + '</td>' +
                        '<td>' + Result.d[i].Branchordep + '</td>' +
                        '<td>' + Result.d[i].Summary + '</td>' +
                        '<td>' + Result.d[i].Desc + '</td>' +
                        '<td>' + Result.d[i].Repdate + '</td>' +
                        '<td>' + Result.d[i].CurrentStatus + '</td>' +

                        '</tr >');
                }
                $("#tableShowIN").append(
                    '</tbody>');
            } else {
                alert('No Entries Found OR Values Mismatch');
                $('#tableShowIN').empty();
                $('#tableShowIN').hide();


            }
        },
        error: function (Result) {
            alert(Result);
        }
    });
}



function Approve_check(Tno) {
    debugger;
    //var Tno = Tno.replace(/[']/gi, '"');
    var Tno = Tno.replaceAll("'", "");
    //Tno = Tno.trim(" ");
    var QueryString1 = "approvalcheck";
    var inputstring1 = Tno + "¥" + $('#ddlReqType option:selected').val();
    $.ajax({

        type: "POST",
        contentType: "application/json; charset=utf-8",
        url: "ServiceRequest.aspx/SrApprove",
        data: "{QueryString:'" + QueryString1 + "',InputString:'" + inputstring1 + "'}",
        dataType: "json",
        success: function (Result) {
            if (Result.d.length > 0) {
                Result = 'For Approval Assigned To:' + Result.d;
                alert(Result);
                //Apprvmailsend(Tno);
                window.open('ServiceRequest.aspx', '_self');
            }
            // sendmail(mailcon);
            // Apprvmailsend(Tno);


        },
        error: function (Result) {

            alert(Result.d + 'approve check');
        }


    });

}



function sendmail(content) {
    var InputString = content;
    var Empcode = $("#txt_Empcode").val();
    //var QueryString = "Getticketid";
    //var input = $("#txt_Empcode").val();
    $.ajax({

        type: "POST",
        contentType: "application/json; charset=utf-8",
        url: "ServiceRequest.aspx/saveprofile",
        data: "{Empcod:'" + Empcode + "',Input:'" + InputString + "'}",
        dataType: "json",
        success: function (Result) {
            Result = Result.d;
            alert('Mail sent..!!');

            window.open('servicerequest.aspx', '_self');

        },
        error: function (Result) {

            alert(Result.d + 'mail not sended');
        }


    });

}


//------------send mail for approver----------------

function Apprvmailsend(Tkno) {
    Tkno = Tkno.replace(/[']/gi, '');
    var InputString = content;
    var Tickno = Tkno;
    //var QueryString = "Getticketid";
    //var input = $("#txt_Empcode").val();
    $.ajax({

        type: "POST",
        contentType: "application/json; charset=utf-8",
        url: "servicerequest.aspx/sendmailapproval",
        data: "{Ticketno:'" + Tickno + "'}",
        dataType: "json",
        success: function (Result) {
            Result = Result.d;
            alert('Approval Mail sent..!!');
            window.open('SRCreation.aspx', '_self');

        },
        error: function (Result) {

            alert(Result.d + 'mail not sended');
        }


    });

}



//-------------send mail for approver---------------




