
let show = document.querySelector(".show")
let prodectDom = JSON.parse(localStorage.getItem("Allprodects"));
let prodectID = localStorage.getItem("prodectID")

let objfind = prodectDom.find(item => item.id == prodectID ) 
 show.innerHTML = `
 
 
 
 <img src="${objfind.img}" alt="">
 <h1>${objfind.titl}</h1>
 <p>${objfind.desc}</p>
 <span>Size : ${objfind.size}</span>`


