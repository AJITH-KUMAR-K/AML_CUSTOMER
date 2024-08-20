var valgst;
function frmExit() {
    window.open("index.aspx", "_self");
}
$(window).on('load', function () {
    //$("#ShwDiv").hide();
    $("#ShowtblDiv").hide();
    clear();
    getFIdtls();
    getFeeLedger();
   
});
function clear() {    
    $("#txtMainAcc").val('');
    $("#txtLoanSubAcc").val('');
    $("#txt_Prcssfee").val('');
    $("#txt_gst").val('');
    $("#txt_IGst").val('');
    $("#txt_SGst").val('');
    $("#txt_CGst").val('');

    LoanSubAccName.innerHTML = '';
    processFeeWords.innerHTML = '';
    LoanAccName.innerHTML = '';

    $("[id*=hdAcMain]").val('');
    $("[id*=hdnLoanSubAcc]").val('');
    $("#radInclude").prop('checked', false);
    $("#radExclude").prop('checked', false);
}
//------NUMBER VALIDATION-----
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
//---------------------
function getFIdtls() {
    clear();
    $("#ddl_Loan").empty();
    $('#tableShowLoans').empty();
    var InputString = "GetFiProcessinFee";
    $.ajax({
        type: "POST",
        contentType: "application/json; charset=utf-8",
        url: "ProcessingFee.aspx/GetFIDtls",
        data: "{input:'" + InputString + "'}",
        dataType: "json",
        success: function (Result) {
            $('#ddl_fI').empty();
            $('#ddl_fI').append($("<option></option>").val("-1").html("Select Financial Institution "));
            $.each(Result.d, function (data, value) {
                $('#ddl_fI').append($("<option></option>").val(value.ID).html(value.Name));
            })
        },
        error: function (Result) {
            alert(Result);
        }
    });
}

function GetFundDtls() {
    clear();
    $("#ddl_Loan").empty();
    $('#tableShowLoans').empty();
    var QueryString = "GetProcessFeeFund";
    $.ajax({
        type: "POST",
        contentType: "application/json; charset=utf-8",
        url: "ProcessingFee.aspx/getLoan",
        data: "{QueryString:'" + QueryString + "',input : '" + $('#ddl_fI').val() + "'}",
        dataType: "json",
        success: function (Result) {
            $('#ddl_Loan').empty();
            $('#ddl_Loan').append($("<option></option>").val("-1").html("Select Fund "));
            $.each(Result.d, function (data, value) {
                $('#ddl_Loan').append($("<option></option>").val(value.Id).html(value.entrdt).html(value.Id).html(value.finme));
            })
        },
        error: function (Result) {
            alert(Result);
        }
    });
}

function getFITableDtls() {
    clear();
    $("#ShowtblDiv").show();
    $("#tableShowFI").show();
    $('#tableShowLoans').empty();
    var InputString = $("#ddl_Loan").val();
    var Querystring = "GetLoanTable";
    $.ajax({
        type: "POST",
        contentType: "application/json; charset=utf-8",
        url: "ProcessingFee.aspx/ShowLoans",
        data: "{QueryStr : '" + Querystring + "',input :'" + InputString + "'}",
        dataType: "json",
        success: function (Result) {
            if (Result.d.length > 0) {
                $('#tableShowLoans').empty();
                $("#tableShowLoans").append('<thead class="bg-inverse text-white"><tr><th scope="col">Fund_Type</th> <th scope="col">Fund</th> <th scope="col">FI_Type </th><th scope="col">FI_Name</th><th scope="col">EnteredDate</th><th scope="col">FromDate</th><th scope="col">ToDate</th><th scope="col">EnteredBy</th><th scope="col">Amount</th><th scope="col">ROI</th><th scope="col">Personal_Guarantee</th></tr ></thead><tbody class="border border-dark">'
                );
                for (var i = 0; i < Result.d.length; i++) {
                    $("#tableShowLoans").append('<tr><td>' + Result.d[i].srcnm + '</td>' +
                        '<td>' + Result.d[i].fnd + '</td>' +
                        '<td>' + Result.d[i].fityp + '</td>' +
                        '<td>' + Result.d[i].fi + '</td>' +
                        '<td>' + Result.d[i].AEdt + '</td>' +
                        '<td>' + Result.d[i].Afrmdt + '</td>' +
                        '<td>' + Result.d[i].Atodt + '</td>' +
                        '<td>' + Result.d[i].Enme + '</td>' +
                        '<td>' + Result.d[i].amnt + '</td>' +
                        '<td>' + Result.d[i].roi + '</td>' +
                        '<td>' + Result.d[i].PersGr + '</td>' +
                        '</tr >');
                }
                $("#tableShowLoans").append(
                    '</tbody>');
                Gstsectionstage();
            }
        }
    })
}

function getFIType() {
    //setTimeout(function () {

        var QueryString = $("#ddl_fI").val();
        var InputString = "GetFITypeDtl";
        $.ajax({
            type: "POST",
            contentType: "application/json; charset=utf-8",
            url: "ProcessingFee.aspx/GetFITypeDtls",
            data: "{input:'" + InputString + "',QryStr : '" + QueryString + "'}",
            dataType: "json",
            success: function (Result) {
                $("#txt_FiTyp").val(Result.d.split("µ")[0]);
                $("#txt_FundID").val(Result.d.split("µ")[1]);
                $("#txt_LoanAmnt").val(Result.d.split("µ")[2]);
                Gstsectionstage();
            },
            error: function (Result) {
                alert(Result);
            }
        });
       
    //}, 500);
}

function AddProcssingFeeDtl() {
    var Igstval, inExPF;
    //if ($("#chk_pf").prop("checked")) {
    //     inExPF = 1;
    //}
    //else {
    //    inExPF = 0;
    //}
    if ($("#radInclude").prop("checked")) {
        inExPF = 1;
    }
    else if ($("#radExclude").prop("checked")) {
        inExPF = 2;
    }


    if (valgst == 1) {
        Igstval = 0;
        scgst = $("#txt_SGst").val();
        Cgst = $("#txt_CGst").val();
    }
    else if (valgst == 2) {
        Igstval = $("#txt_IGst").val();
        scgst = 0;
        Cgst = 0;
    }
   if ($("#ddl_fI").val() == "-1") {
        //alert("Please Select Financial Institution");
       ModelPopWarning("Please Select Financial Institution...!!!");
        return false;
   }
   else if ($("#ddl_Loan").val() == "-1") {
       ModelPopWarning("Please Select Fund...!!!");
       return false;
   }
    else if ($("#txtMainAcc").val() == "") {
        //alert("Please Select Main Account");
       ModelPopWarning("Please Select Main Account...!!!");
        return false;
   }
   else if ($("#radInclude").prop("checked") == false && $("#radExclude").prop("checked") == false) {
       alert("Please select Processing Fee Included or not...!!!");
       return false;
   }
   //else if ($("#txtLoanSubAcc").val() == "") {
   //     //alert("Please Select Sub Account");
   //    ModelPopWarning("Please Select Sub Account...!!!");
   //     return false;
   // }
    else if ($("#txt_Prcssfee").val() == "") {
        //alert("Please Enter Processing Fee");
       ModelPopWarning("Please Enter Processing Fee...!!!");
        return false;
    }
    else if ($("#txt_gst").val() == "") {
        //alert("Please Enter GST Rate");
       ModelPopWarning("Please Enter GST Rate...!!!");
        return false;
    }
    else {
       var InputData = $("#ddl_Loan").val() + "µ" + $("#txt_Prcssfee").val() + "µ" + $("#txt_gst").val() + "µ" + Igstval + "µ" + scgst + "µ" + Cgst + "µ" + $("#txtLoanSubAcc").val() + "µ" + $("#txtMainAcc").val() + "µ" + inExPF + "µ" + $("[id*=hdUserId]").val();
        //alert(InputData);
        $.ajax({
            type: "POST",
            contentType: "application/json; charset=utf-8",
            url: "ProcessingFee.aspx/AddProcessingFee",
            data: "{input:'" + InputData + "'}",
            dataType: "json",
            success: function (Result) {
                alert(Result.d);
                window.open('ProcessingFee.aspx', '_self');
                //$("#ddl_fI").val('-1');
                //$("#txt_Prcssfee").val('');
                //$("#txtMainAcc").val('');
                //$("#txt_LoanAmnt").val('');
                //$("#txt_FundID").val('');
                //$("#txtSubAcc").val('');
                //$("#txt_gst").val('');
                //$("#txt_IGst").val('');
                //$("#txt_SGst").val('');
                //$("#txt_CGst").val('');
                //$("#radInclude").prop('checked', false);
            },
            error: function (Result) {
                alert(Result);
            }
        });
         }
}

function ModelPopSuccess(msg) {
    $("#successMsgContent").html(msg);
    //jQuery("#centralModalDanger").modal('show');
    $("#centralModalSuccess").modal("show");
}
function ModelPopWarning(msg) {
    $("#warnMsgContent").html(msg);
    //jQuery("#centralModalWarning").modal('show');
    $("#centralModalWarning").modal("show");
}

function CalcGst(gstValue, min, max) {
    if (!isNaN(gstValue)) {
        if (gstValue > max)
            gstValue = max;
        if (gstValue < min)
            gstValue = min;
    } else {
        gstValue = 0;
    }
        var proc = $("#txt_Prcssfee").val();
       var Gstrate = $("#txt_gst").val(); 
    var gstValue1 = proc * (gstValue / 100);
    fillgstrate(gstValue1);
}

function Gstsectionstage() {
          var gstdata;
    var QuerString = "GSTRATE";
  
    $.ajax({
        type: "post",
        contentType: "application/json; charset=utf-8",
        url: "ProcessingFee.aspx/getgststage",
        data: "{typ:'" + QuerString + "',data:'" + $('#ddl_Loan').val() + "'}",
        dataType: "json",
        success: function (Result) {
           // alert(Result.d);
            gstdata = Result.d.split('^');
          //  alert(gstdata[0]);
           // alert(gstdata[2]);
            if (gstdata[0] == gstdata[2]) {

                valgst = 1;
            }
            else {

                valgst = 2;
            }
             $("[id*=hdGstValue]").val(valgst);
        },
        error: function (Result) {

        }
        });
}

function fillgstrate(gstValue) {
   valgst = $("[id*=hdGstValue]").val();
    //alert(valgst);
    $("#txt_SGst").val('');
    $("#txt_CGst").val('');
    $("#txt_IGst").val('');
    if (gstValue != 0 || gstValue.trim().length != 0) {
        if (valgst == 1) {
            $('#txt_SGst').val((gstValue / 2).toFixed(2));
            $('#txt_CGst').val((parseFloat(gstValue) / 2).toFixed(2));
            $('#txt_IGst').val();
        }
        else {
            $('#txt_SGst').val();
            $('#txt_CGst').val();
            $('#txt_IGst').val((gstValue).toFixed(2));
        }
    }
}


function CheckSub() {
    setTimeout(function () {
   //     alert("hdgh");
        debugger;
        //var mainac = $("[id*=hdAcMain]").val();
        var mainac = $("#txtMainAcc").val();
        var mainac1 = $("[id*=hdAcMain]").val().split("-", 1);
        var mainac2 = $("#LoanAccName").val();
    //    alert("1236");
        var QueryString = "GetSubAccLedger";
        alert(mainac2);
        $.ajax({
            type: "POST",
            contentType: "application/json; charset=utf-8",
            url: "ProcessingFee.aspx/GetSubAccount",
            data: "{input:'" + mainac2+ "',QueyStr:'" + QueryString + "'}",
            dataType: "json",
            success: function (Result) {
                alert(Result.d.length);
                if (Result.d.length  > 0) {
                    $("#ShwDiv").fadeIn();
                    $('#ddl_SubAc').empty();
                    $('#ddl_SubAc').append($("<option></option>").val("-1").html("Select Sub Account "));
                    $.each(Result.d, function (data, value) {
                        $('#ddl_SubAc').append($("<option></option>").val(value.ID).html(value.Name));
                    })
                }
                else {
                    $("#ShwDiv").fadeOut();
                                   }
                         
            },
            error: function (Result) {
                alert(Result);
            }
        });
        // ShowSub();
    },100);
}

function AmountToWords(price) {
    var sglDigit = ["Zero", "One", "Two", "Three", "Four", "Five", "Six", "Seven", "Eight", "Nine"],
        dblDigit = ["Ten", "Eleven", "Twelve", "Thirteen", "Fourteen", "Fifteen", "Sixteen", "Seventeen", "Eighteen", "Nineteen"],
        tensPlace = ["", "Ten", "Twenty", "Thirty", "Forty", "Fifty", "Sixty", "Seventy", "Eighty", "Ninety"],
        handle_tens = function (dgt, prevDgt) {
            return 0 == dgt ? "" : " " + (1 == dgt ? dblDigit[prevDgt] : tensPlace[dgt])
        },
        handle_utlc = function (dgt, nxtDgt, denom) {
            return (0 != dgt && 1 != nxtDgt ? " " + sglDigit[dgt] : "") + (0 != nxtDgt || dgt > 0 ? " " + denom : "")
        };

    var str = "",
        digitIdx = 0,
        digit = 0,
        nxtDigit = 0,
        words = [];
    if (price += "", isNaN(parseInt(price))) str = "";
    else if (parseInt(price) > 0 && price.length <= 10) {
        for (digitIdx = price.length - 1; digitIdx >= 0; digitIdx--) switch (digit = price[digitIdx] - 0, nxtDigit = digitIdx > 0 ? price[digitIdx - 1] - 0 : 0, price.length - digitIdx - 1) {
            case 0:
                words.push(handle_utlc(digit, nxtDigit, ""));
                break;
            case 1:
                words.push(handle_tens(digit, price[digitIdx + 1]));
                break;
            case 2:
                words.push(0 != digit ? " " + sglDigit[digit] + " Hundred" + (0 != price[digitIdx + 1] && 0 != price[digitIdx + 2] ? " and" : "") : "");
                break;
            case 3:
                words.push(handle_utlc(digit, nxtDigit, "Thousand"));
                break;
            case 4:
                words.push(handle_tens(digit, price[digitIdx + 1]));
                break;
            case 5:
                words.push(handle_utlc(digit, nxtDigit, "Lakh"));
                break;
            case 6:
                words.push(handle_tens(digit, price[digitIdx + 1]));
                break;
            case 7:
                words.push(handle_utlc(digit, nxtDigit, "Crore"));
                break;
            case 8:
                words.push(handle_tens(digit, price[digitIdx + 1]));
                break;
            case 9:
                words.push(0 != digit ? " " + sglDigit[digit] + " Hundred" + (0 != price[digitIdx + 1] || 0 != price[digitIdx + 2] ? " and" : " Crore") : "")
        }
        str = words.reverse().join("")
    } else str = "Equal or Above Thousand Crore";
    return str

}