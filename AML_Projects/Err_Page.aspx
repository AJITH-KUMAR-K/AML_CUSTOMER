<%@ Page Language="C#" AutoEventWireup="true" CodeBehind="Err_Page.aspx.cs" Inherits="AML_Projects.Err_Page" %>

<!DOCTYPE html>
<html xmlns="http://www.w3.org/1999/xhtml">
<head runat="server">
    <title></title>
    <style type="text/css">
     .btOver:hover {
        color:white; 
       background: rgb(77,138,140);
background: linear-gradient(90deg, rgba(77,138,140,1) 0%, rgba(0,0,0,0.2553221117548582) 50%, rgba(77,138,140,1) 100%);
      }
    </style>       
  <link rel="stylesheet" href="https://unpkg.com/bootstrap@5.3.3/dist/css/bootstrap.min.css">
<link rel="stylesheet" href="https://cdn.jsdelivr.net/npm/bootstrap-icons@1.11.3/font/bootstrap-icons.min.css">
<link rel="stylesheet" href="https://unpkg.com/bs-brain@2.0.4/components/error-404s/error-404-1/assets/css/error-404-1.css">
</head>
<body>
    <!-- Error 404 Template 1 - Bootstrap Brain Component -->
<section class="py-3 py-md-5 min-vh-100 d-flex justify-content-center align-items-center">
  <div class="container">
    <div class="row">
      <div class="col-12">
        <div class="text-center">
         <%-- <h2 class="d-flex justify-content-center align-items-center gap-2 mb-4">
            <span class="display-1 fw-bold">4</span>
            <i class="bi bi-exclamation-circle-fill text-danger display-4"></i>
            <span class="display-1 fw-bold bsb-flip-h">4</span>
          </h2>--%>
<%--          <h3 class="h2 mb-2">Oops! You're lost.</h3>--%>
          <p class="mb-5">You Are Not Authorised To View This Page.</p>
          <a class="btn bsb-btn-5xl btn-dark rounded-pill px-5 fs-6 m-0" href="Login.aspx" role="button">Back to Home</a>
        </div>
      </div>
    </div>
  </div>
</section>
</body>
</html>
