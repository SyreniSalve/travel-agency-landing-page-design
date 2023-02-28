const joinNowButton = document.getElementById("join-now-button");

joinNowButton.addEventListener("click", alertBox);

function alertBox(event) {
  event.preventDefault();
  const inputElement = document.getElementById("email").value;
  return inputElement != ""
    ? alert(
        ` “Thank You! Your email ${inputElement} *successfully added to our subscribers list.*”`
      )
    : alert("“Please enter your email.”");
}
