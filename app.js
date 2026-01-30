 let cl=console.log
 const allhead=[...document.querySelectorAll(".acHead")]


function onclickHead(eve){
    let getClassNames=eve.target.className
   let geActive=document.querySelector(".acHead.active")
   geActive?.classList.remove("active")

   eve.target.classList.add('active')
if(getClassNames.includes('active')){
  eve.target.classList.remove('active')
    }else{
        eve.target.classList.add('active')
    }
}











 allhead.forEach(h4=>{
    h4.addEventListener("click",onclickHead)
 })