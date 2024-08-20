function Tview() {
    //alert('entered into tview function');
    var k;
    var temp;

    $('#asst_div').show();


    var Querystring = "get_woreport";




    //var InputString = $("[id*=hdUserId1]").val();
    //var fzmm = $("[id*=fzm1]").val();
    //var regg = $("[id*=reg1]").val();
    //var are = $("[id*=area1]").val();
    var InputString = $("[id*=year]").val() + '¥' + $("[id*=month]").val() + '¥' + $("[id*=fzm]").val()
        + '¥' + $("[id*=reg]").val() + '¥' + $("[id*=area]").val() + '¥' + $("[id*=sts]").val();
    //var InputString = " "; 

    $.ajax({
        type: "POST",
        contentType: "application/json; charset=utf-8",
        url: "woreportview.aspx/GetUserTble",
        data: "{QueryString : '" + Querystring + "',input : '" + InputString + "'}",
        dataType: "json",
        success: function (Result) {

            if (Result.d.length > 0) {
                $('#tblasstupd').empty();
                $('#tblasstupd').append('<thead ><tr><td scope="col">NO</td><td scope="col">WO Number</td><td scope="col">Requested Date</td><td scope="col">Request Type</td><td scope="col">Workorder Status</td><td scope="col">Asset Type</td><td scope="col">Serial Number</td><td scope="col">Manufacture Name</td><td scope="col">Model</td><td scope="col">Asset Tag</td><td scope="col">Host Name</td><td scope="col">Warrenty Start Date</td><td scope="col">Warrenty Expiry Date</td><td scope="col">Asset Location</td><td scope="col">date of activity</td><td scope="col">Branch</td><td scope="col">Region</td><td scope="col">Zone</td><td scope="col">Ticket Number</td><td scope="col">SR Reported Date</td><td scope="col">Verification Reason</td><td scope="col">Last Log Date</td><td scope="col">Current Bin</td></tr></thead><tbody >');

                //temp = Result.d[0].Br_id;
                $("tbody tr").css("background-color", "#f9f6f5");
                for (var i = 0; i < Result.d.length; i++) {
                    k = i + 1;

                    //if (temp != Result.d[i].Br_id) {
                    //    $('#tblasstupd').append('<tr><td></td><td></td><td></td><td></td><td></td><td></td><td></td><td></td><td></td><td></td><td></td></tr>');
                    //    temp = Result.d[i].Br_id;
                    //}


                    $('#tblasstupd').append('<tr><td>' + k + '</td>' +
                        '<td>' + Result.d[i].wo_no + '</td>' +
                        '<td>' + Result.d[i].rep_dte + '</td>' +
                        '<td>' + Result.d[i].req_typ + '</td>' +
                        '<td>' + Result.d[i].w_sts + '</td>' +
                        '<td>' + Result.d[i].asst_nme + '</td>' +
                        '<td>' + Result.d[i].ass_ser_no + '</td>' +
                        '<td>' + Result.d[i].ass_man_nme + '</td>' +
                        '<td>' + Result.d[i].model + '</td>' +
                        '<td>' + Result.d[i].asset_tag + '</td>' +
                        '<td>' + Result.d[i].host_nme + '</td>' +
                        '<td>' + Result.d[i].war_str_dte + '</td>' +
                        '<td>' + Result.d[i].war_expr_dte + '</td>' +
                        '<td>' + Result.d[i].ass_loc + '</td>' +
                        '<td>' + Result.d[i].dte_activity + '</td>' +
                        '<td>' + Result.d[i].br_nme + '</td>' +
                        '<td>' + Result.d[i].reg_nme + '</td>' +
                        '<td>' + Result.d[i].fzm + '</td>' +
                        '<td>' + Result.d[i].tick_no + '</td>' +
                        '<td>' + Result.d[i].rep_date + '</td>' +
                        '<td>' + Result.d[i].lst_log_dte + '</td>' +
                        '<td>' + Result.d[i].ver_reason + '</td>' +
                        '<td>' + Result.d[i].current_bin + '</td>' +
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