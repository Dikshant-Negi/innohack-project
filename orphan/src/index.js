const express = require("express");
const app = express();
const path = require("path");
const User = require("../schema/schema");
const connectdb = require("./mongodb");
const volunteer = require("../schema/volunteer");
const port = process.env.PORT || 80;
const cors = require("cors");
console.log(port);

app.use(cors());
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.set('views', path.join(__dirname, '../views'));
app.set('view engine', 'hbs');
app.use(express.static(path.join(__dirname, '../public')));

app.get('/', (req, res) => {
    res.render('index');
});

app.get('/events', (req, res) => {
    res.render('event');
});


app.post("/events", async (req, res) => {
    const timestamp = Date.now();
    const data = {
        WalletAddress: req.body.WalletAddress,
        HostName: req.body.HostName,
        NoOfVolunteers: req.body.NoOfVolunteers,
        EventDate: req.body.EventDate,
        Description: req.body.Description,
        Address: req.body.Address,
        DriveId: timestamp
    };
    try {
        await User.create(data);
        res.render('event');
    } catch (error) {
        console.error('Error saving event:', error);
        res.status(500).send("An error occurred while saving the data: " + error.message);
    }
});

app.get('/listing', async (req, res) => { 
    try {
        const data = await User.find({});
        res.render('listing', { users: data });
    } catch (error) {
        console.error('Error fetching users:', error);
        res.status(500).send('Error fetching users');
    }
});

app.get('/volunteer1', (req, res) => {
    res.render('volunteer');
});

app.post('/volunteer1', async (req, res) => {
    console.log("accepted");
    try {
        const { name, email} = req.body;
        let data = new volunteer({
            name:name,
            email:email,
        });

        await data.save();
        return res.redirect('/events');
    } catch (error) {
        console.error('Error adding volunteer:', error);
        res.status(500).send('Error adding volunteer');
    }
});
app.get('/creates', (req, res) => {
    res.render('create');
});
async function start() {
    try {
        await connectdb();
        app.listen(port, () => {
            console.log(`Server is running at http://localhost:${port}`);
        });
    } catch (error) {
        console.log("Cannot connect to database:", error);
    }
}

start();
