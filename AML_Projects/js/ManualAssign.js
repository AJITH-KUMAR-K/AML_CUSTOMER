$(window).on('load', function () {
   
    $("#txt_desc").val('');
    $("#txt_cremp").val('');
    $("#txt_bin").val('');
    $("#ddLbin").val('');
    $('#ddLEMPLOYEE').empty();
    dropload();
    //viewBins();
  
});

//ticket dropdown
function dropload() {
    var QueryString = "getTicketsnew1";
    $.ajax({
        type: "POST",
        contentType: "application/json; charset=utf-8",
        url: "ManualAssigning.aspx/PO",
        data: "{QueryString:'" + QueryString + "'}",
        dataType: "json",
        success: function (Result) {
            $('#drop_po').empty();
            $('#drop_po').append($("<option></option>").val("-1").html("---SELECT---"));
            var Result = Result.d;
            $.each(Result, function (data, value) {
               $('#drop_po').append($("<option></option>").val(value.Id).html(value.Name));

            })

        },
        error: function (Result) {
            alert(Result);
        }
    });
    viewBins();
}



function viewemployee() {

    description();
    currentEmployee();
    currentBin();
}




//description
function description() {
    //debugger;
    var hdUserId = $("[id*=hd_user]").val();
    var ticketno = $("#drop_po option:selected").text();
    var QueryString = "getdescription";
    $.ajax({
        type: "POST",
        contentType: "application/json; charset=utf-8",
        url: "ManualAssigning.aspx/PO2",
        data: "{QueryString:'" + QueryString + "',ticketno:'" + ticketno + "'}",
        dataType: "json",
        success: function (Result) {
            var res1 = Result.d;
            var resdata1 = res1.split("~")[0].toString();
            $("#txt_desc").val(resdata1);

        }
    });

}


//currentbin
function currentBin() {
    //debugger;
    var hdUserId = $("[id*=hd_user]").val();
    var ticketno = $("#drop_po option:selected").text();
    var QueryString = "currentBIN";
    $.ajax({
        type: "POST",
        contentType: "application/json; charset=utf-8",
        url: "ManualAssigning.aspx/PO3",
        data: "{QueryString:'" + QueryString + "',ticketno:'" + ticketno + "'}",
        dataType: "json",
        success: function (Result) {
            var res1 = Result.d;
            var resdata1 = res1.split("~")[0].toString();
            $("#txt_bin").val(resdata1);

        }
    });
}
//current employee
function currentEmployee() { 
    //debugger;
    var hdUserId = $("[id*=hd_user]").val();
    var ticketno = $("#drop_po option:selected").text();
    var QueryString = "currentEmployee";
    $.ajax({
        type: "POST",
        contentType: "application/json; charset=utf-8",
        url: "ManualAssigning.aspx/PO2",
        data: "{QueryString:'" + QueryString + "',ticketno:'" + ticketno + "'}",
        dataType: "json",
        success: function (Result) {
            var res1 = Result.d;
            var resdata1 = res1.split("~")[0].toString();
            $("#txt_cremp").val(resdata1);

        }
    });
}



//select bin
function viewBins() {
    var QueryString = "selectBin";
    $.ajax({
        type: "POST",
        contentType: "application/json; charset=utf-8",
        url: "ManualAssigning.aspx/PO",
        data: "{QueryString:'" + QueryString + "'}",
        dataType: "json",
        success: function (Result) {
            // $('#ddLbin').empty();
            var Result = Result.d;
            $('#ddLbin').append($("<option></option>").val("-1").html("---SELECT---"));
            $.each(Result, function (data, value) {
                $('#ddLbin').append($("<option></option>").val(value.Id).html(value.Name));

            })

        },
        error: function (Result) {
            alert(Result);
        }
    });

  
}


// select employee
function viewemployee1() {
    //debugger;

    var binnumber = $("#ddLbin option:selected").val();
    var QueryString = "getEmploNew";

    $.ajax({
        type: "POST",
        contentType: "application/json; charset=utf-8",
        url: "ManualAssigning.aspx/PO1",
        data: "{QueryString:'" + QueryString + "',ticketno:'" + binnumber + "'}",
        dataType: "json",
        success: function (Result) {
            $('#ddLEMPLOYEE').empty();
            var Result = Result.d;
            $('#ddLEMPLOYEE').append($("<option></option>").val("-1").html("---SELECT---"));
            $('#ddLEMPLOYEE').append($("<option></option>").val("1").html("16244"));
            $.each(Result, function (data, value) {
                $('#ddLEMPLOYEE').append($("<option></option>").val(value.Id).html(value.eId+'-'+value.Name));

            })

        },
        error: function (Result) {
            alert(Result);
        }

    });

  
}

////submitt
function submitbtn() {
  //  alert("clicking");
   // debugger;
    var descrip = $("#txt_desc").val();
    var ticketnumb = $("#drop_po").find('option:selected').text();
    var ticketnumb1 = $("#drop_po").find('option:selected').val();
    var emplcode = $("#ddLEMPLOYEE").find('option:selected').val();
    var emplcode1 = $("#ddLEMPLOYEE").find('option:selected').text();
    var curbin = $("#ddLbin").find('option:selected').val();
    var curbin1 = $("#ddLbin").find('option:selected').text();
    var binnumber = $("#ddLbin option:selected").val();

    var empcode = $("[id*=hdUserId]").val();
  //  var QueryString = "updateBucket";
   // var QueryString1 = ticketnumb + '¥' + emplcode1;
   // var data = empcode + '~' + Category + '~' + brtype + '~' + bdate;
    if (ticketnumb1 == -1) {
        alert("SELECT TICKET");
    }
    else if (emplcode == -1) {
        alert("SELECT ANY EMPLOYEE TO ASSIGN");
    }
    else if (binnumber == -1) {
        alert("SELECT ANY BIN TO ASSIGN");
    }
    else {
        //alert("working");
        //var QueryString = "updateBucket1";
        var QueryString = "updateBuckettest";
        var emplcode1 = emplcode1.split('-');
        var emplcode1 = emplcode1[0];

        var QueryString1 = ticketnumb + '¥' + emplcode1 + '¥' + curbin;
        $.ajax({
            type: "post",
            contentType: "application/json; charset=utf-8",
            url: "ManualAssigning.aspx/OnSubmit",
            data: "{QueryString:'" + QueryString + "',ticketno:'" + QueryString1 + "'}",
            dataType: "json",
            success: function (Result) {
                Result = Result.d;
                alert(Result);
                window.location.reload();
            }
        });
    }
}



 

//exit
function frmExit() {
    window.open("index.aspx", "_self");
}