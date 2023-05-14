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

      function generateRandomIp() {
        let ip = [];
        for (let i = 0; i < 4; i++) {
          ip.push(Math.floor(Math.random() * 256));
        }
        return ip.join(".");
      }

      h3.textContent = `${data.fname} ${data.lname}`;
      email.textContent = `Email: ${data.email}`;
      membership.textContent = `Membership: ${
        data.info.length > 0 ? data.info[0].name : "N/A"
      }`;
      ip.textContent = `IP: ${generateRandomIp()}`;

      container.append(h3, email, membership, ip);
      card.append(container);

      container.style.backgroundColor = "white";
      container.style.height = "150px";
      container.style.width = "250px";
      container.style.paddingTop = "10px";
      container.style.paddingLeft = "20px";
      container.style.textAlign = "left";
      container.style.marginTop = "10px";
      container.style.marginRight = "10px";
      container.style.textAlign = "left";
    });
  }
};

fetchData();
