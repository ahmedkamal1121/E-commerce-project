
let user = document.getElementById("newuser")
let email = document.getElementById("newEmail")
let pass = document.getElementById("newpass")

let signup = document.getElementById("signUp");

signup.addEventListener("click",function(e){
e.preventDefault();
if(user.value === ""|| email.value === ""|| pass.value ===""){
    alert("fill data!!!")
}
else{

        localStorage.setItem("username",user.value)
        localStorage.setItem("email",email.value)
        localStorage.setItem("password",pass.value)

        setTimeout( () => {
            window.location = "login.html";
        }, 1500)
}


})