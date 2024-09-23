function valid() {
  document.getElementById("phno_error").innerHTML = "";
  document.getElementById("email_error").innerHTML = "";
  document.getElementById("pin_error").innerHTML = "";

  name = document.getElementById("name").value;
  phno = document.getElementById("phno").value;
  email = document.getElementById("email").value;
  pin = document.getElementById("pin").value;
  console.log(name, phno, email, pin);

  if (phno.length != 10) {
    document.getElementById("phno_error").innerHTML = "Invalid phone No";
  } else {
    if (!phno.match("[6-9].{9}")) {
      document.getElementById("phno_error").innerHTML = "Invalid phone No";
    }
  }

  if (!email.match("@gmail.com$")) {
    document.getElementById("email_error").innerHTML = "Invalid Email";
  }
  if (pin.length != 6) {
    document.getElementById("pin_error").innerHTML = "Invalid pincode";
  }
}
