function setError(id, message) {
  let element = document.getElementById(id);
  element.innerHTML = message
}

function validateForm() {
  let val = true;

  let firstName = document.forms["myForm"]["fname"].value;
  let lastName = document.forms["myForm"]["lname"].value;
  let email = document.forms["myForm"]["email"].value;
  let password = document.forms["myForm"]["psw"].value;
  let confirmPassword  = document.forms["myForm"]["psw_Confirm"].value;



  console.log('firstName',firstName)
    
  // if(firstName === "" && lastName === "" && email ==="" && password === "" && confirmPassword==="") {
  //   setError('firstName','Empty Field')
  //   setError('lastName','Empty Field')
  //   setError('email','Empty Field')
  //   setError('password','Empty Field')
  //   setError('confirmPassword','Empty Field')
  // }

  if (firstName === "" || firstName.length <5) {
     setError('firstName','Invalid First Name')
     val = false;
  }

  if (lastName === "" || lastName.length <5) {
    setError('lastName','Invalid Last Name')
    val = false;
  }

  const regex = new RegExp('[a-z0-9]+@[a-z]+\.[a-z]{2,3}');
  if(!regex.test(email)) {
    setError('email','Invalid email')
    val = false;
  }

  if (password.length<6 ||password === "") {
    setError('password', 'Invalid Password')
    val = false;
  }

  if (confirmPassword<6 || confirmPassword  === "" ) {
    setError('password', 'Invalid Password')
    val = false;
  }

  if (!password.match(confirmPassword)) {
    setError('confirmPassword', 'Password and Confirm  Password is not the same')
    val = false;
  }
  const formData = {firstName,lastName,email,password,confirmPassword}
  console.log('formData',formData)
  localStorage.setItem('formData',JSON.stringify(formData))
  return val;

}

// function handlechange(event) {
//   if (event.target.name === "fname") {
//     if (event.target.value === "" || event.target.value.length < 5) {
//       setError('firstName', 'First name is to short')
//     }
//   }

//   if (event.target.name === "lname") {
//     if (event.target.value === "" || event.target.value.length < 5) {
//       setError('lastName', 'Last name is to short')
//     }
//   }

//   if (event.target.name === "email") {
//     const regex = new RegExp('[a-z0-9]+@[a-z]+\.[a-z]{2,3}');
//     if (!regex.test(event.target.value)) {
//       setError('email', 'Invalid email')
//     }
//   }
//   ;
//   const password = event.target.value
//   console.log('password', password)
//   if (event.target.name === "psw") {
//     if (event.target.value.length < 6 || event.target.value === "") {
//       setError('password', 'Invalid Password')
//     }
//   }

//   if (!password.match(event.target.value)) {
//     setError('confirmPassword', 'Password and Confirm  Password is not the same')
//   }

//   if (event.target.name === "psw_Confirm") {
//     if (event.target.value.length < 6 || event.target.value === "") {
//       setError('password', 'Invalid Password')
//     }
//   }
// }

