$(window).on('load', function () {

    //  alert("Works");


    $("#LblBrID").text('');
    $("#LblEmpId").text('');
    $("#LblEmpName").text('');
    $("#LblBrName").text('');
    $("#LblRegion").text('');
    $("#LblZone").text('');
    $("#lbLPost").text('');
    $("#LblDep").text('');
    $("#observ").text('');
    $("#rmks").text('');
    $("#actn").text('');

    //$("#LblMobNo").text('');


    $("#LblEngEmp").text($("[id*=HdUserID]").val());
    $("#LblName").text($("[id*=HdUserName]").val());
    $("#LblMobNo").text($("[id*=hdrepdt]").val());
    // $("#LblPrbRep").text($("[id*=hdrepdt]").val());

    //var date = new date();

    //alert(date);
    //$("#LblTckResDt").text(date);
    AccessCheck();

    // alert(UserName);

    //tickerloader();
    //SubCategoryLoader();
    
   // alert('Function Work');

});





function tickerloader() {

    var BranchID = $("[id*=HdBrId]").val();
    var empcode = $("[id*=HdUserID]").val();


    var Querystring = "ticketload";
    InputString = empcode;


    debugger;
    $.ajax({
        type: "POST",
        contentType: "application/json; charset=utf-8",
        url: "digi_report.aspx/drop_loader",
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


function tickerChnage(ticketNo) {
    debugger;
    Querystring = "GetChangeTktDtl";

    

   // alert(TicketType);

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
    $("#observ").val('');
    $("#rmks").val('');
    $("#actn").val('');
    $("#DrpRep").text('');





    if (ticketNo != -1) {


        $.ajax({
            type: "POST",
            contentType: "application/json; charset=utf-8",
            url: "digi_report.aspx/GetTicketDtl",
            data: "{QueryStr : '" + Querystring + "',input :'" + ticketNo + "'}",
            dataType: "json",
            success: function (Result) {

                if (Result.d != "") {


                    var res = Result.d;
                   // alert(res);
                    res = res.split('~');



                    var UserID = res[0];
                    var UserName = res[1];
                    var BranchID = res[2];
                    var Post = res[3];
                    var Department = res[4];
                    var Zone = res[5];
                    var Region = res[6];
                    var BranchName = res[7];
                    var Reportdate = res[8];
                    var visitdate = res[9];
                    var visittime = res[10];
                    var prblmrptd = res[11];
                    var SubCat = res[12];
                    var owngrp = res[13];
                   // var observtn = res[14];
                    var rmks = res[15];
                    var actn = res[16];
                    var AssetLbl = res[14];


                    CatChange(res[15]);

                    $('[id*=hdAssetChange]').val(res[15]);

                    //alert(AssetLbl);
                  //  alert(Zone);


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
                    $("#Label1").text(visittime);
                    $("#LblPrbRep").text(prblmrptd);
                    $("#LblSubCat").text(SubCat);
                    $("#LblOwnGrp").text(owngrp);
                   // $("#observ").text(observtn);
                    $("#rmks").text(rmks);
                    $("#actn").text(actn);
                    $("#DrpRep").text(AssetLbl);

                    $("#LblTckResDt").text(visitdate + ' ' + visittime);

                   // asset_dropdwn();
                    owner_drpdwn();
                    SubCategoryLoader();
                   
                }
                else {

                    alert("Selected Ticker Number have no data!!")

                    //$("#LblBrID").text('N/A');
                    //$("#LblEmpId").text('N/A');
                    //$("#LblEmpName").text('N/A');
                    //$("#LblBrName").text('N/A');
                    //$("#LblRegion").text('N/A');
                    //$("#LblZone").text('N/A');
                    //$("#lbLPost").text('N/A');
                    //$("#LblDep").text('N/A');
                    //$("#LblRepDt").text('N/A');
                    //$("#LblEngDt").text('N/A');
                }


            },
            error: function (Result) {
                alert('tickerChnage()' + Result.d);
            }
        });

        
    }


    else {


        //$("#LblBrID").text('N/A');
        //$("#LblEmpId").text('N/A');
        //$("#LblEmpName").text('N/A');
        //$("#LblBrName").text('N/A');
        //$("#LblRegion").text('N/A');
        //$("#LblZone").text('N/A');
        //$("#lbLPost").text('N/A');
        //$("#LblDep").text('N/A');


    }

}

function asset_dropdwn() {

    var BranchID = $("[id*=HdBrId]").val();
    var empcode = $("[id*=HdUserID]").val();


    var Querystring = "asset_dropdown";
    InputString = empcode;


    debugger;
    $.ajax({
        type: "POST",
        contentType: "application/json; charset=utf-8",
        url: "digi_report.aspx/drop_loader",
        data: "{QueryStr : '" + Querystring + "',input :'" + InputString + "'}",
        dataType: "json",
        success: function (Result) {


            $('#DrpRep').empty();
            $('#DrpRep').append($("<option></option>").val("-1").html("-------Select-------- "));
            $.each(Result.d, function (data, value) {
                $('#DrpRep').append($("<option></option>").val(value.Id).html(value.Name));

            })



        },
        error: function (Result) {
            alert('asset_dropdwn()' + Result.d);
        }
    });
}
function asset_dropdwn() {

    var BranchID = $("[id*=HdBrId]").val();
    var empcode = $("[id*=HdUserID]").val();


    var Querystring = "asset_dropdown";
    InputString = empcode;


    debugger;
    $.ajax({
        type: "POST",
        contentType: "application/json; charset=utf-8",
        url: "digi_report.aspx/drop_loader",
        data: "{QueryStr : '" + Querystring + "',input :'" + InputString + "'}",
        dataType: "json",
        success: function (Result) {


            $('#DrpRep').empty();
            $('#DrpRep').append($("<option></option>").val("-1").html("-------Select-------- "));
            $.each(Result.d, function (data, value) {
                $('#DrpRep').append($("<option></option>").val(value.Id).html(value.Name));

            })



        },
        error: function (Result) {
            alert('asset_dropdwn()' + Result.d);
        }
    });
}


function owner_drpdwn() {

    //alert("owner works");
    var BranchID = $("[id*=HdBrId]").val();
    var empcode = $("[id*=HdUserID]").val();


    var Querystring = "owner_drop_loader";
    InputString = empcode;


    debugger;
    $.ajax({
        type: "POST",
        contentType: "application/json; charset=utf-8",
        url: "digi_report.aspx/owner_drp",
        data: "{QueryStr : '" + Querystring + "',input :'" + InputString + "'}",
        dataType: "json",
        success: function (Result) {


            $('#LblOwnGrp').empty();
            $('#LblOwnGrp').append($("<option></option>").val("-1").html("-------Select-------- "));
            $.each(Result.d, function (data, value) {
                $('#LblOwnGrp').append($("<option></option>").val(value.Id).html(value.Name));

            })



        },
        error: function (Result) {
            alert('owner_drpdwn()' + Result.d);
        }
    });
}


// alert('works');










function CatChange(AssetChange) {
   // alert("catchange");
   // var CatChange = $('#DrpRep option:selected').val();

    //CatChange = CatChange.split('-');

   // alert(CatChange);



    //CatStatus = CatChange[1];
    //CatId = CatChange[0];

    //if (AssetChange == 3466 || AssetChange == 1935 || AssetChange == 479 || AssetChange == 1887 || AssetChange == 2140 || AssetChange == 1916 ||
    //    AssetChange == 826 || AssetChange == 3465 || AssetChange == 2327 || AssetChange == 96 || AssetChange == 1264 || AssetChange == 2450 ) {


    if (AssetChange == 123 || AssetChange == 181 || AssetChange == 184 || AssetChange == 183 || AssetChange == 182 || AssetChange == 186 ||
        AssetChange == 187 || AssetChange == 122 || AssetChange == 824 ) {

        $('#DrpMake').attr('disabled', false);
        $('#DrpModel').attr('disabled', false);
        $('#serial').attr('disabled', false);
        $('#DrpMake').empty();
        $('#DrpModel').empty();
    }

    else {

        $('#DrpMake').attr('disabled', true);
        $('#DrpModel').attr('disabled', true);
        $('#serial').attr('disabled', true);

       
        //MakeLoad();
        //ModelLoad()

    }
}

function SubCatChange() {

    var SubCatChange = $('#DrpRep option:selected').val();

    SubCatChange = SubCatChange.split('-');

    //alert(SubCatChange);

    CatStatus = SubCatChange[1];
    CatId = SubCatChange[0];

    if (CatStatus == 1) {

        $('#DrpMake').attr('disabled', true);
        $('#DrpModel').attr('disabled', true);
        $('#serial').attr('disabled', true);
        $('#DrpMake').empty();
        $('#DrpModel').empty();
    }

    else {

        $('#DrpMake').attr('disabled', false);
        $('#DrpModel').attr('disabled', false);
        $('#serial').attr('disabled', false);
        MakeLoad();
        ModelLoad()

    }
}








function SubCategoryLoader() {

    //alert('sub cat Works');

    var Querystring = "subcatgry";
    var cat_id1 = $("[id*=DrpRep]").val();
   // alert(cat_id1);
    var cat_id2 = cat_id1.split('-');
    var cat_id = cat_id2[0];
    var cat_id2 = cat_id2[1];


    $.ajax({
        type: "POST",
        contentType: "application/json; charset=utf-8",
        url: "digi_report.aspx/subcatgry",
        data: "{QueryStr : '" + Querystring + "',input :'" + cat_id + "'}",
        dataType: "json",
        success: function (Result) {


            $('#subcatgry').empty();
            $('#subcatgry').append($("<option></option>").val("-1").html("-------Select-------- "));
            $.each(Result.d, function (data, value) {
                $('#subcatgry').append($("<option></option>").val(value.Id).html(value.Name));

            })



        },
        error: function (Result) {
           // alert('MakeLoad()' + Result.d);
        }
    });

}



function MakeLoad() {

    var Querystring = "makemodeldrp";

    $.ajax({
        type: "POST",
        contentType: "application/json; charset=utf-8",
        url: "digi_report.aspx/drop_loader",
        data: "{QueryStr : '" + Querystring + "',input :'" + InputString + "'}",
        dataType: "json",
        success: function (Result) {


            $('#DrpMake').empty();
            $('#DrpMake').append($("<option></option>").val("-1").html("-------Select-------- "));
            $.each(Result.d, function (data, value) {
                $('#DrpMake').append($("<option></option>").val(value.Id).html(value.Name));

            })



        },
        error: function (Result) {
            alert('MakeLoad()' + Result.d);
        }
    });

}


function ModelLoad() {

    var Querystring = "modeldrp";

    $.ajax({
        type: "POST",
        contentType: "application/json; charset=utf-8",
        url: "digi_report.aspx/drop_loader",
        data: "{QueryStr : '" + Querystring + "',input :'" + InputString + "'}",
        dataType: "json",
        success: function (Result) {


            $('#DrpModel').empty();
            $('#DrpModel').append($("<option></option>").val("-1").html("-------Select-------- "));
            $.each(Result.d, function (data, value) {
                $('#DrpModel').append($("<option></option>").val(value.Id).html(value.Name));

            })



        },
        error: function (Result) {
            alert('ModelLoad()' + Result.d);
        }
    });

}


function TickerStatusRdo(TickerSts) {

    if (TickerSts == 0) {//closed


        $("#subcatgry").prop('disabled', true);
        $("#LblOwnGrp").hide();
       // $("#DrpRep").hide();


    }

    else {
        $("#subcatgry").prop('disabled', false);
        $("#LblOwnGrp").show();
       // $("#DrpRep").show();
    }


        


}


function DataSubmit() {

    debugger;

   


    var drpdwn = $('#TickDrp').val();

    var TicketType = drpdwn.substring(0, 2);

    var Querystring = "valinsert";
    var BranchName = $("#LblBrName").text();
    var BranchID = $("#LblBrID").text();
    var Region = $("#LblRegion").text();
    var Zone = $("#LblZone").text();
    var UserID = $("#LblEmpId").text();
    var UserName = $("#LblEmpName").text();
    var Post = $("#lbLPost").text();
    var Department = $("#LblDep").text();
    var Reportdate = $("#LblRepDt").text();
    var visitdate = $("#LblEngDt").text();
    var visittime = $("#Label1").text();
    var AssetLbl = $('#DrpRep').val();
    //var rptcat1 = $('#DrpRep').val();
    //var make = $('#DrpMake option:selected').val();
    //var model = $('#DrpModel option:selected').val();
    var make = $("#DrpMake").val();
    var model = $("#DrpModel").val();

    var serial = $("#serial").val();
    var prblmrptd = $("#LblPrbRep").text();
    var obsrvtn = $("#observ").val();
    var rmks = $("#rmks").val();
    var actn = $("#actn").val();
   // var SubCat = $("#LblSubCat").text();
    var SubCat = $("#subcatgry option:selected").val();
    var owngrp = $("#LblOwnGrp").val();
    var engemp = $("#LblEngEmp").text();
    var engname = $("#LblName").text();
    var engphno = $("#LblMobNo").text(); 
   // var subcatgry = $("#subcatgry").text();


    if (drpdwn == -1) {

        alert("Kindly Choose Ticket!!");
        return false;
    }

    debugger;

    //var rptcat2 = rptcat1.split('-');
    //var rptcat = rptcat2[1];
    //var rptcat2 = rptcat2[0];

    //alert(rptcat2);
  //  alert(make);
   // alert(model);




    debugger;

    AssetChange =$('[id*=hdAssetChange]').val();


    //if (rptcat1 == -1) {

    //    alert("Kindly Choose REPORTED CATEGORY !!");
    //    return false;

    //}

    /*else */
    // if (rptcat == 2)
    if (AssetChange == 123 || AssetChange == 181 || AssetChange == 184 || AssetChange == 183 || AssetChange == 182 || AssetChange == 186 ||
        AssetChange == 187 || AssetChange == 122 || AssetChange == 824)    {

        if (make.trim() == '') {

            alert("Make field cannot be blank !! !!");
            return false;

        }

        if (model.trim() == '') {

            alert(" Model field cannot be blank !!");
            return false;

        }

        if (serial.trim() == '') {

            alert("Serial Number field cannot be blank !!");
            return false;

        }

    }

    else {

        make = '';
        model = '';
        serial = '';


    }



    if (obsrvtn.trim() == '') {

        alert("ENGINEER'S OBSERVATION field cannot be blank !!");
        return false;
    }

    else if (rmks.trim() == '') {

        alert("Remark field cannot be blank !!");
        return false;

    }

    else if (actn.trim() == '') {

        alert("ACTION TAKEN field cannot be blank !!");
        return false;

    }



    else if ($("#clsd").prop('checked') == false && $("#pndng").prop('checked') == false) {

        alert("Choose the Ticket status !!");
        return false;
    }


    else {



        var Status = '';

        if ($("#clsd").prop('checked') == true) {

            Status = 0;

            SubCat = '';
            owngrp = '';
            //rptcat1 = '';

        }

        if ($("#pndng").prop('checked') == true) {

            Status = 1;


        }


        if (Status == 1) {

            if (SubCat == -1) {
                alert("Kindly choose sub category");
                return false;

            }
            if (owngrp == -1) {
                alert("Kindly choose owner group");
                return false;

            }





        }
        else {

            SubCat = '';
            owngrp = '';
        }

       // alert(drpdwn);
      
        // alert("hhhh");

        var submitData =

            drpdwn + '~' +      //1
            BranchName + '~' +  //2
            BranchID + '~' +    //3
            Region + '~' +      //4
            Zone + '~' +        //5
            UserID + '~' +      //6
            UserName + '~' +    //7
            Post + '~' +        //8
            Department + '~' +  //9
            Reportdate + '~' +  //10
            visitdate + '~' +   //11
            visittime + '~' +   //12
            //rptcat2 + '~' +      //13
            AssetChange + '~' +
            make + '~' +        //14
            model + '~' +       //15
            serial + '~' +      //16
            prblmrptd + '~' +   //17
            obsrvtn + '~' +     //18
            rmks + '~' +        //19
            actn + '~' +        //20
            engemp + '~' +      //21
            engname + '~' +     //22
            engphno + '~' +     //23
            Status + '~' +      //24
            SubCat + '~' +      //25
            owngrp+'~'+            //26
        TicketType;             //27


        //alert(TicketType + ',' + AssetChange)

        ExportPDF(drpdwn);

      

        $.ajax({
            type: "POST",
            contentType: "application/json; charset=utf-8",
            url: "digi_report.aspx/Insert",
            data: "{QueryStr : '" + Querystring + "',input :'" + submitData + "'}",
            dataType: "json",
            success: function (Result) {
                Result = Result.d;
                alert(Result);
                window.open('digi_report.aspx', '_self');

            },
            error: function (Result) {

            }
        });
    }



}



//function downloadPDF() {
//    var pdf = new jsPDF('p', 'pt', 'letter');
//    source = $('#table')[0];
//    specialElementHandlers = {
//        '#bypassme': function (element, renderer) {
//            return true
//        }
//    };
//    margins = {
//        top: 50,
//        left: 60,
//        width: 545
//    };
//    pdf.fromHTML(
//        source,
//        margins.left,
//        margins.top,
//        {
//            'width': margins.width,
//            'elementHandlers': specialElementHandlers
//        },
//        function (dispose) {
//            pdf.save('table.pdf');
//        },
//        margins
//    );
//}





//function export1() {

   
    //var tab_text = "<table border='2px'><tr bgcolor='#87AFC6'>";
    //var j = 0;
    //tab = document.getElementById('tbldata');

    //for (j = 0; j < tab.rows.length; j++) {
    //    tab_text = tab_text + tab.rows[j].innerHTML + "</tr>";
    //    tab_text = tab_text + "</tr>";
    //}

    //tab_text = tab_text + "</table>";
    //tab_text = tab_text.replace(/<A[^>]*>|<\/A>/g, "");
    //tab_text = tab_text.replace(/<img[^>]*>/gi, "");
    //tab_text = tab_text.replace(/<input[^>]*>|<\/input>/gi, "");

    //var doc = new jsPDF();
    //doc.text(tab_text, 10, 10);
    //doc.save("DigiReport.pdf");
    //return;



   
        //var doc = new jsPDF('p', 'pt', 'a4');
        //var table = document.getElementById("tbldata");
        //var res = doc.autoTableHtmlToJson(table);
        //doc.autoTable(res.columns, res.data, { startY: 10 });
        //doc.save("DigiReport.pdf");
    


    //html2canvas(document.getElementById('tbldata'), {
        
    //    onrendered: function (canvas) {
    //        var data = canvas.toDataURL();
    //        var docDefinition = {
    //            content: [{
    //                image: data,
    //                width: 500
    //            }]
    //        };
    //        pdfMake.createPdf(docDefinition).download("Table.pdf");
    //    }
      
    //});




function export1() {

    //alert('hiiii');
    //document.getElementById('vvvv').style.display = 'none';
    //document.getElementById('vvvv').style.display = 'inline';
    //window.print();


   
  
    //var table = document.getElementById("vvvv");
    //if (!table) {
    //    alert("Table not found!");
    //    return;
    //}

    //var pdf = new jsPDF();
    //try {
    //    var specialElementHandlers = {
    //        "#vvvv": function (element, renderer) {
    //            return true;
    //        }
    //    };
    //    pdf.fromHTML(table, 15, 15, {
    //        width: 170,
    //        elementHandlers: specialElementHandlers
    //    });
    //} catch (e) {
    //    console.error("Error generating PDF:", e);
    //    return;
    //}

    //pdf.save("table.pdf");


    //var table = document.getElementById("tbldata");

    //var pdf = new jsPDF('p', 'pt', 'letter');
    //pdf.fromHTML(table, function (dispose) {
    //    var pdfData = pdf.output('datauristring');

    //    $.ajax({
    //        type: "POST",
    //        contentType: "application/json; charset=utf-8",
    //        url: "your-server-url",
    //        data: "{data : '" + pdfData + "'}",
    //        dataType: "json",
    //        success: function (Result) {
    //            // Handle successful response from the server
    //        },
    //        error: function (Result) {
    //            // Handle error response from the server
    //        }
    //    });
    //});

    //document.querySelector('vvvv').addEventListener('click', function () {
    //    alert('dwnld');
    //    html2canvas(document.querySelector('tbldata'), {
    //        onrendered: function (canvas) {
    //            // document.body.appendChild(canvas);
    //            return Canvas2Image.saveAsPNG(canvas);
    //        }
    //    });
    //});


}


function AccessCheck() {

    var QueryString = 'AccessChecking';
    //var input = $("[id*=HdUserId]").val();
    var input = $("[id*=HdUserID]").val();
    // alert('Works');
    debugger;
    $.ajax({
        type: "POST",
        contentType: "application/json; charset=utf-8",
        url: "digi_report.aspx/AccessCheck",
        data: "{QueryString:'" + QueryString + "',input : '" + input + "'}",
        dataType: "json",
        success: function (Result) {



            if (Result.d > 0) {


                //BranchLoader($("[id*=HdPaymentType]").val());
                tickerloader();
                SubCategoryLoader();


            }



            else {

                alert("You are Not Authorised to View this");
                

                    window.open("index.aspx", "_self");


               

            }

        },
        error: function (jqXHR, textStatus, errorThrown, Result) {
            console.log(jqXHR);
            console.log(textStatus);
            console.log(errorThrown);
            alert(errorThrown);
        }
    });


}












