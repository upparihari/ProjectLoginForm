if (!localStorage.getItem("Loginform")) {
    localStorage.setItem("Loginform", JSON.stringify({}));
}
let form = document.querySelector("form") ;
form.addEventListener("submit",functionToWelcomePage) ;
function functionToWelcomePage(event)
{
    event.preventDefault() ;
    let username = document.querySelector("#username").value ;
    let password = document.querySelector("#password").value ;
    let Confirmpassword = document.querySelector("#Confirmpassword").value ;
    if(username == "" || password == "" || Confirmpassword == "")
    {
        alert("Fill all The coloumns") ;
        return ;
    }
    if(password != Confirmpassword)
    {
        alert("Password's Mis-match, Please enter correct password") ;
        return ;
    }
    let obj = JSON.parse(localStorage.getItem("Loginform")) ;
    if(!obj.hasOwnProperty(username))
    {
        obj[username] = password ;
        localStorage.setItem("Loginform",JSON.stringify(obj)) ;
        sessionStorage.setItem("IsLoggedIn","true") ;
        window.location.href = "WelcomePage.html" ;
    }
    else
    {
        alert("Username is already in use, Try a Unique Username") ;
        return ;
    }

}

