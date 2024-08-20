function frmExit() {
    window.open("index.aspx", "_self");
}
$(window).on('load', function () {
    debugger;
    $("#SelctType").hide();
    $("#divtblsh").hide();
    $("#tick_sel").hide();
    $("#hide").hide();
    $("#divtbappli").hide();
    $("#txt_frmDt").datepicker({
        dateFormat: 'dd/MM/yy',
        changeMonth: true,
        changeYear: true,
        stepMonths: true,
        todayHighlight: true,
        maxDate: 0,
        onSelect: function (dateText, inst) {

        }
    });
    $('#txt_frmDt').datepicker().datepicker('setDate', new Date());
    $("#txt_ToDt").datepicker({
        dateFormat: 'dd/MM/yy',
        changeMonth: true,
        changeYear: true,
        stepMonths: true,
        todayHighlight: true,
        maxDate: 0,
        onSelect: function (dateText, inst) {
        }
    });
    $('#txt_ToDt').datepicker().datepicker('setDate', new Date());
    

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
    
    $('#tickno_div').hide();
    $('#date_div').hide();
    
    $('#search_div').hide();
    $('input[type="checkbox"]').on('change', function () {
        $('input[type="checkbox"]').not(this).prop('checked', false);
        if ($('#chk_tickno').prop('checked') == true) {
            $('#tickno_div').show();
            $('#date_div').hide();
            $("#MyTable").hide();
            $("#hide").hide();
            $('#search_div').show();
            $('#txt_DtAgrmntTo').val('');
            $('#tblapplication').empty();
            $('#tblpb').empty();
        }
        else if ($('#chk_rpt_frm').prop('checked') == true) {

            $('#tickno_div').hide();
            $("#divtbappli").show();
            $("#MyTable").hide();
            $('#sts_div').hide();
            $("#hide").hide();
            $('#search_div').hide();
            $('#txt_ticketno').val('');
            $('#tblpb').empty();
            searchapplication();
        }
        else if ($('#chk_all').prop('checked') == true) {

            $('#tickno_div').hide();
            $("#divtbappli").hide();
            $("#MyTable").hide();
            $('#sts_div').hide();
            $('#divtblsh').hide();
            $('#search_div').hide();
            $('#tblapplication').empty();
            $('#tblpb').empty();
            $("#hide").show();
        };
      
        $('input[type="checkbox"]').removeEventListener();
    });
});
var tick_arr = '';
var tkp = '';
var g_l_i;
var global_lable_no = [];
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















var gbid="";








function searchapplication() {


    var Querystring;
    var input = '';

    Querystring = "applicationload";
   



    $.ajax({
        type: "POST",
        contentType: "application/json; charset=utf-8",
        url: "softwarediscoveryrpt.aspx/Getsoftd",
        data: "{QueryStr : '" + Querystring + "',input :'" + input + "'}",
        dataType: "json",
        success: function (Result) {

            if (Result.d.length > 0) {
                $('#tblapplication').empty();
                $('#tblapplication').append('<thead class="bg-success text-white">< tr ><th scope="col">Applications</th></tr></thead><tbody class="border border-dark">'
                );
                for (var i = 0; i < Result.d.length; i++) {
                    var r = i + 1;
                    $('#tblapplication').append('<tr>' +
                        
                        '<td><a onclick="gr()" href="#">' + Result.d[i].INName + '</td>' +
                        


                        '</tr >');
                }
                $('#tblapplication').append(
                    '</tbody>');
            }
            else {
                $('#tblapplication').empty();
            }
        },
        error: function (Result) {
            alert(Result);
        }
    });



}
function searchviewforrpt() {

   
    var Querystring;
    $('#divtblsh').show();
    $('#tblpb').show();

    var InputString = $("#txt_ticketno").val() ;

    


  
    
        
        Querystring = "Getsoftwaredishost";
    

    
    $.ajax({
        type: "POST",
        contentType: "application/json; charset=utf-8",
        url: "softwarediscoveryrpt.aspx/GetTble",
        data: "{QueryStr : '" + Querystring + "',input :'" + InputString + "'}",
        dataType: "json",
        success: function (Result) {
            
            if (Result.d.length > 0) {
                $('#tblpb').empty();
                $('#tblpb').append('<thead class="bg-success text-white">< tr ><th scope="col">No.</th><th scope="col">Host Name</th><th scope="col">Application</th><th scope="col">Application Version</th> <th scope="col"> Entered Date</th> </tr></thead><tbody class="border border-dark">'
                );
                for (var i = 0; i < Result.d.length; i++) {
                    var r = i + 1;
                    $('#tblpb').append('<tr>' +
                        '<td>' + r + '</td>' +
                        '<td>' + Result.d[i].INName + '</td>' +
                        '<td>' + Result.d[i].Branchordep + '</td>' +
                        '<td>' + Result.d[i].Summary + '</td>' +
                        '<td>' + Result.d[i].Desc + '</td>' +
                        
                     
                        '</tr >');
                }
                $('#tblpb').append(
                    '</tbody>');
            }
            else {
                $('#tblpb').empty();
            }
        },
        error: function (Result) {
            alert(Result);
        }
    });



}






function gr() {

    $('#tblapplication').find('tr').click(function () {
        var row = $(this).find('td:first').text();



        //alert('You clicked ' + row);
        var dt = row.toString();
        shdetails(dt);
        // WorkLogView(dt);
        $('#tblticket').removeEventListener();




    });




}
function shdetails(tn) {

    var QueryString = "softwareapplisearch";
    var input = tn;

  

    $.ajax({
        type: "POST",
        contentType: "application/json; charset=utf-8",
        url: "softwarediscoveryrpt.aspx/GetTble",
        data: "{QueryStr : '" + QueryString + "',input :'" + input + "'}",
        dataType: "json",
        success: function (Result) {

            if (Result.d.length > 0) {
                $('#tblpb').empty();
                $('#tblpb').append('<thead class="bg-success text-white">< tr ><th scope="col">No.</th><th scope="col">Host Name</th><th scope="col">Application</th><th scope="col">Application Version</th> <th scope="col"> Entered Date</th> </tr></thead><tbody class="border border-dark">'
                );
                for (var i = 0; i < Result.d.length; i++) {
                    var r = i + 1;
                    $('#tblpb').append('<tr>' +
                        '<td>' + r + '</td>' +
                        '<td>' + Result.d[i].INName + '</td>' +
                        '<td>' + Result.d[i].Branchordep + '</td>' +
                        '<td>' + Result.d[i].Summary + '</td>' +
                        '<td>' + Result.d[i].Desc + '</td>' +


                        '</tr >');
                }
                $('#tblpb').append(
                    '</tbody>');
                $('#divtblsh').show();
            }
            else {
                $('#tblpb').empty();
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

function ViewReport() {
    ddl_fromdate = $('#txt_frmDt').val();
    ddl_todate = $('#txt_ToDt').val();
    window.open('SoftwareConsolidateRpt.aspx?ddl_fromdate= ' + ddl_fromdate + ' &ddl_todate=' + ddl_todate + '', '_self');
}