<%@ Page Title="" Language="C#" MasterPageFile="~/Main.Master" AutoEventWireup="true" CodeBehind="AddFinancialInstitution.aspx.cs" Inherits="Ma_AppSuite.Treasury.AddFinancialInstitution" %>
<asp:Content ID="Content1" ContentPlaceHolderID="head" runat="server">
     <script src="../App_Themes/Theme/assets/js/AddFI.js"></script>
    <link href="../App_Themes/Theme/assets/css/StyleAutoComplete.css" rel="stylesheet" />
<script src="../App_Themes/Theme/assets/js/AutoCompleteJS.js"></script>
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
                       <h2 style="color:black;">Add Financial Institution</h2>
                   </div>
                  <div class="col-md-10 well well-lg">
                  
                      <div class="col-md-12  form-group align-center padding-bottom-10px">
                          <label class="col-md-3 align-right">Financial Institution Type: </label>    
                            <div class="col-md-9 align-left">    <select  class="form-control dd-list" id="ddlFIType"  style="width:100%" name="Select FI Type" onchange="showBank()" >
                             </select>
                              </div>
                          </div> 
                      <div id="Shwbnk" class="col-md-12 form-group align-center padding-bottom-10px">
                           <label class="col-md-3 align-right">Select Bank: </label>
                        <div class="col-md-9 align-left"> <select  class="form-control dd-list" id="ddlBank"  style="width:100%" name="Select Bank" onchange="getBnkName()" >   </select>
                         </div>                
                     </div>
                      <div class="col-md-12  form-group align-center padding-bottom-10px">
                            <label class="col-md-3 align-right">Name Of Bank/Lender : </label>        
                                 <div class="col-md-9 align-left"> <input type="text" class="form-control"  style="width:100%" id="txt_bankname" name="NameOfBank" onclick="" /></div>
                              </div> 
                      <div class="col-md-12  form-group align-center padding-bottom-10px">
                            <label class="col-md-3 align-right">Branch Name : </label>        
                                 <div class="col-md-9 align-left"> <input type="text" class="form-control"  style="width:100%" id="txt_brnchname" name="Branch" onclick="" /></div>
                              </div>
                     
                      <div class="col-md-12  form-group align-center padding-bottom-10px">
                            <label class="col-md-3 align-right">Address : </label>        
                                 <div class="col-md-9 align-left"> <textarea id="txt_Addrs" class="form-control" style="width:100%" name="AddressOfBank" onclick=""></textarea></div>
                              </div>
                <div id="shwState">
                       <div class="col-md-12  form-group align-center padding-bottom-10px">
                            <label class="col-md-2 align-right">Select State : </label>  
                            <div class="col-md-4 align-left"><select  class="form-control dd-list" id="ddl_state"  style="width:100%" name="Select State" onchange="GetDistrDtl()" >
                                     </select>
                              </div>
                           <label class="col-md-2 align-right">Select District : </label>  
                            <div class="col-md-4 align-left"><select  class="form-control dd-list" id="ddl_Distrct"  style="width:100%" name="Select District" onchange="GetPostOfcDtl() " >
                                   </select>
                              </div>
                           </div>
                        <div class="col-md-12  form-group align-center padding-bottom-10px">
                              <label class="col-md-2 align-right">Select Post Office: </label>  
                                <div class="col-md-4 align-left"><select  class="form-control dd-list" id="ddl_postOffce"  style="width:100%" name="Select PostOffice" onchange="GetPinDtl()" >
                                  </select>
                                </div>
                            <label class="col-md-2 align-right">Pin Code : </label> 
                              <div class="col-md-4 align-left"> <input type="text" class="form-control"  style="width:100%" id="txt_PinCode" name="PinCode" onclick="" /></div>
                       </div>
             </div>
                
                        <div class="col-md-12  form-group align-center padding-bottom-10px">
                             <label class="col-md-2 align-right">Contact Person : </label>        
                                 <div class="col-md-4 align-left"> <input type="text" id="txt_CntPrsn" style="width:100%" class="form-control"  name="ContactPerson" onclick="" /></div>
                                   <label class="col-md-2 align-right">Email ID :</label>        
                                     <div class="col-md-4 align-left"> <input type="text" id="txt_Email" style="width:100%" class="form-control"  name="EmailID" onblur="CheckEmailId(this.value,this.id)" /></div>
                          </div>
                       <div class="col-md-12  form-group align-center padding-bottom-10px">
                            <label class="col-md-2 align-right">Phone No. : </label>        
                                 <div class="col-md-4 align-left"> <input type="text" class="form-control" style="width:100%" id="txt_phone" name="Telephone" onkeypress="return isNumber(event, this.value, 'Y')" /></div>
                           <label class="col-md-2 align-right">Mobile No. : </label>        
                                 <div class="col-md-4 align-left"> <input type="text" class="form-control" style="width:100%" id="txt_Mobno" name="MobileNumber" onkeypress="return isNumber(event, this.value, 'Y')" /></div>
                           </div>
                         <div class="col-md-12  form-group align-center padding-bottom-10px">
                            <label class="col-md-2 align-right">PAN No. : </label>        
                                 <div class="col-md-4 align-left"> <input type="text" class="form-control" style="width:100%" id="txtPan" name="PAN" onblur=" ChkPanVendor(this.value)" /></div>
                           <label class="col-md-2 align-right">GSTN : </label>        
                                 <div class="col-md-4 align-left"> <input type="text" class="form-control" style="width:100%" id="txtGst" name="GSTN" onblur="checkGST(this.value)" /></div>
                           </div>
                      <div class="col-md-12  form-group align-center padding-bottom-10px">
                           <label class="col-md-2 align-right">CIN : </label>        
                                 <div class="col-md-4 align-left"> <input type="text" class="form-control" style="width:100%" id="txt_CIN" name="CIN" onclick="" /></div>          
                          <div id="shwCountry">
                            <label class="col-md-2 align-right">Select Country: </label>  
                                  <div class="col-md-4 align-left"><select  class="form-control dd-list" id="ddl_country"  style="width:100%" name="Select Country" onchange="" >
                                     </select> </div>
                   </div>
                          </div>
                     <%-- <input type="text" style="width:100%;color:black;border-radius:8px;" class="form-control input-group-text " id="txtPoNo" name="search" placeholder="Search PO.." onkeyup="LoadDataAutoComplete(this.id, this.value, '2', 'hdSerPO', 'POINVOICE', 'GETPOSEARCH')" onchange="fillBillFrom(this.value)" maxlength="20"/>--%>
                        <div class="col-md-12  form-group align-center padding-bottom-10px">
                                                   <div class="col-md-5 align-right">
                                                <button type="button" class ="btn-prop" id="btnConf" onclick="AddFinancInst()">Confirm</button>
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
          <input id="hdBrid" type="hidden" runat="server"/>
          <input id="hdFirmId" type="hidden" runat="server"/>
          </form>
</asp:Content>
