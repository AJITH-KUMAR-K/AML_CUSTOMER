function frmExit() {
    window.open("index.aspx", "_self");
}
$(window).on('load', function () {
    $("#SelctType").hide();
    $("#tableShowIN").hide();
    $("#work").hide();
    $("#brname").hide();

    $("#empc").hide();
    $("#bran").hide();
    $("#depa").hide();
    $("#emname").hide();
    Getassettype();
    GetAssetstate();
    Getdepartment();
    CheckAsstmngRitc();
    temp = 0;
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
    });

});
//angelo-----

var allocation = '';
var temp;
function CheckAsstmngRitc() {
    var QueryString = "AssMngRitcBhcheck";
    var input = $("[id*=hdUserId]").val();

    $.ajax({

        type: "POST",
        contentType: "application/json; charset=utf-8",
        url: "Assetmanagement.aspx/getbran",
        data: "{QueryString:'" + QueryString + "',input : '" + input + "'}",
        dataType: "json",
        success: function (Result) {
            if (Result.d.length >= 0) {
                if (Result.d == 1) {

                    $("#asst_mng").addClass('d-none');
                    $("#bh_ritc_branch").removeClass('d-none');
                    $("#bh_ritc_branch").show();
                    // $('#asst_mng').removeClass('');
                    GetBranchLst();
                    allocation = 1;
                    temp = 1;
                }
                else if (Result.d == 2) {
                    $("#bh_ritc_branch").addClass('d-none');
                    $("#asst_mng").removeClass('d-none');
                    $("#asst_mng").show();
                    // $('#asst_mng').show();
                    temp = 0;


                }else {

                alert('you are not autherized to view this page..!!');
                    window.open('Index.aspx', '_self');


            }



            }




        },
        error: function (Result) {

            alert(Result);
        }


    });

}

//branch list
function GetBranchLst() {
    var QueryStr = "branchListRitcBh";
    var InputString = $("[id*=hdUserId]").val();
    $.ajax({
        type: "POST",
        contentType: "application/json; charset=utf-8",
        url: "Assetmanagement.aspx/getRitcBh",
        data: "{QueryString:'" + QueryStr + "',input:'" + InputString + "'}",
        dataType: "json",
        success: function (Result) {

            $('#Brnchlst').empty();
            $('#Brnchlst').append($("<option></option>").val("-1").html("Select Branch "));
            $.each(Result.d, function (data, value) {

                $('#Brnchlst').append($("<option></option>").val(value.ReqId).html(value.ReqName));
            })
        },
        error: function (Result) {
            alert(Result.d);
        }

    });

}




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
    var op = $('#ddlasssttype option:selected').text();
    
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
        url: "Assetmanagement.aspx/getAssignto",
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



function Getdepartment() {

    var QueryString = "GetdepNAME";
    $.ajax({
        type: "POST",
        contentType: "application/json; charset=utf-8",
        url: "Assetmanagement.aspx/getAssignto",
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
        url: "Assetmanagement.aspx/getAssettype",
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
        url: "Assetmanagement.aspx/getbran",
        data: "{QueryString:'" + QueryString + "',input : '" + input + "'}",
        dataType: "json",
        success: function (Result) {
            $("#emname").show();
            Result = Result.d.split("^");
            $('#txt_em').val(Result[0]);




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
            url: "Assetmanagement.aspx/getbran",
            data: "{QueryString:'" + QueryString + "',input : '" + input + "'}",
            dataType: "json",
            success: function (Result) {
                $("#brname").show();
                Result = Result.d.split("^");
                $('#txt_br').val(Result[0]);
             



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
     var asset = 3;
    var k = 0;
    var branch;
    var input;
    if (temp == 0) {
         if ($("#branch").prop("checked") == true) {
            allocation = 1;
           
            if ($("#txt_branch").val() == "") {
                ModelPopWarning("Please enter branch id");

                return false;
            } else {


                branch = $("#txt_branch").val(); 

                k = 1;
            }

        }
        else if ($("#emp").prop("checked") == true) {
            allocation = 2;
            if ($("#txt_emp").val() == "") {
                ModelPopWarning("Please enter emp code");

                return false;
            } else {

                k = 1;
                branch = '';
            }

        }
        else if ($("#dep").prop("checked") == true) {
            allocation = 3;
            if ($("#ddldep").val() == "-1") {
                ModelPopWarning("Please select Department");

                return false;
            } else {

                k = 1;
                branch = '';

            }

           
            //} else {
            //    allocation = 2;
            //    department = $('#Brnchlst option:selected').val();


            //}
        }
        else if ($("#branch").prop("checked") == false && $("#emp").prop("checked") == false && $("#dep").prop("checked") == false) {


            alert('Please select one of option branch,employee,department');
        }
        
    }else {

            if ($('#Brnchlst option:selected').val() == -1) {

                alert('Please Select Branch');

            } else {
                allocation = 1;
                branch = $('#Brnchlst option:selected').val();
                k = 1;

            }


    }
     if (k == 1) {
             var QueryString = "CONFIRMASSETMST";


            if ($("#radGYes").prop("checked") == true) {
                asset = 1;

            }
            else if ($("#radGNo").prop("checked") == true) {
                asset = 0;

            }



            if ($("#ddlasssttype option:selected").val() == "-1") {
                ModelPopWarning("Please Select Asset Type");
                //alert("Please Select Financial Type");
                return false;
            }
            else if (allocation == "") {
                ModelPopWarning("Please select Allocation To:");
                //alert("Please Enter bank Name");
                return false;
            }
            else if ($("#txt_assetname").val() == "") {
                ModelPopWarning("Please enter asset name");
                //alert("Please Enter bank Name");
                return false;
            }
            else if ($("#ddlassetstate").val() == "-1") {
                ModelPopWarning("Please select Asset state");
                //alert("Please Enter Branch Name");
                return false;
            }  else {
                  if (temp == 0) {
 
                    //                 1                                         2                                     3                              4                                       5                        6                                 7                             8                                 9                          10                           11                                  12                                       13                        14                              15                    16                              17                                18                               19                           20
                    input = $("#ddlasssttype").val() + "¥" + '' + "¥" + $("#txt_assetname").val() + "¥" + $("#txt_producttype").val() + "¥" + $("#txt_productname").val() + "¥" + $("#txt_manuf").val() + "¥" + $("#txt_partnu").val() + "¥" + $("#txt_mac").val() + "¥" + $("#txt_purch").val() + "¥" + $("#txt_AgrmntDt").val() + "¥" + $("#txt_sernum").val() + "¥" + $("#txt_DtAgrmntFrm").val() + "¥" + $("#txt_asseloc").val() + "¥" + $("#ddlassetstate option:selected").val() + "¥" + $("#txt_asswithuser").val() + "¥" + asset + "¥" + $("[id*=hdUserId]").val() + "¥" + $("#txt_hostname").val() + "¥" + $("#txt_servtag").val() + "¥" + $("#txt_model").val() + "¥" + $("#txt_manufact").val()
                        //                               21                                   22                               23                               24                              25                             26                           27                            28                                  29                              30                            31                          32                                          33                 34                             35                               36                             37                               38                               39                                 40                               41                           42                43                      44                  45                    46       
                        + "¥" + $("#txt_operatingsy").val() + "¥" + $("#txt_servicepack").val() + "¥" + $("#txt_memory").val() + "¥" + $("#txt_vmemor").val() + "¥" + $("#txt_manufa").val() + "¥" + $("#txt_clock").val() + "¥" + $("#txt_cores").val() + "¥" + $("#txt_ipaddress").val() + "¥" + $("#txt_macaddr").val() + "¥" + $("#txt_nic").val() + "¥" + $("#txt_netw").val() + "¥" + $("#txt_defaultgate").val() + "¥" + $("#txt_dhc").val() + "¥" + $("#txt_modell").val() + "¥" + $("#txt_serno").val() + "¥" + $("#txt_harman").val() + "¥" + $("#txt_hardcapacity").val() + "¥" + $("#txt_monitype").val() + "¥" + $("#txt_moniserno").val() + "¥" + $("#txt_moniman").val() + "¥" + $("#txt_resolution").val() + "¥" + check + "¥" + $("#txt_emp").val() + "¥" + branch + "¥" + $("#ddldep").val() + "¥" + allocation;
                     $.ajax({
                        type: "POST",
                        contentType: "application/json; charset=utf-8",
                        url: "Assetmanagement.aspx/confirmproblem",
                        data: "{QueryString:'" + QueryString + "',input : '" + input + "'}",
                        dataType: "json",
                        success: function (Result) {

                            Result = Result.d;
                            alert('Asset code  :' + Result);

                            window.open('Assetmanagement.aspx', '_self');
                        },

                        error: function (Result) {
                            alert(Result);
                        }
                    });
                }//TEMP
       /*temp=1 ritc or bh      */   else {
 
                    var QueryString = "CONFIRMASSETMSTRitcBh";

                    //                 1                                         2                                     3                              4                                       5                        6                                 7                             8                                 9                          10                           11                                  12                                       13                        14                              15                    16                              17                                18                               19                           20
                    input = $("#ddlasssttype").val() + "¥" + '' + "¥" + $("#txt_assetname").val() + "¥" + $("#txt_producttype").val() + "¥" + $("#txt_productname").val() + "¥" + $("#txt_manuf").val() + "¥" + $("#txt_partnu").val() + "¥" + $("#txt_mac").val() + "¥" + $("#txt_purch").val() + "¥" + $("#txt_AgrmntDt").val() + "¥" + $("#txt_sernum").val() + "¥" + $("#txt_DtAgrmntFrm").val() + "¥" + $("#txt_asseloc").val() + "¥" + $("#ddlassetstate option:selected").val() + "¥" + $("#txt_asswithuser").val() + "¥" + asset + "¥" + $("[id*=hdUserId]").val() + "¥" + $("#txt_hostname").val() + "¥" + $("#txt_servtag").val() + "¥" + $("#txt_model").val() + "¥" + $("#txt_manufact").val()
                        //                  21                                   22                               23                               24                              25                             26                           27                            28                                  29                              30                            31                          32                           33                     34                             35                               36                             37                               38                               39                                 40                               41                           42                43                      44                  45                    46                  47
                        + "¥" + $("#txt_operatingsy").val() + "¥" + $("#txt_servicepack").val() + "¥" + $("#txt_memory").val() + "¥" + $("#txt_vmemor").val() + "¥" + $("#txt_manufa").val() + "¥" + $("#txt_clock").val() + "¥" + $("#txt_cores").val() + "¥" + $("#txt_ipaddress").val() + "¥" + $("#txt_macaddr").val() + "¥" + $("#txt_nic").val() + "¥" + $("#txt_netw").val() + "¥" + $("#txt_defaultgate").val() + "¥" + $("#txt_dhc").val() + "¥" + $("#txt_modell").val() + "¥" + $("#txt_serno").val() + "¥" + $("#txt_harman").val() + "¥" + $("#txt_hardcapacity").val() + "¥" + $("#txt_monitype").val() + "¥" + $("#txt_moniserno").val() + "¥" + $("#txt_moniman").val() + "¥" + $("#txt_resolution").val() + "¥" + check + "¥" + $("#txt_emp").val() + "¥" + branch + "¥" + $("#ddldep").val() + "¥" + allocation;
                    $.ajax({
                        type: "POST",
                        contentType: "application/json; charset=utf-8",
                        url: "Assetmanagement.aspx/assetwaitapprv",
                        data: "{QueryString:'" + QueryString + "',input : '" + input + "'}",
                        dataType: "json",
                        success: function (Result) {

                            Result = Result.d;
                            alert('WAITING FOR APPROVAL OF:' + Result);

                            window.open('Assetmanagement.aspx', '_self');
                        },

                        error: function (Result) {
                            alert(Result);
                        }
                    });




                }




            }//ELSE
        }
    }












var gbid="";


function getgbTABLE() {
    $("#tableShowgb").empty();
    var Querystring;
    $("#tableShowgb").show();
    
   

    var InputString = $("#txt_GB").val() ;

    Querystring = "GetGBSEARCH";



        
        $.ajax({
            type: "POST",
            contentType: "application/json; charset=utf-8",
            url: "Assetmanagement.aspx/getTableGB",
            data: "{QueryStr : '" + Querystring + "',input :'" + InputString + "'}",
            dataType: "json",
            success: function (Result) {
                if (Result.d.length > 0) {
                    $('#tableShowgb').empty();//t.fi_name,t.branch,t.addrss,t.contact_person,t.phone_no,t.mobile_no,t.email_id,t.pan,t.gstn,t.cin
                    $("#tableShowgb").append('<thead class="bg-success text-white">< tr ><th scope="col">GB</th><th scope="col">Summary</th> <th scope="col">Decription</th> <th scope="col">Rep.date</th></tr></thead><tbody class="border border-dark">'
                    );
                    for (var i = 0; i < Result.d.length; i++) {
                        $("#tableShowgb").append('<tr><td>' + Result.d[i].INName + '</td>' +
                           
                            '<td>' + Result.d[i].Summary + '</td>' +
                            '<td>' + Result.d[i].Desc + '</td>' +
                            '<td>' + Result.d[i].Repdate + '</td>' +

                            '</tr >');
                        gbid = Result.d[i].INName;
                        
                    }
                    $("#tableShowgb").append(
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
function assetcode() {

    var QueryString = "GetASSESCODE";
    

    $.ajax({

        type: "POST",
        contentType: "application/json; charset=utf-8",
        url: "Assetmanagement.aspx/getFillassescode",
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
