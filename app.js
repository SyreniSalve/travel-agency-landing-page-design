const joinNowButton = document.getElementById("join-now-button");

joinNowButton.addEventListener("click", alertBox);

function alertBox(event) {
  event.preventDefault();
  const inputValue = document.getElementById("email").value;

  const message =
    inputValue !== ""
      ? ` “Thank You! Your email ${inputValue} *successfully added to our subscribers list.*”`
      : "“Please enter your email.”";

  alert(message);
}
