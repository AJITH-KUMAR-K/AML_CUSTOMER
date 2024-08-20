<%@ Page Title="" Language="C#" MasterPageFile="~/Main.Master" AutoEventWireup="true" CodeBehind="Aml_Currency_Updation.aspx.cs" Inherits="AML_Projects.Aml_Currency_Updation" %>

<asp:Content ID="Content1" ContentPlaceHolderID="head" runat="server">
 <script src="App_Themes/Theme/assets/js/Aml_Currency_Updation.js"></script>  
  <script src="https://cdnjs.cloudflare.com/ajax/libs/jspdf/2.3.1/jspdf.umd.min.js"></script>
  <script src="https://cdnjs.cloudflare.com/ajax/libs/html2canvas/1.4.1/html2canvas.min.js"></script>
 

    <script src="https://cdnjs.cloudflare.com/ajax/libs/html2pdf.js/0.10.1/html2pdf.bundle.min.js"></script>


    <style>
        #a4-page {
            width: 290mm;
            height: 430mm;
            margin: 0 auto;
            padding: 1.6mm;
            box-sizing: border-box;
            background-color:white;
            margin: 20px;
            border: 2px solid black;
            border: 2px solid black;
            margin-top: 3px;
            margin-bottom: 20px;
            margin-right: 20px;
            margin-left: 20px;
        }

        #a4-head {
            height: 30px;
        }

        #a5-head {
            height: 30px;
        }

        #a6-head {
            height: 30px;
        }

        #a7-head {
            height: 30px;
        }

        .wider-checkbox {
            width: 150px;
        }

        .time-box {
            position: absolute;
            align-items: center;
            background-color: dimgrey;
            color: white;
            border: 1px solid #ddd;
            font-size: 14px;
        }

        .centered-text {
            text-align: center;
            font-size: 16px;
            margin-top: 0;
            color: white;
        }

        #arrivals {
            margin-left: 19px;
        }

        label[for="ContentPlaceHolder1_entityName"] i {
            color: dimgrey;
        }


        .custom-border {
            border: 1px solid #000000;
        }
    </style>

   <%-- <script type="text/javascript">

        window.jsPDF = window.jspdf.jsPDF;

        function generatePdf() {


            let jsPdf = new jsPDF('p', 'pt', 'a4');
            var htmlElement = document.getElementById('doc-target');

            const opt = {
                callback: function (jsPdf) {

                    jsPdf.save("Test.pdf");

                },
                margin: [36, 36, 36, 36],
                autoPaging: 'text',
                html2canvas: {
                    allowTaint: true,
                    dpi: 300,
                    letterRendering: true,
                    logging: false,
                    scale: 2
                }
            };




            jsPdf.html(htmlElement, opt);
        }

        function btnDownloadPDF_Click() {

            alert("welcome");

            if (typeof jsPDF === 'undefined') {
                console.log('jsPDF library is not loaded');
                return;
            }


            var doc = new jsPDF();


            var element = document.querySelector('#pdfconversion');
            alert(element);

            html2canvas(element).then(function (canvas) {

                var imgData = canvas.toDataURL('image/png');


                doc.addImage(imgData, 'PNG', 15, 15, 170, 0);

                alert(imgData);



            });



        }
    </script>--%>
      
</asp:Content>

<asp:Content ID="Content2" ContentPlaceHolderID="ContentPlaceHolder1" runat="server">


<%--    <script>
        //window.jsPDF = window.jspdf.jsPDF;
 function generatePdf() {

          alert("pdf generating");

          let jsPdf = new jsPDF('p', 'pt', 'a4');
          var htmlElement = document.getElementById('pdfconversion');
          alert(htmlElement);
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
    </script>--%>
  <%--<script>
      window.onload = function () {


          


          uncheckAll()
          dataload()


      };




      function dataload() {
          var Query = "flag01";

          $.ajax({

              type: "post",
              contentType: "application/json; charset=utf-8",
              url: "Aml_Currency_Updation.aspx/display_details",
              data: "{Query: '" + Query + "',indata: '" + hdBranchId.text + "'}",
              dataType: "json",
              success: function (Result) {

                  Result = Result.d;

                  if (Result.length != "0") {
                      $('#TextBox1').val('');
                      $('#TextBox3').val('');
                      $('#TextBox4').val('');
                      $('#TextBox5').val('');
                      $('#TextBox6').val('');
                      $('#TextBox7').val('');
                      $('#TextBox8').val('');
                      $('#TextBox9').val('');
                      $('#TextBox10').val('');
                      data = Result.split('^');
                      $('#custid').val(data[0]);
                      $('#txtPan').val(data[2]);
                      $('#txtmatch').val(data[3]);

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


      function generatePdf() {

          alert("pdf generating");

          let jsPdf = new jsPDF('p', 'pt', 'a4');
          var htmlElement = document.getElementById('pdfconversion');
          alert(htmlElement);
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
      $(document).ready(function () {
          $('.checkbox').click(function () {
              $('.checkbox').not(this).prop('checked', false);
          });
      });


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


    </script>--%>


    <div id="pdfconversion">
        <div style="display: flex; align-items: center; margin-bottom: 2px; height: 0%">
            <h3 style="font-size: 12.1px; color: #333; font-weight: bold; margin-left: 20px; margin-bottom: 1px">FUI-IND</h3>
            <hr style="flex: 1; visibility: hidden;" />
            <h3 style="font-size: 12.1px; color: #333; font-weight: bold; margin-right: 143px; margin-bottom: 1px">Financial Intelligent Unit-India</h3>
        </div>
        <hr style="border-top: 3px solid #000000; margin: 5px 0; margin-left: 20px; margin-right: 144px;" />
        <h3 style="font-size: 16px; color: #333; font-weight: bold; margin-top: 10px; text-align: center;">COUNTERFEIT CURRENCY REPORT(CCR)</h3>
        <h3 id="arrivals" style="font-size: 10.7px; color: #333; font-weight: bold; margin-top: 10px; text-align: left;">Kindly fill in CAPITAL.Read the instructions before filling the form.</h3>
        <form id="Form1" class="form-inline" action="#" runat="server">
            <div id="a4-page">
                <div id="a4-head">
                    <div class="time-box">
                        <h1 class="centered-text" style="text-align: center; font-size: 16px; margin-top: 0; color: white">PART 1</h1>
                    </div>
                    <h1 style="font-size: 16px; margin-top: 0; color: black; margin-left: 80px">DETAILS OF REPORTING BRANCH/LOCATION</h1>
                </div>
                <hr style="border-top: 1.8px solid #000000; margin: 5px 0;" />
                <br />
                    <br />


                <div style="display: flex; align-items: center; margin-bottom: 10px;">
                    <label for="ContentPlaceHolder1_entityName" style="font-size: 14px; font-weight: bold; margin-right: 10px;">1.1</label>
                    <label for="ContentPlaceHolder1_entityName" style="font-size: 14px; font-weight: bold; margin-right: 10px; color: black">Name of Entity</label>
                  <input class="form-control custom-border"  type="text" readonly="true"  ID="entity"  Style="flex: 1;font-size:14px;color:black; margin-right: 70px; margin-left: 64px; height:29px;width:151px;" />
                </div>

                <div style="display: flex; align-items: center; margin-bottom: 10px;">

                    <label for="ContentPlaceHolder1_entityName" style="font-size: 14px; font-weight: bold; margin-right: 10px; margin-left: 3px">1.2</label>
                    <label for="ContentPlaceHolder1_entityName" style="font-size: 14px; font-weight: bold; margin-right: 10px; color: black">Name of Branch</label>
                    <input class="form-control custom-border"  type="text" readonly="true"  ID="branch_name"  Style="flex: 1;font-size:14px;color:black; margin-right: 70px; margin-left: 51px; height:29px;width:151px;" />
                </div>
              
                <div style="display: flex; align-items: center; margin-bottom: 10px;">
                    <label for="ContentPlaceHolder1_entityName" style="font-size: 14px; font-weight: bold; margin-right: 10px; margin-left: 3px">1.3</label>
                    <label for="ContentPlaceHolder1_entityName" style="font-size: 14px; font-weight: bold; margin-right: 10px; color: black">Branch ID</label>
                    <input class="form-control custom-border"  type="text" readonly="true" ID="branch_id"  Style="flex: 1; font-size:14px;color:black; margin-right: 10px; margin-left: 93px; height:29px;width:151px;" />
                    <label for="ContentPlaceHolder1_entityName" style="font-size: 14px; font-weight: bold; margin-right: 5px">1.4</label>
                    <label for="ContentPlaceHolder1_entityName" style="font-size: 14px; font-weight: bold; color: black; margin-right: 7px">ID Allotted by FIU-IND</label>
                    <input class="form-control custom-border"  type="text" readonly="true" ID="fiu-ind"  Style="flex: 1; margin-right: 70px; height:29px;width:151px;" />
                   
                </div>

                <div style="display: flex; align-items: center; margin-bottom: 10px;">

                    <label for="ContentPlaceHolder1_entityName" style="font-size: 14px; font-weight: bold; margin-right: 10px; margin-left: 3px">1.5</label>
                    <label for="ContentPlaceHolder1_entityName" style="font-size: 14px; font-weight: bold; color: black">Address(<i>No.,building</i>)</label>
                    <input class="form-control custom-border"  type="text" readonly="true"  ID="address"  Style="flex: 1;font-size:14px;color:black; margin-right: 70px; margin-left: 24px; height:29px;width:151px;" />
                   
                </div>
                <div style="display: flex; align-items: center; margin-bottom: 10px;">

                    <label for="ContentPlaceHolder1_entityName" style="font-size: 14px; font-weight: bold; margin-right: 10px; margin-left: 3px">1.6</label>
                    <label for="ContentPlaceHolder1_entityName" style="font-size: 14px; font-weight: bold; color: black">Street/Road</label>
                     <input class="form-control custom-border"  type="text" readonly="true" ID="street"  Style="flex: 1;font-size:14px;color:black; margin-right: 70px; margin-left: 90px; height:29px;width:151px;" />
                   
                
                </div>
                <div style="display: flex; align-items: center; margin-bottom: 10px;">
                    <label for="ContentPlaceHolder1_entityName" style="font-size: 14px; font-weight: bold; margin-right: 10px; margin-left: 3px">1.7</label>
                    <label for="ContentPlaceHolder1_entityName" style="font-size: 14px; font-weight: bold; color: black">Locality</label>
                     <input class="form-control custom-border"  type="text" readonly="true" ID="locality"  Style="flex: 1;font-size:14px;color:black; margin-right: 70px; margin-left: 116px; height:29px;width:151px;" />
                </div>
                <div style="display: flex; align-items: center; margin-bottom: 10px;">

                    <label for="ContentPlaceHolder1_entityName" style="font-size: 14px; font-weight: bold; margin-right: 10px; margin-left: 3px">1.8</label>

                    <label for="ContentPlaceHolder1_entityName" style="font-size: 14px; font-weight: bold; color: black">City/Town,District</label>
                      <input class="form-control custom-border"  type="text" readonly="true"  ID="city"  Style="flex: 1;font-size:14px;color:black; margin-right: 70px; margin-left: 49px; height:29px;width:151px;" />
                 
                </div>
                <div style="display: flex; align-items: center; margin-bottom: 10px;">

                    <label for="ContentPlaceHolder1_entityName" style="font-size: 14px; font-weight: bold; margin-right: 10px; margin-left: 3px">1.9</label>

                    <label for="ContentPlaceHolder1_entityName" style="font-size: 14px; font-weight: bold; color: black">State,Country</label>
                       <input class="form-control custom-border"  type="text" readonly="true" ID="state"  Style="flex: 1;font-size:14px;color:black; margin-right: 70px; margin-left: 75px; height:29px;width:151px;" />
                  
                </div>
                <div style="display: flex; align-items: center; margin-bottom: 10px;">
                    <label for="ContentPlaceHolder1_entityName" style="font-size: 14px; font-weight: bold; margin-right: 10px; margin-left: 3px">1.10</label>
                    <label for="ContentPlaceHolder1_entityName" style="font-size: 14px; font-weight: bold; margin-right: 10px; color: black">Pin Code</label>
                      <input class="form-control custom-border"  type="text" readonly="true" ID="pincode"  Style="flex: 1;font-size:14px;color:black; margin-right:24px;margin-left: 87px;  height:29px;" />
                    <label for="ContentPlaceHolder1_entityName" style="font-size: 14px; font-weight: bold; margin-left: 2px">1.11</label>
                    <label for="ContentPlaceHolder1_entityName" style="font-size: 14px; font-weight: bold; color: black; margin-right: 7px">Tel (<i>With STD code</i>)</label>
                     <input class="form-control custom-border"  type="text" readonly="true"  ID="stdcode"  Style="flex: 1;font-size:13px;color:black; margin-right:70px;  height:29px"onkeypress="return isNumber(event)" />
                </div>

                <div style="display: flex; align-items: center; margin-bottom: 10px;">
               <label for="ContentPlaceHolder1_entityName" style="font-size: 14px; font-weight: bold; margin-right: 10px; margin-left: 3px">1.12</label>
              <label for="ContentPlaceHolder1_entityName" style="font-size: 14px; font-weight: bold; margin-right: 10px; color: black">E-mail</label>
              <input class="form-control custom-border"  type="text"  ID="email" readonly="true" Style="flex: 1;font-size:13px;color:black; margin-right:475px; margin-left:105px; height:29px;" />
                </div>
                <hr style="border-top: 1.8px solid #000000; margin: 5px 0;" />
                <div id="a5-head">
                    <div class="time-box">
                        <h1 class="centered-text" style="text-align: center; font-size: 16px; margin-top: 0; color: white">PART 2</h1>
                    </div>
                    <h1 style="text-align: left; font-size: 16px; margin-top: 0; margin-left: 80px; color: black">DETAILS OF COUNTERFEIT CURRENCY</h1>

                </div>

                <hr style="border-top: 1.8px solid #000000; margin: 5px 0;" />
                <div style="display: flex; flex-direction: row; margin-bottom: 10px;">
                    <label for="ContentPlaceHolder1_entityName" style="font-size: 14px; font-weight: bold; color: black; margin-left: 100px">Denomination:</label>
                    <label for="ContentPlaceHolder1_entityName" style="font-size: 14px; font-weight: bold; color: black; margin-left: 210px">Number of pieces:</label>
                    <label for="ContentPlaceHolder1_entityName" style="font-size: 14px; font-weight: bold; color: black; margin-left: 240px">value</label>
                </div>
                <br />

                <div style="display: flex; flex-direction: column; align-items: flex-start; margin-bottom: 10px;">
                   <%-- <div style="display: flex; flex-direction: row; align-items: center; margin-bottom: 10px;">
                        <label for="ContentPlaceHolder1_entityName" style="font-size: 14px; font-weight: bold; margin-right: 10px; margin-left: 3px">2.1</label>
                        <span style="margin-right: 100px;"></span>
                        <label for="ContentPlaceHolder1_entityName" style="font-size: 14px; color: black; font-weight: bold; margin-left: 100px; margin-left: 3px">1000</label>
                        <span style="margin-right: 230px;"></span>
                           <input class="form-control custom-border"  type="text"  ID="n1"  Style="flex: 1;font-size:14px;color:black; margin-right: 55px; height:29px;width:151px;" onkeypress="validateNumber(event)" oninput="calculateValue(this.value,1000)"/>
                        <span style="margin-right: 100px;"></span>
                  <input class="form-control custom-border"  type="text"  ID="v1"  Style="flex: 1; margin-right: 55px;font-size:14px;color:black; height:29px;width:151px;" />
                    </div>--%>
                    <div style="display: flex; flex-direction: row; align-items: center; margin-bottom: 10px;">
                        <label for="ContentPlaceHolder1_entityName" style="font-size: 14px; font-weight: bold; margin-right: 10px; margin-left: 3px">2.2</label>
                        <span style="margin-right: 102px;"></span>
                        <label for="ContentPlaceHolder1_entityName" style="font-size: 14px; color: black; font-weight: bold; margin-right: 10px; margin-left: 3px">500</label>
                        <span style="margin-right: 226.5px;"></span>
                         <input  class="form-control custom-border"  type="text"   ID="n2"  Style="flex: 1;font-size:14px;color:black; margin-right: 55px; height:29px;width:151px;" onkeypress="validateNumber(event)" oninput="calculateValuej(this.value,500)"/>
                        <span style="margin-right: 100px;"></span>
                         <input class="form-control custom-border"  type="text" readonly="true" ID="v2"  Style="flex: 1;font-size:14px;color:black; margin-right: 55px; height:29px;width:151px;" />
                        
                    </div>

                    <div style="display: flex; flex-direction: row; align-items: center; margin-bottom: 10px;">
                        <label for="ContentPlaceHolder1_entityName" style="font-size: 14px; font-weight: bold; margin-right: 10px; margin-left: 3px">2.3</label>
                        <span style="margin-right: 102px;"></span>
                        <label for="ContentPlaceHolder1_entityName" style="font-size: 14px; color: black; font-weight: bold; margin-right: 10px; margin-left: 3px" ">200</label>
                        <span style="margin-right: 226px;"></span>
                        <input class="form-control custom-border"  type="text"  ID="n3"  Style="flex: 1;font-size:14px;color:black; margin-right: 55px; height:29px;width:151px;" onkeypress="validateNumber(event)" oninput="calculateValuek(this.value,200)"/>
                        <span style="margin-right: 100px;"></span>
                           <input class="form-control custom-border"  type="text" readonly="true" ID="v3"  Style="flex: 1;font-size:14px;color:black; margin-right: 55px; height:29px;width:151px;" />

                    </div>
                    <div style="display: flex; flex-direction: row; align-items: center; margin-bottom: 10px;">
                        <label for="ContentPlaceHolder1_entityName" style="font-size: 14px; font-weight: bold; margin-right: 10px; margin-left: 3px">2.4</label>
                        <span style="margin-right: 102px;"></span>
                        <label for="ContentPlaceHolder1_entityName" style="font-size: 14px; color: black; font-weight: bold; margin-right: 10px; margin-left: 3px">100</label>
                        <span style="margin-right: 227px;"></span>
                           <input class="form-control custom-border"  type="text"  ID="n4"  Style="flex: 1;font-size:14px;color:black; margin-right: 55px; height:29px;width:151px;" onkeypress="validateNumber(event)" oninput="calculateValuel(this.value,100)"/>
                  
                        <span style="margin-right: 100px;"></span>
            
                           <input class="form-control custom-border"  type="text" readonly="true" ID="v4"  Style="flex: 1; margin-right: 55px;font-size:14px;color:black; height:29px;width:151px;" />
                    </div>

                    <div style="display: flex; flex-direction: row; align-items: center; margin-bottom: 10px;">
                        <label for="ContentPlaceHolder1_entityName" style="font-size: 14px; font-weight: bold; margin-right: 10px; margin-left: 3px">2.4</label>
                        <span style="margin-right: 102px;"></span>
                        <label for="ContentPlaceHolder1_entityName" style="font-size: 14px; color: black; font-weight: bold; margin-right: 10px; margin-left: 3px">50</label>
                        <span style="margin-right: 233px;"></span>
                        <input class="form-control custom-border"  type="text"  ID="n5"  Style="flex: 1;font-size:14px;color:black; margin-right: 55px; height:29px;width:151px;" onkeypress="validateNumber(event)" oninput="calculateValuem(this.value,50)"/>
                        <span style="margin-right: 100px;"></span>

                           <input class="form-control custom-border"  type="text" readonly="true" ID="v5"  Style="flex: 1;font-size:14px;color:black; margin-right: 55px; height:29px;width:151px;" />
                    </div>

                    <div style="display: flex; flex-direction: row; align-items: center; margin-bottom: 10px;">
                        <label for="ContentPlaceHolder1_entityName" style="font-size: 14px; font-weight: bold; margin-right: 10px; margin-left: 3px">2.5</label>
                        <span style="margin-right: 102px;"></span>
                        <label for="ContentPlaceHolder1_entityName" style="font-size: 14px; color: black; font-weight: bold; margin-right: 10px; margin-left: 3px">20</label>
                        <span style="margin-right: 233px;"></span>
                          <input class="form-control custom-border"  type="text"  ID="n6"  Style="flex: 1;font-size:14px;color:black; margin-right: 55px; height:29px;width:151px;" onkeypress="validateNumber(event)" oninput="calculateValuen(this.value,20)"/>
                        <span style="margin-right: 100px;"></span>
                           <input class="form-control custom-border"  type="text" readonly="true"  ID="v6"  Style="flex: 1;font-size:14px;color:black; margin-right: 55px; height:29px;width:151px;" />
            
                    </div>


                    <div style="display: flex; flex-direction: row; align-items: center; margin-bottom: 10px;">
                        <label for="ContentPlaceHolder1_entityName" style="font-size: 14px; font-weight: bold; margin-right: 10px; margin-left: 3px">2.6</label>
                        <span style="margin-right: 102px;"></span>
                        <label for="ContentPlaceHolder1_entityName" style="font-size: 14px; color: black; font-weight: bold; margin-right: 10px; margin-left: 3px">10</label>
                        <span style="margin-right: 233px;"></span>
                        <input class="form-control custom-border"  type="text"  ID="n7"  Style="flex: 1;font-size:14px;color:black; margin-right: 55px; height:29px;width:151px;" onkeypress="validateNumber(event)" oninput="calculateValueo(this.value,10)"/>
                       <span style="margin-right: 100px;"></span>
                       <input class="form-control custom-border"  type="text" readonly="true" ID="v7"  Style="flex: 1; font-size:14px;color:black;margin-right: 55px; height:29px;width:151px;" />
                     
                    </div>

                    <div style="display: flex; flex-direction: row;">
                        <span style="margin-left: 396px;"></span>
                        <label for="ContentPlaceHolder1_entityName" style="font-size: 12px; font-weight: bold">2.8</label>
                        <span style="margin-left: 10px;"></span>
                        <label for="ContentPlaceHolder1_entityName" style="font-size: 12px; font-weight: bold; color: black">Total Value Of Counterfeit Currency</label>
                          <input class="form-control custom-border"  type="text" readonly="true" ID="Totalvalue"  Style="flex: 1; font-size:14px;color:black; margin-left: 76px; height:29px;width:151px;" />
                    </div>


                </div>
                <hr style="border-top: 1.8px solid #000000; margin: 5px 0;" />

                <div id="a6-head">
                    <div class="time-box">
                        <h1 class="centered-text" style="text-align: center; font-size: 16px; margin-top: 0; color: white">PART 3</h1>
                    </div>
                    <h1 style="text-align: left; font-size: 16px; margin-top: 0; margin-left: 80px; color: black">DETAILS OF DETECTION</h1>

                </div>

                <hr style="border-top: 1.8px solid #000000; margin: 5px 0;" />
                <div style="display: flex; align-items: center; margin-bottom: 10px;">

                    <label for="ContentPlaceHolder1_entityName" style="font-size: 14px; font-weight: bold; margin-right: 5px; margin-left: 3px">3.1</label>
                    <label for="ContentPlaceHolder1_entityName" style="font-size: 14px; font-weight: bold; margin-right: 10px; margin-left: 3px; color: black">Date Of Cash Tendering</label>
                    <input type="text" style="width:153px;height:29px; margin-left: 20px;margin-right: 4px; color:black; font-size:14px;color:black; text-transform: uppercase;" class="form-control input-group-text " id="frmDate" name="frmDate" title="From Date" /> 
                
                    <span style="margin-right: 100px;"></span>
                    <label for="ContentPlaceHolder1_entityName" style="font-size: 14px; font-weight: bold; margin-right: 5px">3.2</label>
                    <label for="ContentPlaceHolder1_entityName" style="font-size: 14px; font-weight: bold; color: black; margin-right: 7px">Total cash Deposited</label>
                      <span style="margin-right: 10px;"></span>
                      <input class="form-control custom-border"  type="text"  readonly="true"  ID="totalcash"  Style="flex: 1; font-size:14px;color:black; font-size:14px;color:black; margin-right: 55px; height:29px;width:151px;"  onkeypress="validateNumbern(event)" />
                </div>

                <div style="display: flex; margin-bottom: 10px;">
                    <label for="ContentPlaceHolder1_entityName" style="font-size: 14px; font-weight: bold; margin-right: 10px; margin-left: 3px">3.3</label>
                    <label for="ContentPlaceHolder1_entityName" style="font-size: 14px; font-weight: bold; color: black">Date of Detection</label>
                      <span style="margin-right: 13px;"></span>
                        <input type="text" style="width:153px;height:29px; margin-left: 57px; font-size:14px;color:black; color:black; text-transform: uppercase;" class="form-control input-group-text " id="toDate" name="frmDate" title="From Date" /> 
                </div>
               

                <div style="display: flex; margin-bottom: 10px;">
  <label for="ContentPlaceHolder1_entityName" style="font-size: 14px; font-weight: bold; margin-right: 5px; margin-left: 3px">3.4</label>
  <label for="ContentPlaceHolder1_entityName" style="font-size: 14px; font-weight: bold; color: black; margin-right: 41px;">Detected at</label>
  <input type="checkbox" id="CheckBox0" name="group1"  style="margin-left: 70px;" onclick="checkOnlyOne('group1', this.id, this.name)" />
  <label for="ContentPlaceHolder1_entityName" style="font-size: 14px; margin-left: 10px; font-weight: bold; color: black">Cash Counter</label>
  <span style="margin-right: 13px;"></span>
  <input type="checkbox" id="CheckBox1" name="group1"  style="margin-left: 70px;" onclick="checkOnlyOne('group1', this.id, this.name)" />
  <label for="ContentPlaceHolder1_entityName" style="font-size: 14px; margin-left: 10px; font-weight: bold; color: black">Branch Level</label>
  <span style="margin-right: 13px;"></span>
  <input type="checkbox" id="CheckBox2" name="group1" style="margin-left: 70px;" onclick="checkOnlyOne('group1', this.id, this.name)" />
  <label for="ContentPlaceHolder1_entityName" style="font-size: 14px; margin-left: 10px; font-weight: bold; color: black">Currency Chest</label>
</div>


                <div style="display: flex; margin-bottom: 10px;">
                    <span style="margin-right: 143px;"></span>
                    <input type="checkbox" id="CheckBox3" name="group1"  style="margin-left: 70px;" onclick="checkOnlyOne('group1', this.id, this.name)" />
              

                    <label for="ContentPlaceHolder1_entityName" style="font-size: 14px; margin-left: 10px; font-weight: bold; color: black">RBI'S CVPS</label>
                    <span style="margin-right: 13px;"></span>
                    <input type="checkbox" ID="CheckBox4"  name="group1"  Style="margin-left: 84px;"  onclick="checkOnlyOne('group1', this.id, this.name)" />
                    <label for="ContentPlaceHolder1_entityName" style="font-size: 14px; margin-left: 10px; font-weight: bold; color: black">Other</label>
                </div>
                <br />
                <div style="display: flex; margin-bottom: 10px;">
                    <label for="ContentPlaceHolder1_entityName" style="font-size: 14px; font-weight: bold; margin-right: 5px; margin-left: 3px">3.5</label>

                    <label for="ContentPlaceHolder1_entityName" style="font-size: 14px; font-weight: bold; color: black; margin-right: 41px;">Whether local police station has been informed</label>
                    <span style="margin-right: 5px;"></span>
                    <input type="checkbox"  ID="CheckBox5"  name="group2"  Style="margin-left: 70px;" onclick="checkOnlyOnes('group2', this.id, this.name)"/>
                    <label for="ContentPlaceHolder1_entityName" style="font-size: 14px; margin-left: 10px; font-weight: bold; color: black">Yes</label>
                    <span style="margin-right: 12px;"></span>

                      <input type="checkbox" id="CheckBox6" name="group2"  style="margin-left: 70px;"  onclick="checkOnlyOnes('group2', this.id, this.name)"/>
                    <label for="ContentPlaceHolder1_entityName" style="font-size: 14px; margin-left: 10px; font-weight: bold; color: black">No</label>
                </div>
                <div style="display: flex; margin-bottom: 10px;">
                    <label for="ContentPlaceHolder1_entityName" style="font-size: 14px; font-weight: bold; margin-right: 9px; margin-left: 3px">3.6</label>
                    <label for="ContentPlaceHolder1_entityName" style="font-size: 14px; font-weight: bold; color: black; margin-right: 30px;">Details Of FIR (<i>if vailable</i>)</label>
        
                     <input class="form-control custom-border"  type="text" ID="dt_fir" maxlength="80" Style="flex: 1; margin-right: 70px; font-size:14px;color:black; margin-left: 4px; height:29px;width:151px;" onkeypress="return alpha(event)" />

                </div>
                <div style="display: flex; margin-bottom: 10px;">
                    <label for="ContentPlaceHolder1_entityName" style="font-size: 14px; font-weight: bold; margin-right: 5px; margin-left: 3px">3.7</label>
                    <label for="ContentPlaceHolder1_entityName" style="font-size: 14px; font-weight: bold; color: black; margin-right: 14px;">Additional information,if any</label>
                    <input class="form-control custom-border"  type="text"  ID="ad_info"  maxlength="80" Style="flex: 1; margin-right: 70px; font-size:14px;color:black; margin-left: 3px; height:29px;width:151px;" onkeypress="return alpha(event)" />
                </div>
                <hr style="border-top: 1.8px solid #000000; margin: 5px 0;" />
                <div id="a7-head">
                    <div class="time-box">
                        <h1 class="centered-text" style="text-align: center; font-size: 16px; margin-top: 0; color: white">PART 4</h1>
                    </div>
                    <h1 style="text-align: left; font-size: 16px; margin-top: 0; margin-left: 80px; color: black">DETAILS OF RELATED PERSON</h1>
                </div>
                <hr style="border-top: 1.8px solid #000000; margin: 5px 0;" />
                <div style="display: flex; align-items: center; margin-bottom: 10px;">
                    <label for="ContentPlaceHolder1_entityName" style="font-size: 14px; font-weight: bold; margin-right: 10px;">4.1</label>
                    <label for="ContentPlaceHolder1_entityName" style="font-size: 14px; font-weight: bold; margin-right: 5px; color: black">Name of Tendering Person</label>
                    <span style="margin-right: 11px;"></span>
               <%--     <asp:TextBox ID="TextBox32" runat="server" Style="flex: 1; margin-right: 65px; margin-left: 4px"></asp:TextBox>--%>
                      <input class="form-control custom-border"  type="text"  ID="name_person" maxlength="30"  Style="flex: 1; font-size:14px;color:black; margin-right: 65px; margin-left: 4px; height:29px;" onkeypress="return alpha(event)"/>
                </div>
                <div style="display: flex; align-items: center; margin-bottom: 10px;">

                    <label for="ContentPlaceHolder1_entityName" style="font-size: 14px; font-weight: bold; margin-right: 10px;">4.2</label>

                    <label for="ContentPlaceHolder1_entityName" style="font-size: 14px; font-weight: bold; margin-right: 10px; color: black" >Customer ID</label>
                    <span style="margin-right: 26px;"></span>
                      <input class="form-control custom-border"  type="text"  ID="customer_id"  Style="flex: 1; font-size:14px;color:black; margin-right: 65px; margin-left: 78px; height:29px;" onkeypress="validateNumbercust(event)" onchange="custfind(event)" />
              
                </div>

                <div style="display: flex; align-items: center; margin-bottom: 10px;">

                    <label for="ContentPlaceHolder1_entityName" style="font-size: 14px; font-weight: bold; margin-right: 10px;">4.3</label>

                    <label for="ContentPlaceHolder1_entityName" style="font-size: 14px; font-weight: bold; margin-right: 10px; color: black">Customer Name</label>
               <%--     <asp:TextBox ID="TextBox34" runat="server" Style="flex: 1; margin-right: 65px; margin-left: 76px"></asp:TextBox>--%>
                      <input class="form-control custom-border"  type="text"  ID="customer_name"  readonly="true"  Style="flex: 1; font-size:14px;color:black; margin-right: 65px; margin-left: 78px; height:29px;" />
                </div>
                <br />

                <div style="display: flex; align-items: center; margin-bottom: 10px;">

                    <span style="margin-right: 400px;"></span>

                    <label for="ContentPlaceHolder1_entityName" style="font-size: 14px; font-weight: bold; color: black">Signature</label>
                    <span style="margin-right: 25px;"></span>
                    <asp:TextBox ID="TextBox35" readonly="true" runat="server" Style="flex: 1; height: 45px; margin-right: 65px"></asp:TextBox>
                </div>
                <div style="display: flex; align-items: center; margin-bottom: 10px;">

                    <span style="margin-right: 400px;"></span>

                    <label for="ContentPlaceHolder1_entityName" style="font-size: 14px; font-weight: bold; color: black">Name</label>
                    <span style="margin-right: 52px;"></span>
                    <asp:TextBox ID="TextBox36" readonly="true" runat="server" Style="flex: 1; margin-right: 65px;height:29px"></asp:TextBox>
                </div>
                <div style="display: flex; align-items: center; margin-bottom: 10px;">

                    <span style="margin-right: 400px;"></span>

                    <label for="ContentPlaceHolder1_entityName" style="font-size: 14px; font-weight: bold; color: black">Designation</label>
                    <span style="margin-right: 13px;"></span>
                    <asp:TextBox ID="TextBox37" readonly="true" runat="server" Style="flex: 1; margin-right: 65px;height:29px"></asp:TextBox>
                </div>
                <br />
                <hr style="border-top: 1.8px solid #808080" />

                <div style="display: flex; justify-content: space-between;">
                    <label for="ContentPlaceHolder1_entityName" style="font-size: 14px; font-weight: bold; color: black;">DO NOT FILL. FOR FIU-IND USE ONLY</label>
                    <label for="ContentPlaceHolder1_entityName" style="font-size: 14px; margin-right: 5px; font-weight: bold; color: black;">CCR</label>
                </div>
             
                <br />
                <hr style="border-top: 1.8px solid #808080; margin: 1px 0;" />
                <div style="text-align: center;">


                    <button type="button" class="btn btn-info" id="btnconf" onclick="generatePdf()" style="width: 120px; background-color: grey; margin-top: 10px; color: white; border-color: black;">
                        <i class="icon icon-check">&nbsp;</i>CONFIRM
                    </button>
                </div>

            </div>
                    
                   <input type="hidden" id="hdvUserID" runat="server" />
                   <input type="hidden" id="hdBranchId" runat="server" />

        </form>
    </div>
</asp:Content>
