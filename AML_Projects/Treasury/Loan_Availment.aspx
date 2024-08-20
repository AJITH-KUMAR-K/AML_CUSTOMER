<%@ Page Title="" Language="C#" MasterPageFile="~/Main.Master" AutoEventWireup="true" CodeBehind="Loan_Availment.aspx.cs" Inherits="Ma_AppSuite.Treasury.Loan_Availment" %>
<asp:Content ID="Content1" ContentPlaceHolderID="head" runat="server">

<script src="../App_Themes/Theme/assets/js/loanavailment.js"></script>
 
    <link href="../App_Themes/Theme/assets/css/rahul.css" rel="stylesheet" />
   <script src="https://cdnjs.cloudflare.com/ajax/libs/animejs/2.0.2/anime.min.js"></script>

    <script type="text/javascript">

         function isNumberKey(evt) {
             var charCode = (evt.which) ? evt.which : event.keyCode
             if (charCode > 31 && (charCode < 48 || charCode > 57))
                 return false;
             return true;
         }                                                                  
         </script>


    <style>

         .scroll {
  overflow-x: auto;
  white-space: nowrap;
   height: 150px;
}
    </style>




 <script src="https://canvasjs.com/assets/script/canvasjs.min.js"></script>

  <script>
        $(".form_datetime").datetimepicker({format: 'dd/MM/yy'});
    </script>

    <style>
          .Desktop-HD-Copy-9 {

  width: 1150px;

  height: 2000px;

  background-color:white;

}
    </style>


<%--    <style>

.ui-datepicker-today  a {
     border:  #fff !important;
     color:  #fff !important;
     font-weight: bold !important;
     background: #f00 !important; 
}

    </style>--%>





<%--        <style>
/*#container {
  width: 400px;
  height: 400px;
  position: relative;
  background: yellow;
}*/
#animate {
  width: 50px;
  height: 50px;
  position: absolute;
  background-color: red;
   animation-iteration-count: 3;
}
</style>--%>


<%--    <style>
#animate{
        width: 100px;
  height: 100px;
  background-color: red;
  position: relative;
  animation-name: example;
  animation-duration: 4s;
  animation-iteration-count: infinite;
  }

@-webkit-keyframes example {
  0%   {background-color:red; left:0px; top:0px;}
  25%  {background-color:yellow; left:800px; top:0px;}
  50%  {background-color:blue; left:800px; top:800px;}
  75%  {background-color:green; left:0px; top:800px;}
  100% {background-color:red; left:0px; top:0px;}
}

@keyframes example {
  0%   {background-color:red; left:0px; top:0px;}
  25%  {background-color:yellow; left:800px; top:0px;}
  50%  {background-color:blue; left:900px; top:800px;}
  75%  {background-color:green; left:0px; top:800px;}
  100% {background-color:red; left:0px; top:0px;}
}
    </style>--%>



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
                <h2 style="color=balack;font-weight:bold;"><i class="icon-reoder"></i>TREASURY</h2>            
            </div>
              <%-- <div class="widget-header align-right">
              <asp:HyperLink ID="HyperLink1" runat="server" NavigateUrl="~/Treasury/trsury_game.aspx" style="color=balack;font-weight:bold; font-family:'Times New Roman', Times, serif;font-size:large">Treasury game link....</asp:HyperLink>
                  </div>--%>
        </div>              
        <div class="container Desktop-HD-Copy-9">           
              <div class="col-md-11 h1 align-center">
              <h2 class="ml2"; style="color: black; background-color: lightblue;">Loan Availment</h2>
             </div>            
        
           <%-- <div id="wrap" onmouseover="Mousepoint()">           
            </div>--%>

             <%-- <div id ="animate"></div>--%>


              <div class="form-group col-md-12  padding-bottom-10px padding-top-10px">
             <div class="col-md-2 align-left"> 
             <label class="align-right">Select fI Type:</label>
             <select class="form-control" id="ddlselfitype" style="width:100%" onchange="fishowsection()" >
             <option value="-1">-------SELECT-------</option>                          
             </select>
            </div>
              <div class="col-md-2 align-left"> 
             <label class="align-right">Select FI:</label>
             <select class="form-control" id="ddlselfi" style="width:100%" onchange="showfundsource()">
             <option value="-1">-------SELECT-------</option>                          
             </select>
            </div>

        
              <div class="col-md-2 align-left"> 
             <label class="align-right">Select Fund Source:</label>
             <select class="form-control" id="ddlfundsourse" style="width:100%" onchange="showsubfund()">
             <option value="-1">-------SELECT-------</option>                          
             </select>
            </div>

             <div class="col-md-2 align-left"> 
             <label class="align-right">Select Fund Sub Source:</label>
             <select class="form-control" id="ddlsubfound" style="width:100%" onchange="FillLoanlimit();shotloanpayment()">
             <option value="-1">-------SELECT-------</option>                          
             </select>
            </div>
                      
             </div> 


             <div id="divfi" style="display:none">
             <div class="form-group col-md-11 align-center">
             <div class="col-md-11 align-center">
             <h4 style="color: black; background-color:#666633">Fund Provider Information</h4>
             <table class="table table-condensed table-bordered table-checkable" id="funddetailes"></table>
             </div>
             </div>
             </div>

  
             <div class="form-group col-md-12  padding-bottom-10px padding-top-10px">  
             </div>

            <div id="divfuflow" style="display:none">
            <div class="form-group col-md-10 align-center scroll">
            <div  class="col-md-11 align-center ">
            <h4 style="color: black; background-color:#666633">Old Loan Details</h4>
            <table class="table table-condensed table-bordered table-checkable" id="loanfilltable"></table>
            </div>
            </div>
            </div>



            <div class="form-group col-md-10  padding-bottom-10px padding-top-10px">                                  
            <div class="col-md-4 align-left">
            <label class="align-right">Loan Limit :</label>
            <input type="text" class="form-control input-group-text " style="width: 100% ;color:red" id="txtloanlimit" name="txtsub" title="Loan Limit" maxlength="200" disabled="disabled" onchange="amountcheck()"/>
            </div>
             
            <div class="col-md-4 align-left">
            <label class="align-right">Loan Balance :</label>
            <input type="text" class="form-control input-group-text " style="width: 100%;color:red" id="txtloanbal" name="txtsub" title="Loan Balance" maxlength="200" disabled="disabled"/>
            </div>
                  

            <div class="col-md-4 align-left"> 
            <label class="align-right">Processing Fee :</label>
            <input type="text" class="form-control input-group-text " style="width: 100%;color:red" id="txtproccessfee" name="txtsub" title="Loan Balance" maxlength="200" disabled="disabled"/>
            </div>          
            </div>


            <div class="form-group col-md-10  padding-bottom-10px padding-top-10px">            
                       
           <div class="col-md-4 align-left"> 
            <label class="align-right">Loan Amount:</label>
             <input type="text" class="form-control input-group-text " style="width: 100%" id="txtloanamt" name="txtsub" title="Loan Balance" maxlength="200" onkeypress="return isNumberKey(event)" onchange="amountcheck();loanlimitcheck()"/>
            </div>
          
          <div class="col-md-4 align-left"> 
             <label class="align-right">Interest type:</label>
             <select class="form-control" id="ddlintresttype" style="width:100%" onchange="paymode()">
             <option value="-1">-------SELECT-------</option>                          
             </select>
            </div>


            <div class="col-md-4 align-left">
            <label class="align-right">Interest rate:</label>
            <input type="text" class="form-control input-group-text " style="width: 100%" id="txtintrate" name="txtsub" title="Subject" maxlength="200" onkeypress="return isNumberKey(event)" onchange="interestrate();"/>
            </div>

           </div>


            <div class="form-group col-md-10  padding-bottom-10px padding-top-10px">         
            
             <div class="col-md-4 align-left">
            <label class="align-right">Loan Availed On :</label>
            <input type="text" class="form-control " id="txtlonavail" style="width:100%" name="txtloanava" autocomplete="off" title="Invoice Date" onkeypress="return false"/>            
            </div>

            <div class="col-md-4 align-left">
            <label class="align-right">Tenure:</label>
            <input type="text" class="form-control input-group-text " style="width: 100%" id="txttenure" name="txtsub" title="Subject" maxlength="4" onkeypress="return isNumberKey(event)" onchange="showmeturitydate()"/>
            </div>
                                               
            <div class="col-md-4 align-left"> 
            <label class="align-right">Loan maturity Date :</label>
             <input type="text" class="form-control input-group-text " id="txtlonagree" style="width:100%" name="txtloanagee" title="Subject"  onkeypress="return false"  disabled="disabled" />   
            </div>                         
            </div>


             <div class="form-group col-md-10 padding-bottom-10px padding-top-10px">   

             <div class="col-md-4 align-left"> 
             <label class="align-right">Mode Of Payment:</label>
             <select class="form-control" id="ddlmodpay" style="width:100%" onchange="paymode()">
             <option value="-1">-------SELECT-------</option>                          
             </select>
            </div>            
            </div>






            <div id="divbar" class="col-md-6 align-center padding-bottom-10px padding-top-10px" style="display:none" >
            <h4 style="background-color:#999966;color:black">Payment Mode</h4>
            </div>
            <div id="divgo" style="display:none" class="form-group col-md-12">        
            <div class="col-md-2 align-left">           
            <label class="align-right number">Date of payment :</label>
            <input type="text" class="form-control " id="txtdateofpay" style="width:100%" name="txtloanava" autocomplete="off" title="Invoice Date" onkeypress="return false"/>            
            </div>
                  
            <div class="col-md-2 align-left"> 
            <label class="align-right">Due Date :</label>
            <input type="text" class="form-control " id="txtduedate" style="width:100%" name="txtloanagee" autocomplete="off" title="Invoice Date" onkeypress="return false"/>   
            </div>
                  
            <div class="col-md-1 align-left">
            <label class="align-right">Penalty if any :</label>
            <input type="checkbox" class="form-control " id="chkloanacc" onclick="searchtablepen()" onkeypress="return isNumberKey(event)" />   
            </div>

             <div id="divpenalty" class="col-md-2 align-left" style="display:none"> 
            <label class="align-right">Penalty % :</label>
             <input type="text" class="form-control input-group-text " style="width: 100%" id="txtpenalty" name="txtsub" title="Loan Balance" maxlength="200" onkeypress="return isNumberKey(event)"/>
            </div>  
            </div>   
            
          <div class="form-group col-md-11  padding-bottom-10px padding-top-10px">
          </div>
                           
           <div id="divrun" style="display:none" class="form-group col-md-12"> 
                <div class="col-md-2 align-left"> 
            <label class="align-right">Priciple amt:</label>
             <input type="text" class="form-control input-group-text " style="width: 100%" id="txtprinamt" name="txtsub" title="Priciple amt" maxlength="200" onkeypress="return isNumberKey(event)"/>
            </div>  

                <div class="col-md-2 align-left"> 
            <label class="align-right">Interest amt:</label>
             <input type="text" class="form-control input-group-text " style="width: 100%" id="txtintramt" name="txtsub" title="Interest amt" maxlength="200" onkeypress="return isNumberKey(event)"/>                                        
            </div> 
            <div class="col-md-2 align-left" >
            <label class="align-right"></label>
            <button type="button" class="btn-prop" id="btnAdd" style="width:auto" onclick="fillpaymenttable();fillpaymenttable1();fillpaymenttable2();selection()">Add</button>
            </div> 
           </div> 

          <div class="form-group col-md-11  padding-bottom-10px padding-top-10px">
          </div>

             <div id="divmopay" style="display:none">
               <div class="form-group col-md-11 align-center padding-bottom-10px padding-top-10px">
         
              <h4 style="color: black; background-color:#666633">Priciple Details</h4>
              <table class="table table-condensed table-bordered table-checkable" id="tablepayment"></table>
       
              </div>
              </div>

               <div id="divmopaytab" style="display:none">
               <div class="form-group col-md-11 align-center padding-bottom-10px padding-top-10px">
        
              <h4 style="color: black; background-color:#666633">Interest Details</h4>
              <table class="table table-condensed table-bordered table-checkable" id="tablepayment1"></table>
          
              </div>
              </div>


               <div id="divmoamt" style="display:none">
               <div class="form-group col-md-11 align-center">
       
              <h4 style="color: black; background-color:#666633">Amount</h4>
              <table class="table table-condensed table-bordered table-checkable" id="tablepayment2"></table>
          
              </div>
              </div>


             <div id="divre" class="form-group col-md-12  padding-bottom-10px" style="display:none">
             <label class="col-md-2 align-left">Repayment Date : </label>
               <label id="moend" class="radio-inline col-md-2 align-left">
               <input  type="radio" name="rdbPo" data-toggle="collapse" data-target="#cheq1" id="rdbmonthend" onchange="repaycheck()"/>Month End</label>                                                        
               <label id="mdate" class="radio-inline col-md-2 align-left">
              <input type="radio" name="rdbPo" data-toggle="collapse" data-target="#cheq1" id="rdbmonthdate" onchange="repaycheck()"/>Date</label>

              <div id="divro" class="col-md-2 align-left" style="display:none" > 
              <label class="align-right"> Select Date :</label>
             <input type="text" class="form-control " id="txtrepaydate" style="width:100%" name="txtloanagee" autocomplete="off" title="Invoice Date" onkeypress="return false"/>  
                             
            </div>

            </div>

               <div  class="form-group col-md-8  padding-bottom-10px padding-top-10px">
              </div>          

            <div id="divscrey" class="form-group col-md-7 align-center  padding-bottom-10px" style="display:none"> 
         
            <button type="button" class="btn-prop" id="btnemi" onclick="GetSchedule();">Repayment Schedule</button>  

            </div>

            <div  class="form-group col-md-8  padding-bottom-10px padding-top-10px" >
           </div>


           
                <div id="divgen" style="display:none">
               <div class="form-group col-md-8 align-center">
       
             <%-- <h4 style="color: black; background-color:#666633">Amount</h4>--%>

              <table class="table table-condensed table-bordered table-checkable" id="repaygenpayment"></table>              
              </div>         
              </div>

             <div id="divrahu" class="form-group col-md-7 align-center  padding-bottom-10px" style="display:none" > 
                <button type="button" class="btn-prop" id="btn_upd" onclick="Updategenreypay()">Update</button>
             </div>



             <div id="divtick" style="display:none">
            <div class="form-group col-md-8 align-left  padding-bottom-10px">
     
           <label class="col-md-3 align-right">Do want to edit: </label>
           <div class="col-md-6 align-left">
            <input type="checkbox" class="form-control " id="chktable" onclick="searchtable()" />   
           </div>
           </div>
            </div>
               


      

            <div  class="form-group col-md-8  padding-bottom-10px padding-top-10px" >
           </div>

                <div id="divloterm">
               <div class="form-group col-md-11 align-center padding-bottom-10px padding-top-10px">
         
              <%--<h4 style="color: black; background-color:#666633">Priciple Details</h4>--%>
              <table class="table table-condensed table-bordered table-checkable" id="tabletermloan"></table>
       
              </div>
              </div>


            <div  class="form-group col-md-8  padding-bottom-10px padding-top-10px" >
           </div>

              <div id="divbaacde" class="col-md-6 align-center" >
             <h4 style="background-color:#999966;color:black">Disbursement Account Details</h4>
             </div>

             <div class="form-group col-md-10  padding-bottom-10px padding-top-10px"> 
             <div class="col-md-4 align-left"> 
             <label class="align-right">Main Account:</label>
             <select class="form-control" id="ddlloanaccname" style="width:100%">
             <option value="-1">-------SELECT-------</option>                          
             </select>
            </div>

            <%--  <div class="col-md-2 align-left"> 
             <label class="align-right">Procees Fee Acc Name:</label>
             <select class="form-control" id="ddlprofeeaccname" style="width:100%">
             <option value="-1">-------SELECT-------</option>                          
             </select>
            </div>--%>

              <div class="col-md-4 align-left"> 
             <label class="align-right">Sub Account:</label>
             <select class="form-control" id="ddlselbankname" style="width:100%">
             <option value="-1">-------SELECT-------</option>                          
             </select>
            </div>
            </div>

              <div class="col-md-10 align-center" >
               </div>

              <div id="divinrede" class="col-md-6 align-center padding-bottom-10px padding-top-10px" >
             <h4 style="background-color:#999966;color:black">Fund Transfer Account Details</h4>
             </div>

              <div class="form-group col-md-10  padding-bottom-10px padding-top-10px"> 
              <div class="col-md-4 align-left"> 
             <label class="align-right">Main Account:</label>
             <select class="form-control" id="ddlremainacc" style="width:100%">
             <option value="-1">-------SELECT-------</option>                          
             </select>
            </div>


              <div class="col-md-4 align-left"> 
             <label class="align-right">Sub Account:</label>
             <select class="form-control" id="ddlresubacc" style="width:100%">
             <option value="-1">-------SELECT-------</option>                          
             </select>
            </div>
            </div>


             <div style="display:none" class="form-group col-md-8  padding-bottom-10px padding-top-10px"> 
            <div id="chartContainer" style="height: 300px; width: 100%;"></div>
            </div>

         <div class="col-md-12 h1 align-center padding-top-10px">   
        <button type="button" class ="btn-prop" id="btnexit" onclick="return exitPage()">Exit</button>           
        <button type="button" class="btn-prop" id="btnconfirm"onclick="return Saveloanavilment()" >Confirm</button> 
     
        </div>
          
        </div>
          
        <input id="hdUserId" type="hidden" runat="server"/>
        <input id="hdBranchId" type="hidden" runat="server"/>
        <input id="hdFirmId" type="hidden" runat="server"/>
        <input id="hdData" type="hidden" runat="server"/>
        <input id="hdfunid" type="hidden" runat="server"/>
    </form>
</asp:Content>