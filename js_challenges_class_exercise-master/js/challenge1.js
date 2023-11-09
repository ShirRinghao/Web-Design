document
.querySelector("#subscribe")
.addEventListener("click", function (){
  if(this.checked){
    document.getElementById("emailDiv").style.display ="block";
  }else{
    document.getElementById("emailDiv").style.display = "none";
  }
});