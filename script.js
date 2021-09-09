function validateForm() {
  let x = document.forms["myForm"]["fname"].value;
   let y = document.forms["myForm"]["femail"].value;
   let z = document.forms["myForm"]["fage"].value;
   var gender = document.getElementsByName('gender');
  var genValue = false;
  if (x == "" || y == "" || z == "") {
    alert("All inputs  must be filled out");
    return false;
  }
    for(var i=0; i<gender.length;i++){
            if(gender[i].checked == true){
                genValue = true;    
            }
        }
        if(!genValue){
            alert("Please Choose the gender");
            return false;
        }
   if(!document.getElementById('Delete').checked){
            alert('Checkbox not checked');
            return false;
        }
      
}