fetch("http://localhost:3000/products")
    .then((resp) => resp.json())
    .then((response) => {
        const productList = document.querySelector("#list");
        response.forEach(product => {
            const li = document.createElement("li");
            li.textContent = product;
            productList.append(li)
        });
    })
    .catch()

const button = document.querySelector("#itemButton");

button.addEventListener("click", () => {
    const product = document.querySelector("input").value
    console.log(product);
        fetch("http://localhost:3000/products", { 
            method: "POST", 
            headers: { 
                "Content-Type": "application/json" 
            }, 
            body: JSON.stringify({product}) 
        }).then(() => {
            location.reload();
        })

})




