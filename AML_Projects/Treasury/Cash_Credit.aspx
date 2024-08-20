<%@ Page Title="" Language="C#" MasterPageFile="~/Main.Master" AutoEventWireup="true" CodeBehind="Cash_Credit.aspx.cs" Inherits="TMS_App.Cash_Credit" %>

<%@ Register Assembly="Microsoft.ReportViewer.WebForms" Namespace="Microsoft.Reporting.WebForms" TagPrefix="rsweb" %>
<asp:Content ID="Content1" ContentPlaceHolderID="head" runat="server">
    <script src="js/loanavailment.js"></script>

</asp:Content>

<asp:Content ID="Content2" ContentPlaceHolderID="ContentPlaceHolder1" runat="server">
    <form id="Form1" class="form-horizontal row-border" action="#" runat="server">

    
<asp:ScriptManager ID="ScriptManager1" runat="server"></asp:ScriptManager>
<div class="page-breadcrumb">
<div class="row">
<div class="col-5 align-self-center">
<h4 class="page-title" style="font-size:2vw;">Cash Credit</h4>                        
</div>
</div>
</div>


<div class="row">
<div class="col-12">
<div class="card card-5 rightmarg"> 
<form class="form-horizontal">
<div class="card-body">


<div class="row">
<div class="col-md-3">
<div class="form-group">
<label for="fundcat">Financial Institution Type : <span class="text-danger">*</span></label>
<%--<select class="custom-select form-control" id="ddlCatgry"  style="width:100%" name="Fund Category" onchange="GetSubFundDtls()" > </select>--%>
<select class="custom-select form-control" id="ddlselfitype" style="width:100%" onchange="fishowsection()" name="FinancialInstitutionType">
<%--<option value="-1">Select Financial Institution Type</option> --%>                         
</select>                                                    
</div>
</div>
<div class="col-md-3">
<div class="form-group">
<label for="fundsubcat">Financial Institution :<span class="text-danger">*</span></label>
<%--<select  class="custom-select form-control" id="ddlsSubCat"  style="width:100%" name="Fund Sub Category" onchange="" > </select>--%>
<select class="custom-select form-control" id="ddlselfi" style="width:100%" onchange="SelCCfundsource()" name="FinancialInstitution">
<%--<option value="-1">Select Financial Institution </option>  --%>                        
</select>
</div>
</div>

<div class="col-md-3">
<div class="form-group">
<label for="fundcat">Fund Category : <span class="text-danger">*</span></label>
<select class="custom-select form-control" id="ddlfundsourse" style="width:100%" onchange="SelectCCsubfund()" name="FundCategory">                       
</select>                                                    
</div>
</div>

<div class="col-md-3">
<div class="form-group">
<label for="fundsubcat">Fund Sub Category : <span class="text-danger">*</span></label>
<select class="custom-select form-control" id="ddlsubfund" style="width:100%" name="Fund Sub Category" onchange="showfund()">                    
</select>
</div>
</div>

</div>

<div class="row">
<div class="col-md-12 ">
<div class="form-group">
<label for="fundsubcat">Select Fund : <span class="text-danger">*</span></label>
<select class="custom-select form-control" id="ddlsubfound" style="width:100%" name="Fund" onchange="FillLoanlimit();">
</select>
</div>
</div>
</div>



<div class="row" id="divccfund">
<div class="col-md-12">
<div class="form-group">
<%--<h4 style="color: black; background-color:#666633">Fund Provider Information</h4>--%>
<div class="table-responsive">
<table class="table" id="tableccfund" > 
<thead class="bg-inverse text-white">
<tr >                                 
</tr> 
</thead> 
<tbody class="border border-dark"></tbody>
</table> 
</div>
</div>
</div>
</div>

<%--<div class="row" id="divccold">
<div class="col-md-12">
<div class="form-group">
<div class="table-responsive">
<table class="table" id="tableccold" > 
<thead class="bg-inverse text-white">
<tr >                                 
</tr> 
</thead> 
<tbody class="border border-dark"></tbody>
</table> 
</div>
</div>
</div>
</div>--%>
   

<div class="row" id="divstmt">
<div class="col-md-12">
<div class="form-group">
<%--<h4 style="color: black; background-color:#666633">Fund Provider Information</h4>--%>
<div class="table-responsive">
<table class="table" id="tablestatement" > 
<thead class="bg-inverse text-white">
<tr >                                 
</tr> 
</thead> 
<tbody class="border border-dark"></tbody>
</table> 
</div>
</div>
</div>
</div>



<div class="row">
<div class="col-md-8">
<div class="form-group">     
<div class="buttonbox"> 
    

<%--<input id="btn_statement" type="button" value="Statement" class="btn-input" onclick="StatementtableCC()" data-toggle="modal" data-backdrop="false"/>   --%> 
<asp:UpdatePanel ID="UpdatePanel1" runat="server"> 
<ContentTemplate>
<asp:Button ID="btn_statement" Text="Statement" runat="server" OnClick="btn_Statement_Click" OnClientClick=""  class="btn-prop" />
 <input id="hdfundid" type="hidden" runat="server"/>
</ContentTemplate>
</asp:UpdatePanel>
<rsweb:ReportViewer ID="ReportViewer1" runat="server"></rsweb:ReportViewer>
</div>
</div>    
</div>
</div>

<div class="row">
<div class="col-md-3">
<div class="form-group">
<label for="fundcat">Loan Limit : </label>

<div class="input-group mb-3">
<div class="input-group-prepend">
<span class="input-group-text"><i class="mdi mdi-currency-inr"></i></span>
</div>
<input type="text" class="form-control"  style="color:red" id="txtloanlimit" title="Loan Limit" disabled="disabled"/>
</div>

<%--<input type="text" class="form-control input-group-text " style="width: 100% ;color:red" id="txtloanlimit" name="txtsub" title="Loan Limit" maxlength="200" disabled="disabled" onchange="amountcheck()"/>--%>
<small id="LoanLimitWords" class="form-text text-muted"></small>
</div>
</div>
<div class="col-md-3">
<div class="form-group">
<label for="fundcat">Loan Balance : </label>
<div class="input-group mb-3">
<div class="input-group-prepend">
<span class="input-group-text"><i class="mdi mdi-currency-inr"></i></span>
</div>
<input type="text" class="form-control"  style="color:red" id="txtloanbal" title="Loan Balance" disabled="disabled"/>
</div>

<%--<input type="text" class="form-control input-group-text " style="width: 100%;color:red" id="txtloanbal" name="txtsub" title="Loan Balance" maxlength="200" disabled="disabled"/>--%>
<small id="LoanBalWords" class="form-text text-muted"></small>
</div>
</div>

 <div class="col-md-3">
<div class="form-group">
<label for="agreemntfrom">Choose Option :<span class="text-danger">*</span></label>
<br />

<div class="custom-control custom-radio">
<input type="radio" id="radGYes" name="radGuarnt" class="custom-control-input" onclick="searchContent()">
<label class="custom-control-label" for="radGYes">Repayment</label>
</div>
<div class="custom-control custom-radio">
<input type="radio" id="radGNo" name="radGuarnt" class="custom-control-input" onclick="searchContent()">
<label class="custom-control-label" for="radGNo">Withdrawal</label>
</div>
</div>
</div>

<div class="col-md-3" id="divwith" style="display:none">
<div class="form-group">
<label for="fundcat" id="lblamt">Withdrawal Amount : </label>
 <div class="input-group mb-3">
<div class="input-group-prepend">
<span class="input-group-text"><i class="mdi mdi-currency-inr"></i></span>
</div>
<input type="text" id="txtloanamt" maxlength="15" class="form-control" name="LoanAmount" onclick="" onkeyup="LoanAmtWords.innerHTML=AmountToWords(this.value)"  oninput="this.value = this.value.replace(/[^0-9.]/g, '').replace(/(\..*)\./g, '$1');" onchange="cashcreditamount();loanlimitcheck()"/>
</div>
<%--<input type="text" class="form-control input-group-text " style="width: 100%;color:red" id="txtproccessfee" name="txtsub" title="Loan Balance" maxlength="200" disabled="disabled"/>--%>
<small id="processFeeWords" class="form-text text-muted"></small>
</div>
</div>
</div>


<div class="row">
<div class="col-md-12">
<div class="form-group">     
<div class="buttonbox">                         
<input id="btnConfirm" type="button" value="Confirm" class="btn-input"  onclick="InsertCCloan();" data-toggle="modal" data-backdrop="false"/>                           
<input id="btnExit" type="button" value="Exit" class="btn-input"   onclick="return exitPage();" data-toggle="modal" data-backdrop="false"/>
</div>
</div>
</div>
</div>


</div>
</form>      
</div>
</div>
</div>
       <input id="hdUserId" type="hidden" runat="server"/>
       
        </form>
</asp:Content>
