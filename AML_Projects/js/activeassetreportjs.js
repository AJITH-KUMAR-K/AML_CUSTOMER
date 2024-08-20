$(window).on('load', function () {
   
    zone();
    GetAssetState();
   
    
    $('#tblticket').empty();
    $('#divtblPrincpleIntDtl').hide();
    GetAssetState();
    
 
   

});

$(document).ready(function () {
    $('[data-toggle="tooltip"]').tooltip();
});


var global_tickno;
var row_added;



    //$('#tblticket').onclick(function () {
    //    var row = $(this).find('td:first').text();

    //    //alert('You clicked ' + row);
    //    var dt = row.toString();
    //    shdetails(dt);
    //    WorkLogView(dt);
    //    $('#tblticket').removeEventListener();


    //});
 

 


 

function UserAssetTview() {
var Temp=0;
    var InputString;
    //if ($('#emprd').prop("checked")) {
    //    if ($("#txt_emp").val() == '') {
    //        alert('Enter Employee Code');
    //        Temp = 1;

    //    }else {
    //        InputString = $("#txt_emp").val();
    //        InputString = InputString + "¥" + 2;
           
    //    }
    //}
    //else if ($("#deprd").prop("checked")) {
    //    if ($("#ddldep option:selected").val() == -1) {
    //        alert('Select Department');;
    //        Temp = 1;

    //    } else {
    //        InputString = $("#ddldep option:selected").val();
    //        InputString = InputString + "¥" + 3;
    //    }
    //}
    //else if ($("#branchrd").prop("checked")) {
    //    if ($("#txt_branch").val() == '') {
    //        alert('Enter Branch Id');
    //        Temp = 1;
    //    } else {
    //        InputString = $("#txt_branch").val();
    //        InputString = InputString + "¥" + 1;
    //    }
    //}
    if (Temp == 0) {
        $('#divtblPrincpleIntDtl').show();
        $('#tblticket').show();
        InputString = $("[id*=hdUserId]").val();
        InputString = InputString + "¥" + 2;
     var Querystring = "GetUassetTview";
    $.ajax({
        type: "POST",
        contentType: "application/json; charset=utf-8",
        url: "AssetView.aspx/GetUserTbleview",
        data: "{QueryStr : '" + Querystring + "',input :'" + InputString + "'}",
        dataType: "json",
        success: function (Result) {
            if (Result.d.length > 0) {
                $('#tblticket').empty();
                $('#tblticket').append('<thead class="bg-success text-white">< tr ><th scope="col">Asset code</th><th scope="col">Asset Name</th><th scope="col">Manufacture Name</th> <th scope="col">Asset State</th></tr></thead><tbody class="border border-dark">');
                for (var i = 0; i < Result.d.length; i++) {
                    $('#tblticket').append('<tr><td>' + Result.d[i].Asstcode + '</td>' +
                        '<td>' + Result.d[i].AsstNme + '</td>' +
                        '<td>' + Result.d[i].ManufName + '</td>' +
                        '<td>' + Result.d[i].AsstState + '</td>' +
                        '</tr>');

                  
                }
                $('#tblticket').append(
                    '</tbody>');
            } else {

                alert('No Entries Found');
                $('#tblticket').empty();
                $('#tblticket').hide();
            }
        },
        error: function (Result) {
            alert(Result.d);
        }
    });
}


}

function gr() {

    $('#tblticket').find('tr').click(function () {
        var row = $(this).find('td:first').text();
        shAstDetails(row);
        shWRkSDetails(row);
        //shdetails(row);
        //WorkLogView(row);
       // global_tickno = row;
        $('#tblticket').removeEventListener();



    });


}

function Getdepartment() {

    var QueryString = "GetdepNAME";
    $.ajax({
        type: "POST",
        contentType: "application/json; charset=utf-8",
        url: "Assetmanagement.aspx/getAssignto",
        data: "{QueryString:'" + QueryString + "'}",
        dataType: "json",
        success: function (Result) {
            $('#ddldep').empty();
            $('#ddldep').append($("<option></option>").val("-1").html("Select Department "));
            $.each(Result.d, function (data, value) {

                $('#ddldep').append($("<option></option>").val(value.ReqId).html(value.ReqName));
            })
        },
        error: function (Result) {
            alert(Result);
        }

    });

}


function zone () {


    

    var QueryString = "getzone";
    $.ajax({
        type: "POST",
        contentType: "application/json; charset=utf-8",
        url: "activeassetreport.aspx/zne",
        data: "{QueryString:'" + QueryString + "'}",
        dataType: "json",
        success: function (Result) {
            $('#zone').empty();
            $('#zone').append($("<option></option>").val("-1").html("ALL "));
            $.each(Result.d, function (data, value) {

                $('#zone').append($("<option></option>").val(value.Id).html(value.Name));
            })


            //region



            $('#zone').change(function () {



                if ($("#zone option:selected").val() == -1) {

                    $('#region').empty();
                    $('#region').append($("<option></option>").val("-1").html("ALL"));
                    $('#area').empty();
                    $('#area').append($("<option></option>").val("-1").html("ALL"));


                } 


                var QueryString = "getreg";
                var inputstring = $("#zone option:selected").val();
                $.ajax({
                    type: "POST",
                    contentType: "application/json; charset=utf-8",
                    url: "activeassetreport.aspx/reg",
                    data: "{QueryString:'" + QueryString + "',input:'" + inputstring+"'}",
                    dataType: "json",
                    success: function (Result) {
                        $('#region').empty();
                        $('#region').append($("<option></option>").val("-1").html("ALL "));
                        $.each(Result.d, function (data, value) {

                            $('#region').append($("<option></option>").val(value.Id).html(value.Name));
                        })


                        $('#region').change(function () {




                            if ($("#region option:selected").val() == -1) {

                                
                                $('#area').empty();
                                $('#area').append($("<option></option>").val("-1").html("ALL"));


                            } 


                            var QueryString = "getarea";
                            var inputstring = $("#region option:selected").val();
                            $.ajax({
                                type: "POST",
                                contentType: "application/json; charset=utf-8",
                                url: "activeassetreport.aspx/area",
                                data: "{QueryString:'" + QueryString + "',input:'" + inputstring + "'}",
                                dataType: "json",
                                success: function (Result) {
                                    $('#area').empty();
                                    $('#area').append($("<option></option>").val("-1").html("ALL"));
                                    $.each(Result.d, function (data, value) {

                                        $('#area').append($("<option></option>").val(value.Id).html(value.Name));
                                    })





                                    $('#area').change(function () {




                                        if ($("#area option:selected").val() == -1) {


                                            $('#branch').empty();
                                            $('#branch').append($("<option></option>").val("-1").html("ALL"));


                                        }


                                        var QueryString = "BranchDtl";
                                        var inputstring = $("#area option:selected").val();
                                        $.ajax({
                                            type: "POST",
                                            contentType: "application/json; charset=utf-8",
                                            url: "activeassetreport.aspx/branch",
                                            data: "{QueryString:'" + QueryString + "',input:'" + inputstring + "'}",
                                            dataType: "json",
                                            success: function (Result) {
                                                $('#branch').empty();
                                                $('#branch').append($("<option></option>").val("-1").html("ALL"));
                                                $.each(Result.d, function (data, value) {

                                                    $('#branch').append($("<option></option>").val(value.Id).html(value.Name));
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



function GetAssetState() {
    //alert('asst state into function');
    var QueryString = "getAsset_state";
    //var input = $("[id*=hdUserId]").val();
    $.ajax({
        type: "POST",
        contentType: "application/json; charset=utf-8",
        url: "userupdationreport.aspx/AsstSts",
        data: "{QueryString:'" + QueryString + "'}",
        dataType: "json",
        success: function (Result) {
            $('#sts').empty();
            $('#sts').append($("<option></option>").val("-1").html("ALL"));
            $.each(Result.d, function (data, value) {

                $('#sts').append($("<option></option>").val(value.Id).html(value.Name));
            })
        },
        error: function (Result) {
            alert(Result);
        }

    });

}

//-----------------------------------

function GetAs() {
    //alert('asst state into function');
    var QueryString = "getAsstSts";
    //var input = $("[id*=hdUserId]").val();
    $.ajax({
        type: "POST",
        contentType: "application/json; charset=utf-8",
        url: "userupdationreport.aspx/AsstSts",
        data: "{QueryString:'" + QueryString + "'}",
        dataType: "json",
        success: function (Result) {
            $('#sts').empty();
            $('#sts').append($("<option></option>").val("-1").html("ALL"));
            $.each(Result.d, function (data, value) {

                $('#sts').append($("<option></option>").val(value.Id).html(value.Name));
            })
        },
        error: function (Result) {
            alert(Result);
        }

    });

}



//-----------------------------------





function ViewReport() {
     var fzm = $('#zone option:selected').val();
    var reg = $('#region option:selected').val();
    var area = $('#area option:selected').val();
    var br = $('#branch option:selected').val();
    var st = $('#sts option:selected').val();
   
         if (fzm == -1) {

        fzm = '';
    }  if (reg == -1) {

        reg = '';
    }  if (area == -1) {

        area = '';
    }  if (br == -1) {


        br = '';
    } if (st == -1) {


        st = '';
    } 
   
    //var wh, ord = '';
    //wh = year + '^' + month + '^' + fzm + '^' + reg + '^' + area + '^' + sts;
    //window.location = "reportasstupdation.aspx?mnuId=" + wh + "&pagHead=";

    window.location = "activeassetsearch.aspx?fzm=" + fzm + "&reg=" + reg + "&area=" + area + "&br=" + br + "&sts=" + st;

}

//$("button").click(function () {
    
//    $("#table2excel").table2excel({
        
//	    // exclude CSS class
//	    exclude: ".noExl",
//	    name: "Worksheet Name",
//	    filename: "SomeFile", //do not include extension
//	    fileext: ".xls" // file extension
//    });
//});
