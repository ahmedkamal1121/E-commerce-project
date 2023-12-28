
// var

let namec = document.querySelector("#namec")
let desc = document.querySelector("#desc")
let slectSize = document.getElementById("slect")
let sub = document.querySelector(".submite")
let form = document.querySelector(".form")
let selectValue ;
let imgUP = document.getElementById("uplode-img")

let imgUrlme;



// event
form.addEventListener("submit",creatprodctFun)
slectSize.addEventListener("change",getSize);
imgUP.addEventListener("change",uplodeImg)


// fun
function getSize(e){   
    
 selectValue = e.target.value;

     ;}


     function creatprodctFun(e){
        
        let allpro = JSON.parse(localStorage.getItem("Allprodects")) || prodects_DM;
        let nameValue = namec.value
        let desValue = desc.value


if(nameValue&&desValue){
    let  obj = {
      id: allpro ?  allpro.length+1 : 1,
      img:imgUrlme,
      qyt: 1,
      size:  selectValue,
      titl: nameValue,
      desc:desValue,
      isMe:"Y", 
      };

      let newpro = allpro ?  [...allpro,obj] : [obj]

      localStorage.setItem("Allprodects",JSON.stringify(newpro))
      namec.value =""
      desc.value =""

      setTimeout(function(){
        window.location = "index.html";
      },1000);
       

}else{
    alert("pleas fill data...")
}

     }

function uplodeImg(){
    let file = this.files[0]
    console.log(file);

    let type =["image/jpeg","image/png"]


    if(type.indexOf(file.type) == -1){
        alert("not spporteed")
        return;
    }

    if(file.size > 2 * 1024 * 1024){
        alert("less than 2M")
        return;
    }
    base64(file)
    // imgUrlme= URL.createObjectURL(file);


}

function base64(file){
    let reder = new FileReader();

    reder.readAsDataURL(file)

    
    reder.onload = function(){
        imgUrlme=reder.result
    }

    reder.onerror = function(){
        alert("Eroore ...!")
    }

}