// 
let name_new =document.getElementById("name-edit")
let emai_edit =document.getElementById("emai-edit")
let formprofile =document.querySelector(".form-profile")
let imgproful = document.getElementById("uplode-img-pro")
let imgProUrl;
// 
let new_name =localStorage.getItem("username")
let new_email =localStorage.getItem("email")


// 

emai_edit.value =  new_email
name_new.value = new_name
// 

imgproful.addEventListener("change",UplodeProfileimg)
formprofile.addEventListener("submit",editinfo)
// 
function editinfo(e){
    e.preventDefault()
    localStorage.setItem("username",name_new.value)
    localStorage.setItem("email",emai_edit.value)
     localStorage.setItem("userimg",imgProUrl)


    setTimeout(()=>{
        window.location = "profile.html"
    } ,500)
}






function UplodeProfileimg(){
    let file = this.files[0]
    let type =["image/jpeg","image/png"]
    if(type.indexOf(file.type) == -1){
        alert("not spporteed")
        return;
    }

    if(file.size > 2 * 1024 * 1024){
        alert("less than 2M")
        return;
    }
    base64(file)}


function base64(file){
    let reder = new FileReader();

    reder.readAsDataURL(file)

    reder.onload = function(){
        console.log(reder.result);
        imgProUrl=reder.result
    }
    reder.onerror = function(){
        alert("Eroore ...!")
    }
    
}