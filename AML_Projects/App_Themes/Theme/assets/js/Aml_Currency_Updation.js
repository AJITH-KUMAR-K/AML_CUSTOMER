$(window).on('load', function () {
   
    var brid = $("[id*=hdBranchId]").val();
    var chkflag = false;
    document.getElementById("btnconf").style.visibility = "visible";
    $('#frmDate').val('');
    $('#toDate').val('');
    $("#TextBox28").val('');
    $("#TextBox32").val('');
    $("#TextBox33").val('');
    $("#TextBox34").val('');
    $("#entity").val('MANAPPURAM FINANCE LIMITED');
    $("#branch_id").val('');
    $("#branch_name").val('');
    $("#fiu-ind").val('');
    $("#address").val('');
    $("#street").val('');
    $("#locality").val('');
    $("#city").val('');
    $("#state").val('');
    $("#pincode").val('');
    $("#stdcode").val('');
    $("#email").val('');
    $("#dt_fir").val('');
    $("#ad_info").val('');
    $("#name_person").val('');
    $("#customer_id").val('');
    $("#customer_name").val('');
    
    $(document).ready(function () {
        $("#n1").val('');
        $("#n2").val('');
        $("#n3").val('');
        $("#n4").val('');
        $("#n5").val('');
        $("#n6").val('');
        $("#n7").val('');
        $("#v1").val('');
        $("#v2").val('');
        $("#v3").val('');
        $("#v4").val('');
        $("#v5").val('');
        $("#v6").val('');
        $("#v7").val('');
        $("#Totalvalue").val('');
        $("#totalcash").val('');
    
    });
   
    //$("#frmDate").datepicker({
    //    dateFormat: 'dd/mm/yy',
    //    onSelect: function (dateText, inst) {
    //        console.log("Selected date: " + dateText);
    //    }
    //});

    $("#frmDate").datepicker
        ({
            dateFormat: 'dd/MM/yy',
            changeMonth: true,
            changeYear: true,
            stepMonths: true,
            maxDate: new Date(),
            todayHighlight: true,
            onSelect: function (dateText, inst) {
            }
        });

    //$("#toDate").datepicker({
    //    dateFormat: 'dd/mm/yy',
    //    onSelect: function (dateText, inst) {
    //        console.log("Selected date: " + dateText);
    //    }
    //});
    $("#toDate").datepicker
        ({
            dateFormat: 'dd/MM/yy',
            changeMonth: true,
            changeYear: true,
            stepMonths: true,
            maxDate: new Date(),
            todayHighlight: true,
            onSelect: function (dateText, inst) {
            }

        });

    uncheckAll();
    dataload();





});

function dataload() {
    var Query1 = "branch_details";
    var brid = $("[id*=hdBranchId]").val();
    $.ajax({

        type: "post",
        contentType: "application/json; charset=utf-8",
        url: "Aml_Currency_Updation.aspx/display_details",

        data: "{Query: '" + Query1 + "' ,indata: '" + brid + "'}",
   
        dataType: "json",
        success: function (Result) {

            Result = Result.d;

            if (Result.length != "0") {
             
                data = Result.split('^');
                $('#branch_name').val(data[0]);
                $('#branch_id').val(data[1]);
                $('#address').val(data[2]);
                $('#street').val(data[3]);
                $('#locality').val(data[4]);
                $('#city').val(data[5]);
                $('#state').val(data[6]);
                $('#pincode').val(data[7]);
                $('#stdcode').val(data[8]);
                $('#email').val(data[9]);

            }
            else {

                alert("details avaialble");
            }
        }
    });

}

function uncheckAll() {
    var checkboxes = document.getElementsByTagName('input');
    for (var i = 0; i < checkboxes.length; i++) {
        if (checkboxes[i].type == 'checkbox') {
            checkboxes[i].checked = false;
        }
    }
}
function isNumber(evt) {
    evt = (evt) ? evt : window.event;
    var charCode = (evt.which) ? evt.which : evt.keyCode;
    if (charCode > 31 && (charCode < 48 || charCode > 57)) {
        return false;
    }
    return true;
}



function generatePdf() {

    var totalcash = $('#totalcash').val();
    var name_person = $('#name_person').val();


    

    if (totalcash === "" || totalcash === null || totalcash.trim() === "") {
        alert("No cash denomination added..");
        return false;
    }




    if ($("#frmDate").val() === "") {
        alert("Please select cash tendering date ");
        return false;
    }
    

    else if ($("#toDate").val() === "") {
        alert("Please select detection date ");
        return false;
    }
    else if (name_person === "" || name_person === null || name_person.trim() === "") {
        alert("Please add name of tendoring person");
        return false;
    }

    else if ($("#customer_id").val() === "") {
        alert("Please add customer id");
        return false;
    }

    else if ($("#customer_name").val() === "") {
        alert("Customer name is null, please add proper customer id");
        return false;
    }
    else {

        


        if (!checkCheckboxesnew()) {

          
            alert("select where the counterfeit currency detected");
            return false;
        }
        if (!checkCheckboxes()) {

            alert("Please select whether the local police station has been informed or not?");
            return false;

        }


       
        window.jsPDF = window.jspdf.jsPDF;
        alert("pdf generating");

        document.getElementById("btnconf").style.visibility = "hidden";
        let jsPdf = new jsPDF('p', 'pt', 'a4');
        var htmlElement = document.getElementById('pdfconversion');
        //alert(htmlElement);
        const opt = {
            callback: function (jsPdf) {
                jsPdf.save("Test.pdf");

            },
            margin: [4, 4, 4, 4],
            autoPaging: 'text',
            html2canvas: {
                allowTaint: true,
                dpi: 225,
                letterRendering: true,
                logging: false,
                scale: .50
            }
        };

        jsPdf.html(htmlElement, opt);
    }
}


//function calculateValue(n, value) {
//    $("#v1").val('');
//    var result = parseFloat(n) * value;
//    $("#v1").val(result.toString());

//    calc_total();
//}

//function calculateValue(n, value) {
//    $("#v1").val('');
//    var result = parseFloat(n) * value;
//    if (isNaN(result)) {
//        $("#v1").val("0");
//    } else {
//        $("#v1").val(result.toString());
//    }
//    calc_total();
//}  


$(document).ready(function () {
    $('.checkbox').click(function () {
        $('.checkbox').not(this).prop('checked', false);
    });
});

function calc_total() {
    var v1Value = parseFloat($('#v1').val() || 0);
    var v2Value = parseFloat($('#v2').val() || 0);
    var v3Value = parseFloat($('#v3').val() || 0);
    var v4Value = parseFloat($('#v4').val() || 0);
    var v5Value = parseFloat($('#v5').val() || 0);
    var v6Value = parseFloat($('#v6').val() || 0);
    var v7Value = parseFloat($('#v7').val() || 0);
    var newTotal = v1Value + v2Value + v3Value + v4Value + v5Value + v6Value + v7Value;
   
       
    
    if (newTotal == 0) {
        $("#Totalvalue").val("");
        $("#totalcash").val("");
    } else {
        $("#Totalvalue").val(newTotal.toString());
        $("#totalcash").val(newTotal.toString());
    }
}


function calculateValuej(n, value) {

//    isNaN
    $("#v2").val('');
    var result = parseFloat(n) * value;
    if (isNaN(result)) {
        $("#v2").val("");
    } else {
        $("#v2").val(result.toString());
    }
    calc_total();
}  


function calculateValuek(n, value) {
    $("#v3").val('');
    var result = parseFloat(n) * value;
    if (isNaN(result)) {
        $("#v3").val("");
    } else {
        $("#v3").val(result.toString());
    }
    calc_total();
}  
function calculateValuel(n, value) {
    $("#v4").val('');
    var result = parseFloat(n) * value;
    if (isNaN(result)) {
        $("#v4").val("");
    } else {
        $("#v4").val(result.toString());
    }
    calc_total();
}  
function calculateValuem(n, value) {
    $("#v5").val('');
    var result = parseFloat(n) * value;
    if (isNaN(result)) {
        $("#v5").val("");
    } else {
        $("#v5").val(result.toString());
    }
    calc_total();
}  
function calculateValuen(n, value) {
    $("#v6").val('');
    var result = parseFloat(n) * value;
    if (isNaN(result)) {
        $("#v6").val("");
    } else {
        $("#v6").val(result.toString());
    }
    calc_total();
}  
function calculateValueo(n, value) {
    $("#v7").val('');
    var result = parseFloat(n) * value;
    if (isNaN(result)) {
        $("#v7").val("");
    } else {
        $("#v7").val(result.toString());
    }
    calc_total();
}  




function validateNumber(event) {
    var key = event.keyCode || event.which;
    var regex = /[0-9]/;
    var inputValue = event.target.value;


    if (inputValue.length >= 3 && key !== 8 && key !== 9) {
        event.returnValue = false;
        if (event.preventDefault) event.preventDefault();
    } else if (!regex.test(String.fromCharCode(key)) && key !== 8 && key !== 9) {
        event.returnValue = false;
        if (event.preventDefault) event.preventDefault();
    }
    else if(inputValue.length === 0 &&  key === 48) {

        event.preventDefault();

        event.target.value = "";

        return;

    }  
}

function checkOnlyOne(group, id, name) {

    $('input[name="' + name + '"]').prop("checked", false);
    $("#" + id).prop("checked", true);
}

function checkOnlyOnes(group, id, name) {
    $('input[name="' + name + '"]').prop("checked", false);
    $("#" + id).prop("checked", true);
}

function validateNumbern(event) {
    var key = event.keyCode || event.which;
    var regex = /[0-9]/;
    var inputValue = event.target.value;
    if (inputValue.length >= 9 && key !== 8 && key !== 9) {
        event.returnValue = false;
        if (event.preventDefault) event.preventDefault();
    } else if (!regex.test(String.fromCharCode(key)) && key !== 8 && key !== 9) {
        event.returnValue = false;
        if (event.preventDefault) event.preventDefault();
    }
}

function validateNumbercust(event) {
    const inputValue = event.target.value;
    const isValidLength = inputValue.length < 15;
    const isValidCharacter = /^\d+$/.test(event.key);
    if (!isValidLength || !isValidCharacter) {
        event.preventDefault();
    }
}

function alpha(event)
{
    const inputValue = event.target.value;
    const isValidCharacter = /^[a-zA-Z ]$/.test(event.key);
    if (!isValidCharacter) { event.preventDefault(); }
} 


function custfind(event) {
    const inputValue = event.target.value;
   
    var Query2 = "cust_details";
 
    $.ajax({

        type: "post",
        contentType: "application/json; charset=utf-8",
        url: "Aml_Currency_Updation.aspx/cust_details",

        data: "{Query: '" + Query2 + "' ,indata: '" + inputValue + "'}",

        dataType: "json",
        success: function (Result) {

            Result = Result.d;

            if (Result.length != "0") {

                data = Result.split('^');
                $('#customer_name').val(data[0]);
            
            }
            else {


              
                alert("No customer ID avaialble");
                return false;
            }
        }
    });

}


function checkCheckboxes() {
    var isAtLeastOneChecked = false;
    var CheckProp = document.querySelectorAll('input[name="group2"]');
    CheckProp.forEach((checkbox) => {
        if (checkbox.checked) {
            isAtLeastOneChecked = true;
            return isAtLeastOneChecked;
        }
    });
    
    //if (!isAtLeastOneChecked) {
    //    alert("select where the counterfeit currency detected");
    //    chkflag = true;
    //    return false;
        
    //}


    return isAtLeastOneChecked;
}


function checkCheckboxesnew() {
    var isAtLeastOneChecked = false;
    var CheckPropq = document.querySelectorAll('input[name="group1"]');
    CheckPropq.forEach((checkbox) => {
        if (checkbox.checked) {
            isAtLeastOneChecked = true;
            return isAtLeastOneChecked;
        }
    });

    //if (!isAtLeastOneChecked) {
    //    alert("Please select whether the local police station has been informed or not?");
       
    //    chkflag = true;
    //    return false;
    //}

    return isAtLeastOneChecked;
}


