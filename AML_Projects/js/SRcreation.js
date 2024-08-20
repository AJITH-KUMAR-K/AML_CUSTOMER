function frmExit() {
    window.open("index.aspx", "_self");
}
$(window).on('load', function () {
    $("#SelctType").hide();
    $("#tableShowIN").hide();
    ////GetSourceDtls();
    GetStatus();
   // //GetRequestType();
    //GetImpact();
    //GetSeverity();
    //GetUrgency();
    //GetINCategory();

    $("#txt_ReportedBy").val( $("[id*=hduname]").val());
    ////GetFundDtls();
    
   // //GetFIType();
  //  //getbnkledg();   
   // //getLoanLedg();
    $("#txt_AgrmntDt").datepicker({
        dateFormat: 'dd/MM/yy',
        changeMonth: true,
        changeYear: true,
        stepMonths: true,
        todayHighlight: true,
        onSelect: function (dateText, inst) {

        }
    });

    //$("#txt_DtAgrmntFrm").datepicker({
    //    dateFormat: 'dd/MM/yy',
    //    changeMonth: true,
    //    changeYear: true,
    //    stepMonths: true,
    //    todayHighlight: true,
    //    onSelect: function (dateText, inst) {

    //    }
    //});

    $("#txt_DtAgrmntTo").datepicker({
        dateFormat: 'dd/MM/yy',
        changeMonth: true,
        changeYear: true,
        stepMonths: true,
        todayHighlight: true,
        onSelect: function (dateText, inst) {

        }
    });

    //$('#date_div1').hide();
    //$('#tickno_div').hide();
    //$('#date_div').hide();
    //$('#sts_div').hide();
    //$('#search_div').hide();
    //$('input[type="checkbox"]').on('change', function () {
    //    $('input[type="checkbox"]').not(this).prop('checked', false);
    //    if ($('#chk_tickno').prop('checked') == true) {
    //        $('#tickno_div').show();
    //        $('#date_div').hide();
    //        $('#date_div1').hide();
    //        $('#sts_div').hide();
    //        $('#search_div').show();
    //        $('#txt_AgrmntDt').val('');
    //        $('#txt_DtAgrmntTo').val('');
    //        $('#ddlStatus').val(-1);

    //    }
    //    else if ($('#chk_rpt_frm').prop('checked') == true) {
    //        $('#tickno_div').hide();
    //        $('#date_div').show();
    //        $('#date_div1').show();
    //        $('#sts_div').hide();
    //        $('#search_div').show();
    //        $('#txt_SR').val('');
    //        $('#ddlStatus').val(-1);

    //    }
    //    else if ($('#chk_sts').prop('checked') == true) {
    //        $('#tickno_div').hide();
    //        $('#date_div').hide();
    //        $('#date_div1').hide();
    //        $('#sts_div').show();
    //        $('#search_div').show();
    //        $('#txt_SR').val('');
    //        $('#txt_AgrmntDt').val('');
    //        $('#txt_DtAgrmntTo').val('');
    //    }
    //    $('input[type="checkbox"]').removeEventListener();
    //});



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
//-------MODEL POP WARINIG------------------
function ModelPopWarning(msg) {
    $("#warnMsgContent").html(msg);
    $("#centralModalWarning").modal("show");
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
        $("#emp").show();
        showTypes
        $("#txt_phone").val("");
        $("#txt_Email").val("");
        //getGuarenteeType();
    }
    else if ($("#radGNo").prop("checked")) {

        $("#SelctType").fadeOut();

        $("#emp").hide();
        $("#dephide").hide();
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

function GetStatus() {
    
    var QueryString = "GetStatus";
    $.ajax({
        type: "POST",
        contentType: "application/json; charset=utf-8",
        url: "SRCreation.aspx/Getstatusup",
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
            alert('GetStatus()'+Result.d);
        }
        
    });
    GetUrgency();
   
}

/*-------end------*/

/*---------start-Dropdown  Requesttype-----*/

function GetRequestType() {

    var QueryString = "GetRequestType";
    $.ajax({
        type: "POST",
        contentType: "application/json; charset=utf-8",
        url: "SRCreation.aspx/getRequesttype",
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
            alert('GetRequestType()'+Result.d);
        }

    });

}

/*-------dropdown-urgency------*/
function GetUrgency() {

    var QueryString = "GetUrgency";
    $.ajax({
        type: "POST",
        contentType: "application/json; charset=utf-8",
        url: "SRCreation.aspx/getUrgencyprio",
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
            alert(Result);

        }

    });
    GetImpact(); 
  
}
/*-------dropdown-incategory------*/
function GetINCategory() {

    var QueryString = "GetINCategory";
    $.ajax({
        type: "POST",
        contentType: "application/json; charset=utf-8",
        url: "SRCreation.aspx/getINCategory",
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
            alert('GetINCategory()'+Result.d);
        }

    });

}
/*-------dropdown-inSUBcategory------*/
function GetINsubCategory() {
    var InputString = $("#ddlClassification").val();
    var QueryString = "GetINsubCategory";
    $.ajax({
        type: "POST",
        contentType: "application/json; charset=utf-8",
        url: "SRCreation.aspx/getSubCategory",
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
            alert('GetINsubCategory()'+Result.d);
        }

    });

}
function GetSeverity() {

    var QueryString = "GetSeverity";
    $.ajax({
        type: "POST",
        contentType: "application/json; charset=utf-8",
        url: "SRCreation.aspx/GetSeverity",
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
            alert('GetSeverity()'+Result.d);
        }

    });
    GetINCategory();
}
/*---------start-Dropdown  impact----*/

function GetImpact() {

    var QueryString = "GetImpact";
    $.ajax({
        type: "POST",
        contentType: "application/json; charset=utf-8",
        url: "SRCreation.aspx/getImpact",
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
            alert('GetImpact()'+Result.d);
        }

    });
   
    GetSeverity();
}
/*---------start-Dropdown  source-----*/

function GetSourceDtls() {
    
    var QueryString = "GetSource";
    $.ajax({
        
        type: "POST",
        contentType: "application/json; charset=utf-8",
        url: "SRCreation.aspx/getSourceData",
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
            
            alert('GetSourceDtls()'+Result.d);
        }
        
    });
    
}
/*---------start- Empdetails-----*/
var empcodevalue = '';
function GetEmpdetails() {
   
    var person=2;
    
    if ($("#radGYes").prop("checked") == true) {
        person = 1;
        $('#div_BchOutstanding').addClass('d-none');
        $('#div_txt_department').removeClass('d-none');
    }
    else if ($("#radGNo").prop("checked") == true) {
        person = 0;
        $('#div_BchOutstanding').removeClass('d-none');
        $('#div_txt_department').addClass('d-none');
    }
   
    if (person == 2)
    {
        ModelPopWarning("Please Select Affected by");
       
        return false;
    }
   
    else if ($("#txt_Empcode").val() == "") {
        ModelPopWarning("Please enter Emp code/Branch ID");
        //alert("Please Enter bank Name");
        return false;
    }

    else {
        if (person == 1) {
            var QueryString = "GetEmployeeDetails";
            var input = $("#txt_Empcode").val();

            $.ajax({

                type: "POST",
                contentType: "application/json; charset=utf-8",
                url: "SRCreation.aspx/getFillempdetails",
                data: "{QueryString:'" + QueryString + "',input : '" + input + "'}",
                dataType: "json",
                success: function (Result) {

                    Result = Result.d.split("^");
                    $('#txt_empname').val(Result[0]);
                    $('#txt_Branch').val(Result[1]);
                    $('#txt_Phonenumber').val(Result[2]);
                    $('#txt_department').val(Result[3]);
                    

                },
                error: function (Result) {

                    alert(Result);
                }


            });
        }
        else {
            var QueryString = "Getbranchdtls";
            var input = $("#txt_Empcode").val();

            $.ajax({

                type: "POST",
                contentType: "application/json; charset=utf-8",
                url: "SRCreation.aspx/getbranchdt",
                data: "{QueryString:'" + QueryString + "',input : '" + input + "'}",
                dataType: "json",
                success: function (Result) {
                    
                    Result = Result.d.split("^");
                    //$('#txt_empname').val(Result[0]);
                    $('#txt_Branch').val(Result[0]);
                    $('#txt_Phonenumber').val(Result[1]);
                    $('#txt_phone').val(Result[2]);
                    $('#txt_Email').val(Result[3]);
                    $('#BchOutstanding').val(Result[5]);
                    

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
    var outstanding;
    var department;
    debugger;
    var sedmail;
    var mil;
    $('#btnConfirm').prop('disabled', true);
    $('#btnExit').prop('disabled', true);
    //alert('entered to function');
    //alert($("#txt_Description").val().length);
    //alert($("#txt_ImpactDt").val().length);
    debugger;
    var person, incident;
    //if ($("#radIN").prop("checked") == true) {
    //    incident = 1;

    //}
    //else if ($("#radSR").prop("checked") == true) {
    //    incident = 0;

    //}


    if ($("#radGYes").prop("checked") == true) {
        person = 1;
        outstanding = '';
        department = $("#txt_department").val();


    }
   
    else if ($("#radGNo").prop("checked") == true) {
        person = 0;
        outstanding = $("#BchOutstanding").val();
        department = '';
    }
    if ($("#ddlSeverity").val() == "-1") {
        ModelPopWarning("Please Select Severity");
        $('#btnConfirm').prop('disabled', false);
        $('#btnExit').prop('disabled', false);
        //alert("Please Select Financial Type");
        return false;
    }
    else if ($("#ddlUrgency").val() == "-1") {
        ModelPopWarning("Please select Urgency/Priority");
        $('#btnConfirm').prop('disabled', false);
        $('#btnExit').prop('disabled', false);
        //alert("Please Enter bank Name");
        return false;
    }
    else if ($("#ddlImpact").val() == "-1") {
        ModelPopWarning("Please select Impact");
        $('#btnConfirm').prop('disabled', false);
        $('#btnExit').prop('disabled', false);
        //alert("Please Enter Branch Name");
        return false;
    } else if (($("#txt_ImpactDt").val()).trim() == "") {
        ModelPopWarning("Please Enter Impact Details");
        $('#btnConfirm').prop('disabled', false);
        $('#btnExit').prop('disabled', false);
        //alert("Please Enter Branch Name");
        return false;
    }  else if ($("#ddlClassification").val() == "-1") {
        ModelPopWarning("Please select Incident Category");
        $('#btnConfirm').prop('disabled', false);
        $('#btnExit').prop('disabled', false);
        //alert("Please Enter Branch Name");
        return false;
    }
    else if ($("#ddlsubCategory").val() == "-1") {
        ModelPopWarning("Please select SubCategory");
        $('#btnConfirm').prop('disabled', false);
        $('#btnExit').prop('disabled', false);
        //alert("Please Enter Branch Name");
        return false;
    }
    else if (($("#txt_Subject").val()).trim() == "") {
        ModelPopWarning("Please enter Subject");
        $('#btnConfirm').prop('disabled', false);
        $('#btnExit').prop('disabled', false);
        //alert("Please Enter Branch Name");
        
    }
    else if (($("#txt_Description").val()).trim() == "") {
        ModelPopWarning("Please enter Description");
        $('#btnConfirm').prop('disabled', false);
        $('#btnExit').prop('disabled', false);
        //alert("Please Enter Branch Name");
        
    }
    else if (($("#txt_Empcode").val()).trim() == "") {
        ModelPopWarning("Please enter Employee code/Branch ID");
        $('#btnConfirm').prop('disabled', false);
        $('#btnExit').prop('disabled', false);
        //alert("Please Enter Branch Name");
       
    }
    else if ($("#txt_Branch").val() == "") {
        ModelPopWarning("Please search For Emp/Branch Details");
        $('#btnConfirm').prop('disabled', false);
        $('#btnExit').prop('disabled', false);
        //alert("Please Enter Branch Name");
        
    }
    else if ($("#txt_Description").val().length> 3500) {
        ModelPopWarning("Description Content Data Size Exceed the Limit Please Reduce The Content..!!");
        $('#btnConfirm').prop('disabled', false);
        $('#btnExit').prop('disabled', false);

    } else if ($("#txt_ImpactDt").val().length > 3500) {
        ModelPopWarning("Impact Detail Content Exceed the data Limit Please Reduce The Content..!!");
        $('#btnConfirm').prop('disabled', false);
        $('#btnExit').prop('disabled', false);
    }
    else {
        debugger;

        if ($("#FileUpload").val() != "") {


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
                    //                       1                          2                     3                              4                                 5                               6                             7                        8                 9                              10                                                     11                             12                     13                   14                                    15                                           16                                           17                                                       18                       19                     20                     21        22        23            24                 25               26                       
                    var InputData = $("[id*=hdUserId]").val() + "¥" + person + "¥" + $("[id*=hdBrid]").val() + "¥" + $("#txt_Empcode").val() + "¥" + $("#txt_Phonenumber").val() + "¥" + $("#txt_phone").val() + "¥" + $("#txt_Email").val() + "¥" + -1 + "¥" + $("#ddlImpact").val() + "¥" + $("#txt_ImpactDt").val().replace(/[']/gi, '"') + "¥" + $("#ddlSeverity").val() + "¥" + $("#ddlUrgency").val() + "¥" + 0 + "¥" + $("#ddlClassification").val() + "¥" + $("#ddlsubCategory").val() + "¥" + $("#txt_Subject").val().replace(/[']/gi, '"') + "¥" + $("#txt_Description").val().replace(/[']/gi, '"') + "¥" + $("#txt_ImapactedCI").val() + "¥" + 1 + "¥" + $("[id *= hdUserId]").val() + "¥" + 1 + "¥" + 1 + "¥" + 1 + "¥" + fileName + "¥" + department + "¥" + outstanding;

                    if (person = 1) {

                        mil = $("#txt_Empcode").val() + "@manappuram.com";

                    } else {

                        mil = $("#txt_Email").val();
                    }

                    $.ajax({
                        type: "POST",
                        contentType: "application/json; charset=utf-8",
                        url: "SRCreation.aspx/confirmdocument",
                        data: "{val:'" + InputData + "',upload_file:'" + imageData + "',User:'" + mil+"'}",
                        dataType: "json",
                        success: function (Result) {


                            Result = Result.d;
                            Result = Result.split("¥");
                            //alert(Result);
                            
                            if (Result[0] == "Successfully Uploaded") {
                                //Result[1] = Result[1].split('^');
                                alert('TICKET NO:' + Result[1]);
                               // sedmail =
                               //     'Dear Team,</br></br > A ticket ' + Result[1] + ' has been rised in your employee code.You can check ticket details through applciation portal-- > ITSM TOOL-- > Ticket Management-- > Ticketview';
                               //// sendmail(sedmail);
                                //apprvmailsend(Result[1]);

                                window.open('SRCreation.aspx', '_self');
                                //Getsuccessid();
                            }





                        },

                        error: function (Result) {
                            alert(Result.d+'ERROR');
                        }
                    });





                }
            }
            //sendmail(sedmail);
        }
        else {
            debugger;
            var decc = $("#txt_Description").val();
            //decc = JSON.stringify(decc);
            decc = decc.replace(/[']/gi, '"');
            //alert(decc);
            //var impp = $("#txt_ImpactDt").val();
            //impp = JSON.stringify(impp);
            //impp = impp.replace(/[^a-z0-9\s]/gi, '');
            //alert(decc);
            //alert(impp);
            //alert($("#txt_Description").val().length);
            var QueryString = "";
            //sedmail =
            //    'Dear Team,</br></br > A ticket  has been rised in your employee code.You can check ticket details through applciation portal-- > ITSM TOOL-- > Ticket Management-- > Ticketview';

            //                   1                           2                     3                            4                                    5                               6                                7                    8                 9                                          10                                      11                               12                     13                    14                                     15                                       16                                            17                                                         18                     19                   20                        21        22        23            24                 25                                 
            var input = $("[id*=hdUserId]").val() + "¥" + person + "¥" + $("[id*=hdBrid]").val() + "¥" + $("#txt_Empcode").val() + "¥" + $("#txt_Phonenumber").val() + "¥" + $("#txt_phone").val() + "¥" + $("#txt_Email").val() + "¥" + -1 + "¥" + $("#ddlImpact").val() + "¥" + $("#txt_ImpactDt").val().replace(/[']/gi, '"') + "¥" + $("#ddlSeverity").val() + "¥" + $("#ddlUrgency").val() + "¥" + 0 + "¥" + $("#ddlClassification").val() + "¥" + $("#ddlsubCategory").val() + "¥" + $("#txt_Subject").val().replace(/[']/gi, '"') + "¥" + $("#txt_Description").val().replace(/[']/gi, '"') + "¥" + $("#txt_ImapactedCI").val() + "¥" + 1 + "¥" + $("[id *= hdUserId]").val() + "¥" + 1 + "¥" + 1 + "¥" + 1 + "¥" + department + "¥" + outstanding;
            //alert(input);
            //alert(input.replace(/[^a-z0-9\s]/gi, ''));
           // input=input.replaceAll("[^a-zA-Z0-9]", " ");  
           // alert(encodeURIComponent(input));
            //var myJSONString = JSON.stringify(input);
            //alert(myJSONString);
            //var myEscapedJSONString = myJSONString.replace(/\\n/g, "\\n")
            //    .replace(/\\'/g, "\\'")
            //    .replace(/\\"/g, '\\"')
            //    .replace(/\\&/g, "\\&")
            //    .replace(/\\r/g, "\\r")
            //    .replace(/\\t/g, "\\t")
            //    .replace(/\\b/g, "\\b")
            //    .replace(/\\f/g, "\\f");
           // alert(myEscapedJSONString);

            if (person = 1) {

                mil = $("#txt_Empcode").val() + "@manappuram.com";

            } else {

                mil = $("#txt_Email").val();
            }
            

            $.ajax({
                type: "POST",
                contentType: "application/json; charset=utf-8",
                url: "SRCreation.aspx/Addincident",
                data: "{QueryString:'" + QueryString + "',input : '" + input + "',User:'" + mil+"'}",
                dataType: "json",
                success: function (Result) {

  
                    Result = Result.d;
                   // Result = Result.split('^');
                   // alert(Result[1]);

                    alert('Ticket Number:' + Result);

                   
                   // sendmail(sedmail);
                   // apprvmailsend(Result);
                    window.open('SRCreation.aspx', '_self');

                   
                },

                error: function (Result) {
                    alert(Result.d+'error');
                }
            });

            
        }


    }

   
    
}


/*---------------------------------fileupload--------------------*/

function Getsuccessid() {

    var QueryString = "Getticketid";
    //var input = $("#txt_Empcode").val();
    
    $.ajax({

        type: "POST",
        contentType: "application/json; charset=utf-8",
        url: "SRCreation.aspx/getticketid",
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


/*--------------IN/SR  gridload for search--------*/
function getFITableDtls() {
    $("#tableShowIN").show();
    
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
    var InputString = txtsr + "¥" + txtsdate + "¥" + txtendate + "¥" + status + "¥" +"";
     var Querystring = "getNewSearch";
        
        $.ajax({
            type: "POST",
            contentType: "application/json; charset=utf-8",
            url: "SRCreation.aspx/getTable",
            data: "{QueryStr : '" + Querystring + "',input :'" + InputString + "'}",
            dataType: "json",
            success: function (Result) {
                 if (Result.d.length > 0) {
                    //alert(Result.d.length + 'result length');

                    $('#tableShowIN').empty();
                    $("#tableShowIN").append('<thead>< tr ><td scope="col">Incident/SR</td><td scope="col">Branch/dep</td><td scope="col">Summary</td> <td scope="col">Decription</td> <td scope="col">Rep.date</td><td scope="col">Ticket Status</td></tr></thead><tbody>'
                    );
                    for (var i = 0; i < Result.d.length; i++) {
                        $("#tableShowIN").append('<tr><td>' + Result.d[i].INName + '</td>' +
                            '<td>' + Result.d[i].Branchordep + '</td>' +
                            '<td>' + Result.d[i].Summary + '</td>' +
                            '<td>' + Result.d[i].Desc + '</td>' +
                            '<td>' + Result.d[i].Repdate + '</td>' +
                            '<td>' + Result.d[i].CurrentStatus + '</td>' +
                            '</tr >');
                    }
                    $("#tableShowIN").append(
                        '</tbody>');
                }
                else {
                    alert('No Entries Found OR Miss Match Values');
                    $('#tableShowIN').empty();
                }
            },
            error: function (Result) {
                alert(Result);
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
        url: "SRCreation.aspx/save_profile",
        data: "{Empcod:'" + Empcode + "',input:'" + InputString+"'}",
        dataType: "json",
        success: function (Result) {
            Result = Result.d;
            alert('Mail sent..!!');
           window.open('SRCreation.aspx', '_self');

        },
        error: function (Result) {

            alert(Result.d+'mail not sent');
        }


    });

}


////-------------oo--------approval mail---------oo----------



//function apprvmailsend() {
//    alert('entered to function');
//    var InputString = content;
//    var Empcode = $("#txt_Empcode").val();
//    //var QueryString = "Getticketid";
//    //var input = $("#txt_Empcode").val();
//    $.ajax({

//        type: "POST",
//        contentType: "application/json; charset=utf-8",
//        url: "SRCreation.aspx/sndmailapprv",
//        data: "{Tickno:'" + Empcode + "'}",
//        dataType: "json",
//        success: function (Result) {
//            Result = Result.d;
//            alert('Mail sended..!!');
//            window.open('SRCreation.aspx', '_self');

//        },
//        error: function (Result) {

//            alert(Result.d + 'mail not sended');
//        }


//    });

//}


