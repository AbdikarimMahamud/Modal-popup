const openBtn=document.getElementById("open")
const closeBtn=document.getElementById("close")
const modal=document.getElementById("modal")

openBtn.addEventListener("click",()=>{
    modal.showModal()
})

closeBtn.addEventListener("click",()=>{
    modal.close()
})
modal.addEventListener("click",function(e){
    if(e.target===modal){
        modal.close()
    }
})