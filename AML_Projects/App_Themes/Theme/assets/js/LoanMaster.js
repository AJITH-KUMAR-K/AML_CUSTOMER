//function frmExit() {
//    window.open("~/Index.aspx", "_self");
//}
$(window).on('load', function () {
    alert("window load");
    //$("#SelctType").hide();
    //    GetFundDtls();
    //GetFIType();
    //getbnkledg();
    //$("#tableShowFI").hide();
    //getLoanLedg();
});
function showTypes() {
    if ($("#radGYes").prop("checked")) {
        $("#SelctType").fadeIn();
        getGuarenteeType();
    }
    else if ($("#radGNo").prop("checked")) {
        $("#SelctType").fadeOut();
    }
}
function GetFundDtls() {
    var QueryString = "GetFundType";
    $.ajax({
        type: "POST",
        contentType: "application/json; charset=utf-8",
        url: "TreasuryLoanMaster.aspx/getFundType",
        data: "{QueryString:'" + QueryString + "'}",
        dataType: "json",
        success: function (Result) {
            $('#ddlCatgry').empty();
            $('#ddlCatgry').append($("<option></option>").val("-1").html("Select Fund Category "));
            $.each(Result.d, function (data, value) {
                $('#ddlCatgry').append($("<option></option>").val(value.Id).html(value.Name));
            })
        },
        error: function (Result) {
            alert(Result);
        }
    });
}
function GetSubFundDtls() {
    var InputString = $("#ddlCatgry").val();
    var QueryString = "GetSubFundType";
    $.ajax({
        type: "POST",
        contentType: "application/json; charset=utf-8",
        url: "TreasuryLoanMaster.aspx/getSubFund",
        data: "{QueryString:'" + QueryString + "',input : '" + InputString + "'}",
        dataType: "json",
        success: function (Result) {
            $('#ddlsSubCat').empty();
            $('#ddlsSubCat').append($("<option></option>").val("-1").html("Select Sub Fund Category "));
            $.each(Result.d, function (data, value) {
                $('#ddlsSubCat').append($("<option></option>").val(value.SbId).html(value.SbName));
            })
        },
        error: function (Result) {
            alert(Result);
        }
    });
}
function GetFIType() {
     var QueryString = "GetFIType";
    $.ajax({
        type: "POST",
        contentType: "application/json; charset=utf-8",
        url: "TreasuryLoanMaster.aspx/getFinancialType",
        data: "{QueryString:'" + QueryString + "'}",
        dataType: "json",
        success: function (Result) {
            $('#ddlFiTyp').empty();
            $('#ddlFiTyp').append($("<option></option>").val("-1").html("Select Financial Institution Type "));
            $.each(Result.d, function (data, value) {
                $('#ddlFiTyp').append($("<option></option>").val(value.FtId).html(value.FtName));
            })
        },
        error: function (Result) {
            alert(Result);
        }
    });
}
function GetFIDetails() {
    var InputString = $("#ddlFiTyp").val();
    var QueryString = "GetFI";
    $.ajax({
        type: "POST",
        contentType: "application/json; charset=utf-8",
        url: "TreasuryLoanMaster.aspx/getFIDtls",
        data: "{QueryString:'" + QueryString + "',input : '" + InputString + "'}",
        dataType: "json",
        success: function (Result) {
            $('#ddlFInst').empty();
            $('#ddlFInst').append($("<option></option>").val("-1").html("Select Financial Institution "));
            $.each(Result.d, function (data, value) {
                $('#ddlFInst').append($("<option></option>").val(value.FId).html(value.FName));
            })
        },
        error: function (Result) {
            alert(Result);
        }
    });
}
function getFITableDtls() {
    $("#tableShowFI").show();
    var InputString = $("#ddlFInst").val();
    var Querystring = "GetFITable";
    $.ajax({
        type: "POST",
        contentType: "application/json; charset=utf-8",
        url: "TreasuryLoanMaster.aspx/getTable",
        data: "{QueryStr : '" + Querystring + "',input :'" + InputString + "'}",
        dataType: "json",
        success: function (Result) {
            if (Result.d.length > 0) {
                $('#tableShowFI').empty();
                $("#tableShowFI").append('<thead>< tr ><th class="col-md-2">Address</th> <th class="col-md-2">Contact Person</th> <th class="col-md-2">Telephone Number </th><th class="col-md-2">Email ID</th></tr ></thead><tbody>'
                );
                for (var i = 0; i < Result.d.length; i++) {
                    $("#tableShowFI").append('<tr><td>' + Result.d[i].FAddr + '</td>' +
                        //'<td>' + Result.d[i].FBr + '</td>' +
                        '<td>' + Result.d[i].Fcnct + '</td>' +
                        '<td>' + Result.d[i].Fphn + '</td>' +
                        '<td>' + Result.d[i].Fmail + '</td>' +
                        '</tr >');
                }
                $("#tableShowFI").append(
                    '</tbody>');
            }
        },
        error: function (Result) {
            alert(Result);
        }
    });
}

//function getbnkledg() {
//    var QueryString = "GetBankLedger";
//    $.ajax({
//        type: "POST",
//        contentType: "application/json; charset=utf-8",
//        url: "TreasuryLoanMaster.aspx/getBankLedg",
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
//        url: "TreasuryLoanMaster.aspx/getloanLedg",
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
function getGuarenteeType() {
    var QueryString = "PersonalGuarantee";
    $.ajax({
        type: "POST",
        contentType: "application/json; charset=utf-8",
        url: "TreasuryLoanMaster.aspx/getPernlGurntee",
        data: "{QueryStr:'" + QueryString + "'}",
        dataType: "json",
        success: function (Result) {
            $('#ddlPrsnGrntee').empty();
            $('#ddlPrsnGrntee').append($("<option></option>").val("-1").html("Select Personel Guarantee Type "));
            $.each(Result.d, function (data, value) {
                $('#ddlPrsnGrntee').append($("<option></option>").val(value.Id).html(value.Name));
            })
        },
        error: function (Result) {
            alert(Result);
        }
    });
}
function AddLoanMst() {
    var Guarntee, gtype ;
    var Todate = Date.parse($("#txt_DtAgrmntTo").val());
    var FrmDate = Date.parse($("#txt_DtAgrmntFrm").val());
    var DateDiff = Todate - FrmDate;
    if (DateDiff < 0) {
        alert("Choose Agreement To Date greater than Agrement From Date");
        $("#txt_DtAgrmntFrm").val("");
        $("#txt_DtAgrmntTo").focus();
        return false;
    }
    if ($("#radGYes").prop("checked") == true) {
        Guarntee = 1;
         gtype = $("#ddlPrsnGrntee").val();
    }
    else if ($("#radGNo").prop("checked") == true) {
        Guarntee = 0;
        gtype = 0;
    }
    var InputData = $("#ddlCatgry").val() + "µ" + $("#ddlsSubCat").val() + "µ" + $("#ddlFiTyp").val() + "µ" + $("#ddlFInst").val() + "µ" + $("#txt_AgrmntDt").val() + "µ" + $("#txt_DtAgrmntFrm").val() + "µ" + $("#txt_DtAgrmntTo").val() + "µ" + $("#txt_loan").val() + "µ" + $("[id*=hdUserId]").val() + "µ" + Guarntee + "µ" + gtype + "µ" + $("[id*=hdSerbank]").val() + "µ" + $("[id*=hdSerLoan]").val() + "µ" + $("[id*=hdBrid]").val() + "µ" + $("[id*=hdFirmId]").val() + "µ" + $("#txt_ROI").val() ;
        if ($("#ddlCatgry").val() == "-1") {
        alert("Please select Fund Category");
        return false;
    }
    else if ($("#ddlsSubCat").val() == "-1") {
        alert("Please Select Sub Category");
        return false;
    }
    else if ($("#ddlFiTyp").val() == "-1") {
        alert("Please Select Financial Type");
        return false;
    }
    else if ($("#ddlFInst").val() == "-1") {
        alert("Please Financial Institution");
        return false;
        }
    else if ($("#ddlBnkLedger").val() == "-1") {
            alert("Please Select Bank Account Ledger");
            return false;
        }
    else if ($("#ddlLoanAccn").val() == "-1") {
            alert("Please select Loan Ledger");
            return false;
    }
    else if ($("#txt_loan").val() == "") {
        alert("Please Enter Loan amount");
        return false;
    }
    else if ($("#txt_AgrmntDt").val() == "") {
        alert("Please Enter Agreement Date Entered ");
        return false;
    }
     else if ($("#txt_DtAgrmntFrm").val()== "") {
        alert("Please Enter Agreement from Date");
        return false;
    }
    else if ($("#txt_DtAgrmntTo").val()== "") {
        alert("Please Enter Agreement To Date ");
        return false;
        }
        else if ($("#txt_ROI").val('') == "") {
            alert("Please Enter ROI");
            return false;
        }
        else if ($("#radGYes").prop("checked") == false && $("#radGNo").prop("checked") == false) {
            alert("Choose Personal Guarantee ");
            return false;
        }
    else {
              $.ajax({
            type: "POST",
            contentType: "application/json; charset=utf-8",
            url: "TreasuryLoanMaster.aspx/AddLoanMaster",
            data: "{input:'" + InputData + "'}",
            dataType: "json",
            success: function (Result) {
                alert(Result.d);
                $("#ddlCatgry").val('-1');
                $("#ddlsSubCat").val('-1');
                $("#ddlFiTyp").val('-1');
                $("#ddlFInst").val('-1');
                $("#txt_loan").val('');
                $("#txt_tenor").val('');
                $("#txt_DtROI").val('');
                $("#txt_AgrmntDt").val('');
                $("#txt_DtAgrmntFrm").val('');
                $("#txt_DtAgrmntTo").val('');
                $("#tableShowFI").empty();
                $("#ddlLoanAccn").val('-1');
                $("#ddlBnkLedger").val('-1');
                $("#txt_ROI").val('');
                $('#radGNo').prop('checked', false);
                $('#radGYes').prop('checked', false);
            },
            error: function (Result) {
                alert(Result);
            }
        });
   }
}