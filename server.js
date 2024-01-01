const express = require('express');
const mongoose = require('mongoose');
const app = express();
const bodyParser = require('body-parser');
require('dotenv').config();

app.use(bodyParser.json());

const port = process.env.PORT;
const bookrouter = require('./routes/books')


main();

async function main() {
    try {
        await mongoose.connect(process.env.ATLAS_ENV, { useNewUrlParser: true, useUnifiedTopology: true, authSource: 'admin' });
        console.log("Db connected");
    } catch (err) {
        console.error(err);
    }
}
app.use('/api/books', bookrouter)

app.listen(port, () => {
    console.log(`Server Listen to ${port}`);
});
