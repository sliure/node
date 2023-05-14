const card = document.querySelector(".cards");

const fetchData = () => {
  fetch("http://localhost:3000/memberships")
    .then((resp) => resp.json())
    .then((data) => outputData(data))
    .catch((error) => console.error(error));

  function outputData(data) {
    data.forEach((data) => {
      const container = document.createElement("div");
      const h1 = document.createElement("h1");
      const div = document.createElement("div");
      const deleteThis = document.createElement("button");

      h1.textContent = `${data.price} ${data.name}`;
      div.textContent = data.descripcion;
      deleteThis.textContent = "Delete";

      deleteThis.addEventListener("click", () => {
        const id = data._id;
        fetch(`http://localhost:3000/memberships/${id}`, { method: "DELETE" })
          .then((resp) => resp.json())
          .then(() => container.remove())
          .catch((error) => console.error(error));
      });

      container.append(h1, div, deleteThis);
      card.append(container);

      deleteThis.style.cursor = "pointer";
      deleteThis.style.marginTop = "15px";
      container.style.backgroundColor = "white";
      container.style.height = "180px";
      container.style.width = "240px";
      container.style.marginTop = "10px";
      container.style.textAlign = "left";
      container.style.paddingLeft = "20px";
      container.style.marginRight = "10px";
    });
  }
};

fetchData();
