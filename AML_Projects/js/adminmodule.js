function frmExit() {
    window.open("index.aspx", "_self");
}
$(window).on('load', function () {
    $("#SelctType").hide();
    $("#tableShowIN").hide();
   
    Getrequesttype();
   INCATEGORY();
    Getbinowner(); 
    Getrole();
    getsrTABLE();
    getbinmasterTABLE();
    getbinmdtls();
    getassettype();
    getincidentcat();
    getincsubcat();
    getincsubcatsr();
    getrole();
    getroledtl();
    GetRequestSRsub();
    //$("#txt_ReportedBy").val( $("[id*=hduname]").val());
    getgroupdtl(); //change req group table view function ks
    getservicedtl();//change req service table view function ks
    document.getElementById('divservice').style.display = 'none';
    document.getElementById('divgroup').style.display = 'none';

   
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


//--------------------------------------------------------------sruthy---------------------------------------------->
//check box visibility

function checkUncheck() {
    if (document.getElementById("groupid").checked == true) {
        document.getElementById('divgroup').style.display = 'block';

    }
    else if (document.getElementById("groupid").checked == false) {
        document.getElementById('divgroup').style.display = 'none';
    }


    if (document.getElementById("seviceid").checked == true) {
        document.getElementById('divservice').style.display = 'block';


    }
    else if (document.getElementById("seviceid").checked == false) {
        document.getElementById('divservice').style.display = 'none';
    }
}
//add group


function Addgroupdetails() {


    var QueryString = "addGroupChangereq";

    if ($("#txt_group").val() == "") {
        ModelPopWarning("Please enter group ");

        return false;
    }



    else {

        var input = $("#txt_group").val();
        $.ajax({
            type: "POST",
            contentType: "application/json; charset=utf-8",
            url: "AdminModule.aspx/addgroupdtl",
            data: "{QueryString:'" + QueryString + "',input : '" + input + "'}",
            dataType: "json",
            success: function (Result) {
                //alert(Result.d);
                Result = Result.d;
                alert(Result);
                getgroupdtl();
                $("#txt_group").val("");

                //SaveuploadData(Result);
                // window.open('AdminModule.aspx', '_self');

            },

            error: function (Result) {
                alert(Result);
            }
        });


    }
}

///table adding group
function getgroupdtl() {
    $("#tblgroup").empty();
    var Querystring;
    $("#tblgroup").show();
    Querystring = "GetgroupChangereq";




    $.ajax({
        type: "POST",
        contentType: "application/json; charset=utf-8",
        url: "AdminModule.aspx/getgroup_dtl",
        data: "{QueryStr : '" + Querystring + "'}",
        dataType: "json",
        success: function (Result) {
            if (Result.d.length > 0) {
                $('#tblgroup').empty();
                $("#tblgroup").append('<thead class="bg-success text-white">< tr ><th scope="col">ID</th><th scope="col">Group</th><th scope="col"></th> </tr></thead><tbody class="border border-dark">'
                );
                for (var i = 0; i < Result.d.length; i++) {
                    $("#tblgroup").append('<tr>' +

                        '<td>' + Result.d[i].GrId + '</td>' +
                        '<td>' + Result.d[i].GrName + '</td>' +

                        '<td>' + '<input type = "button" value=" Delete" name = "btn9" id="' + i + '" onclick="deletegroupdtl()"/> ' + '</td > ' +
                        '</tr >');


                }
                $("#tblgroup").append(
                    '</tbody>');
            }
        },
        error: function (Result) {
            alert(Result);
        }
    });

}

//delete group change req



function deletegroupdtl() {

    var checkstr = confirm('Are you sure you want to delete this?');
    if (checkstr == true) {

        $('#tblgroup').find('tr').click(function () {
            var row9 = $(this).find('td:first').text();
            $(this).remove();
            var QueryString = "DELETEGROUPDTL";
            // alert(row);
            $.ajax({
                type: "POST",
                contentType: "application/json; charset=utf-8",
                url: "AdminModule.aspx/delgroupdtl",
                data: "{QueryString:'" + QueryString + "',input : '" + row9 + "'}",
                dataType: "json",
                success: function (Result) {
                    //alert(Result.d);
                    Result = Result.d;
                    alert(Result);

                    getgroupdtl();
                    $('#tblgroup tr').off('click');

                    //SaveuploadData(Result);
                    //window.open('AdminModule.aspx', '_self');

                },

                error: function (Result) {
                    alert(Result);
                    $('#tblgroup tr').off('click');

                }
            });

        });



        $('#tblgroup').removeEventListener();
        // do your code
    } else {
        return false;
    }
}

//adding service changereq



function Addservicedetails() {


    var QueryString = "addServiceChangereq";

    if ($("#txt_service").val() == "") {
        ModelPopWarning("Please enter Service ");

        return false;
    }



    else {

        var input = $("#txt_service").val();
        $.ajax({
            type: "POST",
            contentType: "application/json; charset=utf-8",
            url: "AdminModule.aspx/addservicedtl",
            data: "{QueryString:'" + QueryString + "',input : '" + input + "'}",
            dataType: "json",
            success: function (Result) {
                //alert(Result.d);
                Result = Result.d;
                alert(Result);
                getservicedtl();
                $("#txt_service").val("");

                //SaveuploadData(Result);
                // window.open('AdminModule.aspx', '_self');

            },

            error: function (Result) {
                alert(Result);
            }
        });


    }
}
// view table service

function getservicedtl() {
    $("#tblservice").empty();
    var Querystring;
    $("#tblservice").show();
    Querystring = "GetServiceChangereq";




    $.ajax({
        type: "POST",
        contentType: "application/json; charset=utf-8",
        url: "AdminModule.aspx/getservice_dtl",
        data: "{QueryStr : '" + Querystring + "'}",
        dataType: "json",
        success: function (Result) {
            if (Result.d.length > 0) {
                $('#tblservice').empty();
                $("#tblservice").append('<thead class="bg-success text-white">< tr ><th scope="col">ID</th><th scope="col">Service</th><th scope="col"></th> </tr></thead><tbody class="border border-dark">'
                );
                for (var i = 0; i < Result.d.length; i++) {
                    $("#tblservice").append('<tr>' +

                        '<td>' + Result.d[i].SeId + '</td>' +
                        '<td>' + Result.d[i].SeName + '</td>' +

                        '<td>' + '<input type = "button" value=" Delete" name = "btn9" id="' + i + '" onclick="deleteservicedtl()"/> ' + '</td > ' +
                        '</tr >');


                }
                $("#tblservice").append(
                    '</tbody>');
            }
        },
        error: function (Result) {
            alert(Result);
        }
    });

}
//Deleting service from table

function deleteservicedtl() {

    var checkstr = confirm('Are you sure you want to delete this?');
    if (checkstr == true) {

        $('#tblservice').find('tr').click(function () {
            var row9 = $(this).find('td:first').text();
            $(this).remove();
            var QueryString = "DELETESERVICEDTL";
            // alert(row);
            $.ajax({
                type: "POST",
                contentType: "application/json; charset=utf-8",
                url: "AdminModule.aspx/delservicedtl",
                data: "{QueryString:'" + QueryString + "',input : '" + row9 + "'}",
                dataType: "json",
                success: function (Result) {
                    //alert(Result.d);
                    Result = Result.d;
                    alert(Result);

                    getservicedtl();
                    $('#tblservice tr').off('click');

                    //SaveuploadData(Result);
                    //window.open('AdminModule.aspx', '_self');

                },

                error: function (Result) {
                    alert(Result);
                    $('#tblservice tr').off('click');

                }
            });

        });



        $('#tblservice').removeEventListener();
        // do your code
    } else {
        return false;
    }
}








//----------------------------------------------end -------sruthy------------------------------------------------->






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
function Getbinowner() {
    var QueryString = "GetAssignTeam";
    $.ajax({
        type: "POST",
        contentType: "application/json; charset=utf-8",
        url: "AdminModule.aspx/getincident",
        data: "{QueryString:'" + QueryString + "'}",
        dataType: "json",
        success: function (Result) {
            $('#ddlbin').empty();
            $('#ddlbin').append($("<option></option>").val("-1").html("Select Bin Name "));
            $.each(Result.d, function (data, value) {
                $('#ddlbin').append($("<option></option>").val(value.ReqId).html(value.ReqName));
            })
        },
        error: function (Result) {
            alert(Result);
        }
    });
}


function Getrole() {
    var QueryString = "Getrole";
    $.ajax({
        type: "POST",
        contentType: "application/json; charset=utf-8",
        url: "AdminModule.aspx/getincident",
        data: "{QueryString:'" + QueryString + "'}",
        dataType: "json",
        success: function (Result) {
            $('#ddlrole').empty();
            $('#ddlrole').append($("<option></option>").val("-1").html("Select Role "));
            $.each(Result.d, function (data, value) {
                $('#ddlrole').append($("<option></option>").val(value.ReqId).html(value.ReqName));
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

function INCATEGORY() {

    var QueryString = "GetINCategory";
    $.ajax({
        type: "POST",
        contentType: "application/json; charset=utf-8",
        url: "AdminModule.aspx/getincident",
        data: "{QueryString:'" + QueryString + "'}",
        dataType: "json",
        success: function (Result) {
             $('#ddlincate').empty();
            $('#ddlincate').append($("<option></option>").val("-1").html("Select Incident category "));
            $.each(Result.d, function (data, value) {
                
                $('#ddlincate').append($("<option></option>").val(value.ReqId).html(value.ReqName));
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

//--------selected bin detals



function Getselectedbinmem() {
    //$("#tblbingr").empty();
    var Querystr;
    $("#tblbingr").show();
    Querystring = "Gebselectbindtls";
    var InputString = $('#ddlbin option:selected').val();



    $.ajax({
        type: "POST",
        contentType: "application/json; charset=utf-8",
        url: "AdminModule.aspx/getselectbinmem1",
        data: "{QueryStr:'" + Querystring + "',input:'" + InputString + "'}",
        dataType: "json",
        success: function (Result) {
            if (Result.d.length > 0) {
                $('#tblbingr').empty();//t.fi_name,t.branch,t.addrss,t.contact_person,t.phone_no,t.mobile_no,t.email_id,t.pan,t.gstn,t.cin
                $("#tblbingr").append('<thead class="bg-success text-white">< tr ><th scope="col">ID</th> <th scope="col">Bin Name </th> <th scope="col">Emp Code </th><th scope="col">Emp Name </th><th scope="col"></th> </tr></thead><tbody class="border border-dark">'
                );
                for (var i = 0; i < Result.d.length; i++) {
                    $("#tblbingr").append('<tr><td>' + Result.d[i].INName + '</td>' +

                        '<td>' + Result.d[i].Branchordep + '</td>' +


                        '<td>' + Result.d[i].Summary + '</td>' +

                        '<td>' + Result.d[i].Desc + '</td>' +
                        // '<td>' + Result.d[i].Desc + '</td>' +
                        '<td>' + '<input type = "button" value=" Delete" name = "btn3" id="' + i + '" onclick="idbindel()"/> ' + '</td > ' +
                        '</tr >');


                }
                $("#tblbingr").append(
                    '</tbody>');
            } else {

                $('#tblbingr').empty();
            }
        },
        error: function (Result) {
            alert(Result.d);
        }
    });

}



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

function Getrequesttype() {
   
    var QueryString = "Getservicecatalog";
    $.ajax({
        
        type: "POST",
        contentType: "application/json; charset=utf-8",
        url: "AdminModule.aspx/getservcatalog",
        data: "{QueryString:'" + QueryString + "'}",
        dataType: "json",
        success: function (Result) {
            $('#ddlreqtype').empty();
            $('#ddlreqtype').append($("<option></option>").val("-1").html("Select Request Type "));
            $.each(Result.d, function (data, value) {
                $('#ddlreqtype').append($("<option></option>").val(value.ASId).html(value.ASName));
                
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

function Addbin() {


    var QueryString = "ADDBIN";



    

    if ($("#txt_bin").val().trim() == "") {
        ModelPopWarning("Please enter Bin Name");

        return false;
    }
    else if ($("#txt_binempcode").val().trim() == "") {
        ModelPopWarning("Please enter Emp code");

        return false;
    }
    
    else if ($("#txt_binempcode").val().length < 5) {
        ModelPopWarning("Please enter valid Emp code");

        return false;
    }


    else {

        //var input = $("#txt_bin").val() + "¥" + $("#ddlreqtype").val()+ "¥" + $("#txt_binempcode").val() ;
        var input = $("#txt_bin").val().trim() + "¥" + $("#txt_binempcode").val();
         $.ajax({
            type: "POST",
            contentType: "application/json; charset=utf-8",
            url: "AdminModule.aspx/confreqtype",
            data: "{QueryString:'" + QueryString + "',input : '" + input + "'}",
            dataType: "json",
            success: function (Result) {
                //alert(Result.d);
                Result = Result.d;
                alert(Result);
                getbinmasterTABLE();
                $("#txt_bin").val("");
                $("#ddlreqtype").val("-1");
                $("#txt_binempcode").val(""); 
                //SaveuploadData(Result);
                //window.open('AdminModule.aspx', '_self');

            },

            error: function (Result) {
                alert(Result);
            }
        });

        Getbinowner();
    }
}

function Addbingrop() {

    var emp_code;
    var QueryString = "ADDBINgroup";


    if ($("#radEmpcod").prop("checked")) {
        emp_code = $("#txt_empcod").val();

    }
    else if ($("#radEmpnme").prop("checked")) {
        emp_code = $("#txt_emp_cod").val();


    }

   // alert(emp_code);

    if ($("#txt_emp").val().trim() == "" && $("#radEmpnme").prop("checked")) {
        ModelPopWarning("Please enter employee Name");

        return false;
    }
    else if ($("#txt_empcod").val().trim() == "" && $("#radEmpcod").prop("checked")) {
        ModelPopWarning("Please enter employee Code");

        return false;
    }

    else if ($("#ddlbin").val() == "-1") {
        ModelPopWarning("Please select bin owner");

        return false;
    }
    //else if ($("#txt_emp").val().length < 5) {
    //    ModelPopWarning("Please enter valid Emp code");

    //    return false;
    //}
   


    else {
                                 //                  $("[id*=hdUserId]").val()
        var input = $("#ddlbin").val().trim() + "¥" + emp_code + "¥" + 1;
        $.ajax({
            type: "POST",
            contentType: "application/json; charset=utf-8",
            url: "AdminModule.aspx/confreqtype",
            data: "{QueryString:'" + QueryString + "',input : '" + input + "'}",
            dataType: "json",
            success: function (Result) {
                //alert(Result.d);
                Result = Result.d;
                alert(Result);
                $("#txt_empcod").val('');
                $("#txt_emp_cod").val('');
                $("#txt_emp").val('');
                $("#txt_emp_nme").val('');
                Getselectedbinmem();

                //getbinmdtls();
               // $("#ddlbin").val("-1");
                $("#txt_emp").val("");
                //SaveuploadData(Result);
               // window.open('AdminModule.aspx', '_self');

            },

            error: function (Result) {
                alert(Result);
            }
        });


    }
}

function Addaccettype() {


    var QueryString = "ADDASSETYPE";





    if ($("#txt_assettype").val().trim() == "") {
        ModelPopWarning("Please enter Asset Type");

        return false;
    }
   



    else {

        var input = $("#txt_assettype").val().trim() + "¥" + $("[id*=hdUserId]").val();
        $.ajax({
            type: "POST",
            contentType: "application/json; charset=utf-8",
            url: "AdminModule.aspx/confreqtype",
            data: "{QueryString:'" + QueryString + "',input : '" + input + "'}",
            dataType: "json",
            success: function (Result) {
                //alert(Result.d);
                Result = Result.d;
                alert(Result);
                getassettype();
                $("#txt_assettype").val("");
                //SaveuploadData(Result);
               // window.open('AdminModule.aspx', '_self');

            },

            error: function (Result) {
                alert(Result);
            }
        });


    }
}

function AddaccetPROP() {


    var QueryString = "ADDASSEPROPERTY";





    if ($("#txt_assetprop").val().trim() == "") {
        ModelPopWarning("Please enter Asset Property");

        return false;
    }




    else {

        var input = $("#txt_assetprop").val().trim() + "¥" + $("[id*=hdUserId]").val();
        $.ajax({
            type: "POST",
            contentType: "application/json; charset=utf-8",
            url: "AdminModule.aspx/confreqtype",
            data: "{QueryString:'" + QueryString + "',input : '" + input + "'}",
            dataType: "json",
            success: function (Result) {
                //alert(Result.d);
                Result = Result.d;
                alert(Result);
                //SaveuploadData(Result);
                window.open('AdminModule.aspx', '_self');

            },

            error: function (Result) {
                alert(Result);
            }
        });


    }
}

function Addincategory() {


    var QueryString = "ADDincategory";
    if ($("#txt_inc").val().trim() == "") {
        ModelPopWarning("Please Enter Incident Category");

        return false;
    }

    else {

        var input = $("#txt_inc").val() + "¥" + 1 + "¥" + $("[id*=hdUserId]").val(); 
        $.ajax({
            type: "POST",
            contentType: "application/json; charset=utf-8",
            url: "AdminModule.aspx/confreqtype",
            data: "{QueryString:'" + QueryString + "',input : '" + input + "'}",
            dataType: "json",
            success: function (Result) {
                //alert(Result.d);
                Result = Result.d;
                alert(Result);
                getincidentcat();
                $("#txt_inc").val("");
                //SaveuploadData(Result);
               // window.open('AdminModule.aspx', '_self');

            },

            error: function (Result) {
                alert(Result);
            }
        });

        INCATEGORY();
    }
}



function Addsubcat() {


    var QueryString = "ADDsubcategory";

    if ($("#txt_incsub").val().trim() == "") {
        ModelPopWarning("Please enter Sub category");

        return false;
    }
    if ($("#ddlincate").val() == -1) {

        ModelPopWarning("Please Select Category");

    }




    else {

        var input = $("#txt_incsub").val().trim() + "¥" + 1 + "¥" + $("#ddlincate").val();
        $.ajax({
            type: "POST",
            contentType: "application/json; charset=utf-8",
            url: "AdminModule.aspx/confreqtype",
            data: "{QueryString:'" + QueryString + "',input : '" + input + "'}",
            dataType: "json",
            success: function (Result) {
                Result = Result.d;
                alert(Result);
                getincsubcat();
                $("#txt_incsub").val("");
                $("#ddlincate").val("-1");
                //SaveuploadData(Result);
                //window.open('AdminModule.aspx', '_self');

            },

            error: function (Result) {
                alert(Result);
            }
        });


    }
}



function AddSRsubcat() {


    var QueryString = "ADDsubcategorySR";

    if ($("#txt_srsub").val().trim() == "") {
        ModelPopWarning("Please enter Sub category");

        return false;
    }
    if ($("#ddlsrcat").val() == -1) {

        ModelPopWarning("Please Select Category");

    }




    else {

        var input = $("#txt_srsub").val().trim() + "¥" + 1 + "¥" + $("#ddlsrcat").val();
        $.ajax({
            type: "POST",
            contentType: "application/json; charset=utf-8",
            url: "AdminModule.aspx/confreqtypesr",
            data: "{QueryString:'" + QueryString + "',input : '" + input + "'}",
            dataType: "json",
            success: function (Result) {
                Result = Result.d;
                alert(Result);
                getincsubcatsr();
                $("#txt_srsub").val("");
                $("#ddlsrcat").val("-1");
                //SaveuploadData(Result);
                //window.open('AdminModule.aspx', '_self');

            },

            error: function (Result) {
                alert(Result);
            }
        });


    }
}


function deleteisubcatsr() {
    var checkstr = confirm('Are you sure you want to delete this?');
    if (checkstr == true) {

        $('#tblsubincSR').find('tr').click(function () {
            var row7 = $(this).find('td:first').text();
            $(this).remove();
            var QueryString = "DELETEsubincsr";
            // alert(row);
            $.ajax({
                type: "POST",
                contentType: "application/json; charset=utf-8",
                url: "AdminModule.aspx/confreqtype",
                data: "{QueryString:'" + QueryString + "',input : '" + row7 + "'}",
                dataType: "json",
                success: function (Result) {
                    //alert(Result.d);
                    Result = Result.d;
                    alert(Result);
                    $("#tblsubincSR tr").off('click');

                    //SaveuploadData(Result);
                    //window.open('AdminModule.aspx', '_self');

                },

                error: function (Result) {
                    alert(Result);
                    $("#tblsubincSR tr").off('click');

                }
            });

        });



        $('#tblsubincSR').removeEventListener();



        // do your code
    } else {
        return false;
    }

}
function getincsubcatsr() {
    $("#tblsubincSR").empty();
    var Querystring;
    $("#tblsubincSR").show();
    Querystring = "GetINsubcatsr";




    $.ajax({
        type: "POST",
        contentType: "application/json; charset=utf-8",
        url: "AdminModule.aspx/getIncSubCatsr",
        data: "{QueryStr : '" + Querystring + "'}",
        dataType: "json",
        success: function (Result) {
            if (Result.d.length > 0) {
                $('#tblsubincSR').empty();
                $("#tblsubincSR").append('<thead class="bg-success text-white">< tr ><th scope="col">ID</th> <th scope="col">Incident Category </th> <th scope="col">Incident Sub Category </th><th scope="col"></th>  </tr></thead><tbody class="border border-dark">'
                );
                for (var i = 0; i < Result.d.length; i++) {
                    $("#tblsubincSR").append('<tr><td>' + Result.d[i].INName + '</td>' +

                        '<td>' + Result.d[i].Summary + '</td>' +
                        '<td>' + Result.d[i].Branchordep + '</td>' +
                        '<td>' + '<input type = "button" value=" Delete" name = "btn7" id="' + i + '" onclick="deleteisubcatsr()"/> ' + '</td > ' +

                        '</tr >');


                }
                $("#tblsubincSR").append(
                    '</tbody>');
            }
        },
        error: function (Result) {
            alert(Result);
        }
    });
    INCATEGORY();
}








function Addrole(){

    
    var QueryString = "ADDROLEMST";

    if ($("#txt_role").val().trim() == "") {
        ModelPopWarning("Please enter Role Name");

        return false;
    }




    else {

        var input = $("#txt_role").val().trim() ;
        $.ajax({
            type: "POST",
            contentType: "application/json; charset=utf-8",
            url: "AdminModule.aspx/roeladd",
            data: "{QueryString:'" + QueryString + "',input : '" + input + "'}",
            dataType: "json",
            success: function (Result) {
                //alert(Result.d);
                Result = Result.d;
                alert(Result);
                getrole();
                $("#txt_role").val("");
                //SaveuploadData(Result);
               // window.open('AdminModule.aspx', '_self');

            },

            error: function (Result) {
                alert(Result);
            }
        });
        Getrole();

    }
}




function Addroldetails() {


    var QueryString = "ADDROLEMSTDTLS";

    if ($("#ddlrole").val() == "-1") {
        ModelPopWarning("Please enter Role ");

        return false;
    }
    else if ($("#txt_empcode").val().length < 5) {
        ModelPopWarning("Please enter valid Emp code");

        return false;
    }



    else {

        var input = $("#ddlrole").val() + "¥" + $("#txt_empcode").val();
        $.ajax({
            type: "POST",
            contentType: "application/json; charset=utf-8",
            url: "AdminModule.aspx/confreqtype",
            data: "{QueryString:'" + QueryString + "',input : '" + input + "'}",
            dataType: "json",
            success: function (Result) {
                //alert(Result.d);
                Result = Result.d;
                alert(Result);
                getroledtl();
                $("#ddlrole").val("-1");
                $("#txt_empcode").val("");
                //SaveuploadData(Result);
               // window.open('AdminModule.aspx', '_self');

            },

            error: function (Result) {
                alert(Result);
            }
        });


    }
}
/*--confirm button for incident or sr    ------*/

function Addreqtype() {
   
    
    var QueryString = "ADMINREQ";
   


   
   
    if ($("#txt_reqname").val().trim() == "") {
        ModelPopWarning("Please enter Request Name");
        
        return false;
    }
   
    
   


    else {

        var input = $("#txt_reqname").val().trim() + "¥" + 1 + "¥" + $("[id*=hdUserId]").val();
                    $.ajax({
                        type: "POST",
                        contentType: "application/json; charset=utf-8",
                        url: "AdminModule.aspx/confreqtype",
                        data: "{QueryString:'" + QueryString + "',input : '" + input + "'}",
                        dataType: "json",
                        success: function (Result) {
                            //alert(Result.d);
                            Result = Result.d;
                           alert(Result);
                            //SaveuploadData(Result);
                            window.open('AdminModule.aspx', '_self');

                        },

                        error: function (Result) {
                            alert(Result);
                        }
                    });

                
          }
 }

    





function grb() {

    var checkstr = confirm('Are you sure you want to delete this?');
    if (checkstr == true) {
      
   
    $('#servicereq').find('tr').click(function () {
        var row = $(this).find('td:first').text();
        $(this).remove();
        var QueryString = "DELETESR";
       // alert(row);
        $.ajax({
            type: "POST",
            contentType: "application/json; charset=utf-8",
            url: "AdminModule.aspx/confreqtype",
            data: "{QueryString:'" + QueryString + "',input : '" + row + "'}",
            dataType: "json",
            success: function (Result) {
                //alert(Result.d);
                Result = Result.d;
                alert(Result);
                $("#servicereq tr").off('click');
                
                //SaveuploadData(Result);
                //window.open('AdminModule.aspx', '_self');

            },

            error: function (Result) {
                alert(Result);
                $("#servicereq tr").off('click');
            }
        });
        
    });


        
    $('#servicereq').removeEventListener();
   
        // do your code
    } else {
        return false;
    }
}
 




//var gbid="";


function getsrTABLE() {
    $("#servicereq").empty();
    var Querystring;
    $("#servicereq").show();
    
   

    

    Querystring = "Getservicecatalog";



        
        $.ajax({
            type: "POST",
            contentType: "application/json; charset=utf-8",
            url: "AdminModule.aspx/getTableGB",
            data: "{QueryStr : '" + Querystring + "'}",
            dataType: "json",
            success: function (Result) {
                if (Result.d.length > 0) {
                    $('#servicereq').empty();//t.fi_name,t.branch,t.addrss,t.contact_person,t.phone_no,t.mobile_no,t.email_id,t.pan,t.gstn,t.cin
                    $("#servicereq").append('<thead class="bg-success text-white">< tr ><th scope="col">ID</th><th scope="col">Service Catalog</th><th scope="col"></th></tr></thead><tbody class="border border-dark">'
                    );
                    for (var i = 0; i < Result.d.length; i++) {
                        $("#servicereq").append('<tr><td>' + Result.d[i].INName + '</td>' +
                           
                            '<td>' + Result.d[i].Summary + '</td>' +
                            '<td>' + '<input type = "button" value=" Delete" name = "btn1" id="' + i + '" onclick="grb()"/> ' + '</td > ' +

                            '</tr >');
                       
                        
                    }
                    $("#servicereq").append(
                        '</tbody>');
                }
            },
            error: function (Result) {
                alert(Result);
            }
        });
    
}






function iddelete() {
    var checkstr = confirm('Are you sure you want to delete this?');
    if (checkstr == true) {

    $('#tblbin').find('tr').click(function () {
        var row1 = $(this).find('td:first').text();
        $(this).remove();
        var QueryString = "DELETEBIN";
        // alert(row);
        $.ajax({
            type: "POST",
            contentType: "application/json; charset=utf-8",
            url: "AdminModule.aspx/confreqtype",
            data: "{QueryString:'" + QueryString + "',input : '" + row1 + "'}",
            dataType: "json",
            success: function (Result) {
                //alert(Result.d);
                Result = Result.d;
                alert(Result);
                $("#tblbin tr").off('click');
                Getselectedbinmem(row1);
                //SaveuploadData(Result);
                //window.open('AdminModule.aspx', '_self');

            },

            error: function (Result) {
                alert(Result);
                $("#tblbin tr").off('click');
            }
        });

    });



    $('#tblbin').removeEventListener();



        // do your code
    } else {
        return false;
    }

}


function getbinmasterTABLE() {
    $("#tblbin").empty();
    var Querystring;
    $("#tblbin").show();





    Querystring = "Gebinmaster";




    $.ajax({
        type: "POST",
        contentType: "application/json; charset=utf-8",
        url: "AdminModule.aspx/getTblbinmaster",
        data: "{QueryStr : '" + Querystring + "'}",
        dataType: "json",
        success: function (Result) {
            if (Result.d.length > 0) {
                $('#tblbin').empty();
                $("#tblbin").append('<thead class="bg-success text-white">< tr ><th scope="col">ID</th><th scope="col">Bin Name</th><th scope="col">Bin Owner Empcode</th> <th scope="col">Bin Owner Name</th><th scope="col"></th></tr></thead><tbody class="border border-dark">'
                );
                for (var i = 0; i < Result.d.length; i++) {
                    $("#tblbin").append('<tr><td>' + Result.d[i].INName + '</td>' +
                        
                        '<td>' + Result.d[i].Summary + '</td>' +
                        '<td>' + Result.d[i].Branchordep + '</td>' +
                        '<td>' + Result.d[i].Desc + '</td>' +
                        '<td>' + '<input type = "button" value=" Delete" name = "btn2" id="' + i + '" onclick="iddelete()"/> ' + '</td > ' +
                        '</tr >');


                }
                $("#tblbin").append(
                    '</tbody>');
            }
        },
        error: function (Result) {
            alert(Result);
        }
    });

}

function idbindel() {
    var checkstr = confirm('Are you sure you want to delete this?');
    if (checkstr == true) {

    $('#tblbingr').find('tr').click(function () {
        var row4 = $(this).find('td:first').text();
        $(this).remove();
        var QueryString = "DELETEowner";
        // alert(row);
        $.ajax({
            type: "POST",
            contentType: "application/json; charset=utf-8",
            url: "AdminModule.aspx/confreqtype",
            data: "{QueryString:'" + QueryString + "',input : '" + row4 + "'}",
            dataType: "json",
            success: function (Result) {
                //alert(Result.d);
                Result = Result.d;
                alert(Result);
                $("#tblbingr tr").off('click');

                //SaveuploadData(Result);
                //window.open('AdminModule.aspx', '_self');

            },

            error: function (Result) {
                alert(Result);
                $("#tblbingr tr").off('click');

            }
        });

    });



    $('#tblbingr').removeEventListener();


        // do your code
    } else {
        return false;
    }


}

function getbinmdtls() {
    $("#tblbingr").empty();
    var Querystring;
    $("#tblbingr").show();
    Querystring = "Gebindtls";




    $.ajax({
        type: "POST",
        contentType: "application/json; charset=utf-8",
        url: "AdminModule.aspx/getTblbin",
        data: "{QueryStr : '" + Querystring + "'}",
        dataType: "json",
        success: function (Result) {
            if (Result.d.length > 0) {
                $('#tblbingr').empty();//t.fi_name,t.branch,t.addrss,t.contact_person,t.phone_no,t.mobile_no,t.email_id,t.pan,t.gstn,t.cin
                $("#tblbingr").append('<thead class="bg-success text-white">< tr ><th scope="col">ID</th> <th scope="col">Bin Name </th> <th scope="col">Emp Code </th><th scope="col">Emp Name </th><th scope="col"></th> </tr></thead><tbody class="border border-dark">'
                );
                for (var i = 0; i < Result.d.length; i++) {
                    $("#tblbingr").append('<tr><td>' + Result.d[i].INName + '</td>' +

                        '<td>' + Result.d[i].Summary + '</td>' +
                       
                        '<td>' + Result.d[i].Branchordep + '</td>' +
                        '<td>' + Result.d[i].Desc + '</td>' +
                        '<td>' + '<input type = "button" value=" Delete" name = "btn3" id="' + i + '" onclick="idbindel()"/> ' + '</td > ' +
                        '</tr >');


                }
                $("#tblbingr").append(
                    '</tbody>');
            }
        },
        error: function (Result) {
            alert(Result);
        }
    });

}
function delasset() {
    var checkstr = confirm('Are you sure you want to delete this?');
    if (checkstr == true) {

    $('#tblasset').find('tr').click(function () {
        var row5 = $(this).find('td:first').text();
        $(this).remove();
        var QueryString = "DELETEASSET";
        // alert(row);
        $.ajax({
            type: "POST",
            contentType: "application/json; charset=utf-8",
            url: "AdminModule.aspx/confreqtype",
            data: "{QueryString:'" + QueryString + "',input : '" + row5 + "'}",
            dataType: "json",
            success: function (Result) {
                //alert(Result.d);
                Result = Result.d;
                alert(Result);
                $("#tblasset tr").off('click');

                //SaveuploadData(Result);
                //window.open('AdminModule.aspx', '_self');

            },

            error: function (Result) {
                alert(Result);
                $("#tblasset tr").off('click');

            }
        });

    });



    $('#tblasset').removeEventListener();


        // do your code
    } else {
        return false;
    }


}



function getassettype() {
    $("#tblasset").empty();
    var Querystring;
    $("#tblasset").show();
    Querystring = "GetAssettype";




    $.ajax({
        type: "POST",
        contentType: "application/json; charset=utf-8",
        url: "AdminModule.aspx/getTableGB",
        data: "{QueryStr : '" + Querystring + "'}",
        dataType: "json",
        success: function (Result) {
            if (Result.d.length > 0) {
                $('#tblasset').empty();//t.fi_name,t.branch,t.addrss,t.contact_person,t.phone_no,t.mobile_no,t.email_id,t.pan,t.gstn,t.cin
                $("#tblasset").append('<thead class="bg-success text-white">< tr ><th scope="col">ID </th> <th scope="col">Asset Type </th><th scope="col"></th>  </tr></thead><tbody class="border border-dark">'
                );
                for (var i = 0; i < Result.d.length; i++) {
                    $("#tblasset").append('<tr><td>' + Result.d[i].INName + '</td>' +

                        '<td>' + Result.d[i].Summary + '</td>' +

                        '<td>' + '<input type = "button" value=" Delete" name = "btn5" id="' + i + '" onclick="delasset()"/> ' + '</td > ' +
                        '</tr >');


                }
                $("#tblasset").append(
                    '</tbody>');
            }
        },
        error: function (Result) {
            alert(Result);
        }
    });

}

//function getassettype() {
//    $("#tblasset").empty();
//    var Querystring;
//    $("#tblasset").show();
//    Querystring = "GetAssettype";




//    $.ajax({
//        type: "POST",
//        contentType: "application/json; charset=utf-8",
//        url: "AdminModule.aspx/getTableGB",
//        data: "{QueryStr : '" + Querystring + "'}",
//        dataType: "json",
//        success: function (Result) {
//            if (Result.d.length > 0) {
//                $('#tblasset').empty();//t.fi_name,t.branch,t.addrss,t.contact_person,t.phone_no,t.mobile_no,t.email_id,t.pan,t.gstn,t.cin
//                $("#tblasset").append('<thead class="bg-success text-white">< tr ><th scope="col">ID </th> <th scope="col">Asset Type </th> </tr></thead><tbody class="border border-dark">'
//                );
//                for (var i = 0; i < Result.d.length; i++) {
//                    $("#tblasset").append('<tr><td>' + Result.d[i].INName + '</td>' +

//                        '<td>' + Result.d[i].Summary + '</td>' +


//                        '</tr >');


//                }
//                $("#tblasset").append(
//                    '</tbody>');
//            }
//        },
//        error: function (Result) {
//            alert(Result);
//        }
//    });

//}
function delin() {
    var checkstr = confirm('Are you sure you want to delete this?');
    if (checkstr == true) {

    $('#tblinc').find('tr').click(function () {
        var row6 = $(this).find('td:first').text();
        $(this).remove();
        var QueryString = "DELETEINC";
        // alert(row);
        $.ajax({
            type: "POST",
            contentType: "application/json; charset=utf-8",
            url: "AdminModule.aspx/confreqtype",
            data: "{QueryString:'" + QueryString + "',input : '" + row6 + "'}",
            dataType: "json",
            success: function (Result) {
                //alert(Result.d);
                Result = Result.d;
                alert(Result);
                $("#tblinc tr").off('click');
               
                //SaveuploadData(Result);
                //window.open('AdminModule.aspx', '_self');

            },

            error: function (Result) {
                alert(Result);
                $("#tblinc tr").off('click');

            }
        });

    });



    $('#tblinc').removeEventListener();

       

        // do your code
    } else {
        return false;
    }
   

}

function getincidentcat() {
    $("#tblinc").empty();
    var Querystring;
    $("#tblinc").show();
    Querystring = "GetINCategory";




    $.ajax({
        type: "POST",
        contentType: "application/json; charset=utf-8",
        url: "AdminModule.aspx/getTableGB",
        data: "{QueryStr : '" + Querystring + "'}",
        dataType: "json",
        success: function (Result) {
            if (Result.d.length > 0) {
                $('#tblinc').empty();
                $("#tblinc").append('<thead class="bg-success text-white">< tr ><th scope="col">ID </th> <th scope="col">Incident Category </th><th scope="col"> </th> </tr></thead><tbody class="border border-dark">'
                );
                for (var i = 0; i < Result.d.length; i++) {
                    $("#tblinc").append('<tr><td>' + Result.d[i].INName + '</td>' +

                        '<td>' + Result.d[i].Summary + '</td>' +

                        '<td>' + '<input type = "button" value=" Delete" name = "btn6" id="' + i + '" onclick="delin()"/> ' + '</td > ' +
                        '</tr >');


                }
                $("#tblinc").append(
                    '</tbody>');
              
            }
        },
        error: function (Result) {
            alert(Result);
        }
    });
   
}



/*---------start-Dropdown  SR Requesttype-----*/

function GetRequestSRsub() {

    var QueryStr = "ServiceCatlogDtl";
    $.ajax({
        type: "POST",
        contentType: "application/json; charset=utf-8",
        url: "servicerequest.aspx/getRequesttype",
        data: "{QueryString:'" + QueryStr + "'}",
        dataType: "json",
        success: function (Result) {
            $('#ddlsrcat').empty();
            $('#ddlsrcat').append($("<option></option>").val("-1").html("Select Request Type "));
            $.each(Result.d, function (data, value) {
                $('#ddlsrcat').append($("<option></option>").val(value.ReqId).html(value.ReqName));
            })
        },
        error: function (Result) {
            alert('GetRequestType()' + Result.d);
        }

    });
    return;
}




function deleteisubcat() {
    var checkstr = confirm('Are you sure you want to delete this?');
    if (checkstr == true) {

    $('#tblsubinc').find('tr').click(function () {
        var row7 = $(this).find('td:first').text();
        $(this).remove();
        var QueryString = "DELETEsubinc";
        // alert(row);
        $.ajax({
            type: "POST",
            contentType: "application/json; charset=utf-8",
            url: "AdminModule.aspx/confreqtype",
            data: "{QueryString:'" + QueryString + "',input : '" + row7 + "'}",
            dataType: "json",
            success: function (Result) {
                //alert(Result.d);
                Result = Result.d;
                alert(Result);
                $("#tblsubinc tr").off('click');

                //SaveuploadData(Result);
                //window.open('AdminModule.aspx', '_self');

            },

            error: function (Result) {
                alert(Result);
                $("#tblsubinc tr").off('click');
                
            }
        });

    });



    $('#tblsubinc').removeEventListener();



        // do your code
    } else {
        return false;
    }
    
}
function getincsubcat() {
      $("#tblsubinc").empty();
    var Querystring;
    $("#tblsubinc").show();
    Querystring = "GetINsubcat";




    $.ajax({
        type: "POST",
        contentType: "application/json; charset=utf-8",
        url: "AdminModule.aspx/getIncSubCat",
        data: "{QueryStr : '" + Querystring + "'}",
        dataType: "json",
        success: function (Result) {
             if (Result.d.length > 0) {
                $('#tblsubinc').empty();
                $("#tblsubinc").append('<thead class="bg-success text-white">< tr ><th scope="col">ID</th> <th scope="col">Incident Category </th> <th scope="col">Incident Sub Category </th><th scope="col"></th>  </tr></thead><tbody class="border border-dark">'
                );
                for (var i = 0; i < Result.d.length; i++) {
                    $("#tblsubinc").append('<tr><td>' + Result.d[i].INName + '</td>' +

                        '<td>' + Result.d[i].Summary + '</td>' +
                        '<td>' + Result.d[i].Branchordep + '</td>' +
                        '<td>' + '<input type = "button" value=" Delete" name = "btn7" id="' + i + '" onclick="deleteisubcat()"/> ' + '</td > ' +

                        '</tr >');


                }
                $("#tblsubinc").append(
                    '</tbody>');
            }
        },
        error: function (Result) {
            alert(Result);
        }
    });
    INCATEGORY();
}

function deleterole() {
    var checkstr = confirm('Are you sure you want to delete this?');
    if (checkstr == true) {
    $('#tblrole').find('tr').click(function () {
        var row8 = $(this).find('td:first').text();
        $(this).remove();
        var QueryString = "DELETEROLE";
        // alert(row);
        $.ajax({
            type: "POST",
            contentType: "application/json; charset=utf-8",
            url: "AdminModule.aspx/confreqtype",
            data: "{QueryString:'" + QueryString + "',input : '" + row8 + "'}",
            dataType: "json",
            success: function (Result) {
                //alert(Result.d);
                Result = Result.d;
                alert(Result);
                $("#tblrole tr").off('click');
                //SaveuploadData(Result);
                //window.open('AdminModule.aspx', '_self');

            },

            error: function (Result) {
                alert(Result);
                $("#tblrole tr").off('click');

            }
        });

    });



    $('#tblrole').removeEventListener();


        // do your code
    } else {
        return false;
    }


}



function getrole() {
    $("#tblrole").empty();
    var Querystring;
    $("#tblrole").show();
    Querystring = "Getrole";




    $.ajax({
        type: "POST",
        contentType: "application/json; charset=utf-8",
        url: "AdminModule.aspx/getTableGB",
        data: "{QueryStr : '" + Querystring + "'}",
        dataType: "json",
        success: function (Result) {
             if (Result.d.length > 0) {
                $('#tblrole').empty();
                $("#tblrole").append('<thead class="bg-success text-white">< tr ><th scope="col">ID </th> <th scope="col">Role</th><th scope="col"></th> </tr></thead><tbody class="border border-dark">'
                );
                for (var i = 0; i < Result.d.length; i++) {
                    $("#tblrole").append('<tr><td>' + Result.d[i].INName + '</td>' +

                        '<td>' + Result.d[i].Summary + '</td>' +
                        '<td>' + '<input type = "button" value=" Delete" name = "btn8" id="' + i + '" onclick="deleterole()"/> ' + '</td > ' +

                        '</tr >');


                }
                $("#tblrole").append(
                    '</tbody>');
            }
        },
        error: function (Result) {
            alert(Result);
        }
    });

}



function deleterdtl() {

    var checkstr = confirm('Are you sure you want to delete this?');
    if (checkstr == true) {

    $('#tblroledtl').find('tr').click(function () {
        var row9 = $(this).find('td:first').text();
        $(this).remove();
        var QueryString = "DELETEROLEDTL";
        // alert(row);
        $.ajax({
            type: "POST",
            contentType: "application/json; charset=utf-8",
            url: "AdminModule.aspx/confreqtype",
            data: "{QueryString:'" + QueryString + "',input : '" + row9 + "'}",
            dataType: "json",
            success: function (Result) {
                //alert(Result.d);
                Result = Result.d;
                alert(Result);
                $('#tblroledtl tr').off('click');

                //SaveuploadData(Result);
                //window.open('AdminModule.aspx', '_self');

            },

            error: function (Result) {
                alert(Result);
                $('#tblroledtl tr').off('click');

            }
        });

    });



    $('#tblroledtl').removeEventListener();
        // do your code
    } else {
        return false;
    }
}
function getroledtl() {
    $("#tblroledtl").empty();
    var Querystring;
    $("#tblroledtl").show();
    Querystring = "GETROLDTL";




    $.ajax({
        type: "POST",
        contentType: "application/json; charset=utf-8",
        url: "AdminModule.aspx/getrole_dtl",
        data: "{QueryStr : '" + Querystring + "'}",
        dataType: "json",
        success: function (Result) {
            if (Result.d.length > 0) {
                $('#tblroledtl').empty();
                $("#tblroledtl").append('<thead class="bg-success text-white">< tr ><th scope="col">ID</th><th scope="col">Role </th> <th scope="col">Emp Code</th><th scope="col">Employee Name</th><th scope="col"></th> </tr></thead><tbody class="border border-dark">'
                );
                for (var i = 0; i < Result.d.length; i++) {
                    $("#tblroledtl").append('<tr><td>' + Result.d[i].INName + '</td>' +

                        '<td>' + Result.d[i].Summary + '</td>' +
                        '<td>' + Result.d[i].Branchordep + '</td>' +
                        '<td>' + Result.d[i].Desc + '</td>' +
                        '<td>' + '<input type = "button" value=" Delete" name = "btn9" id="' + i + '" onclick="deleterdtl()"/> ' + '</td > ' +
                        '</tr >');


                }
                $("#tblroledtl").append(
                    '</tbody>');
            }
        },
        error: function (Result) {
            alert(Result);
        }
    });

}
//function gr() {

//    $('#tableShowgb').find('tr').click(function () {
//        var row = $(this).find('td:first').text();



//        //alert('You clicked ' + row);
//        var dt = row.toString();
//        shdetails(dt);
//        // WorkLogView(dt);
//        $('#tblticket').removeEventListener();




//    });




//}
//function shdetails(tn) {

//    var QueryString = "GetLoadData";
//    var input = tn;

//    $.ajax({

//        type: "POST",
//        contentType: "application/json; charset=utf-8",
//        url: "AdminModule.aspx/getlinkdata",
//        data: "{QueryString:'" + QueryString + "',input : '" + input + "'}",
//        dataType: "json",
//        success: function (Result) {

//            Result = Result.d.split("^");
//            $('#txt_source').val(Result[0]);
//            $('#txt_ReportedBy').val(Result[1]);
            
//            if (Result[2] == 1) {
//                $("#radGYes").prop("checked", true)
                
//            }
//            else if (Result[2] == 0)
//            {

//                $("#radGNo").prop("checked") = true;
//            }
//            $('#txt_Empcode').val(Result[3]);
//            $('#txt_phonenum').val(Result[4]);
//            $('#txt_phone').val(Result[5]);
//            $('#txt_Severity').val(Result[6]);
//            $('#txt_urgency').val(Result[7]);
//            $('#txt_Impact').val(Result[8]);
//            $('#txt_ImpactDetails').val(Result[9]);
//            $('#txt_class').val(Result[10]);
//            $('#txt_subcategory').val(Result[11]);
//            $('#txt_Subject').val(Result[12]);
//            $('#txt_Description').val(Result[13]);
//            $('#txt_ImapactedCI').val(Result[14]);
//            $('#txt_emp').val(Result[15]);
//            $('#txt_Branch').val(Result[16]);
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
//function AccName() {
//    var LoanAcc = "";
//    LoanAcc = $("[id*=hdSerLoan]").val().split("-", 2);
//    LoanAccName.innerHTML = $("[id*=hdSerLoan]").val().split("-", 2);
//}
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


//------------------------------------------------------------------------------------------------------------


function LoadDataAutoCompleteGate(ControlID, SearchKey, SrchStringLen) {
    var entval = $('#txt_emp').val();
    
    debugger;
    var ArrayList = [];
    if (SearchKey.length >= SrchStringLen) {
        $.ajax({
            type: "POST",
            contentType: "application/json; charset=utf-8",
            // url: "../ServiceAutoComplete.asmx/GetGateSearchData",
            // data: "{SearchKey:'" + SearchKey + "',QueryFlag:'" + QueryFlag + "',QueryID:'" + QueryID + "'}",

            url: "../AdminModule.aspx/autocompletefill",
            data: "{SearchKey:'" + SearchKey + "'}",
            dataType: "json",
            success: function (Result) {
                
                    ArrayList = Result.d;
                   //alert(Result.d[i].Empnme);
                   //ArrayList.push(Result.d[i].Empnme);
                    autocomplete('txt_emp', ArrayList, entval);
               
               // alert(ArrayList);
            },
            error: function (Result) {
                //alert(Result.d);
            }
        });
        //} else if (SearchKey.length == 0) {
        //    ArrayList = [];
        //    autocomplete(ControlID, ArrayList, hiddenVariable);
        //}
    }
}

function autocomplete(inp, arr, hiddenVariable) {

    debugger;
    /*the autocomplete function takes two arguments,
    the text field element and an array of possible autocompleted values:*/
    var currentFocus;
    /*execute a function when someone writes in the text field:*/
    //inp.addEventListener("input", function (e)
    if (arr.length > 0) {
        var a, b, i, val;
        val = document.getElementById('' + inp + '').value
        /*close any already open lists of autocompleted values*/
        closeAllLists();
        if (!val) { return false; }
        currentFocus = -1;
        /*create a DIV element that will contain the items (values):*/
        a = document.createElement("DIV");
        a.setAttribute("id", inp + "autocomplete-list");
        a.setAttribute("class", "autocomplete-items");
        /*append the DIV element as a child of the autocomplete container:*/
        document.getElementById('' + inp + '').parentNode.appendChild(a);
        /*for each item in the array...*/
        for (i = 0; i < arr.length; i++) {
            /*check if the item starts with the same letters as the text field value:*/
            if (arr[i].substr(0, val.length).toUpperCase() == val.toUpperCase()) {
                /*create a DIV element for each matching element:*/
                b = document.createElement("DIV");
                /*make the matching letters bold:*/
                b.innerHTML = "<strong>" + arr[i].substr(0, val.length) + "</strong>";
                b.innerHTML += arr[i].split("ʒ")[0].substr(val.length);
                /*insert a input field that will hold the current array item's value:*/
                b.innerHTML += "<input type='hidden' value='" + arr[i].split("ʒ")[0] + "'>";
                b.innerHTML += "<input type='hidden' value='" + arr[i].split("ʒ")[1] + "'>";
                /*execute a function when someone clicks on the item value (DIV element):*/
                b.addEventListener("click", function (e) {
                    /*insert the value for the autocomplete text field:*/
                    document.getElementById('' + inp + '').value = this.getElementsByTagName("input")[0].value;
                    //document.getElementById('' + hiddenVariable + '').value = this.getElementsByTagName("input")[1].value;
                    $("[id*=" + hiddenVariable + "]").val(this.getElementsByTagName("input")[1].value);

                    //angelo
                    $("[id*=selempcode]").val(this.getElementsByTagName("input")[1].value);
                    $('#txt_emp_cod').val(this.getElementsByTagName("input")[1].value);
                    /*close the list of autocompleted values,
                    (or any other open lists of autocompleted values:*/
                    closeAllLists();
                    //-oo---ANGELO----oo-----
                   // getemployeecode();
                });
                a.appendChild(b);
            }
        }
    } else {
        closeAllLists();
        $("[id*=" + hiddenVariable + "]").val("");
    }
    /*execute a function presses a key on the keyboard:*/
    document.getElementById('' + inp + '').addEventListener("keydown", function (e) {
        var x = document.getElementById(inp + "autocomplete-list");
        if (x) x = x.getElementsByTagName("div");
        if (e.keyCode == 40) {
            /*If the arrow DOWN key is pressed,
            increase the currentFocus variable:*/
            currentFocus++;
            /*and and make the current item more visible:*/
            addActive(x);
        } else if (e.keyCode == 38) { //up
            /*If the arrow UP key is pressed,
            decrease the currentFocus variable:*/
            currentFocus--;
            /*and and make the current item more visible:*/
            addActive(x);
        } else if (e.keyCode == 13) {
            /*If the ENTER key is pressed, prevent the form from being submitted,*/
            e.preventDefault();
            if (currentFocus > -1) {
                /*and simulate a click on the "active" item:*/
                if (x) x[currentFocus].click();
            }
        } else if (e.keyCode == 8 || e.keyCode == 46) {
            document.getElementById('' + hiddenVariable + '').value = "";
        }
    });
    function addActive(x) {
        /*a function to classify an item as "active":*/
        if (!x) return false;
        /*start by removing the "active" class on all items:*/
        removeActive(x);
        if (currentFocus >= x.length) currentFocus = 0;
        if (currentFocus < 0) currentFocus = (x.length - 1);
        /*add class "autocomplete-active":*/
        x[currentFocus].classList.add("autocomplete-active");
    }
    function removeActive(x) {
        /*a function to remove the "active" class from all autocomplete items:*/
        for (var i = 0; i < x.length; i++) {
            x[i].classList.remove("autocomplete-active");
        }
    }
    function closeAllLists(elmnt) {
        /*close all autocomplete lists in the document,
        except the one passed as an argument:*/
        var x = document.getElementsByClassName("autocomplete-items");
        for (var i = 0; i < x.length; i++) {
            if (elmnt != x[i] && elmnt != inp) {
                x[i].parentNode.removeChild(x[i]);
            }
        }
    }
    /*execute a function when someone clicks in the document:*/
    document.addEventListener("click", function (e) {
        closeAllLists(e.target);
    });
    $("[id*=" + hiddenVariable + "]").val("");
}





//-------------oo--function for get employee code-----//


//function getemployeecode() {
//    alert('entered to function');
//    var input = $('#txt_emp').val();
//    var QueryString = "getbinempcode";

//            $.ajax({
//                type: "POST",
//                contentType: "application/json; charset=utf-8",
//                url: "AdminModule.aspx/getbinempcode",
//                data: "{QueryString:'" + QueryString + "',input : '" + input + "'}",
//                dataType: "json",
//                success: function (Result) {
//                    alert(Result.d);
//                    Result = Result.d;
//                    $('#txt_emp_cod').val(Result.d);

//                    //SaveuploadData(Result);
//                    //window.open('AdminModule.aspx', '_self');

//                },

//                error: function (Result) {
//                    alert(Result);

//                }
//            });

       

//        // do your code
   

//}


function shwexstreqtype() {
        $("#servicereq").empty();
        var Querystring;
        $("#servicereq").show();




    var inp = $('#txt_reqname').val();
    Querystring = "servecatexit";

    


        $.ajax({
            type: "POST",
            contentType: "application/json; charset=utf-8",
            url: "AdminModule.aspx/getexistreqtyp",
            data: "{QueryStr : '" + Querystring + "',input:'"+inp+"'}",
            dataType: "json",
            success: function (Result) {
                if (Result.d.length > 0) {
                    $("#servicereq").empty();//t.fi_name,t.branch,t.addrss,t.contact_person,t.phone_no,t.mobile_no,t.email_id,t.pan,t.gstn,t.cin
                    $("#servicereq").append('<thead class="bg-success text-white">< tr ><th scope="col">ID</th><th scope="col">Service Catalog</th><th scope="col"></th></tr></thead><tbody class="border border-dark">'
                    );
                    for (var i = 0; i < Result.d.length; i++) {
                        $("#servicereq").append('<tr><td>' + Result.d[i].ReqId + '</td>' +

                            '<td>' + Result.d[i].ReqName + '</td>' +
                            '<td>' + '<input type = "button" value=" Delete" name = "btn1" id="' + i + '" onclick="grb()"/> ' + '</td > ' +

                            '</tr >');


                    }
                    $("#servicereq").append(
                        '</tbody>');
                }
            },
            error: function (Result) {
                alert(Result);
            }
        });

    }

//----------------------------------------------------------------------------------





function getbinma() {

    $("#tblbin").empty();
    var Querystring;
    $("#tblbin").show();





    Querystring = "binexist";

    var inp = $('#txt_bin').val();


    $.ajax({
        type: "POST",
        contentType: "application/json; charset=utf-8",
        url: "AdminModule.aspx/getTblbi",
        data: "{QueryStr : '" + Querystring + "',input:'" + inp + "'}",
        dataType: "json",
        success: function (Result) {
            if (Result.d.length > 0) {
                $('#tblbin').empty();
                $("#tblbin").append('<thead class="bg-success text-white">< tr ><th scope="col">ID</th><th scope="col">Bin Name</th><th scope="col">Bin Owner Empcode</th> <th scope="col">Bin Owner Name</th><th scope="col"></th></tr></thead><tbody class="border border-dark">'
                );
                for (var i = 0; i < Result.d.length; i++) {
                    $("#tblbin").append('<tr><td>' + Result.d[i].INName + '</td>' +

                        '<td>' + Result.d[i].Summary + '</td>' +
                        '<td>' + Result.d[i].Branchordep + '</td>' +
                        '<td>' + Result.d[i].Desc + '</td>' +
                        '<td>' + '<input type = "button" value=" Delete" name = "btn2" id="' + i + '" onclick="iddelete()"/> ' + '</td > ' +
                        '</tr >');


                }
                $("#tblbin").append(
                    '</tbody>');
            }
        },
        error: function (Result) {
            alert(Result);
        }
    });

}

function Setval(val) {
    alert(val);

    $('#txt_emp_cod').val(val);

}



//-----------------oo------------select option based on ---------oo------------


function showTypes() {
    if ($("#radEmpnme").prop("checked")) {
        $("#se_by_empcode").addClass('d-none');
        $("#se_by_empnme").removeClass('d-none');
        $("#txt_emp").val('');
        $("#txt_emp_cod").val('');


    }
    else if ($("#radEmpcod").prop("checked")) {
        $("#se_by_empnme").addClass('d-none');
        $("#se_by_empcode").removeClass('d-none');
        $("#txt_empcod").val('');
        $("#txt_emp_nme").val('');

    }
}


//-----------------oo------------select option based on ---------oo------------



//----------------oo------------get employee Name-------------oo-------------

function getempnme() {


    var QueryString = "getempnme";

    var input = $("#txt_empcod").val().trim();
        $.ajax({
            type: "POST",
            contentType: "application/json; charset=utf-8",
            url: "AdminModule.aspx/load_empnme",
            data: "{QueryString:'" + QueryString + "',input : '" + input + "'}",
            dataType: "json",
            success: function (Result) {
                //alert(Result.d);
                    Result = Result.d;
                    $("#txt_emp_nme").val(Result);
                    //SaveuploadData(Result);
                    // window.open('AdminModule.aspx', '_self');

                

            },

            error: function (Result) {
                alert(Result);
            }
        });


    
}



//----------------oo------------get employee Name-------------oo-------------