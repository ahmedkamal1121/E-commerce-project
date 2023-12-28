let userjs = document.getElementById("userul");
let user2 = document.getElementById("userli");
let links = document.getElementById("links");
let user1 = localStorage.getItem("username");

let logout = document.querySelector("#logout");



if(user1){

    links.remove();
    userjs.style.display = "flex";
    user2.innerHTML = user1;
 
}




logout.addEventListener("click",function(e){
e.preventDefault
    localStorage.clear();
    setTimeout( function(){
      localStorage.clear()
      window.location = "rsgister.html"
    } )
  
});
