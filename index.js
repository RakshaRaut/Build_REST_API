const express =  require("express");
const users = require("./MOCK_DATA.json"); 
const app = express();
const PORT = 8000;

// middleware - plugin
app.use(express.urlencoded({ extended: false }));

// Routes
app.get("/users", (req,res) => {
    const html =`
    <ul> 
    ${users.map((user) => `<li>${user.first_name}</li`).join("")}
    </ul>
    `;
    res.send(html);
});

// REST API
app
.route("/api/users/:id")
.get((req, res) =>{
    const id = Number(req.params.id);
    const user = users.find((user) => user.id === id);
    return res.json(users);
})
.patch((req, res) => {
// Edit user with id
    return res.json({ status: "pending"});
})
.delete((req, res) => {
    // Delete user with id
    return res.json({ status: "pending"});
});

app.post("/api/users", (req,res) => {
    // ToDo: Create new user
    const body = req.body;
    console.log("Body", body);
    return res.json({ status: "pending"});
});

// app.patch("/api/users/:id", (req,res) => {
//     // ToDo:  Edit new user
//     t=return res.json({ status: "pending"});
// });

// app.delete("/api/users/:id", (req,res) => {
//     // ToDo: Delete new user
//     t=return res.json({ status: "pending"});
// });

app.listen(PORT, () => console.log(`Server Started at PORT:${PORT}`))

