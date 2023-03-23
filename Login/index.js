

const element = document.createElement('a');
function setError(id,message) {
  let element = document.getElementById(id);
  element.innerHTML = message
}


function ValidateLoginForm() {
  // debugger
  let val = true;
  
  let username = document.forms["loginForm"]["username"].value;  
  let password = document.forms["loginForm"]["password"].value;
  
  let userData = localStorage.getItem('formData');
  let user = JSON.parse(userData);


  const regex = new RegExp('[a-z0-9]+@[a-z]+\.[a-z]{2,3}');
  if(!regex.test(username)) {
    setError('username','Invalid Username')
    val = false;  
  }

  if (password.length<6 ||password === "") {
    setError('password', 'Invalid Password')
    val = false;
  }
  
  if(username.match(user.email) && password.match(user.password)) {
     window.open(`../Gallery/index.html`);
  }
  
  if(!username.match(user.email) && password.match(user.password)) {
    setError('password', 'Invalid User')  
  }
}
 
