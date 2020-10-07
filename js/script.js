function init(){
  var submit = document.getElementById("submit"); 
  submit.addEventListener('click', function() {
    alert("Success! You have been added to the Evoke Cyber mailing list.");
  });
}

window.addEventListener('load', init);
