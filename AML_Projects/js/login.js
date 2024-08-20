function login_to_page() {
   
    var user = $("#username").val();
    var pass = $("#password").val();
    if (user == "") {
        alert("Enter UserName");
    }
    else if (pass == "") {
        alert("Enter Password");
    }
    else {
      
        $.ajax({
            type: "post",
            contentType: "application/json; charset=utf-8",
            url: "Login.aspx/checkUser",
            data: "{typ:'" + user + "',val:'" + pass + "'}",
            dataType: "json",
            success: function (Result) {
                Result = Result.d;
               
                if (Result == "Valid") {
                    window.open("Index.aspx", "_self");

                }
                else if (Result == "block") {
                    $(".login-form .alert-abc").show();
                    $(".login-form .alert-info").hide();
                    $("#username").val("");
                    $("#password").val("");
                }
                else {
                    $(".login-form .alert-info").show();
                    $("#username").val("");
                    $("#password").val("");
                    $(".login-form .alert-abc").hide();

                }

            },
            error: function (Result) {
                alert(Result.d);
            }
        });
       
    }
}

