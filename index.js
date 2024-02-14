let userip=document.getElementById("iptext")
let tasklist=document.getElementsByClassName("list")[0]

function addelement(){
    if(userip.value==='')
    alert("Please enter the Task")
   else{
    var l=document.createElement("li")
    l.innerHTML=userip.value
    tasklist.appendChild(l)
    var d=document.createElement("span")
    // d.innerHTML='X'
    l.appendChild(d)
   }
   userip.value=''
}
tasklist.addEventListener("click",function(e){
if(e.target.tagName=="LI"){
    e.target.classList.toggle("checked")
    save()

}
else if(e.target.tagName=="SPAN"){
    e.target.parentElement.remove();
save()
}
})

function save(){
    localStorage.setItem("data",tasklist.innerHTML)
}
function show(){
    tasklist.innerHTML=localStorage.getItem("data")
}
show()