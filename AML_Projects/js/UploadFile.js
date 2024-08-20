

function CallHandler() {

    $.ajax({

        url: "Upload.ashx",

        contentType: "application/json; charset=utf-8",

        dataType: "json",

        data: { 'Id': '10000' },

        responseType: "json",

        success: OnComplete,

        error: OnFail


    });

    return false;

}

function OnComplete(result) {

    alert([result.Id, result.Name, result.Age, result.Department]);

}

function OnFail(result) {

    alert('Request Failed');

}

