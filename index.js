let createacc = document.querySelector("#createacc") ;
createacc.addEventListener("click",functionToCreateAccount) ;
function functionToCreateAccount(event)
{
    window.location.href = "CreateAccount.html" ;
}

let form = document.querySelector("form") ;
form.addEventListener("submit",functionToSignIn) ;
function functionToSignIn(event)
{
    event.preventDefault() ;
    let username = document.querySelector("#username").value ;
    let password = document.querySelector("#password").value ;
    let obj = JSON.parse(localStorage.getItem("Loginform")) || {};
    if(obj.hasOwnProperty(username))
    {
        if(password == obj[username])
        {
            sessionStorage.setItem("IsLoggedIn","true") ;
            window.location.href = "WelcomePage.html" ;
        }
        else
        {
            alert("Incorrect Password") ;
        }
    } 
    else
    {
        alert("NO Account with this UserName Present") ;
    }

}
