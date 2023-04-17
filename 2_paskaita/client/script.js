console.log("hi")

fetch("http://localhost:3000/")
    .then((resp) => resp.json())
    .then((response) => {
        const nameList = document.querySelector("#names");
        response.forEach(name => {
            const li = document.createElement("li");
            li.textContent = name;
            nameList.append(li)
        });
    })
    .catch()

const button = document.querySelector("#nameButton");

button.addEventListener("click", () => {
    const name = document.querySelector("input").value
    console.log(name);
        fetch("http://localhost:3000/", { 
            method: "POST", 
            headers: { 
                "Content-Type": "application/json" 
            }, 
            body: JSON.stringify({name}) 
        }).then(() => {
            location.reload();
        })

})