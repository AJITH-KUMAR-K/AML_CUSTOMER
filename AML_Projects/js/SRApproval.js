function frmExit() {
    window.open("index.aspx", "_self");
}
$(window).on('load', function () {
    $("#SelctType").hide();
    //GetSourceDtls();
    GetStatus();
    //GetRequestType();
    //GetImpact();
    //GetSeverity();
    //GetUrgency();
    //GetINCategory();

    $("#txt_ReportedBy").val($("[id*=hduname]").val());
    aprrvTickShw();
    //GetFundDtls();
    
    //GetFIType();
    //getbnkledg();   
    //getLoanLedg();
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

});

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
        url: "SRApproval.aspx/Getstatusup",
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
            alert(Result);
        }
        
    });
   
}

/*-------end------*/

/*---------start-Dropdown  Requesttype-----*/

//function GetRequestType() {

//    var QueryString = "GetRequestType";
//    $.ajax({
//        type: "POST",
//        contentType: "application/json; charset=utf-8",
//        url: "SRApproval.aspx/getRequesttype",
//        data: "{QueryString:'" + QueryString + "'}",
//        dataType: "json",
//        success: function (Result) {
//            $('#ddlReqType').empty();
//            $('#ddlReqType').append($("<option></option>").val("-1").html("Select Request Type "));
//            $.each(Result.d, function (data, value) {
//                $('#ddlReqType').append($("<option></option>").val(value.ReqId).html(value.ReqName));
//            })
//        },
//        error: function (Result) {
//            alert(Result);
//        }

//    });

//}

/*-------dropdown-urgency------*/
//function GetUrgency() {

//    var QueryString = "GetUrgency";
//    $.ajax({
//        type: "POST",
//        contentType: "application/json; charset=utf-8",
//        url: "SRApproval.aspx/getUrgencyprio",
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
//        url: "SRApproval.aspx/getINCategory",
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
//        url: "SRApproval.aspx/getSubCategory",
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
//        url: "SRApproval.aspx/GetSeverity",
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
//        url: "SRApproval.aspx/getImpact",
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

//function GetSourceDtls() {
    
//    var QueryString = "GetSource";
//    $.ajax({
        
//        type: "POST",
//        contentType: "application/json; charset=utf-8",
//        url: "SRApproval.aspx/getSourceData",
//        data: "{QueryString:'" + QueryString + "'}",
//        dataType: "json",
//        success: function (Result) {
//            $('#ddlsource').empty();
//            $('#ddlsource').append($("<option></option>").val("-1").html("Select Source "));
//            $.each(Result.d, function (data, value) {
//                $('#ddlsource').append($("<option></option>").val(value.SId).html(value.SName));
                
//            })
//        },
//        error: function (Result) {
            
//            alert(Result);
//        }
        
//    });
    
//}
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
//            url: "SRApproval.aspx/getFillempdetails",
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
//            url: "SRApproval.aspx/getbranchdt",
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

        if (aprRjct == 2) {
            rmvsoftlst();
        }


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

    
function rmvsoftlst() {
    var softname="", version="", i;
     for (i = 0; i < ($('#tblremove').length)+1; i++) {
        softname = $('#tblremove tr:eq(' + i + ') td:eq(2)').text() + '^' + softname;
        version = $('#tblremove tr:eq(' + i + ') td:eq(3)').text() + '^' + version;
        
    }
    QueryString='rmvsoft';
     var InputData = srid + "¥" + $("[id*=hdUserId]").val() + "¥" + softname + "¥" + version;
     $.ajax({
        type: "POST",
        contentType: "application/json; charset=utf-8",
         url: "SRApproval.aspx/softlistsave",
        data: "{QueryString:'" + QueryString + "',input : '" + InputData + "'}",
        dataType: "json",
        success: function (Result) {

             Result = Result.d;
            alert(Result);
             //window.open('SRApproval.aspx', '_self');

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



//function GetSubFundDtls() {
//    var InputString = $("#ddlCatgry").val();
//    var QueryString = "GetSubFundType";
//    $.ajax({
//        type: "POST",
//        contentType: "application/json; charset=utf-8",
//        url: "NewFund.aspx/getSubFund",
//        data: "{QueryString:'" + QueryString + "',input : '" + InputString + "'}",
//        dataType: "json",
//        async: false,
//        success: function (Result) {
//            $('#ddlsSubCat').empty();
//            $('#ddlsSubCat').append($("<option></option>").val("-1").html("Select Sub Fund Category "));
//            $.each(Result.d, function (data, value) {
//                $('#ddlsSubCat').append($("<option></option>").val(value.SbId).html(value.SbName));
//                if (InputString == "3") {
//                    LoadDataAutoCompleteFill('txtLoan', '40212', '2', 'hdSerLoan', 'TREASURY', 'GetLoanLedger', 'LoanAccName');
//                    $('#txtLoan').prop("disabled", true);
//                }
//                else {
//                    $('#txtLoan').prop("disabled", false);
//                    $("#txtLoan").val('');
//                    $("[id*=hdSerLoan]").val('');
//                    LoanAccName.innerHTML = '';
//                }
//            })

//        },
//        error: function (Result) {
//            alert(Result);
//        }
//    });
//}
//function GetLoanAccDtls() {
//    var cat = $("#ddlCatgry").val();
//    var subcat = $("#ddlsSubCat").val();
//    var fiType = $("#ddlFiTyp").val();
//    if (cat != "3") {
//    if (subcat != "-1" && cat != "3") {
//        if (fiType != "-1") {
//            if (subcat == "5") {
//                LoadDataAutoCompleteFill('txtLoan', '40733', '2', 'hdSerLoan', 'TREASURY', 'GetLoanLedger', 'LoanAccName');
//                $('#txtLoan').prop("disabled", true);
//            }
//            else if (subcat == "6") {
//                LoadDataAutoCompleteFill('txtLoan', '40731', '2', 'hdSerLoan', 'TREASURY', 'GetLoanLedger', 'LoanAccName');
//                $('#txtLoan').prop("disabled", true);
//            }
//            else if (subcat == "8") {
//                if (fiType == "1") {
//                    LoadDataAutoCompleteFill('txtLoan', '40734', '2', 'hdSerLoan', 'TREASURY', 'GetLoanLedger', 'LoanAccName');
//                    $('#txtLoan').prop("disabled", true);
//                }
//                else if (fiType == "5") {
//                    LoadDataAutoCompleteFill('txtLoan', '40735', '2', 'hdSerLoan', 'TREASURY', 'GetLoanLedger', 'LoanAccName');
//                    $('#txtLoan').prop("disabled", true);
//                }
//                else {
//                    $('#txtLoan').prop("disabled", false);
//                    $("#txtLoan").val('');
//                    $("[id*=hdSerLoan]").val('');
//                    LoanAccName.innerHTML = '';
//                }
//            }
//            else {
//                $('#txtLoan').prop("disabled", false);
//                $("#txtLoan").val('');
//                $("[id*=hdSerLoan]").val('');
//                LoanAccName.innerHTML = '';
//            }
//        }
//        else {
//            $('#txtLoan').prop("disabled", false);
//            $("#txtLoan").val('');
//            $("[id*=hdSerLoan]").val('');
//            LoanAccName.innerHTML = '';
//        }
//    }
//    else {
//        $('#txtLoan').prop("disabled", false);
//        $("#txtLoan").val('');
//        $("[id*=hdSerLoan]").val('');
//        LoanAccName.innerHTML = '';
//    }
//}
//}
//function GetFIType() {
//     var QueryString = "GetFIType";
//    $.ajax({
//        type: "POST",
//        contentType: "application/json; charset=utf-8",
//        url: "SRApproval.aspx/getFinancialType",
//        data: "{QueryString:'" + QueryString + "'}",
//        dataType: "json",
//        success: function (Result) {
//            $('#ddlFiTyp').empty();
//            $('#ddlFiTyp').append($("<option></option>").val("-1").html("Select Financial Institution Type "));
//            $.each(Result.d, function (data, value) {
//                $('#ddlFiTyp').append($("<option></option>").val(value.FtId).html(value.FtName));
//            })
//        },
//        error: function (Result) {
//            alert(Result);
//        }
//    });
//}
//function GetFIDetails() {
//    var InputString = $("#ddlFiTyp").val();
//    var QueryString = "GetFI";
//    $.ajax({
//        type: "POST",
//        contentType: "application/json; charset=utf-8",
//        url: "SRApproval.aspx/getFIDtls",
//        data: "{QueryString:'" + QueryString + "',input : '" + InputString + "'}",
//        dataType: "json",
//        success: function (Result) {
//            $('#ddlFInst').empty();
//            $('#ddlFInst').append($("<option></option>").val("-1").html("Select Financial Institution "));
//            $.each(Result.d, function (data, value) {
//                $('#ddlFInst').append($("<option></option>").val(value.FId).html(value.FName));
//            })
//        },
//        error: function (Result) {
//            alert(Result);
//        }
        
//    });
//    GetLoanAccDtls();
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
function gr() {

    $('#tableapprv').find('tr').click(function () {
        var row = $(this).find('td:first').text();

        srid = row;
        //alert('You clicked ' + row);
        var dt = row.toString();
        shdetails(row);
        checksoftremove(row);
        
        // WorkLogView(dt);
        $('#tableapprv').removeEventListener();




    });




}
function shdetails(tn) {
    //alert('entere into show');
    //var SoI;
    var input = tn;
    var QueryString = "GetTview";
    SoI = tn.substring(0, 2);
   // $("#ticket_show").text(tn);
   // alert(tn);
    // alert('entered into show deatils');
    $('#tblall').empty();
    $('#tblremove').empty();
    $('#divtbl').hide();
    $('#divtblsh').hide();
        $.ajax({
            type: "POST",
            contentType: "application/json; charset=utf-8",
            url: "SRApproval.aspx/getlinkdataSR",
            data: "{QueryString:'" + QueryString + "',input : '" + input + "'}",
            dataType: "json",
            success: function (Result) {
                //alert(Result.d.length);
                Result = Result.d.split("^");
                $('#txt_ReportedBy').val(Result[0]);
                if (Result[1] == 1) {
                    $("#radGYes").prop('checked', true);
                    $("#radGNo").prop('checked', false);

                }
                else if (Result[1] == 0) {


                    $("#radGYes").prop('checked', false);
                    $("#radGNo").prop('checked', true);
                }
                $('#txt_Empcode').val(Result[2]);
                $('#txt_emp').val(Result[3]);
                // $('#txt_BR_DEP').val(Result[4]);
                $('#txt_phonenum').val(Result[4]);
                $('#txt_phone').val(Result[5]);
                // $('#txt_impact').val(Result[7]);
                //$('#txt_impactdetails').val(Result[8]);
                //$('#txt_severity').val(Result[5]);
                $('#txt_urgency').val(Result[6]);
                //$('#txt_incategory').val(Result[9]);
                $('#txt_Subject').val(Result[7]);
                $('#txt_Description').val(Result[8]);
                // $('#txt_BR_DEP').val(Result[10]);
                // $('#txt_impci').val(Result[13]);
                $('#ddlstatus').val(-1);
                $('#txt_Branch').val(Result[11]);
               
                if (Result[13] == "") {
                    $('#div_Release').hide();

                    
                } else {
                    $('#div_Release').show();
                }
                $('#txt_crfid').val(Result[13]);
            
                $('#txt_Parentapp').val(Result[14]);
                $('#txt_Tester').val(Result[15]);
                $('#txt_CodeReview').val(Result[16]);
          
                //$('#txt_UasstCod').val();
                //$('#txt_AsstTyp').val();
                //$('#txt_AsstSerial').val();
                //$('#txt_Manufacture').val();
                //alert(Result[23]);
                if (Result[23] =="") {
                    $('#imac_dtl').hide();
                    
                } else {
                    $('#imac_dtl').show();
                }
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
                    viewall(Result[2]);
                }
                else if (Result[18] == 4) {
                    $('#oldasset').hide();
                    $('#mvfrm').hide();
                    $('#mvto').hide();
                    $('#mvtoemp').show();

                }
               // $('#txt_Imactyp').val();
                $('#txt_oldAsstSerial').val(Result[19]);
                $('#txt_MovFrm').val(Result[20]);
                $('#txt_MovTo').val(Result[21]);
                $('#txt_MovToEmp').val(Result[22]);
                $('#txt_UasstCod').val(Result[23]);
                SelectedAsstDtl(Result[23]);
                Currstatsshow(Result[9]);
                
                // $('#txt_currentstatus').val(Result[9]);
                //if (tn.substring(0, 2) == 'SR') {
                //    $('#sr_fields').hide();
                //    $('#impact_hidden_sr').hide();
                //}
                //else {
                //    $('#impact_hidden_sr').show();
                //    $('#sr_fields').show();

                //}
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
function SelectedAsstDtl(Asset) {
    //alert($('#user_asset option:selected').val());
    
    //var Asset = $('#user_asset option:selected').val();
    //alert('entered into get');

    var QueryString = Asset;
    
    //var input = $("#txt_Empcode").val();

    $.ajax({

        type: "POST",
        contentType: "application/json; charset=utf-8",
        url: "SRApproval.aspx/SelectedAsstDTL",
        data: "{QueryString:'" + QueryString + "'}",
        dataType: "json",
        success: function (Result) {
            alert
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

function Appr_wit_tick() {
//$('#divtblPrincpleIntDtl').show();
    var ticknumber;
    $('#tableapprv').show();

    var Querystring = "TicketForApprover";

    var InputString = $("[id*=hdUserId]").val();

    $.ajax({
        type: "POST",
        contentType: "application/json; charset=utf-8",
        url: "SRApproval.aspx/GetUserTble",
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
   // alert('apprv tick show function');
    //$('#divtblPrincpleIntDtl').show();
    $('#tableapprv').show();

    var Querystring = "TicketForApprover";

    var InputString = $("[id*=hdUserId]").val();

    $.ajax({
        type: "POST",
        contentType: "application/json; charset=utf-8",
        url: "SRapproval.aspx/ApprvTick",
        data: "{QueryStr : '" + Querystring + "',input :'" + InputString + "'}",
        dataType: "json",
        success: function (Result) {
            if (Result.d.length > 0) {
                //alert(Result.d.length);
                $('#tableapprv').empty();
                $('#tableapprv').append('<thead><tr><td scope="col">Incident/SR</td><td scope="col">Branch/dep</td><td scope="col">Summary</td> <td scope="col">Decription</td> <td scope="col">Rep.date</td></tr></thead><tbody>');
                 for (var i = 0; i < Result.d.length; i++) {
                     $('#tableapprv').append('<tr><td>' + Result.d[i].INName + '</td>' +
                        '<td>' + Result.d[i].Branchordep + '</td>' +
                        '<td>' + Result.d[i].Summary + '</td>' +
                        '<td>' + Result.d[i].Desc + '</td>' +
                        '<td>' + Result.d[i].Repdate + '</td>' + '</tr>');
                }
                $('#tableapprv').append(
                    '</tbody>');
            }

        },
        error: function (Result) {
            alert(Result);
        }
    });



}






//function getGuarenteeType() {
//    var QueryString = "PersonalGuarantee";
//    $.ajax({
//        type: "POST",
//        contentType: "application/json; charset=utf-8",
//        url: "NewFund.aspx/getPernlGurntee",
//        data: "{QueryStr:'" + QueryString + "'}",
//        dataType: "json",
//        success: function (Result) {
//            $('#ddlPrsnGrntee').empty();
//            $('#ddlPrsnGrntee').append($("<option></option>").val("-1").html("Select Personal Guarantee Type "));
//            $.each(Result.d, function (data, value) {
//                $('#ddlPrsnGrntee').append($("<option></option>").val(value.Id).html(value.Name));
//            })
//        },
//        error: function (Result) {
//            alert(Result);
//        }
//    });
//}

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

//function gr() {
//    alert('entered into gr');
//    $("#tableapprv").find('tr').click(function () {
//        var row1 = $(this).find('td:first').text();
//        alert(row1);
//        //shdetails(row);
//        $('#tableapprv').removeEventListener();

//    });


//}

//function shdetails(tn) {
//    var input = tn;
//    var QueryString = "GetTview";
//    $("#ticket_show").text(tn);



//    $.ajax({
//        type: "POST",
//        contentType: "application/json; charset=utf-8",
//        url: "SRApproval.aspx/getlinkdata",
//        data: "{QueryString:'" + QueryString + "',input : '" + input + "'}",
//        dataType: "json",
//        success: function (Result) {
//            Result = Result.d.split("^");
//            $('#txt_ReportedBy').val(Result[0]);
//            if (Result[1] == 1) {
//                $("#radGYes").prop('checked', true);
//                $("#radGNo").prop('checked', false);

//            }
//            else if (Result[1] == 0) {

//                $("#radGYes").prop('checked', false);

//                $("#radGNo").prop('checked',true);
//            }
//            $('#txt_Empcode').val(Result[2]);
//            $('#txt_emp').val(Result[14]);
//            $('#txt_Branch').val(Result[15]);
//            $('#txt_phonenum').val(Result[3]);
//            $('#txt_phone').val(Result[4]);
//            $('#txt_Impact').val(Result[7]);
//            $('#ImpactDetails').val(Result[8]);
//            $('#txt_Severity').val(Result[5]);
//            $('#txt_urgency').val(Result[6]);
//            $('#txt_class').val(Result[9]);
//            $('#txt_Subject').val(Result[11]);
//            $('#txt_Description').val(Result[12]);
//            $('#txt_ImapactedCI').val(Result[13]);
//        },
//        error: function (Result) {



//            alert(Result);
//        }




//    });





//}


function viewall(empcod) {
     debugger;
    var Querystring;
    var input = empcod;
    $('#divtbl').show();
    $('#divtblsh').show();
    Querystring = "UserSftLst";

    $.ajax({
        type: "POST",
        contentType: "application/json; charset=utf-8",
        url: "SRApproval.aspx/softlst",
        data: "{QueryStr : '" + Querystring + "',input :'" + input + "'}",
        dataType: "json",
        success: function (Result) {
            debugger;
            if (Result.d.length > 0) {
                $('#tblall').empty();
                $('#tblall').append('<thead class="bg-success text-white">< tr ><th scope="col">No.</th><th scope="col">Host Name</th><th scope="col">Application</th><th scope="col">Application Version</th> <th scope="col">Button</th> </tr></thead><tbody class="border border-dark">'
                );
                for (var i = 0; i < Result.d.length; i++) {
                    var r = i + 1;
                    $('#tblall').append('<tr>' +
                        '<td>' + r + '</td>' +
                        //'<td>' + Result.d[i].BranchId + '</td>' +
                        //'<td>' + Result.d[i].BranchName + '</td>' +
                        //'<td>' + Result.d[i].EmployeeCode + '</td>' +
                        //'<td>' + Result.d[i].DeptName + '</td>' +
                        '<td>' + Result.d[i].HostName + '</td>' +
                        '<td>' + Result.d[i].Application + '</td>' +
                        '<td>' + Result.d[i].Version + '</td>' +
                        //'<td>' + Result.d[i].EnterDate + '</td>' +
                        '<td><input type="button" class="btn btn-info" onclick="grr();" value="Add To Remove"/></td>' +

                        '</tr >');
                }
                $('#tblall').append(
                    '</tbody>');
                $('#divtball').show();
            }
            else {
                $('#tblall').empty();
            }

        },
        error: function (Result) {
            alert(Result);
        }
    });
}


function grr() {
    //alert('entered iinto function');
    $('#tblall').find('tr').click(function () {
        //var row = $(this).find('td:eq(2)').text();
        var row = $(this).index();
         
        temp();
        SoftRemove(row);
        $('#tblall').removeEventListener();
      
    });
  
}

function temp() {
    
    $("#tblall tr").off("click");
    $("#tblall th").off("click");

}

var r1;
function SoftRemove(rowid) {
    if (r1 == "") {

        r1 = 0;
    } else {

        r1 = r1 + 1;
    }
    rowid = rowid + 1;
    debugger;
    
    
   
    //$('#tblremove').append('<thead class="bg-success text-white">< tr ><th scope="col">No.</th><th scope="col">Host Name</th><th scope="col">Application</th><th scope="col">Application Version</th> <th scope="col">Button</th> </tr></thead><tbody class="border border-dark">');
    $('#tblremove').append('<tr>' +
                        '<td>' + r1 + '</td>' +

        '<td>' + $('#tblall tr:eq(' + rowid + ') td:eq(1)').text() + '</td>' +
        '<td>' + $('#tblall tr:eq(' + rowid + ') td:eq(2)').text() + '</td>' +
        '<td>' + $('#tblall tr:eq(' + rowid + ') td:eq(3)').text() + '</td>' +
                         '<td><input type="button" class="btn btn-info" onclick="grrr();" value="Remove"/></td>' +

        '</tr >');
    $('#tblremove').append(
        '</tbody>');

    //Querystring = "UserSftLst";

    //$.ajax({
    //    type: "POST",
    //    contentType: "application/json; charset=utf-8",
    //    url: "SRApproval.aspx/softlst",
    //    data: "{QueryStr : '" + Querystring + "',input :'" + input + "'}",
    //    dataType: "json",
    //    success: function (Result) {
    //        debugger;
    //        if (Result.d.length > 0) {
    //            $('#tblall').empty();
    //            $('#tblall').append('<thead class="bg-success text-white">< tr ><th scope="col">No.</th><th scope="col">Host Name</th><th scope="col">Application</th><th scope="col">Application Version</th> <th scope="col">Button</th> </tr></thead><tbody class="border border-dark">'
    //            );
    //            for (var i = 0; i < Result.d.length; i++) {
    //                var r = i + 1;
    //                $('#tblall').append('<tr>' +
    //                    '<td>' + r + '</td>' +
    //                    //'<td>' + Result.d[i].BranchId + '</td>' +
    //                    //'<td>' + Result.d[i].BranchName + '</td>' +
    //                    //'<td>' + Result.d[i].EmployeeCode + '</td>' +
    //                    //'<td>' + Result.d[i].DeptName + '</td>' +
    //                    '<td>' + Result.d[i].HostName + '</td>' +
    //                    '<td>' + Result.d[i].Application + '</td>' +
    //                    '<td>' + Result.d[i].Version + '</td>' +
    //                    //'<td>' + Result.d[i].EnterDate + '</td>' +
    //                    '<td><input type="button" class="btn btn-info" onclick="grr();" value="Remove"/></td>' +

    //                    '</tr >');
    //            }
    //            $('#tblall').append(
    //                '</tbody>');
    //            $('#divtball').show();
    //        }
    //        else {
    //            $('#tblall').empty();
    //        }

    //    },
    //    error: function (Result) {
    //        alert(Result);
    //    }
    //});
}


function grrr() {
    
    //alert('entered iinto function');
    $('#tblremove').find('tr').click(function () {
        //var row = $(this).find('td:eq(2)').text();
        var row = $(this).index();
        $(this).remove();
        temp1();
        $('#tblremove').removeEventListener();
      
      
    });

}


function temp1() {
     $("#tblremove tr").off('click');
  
}



//function for checking already added software remove list

function checksoftremove(tickno) {
     debugger;
    var Querystring;
    var input = tickno;
    var soft;
    var ver;
    $('#tblall').show();
    $('#divtball').show();
    Querystring = "ChkSoftRmvLstAdded";

    $.ajax({
        type: "POST",
        contentType: "application/json; charset=utf-8",
        url: "SRApproval.aspx/checksoftrmvlst",
        data: "{QueryStr : '" + Querystring + "',input :'" + input + "'}",
        dataType: "json",
        success: function (Result) {
            debugger;
             if (Result.d > 0) {

                rmvlst(tickno);
                $('#divtbl').hide();
                $('#divtblsh').hide();

            } else {
                $('#divtbl').show();
                $('#divtblsh').show();

            }


        },
        error: function (Result) {
            alert(Result);
        }
    });
}



//software list to remove from system
function rmvlst(tickno) {
     debugger;
    var Querystring;
    var input = tickno;
    var soft;
    var ver;
    $('#tblremove').show();
    $('#divtbl').show();
    Querystring = "softremovelst";

    $.ajax({
        type: "POST",
        contentType: "application/json; charset=utf-8",
        url: "SRApproval.aspx/softwarelist",
        data: "{QueryStr : '" + Querystring + "',input :'" + input + "'}",
        dataType: "json",
        success: function (Result) {
            debugger;
             if (Result.d.length > 0) {
                $('#tblremove').empty();
                $('#tblremove').append('<thead class="bg-success text-white">< tr ><th scope="col">No.</th><th scope="col">Application</th><th scope="col">Application Version</th> </tr></thead><tbody class="border border-dark">'
                );
                Result = Result.d.split("¥");

                soft = Result[0].split('^');
                ver = Result[1].split('^');
                for (i = 0; i < soft.length; i++) {
                    r = i + 1;
                    $('#tblremove').append('<tr>' +
                        '<td>' + r + '</td>' +
                        //'<td>' + Result.d[i].BranchId + '</td>' +
                        //'<td>' + Result.d[i].BranchName + '</td>' +
                        //'<td>' + Result.d[i].EmployeeCode + '</td>' +
                        //'<td>' + Result.d[i].DeptName + '</td>' +
                        // '<td>' + Result.d[i].HostName + '</td>' +
                        '<td>' + soft[0] + '</td>' +
                        '<td>' + ver[1] + '</td>' +
                        //'<td>' + Result.d[i].EnterDate + '</td>' +
                        //'<td><input type="button" class="btn btn-info" onclick="grr();" value="Add To Remove"/></td>' +

                        '</tr >');
                }
                $('#tblremove').append(
                    '</tbody>');
                $('#divtbl').show();
            }
            else {
                $('#tblall').empty();

            }

        },
        error: function (Result) {
            alert(Result);
        }
    });
}



