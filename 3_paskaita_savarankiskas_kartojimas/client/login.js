const form = document.querySelector("form");

form.addEventListener("submit", (event) => {
  event.preventDefault();
  const password = document.querySelector("#password");
  const email = document.querySelector("#email");

  fetch("http://localhost:3000/login", {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify({
      password: password.value,
      email: email.value,
    }),
  })
    .then((response) => response.json())
    .then((data) => {
      const output = document.querySelector("h1");

      if (data.approved === false) {
        output.style.color = "red";
      } else {
        output.style.color = "green";
      }
      output.textContent = data.message;
      form.reset();
    })
    .catch((error) => console.error(error));
});