<%@ Page Title="" Language="C#" MasterPageFile="~/Main.Master" AutoEventWireup="true" CodeBehind="TreasuryHoliday.aspx.cs" Inherits="TMS_App.Treasury.Holiday" %>
<asp:Content ID="Content1" ContentPlaceHolderID="head" runat="server">
      <script src="../App_Themes/Theme/assets/js/TreasuryHoliday.js"></script>
    <link href="../App_Themes/Theme/assets/css/StyleAutoComplete.css" rel="stylesheet" />
<script src="../App_Themes/Theme/assets/js/AutoCompleteJS.js"></script>
    <script src="../js/newfi.js"></script>
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
                       <h2 style="color:black;">Holiday</h2>
                   </div>
                          <div class="col-md-10 well well-lg">
                               <div class="col-md-12  form-group align-center padding-bottom-10px">
                                   <label class="col-md-5 align-right">Add Holiday</label>
                                    <div class="col-md-1 align-left"> <input type="radio" id="radAdd" name="radholy" onclick="" /></div>
                                   <label class="col-md-2 align-left">Remove Holiday</label>
                                    <div class="col-md-1 align-left"> <input type="radio" id="radRemv" name="radholy" onclick="RemovHoly()" /></div>
                                   </div>
                              <div id="showDiv">
                        <div class="col-md-12  form-group align-center padding-bottom-10px">
                                <label class="col-md-3 align-right">Select Financial Institution: </label>        
                                   <div class="col-md-6 align-left"> <select  class="form-control dd-list" id="ddlFinacial"  style="width:100%" name="Select Financial Institution" onchange="" >
                                                                           </select></div>
                            </div>
                        <div class="col-md-12 form-group align-center padding-bottom-10px">
                           <label class="col-md-3 align-right">Date : </label>   
                            <div class="col-md-6 align-left"><input type="text" name="Date" id="txt_date" class="form-control datepicker" style="width:100%"  onkeydown="return false"/></div>
                         </div>
                                  </div>
                              <div id="shwRmrk">
                       <div class="col-md-12 form-group align-center padding-bottom-10px">
                           <label class="col-md-3 align-right">Remarks</label>
                           <div class="col-md-6 align-left"><textarea id="txt_remrk" name="Remarks" class="form-control" style="width:100%"></textarea></div>
                           </div>
                                  </div>
                       <div class="col-md-12 form-group padding-bottom-10px">
                            <div class="col-md-6 align-right"><button type="button" class ="btn-prop" id="btnConf" onclick="AddHoliday()">Confirm</button></div>
                           <div class="col-md-6 align-left"><button type="button" class ="btn-prop" id="btnExit" onclick="">Exit</button></div>
                       </div>

                       </div>
                     </div>
                   </div>
           <input id="hdUserId" type="hidden" runat="server"/>
         <input id="hdPag" type="hidden" runat="server"/>
          </form>
</asp:Content>
