const inputBox = document.getElementById("input-box");
const listcontainer = document.getElementById("list-container");

function addTask(){
    if(inputBox.value === ''){
        alert("you must write something!");
    }
    else{
        let li = document.createElement("li");
        li.innerHTML = inputBox.value;
        listcontainer.appendChild(li);
        let span = document.createElement("span");
        span.innerHTML ="\u00d7";
        li.appendChild(span);  
    } 
    inputBox.value =""
    savedata();
}

listcontainer.addEventListener("click",function(e){
if(e.target.tagname === "li"){
    e.target.classlist.toggle("checked");
}
else if(e.target.tagname === "span"){
    e.target.parentelement.remove();
    savedata();
}
},false);

function savedata(){
    localStorage.setitem("data",listcontainer.innerHTML);
}
function showtask(){
    listcontainer.innerHTML = localStorage.getItem("data");
}
showtask();