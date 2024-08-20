function frmExit() {
    window.open("index.aspx", "_self");
}
$(window).on('load', function () {
    $("#SelctType").hide();
    $("#tableShowIN").hide();
    $("#txt_dev").val($("[id*=hduname]").val());
    GetReleaseCategory();
    GetType();
    

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
//            alefrt(Result);
//        }
        
//    });
   
//}

/*-------end------*/

/*---------start-Dropdown  Requesttype-----*/

function GetType() {
    var input = $("[id*=hdUserId]").val();
    var QueryString = "GETCRFID";
    $.ajax({
        type: "POST",
        contentType: "application/json; charset=utf-8",
        url: "ReleaseRequest.aspx/Gettype",
        data: "{QueryString:'" + QueryString + "',input : '" + input + "'}",
        dataType: "json",
        success: function (Result) {
            $('#ddlcrf').empty();
            $('#ddlcrf').append($("<option></option>").val("-1").html("Select CRF ID "));
            $.each(Result.d, function (data, value) {
                
                $('#ddlcrf').append($("<option></option>").val(value.ReqId).html(value.ReqName));
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


/*---------start-Dropdown  source-----*/

function GetReleaseCategory() {
   
    var QueryString = "GetReleaseCategory";
    $.ajax({
        
        type: "POST",
        contentType: "application/json; charset=utf-8",
        url: "ReleaseRequest.aspx/GetReleaseCategory",
        data: "{QueryString:'" + QueryString + "'}",
        dataType: "json",
        success: function (Result) {
            $('#ddlcategory').empty();
            $('#ddlcategory').append($("<option></option>").val("-1").html("Select Category "));
            $.each(Result.d, function (data, value) {
                $('#ddlcategory').append($("<option></option>").val(value.ASId).html(value.ASName));
                
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

function releaseconfirm() {
    var asset;
    var QueryString = "confirmrelease";
    //if ($("#radSR").prop("checked") == true) {
    //    asset = 1;

    //}
    //else if ($("#radIN").prop("checked") == true) {
    //    asset = 0;

    //}



    if ($("#ddlcrf").val() == "-1") {
        ModelPopWarning("Please Select CRF ID");
        //alert("Please Select Financial Type");
        return false;
    }
    else if ($("#txt_parent").val() == "") {
        ModelPopWarning("Please enter Parent App");
        //alert("Please Enter bank Name");
        return false;
    }
 
    else if ($("#txt_summary").val() == "") {
        ModelPopWarning("Please Enter Summary of change");
        //alert("Please Enter Branch Name");
        return false;
    }
    else if ($("#txt_tester").val() == "") {
        ModelPopWarning("Please Enter Tester");
        //alert("Please Enter Branch Name");
        return false;
    }

    else if ($("#txt_coderew").val() == "") {
        ModelPopWarning("Please Enter Code Review");
        //alert("Please Enter Branch Name");
        return false;
    }

    else if (changeno == "") {
        ModelPopWarning("Please Select Change Request Number"); 
        //alert("Please Enter Branch Name");
        return false;
    }

    else {
    
        var input = changeno + "¥" + $("[id*=hdUserId]").val() + "¥" + $("#ddlcrf").val() + "¥" + $("#txt_parent").val() + "¥" + $("#txt_summary").val() + "¥" + $("#txt_tester").val() + "¥" + $("#txt_coderew").val() ;
                    $.ajax({
                        type: "POST",
                        contentType: "application/json; charset=utf-8",
                        url: "ReleaseRequest.aspx/confirmrelease",
                        data: "{QueryString:'" + QueryString + "',input : '" + input + "'}",
                        dataType: "json",
                        success: function (Result) {
                            //alert(Result.d);
                            Result = Result.d;
                           alert('Release Request ID:'+Result);
                            //SaveuploadData(Result);
                            window.open('ReleaseRequest.aspx', '_self');

                        },

                        error: function (Result) {
                            alert(Result);
                        }
                    });

                
          }
 }

    












var changeno='';
function getchangeTABLE() {
    $("#tablech").empty();
    var Querystring;
    $("#tablech").show();
    
    changeno = $("#txt_ch").val();

    var InputString = $("#txt_ch").val() ;

    Querystring = "GETCHSEARCH";



        
        $.ajax({
            type: "POST",
            contentType: "application/json; charset=utf-8",
            url: "ReleaseRequest.aspx/getTblchnge",
            data: "{QueryStr : '" + Querystring + "',input :'" + InputString + "'}",
            dataType: "json",
            success: function (Result) {
                if (Result.d.length > 0) {
                    $('#tablech').empty();//t.fi_name,t.branch,t.addrss,t.contact_person,t.phone_no,t.mobile_no,t.email_id,t.pan,t.gstn,t.cin
                    $("#tablech").append('<thead class="bg-success text-white">< tr ><th scope="col">Change Request No</th><th scope="col">Reported Date</th> </tr></thead><tbody class="border border-dark">'
                    );
                    for (var i = 0; i < Result.d.length; i++) {
                        $("#tablech").append('<tr><td>' + Result.d[i].INName + '</td>' +
                           
                            '<td>' + Result.d[i].Summary + '</td>' +
                          

                            '</tr >');
                    }
                    $("#tablech").append(
                        '</tbody>');
                }
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