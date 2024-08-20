$('#fupImports').bind('change', function () {
    $("#exceltable").empty();
    var filename = $("#fupImports").val();

    if (/^\s*$/.test(filename)) {
        $(".file-upload").removeClass('active');
        $("#noFile").text("No file chosen...");
    }
    else {
        $(".file-upload").addClass('active');
        $("#noFile").text(filename.replace("C:\\fakepath\\", ""));
    }
});

function excelup(){
    $("#exceltable").empty();
    $("#exceltable1").empty();

}

$(window).on('load', function () {
   
});

function UploadFiles() {
  

    var itmdata = '';

    //--------------------------------------
    var table = document.getElementById('exceltable');
    var rowLength = table.rows.length;

    if (rowLength == 0) {
        alert("Upload  File...!!!");
        return false;
       
    }

    for (var i = 1; i < rowLength; i++) {
        const dateCell = table.rows[i].cells[2];
        const dateString = dateCell.innerHTML;
        const formattedDate = formatDate(dateString);

        itmdata = itmdata + table.rows[i].cells[0].innerHTML + '~' + table.rows[i].cells[1].innerHTML + '~' + formattedDate + '~' + table.rows[i].cells[3].innerHTML  +'~'+ $("[id*=hdvUserID]").val() + 'æ';
    }

    if (itmdata == "") {
        alert("Please click View button or upload excel data");
      
    }
    else {
       
        $.ajax({
            type: "POST",
            url: "Exel_export_sanction.aspx/Confirm",
            contentType: "application/json; charset=utf-8",
            data: "{data:'" + itmdata + "'}",
            dataType: "json",

            success: function (Result) {

                Result = Result.d;
                alert(Result);
                $("#exceltable").empty();
                $("#fupImports").val('');
            },

            error: function (Result) {
            }
        });
    }

}

function frmExit() {
   // window.location = "../index.aspx", "_self";
   window.location = "../aml_customer/index.aspx", "_self";

}
function ExportToTable() {
    $("#exceltable").empty();
    var regex = /^([a-zA-Z0-9\s_\\.\-:])+(.xlsx|.xls)$/;
    /*Checks whether the file is a valid excel file*/
    var CheckValid = regex.test($("#fupImports").val().toLowerCase());
    console.log(CheckValid);
    if (CheckValid) {

        var xlsxflag = false; /*Flag for checking whether excel is .xls format or .xlsx format*/
        if ($("#fupImports").val().toLowerCase().indexOf(".xlsx") > 0) {

            xlsxflag = true;
        }
        /*Checks whether the browser supports HTML5*/
        if (typeof (FileReader) != "undefined") {
            var reader = new FileReader();
            reader.onload = function (e) {
                var data = e.target.result;
                /*Converts the excel data in to object*/
                if (xlsxflag) {
                    var workbook = XLSX.read(data, { type: 'binary' });
                }
                else {
                    var workbook = XLS.read(data, { type: 'binary' });
                }
                /*Gets all the sheetnames of excel in to a variable*/
                var sheet_name_list = workbook.SheetNames;

                var cnt = 0; /*This is used for restricting the script to consider only first sheet of excel*/
                sheet_name_list.forEach(function (y) { /*Iterate through all sheets*/
                    /*Convert the cell value to Json*/
                    if (xlsxflag) {
                        var exceljson = XLSX.utils.sheet_to_json(workbook.Sheets[y]);
                    }
                    else {
                        var exceljson = XLS.utils.sheet_to_row_object_array(workbook.Sheets[y]);
                    }
                    if (exceljson.length > 0 && cnt == 0) {
                        BindTable(exceljson, '#exceltable');
                        cnt++;
                    }
                });
                $('#exceltable').show();
            }
            if (xlsxflag) {/*If excel file is .xlsx extension than creates a Array Buffer from excel*/
                reader.readAsArrayBuffer($("#fupImports")[0].files[0]);

            }
            else {
                reader.readAsBinaryString($("#fupImports")[0].files[0]);

            }
        }
        else {
            alert("Sorry! Your browser does not support HTML5!");
        }
    }
    else {
        alert("Please upload a valid Excel file!");
    }
}
function BindTable(jsondata, tableid) {
    /*Function used to convert the JSON array to Html Table*/
    $(tableid).empty();
    var columns = BindTableHeader(jsondata, tableid); /*Gets all the column headings of Excel*/
    var tbod$ = $('<tbody/>');
    $(tableid).append(tbod$);
    for (var i = 0; i < jsondata.length; i++) {
        var row$ = $('<tr/>');
        for (var colIndex = 0; colIndex < columns.length; colIndex++) {
            var cellValue = jsondata[i][columns[colIndex]];
            if (cellValue == null)
                cellValue = "";
            row$.append($('<td/>').html(cellValue));
        }
        $(tableid).append(row$);
    }
}
function BindTableHeader(jsondata, tableid) {/*Function used to get all column names from JSON and bind the html table header*/
    var columnSet = [];
    var headerTr$ = $('<thead class="bg-success text-white align-center"><tr/>');
    for (var i = 0; i < jsondata.length; i++) {
        var rowHash = jsondata[i];
        for (var key in rowHash) {
            if (rowHash.hasOwnProperty(key)) {
                if ($.inArray(key, columnSet) == -1) {/*Adding each unique column names to a variable array*/
                    columnSet.push(key);
                    headerTr$.append($('<th scope="col1"/>').html(key));
                }
            }
        }
    }
    $(tableid).append(headerTr$);
    return columnSet;
}
function formatDate(dateString) {
    const months = ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec'];
    const date = new Date(dateString);
    const day = date.getDate().toString().padStart(2, '0');
    const month = months[date.getMonth()];
    const year = date.getFullYear();
    return `${day}/${month}/${year}`;
}

///////////////////////////////BLACK LIST EXCEL UPLOAD//////////

$('#fupImports1').bind('change', function () {
    $("#exceltable1").empty();
    var filename = $("#fupImports1").val();

    if (/^\s*$/.test(filename)) {
        $(".file-upload").removeClass('active');
        $("#noFile").text("No file chosen...");
    }
    else {
        $(".file-upload").addClass('active');
        $("#noFile").text(filename.replace("C:\\fakepath\\", ""));
    }
});

function ExportToTable1() {
    $("#exceltable1").empty();
    var regex = /^([a-zA-Z0-9\s_\\.\-:])+(.xlsx|.xls)$/;
    /*Checks whether the file is a valid excel file*/
    var CheckValid = regex.test($("#fupImports1").val().toLowerCase());
    console.log(CheckValid);
    if (CheckValid) { 

        var xlsxflag = false; /*Flag for checking whether excel is .xls format or .xlsx format*/
        if ($("#fupImports1").val().toLowerCase().indexOf(".xlsx") > 0) {

            xlsxflag = true;
        }
        /*Checks whether the browser supports HTML5*/
        if (typeof (FileReader) != "undefined") {
            var reader = new FileReader();
            reader.onload = function (e) {
                var data = e.target.result;
                /*Converts the excel data in to object*/
                if (xlsxflag) {
                    var workbook = XLSX.read(data, { type: 'binary' });
                }
                else {
                    var workbook = XLS.read(data, { type: 'binary' });
                }
                /*Gets all the sheetnames of excel in to a variable*/
                var sheet_name_list = workbook.SheetNames;

                var cnt = 0; /*This is used for restricting the script to consider only first sheet of excel*/
                sheet_name_list.forEach(function (y) { /*Iterate through all sheets*/
                    /*Convert the cell value to Json*/
                    if (xlsxflag) {
                        var exceljson = XLSX.utils.sheet_to_json(workbook.Sheets[y]);
                    }
                    else {
                        var exceljson = XLS.utils.sheet_to_row_object_array(workbook.Sheets[y]);
                    }
                    if (exceljson.length > 0 && cnt == 0) {
                        BindTable(exceljson, '#exceltable1');
                        cnt++;
                    }
                });
                $('#exceltable1').show();
            }
            if (xlsxflag) {/*If excel file is .xlsx extension than creates a Array Buffer from excel*/
                reader.readAsArrayBuffer($("#fupImports1")[0].files[0]);

            }
            else {
                reader.readAsBinaryString($("#fupImports1")[0].files[0]);

            }
        }
        else {
            alert("Sorry! Your browser does not support HTML5!");
        }
    }
    else {
        alert("Please upload a valid Excel file!");
    }
}

function UploadFiles1() {


    var itmdata = '';

    //--------------------------------------
    var table = document.getElementById('exceltable1');
    var rowLength = table.rows.length;

    if (rowLength == 0) {
        alert("Upload  File...!!!");
        return false;

    }

    for (var i = 1; i < rowLength; i++) {
        const dateCell = table.rows[i].cells[2];
        const dateString = dateCell.innerHTML;
        const formattedDate = formatDate(dateString);
        //itmdata = itmdata + table.rows[i].cells[0].innerHTML + '~' + table.rows[i].cells[1].innerHTML + '~' + formattedDate + '~' + table.rows[i].cells[3].innerHTML + '~' + $("[id*=hdvUserID]").val() + 'æ';

        itmdata = itmdata + table.rows[i].cells[0].innerHTML + '~' + table.rows[i].cells[1].innerHTML + '~' + table.rows[i].cells[2].innerHTML + '~' + $("[id*=hdvUserID]").val() + 'æ';
    }

    if (itmdata == "") {
        alert("Please click View button or upload excel data");

    }
    else {

        $.ajax({
            type: "POST",
            url: "Exel_export_sanction.aspx/Confirm2",
            contentType: "application/json; charset=utf-8",
            data: "{data:'" + itmdata + "'}",
            dataType: "json",

            success: function (Result) {

                Result = Result.d;
                alert(Result);
                $("#exceltable1").empty();
                $("#fupImports1").val('');
            },

            error: function (Result) {
            }
        });
    }

}
