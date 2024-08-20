<%@ Page Title="" Language="C#" MasterPageFile="~/Main.Master" AutoEventWireup="true" CodeBehind="AmlAuditVerification.aspx.cs" Inherits="AML_Projects.AmlAuditVerification" %>

<asp:Content ID="Content1" ContentPlaceHolderID="head" runat="server">
    <script src="App_Themes/Theme/assets/js/AmlAuditVerification.js"></script>
    <style>
        .form-control {
            /*width: 300px !important;*/
            background-color: white !important;
            color: black !important;
            border-radius: 3px;
            height: 30px;
        }
        /*td{
           // display:flex;
            align-content:center;
            justify-content:center;
        }*/
        .container_ {
            width: 100% !important;
            background-color: white !important;
            padding: 45px !important;
            border-radius: 19px !important;
        }

        .text-left {
            display: grid !important;
            align-items: center !important;
            top: 5px;
        }

        .vertical-center {
            display: grid !important;
            align-items: center !important;
            top: 5px;
        }

        .padding-12px {
            padding: 12px !important;
        }

        thead {
            font-weight: bolder !important;
            position: sticky !important;
            top: 0 !important;
            z-index: 5 !important;
        }

         input[readonly] {
    background-color: #f3f3f3 !important;
}

       
    </style>
</asp:Content>
<asp:Content ID="Content2" ContentPlaceHolderID="ContentPlaceHolder1" runat="server">
    <div class="container_">
        <form>
            <div class="row">

                <div class="ma-header col-md-6">
                    <h3 style="color: #091221"><i class="icon-reorder"></i>AML VERIFICATION</h3>
                   
                </div>

                   <div class="col-md-6" style="align-self:center;text-align:right">
                    <span><b id="DisplayName" runat="server"></b>&nbsp-&nbsp<b id="DisplayEmpCode" runat="server"></b></span>
                   
                </div>
              
            </div>
               <hr />
            <div class="row" style="margin-top: 10PX !important">

                <div class="col-md-6" id="DepartmentGroup">
                    <label>DEPARTMENT :</label>
                    <select class="form-control" id="ddl_department" onchange="fetch_vertical(this.value)">
                        <option value="-1">---select---</option>
                        <option value="1">GOLD LOAN</option>
                       <%-- <option value="2">NGL</option>
                        <option value="3">DMTS</option>
                        <option value="4">MONEY TRANSFER</option>
                        <option value="5">FOREX</option>
                        <option value="6">VEHICLE LOANS</option>--%>
                    </select>

                </div>


                <div class="col-md-6" id="VerticalGroup" style="display: none;">
                    <label>VERTICAL :</label>
                    <select class="form-control" id="ddl_vertival" onchange="fetch_alert()"></select>
                </div>

            </div>
            <div class="row" style="margin-top: 10px !important">
                <div class="col-md-6" id="alert_search">
                    <label>Alert ID :</label>
                    <select class="form-control" id="ddl_alert" onchange="getDataTableHeader()"></select>
                </div>

                  <div class="col-md-6">
                    <label>Date :</label>
                    <input type="text" id="date" class="form-control input-group-text" readonly/>
                </div>
            </div>
            <div class="row" style="margin-top: 10px !important">
                   <div class="col-md-12">
                    <label>Alert Type :</label>
                       <textarea class="form-control" id="alert_typ"  readonly></textarea>
                    <%--<input type="text" id="alert_typ" class="form-control input-group-text" readonly/>--%>
                </div>
            </div>
          <br />  <hr />
            <div class="row" style="margin-top: 10PX !important">

                <div class="col-md-4">
                    <label>Department Name :</label>
                    <input type="text" id="dept_name" class="form-control input-group-text" readonly/>
                </div>

                <div class="col-md-4">
                    <label>Branch ID :</label>
                    <input type="text" id="br_id" class="form-control input-group-text" readonly/>
                </div>

                   <div class="col-md-4">
                    <label>Branch Name :</label>
                    <input type="text" id="br_name" class="form-control input-group-text" readonly/>
                </div>

            </div>


            <div class="row" style="margin-top: 10PX !important">

                <div class="col-md-3">
                    <label>Area :</label>
                    <input type="text" id="area" class="form-control input-group-text" readonly/>
                </div>


                <div class="col-md-3">
                    <label>Region :</label>
                    <input type="text" id="region" class="form-control input-group-text" readonly/>
                </div>

                <div class="col-md-3">
                    <label>Zone  :</label>
                    <input type="text" id="zone" class="form-control input-group-text" readonly />
                </div>

                <div class="col-md-3">
                    <label>State  :</label>
                    <input type="text" id="state" class="form-control input-group-text" readonly/>
                </div>

            </div>
            <br />
            <hr />
            <div class="row" style="margin-top: 10PX !important">

                

                 <div class="col-md-6">
                    <label>Customer ID :</label>
                    <input type="text" id="cus_id" class="form-control input-group-text" readonly/>
                </div>

                  <div class="col-md-6">
                    <label>Customer Name :</label>
                    <input type="text" id="cus_name" class="form-control input-group-text" readonly/>
                </div>

            </div>
         
            <div class="row" style="margin-top: 10PX !important">

                <%--<div class="col-md-6">
                    <label>Inventory/Pledge number/Loan ID :</label>
                    <select class="form-control" id="ddl_invent"></select>
                </div>--%>
                <div class="col-md-6">
                    <label>Inventory/Pledge number/Loan ID :</label>
                    <input type="text" id="pledgeNo" class="form-control input-group-text" readonly/>
                </div>


                <div class="col-md-6">
                    <label>CKYCR No :</label>
                    <input type="text" id="ckycr" class="form-control input-group-text" readonly/>
                </div>

                

            </div>

            <div class="row" style="margin-top: 10PX !important">
                 <div class="col-md-6">
                    <label>No of loan available  :</label>
                    <input type="text" id="no_loan" class="form-control input-group-text" readonly/>
                </div>

                <div class="col-md-6">
                    <label>Loan outstanding  :</label>
                    <input type="text" id="outstand" class="form-control input-group-text" readonly/>
                </div>

            </div>
              <br />
            <hr />
          
          
        
            <div class="row" style="margin-top: 10PX !important">

                <div class="col-md-3">
                    <label>Father/Mother name  :</label>
                    <input type="text" id="gard_name" class="form-control input-group-text" oninput="AddUpperCase(this.value, this.id)" onchange="validate_name(this.value,this.id)" maxlength="50" readonly/>
                </div>


                <div class="col-md-3">
                    <label>House No/House Name  :</label>
                    <input type="text" id="house_no" class="form-control input-group-text" maxlength="100" onchange="validate_name(this.value,this.id)" oninput="AddUpperCase2(this.value, this.id)" readonly/>
                </div>

                  <div class="col-md-3">
                    <label>Landmark  :</label>
                    <input type="text" id="landmark" class="form-control input-group-text"  maxlength="200" onchange="validate_name(this.value,this.id)" oninput="AddUpperCase2(this.value, this.id)" readonly/>
                </div>

                  <div class="col-md-3">
                    <label>Place Name  :</label>
                    <input type="text" id="place" class="form-control input-group-text" maxlength="100" onchange="validate_name(this.value,this.id)" oninput="AddUpperCase2(this.value, this.id)" readonly/>
                </div>



            </div>
           
            <div class="row" style="margin-top: 10PX !important">

                <div class="col-md-3">
                    <label>Post Office  :</label>
                    <input type="text" id="po" class="form-control input-group-text" maxlength="100" onchange="validate_name(this.value,this.id)" oninput="AddUpperCase2(this.value, this.id)" readonly/>
                </div>


                <div class="col-md-3">
                    <label>Pin Number  :</label>
                    <input type="text" id="pin" class="form-control input-group-text" oninput="if(isNaN(this.value)){alert('Please enter numbers only'); this.value = '';} else {this.value = this.value.replace(/[^0-9]/g, '');}" maxlength="6" readonly/>
                </div>


                  <div class="col-md-3">
                    <label>District  :</label>
                    <input type="text" id="distirct" class="form-control input-group-text" maxlength="25" oninput="AddUpperCase(this.value, this.id)" onchange="validate_name(this.value,this.id)" readonly/>
                </div>

                  <div class="col-md-3">
                    <label>State  :</label>
                    <input type="text" id="state_a" class="form-control input-group-text"maxlength="25" oninput="AddUpperCase(this.value, this.id)" onchange="validate_name(this.value,this.id)" readonly/>
                </div>


            </div>
          
            <div class="row" style="margin-top: 10PX !important">

                <div class="col-md-3">
                    <label>Occupation  :</label>
                    <input type="text" id="occupation" class="form-control input-group-text"  onchange="validate_name(this.value,this.id)" oninput="AddUpperCase2(this.value, this.id)" onkeydown="return alphaOnly(event);"/>
                </div>


                <div class="col-md-3">
                    <label>Annual Income  :</label>
                    <input type="text" id="ann_income" class="form-control input-group-text" oninput="if(isNaN(this.value)){alert('Please enter numbers only'); this.value = '';} else {this.value = this.value.replace(/[^0-9]/g, '');}" />
                </div>

                   <div class="col-md-3">
                    <label>Purpose of the loan  :</label>
                    <input type="text" id="purpose" class="form-control input-group-text" onchange="validate_name(this.value,this.id)" oninput="AddUpperCase2(this.value, this.id)" onkeydown="return alphaOnly(event);"/>
                </div>

                  <div class="col-md-3">
                    <label>Distance (Branch-->House)(in Km):</label>
                    <input type="text" id="distance" class="form-control input-group-text" title="Distance from Branch to Borrower House" oninput="if(isNaN(this.value) || this.value.includes(',') || (this.value.startsWith('.') && this.value.length > 1)){alert('Please enter valid numeric values'); this.value = '';}" />
                </div>


            </div>
          
            <div class="row" style="margin-top: 10PX !important">

               <div class="col-md-4">
                    <label>Source of Income  :</label>
                    <input type="text" id="income_src" class="form-control input-group-text" onkeydown="return alphaOnly(event);" oninput="AddUpperCase2(this.value, this.id)"/>
                </div>

                <div class="col-md-4">
                    <label>Nearest MAFIL branch ID of the Borrower  :</label>
                    <input type="text" id="near_br_id" class="form-control input-group-text" oninput="if(isNaN(this.value) || this.value.includes('.')){alert('Please enter valid numeric values'); this.value = '';}" maxlength="4" onchange="loadbranchname(this.value)"/>
                </div>


                <div class="col-md-4">
                    <label>Nearest MAFIL branch name of the Borrower  :</label>
                    <input type="text" id="near_br_name" class="form-control input-group-text" onchange="validate_name(this.value,this.id)" oninput="AddUpperCase2(this.value, this.id)" readonly/>
                </div>

            </div>
              <div class="row" style="margin-top: 10PX !important">

                <div class="col-md-12">
                    <label>Current Address  :</label>
                    <textarea class="form-control" id="curr_address" onchange="validate_name(this.value,this.id)" oninput="AddUpperCase2(this.value, this.id)"></textarea>
                </div>

                <div class="col-md-12">
                    <p> <input type="checkbox" id="myCheckbox" name="myCheckbox" onclick="CurrAddrs(this)">&nbsp 
                        <label for="myCheckbox">current and permanent address is same </label>
                    </p>
                </div>

            </div>

                <div class="row" style="margin-top: 10PX !important">

                <div class="col-md-12">
                    <label>Permanent Address  :</label>
                    <textarea class="form-control" id="per_address" onchange="validate_name(this.value,this.id)"></textarea>
                </div>
            </div>

            <hr />
          
            <div class="row" style="margin-top: 10PX !important">

                <div class="col-md-3">
                    <input type="button" id="cust_photo" value="CUSTOMER PHOTO" onclick="VIEW(6)" class="btn btn-dark" style="width: 200px" />
                </div>

                <div class="col-md-3">
                    <input type="button" id="kyc_photo" value="KYC PHOTO" onclick="VIEW(5)" class="btn btn-dark" style="width: 200px" />
                </div>
                <div class="col-md-3">
                    <input type="button" id="pan_photo" value="PAN PHOTO" onclick="VIEW(7)" class="btn btn-dark" style="width: 200px" />
                </div>

                <div class="col-md-3">
                    <input type="button" id="Bank_photo" value="BANK DETAILS" onclick="VIEW(8)" class="btn btn-dark" style="width: 200px" />
                </div>

            </div>

            <div class="row" style="margin-top: 10PX !important">
                 <div class="col-md-6">
                <a href="#" onclick="link(1)">Go to CUSTOMER DETAILS</a>
                     </div>
                <div class="col-md-6" style="align-content:center">
                <a href="#" onclick="link(2)">Go to MS143</a>
                     </div>
                </div>
         <hr />
            <br />
            <div class="row">
                <div class="col-md-12" style="background-color: white !important; border-radius: 12px !important; box-shadow: inset -1px -1px 12px -1px rgba(0,0,0,1); padding: 20px">
                    <div class="table-responsive" style="overflow: auto; height: 450px; width: 100%;">
                        <table class="table table-hover table-bordered w3-table-all" id="table-report" style="text-align: center; position: relative;">
                        </table>
                    </div>
                </div>
            </div>
            <br />
            <div class="row" style="margin-top: 10PX !important ;display:none" id="commentdiv" >

                <div class="col-md-12">
                    <label>Comments on alerts by previous verification officer  :</label>
                    <textarea class="form-control" id="comments_by_l1" readonly ></textarea>
                </div>
            </div>
            <div class="row" style="margin-top: 10PX !important ;display:none" id="commentdiv1">

                <div class="col-md-12">
                    <label>Adverse comments by previous verification officer :</label>
                    <textarea class="form-control" id="ad_comments_l1" readonly ></textarea>
                </div>
            </div>
             <div class="row">
                <label style="padding-top:7px;">Whether any discrepancy found in transactions</label> &nbsp &nbsp
                 <input  type="radio" id="CheckIDYes" value="1" name="Check" onchange="radiocheck(this.value)"/>  <label for="CheckIDYes" style="padding-top:7px;">Yes</label>
                      &nbsp &nbsp
                    <input  type="radio" id="CheckIDNO" value="2" name="Check" onchange="radiocheck(this.value)"/>  <label for="CheckIDNO" style="padding-top:7px;">No</label>
            </div>
            <div class="row" style="margin-top: 10PX !important">

                <div class="col-md-12">
                    <label>Comments on alerts by verification officer  :</label>
                    <textarea class="form-control" id="comments_by" onchange="validate_name(this.value,this.id)" oninput="AddUpperCase2(this.value, this.id)"></textarea>
                </div>
            </div>
            <div class="row" style="margin-top: 10PX !important">

                <div class="col-md-12">
                    <label>Adverse comments if any (about customer) :</label>
                    <textarea class="form-control" id="ad_comments" onchange="validate_name(this.value,this.id)" oninput="AddUpperCase2(this.value, this.id)"></textarea>
                </div>
            </div>
           
            <div class="row" id="declaration" style="display:none">
                  <p style="color: red">*Declaration:</p>
                <table style="width: 100%;">
                    <tr>
                        <td style="display:initial">
                            <input type="checkbox" id="declar" />
                            &nbsp
                        </td>

                        <td>
                            <label style="text-align:justify !important" for="declar">
                                I Mr./Mrs&nbsp<span id="UserNameLbl"></span>, &nbsp the AML & KYC Auditor/operational head/BH/ABH of branch &nbsp
                        <span id="Branchlbl"></span>&nbsp. I hereby certify that I have conducted a detailed AML audit, based on the above alerts and have&nbsp<span id="lastconfirm"></span></label></td>


                    </tr>
                </table>

             
            </div>
            <div class="row" style="justify-content: right;">
                <input type="button" id="Confirmation" value="Confirm" onclick="FinalConfirmation()" class="btn btn-success" style="width: 200px" />
                                             <button type="button" class="btn btn-secondary" onclick="RejectOptionSelected()" style="display:none" id="btn_reject">REASSIGN</button>

            </div>
            <!-- Button trigger modal -->
            <%--<button type="button" class="btn btn-primary" data-toggle="modal" data-target="#exampleModalCenter">
  Launch demo modal
</button>--%>

            <!-- Modal -->
            <div class="modal fade" id="exampleModalCenter" tabindex="-1" role="dialog" aria-labelledby="exampleModalCenterTitle" aria-hidden="true" data-backdrop="static" data-keyboard="false">
                <div class="modal-dialog modal-dialog-centered" role="document">
                    <div class="modal-content">
                        <div class="modal-header">
                            <h5 class="modal-title" id="exampleModalLongTitle">Select Branch</h5>
                            <%--<button type="button" class="close" data-dismiss="modal" aria-label="Close">
                             <span aria-hidden="true">&times;</span>
                         </button>--%>
                        </div>
                        <div class="modal-body">
                            <div class="col-md-6">
                                <select class="select select2" id="branchId" style="width: 100% !important">
                                </select>
                            </div>
                        </div>
                        <div class="modal-footer">
                            <button type="button" class="btn btn-secondary" data-dismiss="modal" onclick="selectbranch()">CONFIRM</button>

                        </div>
                    </div>
                </div>
            </div>



            <%-- Questions --%>
            <!-- Modal -->
            <div class="modal fade" id="QuetionPopUp" tabindex="-1" role="dialog" aria-labelledby="exampleModalCenterTitle" aria-hidden="true" data-backdrop="static" data-keyboard="false">
                <div class="modal-dialog modal-dialog-centered" role="document">
                    <div class="modal-content">
                        <div class="modal-header">
                            <h5 class="modal-title" id="QuestionsTitle">Select Your Answer</h5>
                            <button type="button" class="close" data-dismiss="modal" aria-label="Close">
                               <%-- <span aria-hidden="true" onclick="QuesClose()">&times;</span>--%>
                            </button>
                        </div>
                        <div class="modal-body">
                            <div class="col-md-12">
                                <table class="table table-hover" id="table-Question-Choose" style="text-align: center; position: relative;">
                                </table>
                            </div>
                        </div>
                        <div class="modal-footer">
                            <button type="button" class="btn btn-secondary" onclick="ConfirmOptionSelected()">CONFIRM</button>

                        </div>
                    </div>
                </div>
            </div>


        </form>
    </div>
    <input id="hdUserId" type="hidden" runat="server" />
    <input id="hdUserName" type="hidden" runat="server" />
     <input id="hdBranchId" type="hidden" runat="server" />
</asp:Content>
