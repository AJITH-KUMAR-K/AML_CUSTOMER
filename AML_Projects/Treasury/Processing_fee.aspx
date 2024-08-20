<%@ Page Title="" Language="C#" MasterPageFile="~/Main.Master" AutoEventWireup="true" CodeBehind="Processing_fee.aspx.cs" Inherits="Ma_AppSuite.Treasury.Processing_fee" %>

<asp:Content ID="Content1" ContentPlaceHolderID="head" runat="server">
    <script src="../App_Themes/Theme/assets/js/ProcessingFee.js"></script>
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
                    <h2 style="color: black;">Payment Of Processing Fee</h2>
                </div>
                <div class="col-md-10 well well-lg">
                    <div class="col-md-12 form-group padding-bottom-10px">
                         <div class="col-md-5 align-center">
                           <label class="align-left">processing Fee Included or not: </label>
                       &nbsp;&nbsp; <input type="checkbox" id="chk_pf" class="form-control align-left"/></div>
                     </div> 
                    <div class="col-md-12 form-group padding-bottom-10px">
                        <div class="col-md-4 align-left">
                            <label class="align-left">Financial Institution : </label>
                            <select class="form-control dd-list" id="ddl_FI" style="width: 100%" name="FinancilInstitution" onchange="getFIType()" ></select>
                        </div>
                        <div class="col-md-4 align-left">
                            <label class="align-left">FI Type : </label>
                         <input type="text" class="form-control" name="Fund Category" id="txt_FiTyp" style="width: 100%; color:#3f4652" readonly="readonly"/>
                        </div>
                       
                        </div>
                     <div class="col-md-12 form-group padding-bottom-10px">
                          <div class="col-md-4 align-left">
                            <label class="align-left">Loan Amount : </label>
                         <input type="text" class="form-control" name="Fund ID" id="txt_LoanAmnt" style="width: 100%; color:#3f4652" readonly="readonly" onchange=""/>
                        </div>
                          <div class="col-md-4 align-left">
                            <label class="align-left">Fund ID : </label>
                         <input type="text" class="form-control" name="Fund ID" id="txt_FundID" style="width: 100%; color:#3f4652" readonly="readonly" onchange=""/>
                        </div>
                         </div>
                    <br />
                    <div class="col-md-12 form-group">
                       <%-- <div class="col-md-4"></div>--%>
                        <label class="col-md-4 align-center" style="color:black">Bank Account Details</label>
                    </div>
                    <br />
                    <div class="col-md-12 form-group padding-bottom-10px">
                        <div class="col-md-4 align-left">
                            <label class="align-left">Main Account  : </label>
                            <input type="text" id="txtMainAcc" class="form-control" style="width:100%" name="search" placeholder="Search Loan.." onkeyup="LoadDataAutoComplete(this.id, this.value, '2', 'hdAcMain', 'TREASURY', 'GetLoanLedger')" onchange="CheckSub()"/>
                          </div>
                        <div class="col-md-4 align-left" id="ShwDiv">
                            <label class="align-left">Sub Account : </label>
                             <%-- <input type="text" id="txtSubAcc"  class="form-control" style="width:100%" name="search" placeholder="Search Loan.." onkeyup="LoadDataAutoComplete(this.id, this.value +'µ'+ $('[id*=hdAcMain]').val(), '2', 'hdSerLoan', 'TREASURY', 'GetSubAccLedger')" onchange=""/>--%>
                       <select class="form-control dd-list" id="ddl_SubAc" style="width: 100%" name="SubAccount" ></select>
                            </div>
                        <div class="col-md-4 align-left">
                            <label class="align-left">Processing Fee  : </label>
                               <input type="text" class="form-control" name="Processing Fee" id="txt_Prcssfee" style="width: 100%" onkeypress="return isNumber(event, this.value, 'Y')" />
                           </div>
                        </div>
                    <div class="col-md-12 form-group padding-bottom-10px">
                        <div class="col-md-3 align-left">
                            <label class="align-left">GST Rate  : </label>
                              <input type="text" class="form-control" name="GstRate" id="txt_gst" style="width: 100%" onkeyup="CalcGst(this.value)" />  <%--onkeyup="fillgstrate(this.value)"--%>
                        </div>
                        <div class="col-md-3 align-left">
                           <label class="align-right ">IGST </label>
                             <input type="text" class="form-control" name="GstRate" id="txt_IGst" style="width: 100%" readonly="readonly" />
                           </div>
                        <div class="col-md-3 align-left">
                            <label class="align-right">SGST  </label>
                          <input type="text" class="form-control" name="GstRate" id="txt_SGst" style="width: 100%" readonly="readonly" />
                        </div>
                        <div class="col-md-3 align-left">
                            <label class="align-right">CGST  </label>
                          <input type="text" class="form-control" name="GstRate" id="txt_CGst" style="width: 100%" readonly="readonly"/>
                        </div>
                    </div>
                
                    <div class="col-md-12  form-group align-center padding-bottom-10px">
                        <div class="col-md-5 align-right">
                            <button type="button" class="btn-prop" id="btnConf" onclick="AddProcssingFeeDtl()">Confirm</button>
                        </div>
                        <div class="col-md-5 align-left">
                            <button type="button" class="btn-prop" id="btnExit" onclick="frmExit()">Exit</button>
                        </div>
                    </div>
                    <%-------------------------------------%>
                </div>
            </div>
        </div>
        <input id="hdUserId" type="hidden" runat="server" />
        <input id="hdPag" type="hidden" runat="server" />
        <input id="hdGstValue" type="hidden" runat="server" /> --%>
        <input id="hdAcMain" type="hidden" runat="server" />
    </form>
</asp:Content>
