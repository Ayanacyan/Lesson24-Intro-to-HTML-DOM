function validate(e){
    e.preventDefault();

    const email=document.getElementById("email").value;
    const password=document.getElementById("password").value;
    const age=document.getElementById("age").value;
    const msgBox=document.getElementById("message");
    let message='';
    if (email===''){
        message='Please enter an email';
        msgBox.style.color='red';
    }else if (password===''){
        message='Please enter password';
        msgBox.style.color='blue';
    }
   else if (age===''){
        message='Age should be between 10 and 70';
        msgBox.style.color='purple';
    }
   else{
    message='Login Successful!';
     msgBox.style.color='green';
   }
   msgBox.innerText=message;
}