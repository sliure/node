const card = document.querySelector(".cards");

const fetchData = () => {
  fetch("http://localhost:3000/users/:order'")
    .then((resp) => resp.json())
    .then((data) => outputData(data))
    .catch((error) => console.error(error));

  function outputData(data) {
    data.forEach((data) => {
      const container = document.createElement("div");
      const h3 = document.createElement("h3");
      const email = document.createElement("div");
      const membership = document.createElement("div");
      const ip = document.createElement("div");

      h3.textContent = `${data.fname} ${data.lname}`;
      email.textContent = `Email: ${data.email}`;
      membership.textContent = `Membership: ${data.info[0].name}`;
      ip.textContent = `IP: 1`;

      container.append(h3, email, membership, ip);
      card.append(container);

      container.style.backgroundColor = "white";
      container.style.height = "150px";
      container.style.width = "240px";
      container.style.paddingTop = "10px";
      container.style.paddingLeft = "20px";
      container.style.textAlign = "left";
      container.style.marginLeft = "10px";
    });
  }
};

fetchData();
