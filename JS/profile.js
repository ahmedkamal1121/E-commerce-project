
// local

let proname2 = localStorage.getItem("username")
let proem2 = localStorage.getItem("email")
let allproo = JSON.parse( localStorage.getItem("Allprodects")) || prodects_DM 
let mypro = allproo.filter((x) => x.isMe === "Y")
        // 
        let imgPrOfile = localStorage.getItem("userimg")
        // 

// var

let namedom2 = document.querySelector(".profile-name")
let emaildom2 = document.querySelector(".pro-email")
let nummm = document.querySelector(".nummm span")

            // 
            let myimg = document.querySelector(".profile-img")
            // 


if( mypro.length != 0){
    nummm.innerHTML = mypro.length
}else{
    nummm.remove()
}


namedom2.innerHTML = proname2

emaildom2.innerHTML = proem2

                    myimg.src=imgPrOfile