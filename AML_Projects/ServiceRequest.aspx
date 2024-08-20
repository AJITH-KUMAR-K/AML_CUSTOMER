<%@ Page Title="" Language="C#"  AutoEventWireup="true" MasterPageFile="~/Main.Master"  CodeBehind="ServiceRequest.aspx.cs" Inherits="AML_Projects.ServiceRequest" %>
<asp:Content ID="Content1" ContentPlaceHolderID="head" runat="server">   
 
    <script src="js/servicerequestjs.js?<%=DateTime.Now.Ticks.ToString()%>"></script>
    <link href="css/ServiceRequest.css" rel="stylesheet" />
</asp:Content>
<asp:Content ID="Content2" ContentPlaceHolderID="ContentPlaceHolder1" runat="server">
    <div class="page-breadcrumb">
<div class="row">
<div class="col-8 align-self-center">
<h4 class="page-title" style="font-size:2vw;">SERVICE REQUEST CREATION</h4>                        
</div>
</div>
</div>
<div class="row">
<div class="col-12">
<div class="card card-5 rightmarg"> 
<form class="form-horizontal">
           
<div class="card-body">  
    <div class="card">
        <div class="card-header">
                                    <h6 class="page-title" style="font-size:1.3vw;">TICKET SEARCH</h6>                        


        </div>
        
    <div class="card-body">
<%--     <div class="row">
                                            <div class="col-md-3">
                                                <div >
                                                 <h4 class="page-title" style="font-size:1.3vw;">TICKET SEARCH</h4>                        
                                                </div>
                                            </div>
                                          
                                   </div>--%>
   <%--  <div class="row">  
                         <input type="checkbox" id="chk_tickno" name="ticketno" />  
                           <label for="chk_tickno"> &nbsp By Ticket No</label>
         </div>
                           <div class="row">
                           <input type="checkbox" id="chk_rpt_frm" name="datecheck"/> 
                            <label for="chk_rpt_frm">&nbsp By Date</label>
                               </div>
    <div class="row">
        <input type="checkbox" id="chk_sts" name="statuscheck" title="AggrementToDate"/>
                           <label for="fundcat">&nbsp By Status</label>

    </div>--%>
 
                 <div class="row">
                                            <div class="col-md-3" id="tickno_div">
                                                <div class="form-group">
                                                    <label for="fundcat">SR : </label>
<input type="text" class="form-control"  maxlength="100" id="txt_SR" style="width:100%" name="SR" onclick="" placeholder="Ticket NO" onkeyup="this.value = this.value.toUpperCase();" />                           
                                                    
                                                </div>
                                            </div>
                                            <div class="col-md-3 date_bx">
                                                <div class="form-group">
                                                    <label for="fundsubcat">Reported From : </label>
                        <input type="text" class="form-control " id="txt_AgrmntDt" name="AggrementDate" autocomplete="off" placeholder="Reported From" title="ReportedFrom" onkeypress="return false"/>     

                                                </div>
                                            </div>
                      <div class="col-md-3 date_bx">
                                                <div class="form-group">
                                                    <label for="fundcat">Reported To: </label>
                           <input type="text" class="form-control " id="txt_DtAgrmntTo" name="DateAgrmnTo" autocomplete="off" placeholder="Reported To" title="ReportedTo" onkeypress="return false"/>     
                                                    
                                                </div>
                                            </div>
                                            <div class="col-md-3" id="sts_div">
                                                <div class="form-group">
                                                    <label for="fundsubcat">Status : </label>
                                                    <select  class="custom-select form-control" id="ddlStatus"  style="width:100%"
                                                        name="FinancialInstitution"  > </select> 

                                                </div>
                    </div>

                                   </div>
    <div class="row"  id="search_div">

                             <div class="col-md-6">
                                                <input id="btnSearch" type="button"  value="Search" class="btn-input" onclick="return getFITableDtls();" data-toggle="modal" data-backdrop="false"/>
                         </div>

    </div>
    
    <br />
                 <div class="row">
                     <table class="table table-sm text-md-left table-hover table-responsive text-left" id="tableShowIN" > 
                          <thead>
                            <tr >                                 
                            </tr> 
                        </thead> 
                        <tbody></tbody>
                    </table>     
                </div>
        </div>
        
    </div>
    <br/>
    <div class="card">
            <div class="card-header">

                                    <h6 class="page-title" style="font-size:1.3vw;">NEW SERVICE REQUEST</h6>                        


            </div>
    <div class="card-body">


                 <div class="row">
                     <div class="col-md-3">
                       <div class="form-group">
                         <label for="fundcat">Reported By  :</label>
                         <div class="autocomplete" style="width:100%;">
                                      <input type="text" class=" form-control" maxlength="100" id="txt_ReportedBy" style="width:100%" name="ReportedBy" onclick="" disabled="disabled" />                           

                        </div>  
                           
                        </div>
                   </div>


                      <div class="col-md-3">
                        <div class="form-group">
                           <label for="agreemntfrom">Affected By:</label>
                            <br />

                            <div class="custom-control custom-radio">
                                    <input type="radio" id="radGYes" name="radGuarnt" class="custom-control-input" onclick="showTypes()">
                                    <label class="custom-control-label" for="radGYes">Person</label>
                            </div>
                            <div class="custom-control custom-radio">
                                    <input type="radio" id="radGNo" name="radGuarnt" class="custom-control-input" onclick="showTypes()">
                                    <label class="custom-control-label" for="radGNo">Branch</label>
                            </div>
                        </div>
                       </div>
                      <div class="col-md-2">
                       <div class="form-group">
                      <label for="fundsubcat">EmpCode/BranchID : </label>
          <input type="text" class=" form-control" maxlength="100" id="txt_Empcode" style="width:100%" name="Empcode" onkeypress="return isNumber(event, this.value, 'Y')" />                           
               
                        
                      </div>
                    </div>
                      <div class="col-md-2">
                       <br />
                     <input id="btnempcode" type="button" value="Search" class="btn btn-info btn-rounded" onclick="return GetEmpdetails();" data-toggle="modal" data-backdrop="false"/>
                          
               
                        
                      
                    </div>
                     <div class="col-md-3" id="emp_nme_div">
                       <div class="form-group emp_hde">
                         <label for="fundcat">Employee Name  : </label>
                         <input type="text" class=" form-control" maxlength="100" id="txt_empname" style="width:100%" name="ROI" onclick="" disabled="disabled" />                           
                        </div>
                   </div>
                      <div class="col-md-3" id="br_nme">
                       <div class="form-group">
                         <label for="fundcat">Branch Name  : </label>
                         <input type="text" class=" form-control" maxlength="100" id="txt_BrName" style="width:100%" name="ROI" onclick="" disabled="disabled" />                           
                        </div>
                   </div>
                      <div class="col-md-3" id="br_dt_div">
                       <div class="form-group">
                      <label for="fundsubcat">Branch/Department : </label>
                        
<input type="text" class=" form-control" maxlength="100" id="txt_Branch" style="width:100%" name="Attachment" onclick="" disabled="disabled" />                           
                      </div>
                    </div>


                     <div class="col-md-3">
                        <div class="form-group">
                           <label for="agreemntfrom">Phone Number  : <span class="text-danger"></span></label>
<input type="text" class=" form-control txt_ph" maxlength="100" id="txt_Phonenumber"  style="width:100%" name="Phone" onclick="" disabled="disabled" />                           
                                                </div>
                                            </div>
                     
<div class="col-md-3" id="dephide">
    <div class="form-group">
                         <label for="fundcat">Department Name  : </label>
                         <input type="text" class=" form-control" maxlength="100" id="txt_DpName" style="width:100%" name="ROI" onclick="" disabled="disabled" />                           
                        </div>
                                            </div>
                </div>
        <div class="row">
            <div class="col-md-3">
                <div class="form-group">
                    <label for="agreemntto">Alternate Phone Number : <span class="text-danger"></span></label>
                    <input type="text" class="form-control txt_ph" style="width: 100%" id="txt_phone" maxlength="11" name="Telephone"
                        onkeypress="return isNumber(event, this.value, 'Y')" oninput="this.value = this.value.replace(/[^0-9]/g, '').replace(/(\..*)\./g, '$1');" />
                </div>
            </div>
            <div class="col-md-3">
                <div class="form-group">
                    <label for="agreemntto">Email : </label>
                    <input type="text" id="txt_Email" style="width: 100%" maxlength="45" class="form-control text-lowercase" name="EmailID" onblur="CheckEmailId(this.value,this.id)" oninput="this.value = this.value.replace(/[^a-zA-Z0-9@._-]/g, '');" />

                </div>
            </div>
            <div class="col-md-3">
                <div class="form-group">
                    <label for="agreemntfrom">Location  : <span class="text-danger"></span></label>
                    <input type="text" class="form-control" maxlength="100" id="txt_location" style="width: 100%" name="Phone" onclick="" disabled="disabled" />
                </div>
            </div>
             <div class="col-md-3 d-none" id="div_BchOutstanding">
                <div class="form-group">
                    <label for="agreemn">Branch Outstanding  : <span class="text-danger"></span></label>
                    <input type="text" class=" form-control txt_outstdng" maxlength="100" id="BchOutstanding" style="width: 100%" name="bOutstng" onclick="" disabled="disabled" />
                </div>
            </div>
        </div>
        
    
    
    <div class="row">
<div class="col-md-6">
<div class="form-group">
<h4 class="card-title">Request Details</h4>
</div>
</div>

</div>



     <div class="row">
                     
         
                     <div class="col-md-3">
                        <div class="form-group">
                           <label for="urgency">Urgency/Priority : <span class="text-danger">*</span></label>
       <select  class="custom-select form-control" id="ddlUrgency"  style="width:100%" name="Urgency" onchange="" > </select>
 </div>
                                            </div>

                     <div class="col-md-3">
                        <div class="form-group">
                           <label for="agreemntfrom">Request Type : <span class="text-danger">*</span></label>
                                                    <select  class="custom-select form-control" id="ddlReqType"  style="width:100%" name="Req type" onchange="reqtyp()"> </select> 
                                                </div>
                         </div>
                         <div class="col-md-3">                    
           <div class="form-group">
                           <label for="ddlsubReqType">Sub/Request Type : <span class="text-danger">*</span></label>
                                                    <select  class="custom-select form-control" id="ddlsubReqType"  style="width:100%" name="Req type1" >
                                                                                                        <option value="-1">----Select----</option>

                                                    </select> 
                                                </div>
                             </div>
         
                     <div class="col-md-3" id="ddlimac">
                                    <div class="form-group">
                                       <label for="agreemntfrom">IMAC Type : <span class="text-danger">*</span></label>
                                                <select  class="custom-select form-control" id="ddlimacType"  style="width:100%" name="imac type" onchange="">
                                                <option value="0">----Select----</option>
                                                <option value="1">INSTALLATION</option>
                                                <option value="2">MOVEMENT</option>
                                                 <option value="3">DECOMMISSION</option>
                                                    <option value="4">DISPOSAL</option>
                                                    <option value="5">BULK INSTALLATION</option>
                                                    <option value="6">BULK MOVEMENT</option>
                                                   
                                                   </select>  
                                                                
                                                            </div>
                                                        </div>
                    
                     
                    
                       
             </div>
        <div id="div_Release">
<div class="row">
     <div class="col-md-3">
                        <div class="form-group">
                           <label for="crfid"> CRF Id : <span class="text-danger"></span></label>
<input type="text" class="form-control" maxlength="100" id="txt_crfid" style="width:100%" name="crfid" onclick=""/>                           
                                                </div>
                                            </div>
     <div class="col-md-3">
                        <div class="form-group">
                           <label for="parentapp">Parent App Name : <span class="text-danger"></span></label>
<input type="text" class="form-control" maxlength="100" id="txt_Parentapp" style="width:100%" name="parentapp" onclick=""/>                           
                                                </div>
                                            </div>
 <%--   <div class="col-md-3">
                        <div class="form-group">
                           <label for="developer"> Developer Name: <span class="text-danger"></span></label>
<input type="text" class="form-control" maxlength="100" id="txt_developer" style="width:100%" name="developer" onclick=""/>                           
                                                </div>
                                            </div>--%>



            
                <div class="col-md-3">
                        <div class="form-group">
                           <label for="Tester">Tester(Employee code) : <span class="text-danger"></span></label>
<input type="text" class="form-control" maxlength="100" id="txt_Tester" style="width:100%" name="Tester" onclick=""/>                           
                                                </div>
                                            </div>
                 <div class="col-md-3">
                        <div class="form-group">
                           <label for="CodeReview">Code Review by(Employee code) : <span class="text-danger"></span></label>
<input type="text" class="form-control" maxlength="100" id="txt_CodeReview" style="width:100%" name="CodeReview" onclick=""/>                           
                                                </div>
                                            </div>



          </div>


        </div>

        <%----imac fields------%>
        <div  id="imac_fields">
                     
         <div class="row">
                     <div class="col-md-3">
                        <div class="form-group">
                           <label for="urgency">Select user Asset Code : <span class="text-danger">*</span></label>
       <select  class="custom-select form-control" id="user_asset"  style="width:100%" name="ddlasset" onchange="SelectedAsstDtl()" > </select>
 </div>
                                            </div>
              <div class="col-md-3">
                        <div class="form-group">
                           <label for="CodeReview">Asset Type : <span class="text-danger"></span></label>
<input type="text" class="form-control" maxlength="100" id="txt_Assettyp" style="width:100%" name="CodeAssetTyp" onclick="" readonly/>                           
                                                </div>
                                            </div>
             <div class="col-md-3">
                        <div class="form-group">
                           <label for="CodeReview">Serial Number: <span class="text-danger"></span></label>
<input type="text" class="form-control" maxlength="100" id="txt_SerialNumber" style="width:100%" name="SerialNumber" onclick="" readonly/>                           
                                                </div>
                                            </div>
            <div class="col-md-3">
                        <div class="form-group">
                           <label for="CodeReview">Manufacture: <span class="text-danger"></span></label>
<input type="text" class="form-control" maxlength="100" id="txt_Manufacture" style="width:100%" name="Manufacture" onclick="" readonly/>                           
                                                </div>
                                            </div>

<%--                     <div class="col-md-3">
                        <div class="form-group">
                           <label for="agreemntfrom">Request Type : <span class="text-danger">*</span></label>
                                                    <select  class="custom-select form-control" id="ddl"  style="width:100%" name="Req type" onchange="reqtyp()"> </select> 
                                                </div>
                                            </div>
                    --%>
                       </div>
            
             <div class="row">  
                         <input type="checkbox" id="chk_systeminstall" name="systeminstall" />  
                           <label for="chk_systeminstall"> &nbsp System Install</label>
         </div>
                           <div class="row">
                           <input type="checkbox" id="chk_systemreplacement" name="systemreplacement"/> 
                            <label for="chk_systemreplacement">&nbsp System Replacement</label>
                               </div>
    <div class="row">
        <input type="checkbox" id="chk_movement" name="systemmovement" title=""/>
                           <label for="systemmovement">&nbsp System Movement</label>

    </div>           
            <div class="row">
        <input type="checkbox" id="chk_SystemRemove" name="systemRemove" title=""/>
                           <label for="systemRemove">&nbsp System Remove</label>

    </div>
            <div class="row" >
<div class="col-md-3" id="oldasset">
                        <div class="form-group" >
                           <label for="CodeReview">Old Asset SerialNumber: <span class="text-danger"></span></label>
<input type="text" class="form-control" maxlength="100" id="txt_oldAsstSerial" style="width:100%" name="Manufacture" placeholder="Enter SerialNumber" onclick="" />                           
                                                </div>
                                            </div>
                <div class="col-md-3" id="mvfrm">
                        <div class="form-group">
                           <label for="CodeReview">Movement From(Location): <span class="text-danger"></span></label>
<input type="text" class="form-control" maxlength="100" id="txt_MovFrm" style="width:100%" name="Manufacture" onclick="" placeholder="Enter Place"/>                           
                                                </div>
                                            </div>
                <div class="col-md-3"  id="mvto">
                        <div class="form-group">
                           <label for="CodeReview">Movement to(Location): <span class="text-danger"></span></label>
<input type="text" class="form-control" maxlength="100" id="txt_MovTo" style="width:100%" name="Manufacture" onclick="" placeholder="Enter Place"/>                           
                                                </div>
                                            </div>
                   <div class="col-md-3" id="mvtoemp">
                        <div class="form-group">
                           <label for="CodeReview">Move to Employee: <span class="text-danger"></span></label>
<input type="text" class="form-control" maxlength="100" id="txt_MovToEmp" style="width:100%" name="Manufacture" onclick="" placeholder="Enter Employee Code"/>                           
                                                </div>
                                            </div>

            </div>
               
             </div>


  
     
        <div class="row">
<div class="col-md-12">
<div class="form-group">
<label for="txt_reqsummary">Request Summary :<span class="text-danger">*</span></label>
<input type="text" id="txt_reqsummary" class=" form-control" style="width:100%" name="summary" onclick="" />
</div>
</div>
</div>
      <div class="row">
<div class="col-md-12">
<div class="form-group">
<label for="txt_Description">Request Description :<span class="text-danger">*</span></label>
<textarea id="txt_Description" class=" form-control" rows="4" style="width:100%" name="Description" onclick="" ></textarea>
</div>
</div>
</div>
    
    <div class="row" id="div_attch">

<div class="col-md-3">
<div class="form-group">
<label for="fundsubcat">Attachments : </label>
    <input type="file" data-style="fileinput" id="FileUpload" style="width: 200px" onchange=""/>

</div>
</div>
</div>
        </div></div><br />
    
            <div class="row">
                     <div class="col-md-12">
                       <div class="form-group">     
                           <div class="buttonbox"> 
                         
                           <input id="btnConfirm" type="button" value="Submit" class="btn-input" onclick="return AddSRorIN();" data-toggle="modal" data-backdrop="false"/>
                           
                           <input id="btnExit" type="button" value="Exit" class="btn-input" onclick="return frmExit();" data-toggle="modal" data-backdrop="false"/>
                            </div>
                       </div>
                    </div>
                </div>  
                
        <div class="row">
                     <div class="col-md-12">
                       <div class="form-group">  
</div>
                    </div>
                </div>  
    </div>
              

               

         
              
</form>
      
</div>
</div>
</div>
   
   
<input id="hdUserId" type="hidden" runat="server"/>
<input id="hdPag" type="hidden" runat="server"/>
<input id="hdSerLoan" type="hidden" runat="server"/> 
<input id="hdSerbank" type="hidden" runat="server"/>
<input id="hdBrid" type="hidden" runat="server"/>
<input id="hdFirmId" type="hidden" runat="server"/>
 <input id="hduname" type="hidden" runat="server"/>    
   

</asp:Content>
