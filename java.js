var username=document.forms['myform']["username"];
var errors=document.getElementById('error');
var letters=/^[a-zA-Z ]*$/;
function validation()
{
	if(!username.value.match(letters))
	{
		alert("user contaion alphabets");
		errors.innerHTML="**Username must contain alphabates and spaces";
		return false;
	}
    else if(username.value.length<4)
	{
		//alert("tooshort");
		errors.innerHTML="**Username is too short";
		return false;
	}
    var phone=document.forms['myform']["fphone"];
    var numbers= /^\d{10}$/;
    var invalid=document.getElementById('err');
   if(!phone.value.match(numbers))
   {
	//alert("Invalid no");
    invalid.innerHTML="**Invalid Phone No";
	return false;
   }
   return true;
}


 
  
   
  

