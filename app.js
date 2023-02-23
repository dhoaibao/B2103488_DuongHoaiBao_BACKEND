const express = require("express");
const cors = require("cors");
const contactsRouter = require("./app/routes/contact.route");
const ApiError = require("./app/api-error");

const app = express();

const users = [];

app.use(cors());
app.use(express.json());
app.use("/api/contacts", contactsRouter);

app.get("/", (req, res) => {
    res.json({message: "Welcome to contact book application."});
});

app.post('/register', (req, res) => {
    const { username, password } = req.body;

    if (!username || !password) {
        return res.status(400).json({ message: 'Missing required information' });
    }

    const existingUser = users.find(user => user.username === username);
    if (existingUser) {
        return res.status(409).json({ message: 'Username already exists' });
    }

    const newUser = { id: users.length + 1, username, password };
     users.push(newUser);

    return res.status(201).json({ message: 'Registration successful' });
});

app.post('/login', (req, res) => {
    const { username, password } = req.body;

    const user = users.find(user => user.username === username && user.password === password);

    if (user) {
        return res.status(200).json({ message: 'Login successful' });
    } else {
        return res.status(401).json({ message: 'Invalid username or password' });
    }
});

app.use((req, res, next) => {
    return next(new ApiError(404, "Resource not found"));
});
app.use((err, req, res, next) => {
    return res.status(err.statusCode || 500).json({
        message: err.message || "Internal Server Error",
    });
});

module.exports = app;
