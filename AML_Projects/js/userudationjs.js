$(window).on('load', function () {
    $("#WORKSTDETAILS").hide();
    $("#div_bran").hide();
    $("#div_dept").hide();
    $('#emprd').prop("checked", true);
    //$('#txt_emp').val($("[id*=hdUserId]").val());
    $('#tblticket').empty();
    $('#divtblPrincpleIntDtl').hide();
    GetUserAsset();
    GetDepartmentAsset();
    GetBranchAsset();
    GetAssetState();
    //Getdepartment();
    //UserAssetTview();
   
  
    //UserAssets();
   
   

});

$(document).ready(function () {
    $('[data-toggle="tooltip"]').tooltip();
});


var global_tickno;
var row_added;
var selected_asst;
var sele_ass_id;


    //$('#tblticket').onclick(function () {
    //    var row = $(this).find('td:first').text();

    //    //alert('You clicked ' + row);
    //    var dt = row.toString();
    //    shdetails(dt);
    //    WorkLogView(dt);
    //    $('#tblticket').removeEventListener();


    //});

function sh_emp_dpt_brc() {
    if ($('#emprd').prop("checked")) {
        $('#div_empc').show();
        $('#div_dept').hide();
        $('#div_bran').hide();

    }
    else if ($("#deprd").prop("checked")) {
        $('#div_empc').hide();
        $('#div_dept').show();
        $('#div_bran').hide();
    }
    else if ($("#branchrd").prop("checked")) {
        $('#div_empc').hide();
        $('#div_dept').hide();
        $('#div_bran').show();
    }
}
   




 

 


 

function UserAssetdetail(p) {
    
    
    $('#tick_dtl').removeClass('d-none');
   // $('#tick_dtl').show();

var Temp=0;
    var InputString;
    var Querystring;
    if ($("#userast option:selected").val()==-1&&p==1) {
         
        Temp = 1;
      

    } else if ($("#userast option:selected").val() == -1 && p == 2) {

        Temp = 1;

    } else if ($("#br_asst option:selected").val() == -1 && p == 3) {

        Temp = 1;

    }
    else {
            Temp = 0;
           
        }
    
     
    
    if (Temp == 0) {
         
        if (p == 1) {

            
            InputString = $("#userast option:selected").val();
            sele_ass_id = InputString;
            LstUpdDte(InputString);
        } else if (p == 2) {

            
            InputString = $("#dpt_asst option:selected").val();
            sele_ass_id = InputString;
            LstUpdDte(InputString);

        } else if (p == 3) {

             
            InputString = $("#br_asst option:selected").val();
            sele_ass_id = InputString;
            LstUpdDte(InputString);
        }
        Querystring = "getSelectAsst";
 
       
        
         
    $.ajax({
        type: "POST",
        contentType: "application/json; charset=utf-8",
        url: "userupdation.aspx/SelectAsstVw",
        data: "{QueryString : '" + Querystring + "',input :'" + InputString + "'}",
        dataType: "json",
        success: function (Result) {
            if (Result.d.length > 0) {
                Result = Result.d.split("^");
                
                    $('#asst-cde').text(Result[0]);
                    $('#asst-nme').text(Result[1]);
                $('#mnf-nme').text(Result[2]);
                $('#asst-sts').text(Result[3]);
                selected_asst = Result[4];
                if (Result[4] == 8) {
                    $('#asset').text(Result[1]+":");
                    $('.lap').show();
 
                } else {

                    $('#asset').text(Result[1]);
                    $('.lap').hide();
                 }

                
            } else {

                alert('No Entries Found');
            }
        },
        error: function (Result) {
            alert(Result);
        }
    });
}
    

}


function LstUpdDte(AST_ID) {

    var QueryString = "lstUpdDte";
    var input = AST_ID;
    $.ajax({
        type: "POST",
        contentType: "application/json; charset=utf-8",
        url: "userupdation.aspx/lstUpdDte",
        data: "{QueryString:'" + QueryString + "',input:'" + input + "'}",
        dataType: "json",
        success: function (Result) {
             Result=Result.d.split(' ');
            $('#lst_upd_dte').text('Last Updated Date :' + Result[0]);
           // alert(Result.d);
            if (Result[0] =="") {
                $('#lst_upd_dte').text('Last Updated Date :00-00-0000');

            }
            colorchang(AST_ID);
        },
        error: function (Result) {
           
            alert(Result);
        }

    });




}






function colorchang(AST_ID) {
    
    var QueryString = "colorch";
    var input = AST_ID;
    $.ajax({
        type: "POST",
        contentType: "application/json; charset=utf-8",
        url: "userupdation.aspx/colorch",
        data: "{QueryString:'" + QueryString + "',input:'" + input + "'}",
        dataType: "json",
        success: function (Result) {
            
            
            if (Result.d > 30||Result.d=="") {
                $('#lst_upd_dte').removeClass('label-success');
                $('#lst_upd_dte').addClass('label-danger');

            } else {
                $('#lst_upd_dte').removeClass('label-danger');
                $('#lst_upd_dte').addClass('label-success');
            }
        },
        error: function (Result) {

            alert(Result);
        }

    });




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

function GetUserAsset() {
    //alert('entered into function');
    var QueryString = "getEmployeeAasset";
    var input = $("[id*=hdUserId]").val();
    $.ajax({
        type: "POST",
        contentType: "application/json; charset=utf-8",
        url: "userupdation.aspx/UserAssets",
        data: "{QueryString:'" + QueryString + "',input:'" + input+"'}",
        dataType: "json",
        success: function (Result) {
            $('#userast').empty();
            $('#userast').append($("<option></option>").val("-1").html("Select Your Asset "));
            $.each(Result.d, function (data, value) {

                $('#userast').append($("<option></option>").val(value.Id).html(value.Name));
            })
        },
        error: function (Result) {
            alert(Result);
        }

    });

}


function GetAssetState() {
    //alert('asst state into function');
    var QueryString = "getAsstSts";
    //var input = $("[id*=hdUserId]").val();
    $.ajax({
        type: "POST",
        contentType: "application/json; charset=utf-8",
        url: "userupdation.aspx/AsstSts",
        data: "{QueryString:'" + QueryString + "'}",
        dataType: "json",
        success: function (Result) {
            $('.sts').empty();
            $('.sts').append($("<option></option>").val("-1").html("Select Your Asset status"));
            $.each(Result.d, function (data, value) {

                $('.sts').append($("<option></option>").val(value.Id).html(value.Name));
            })
        },
        error: function (Result) {
            alert(Result);
        }

    });

}

function submt() {
     var Querystring;
    var InputString;

    if ($('#asst_sts option:selected').val() == -1) {
        alert('Please select Asset status');
    } else if ($('#lp_ch option:selected').val() == -1 && selected_asst == 8) {

        alert('Please Select Charger Status');
    } else if ($('#lp_bag option:selected').val() == -1 && selected_asst == 8) {

        alert('Please Select Bag Status');
    } else {
        //alert($('#asst-cde').text());

        InputString = $("[id*=hdUserId]").val() + "¥" + $('#asst-cde').text() + "¥" +
            $('#asst_sts option:selected').val() + "¥" + $('#asst_rmrks').val() + "¥" +
            $('#lp_ch option:selected').val() + "¥" + $('#lp_ch_rm').val() + "¥" +
            $('#lp_bag option:selected').val() + "¥" + $('#lp_bg_rm').val() + "¥" + sele_ass_id;
        Querystring = 'insertAsstSts';


        $.ajax({
            type: "POST",
            contentType: "application/json; charset=utf-8",
            url: "userupdation.aspx/AsstStsUpdate",
            data: "{QueryString : '" + Querystring + "',input :'" + InputString + "'}",
            dataType: "json",
            success: function (Result) {
                if (Result.d.length > 0) {
                    alert(Result.d);
                    window.open("userupdation.aspx", "_self");


                } else {

                    alert('No Entries Found');
                }
            },
            error: function (Result) {
                alert(Result);
            }
        });


    }

}


function GetDepartmentAsset() {
    //alert('entered into department function');
    var QueryString = "getDepartAsstSts";
    var input = $("[id*=hdUserId]").val();
    $.ajax({
        type: "POST",
        contentType: "application/json; charset=utf-8",
        url: "userupdation.aspx/DepartmentAsst",
        data: "{QueryString:'" + QueryString + "',input:'" + input + "'}",
        dataType: "json",
        success: function (Result) {
            $('#dpt_asst').empty();
            $('#dpt_asst').append($("<option></option>").val("-1").html("Select Your Asset "));
            $.each(Result.d, function (data, value) {

                $('#dpt_asst').append($("<option></option>").val(value.Id).html(value.Name));
            })
        },
        error: function (Result) {
            alert(Result);
        }

    });

}


function GetBranchAsset() {
    //alert('entered into department function');
    var QueryString = "getBranchAssets";
    var input = $("[id*=hdUserId]").val();
    $.ajax({
        type: "POST",
        contentType: "application/json; charset=utf-8",
        url: "userupdation.aspx/branhAsset",
        data: "{QueryString:'" + QueryString + "',input:'" + input + "'}",
        dataType: "json",
        success: function (Result) {
            $('#br_asst').empty();
            $('#br_asst').append($("<option></option>").val("-1").html("Select Your Asset "));
            $.each(Result.d, function (data, value) {

                $('#br_asst').append($("<option></option>").val(value.Id).html(value.Name));
            })
        },
        error: function (Result) {
            alert(Result);
        }

    });

}


function clk() {
    $('#tick_dtl').addClass('d-none');


}