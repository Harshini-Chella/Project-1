function validateForm() {
var x = document.forms["myForm"]["name"].value;
  if (x === "") {
    alert("Name must be filled out");
    return false;
  }
  else{
  alert("Success! You have been added to the Evoke Cyber mailing list.");
  }
} 

