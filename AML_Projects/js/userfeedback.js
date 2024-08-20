$(window).on('load', function () {
   

    tickerloader()
});



var StarSelect1 = '';
var StarSelect2 = '';
var StarSelect3 = '';
var StarSelect4 = '';
var StarSelect5 = '';


function Starvalueselect(id) {
    debugger;

   // alert("here");
    debugger;
    StarSelect1 = '';
    StarSelect1 = id;
    //$("[id*=HdStar1]").val('');
    //$("[id*=HdStar1]").val(id);
}
function Starvalueselect2(id) {
    debugger;
    StarSelect2 = '';
    StarSelect2 = id;
    //$("[id*=HdStar2]").val('');

    //$("[id*=HdStar2]").val(id);

}

function Starvalueselect3(id) {
    debugger;
    StarSelect3 = '';
    StarSelect3 = id;
    //$("[id*=HdStar3]").val('');

    //$("[id*=HdStar3]").val(id);

}

function Starvalueselect4(id) {

    StarSelect4 = '';
    StarSelect4 = id;
    //$("[id*=HdStar4]").val('');

    //$("[id*=HdStar4]").val(id);

}

function Starvalueselect5(id) {
    StarSelect5 = '';
    StarSelect5 = id;
    //$("[id*=HdStar5]").val('');

    //$("[id*=HdStar5]").val(id);

}
function showTypes() {
    if ($("#radGYes").prop("checked")) {
        $("#SelctType").fadeIn();
        $("#department").show();
        //getGuarenteeType();
    }
    else if ($("#radGNo").prop("checked")) {
        $("#SelctType").fadeOut();
        $("#department").hide();
    }
}
function ConfirmNote() {
    debugger;
    //alert("StarSelect1");
    var crfid = $("#ddlCrf").val() + '§' + $("[id*=hdRqstID]").val() + '§' + $("[id*=hdUserId]").val();
    // var feeddata = $("[id*=HdStar1]").val() + '§' + $("[id*=HdStar2]").val() + '§' + $("[id*=HdStar3]").val() + '§' + $("[id*=HdStar4]").val() + '§' + $("[id*=HdStar5]").val() + '§' + $("#txtRemarks").val();
    var firstQn, SecQn, ThirdQn,remark; 
    if (StarSelect1 == "") {
        firstQn = 0;
    }
    else firstQn = StarSelect1;
    if (StarSelect2 == "") {
        SecQn = 0;
    }
    else SecQn = StarSelect2;
    if (StarSelect3 == "") {
        ThirdQn = 0;
    }
    else ThirdQn = StarSelect3;

    if ($("#radGYes").prop("checked")) {
        var rad = $("#radGYes").val();

        //alert(rad);

    }
    else {
        var rad = $("#radGNo").val();
        //alert(rad);
    }

    if ( ThirdQn == 0 || SecQn == 0 || firstQn == 0) {
        alert("Please give rating for all Options");
        return false;
    }
    
    
     

    remark = $("[id*=txtRemarks]").val();
    {
        if (remarks = "") {
            alert("Please Enter Remarks");
            return false;
        }


     
    }

    var input = firstQn + "¥" + SecQn + "¥" + ThirdQn + "¥" + remark + "¥" + rad + "¥" + global_ticket;
    //alert(input);
    var QueryString = 'Star_save';
    debugger;
    //alert(input);

    $.ajax({

        type: "POST",
        contentType: "application/json; charset=utf-8",
        url: "digi_report_1.aspx/Digi_sv",
        data: "{QueryString:'" + QueryString + "',input : '" + input + "'}",
        dataType: "json",
        success: function (Result) {
            var Result = Result.d;
            if (Result == "111") {
                alert("Inserted successfully");

                window.open('digi_report_1.aspx', '_self');

            } else {
                alert("not success");
            }
        },
        error: function (Result) {



            alert(Result);
        }
    });
}
var global_ticket;
function tickerChnage(ticketNo) {
    debugger;
    Querystring = "SERVRPT";
    global_ticket = ticketNo;

    

    $("#LblBrID").text('');
    $("#LblEmpId").text('');
    $("#LblEmpName").text('');
    $("#LblBrName").text('');
    $("#LblRegion").text('');
    $("#LblZone").text('');
    $("#lbLPost").text('');
    $("#LblDep").text('');
    $("#LblRepDt").text('');
    $("#LblEngDt").text('');
    $("#Label1").text('');
    $("#LblPrbRep").text('');
    $("#LblSubCat").text('');
    $("#LblOwnGrp").text('');
    $("#observ").text('');
    $("#rmks").text('');
    $("#actn").text('');




    if (ticketNo != -1) {

        $.ajax({
            type: "POST",
            contentType: "application/json; charset=utf-8",
            url: "digi_report_1.aspx/GetTktDtl",
            data: "{QueryStr : '" + Querystring + "',input :'" + ticketNo + "'}",
            dataType: "json",
            success: function (Result) {

                if (Result.d != "") {

                    debugger;
                    var res = Result.d;
                    
                    res = res.split('~');

                    alert(JSON.stringify(res));

                    var BranchID = res[0];
                    var BranchName = res[1];
                    var Region = res[2];
                    var Zone = res[3];
                    var UserID = res[4];
                    var UserName = res[5];
                    var Post = res[6];
                    var Department = res[7];
                    var Reportdate = res[8];
                    var visitdate = res[9];
                    

                    var prblmrptd = res[10];
                    //var visittime = res[11];
                    var DrpMake = res[11];
                    var mdl = res[12];
                    var serial = res[13];
                    var prblm = res[14];
                    var observtn = res[15];
                    var rmks = res[16]; 
                    var engemp = res[18];
                    var name = res[19];
                    var actn = res[17];
                    var mobil = res[20];
                    var subcat = res[22];
                    var LblTckSts = res[21];
                    var ownr = res[23];//22
                    //var visitdate = res[24];
                    var visittime = res[25];




                   // alert(mdl);


                    $("#LblBrID").text(BranchID);
                    $("#LblEmpId").text(UserID);
                    $("#LblEmpName").text(UserName);
                    $("#LblBrName").text(BranchName);
                    $("#LblRegion").text(Region);
                    $("#LblZone").text(Zone);
                    $("#lbLPost").text(Post);
                    $("#LblDep").text(Department);
                    $("#LblRepDt").text(Reportdate);
                    $("#LblEngDt").text(visitdate);
                    $("#EngVisDt").text(visittime);
                    $("#RptCat").text(prblmrptd); 
                    $("#DrpMake").text(DrpMake);
                    $("#DrpModel").text(mdl);
                    $("#serial").text(serial);
                    $("#prblmrpt").text(prblm);
                    $("#obsrvtn").text(observtn);
                    $("#rmrks").text(rmks);
                    $("#LblEngEmp").text(engemp);
                    $("#LblName").text(name);
                    $("#LblMobNo").text(mobil);
                    $("#LblSubCat").text(subcat);
                    $("#LblOwnGrp").text(ownr);
                    $("#actn").text(actn);

                    $("#LblTckResDt").text(visitdate);

                    if (LblTckSts == 1) {

                        $("#LblTckSts").text('Pending').css("color", "red");
                    }
                    else {
                        $("#LblTckSts").text('Closed').css("color", "green");;
                    }

                    asset_dropdwn();
                }
                else {

                    alert("Selected Ticker Number have no data!!")
                    $('#TickDrp').val(-1);
                }


            },
            error: function (Result) {
                alert('tickerChnage()' + Result.d);
            }
        });
    }


    else {


        $("#LblBrID").text('N/A');
        $("#LblEmpId").text('N/A');
        $("#LblEmpName").text('N/A');
        $("#LblBrName").text('N/A');
        $("#LblRegion").text('N/A');
        $("#LblZone").text('N/A');
        $("#lbLPost").text('N/A');
        $("#LblDep").text('N/A');


    }

}
function tickerloader() {

    var BranchID = $("[id*=HdBrId]").val();
    var empcode = $("[id*=HdUserID]").val();


    var Querystring = "drpdwnrpt";
    InputString = empcode;


    debugger;
    $.ajax({
        type: "POST",
        contentType: "application/json; charset=utf-8",
        url: "digi_report_1.aspx/drop_loader",
        data: "{QueryStr : '" + Querystring + "',input :'" + InputString + "'}",
        dataType: "json",
        success: function (Result) {


            $('#TickDrp').empty();
            $('#TickDrp').append($("<option></option>").val("-1").html("Select Your ticket "));
            $.each(Result.d, function (data, value) {
                $('#TickDrp').append($("<option></option>").val(value.Id).html(value.Name));

            })



        },
        error: function (Result) {
            alert('tickerloader()' + Result.d);
        }
    });


    // alert('works');



}

