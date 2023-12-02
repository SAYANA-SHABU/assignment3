var em=document.getElementById("email");
var pwd=document.getElementById("password");
// var err3=document.getElementById("phoneno");
var err1=document.getElementById("err1");
var err2=document.getElementById("err2");

var regex=/^([A-Za-z0-9\-#_.]+)@([A-Za-z0-9\-]).([a-z]{2,3})(.[a-z]{2.3})?$/

function validate() {
    if(em.value.trim()=="" )
{ err1.innerText="Field cannot be empty";
err1.style.color="red"
err2.innerText="Field cannot be empty";
em.style.border="2px solid red";
return false} 
else if(!regex.test(em.value)){
    err1.innerText="Please enter proper email";
    err1.style.color="red"
   em.style.border="2px solid red";
   return false
}
else{
    err1.innerText="";
    em.style.border="2px solid green"
    return true
}   
}
  


