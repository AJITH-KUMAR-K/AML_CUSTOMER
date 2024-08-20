$(window).on('load', function ()
{ 
   
    var QueryString = "get_postid";
    var usr_id = $("[id*=hdUserId]").val();
    $.ajax({
        type: "POST", contentType: "application/json; charset=utf-8",
        url: "itsm_bh_ah_verification.aspx/getpostemp",
        data: "{QueryString:'" + QueryString + "',input:'" + usr_id + "'}",
        dataType: "json",
        success: function (Result) {
           
            Result = Result.d;
         
           
            $("[id*=postbhah]").val(Result); 
            var ids = $("[id*=postbhah]").val();
           
         
            if (Result == "1")
            {
                getdrop();
                $("#ah_staus").hide();
            }
            else if (Result == "2")
            {   
                
                get_ahdrop();
                $("#uploadtkt").hide();
                $("#sts_div").hide();
                $("#ah_staus").show();
            }
        },
        error: function (Result) {
            alert(Result);
        }
    });  
});
function getdrop()
{
    var QueryString = $("[id*=hdBrid]").val();
    $.ajax({
        type: "POST",
        contentType: "application/json; charset=utf-8",
        url: "itsm_bh_ah_verification.aspx/Getstatusup",
        data: "{QueryString:'" + QueryString + "'}",
        dataType: "json",
        success: function (Result) {
            $('#tktlist').empty();
            $('#tktlist').append($("<option></option>").val("-1").html("Select Ticket"));
            $.each(Result.d, function (data, value) {
                $('#tktlist').append($("<option></option>").val(value.ReqId).html(value.ReqName));
            })
        },
        error: function (Result) {
            alert(Result);
        }
    });
}
function get_ahdrop()
{
    var QueryString1 = $("[id*=hdBrid]").val();
    $.ajax({
        type: "POST",
        contentType: "application/json; charset=utf-8",
        url: "itsm_bh_ah_verification.aspx/Getahdropdown",
        data: "{QueryString:'" + QueryString1 + "'}",
        dataType: "json",
        success: function (Result) {
            $('#tktlist').empty();
            $('#tktlist').append($("<option></option>").val("-1").html("Select Ticket"));
            $.each(Result.d, function (data, value) {
                $('#tktlist').append($("<option></option>").val(value.ReqId1).html(value.ReqName1));
            })
        },
        error: function (Result) {
            alert(Result);
        }
    });
}
function getbh_details()
{
   
    var Querystring1 = "getbhdtlsforah";
    var InputString = $('#tktlist option:selected').val();
 
    $.ajax({
        type: "POST",
        contentType: "application/json; charset=utf-8",
        url: "itsm_bh_ah_verification.aspx/getbhdtlsforah",
        data: "{QueryString:'" + Querystring1 + "',input : '" + InputString + "'}",
        dataType: "json",
        success: function (Result) {
            Result = Result.d.split("^");
           
            $("#bh_emp").val(Result[0]);
            $("#verified_bh").val(Result[1]);
            $("#verified_date").val(Result[2]);
            $("#current_status").val(Result[3]);
        },
        error: function (Result) {
            alert(Result);
        }
    });
}
function gettkt_details()
{
    var Querystring = "Gebselectdtls";
    var InputString = $('#tktlist option:selected').val();
    $.ajax({
        type: "POST",
        contentType: "application/json; charset=utf-8",
        url: "itsm_bh_ah_verification.aspx/getsub",
        data: "{QueryString:'" + Querystring + "',input : '" + InputString + "'}",
        dataType: "json",
        success: function (Result) {
            Result = Result.d.split("^");
            $("#txt_Desc").val(Result[0]);
            $("#re_item").val(Result[1]);
            var ids = $("[id*=postbhah]").val();
          
            if (ids == "2") {
               
                $("#ahsess").show();
                getbh_details();
            }
        },
        error: function (Result) {
            alert(Result);
        }
    });
}

function confirmreplace() 
{
    var in_tkt = $("#tktlist option:selected").val();
    var InputString = $('#ddlsts option:selected').val();
    var InputString12 = $('#ddlstsah option:selected').val();
    var re_mk = $("#bh_remarks").val();
    var item = $("#re_item").val();
    if (in_tkt == '-1') {
        alert("Select Incident id");
        return false;
    }
    if (item == "-1") {
        alert("Select Item to replace");
        return false;
    }
    if (InputString == "-1") {
        alert("Select status to change");
        return false;
    }
    if (re_mk == "") {
        alert("Enter Remarks");
        return false;
    }
    var fileList = document.getElementById("FileUpload").files;
    var fileReader = new FileReader();
  
    var br_id = $("[id*=hdBrid]").val();
    var usr_id = $("[id*=hdUserId]").val();
   
    var bh_ah = $("[id*=postbhah]").val();
   
    var InputData = "";
    if (bh_ah == "1") {
         InputData = $('#tktlist option:selected').val() + "¥" + InputString + "¥" + br_id + "¥" + usr_id + "¥" + re_mk + "¥" + item + "¥" + bh_ah;

    }
    else
    {
        InputData = $('#tktlist option:selected').val() + "¥" + InputString12 + "¥" + br_id + "¥" + usr_id + "¥" + re_mk + "¥" + item + "¥" + bh_ah;

    }
    var qryst="contkts"
    if ($('#FileUpload').val() == '') {
        $.ajax({
            type: "POST",
            contentType: "application/json; charset=utf-8",
            url: "itsm_bh_ah_verification.aspx/bhveridependency",
            data: "{QueryString:'" + qryst+"',input:'" + InputData + "'}",
            dataType: "json",
            success: function (Result) {
              
                if (Result.d.length > 0) {
                    alert('Status updated');
                    window.open('itsm_bh_ah_verification.aspx', '_self');

                }
               
            },
            error: function (Result) {
                alert(Result.d);
            }
        });
    }
    else {

    if (fileReader && fileList && fileList.length)
    {
        var d = new Date();
        var fileName = fileList[0].name;
        fileReader.readAsDataURL(fileList[0]);
        fileReader.onload = function () {
            var imageData = fileReader.result;
            var d2 = imageData.split(":");
            var d3 = d2[1].split(";");
            var imageData = fileReader.result;
            var d1 = fileList[0].name.split(".");
            var bh_ah = $("[id*=postbhah]").val();
            if (bh_ah == "1") {

                var InputData = $('#tktlist option:selected').val() + "¥" + fileName.replace(/[ ]/gi, '') + "¥" + InputString + "¥" + br_id + "¥" + usr_id + "¥" + re_mk + "¥" + item + "¥" + bh_ah;
            }
            else
            {
                var InputData = $('#tktlist option:selected').val() + "¥" + fileName.replace(/[ ]/gi, '') + "¥" + InputString12 + "¥" + br_id + "¥" + usr_id + "¥" + re_mk + "¥" + item + "¥" + bh_ah;

            }
            $.ajax({
                type: "POST",
                contentType: "application/json; charset=utf-8",
                url: "itsm_bh_ah_verification.aspx/confirmdocument",
                data: "{val:'" + InputData + "',upload_file:'" + imageData + "'}",
                dataType: "json",
                success: function (Result) {
                   
                    if (Result.d.length > 0) {
                        alert('Status updated');
                        window.open('itsm_bh_ah_verification.aspx', '_self');
                     
                    }
                    else {
                        alert('Document not updated.Try Again');
                    }
                },
                error: function (Result) {
                    alert(Result.d);
                }
            });
        }
        }
    }
}

function Attachmentshow() {

    $("#FileAttch").val("");
    // alert('WORKLOG VIEW'+dt);
    // $('#worklogtb').empty();glob
    $('#AttachmentDtl').show();
    var InputString = $('#tktlist option:selected').val()
  
    var Querystring = "AttachmentList_bhah";
    $.ajax({
        type: "POST",
        contentType: "application/json; charset=utf-8",
        url: "itsm_bh_ah_verification.aspx/AttchDtl",
        data: "{QueryStr : '" + Querystring + "',input :'" + InputString + "'}",
        dataType: "json",
        success: function (Result) {

            if (Result.d.length > 0) {
                $('#AttachmentDtl').empty();
                $('#AttachmentDtl').show();

                for (var i = 0; i < Result.d.length; i++) {
                    $('#AttachmentDtl').append('<div class="card border-success mb-1 bg-light rounded " id="' + Result.d[i].Id + '" style="max-width:100rem;">' +
                        ' <div class="card-body ">' +
                        ' <p class="card-title crdstyle">' + Result.d[i].Name + '</p>' +
                        '<input name="' + Result.d[i].Id + '" type="button" value="VIEW" class="btn-info" data-toggle="tooltip" data-placement="right" title="View"  onclick="DocView(this.name)" data-backdrop="false"/>' +
                        '</div> </div >');
                }
            }
            else {

                $('#AttachmentDtl').empty();
                $('#AttachmentDtl').show();
            }
        },
        error: function (Result) {
            alert(Result);
        }
    });



}

function DocView(dt) {

    ViewDocument(dt);
}
