// form validation

$(document).ready (function () {  
    $('#submitButton').click(function (e) {  
       e.preventDefault(); 
       $('#errorMesg').show();
       let email = $('#email').val();
       let phoneNum = $('#phoneNum').val();
       let userPassword = $('#userPassword').val();
       let C_userPassword = $('#C_userPassword').val();
       let errorMesg = $('#errorMesg').val();
       let successMesg = $('#successMesg').val();



       if(email == '')
       {
            alert("Please enter Email ID");
            return email;
       }

       if(phoneNum.length != 10)
       {
            alert("Please enter a valid phone number");
            return phoneNum;
       }

       if (userPassword.length < 8 )
       {
            alert("Password Must Be at least 8 characters long");
            return userPassword;
       }

       if (C_userPassword != userPassword )
       {
            alert("Password Should Match");
            return C_userPassword;
       }
       
       if(email == '' && phoneNum == '' && userPassword == '' && C_userPassword == '')
        {    $('#errorMesg').show();
            $('#successMesg').hide();
        }
        else 
        {
            $('#successMesg').show();
            $('#errorMesg').hide();
        }
    });
});
