function f2(){
  //let form = document.getElementById('form').value;
	let name = document.getElementById('name').value;
  let email = document.getElementById('email').value;
  let gender = document.getElementById('gender').value;
  let date = document.getElementById('date').value;
  let month = document.getElementById('month').value;
  let year = document.getElementById('year').value;
  let BloodGroup = document.getElementById('BloodGroup').value;
  let degree = document.getElementById('degree').value;
  let number = document.getElementById('number').value;
  let file= document.getElementById('file').value;

	
	if(name != "" ){
		document.getElementById('name').innerHTML = name;
    /*document.getElementById('email').innerHTML = email;
    document.getElementById('gender').innerHTML = gender;
    document.getElementById('date').innerHTML = date;
    document.getElementById('month').innerHTML = month;
    document.getElementById('year').innerHTML = year;
    document.getElementById('BloodGroup').innerHTML = BloodGroup;
    document.getElementById('degree').innerHTML = degree;
    document.getElementById('number').innerHTML = number;
    document.getElementById('file').innerHTML = file;*/
    
	}else{
		document.getElementById('name').innerHTML = "Re-submit The Form ";
	}
}

$('#submit').click(function(){
	alert("Submission Successfull");
 


})