$(window).on('load', function () {
    Bin();
    zone();
    Status();
    Category();
    $('#txtFDate').empty();
    $('#txtTDate').empty();

    $("#txtFDate").datepicker({
        dateFormat: 'dd/MM/yy',
        changeMonth: true,
        changeYear: true,
        stepMonths: true,
        todayHighlight: true,
        maxDate: 0,
        onSelect: function (dateText, inst) {

        }
    });
    $('#txtFDate').datepicker().datepicker('setDate', new Date());
    $("#txtTDate").datepicker({
        dateFormat: 'dd/MM/yy',
        changeMonth: true,
        changeYear: true,
        stepMonths: true,
        todayHighlight: true,
        maxDate: 0,
        onSelect: function (dateText, inst) {
        }
    });
    $('#txtTDate').datepicker().datepicker('setDate', new Date());

});

function zone() {
    //zone
    var QueryString = "selectzone";
    QueryString = "selectzone";
    $.ajax({
        type: "POST",
        contentType: "application/json; charset=utf-8",
        url: "PendingDumpReport.aspx/FillZone",
        data: "{QueryString:'" + QueryString + "'}",
        dataType: "json",
        success: function (Result) {
            $('#ddlZone').empty();
            $('#ddlZone').append($("<option></option>").val("-1").html("ALL "));
            $.each(Result.d, function (data, value) {

                $('#ddlZone').append($("<option></option>").val(value.Id).html(value.Name));
            })

            $('#ddlZone').change(function () {
                //if ($("#ddlZone option:selected").val() == -1)
                {
                    $('#ddlRegion').empty();
                    $('#ddlRegion').append($("<option></option>").val("-1").html("ALL"));
                    $('#ddlArea').empty();
                    $('#ddlArea').append($("<option></option>").val("-1").html("ALL"));
                    $('#ddlBranch').empty();
                    $('#ddlBranch').append($("<option></option>").val("-1").html("ALL"));
                }

                //Region
                var QueryString = "selectreg";
                var inputstring = $("#ddlZone option:selected").val();
                $.ajax({
                    type: "POST",
                    contentType: "application/json; charset=utf-8",
                    url: "PendingDumpReport.aspx/FillRegion",
                    data: "{QueryString:'" + QueryString + "',input:'" + inputstring + "'}",
                    dataType: "json",
                    success: function (Result) {
                        $('#ddlRegion').empty();
                        $('#ddlRegion').append($("<option></option>").val("-1").html("ALL "));
                        $.each(Result.d, function (data, value) {
                            $('#ddlRegion').append($("<option></option>").val(value.Id).html(value.Name));
                        })

                        $('#ddlRegion').change(function () {
                            //if ($("#ddlRegion option:selected").val() == -1)
                            {
                                $('#ddlArea').empty();
                                $('#ddlArea').append($("<option></option>").val("-1").html("ALL"));
                                $('#ddlBranch').empty();
                                $('#ddlBranch').append($("<option></option>").val("-1").html("ALL"));
                            }

                            //Area
                            var QueryString = "getarea";
                            var inputstring = $("#ddlRegion option:selected").val();
                            $.ajax({
                                type: "POST",
                                contentType: "application/json; charset=utf-8",
                                url: "PendingDumpReport.aspx/FillArea",
                                data: "{QueryString:'" + QueryString + "',input:'" + inputstring + "'}",
                                dataType: "json",
                                success: function (Result) {
                                    $('#ddlArea').empty();
                                    $('#ddlArea').append($("<option></option>").val("-1").html("ALL"));
                                    $.each(Result.d, function (data, value) {

                                        $('#ddlArea').append($("<option></option>").val(value.Id).html(value.Name));
                                    })

                                    $('#ddlArea').change(function () {
                                        //if ($("#ddlArea option:selected").val() == -1)
                                        {
                                            $('#ddlBranch').empty();
                                            $('#ddlBranch').append($("<option></option>").val("-1").html("ALL"));
                                        }

                                        //branch
                                        var QueryString = "BranchDtl";
                                        var inputstring = $("#ddlArea option:selected").val();
                                        $.ajax({
                                            type: "POST",
                                            contentType: "application/json; charset=utf-8",
                                            url: "PendingDumpReport.aspx/FillBranch",
                                            data: "{QueryString:'" + QueryString + "',input:'" + inputstring + "'}",
                                            dataType: "json",
                                            success: function (Result) {
                                                $('#ddlBranch').empty();
                                                $('#ddlBranch').append($("<option></option>").val("-1").html("ALL"));
                                                $.each(Result.d, function (data, value) {

                                                    $('#ddlBranch').append($("<option></option>").val(value.Id).html(value.Name));
                                                })
                                            },
                                            error: function (Result) {
                                                alert(Result);
                                            }
                                        });
                                    });

                                },
                                error: function (Result) {
                                    alert(Result);
                                }
                            });
                        });
                    },
                    error: function (Result) {
                        alert(Result);
                    }
                });
            });
        },
        error: function (Result) {
            alert(Result);
        }
    });
}

function Bin(){
    var QueryString = "Gebinmaster";
    var inputstring = $("#ddlBin option:selected").val();
    $.ajax({
        type: "POST",
        contentType: "application/json; charset=utf-8",
        url: "PendingDumpReport.aspx/FillBin",
        data: "{QueryString:'" + QueryString + "',input:'" + inputstring + "'}",
        dataType: "json",
        success: function (Result) {
            $('#ddlBin').empty();
            $('#ddlBin').append($("<option></option>").val("-1").html("ALL"));
            $.each(Result.d, function (data, value) {

                $('#ddlBin').append($("<option></option>").val(value.Id).html(value.Name));
            })
        },
        error: function (Result) {
            alert(Result);
        }
    });
}

function Status() {
    var QueryString = "GetStatus";
    var inputstring = $("#ddlStatus option:selected").val();
    $.ajax({
        type: "POST",
        contentType: "application/json; charset=utf-8",
        url: "PendingDumpReport.aspx/FillBin",
        data: "{QueryString:'" + QueryString + "',input:'" + inputstring + "'}",
        dataType: "json",
        success: function (Result) {
            $('#ddlStatus').empty();
            $('#ddlStatus').append($("<option></option>").val("-1").html("ALL"));
            $.each(Result.d, function (data, value) {

                $('#ddlStatus').append($("<option></option>").val(value.Id).html(value.Name));
            })
        },
        error: function (Result) {
            alert(Result);
        }
    });
}

function Category() {
    var QueryString = "selectcategory";
    var inputstring = $("#ddlCategory option:selected").val();
    $.ajax({
        type: "POST",
        contentType: "application/json; charset=utf-8",
        url: "PendingDumpReport.aspx/FillBin",
        data: "{QueryString:'" + QueryString + "',input:'" + inputstring + "'}",
        dataType: "json",
        success: function (Result) {
            $('#ddlCategory').empty();
            $('#ddlCategory').append($("<option></option>").val("-1").html("ALL"));
            $.each(Result.d, function (data, value) {

                $('#ddlCategory').append($("<option></option>").val(value.Id).html(value.Name));
            })
        },
        error: function (Result) {
            alert(Result);
        }
    });
}

function ViewReport() {
    var FDate = $('#txtFDate').val();
    var TDate = $('#txtTDate').val();
    var Bin = $('#ddlBin option:selected').val();
    var Zone = $('#ddlZone option:selected').val();
    var Region = $('#ddlRegion option:selected').val();
    var Area = $('#ddlArea option:selected').val();
    var Branch = $('#ddlBranch option:selected').val();
    var Status = $('#ddlStatus option:selected').val();
    var Category = $('#ddlCategory option:selected').val();

    if (Branch == '-1') {
        Branch = '';    }
    if (Area == '-1') {
        Area = '';
    }
    if (Region == '-1') {
        Region = '';
    }
    if (Zone == '-1') {
        Zone = '';
    }
    if (Bin == '-1') {
        Bin = '';
    }
    if (Status == '-1') {
        Status = '';
    }
    if (Category == '-1') {
        Category = '';
    }
    var frmdate = convertDate(FDate);
    var Todate = convertDate(TDate);
   // var Querystring = "pendingdumpreport";    

    var InputString = frmdate + '¥' + Todate + '¥' + Bin + '¥' + Zone + '¥' + Region + '¥' + Area + '¥' + Branch + '¥' + Status + '¥' + Category ;

    var Querystring1 = "fulldumpreport";
   // var InputString = "27/05/2021" + '¥' + "23/07/2021" + '¥' + "" + '¥' + "" + '¥' + "" + '¥' + "" + '¥' + "" + '¥' + "" + '¥' + "";
    var mainid = Querystring1;
    var subid = InputString;
    window.open("ReportDownLoadExcel.aspx?Querystr=" + Querystring1 + "&inp=" + InputString);




    ////alert(InputString);
    ////alert(Querystring);
    //$.ajax({
    //    type: "POST",
    //    contentType: "application/json; charset=utf-8",
    //    url: "PendingDumpReport.aspx/ViewPendingReport",
    //    data: "{QueryString : '" + Querystring + "',input : '" + InputString + "'}",
    //    dataType: "json",
    //    success: function (Result) {
    //       // alert(Result.d);
    //       // Result = Result.d;
    //        if (Result.d.length > 0) {
    //            fillwallettableApp(Result);
    //        }
    //        else {

    //            $('#tblTickList').empty();
    //            $('#tblTickList').hide();



    //        }
    //    },
    //    error: function (Result) {
    //        alert(Result);
    //    }
    //});
}

function fillwallettableApp(Result) {
    var valData, n = 1;
   // valData = data.split('!');
    $("#tblTickList").empty();
    if ($("#tblTickList tr").length == 0) {

        $("#tblTickList").empty();

        $('#divviewrpt').show();
        $('#tblTickList').append('<thead>< tr ><td scope="col" class="col-md-1">Sl No.</td><td scope="col">Ticket ID</td><td scope="col">Owner Group/dep</td><td scope="col">Report Date</td> <td scope="col">Status</td> <td scope="col" class="col-md-1">Status Date</td> <td scope="col" class="col-md-1">Request Type/Category</td> <td scope="col" class="col-md-1">Sub Category</td> <td scope="col" class="col-md-1">Branch ID</td> <td scope="col" class="col-md-1">Branch Name</td> <td scope="col" class="col-md-1">Description</td> <td scope="col" class="col-md-1">Work Log</td> <td scope="col" class="col-md-1">Created By</td> <td scope="col" class="col-md-1">Affected Person</td> <td scope="col" class="col-md-1">Class</td> <td scope="col" class="col-md-1">Region</td> <td scope="col" class="col-md-1">Zone</td> <td scope="col" class="col-md-1">State</td> <td scope="col" class="col-md-1">No of delay days</td> <td scope="col" class="col-md-1">Severity</td></tr></thead><tbody>');
        
        //$('#tblTickList').append('<tr style="background-color:lightgoldenrodyellow;color:black;"><th class="text-center" style="width:500px;">Sl No.&nbsp;</th><th class="text-center">REPORT DATE</th><th class="text-center">CREATED BY CODE</th><th class="text-center">CREATED BY NAME&nbsp;</th><th class="text-center">AFFECTED PERSON&nbsp;</th><th class="text-center">CLASS&nbsp;</th><th class="text-center">TICKET ID&nbsp;</th><th class="text-center">BRANCH ID&nbsp;</th><th class="text-center">BRANCH NAME&nbsp;</th><th class="text-center">REQUEST TYPE/SUB CATEGORY&nbsp;</th><th class="text-center">CURRENT BIN&nbsp;</th><th class="text-center">DESCRIPTION&nbsp;</th><th class="text-center">CONTACT NUMBER&nbsp;</th><th class="text-center">MAIL ID&nbsp;</th><th class="text-center">STATUS&nbsp;</th><th class="text-center">STATUS DATE&nbsp;</th><th class="text-center">AREA&nbsp;</th><th class="text-center">REGION&nbsp;</th><th class="text-center">ZONE&nbsp;</th><th class="text-center">STATE&nbsp;</th></tr > ');
        for (var i = 0; i < Result.d.length; i++) {
            k = i + 1;
            $('#tblTickList').append('<tr><td class="col-md-1">' + k + '</td>' +
                '<td>' + Result.d[i].TicketID + '</td>' +
                '<td>' + Result.d[i].OwnerGroup + '</td>' +
                '<td>' + Result.d[i].ReportDate + '</td>' +
                '<td>' + Result.d[i].Status + '</td>' +
                '<td>' + Result.d[i].StatusDate + '</td>' +
                '<td>' + Result.d[i].Category + '</td>' +
                '<td>' + Result.d[i].SubCategory + '</td>' +
                '<td>' + Result.d[i].BranchID + '</td>' +
                '<td>' + Result.d[i].BRanchNme + '</td>' +
                '<td>' + Result.d[i].Description + '</td>' +
                '<td>' + Result.d[i].WorkLog + '</td>' +
                '<td>' + Result.d[i].CreatedBy + '</td>' +
                '<td>' + Result.d[i].AffectedPerson + '</td>' +
                '<td>' + Result.d[i].Class + '</td>' +
                '<td>' + Result.d[i].Region + '</td>' +
                '<td>' + Result.d[i].Zone + '</td>' +
                '<td>' + Result.d[i].State + '</td>' +
                '<td class="col-md-1">' + Result.d[i].DaysDelay + '</td>' +
                '<td>' + Result.d[i].Severity + '</td>' +
                '</tr>');
        }
        $('#tblTickList').append(
            '</tbody>');
        //return;
    }
    //if (valData.length == "1") {
    //    $('#divviewrpt').hide();
    //}
    //else {
    //    $('#divviewrpt').show();
    //}

    //for (i = 0; i < valData.length - 1; i++) {
    //    var valdata1 = valData[i].split('^');
    //    //alert(valdata1);
    //    var input = valdata1[2];        
    //    $('#tblTickList').append('<tbody><tr>' +
    //        '<td class="text-center">' + parseInt(n) + '</td>' +
    //        '<td class="text-left" style="width:500px;height:40px;">' + valdata1[0] + '</td>' +
    //        '<td class="text-left" style="width:500px;height:40px;">' + valdata1[1] + '</td>' +
    //        '<td class="text-left" style="width:500px;height:40px;">' + valdata1[2] + '</td>' +
    //        '<td class="text-left" style="width:500px;height:40px;">' + valdata1[3] + '</td>' +
    //        '<td class="text-left" style="width:500px;height:40px;">' + valdata1[4] + '</td>' +
    //        '<td class="text-left" style="width:500px;height:40px;">' + valdata1[5] + '</td>' +
    //        '<td class="text-left" style="width:500px;height:40px;">' + valdata1[6] + '</td>' +
    //        '<td class="text-left" style="width:500px;height:40px;">' + valdata1[7] + '</td>' +
    //        '<td class="text-left" style="width:500px;height:40px;">' + valdata1[8] + '</td>' +
    //        '<td class="text-left" style="width:500px;height:40px;">' + valdata1[9] + '</td>' +
    //        '<td class="text-left" style="width:500px;height:40px;">' + valdata1[10] + '</td>' +
    //        '<td class="text-left" style="width:500px;height:40px;">' + valdata1[11] + '</td>' +
    //        '<td class="text-left" style="width:500px;height:40px;">' + valdata1[12] + '</td>' +
    //        '<td class="text-left" style="width:500px;height:40px;">' + valdata1[13] + '</td>' +
    //        '<td class="text-left" style="width:500px;height:40px;">' + valdata1[14] + '</td>' +
    //        '<td class="text-left" style="width:500px;height:40px;">' + valdata1[15] + '</td>' +
    //        '<td class="text-left" style="width:500px;height:40px;">' + valdata1[16] + '</td>' +
    //        '<td class="text-left" style="width:500px;height:40px;">' + valdata1[17] + '</td>' +
    //        '<td class="text-left" style="width:500px;height:40px;">' + valdata1[18] + '</td>' +
    //        '</tr ></tbody > ');

    //    n = n + 1;
    //}
}


function exportTableToExcel(tableID, filename = '') {
    var downloadLink;
    var dataType = 'application/vnd.ms-excel';
    var tableSelect = document.getElementById(tableID);
    var tableHTML = tableSelect.outerHTML.replace(/ /g, '%20');
    // Specify file name
    filename = filename ? filename + '.xls' : 'PendingdumpReport.xls';

    // Create download link element
    downloadLink = document.createElement("a");

    document.body.appendChild(downloadLink);

    if (navigator.msSaveOrOpenBlob) {
        var blob = new Blob(['\ufeff', tableHTML], {
            type: dataType
        });
        navigator.msSaveOrOpenBlob(blob, filename);
    } else {
        // Create a link to the file
        downloadLink.href = 'data:' + dataType + ', ' + tableHTML;

        // Setting the file name
        downloadLink.download = filename;

        //triggering the function
        downloadLink.click();
    }
}

function convertDate(inputFormat) {
    function pad(s) { return (s < 10) ? '0' + s : s; }
    var d = new Date(inputFormat)
    return [pad(d.getDate()), pad(d.getMonth() + 1), d.getFullYear()].join('/')
}







//----------------------------------download function



function Dumpreport() {
    var QueryString = "selectcategory";
    var inputstring = $("#ddlCategory option:selected").val();
    $.ajax({
        type: "POST",
        contentType: "application/json; charset=utf-8",
        url: "PendingDumpReport.aspx/FillBin",
        data: "{QueryString:'" + QueryString + "'}",
        dataType: "json",
        success: function (Result) {
            alert(Result.d);
        },
        error: function (Result) {
            alert(Result);
        }
    });
}



function Reportdown() {
    debugger;
    //var frmdate = convertDate(FDate);
    //var Todate = convertDate(TDate);
    var Querystring1 = "pendingdumpreport";

    var InputString = "" + '¥' + "" + '¥' + "" + '¥' + "" + '¥' + "" + '¥' + "" + '¥' + "" + '¥' + "" + '¥' + "";
    $.ajax({
        type: "POST",
        contentType: "application/json; charset=utf-8",
        url: "PendingDumpReport.aspx/downloadexcel",
        data: "{QueryString:'" + Querystring1 + "',input:'" + InputString + "'}",
        dataType: "json",

        success: function (Result) {
            alert(Result.d);
            // Result = Result.d;
            //if (Result.d.length > 0) {

            //    alert(Result.d);

            //}
            
        },
        error: function (Result) {
            alert(Result.d);
        }
    });
}





function ExportToExcel() {

    var frmdate = convertDate(27 / 05 / 2021);
    //alert(frmdate);
    //var Todate = convertDate(TDate);
    var Querystring1 = "newreport";
    var InputString = "" + '¥' + ""+ '¥' + "" + '¥' + "" + '¥' + "" + '¥' + "" + '¥' + "" + '¥' + "" + '¥' + "";

    var mainid = Querystring1;
    var subid = InputString;
    window.open("ReportDownLoadExcel.aspx?Querystr=" + Querystring1 + "&inp=" + InputString);



}