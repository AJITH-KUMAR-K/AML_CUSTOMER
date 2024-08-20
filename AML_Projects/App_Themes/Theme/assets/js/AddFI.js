function frmExit() {
    window.open("../Index/Index.aspx", "_self");
}
$(window).load(function () {
    $("#Shwbnk").hide();
    $("#shwCountry").hide();
    GetFiTypeDtl();
    getbankDtls();
    GetStateDtl();
    getCountryDtls();
});
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
//-------------PAN VALIDATION--------
function ChkPanVendor(pan) {
       if (pan != "") {
        var PanNo = /^([a-zA-Z]){5}([0-9]){4}([a-zA-Z]){1}?$/;
        if (document.getElementById("txtPan").value.match(PanNo)) {

        }
        else {
            alert("Invalid PAN...");
            document.getElementById("txtPan").value = "";
            //window.setTimeout(function () {
            //    document.getElementById("txtPan").focus();
            //}, 0);
            return false;

        }
    } else {
        alert("Enter PAN Number...");
        document.getElementById("txtPan").value = "";
        //window.setTimeout(function () {
        //    document.getElementById("txtPan").focus();
        //}, 0);
        return;
    }
}
//----GST VALIDATION ------
function checkGST(GST) {
    var pangst = GST.slice(2, 12);
    var panno = GST.slice(2);
   // var Pan = $("#txtPan").val();
    if (Pan != pangst) {
        alert("Pan Number not Match with GST Number..!!");
        //$("#txtGst").focus();
        $("#txtGst").val("");
        return false;
    }
    else if (panno != "") {
        var regpan = /^([a-zA-Z]){5}([0-9]){4}([a-zA-Z]){1}([0-9a-zA-Z]){1}([a-zA-Z]){1}[0-9a-zA-Z]{1}?$/;
        if (regpan.test(panno) == true) {
            //return true;
        }
        else {
            alert("GST NUMBER Not valid .. !");
            $("#txtGst").val("");
            return false;
        }
    }

    var StateGstCode = GST.slice(0, 2);
    if (GSTStateID != StateGstCode) {
        alert("GST State ID Mismatch...!!!");
        $("#txtGst").val("");
        return false;
    }
    return true;
} 

//-------------------
function showBank() {
    if ($("#ddlFIType").val() == "1") {
        $("#Shwbnk").fadeIn();
        $("#txt_bankname").prop("readonly", "true");
        $("#shwCountry").fadeOut();
    }
   else if ($("#ddlFIType").val() == "4") {
        $("#shwCountry").fadeIn();
        $("#shwState").fadeOut();
        $("#Shwbnk").fadeOut();
        $("#txt_bankname").removeAttr('readonly');
        $("#txt_bankname").val('');
    }
    else {
        $("#shwCountry").fadeOut();
        $("#shwState").fadeIn();
        $("#Shwbnk").fadeOut();
        $("#txt_bankname").removeAttr('readonly');
        $("#txt_bankname").val('');
    }
}
//-----------------------
function getbankDtls() {
    var QueryString = "GetBank";
    $.ajax({
        type: "POST",
        contentType: "application/json; charset=utf-8",
        url: "AddFinancialInstitution.aspx/getBank",
        data: "{QueryString : '" + QueryString +"'}",
        dataType: "json",
        success: function (Result) {
            $('#ddlBank').empty();
            $('#ddlBank').append($("<option></option>").val("-1").html("Select Bank"));
            $.each(Result.d, function (data, value) {
                $('#ddlBank').append($("<option></option>").val(value.BId).html(value.BName));
            })
        },
        error: function (Result) {
            alert(Result);
        }
    });
}
function getBnkName() {
    var InputString = $("#ddlBank").val();
    var QueryString = "GetBankName";
    $.ajax({
        type: "POST",
        contentType: "application/json; charset=utf-8",
        url: "AddFinancialInstitution.aspx/getBankName",
        data: "{QueryStr : '" + QueryString + "', input: '" + InputString + "'}",
        dataType: "json",
        success: function (Result) {
            $("#txt_bankname").val(Result.d);
            },
        error: function (Result) {
            alert(Result);
        }
    });
}

function GetFiTypeDtl() {
   var QueryString = "GetFIType";
       $.ajax({
        type: "POST",
        contentType: "application/json; charset=utf-8",
           url: "AddFinancialInstitution.aspx/getFinancialType",
        data: "{QueryString:'" + QueryString + "'}",
        dataType: "json",
        success: function (Result) {
            $('#ddlFIType').empty();
            $('#ddlFIType').append($("<option></option>").val("-1").html("Select Financial Institution Type"));
            $.each(Result.d, function (data, value) {
                $('#ddlFIType').append($("<option></option>").val(value.TID).html(value.TName));
            })
        },
        error: function (Result) {
            alert(Result);
        }
    });
}
function GetStateDtl() {
  var  QueryString = "GetState";
    $.ajax({
        type: "POST",
        contentType: "application/json; charset=utf-8",
        url: "AddFinancialInstitution.aspx/GetStateDetails",
        data: "{QueryString:'" + QueryString + "'}",
        dataType: "json",
        success: function (Result) {
            $('#ddl_state').empty();
            $('#ddl_state').append($("<option></option>").val("-1").html("Select State"));
            $.each(Result.d, function (data, value) {
                $('#ddl_state').append($("<option></option>").val(value.SId).html(value.SName));
            })
        },
        error: function (Result) {
            alert(Result);
        }
    });
}
function GetDistrDtl() {
        var InputString = $("#ddl_state").val();
        var QueryString = "GetDistricts";
    $.ajax({
        type: "POST",
        contentType: "application/json; charset=utf-8",
        url: "AddFinancialInstitution.aspx/GetDistrDetails",
        data: "{QureyStr: '" + QueryString + "', input:'" + InputString + "'}",
        dataType: "json",
        success: function (Result) {
            $('#ddl_Distrct').empty();
            $('#ddl_Distrct').append($("<option></option>").val("-1").html("Select District"));
            $.each(Result.d, function (data, value) {
                $('#ddl_Distrct').append($("<option></option>").val(value.DId).html(value.DName));
            })
        },
        error: function (Result) {
            alert(Result);
        }
    });
}
function GetPostOfcDtl() {
    var InputString = $("#ddl_Distrct").val();
    var QueryString = "GetPostOffc";
      $.ajax({
        type: "POST",
        contentType: "application/json; charset=utf-8",
        url: "AddFinancialInstitution.aspx/GetPostDetails",
        data: "{QureyStr: '" + QueryString + "', input:'" + InputString + "'}",
        dataType: "json",
        success: function (Result) {
            $('#ddl_postOffce').empty();
            $('#ddl_postOffce').append($("<option></option>").val("-1").html("Select Post Office"));
            $.each(Result.d, function (data, value) {
                $('#ddl_postOffce').append($("<option></option>").val(value.PId).html(value.PName));
            })
        },
        error: function (Result) {
            alert(Result);
        }
    });
}
function GetPinDtl() {
    var InputString = $("#ddl_postOffce").val();
    var QueryString = "GetPinCode";
      $.ajax({
        type: "POST",
        contentType: "application/json; charset=utf-8",
        url: "AddFinancialInstitution.aspx/GetPincode",
        data: "{QureyStr: '" + QueryString + "', input:'" + InputString + "'}",
        dataType: "json",
          success: function (Result) {
              $("#txt_PinCode").val(Result.d);
        },
        error: function (Result) {
            alert(Result);
        }
    });
}
function getCountryDtls() {
    var QueryString = "GetCountry";
    $.ajax({
        type: "POST",
        contentType: "application/json; charset=utf-8",
        url: "AddFinancialInstitution.aspx/GetCountry",
        data: "{QureyStr: '" + QueryString + "'}",
        dataType: "json",
        success: function (Result) {
            $('#ddl_country').empty();
            $('#ddl_country').append($("<option></option>").val("-1").html("Select Country"));
            $.each(Result.d, function (data, value) {
                $('#ddl_country').append($("<option></option>").val(value.Id).html(value.Name));
            })
        },
        error: function (Result) {
            alert(Result);
        }
    });
}

function AddFinancInst() {
   
     if ($("#ddlFIType").val() == "4") {
        if ($("#ddl_country").val() == "-1") {
            alert("Please Select Country");
            return false;
        } 
    }
    else if ($("#ddlFIType").val() != "4") {
        if ($("#ddl_state").val() == "-1") {
            alert("Please Select State");
            return false;
        }
        else if ($("#ddl_Distrct").val() == "-1") {
            alert("Please Select District");
            return false;
        }
        else if ($("#ddl_postOffce").val() == "-1") {
            alert("Please Select Post Office");
            return false;
        } 
    }
    if ($("#ddlFIType").val() == "-1") {
        alert("Please Select Financial Type");
        return false;
    }
    else if ($("#txt_bankname").val() == "") {
        alert("Please Enter bank Name");
        return false;
    }
    else if ($("#txt_brnchname").val() == "") {
        alert("Please Enter Branch Name");
        return false;
    }
    else if ($("#txt_Addrs").val() == "") {
        alert("Please Enter Bank Address");
        return false;
    }
    
    else if ($("#txt_CntPrsn").val() == "") {
        alert("Please Enter Contact Person Name");
        return false;
    }
    else if ($("#txt_Email").val() == "") {
        alert("Please Enter Email ID");
    }
    else if ($("#txt_phone").val() == "") {
        alert("Please Enter Phone Number");
        return false;
    }
    else if ($("#txt_Mobno").val() == "") {
        alert("Please Enter Mobile Number");
        return false;
    }
    else if ($("#txt_pan").val() == "") {
        alert("Please Enter PAN ");
        return false;
    }
    else if ($("#txt_gstn").val() == "") {
        alert("Please Enter GSTN");
        return false;
      }
    else if ($("#txt_CIN").val() == "") {
          alert("Please Enter CIN");
          return false;
      }
    else {
        var Address = $("#txt_Addrs").val() + "," + $("#txt_brnchname").val();
        var InputData = $("#ddlFIType").val() + "µ" + $("#txt_bankname").val() + "µ" + $("#ddlBank").val() + "µ" + Address + "µ" + $("#ddl_postOffce").val() + "µ" + $("#txt_CntPrsn").val() + "µ" + $("#txt_Email").val() + "µ" + $("#txt_phone").val() + "µ" + $("#txt_Mobno").val() + "µ" + $("#txt_pan").val() + "µ" + $("#txt_gstn").val() + "µ" + $("[id*=hdUserId]").val() + "µ" + $("#txt_CIN").val() + "µ" + $("#ddl_country").val() + "µ" + $("[id*=hdBrid]").val() + "µ" + $("[id*=hdFirmId]").val();
          $.ajax({
            type: "POST",
            contentType: "application/json; charset=utf-8",
            url: "AddFinancialInstitution.aspx/AddFinancialInst",
            data: "{input:'" + InputData + "'}",
            dataType: "json",
            success: function (Result) {
                alert(Result.d);
                $("#ddlFIType").val('-1');
                $("#txt_bankname").val('');
                $("#ddlBank").val('-1');
                $("#txt_brnchname").val('');
                $("#txt_Addrs").val('');
                $("#ddl_state").val('-1');
                $("#ddl_Distrct").val('-1');
                $("#ddl_postOffce").val('-1');
                $("#txt_PinCode").val('');
                $("#txt_CntPrsn").val('');
                $("#txt_Email").val('');
                $("#txt_phone").val('');
                $("#txt_Mobno").val('');
                $("#txt_pan").val('');
                $("#txt_gstn").val('');
                $("#txt_CIN").val('');
                $("#Shwbnk").hide();
                $("#ddl_country").val('');
                $("#txt_bankname").removeAttr('readonly');
                     },

            error: function (Result) {
                alert(Result);
            }
                 });
         }
}