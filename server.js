const express = require("express");
const app = express();

const PORT = process.env.PORT || 3000;

app.get("/", (req, res) => {
    const now = new Date();

    res.send(`
        <h1>Laura assignment week 1</h1>
        <p>Hello from Fly.io! (CI/CD working)</p>
        <p>This is my simple Node.js app deployed to the internet.</p>
        <p>Current server time: ${now.toISOString()}</p>
    `);
});

app.listen(PORT, () => {
    console.log(`Server running on port ${PORT}`);
});