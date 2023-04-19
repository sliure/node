fetch("http://localhost:3000/form")
        .then((resp) => resp.json())
        .then((data) => {
          const formData = document.querySelector("#form-data");
          for (let i = 0; i < data.length; i++) {
            const listItem = document.createElement("li");
            listItem.textContent = `Password: ${data[i].password}, Repeat Password: ${data[i].repeatPassword}, Name: ${data[i].name}, Surname: ${data[i].surname}, Email: ${data[i].email}, Postcode: ${data[i].postcode}, City: ${data[i].city}, Phone Number: ${data[i].phonenumber}`;
            formData.appendChild(listItem);
          }
        })
        .catch((error) => console.log(error));