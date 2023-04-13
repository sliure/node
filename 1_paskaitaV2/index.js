const express = require("express"); // express modulio importavimas
const app =  express();// aplikacijos sukurimas
const port = 3000; //porto (kanalo) skaicius

//route (kelias)
//get - grazink duomenis
app.get("/", (req, res) =>{
    //req- request(las ateina is isores), res-response(kas ateina is vidaus)
    res.send("Mano vardas yra Kamile"); //send meetodas issiuncia duomenis
})

app.get("/today", (req, res) => {
    res.send(new Date().toDateString())
});

app.get("/user", (req, res) =>{
    const user = {
        name: "Kamile",
        surename: "Toleikyte",
        age: 24,
    };
    res.send(user);
})
// serverio paleidimas
app.listen(port, () => {
    console.log(`Server is listening on ${port}`)
})