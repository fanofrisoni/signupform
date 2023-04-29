let label = document.getElementById("errorpassword");
let psswdbox = document.getElementById('password')
let cpsswdbox = document.getElementById('cpassword')
let signup = document.getElementById('signupform')


signup.addEventListener('submit', (e)=>{
  e.preventDefault();
  if(psswdbox.value==cpsswdbox.value){
    alert('Thanks!')
    signup.reset();
  } else {
    label.style.color = '#ff3363';
  }
  
})

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