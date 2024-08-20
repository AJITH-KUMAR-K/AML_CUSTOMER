<%@ Page Title="" Language="C#" MasterPageFile="~/Main.Master" AutoEventWireup="true" CodeBehind="Loan_Availment_verify.aspx.cs" Inherits="Ma_AppSuite.Treasury.Loan_Availment_verify" %>
<asp:Content ID="Content1" ContentPlaceHolderID="head" runat="server">
    <script src="../App_Themes/Theme/assets/js/loanavailment.js"></script>
    <script src="https://cdnjs.cloudflare.com/ajax/libs/animejs/2.0.2/anime.min.js"></script>
    <style>

         .scroll {
  overflow-x: auto;
  white-space: nowrap;
}
    </style>


    <style>

        .ml2 {
  font-weight: 900;
  font-size: 30px;
}

.ml2 .letter {
  display: inline-block;
  line-height: 1em;
}
    </style>



</asp:Content>
<asp:Content ID="Content2" ContentPlaceHolderID="ContentPlaceHolder1" runat="server">
         <form id="form1" class="form-horizontal" action="#" runat="server">
        <div class="row">
            <div class="widget-header align-center">
             <h2 style="color=black;font-weight:bold;"><i class="icon-reoder"></i>TREASURY</h2> 
            </div>


            </div>

             <div class="container">

            <div class="col-md-11 h1 align-center padding-top-10px">
              <h2 class="ml2"; style="color: black; background-color: lightblue">Loan Availment verify</h2>
             </div>

              <div class="form-group col-md-12  padding-bottom-10px padding-top-10px">

             <div class="col-md-2 align-left"> 
             <label class="align-right">Select fI Type:</label>
             <select class="form-control" id="ddlselfitype" style="width:100%" onchange="fishowsection()" >
             <option value="-1">-------SELECT-------</option>                          
             </select>
            </div>
              <div class="col-md-2 align-left"> 
             <label class="align-right">Select FI:</label>
             <select class="form-control" id="ddlselfi" style="width:100%" onchange="showfundsourceveri()">
             <option value="-1">-------SELECT-------</option>                          
             </select>
            </div>

        
              <div class="col-md-2 align-left"> 
             <label class="align-right">Select Fund Source:</label>
             <select class="form-control" id="ddlfundsourseveri" style="width:100%" onchange="verifundshow()">
             <option value="-1">-------SELECT-------</option>                          
             </select>
            </div>

             <div class="col-md-2 align-left"> 
             <label class="align-right">Select Fund Sub Source:</label>
             <select class="form-control" id="ddlsubfoundveri" style="width:100%" onchange="VeriFundProvider()">
             <option value="-1">-------SELECT-------</option>                          
             </select>
            </div>
 
             </div> 


              <div id="divfuveri" style="display:none">
              <div class="form-group col-md-11 align-center">
              <div class="col-md-11 align-center">
              <h4 style="color: black; background-color:#666633">Fund Provider Information</h4>
              <table class="table table-condensed table-bordered table-checkable" id="funddetailes1"></table>
              </div>
              </div>
              </div>

           
              <div class="form-group col-md-11  padding-bottom-10px padding-top-10px">
              </div>

              <div id="divflowdone" style="display:none">
              <div class="form-group col-md-11 align-center scroll">
              <div class="col-md-11 align-center ">
              <h4 style="color: black; background-color:#666633">Loan Details</h4>
              <table class="table table-condensed table-bordered table-checkable" id="loanfilltable1"></table>
              </div>
              </div>
              </div>

              <%--   <div class="form-group col-md-11  padding-bottom-10px padding-top-10px">
                 </div>--%>


              <div id="divpamode" style="display:none">
              <div class="form-group col-md-11 align-center">
              <div class="col-md-11 align-center">
              <h4 style="color: black; background-color:#666633">Payment mode details</h4>
              <table class="table table-condensed table-bordered table-checkable" id="thirdfilltab"></table>
              </div>
              </div>
              </div>


        <div class="col-md-12 h1 align-center padding-top-10px">   
        <button type="button" class ="btn-prop" id="btnexit" onclick="return exitPage()">Exit</button>           
        <button type="button" class="btn-prop" id="btnconfirm"onclick="return DesigAssign()" >Verified</button>                                   
        </div>

        </div>



      <input id="hdUserId" type="hidden" runat="server"/>
      </form>
</asp:Content>
