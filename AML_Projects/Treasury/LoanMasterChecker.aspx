<%@ Page Title="" Language="C#" MasterPageFile="~/Main.Master" AutoEventWireup="true" CodeBehind="LoanMasterChecker.aspx.cs" Inherits="Ma_AppSuite.Treasury.LoanMasterChecker" %>
<asp:Content ID="Content1" ContentPlaceHolderID="head" runat="server">
     <script src="../App_Themes/Theme/assets/js/LoanApprove.js"></script>
     <style>

         .scroll {
  overflow-x: auto;
  white-space: nowrap;
   height: 150px;
}
    </style>
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
                       <h2 style="color:black;">Approve/Reject Fund</h2>
                   </div>
                  <div class="col-md-10 well well-lg">
                    <div class="col-md-12 form-group align-left padding-bottom-10px">
                        <div class="col-md-4 align-left">
                          <label class=" align-left">Select Financial Institution : </label>
                          <select class="form-control dd-list" id="ddl_fI" style="width:100%" name="Select Finanacial Institution" onchange=" GetFundDtls();"></select>
                        </div>
                   <div class="col-md-4 align-left">
                          <label class="align-left">Select Loan : </label>
                         <select class="form-control dd-list" id="ddl_Loan" style="width:100%" name="Select Loan" onchange="getFITableDtls()"></select>
                      </div>
                           </div>
                      <div id="ShowtblDiv">
                        <div class="form-group col-md-12 padding-bottom-10px padding-top-10px  scroll" >                   
                    <%-- <div class="form-group">   --%>                 
                    <table class="table table-hover " id="tableShowLoans" style="border:1px solid #ddd "  > 
                       <thead>
                            <tr style="border:1px solid #ddd"> 
                            </tr> 
                        </thead> 
                        <tbody > 
                                 </tbody>
                    </table> 
                    <%--</div>--%>
                 </div>  
            </div>
                          <div class="col-md-12 padding-bottom-10px padding-top-10px align-left">
                              <div class="col-md-4"></div>
                          <label class="col-md-1 align-left">Approve </label>
                          <div class="col-md-1 align-left"><input type="radio" name="radcheck" id="radAppr" /></div>
                          <label class="col-md-1 align-left">Reject  </label>
                          <div class="col-md-1 align-left"><input type="radio" name="radcheck" id="radRjct" /></div>
                      </div>
                      <div class="col-md-12  form-group align-center padding-bottom-10px">
                           <div class="col-md-5 align-right">
                                <button type="button" class ="btn-prop" id="btnConf" onclick="CheckLoans()">Confirm</button>
                                </div>
                               <div class="col-md-5 align-left">
                                     <button type="button" class ="btn-prop" id="btnExit" onclick="frmExit()">Exit</button>
                                          </div>
                            </div>
                      </div>
                  </div>
             </div>
          <input id="hdUserId" type="hidden" runat="server"/>
         <input id="hdPag" type="hidden" runat="server"/>
         </form>
</asp:Content>
