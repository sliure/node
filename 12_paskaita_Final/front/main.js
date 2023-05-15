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

      deleteThis.classList.add("delete-button");
      deleteThis.innerHTML = '<i class="fas fa-trash"></i>';

      deleteThis.addEventListener("click", () => {
        const id = data._id;
        fetch(`http://localhost:3000/memberships/${id}`, { method: "DELETE" })
          .then((resp) => resp.json())
          .then(() => container.remove())
          .catch((error) => console.error(error));
      });

      container.append(h1, div, deleteThis);
      card.append(container);

      h1.style.fontSize = "20px";
      div.style.fontSize = "14px";
      h1.style.paddingTop = "16px";
      deleteThis.style.cursor = "pointer";
      deleteThis.style.paddingTop = "40px";
      deleteThis.style.marginRight = "40px";
      deleteThis.style.textAlign = "right";
      container.style.backgroundColor = "white";
      container.style.height = "150px";
      container.style.width = "320px";
      container.style.marginTop = "30px";
      container.style.textAlign = "left";
      container.style.marginRight = "30px";
      container.style.textAlign = "center";
    });
  }
};

fetchData();
