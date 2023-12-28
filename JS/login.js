

let username = document.getElementById("Username");
let password = document.getElementById("passs");
let inn = document.getElementById("signin");
let getuser = localStorage.getItem("username");
let getpass = localStorage.getItem("password");



inn.addEventListener("click",function(e){
    e.preventDefault();
    if(username.value === ""|| password.value ===""){
        alert("fill data ya zool!!")
    }else{
        if(
            getuser &&
            getuser.trim() === username.value.trim() &&////////////////
            getpass &&
            getpass === password.value
        ){
            setTimeout( () => {
                window.location ="index.html";
           }, 1500)
           
        } else{
           alert("WRONG!!!")
        }
    }
})



