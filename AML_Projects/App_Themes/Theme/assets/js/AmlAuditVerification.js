$(window).on('load', function () {
    access();
    // $('#exampleModalCenter').modal('hide');

    //if (post_id != 1 || post_id != 10) {
    //    $('#exampleModalCenter').modal('show');

    //    dropfillbranch();
    //}
    const currentDate = new Date();

    const formattedDate = currentDate.toLocaleDateString();

    //console.log(formattedDate);

    $("#curr_address").removeAttr("oninput");
   // $("#per_address").prop("readonly", true);

    $("#date").val(formattedDate);
});


var post_id = "";

function access() {
    InputData = $("[id*=hdUserId]").val() + "~" + $("[id*=hdBranchId]").val();
    $.ajax({
        type: "post",
        contentType: "application/json; charset=utf-8",
        url: "AmlAuditVerification.aspx/Access",
        data: "{usr_ID:'" + InputData + "'}",
        dataType: "json",
        success: function (Result) {
            var res = Result.d;
            var mess = res.split("~")[0];
            post_id = res.split("~")[1];
            
            if (mess == "111") {
                alert("You are not authorised to view this page!!");
                window.open('../Index.aspx', '_self');//aml_customer
                return false;
            }
            if (post_id == "1" || post_id == "10" || post_id =="309") {
                $('#exampleModalCenter').modal('hide');

            }
            else {
                $('#exampleModalCenter').modal('show');
                dropfillbranch();
            }


        },
        error: function (Result) {

        }

    
    });
     
}

var branchid = "";
var dep = "";
function dropfillbranch() {
    var input = "";
    var val = "";
    var flg = 3;
    $.ajax({
        type: "post",
        contentType: "application/json; charset=utf-8",
        url: "AmlAuditVerification.aspx/DropFillData",
        data: "{QueryString:'" + val + "',input : '" + input + "',flag : '" + flg + "'}",
        dataType: "json",
        success: function (Result) {

            // alert(Result.d);
            $('#branchId').empty();
            $('#branchId').append($("<option></option>").val("-1").html("--Select--"));
            $.each(Result.d, function (data, value) {
                $('#branchId').append($("<option></option>").val(value.id).html(value.name));
            })

            //$("#branchId").val(1435);
        },
        error: function (Result) {

        }
    });
}
function fetch_vertical(val) {
    if (val == 2 || val == 6) {
        document.getElementById('VerticalGroup').style.display = 'block';

        var input = "";
        var flg = 1;
        $.ajax({
            type: "post",
            contentType: "application/json; charset=utf-8",
            url: "AmlAuditVerification.aspx/DropFillData",
            data: "{QueryString:'" + val + "',input : '" + input + "',flag : '" + flg + "'}",
            dataType: "json",
            success: function (Result) {

                // alert(Result.d);
                $('#ddl_vertival').empty();
                $('#ddl_vertival').append($("<option></option>").val("-1").html("--Select--"));
                $.each(Result.d, function (data, value) {
                    $('#ddl_vertival').append($("<option></option>").val(value.id).html(value.name));
                })


            },
            error: function (Result) {

            }
        });
    }
    else {
        document.getElementById('VerticalGroup').style.display = 'none';
        fetch_alert();
    }
}
function fetch_alert() {
    var flg = 2;
    var val = "";
    if (post_id == 1 || post_id == 10) {
        val = $("[id*=hdBranchId]").val() + '~' + post_id;
        document.getElementById('commentdiv').style.display = 'none';
        document.getElementById('commentdiv1').style.display = 'none';
    }
    else if (post_id == 309) {
        val = $("[id*=hdUserId]").val() + '~' + post_id;
        $('#occupation').attr('readonly', true);
        $('#ann_income').attr('readonly', true);
        $('#purpose').attr('readonly', true);
        $('#distance').attr('readonly', true);
        $('#income_src').attr('readonly', true);
        $('#near_br_id').attr('readonly', true);
        $('#curr_address').attr('readonly', true);
        $('#per_address').attr('readonly', true);
        $("#myCheckbox").prop("disabled", !this.checked);
        document.getElementById("btn_reject").style.display = "block";
        document.getElementById("commentdiv").style.display = "block";
        document.getElementById("commentdiv1").style.display = "block";

    }
    else {
        val = branchid + '~' + post_id;
        $('#occupation').attr('readonly', true);
        $('#ann_income').attr('readonly', true);
        $('#purpose').attr('readonly', true);
        $('#distance').attr('readonly', true);
        $('#income_src').attr('readonly', true);
        $('#near_br_id').attr('readonly', true);
        $('#curr_address').attr('readonly', true);
        $('#per_address').attr('readonly', true);
        $("#myCheckbox").prop("disabled", !this.checked);
        document.getElementById("btn_reject").style.display = "block";
        document.getElementById("commentdiv").style.display = "block";
        document.getElementById("commentdiv1").style.display = "block";
    }
    dep = $("#ddl_department").val();
    if (dep == 2 || dep == 6) {
        var input = $("#ddl_vertival option:selected").text();
    }
    else {
        var input = $("#ddl_department option:selected").text();
    }


    $.ajax({
        type: "post",
        contentType: "application/json; charset=utf-8",
        url: "AmlAuditVerification.aspx/DropFillData",
        data: "{QueryString:'" + val + "',input : '" + input + "',flag : '" + flg + "'}",
        dataType: "json",
        success: function (Result) {

            // alert(Result.d);
            $('#ddl_alert').empty();
            $('#ddl_alert').append($("<option></option>").val("-1").html("--Select--"));
            $.each(Result.d, function (data, value) {
                $('#ddl_alert').append($("<option></option>").val(value.id).html(value.name));
            })


        },
        error: function (Result) {

        }
    });
}
function getDataTableHeader() {
  
   
    //  document.getElementById("Loading").style.display = "block";
    var QueryString = "1";
    var Drop1 = dep;
    if (post_id == 1 || post_id == 10) {
        cust_data_fetch();
        flg = 4;
        
    }
    else {
        cust_data_fetchl2();
        flg = 15;
        
    }


    
    var alert_text = $("#ddl_alert option:selected").text();

    $("#table-report").html("");
    AdditionalQuestions = "";

    $.ajax({
        type: "post",
        contentType: "application/json; charset=utf-8",
        url: "AmlAuditVerification.aspx/getFillData",
        data: "{QueryString:'" + Drop1 + "', data:'" + alert_text + "', flag:'" + flg + "'}",

        success: function (response) {

            // Get the table header from the response.
            //  document.getElementById("Loading").style.display = "none";
            // document.getElementById("tbl-content").style.display = 'block';

            $("#table-report").html(response.d);

            $("#UserNameLbl").html($("[id*=hdUserName]").val() + "(" + $("[id*=hdUserId]").val() + ")");
            $("#Branchlbl").html($("#branchId option:selected").text());

            //$("#table-report textarea.form-control").val("Auto Remark Filled");

        }
    });
}
function radiocheck(vall) {
    var cus_id = $("#ddl_alert").val();
    document.getElementById("declaration").style.display = "block";
    if (vall == 1) {
        $("#lastconfirm").html("observed the irregularities in the transactions of the Customer ID '" + cus_id + "' . It is recommended to do the further procedure as per policy.");
    }
    else {
        $("#lastconfirm").html("not found any discrepancy in the transactions of the Customer ID '" + cus_id + "' . It is recommended to close the alert as this is a normal transaction.");
    }
}
var CloseStatus = "";
var QuestionChoosed = "";
function CheckConfirm(QstID, thisProp, AddAns, MainQuestion, DataToggle) {

    QuestionChoosed = "";

   


    if (AddAns != "") {
        QuestionChoosed = QstID;
        CloseStatus = thisProp.name;
        var TableData = AddAns.split(",");
        //alert("Question ID : " + QstID);
        $('#table-Question-Choose').empty();
        $('#table-Question-Choose').append(`<thead class='bg-primary text-white'><tr><td>Criteria</td><td>Check</td></tr></thead><tbody>`);

        //Display Questions
        for (var i = 0; i < TableData.length; i++) {
            var CheckStat = "";
            var Checkboxid = "";


            $('#table-Question-Choose').append(`<tr><td>${TableData[i]}</td><td><input type="checkbox" name="${QstID}" ${CheckStat} class="data-toggle" id="AddQues${QstID}${i}"/></td></tr>`);
        }
        $('#QuetionPopUp').modal('show');
        var ar = AdditionalQuestions.split("@");


        if (DataToggle == 1) {

            $(".data-toggle").attr("onclick", "ToggleCheck(this.id)");
        }
        else {

            $(".data-toggle").removeAttr("onclick");

        } 


        //Auto Checked when already selected
        for (var i = 0; i < TableData.length; i++) {

            for (var j = 0; j < ar.length; j++) {

                //Normal ~3~1

                var check = ar[j].includes(`~${QstID}~${i + 1}`);

                if (check) {

                    $("#AddQues" + QstID + i).prop("checked", true);

                }

            }
        }


        $('#table-Question-Choose').append('</tbody>');
        $('#QuestionsTitle').html(MainQuestion);

    }

    else {


        //remove unselected Question

        var ReSelectionStatus = false;

        ReSelectionStatus = AdditionalQuestions.includes(`~${QstID}~`);
        debugger;

        if (ReSelectionStatus) {

            var ar = AdditionalQuestions.split("@");
            var RemoveIndexes = [];
            for (var i = 0; i < ar.length - 1; i++) {

                var check = ar[i].includes(`~${QstID}~`);

                if (check) {

                    AdditionalQuestions = AdditionalQuestions.replace(ar[i] + "@", "");

                }
            }

            // alert("Changes Made :" + AdditionalQuestions);

            //var s = AdditionalQuestions.split("@").filter((_, index) => !RemoveIndexes.includes(index));

            //console.log(s);

        }

    }


}


function ToggleCheck(id) {

    $(".data-toggle").prop("checked", false);

    $("#"+id).prop("checked", true);

}

var AdditionalQuestions = "";
var CurrentlySelectedData = "";
var TblData = "";
function ConfirmOptionSelected() {
    CurrentlySelectedData = "";
    var isAtLeastOneChecked = false;

    var CheckProp = document.querySelectorAll('input[name="' + QuestionChoosed + '"]');

    CheckProp.forEach((checkbox) => {

        if (checkbox.checked) {
            isAtLeastOneChecked = true;
            return;
        }
    });



    if (!isAtLeastOneChecked) {
        alert('Please select at least one option.');
        AdditionalQuestions = AdditionalQuestions.replace(TblData, "");
        return false;
    }
    else {

        var tableChoose = document.getElementById("table-Question-Choose");

        for (var i = 1; i < tableChoose.rows.length; i++) {

            var j = i - 1;
            var CheckBoxClick = $("#AddQues" + QuestionChoosed + j).prop("checked");
            TblData = tableChoose.rows[i].cells[0].innerHTML + "~" + QuestionChoosed + "~" + i + "@";

            if (CheckBoxClick) {

                if (!AdditionalQuestions.includes(TblData)) {

                    AdditionalQuestions += tableChoose.rows[i].cells[0].innerHTML + "~" + QuestionChoosed + "~" + i + "@";

                }

            }
            else {

                AdditionalQuestions = AdditionalQuestions.replace(TblData, "");

            }

        }

        CurrentlySelectedData = AdditionalQuestions;
        // alert(AdditionalQuestions);
        $('#QuetionPopUp').modal('hide');
    }




}

function QuesClose() {
    $("input[name='" + CloseStatus + "']").prop("checked", false);
    //if (CurrentlySelectedData != "") {

    //    if (confirm("if items are Selected this window, it will be remove..Are you Sure to Close this Window ?") == true) {
    //        $("input[name='" + CloseStatus + "']").prop("checked", false);
    //        AdditionalQuestions = AdditionalQuestions.replace(CurrentlySelectedData, "");
    //        $('#QuetionPopUp').modal('hide');
    //    }
    //}
    //else {
    //    $('#QuetionPopUp').modal('hide'); 
    //}
}

function selectbranch() {
    branchid = $("#branchId").val();
}

function FinalConfirmation() {

    var validationStatus = validation();
    
    if (validationStatus) {
        var usr_commt = $("#comments_by").val()
        var TableDetails = document.getElementById("table-report");
        var FinalRadioStatus = "";

        var PrevDeclaration = $("input[name='Check']:checked").val();

        for (i = 1; i < TableDetails.rows.length; i++) {

            var Remark = $("#Remark" + i).val();
            var Yes = $("#Yes" + i).prop("checked");
            var YesType = typeof (Yes);

            var No = $("#No" + i).prop("checked");
            var NoType = typeof (No);
            var Others = $("#Others" + i).prop("checked");
            var OthersType = typeof (Others);

            if (!Yes && !No && YesType != "undefined" && NoType != "undefined") {

                alert("Question No: " + i + " - Please Confirm Yes or No!!!");

                $("#Yes" + i).focus();
                $("#No" + i).focus();
                return false;
            }

            if (!Others && OthersType != "undefined") {

                alert("Question No: " + i + " - Please Click and Choose Others");

                $("#Others" + i).focus();

                return false;
            }


            //if (Remark == "") {

            //    alert("Question No: " + i + " - Please Fill Remark");

            //    $("#Remark" + i).focus();

            //    return false;
            //}


        }
        if ($("#comments_by").val() == "") {
            alert("kindly enter Comments on alerts by verification officer");
            return false;
        }
        

        if (typeof (PrevDeclaration) == "undefined") {

            alert("Whether any discrepancy found in transactions ??");
            return false;
        }


        if ($("#declar").prop("checked") == false) {

            alert("Please Accept the Declaration before submit !!");
            return false;
        }



        if (confirm("Are you Sure to confirm ??") == true) {

            var CheckAnsByRadio = document.querySelectorAll('#table-report input[type="radio"]');
            var FinalRadioStatus = '';
            var indexOfRemark = 1;
            CheckAnsByRadio.forEach((r) => {

                if (r.checked) {

                    var idOfTextArea = r.value.split("~")[2];
                    FinalRadioStatus += r.value + "~" + $("#Remark" + idOfTextArea).val() + "@";
                }

                indexOfRemark++;
            });

            //alert(FinalRadioStatus);
           //  alert(AdditionalQuestions);


            DataInsertionFinal(FinalRadioStatus, AdditionalQuestions)

        }
    }

}
function DataInsertionFinal(FinalRadioStatus, AdditionalQuestions) {

    var flg = 10;
    var val = "";
    var input = "";
    var cus_id = $("#ddl_alert").val();
    var dept_name = "";
    //var vert_name = "";
    var textBox_Details = "";
    var dept = $("#ddl_department").val();
    var vert = $("#ddl_vertival").val();
    var alert_text = $("#ddl_alert option:selected").text();
    var alert_id = alert_text.split("-")[0];
    var user_id = $("[id*=hdUserId]").val();
    var PrevDeclaration = $("input[name='Check']:checked").val();
    if (dept != 2 || dept != 6) {
        dept_name = $("#ddl_department option:selected").text();
    }
    else {
        dept_name = $("#ddl_vertival option:selected").text();
    }
    if (post_id == 1 || post_id == 10) {
        val = FinalRadioStatus;
        input = AdditionalQuestions;
        textBox_Details = $("#br_id").val() + "~" + dept_name + "~" + alert_id + "~" + cus_id + "~" + user_id + "~" + $("#gard_name").val() + "~" + $("#house_no").val() + "~" + $("#landmark").val() + "~" + $("#place").val() + "~" + $("#po").val() + "~" + $("#pin").val() + "~" + $("#distirct").val() + "~" + $("#state_a").val() + "~" + $("#occupation").val() + "~" + $("#ann_income").val() + "~" + $("#purpose").val() + "~" + $("#distance").val() + "~" + $("#near_br_id").val() + "~" + $("#near_br_name").val() + "~" + $("#curr_address").val() + "~" + $("#per_address").val() + "~" + PrevDeclaration + "~" + $("#br_id").val() + "~" + $("#comments_by").val() + "~" + $("#ad_comments").val() + "~" + $("#income_src").val();
    }
    else if (post_id == 309) {
        textBox_Details = dept_name + "~" + alert_id + "~" + cus_id + "~" + user_id + "~" + PrevDeclaration + "~" + $("#comments_by").val() + "~" + $("#ad_comments").val();
    }
    else {
        textBox_Details = dept_name + "~" + alert_id + "~" + cus_id + "~" + user_id + "~" + PrevDeclaration + "~" + $("#comments_by").val() + "~" + $("#ad_comments").val();
    }
    //alert(textBox_Details);


    $.ajax({
        type: "post",
        contentType: "application/json; charset=utf-8",
        url: "AmlAuditVerification.aspx/SaveData",
        data: "{Data1:'" + val + "',input : '" + input + "',flag : '" + flg + "',Data2 : '" + textBox_Details + "',flag2 : '" + post_id + "'}",
        dataType: "json",
        success: function (Result) {

            alert(Result.d);
            //window.open('AmlAuditVerification.aspx', '_self');
            window.open('/aml_customer/AmlAuditVerification.aspx', '_self');// for production


        },
        error: function (Result) {

            alert(Result.d);

        }
    });
}
function RejectOptionSelected() {
    var flg = 16;
   
    var cus_id = $("#ddl_alert").val();
   
   
    var textBox_Details = "";
    var dept = $("#ddl_department").val();
    var vert = $("#ddl_vertival").val();
    var alert_text = $("#ddl_alert option:selected").text();
    var alert_id = alert_text.split("-")[0];
    var user_id = $("[id*=hdUserId]").val();
    var PrevDeclaration = $("input[name='Check']:checked").val();
    if ($("#comments_by").val() == "") {
        alert("kindly enter Comments on alerts by verification officer");
        return false;
    }


    if (typeof (PrevDeclaration) == "undefined") {

        alert("Whether any discrepancy found in transactions ??");
        return false;
    }


    if ($("#declar").prop("checked") == false) {

        alert("Please Accept the Declaration before submit !!");
        return false;
    }

    

    textBox_Details = alert_id + "~" + cus_id + "~" + user_id + "~" + PrevDeclaration + "~" + $("#comments_by").val() + "~" + $("#ad_comments").val();

    $.ajax({
        type: "post",
        contentType: "application/json; charset=utf-8",
        url: "AmlAuditVerification.aspx/ReAssign",
        data: "{flag : '" + flg + "',Data2 : '" + textBox_Details + "',flag2 : '" + post_id + "'}",
        dataType: "json",
        success: function (Result) {

            alert(Result.d);
            //window.open('AmlAuditVerification.aspx', '_self');
             window.open('/aml_customer/AmlAuditVerification.aspx', '_self'); //for production


        },
        error: function (Result) {

            alert(Result.d);

        }
    });

}




function VIEW(flg) {


   
    var FolderPath = "../aml_customer/IMAGES/";
    var cus_id = $("#ddl_alert").val();


    $.ajax({
        type: "post",
        contentType: "application/json; charset=utf-8",
        url: "AmlAuditVerification.aspx/getdoc",
        data: "{input: '" + cus_id + "',flag: '" + flg + "'}",
        success: function (response) {

            var FileExist = response.d.split("^")[0];
            var FilePath = response.d.split("^")[1];

            if (FileExist == 1) {

                var url = FolderPath + FilePath;

                OpenDialogue(url, FilePath);



            }
            else {

                alert("No Attachement");
            }

        }


    });


}
function OpenDialogue(url, FilePath) {

    var myUrl = url;

    OpenDialog(myUrl, 875, 650, function (termsOfServiceAccepted) {

        if (termsOfServiceAccepted) {

            $.ajax({
                type: "POST",
                url: "AmlAuditVerification.aspx/deleteDownloadFile",
                contentType: "application/json; charset=utf-8",
                data: "{input: '" + FilePath + "'}",
                dataType: "json",

                success: function (Result) {

                    var GetResult = Result.d;
                },

                error: function (Result) {
                    alert(Result.d);
                }
            });

        }
    });


}
function OpenDialog(url, width, height, callback) {

    var win = window.open(url, "Manappuram Document Verification", height, "menubar=0,toolbar=0", "_blank");
    var timer = setInterval(function () {

        if (win.closed) {
            clearInterval(timer);
            var returnValue = true;
            callback(returnValue);
        }
    }, 10);
}


function deleteDownloadFile(FilePath) {

    $.ajax({
        type: "post",
        contentType: "application/json; charset=utf-8",
        url: "AmlAuditVerification.aspx/deleteDownloadFile",
        data: "{input: '" + FilePath + "'}",
        success: function (response) {

            response.d;
        }
    });

}
function link(val) {
    var cus_id = $("#ddl_alert").val();
    if (val == 1) {

        window.open('https://app.manappuram.net/manappuram/pledge/alert/port_folio.aspx?var1=' + cus_id);
        //window.open('https://uatapp.manappuram.net/manappuram/pledge/alert/port_folio.aspx?var1=' + cus_id);
    }
    else {
        var flg = 14;

        $.ajax({
            type: "post",
            contentType: "application/json; charset=utf-8",
            url: "AmlAuditVerification.aspx/fetchFillData",
            data: "{input : '" + cus_id + "',flag : '" + flg + "'}",
            dataType: "json",
            success: function (Result) {


                var res = Result.d;
                window.open('https://app.manappuram.net/manappuram/highrisk/highrisk_homs143.aspx?var1=' + res);
                //window.open('https://uatapp.manappuram.net/manappuram/pledge/highrisk/highrisk_homs143.aspx?var1=' + res);


            },
            error: function (Result) {
                alert(Result.d);
            }
        });
       
    }
}
function cust_data_fetch() {
    var cus_id = $("#ddl_alert").val();
    var dept_name = $("#ddl_department option:selected").text();
    var vert_name = $("#ddl_vertival option:selected").text();
    var dept = $("#ddl_department").val();
    var vert = $("#ddl_vertival").val();
    var alert_text = $("#ddl_alert option:selected").text();
    if (dept != 2 || dept != 6) {
        $("#dept_name").val(dept_name);
    }
    else {
        $("#dept_name").val(vert_name);
    }
    fetch_alert_typ(alert_text);
    $.ajax({
        type: "post",
        contentType: "application/json; charset=utf-8",
        url: "AmlAuditVerification.aspx/CustFillData",
        data: "{input : '" + cus_id + "',data : '" + alert_text + "',flag : '" + post_id + "'}",
        dataType: "json",
        success: function (Result) {


            var res = Result.d;
            
            $("#br_id").val(res.split("~")[0]);
            $("#br_name").val(res.split("~")[1]);
            $("#area").val(res.split("~")[2]);
            $("#region").val(res.split("~")[3]);
            $("#zone").val(res.split("~")[4]);
            $("#state").val(res.split("~")[5]);
            $("#cus_id").val(res.split("~")[6]);
            $("#cus_name").val(res.split("~")[7]);
            $("#pledgeNo").val(res.split("~")[8]);
            $("#ckycr").val(res.split("~")[9]);
            $("#no_loan").val(res.split("~")[10]);
            $("#outstand").val(res.split("~")[11]);
            $("#gard_name").val(res.split("~")[12]);
            $("#house_no").val(res.split("~")[13]);
            $("#place").val(res.split("~")[14]);
            $("#po").val(res.split("~")[15]);
            $("#pin").val(res.split("~")[16]);
            $("#distirct").val(res.split("~")[17]);
            $("#state_a").val(res.split("~")[5]);
            $("#landmark").val(res.split("~")[14]);
            var rejcnt = res.split("~")[18];
            if (rejcnt > 0) {
                document.getElementById("commentdiv").style.display = "block";
                document.getElementById("commentdiv1").style.display = "block";
                $("#comments_by_l1").val(res.split("~")[19]);
                $("#ad_comments_l1").val(res.split("~")[20]);
            }
            else {
                $("#comments_by_l1").val('');
                $("#ad_comments_l1").val('');
            }

        },
        error: function (Result) {
            alert(Result.d);
        }
    });
}
function cust_data_fetchl2() {
    var cus_id = $("#ddl_alert").val();
    var dept_name = $("#ddl_department option:selected").text();
    var vert_name = $("#ddl_vertival option:selected").text();
    var dept = $("#ddl_department").val();
    var vert = $("#ddl_vertival").val();
    var alert_text = $("#ddl_alert option:selected").text();
    
    if (dept != 2 || dept != 6) {
        $("#dept_name").val(dept_name);
    }
    else {
        $("#dept_name").val(vert_name);
    }
    
    fetch_alert_typ(alert_text);
    $.ajax({
        type: "post",
        contentType: "application/json; charset=utf-8",
        url: "AmlAuditVerification.aspx/CustFillDatal2l3",
        data: "{input : '" + cus_id + "',data : '" + alert_text + "',flag : '" + post_id + "'}",
        dataType: "json",
        success: function (Result) {


            var res = Result.d;
            
            $("#br_id").val(res.split("~")[0]);
            $("#br_name").val(res.split("~")[1]);
            $("#area").val(res.split("~")[2]);
            $("#region").val(res.split("~")[3]);
            $("#zone").val(res.split("~")[4]);
            $("#state").val(res.split("~")[5]);
            $("#cus_id").val(res.split("~")[6]);
            $("#cus_name").val(res.split("~")[7]);
            $("#pledgeNo").val(res.split("~")[8]);
            $("#ckycr").val(res.split("~")[9]);
            $("#no_loan").val(res.split("~")[10]);
            $("#outstand").val(res.split("~")[11]);
            $("#gard_name").val(res.split("~")[12]);
            $("#house_no").val(res.split("~")[13]);
            $("#place").val(res.split("~")[14]);
            $("#po").val(res.split("~")[15]);
            $("#pin").val(res.split("~")[16]);
            $("#distirct").val(res.split("~")[17]);
            $("#state_a").val(res.split("~")[5]);
            $("#landmark").val(res.split("~")[14]);

            $("#occupation").val(res.split("~")[18]);
            $("#ann_income").val(res.split("~")[19]);
            $("#purpose").val(res.split("~")[20]);
            $("#distance").val(res.split("~")[21]);
            $("#income_src").val(res.split("~")[22]);
            $("#near_br_id").val(res.split("~")[23]);
            $("#near_br_name").val(res.split("~")[24]);
            $("#curr_address").val(res.split("~")[25]);
            $("#per_address").val(res.split("~")[26]);
            $("#comments_by_l1").val(res.split("~")[27]);
            $("#ad_comments_l1").val(res.split("~")[28]);


        },
        error: function (Result) {
            alert(Result.d);
        }
    });
}
function fetch_alert_typ(vall){
    flg = 12;

    $.ajax({
        type: "post",
        contentType: "application/json; charset=utf-8",
        url: "AmlAuditVerification.aspx/fetchFillData",
        data: "{input : '" + vall + "',flag : '" + flg + "'}",
        dataType: "json",
        success: function (Result) {


            var res = Result.d;
           
            $("#alert_typ").val(res);
           


        },
        error: function (Result) {
            alert(Result.d);
        }
    });
}

function AddUpperCase(value, id) {
    const regex = /^[A-Za-z ]+$/;
    var check = regex.test(value);
    if (!check) {
        
        var data1 = value.slice(0, -1);
        $("#" + id).val(data1.toUpperCase());
        
    }
    else {
        $("#" + id).val(value.toUpperCase());
    }



}
function AddUpperCase2(value, id) {

    $("#" + id).val(value.toUpperCase());
}
function validate_name(value, id) {

    const result = value.replace(/\s+/g, ' ').trim();
    $("#" + id).val(result);

}


function AddressTextArea(value) {

    $("#per_address").val(value);
}

function CurrAddrs(element) {

    if (element.checked) {

        var Curr = $("#curr_address").val();
        $("#curr_address").attr("oninput", "AddressTextArea(this.value)");
        $("#per_address").val(Curr);
        $("#per_address").prop("readonly", true);
    }

    else {
        $("#curr_address").removeAttr("oninput");
        $("#per_address").val('');
        $("#per_address").prop("readonly", false);

    }

}

function validation() {
    var ddl_department = $("#ddl_department").val();
    var ddl_alert = $("#ddl_alert").val();
    var gard_name = $("#gard_name").val();
    var house_no = $("#house_no").val();
    var landmark = $("#landmark").val();
    var place = $("#place").val();
    var po = $("#po").val();
    var pin = $("#pin").val();
    var distirct = $("#distirct").val();
    var state_a = $("#state_a").val();
    var occupation = $("#occupation").val();
    var ann_income = $("#ann_income").val();
    var purpose = $("#purpose").val();
    var distance = $("#distance").val();
    var near_br_id = $("#near_br_id").val();
    var near_br_name = $("#near_br_name").val();
    var curr_address = $("#curr_address").val();
    var per_address = $("#per_address").val();

    //if (ddl_department == -1) {
    //    alert("Kindly Select department");
    //    return false;
    //}
    //if (ddl_alert == -1) {
    //    alert("Kindly Select alert id");
    //    return false;
    //}
    //if (gard_name == "") {
    //    alert("Kindly Enter Father/Mother name");
    //    return false;
    //}
    //if (house_no == "") {
    //    alert("Kindly Enter House No/House Name");
    //    return false;
    //}
    //if (landmark == "") {
    //    alert("Kindly Enter Landmark");
    //    return false;
    //}
    //if (place == "") {
    //    alert("Kindly Enter Place Name ");
    //    return false;
    //}
    //if (po == "") {
    //    alert("Kindly Enter Post Office");
    //    return false;
    //}
    //if (pin == "") {
    //    alert("Kindly Enter Pin Number");
    //    return false;
    //}
    //if (distirct == "") {
    //    alert("Kindly Enter District");
    //    return false;
    //}
    //if (state_a == "") {
    //    alert("Kindly Enter State");
    //    return false;
    //}
    if (occupation == "") {
        alert("Kindly Enter Occupation");
        return false;
    }
    if (ann_income == "") {
        alert("Kindly Enter Annual Income");
        return false;
    }
    if (purpose == "") {
        alert("Kindly Enter Purpose of the loan");
        return false;
    }
    if (distance == "") {
        alert("Kindly Enter Distance (Branch-->House)");
        return false;
    }
    if (near_br_id == "") {
        alert("Kindly Enter Nearest MAFIL branch ID of the Borrower");
        return false;
    }
    if (near_br_name == "") {
        alert("Kindly Enter Nearest MAFIL branch name of the Borrower");
        return false;
    }
    if (curr_address == "") {
        alert("Kindly Enter Current Address");
        return false;
    }
    if (per_address == "") {
        alert("Kindly Enter Permanent Address");
        return false;
    }

    return true;
}

function loadbranchname(val) {
    var flg = 13;
    $.ajax({
        type: "post",
        contentType: "application/json; charset=utf-8",
        url: "AmlAuditVerification.aspx/fetchFillData",
        data: "{input : '" + val + "',flag : '" + flg + "'}",
        dataType: "json",
        success: function (Result) {


            var res = Result.d;
            //alert(res);
            $("#near_br_name").val(res);



        },
        error: function (Result) {
            alert(Result.d);
        }
    });
}
function alphaOnly(event) {
    var key = event.key;
    return /^[a-zA-Z\s]$/.test(key) || event.key === 'Backspace';
}