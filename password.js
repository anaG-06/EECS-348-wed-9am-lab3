function pass_check()
{
    var pass1 = document.getElementById("pass1").value;
    var pass2 = document.getElementById("pass2").value;

    // window.alert(pass1);

    //checks length, compares both password lengths to check if less than 8, alerts user if true
    if (pass1.length < 8)
    {
        window.alert("The first password is less than 8 characters!");
    }
    else if (pass2.length < 8)
    {
        window.alert("The second password is less than 8 characters!");
    }

    //compares both passwords to check if they are equal
    else if (pass1 == pass2)
    {
        window.alert("Password verified.")
    }
    else
    {
        window.alert("Passwords do not match!")
    }


}