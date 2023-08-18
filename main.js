b1= document.getElementById("btn1");
input=document.getElementById("input");
list=document.getElementById("list");
b1.addEventListener("click",function(e){
  
if(input.value===""){
    alert("please write somthing to do");}
    else{
   list.innerHTML+=`<li>${input.value}  <span id="s">\u00d7 <span> </li>`;
    input.value="";
    saveData();
    }
}
);


list.addEventListener("click",function(e){
if(e.target.tagName==="LI"){
    e.target.classList.toggle("checked");
    saveData();
}
else{
    e.target.parentElement.remove();  
    saveData(); 
}
},false);



function saveData(){
    localStorage.setItem("data",list.innerHTML)
}

function showData(){
    list.innerHTML=localStorage.getItem("data");
}

showData();