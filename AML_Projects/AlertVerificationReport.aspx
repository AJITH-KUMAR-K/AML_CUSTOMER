<%@ Page Title="" Language="C#" MasterPageFile="~/Main.Master" AutoEventWireup="true" CodeBehind="AlertVerificationReport.aspx.cs" Inherits="AML_Projects.AlertVerificationReport" %>
<asp:Content ID="Content1" ContentPlaceHolderID="head" runat="server">
    <script src="App_Themes/Theme/assets/js/AlertVerifyReport.js"></script>
</asp:Content>
<asp:Content ID="Content2" ContentPlaceHolderID="ContentPlaceHolder1" runat="server">
    <style>
        .col-md-12{
            display:flex;
            justify-content:initial;
            padding:20px;
        }
        .btn-prop{
            background-color: darkgray;
            width: 100px;
        }
        .form-group{
            display:flex !important;
            justify-content:center!important;
        }
        </style>
    <form id="Form1" class="form-inline" action="#" runat="server">
        <div class="panel panel-default" style="width: 1000px; padding: 10px 10px 10px 10px; margin: 50px 0px 0px 50px;">
         <div id="divDate" class="col-md-12 padding-bottom-10px align-center" style="padding-bottom:10px; ">
                        <label  class=" col-md-2 align-right">From Date:</label>
                        <div class="col-md-3 align-left">
                            <input type="text" class="input-group-text" style="width:250px; color:black;text-transform: uppercase;" onkeypress="return false" id="frmDate" name="frmDate" title="From Date" placeholder="Select From Date"/>
                        </div>
                        <label  class=" col-md-3 align-right">To Date:</label>
                        <div class="col-md-3 align-left">
                            <input type="text" class="input-group-text" style="width:250px; color:black;text-transform: uppercase;" onkeypress="return false" id="toDate" name="toDate" title="to Date" placeholder="Select to Date"/>
                        </div>
                    </div>  
            
                <div id="divSearch" class="form-group col-md-12 align-center" style="padding-bottom:30px;">
                        
                            <button type="button" class="btn-prop" id="btnSubmit" onclick="viewreport()">View</button>
                        
                    </div>
            <div class="row">
                  <button class="btn btn-default" style="background-color: black" type="button" onclick="excelreport1()">EXCEL EXPORT</button>
                <div class="col-md-12" style="background-color: white !important; border-radius: 12px !important; box-shadow: inset -1px -1px 12px -1px rgba(0,0,0,1); padding: 20px">
                    <div class="table-responsive" style="overflow: auto; height: 450px; width: 100%;">
                        <table class="table table-hover table-bordered w3-table-all" id="table-report" style="text-align: center; position: relative;">
                        </table>
                    </div>
                </div>
            </div>
            
        </div>
        
    <asp:HiddenField ID="hdvVendorID" runat="server" />
    <asp:HiddenField ID="hdvUserID" runat="server" />
    <asp:HiddenField ID="hdvBranchID" runat="server" />
    <asp:HiddenField ID="hdvFirmID" runat="server" />
    <asp:HiddenField ID="hdvFormID" runat="server" />
    <asp:HiddenField ID="hdvItemID" runat="server" />
    <asp:HiddenField ID="hdvGateItemID" runat="server" />
    <asp:HiddenField ID="hdvAssetID" runat="server" />
    </form>
</asp:Content>
