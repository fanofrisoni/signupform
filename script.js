let label = document.getElementById("errorpassword");
let psswdbox = document.getElementById('password')
let cpsswdbox = document.getElementById('cpassword')
  console.log(psswdbox.value)
  console.log(cpsswdbox.value)  

cpsswdbox.addEventListener('input', ()=>{
  if(psswdbox.value==cpsswdbox.value){
    label.textContent = "";
  } else {
    label.textContent = "* passwords don't match";
  }
})

psswdbox.addEventListener('input', ()=>{
  if(psswdbox.value==cpsswdbox.value){
    label.textContent = "";
  } else {
    label.textContent = "* passwords don't match";
  }
})