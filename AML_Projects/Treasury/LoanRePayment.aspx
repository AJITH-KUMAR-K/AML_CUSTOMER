<%@ Page Title="" Language="C#" MasterPageFile="~/Main.Master" AutoEventWireup="true" CodeBehind="LoanRePayment.aspx.cs" Inherits="Ma_AppSuite.Treasury.LoanRePayment" %>
<asp:Content ID="Content1" ContentPlaceHolderID="head" runat="server">
    <script>
  
    </script>
    <script src="../App_Themes/Theme/assets/js/LoanRePayment.js"></script>
    <script src="../App_Themes/Theme/assets/js/AutoCompleteJS.js"></script>
    <link href="../App_Themes/Theme/assets/css/StyleAutoComplete.css" rel="stylesheet" />
</asp:Content>
<asp:Content ID="Content2" ContentPlaceHolderID="ContentPlaceHolder1" runat="server">
      <form id="Form1" class="form-inline" action="#" runat="server">
           <div class="row ">
                <div class="ma-header">
                     <div class="col-md-12">
                          <h3 style="color: #091221"><i class="icon-reorder"></i>TREASURY </h3>
                     </div>
                </div>
         </div>
           <div class="panel panel-default" style="width: 1200px; padding: 10px; margin: 10px">
                <div class="container">
                     <div class="col-md-10 h1 align-center">
                       <h2 style="color:black;">Loan RePayment</h2>
                   </div>
                      <div class="col-md-10 well well-lg">
                           
                           <div class="col-md-12  form-group align-center padding-bottom-10px">
                               <div class="col-md-3 align-left">
                                   <label class="align-left" ><span style="color:#ff0000">*</span>&nbsp; Please Select An Option : </label></div>
                               <div class="col-md-4 align-left">
                               <label class="radio-inline align-left ">
                                                <input type="radio" id="RadIntrst" name="Pymntradio" onchange="IntrestPrinciple()"/>Interest
                                            </label>
                                           <label class="radio-inline align-left">
                                                <input type="radio" id="RadPrncple" name="Pymntradio" onchange="IntrestPrinciple()"/>Principle
                                            </label></div>
                               </div>
                      <%--    <div class="col-md-12  form-group align-center padding-bottom-10px">
                                 <div class="col-md-4 align-left">   <label class="align-left ">Payment  : </label>        
                                 <select  class="form-control dd-list" id="ddlPayDt"  style="width:100%" name="PaymentDate" onchange="getFITableDtls()" > </select></div> 
                               </div>--%>
                          <%--<div class="form-group col-md-12 padding-bottom-10px padding-top-10px">                             
                    <table class="table table-hover " id="tableLoanDtls" style="border:1px solid #ddd "  > 
                                              <thead>
                           <tr style="background-color:#996633;color:black"> 
                            </tr> 
                        </thead> 
                        <tbody > <tr style="background-color:#999966;color:black"></tr>
                        </tbody>
                    </table>  
                 </div> --%>
                      
                        <div class="form-group col-md-12 padding-bottom-10px padding-top-10px" id="Shwtable">                             
                    <table class="table table-hover " id="funddetailes1"  > 
                                           
                         <%-- <thead>
                            <tr> 
                                <th class="col-lg-1">#</th>
                                <th class="col-lg-2"> ID</th>
                                <th class="col-lg-9">MAIN DEVICE</th>
                            </tr> 
                        </thead> 
                        <tbody> 
                            
                        </tbody>--%>
                           
                       
                    </table>  
                 </div> 
                           <div class="form-group col-md-12 padding-bottom-10px padding-top-10px" id="ShowTot"> 
                              <div class="col-md-4"></div>
                               <div class="col-md-4 align-right"><label>Total Amount</label></div>
                               <div class="col-md-4 alighn-right"><input type="text" class="form-control"style="width:70%; color:black"  id="txt_tot" readonly="readonly"/></div>
                               </div>

                              <div class="col-md-12  form-group align-center padding-bottom-10px">
                              <div class="col-md-2 align-left">
                                  <label class="align-left">Main Accont :</label>
                                 <select id="ddl_MianLdgRepy" class="form-control dd-list" style="width:100%" onchange="GetSubAcc()"></select>
                                  </div>
                              <div class="col-md-2 align-left" id ="ShwSub">
                                   <label class="align-left align-right">Sub Accont :</label>
                                 <select id="ddl_SuBAccnt" class="form-control dd-list" style="width:100%"  ></select>
                                  </div>
                                     <div class="col-md-2 align-left">
                                   <label class="align-left align-right">Amount :</label>
                                  <input type="text" id="txtCrAmnt" class="form-control" style="width:100%;" name="Amount" />
                                  </div>
                                   <div class="col-md-2 align-left">
                                   <label class="align-left align-right">Total Amount :</label>
                                  <input type="text" id="txtTAmonut" class="form-control" style="width:100%;color:black " name="total" readonly="readonly"/>
                                  </div>
                                   <div class="col-md-3 align-right">
                                       <br />
                                          <button type="button" class ="btn-prop" id="btnAdd" style="width:100px" onclick="addAmount()">ADD</button>
                                     </div>
                              </div>
                           <div class="form-group col-md-12 padding-bottom-10px padding-top-10px" id="ShwCrTbl">                             
                    <table class="table table-hover " id="CrAmntTable"  > 
                 
                    </table>  
                 </div> 
                           <div class="col-md-12  form-group align-center padding-bottom-10px padding-top-10px">
                                 <div class="col-md-5 align-right">
                                      <button type="button" class ="btn-prop" id="btnConf" onclick="RepaymentDtls()">Confirm</button>
                                     </div>
                                    <div class="col-md-5 align-left">
                                          <button type="button" class ="btn-prop" id="btnExit" onclick="frmExit()">Exit</button>
                                     </div>
                            </div>
                       <%-- //--------------------%>
                          </div>
                    </div>
               </div>
               <input id="hdUserId" type="hidden" runat="server"/>
         <input id="hdPag" type="hidden" runat="server"/> 
          <input id="hdMainAcc" type="hidden" runat="server"/>
          <input id="hdSubAcc" type="hidden" runat="server"/>
           <input id="hdBrid" type="hidden" runat="server"/>
          <input id="hdFirmId" type="hidden" runat="server"/>
          </form>
</asp:Content>
