$('#fupImports').bind('change', function () {
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


//$(".file-select-button").on("change", function () {
//    var filename = $("#fupImports").val();

//    if (/^\s*$/.test(filename)) {
//        $(".file-upload").removeClass('active');
//        $("#noFile").text("No file chosen...");
//    }
//    else {
//        $(".file-upload").addClass('active');
//        $("#noFile").text(filename.replace("C:\\fakepath\\", ""));
//    }
//});

//$(".custom-file-input").on("change", function () {
//    var fileName = $(this).val().split("\\").pop();
//    $(this).siblings(".custom-file-label").addClass("selected").html(fileName);
//});

$(window).on('load', function () {
    //$('#1').hide();
    //$('#2').hide();
    //alert("11");
});

function UploadFiles() {


   // alert("1");

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
        //itmdata=REF_ID + "~" + NAME + "~" + DOB + "~" + NATIOANALITY;
    }

   // alert(itmdata);
    if (itmdata == "") {
        alert("Please click View button or uplod excel data");
    }
    else {
        //$.ajax({
        //    type: "post",
        //    contentType: "application/json; charset=utf-8",
        //    url: "ExcelUpld_Sanction.aspx/Confirm",
        //    data: "{data:'" + itmdata + "'}",
        //    dataType: "json",
        //    success: function (Result) {
        //        // alert(Result.d);
        //        Result = Result.d;
        //        alert(Result);
        //    }
        //});
        $.ajax({
            type: "POST",
            url: "Exel_export_sanction.aspx/Confirm",
            contentType: "application/json; charset=utf-8",
            data: "{data:'" + itmdata + "'}",
            dataType: "json",

            success: function (Result) {

                Result = Result.d;
                alert(Result);
            },

            error: function (Result) {
            }
        });
    }

}

function frmExit() {
    window.location = "../index.aspx","_self";
}
function ExportToTable() {
    var regex = /^([a-zA-Z0-9\s_\\.\-:])+(.xlsx|.xls)$/;
    /*Checks whether the file is a valid excel file*/
    if (regex.test($("#fupImports").val().toLowerCase())) {

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