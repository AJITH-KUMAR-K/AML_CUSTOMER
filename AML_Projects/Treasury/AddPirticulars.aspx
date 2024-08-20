<%@ Page Title="" Language="C#" MasterPageFile="~/Main.Master" AutoEventWireup="true" CodeBehind="AddPirticulars.aspx.cs" Inherits="AML_Projects.Treasury.AddPirticulars" %>
<asp:Content ID="Content1" ContentPlaceHolderID="head" runat="server">
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
                             <div id="Tabs" role="tabpanel">
                                    <ul class="nav nav-tabs" role="tablist">
                                        <li class="active"><a href="#main" aria-controls=" Main" role="tab" data-toggle="tab">Add Main Particulars </a></li>
                                       <li><a href="#sub" aria-controls="Sub" role="tab" data-toggle="tab" >Add Sub Category</a></li>
                                        </ul>
                                 </div>
                 <div class="tab-content" style="padding-top: 20px">
                        <div role="tabpanel" class="tab-pane active" id="main">
                             <div class="container">
                                 <div class="col-md-10 h1 align-center">
                                     <h2 style="color:black;">Add Main Particular</h2>
                                 </div>
                                  <div class="col-md-10 well well-lg">
                                <div class="col-md-12  form-group align-center padding-bottom-10px">
                                   <label class="col-md-4 align-right">Main Particular Name </label>        
                                     <div class="col-md-4 align-left"> <input type="text" style="width:100%"  class="form-control" id="txt_main" name="MainParticular" onclick="" /></div>
                                  </div>
                                       <div class="col-md-5 align-right">
                                                <button type="button" class ="btn-prop" id="btnConf" onclick="">Confirm</button>
                                          </div>
                                       <div class="col-md-5 align-left">
                                                <button type="button" class ="btn-prop" id="btnExit" onclick="">Exit</button>
                                          </div>
                                      </div>
                             </div>
                            </div>
                       <div role="tabpanel" class="tab-pane" id="sub">
                             <div class="container">
                                 <div class="col-md-10 h1 align-center">
                                     <h2 style="color:black;">Add Sub Particular</h2>
                                 </div>
                                  <div class="col-md-10 well well-lg">
                                       <div class="col-md-12  form-group align-center padding-bottom-10px">
                                           <label class="col-md-4 align-right">Select Main</label>
                                           <div class="col-md-4 align-left"><select class="form-control dd-list" id="ddlMain"  style="width:100%" name="Select Main" >
                                               <option value="-1">--Select Main---</option>
                                                                            </select></div>
                                           </div>
                                      <div class="col-md-12  form-group align-center padding-bottom-10px">
                                   <label class="col-md-4 align-right">Sub Particular Name </label>        
                                     <div class="col-md-4 align-left"> <input type="text"  class="form-control" style="width:100% " id="txt_sub" name="SubParticular" onclick="" /></div>
                                  </div>
                                        <div class="col-md-5 align-right">
                                                <button type="button" class ="btn-prop" id="btnConf2" onclick="">Confirm</button>
                                          </div>
                                       <div class="col-md-5 align-left">
                                                <button type="button" class ="btn-prop" id="btnExit2" onclick="">Exit</button>
                                          </div>
                                      </div>
                                 </div>
                           </div>
                     </div>
               </div>
         </form>
</asp:Content>
