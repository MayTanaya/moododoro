const express = require('express');
const path = require('path');
const app = express();

const PORT = process.env.PORT || 3000;

// Serve static files from the public folder
app.use(express.static(path.join(__dirname, 'public')));

// Endpoint 1: Root route is automatically handled by express.static('public')
// It will serve index.html by default.
app.get('/', (req, res) => {
    res.sendFile(path.join(__dirname, 'public', 'index.html'));
});

// Endpoint 2: Health check
app.get('/health', (req, res) => {
    res.json({
        status: 'ok',
        app: 'Moododoro',
        message: 'Moododoro Node.js app is running',
        timestamp: new Date().toISOString()
    });
});

// Endpoint 3: Sample notes API
app.get('/api/sample-notes', (req, res) => {
    res.json([
        {
            "target": "Finish deployment report",
            "mood": "Dreamy",
            "todo": "Deploy to Vercel, Netlify, and GitHub Pages",
            "reflection": "I stayed focused and made small progress today."
        },
        {
            "target": "Prepare presentation slides",
            "mood": "Cozy",
            "todo": "Add screenshots, DNS test, SSL test, and performance result",
            "reflection": "The project feels more complete now."
        }
    ]);
});

app.listen(PORT, () => {
    console.log(`Moododoro app listening on port ${PORT}`);
    console.log(`Open http://localhost:${PORT} to view the app.`);
});
