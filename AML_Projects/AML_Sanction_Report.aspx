<%@ Page Title="" Language="C#" MasterPageFile="~/Main.Master" AutoEventWireup="true" CodeBehind="AML_Sanction_Report.aspx.cs" Inherits="AML_Projects.AML_Sanction_Report" %>

<asp:Content ID="Content1" ContentPlaceHolderID="head" runat="server">
    <script src="App_Themes/Theme/assets/js/AML_Sanction_Report.js"></script>
</asp:Content>
<asp:Content ID="Content2" ContentPlaceHolderID="ContentPlaceHolder1" runat="server">
    <style>
        .table-responsive {
            width: 100%;
            height: 100px;
        }

        .MainCantent {
            width: 100% !important;
            background-color: white;
            padding: 12px !important;
            height: 100% !important;
            max-height: 1000px !important;
        }

        thead {
            position: sticky;
            top: 0;
            z-index: 99999 !important;
        }

        .form-center-group {
            width: 100%;
            display: flex;
            align-content: center;
            justify-content: center !important;
        }

            .form-center-group .col-md-12 {
                padding: 3px !important;
            }

        .form-group-content {
            width: 50% !important;
            margin: 20px;
        }
    </style>
    <div class="MainCantent">
        <form id="Form1" class="form-horizontal row-border" action="#" runat="server">



            <ul class="nav nav-tabs">
                <li class="nav-item">
                    <a class="nav-link active" href="#popup_add" aria-controls="popup_add" role="tab" data-toggle="tab">SANCTION LIST EXCEL UPLOAD REPORT</a>
                </li>
                <li class="nav-item">
                    <a class="nav-link" href="#popup_delete" aria-controls="popup_delete" role="tab" data-toggle="tab">SANCTION LIST REPORT</a>
                </li>
                <li class="nav-item">
                    <a class="nav-link" href="#REPORT3" aria-controls="REPORT3" role="tab" data-toggle="tab">BLACK LIST REPORT</a>
                </li>
                <li class="nav-item">
                    <a class="nav-link" href="#REPORT4" aria-controls="REPORT4" role="tab" data-toggle="tab">QUARTERLY REPORT</a>
                </li>


            </ul>


            <div class="tab-content" style="padding-top: 25px; max-height: 1000px !important">
                <div role="tabpanel" class="tab-pane policy active" id="popup_add">
                    <div class="row">
                        <div class="ma-header col-md-12">
                            <h3 style="color: #091221; text-align: center"><i class="icon-reorder"></i><b>SANCTION LIST EXCEL UPLOAD REPORT</b></h3>
                            <%--  <div class="col-md-14 align-left" style="margin-left: 1060px">
                                <button class="btn btn-default" style="background-color: black" type="button" onclick="excelreport()">EXCEL EXPORT</button>
                            </div>--%>
                        </div>
                    </div>

                    <div class="form-center-group">
                        <div class="form-group-content">
                            <div class="row">

                                <div class="col-md-6">
                                    <label style="align-self: center"><b>From Date  : &nbsp </b></label>
                                    <input type="text" class="form-control" onkeypress="return false" id="frmDate" name="frmDate" title="From Date" placeholder="Select From Date" />
                                </div>
                            </div>

                            <div class="row">
                                <div class="col-md-6">
                                    <label style="align-self: center;"><b>To Date : &nbsp </b></label>
                                    <input type="text" class="form-control" onkeypress="return false" id="toDate" name="toDate" title="to Date" placeholder="Select to Date" />
                                </div>

                            </div>
                            <br />
                            <br />
                            <div class="row" id="divSearch">
                                <div class="col-md-12 text-center">
                                    <button type="button" class="btn btn-danger" id="btnSubmit" onclick="viewreport()" style="width: 15%">View</button>
                                    <button class="btn btn-default" style="background-color: black" type="button" onclick="excelreport()">EXCEL EXPORT</button>
                                    <%--                                   <button class="btn btn-danger" type="button" onclick="excelreport()">EXCEL EXPORT</button>--%>
                                </div>

                            </div>
                        </div>
                    </div>
                    <br />

                    <div id="demo" class="scroll">
                        <div id="MyTable" runat="server" style="margin-left: auto; margin-right: auto; text-align: center">
                        </div>
                    </div>
                    <br />
                    <br />
                    <br />
                    <br />


                    <div class="row">

                        <div class="table-responsive" id="TblLoan" style="height: 400px !important; max-height: 450px !important; width: 100% !important; overflow: auto">
                            <table class="table table-hover table-bordered" id="tblLoanDtl">
                            </table>
                        </div>

                    </div>
                </div>
                <div role="tabpanel" class="tab-pane policy" id="popup_delete">
                    <div class="row">
                        <div class="ma-header col-md-12">
                            <h3 style="color: #091221; text-align: center"><i class="icon-reorder"></i><b>SANCTION REPORT</b></h3>
                            <%-- <div class="col-md-14 align-left" style="margin-left: 1060px">
                                <button class="btn btn-default" style="background-color: black" type="button" onclick="excelreport1()">EXCEL EXPORT</button>
                            </div>--%>
                        </div>
                    </div>
                    <div class="form-center-group">
                        <div class="form-group-content">

                            <div class="row">

                                <div class="col-md-6">
                                    <label style="align-self: center"><b>From Date  : &nbsp </b></label>
                                    <input type="text" class="form-control" onkeypress="return false" id="frmDate1" name="frmDate1" title="From Date" placeholder="Select From Date" />
                                </div>
                            </div>

                            <div class="row">
                                <div class="col-md-6">
                                    <label style="align-self: center"><b>To Date : &nbsp </b></label>
                                    <input type="text" class="form-control" onkeypress="return false" id="toDate1" name="toDate1" title="to Date" placeholder="Select to Date" />
                                </div>

                            </div>
                            <br />
                            <br />
                            <div class="row" id="divSearch1">
                                <div class="col-md-12 text-center">
                                    <button type="button" class="btn btn-danger" id="btnSubmit1" onclick="viewreport1()" style="width: 15%">View</button>
                                    <button class="btn btn-default" style="background-color: black" type="button" onclick="excelreport1()">EXCEL EXPORT</button>

                                </div>

                            </div>
                        </div>
                    </div>
                    <br />
                    <br />

                    <div id="demo1" class="scroll">
                        <div id="Div1" runat="server" style="margin-left: auto; margin-right: auto; text-align: center">
                        </div>
                    </div>
                    <br />
                    <br />
                    <br />
                    <br />
                    <div class="row">

                        <div class="table-responsive" id="TblLoan1" style="height: 400px !important; max-height: 450px !important; width: 100% !important; overflow: auto">
                            <table class="table table-hover table-bordered" id="tblLoanDt1l">
                            </table>
                        </div>

                    </div>
                </div>

                <div role="tabpanel" class="tab-pane policy" id="REPORT3">
                    <div class="row">
                        <div class="ma-header col-md-12">
                            <h3 style="color: #091221; text-align: center"><i class="icon-reorder"></i><b>BLACK LIST REPORT</b></h3>
                            <%-- <div class="col-md-14 align-left" style="margin-left: 1060px">
                                <button class="btn btn-default" style="background-color: black" type="button" onclick="excelreport1()">EXCEL EXPORT</button>
                            </div>--%>
                        </div>
                    </div>
                    <div class="form-center-group">
                        <div class="form-group-content">

                            <div class="row">

                                <div class="col-md-6">
                                    <label style="align-self: center"><b>From Date  : &nbsp </b></label>
                                    <input type="text" class="form-control" onkeypress="return false" id="frmDate2" name="frmDate2" title="From Date" placeholder="Select From Date" />
                                </div>
                            </div>

                            <div class="row">
                                <div class="col-md-6">
                                    <label style="align-self: center"><b>To Date : &nbsp </b></label>
                                    <input type="text" class="form-control" onkeypress="return false" id="toDate2" name="toDate2" title="to Date" placeholder="Select to Date" />
                                </div>

                            </div>
                            <br />
                            <br />
                            <div class="row" id="divSearch2">
                                <div class="col-md-12 text-center">
                                    <button type="button" class="btn btn-danger" id="btnSubmit2" onclick="viewreport2()" style="width: 15%">View</button>
                                    <button class="btn btn-default" style="background-color: black" type="button" onclick="excelreport2()">EXCEL EXPORT</button>

                                </div>

                            </div>
                        </div>
                    </div>
                    <br />
                    <br />

                    <div id="demo2" class="scroll">
                        <div id="Div2" runat="server" style="margin-left: auto; margin-right: auto; text-align: center">
                        </div>
                    </div>
                    <br />
                    <br />
                    <br />
                    <br />
                    <div class="row">

                        <div class="table-responsive" id="TblLoan2" style="height: 400px !important; max-height: 450px !important; width: 100% !important; overflow: auto">
                            <table class="table table-hover table-bordered" id="tblLoanDt12">
                            </table>
                        </div>

                    </div>
                </div>


                <div role="tabpanel" class="tab-pane policy" id="REPORT4">
                    <div class="row">
                        <div class="ma-header col-md-12">
                            <h3 style="color: #091221; text-align: center"><i class="icon-reorder"></i><b>SCREENING LIST(QUARTERLY REPORT)</b></h3>
                            <%-- <div class="col-md-14 align-left" style="margin-left: 1060px">
                                <button class="btn btn-default" style="background-color: black" type="button" onclick="excelreport1()">EXCEL EXPORT</button>
                            </div>--%>
                        </div>
                    </div>
                    <div class="form-center-group">
                        <div class="form-group-content">

                            <div style="display: flex; justify-content: center">
                                <label class="col-md-2 cntr-auto">SELECT QUARTER</label>
                                <div class="col-md-4 cntr-auto">
                                    <select class="form-control" id="dddate" onchange="selmnth()"></select>
 <%--                                   <button class="btn btn-default" style="background-color: black" type="button" onclick="excelreport3()">EXCEL EXPORT</button>
                                --%></div>
                            </div>


                            <%--   <div class="row" id="divSearch3">
                                <div class="col-md-12 text-center">
                                    <button type="button" class="btn btn-danger" id="btnSubmit3" onclick="viewreport3()" style="width: 15%">View</button>
                                    <button class="btn btn-default" style="background-color: black" type="button" onclick="excelreport2()">EXCEL EXPORT</button>

                                </div>

                            </div>--%>
                        </div>
                    </div>
                    <br />
                    <br />

                    <div id="demo3" class="scroll">
                        <div id="Div3" runat="server" style="margin-left: auto; margin-right: auto; text-align: center">
                        </div>
                    </div>
                    <br />
                    <br />
                    <br />
                    <br />
                    <%--  <div class="row">

                        <div class="table-responsive" id="TblLoan3" style="height: 400px !important; max-height: 450px !important; width: 100% !important; overflow: auto">
                            <table class="table table-hover table-bordered" id="tblLoanDt13">
                            </table>
                        </div>

                    </div>--%>
                    <div class="row">
                        <button class="btn btn-default" style="background-color: black" type="button" onclick="excelreport3()">EXCEL EXPORT</button>
                        <div class="col-md-12" style="background-color: white !important; border-radius: 12px !important; box-shadow: inset -1px -1px 12px -1px rgba(0,0,0,1); padding: 20px">
                            <div class="table-responsive" id="TblLoan3" style="height: 400px !important; max-height: 450px !important; width: 100% !important; overflow: auto">
                                <table class="table table-hover table-bordered" id="tblLoanDt13">
                                </table>
                            </div>
                        </div>
                    </div>
                </div>

            </div>
            <asp:HiddenField ID="hdvUserID" runat="server" />
            <asp:HiddenField ID="hdBranchId" runat="server" />
            <asp:HiddenField ID="hdvVendorID" runat="server" />
            <asp:HiddenField ID="hdvBranchID" runat="server" />
    </div>
    </form>
    </div>
</asp:Content>
