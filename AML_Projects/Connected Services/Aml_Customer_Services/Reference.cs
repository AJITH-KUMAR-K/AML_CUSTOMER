﻿//------------------------------------------------------------------------------
// <auto-generated>
//     This code was generated by a tool.
//     Runtime Version:4.0.30319.42000
//
//     Changes to this file may cause incorrect behavior and will be lost if
//     the code is regenerated.
// </auto-generated>
//------------------------------------------------------------------------------

namespace AML_Projects.Aml_Customer_Services {
    
    
    [System.CodeDom.Compiler.GeneratedCodeAttribute("System.ServiceModel", "4.0.0.0")]
    [System.ServiceModel.ServiceContractAttribute(ConfigurationName="Aml_Customer_Services.Icust_services")]
    public interface Icust_services {
        
        [System.ServiceModel.OperationContractAttribute(Action="http://tempuri.org/Icust_services/GetDetails", ReplyAction="http://tempuri.org/Icust_services/GetDetailsResponse")]
        System.Data.DataSet GetDetails(string proc_name, string p_flag, string p_pageval, string p_parval1, string p_parval2, string p_parval3);
        
        [System.ServiceModel.OperationContractAttribute(Action="http://tempuri.org/Icust_services/GetDetails", ReplyAction="http://tempuri.org/Icust_services/GetDetailsResponse")]
        System.Threading.Tasks.Task<System.Data.DataSet> GetDetailsAsync(string proc_name, string p_flag, string p_pageval, string p_parval1, string p_parval2, string p_parval3);
        
        [System.ServiceModel.OperationContractAttribute(Action="http://tempuri.org/Icust_services/DataUpload", ReplyAction="http://tempuri.org/Icust_services/DataUploadResponse")]
        string DataUpload(string proc_name, string p_param, byte[] upload_file);
        
        [System.ServiceModel.OperationContractAttribute(Action="http://tempuri.org/Icust_services/DataUpload", ReplyAction="http://tempuri.org/Icust_services/DataUploadResponse")]
        System.Threading.Tasks.Task<string> DataUploadAsync(string proc_name, string p_param, byte[] upload_file);
        
        [System.ServiceModel.OperationContractAttribute(Action="http://tempuri.org/Icust_services/getdata_login", ReplyAction="http://tempuri.org/Icust_services/getdata_loginResponse")]
        string getdata_login(string proc_name, string p_param);
        
        [System.ServiceModel.OperationContractAttribute(Action="http://tempuri.org/Icust_services/getdata_login", ReplyAction="http://tempuri.org/Icust_services/getdata_loginResponse")]
        System.Threading.Tasks.Task<string> getdata_loginAsync(string proc_name, string p_param);
    }
    
    [System.CodeDom.Compiler.GeneratedCodeAttribute("System.ServiceModel", "4.0.0.0")]
    public interface Icust_servicesChannel : AML_Projects.Aml_Customer_Services.Icust_services, System.ServiceModel.IClientChannel {
    }
    
    [System.Diagnostics.DebuggerStepThroughAttribute()]
    [System.CodeDom.Compiler.GeneratedCodeAttribute("System.ServiceModel", "4.0.0.0")]
    public partial class Icust_servicesClient : System.ServiceModel.ClientBase<AML_Projects.Aml_Customer_Services.Icust_services>, AML_Projects.Aml_Customer_Services.Icust_services {
        
        public Icust_servicesClient() {
        }
        
        public Icust_servicesClient(string endpointConfigurationName) : 
                base(endpointConfigurationName) {
        }
        
        public Icust_servicesClient(string endpointConfigurationName, string remoteAddress) : 
                base(endpointConfigurationName, remoteAddress) {
        }
        
        public Icust_servicesClient(string endpointConfigurationName, System.ServiceModel.EndpointAddress remoteAddress) : 
                base(endpointConfigurationName, remoteAddress) {
        }
        
        public Icust_servicesClient(System.ServiceModel.Channels.Binding binding, System.ServiceModel.EndpointAddress remoteAddress) : 
                base(binding, remoteAddress) {
        }
        
        public System.Data.DataSet GetDetails(string proc_name, string p_flag, string p_pageval, string p_parval1, string p_parval2, string p_parval3) {
            return base.Channel.GetDetails(proc_name, p_flag, p_pageval, p_parval1, p_parval2, p_parval3);
        }
        
        public System.Threading.Tasks.Task<System.Data.DataSet> GetDetailsAsync(string proc_name, string p_flag, string p_pageval, string p_parval1, string p_parval2, string p_parval3) {
            return base.Channel.GetDetailsAsync(proc_name, p_flag, p_pageval, p_parval1, p_parval2, p_parval3);
        }
        
        public string DataUpload(string proc_name, string p_param, byte[] upload_file) {
            return base.Channel.DataUpload(proc_name, p_param, upload_file);
        }
        
        public System.Threading.Tasks.Task<string> DataUploadAsync(string proc_name, string p_param, byte[] upload_file) {
            return base.Channel.DataUploadAsync(proc_name, p_param, upload_file);
        }
        
        public string getdata_login(string proc_name, string p_param) {
            return base.Channel.getdata_login(proc_name, p_param);
        }
        
        public System.Threading.Tasks.Task<string> getdata_loginAsync(string proc_name, string p_param) {
            return base.Channel.getdata_loginAsync(proc_name, p_param);
        }
    }
}
