<%@ Page Title="" Language="C#" MasterPageFile="~/Main.Master" AutoEventWireup="true" CodeBehind="Index.aspx.cs" Inherits="AML_Projects.Index" %>

<asp:Content ID="Content1" ContentPlaceHolderID="head" runat="server">

    <script src="js/Dashboard.js"></script>

    <style>
        #example {
            font-family: Arial, Helvetica, sans-serif;
            border-collapse: collapse;
            width: 100%;
        }

            #example td, #MyTable th, #PendingDumpDash th {
                border: 1px solid #ddd;
                padding: 8px;
            }

            #example th {
                padding-top: 12px;
                padding-bottom: 12px;
                text-align: left;
                background-color: #282626;
                color: white;
            }

            #example tr:nth-child(even) {
                background-color: #f2f2f2;
            }

            #example tr:hover {
                background-color: #ddd;
            }
        /* The alert message box */
        .alert {
            padding: 20px;
            background-color: #fff; /* Red */
            color: black;
            margin-bottom: 15px;
        }

        /* The close button */
        .closebtn {
            margin-left: 15px;
            color: white;
            font-weight: bold;
            float: right;
            font-size: 22px;
            line-height: 20px;
            cursor: pointer;
            transition: 0.3s;
        }

            /* When moving the mouse over the close button */
            .closebtn:hover {
                color: black;
            }
    </style>

    <script>

</script>

</asp:Content>
<asp:Content ID="Content2" ContentPlaceHolderID="ContentPlaceHolder1" runat="server">

    <form id="Form1" class="form-horizontal row-border" action="#" runat="server">
        <div class="container">
            <div class="col-md-11 well align-center">
                <div style="margin-left: auto; margin-right: auto; text-align: center">
                    <asp:Label ID="Label2" runat="server" BackColor="Transparent" Font-Bold="True" Font-Size="X-Large"
                        ForeColor="#414755" Height="28px" Text="ANTI MONEY LAUNDERING" Width="100%" style="font-size: xx-large;"></asp:Label>
                </div>
            </div>
            <div class="row">
                <div class="col-md-11 well align-center">
                    <div class="col-md-12 align-center">
                       <%-- <div class="row">
                            <div style="margin-left: auto; margin-right: auto; text-align: center">
                                <asp:Label ID="lblTitle" runat="server" BackColor="Transparent" Font-Bold="True" Font-Size="Large"
                                    ForeColor="Blue" Height="21px" Width="100%">AML CUSTOMER SERVICES</asp:Label><br />
                            </div>
                        </div>--%>
                       <%-- <div class="row" style="padding-left: 10px;">
                            <asp:Button ID="btn_Excel" runat="server" BackColor="LightSteelBlue" BorderStyle="Ridge"
                                EnableTheming="True" Font-Bold="True" Font-Names="Book Antiqua" Font-Size="10pt"
                                ForeColor="Black" Height="30%" Style="border-right: thin ridge; border-top: thin ridge; border-left: thin ridge; cursor: hand; border-bottom: thin ridge"
                                Text="EXPORT TO EXCEL"
                                Width="168px" OnClick="btn_Excel_Click" />
                        </div>--%>
                <%--        <asp:Panel ID="Panel1" runat="server" Height="16%" Style="z-index: 100; left: 11px; top: 7px" Width="100%">
                            <div id="demo" class="scroll">
                                <div id="MyTable" runat="server" style="overflow-x: auto; overflow-y: scroll; margin-left: auto; margin-right: auto; text-align: center; height: 300px;">
                                </div>
                            </div>
                        </asp:Panel>--%>
                    </div>

                </div>
                <br />
            </div>
    <%--        <div class="row">
                <div class="col-md-11 well align-center">
                    <div class="col-md-12 align-center">


                        <div class="row">
                            <div style="margin-left: auto; margin-right: auto; text-align: center">
                                <asp:Label ID="Label3" runat="server" BackColor="Transparent" Font-Bold="True" Font-Size="Large"
                                    ForeColor="Blue" Height="21px" Width="100%">SR SUMMARY</asp:Label><br />
                            </div>
                        </div>
                        <div class="row" style="padding-left: 10px;">
                            <asp:Button ID="btn_DumpDash" runat="server" BackColor="LightSteelBlue" BorderStyle="Ridge"
                                EnableTheming="True" Font-Bold="True" Font-Names="Book Antiqua" Font-Size="10pt"
                                ForeColor="Black" Height="30%" Style="border-right: thin ridge; border-top: thin ridge; border-left: thin ridge; cursor: hand; border-bottom: thin ridge"
                                Text="EXPORT TO EXCEL"
                                Width="168px" OnClick="btn_DumpDash_Click" />
                        </div>
                        <asp:Panel ID="Panel2" runat="server" Height="16%" Style="z-index: 100; left: 11px; top: 7px" Width="100%">
                            <div id="demo1" class="scroll">
                                <div id="PendingDumpDash" runat="server" style="overflow-x: auto; overflow-y: scroll; margin-left: auto; margin-right: auto; text-align: center; height: 300px;">
                                </div>
                            </div>
                        </asp:Panel>
                    </div>

                </div>

            </div>--%>

        </div>
        <%--------------------------------------------------%>
 


<%-------------------------------------------------------------incidentpopup------%>
<div class="modal fade" id="incidentlog" tabindex="-1" role="dialog" aria-labelledby="wlogmodel" aria-hidden="false">
<div class="modal-dialog modal-sm" role="document">
<div class="modal-content" style="box-shadow: 0 19px 38px rgba(0,0,0,0.30), 0 15px 12px rgba(0,0,0,0.22);text-align:center;">
<div class="modal-header" style="text-align:center;">
<h5 class="modal-title" id="wlogaddModalLabel1">Search </h5>
<button type="button" class="close" data-dismiss="modal" aria-label="Close">
<span aria-hidden="true">&times;</span>
</button>
</div>
<div class="modal-body">
<form>
<div class="col-md-6">
<div class="form-group" style="width:200%;">
<label for="agreemntfrom">Search Current bin:</label>
<input type="text" class=" form-control" maxlength="100" id="txt_reqname2" style="width:100%" name="reqname" onclick="" onkeyup="this.value = this.value.toUpperCase();shwexstreqtype2();"/>
</div>
</div>
<div class="row">
<div class="col-md-12">
<div class="form-group">
<div class="table-responsive" style="max-height:200px">
<table class="table table-hover table-success table-bordered table-striped mb-0" id="servicereq2" >
<thead class="bg-success text-white" id="tablevalue">
<tr onclick="displaytablevalue()">
</tr>
</thead>
<tbody class="border border-dark"></tbody>
</table>
</div>
</div>
</div>
</div>
</form>
</div>
</div>
</div>
</div>



     
    </form>


    <input id="hdUserId" type="hidden" runat="server" />
    <input id="hdBrid" type="hidden" runat="server" />
    <input id="hdFirmId" type="hidden" runat="server" />


</asp:Content>
