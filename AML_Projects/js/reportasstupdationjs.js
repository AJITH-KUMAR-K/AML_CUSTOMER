﻿$(window).on('load', function () {
    Tview();
   

});

$(document).ready(function () {
    $('[data-toggle="tooltip"]').tooltip();
});

function exportTableToExcel(tableID, filename = '') {
    var downloadLink;
    var dataType = 'application/vnd.ms-excel';
    var tableSelect = document.getElementById(tableID);
    var tableHTML = tableSelect.outerHTML.replace(/ /g, '%20');
    // Specify file name
    filename = filename ? filename + '.xls' : 'excel_data.xls';

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




function Tview() {
    //alert('entered into tview function');
    var k;
    var temp;

    $('#asst_div').show();


    var Querystring = "Search";


     

    //var InputString = $("[id*=hdUserId1]").val();
    //var fzmm = $("[id*=fzm1]").val();
    //var regg = $("[id*=reg1]").val();
    //var are = $("[id*=area1]").val();
    var InputString = $("[id*=year]").val() + '¥' + $("[id*=month]").val() + '¥' + $("[id*=fzm]").val()
        + '¥' + $("[id*=reg]").val() + '¥' + $("[id*=area]").val() + '¥' + $("[id*=sts]").val();
    alert(InputString);
    //var InputString = " ";

    $.ajax({
        type: "POST",
        contentType: "application/json; charset=utf-8",
        url: "reportasstupdation.aspx/GetUserTble",
        data: "{QueryString : '" + Querystring + "',input : '" + InputString + "'}",
        dataType: "json",
        success: function (Result) {
 
            if (Result.d.length > 0) {
                $('#tblasstupd').empty();
                $('#tblasstupd').append('<thead><tr><td scope="col">NO</td><td scope="col">Date</td><td scope="col">Asset Code</td><td scope="col">Asset Type</td><td scope="col">Updated By</td><td scope="col">Branch Name</td><td scope="col">Area Name</td><td scope="col">Region Name</td><td scope="col">Zone Name</td><td scope="col">Asset Status</td><td scope="col">Asset Remarks</td><td scope="col">Lap charger sts</td><td scope="col">Lap charger remarks</td><td scope="col">Laptop bag status</td><td scope="col">Laptop Bag Remarks</td></tr></thead><tbody>');

                //temp = Result.d[0].Br_id;
                $("tbody tr").css("background-color", "#f9f6f5");
                for (var i = 0; i < Result.d.length; i++) {
                    k = i + 1;

                    //if (temp != Result.d[i].Br_id) {
                    //    $('#tblasstupd').append('<tr><td></td><td></td><td></td><td></td><td></td><td></td><td></td><td></td><td></td><td></td><td></td></tr>');
                    //    temp = Result.d[i].Br_id;
                    //}


                    $('#tblasstupd').append('<tr><td>' + k + '</td>' +
                        '<td>' + Result.d[i].dte + '</td>' +
                        '<td>' + Result.d[i].asst_cde + '</td>' +
                        '<td>' + Result.d[i].asst_typ + '</td>' +
                        '<td>' + Result.d[i].upd_by + '</td>' +
                        '<td>' + Result.d[i].br_nme + '</td>' +
                        '<td>' + Result.d[i].ar_nme + '</td>' +
                        '<td>' + Result.d[i].reg_nme + '</td>' +
                        '<td>' + Result.d[i].zne_nme + '</td>' +
                        '<td>' + Result.d[i].asst_sts + '</td>' +
                        '<td>' + Result.d[i].asst_rmrks + '</td>' +
                        '<td>' + Result.d[i].lp_ch_sts + '</td>' +
                        '<td>' + Result.d[i].lp_ch_rmrks + '</td>' +
                        '<td>' + Result.d[i].lp_bg_sts + '</td>' +
                        '<td>' + Result.d[i].lp_bg_rmrks + '</td>' +
                        // '<td><button type="button" class="btn btn-success" style="width:95px;" onclick="gr(2)">Recommend</button>&nbsp<button type="button" class="btn btn-danger" style="width:95px;" onclick="gr(3)">Reject</button></td>' +
                        //'<td><button type="button" class="btn btn-success" style="width:95px;">Completed</button></td>' +
                        //'<td>' + Result.d[i].Status + '</td>' + 
                        '</tr>');

                    $("tbody tr").css("background-color", "#f9f6f5");
                    //  #eee7e6

                }
                $('#tblbrSim').append(
                    '</tbody>');
                $("thead tr").css({ "background-color": "brown", "color": "white" });
            } else {
                alert('No Data Found...');
                $('#tblasstupd').empty();
                $('#tblasstupd').hide();

            }

        },
        error: function (Result) {
            alert(Result);
        }
    });



}



function ViewReport() {
    var frmDateCom = $("#txtDateFrm").val();
    var ToDateCom = $("#txtDateTo").val();
    var newFrmDate = Date.parse(frmDateCom);
    var NewToDate = Date.parse(ToDateCom);
    var dateDifference = NewToDate - newFrmDate;
    if (dateDifference < 0) {
        alert("Choose To Date greater than From Date");
        $("#txtDateFrm").val("");
        $("#txtDateTo").focus();
        return;
    }
    var wh, ord = '';
    wh = $('#ddlwrkTyp').val() + '^' + $('#ddlDept').val() + '^' + $('#txtDateFrm').val() + '^' + $('#txtDateTo').val() + '^' + $('#ddlStatus').val();
    window.location = "MaintenanceWorkRprt.aspx?mnuId=" + wh + "&pagHead=";
}


 

// public partial class gprsRitcSimReport : System.Web.UI.Page
//{
//    string fzm, reg, area;
//        protected void Page_Load(object sender, EventArgs e)
//    {
//        fzm = Request.QueryString.Get("fzm");
//        reg = Request.QueryString.Get("reg");
//        area = Request.QueryString.Get("area");
//        //todt = Request.QueryString.Get("todt");

//        string UserName1 = Session["username"].ToString();
//        string BranchId1 = Session["branch_id"].ToString();
//        this.hdUserId1.Value = UserName1;
//        this.hdbran1.Value = BranchId1;
//        this.fzm1.Value = fzm;
//        this.area1.Value = area;
//        this.reg1.Value = reg;
//    }
