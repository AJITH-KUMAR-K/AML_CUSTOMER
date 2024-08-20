<%@ Page Title="" Language="C#" MasterPageFile="~/Main.Master" AutoEventWireup="true" CodeBehind="Exel_export_sanction.aspx.cs" Inherits="AML_Projects.Exel_export_sanction" %>
<asp:Content ID="Content1" ContentPlaceHolderID="head" runat="server">
    <script src="App_Themes/Theme/assets/js/exel_export_sanction.js"></script>
</asp:Content>
<asp:Content ID="Content2" ContentPlaceHolderID="ContentPlaceHolder1" runat="server">
     <form id="Form1" class="form-horizontal row-border" action="#" runat="server">

         
            <ul class="nav nav-tabs">
                <li class="nav-item">
                    <a class="nav-link active" href="#popup_add" aria-controls="popup_add" role="tab" data-toggle="tab">SANCTION LIST EXCEL UPLOAD REPORT</a>
                </li>
                <li class="nav-item">
                    <a class="nav-link" href="#popup_delete" aria-controls="popup_delete" role="tab" data-toggle="tab">BLACK LIST EXCEL REPORT</a>
                </li>

            </ul>

                     <div class="tab-content" style="padding-top: 25px; max-height: 1000px !important">
                                         <div role="tabpanel" class="tab-pane policy active" id="popup_add">


        <div class="col-md-11 well well-lg" style="padding: 10px; margin-left: 50px" id="3">

            <div class="col-md-12 form-group">
                <div class=" col-md-4 align-right" style="width:50%;margin:0 auto;">
                    <h4>AML EXCEL UPLOAD: </h4>
                </div>

                <div class="col-md-6 align-left">
                    <input type="file" class="form-control"name="chooseFile" id="fupImports" style="background-color:dodgerblue" onchange="excelup()">
                   
                    <br />

                    <div class="buttonbox">
                        <input type="button" id="btnView" value="View" class="btn-prop" onclick="ExportToTable()"style="width:150px; font-size: 18px" <%--data-toggle="modal" data-backdrop="false"--%> />


                    </div>
                </div>
                <div class="col-md-8 align-right">
<%--                        <a href="../uploads/AML_TEST.xls" rel="nofollow">Sample Format Download Here</a>--%>
                        <a href="../aml_customer/uploads/AML_TEST.xls" rel="nofollow">Sample Format Download Here</a>

                </div>
            </div>

            <div class="row" id="divgrid1">
                <div class="col-md-12 align-center">
                    <div class="form-group">

                        <div class="col-md-8">
                            <div class="table-responsive ">
                                <table class="table table-hover table-danger col-md-8" id="exceltable" style="width: 750px; font-size: 18px">
                                    <thead class="bg-danger text-white align-center">
                                        <tr>
                                        </tr>
                                    </thead>
                                    <tbody class="border border-dark align-center"></tbody>
                                </table>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>


        <div class="col-md-12  form-group align-center padding-bottom-10px" id="5" style="width:25%;margin:0 auto;">

            <button type="button" class="btn-prop" id="btnadd" onclick="UploadFiles()" style="height: 25px; width: 125px; font-size:15px">UPLOAD</button>
            <button type="button" class="btn-prop" id="btnExit" onclick="frmExit()" style="height: 25px; width: 125px;font-size:15px">EXIT</button>


        </div>
                                              </div>

                <div role="tabpanel" class="tab-pane policy" id="popup_delete">

<div class="col-md-11 well well-lg" style="padding: 10px; margin-left: 50px" id="3">

            <div class="col-md-12 form-group">
                <div class=" col-md-4 align-right" style="width:50%;margin:0 auto;">
                    <h4>BLACK LIST EXCEL UPLOAD: </h4>
                </div>

                <div class="col-md-6 align-left">
                    <input type="file" class="form-control"name="chooseFile" id="fupImports1" style="background-color:dodgerblue" onchange="excelup()">
                   
                    <br />

                    <div class="buttonbox">
                       <input type="button" id="btnView1" value="View" class="btn-prop" onclick="ExportToTable1()"style="width:150px; font-size: 18px" /> <%--data-toggle="modal" data-backdrop="false"--%> 


                    </div>
                </div>
                <div class="col-md-8 align-right">
<%--                        <a href="../uploads/Blacklist_TEST.xls" rel="nofollow">Sample Format Download Here</a>--%>
               <a href="../aml_customer/uploads/Blacklist_TEST.xls" rel="nofollow">Sample Format Download Here</a>

                </div>
            </div>

            <div class="row" id="divgrid2">
                <div class="col-md-12 align-center">
                    <div class="form-group">

                        <div class="col-md-8">
                            <div class="table-responsive ">
                                <table class="table table-hover table-danger col-md-8" id="exceltable1" style="width: 750px; font-size: 18px">
                                    <thead class="bg-danger text-white align-center">
                                        <tr>
                                        </tr>
                                    </thead>
                                    <tbody class="border border-dark align-center"></tbody>
                                </table>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>


        <div class="col-md-12  form-group align-center padding-bottom-10px" id="4" style="width:25%;margin:0 auto;">

             <button type="button" class="btn-prop" id="btnadd1" onclick="UploadFiles1()" style="height: 25px; width: 125px; font-size:15px">UPLOAD</button>
            <button type="button" class="btn-prop" id="btnExit1" onclick="frmExit()" style="height: 25px; width: 125px;font-size:15px">EXIT</button>

        </div>
                   <%-- -----------------------------------------------------------------------------------------------%>

         
                     </div>

       
        <asp:HiddenField ID="hdvUserID" runat="server" />
            <asp:HiddenField ID="hdBranchId" runat="server" />
                <asp:HiddenField ID="hdvVendorID" runat="server" />
                <asp:HiddenField ID="hdvBranchID" runat="server" />
                           </div>
            
    </form>
</asp:Content>
