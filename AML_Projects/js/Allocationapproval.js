$(window).on('load', function () {

    log_access();
    req_empdrop();
    GetUrgency();
    RequestType();

});

function Exit() {
    window.open("index.aspx", "_self");
}

function req_empdrop() {
   
    var QueryString = "reqemp1";
    var inputstring = $("[id*=hdUserId]").val();
    $.ajax({
        type: "POST",
        contentType: "application/json; charset=utf-8",
        url: "Allocation approval.aspx/reqemps",
        data: "{QueryString:'" + QueryString + "',input : '" + inputstring + "'}",
        dataType: "json",
        success: function (Result) {
            var Result = Result.d;
            $('#txt_emp').empty();
            $('#txt_emp').append($("<option></option>").val("-1").html("---SELECT---"));
            $.each(Result, function (data, value) {
                $('#txt_emp').append($("<option></option>").val(value.Id).html(value.Name));

            })
            
        },  
        error: function (Result) {
            alert(Result);
        }


    });
}


function getemp_dtl() {
    
    var QueryString1 = "reqempdtl";
    var inputstring = $("#txt_emp option:selected").text();
    $.ajax({
        type: "POST",
        contentType: "application/json; charset=utf-8",
        url: "Allocation approval.aspx/emp_dtl",
        data: "{QueryString:'" + QueryString1 + "',input : '" + inputstring + "'}",
        dataType: "json",
        success: function (Result) {
            //alert(Result.d);
            Result = Result.d;
            //alert(Result);

            $('#txt_name').val(Result.split('~')[0].toString());
            $('#txt_dep').val(Result.split('~')[1].toString());
            $('#txt_branch').val(Result.split('~')[2].toString());
            $('#txt_mail').val(Result.split('~')[3].toString());
            $('#txt_mob').val(Result.split('~')[4].toString());

            $("[id*=hduserbrid]").val(Result.split('~')[6].toString());
            $("[id*=dep_id]").val(Result.split('~')[5].toString());
            $('#txt_soft').val(Result.split('~')[7].toString());
            $("[id*=hdreqid]").val(Result.split('~')[8].toString());

            //-fn
            
        },

        error: function (Result) {
            alert(Result);
        }
    });


}

//docview
function docviewfn() {

    var QueryString1 = "docview";
    var inputstring = $("#txt_emp option:selected").text();
   // var rsoft = $("#txt_soft").val();
    //var inputstring = emp + '~' + rsoft;

    $.ajax({
        type: "post",
        contentType: "application/json; charset=utf-8",
        url: "Allocation approval.aspx/Viewdoc",
        data: "{QueryString:'" + QueryString1 + "',InputData:'" + inputstring + "'}",
        dataType: "json",
        success: function (Result) {

            Result = Result.d;
            var element = document.createElement('a');
            element.setAttribute('href', '../Image/' + Result);
            element.setAttribute('download', Result);
            element.style.display = 'none';
            document.body.appendChild(element);
            element.click();
            document.body.removeChild(element);
        },
        error: function (Result) {
        }
    });
}


function log_access() {
    var QueryString1 = "loguser";
    var inputstring = $("[id*=hdUserId]").val();

    $.ajax({
        type: "post",
        contentType: "application/json; charset=utf-8",
        url: "Allocation approval.aspx/log",
        data: "{QueryString:'" + QueryString1 + "',InputData:'" + inputstring + "'}",
        dataType: "json",
        success: function (Result) {

            Result = Result.d;
            if (Result == "111") {
            }
            else {
                alert("You are not authorized to view this page!!");
                window.open("index.aspx", "_self");
            }
        },
        error: function (Result) {
        }
    });

}

function GetUrgency() {

    var QueryString = "GetUrgency";
    $.ajax({
        type: "POST",
        contentType: "application/json; charset=utf-8",
        url: "Allocation approval.aspx/getUrgprio",
        data: "{QueryString:'" + QueryString + "'}",
        dataType: "json",
        success: function (Result) {
            $('#ddl_Urgency').empty();
            $('#ddl_Urgency').append($("<option></option>").val("-1").html("Select Urgency/Priority "));
            $.each(Result.d, function (data, value) {
                $('#ddl_Urgency').append($("<option></option>").val(value.PrioId).html(value.PrioName));
            })
           
        },
        error: function (Result) {
            alert('GetUrgency()' + Result.d);
        }

    });
    return;
}


function RequestType() {
     
    var QueryStr = "reqtype";
    $.ajax({
        type: "POST",
        contentType: "application/json; charset=utf-8",
        url: "Allocation approval.aspx/getreqtyp",
        data: "{QueryString:'" + QueryStr + "'}",
        dataType: "json",
        success: function (Result) {
            $('#ddl_ReqType').empty();
            $('#ddl_ReqType').append($("<option></option>").val("-1").html("Select Request Type "));
            $.each(Result.d, function (data, value) {
                $('#ddl_ReqType').append($("<option></option>").val(value.ReqId).html(value.ReqName));
            })
        },
        error: function (Result) {
            alert('RequestType()' + Result.d);
        }

    });
    return;
}

function up_approve() {
   
    debugger;
    var QueryString1 = "approve";
    var appby = $("[id*=hdUserId]").val();
   // var desc = $("#txt_desc").val(); 
    var reqid = $("[id*=hdreqid]").val();
    var emp = $("#txt_emp option:selected").text();
    var brid = $("[id*=hduserbrid]").val();
    var mob = $('#txt_mob').val();
    var urgny = $('#ddl_Urgency').val();
    var reqtyp = $('#ddl_ReqType').val();
    //-------------------
    var urg = $("#ddl_Urgency").val();
    if (urg == -1) {
        alert("Please select Urgency/Priority !!!");
        return false;
    }

    var req = $("#ddl_ReqType").val();
    if (req == -1) {
        alert("Please select Request Type  !!!");
        return false;
    }

    var input = appby + '~' + reqid + '~' + emp + '~' + brid + '~' + mob + '~' + urgny + '~' + reqtyp;   
    

    $.ajax({
        type: "post",
        contentType: "application/json; charset=utf-8",
        url: "Allocation approval.aspx/apv",
        data: "{QueryString:'" + QueryString1 + "',InputData:'" + input + "'}",
        dataType: "json",
        success: function (Result) {

            Result = Result.d;
            alert(Result);
            window.open('Allocation approval.aspx', '_self');
            
        },
        error: function (Result) {
        }
    });
}


function btn_reject() {

    var QueryString1 = "reject";
    var input = $("[id*=hdreqid]").val();
    $.ajax({
        type: "POST",
        contentType: "application/json; charset=utf-8",
        url: "Allocation approval.aspx/btnreject",
        data: "{QueryString:'" + QueryString1 + "',InputData:'" + input + "'}",
        dataType: "json",
        success: function (Result) {
           Result = Result.d;
            alert(Result);
        },
        error: function (Result) {
            alert('RequestType()' + Result.d);
        }

    });
    return;
}