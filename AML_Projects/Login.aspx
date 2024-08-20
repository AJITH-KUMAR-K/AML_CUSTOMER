<%@ Page Language="C#" AutoEventWireup="true" CodeBehind="Login.aspx.cs" Inherits="AML_Projects.Login" %>

<!DOCTYPE html>

<html xmlns="http://www.w3.org/1999/xhtml">
<head runat="server">

    <title></title>


    <link href="css/main.css" rel="stylesheet" />
    <link href="css/style.css" rel="stylesheet" />
    <link href="css/style_min_new.css" rel="stylesheet" />

    <script src="js/login.js"></script>
    <script src="js/angular.min.js"></script>

    <script type="text/javascript" src="js/jquery-1.10.2.min.js"></script>
    <script type="text/javascript" src="js/jquery-ui-1.10.2.custom.min.js"></script>
    <script src="js/jquery.min.js"></script>


    <style>
        section.tv-404-animation {
            background: #019cdc;
            background: linear-gradient(to right,#019cdc 0,#219be6 100%);
            position: relative;
        }

        body{
             background-color:#c6c9db;
        }
    

        .form-bg {
            width: 20%;
            height: auto;
            background: rgba(255, 255, 255, 0.2);
            /*backdrop-filter: blur(10px);*/
            position: absolute;
            opacity: 1.0;
            top: 0%;
            left: 4%;
            padding-bottom: 10px;
            border-radius: 18px !important;
            padding: 12px !important;
            /*-webkit-filter: blur(2px);*/
          
        }


        .container {
            max-width: 100% !important;
            background-image: url("./IMAGES/hand-drawn-bankruptcy-illustrated.png");
            object-fit: cover !important;
            background-repeat: no-repeat;
            background-color:#c6c9db;
            height:100% !important;
            background-size:40%;
            background-position: right;
          
        }
       
        .form-control{
            background-color:white !important;
            border-radius:8px !important;
            height:38px !important;
        }

        .btn{
            width:100% !important;
            border-radius:8px !important;
        }

        .content {
            color: black;
        }

        h2.tv-title-404-tm {
            font-size: 72px;
            color: #fff;
            font-weight: 300;
            margin-bottom: 50px;
        }

        h3.tv-subtitle-404-tm {
            font-size: 42px;
            color: #fff;
            font-weight: 300;
            margin-bottom: 30px;
        }

        p.tv-text-404-tm {
            font-size: 18px;
            color: #ffffff;
            margin-bottom: 30px;
        }

        .tv-404-animation a {
            color: #ffffff !important;
            text-decoration: none;
        }

        svg {
            width: 100%;
            max-width: 100%;
            height: 100vh;
            margin: 0 auto;
            display: block;
            transform-origin: 50% 100%;
            -moz-transform-origin: 50% 100%;
            animation: appear 1s 1;
            animation-timing-function: cubic-bezier(.63,.09,.3,1.43);
            animation-fill-mode: forwards;
            transform: scale(0);
        }

        .moving-svg {
            transform: rotate(-90deg);
            -webkit-transform: rotate(-90deg);
            -moz-transform: rotate(-90deg);
            -o-transform: rotate(-90deg);
        }

        svg #service1, svg #service2, svg #service3, svg #service4, svg #service5, svg #service6, svg #service7, svg #service8 {
            -webkit-transform-origin: 50% 100%;
            transform-origin: 50% 100%;
            -moz-transform-origin: 50% 100%;
            -webkit-animation: appear 3s infinite;
            animation: appear 3s infinite;
            -webkit-animation-timing-function: cubic-bezier(0.63, 0.09, 0.3, 1.43);
            animation-timing-function: cubic-bezier(0.63, 0.09, 0.3, 1.43);
            -webkit-animation-fill-mode: forwards;
            animation-fill-mode: forwards;
            -webkit-transform: scale(0);
            transform: scale(0);
        }

        svg #service2 {
            -webkit-animation-delay: 0.3s;
            animation-delay: 0.3s;
        }

        svg #service3 {
            -webkit-animation-delay: 0.6s;
            animation-delay: 0.6s;
        }

        svg #service4 {
            -webkit-animation-delay: 0.9s;
            animation-delay: 0.9s;
        }

        svg #service5 {
            -webkit-animation-delay: 1.2s;
            animation-delay: 1.2s;
        }

        svg #service6 {
            -webkit-animation-delay: 1.5s;
            animation-delay: 1.5s;
        }

        svg #service7 {
            -webkit-animation-delay: 1.8s;
            animation-delay: 1.8s;
        }

        svg #service8 {
            -webkit-animation-delay: 2.1s;
            animation-delay: 2.1s;
        }

        /*Keyframes*/
        @-webkit-keyframes appear {
            0% {
                -webkit-transform: scaleX(0) scaleY(0) translateY(0);
                transform: scaleX(0) scaleY(0) translateY(0);
            }

            70% {
                -webkit-transform: scaleX(0.7) scaleY(0.7) translateY(0);
                transform: scaleX(0.7) scaleY(0.7) translateY(0);
            }

            80% {
                -webkit-transform: scaleX(0.9) scaleY(0.5) translateY(5px);
                transform: scaleX(0.9) scaleY(0.5) translateY(5px);
            }

            100% {
                -webkit-transform: scaleX(1) scaleY(1) translateY(0);
                transform: scaleX(1) scaleY(1) translateY(0);
            }
        }

        @keyframes appear {
            0% {
                -webkit-transform: scaleX(0) scaleY(0) translateY(0);
                transform: scaleX(0) scaleY(0) translateY(0);
            }

            70% {
                -webkit-transform: scaleX(0.7) scaleY(0.7) translateY(0);
                transform: scaleX(0.7) scaleY(0.7) translateY(0);
            }

            80% {
                -webkit-transform: scaleX(0.9) scaleY(0.5) translateY(5px);
                transform: scaleX(0.9) scaleY(0.5) translateY(5px);
            }

            100% {
                -webkit-transform: scaleX(1) scaleY(1) translateY(0);
                transform: scaleX(1) scaleY(1) translateY(0);
            }
        }

        .input-real {
            background: rgba(255, 255, 255, 0);
            color: transparent;
            padding: 0;
            border: 0 none transparent;
            line-height: 0;
        }

            .input-real:focus {
                background: rgba(255, 255, 255, 1);
                color: #333;
            }

        .input-real,
        .input-mimic {
            font-family: Arial, Helvetica Neue, Helvetica, sans-serif;
            font-size: 14px;
        }
    </style>

    <script>          //disable rightclick
        window.oncontextmenu = function () {
            return false;
        }

        function isNumber(evt) {
            evt = (evt) ? evt : window.event;
            var charCode = (evt.which) ? evt.which : evt.keyCode;
            if (charCode > 31 && (charCode < 48 || charCode > 57)) {
                return false;
            }
            return true;
        }
    </script>

</head>
<body style="overflow: hidden;" class="login">
    <%--  <form id="form1" runat="server">--%>
   <%-- <section class="tv-404-animation">--%>
            <img src="img/manappuram_50.png" style="width: 150px; padding-top: 10px;" />
      <%--  <div style="background-color:#e4e4e4;z-index:-1 !important">
            <img src="img/manappuram_50.png" style="width: 150px; height: 45px; padding-top: 10px; padding-left: 10px;" />

        </div>  --%>
        <div class="container" style="position: absolute;">

            <div class="form-bg" style="position:relative;margin-top:15% !important;margin-bottom:20% !important; width:25% !important">
                <div class="content" style="color: black;">
                    <div class="box">
                        <div class="content">
                            <form class="form-vertical login-form" runat="server">
                                <h6 class="form-title text-center" >LOGIN</h6>
                                <div class="alert-danger" style="color: red; display: none;"><i class="icon-remove close" data-dismiss="alert"></i>Enter any username and password. </div>
                                <div class="alert-info" style="color: red; display: none;"><i class="icon-remove close" data-dismiss="alert"></i>Sorry! you have tried to enter invalid credentials. You will be blocked after 3 invalid attempts</div>
                                <div class="alert-abc" style="color: red; display: none;">Sorry! You have been blocked for three invalid attempts. Please try after 30 minutes</div>

                                <div class="form-group">
                                    <div class="input-icon">
                                      <%--  <i class="icon-user"></i>--%><br />
                                        <input type="text" name="username" id="username" class="form-control" placeholder="Username" autofocus="autofocus" data-rule-required="true" runat="server" data-msg-required="Please enter your username." onkeypress="return isNumber(event)" autocomplete="on" />
                                    </div>
                                </div>
                                <div class="form-group">
                                    <div class="input-icon">
                                       <%-- <i class="icon-lock"></i>--%><br />
                                        <input type="password" name="password" id="password" class="form-control" placeholder="Password" data-rule-required="true" data-msg-required="Please enter your password." autocomplete="off" />
                                    </div>
                                </div> 
                                <div class="form-actions" style="text-align:center">

                                    <%--  <asp:Button ID="Button1"  Cssclass="submit btn btn-primary pull-right"  runat="server" Text="Login" OnClick="Button1_Click" Font-Bold="True" />--%>

                                    <input type="button" class="submit btn btn-success pull-centre" value="Sign In" onclick="login_to_page()" />
                                </div>
                            </form>



                        </div>

                    </div>

                </div>
            </div>
        </div>
    <%--</section>--%>
    <%--    </form>--%>
</body>
</html>
