var btn=document.querySelector("button");
var stat=document.querySelector("h2");
var flag=0;
var timer;
btn.addEventListener("click",function(){
if(flag===0){
    stat.textContent="Request Sending..."
    stat.style.color="rgb(235, 235, 52)"
    btn.textContent="Cancel Request" 
    flag=1
   

  timer=  setTimeout(function(){
        stat.textContent="Friends"
        stat.style.color="green" 
        btn.textContent="Remove Feriend"  
        },(Math.floor(Math.random()*10))*1000)
   
}else{
    stat.textContent="Strangers"
    clearTimeout(timer);
    stat.style.color="red" 
    btn.textContent="Add friend"   
    flag=0

}



})