function ViewDocument(dt) {
    debugger;
    String2 = "PROC_ITSM";
    String3 = "AttShow";
    $.ajax({
        type: "POST",
        contentType: "application/json; charset=utf-8",
        url: "ServiceViewDoc.asmx/DocumentsDownload",
        data: "{QueryString:'" + dt + "',QueryString1:'" + String2 + "',InputString: '" + String3 + "'}",
        dataType: "json",
        success: function (Result) {           
            if (Result.d != 'NoData') {
                var fileName = Result.d;
                var myUrl = "IMAGES/"+ fileName;
                OpenDialog(myUrl, 875, 650, function (termsOfServiceAccepted) {
                    if (termsOfServiceAccepted) {
                        $.ajax({
                            type: "POST",
                            contentType: "application/json;charset=utf-8",
                            url: "../ServiceViewDoc.asmx/deleteDownloadFile",
                            data: "{input: '" + fileName + "' }",
                            dataType: "json",
                            success: function (Result) {
                            },
                            error: function (Result) {
                            }
                        });
                    }
                });
            } else {
                alert("No Images Uploaded");
            }

        },
        error: function (Result) {

        }
    });
}

function OpenDialog(url, width, height, callback) {
    var win = window.open(url, "Manappuram Document Verification", width, height, "menubar=0,toolbar=0", "_blank");
    var timer = setInterval(function () {
        if (win.closed) {
            clearInterval(timer);
            var returnValue = true;
            callback(returnValue);
        }
    }, 10);
}

function ViewDocumentPM(String1) {
    debugger;
    String2 = "PROC_ITSM";
    String3 = "AttShowPM";
    $.ajax({
        type: "POST",
        contentType: "application/json; charset=utf-8",
        url: "ServiceViewDoc.asmx/DocumentsDownload",
        data: "{QueryString:'" + String1 + "',QueryString1:'" + String2 + "',InputString: '" + String3 + "'}",
        dataType: "json",
        success: function (Result) {
            if (Result.d != 'NoData') {
                var fileName = Result.d;
                var myUrl = "IMAGES/" + fileName;

                window.open("IMAGES/" + Result.d);

            } else {
                alert("No Attachments Uploaded");
            }

        },
        error: function (Result) {

        }
    });
}
function ViewDocumentCR(String1) {
    //alert(String1);
    debugger;
    String2 = "PROC_ITSM";
    String3 = "AttShowCR";
    $.ajax({
        type: "POST",
        contentType: "application/json; charset=utf-8",
        url: "ServiceViewDoc.asmx/DocumentsDownload",
        data: "{QueryString:'" + String1 + "',QueryString1:'" + String2 + "',InputString: '" + String3 + "'}",
        dataType: "json",
        success: function (Result) {
            if (Result.d != 'NoData' && Result.d != 'NO ATTACHMENT')
            {
                var fileName = Result.d;
                
                                window.open("IMAGES/" + Result.d);
                            
               
            } else {
                alert("No Attachments Uploaded");
            }

        },
        error: function (Result) {

        }
    });
}