function frmExit() {
    window.open("index.aspx", "_self");
}
$(window).on('load', function () {
    $("#SelctType").hide(); 
    $("#tableShowIN").hide();
    GetReleasecategory();
    Getrisk();
   // GetRequestType();
    GetImpact();
    GetRRApplication();
   // GetUrgency();
    //GetINCategory();

    $("#txt_ReportedBy").val( $("[id*=hduname]").val());
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
    if ($("#radtb").prop("checked")) {
        $("#SelctType").fadeIn();
        
    }
    else if ($("#radSp").prop("checked")) {
        $("#SelctType").fadeOut();
    }
}


/* Include Many js files */



function showTypes() {
    if ($("#radtbD").prop("checked")) {
        $("#SelctType").fadeIn();
       
        //getGuarenteeType();
    }
    else if ($("#radSpS").prop("checked")) {
        $("#SelctType").fadeOut();
       
      
    }
}


/*---------start-Dropdown  risk-----*/

function Getrisk() {
    
    var QueryString = "GetRRrisk";
    $.ajax({
        type: "POST",
        contentType: "application/json; charset=utf-8",
        url: "ReleaseRequestupdate.aspx/GetRRrisk",
        data: "{QueryString:'" + QueryString + "'}",
        dataType: "json",
        success: function (Result) {
            $('#ddlreleaserisk').empty();
            $('#ddlreleaserisk').append($("<option></option>").val("-1").html("Select Release Risk "));
            $.each(Result.d, function (data, value) {
                $('#ddlreleaserisk').append($("<option></option>").val(value.Id).html(value.Name));
            })
        },
        error: function (Result) {
            alert(Result);
        }
        
    });
   
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
            alert(Result);
        }

    });

}

/*-------dropdown-urgency------*/
function GetApplicn() {

    var QueryString = "RRapplninsert";
    var InputString = $("#txt_RRID").val() + "¥" + $("#ddlapplication").val() + "¥" + $("#txt_changeno").val() + "¥" + $("#txt_desc").val() + "¥" + $("#txt_formpath").val() ;
    $.ajax({
        type: "POST",
        contentType: "application/json; charset=utf-8",
        url: "ReleaseRequestupdate.aspx/getTablerr",
        data: "{QueryString:'" + QueryString + "',input : '" + InputString + "'}",
        dataType: "json",
        success: function (Result) {
            if (Result.d.length > 0) {
                $('#tblapplicn').empty();
                $("#tblapplicn").append('<thead class="bg-success text-white">< tr ><th scope="col">Application</th><th scope="col">Change Set No</th><th scope="col">Description</th> <th scope="col">Foem Path</th> </tr></thead><tbody class="border border-dark">'
                );
                for (var i = 0; i < Result.d.length; i++) {
                    $("#tblapplicn").append('<tr><td>' + Result.d[i].aplican + '</td>' +
                        '<td>' + Result.d[i].changeset + '</td>' +
                        '<td>' + Result.d[i].desc + '</td>' +
                        '<td>' + Result.d[i].formpath + '</td>' +


                        '</tr >');
                }
                $("#tblapplicn").append(
                    '</tbody>');
            }
        },
        error: function (Result) {
            alert(Result);
        }

    });

}



function GetDBChange() {
    var tasp;
    if ($("#radtb").prop("checked") == true) {
        tasp = 'TABLE';

    }
    else if ($("#radSp").prop("checked") == true) {
        tasp ='STORED PROCEDURE' ;

    }
    if ($("#txt_tname").val() == "") {
        ModelPopWarning("Please Select TB/SPname");
        //alert("Please Select Financial Type");
        return false;
    }
    else if ($("#txt_changnum").val() == "") {
        ModelPopWarning("Please Select change set no");
        //alert("Please Select Financial Type");
        return false;
    }
    else {
        var QueryString = "RRDBCHANGE";
        var InputString = $("#txt_RRID").val() + "¥" + tasp + "¥" + $("#txt_tname").val() + "¥" + $("#txt_changnum").val() + "¥" + $("#txt_description").val() + "¥" + $("[id*=hdUserId]").val();
        $.ajax({
            type: "POST",
            contentType: "application/json; charset=utf-8",
            url: "ReleaseRequestupdate.aspx/getDBCHANGE",
            data: "{QueryString:'" + QueryString + "',input : '" + InputString + "'}",
            dataType: "json",
            success: function (Result) {
                if (Result.d.length > 0) {
                    $('#tblrrdb').empty();
                    $("#tblrrdb").append('<thead class="bg-success text-white">< tr ><th scope="col">Table/SP</th><th scope="col">Table/SP Name</th><th scope="col">Change Set No</th> <th scope="col">Description</th> </tr></thead><tbody class="border border-dark">'
                    );
                    for (var i = 0; i < Result.d.length; i++) {
                        $("#tblrrdb").append('<tr><td>' + Result.d[i].taorsp + '</td>' +
                            '<td>' + Result.d[i].name + '</td>' +
                            '<td>' + Result.d[i].changeset + '</td>' +
                            '<td>' + Result.d[i].desc + '</td>' +


                            '</tr >');
                    }
                    $("#tblrrdb").append(
                        '</tbody>');
                }
            },
            error: function (Result) {
                alert(Result);
            }

        });
    }
}
/*-------dropdown-incategory------*/
function GetINCategory() {

    var QueryString = "GetINCategory";
    $.ajax({
        type: "POST",
        contentType: "application/json; charset=utf-8",
        url: "ReleaseRequestupdate.aspx/getINCategory",
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
            alert(Result);
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
        url: "ReleaseRequestupdate.aspx/getSubCategory",
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
            alert(Result);
        }

    });

}
function GetRRApplication() {

    var QueryString = "GetRRApplication";
    $.ajax({
        type: "POST",
        contentType: "application/json; charset=utf-8",
        url: "ReleaseRequestupdate.aspx/Getapplication",
        data: "{QueryString:'" + QueryString + "'}",
        dataType: "json",
        success: function (Result) {
            $('#ddlapplication').empty();
            $('#ddlapplication').append($("<option></option>").val("-1").html("Select Application"));
            $.each(Result.d, function (data, value) {
                $('#ddlapplication').append($("<option></option>").val(value.SevId).html(value.SevName));
            })
        },
        error: function (Result) {
            alert(Result);
        }

    });

}
/*---------start-Dropdown  impact----*/

function GetImpact() {

    var QueryString = "GetImpact";
    $.ajax({
        type: "POST",
        contentType: "application/json; charset=utf-8",
        url: "ReleaseRequestupdate.aspx/getImpact",
        data: "{QueryString:'" + QueryString + "'}",
        dataType: "json",
        success: function (Result) {
            $('#ddlbuisnessimpct').empty();
            $('#ddlbuisnessimpct').append($("<option></option>").val("-1").html("Select  Buisness Impact "));
            $.each(Result.d, function (data, value) {
                $('#ddlbuisnessimpct').append($("<option></option>").val(value.ImpctId).html(value.ImpctName));
            })
        },
        error: function (Result) {
            alert(Result);
        }

    });

}
/*---------start-Dropdown  release category-----*/

function GetReleasecategory() {
    
    var QueryString = "GetRelesecategory";
    $.ajax({
        
        type: "POST",
        contentType: "application/json; charset=utf-8",
        url: "ReleaseRequestupdate.aspx/getreleasecategory",
        data: "{QueryString:'" + QueryString + "'}",
        dataType: "json",
        success: function (Result) {
            $('#ddlreleasecategory').empty();
            $('#ddlreleasecategory').append($("<option></option>").val("-1").html("Select Release Category "));
            $.each(Result.d, function (data, value) {
                $('#ddlreleasecategory').append($("<option></option>").val(value.SId).html(value.SName));
                
            })
        },
        error: function (Result) {
            
            alert(Result);
        }
        
    });
    
}
/*---------start- Empdetails-----*/

function GetEmpdetails() {
    var person;
    if ($("#radGYes").prop("checked") == true) {
        person = 1;

    }
    else if ($("#radGNo").prop("checked") == true) {
        person = 0;

    }
    if (person == 1)
    {
        var QueryString = "GetEmployeeDetails";
        var input = $("#txt_Empcode").val();

        $.ajax({

            type: "POST",
            contentType: "application/json; charset=utf-8",
            url: "ReleaseRequestupdate.aspx/getFillempdetails",
            data: "{QueryString:'" + QueryString + "',input : '" + input + "'}",
            dataType: "json",
            success: function (Result) {

                Result = Result.d.split("^");
                $('#txt_empname').val(Result[0]);
                $('#txt_Branch').val(Result[1]);
                $('#txt_Phonenumber').val(Result[2]);



            },
            error: function (Result) {

                alert(Result);
            }


        });
    }
    else
    {
        var QueryString = "Getbranchdtls";
        var input = $("#txt_Empcode").val();

        $.ajax({

            type: "POST",
            contentType: "application/json; charset=utf-8",
            url: "ReleaseRequestupdate.aspx/getbranchdt",
            data: "{QueryString:'" + QueryString + "',input : '" + input + "'}",
            dataType: "json",
            success: function (Result) {

                Result = Result.d.split("^");
                //$('#txt_empname').val(Result[0]);
                $('#txt_Branch').val(Result[0]);
                $('#txt_Phonenumber').val(Result[1]);



            },
            error: function (Result) {

                alert(Result);
            }


        });
    }
}
/*-------end------*/


/*--confirm button    ------*/

function Addreleserequpdate() {
   
   


   
    if ($("#ddlreleasecategory").val() == "-1") {
        ModelPopWarning("Please Select Release category");
       
        return false;
    }
    else if ($("#txt_RRID").val() == "") {
        ModelPopWarning("Please enter release id");
       
        return false;
    }
    else if ($("#ddlreleaserisk").val() == "-1") {
        ModelPopWarning("Please enter release risk");

        return false;
    }
    else if ($("#ddlbuisnessimpct").val() == "-1") {
        ModelPopWarning("Please select Buisness Impact");
       
        return false;
    }



    else {
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


                
                   

                var InputData = $("#txt_RRID").val() + "¥" + $("[id*=hdUserId]").val() + "¥" + $("#ddlreleasecategory").val() + "¥" + $("#ddlreleaserisk").val() + "¥" + $("#ddlbuisnessimpct").val() + "¥" + $("#txt_impctdetails").val() + "¥" + $("#txt_AgrmntDt").val() ;
                    $.ajax({
                        type: "POST",
                        contentType: "application/json; charset=utf-8",
                        url: "ReleaseRequestupdate.aspx/confirMRELEASE",
                        data: "{val:'" + InputData + "',upload_file:'" + imageData + "'}",
                        dataType: "json",
                        success: function (Result) {
                           
                            alert(Result.d);
                           // Result = Result.d;
                           

                            window.open('ReleaseRequestupdate.aspx', '_self');
                             
                           

                        },

                        error: function (Result) {
                            alert(Result);
                        }
                    });



               
                
            }
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
        url: "ReleaseRequestupdate.aspx/getticketid",
        data: "{QueryString:'" + QueryString + "'}",
        dataType: "json",
        success: function (Result) {

            Result = 'Ticket Number:' + Result.d;
            alert(Result);
            window.open('ReleaseRequestupdate.aspx', '_self');

        },
        error: function (Result) {

            alert(Result);
        }


    });

}










/*--------------rrid  gridload for search--------*/
function getreleasereqdtls() {
    var Querystring;
    $("#tableShowIN").show();
    
   

    var InputString = $("#txt_RRID").val() ;

    Querystring = "GetRRSEARCH";
    
        
        $.ajax({
            type: "POST",
            contentType: "application/json; charset=utf-8",
            url: "ReleaseRequestupdate.aspx/getTablerequest",
            data: "{QueryStr : '" + Querystring + "',input :'" + InputString + "'}",
            dataType: "json",
            success: function (Result) {
                if (Result.d.length > 0) {
                    $('#tableShowIN').empty();//t.fi_name,t.branch,t.addrss,t.contact_person,t.phone_no,t.mobile_no,t.email_id,t.pan,t.gstn,t.cin
                    $("#tableShowIN").append('<thead class="bg-success text-white">< tr ><th scope="col">Release Request ID</th><th scope="col">Category</th><th scope="col">CRF ID</th> <th scope="col">Type</th> </tr></thead><tbody class="border border-dark">'
                    );
                    for (var i = 0; i < Result.d.length; i++) {
                        $("#tableShowIN").append('<tr><td>' + Result.d[i].INName + '</td>' +
                            '<td>' + Result.d[i].Branchordep + '</td>' +
                            '<td>' + Result.d[i].Summary + '</td>' +
                            '<td>' + Result.d[i].Desc + '</td>' +
                            

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


function ModelPopWarning(msg) {
    $("#warnMsgContent").html(msg);
    $("#centralModalWarning").modal("show");
}
