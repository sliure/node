fetch("http://localhost:3000/form")
  .then((resp) => resp.json())
  .then((response) => console.log(response))
  .catch((error) => console.error(error));

const form = document.querySelector("#form");

form.addEventListener("submit", (event) => {
  event.preventDefault();
  const password = document.querySelector("#password").value;
  const repeatPassword = document.querySelector("#repeatPassword").value;
  const name = document.querySelector("#name").value;
  const surname = document.querySelector("#surname").value;
  const email = document.querySelector("#email").value;
  const post = document.querySelector("#post").value;
  const city = document.querySelector("#city").value;
  const number = document.querySelector("#number").value;

  fetch("http://localhost:3000/form", {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify({
      password: password,
      repeatPassword: repeatPassword,
      name: name,
      surname: surname,
      email: email,
      post: post,
      city: city,
      number: number,
    }),
  })
    .then((response) => console.log(response))
    .then(() => {
        window.location.href = "result.html";
    })
    .catch((error) => console.error(error));
});
