import express from 'express';
import bodyParser from 'body-parser';

const app = express();
const port = 8080;

app.use(express.static("public"));
app.use(bodyParser.urlencoded({extended: true}));

app.get("/", (req, res) => {
    res.send("<p>Hello</p>");
});

app.listen(port, () => {
    console.log(`Server listening on port: ${port}`);
});