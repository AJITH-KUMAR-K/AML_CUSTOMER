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
    //Getassettype();
    //GetAssetstate();
    //Getdepartment();
    CheckAsstmngRitc();
   // UserAssetTview();
    //GetBranchLst();
    //assetcode();
   
    //$("#txt_ReportedBy").val( $("[id*=hduname]").val());
   
    $("#txt_purchdte").datepicker({
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

    $("#txt_expdte").datepicker({
        dateFormat: 'dd/MM/yy',
        changeMonth: true,
        changeYear: true,
        stepMonths: true,
        todayHighlight: true,
        onSelect: function (dateText, inst) {

        }
    });

});
//---------------angelo---------------
var bh_ritc;
//function check
function CheckAsstmngRitc() {
    var QueryString = "approvalperchk";
    var input = $("[id*=hdUserId]").val();
    $.ajax({

        type: "POST",
        contentType: "application/json; charset=utf-8",
        url: "assettransferapproval.aspx/check_ritc_asstmng",
        data: "{QueryString:'" + QueryString + "',input : '" + input + "'}",
        dataType: "json",
        success: function (Result) {
            bh_ritc = Result.d;
              if (Result.d.length > 0) {
                 if (Result.d > 0) {
                     UserAssetTview();
                    
                }
                else {

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

//check asset manager or ritc or bh or abh
function UserAssetTview() {
    var Temp = 0;
    var InputString = $("[id*=hdUserId]").val();
   
   
        $('#divtblPrincpleIntDtl').show();
        $('#tblticket').show();
    var Querystring = "assettransferlst"; /*"WaitingForRITCVer";*/
        $.ajax({
            type: "POST",
            contentType: "application/json; charset=utf-8",
            url: "assettransferapproval.aspx/GetUserTbleview",
            data: "{QueryStr : '" + Querystring + "',input :'" + InputString + "'}",
            dataType: "json",
            success: function (Result) {
                if (Result.d.length > 0) {
                    $('#tblticket').empty();
                    $('#tblticket').append('<thead class="bg-success text-white">< tr ><th scope="col">Requested Date</th><th scope="col">Requested by</th><th scope="col">Requested from</th><th scope="col">Asset code</th> <th scope="col">Asset type</th><th scope="col">Transfer/Dispose</th></tr></thead><tbody class="border border-dark">');
                    for (var i = 0; i < Result.d.length; i++) {
                        $('#tblticket').append('<tr><td>' + Result.d[i].requ_dte + '</td>' +
                            '<td>' + Result.d[i].req_by + '</td>' +
                            '<td>' + Result.d[i].req_frm + '</td>' +
                            '<td>' + Result.d[i].ass_code + '</td>' +
                            '<td>' + Result.d[i].ass_typ + '</td>' +
                            '<td>' + Result.d[i].trsn_disp + '</td>' +
                            '</tr>');
                    }
                    $('#tblticket').append(
                        '</tbody>');
                } else {

                    alert('No Entries Found');
                }
            },
            error: function (Result) {
                alert(Result);
            }
        });
    


}

//ritc verification details

function ritc_ver_dtl(asstcode) {
    var Temp = 0;
    var InputString = asstcode;

    var Querystring = "ritc_ver_dtl"; /*"WaitingForRITCVer";*/
    $.ajax({
        type: "POST",
        contentType: "application/json; charset=utf-8",
        url: "assettransferapproval.aspx/get_ritc_ver",
        data: "{QueryString : '" + Querystring + "',input :'" + InputString + "'}",
        dataType: "json",
        success: function (Result) {
            if (Result.d.length > 0) {
                Result = Result.d.split('^');
                $('#txt_ritc_emp_code').val(Result[0]);
                $('#txt_ritc_nme').val(Result[1]);
                $('#txt_ritc_appr_dte').val(Result[2]);
                $('#txt_ritc_appr_sts').val(Result[3]);
                $('#txt_ritc_apprv_reason1').val(Result[4]);
            } else {

                alert('No Entries Found');
            }
        },
        error: function (Result) {
            alert(Result);
        }
    });



}


function GetselAsstDTL(asstcode) {

    var QueryString = "appprvasstlst";
    var input = asstcode;

    $.ajax({

        type: "POST",
        contentType: "application/json; charset=utf-8",
        url: "assettransferapproval.aspx/getbran",
        data: "{QueryString:'" + QueryString + "',input : '" + input + "'}",
        dataType: "json",
        success: function (Result) {
            $("#emname").show();
            Result = Result.d.split("^");
            $('#txt_assignto').val(Result[0]);
            $('#txt_assigncode').val(Result[1]);
            $('#txt_assignedby').val(Result[2]);
            $('#txt_assignednme').val(Result[3]);

        },
        error: function (Result) {

            alert(Result);
        }


    });

}


function transf_dispose_dtl(asstcode) {

    var QueryString = "appprvlstdtltransfer";
    var input = asstcode;
    $.ajax({

        type: "POST",
        contentType: "application/json; charset=utf-8",
        url: "assettransferapproval.aspx/get_tran_disp_dtl",
        data: "{QueryString:'" + QueryString + "',input : '" + input + "'}",
        dataType: "json",
        success: function (Result) {
            Result = Result.d.split("^");
            if (Result[0] == 1) {
                $('#transfer_dtl').removeClass('d-none');
                $('#dispsoe_dtl').addClass('d-none');
                $('#txt_trans_req').val(Result[1]);
                $('#txt_req_dte').val(Result[2]);
                $('#txt_trans_frm').val(Result[3]);
                $('#txt_trans_frm_nme').val(Result[4]);
                $('#txt_trans_to').val(Result[5]);
                $('#txt_trans_to_nme').val(Result[6]);
                $('#txt_tranf_reason').val(Result[7]);
            } else {
                $('#transfer_dtl').addClass('d-none');
                $('#dispsoe_dtl').removeClass('d-none');
                $('#txt_dispos_req').val(Result[1]);
                $('#txt_disps_dte').val(Result[2]);
                $('#txt_disp_frm').val(Result[3]);
                $('#txt_disp_nme').val(Result[4]);
                $('#txt_disp_desc').val(Result[7]);

            }
            if (bh_ritc == 2) {
                $('#div_ritc_ver_dtl').removeClass('d-none');
                ritc_ver_dtl(asstcode);

            } else {

                $('#div_ritc_ver_dtl').addClass('d-none');

            }
        },
        error: function (Result) {

            alert(Result);
        }


    });

}


var asstcode;
function gr1() {

    $('#tblticket').find('tr').click(function () {
        var row = $(this).find('td:eq(3)').text();
        //var tr_dis = $(this).find('td:eq(3)').text();
        //assttyp = $(this).find('td:eq(3)').text();
        asstcode = row;
        GetselAsstDTL(row);
        transf_dispose_dtl(row);

        //shdetails(row);
        //WorkLogView(row);
        // global_tickno = row;
        $('#tblticket').removeEventListener();


    });


}





function ApprovalSubmit() {
   // var app_rej = n;
    //var asset = 3, allocation = '';
    var appr_sts;
    
    allocation = 1;

    var QueryString = "CONFIRMASSETMSTBhRitc";


    if ($("#approve").prop("checked") == true) {
        appr_sts = 2;

    }
    else if ($("#reject").prop("checked") == true) {
        appr_sts = 3;

    }



 

    if (bh_ritc == 1) {
        QueryString = 'ritc_transfer_verif';
        //               1                          
        var input = $("[id*=hdUserId]").val() + "¥" + appr_sts + "¥" + asstcode + "¥" + $('#txt_approve_reason').val();
        $.ajax({
            type: "POST",
            contentType: "application/json; charset=utf-8",
            url: "assettransferapproval.aspx/confirmproblem",
            data: "{QueryString:'" + QueryString + "',input : '" + input + "'}",
            dataType: "json",
            success: function (Result) {

                Result = Result.d;
                alert(Result);

                window.open('assettransferapproval.aspx', '_self');
            },

            error: function (Result) {
                alert(Result);
            }
        });
    }//if
    else if (bh_ritc == 2) {
        QueryString = "asstmng_transfer_verif";
        var input = $("[id*=hdUserId]").val() + "¥" + appr_sts + "¥" + asstcode + "¥" + $('#txt_approve_reason').val();       
        $.ajax({
            type: "POST",
            contentType: "application/json; charset=utf-8",
            url: "assettransferapproval.aspx/confirmproblem",
            data: "{QueryString:'" + QueryString + "',input : '" + input + "'}",
            dataType: "json",
            success: function (Result) {

                Result = Result.d;
                alert('Asset code  :' + Result);

                window.open('assettransferapproval.aspx', '_self');
            },

            error: function (Result) {
                alert(Result);
            }
        });


    }

    //  }   else
}





//function CheckAsstmngRitc() {

//    var QueryString = "AssMngRitcBhcheck";
//    var input = $("#txt_emp").val();

//    $.ajax({

//        type: "POST",
//        contentType: "application/json; charset=utf-8",
//        url: "assettransferapproval.aspx/getbran",
//        data: "{QueryString:'" + QueryString + "',input : '" + input + "'}",
//        dataType: "json",
//        success: function (Result) {
//            if (Result.d.length > 0) {
//                if (Result.d == 0) {
//                    alert('You Are Not Autherized To View This Page..!!');
//                }
                



//            }




//        },
//        error: function (Result) {

//            alert(Result);
//        }


//    });

//}



//branch list
function GetBranchLst() {
     var QueryStr= "branchListRitcBh";
    var InputString = $("[id*=hdUserId]").val();
     $.ajax({
        type: "POST",
        contentType: "application/json; charset=utf-8",
        url: "assettransferapproval.aspx/getRitcBh",
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


//------------------angelo----------
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
        url: "assettransferapproval.aspx/getAssignto",
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
        url: "assettransferapproval.aspx/getAssignto",
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
        url: "assettransferapproval.aspx/getAssettype",
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
        url: "assettransferapproval.aspx/getbran",
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
            url: "assettransferapproval.aspx/getbran",
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

function AddASSETMANAGEMENT(n) {
    alert(n);
    var app_rej = n;
    workstation();
    var asset=3, allocation='';
    //if ($("#branch").prop("checked") == true) {
    //    allocation = 1;
    //    if ($("#txt_branch").val() == "") {
    //        ModelPopWarning("Please enter branch id");
            
    //        return false;
    //    }

    //}
    //else if ($("#emp").prop("checked") == true) {
    //    allocation = 2;
    //    if ($("#txt_emp").val() == "") {
    //        ModelPopWarning("Please enter emp code");
           
    //        return false;
    //    }

    //}
    //else if ($("#dep").prop("checked") == true) {
    //    allocation = 3;
    //    if ($("#ddldep").val() == "-1") {
    //        ModelPopWarning("Please select  Department");

    //        return false;
    //    }
    //}
    allocation = 1;

    var QueryString = "CONFIRMASSETMSTBhRitc";


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
    //else if ($("#txt_assetname").val() == "") {
    //    ModelPopWarning("Please enter asset name");
    //    //alert("Please Enter bank Name");
    //    return false;
    //}
    //else if ($("#ddlassetstate").val() == "-1") {
    //    ModelPopWarning("Please select Asset state");
    //    //alert("Please Enter Branch Name");
    //    return false;
    //} else if ($("#Brnchlst").val() == "-1") {
    //    ModelPopWarning("Please select branch");
    //    return false;
    //}
    //else {

    if (bh_ritc == 1) {
        alert($("#ddlassetstate").val());
        QueryString = 'ritcverification';
        //               1                           2              3                                  4                                               5                         6                                7                            8                        9                              10                               11                              12                                   13                               14                            15                             16                     17                              18                          19                                 20
        var input = $("#txt_asst_typ").val() + "¥" + '' + "¥" + $("#txt_assnme").val() + "¥" + $("#txt_prodtyp").val() + "¥" + $("#txt_pronme").val() + "¥" + $("#txt_manuname").val() + "¥" + $("#txt_partno").val() + "¥" + $("#txt_macadd").val() + "¥" + $("#txt_purchcost").val() + "¥" + $("#txt_purchdte").val() + "¥" + $("#txt_serialno").val() + "¥" + $("#txt_expdte").val() + "¥" + $("#txt_assetloc").val() + "¥" + $("#ddlassetstate option:selected").val() + "¥" + $("#txt_associatewith").val() + "¥" + asset + "¥" + $("#txt_hostname").val() + "¥" + $("#txt_servicetag").val() + "¥" + $("#txt_Model").val() + "¥" + $("#txt_Manufacturer").val()
                //               21                                 22                          23                            24                           25                                        26                               27                                   28                                29                            30                              31                               32                               33                           34                               35                                36                                        37                                   38                               39                                   40                                      41                             42             43                            44                                                 45            46
            + "¥" + $("#txt_OS").val() + "¥" + $("#txt_ServicePack").val() + "¥" + $("#txt_Memory").val() + "¥" + $("#txt_virtualmemory").val() + "¥" + $("#txt_Manufacture").val() + "¥" + $("#txt_clockspeed").val() + "¥" + $("#txt_NoOfCores").val() + "¥" + $("#txt_IPaddress").val() + "¥" + $("#txt_macaddress").val() + "¥" + $("#txt_NIC").val() + "¥" + $("#txt_Network").val() + "¥" + $("#txt_DefaultGateway").val() + "¥" + $("#txt_dhcp").val() + "¥" + $("#txt_HModel").val() + "¥" + $("#txt_SerialNumber").val() + "¥" + $("#txt_HManufacturer").val() + "¥" + $("#txt_HDcapacity").val() + "¥" + $("#txt_MonitType").val() + "¥" + $("#txt_monSerialNumber").val() + "¥" + $("#txt_MonManufacturer").val() + "¥" + $("#txt_Resolution").val() + "¥" + check + "¥" + app_rej /*approval*/ + "¥" + $("[id*=hdUserId]").val() /*approved by*/ + "¥" + asstcode + "¥" + 1 /*asst_manager_approval*//*+ "¥" + $("#txt_emp").val() + "¥" + $("#txt_branch").val() + "¥" + $("#ddldep").val() + "¥" + allocation*/;
        alert(input);
        $.ajax({
                type: "POST",
                contentType: "application/json; charset=utf-8",
                url: "assettransferapproval.aspx/confirmproblem",
                data: "{QueryString:'" + QueryString + "',input : '" + input + "'}",
                dataType: "json",
                success: function (Result) {

                    Result = Result.d;
                    alert(Result);

                    window.open('assettransferapproval.aspx', '_self');                       
                },

                error: function (Result) {
                    alert(Result);
                }
            });
        }//if
    else if (bh_ritc == 2) {
        QueryString = "Assetmanagerverification";
        alert($("#ddlassetstate").val());
            //                    1                       2              3                               4                                       5                                6                              7                               8                            9                           10                                 11                            12                                  13                                  14                               15                            16              17                              18                                19                               20                            
        var input = $("#txt_asst_typ").val() + "¥" + '' + "¥" + $("#txt_assnme").val() + "¥" + $("#txt_prodtyp").val() + "¥" + $("#txt_pronme").val() + "¥" + $("#txt_manuname").val() + "¥" + $("#txt_partno").val() + "¥" + $("#txt_macadd").val() + "¥" + $("#txt_purchcost").val() + "¥" + $("#txt_purchdte").val() + "¥" + $("#txt_serialno").val() + "¥" + $("#txt_expdte").val() + "¥" + $("#txt_assetloc").val() + "¥" + $("#ddlassetstate option:selected").val() + "¥" + $("#txt_associatewith").val() + "¥" + asset + "¥" + $("#txt_hostname").val() + "¥" + $("#txt_servicetag").val() + "¥" + $("#txt_Model").val() + "¥" + $("#txt_Manufacturer").val()
//                                21                          22                             23                                24                            25                                  26                              27                                 28                               29                                 30                            31                             32                                       33                            34                             35                               36                                     37                                   38                               39                                       40                                     41                              42             43              44                             45
            + "¥" + $("#txt_OS").val() + "¥" + $("#txt_ServicePack").val() + "¥" + $("#txt_Memory").val() + "¥" + $("#txt_virtualmemory").val() + "¥" + $("#txt_Manufacture").val() + "¥" + $("#txt_clockspeed").val() + "¥" + $("#txt_NoOfCores").val() + "¥" + $("#txt_IPaddress").val() + "¥" + $("#txt_macaddress").val() + "¥" + $("#txt_NIC").val() + "¥" + $("#txt_Network").val() + "¥" + $("#txt_DefaultGateway").val() + "¥" + $("#txt_dhcp").val() + "¥" + $("#txt_HModel").val() + "¥" + $("#txt_SerialNumber").val() + "¥" + $("#txt_HManufacturer").val() + "¥" + $("#txt_HDcapacity").val() + "¥" + $("#txt_MonitType").val() + "¥" + $("#txt_monSerialNumber").val() + "¥" + $("#txt_MonManufacturer").val() + "¥" + $("#txt_Resolution").val() + "¥" + check + "¥" + app_rej+ "¥" + $("[id*=hdUserId]").val() + "¥" + asstcode /*+ "¥" + $("#txt_emp").val() + "¥" + $("#txt_branch").val() + "¥" + $("#ddldep").val() + "¥" + allocation*/;
        alert(input);
        $.ajax({
                type: "POST",
                contentType: "application/json; charset=utf-8",
                url: "assettransferapproval.aspx/confirmproblem",
                data: "{QueryString:'" + QueryString + "',input : '" + input + "'}",
                dataType: "json",
                success: function (Result) {

                    Result = Result.d;
                    alert('Asset code  :' + Result);

                    window.open('assettransferapproval.aspx', '_self');
                },

                error: function (Result) {
                    alert(Result);
                }
            });









        }
                
        //  }   else
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
            url: "assettransferapproval.aspx/getTableGB",
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
var asstcode;
var assttyp;
function gr() {

    $('#tblticket').find('tr').click(function () {
        var row = $(this).find('td:first').text();
        assttyp = $(this).find('td:eq(1)').text();
        shAstDetails(row);
        shWRkSDetails(row);
        asstcode = row;
        //shdetails(row);
        //WorkLogView(row);
        // global_tickno = row;
        $('#tblticket').removeEventListener();



    });



}



function shAstDetails(AsstCd) {

    //alert('login into shdetails');
    // AssetId = $('#ddlUassets option:selected').val();
    var temp1;
    var temp2;
    
    var QueryString = "GetUassetDetailstmp";
    var input = AsstCd;



    $.ajax({



        type: "POST",
        contentType: "application/json; charset=utf-8",
        url: "assettransferapproval.aspx/AssetV",
        data: "{QueryString:'" + QueryString + "',input : '" + input + "'}",
        dataType: "json",
        success: function (Result) {
            if (Result.d.length > 0) {
                Result = Result.d.split("^");
                alert(Result[12]);
                temp1 = Result[8].split(' ');
                temp2 = Result[10].split(' ');
                $('#txt_asst_typ').val(assttyp);
                $('#txt_assetcode').val(Result[0]);
                $('#txt_assnme').val(Result[1]);
                $("#txt_prodtyp").val(Result[2]);
                $("#txt_pronme").val(Result[3]);
                $('#txt_manuname').val(Result[4]);
                $('#txt_partno').val(Result[5]);
                $('#txt_macadd').val(Result[6]);
                $('#txt_purchcost').val(Result[7]);
                $('#txt_purchdte').val(temp1[0]);
                $('#txt_serialno').val(Result[9]);
                $('#txt_expdte').val(temp2[0]);
                $('#txt_assetloc').val(Result[11]);
                //$("#ddlassetstate option[value='" + Result[12]+"']").attr("selected", "selected");
                $('#ddlassetstate option[value="'+Result[12]+'"]').prop('selected', true);
                //$('#ddlassetstate option:selected').text(Result[12]);
                $('#txt_associatewith').val(Result[13]);
                if (Result[14] == 1) {
                    $('#radGYes').prop("checked", true);
                    $('#radGNo').prop("checked", false);
                }
                else if (Result[14] == 0) {
                    $('#radGNo').prop("checked", true);
                    $('#radGYes').prop("checked", false);
                    //$('#txt_description').val(Result[13]);
                    //$('#txt_impci').val(Result[14]);
                    //$('#ddlstatus').val(-1);
                }
                $('#txt_assignto').val(Result[15]);
                $('#txt_assigncode').val(Result[16]);
                $('#txt_assignedby').val(Result[17]);
                $('#txt_assignednme').val(Result[18]);

            } else {

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
    var QueryString = "GetWorkstationtmp";
    var input = Asstcd;
    $.ajax({
        type: "POST",
        contentType: "application/json; charset=utf-8",
        url: "assettransferapproval.aspx/WOKSTDET",
        data: "{QueryString:'" + QueryString + "',input : '" + input + "'}",
        dataType: "json",
        success: function (Result) {

            if (Result.d.length > 0) {
                $('#work').slideDown();
                Result = Result.d.split("^");
                $('#txt_hostname').val(Result[0]);
                $('#txt_servicetag').val(Result[1]);
                $("#txt_Model").val(Result[2]);
                $("#txt_Manufacturer").val(Result[3]);
                $('#txt_OS').val(Result[4]);
                $('#txt_ServicePack').val(Result[5]);
                $('#txt_Memory').val(Result[6]);
                $('#txt_virtualmemory').val(Result[7]);
                $('#txt_Manufacture').val(Result[8]);
                $('#txt_clockspeed').val(Result[9]);
                $('#txt_NoOfCores').val(Result[10]);
                $('#txt_IPaddress').val(Result[11]);
                $('#txt_macaddress').val(Result[12]);
                $('#txt_NIC').val(Result[13]);
                $('#txt_Network').val(Result[14]);
                $('#txt_DefaultGateway').val(Result[15]);
                $('#txt_dhcp').val(Result[16]);
                $('#txt_HModel').val(Result[17]);
                $('#txt_SerialNumber').val(Result[18]);
                $('#txt_HManufacturer').val(Result[19]);
                $('#txt_HDcapacity').val(Result[20]);
                $('#txt_MonitType').val(Result[21]);
                $('#txt_monSerialNumber').val(Result[22]);
                $('#txt_MonManufacturer').val(Result[23]);
                $('#txt_Resolution').val(Result[24]);
            } else {

                $('#work').slideUp();
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
        url: "assettransferapproval.aspx/getFillassescode",
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