
let prodects = JSON.parse(localStorage.getItem("Allprodects")) || prodects_DM;
let editpid = JSON.parse(localStorage.getItem("edit"))

let itemID = prodects.find((x)=> x.id === editpid)

let namec = document.querySelector("#namec")
let desc = document.querySelector("#desc")
let slectSize = document.getElementById("slect")
let sub = document.querySelector(".submite")
let form2 = document.querySelector(".form")
let selectValue ;
let imgUP = document.getElementById("uplode-img")
let imgUrlme;
// -----------------------------------

namec.value =itemID.titl
desc.value=itemID.desc
slectSize.value=itemID.size
imgUrlme = itemID.img




// // event
form2.addEventListener("submit",editprodctFun)
slectSize.addEventListener("change",getSize);
imgUP.addEventListener("change",uplodeImg)
// // fun
function getSize(e){   
    
 selectValue = e.target.value;

     ;}


     function editprodctFun(e){

        e.preventDefault();

        itemID.titl=namec.value
        itemID.desc=desc.value
        itemID.size=slectSize.value
        itemID.img=imgUrlme
        
        console.log( "afrer",itemID);
              localStorage.setItem("Allprodects",JSON.stringify(prodects))

        setTimeout( ()=> {
            window.location = "index.html"
        },500)


     }

function uplodeImg(){
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