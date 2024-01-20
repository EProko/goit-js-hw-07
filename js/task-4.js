const loginForm = document.querySelector(".login-form");

const listenerForInput = (event) => {
  event.preventDefault();
  const liginInform = event.target;
  const Inform = {
    Email: `${liginInform.elements.email.value.trim()}`,
    Password: `${liginInform.elements.password.value.trim()}`,
  };
  const email = liginInform.elements.email.value.trim();
  const password = liginInform.elements.password.value.trim();

  if (email === "" || password === "") {
    alert("All form fields must be filled in");
  }

  console.log(Inform);
  liginInform.reset();
};

loginForm.addEventListener("submit", listenerForInput);
