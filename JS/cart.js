


let newprodects1 = document.querySelector(".prodects");
let nocart = document.querySelector(".nocart")


//draw UI

function drawUicart(prodects=[]){
   
  //  // ما فهمت شي
  //  if(JSON.parse(localStorage.getItem("prodects")).lenght === 0)
   // console.log("yes");
//
    // nocart.innerHTML = "akkkkkkkkkkkkkkkkk"
    // خالص 
       
  

    let proUL = JSON.parse(localStorage.getItem("prodects")) || prodects;

    let Uiprodects = proUL.map((item) => {

        return ` <div class="prodect-item">
                  <img class="pro-img" src="${item.img}" alt="img">
                  <div class="proect-des">
                    <h2 class="titl">${item.titl}</h2>
                    <p>${item.desc}</p>
                    <span> Size: ${item.size}</span><br>
                    <span> Quntity: ${item.qyt}</span>
                  </div>
                  <div class="prodect-action">
                    <button class="add-tocart" onclick=" remove(${item.id})" >Remove from cart</button>
                  </div>
                </div>`
                ;
    } );

    newprodects1.innerHTML = Uiprodects.join("")  ;


}

drawUicart();

function remove(id){

let prodectsCart =localStorage.getItem("prodects")

    if(prodectsCart){
        let items = JSON.parse(prodectsCart);
     let arry = items.filter((item) => item.id !== id);
     localStorage.setItem("prodects",JSON.stringify(arry))
     drawUicart(arry)
    }



}