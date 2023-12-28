
let lang = localStorage.getItem("lang")

if(lang){
  if(lang === "rtl"){
    changedir("rtl")
  }else{
    changedir("ltr")
  }
}



// ------prodects------------

 let newprodects = document.querySelector(".prodects");
 let drop_down = document.querySelector(".drop div");
 let dropmenie = document.querySelector(".drop");
 let badgDom = document.querySelector(".badge")
let cartsnum = document.querySelectorAll(".drop div p")
let prodects_js =prodects_DM;
let filterB = document.getElementById("filterBy")

{/* <img class="pro-img" src="${item.img}" alt="img"> */}


function drawUi(prodects=[]){

    let Uiprodects =prodects.map((item) => {

        return ` <div class="prodect-item" style=" border:${item.isMe === "Y" ? '2px solid green' : ''  } ">
                            <div class="divimg" style=" background-image: url(${item.img});" >  
             
                             </div>
                
                             <div class="proect-des">
                                     <h2 onclick="saveitem(${item.id})" class="titl">${item.titl}</h2>
                                     <p>${item.desc}</p>
                                      <span> Size: ${item.size}</span>
                                       ${item.isMe === "Y" ? "<button class='isme' onclick='edite("+ item.id+ ")' >Edite</button>" : ''  }
                              </div>

                                 <div class="prodect-action">
                                          <button class="add-tocart" onclick="  choies(${item.id})" >Add to cart</button>
                                          <i class="icon fa fa-heart-o fa-lg" style="color:${item.liked == true ?'red' : ''}" onclick="addtofav(${item.id})"></i>
                                  </div>
                        </div>`
                ;
    } );


    newprodects.innerHTML = Uiprodects.join("") ;


}


drawUi(JSON.parse(localStorage.getItem("Allprodects")) || prodects_DM );


//show 

 let addeditem =  localStorage.getItem("prodects") ? 
 JSON.parse(localStorage.getItem("prodects")) : [];

 if(addeditem){
  addeditem.map(item => {
    drop_down.innerHTML += `<p>${item.titl} ${item.qyt} </p>`;
  } )

 badgDom.style.display ="block"
 badgDom.innerHTML = addeditem.length

 }


//add to catr////////////////////////////////

  let alladded =[]//camrea

 function choies(id){
  
  if (localStorage.getItem("username")){
    let prodects_js= JSON.parse(localStorage.getItem("Allprodects")) || prodects_js;
    let prodect = prodects_js.find((item) => item.id === id)
     let isProdectinCart =addeditem.some((i) => i.id === prodect.id)
     
    if(isProdectinCart){
      addeditem = addeditem.map((p) => {
        if(p.id === prodect.id) p.qyt +=1;
        return p
      })
     
    }else{

     addeditem.push(prodect);
     
    }

     drop_down.innerHTML= ""
     addeditem.forEach(item =>{
      drop_down.innerHTML += `<p>${item.titl} ${item.qyt}</p>`; 
    })


    
    let cartsnum = document.querySelectorAll(".drop div p")
    // addeditem = [...addeditem, choiesn_item]

  //  let uniquu= uniqu(addeditem,"id");

     localStorage.setItem("prodects", JSON.stringify(addeditem) )
    badgDom.style.display ="block"
    badgDom.innerHTML = cartsnum.length
  
    }else{
     window.location = "login.html";
   }
 
 }




                                function uniqu(arr,type){
                                  [1,1,1]  
                                  //map= item=1 index=0,1,2 arr=[1,1,1]
                                  let un = arr.map((item) => item[type] )
                                  .map((item , i, arr2) => arr2.indexOf(item) === i && i )
                                  .filter(item => arr[item])
                                  .map((item) => arr[item]);
                                  /////////////////////////
                                  /////////////////
                                return un;
                                }



function checklogin() {
 
     
       if (localStorage.getItem("username")){
      //  console.log();
       }else{
        window.location = "login.html";
      }
}


///ظهور واختفاء
function apperand(){
  if(drop_down.innerHTML != "")
      if(dropmenie.style.display == "block"){
      dropmenie.style.display = "none"
     }else{
      dropmenie.style.display = "block"
     }
    }
   

let shop =document.querySelector(".note")
shop.addEventListener("click",apperand)


function saveitem(id){
  localStorage.setItem("prodectID",id)
  window.location ="cartdet.html"
}


//search////////////////////

let search = document.querySelector(".search")


search.addEventListener("keyup", function(e){
  
      seaech(e.target.value.trim() , JSON.parse(localStorage.getItem("Allprodects")))
      if(e.target.value.trim() === ""){
        drawUi(JSON.parse(localStorage.getItem("Allprodects")) );
      };
    }
  
 )



function seaech(titl, myarry){

     let arr = myarry.filter((item) => item.titl.indexOf(titl) !== -1 )

      drawUi(arr);

    }





    //  console.log(arr);
     

                    // for( var i =0; i<myarry.length;i++){
                    //    if(myarry[i].titl === titl ){
                    //     console.log(myarry[i]);
                    //    }
                    // }
                   

// seaech("Camera",JSON.parse(localStorage.getItem("Allprodects")))



//////////
              // let favitem=[];
              // function addtofav(id){
              
              //   let fav = prodects_js.find(item => item.id === id)
              //   if(fav){
              //     favitem = [...favitem, fav]
              //     let uniquu= uniqu(favitem,"id");
              //   localStorage.setItem("favivart",JSON.stringify (uniquu))
              //   }

              // }













////MY LOGIC
let favitem =  localStorage.getItem("fav") ? 
JSON.parse(localStorage.getItem("fav")) : [];

               function addtofav(id){
                
                let itemf = prodects_js.find((item) => item.id === id)
          
                if(itemf){
                  
                   let mapfav = favitem.find((item) =>item.id === itemf.id )

                   if(mapfav){
                    console.log("item found already");
                   }else{
                    // itemf.liked=true;
                     favitem =[...favitem,itemf]
                  
                     localStorage.setItem("fav",JSON.stringify(favitem))
                     prodects_js.map((item) =>{ 
                      if (item.id === itemf.id) {
                      itemf.liked = true
                      
                      localStorage.setItem("Allprodects",JSON.stringify(prodects_js))
                      drawUi(prodects_js);
                     } })
                     
                   }
                }
               }
////MY LOGIC


filterB.addEventListener("change",getfilter)

function getfilter(e){
  let val =e.target.value
  let prodects = JSON.parse(localStorage.getItem("Allprodects")) || prodects_DM
  if(val === "all"){
    drawUi(prodects)
  }else{

    let filpro =  prodects.filter((i) => i.size == val)
    drawUi(filpro)
  }

  

}


function edite(id){

  localStorage.setItem("edit",id)
  window.location = "edit.html"

}



// lang

let en =document.getElementById("enlang")
let ar =document.getElementById("arlang")

en.addEventListener("click", ()=> changedir("ltr"))
ar.addEventListener("click", ()=> changedir("rtl"))

function changedir(dir){
  document.documentElement.setAttribute("dir",dir)
  localStorage.setItem("lang",dir)
}