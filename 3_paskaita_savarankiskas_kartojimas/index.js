const express = require("express");
const cors = require("cors");
const app =  express();

app.use(express.json());
app.use(cors());

const port = 3000; 

const form = [];

app.get("/form", (req, res) => {
    res.send(form);
});

app.post("/form", (req, res) => {
    const forms = {password: req.body.password, repeatPassword: req.body.repeatPassword, name: req.body.name, surname: req.body.surname, email: req.body.email, postcode: req.body.post, city: req.body.city, phonenumber: req.body.number}
    form.push(forms);
    res.send(req.body);
})

app.post("/form", (req, res) => {
    const forms = {password: req.body.password, repeatPassword: req.body.repeatPassword, name: req.body.name, surname: req.body.surname, email: req.body.email, postcode: req.body.post, city: req.body.city, phonenumber: req.body.number}
    form.push(forms);
    res.redirect('/results.html');
})

app.post("/login", (req, res) => {
    // req.body = {email: "rokas@gmail.com", password: "rokas123"}
    //
    let foundedUser = form.find((user) => user.email === req.body.email);
    // jeigu randa foundedUser = {email: "rokas@gmail.com", password: "rokas123", ...}
    // jeigu neranda foundedUser = undefined
    if (foundedUser !== undefined) {
      // rado
      let submittedPassword = req.body.password; // test
      let storedPassword = foundedUser.password; // test
      // test === test
      // rokas123 === rokas123!
      if (submittedPassword === storedPassword) {
        res.send({ message: "Sekmingai prisijungete", approved: true });
      } else {
        res.send({ message: "Neteisingas slaptažodis", approved: false });
      }
    } else {
      // nerado
      res.send({
        message: "Neteisingas el. paštas",
        approved: false,
      });
    }
  });
app.listen(port, () => {
    console.log(`Server is runing on the ${port}`);
});