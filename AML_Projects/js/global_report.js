$(window).on('load', function () {

    $("#txt_rptfrm").datepicker({
        dateFormat: 'dd/MM/yy',
        maxDate:0,
        changeMonth: true,
        changeYear: true,
        stepMonths: true,
        todayHighlight: true,
        onSelect: function (dateText, inst) {

        }
    }).datepicker("setDate", 'now') ;

    $("#txt_rptto").datepicker({
        dateFormat: 'dd/MM/yy',
        maxDate: 0,
        changeMonth: true,
        changeYear: true,
        stepMonths: true,
        todayHighlight: true,

        onSelect: function (dateText, inst) {

        }
    }).datepicker("setDate", 'now');


    //$('#txt_rptfrm').datepicker({
    //    format: 'mm/dd/yyyy',
    //}).datepicker("setDate", 'now');

    statusshow();
});
function gr() {

    $('#tbltocks').find('tr').click(function () {
        var row = $(this).find('td:eq(1)').text();
        wo_sr_value = row;
        shdetails(row);
        WorkLogView(row);
        UserApprvTview(row);
        SlaView(row);
        global_tickno = row;
        tempwlog = 0;
        $('#tbltocks').removeEventListener();
    });
}
function statusshow() {
    var intPrnc;
    intPrnc = "GetStatus";
    $.ajax({
        type: "post",
        contentType: "application/json; charset=utf-8",
        url: "GlobalTicket.aspx/ticketstatus",
        data: "{QueryString:'" + intPrnc + "'}",
        dataType: "json",
        success: function (Result) {
            $('#ddlsts').empty();
            $('#ddlstatus').empty();
            $('#ddlsts').append($("<option></option>").val("-1").html("Select status "));
            $('#ddlstatus').append($("<option></option>").val("-1").html("Select status "));
            $.each(Result.d, function (data, value) {
                $('#ddlsts').append($("<option></option>").val(value.Id).html(value.Name));
                $('#ddlstatus').append($("<option></option>").val(value.Id).html(value.Name));
            })
        },
        error: function (Result) {
            alert(Result);
        }
    });
}
function Tview1()
{
    var txtsdate = $("#txt_rptfrm").val();
    var txtendate = $("#txt_rptto").val();
    var status = $("#ddlsts").val();
    var k;
    $('#tbltocks').show();
    $('#divtblPrincpleIntDtl').show();
    if (status == "")
    {
        alert('Select Status');
        return false;
    }
    var InputString = txtsdate + "¥" + txtendate + "¥" + status;

    var Querystring = "getNewrpt";
 
    $.ajax({
        type: "POST",
        contentType: "application/json; charset=utf-8",
        url: "global_tkt_rpt.aspx/GetTble",
        data: "{QueryStr : '" + Querystring + "',input :'" + InputString + "'}",
        dataType: "json",
        success: function (Result) {
            if (Result.d.length > 0)
            {
                    $('#tbltocks').empty();
                $('#tbltocks').append('<thead><tr><td scope="col">NO</td><td scope="col">GB ID</td><td scope="col">Title</td><td scope="col">Enter Date</td> <td scope="col">Enter By</td><td scope="col">status</td><td scope="col">Common tickets</td></tr></thead><tbody>'
                    );
                    for (var i = 0; i < Result.d.length; i++) {
                        k = i + 1;
                            $('#tbltocks').append('<tr><td>' + k + '</td>' +
                                '<td>' + Result.d[i].gb_id + '</td>' +
                                '<td>' + Result.d[i].title + '</td>' + 
                                '<td>' + Result.d[i].ent_dt + '</td>' +
                                '<td>' + Result.d[i].en_by + '</td>' +
                                '<td>' + Result.d[i].sts + '</td>' +
                                '<td>' + Result.d[i].sr_tkt +'</td > ' + '</tr >');                    
                    }
                    $('#tbltocks').append(
                    '</tbody>');
                $("#exp_excels").show();
            }
            else
            {
                    ModelPopWarning('No Entries Found');
                    $('#tbltocks').empty();
            }
            
        },
        error: function (Result) {
            alert(Result);
        }
    });

}

function ExportToExcel() {
    
    var txtsdate = $("#txt_rptfrm").val();
  
  
    var txtendate = $("#txt_rptto").val();
   
    var status = $("#ddlsts").val();
    

    var Querystring1 = "getNewrpt";
    var InputString = txtsdate + '¥' + txtendate + '¥' + status;
 
    window.open("ReportDownLoadExcel.aspx?Querystr=" + Querystring1 + "&inp=" + InputString);
}
