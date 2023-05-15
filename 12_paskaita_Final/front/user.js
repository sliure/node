const card = document.querySelector(".cards");
const sortSelect = document.getElementById("sort");

const fetchData = () => {
  const sortSelect = document.getElementById("sort");
  const order = sortSelect.value === "second" ? "asc" : "desc";
  let url = `http://localhost:3000/users?order=${order}`;

  fetch(url)
    .then((resp) => resp.json())
    .then((data) => outputData(data))
    .catch((error) => console.error(error));

  function outputData(data) {
    card.innerHTML = "";

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
      email.innerHTML = `Email: <span class="blue">${data.email}</span>`;
      membership.innerHTML = `Membership: <span class="blue">${
        data.info.length > 0 ? data.info[0].name : "N/A"
      }</span>`;
      ip.textContent = `IP: ${generateRandomIp()}`;

      container.append(h3, email, membership, ip);
      card.append(container);

      h3.style.color = "grey";
      h3.style.fontSize = "16px";
      membership.style.paddingTop = "16px";
      ip.style.paddingTop = "16px";
      container.style.backgroundColor = "white";
      container.style.height = "150px";
      container.style.width = "290px";
      container.style.paddingTop = "10px";
      container.style.paddingLeft = "20px";
      container.style.textAlign = "left";
      container.style.marginTop = "30px";
      container.style.marginRight = "40px";
      container.style.textAlign = "left";
    });
  }
};

sortSelect.addEventListener("change", () => {
  const sortOrder = sortSelect.value === "first" ? "" : sortSelect.value;
  fetchData(sortOrder);
});

document.addEventListener("DOMContentLoaded", () => {
  fetchData(""); // Fetch unsorted data on page load
});
