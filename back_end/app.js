const express = require('express');
const mysql = require('mysql');
const path = require('path');
const bodyParser = require('body-parser');

const app = express();
const port = 3000;
// app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

// Create MySQL connection
// const connection = mysql.createConnection({
//     host: "127.0.0.1", 
//     user: "root",
//     password: "root1234",
//     database: "csc3170_project", 
// });

const connection = require('./db/index');

// Connect to MySQL
connection.connect((err) => {
    if (err) {
        console.error('Error connecting to MySQL: ' + err.stack);
        return;
    }
    // console.log('Connected to MySQL as id ' + connection.threadId);
    console.log('Successfully connected to the database');
});

// Serve static files (HTML, CSS, JavaScript)
app.use(express.static('../front_end'));
app.use(express.static(path.join(__dirname, '../front_end/image')));
app.use(express.static(path.join(__dirname, '../front_end')));

// Parse JSON bodies
app.use(express.json());

// Serve the HTML page
// app.get('/', (req, res) => {
//     res.sendFile(__dirname + '/login.html');
// });

// LLM
const { Configuration, OpenAIApi } = require("openai"); 
const readlineSync = require("readline-sync"); 
require("dotenv").config(); 

let APIcall = async () => { 
    const newConfig = new Configuration({ 
        apiKey: process.env.OPENAI_SECRET_KEY 
    }); 
    const openai = new OpenAIApi(newConfig); 
    
    const chatHistory = []; 
    do { 
    const user_input = readlineSync.question("Enter your input: "); 
    const messageList = chatHistory.map(([input_text, completion_text]) => ({ 
        role: "user" === input_text ? "ChatGPT" : "user", 
        content: input_text 
    })); 
    messageList.push({ role: "user", content: user_input }); 

    try { 
        const GPTOutput = await openai.createChatCompletion({ 
            model: "gpt-3.5-turbo", 
            messages: messageList, 
        }); 

    const output_text = GPTOutput.data.choices[0].message.content; 
    console.log(output_text); 
        chatHistory.push([user_input, output_text]); 
    } catch (err) { 
        if (err.response) { 
            console.log(err.response.status); 
            console.log(err.response.data); 
    } else { 
        console.log(err.message); 
            } 
        } 
    } while (readlineSync.question("\nYou Want more Results? (Y/N)").toUpperCase() === "Y"); 
}; 
APIcall();



app.get('/', (req, res) => {
    // 返回HTML页面
    res.sendFile(path.join(__dirname, '../front_end', 'login.html'));
});

app.get('/table.html', (req, res) => {
    res.sendFile('../front_end/table.html');
});

app.get('/sql.html', (req, res) => {
    res.sendFile('../front_end/sql.html');
});

app.get('/llm.html', (req, res) => {
    res.sendFile('../front_end/llm.html');
});

app.post('/login', (req, res) => {

    const { username, password } = req.body;

    // console.log(username)
    // console.log(password)

    // Basic authentication (replace with actual authentication logic)
    if (username === 'Root' && password === 'root') {
        // Redirect to home page upon successful login
        console.log('Login successful')
        res.redirect('/table.html');
    } else {
        // If login fails, send response indicating failure
        res.status(401).send('Login failed');
    }
});

// Handle SQL search requests
app.post('/search1', (req, res) => {
    const tableName = req.body.table;
    if (['users', 'ads', 'AdProviders','tags','videos'].includes(tableName)) {
        connection.query(`SELECT * FROM ${tableName}`, (error, results) => {
            if (error) {
                console.error('Error executing SQL query: ' + error);
                res.status(500).json({ error: 'Error executing SQL query' });
                return;
            }
            res.json(results);
        });
    } else {
        res.status(400).json({ error: 'Invalid table name' });
    }
});

app.post('/search2', (req, res) => {
    const sqlQuery = req.body.query;
    connection.query(sqlQuery, (error, results, fields) => {
        if (error) {
            console.error('Error executing SQL query: ' + error);
            res.status(500).json({ error: 'Error executing SQL query' });
            return;
        }
        res.json(results);
    });
});



// Start the server
app.listen(port, () => {
    console.log(`Server running at http://localhost:${port}`);
});
