
let newprodects=document.querySelector(".prodects")
let nocart = document.querySelector(".nocart")

function drawUi(prodects=[]){
 
        let mypro = prodects.filter((item) => item.isMe === "Y")
if(mypro.length != 0){
        let Uiprodects = mypro.map((item) => {

        return ` <div class="prodect-item" style="border:${item.isMe === "Y" ? '2px solid green' : ''  } ">
                  <img class="pro-img" src="${item.img}" alt="img">
                  <div class="proect-des">
                    <h2 onclick="saveitem(${item.id})" class="titl">${item.titl}</h2>
                    <p>${item.desc}</p>
                    <span> Size: ${item.size}</span>
                    <button class='isme' onclick="edite(${item.id})" >Edite</button>
                    <br>
                    <button class='isme' onclick="delate(${item.id})" >delate</button>
                  </div>
                  <div class="prodect-action">
                  </div>
                </div>`
                ;
    } );


    newprodects.innerHTML = Uiprodects.join("") ;

}else{
    nocart.innerHTML = "no prodects !!"
}

}


drawUi(JSON.parse(localStorage.getItem("Allprodects")) || prodects_DM );


function edite(id){

    localStorage.setItem("edit",id)
    window.location = "edit.html"
  
  }

  function delate(id){
      let pro =JSON.parse(localStorage.getItem("Allprodects")) || prodects_DM
    let mypro = pro.filter((item) => item.isMe === "Y")
let filtered =mypro.filter((x)=> x.id !== id )


let clicked = mypro.find((x) => x.id === id)
pro = pro.filter((x) => x.id !== clicked.id)
drawUi(filtered)

localStorage.setItem("Allprodects",JSON.stringify(pro))
  }