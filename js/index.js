function validate(){
  if(form_email.email.value==""){
    alert("Please enter an email!");
    form_email.email.focus();
    return false;
  }
  var regex = /^([A-Za-z0-9_\-\.])+\@([A-Za-z0-9_\-\.])+\.([A-Za-z]{2,4})$/;
  if(regex.test(form_email.email.value)==false){
    alert('Invalid email address');
    form_email.email.focus();
    return false;
  }
return true;
}
